(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-notification-notification-module"], {
    /***/
    "./node_modules/ngx-mat-select-search/__ivy_ngcc__/fesm2015/ngx-mat-select-search.js":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/ngx-mat-select-search/__ivy_ngcc__/fesm2015/ngx-mat-select-search.js ***!
      \*******************************************************************************************/

    /*! exports provided: MatSelectSearchComponent, MatSelectSearchVersion, NgxMatSelectSearchModule, ɵa */

    /***/
    function node_modulesNgxMatSelectSearch__ivy_ngcc__Fesm2015NgxMatSelectSearchJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSelectSearchComponent", function () {
        return MatSelectSearchComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSelectSearchVersion", function () {
        return MatSelectSearchVersion;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxMatSelectSearchModule", function () {
        return NgxMatSelectSearchModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return MatSelectSearchClearDirective;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/ngx-mat-select-search/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /**
       * Directive for providing a custom clear-icon.
       * e.g.
       * <ngx-mat-select-search [formControl]="bankFilterCtrl">
       *   <mat-icon ngxMatSelectSearchClear>delete</mat-icon>
       * </ngx-mat-select-search>
       */


      var _c0 = ["searchSelectInput"];
      var _c1 = ["innerSelectSearch"];

      function MatSelectSearchComponent_mat_checkbox_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-checkbox", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function MatSelectSearchComponent_mat_checkbox_3_Template_mat_checkbox_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r6._emitSelectAllBooleanToParent($event.checked);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r1.matFormField == null ? null : ctx_r1.matFormField.color)("checked", ctx_r1.toggleAllCheckboxChecked)("indeterminate", ctx_r1.toggleAllCheckboxIndeterminate)("matTooltip", ctx_r1.toggleAllCheckboxTooltipMessage)("matTooltipPosition", ctx_r1.toogleAllCheckboxTooltipPosition);
        }
      }

      function MatSelectSearchComponent_mat_spinner_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner", 10);
        }
      }

      function MatSelectSearchComponent_button_7_ng_content_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0, 1, ["*ngIf", "clearIcon; else defaultIcon"]);
        }
      }

      function MatSelectSearchComponent_button_7_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MatSelectSearchComponent_button_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatSelectSearchComponent_button_7_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r11._reset(true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MatSelectSearchComponent_button_7_ng_content_1_Template, 1, 0, "ng-content", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MatSelectSearchComponent_button_7_ng_template_2_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.clearIcon)("ngIfElse", _r9);
        }
      }

      function MatSelectSearchComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.noEntriesFoundLabel, "\n");
        }
      }

      var _c2 = [[["", 8, "mat-select-search-custom-header-content"]], [["", "ngxMatSelectSearchClear", ""]]];

      var _c3 = function _c3(a0, a1) {
        return {
          "mat-select-search-inner-multiple": a0,
          "mat-select-search-inner-toggle-all": a1
        };
      };

      var _c4 = [".mat-select-search-custom-header-content", "[ngxMatSelectSearchClear]"];

      var MatSelectSearchClearDirective = function MatSelectSearchClearDirective() {
        _classCallCheck(this, MatSelectSearchClearDirective);
      };

      MatSelectSearchClearDirective.ɵfac = function MatSelectSearchClearDirective_Factory(t) {
        return new (t || MatSelectSearchClearDirective)();
      };

      MatSelectSearchClearDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MatSelectSearchClearDirective,
        selectors: [["", "ngxMatSelectSearchClear", ""]]
      });
      /**
       * Copyright (c) 2018 Bithost GmbH All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      var MatSelectSearchComponent_1;
      /** The max height of the select's overlay panel. */

      var SELECT_PANEL_MAX_HEIGHT = 256;
      /* tslint:disable:member-ordering component-selector */

      /**
       * Component providing an input field for searching MatSelect options.
       *
       * Example usage:
       *
       * interface Bank {
       *  id: string;
       *  name: string;
       * }
       *
       * @Component({
       *   selector: 'my-app-data-selection',
       *   template: `
       *     <mat-form-field>
       *       <mat-select [formControl]="bankCtrl" placeholder="Bank">
       *         <mat-option>
       *           <ngx-mat-select-search [formControl]="bankFilterCtrl"></ngx-mat-select-search>
       *         </mat-option>
       *         <mat-option *ngFor="let bank of filteredBanks | async" [value]="bank.id">
       *           {{bank.name}}
       *         </mat-option>
       *       </mat-select>
       *     </mat-form-field>
       *   `
       * })
       * export class DataSelectionComponent implements OnInit, OnDestroy {
       *
       *   // control for the selected bank
       *   public bankCtrl: FormControl = new FormControl();
       *   // control for the MatSelect filter keyword
       *   public bankFilterCtrl: FormControl = new FormControl();
       *
       *   // list of banks
       *   private banks: Bank[] = [{name: 'Bank A', id: 'A'}, {name: 'Bank B', id: 'B'}, {name: 'Bank C', id: 'C'}];
       *   // list of banks filtered by search keyword
       *   public filteredBanks: ReplaySubject<Bank[]> = new ReplaySubject<Bank[]>(1);
       *
       *   // Subject that emits when the component has been destroyed.
       *   private _onDestroy = new Subject<void>();
       *
       *
       *   ngOnInit() {
       *     // load the initial bank list
       *     this.filteredBanks.next(this.banks.slice());
       *     // listen for search field value changes
       *     this.bankFilterCtrl.valueChanges
       *       .pipe(takeUntil(this._onDestroy))
       *       .subscribe(() => {
       *         this.filterBanks();
       *       });
       *   }
       *
       *   ngOnDestroy() {
       *     this._onDestroy.next();
       *     this._onDestroy.complete();
       *   }
       *
       *   private filterBanks() {
       *     if (!this.banks) {
       *       return;
       *     }
       *
       *     // get the search keyword
       *     let search = this.bankFilterCtrl.value;
       *     if (!search) {
       *       this.filteredBanks.next(this.banks.slice());
       *       return;
       *     } else {
       *       search = search.toLowerCase();
       *     }
       *
       *     // filter the banks
       *     this.filteredBanks.next(
       *       this.banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1)
       *     );
       *   }
       * }
       */

      var MatSelectSearchComponent = MatSelectSearchComponent_1 = /*#__PURE__*/function () {
        function MatSelectSearchComponent(matSelect, changeDetectorRef, _viewportRuler) {
          var _this = this;

          var matOption = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
          var liveAnnouncer = arguments.length > 4 ? arguments[4] : undefined;
          var matFormField = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;

          _classCallCheck(this, MatSelectSearchComponent);

          this.matSelect = matSelect;
          this.changeDetectorRef = changeDetectorRef;
          this._viewportRuler = _viewportRuler;
          this.matOption = matOption;
          this.liveAnnouncer = liveAnnouncer;
          this.matFormField = matFormField;
          /** Label of the search placeholder */

          this.placeholderLabel = 'Suche';
          /** Type of the search input field */

          this.type = 'text';
          /** Label to be shown when no entries are found. Set to null if no message should be shown. */

          this.noEntriesFoundLabel = 'Keine Optionen gefunden';
          /**
           *  Text that is appended to the currently active item label announced by screen readers,
           *  informing the user of the current index, value and total options.
           *  eg: Bank R (Germany) 1 of 6
          */

          this.indexAndLengthScreenReaderText = ' of ';
          /**
            * Whether or not the search field should be cleared after the dropdown menu is closed.
            * Useful for server-side filtering. See [#3](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/3)
            */

          this.clearSearchInput = true;
          /** Whether to show the search-in-progress indicator */

          this.searching = false;
          /** Disables initial focusing of the input field */

          this.disableInitialFocus = false;
          /** Enable clear input on escape pressed */

          this.enableClearOnEscapePressed = false;
          /**
           * Prevents home / end key being propagated to mat-select,
           * allowing to move the cursor within the search input instead of navigating the options
           */

          this.preventHomeEndKeyPropagation = false;
          /** Disables scrolling to active options when option list changes. Useful for server-side search */

          this.disableScrollToActiveOnOptionsChanged = false;
          /** Adds 508 screen reader support for search box */

          this.ariaLabel = 'dropdown search';
          /** Whether to show Select All Checkbox (for mat-select[multi=true]) */

          this.showToggleAllCheckbox = false;
          /** select all checkbox checked state */

          this.toggleAllCheckboxChecked = false;
          /** select all checkbox indeterminate state */

          this.toggleAllCheckboxIndeterminate = false;
          /** Display a message in a tooltip on the toggle-all checkbox */

          this.toggleAllCheckboxTooltipMessage = '';
          /** Define the position of the tooltip on the toggle-all checkbox. */

          this.toogleAllCheckboxTooltipPosition = 'below';
          /** Show/Hide the search clear button of the search input */

          this.hideClearSearchButton = false;
          /**
           * Always restore selected options on selectionChange for mode multi (e.g. for lazy loading/infinity scrolling).
           * Defaults to false, so selected options are only restored while filtering is active.
           */

          this.alwaysRestoreSelectedOptionsMulti = false;
          /** Output emitter to send to parent component with the toggle all boolean */

          this.toggleAll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

          this.onTouched = function (_) {};

          this._options$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["BehaviorSubject"](null);
          this.optionsList$ = this._options$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])(function (_options) {
            return _options ? _options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (options) {
              return options.toArray();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(_options.toArray())) : Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(null);
          }));
          this.optionsLength$ = this.optionsList$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (options) {
            return options ? options.length : 0;
          }));
          this._formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
          /** whether to show the no entries found message */

          this._showNoEntriesFound$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["combineLatest"])([this._formControl.valueChanges, this.optionsLength$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                value = _ref2[0],
                optionsLength = _ref2[1];

            return _this.noEntriesFoundLabel && value && optionsLength === _this.getOptionsLengthOffset();
          }));
          /** Subject that emits when the component has been destroyed. */

          this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        }

        _createClass(MatSelectSearchComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            // set custom panel class
            var panelClass = 'mat-select-search-panel';

            if (this.matSelect.panelClass) {
              if (Array.isArray(this.matSelect.panelClass)) {
                this.matSelect.panelClass.push(panelClass);
              } else if (typeof this.matSelect.panelClass === 'string') {
                this.matSelect.panelClass = [this.matSelect.panelClass, panelClass];
              } else if (typeof this.matSelect.panelClass === 'object') {
                this.matSelect.panelClass[panelClass] = true;
              }
            } else {
              this.matSelect.panelClass = panelClass;
            } // set custom mat-option class if the component was placed inside a mat-option


            if (this.matOption) {
              this.matOption.disabled = true;

              this.matOption._getHostElement().classList.add('contains-mat-select-search');
            } else {
              console.error('<ngx-mat-select-search> must be placed inside a <mat-option> element');
            } // when the select dropdown panel is opened or closed


            this.matSelect.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["delay"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._onDestroy)).subscribe(function (opened) {
              if (opened) {
                _this2.updateInputWidth(); // focus the search field when opening


                if (!_this2.disableInitialFocus) {
                  _this2._focus();
                }
              } else {
                // clear it when closing
                if (_this2.clearSearchInput) {
                  _this2._reset();
                }
              }
            }); // set the first item active after the options changed

            this.matSelect.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._onDestroy)).subscribe(function () {
              if (_this2.matSelect._keyManager) {
                _this2.matSelect._keyManager.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(_this2._onDestroy)).subscribe(function () {
                  return _this2.adjustScrollTopToFitActiveOptionIntoView();
                });
              } else {
                console.log('_keyManager was not initialized.');
              }

              _this2._options = _this2.matSelect.options; // Closure variable for tracking the most recent first option.
              // In order to avoid avoid causing the list to
              // scroll to the top when options are added to the bottom of
              // the list (eg: infinite scroll), we compare only
              // the changes to the first options to determine if we
              // should set the first item as active.
              // This prevents unnecessary scrolling to the top of the list
              // when options are appended, but allows the first item
              // in the list to be set as active by default when there
              // is no active selection

              var previousFirstOption = _this2._options.toArray()[_this2.getOptionsLengthOffset()];

              _this2._options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(_this2._onDestroy)).subscribe(function () {
                // avoid "expression has been changed" error
                setTimeout(function () {
                  // Convert the QueryList to an array
                  var options = _this2._options.toArray(); // The true first item is offset by 1


                  var currentFirstOption = options[_this2.getOptionsLengthOffset()];

                  var keyManager = _this2.matSelect._keyManager;

                  if (keyManager && _this2.matSelect.panelOpen) {
                    // set first item active and input width
                    // Check to see if the first option in these changes is different from the previous.
                    var firstOptionIsChanged = !_this2.matSelect.compareWith(previousFirstOption, currentFirstOption); // CASE: The first option is different now.
                    // Indiciates we should set it as active and scroll to the top.

                    if (firstOptionIsChanged || !keyManager.activeItem || !options.find(function (option) {
                      return _this2.matSelect.compareWith(option, keyManager.activeItem);
                    })) {
                      keyManager.setFirstItemActive();
                    } // wait for panel width changes


                    setTimeout(function () {
                      _this2.updateInputWidth();
                    });

                    if (!_this2.disableScrollToActiveOnOptionsChanged) {
                      _this2.adjustScrollTopToFitActiveOptionIntoView();
                    }
                  } // Update our reference


                  previousFirstOption = currentFirstOption;
                });
              });
            }); // add or remove css class depending on whether to show the no entries found message
            // note: this is hacky

            this._showNoEntriesFound$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._onDestroy)).subscribe(function (showNoEntriesFound) {
              // set no entries found class on mat option
              if (_this2.matOption) {
                if (showNoEntriesFound) {
                  _this2.matOption._getHostElement().classList.add('mat-select-search-no-entries-found');
                } else {
                  _this2.matOption._getHostElement().classList.remove('mat-select-search-no-entries-found');
                }
              }
            }); // resize the input width when the viewport is resized, i.e. the trigger width could potentially be resized


            this._viewportRuler.change().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._onDestroy)).subscribe(function () {
              if (_this2.matSelect.panelOpen) {
                _this2.updateInputWidth();
              }
            });

            this.initMultipleHandling();
            this.optionsList$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._onDestroy)).subscribe(function () {
              // update view when available options change
              _this2.changeDetectorRef.markForCheck();
            });
          }
        }, {
          key: "_emitSelectAllBooleanToParent",
          value: function _emitSelectAllBooleanToParent(state) {
            this.toggleAll.emit(state);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._onDestroy.next();

            this._onDestroy.complete();
          }
        }, {
          key: "_isToggleAllCheckboxVisible",
          value: function _isToggleAllCheckboxVisible() {
            return this.matSelect.multiple && this.showToggleAllCheckbox;
          }
          /**
           * Handles the key down event with MatSelect.
           * Allows e.g. selecting with enter key, navigation with arrow keys, etc.
           * @param event
           */

        }, {
          key: "_handleKeydown",
          value: function _handleKeydown(event) {
            var _this3 = this;

            // Prevent propagation for all alphanumeric characters in order to avoid selection issues
            if (event.key && event.key.length === 1 || event.keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["A"] && event.keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["Z"] || event.keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["ZERO"] && event.keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["NINE"] || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["SPACE"] || this.preventHomeEndKeyPropagation && (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["HOME"] || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["END"])) {
              event.stopPropagation();
            }

            if (this.matSelect.multiple && event.key && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["ENTER"]) {
              // Regain focus after multiselect, so we can further type
              setTimeout(function () {
                return _this3._focus();
              });
            } // Special case if click Escape, if input is empty, close the dropdown, if not, empty out the search field


            if (this.enableClearOnEscapePressed === true && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["ESCAPE"] && this.value) {
              this._reset(true);

              event.stopPropagation();
            }
          }
          /**
           * Handles the key up event with MatSelect.
           * Allows e.g. the announcing of the currently activeDescendant by screen readers.
           */

        }, {
          key: "_handleKeyup",
          value: function _handleKeyup(event) {
            if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["UP_ARROW"] || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["DOWN_ARROW"]) {
              var ariaActiveDescendantId = this.matSelect._getAriaActiveDescendant();

              var index = this._options.toArray().findIndex(function (item) {
                return item.id === ariaActiveDescendantId;
              });

              if (index !== -1) {
                var activeDescendant = this._options.toArray()[index];

                this.liveAnnouncer.announce(activeDescendant.viewValue + ' ' + this.getAriaIndex(index) + this.indexAndLengthScreenReaderText + this.getAriaLength());
              }
            }
          }
          /**
           * Calculate the index of the current option, taking the offset to length into account.
           * examples:
           *    Case 1 [Search, 1, 2, 3] will have offset of 1, due to search and will read index of total.
           *    Case 2 [1, 2, 3] will have offset of 0 and will read index +1 of total.
           */

        }, {
          key: "getAriaIndex",
          value: function getAriaIndex(optionIndex) {
            if (this.getOptionsLengthOffset() === 0) {
              return optionIndex + 1;
            }

            return optionIndex;
          }
          /**
           * Calculate the length of the options, taking the offset to length into account.
           * examples:
           *    Case 1 [Search, 1, 2, 3] will have length of options.length -1, due to search.
           *    Case 2 [1, 2, 3] will have length of options.length.
           */

        }, {
          key: "getAriaLength",
          value: function getAriaLength() {
            return this._options.toArray().length - this.getOptionsLengthOffset();
          }
        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this._lastExternalInputValue = value;

            this._formControl.setValue(value);

            this.changeDetectorRef.markForCheck();
          }
        }, {
          key: "onBlur",
          value: function onBlur() {
            this.onTouched();
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            var _this4 = this;

            this._formControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (value) {
              return value !== _this4._lastExternalInputValue;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(function () {
              return _this4._lastExternalInputValue = undefined;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._onDestroy)).subscribe(fn);
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * Focuses the search input field
           */

        }, {
          key: "_focus",
          value: function _focus() {
            if (!this.searchSelectInput || !this.matSelect.panel) {
              return;
            } // save and restore scrollTop of panel, since it will be reset by focus()
            // note: this is hacky


            var panel = this.matSelect.panel.nativeElement;
            var scrollTop = panel.scrollTop; // focus

            this.searchSelectInput.nativeElement.focus();
            panel.scrollTop = scrollTop;
          }
          /**
           * Resets the current search value
           * @param focus whether to focus after resetting
           */

        }, {
          key: "_reset",
          value: function _reset(focus) {
            this._formControl.setValue('');

            if (focus) {
              this._focus();
            }
          }
          /**
           * Initializes handling <mat-select [multiple]="true">
           * Note: to improve this code, mat-select should be extended to allow disabling resetting the selection while filtering.
           */

        }, {
          key: "initMultipleHandling",
          value: function initMultipleHandling() {
            var _this5 = this;

            if (!this.matSelect.ngControl) {
              if (this.matSelect.multiple) {
                // note: the access to matSelect.ngControl (instead of matSelect.value / matSelect.valueChanges)
                // is necessary to properly work in multi-selection mode.
                console.error('the mat-select containing ngx-mat-select-search must have a ngModel or formControl directive when multiple=true');
              }

              return;
            } // if <mat-select [multiple]="true">
            // store previously selected values and restore them when they are deselected
            // because the option is not available while we are currently filtering


            this.previousSelectedValues = this.matSelect.ngControl.value;
            this.matSelect.ngControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._onDestroy)).subscribe(function (values) {
              var restoreSelectedValues = false;

              if (_this5.matSelect.multiple) {
                if ((_this5.alwaysRestoreSelectedOptionsMulti || _this5._formControl.value && _this5._formControl.value.length) && _this5.previousSelectedValues && Array.isArray(_this5.previousSelectedValues)) {
                  if (!values || !Array.isArray(values)) {
                    values = [];
                  }

                  var optionValues = _this5.matSelect.options.map(function (option) {
                    return option.value;
                  });

                  _this5.previousSelectedValues.forEach(function (previousValue) {
                    if (!values.some(function (v) {
                      return _this5.matSelect.compareWith(v, previousValue);
                    }) && !optionValues.some(function (v) {
                      return _this5.matSelect.compareWith(v, previousValue);
                    })) {
                      // if a value that was selected before is deselected and not found in the options, it was deselected
                      // due to the filtering, so we restore it.
                      values.push(previousValue);
                      restoreSelectedValues = true;
                    }
                  });
                }
              }

              _this5.previousSelectedValues = values;

              if (restoreSelectedValues) {
                _this5.matSelect._onChange(values);
              }
            });
          }
          /**
           * Scrolls the currently active option into the view if it is not yet visible.
           */

        }, {
          key: "adjustScrollTopToFitActiveOptionIntoView",
          value: function adjustScrollTopToFitActiveOptionIntoView() {
            if (this.matSelect.panel && this.matSelect.options.length > 0) {
              var matOptionHeight = this.getMatOptionHeight();
              var activeOptionIndex = this.matSelect._keyManager.activeItemIndex || 0;
              var labelCount = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["_countGroupLabelsBeforeOption"])(activeOptionIndex, this.matSelect.options, this.matSelect.optionGroups); // If the component is in a MatOption, the activeItemIndex will be offset by one.

              var indexOfOptionToFitIntoView = (this.matOption ? -1 : 0) + labelCount + activeOptionIndex;
              var currentScrollTop = this.matSelect.panel.nativeElement.scrollTop;
              var searchInputHeight = this.innerSelectSearch.nativeElement.offsetHeight;
              var amountOfVisibleOptions = Math.floor((SELECT_PANEL_MAX_HEIGHT - searchInputHeight) / matOptionHeight);
              var indexOfFirstVisibleOption = Math.round((currentScrollTop + searchInputHeight) / matOptionHeight) - 1;

              if (indexOfFirstVisibleOption >= indexOfOptionToFitIntoView) {
                this.matSelect.panel.nativeElement.scrollTop = indexOfOptionToFitIntoView * matOptionHeight;
              } else if (indexOfFirstVisibleOption + amountOfVisibleOptions <= indexOfOptionToFitIntoView) {
                this.matSelect.panel.nativeElement.scrollTop = (indexOfOptionToFitIntoView + 1) * matOptionHeight - (SELECT_PANEL_MAX_HEIGHT - searchInputHeight);
              }
            }
          }
          /**
           *  Set the width of the innerSelectSearch to fit even custom scrollbars
           *  And support all Operation Systems
           */

        }, {
          key: "updateInputWidth",
          value: function updateInputWidth() {
            if (!this.innerSelectSearch || !this.innerSelectSearch.nativeElement) {
              return;
            }

            var element = this.innerSelectSearch.nativeElement;
            var panelElement;

            while (element = element.parentElement) {
              if (element.classList.contains('mat-select-panel')) {
                panelElement = element;
                break;
              }
            }

            if (panelElement) {
              this.innerSelectSearch.nativeElement.style.width = panelElement.clientWidth + 'px';
            }
          }
        }, {
          key: "getMatOptionHeight",
          value: function getMatOptionHeight() {
            if (this.matSelect.options.length > 0) {
              return this.matSelect.options.first._getHostElement().getBoundingClientRect().height;
            }

            return 0;
          }
          /**
           * Determine the offset to length that can be caused by the optional matOption used as a search input.
           */

        }, {
          key: "getOptionsLengthOffset",
          value: function getOptionsLengthOffset() {
            if (this.matOption) {
              return 1;
            } else {
              return 0;
            }
          }
        }, {
          key: "isInsideMatOption",
          get: function get() {
            return !!this.matOption;
          }
          /** Current search value */

        }, {
          key: "value",
          get: function get() {
            return this._formControl.value;
          }
          /** Reference to the MatSelect options */

        }, {
          key: "_options",
          set: function set(_options) {
            this._options$.next(_options);
          },
          get: function get() {
            return this._options$.getValue();
          }
        }]);

        return MatSelectSearchComponent;
      }();

      MatSelectSearchComponent.ɵfac = function MatSelectSearchComponent_Factory(t) {
        return new (t || MatSelectSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["LiveAnnouncer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], 8));
      };

      MatSelectSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MatSelectSearchComponent,
        selectors: [["ngx-mat-select-search"]],
        contentQueries: function MatSelectSearchComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatSelectSearchClearDirective, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.clearIcon = _t.first);
          }
        },
        viewQuery: function MatSelectSearchComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.searchSelectInput = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.innerSelectSearch = _t.first);
          }
        },
        hostVars: 2,
        hostBindings: function MatSelectSearchComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-select-search-inside-mat-option", ctx.isInsideMatOption);
          }
        },
        inputs: {
          placeholderLabel: "placeholderLabel",
          type: "type",
          noEntriesFoundLabel: "noEntriesFoundLabel",
          indexAndLengthScreenReaderText: "indexAndLengthScreenReaderText",
          clearSearchInput: "clearSearchInput",
          searching: "searching",
          disableInitialFocus: "disableInitialFocus",
          enableClearOnEscapePressed: "enableClearOnEscapePressed",
          preventHomeEndKeyPropagation: "preventHomeEndKeyPropagation",
          disableScrollToActiveOnOptionsChanged: "disableScrollToActiveOnOptionsChanged",
          ariaLabel: "ariaLabel",
          showToggleAllCheckbox: "showToggleAllCheckbox",
          toggleAllCheckboxChecked: "toggleAllCheckboxChecked",
          toggleAllCheckboxIndeterminate: "toggleAllCheckboxIndeterminate",
          toggleAllCheckboxTooltipMessage: "toggleAllCheckboxTooltipMessage",
          toogleAllCheckboxTooltipPosition: "toogleAllCheckboxTooltipPosition",
          hideClearSearchButton: "hideClearSearchButton",
          alwaysRestoreSelectedOptionsMulti: "alwaysRestoreSelectedOptionsMulti"
        },
        outputs: {
          toggleAll: "toggleAll"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
            return MatSelectSearchComponent_1;
          }),
          multi: true
        }])],
        ngContentSelectors: _c4,
        decls: 11,
        vars: 14,
        consts: [["matInput", "", 1, "mat-select-search-input", "mat-select-search-hidden"], [1, "mat-select-search-inner", "mat-typography", "mat-datepicker-content", "mat-tab-header", 3, "ngClass"], ["innerSelectSearch", ""], ["class", "mat-select-search-toggle-all-checkbox", "matTooltipClass", "ngx-mat-select-search-toggle-all-tooltip", 3, "color", "checked", "indeterminate", "matTooltip", "matTooltipPosition", "change", 4, "ngIf"], ["autocomplete", "off", 1, "mat-select-search-input", "mat-input-element", 3, "type", "formControl", "placeholder", "keydown", "keyup", "blur"], ["searchSelectInput", ""], ["class", "mat-select-search-spinner", "diameter", "16", 4, "ngIf"], ["mat-button", "", "mat-icon-button", "", "aria-label", "Clear", "class", "mat-select-search-clear", 3, "click", 4, "ngIf"], ["class", "mat-select-search-no-entries-found", 4, "ngIf"], ["matTooltipClass", "ngx-mat-select-search-toggle-all-tooltip", 1, "mat-select-search-toggle-all-checkbox", 3, "color", "checked", "indeterminate", "matTooltip", "matTooltipPosition", "change"], ["diameter", "16", 1, "mat-select-search-spinner"], ["mat-button", "", "mat-icon-button", "", "aria-label", "Clear", 1, "mat-select-search-clear", 3, "click"], [4, "ngIf", "ngIfElse"], ["defaultIcon", ""], [1, "mat-select-search-no-entries-found"]],
        template: function MatSelectSearchComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MatSelectSearchComponent_mat_checkbox_3_Template, 1, 5, "mat-checkbox", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function MatSelectSearchComponent_Template_input_keydown_4_listener($event) {
              return ctx._handleKeydown($event);
            })("keyup", function MatSelectSearchComponent_Template_input_keyup_4_listener($event) {
              return ctx._handleKeyup($event);
            })("blur", function MatSelectSearchComponent_Template_input_blur_4_listener() {
              return ctx.onBlur();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MatSelectSearchComponent_mat_spinner_6_Template, 1, 0, "mat-spinner", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, MatSelectSearchComponent_button_7_Template, 4, 2, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MatSelectSearchComponent_div_9_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "async");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c3, ctx.matSelect.multiple, ctx._isToggleAllCheckboxVisible()));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._isToggleAllCheckboxVisible());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.type)("formControl", ctx._formControl)("placeholder", ctx.placeholderLabel);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.ariaLabel);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.searching);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.hideClearSearchButton && ctx.value && !ctx.searching);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 9, ctx._showNoEntriesFound$));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckbox"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltip"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatSpinner"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["AsyncPipe"]],
        styles: [".mat-select-search-hidden[_ngcontent-%COMP%]{visibility:hidden}.mat-select-search-inner[_ngcontent-%COMP%]{position:absolute;top:0;width:100%;border-bottom-width:1px;border-bottom-style:solid;z-index:100;font-size:inherit;box-shadow:none;border-radius:4px 4px 0 0;-webkit-transform:translate3d(0,0,0)}.mat-select-search-inner.mat-select-search-inner-multiple[_ngcontent-%COMP%]{width:100%}.mat-select-search-inner.mat-select-search-inner-multiple.mat-select-search-inner-toggle-all[_ngcontent-%COMP%]{display:flex;align-items:center}.mat-select-search-inner[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{flex-basis:auto}.mat-select-search-inner[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]:-ms-input-placeholder{-ms-user-select:text}  .mat-select-search-panel{transform:none!important;overflow-x:hidden}.mat-select-search-input[_ngcontent-%COMP%]{padding:16px 44px 16px 16px;box-sizing:border-box;width:100%}[dir=rtl][_nghost-%COMP%]   .mat-select-search-input[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .mat-select-search-input[_ngcontent-%COMP%]{padding-right:16px;padding-left:44px}.mat-select-search-no-entries-found[_ngcontent-%COMP%]{padding:16px}.mat-select-search-clear[_ngcontent-%COMP%]{position:absolute;right:4px;top:5px}[dir=rtl][_nghost-%COMP%]   .mat-select-search-clear[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .mat-select-search-clear[_ngcontent-%COMP%]{right:auto;left:4px}.mat-select-search-spinner[_ngcontent-%COMP%]{position:absolute;right:16px;top:calc(50% - 8px)}[dir=rtl][_nghost-%COMP%]   .mat-select-search-spinner[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .mat-select-search-spinner[_ngcontent-%COMP%]{right:auto;left:16px}.mat-select-search-inside-mat-option[_nghost-%COMP%]   .mat-select-search-input[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0;height:3em;line-height:3em}.mat-select-search-inside-mat-option[_nghost-%COMP%]   .mat-select-search-clear[_ngcontent-%COMP%]{top:3px}  .mat-option[aria-disabled=true].contains-mat-select-search{position:static;padding:0}  .mat-option[aria-disabled=true].contains-mat-select-search .mat-icon{margin-right:0;margin-left:0}  .mat-option[aria-disabled=true].contains-mat-select-search .mat-option-pseudo-checkbox{display:none}  .mat-option[aria-disabled=true].contains-mat-select-search.mat-select-search-no-entries-found{height:6em}.mat-select-search-toggle-all-checkbox[_ngcontent-%COMP%]{padding-left:16px;padding-bottom:2px}[dir=rtl][_nghost-%COMP%]   .mat-select-search-toggle-all-checkbox[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .mat-select-search-toggle-all-checkbox[_ngcontent-%COMP%]{padding-left:0;padding-right:16px}"],
        changeDetection: 0
      });

      MatSelectSearchComponent.ctorParameters = function () {
        return [{
          type: _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ViewportRuler"]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"]]
          }]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["LiveAnnouncer"]
        }, {
          type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"]]
          }]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MatSelectSearchComponent.prototype, "placeholderLabel", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MatSelectSearchComponent.prototype, "type", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MatSelectSearchComponent.prototype, "noEntriesFoundLabel", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MatSelectSearchComponent.prototype, "indexAndLengthScreenReaderText", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MatSelectSearchComponent.prototype, "clearSearchInput", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MatSelectSearchComponent.prototype, "searching", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MatSelectSearchComponent.prototype, "disableInitialFocus", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MatSelectSearchComponent.prototype, "enableClearOnEscapePressed", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MatSelectSearchComponent.prototype, "preventHomeEndKeyPropagation", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MatSelectSearchComponent.prototype, "disableScrollToActiveOnOptionsChanged", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MatSelectSearchComponent.prototype, "ariaLabel", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MatSelectSearchComponent.prototype, "showToggleAllCheckbox", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MatSelectSearchComponent.prototype, "toggleAllCheckboxChecked", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MatSelectSearchComponent.prototype, "toggleAllCheckboxIndeterminate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MatSelectSearchComponent.prototype, "toggleAllCheckboxTooltipMessage", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MatSelectSearchComponent.prototype, "toogleAllCheckboxTooltipPosition", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MatSelectSearchComponent.prototype, "hideClearSearchButton", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MatSelectSearchComponent.prototype, "alwaysRestoreSelectedOptionsMulti", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MatSelectSearchComponent.prototype, "toggleAll", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchSelectInput', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        "static": true
      })], MatSelectSearchComponent.prototype, "searchSelectInput", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('innerSelectSearch', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        "static": true
      })], MatSelectSearchComponent.prototype, "innerSelectSearch", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(MatSelectSearchClearDirective, {
        "static": false
      })], MatSelectSearchComponent.prototype, "clearIcon", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.mat-select-search-inside-mat-option')], MatSelectSearchComponent.prototype, "isInsideMatOption", null);
      MatSelectSearchComponent = MatSelectSearchComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"]))], MatSelectSearchComponent);
      /**
       * Copyright (c) 2018 Bithost GmbH All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      var MatSelectSearchVersion = '3.3.2';

      var NgxMatSelectSearchModule = function NgxMatSelectSearchModule() {
        _classCallCheck(this, NgxMatSelectSearchModule);
      };

      NgxMatSelectSearchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: NgxMatSelectSearchModule
      });
      NgxMatSelectSearchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function NgxMatSelectSearchModule_Factory(t) {
          return new (t || NgxMatSelectSearchModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_16__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"]]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSelectSearchClearDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[ngxMatSelectSearchClear]'
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSelectSearchComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'ngx-mat-select-search',
            template: "<!-- Placeholder to adjust vertical offset of the mat-option elements -->\n<input matInput class=\"mat-select-search-input mat-select-search-hidden\"/>\n\n<!-- Note: the  mat-datepicker-content mat-tab-header are needed to inherit the material theme colors, see PR #22 -->\n<div\n      #innerSelectSearch\n      class=\"mat-select-search-inner mat-typography mat-datepicker-content mat-tab-header\"\n      [ngClass]=\"{'mat-select-search-inner-multiple': matSelect.multiple, 'mat-select-search-inner-toggle-all': _isToggleAllCheckboxVisible() }\">\n\n  <mat-checkbox *ngIf=\"_isToggleAllCheckboxVisible()\"\n                [color]=\"matFormField?.color\"\n                class=\"mat-select-search-toggle-all-checkbox\"\n                [checked]=\"toggleAllCheckboxChecked\"\n                [indeterminate]=\"toggleAllCheckboxIndeterminate\"\n                [matTooltip]=\"toggleAllCheckboxTooltipMessage\"\n                matTooltipClass=\"ngx-mat-select-search-toggle-all-tooltip\"\n                [matTooltipPosition]=\"toogleAllCheckboxTooltipPosition\"\n                (change)=\"_emitSelectAllBooleanToParent($event.checked)\"\n  ></mat-checkbox>\n\n  <input class=\"mat-select-search-input mat-input-element\"\n         autocomplete=\"off\"\n         [type]=\"type\"\n         [formControl]=\"_formControl\"\n         #searchSelectInput\n         (keydown)=\"_handleKeydown($event)\"\n         (keyup)=\"_handleKeyup($event)\"\n         (blur)=\"onBlur()\"\n         [placeholder]=\"placeholderLabel\"\n         [attr.aria-label]=\"ariaLabel\"\n  />\n  <mat-spinner *ngIf=\"searching\"\n          class=\"mat-select-search-spinner\"\n          diameter=\"16\"></mat-spinner>\n\n  <button mat-button\n          *ngIf=\"!hideClearSearchButton && value && !searching\"\n          mat-icon-button\n          aria-label=\"Clear\"\n          (click)=\"_reset(true)\"\n          class=\"mat-select-search-clear\">\n    <ng-content *ngIf=\"clearIcon; else defaultIcon\" select=\"[ngxMatSelectSearchClear]\"></ng-content>\n    <ng-template #defaultIcon>\n      <mat-icon>close</mat-icon>\n    </ng-template>\n  </button>\n\n  <ng-content select=\".mat-select-search-custom-header-content\"></ng-content>\n\n</div>\n\n<div *ngIf=\"_showNoEntriesFound$ | async\"\n     class=\"mat-select-search-no-entries-found\">\n  {{noEntriesFoundLabel}}\n</div>\n<!--\nCopyright (c) 2018 Bithost GmbH All Rights Reserved.\n\nUse of this source code is governed by an MIT-style license that can be\nfound in the LICENSE file at https://angular.io/license\n-->\n",
            providers: [{
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
              useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
                return MatSelectSearchComponent_1;
              }),
              multi: true
            }],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-select-search-hidden{visibility:hidden}.mat-select-search-inner{position:absolute;top:0;width:100%;border-bottom-width:1px;border-bottom-style:solid;z-index:100;font-size:inherit;box-shadow:none;border-radius:4px 4px 0 0;-webkit-transform:translate3d(0,0,0)}.mat-select-search-inner.mat-select-search-inner-multiple{width:100%}.mat-select-search-inner.mat-select-search-inner-multiple.mat-select-search-inner-toggle-all{display:flex;align-items:center}.mat-select-search-inner .mat-input-element{flex-basis:auto}.mat-select-search-inner .mat-input-element:-ms-input-placeholder{-ms-user-select:text}::ng-deep .mat-select-search-panel{transform:none!important;overflow-x:hidden}.mat-select-search-input{padding:16px 44px 16px 16px;box-sizing:border-box;width:100%}:host-context([dir=rtl]) .mat-select-search-input{padding-right:16px;padding-left:44px}.mat-select-search-no-entries-found{padding:16px}.mat-select-search-clear{position:absolute;right:4px;top:5px}:host-context([dir=rtl]) .mat-select-search-clear{right:auto;left:4px}.mat-select-search-spinner{position:absolute;right:16px;top:calc(50% - 8px)}:host-context([dir=rtl]) .mat-select-search-spinner{right:auto;left:16px}:host.mat-select-search-inside-mat-option .mat-select-search-input{padding-top:0;padding-bottom:0;height:3em;line-height:3em}:host.mat-select-search-inside-mat-option .mat-select-search-clear{top:3px}::ng-deep .mat-option[aria-disabled=true].contains-mat-select-search{position:static;padding:0}::ng-deep .mat-option[aria-disabled=true].contains-mat-select-search .mat-icon{margin-right:0;margin-left:0}::ng-deep .mat-option[aria-disabled=true].contains-mat-select-search .mat-option-pseudo-checkbox{display:none}::ng-deep .mat-option[aria-disabled=true].contains-mat-select-search.mat-select-search-no-entries-found{height:6em}.mat-select-search-toggle-all-checkbox{padding-left:16px;padding-bottom:2px}:host-context([dir=rtl]) .mat-select-search-toggle-all-checkbox{padding-left:0;padding-right:16px}"]
          }]
        }], function () {
          return [{
            type: _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ViewportRuler"]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"]]
            }]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["LiveAnnouncer"]
          }, {
            type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"]]
            }]
          }];
        }, {
          placeholderLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          noEntriesFoundLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          indexAndLengthScreenReaderText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          clearSearchInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          searching: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          disableInitialFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          enableClearOnEscapePressed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          preventHomeEndKeyPropagation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          disableScrollToActiveOnOptionsChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          showToggleAllCheckbox: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          toggleAllCheckboxChecked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          toggleAllCheckboxIndeterminate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          toggleAllCheckboxTooltipMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          toogleAllCheckboxTooltipPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          hideClearSearchButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          alwaysRestoreSelectedOptionsMulti: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          toggleAll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          isInsideMatOption: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.mat-select-search-inside-mat-option']
          }],
          searchSelectInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['searchSelectInput', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
              "static": true
            }]
          }],
          innerSelectSearch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['innerSelectSearch', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
              "static": true
            }]
          }],
          clearIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [MatSelectSearchClearDirective, {
              "static": false
            }]
          }]
        });
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgxMatSelectSearchModule, {
          declarations: function declarations() {
            return [MatSelectSearchComponent, MatSelectSearchClearDirective];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_16__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"]];
          },
          exports: function exports() {
            return [MatSelectSearchComponent, MatSelectSearchClearDirective];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxMatSelectSearchModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"]],
            declarations: [MatSelectSearchComponent, MatSelectSearchClearDirective],
            exports: [MatSelectSearchComponent, MatSelectSearchClearDirective]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-mat-select-search.js.map

      /***/

    },

    /***/
    "./node_modules/ngx-mat-select-search/node_modules/tslib/tslib.es6.js":
    /*!****************************************************************************!*\
      !*** ./node_modules/ngx-mat-select-search/node_modules/tslib/tslib.es6.js ***!
      \****************************************************************************/

    /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

    /***/
    function node_modulesNgxMatSelectSearchNode_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__extends", function () {
        return __extends;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__assign", function () {
        return _assign;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__rest", function () {
        return __rest;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__decorate", function () {
        return __decorate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__param", function () {
        return __param;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__metadata", function () {
        return __metadata;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
        return __awaiter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__generator", function () {
        return __generator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
        return __createBinding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
        return __exportStar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__values", function () {
        return __values;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__read", function () {
        return __read;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__spread", function () {
        return __spread;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
        return __spreadArrays;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__await", function () {
        return __await;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
        return __asyncGenerator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
        return __asyncDelegator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
        return __asyncValues;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
        return __makeTemplateObject;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__importStar", function () {
        return __importStar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
        return __importDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
        return __classPrivateFieldGet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
        return __classPrivateFieldSet;
      });
      /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
      
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
      
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */

      /* global Reflect, Promise */


      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      function __extends(d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      }

      var _assign = function __assign() {
        _assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];

            for (var p in s) {
              if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
          }

          return t;
        };

        return _assign.apply(this, arguments);
      };

      function __rest(s, e) {
        var t = {};

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
        }

        if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
        }
        return t;
      }

      function __decorate(decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }

      function __param(paramIndex, decorator) {
        return function (target, key) {
          decorator(target, key, paramIndex);
        };
      }

      function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
      }

      function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      }

      function __generator(thisArg, body) {
        var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
            f,
            y,
            t,
            g;
        return g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
          return this;
        }), g;

        function verb(n) {
          return function (v) {
            return step([n, v]);
          };
        }

        function step(op) {
          if (f) throw new TypeError("Generator is already executing.");

          while (_) {
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];

              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;

                case 4:
                  _.label++;
                  return {
                    value: op[1],
                    done: false
                  };

                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;

                case 7:
                  op = _.ops.pop();

                  _.trys.pop();

                  continue;

                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }

                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }

                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }

                  if (t && _.label < t[2]) {
                    _.label = t[2];

                    _.ops.push(op);

                    break;
                  }

                  if (t[2]) _.ops.pop();

                  _.trys.pop();

                  continue;
              }

              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          }

          if (op[0] & 5) throw op[1];
          return {
            value: op[0] ? op[1] : void 0,
            done: true
          };
        }
      }

      function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      }

      function __exportStar(m, exports) {
        for (var p in m) {
          if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator,
            m = s && o[s],
            i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
          next: function next() {
            if (o && i >= o.length) o = void 0;
            return {
              value: o && o[i++],
              done: !o
            };
          }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }

      function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o),
            r,
            ar = [],
            e;

        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
            ar.push(r.value);
          }
        } catch (error) {
          e = {
            error: error
          };
        } finally {
          try {
            if (r && !r.done && (m = i["return"])) m.call(i);
          } finally {
            if (e) throw e.error;
          }
        }

        return ar;
      }

      function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++) {
          ar = ar.concat(__read(arguments[i]));
        }

        return ar;
      }

      function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
          s += arguments[i].length;
        }

        for (var r = Array(s), k = 0, i = 0; i < il; i++) {
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
            r[k] = a[j];
          }
        }

        return r;
      }

      ;

      function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
      }

      function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []),
            i,
            q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
          return this;
        }, i;

        function verb(n) {
          if (g[n]) i[n] = function (v) {
            return new Promise(function (a, b) {
              q.push([n, v, a, b]) > 1 || resume(n, v);
            });
          };
        }

        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }

        function step(r) {
          r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }

        function fulfill(value) {
          resume("next", value);
        }

        function reject(value) {
          resume("throw", value);
        }

        function settle(f, v) {
          if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
        }
      }

      function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function () {
          return this;
        }, i;

        function verb(n, f) {
          i[n] = o[n] ? function (v) {
            return (p = !p) ? {
              value: __await(o[n](v)),
              done: n === "return"
            } : f ? f(v) : v;
          } : f;
        }
      }

      function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator],
            i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
          return this;
        }, i);

        function verb(n) {
          i[n] = o[n] && function (v) {
            return new Promise(function (resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }

        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function (v) {
            resolve({
              value: v,
              done: d
            });
          }, reject);
        }
      }

      function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", {
            value: raw
          });
        } else {
          cooked.raw = raw;
        }

        return cooked;
      }

      ;

      function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) {
          if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        }
        result["default"] = mod;
        return result;
      }

      function __importDefault(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      }

      function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to get private field on non-instance");
        }

        return privateMap.get(receiver);
      }

      function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to set private field on non-instance");
        }

        privateMap.set(receiver, value);
        return value;
      }
      /***/

    },

    /***/
    "./src/app/modules/notification/detail-notification/detail-notification.component.ts":
    /*!*******************************************************************************************!*\
      !*** ./src/app/modules/notification/detail-notification/detail-notification.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: DetailNotificationComponent */

    /***/
    function srcAppModulesNotificationDetailNotificationDetailNotificationComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailNotificationComponent", function () {
        return DetailNotificationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_shared_service_notificationSend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/service/notificationSend.service */
      "./src/app/shared/service/notificationSend.service.ts");
      /* harmony import */


      var src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/service/notification.service */
      "./src/app/shared/service/notification.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function DetailNotificationComponent_span_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sender_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", sender_r2, " ");
        }
      }

      function DetailNotificationComponent_span_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var receiver_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", receiver_r3, " ");
        }
      }

      var DetailNotificationComponent = /*#__PURE__*/function () {
        function DetailNotificationComponent(route, notificationSendService, notification, cdr) {
          _classCallCheck(this, DetailNotificationComponent);

          this.route = route;
          this.notificationSendService = notificationSendService;
          this.notification = notification;
          this.cdr = cdr;
        }

        _createClass(DetailNotificationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.route.params.subscribe(function (routeParams) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (routeParams.id) {
                          this.notificationId = routeParams.id;
                          this.getNotificationDetail();
                        }

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          }
        }, {
          key: "getNotificationDetail",
          value: function getNotificationDetail() {
            var _this7 = this;

            this.notificationSendService.getDetailNotificatoin(this.notificationId).subscribe({
              next: function next(res) {
                _this7.notificationData = res;

                _this7.cdr.detectChanges();
              },
              error: function error(e) {
                _this7.notification.showError(e.error, "");
              }
            });
          }
        }]);

        return DetailNotificationComponent;
      }();

      DetailNotificationComponent.ɵfac = function DetailNotificationComponent_Factory(t) {
        return new (t || DetailNotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_notificationSend_service__WEBPACK_IMPORTED_MODULE_3__["NotificationSendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]));
      };

      DetailNotificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DetailNotificationComponent,
        selectors: [["app-detail-notification"]],
        decls: 26,
        vars: 8,
        consts: [[1, "contents__box", "contents__box--right"], [1, "section"], [1, "section-head"], [1, "section-content"], [1, "row"], [1, "col-xl-12"], [2, "font-weight", "600"], [1, "py-3"], [1, "label", "label-lg", "font-weight-bold", "label-light-success", "label-inline"], ["class", "label label-lg font-weight-bold label-light-primary label-inline m-1", 4, "ngFor", "ngForOf"], ["class", "label label-lg font-weight-bold label-light-danger label-inline m-1", 4, "ngFor", "ngForOf"], [2, "word-wrap", "break-word"], [1, "label", "label-lg", "font-weight-bold", "label-light-primary", "label-inline", "m-1"], [1, "label", "label-lg", "font-weight-bold", "label-light-danger", "label-inline", "m-1"]],
        template: function DetailNotificationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Notification");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Sent Date: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "From: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, DetailNotificationComponent_span_18_Template, 2, 1, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "To: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, DetailNotificationComponent_span_22_Template, 2, 1, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.notificationData == null ? null : ctx.notificationData.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](14, 5, ctx.notificationData == null ? null : ctx.notificationData.createdAt, "MMM d, y hh:mm:ss a"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.notificationData == null ? null : ctx.notificationData.sender);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.notificationData == null ? null : ctx.notificationData.receivers);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.notificationData == null ? null : ctx.notificationData.content, " ");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
        styles: ["@media screen and (max-width: 1280px) {\n  .contents__box[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.section[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.section[_ngcontent-%COMP%]   .section-head[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 24px;\n  margin-bottom: 40px;\n  padding: 0;\n  color: #333;\n}\n.section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%] {\n  color: #6f728d;\n  margin-bottom: 20px;\n}\n.contents__box[_ngcontent-%COMP%] {\n  padding: 40px;\n  width: 900px;\n  border-radius: 5px;\n  background-color: #ffffff;\n  -o-box-shadow: 0 0 15px 0 rgba(220, 220, 220, 0.4);\n  box-shadow: 0 0 15px 0 rgba(220, 220, 220, 0.4);\n}\n.hljs[_ngcontent-%COMP%] {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #232323;\n  color: #e6e1dc;\n}\n.hljs[_ngcontent-%COMP%] {\n  padding: 10px 20px !important;\n  border-radius: 3px;\n}\npre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%] {\n  max-height: 500px;\n}\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-size: inherit;\n  color: inherit;\n  word-break: normal;\n}\n.hljs-built_in[_ngcontent-%COMP%] {\n  color: #ffffff;\n  display: block;\n}\n.hljs-built[_ngcontent-%COMP%] {\n  color: #6d9cbe;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ub3RpZmljYXRpb24vZGV0YWlsLW5vdGlmaWNhdGlvbi9kZXRhaWwtbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7SUFDSSxXQUFBO0VBQ047QUFDRjtBQUVBO0VBQ0ksV0FBQTtBQUFKO0FBR0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQUo7QUFHQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtBQUFKO0FBR0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrREFBQTtFQUNBLCtDQUFBO0FBQUo7QUFHQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFBSjtBQUdBO0VBQ0ksNkJBQUE7RUFDQSxrQkFBQTtBQUFKO0FBR0E7RUFDSSxpQkFBQTtBQUFKO0FBR0E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUFKO0FBR0E7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQUFKO0FBR0E7RUFDSSxjQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL25vdGlmaWNhdGlvbi9kZXRhaWwtbm90aWZpY2F0aW9uL2RldGFpbC1ub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAgIC5jb250ZW50c19fYm94IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLnNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zZWN0aW9uIC5zZWN0aW9uLWhlYWQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQge1xyXG4gICAgY29sb3I6ICM2ZjcyOGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uY29udGVudHNfX2JveCB7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgd2lkdGg6IDkwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIC1vLWJveC1zaGFkb3c6IDAgMCAxNXB4IDAgcmdiYSgyMjAsMjIwLDIyMCwwLjQpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggMCByZ2IoMjIwIDIyMCAyMjAgLyA0MCUpO1xyXG59XHJcblxyXG4uaGxqcyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgIGJhY2tncm91bmQ6ICMyMzIzMjM7XHJcbiAgICBjb2xvcjogI2U2ZTFkYztcclxufVxyXG5cclxuLmhsanMge1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbnByZT5jb2RlIHtcclxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG59XHJcblxyXG5wcmUgY29kZSB7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIHdvcmQtYnJlYWs6IG5vcm1hbDtcclxufVxyXG5cclxuLmhsanMtYnVpbHRfaW4ge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmhsanMtYnVpbHQge1xyXG4gICAgY29sb3I6ICM2ZDljYmU7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DetailNotificationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-detail-notification',
            templateUrl: './detail-notification.component.html',
            styleUrls: ['./detail-notification.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: src_app_shared_service_notificationSend_service__WEBPACK_IMPORTED_MODULE_3__["NotificationSendService"]
          }, {
            type: src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/notification/new-notification/new-notification.component.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/modules/notification/new-notification/new-notification.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: NewNotificationComponent */

    /***/
    function srcAppModulesNotificationNewNotificationNewNotificationComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewNotificationComponent", function () {
        return NewNotificationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/service/users.service */
      "./src/app/shared/service/users.service.ts");
      /* harmony import */


      var src_app_shared_service_notificationSend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/service/notificationSend.service */
      "./src/app/shared/service/notificationSend.service.ts");
      /* harmony import */


      var src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/service/notification.service */
      "./src/app/shared/service/notification.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/text-field */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-mat-select-search */
      "./node_modules/ngx-mat-select-search/__ivy_ngcc__/fesm2015/ngx-mat-select-search.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

      var _c0 = ["multiSelect"];

      function NewNotificationComponent_div_0_mat_error_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Title is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NewNotificationComponent_div_0_mat_error_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Content is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NewNotificationComponent_div_0_mat_error_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Account Type is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NewNotificationComponent_div_0_mat_option_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var receiver_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", receiver_r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", receiver_r8.name, " ");
        }
      }

      function NewNotificationComponent_div_0_mat_error_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Receivers is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NewNotificationComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewNotificationComponent_div_0_Template_form_ngSubmit_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.submitNotification();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "New Notification");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NewNotificationComponent_div_0_mat_error_15_Template, 2, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "textarea", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "sentiment_dissatisfied");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, NewNotificationComponent_div_0_mat_error_22_Template, 2, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Account Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-select", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function NewNotificationComponent_div_0_Template_mat_select_selectionChange_28_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.handleRole($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "SuperAdmins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Admins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Publishers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, NewNotificationComponent_div_0_mat_error_35_Template, 2, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-select", 21, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "ngx-mat-select-search", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, NewNotificationComponent_div_0_mat_option_42_Template, 2, 2, "mat-option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, NewNotificationComponent_div_0_mat_error_44_Template, 2, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Send");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.newNotificationFG);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.newNotificationFG.get("title").errors == null ? null : ctx_r0.newNotificationFG.get("title").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.newNotificationFG.get("content").errors == null ? null : ctx_r0.newNotificationFG.get("content").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.newNotificationFG.get("role").errors == null ? null : ctx_r0.newNotificationFG.get("role").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.receiverMultiFilterCtrl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 8, ctx_r0.filteredReceiverDataMulti));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.newNotificationFG.get("receivers").errors == null ? null : ctx_r0.newNotificationFG.get("receivers").errors.required);
        }
      }

      var NewNotificationComponent = /*#__PURE__*/function () {
        function NewNotificationComponent(fb, userService, cdr, notificationSendService, notificationService) {
          _classCallCheck(this, NewNotificationComponent);

          this.fb = fb;
          this.userService = userService;
          this.cdr = cdr;
          this.notificationSendService = notificationSendService;
          this.notificationService = notificationService;
          this.hidden = false;
          this.receiverData = [];
          this.receiverMultiFilterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
          this.filteredReceiverDataMulti = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
          this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.getReceiver();
        }

        _createClass(NewNotificationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.newNotificationFG = this.fb.group({
              title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              content: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              receivers: ['']
            });
          }
        }, {
          key: "getReceiver",
          value: function getReceiver() {
            var _this8 = this;

            this.userService.getReceiverAll().subscribe(function (data) {
              console.log(data);
              data.map(function (d) {
                _this8.receiverData.push({
                  id: d._id,
                  name: d.fullname,
                  role: d.role
                });
              });

              _this8.filteredReceiverDataMulti.next(_this8.receiverData.slice());

              _this8.receiverMultiFilterCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this8._onDestroy)).subscribe(function () {
                _this8.filterReceiverMulti();
              });

              _this8.cdr.detectChanges();
            });
          }
        }, {
          key: "handleRole",
          value: function handleRole(event) {
            var _this9 = this;

            var tempReceiverData = this.receiverData.filter(function (data) {
              return data.role == parseInt(event.value);
            });
            this.filteredReceiverDataMulti.next(tempReceiverData.slice());
            this.receiverMultiFilterCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._onDestroy)).subscribe(function () {
              _this9.filterReceiverMulti();
            });
          }
        }, {
          key: "filterReceiverMulti",
          value: function filterReceiverMulti() {
            if (!this.receiverData) {
              return;
            }

            var search = this.receiverMultiFilterCtrl.value;

            if (!search) {
              this.filteredReceiverDataMulti.next(this.receiverData.slice());
              return;
            } else {
              search = search.toLowerCase();
            }

            this.filteredReceiverDataMulti.next(this.receiverData.filter(function (receiver) {
              return receiver.name.toLowerCase().indexOf(search) > -1;
            }));
          }
        }, {
          key: "submitNotification",
          value: function submitNotification() {
            var _this10 = this;

            if (this.newNotificationFG.valid) {
              this.notificationSendService.sendNotitication(this.newNotificationFG.value).subscribe({
                next: function next(res) {
                  if (res.status) {
                    _this10.formGroupDirective.resetForm();

                    _this10.notificationService.showSuccess("You sent notification!", "");
                  }
                },
                error: function error(e) {
                  _this10.notificationService.showError("Error while sending notification!", "");
                }
              });
            }
          }
        }]);

        return NewNotificationComponent;
      }();

      NewNotificationComponent.ɵfac = function NewNotificationComponent_Factory(t) {
        return new (t || NewNotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_notificationSend_service__WEBPACK_IMPORTED_MODULE_5__["NotificationSendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]));
      };

      NewNotificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NewNotificationComponent,
        selectors: [["app-new-notification"]],
        viewQuery: function NewNotificationComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formGroupDirective = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.multiSelect = _t.first);
          }
        },
        decls: 1,
        vars: 1,
        consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "example-container", 3, "formGroup", "ngSubmit"], ["formGroupDirective", "ngForm"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], [1, "row"], [1, "col-xl-12"], ["appearance", "outline"], ["matInput", "", "formControlName", "title", "placeholder", "Please Input Here..."], [4, "ngIf"], ["matInput", "", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "4", "cdkAutosizeMaxRows", "4", "formControlName", "content"], ["matSuffix", ""], [1, "col-xl-6"], ["matNativeControl", "", "placeholder", "Role", "formControlName", "role", 3, "selectionChange"], ["value", "1"], ["value", "2"], ["value", "3"], ["formControlName", "receivers", "placeholder", "Receivers(Optional)", 3, "multiple"], ["multiSelect", ""], ["placeholderLabel", "Find Receivers...", "noEntriesFoundLabel", "no matching  found", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", "type", "submit"], [3, "value"]],
        template: function NewNotificationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NewNotificationComponent_div_0_Template, 49, 10, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hidden);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_10__["CdkTextareaAutosize"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_14__["MatSelectSearchComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
        styles: [".mat-form-field-appearance-outline .mat-form-field-outline-thick {\n  opacity: 0.8 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ub3RpZmljYXRpb24vbmV3LW5vdGlmaWNhdGlvbi9uZXctbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbm90aWZpY2F0aW9uL25ldy1ub3RpZmljYXRpb24vbmV3LW5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcclxuICAgIG9wYWNpdHk6IDAuOCFpbXBvcnRhbnQ7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewNotificationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-new-notification',
            templateUrl: './new-notification.component.html',
            styleUrls: ['./new-notification.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: src_app_shared_service_notificationSend_service__WEBPACK_IMPORTED_MODULE_5__["NotificationSendService"]
          }, {
            type: src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]
          }];
        }, {
          formGroupDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]]
          }],
          multiSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['multiSelect', {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/modules/notification/notification-routing.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/modules/notification/notification-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: NotificationRoutingModule */

    /***/
    function srcAppModulesNotificationNotificationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationRoutingModule", function () {
        return NotificationRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _detail_notification_detail_notification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./detail-notification/detail-notification.component */
      "./src/app/modules/notification/detail-notification/detail-notification.component.ts");
      /* harmony import */


      var _new_notification_new_notification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./new-notification/new-notification.component */
      "./src/app/modules/notification/new-notification/new-notification.component.ts");
      /* harmony import */


      var _notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./notification.component */
      "./src/app/modules/notification/notification.component.ts");
      /* harmony import */


      var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./notifications/notifications.component */
      "./src/app/modules/notification/notifications/notifications.component.ts");
      /* harmony import */


      var _super_admin_notifications_super_admin_notifications_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./super-admin-notifications/super-admin-notifications.component */
      "./src/app/modules/notification/super-admin-notifications/super-admin-notifications.component.ts");

      var routes = [{
        path: '',
        component: _notification_component__WEBPACK_IMPORTED_MODULE_4__["NotificationComponent"],
        children: [{
          path: 'super-admin-notifications',
          component: _super_admin_notifications_super_admin_notifications_component__WEBPACK_IMPORTED_MODULE_6__["SuperAdminNotificationsComponent"]
        }, {
          path: 'publisher-notifications',
          component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_5__["NotificationsComponent"]
        }, {
          path: 'new-notification',
          component: _new_notification_new_notification_component__WEBPACK_IMPORTED_MODULE_3__["NewNotificationComponent"]
        }, {
          path: 'detail/:id',
          component: _detail_notification_detail_notification_component__WEBPACK_IMPORTED_MODULE_2__["DetailNotificationComponent"],
          pathMatch: 'full'
        }, {
          path: '',
          redirectTo: '',
          pathMatch: 'full'
        }, {
          path: '**',
          redirectTo: '',
          pathMatch: 'full'
        }]
      }];

      var NotificationRoutingModule = function NotificationRoutingModule() {
        _classCallCheck(this, NotificationRoutingModule);
      };

      NotificationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NotificationRoutingModule
      });
      NotificationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NotificationRoutingModule_Factory(t) {
          return new (t || NotificationRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotificationRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/notification/notification.component.ts":
    /*!****************************************************************!*\
      !*** ./src/app/modules/notification/notification.component.ts ***!
      \****************************************************************/

    /*! exports provided: NotificationComponent */

    /***/
    function srcAppModulesNotificationNotificationComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationComponent", function () {
        return NotificationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var NotificationComponent = /*#__PURE__*/function () {
        function NotificationComponent() {
          _classCallCheck(this, NotificationComponent);
        }

        _createClass(NotificationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NotificationComponent;
      }();

      NotificationComponent.ɵfac = function NotificationComponent_Factory(t) {
        return new (t || NotificationComponent)();
      };

      NotificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotificationComponent,
        selectors: [["app-notification"]],
        decls: 1,
        vars: 0,
        template: function NotificationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-notification',
            templateUrl: './notification.component.html',
            styleUrls: ['./notification.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/notification/notification.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/modules/notification/notification.module.ts ***!
      \*************************************************************/

    /*! exports provided: NotificationModule */

    /***/
    function srcAppModulesNotificationNotificationModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationModule", function () {
        return NotificationModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _notification_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./notification-routing.module */
      "./src/app/modules/notification/notification-routing.module.ts");
      /* harmony import */


      var _notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./notification.component */
      "./src/app/modules/notification/notification.component.ts");
      /* harmony import */


      var _new_notification_new_notification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./new-notification/new-notification.component */
      "./src/app/modules/notification/new-notification/new-notification.component.ts");
      /* harmony import */


      var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./notifications/notifications.component */
      "./src/app/modules/notification/notifications/notifications.component.ts");
      /* harmony import */


      var _detail_notification_detail_notification_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./detail-notification/detail-notification.component */
      "./src/app/modules/notification/detail-notification/detail-notification.component.ts");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var ng_inline_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-inline-svg */
      "./node_modules/ng-inline-svg/__ivy_ngcc__/lib_esmodule/index.js");
      /* harmony import */


      var _super_admin_notifications_super_admin_notifications_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./super-admin-notifications/super-admin-notifications.component */
      "./src/app/modules/notification/super-admin-notifications/super-admin-notifications.component.ts");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ngx-mat-select-search */
      "./node_modules/ngx-mat-select-search/__ivy_ngcc__/fesm2015/ngx-mat-select-search.js");
      /* harmony import */


      var src_app_shared_pipes_date_as_ago_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/shared/pipes/date-as-ago.pipe */
      "./src/app/shared/pipes/date-as-ago.pipe.ts");

      var NotificationModule = function NotificationModule() {
        _classCallCheck(this, NotificationModule);
      };

      NotificationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NotificationModule
      });
      NotificationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NotificationModule_Factory(t) {
          return new (t || NotificationModule)();
        },
        providers: [],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _notification_routing_module__WEBPACK_IMPORTED_MODULE_3__["NotificationRoutingModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["NgxDatatableModule"], ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_16__["NgxMatSelectSearchModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_10__["InlineSVGModule"].forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotificationModule, {
          declarations: [_notification_component__WEBPACK_IMPORTED_MODULE_4__["NotificationComponent"], _new_notification_new_notification_component__WEBPACK_IMPORTED_MODULE_5__["NewNotificationComponent"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_6__["NotificationsComponent"], _detail_notification_detail_notification_component__WEBPACK_IMPORTED_MODULE_7__["DetailNotificationComponent"], _super_admin_notifications_super_admin_notifications_component__WEBPACK_IMPORTED_MODULE_11__["SuperAdminNotificationsComponent"], src_app_shared_pipes_date_as_ago_pipe__WEBPACK_IMPORTED_MODULE_17__["DateAsAgoPipe"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _notification_routing_module__WEBPACK_IMPORTED_MODULE_3__["NotificationRoutingModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["NgxDatatableModule"], ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_16__["NgxMatSelectSearchModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_10__["InlineSVGModule"]],
          exports: [src_app_shared_pipes_date_as_ago_pipe__WEBPACK_IMPORTED_MODULE_17__["DateAsAgoPipe"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_notification_component__WEBPACK_IMPORTED_MODULE_4__["NotificationComponent"], _new_notification_new_notification_component__WEBPACK_IMPORTED_MODULE_5__["NewNotificationComponent"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_6__["NotificationsComponent"], _detail_notification_detail_notification_component__WEBPACK_IMPORTED_MODULE_7__["DetailNotificationComponent"], _super_admin_notifications_super_admin_notifications_component__WEBPACK_IMPORTED_MODULE_11__["SuperAdminNotificationsComponent"], src_app_shared_pipes_date_as_ago_pipe__WEBPACK_IMPORTED_MODULE_17__["DateAsAgoPipe"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _notification_routing_module__WEBPACK_IMPORTED_MODULE_3__["NotificationRoutingModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["NgxDatatableModule"], ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_16__["NgxMatSelectSearchModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_10__["InlineSVGModule"].forRoot()],
            providers: [],
            entryComponents: [_new_notification_new_notification_component__WEBPACK_IMPORTED_MODULE_5__["NewNotificationComponent"]],
            exports: [src_app_shared_pipes_date_as_ago_pipe__WEBPACK_IMPORTED_MODULE_17__["DateAsAgoPipe"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/notification/notifications/notifications.component.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/modules/notification/notifications/notifications.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: NotificationsComponent */

    /***/
    function srcAppModulesNotificationNotificationsNotificationsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function () {
        return NotificationsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/service/users.service */
      "./src/app/shared/service/users.service.ts");
      /* harmony import */


      var src_app_shared_service_notificationSend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/service/notificationSend.service */
      "./src/app/shared/service/notificationSend.service.ts");
      /* harmony import */


      var src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/service/notification.service */
      "./src/app/shared/service/notification.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var ng_inline_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-inline-svg */
      "./node_modules/ng-inline-svg/__ivy_ngcc__/lib_esmodule/index.js");
      /* harmony import */


      var src_app_shared_pipes_date_as_ago_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/pipes/date-as-ago.pipe */
      "./src/app/shared/pipes/date-as-ago.pipe.ts");

      function NotificationsComponent_div_0_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Content ");
        }
      }

      function NotificationsComponent_div_0_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var value_r13 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r13, " ");
        }
      }

      function NotificationsComponent_div_0_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Sender ");
        }
      }

      function NotificationsComponent_div_0_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r15 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r15, " ");
        }
      }

      function NotificationsComponent_div_0_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Status ");
        }
      }

      function NotificationsComponent_div_0_ng_template_17_span_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " New ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NotificationsComponent_div_0_ng_template_17_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Read ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NotificationsComponent_div_0_ng_template_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NotificationsComponent_div_0_ng_template_17_span_0_Template, 2, 0, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotificationsComponent_div_0_ng_template_17_span_1_Template, 2, 0, "span", 19);
        }

        if (rf & 2) {
          var value_r17 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !value_r17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", value_r17);
        }
      }

      function NotificationsComponent_div_0_ng_template_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Date ");
        }
      }

      function NotificationsComponent_div_0_ng_template_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "dateAsAgo");
        }

        if (rf & 2) {
          var value_r21 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, value_r21), " ");
        }
      }

      function NotificationsComponent_div_0_ng_template_22_Template(rf, ctx) {}

      function NotificationsComponent_div_0_ng_template_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationsComponent_div_0_ng_template_23_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var row_r22 = ctx.row;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r23.viewNotification(row_r22._key);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/General/Cursor.svg");
        }
      }

      function NotificationsComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Publisher Notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ngx-datatable", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngx-datatable-column", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NotificationsComponent_div_0_ng_template_10_Template, 1, 0, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NotificationsComponent_div_0_ng_template_11_Template, 1, 1, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ngx-datatable-column", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NotificationsComponent_div_0_ng_template_13_Template, 1, 0, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NotificationsComponent_div_0_ng_template_14_Template, 2, 1, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ngx-datatable-column", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NotificationsComponent_div_0_ng_template_16_Template, 1, 0, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NotificationsComponent_div_0_ng_template_17_Template, 2, 2, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ngx-datatable-column", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NotificationsComponent_div_0_ng_template_19_Template, 1, 0, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NotificationsComponent_div_0_ng_template_20_Template, 2, 3, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ngx-datatable-column", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, NotificationsComponent_div_0_ng_template_22_Template, 0, 0, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, NotificationsComponent_div_0_ng_template_23_Template, 2, 1, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx_r0.rows)("columnMode", "force")("loadingIndicator", ctx_r0.loadingIndicator)("footerHeight", 50)("rowHeight", 50)("scrollbarH", true)("headerHeight", 50)("limit", 10);
        }
      }

      function NotificationsComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " How did you get here ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Sorry you can't access the page you're looking for. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " There may be a misspelling in the URL entered,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "or the page you are looking for may no longer exist. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var NotificationsComponent = /*#__PURE__*/function () {
        function NotificationsComponent(cdr, router, userService, notificationSendService, notification) {
          _classCallCheck(this, NotificationsComponent);

          this.cdr = cdr;
          this.router = router;
          this.userService = userService;
          this.notificationSendService = notificationSendService;
          this.notification = notification;
          this.hidden = false;
          this.loadingIndicator = true;
          this.rows = [];
        }

        _createClass(NotificationsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getPublisherNotifications();
          } //Gets the Selected Company from Local Storage

        }, {
          key: "getSelectedCompanyFromLocalStorage",
          value: function getSelectedCompanyFromLocalStorage() {
            return this.userService.getSelectedCompanyFromLocalStorage();
          }
        }, {
          key: "getPublisherNotifications",
          value: function getPublisherNotifications() {
            var _this11 = this;

            var notificationArr = [];
            this.notificationSendService.publisherNotificatoins().subscribe({
              next: function next(res) {
                res.map(function (d) {
                  notificationArr.push({
                    _key: d.notifyData[0]._key,
                    _id: d.notifyData[0]._id,
                    content: d.notifyData[0].content,
                    title: d.notifyData[0].title,
                    createdAt: d.notifyData[0].createdAt,
                    sender: d.sender[0],
                    status: d.status
                  });
                });
                _this11.rows = notificationArr;
                _this11.loadingIndicator = false;

                _this11.cdr.detectChanges();
              },
              error: function error(e) {
                _this11.notification.showError(e.error, "");
              }
            });
          }
        }, {
          key: "viewNotification",
          value: function viewNotification(notificationID) {
            this.router.navigateByUrl('/notifications/detail/' + notificationID);
          }
        }]);

        return NotificationsComponent;
      }();

      NotificationsComponent.ɵfac = function NotificationsComponent_Factory(t) {
        return new (t || NotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_notificationSend_service__WEBPACK_IMPORTED_MODULE_3__["NotificationSendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]));
      };

      NotificationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotificationsComponent,
        selectors: [["app-notifications"]],
        decls: 2,
        vars: 2,
        consts: [["class", "row", 4, "ngIf"], ["class", "error error-3 d-flex flex-row-fluid bgi-size-cover bgi-position-center", "style", "background-image: url('./assets/media/error/bg3.jpg'); height: 100%;zoom: 1;\n    display: block;\n    min-height: 80vh;\n    font-size: 14px;\n    line-height: 1.4;\n    color: #0e1724;", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], [1, "material", "fullscreen", 3, "rows", "columnMode", "loadingIndicator", "footerHeight", "rowHeight", "scrollbarH", "headerHeight", "limit"], ["name", "Content"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], ["name", "Sender"], ["name", "Status"], ["name", "CreatedAt"], ["name", "id"], [1, "label", "label-lg", "font-weight-bold", "label-light-primary", "label-inline", "m-1"], ["class", "label label-lg font-weight-bold label-light-danger label-inline", 4, "ngIf"], ["class", "label label-lg font-weight-bold label-light-success label-inline", 4, "ngIf"], [1, "label", "label-lg", "font-weight-bold", "label-light-danger", "label-inline"], [1, "label", "label-lg", "font-weight-bold", "label-light-success", "label-inline"], ["title", "View Notification", 1, "btn", "btn-icon", "btn-light", "btn-hover-primary", "btn-sm", "mx-3", 3, "click"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-md", "svg-icon-primary", 3, "inlineSVG"], [1, "error", "error-3", "d-flex", "flex-row-fluid", "bgi-size-cover", "bgi-position-center", 2, "background-image", "url('./assets/media/error/bg3.jpg')", "height", "100%", "zoom", "1", "display", "block", "min-height", "80vh", "font-size", "14px", "line-height", "1.4", "color", "#0e1724"], [1, "px-10", "px-md-30", "py-10", "py-md-0", "d-flex", "flex-column", "justify-content-md-center"], [1, "display-4", "font-weight-boldest", "text-white", "mb-12"], [1, "font-size-h1", "font-weight-boldest", "text-dark-75"], [1, "font-size-h4", "line-height-md"]],
        template: function NotificationsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NotificationsComponent_div_0_Template, 24, 8, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotificationsComponent_div_1_Template, 10, 0, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hidden);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hidden);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["DataTableColumnHeaderDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["DataTableColumnCellDirective"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_7__["InlineSVGDirective"]],
        pipes: [src_app_shared_pipes_date_as_ago_pipe__WEBPACK_IMPORTED_MODULE_8__["DateAsAgoPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-notifications',
            templateUrl: './notifications.component.html',
            styleUrls: ['./notifications.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
          }, {
            type: src_app_shared_service_notificationSend_service__WEBPACK_IMPORTED_MODULE_3__["NotificationSendService"]
          }, {
            type: src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/notification/super-admin-notifications/super-admin-notifications.component.ts":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/modules/notification/super-admin-notifications/super-admin-notifications.component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: SuperAdminNotificationsComponent */

    /***/
    function srcAppModulesNotificationSuperAdminNotificationsSuperAdminNotificationsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuperAdminNotificationsComponent", function () {
        return SuperAdminNotificationsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_shared_service_notificationSend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/service/notificationSend.service */
      "./src/app/shared/service/notificationSend.service.ts");
      /* harmony import */


      var src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/service/notification.service */
      "./src/app/shared/service/notification.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-inline-svg */
      "./node_modules/ng-inline-svg/__ivy_ngcc__/lib_esmodule/index.js");
      /* harmony import */


      var src_app_shared_pipes_date_as_ago_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/pipes/date-as-ago.pipe */
      "./src/app/shared/pipes/date-as-ago.pipe.ts");

      function SuperAdminNotificationsComponent_div_0_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Content ");
        }
      }

      function SuperAdminNotificationsComponent_div_0_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var value_r13 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r13, " ");
        }
      }

      function SuperAdminNotificationsComponent_div_0_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Sender ");
        }
      }

      function SuperAdminNotificationsComponent_div_0_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r15 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r15, " ");
        }
      }

      function SuperAdminNotificationsComponent_div_0_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Receivers ");
        }
      }

      function SuperAdminNotificationsComponent_div_0_ng_template_17_span_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var v_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", v_r19, " ");
        }
      }

      function SuperAdminNotificationsComponent_div_0_ng_template_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SuperAdminNotificationsComponent_div_0_ng_template_17_span_0_Template, 2, 1, "span", 18);
        }

        if (rf & 2) {
          var value_r17 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", value_r17);
        }
      }

      function SuperAdminNotificationsComponent_div_0_ng_template_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Date ");
        }
      }

      function SuperAdminNotificationsComponent_div_0_ng_template_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "dateAsAgo");
        }

        if (rf & 2) {
          var value_r21 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, value_r21), " ");
        }
      }

      function SuperAdminNotificationsComponent_div_0_ng_template_22_Template(rf, ctx) {}

      function SuperAdminNotificationsComponent_div_0_ng_template_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SuperAdminNotificationsComponent_div_0_ng_template_23_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var row_r22 = ctx.row;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r23.viewNotification(row_r22._key);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SuperAdminNotificationsComponent_div_0_ng_template_23_Template_a_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var row_r22 = ctx.row;

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r25.clearNotification(row_r22._key);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/General/Cursor.svg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/General/Trash.svg");
        }
      }

      function SuperAdminNotificationsComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Super Admin Notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ngx-datatable", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngx-datatable-column", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SuperAdminNotificationsComponent_div_0_ng_template_10_Template, 1, 0, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SuperAdminNotificationsComponent_div_0_ng_template_11_Template, 1, 1, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ngx-datatable-column", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SuperAdminNotificationsComponent_div_0_ng_template_13_Template, 1, 0, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SuperAdminNotificationsComponent_div_0_ng_template_14_Template, 2, 1, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ngx-datatable-column", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SuperAdminNotificationsComponent_div_0_ng_template_16_Template, 1, 0, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SuperAdminNotificationsComponent_div_0_ng_template_17_Template, 1, 1, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ngx-datatable-column", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SuperAdminNotificationsComponent_div_0_ng_template_19_Template, 1, 0, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SuperAdminNotificationsComponent_div_0_ng_template_20_Template, 2, 3, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ngx-datatable-column", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SuperAdminNotificationsComponent_div_0_ng_template_22_Template, 0, 0, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SuperAdminNotificationsComponent_div_0_ng_template_23_Template, 4, 2, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx_r0.rows)("columnMode", "force")("loadingIndicator", ctx_r0.loadingIndicator)("footerHeight", 50)("rowHeight", 50)("scrollbarH", true)("headerHeight", 50)("limit", 10);
        }
      }

      function SuperAdminNotificationsComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " How did you get here ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Sorry you can't access the page you're looking for. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " There may be a misspelling in the URL entered,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "or the page you are looking for may no longer exist. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var SuperAdminNotificationsComponent = /*#__PURE__*/function () {
        function SuperAdminNotificationsComponent(cdr, notificationSendService, notification, router) {
          _classCallCheck(this, SuperAdminNotificationsComponent);

          this.cdr = cdr;
          this.notificationSendService = notificationSendService;
          this.notification = notification;
          this.router = router;
          this.hidden = false;
          this.loadingIndicator = true;
          this.rows = [];
        }

        _createClass(SuperAdminNotificationsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getSuperadminNotifications();
          }
        }, {
          key: "getSuperadminNotifications",
          value: function getSuperadminNotifications() {
            var _this12 = this;

            this.notificationSendService.superAdminNotificatoins().subscribe({
              next: function next(res) {
                _this12.rows = res;
                _this12.loadingIndicator = false;

                _this12.cdr.detectChanges();
              },
              error: function error(e) {
                _this12.notification.showError(e.error, "");
              }
            });
          }
        }, {
          key: "viewNotification",
          value: function viewNotification(notificationID) {
            this.router.navigateByUrl('/notifications/detail/' + notificationID);
          }
        }, {
          key: "clearNotification",
          value: function clearNotification(id) {
            var _this13 = this;

            this.notificationSendService.clearNotification(id).subscribe({
              next: function next(res) {
                _this13.notification.showSuccess('Cleared a Notification!', "");

                _this13.getSuperadminNotifications();
              },
              error: function error(e) {
                _this13.notification.showError(e.error, "");
              }
            });
          }
        }]);

        return SuperAdminNotificationsComponent;
      }();

      SuperAdminNotificationsComponent.ɵfac = function SuperAdminNotificationsComponent_Factory(t) {
        return new (t || SuperAdminNotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_notificationSend_service__WEBPACK_IMPORTED_MODULE_1__["NotificationSendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      SuperAdminNotificationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SuperAdminNotificationsComponent,
        selectors: [["app-super-admin-notifications"]],
        decls: 2,
        vars: 2,
        consts: [["class", "row", 4, "ngIf"], ["class", "error error-3 d-flex flex-row-fluid bgi-size-cover bgi-position-center", "style", "background-image: url('./assets/media/error/bg3.jpg'); height: 100%;zoom: 1;\n    display: block;\n    min-height: 80vh;\n    font-size: 14px;\n    line-height: 1.4;\n    color: #0e1724;", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], [1, "material", "fullscreen", 3, "rows", "columnMode", "loadingIndicator", "footerHeight", "rowHeight", "scrollbarH", "headerHeight", "limit"], ["name", "Content"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], ["name", "Sender"], ["name", "Receivers"], ["name", "CreatedAt"], ["name", "id"], [1, "label", "label-lg", "font-weight-bold", "label-light-success", "label-inline", "m-1"], ["class", "label label-lg font-weight-bold label-light-primary label-inline m-1", 4, "ngFor", "ngForOf"], [1, "label", "label-lg", "font-weight-bold", "label-light-primary", "label-inline", "m-1"], ["title", "View Notification", 1, "btn", "btn-icon", "btn-light", "btn-hover-primary", "btn-sm", "mx-3", 3, "click"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-md", "svg-icon-primary", 3, "inlineSVG"], ["title", "Clear Notification", 1, "btn", "btn-icon", "btn-light", "btn-hover-danger", "btn-sm", 3, "click"], ["cacheSVG", "false", 1, "svg-icon", "svg-icon-md", "svg-icon-danger", 3, "inlineSVG"], [1, "error", "error-3", "d-flex", "flex-row-fluid", "bgi-size-cover", "bgi-position-center", 2, "background-image", "url('./assets/media/error/bg3.jpg')", "height", "100%", "zoom", "1", "display", "block", "min-height", "80vh", "font-size", "14px", "line-height", "1.4", "color", "#0e1724"], [1, "px-10", "px-md-30", "py-10", "py-md-0", "d-flex", "flex-column", "justify-content-md-center"], [1, "display-4", "font-weight-boldest", "text-white", "mb-12"], [1, "font-size-h1", "font-weight-boldest", "text-dark-75"], [1, "font-size-h4", "line-height-md"]],
        template: function SuperAdminNotificationsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SuperAdminNotificationsComponent_div_0_Template, 24, 8, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SuperAdminNotificationsComponent_div_1_Template, 10, 0, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hidden);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hidden);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DataTableColumnHeaderDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DataTableColumnCellDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__["InlineSVGDirective"]],
        pipes: [src_app_shared_pipes_date_as_ago_pipe__WEBPACK_IMPORTED_MODULE_7__["DateAsAgoPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbm90aWZpY2F0aW9uL3N1cGVyLWFkbWluLW5vdGlmaWNhdGlvbnMvc3VwZXItYWRtaW4tbm90aWZpY2F0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SuperAdminNotificationsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-super-admin-notifications',
            templateUrl: './super-admin-notifications.component.html',
            styleUrls: ['./super-admin-notifications.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: src_app_shared_service_notificationSend_service__WEBPACK_IMPORTED_MODULE_1__["NotificationSendService"]
          }, {
            type: src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/pipes/date-as-ago.pipe.ts":
    /*!**************************************************!*\
      !*** ./src/app/shared/pipes/date-as-ago.pipe.ts ***!
      \**************************************************/

    /*! exports provided: DateAsAgoPipe */

    /***/
    function srcAppSharedPipesDateAsAgoPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateAsAgoPipe", function () {
        return DateAsAgoPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var DateAsAgoPipe = /*#__PURE__*/function () {
        function DateAsAgoPipe() {
          _classCallCheck(this, DateAsAgoPipe);
        }

        _createClass(DateAsAgoPipe, [{
          key: "transform",
          value: function transform(value) {
            if (!value) {
              return 'a long time ago';
            }

            var time = (Date.now() - Date.parse(value)) / 1000;

            if (time < 10) {
              return 'just now';
            } else if (time < 60) {
              return 'a moment ago';
            }

            var divider = [60, 60, 24, 30, 12];
            var string = [' second', ' minute', ' hour', ' day', ' month', ' year'];
            var i;

            for (i = 0; Math.floor(time / divider[i]) > 0; i++) {
              time /= divider[i];
            }

            var plural = Math.floor(time) > 1 ? 's' : '';
            return Math.floor(time) + string[i] + plural + ' ago';
          }
        }]);

        return DateAsAgoPipe;
      }();

      DateAsAgoPipe.ɵfac = function DateAsAgoPipe_Factory(t) {
        return new (t || DateAsAgoPipe)();
      };

      DateAsAgoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "dateAsAgo",
        type: DateAsAgoPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateAsAgoPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'dateAsAgo',
            pure: true
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-notification-notification-module-es5.js.map