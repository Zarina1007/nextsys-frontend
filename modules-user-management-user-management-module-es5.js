(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-user-management-user-management-module"], {
    /***/
    "./node_modules/ng-validate-equal/__ivy_ngcc__/fesm2015/ng-validate-equal.js":
    /*!***********************************************************************************!*\
      !*** ./node_modules/ng-validate-equal/__ivy_ngcc__/fesm2015/ng-validate-equal.js ***!
      \***********************************************************************************/

    /*! exports provided: ValidateEqualDirective, ValidateEqualModule */

    /***/
    function node_modulesNgValidateEqual__ivy_ngcc__Fesm2015NgValidateEqualJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ValidateEqualDirective", function () {
        return ValidateEqualDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ValidateEqualModule", function () {
        return ValidateEqualModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var ValidateEqualDirective_1;

      var ValidateEqualDirective = ValidateEqualDirective_1 = /*#__PURE__*/function () {
        function ValidateEqualDirective(otherControl) {
          _classCallCheck(this, ValidateEqualDirective);

          this.otherControl = otherControl;
        }

        _createClass(ValidateEqualDirective, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.valueChangesSub) {
              this.valueChangesSub.unsubscribe();
            }
          }
        }, {
          key: "validate",
          value: function validate(selfControl) {
            var _this = this;

            var selfControlValue = selfControl.value;
            var otherControl = selfControl.root.get(this.otherControl);

            if (this.valueChangesSub) {
              this.valueChangesSub.unsubscribe();
            } // this code works when user types in other control putting the error in self control


            this.valueChangesSub = otherControl.valueChanges.subscribe(function (otherControlValue) {
              if (!_this.isEqual(selfControlValue, otherControlValue) && (selfControl.touched || selfControl.dirty)) {
                selfControl.setErrors({
                  notEqual: true
                });
              } else {
                if (selfControl.hasError('notEqual')) {
                  delete selfControl.errors['notEqual'];

                  if (!Object.keys(selfControl.errors).length) {
                    selfControl.setErrors(null);
                  }
                }
              }
            }); // this code works when the user types in self control putting the error in self control

            if (!this.isEqual(selfControlValue, otherControl.value) && (selfControl.touched || selfControl.dirty)) {
              return {
                notEqual: true
              };
            }

            return null;
          }
        }, {
          key: "isEqual",
          value: function isEqual(val1, val2) {
            val1 = this.unifyEmptyStrings(val1);
            val2 = this.unifyEmptyStrings(val2);
            return val1 === val2;
          }
        }, {
          key: "unifyEmptyStrings",
          value: function unifyEmptyStrings(val) {
            var isDefined = this.isDefined;

            if (val === null || !isDefined(val)) {
              val = '';
            }

            return val;
          }
        }, {
          key: "isDefined",
          value: function isDefined(value) {
            var defaultUndefined = void 0;
            return value !== defaultUndefined;
          }
        }]);

        return ValidateEqualDirective;
      }();

      ValidateEqualDirective.??fac = function ValidateEqualDirective_Factory(t) {
        return new (t || ValidateEqualDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????injectAttribute"]('ngValidateEqual'));
      };

      ValidateEqualDirective.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineDirective"]({
        type: ValidateEqualDirective,
        selectors: [["", "ngValidateEqual", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????ProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
            return ValidateEqualDirective_1;
          }),
          multi: true
        }])]
      });

      ValidateEqualDirective.ctorParameters = function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
            args: ['ngValidateEqual']
          }]
        }];
      };

      ValidateEqualDirective = ValidateEqualDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"])('ngValidateEqual'))], ValidateEqualDirective);

      var ValidateEqualModule = function ValidateEqualModule() {
        _classCallCheck(this, ValidateEqualModule);
      };

      ValidateEqualModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: ValidateEqualModule
      });
      ValidateEqualModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        factory: function ValidateEqualModule_Factory(t) {
          return new (t || ValidateEqualModule)();
        },
        imports: [[]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](ValidateEqualDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[ngValidateEqual]',
            providers: [{
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
              useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
                return ValidateEqualDirective_1;
              }),
              multi: true
            }]
          }]
        }], function () {
          return [{
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
              args: ['ngValidateEqual']
            }]
          }];
        }, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](ValidateEqualModule, {
          declarations: [ValidateEqualDirective],
          exports: [ValidateEqualDirective]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](ValidateEqualModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [ValidateEqualDirective],
            imports: [],
            exports: [ValidateEqualDirective]
          }]
        }], null, null);
      })();
      /*
       * Public API Surface of ng-validate-equal
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ng-validate-equal.js.map

      /***/

    },

    /***/
    "./src/app/modules/tag-management/tag-management.service.ts":
    /*!******************************************************************!*\
      !*** ./src/app/modules/tag-management/tag-management.service.ts ***!
      \******************************************************************/

    /*! exports provided: TagManagementService */

    /***/
    function srcAppModulesTagManagementTagManagementServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagManagementService", function () {
        return TagManagementService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_service_tags_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../shared/service/tags.service */
      "./src/app/shared/service/tags.service.ts");

      var TagManagementService = /*#__PURE__*/function () {
        function TagManagementService(tagsService) {
          _classCallCheck(this, TagManagementService);

          this.tagsService = tagsService;
        } // Get all Chrome objects


        _createClass(TagManagementService, [{
          key: "getChromeBrowserVersion",
          value: function getChromeBrowserVersion() {
            return this.tagsService.getChrome();
          } // Get all Chrome objects

        }, {
          key: "getFirefoxBrowserVersion",
          value: function getFirefoxBrowserVersion() {
            return this.tagsService.getFirefox();
          }
        }, {
          key: "addTag",
          value: function addTag(tag) {
            return this.tagsService.add(tag);
          }
        }, {
          key: "getAllTags",
          value: function getAllTags() {
            return this.tagsService.getAllTags();
          }
        }, {
          key: "getCompanyTags",
          value: function getCompanyTags(companyKey) {
            return this.tagsService.getCompanyTags(companyKey);
          }
        }, {
          key: "deleteTag",
          value: function deleteTag(tagKey) {
            return this.tagsService.deleteTag(tagKey);
          }
        }, {
          key: "getOneTag",
          value: function getOneTag(tag) {
            return this.tagsService.getOneTag(tag);
          }
        }, {
          key: "updateOneTag",
          value: function updateOneTag(tag) {
            return this.tagsService.updateOneTag(tag);
          }
        }, {
          key: "addTemplate",
          value: function addTemplate(template) {
            return this.tagsService.addTemplate(template);
          }
        }, {
          key: "getAllTemplates",
          value: function getAllTemplates() {
            return this.tagsService.getAllTemplates();
          }
        }, {
          key: "deleteTemplate",
          value: function deleteTemplate(templateKey) {
            return this.tagsService.deleteTemplate(templateKey);
          }
        }, {
          key: "getOneTemplate",
          value: function getOneTemplate(template) {
            return this.tagsService.getOneTemplate(template);
          }
        }]);

        return TagManagementService;
      }();

      TagManagementService.??fac = function TagManagementService_Factory(t) {
        return new (t || TagManagementService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_shared_service_tags_service__WEBPACK_IMPORTED_MODULE_1__["TagsService"]));
      };

      TagManagementService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: TagManagementService,
        factory: TagManagementService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TagManagementService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _shared_service_tags_service__WEBPACK_IMPORTED_MODULE_1__["TagsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/user-management/admins/admins.component.ts":
    /*!********************************************************************!*\
      !*** ./src/app/modules/user-management/admins/admins.component.ts ***!
      \********************************************************************/

    /*! exports provided: AdminsComponent */

    /***/
    function srcAppModulesUserManagementAdminsAdminsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminsComponent", function () {
        return AdminsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
      /* harmony import */


      var _shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/service/users.service */
      "./src/app/shared/service/users.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/service/snackbar.service */
      "./src/app/shared/service/snackbar.service.ts");
      /* harmony import */


      var src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/service/notification.service */
      "./src/app/shared/service/notification.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var ng_inline_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-inline-svg */
      "./node_modules/ng-inline-svg/__ivy_ngcc__/lib_esmodule/index.js");

      function AdminsComponent_div_0_mat_header_cell_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Full Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function AdminsComponent_div_0_mat_cell_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r16.fullname, " ");
        }
      }

      function AdminsComponent_div_0_mat_header_cell_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function AdminsComponent_div_0_mat_cell_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r17.email, " ");
        }
      }

      function AdminsComponent_div_0_mat_header_cell_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Companies ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function AdminsComponent_div_0_mat_cell_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", "font-weight-bold");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r18.companyname, " ");
        }
      }

      function AdminsComponent_div_0_mat_header_cell_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Stat# ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function AdminsComponent_div_0_mat_cell_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r19.tags.length, " ");
        }
      }

      function AdminsComponent_div_0_mat_header_cell_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Action ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function AdminsComponent_div_0_mat_cell_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AdminsComponent_div_0_mat_cell_33_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22);

            var element_r20 = ctx.$implicit;

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r21.handleEditClick(element_r20._key);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AdminsComponent_div_0_mat_cell_33_Template_a_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22);

            var element_r20 = ctx.$implicit;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r23.deleteAdmin(element_r20._key);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("inlineSVG", "./assets/media/svg/icons/Communication/Write.svg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("inlineSVG", "./assets/media/svg/icons/General/Trash.svg");
        }
      }

      function AdminsComponent_div_0_mat_header_row_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "mat-header-row");
        }
      }

      function AdminsComponent_div_0_mat_row_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "mat-row");
        }
      }

      function AdminsComponent_div_0_div_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "No records found");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function AdminsComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Admins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AdminsComponent_div_0_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r25.handleAddProfile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Add Admin ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-checkbox", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AdminsComponent_div_0_Template_mat_checkbox_ngModelChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r26);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r27.companyUser = $event;
          })("change", function AdminsComponent_div_0_Template_mat_checkbox_change_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r26);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r28.onChangeAdmin($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Display All Admins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-table", 15, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](19, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, AdminsComponent_div_0_mat_header_cell_20_Template, 2, 0, "mat-header-cell", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, AdminsComponent_div_0_mat_cell_21_Template, 2, 1, "mat-cell", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](22, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, AdminsComponent_div_0_mat_header_cell_23_Template, 2, 0, "mat-header-cell", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, AdminsComponent_div_0_mat_cell_24_Template, 2, 1, "mat-cell", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](25, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, AdminsComponent_div_0_mat_header_cell_26_Template, 2, 0, "mat-header-cell", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, AdminsComponent_div_0_mat_cell_27_Template, 2, 2, "mat-cell", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](28, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, AdminsComponent_div_0_mat_header_cell_29_Template, 2, 0, "mat-header-cell", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, AdminsComponent_div_0_mat_cell_30_Template, 2, 1, "mat-cell", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](31, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, AdminsComponent_div_0_mat_header_cell_32_Template, 2, 0, "mat-header-cell", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, AdminsComponent_div_0_mat_cell_33_Template, 5, 2, "mat-cell", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](34, AdminsComponent_div_0_mat_header_row_34_Template, 1, 0, "mat-header-row", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](35, AdminsComponent_div_0_mat_row_35_Template, 1, 0, "mat-row", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](36, AdminsComponent_div_0_div_36_Template, 3, 0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r0.companyUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx_r0.admins);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx_r0.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx_r0.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.admins.data.length === 0);
        }
      }

      function AdminsComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " How did you get here ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Sorry you can't access the page you're looking for. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " There may be a misspelling in the URL entered,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "or the page you are looking for may no longer exist. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var AdminsComponent = /*#__PURE__*/function () {
        function AdminsComponent(usersServie, cdr, router, route, userService, _snackBarService, notification) {
          _classCallCheck(this, AdminsComponent);

          this.usersServie = usersServie;
          this.cdr = cdr;
          this.router = router;
          this.route = route;
          this.userService = userService;
          this._snackBarService = _snackBarService;
          this.notification = notification;
          this.displayedColumns = ["fullname", "email", "companyname", "stat", "action"];
          this.admins = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
          this.hidden = false;
          this.companyUser = false;
          this.subscritions = [];
        }

        _createClass(AdminsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.localStorageCompany = this.getSelectedCompanyFromLocalStorage(); //access page part

            if (!this.localStorageCompany) {
              this.hidden = true;
              this.notification.showError("Please select your Company!", "");
            } else {
              this.hidden = false;
            }

            this.subscritions.push(this.usersServie.getAdminAll().subscribe(function (data) {
              // console.log(data);
              _this2.originalData = data;

              if (_this2.localStorageCompany) {
                _this2.admins.data = data.filter(function (userData) {
                  return userData.companies.includes(_this2.localStorageCompany);
                });
              } else {
                _this2.admins.data = data.filter(function (userData) {
                  return userData.companies.length == 0;
                });
              }

              _this2.cdr.detectChanges();
            }));
          }
        }, {
          key: "handleEditClick",
          value: function handleEditClick(userId) {
            this.router.navigateByUrl('/user-management/edit/' + userId);
          } //Gets the Selected Company from Local Storage

        }, {
          key: "getSelectedCompanyFromLocalStorage",
          value: function getSelectedCompanyFromLocalStorage() {
            return this.userService.getSelectedCompanyFromLocalStorage();
          }
        }, {
          key: "handleAddProfile",
          value: function handleAddProfile() {
            this.router.navigateByUrl('/user-management/new-admin');
          }
        }, {
          key: "deleteAdmin",
          value: function deleteAdmin(id) {
            var _this3 = this;

            if (window.confirm('Do you want to go ahead?')) {
              this.usersServie.deleteUser(id).subscribe(function (res) {
                _this3.usersServie.getAdminAll().subscribe(function (data) {
                  // console.log(data);
                  if (_this3.companyUser) {
                    _this3.admins.data = data;
                  } else {
                    if (_this3.localStorageCompany) {
                      _this3.admins.data = data.filter(function (userData) {
                        return userData.companies.includes(_this3.localStorageCompany);
                      });
                    } else {
                      _this3.admins.data = data.filter(function (userData) {
                        return userData.companies.length == 0;
                      });
                    }
                  }

                  _this3.cdr.detectChanges();
                });

                _this3._snackBarService.info('Deleted a User');
              });
            }
          }
        }, {
          key: "onChangeAdmin",
          value: function onChangeAdmin(event) {
            var _this4 = this;

            this.companyUser = event.checked;

            if (this.companyUser) {
              this.admins.data = this.originalData;
            } else {
              if (this.localStorageCompany) {
                this.admins.data = this.originalData.filter(function (userData) {
                  return userData.companies.includes(_this4.localStorageCompany);
                });
              } else {
                this.admins.data = this.originalData;
              }
            }
          }
        }]);

        return AdminsComponent;
      }();

      AdminsComponent.??fac = function AdminsComponent_Factory(t) {
        return new (t || AdminsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]));
      };

      AdminsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AdminsComponent,
        selectors: [["app-admins"]],
        decls: 2,
        vars: 2,
        consts: [["class", "row", 4, "ngIf"], ["class", "error error-3 d-flex flex-row-fluid bgi-size-cover bgi-position-center", "style", "background-image: url('./assets/media/error/bg3.jpg'); height: 100%;zoom: 1;\n  display: block;\n  min-height: 80vh;\n  font-size: 14px;\n  line-height: 1.4;\n  color: #0e1724;", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], [1, "pb-3"], [1, "col-xl-6"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "col-xl-6", "all-admin-user", "align-self-center", "d-flex"], ["color", "primary", 3, "ngModel", "ngModelChange", "change"], [1, "example-container", "mat-elevation-z8"], [3, "dataSource"], ["table", ""], ["matColumnDef", "fullname"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "email"], ["matColumnDef", "companyname"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "stat"], ["matColumnDef", "action"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [4, "ngIf"], [3, "ngClass"], ["title", "Edit Admin", 1, "btn", "btn-icon", "btn-light", "btn-hover-primary", "btn-sm", "mx-3", 3, "click"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-md", "svg-icon-primary", 3, "inlineSVG"], ["title", "Delete Admin", 1, "btn", "btn-icon", "btn-light", "btn-hover-danger", "btn-sm", 3, "click"], ["cacheSVG", "false", 1, "svg-icon", "svg-icon-md", "svg-icon-danger", 3, "inlineSVG"], [2, "text-align", "center", "padding", "10px"], [1, "error", "error-3", "d-flex", "flex-row-fluid", "bgi-size-cover", "bgi-position-center", 2, "background-image", "url('./assets/media/error/bg3.jpg')", "height", "100%", "zoom", "1", "display", "block", "min-height", "80vh", "font-size", "14px", "line-height", "1.4", "color", "#0e1724"], [1, "px-10", "px-md-30", "py-10", "py-md-0", "d-flex", "flex-column", "justify-content-md-center"], [1, "display-4", "font-weight-boldest", "text-white", "mb-12"], [1, "font-size-h1", "font-weight-boldest", "text-dark-75"], [1, "font-size-h4", "line-height-md"]],
        template: function AdminsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, AdminsComponent_div_0_Template, 37, 5, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, AdminsComponent_div_1_Template, 10, 0, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.hidden);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.hidden);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_9__["InlineSVGDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]],
        styles: [".all-admin-user[_ngcontent-%COMP%] {\n  justify-content: flex-end !important;\n}\n\n@media (max-width: 1200px) {\n  .all-admin-user[_ngcontent-%COMP%] {\n    justify-content: flex-start !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyLW1hbmFnZW1lbnQvYWRtaW5zL2FkbWlucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLHNDQUFBO0VBQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci1tYW5hZ2VtZW50L2FkbWlucy9hZG1pbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxsLWFkbWluLXVzZXIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAuYWxsLWFkbWluLXVzZXIge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AdminsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-admins',
            templateUrl: './admins.component.html',
            styleUrls: ['./admins.component.scss']
          }]
        }], function () {
          return [{
            type: _shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
          }, {
            type: src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"]
          }, {
            type: src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/user-management/advertisers/advertisers.component.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/modules/user-management/advertisers/advertisers.component.ts ***!
      \******************************************************************************/

    /*! exports provided: AdvertisersComponent */

    /***/
    function srcAppModulesUserManagementAdvertisersAdvertisersComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdvertisersComponent", function () {
        return AdvertisersComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
      /* harmony import */


      var _shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/service/users.service */
      "./src/app/shared/service/users.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/service/snackbar.service */
      "./src/app/shared/service/snackbar.service.ts");
      /* harmony import */


      var src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/service/notification.service */
      "./src/app/shared/service/notification.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var ng_inline_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-inline-svg */
      "./node_modules/ng-inline-svg/__ivy_ngcc__/lib_esmodule/index.js");

      function AdvertisersComponent_div_0_mat_header_cell_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Full Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function AdvertisersComponent_div_0_mat_cell_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r16.fullname, " ");
        }
      }

      function AdvertisersComponent_div_0_mat_header_cell_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function AdvertisersComponent_div_0_mat_cell_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r17.email, " ");
        }
      }

      function AdvertisersComponent_div_0_mat_header_cell_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Companies ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function AdvertisersComponent_div_0_mat_cell_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", "font-weight-bold");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r18.companyname, " ");
        }
      }

      function AdvertisersComponent_div_0_mat_header_cell_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Stat# ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function AdvertisersComponent_div_0_mat_cell_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r19.tags.length, " ");
        }
      }

      function AdvertisersComponent_div_0_mat_header_cell_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Action ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function AdvertisersComponent_div_0_mat_cell_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AdvertisersComponent_div_0_mat_cell_33_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22);

            var element_r20 = ctx.$implicit;

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r21.handleEditClick(element_r20._key);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AdvertisersComponent_div_0_mat_cell_33_Template_a_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22);

            var element_r20 = ctx.$implicit;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r23.deleteAdvertiser(element_r20._key);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("inlineSVG", "./assets/media/svg/icons/Communication/Write.svg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("inlineSVG", "./assets/media/svg/icons/General/Trash.svg");
        }
      }

      function AdvertisersComponent_div_0_mat_header_row_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "mat-header-row");
        }
      }

      function AdvertisersComponent_div_0_mat_row_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "mat-row");
        }
      }

      function AdvertisersComponent_div_0_div_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "No records found");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function AdvertisersComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Advertiser Users");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AdvertisersComponent_div_0_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r25.handleAddProfile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Add Advertiser ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-checkbox", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AdvertisersComponent_div_0_Template_mat_checkbox_ngModelChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r26);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r27.companyUser = $event;
          })("change", function AdvertisersComponent_div_0_Template_mat_checkbox_change_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r26);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r28.onChangeAdvertiser($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Display All Advertisers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-table", 15, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](19, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, AdvertisersComponent_div_0_mat_header_cell_20_Template, 2, 0, "mat-header-cell", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, AdvertisersComponent_div_0_mat_cell_21_Template, 2, 1, "mat-cell", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](22, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, AdvertisersComponent_div_0_mat_header_cell_23_Template, 2, 0, "mat-header-cell", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, AdvertisersComponent_div_0_mat_cell_24_Template, 2, 1, "mat-cell", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](25, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, AdvertisersComponent_div_0_mat_header_cell_26_Template, 2, 0, "mat-header-cell", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, AdvertisersComponent_div_0_mat_cell_27_Template, 2, 2, "mat-cell", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](28, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, AdvertisersComponent_div_0_mat_header_cell_29_Template, 2, 0, "mat-header-cell", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, AdvertisersComponent_div_0_mat_cell_30_Template, 2, 1, "mat-cell", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](31, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, AdvertisersComponent_div_0_mat_header_cell_32_Template, 2, 0, "mat-header-cell", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, AdvertisersComponent_div_0_mat_cell_33_Template, 5, 2, "mat-cell", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](34, AdvertisersComponent_div_0_mat_header_row_34_Template, 1, 0, "mat-header-row", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](35, AdvertisersComponent_div_0_mat_row_35_Template, 1, 0, "mat-row", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](36, AdvertisersComponent_div_0_div_36_Template, 3, 0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r0.companyUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx_r0.advertisers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx_r0.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx_r0.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.advertisers.data.length === 0);
        }
      }

      function AdvertisersComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " How did you get here ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Sorry you can't access the page you're looking for. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " There may be a misspelling in the URL entered,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "or the page you are looking for may no longer exist. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var AdvertisersComponent = /*#__PURE__*/function () {
        function AdvertisersComponent(usersServie, cdr, router, route, userService, _snackBarService, notification) {
          _classCallCheck(this, AdvertisersComponent);

          this.usersServie = usersServie;
          this.cdr = cdr;
          this.router = router;
          this.route = route;
          this.userService = userService;
          this._snackBarService = _snackBarService;
          this.notification = notification;
          this.displayedColumns = ["fullname", "email", "companyname", "stat", "action"];
          this.advertisers = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
          this.hidden = false;
          this.companyUser = false;
          this.subscritions = [];
        }

        _createClass(AdvertisersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.localStorageCompany = this.getSelectedCompanyFromLocalStorage(); //access page part

            if (!this.localStorageCompany) {
              this.hidden = true;
              this.notification.showError("Please select your Company!", "");
            } else {
              this.hidden = false;
            }

            this.subscritions.push(this.usersServie.getAdvertiserAll().subscribe(function (data) {
              // console.log(data);
              _this5.originalData = data;

              if (_this5.localStorageCompany) {
                _this5.advertisers.data = data.filter(function (userData) {
                  return userData.companies.includes(_this5.localStorageCompany);
                });
              } else {
                _this5.advertisers.data = data.filter(function (userData) {
                  return userData.companies.length == 0;
                });
              }

              _this5.cdr.detectChanges();
            }));
          }
        }, {
          key: "handleEditClick",
          value: function handleEditClick(userId) {
            this.router.navigateByUrl('/user-management/edit/' + userId);
          } //Gets the Selected Company from Local Storage

        }, {
          key: "getSelectedCompanyFromLocalStorage",
          value: function getSelectedCompanyFromLocalStorage() {
            return this.userService.getSelectedCompanyFromLocalStorage();
          }
        }, {
          key: "handleAddProfile",
          value: function handleAddProfile() {
            this.router.navigateByUrl('/user-management/new-advertiser');
          }
        }, {
          key: "deleteAdvertiser",
          value: function deleteAdvertiser(id) {
            var _this6 = this;

            if (window.confirm('Do you want to go ahead?')) {
              this.usersServie.deleteUser(id).subscribe(function (res) {
                _this6.usersServie.getAdvertiserAll().subscribe(function (data) {
                  // console.log(data);
                  if (_this6.companyUser) {
                    _this6.advertisers.data = data;
                  } else {
                    if (_this6.localStorageCompany) {
                      _this6.advertisers.data = data.filter(function (userData) {
                        return userData.companies.includes(_this6.localStorageCompany);
                      });
                    } else {
                      _this6.advertisers.data = data.filter(function (userData) {
                        return userData.companies.length == 0;
                      });
                    }
                  }

                  _this6.cdr.detectChanges();
                });

                _this6._snackBarService.info('Deleted a User');
              });
            }
          }
        }, {
          key: "onChangeAdvertiser",
          value: function onChangeAdvertiser(event) {
            var _this7 = this;

            this.companyUser = event.checked;

            if (this.companyUser) {
              this.advertisers.data = this.originalData;
            } else {
              if (this.localStorageCompany) {
                this.advertisers.data = this.originalData.filter(function (userData) {
                  return userData.companies.includes(_this7.localStorageCompany);
                });
              } else {
                this.advertisers.data = this.originalData;
              }
            }
          }
        }]);

        return AdvertisersComponent;
      }();

      AdvertisersComponent.??fac = function AdvertisersComponent_Factory(t) {
        return new (t || AdvertisersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]));
      };

      AdvertisersComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AdvertisersComponent,
        selectors: [["app-advertisers"]],
        decls: 2,
        vars: 2,
        consts: [["class", "row", 4, "ngIf"], ["class", "error error-3 d-flex flex-row-fluid bgi-size-cover bgi-position-center", "style", "background-image: url('./assets/media/error/bg3.jpg'); height: 100%;zoom: 1;\n  display: block;\n  min-height: 80vh;\n  font-size: 14px;\n  line-height: 1.4;\n  color: #0e1724;", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], [1, "pb-3"], [1, "col-xl-6"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "col-xl-6", "all-advertiser-user", "align-self-center", "d-flex"], ["color", "primary", 3, "ngModel", "ngModelChange", "change"], [1, "example-container", "mat-elevation-z8"], [3, "dataSource"], ["table", ""], ["matColumnDef", "fullname"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "email"], ["matColumnDef", "companyname"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "stat"], ["matColumnDef", "action"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [4, "ngIf"], [3, "ngClass"], ["title", "Edit Advertiser", 1, "btn", "btn-icon", "btn-light", "btn-hover-primary", "btn-sm", "mx-3", 3, "click"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-md", "svg-icon-primary", 3, "inlineSVG"], ["title", "Delete Advertiser", 1, "btn", "btn-icon", "btn-light", "btn-hover-danger", "btn-sm", 3, "click"], ["cacheSVG", "false", 1, "svg-icon", "svg-icon-md", "svg-icon-danger", 3, "inlineSVG"], [2, "text-align", "center", "padding", "10px"], [1, "error", "error-3", "d-flex", "flex-row-fluid", "bgi-size-cover", "bgi-position-center", 2, "background-image", "url('./assets/media/error/bg3.jpg')", "height", "100%", "zoom", "1", "display", "block", "min-height", "80vh", "font-size", "14px", "line-height", "1.4", "color", "#0e1724"], [1, "px-10", "px-md-30", "py-10", "py-md-0", "d-flex", "flex-column", "justify-content-md-center"], [1, "display-4", "font-weight-boldest", "text-white", "mb-12"], [1, "font-size-h1", "font-weight-boldest", "text-dark-75"], [1, "font-size-h4", "line-height-md"]],
        template: function AdvertisersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, AdvertisersComponent_div_0_Template, 37, 5, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, AdvertisersComponent_div_1_Template, 10, 0, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.hidden);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.hidden);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_9__["InlineSVGDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]],
        styles: [".all-advertiser-user[_ngcontent-%COMP%] {\n  justify-content: flex-end !important;\n}\n\n@media (max-width: 1200px) {\n  .all-admin-user[_ngcontent-%COMP%] {\n    justify-content: flex-start !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyLW1hbmFnZW1lbnQvYWR2ZXJ0aXNlcnMvYWR2ZXJ0aXNlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSxzQ0FBQTtFQUNOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3VzZXItbWFuYWdlbWVudC9hZHZlcnRpc2Vycy9hZHZlcnRpc2Vycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGwtYWR2ZXJ0aXNlci11c2VyIHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgLmFsbC1hZG1pbi11c2VyIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AdvertisersComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-advertisers',
            templateUrl: './advertisers.component.html',
            styleUrls: ['./advertisers.component.scss']
          }]
        }], function () {
          return [{
            type: _shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
          }, {
            type: src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"]
          }, {
            type: src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/user-management/edit-users/add-company/add-company.component.ts":
    /*!*****************************************************************************************!*\
      !*** ./src/app/modules/user-management/edit-users/add-company/add-company.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: AddCompanyComponent */

    /***/
    function srcAppModulesUserManagementEditUsersAddCompanyAddCompanyComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddCompanyComponent", function () {
        return AddCompanyComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var src_app_shared_service_companies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/service/companies.service */
      "./src/app/shared/service/companies.service.ts");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/list */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

      function AddCompanyComponent_mat_list_option_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-list-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var company_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", company_r2._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", company_r2.name, " ");
        }
      }

      var AddCompanyComponent = /*#__PURE__*/function () {
        function AddCompanyComponent(companyService, cdr, dialogRef, data) {
          _classCallCheck(this, AddCompanyComponent);

          this.companyService = companyService;
          this.cdr = cdr;
          this.dialogRef = dialogRef;
          this.data = data; //Variable for loading indicator

          this.loadingIndicator = true;
        }

        _createClass(AddCompanyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            //Sets current user to data input variable
            this.user = this.data; //Sets userCompanies to user's current companies

            this.userCompanies = this.user.companies; //Gets ALL companies available

            this.getAllCompanies();
          }
          /**
           * getAllCompanies()
           * * Gets all companies available from companyService method.
           * * @param NONE
           */

        }, {
          key: "getAllCompanies",
          value: function getAllCompanies() {
            var _this8 = this;

            this.companyService.getAllCompanies().subscribe(function (response) {
              console.log(response);
              _this8.loadingIndicator = false;
              _this8.allCompanies = response;

              _this8.cdr.detectChanges();
            });
          }
          /**
           * save()
           * * Saves added or removed companies to the user's profile
           * TODO: TBD
           * @param NONE
           */

        }, {
          key: "save",
          value: function save() {
            this.user.companies = _toConsumableArray(this.userCompanies);
            this.dialogRef.close({
              user: this.user
            });
          }
          /**
           * close()
           * * Closes the dialog and does not make any changes.
           *
           */

        }, {
          key: "close",
          value: function close() {
            this.dialogRef.close();
          }
        }]);

        return AddCompanyComponent;
      }();

      AddCompanyComponent.??fac = function AddCompanyComponent_Factory(t) {
        return new (t || AddCompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_service_companies_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
      };

      AddCompanyComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AddCompanyComponent,
        selectors: [["app-add-company"]],
        decls: 21,
        vars: 2,
        consts: [[1, "mat-typography"], [1, "row"], [1, "col-xl-12"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], ["color", "primary", 3, "ngModel", "ngModelChange"], ["company", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "row", "buttons"], [1, "col-md-6"], ["mat-raised-button", "", "color", "secondary", 1, "save-button", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "back-button", 3, "click"], [3, "value"]],
        template: function AddCompanyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-dialog-content", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Add or Remove Companies");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-selection-list", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AddCompanyComponent_Template_mat_selection_list_ngModelChange_11_listener($event) {
              return ctx.userCompanies = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, AddCompanyComponent_mat_list_option_13_Template, 2, 2, "mat-list-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AddCompanyComponent_Template_button_click_16_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " Cancel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AddCompanyComponent_Template_button_click_19_listener() {
              return ctx.save();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " Save ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.userCompanies);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.allCompanies);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatSelectionList"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListOption"]],
        styles: [".buttons[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 100%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyLW1hbmFnZW1lbnQvZWRpdC11c2Vycy9hZGQtY29tcGFueS9hZGQtY29tcGFueS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy91c2VyLW1hbmFnZW1lbnQvZWRpdC11c2Vycy9hZGQtY29tcGFueS9hZGQtY29tcGFueS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b25zIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AddCompanyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-company',
            templateUrl: './add-company.component.html',
            styleUrls: ['./add-company.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_shared_service_companies_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/user-management/edit-users/add-tag/add-tag.component.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/modules/user-management/edit-users/add-tag/add-tag.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: AddTagComponent */

    /***/
    function srcAppModulesUserManagementEditUsersAddTagAddTagComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddTagComponent", function () {
        return AddTagComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var _tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../tag-management/tag-management.service */
      "./src/app/modules/tag-management/tag-management.service.ts");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/list */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

      function AddTagComponent_mat_list_option_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-list-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var tag_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", tag_r2._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", tag_r2.name, " ");
        }
      }

      var AddTagComponent = /*#__PURE__*/function () {
        function AddTagComponent(tagManagementService, cdr, dialogRef, data) {
          _classCallCheck(this, AddTagComponent);

          this.tagManagementService = tagManagementService;
          this.cdr = cdr;
          this.dialogRef = dialogRef;
          this.data = data; //Variable for loading indicator

          this.loadingIndicator = true;
        }

        _createClass(AddTagComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            //Sets current user to data input variable
            this.user = this.data; //Sets userTags to user's current tags

            this.userTags = this.user.tagsId; //Gets ALL companies available

            this.getAllTags();
          }
        }, {
          key: "getAllTags",
          value: function getAllTags() {
            var _this9 = this;

            this.tagManagementService.getAllTags().subscribe(function (response) {
              console.log(response);
              _this9.loadingIndicator = false;
              _this9.allTags = response;

              _this9.cdr.detectChanges();
            });
          }
        }, {
          key: "handleSubmit",
          value: function handleSubmit() {
            this.user.tagsId = _toConsumableArray(this.userTags);
            this.dialogRef.close({
              user: this.user
            });
          }
          /**
           * close()
           * * Closes the dialog and does not make any changes.
           *
           */

        }, {
          key: "close",
          value: function close() {
            this.dialogRef.close();
          }
        }]);

        return AddTagComponent;
      }();

      AddTagComponent.??fac = function AddTagComponent_Factory(t) {
        return new (t || AddTagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_2__["TagManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
      };

      AddTagComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AddTagComponent,
        selectors: [["app-add-tag"]],
        decls: 21,
        vars: 2,
        consts: [[1, "mat-typography"], [1, "row"], [1, "col-xl-12"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], ["color", "primary", 3, "ngModel", "ngModelChange"], ["tag", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "row", "buttons"], [1, "col-md-6"], ["mat-raised-button", "", "color", "secondary", 1, "save-button", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "back-button", 3, "click"], [3, "value"]],
        template: function AddTagComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-dialog-content", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Add or Remove Tags");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-selection-list", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AddTagComponent_Template_mat_selection_list_ngModelChange_11_listener($event) {
              return ctx.userTags = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, AddTagComponent_mat_list_option_13_Template, 2, 2, "mat-list-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AddTagComponent_Template_button_click_16_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " Cancel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AddTagComponent_Template_button_click_19_listener() {
              return ctx.handleSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " Save ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.userTags);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.allTags);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatSelectionList"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListOption"]],
        styles: [".buttons[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 100%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyLW1hbmFnZW1lbnQvZWRpdC11c2Vycy9hZGQtdGFnL2FkZC10YWcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci1tYW5hZ2VtZW50L2VkaXQtdXNlcnMvYWRkLXRhZy9hZGQtdGFnLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbnMge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICBidXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gICJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AddTagComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-tag',
            templateUrl: './add-tag.component.html',
            styleUrls: ['./add-tag.component.scss']
          }]
        }], function () {
          return [{
            type: _tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_2__["TagManagementService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/user-management/edit-users/edit-users.component.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/modules/user-management/edit-users/edit-users.component.ts ***!
      \****************************************************************************/

    /*! exports provided: EditUsersComponent */

    /***/
    function srcAppModulesUserManagementEditUsersEditUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditUsersComponent", function () {
        return EditUsersComponent;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _user_password_reset_user_password_reset_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-password-reset/user-password-reset.component */
      "./src/app/modules/user-management/edit-users/user-password-reset/user-password-reset.component.ts");
      /* harmony import */


      var _add_tag_add_tag_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./add-tag/add-tag.component */
      "./src/app/modules/user-management/edit-users/add-tag/add-tag.component.ts");
      /* harmony import */


      var _add_company_add_company_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-company/add-company.component */
      "./src/app/modules/user-management/edit-users/add-company/add-company.component.ts");
      /* harmony import */


      var _user_management_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../user-management.service */
      "./src/app/modules/user-management/user-management.service.ts");
      /* harmony import */


      var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../auth/_services/auth.service */
      "./src/app/modules/auth/_services/auth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/service/snackbar.service */
      "./src/app/shared/service/snackbar.service.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var src_app_shared_service_companies_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/service/companies.service */
      "./src/app/shared/service/companies.service.ts");
      /* harmony import */


      var src_app_shared_service_tags_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/service/tags.service */
      "./src/app/shared/service/tags.service.ts");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/list */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/divider */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");

      function EditUsersComponent_mat_error_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Name is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function EditUsersComponent_mat_error_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Email is not valid");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function EditUsersComponent_mat_error_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Role is not valid");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function EditUsersComponent_mat_list_49_mat_list_item_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var tag_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", tag_r7.name, " ");
        }
      }

      function EditUsersComponent_mat_list_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-list", null, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, EditUsersComponent_mat_list_49_mat_list_item_2_Template, 3, 1, "mat-list-item", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r3.userTags);
        }
      }

      function EditUsersComponent_mat_list_62_mat_list_item_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var company_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", company_r10.name, " ");
        }
      }

      function EditUsersComponent_mat_list_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-list", null, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, EditUsersComponent_mat_list_62_mat_list_item_2_Template, 3, 1, "mat-list-item", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r4.userCompanies);
        }
      }

      var EditUsersComponent = /*#__PURE__*/function () {
        function EditUsersComponent(userManagementService, authService, route, sS, modalService, companyService, tagService, snackBarService, dialog) {
          _classCallCheck(this, EditUsersComponent);

          this.userManagementService = userManagementService;
          this.authService = authService;
          this.route = route;
          this.sS = sS;
          this.modalService = modalService;
          this.companyService = companyService;
          this.tagService = tagService;
          this.snackBarService = snackBarService;
          this.dialog = dialog;
        }

        _createClass(EditUsersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.userProfileFG = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
              role: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
            });

            if (this.route.snapshot.params.id) {
              this.getUserData(this.route.snapshot.params.id); // await this.getUserCompanies(this.user.companies);
            } else {
              this.user = this.authService.currentUserSubject.value;
            }
          }
          /**
           * getUserData(id)
           * @param id: User _key value
           */

        }, {
          key: "getUserData",
          value: function getUserData(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.userManagementService.getUser(id).toPromise();

                    case 2:
                      this.user = _context.sent;

                      if (!this.user.companies.length) {
                        _context.next = 7;
                        break;
                      }

                      _context.next = 6;
                      return this.companyService.getUserCompanies(this.user.companies).toPromise();

                    case 6:
                      this.userCompanies = _context.sent;

                    case 7:
                      if (!this.user.tagsId) {
                        _context.next = 11;
                        break;
                      }

                      _context.next = 10;
                      return this.tagService.getUserTags(this.user.tagsId).toPromise();

                    case 10:
                      this.userTags = _context.sent;

                    case 11:
                      //Patches value into FormGroup
                      this.userProfileFG.patchValue(this.user);

                    case 12:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "updateUserProfile",
          value: function updateUserProfile($event) {
            var _this10 = this;

            if (this.userProfileFG.valid) {
              this.user = Object.assign(Object.assign({}, this.user), this.userProfileFG.value);
              this.userManagementService.updateUser(this.user).subscribe(function (x) {
                _this10.sS.info('user profile updated');
              });
            }
          }
        }, {
          key: "openPasswordResetDialog",
          value: function openPasswordResetDialog() {
            var modalRef = this.modalService.open(_user_password_reset_user_password_reset_component__WEBPACK_IMPORTED_MODULE_3__["UserPasswordResetComponent"], {
              size: 'md'
            });
            modalRef.componentInstance.data = {
              id: this.user._key
            };
            modalRef.result.then(function (c) {});
          }
        }, {
          key: "openAddTagDialog",
          value: function openAddTagDialog() {
            var _this11 = this;

            var tagdialog = this.dialog.open(_add_tag_add_tag_component__WEBPACK_IMPORTED_MODULE_4__["AddTagComponent"], {
              height: 'auto',
              width: '600px',
              data: this.user
            }).afterClosed().subscribe(function (response) {
              //If user hits save
              if (response) {
                // console.log(response);
                //New variable readability -- all user data
                _this11.user = response.user; //Updates current user with new company selection.

                _this11.userManagementService.updateUser(_this11.user).subscribe(function (x) {
                  //
                  _this11.getUserData(_this11.user._key);

                  _this11.snackBarService.info("Updated  ".concat(_this11.user.fullname, "'s tags."));
                });
              }
            });
          } //Add/Edit Companies to a user profile

        }, {
          key: "openAddCompanyDialog",
          value: function openAddCompanyDialog() {
            var _this12 = this;

            console.log(this.user);
            var dialogRef = this.dialog.open(_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_5__["AddCompanyComponent"], {
              height: 'auto',
              width: '600px',
              data: this.user
            }).afterClosed().subscribe(function (response) {
              //If user hits save
              if (response) {
                console.log(response); //New variable readability -- all user data

                _this12.user = response.user; //Updates current user with new company selection.

                _this12.userManagementService.updateUser(_this12.user).subscribe(function (x) {
                  //
                  _this12.getUserData(_this12.user._key);

                  _this12.snackBarService.info("Updated  ".concat(_this12.user.fullname, "'s companies."));
                });
              }
            }); // dialogRef.afterClosed().subscribe((result) => {
            //   console.log(`Dialog result: ${result}`);
            // });
            // console.log(this.user);
            // const initialState = { data: this.user };
            // const modalRef = this.modalService.open(AddCompanyComponent, {
            //   size: 'md',
            // });
            // modalRef.componentInstance.companies = [...this.user.companies];
            // modalRef.result.then((res) => {
            //   //If a result is passed back, update the user profile with new companies.
            //   if (res) {
            //     this.user.companies = [...res];
            //     this.userManagementService.updateUser(this.user).subscribe((x) => {
            //       this.getUserData(this.user._key);
            //       this.snackBarService.info(
            //         `Updated  ${this.user.fullname}'s companies.`
            //       );
            //     });
            //   }
            // });
          }
        }]);

        return EditUsersComponent;
      }();

      EditUsersComponent.??fac = function EditUsersComponent_Factory(t) {
        return new (t || EditUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_user_management_service__WEBPACK_IMPORTED_MODULE_6__["UserManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_9__["SnackbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_shared_service_companies_service__WEBPACK_IMPORTED_MODULE_11__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_shared_service_tags_service__WEBPACK_IMPORTED_MODULE_12__["TagsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_9__["SnackbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"]));
      };

      EditUsersComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: EditUsersComponent,
        selectors: [["app-edit-users"]],
        decls: 63,
        vars: 10,
        consts: [[1, "row"], [1, "col-xl-6"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], ["mat-button", "", "color", "primary", "type", "button", 3, "click"], [1, "card-body"], [1, "example-container", 3, "formGroup", "submit"], [1, "col-md-12"], ["matInput", "", "formControlName", "fullname", "placeholder", "Full Name"], [4, "ngIf"], ["matInput", "", "formControlName", "email", "placeholder", "Email"], ["formControlName", "role", "placeholder", "Role"], [3, "value"], [1, "row", "updateProfile"], ["mat-raised-button", "", "color", "primary", "type", "submit"], ["mat-button", "", "color", "primary", 3, "click"], [1, "col-xl-12"], ["tag", ""], [4, "ngFor", "ngForOf"], ["company", ""]],
        template: function EditUsersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "h3", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Update Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function EditUsersComponent_Template_button_click_7_listener() {
              return ctx.openPasswordResetDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, " Reset Password ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("submit", function EditUsersComponent_Template_form_submit_10_listener($event) {
              return ctx.updateUserProfile($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](14, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](15, EditUsersComponent_mat_error_15_Template, 2, 0, "mat-error", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](19, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](20, EditUsersComponent_mat_error_20_Template, 2, 0, "mat-error", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "mat-select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "mat-option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, "Super Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "mat-option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, "Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "mat-option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "Publisher");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "mat-option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, "Advertiser");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](33, EditUsersComponent_mat_error_33_Template, 2, 0, "mat-error", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37, " Update Profile ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "h3", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43, "Tags");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function EditUsersComponent_Template_button_click_44_listener() {
              return ctx.openAddTagDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](45, " Add or Remove ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](49, EditUsersComponent_mat_list_49_Template, 3, 1, "mat-list", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "h3", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](56, "Companies");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function EditUsersComponent_Template_button_click_57_listener() {
              return ctx.openAddCompanyDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](58, " Add or Remove ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](62, EditUsersComponent_mat_list_62_Template, 3, 1, "mat-list", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.userProfileFG);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.userProfileFG.get("fullname").errors == null ? null : ctx.userProfileFG.get("fullname").errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.userProfileFG.get("email").errors == null ? null : ctx.userProfileFG.get("email").errors.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.userProfileFG.get("role").errors == null ? null : ctx.userProfileFG.get("role").errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.user);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.user);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatError"], _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListItem"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDivider"]],
        styles: [".card-title[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: space-between;\n}\n\n.updateProfile[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.warning-text[_ngcontent-%COMP%] {\n  color: #f00;\n}\n\n.list-group[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-height: 300px;\n  min-width: 300px;\n}\n\n.mat-table[_ngcontent-%COMP%] {\n  overflow: auto;\n  max-height: 300px;\n}\n\n.example[_ngcontent-%COMP%]   .example-preview[_ngcontent-%COMP%] {\n  min-height: 165px;\n  padding: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyLW1hbmFnZW1lbnQvZWRpdC11c2Vycy9lZGl0LXVzZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBR0U7RUFDRSxlQUFBO0FBQUo7O0FBSUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBR0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7QUFBRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci1tYW5hZ2VtZW50L2VkaXQtdXNlcnMvZWRpdC11c2Vycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXRpdGxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi51cGRhdGVQcm9maWxlIGJ1dHRvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi53YXJuaW5nLXRleHQge1xyXG4gIGNvbG9yOiAjZjAwO1xyXG59XHJcblxyXG4ubGlzdC1ncm91cCB7XHJcbiAgLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG59XHJcbi5tYXQtdGFibGUge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZSAuZXhhbXBsZS1wcmV2aWV3IHtcclxuICBtaW4taGVpZ2h0OiAxNjVweDtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](EditUsersComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-edit-users',
            templateUrl: './edit-users.component.html',
            styleUrls: ['./edit-users.component.scss']
          }]
        }], function () {
          return [{
            type: _user_management_service__WEBPACK_IMPORTED_MODULE_6__["UserManagementService"]
          }, {
            type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
          }, {
            type: src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_9__["SnackbarService"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"]
          }, {
            type: src_app_shared_service_companies_service__WEBPACK_IMPORTED_MODULE_11__["CompanyService"]
          }, {
            type: src_app_shared_service_tags_service__WEBPACK_IMPORTED_MODULE_12__["TagsService"]
          }, {
            type: src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_9__["SnackbarService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/user-management/edit-users/user-password-reset/user-password-reset.component.ts":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/modules/user-management/edit-users/user-password-reset/user-password-reset.component.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: UserPasswordResetComponent */

    /***/
    function srcAppModulesUserManagementEditUsersUserPasswordResetUserPasswordResetComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserPasswordResetComponent", function () {
        return UserPasswordResetComponent;
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


      var src_app_shared_service_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/service/helper.service */
      "./src/app/shared/service/helper.service.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _user_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../user-management.service */
      "./src/app/modules/user-management/user-management.service.ts");
      /* harmony import */


      var src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/service/snackbar.service */
      "./src/app/shared/service/snackbar.service.ts");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function UserPasswordResetComponent_mat_error_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Password is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UserPasswordResetComponent_mat_error_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Confirm password is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UserPasswordResetComponent_mat_error_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Password is not match");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var UserPasswordResetComponent = /*#__PURE__*/function () {
        function UserPasswordResetComponent(activeModal, userManagementService, fb, sS) {
          _classCallCheck(this, UserPasswordResetComponent);

          this.activeModal = activeModal;
          this.userManagementService = userManagementService;
          this.fb = fb;
          this.sS = sS;
        }

        _createClass(UserPasswordResetComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.passwordFG = this.fb.group({
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              passwordConfirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
            }, {
              validator: src_app_shared_service_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"].passwordConfirming
            });
          }
        }, {
          key: "handleSubmit",
          value: function handleSubmit() {
            var _this13 = this;

            this.passwordFG.markAllAsTouched();

            if (this.passwordFG.valid) {
              var password = this.passwordFG.value.password;
              var id = this.data.id;
              this.userManagementService.resetPassword(id, password).subscribe(function (x) {
                _this13.sS.info('password has been reset');

                _this13.activeModal.close();
              });
            }
          }
        }]);

        return UserPasswordResetComponent;
      }();

      UserPasswordResetComponent.??fac = function UserPasswordResetComponent_Factory(t) {
        return new (t || UserPasswordResetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_user_management_service__WEBPACK_IMPORTED_MODULE_4__["UserManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_5__["SnackbarService"]));
      };

      UserPasswordResetComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: UserPasswordResetComponent,
        selectors: [["app-user-password-reset"]],
        inputs: {
          data: "data"
        },
        decls: 24,
        vars: 4,
        consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "example-container", 3, "formGroup"], [1, "row"], [1, "col-md-12"], ["type", "password", "matInput", "", "formControlName", "password", "placeholder", "Password"], [4, "ngIf"], ["type", "password", "matInput", "", "formControlName", "passwordConfirm", "placeholder", "Confirm Password"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]],
        template: function UserPasswordResetComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Update Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserPasswordResetComponent_Template_button_click_3_listener() {
              return ctx.activeModal.dismiss("Cross click");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, UserPasswordResetComponent_mat_error_12_Template, 2, 0, "mat-error", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, UserPasswordResetComponent_mat_error_17_Template, 2, 0, "mat-error", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, UserPasswordResetComponent_mat_error_18_Template, 2, 0, "mat-error", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserPasswordResetComponent_Template_button_click_20_listener() {
              return ctx.activeModal.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserPasswordResetComponent_Template_button_click_22_listener() {
              return ctx.handleSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Reset Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.passwordFG);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.passwordFG.get("password").errors == null ? null : ctx.passwordFG.get("password").errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.passwordFG.get("passwordConfirm").errors == null ? null : ctx.passwordFG.get("passwordConfirm").errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.passwordFG.errors == null ? null : ctx.passwordFG.errors.invalid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci1tYW5hZ2VtZW50L2VkaXQtdXNlcnMvdXNlci1wYXNzd29yZC1yZXNldC91c2VyLXBhc3N3b3JkLXJlc2V0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserPasswordResetComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-user-password-reset',
            templateUrl: './user-password-reset.component.html',
            styleUrls: ['./user-password-reset.component.scss']
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]
          }, {
            type: _user_management_service__WEBPACK_IMPORTED_MODULE_4__["UserManagementService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_5__["SnackbarService"]
          }];
        }, {
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/modules/user-management/new-admin/new-admin.component.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/modules/user-management/new-admin/new-admin.component.ts ***!
      \**************************************************************************/

    /*! exports provided: NewAdminComponent */

    /***/
    function srcAppModulesUserManagementNewAdminNewAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewAdminComponent", function () {
        return NewAdminComponent;
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


      var src_app_modules_auth_registration_confirm_password_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/modules/auth/registration/confirm-password.validator */
      "./src/app/modules/auth/registration/confirm-password.validator.ts");
      /* harmony import */


      var _user_management_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../user-management.service */
      "./src/app/modules/user-management/user-management.service.ts");
      /* harmony import */


      var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../auth/_services/auth.service */
      "./src/app/modules/auth/_services/auth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/service/snackbar.service */
      "./src/app/shared/service/snackbar.service.ts");
      /* harmony import */


      var src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/service/users.service */
      "./src/app/shared/service/users.service.ts");
      /* harmony import */


      var src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/service/notification.service */
      "./src/app/shared/service/notification.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

      function NewAdminComponent_div_0_mat_error_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Name is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NewAdminComponent_div_0_mat_error_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Email is not valid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NewAdminComponent_div_0_mat_error_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Password is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NewAdminComponent_div_0_mat_error_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Confirm Password is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NewAdminComponent_div_0_mat_error_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "'Passsword' and 'Confirm Password' didn't match.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NewAdminComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "New Admin Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "form", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function NewAdminComponent_div_0_Template_form_submit_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r8.newUserProfile($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, NewAdminComponent_div_0_mat_error_14_Template, 2, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, NewAdminComponent_div_0_mat_error_19_Template, 2, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, NewAdminComponent_div_0_mat_error_24_Template, 2, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, NewAdminComponent_div_0_mat_error_29_Template, 2, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, NewAdminComponent_div_0_mat_error_30_Template, 2, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, " Create Profile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r0.userProfileFG);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.userProfileFG.get("fullname").errors == null ? null : ctx_r0.userProfileFG.get("fullname").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.userProfileFG.get("email").errors == null ? null : ctx_r0.userProfileFG.get("email").errors.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.userProfileFG.get("password").errors == null ? null : ctx_r0.userProfileFG.get("password").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.userProfileFG.get("cPassword").errors == null ? null : ctx_r0.userProfileFG.get("cPassword").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.userProfileFG.controls["cPassword"].errors && ctx_r0.userProfileFG.controls["cPassword"].errors.ConfirmPassword);
        }
      }

      function NewAdminComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " How did you get here ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Sorry you can't access the page you're looking for. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " There may be a misspelling in the URL entered,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "or the page you are looking for may no longer exist. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var NewAdminComponent = /*#__PURE__*/function () {
        function NewAdminComponent(userManagementService, authService, route, sS, fb, userService, notification) {
          _classCallCheck(this, NewAdminComponent);

          this.userManagementService = userManagementService;
          this.authService = authService;
          this.route = route;
          this.sS = sS;
          this.fb = fb;
          this.userService = userService;
          this.notification = notification;
          this.hidden = false;
        }

        _createClass(NewAdminComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.companySelected = this.getSelectedCompanyFromLocalStorage(); //access page part

            if (!this.companySelected) {
              this.hidden = true;
              this.notification.showError("Please select your Company!", "");
            } else {
              this.hidden = false;
            }

            this.userProfileFG = this.fb.group({
              fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              cPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              role: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
              companies: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
            }, {
              validator: src_app_modules_auth_registration_confirm_password_validator__WEBPACK_IMPORTED_MODULE_2__["ConfirmPasswordValidator"].MatchPassword
            });
          }
        }, {
          key: "newUserProfile",
          value: function newUserProfile($event) {
            var _this14 = this;

            this.userProfileFG.patchValue({
              role: 2,
              companies: [this.companySelected]
            });
            this.user = Object.assign(Object.assign({}, this.user), this.userProfileFG.value);

            if (this.userProfileFG.valid) {
              if (this.companySelected) {
                this.user = Object.assign(Object.assign({}, this.user), this.userProfileFG.value);
                this.userManagementService.addNewUser(this.user).subscribe(function (x) {
                  if (x['status']) {
                    var userName = x['data'];

                    _this14.sS.info("New Admin ".concat(userName, " profile created"));

                    _this14.userProfileFG.reset();

                    _this14.formGroupDirective.resetForm();
                  } else {
                    _this14.sS.info("".concat(x['data']));
                  }
                });
              } else {
                this.sS.error('No Company, You can not create User!.');
              }
            }
          } //Gets the Selected Company from Local Storage

        }, {
          key: "getSelectedCompanyFromLocalStorage",
          value: function getSelectedCompanyFromLocalStorage() {
            return this.userService.getSelectedCompanyFromLocalStorage();
          }
        }]);

        return NewAdminComponent;
      }();

      NewAdminComponent.??fac = function NewAdminComponent_Factory(t) {
        return new (t || NewAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_user_management_service__WEBPACK_IMPORTED_MODULE_3__["UserManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_6__["SnackbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"]));
      };

      NewAdminComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: NewAdminComponent,
        selectors: [["app-new-admin"]],
        viewQuery: function NewAdminComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.formGroupDirective = _t.first);
          }
        },
        decls: 2,
        vars: 2,
        consts: [["class", "row", 4, "ngIf"], ["class", "error error-3 d-flex flex-row-fluid bgi-size-cover bgi-position-center", "style", "background-image: url('./assets/media/error/bg3.jpg'); height: 100%;zoom: 1;\n  display: block;\n  min-height: 80vh;\n  font-size: 14px;\n  line-height: 1.4;\n  color: #0e1724;", 4, "ngIf"], [1, "row"], [1, "col-xl-6"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], [1, "example-container", 3, "formGroup", "submit"], ["formGroupDirective", "ngForm"], [1, "col-md-12"], ["matInput", "", "formControlName", "fullname", "placeholder", "Full Name"], [4, "ngIf"], ["matInput", "", "formControlName", "email", "placeholder", "Email"], ["matInput", "", "formControlName", "password", "placeholder", "Password", "type", "password", "autocomplete", "off"], ["matInput", "", "formControlName", "cPassword", "placeholder", "Confirm Passsword", "type", "password", "autocomplete", "off"], [1, "row", "pt-2"], ["mat-raised-button", "", "color", "primary", "type", "submit"], [1, "error", "error-3", "d-flex", "flex-row-fluid", "bgi-size-cover", "bgi-position-center", 2, "background-image", "url('./assets/media/error/bg3.jpg')", "height", "100%", "zoom", "1", "display", "block", "min-height", "80vh", "font-size", "14px", "line-height", "1.4", "color", "#0e1724"], [1, "px-10", "px-md-30", "py-10", "py-md-0", "d-flex", "flex-column", "justify-content-md-center"], [1, "display-4", "font-weight-boldest", "text-white", "mb-12"], [1, "font-size-h1", "font-weight-boldest", "text-dark-75"], [1, "font-size-h4", "line-height-md"]],
        template: function NewAdminComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, NewAdminComponent_div_0_Template, 35, 6, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, NewAdminComponent_div_1_Template, 10, 0, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.hidden);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.hidden);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci1tYW5hZ2VtZW50L25ldy1hZG1pbi9uZXctYWRtaW4uY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NewAdminComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-new-admin',
            templateUrl: './new-admin.component.html',
            styleUrls: ['./new-admin.component.scss']
          }]
        }], function () {
          return [{
            type: _user_management_service__WEBPACK_IMPORTED_MODULE_3__["UserManagementService"]
          }, {
            type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
          }, {
            type: src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_6__["SnackbarService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"]
          }, {
            type: src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"]
          }];
        }, {
          formGroupDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/modules/user-management/new-advertiser/new-advertiser.component.ts":
    /*!************************************************************************************!*\
      !*** ./src/app/modules/user-management/new-advertiser/new-advertiser.component.ts ***!
      \************************************************************************************/

    /*! exports provided: NewAdvertiserComponent */

    /***/
    function srcAppModulesUserManagementNewAdvertiserNewAdvertiserComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewAdvertiserComponent", function () {
        return NewAdvertiserComponent;
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


      var src_app_modules_auth_registration_confirm_password_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/modules/auth/registration/confirm-password.validator */
      "./src/app/modules/auth/registration/confirm-password.validator.ts");
      /* harmony import */


      var _user_management_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../user-management.service */
      "./src/app/modules/user-management/user-management.service.ts");
      /* harmony import */


      var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../auth/_services/auth.service */
      "./src/app/modules/auth/_services/auth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/service/snackbar.service */
      "./src/app/shared/service/snackbar.service.ts");
      /* harmony import */


      var src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/service/users.service */
      "./src/app/shared/service/users.service.ts");
      /* harmony import */


      var src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/service/notification.service */
      "./src/app/shared/service/notification.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

      function NewAdvertiserComponent_div_0_mat_error_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Name is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NewAdvertiserComponent_div_0_mat_error_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Email is not valid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NewAdvertiserComponent_div_0_mat_error_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Password is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NewAdvertiserComponent_div_0_mat_error_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Confirm Password is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NewAdvertiserComponent_div_0_mat_error_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "'Passsword' and 'Confirm Password' didn't match.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NewAdvertiserComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "New Advertiser Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "form", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function NewAdvertiserComponent_div_0_Template_form_submit_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r8.newUserProfile($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, NewAdvertiserComponent_div_0_mat_error_14_Template, 2, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, NewAdvertiserComponent_div_0_mat_error_19_Template, 2, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, NewAdvertiserComponent_div_0_mat_error_24_Template, 2, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, NewAdvertiserComponent_div_0_mat_error_29_Template, 2, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, NewAdvertiserComponent_div_0_mat_error_30_Template, 2, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, " Create Profile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r0.userProfileFG);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.userProfileFG.get("fullname").errors == null ? null : ctx_r0.userProfileFG.get("fullname").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.userProfileFG.get("email").errors == null ? null : ctx_r0.userProfileFG.get("email").errors.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.userProfileFG.get("password").errors == null ? null : ctx_r0.userProfileFG.get("password").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.userProfileFG.get("cPassword").errors == null ? null : ctx_r0.userProfileFG.get("cPassword").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.userProfileFG.controls["cPassword"].errors && ctx_r0.userProfileFG.controls["cPassword"].errors.ConfirmPassword);
        }
      }

      function NewAdvertiserComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " How did you get here ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Sorry you can't access the page you're looking for. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " There may be a misspelling in the URL entered,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "or the page you are looking for may no longer exist. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var NewAdvertiserComponent = /*#__PURE__*/function () {
        function NewAdvertiserComponent(userManagementService, authService, route, sS, fb, userService, notification) {
          _classCallCheck(this, NewAdvertiserComponent);

          this.userManagementService = userManagementService;
          this.authService = authService;
          this.route = route;
          this.sS = sS;
          this.fb = fb;
          this.userService = userService;
          this.notification = notification;
          this.hidden = false;
        }

        _createClass(NewAdvertiserComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.companySelected = this.getSelectedCompanyFromLocalStorage(); //access page part

            if (!this.companySelected) {
              this.hidden = true;
              this.notification.showError("Please select your Company!", "");
            } else {
              this.hidden = false;
            }

            this.userProfileFG = this.fb.group({
              fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              cPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              role: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
              companies: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
            }, {
              validator: src_app_modules_auth_registration_confirm_password_validator__WEBPACK_IMPORTED_MODULE_2__["ConfirmPasswordValidator"].MatchPassword
            });
          }
        }, {
          key: "newUserProfile",
          value: function newUserProfile($event) {
            var _this15 = this;

            this.userProfileFG.patchValue({
              role: 4,
              companies: [this.companySelected]
            });
            this.user = Object.assign(Object.assign({}, this.user), this.userProfileFG.value);

            if (this.userProfileFG.valid) {
              if (this.companySelected) {
                this.user = Object.assign(Object.assign({}, this.user), this.userProfileFG.value);
                this.userManagementService.addNewUser(this.user).subscribe(function (x) {
                  if (x['status']) {
                    var userName = x['data'];

                    _this15.sS.info("New Advertiser ".concat(userName, " profile created"));

                    _this15.userProfileFG.reset();

                    _this15.formGroupDirective.resetForm();
                  } else {
                    _this15.sS.info("".concat(x['data']));
                  }
                });
              } else {
                this.sS.error('No Company, You can not create User!.');
              }
            }
          } //Gets the Selected Company from Local Storage

        }, {
          key: "getSelectedCompanyFromLocalStorage",
          value: function getSelectedCompanyFromLocalStorage() {
            return this.userService.getSelectedCompanyFromLocalStorage();
          }
        }]);

        return NewAdvertiserComponent;
      }();

      NewAdvertiserComponent.??fac = function NewAdvertiserComponent_Factory(t) {
        return new (t || NewAdvertiserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_user_management_service__WEBPACK_IMPORTED_MODULE_3__["UserManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_6__["SnackbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"]));
      };

      NewAdvertiserComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: NewAdvertiserComponent,
        selectors: [["app-new-advertiser"]],
        viewQuery: function NewAdvertiserComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.formGroupDirective = _t.first);
          }
        },
        decls: 2,
        vars: 2,
        consts: [["class", "row", 4, "ngIf"], ["class", "error error-3 d-flex flex-row-fluid bgi-size-cover bgi-position-center", "style", "background-image: url('./assets/media/error/bg3.jpg'); height: 100%;zoom: 1;\n  display: block;\n  min-height: 80vh;\n  font-size: 14px;\n  line-height: 1.4;\n  color: #0e1724;", 4, "ngIf"], [1, "row"], [1, "col-xl-6"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], [1, "example-container", 3, "formGroup", "submit"], ["formGroupDirective", "ngForm"], [1, "col-md-12"], ["matInput", "", "formControlName", "fullname", "placeholder", "Full Name"], [4, "ngIf"], ["matInput", "", "formControlName", "email", "placeholder", "Email"], ["matInput", "", "formControlName", "password", "placeholder", "Password", "type", "password", "autocomplete", "off"], ["matInput", "", "formControlName", "cPassword", "placeholder", "Confirm Passsword", "type", "password", "autocomplete", "off"], [1, "row", "pt-2"], ["mat-raised-button", "", "color", "primary", "type", "submit"], [1, "error", "error-3", "d-flex", "flex-row-fluid", "bgi-size-cover", "bgi-position-center", 2, "background-image", "url('./assets/media/error/bg3.jpg')", "height", "100%", "zoom", "1", "display", "block", "min-height", "80vh", "font-size", "14px", "line-height", "1.4", "color", "#0e1724"], [1, "px-10", "px-md-30", "py-10", "py-md-0", "d-flex", "flex-column", "justify-content-md-center"], [1, "display-4", "font-weight-boldest", "text-white", "mb-12"], [1, "font-size-h1", "font-weight-boldest", "text-dark-75"], [1, "font-size-h4", "line-height-md"]],
        template: function NewAdvertiserComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, NewAdvertiserComponent_div_0_Template, 35, 6, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, NewAdvertiserComponent_div_1_Template, 10, 0, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.hidden);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.hidden);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci1tYW5hZ2VtZW50L25ldy1hZHZlcnRpc2VyL25ldy1hZHZlcnRpc2VyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NewAdvertiserComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-new-advertiser',
            templateUrl: './new-advertiser.component.html',
            styleUrls: ['./new-advertiser.component.scss']
          }]
        }], function () {
          return [{
            type: _user_management_service__WEBPACK_IMPORTED_MODULE_3__["UserManagementService"]
          }, {
            type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
          }, {
            type: src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_6__["SnackbarService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"]
          }, {
            type: src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"]
          }];
        }, {
          formGroupDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/modules/user-management/new-superadmin/new-superadmin.component.ts":
    /*!************************************************************************************!*\
      !*** ./src/app/modules/user-management/new-superadmin/new-superadmin.component.ts ***!
      \************************************************************************************/

    /*! exports provided: NewSuperadminComponent */

    /***/
    function srcAppModulesUserManagementNewSuperadminNewSuperadminComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewSuperadminComponent", function () {
        return NewSuperadminComponent;
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


      var src_app_modules_auth_registration_confirm_password_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/modules/auth/registration/confirm-password.validator */
      "./src/app/modules/auth/registration/confirm-password.validator.ts");
      /* harmony import */


      var _user_management_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../user-management.service */
      "./src/app/modules/user-management/user-management.service.ts");
      /* harmony import */


      var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../auth/_services/auth.service */
      "./src/app/modules/auth/_services/auth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/service/snackbar.service */
      "./src/app/shared/service/snackbar.service.ts");
      /* harmony import */


      var src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/service/users.service */
      "./src/app/shared/service/users.service.ts");
      /* harmony import */


      var src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/service/notification.service */
      "./src/app/shared/service/notification.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

      function NewSuperadminComponent_div_0_mat_error_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Name is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NewSuperadminComponent_div_0_mat_error_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Email is not valid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NewSuperadminComponent_div_0_mat_error_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Password is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NewSuperadminComponent_div_0_mat_error_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Confirm Password is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NewSuperadminComponent_div_0_mat_error_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "'Passsword' and 'Confirm Password' didn't match.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NewSuperadminComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Super Admin Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "form", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function NewSuperadminComponent_div_0_Template_form_submit_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r8.newUserProfile($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, NewSuperadminComponent_div_0_mat_error_14_Template, 2, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, NewSuperadminComponent_div_0_mat_error_19_Template, 2, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, NewSuperadminComponent_div_0_mat_error_24_Template, 2, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, NewSuperadminComponent_div_0_mat_error_29_Template, 2, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, NewSuperadminComponent_div_0_mat_error_30_Template, 2, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, " Create Profile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r0.userProfileFG);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.userProfileFG.get("fullname").errors == null ? null : ctx_r0.userProfileFG.get("fullname").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.userProfileFG.get("email").errors == null ? null : ctx_r0.userProfileFG.get("email").errors.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.userProfileFG.get("password").errors == null ? null : ctx_r0.userProfileFG.get("password").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.userProfileFG.get("cPassword").errors == null ? null : ctx_r0.userProfileFG.get("cPassword").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.userProfileFG.controls["cPassword"].errors && ctx_r0.userProfileFG.controls["cPassword"].errors.ConfirmPassword);
        }
      }

      function NewSuperadminComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " How did you get here ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Sorry you can't access the page you're looking for. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " There may be a misspelling in the URL entered,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "or the page you are looking for may no longer exist. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var NewSuperadminComponent = /*#__PURE__*/function () {
        function NewSuperadminComponent(userManagementService, authService, route, sS, fb, userService, notification) {
          _classCallCheck(this, NewSuperadminComponent);

          this.userManagementService = userManagementService;
          this.authService = authService;
          this.route = route;
          this.sS = sS;
          this.fb = fb;
          this.userService = userService;
          this.notification = notification;
          this.hidden = false;
        }

        _createClass(NewSuperadminComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.companySelected = this.getSelectedCompanyFromLocalStorage(); //access page part

            if (!this.companySelected) {
              this.hidden = true;
              this.notification.showError("Please select your Company!", "");
            } else {
              this.hidden = false;
            }

            this.userProfileFG = this.fb.group({
              fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              cPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              role: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
              companies: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
            }, {
              validator: src_app_modules_auth_registration_confirm_password_validator__WEBPACK_IMPORTED_MODULE_2__["ConfirmPasswordValidator"].MatchPassword
            });
          }
        }, {
          key: "newUserProfile",
          value: function newUserProfile($event) {
            var _this16 = this;

            this.userProfileFG.patchValue({
              role: 1,
              companies: [this.companySelected]
            });
            this.user = Object.assign(Object.assign({}, this.user), this.userProfileFG.value);

            if (this.userProfileFG.valid) {
              if (this.companySelected) {
                this.user = Object.assign(Object.assign({}, this.user), this.userProfileFG.value);
                this.userManagementService.addNewUser(this.user).subscribe(function (x) {
                  if (x['status']) {
                    var userName = x['data'];

                    _this16.sS.info("New Super Admin ".concat(userName, " profile created"));

                    _this16.userProfileFG.reset();

                    _this16.formGroupDirective.resetForm();
                  } else {
                    _this16.sS.info("".concat(x['data']));
                  }
                });
              } else {
                this.sS.error('No Company, You can not create User!.');
              }
            }
          } //Gets the Selected Company from Local Storage

        }, {
          key: "getSelectedCompanyFromLocalStorage",
          value: function getSelectedCompanyFromLocalStorage() {
            return this.userService.getSelectedCompanyFromLocalStorage();
          }
        }]);

        return NewSuperadminComponent;
      }();

      NewSuperadminComponent.??fac = function NewSuperadminComponent_Factory(t) {
        return new (t || NewSuperadminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_user_management_service__WEBPACK_IMPORTED_MODULE_3__["UserManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_6__["SnackbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"]));
      };

      NewSuperadminComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: NewSuperadminComponent,
        selectors: [["app-new-superadmin"]],
        viewQuery: function NewSuperadminComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.formGroupDirective = _t.first);
          }
        },
        decls: 2,
        vars: 2,
        consts: [["class", "row", 4, "ngIf"], ["class", "error error-3 d-flex flex-row-fluid bgi-size-cover bgi-position-center", "style", "background-image: url('./assets/media/error/bg3.jpg'); height: 100%;zoom: 1;\n  display: block;\n  min-height: 80vh;\n  font-size: 14px;\n  line-height: 1.4;\n  color: #0e1724;", 4, "ngIf"], [1, "row"], [1, "col-xl-6"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], [1, "example-container", 3, "formGroup", "submit"], ["formGroupDirective", "ngForm"], [1, "col-md-12"], ["matInput", "", "formControlName", "fullname", "placeholder", "Full Name"], [4, "ngIf"], ["matInput", "", "formControlName", "email", "placeholder", "Email"], ["matInput", "", "formControlName", "password", "placeholder", "Password", "type", "password", "autocomplete", "off"], ["matInput", "", "formControlName", "cPassword", "placeholder", "Confirm Passsword", "type", "password", "autocomplete", "off"], [1, "row", "pt-2"], ["mat-raised-button", "", "color", "primary", "type", "submit"], [1, "error", "error-3", "d-flex", "flex-row-fluid", "bgi-size-cover", "bgi-position-center", 2, "background-image", "url('./assets/media/error/bg3.jpg')", "height", "100%", "zoom", "1", "display", "block", "min-height", "80vh", "font-size", "14px", "line-height", "1.4", "color", "#0e1724"], [1, "px-10", "px-md-30", "py-10", "py-md-0", "d-flex", "flex-column", "justify-content-md-center"], [1, "display-4", "font-weight-boldest", "text-white", "mb-12"], [1, "font-size-h1", "font-weight-boldest", "text-dark-75"], [1, "font-size-h4", "line-height-md"]],
        template: function NewSuperadminComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, NewSuperadminComponent_div_0_Template, 35, 6, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, NewSuperadminComponent_div_1_Template, 10, 0, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.hidden);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.hidden);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci1tYW5hZ2VtZW50L25ldy1zdXBlcmFkbWluL25ldy1zdXBlcmFkbWluLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NewSuperadminComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-new-superadmin',
            templateUrl: './new-superadmin.component.html',
            styleUrls: ['./new-superadmin.component.scss']
          }]
        }], function () {
          return [{
            type: _user_management_service__WEBPACK_IMPORTED_MODULE_3__["UserManagementService"]
          }, {
            type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
          }, {
            type: src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_6__["SnackbarService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"]
          }, {
            type: src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"]
          }];
        }, {
          formGroupDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/modules/user-management/new-user/new-user.component.ts":
    /*!************************************************************************!*\
      !*** ./src/app/modules/user-management/new-user/new-user.component.ts ***!
      \************************************************************************/

    /*! exports provided: NewUserComponent */

    /***/
    function srcAppModulesUserManagementNewUserNewUserComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewUserComponent", function () {
        return NewUserComponent;
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


      var src_app_modules_auth_registration_confirm_password_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/modules/auth/registration/confirm-password.validator */
      "./src/app/modules/auth/registration/confirm-password.validator.ts");
      /* harmony import */


      var _user_management_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../user-management.service */
      "./src/app/modules/user-management/user-management.service.ts");
      /* harmony import */


      var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../auth/_services/auth.service */
      "./src/app/modules/auth/_services/auth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/service/snackbar.service */
      "./src/app/shared/service/snackbar.service.ts");
      /* harmony import */


      var src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/service/users.service */
      "./src/app/shared/service/users.service.ts");
      /* harmony import */


      var src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/service/notification.service */
      "./src/app/shared/service/notification.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

      function NewUserComponent_div_0_mat_error_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Name is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NewUserComponent_div_0_mat_error_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Email is not valid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NewUserComponent_div_0_mat_error_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Password is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NewUserComponent_div_0_mat_error_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Confirm Password is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NewUserComponent_div_0_mat_error_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "'Passsword' and 'Confirm Password' didn't match.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NewUserComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "New Publisher Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "form", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function NewUserComponent_div_0_Template_form_submit_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r8.newUserProfile($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, NewUserComponent_div_0_mat_error_14_Template, 2, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, NewUserComponent_div_0_mat_error_19_Template, 2, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, NewUserComponent_div_0_mat_error_24_Template, 2, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, NewUserComponent_div_0_mat_error_29_Template, 2, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, NewUserComponent_div_0_mat_error_30_Template, 2, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, " Create Profile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r0.userProfileFG);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.userProfileFG.get("fullname").errors == null ? null : ctx_r0.userProfileFG.get("fullname").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.userProfileFG.get("email").errors == null ? null : ctx_r0.userProfileFG.get("email").errors.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.userProfileFG.get("password").errors == null ? null : ctx_r0.userProfileFG.get("password").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.userProfileFG.get("cPassword").errors == null ? null : ctx_r0.userProfileFG.get("cPassword").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.userProfileFG.controls["cPassword"].errors && ctx_r0.userProfileFG.controls["cPassword"].errors.ConfirmPassword);
        }
      }

      function NewUserComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " How did you get here ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Sorry you can't access the page you're looking for. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " There may be a misspelling in the URL entered,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "or the page you are looking for may no longer exist. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var NewUserComponent = /*#__PURE__*/function () {
        function NewUserComponent(userManagementService, authService, route, sS, fb, userService, notification) {
          _classCallCheck(this, NewUserComponent);

          this.userManagementService = userManagementService;
          this.authService = authService;
          this.route = route;
          this.sS = sS;
          this.fb = fb;
          this.userService = userService;
          this.notification = notification;
          this.hidden = false;
        }

        _createClass(NewUserComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.companySelected = this.getSelectedCompanyFromLocalStorage(); //access page part

            if (!this.companySelected) {
              this.hidden = true;
              this.notification.showError("Please select your Company!", "");
            } else {
              this.hidden = false;
            }

            this.userProfileFG = this.fb.group({
              fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              cPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              role: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
              companies: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
            }, {
              validator: src_app_modules_auth_registration_confirm_password_validator__WEBPACK_IMPORTED_MODULE_2__["ConfirmPasswordValidator"].MatchPassword
            });
          }
        }, {
          key: "newUserProfile",
          value: function newUserProfile($event) {
            var _this17 = this;

            this.userProfileFG.patchValue({
              role: 3,
              companies: [this.companySelected]
            });
            this.user = Object.assign(Object.assign({}, this.user), this.userProfileFG.value);

            if (this.userProfileFG.valid) {
              if (this.companySelected) {
                this.user = Object.assign(Object.assign({}, this.user), this.userProfileFG.value);
                this.userManagementService.addNewUser(this.user).subscribe(function (x) {
                  if (x['status']) {
                    var userName = x['data'];

                    _this17.sS.info("New Publisher ".concat(userName, " profile created"));

                    _this17.userProfileFG.reset();

                    _this17.formGroupDirective.resetForm();
                  } else {
                    _this17.sS.info("".concat(x['data']));
                  }
                });
              } else {
                this.sS.error('No Company, You can not create User!.');
              }
            }
          } //Gets the Selected Company from Local Storage

        }, {
          key: "getSelectedCompanyFromLocalStorage",
          value: function getSelectedCompanyFromLocalStorage() {
            return this.userService.getSelectedCompanyFromLocalStorage();
          }
        }]);

        return NewUserComponent;
      }();

      NewUserComponent.??fac = function NewUserComponent_Factory(t) {
        return new (t || NewUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_user_management_service__WEBPACK_IMPORTED_MODULE_3__["UserManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_6__["SnackbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"]));
      };

      NewUserComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: NewUserComponent,
        selectors: [["app-new-user"]],
        viewQuery: function NewUserComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.formGroupDirective = _t.first);
          }
        },
        decls: 2,
        vars: 2,
        consts: [["class", "row", 4, "ngIf"], ["class", "error error-3 d-flex flex-row-fluid bgi-size-cover bgi-position-center", "style", "background-image: url('./assets/media/error/bg3.jpg'); height: 100%;zoom: 1;\n  display: block;\n  min-height: 80vh;\n  font-size: 14px;\n  line-height: 1.4;\n  color: #0e1724;", 4, "ngIf"], [1, "row"], [1, "col-xl-6"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], [1, "example-container", 3, "formGroup", "submit"], ["formGroupDirective", "ngForm"], [1, "col-md-12"], ["matInput", "", "formControlName", "fullname", "placeholder", "Full Name"], [4, "ngIf"], ["matInput", "", "formControlName", "email", "placeholder", "Email"], ["matInput", "", "formControlName", "password", "placeholder", "Password", "type", "password", "autocomplete", "off"], ["matInput", "", "formControlName", "cPassword", "placeholder", "Confirm Passsword", "type", "password", "autocomplete", "off"], [1, "row", "pt-2"], ["mat-raised-button", "", "color", "primary", "type", "submit"], [1, "error", "error-3", "d-flex", "flex-row-fluid", "bgi-size-cover", "bgi-position-center", 2, "background-image", "url('./assets/media/error/bg3.jpg')", "height", "100%", "zoom", "1", "display", "block", "min-height", "80vh", "font-size", "14px", "line-height", "1.4", "color", "#0e1724"], [1, "px-10", "px-md-30", "py-10", "py-md-0", "d-flex", "flex-column", "justify-content-md-center"], [1, "display-4", "font-weight-boldest", "text-white", "mb-12"], [1, "font-size-h1", "font-weight-boldest", "text-dark-75"], [1, "font-size-h4", "line-height-md"]],
        template: function NewUserComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, NewUserComponent_div_0_Template, 35, 6, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, NewUserComponent_div_1_Template, 10, 0, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.hidden);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.hidden);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci1tYW5hZ2VtZW50L25ldy11c2VyL25ldy11c2VyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NewUserComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-new-user',
            templateUrl: './new-user.component.html',
            styleUrls: ['./new-user.component.scss']
          }]
        }], function () {
          return [{
            type: _user_management_service__WEBPACK_IMPORTED_MODULE_3__["UserManagementService"]
          }, {
            type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
          }, {
            type: src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_6__["SnackbarService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"]
          }, {
            type: src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"]
          }];
        }, {
          formGroupDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/modules/user-management/roles/permission/permission.component.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/modules/user-management/roles/permission/permission.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: PermissionComponent */

    /***/
    function srcAppModulesUserManagementRolesPermissionPermissionComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermissionComponent", function () {
        return PermissionComponent;
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


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/service/snackbar.service */
      "./src/app/shared/service/snackbar.service.ts");
      /* harmony import */


      var _user_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../user-management.service */
      "./src/app/modules/user-management/user-management.service.ts");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var _c0 = function _c0() {
        return {
          "color": "#232428"
        };
      };

      var PermissionComponent = /*#__PURE__*/function () {
        function PermissionComponent(activeModal, fb, snackService, userManagementService) {
          _classCallCheck(this, PermissionComponent);

          this.activeModal = activeModal;
          this.fb = fb;
          this.snackService = snackService;
          this.userManagementService = userManagementService;
          this.allChecked = false;
          this.isIndeterminate = false;
          this.notifications = false;
          this.protectedMedia = false;
          this.googleMaterial = false;
          this.dashboard = false;
          this.eCommerce = false;
          this.liveTraffic = false;
          this.ngBootstrap = false;
          this.layoutBuilder = false;
          this.userManage = false;
          this.companyManage = false;
          this.tagManage = false;
          this.reportManage = false;
          this.i = 0;
        }

        _createClass(PermissionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this18 = this;

            //Get the current company to edit
            if (this.data['id']) {
              this.userManagementService.getOnePermission(this.data['id']).subscribe(function (x) {
                _this18.permission = x;

                _this18.permissionFG.patchValue(x);

                if (x['companyManage'] == true && x['eCommerce'] == true && x['dashboard'] == true && x['googleMaterial'] == true && x['layoutBuilder'] == true && x['liveTraffic'] == true && x['ngBootstrap'] == true && x['notifications'] == true && x['protectedMedia'] == true && x['reportManage'] == true && x['tagManage'] == true && x['userManage'] == true) {
                  _this18.allChecked = true;
                  _this18.isIndeterminate = false;
                } else {
                  _this18.allChecked = false;
                  _this18.isIndeterminate = false;
                }
              });
            } else {}

            this.permissionFG = this.fb.group({
              dashboard: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              notifications: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              layoutBuilder: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              protectedMedia: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              googleMaterial: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              eCommerce: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              liveTraffic: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              ngBootstrap: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              companyManage: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              userManage: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              reportManage: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              tagManage: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
            });
          }
        }, {
          key: "onIndeterminateChange",
          value: function onIndeterminateChange(val) {
            console.log('isIndeterminate: ' + val);
          }
        }, {
          key: "onChange",
          value: function onChange(ob) {
            console.log("checked: " + ob.checked);
          }
        }, {
          key: "onChkChange",
          value: function onChkChange(ob) {
            if (ob.checked) {
              this.userManage = true;
              this.companyManage = true;
              this.tagManage = true;
              this.reportManage = true;
              this.notifications = true;
              this.protectedMedia = true;
              this.googleMaterial = true;
              this.dashboard = true;
              this.eCommerce = true;
              this.liveTraffic = true;
              this.ngBootstrap = true;
              this.layoutBuilder = true;
              this.i = 12;
            } else {
              this.userManage = false;
              this.companyManage = false;
              this.tagManage = false;
              this.reportManage = false;
              this.notifications = false;
              this.protectedMedia = false;
              this.googleMaterial = false;
              this.dashboard = false;
              this.eCommerce = false;
              this.liveTraffic = false;
              this.ngBootstrap = false;
              this.layoutBuilder = false;
            }
          }
        }, {
          key: "onChildChkChange",
          value: function onChildChkChange(ob) {
            if (ob.checked) {
              this.i++;
            } else {
              this.i--;
            }

            if (this.i == 12) {
              this.allChecked = true;
              this.isIndeterminate = false;
            } else if (this.i >= 1 || this.i <= 11) {
              this.isIndeterminate = true;
              this.allChecked = false;
            } else {
              this.isIndeterminate = false;
              this.allChecked = false;
            }
          }
        }, {
          key: "handleSubmit",
          value: function handleSubmit() {
            var _this19 = this;

            this.permissionFG.markAllAsTouched();

            if (this.permissionFG.valid) {
              this.permission = Object.assign(Object.assign({}, this.permission), this.permissionFG.value);
              this.userManagementService.updateOnePermission(this.permission).subscribe(function (x) {
                _this19.snackService.info('Successfully updated permission.');

                _this19.activeModal.close(x);
              }, function (err) {
                _this19.snackService.info("Error updating permission: ".concat(err.statusText));
              });
            }
          }
        }]);

        return PermissionComponent;
      }();

      PermissionComponent.??fac = function PermissionComponent_Factory(t) {
        return new (t || PermissionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_3__["SnackbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_user_management_service__WEBPACK_IMPORTED_MODULE_4__["UserManagementService"]));
      };

      PermissionComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: PermissionComponent,
        selectors: [["app-permission"]],
        inputs: {
          data: "data"
        },
        decls: 70,
        vars: 17,
        consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row", "justify-content-end", "d-flex"], [1, "select-all"], [1, "example-margin", 3, "ngStyle", "indeterminate", "checked", "indeterminateChange", "change"], [1, "example-container", 3, "formGroup"], [1, "row"], [1, "col-md-6"], [1, "col-md-12"], [1, "example-list-section"], ["color", "primary", "formControlName", "dashboard", 1, "example-margin", 3, "ngModel", "ngModelChange", "change"], ["color", "primary", "formControlName", "layoutBuilder", 1, "example-margin", 3, "ngModel", "ngModelChange", "change"], ["color", "primary", "formControlName", "googleMaterial", 1, "example-margin", 3, "ngModel", "ngModelChange", "change"], ["color", "primary", "formControlName", "ngBootstrap", 1, "example-margin", 3, "ngModel", "ngModelChange", "change"], ["color", "primary", "formControlName", "companyManage", 1, "example-margin", 3, "ngModel", "ngModelChange", "change"], ["color", "primary", "formControlName", "tagManage", 1, "example-margin", 3, "ngModel", "ngModelChange", "change"], ["color", "primary", "formControlName", "eCommerce", 1, "example-margin", 3, "ngModel", "ngModelChange", "change"], ["color", "primary", "formControlName", "liveTraffic", 1, "example-margin", 3, "ngModel", "ngModelChange", "change"], ["color", "primary", "formControlName", "protectedMedia", 1, "example-margin", 3, "ngModel", "ngModelChange", "change"], ["color", "primary", "formControlName", "notifications", 1, "example-margin", 3, "ngModel", "ngModelChange", "change"], ["color", "primary", "formControlName", "userManage", 1, "example-margin", 3, "ngModel", "ngModelChange", "change"], ["color", "primary", "formControlName", "reportManage", 1, "example-margin", 3, "ngModel", "ngModelChange", "change"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"]],
        template: function PermissionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Permission");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PermissionComponent_Template_button_click_3_listener() {
              return ctx.activeModal.dismiss("Cross click");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-checkbox", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("indeterminateChange", function PermissionComponent_Template_mat_checkbox_indeterminateChange_9_listener($event) {
              return ctx.onIndeterminateChange($event);
            })("change", function PermissionComponent_Template_mat_checkbox_change_9_listener($event) {
              return ctx.onChkChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Select All");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-checkbox", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function PermissionComponent_Template_mat_checkbox_ngModelChange_17_listener($event) {
              return ctx.dashboard = $event;
            })("change", function PermissionComponent_Template_mat_checkbox_change_17_listener($event) {
              return ctx.onChildChkChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "mat-checkbox", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function PermissionComponent_Template_mat_checkbox_ngModelChange_21_listener($event) {
              return ctx.layoutBuilder = $event;
            })("change", function PermissionComponent_Template_mat_checkbox_change_21_listener($event) {
              return ctx.onChildChkChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Layout Builder");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "mat-checkbox", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function PermissionComponent_Template_mat_checkbox_ngModelChange_25_listener($event) {
              return ctx.googleMaterial = $event;
            })("change", function PermissionComponent_Template_mat_checkbox_change_25_listener($event) {
              return ctx.onChildChkChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Google Material");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "mat-checkbox", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function PermissionComponent_Template_mat_checkbox_ngModelChange_29_listener($event) {
              return ctx.ngBootstrap = $event;
            })("change", function PermissionComponent_Template_mat_checkbox_change_29_listener($event) {
              return ctx.onChildChkChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Ng-Bootstrap");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "mat-checkbox", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function PermissionComponent_Template_mat_checkbox_ngModelChange_33_listener($event) {
              return ctx.companyManage = $event;
            })("change", function PermissionComponent_Template_mat_checkbox_change_33_listener($event) {
              return ctx.onChildChkChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Company Management");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "mat-checkbox", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function PermissionComponent_Template_mat_checkbox_ngModelChange_37_listener($event) {
              return ctx.tagManage = $event;
            })("change", function PermissionComponent_Template_mat_checkbox_change_37_listener($event) {
              return ctx.onChildChkChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Tag Management");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "mat-checkbox", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function PermissionComponent_Template_mat_checkbox_ngModelChange_43_listener($event) {
              return ctx.eCommerce = $event;
            })("change", function PermissionComponent_Template_mat_checkbox_change_43_listener($event) {
              return ctx.onChildChkChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "eCommerce");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "mat-checkbox", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function PermissionComponent_Template_mat_checkbox_ngModelChange_47_listener($event) {
              return ctx.liveTraffic = $event;
            })("change", function PermissionComponent_Template_mat_checkbox_change_47_listener($event) {
              return ctx.onChildChkChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Live Traffic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "mat-checkbox", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function PermissionComponent_Template_mat_checkbox_ngModelChange_51_listener($event) {
              return ctx.protectedMedia = $event;
            })("change", function PermissionComponent_Template_mat_checkbox_change_51_listener($event) {
              return ctx.onChildChkChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Protected Media");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "mat-checkbox", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function PermissionComponent_Template_mat_checkbox_ngModelChange_55_listener($event) {
              return ctx.notifications = $event;
            })("change", function PermissionComponent_Template_mat_checkbox_change_55_listener($event) {
              return ctx.onChildChkChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Notifications");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "mat-checkbox", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function PermissionComponent_Template_mat_checkbox_ngModelChange_59_listener($event) {
              return ctx.userManage = $event;
            })("change", function PermissionComponent_Template_mat_checkbox_change_59_listener($event) {
              return ctx.onChildChkChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "User Management");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "mat-checkbox", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function PermissionComponent_Template_mat_checkbox_ngModelChange_63_listener($event) {
              return ctx.reportManage = $event;
            })("change", function PermissionComponent_Template_mat_checkbox_change_63_listener($event) {
              return ctx.onChildChkChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PermissionComponent_Template_button_click_66_listener() {
              return ctx.activeModal.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PermissionComponent_Template_button_click_68_listener() {
              return ctx.handleSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Update");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](16, _c0))("indeterminate", ctx.isIndeterminate)("checked", ctx.allChecked);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.permissionFG);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.dashboard);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.layoutBuilder);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.googleMaterial);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.ngBootstrap);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.companyManage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.tagManage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.eCommerce);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.liveTraffic);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.protectedMedia);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.notifications);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.userManage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.reportManage);
          }
        },
        directives: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckbox"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
        styles: [".select-all[_ngcontent-%COMP%] {\n  border: 1px solid #d7dae7;\n  padding: 2px 8px;\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyLW1hbmFnZW1lbnQvcm9sZXMvcGVybWlzc2lvbi9wZXJtaXNzaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3VzZXItbWFuYWdlbWVudC9yb2xlcy9wZXJtaXNzaW9uL3Blcm1pc3Npb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0LWFsbCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDdkYWU3O1xyXG4gICAgcGFkZGluZzogMnB4IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PermissionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-permission',
            templateUrl: './permission.component.html',
            styleUrls: ['./permission.component.scss']
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_3__["SnackbarService"]
          }, {
            type: _user_management_service__WEBPACK_IMPORTED_MODULE_4__["UserManagementService"]
          }];
        }, {
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/modules/user-management/roles/roles.component.ts":
    /*!******************************************************************!*\
      !*** ./src/app/modules/user-management/roles/roles.component.ts ***!
      \******************************************************************/

    /*! exports provided: RolesComponent */

    /***/
    function srcAppModulesUserManagementRolesRolesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RolesComponent", function () {
        return RolesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _permission_permission_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./permission/permission.component */
      "./src/app/modules/user-management/roles/permission/permission.component.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/service/snackbar.service */
      "./src/app/shared/service/snackbar.service.ts");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/table */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
      /* harmony import */


      var ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-inline-svg */
      "./node_modules/ng-inline-svg/__ivy_ngcc__/lib_esmodule/index.js");

      function RolesComponent_th_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function RolesComponent_td_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r8.position, " ");
        }
      }

      function RolesComponent_th_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Role ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function RolesComponent_td_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r9.name, " ");
        }
      }

      function RolesComponent_th_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Action ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function RolesComponent_td_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RolesComponent_td_17_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r12);

            var element_r10 = ctx.$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r11.openManagePermissionDialog(element_r10.position);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("inlineSVG", "./assets/media/svg/icons/Communication/Write.svg");
        }
      }

      function RolesComponent_tr_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 19);
        }
      }

      function RolesComponent_tr_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 20);
        }
      }

      var ELEMENT_DATA = [{
        position: 1,
        name: "Super Admin"
      }, {
        position: 2,
        name: "Admin"
      }, {
        position: 3,
        name: "Publisher"
      }, {
        position: 4,
        name: "Advertiser"
      }];

      var RolesComponent = /*#__PURE__*/function () {
        function RolesComponent(modalService, route, sS) {
          _classCallCheck(this, RolesComponent);

          this.modalService = modalService;
          this.route = route;
          this.sS = sS;
          this.displayedColumns = ["position", "name", "action"];
          this.dataSource = ELEMENT_DATA;
        }

        _createClass(RolesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openManagePermissionDialog",
          value: function openManagePermissionDialog(roleKey) {
            var modalRef = this.modalService.open(_permission_permission_component__WEBPACK_IMPORTED_MODULE_1__["PermissionComponent"], {
              size: 'md'
            });
            modalRef.componentInstance.data = {
              id: roleKey
            };
            modalRef.result.then(function (c) {});
          }
        }]);

        return RolesComponent;
      }();

      RolesComponent.??fac = function RolesComponent_Factory(t) {
        return new (t || RolesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"]));
      };

      RolesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: RolesComponent,
        selectors: [["app-roles"]],
        decls: 20,
        vars: 3,
        consts: [[1, "row"], [1, "col-xl-12"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["title", "Edit Role", 1, "btn", "btn-icon", "btn-light", "btn-hover-primary", "btn-sm", "mx-3", 3, "click"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-md", "svg-icon-primary", 3, "inlineSVG"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function RolesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "User Role");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](9, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, RolesComponent_th_10_Template, 2, 0, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, RolesComponent_td_11_Template, 2, 1, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](12, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, RolesComponent_th_13_Template, 2, 0, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, RolesComponent_td_14_Template, 2, 1, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](15, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, RolesComponent_th_16_Template, 2, 0, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, RolesComponent_td_17_Template, 3, 1, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, RolesComponent_tr_18_Template, 1, 0, "tr", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, RolesComponent_tr_19_Template, 1, 0, "tr", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx.displayedColumns);
          }
        },
        directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCell"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__["InlineSVGDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRow"]],
        styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyLW1hbmFnZW1lbnQvcm9sZXMvcm9sZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3VzZXItbWFuYWdlbWVudC9yb2xlcy9yb2xlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RolesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-roles",
            templateUrl: "./roles.component.html",
            styleUrls: ["./roles.component.scss"]
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/user-management/superadmins/superadmins.component.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/modules/user-management/superadmins/superadmins.component.ts ***!
      \******************************************************************************/

    /*! exports provided: SuperadminsComponent */

    /***/
    function srcAppModulesUserManagementSuperadminsSuperadminsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuperadminsComponent", function () {
        return SuperadminsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
      /* harmony import */


      var _shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/service/users.service */
      "./src/app/shared/service/users.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/service/notification.service */
      "./src/app/shared/service/notification.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var ng_inline_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-inline-svg */
      "./node_modules/ng-inline-svg/__ivy_ngcc__/lib_esmodule/index.js");

      function SuperadminsComponent_div_0_mat_header_cell_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Full Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function SuperadminsComponent_div_0_mat_cell_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r16.fullname, " ");
        }
      }

      function SuperadminsComponent_div_0_mat_header_cell_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function SuperadminsComponent_div_0_mat_cell_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r17.email, " ");
        }
      }

      function SuperadminsComponent_div_0_mat_header_cell_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Companies ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function SuperadminsComponent_div_0_mat_cell_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", "font-weight-bold");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r18.companyname, " ");
        }
      }

      function SuperadminsComponent_div_0_mat_header_cell_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Stat# ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function SuperadminsComponent_div_0_mat_cell_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r19.tags.length, " ");
        }
      }

      function SuperadminsComponent_div_0_mat_header_cell_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Action ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function SuperadminsComponent_div_0_mat_cell_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SuperadminsComponent_div_0_mat_cell_33_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22);

            var element_r20 = ctx.$implicit;

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r21.handleEditClick(element_r20._key);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("inlineSVG", "./assets/media/svg/icons/Communication/Write.svg");
        }
      }

      function SuperadminsComponent_div_0_mat_header_row_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "mat-header-row");
        }
      }

      function SuperadminsComponent_div_0_mat_row_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "mat-row");
        }
      }

      function SuperadminsComponent_div_0_div_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "No records found");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function SuperadminsComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Super Admins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SuperadminsComponent_div_0_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r24.handleAddProfile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Add Super Admin ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-checkbox", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function SuperadminsComponent_div_0_Template_mat_checkbox_ngModelChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r25);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r26.companyUser = $event;
          })("change", function SuperadminsComponent_div_0_Template_mat_checkbox_change_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r25);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r27.onChangeSuperAdmin($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Display All Super Admins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-table", 15, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](19, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, SuperadminsComponent_div_0_mat_header_cell_20_Template, 2, 0, "mat-header-cell", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, SuperadminsComponent_div_0_mat_cell_21_Template, 2, 1, "mat-cell", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](22, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, SuperadminsComponent_div_0_mat_header_cell_23_Template, 2, 0, "mat-header-cell", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, SuperadminsComponent_div_0_mat_cell_24_Template, 2, 1, "mat-cell", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](25, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, SuperadminsComponent_div_0_mat_header_cell_26_Template, 2, 0, "mat-header-cell", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, SuperadminsComponent_div_0_mat_cell_27_Template, 2, 2, "mat-cell", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](28, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, SuperadminsComponent_div_0_mat_header_cell_29_Template, 2, 0, "mat-header-cell", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, SuperadminsComponent_div_0_mat_cell_30_Template, 2, 1, "mat-cell", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](31, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, SuperadminsComponent_div_0_mat_header_cell_32_Template, 2, 0, "mat-header-cell", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, SuperadminsComponent_div_0_mat_cell_33_Template, 3, 1, "mat-cell", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](34, SuperadminsComponent_div_0_mat_header_row_34_Template, 1, 0, "mat-header-row", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](35, SuperadminsComponent_div_0_mat_row_35_Template, 1, 0, "mat-row", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](36, SuperadminsComponent_div_0_div_36_Template, 3, 0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r0.companyUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx_r0.superadmins);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx_r0.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx_r0.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.superadmins.data.length === 0);
        }
      }

      function SuperadminsComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " How did you get here ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Sorry you can't access the page you're looking for. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " There may be a misspelling in the URL entered,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "or the page you are looking for may no longer exist. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var SuperadminsComponent = /*#__PURE__*/function () {
        function SuperadminsComponent(userService, cdr, router, route, notification) {
          _classCallCheck(this, SuperadminsComponent);

          this.userService = userService;
          this.cdr = cdr;
          this.router = router;
          this.route = route;
          this.notification = notification;
          this.displayedColumns = ["fullname", "email", "companyname", "stat", "action"];
          this.superadmins = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
          this.companyUser = false;
          this.hidden = false;
          this.subscritions = [];
        }

        _createClass(SuperadminsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this20 = this;

            this.localStorageCompany = this.getSelectedCompanyFromLocalStorage(); //access page part

            if (!this.localStorageCompany) {
              this.hidden = true;
              this.notification.showError("Please select your Company!", "");
            } else {
              this.hidden = false;
            }

            this.subscritions.push(this.userService.getSuperAdminAll().subscribe(function (data) {
              _this20.originalData = data;

              if (_this20.localStorageCompany) {
                _this20.superadmins.data = data.filter(function (userData) {
                  return userData.companies.includes(_this20.localStorageCompany);
                });
              } else {
                _this20.superadmins.data = data;
              }

              _this20.cdr.detectChanges();
            }));
          }
        }, {
          key: "handleEditClick",
          value: function handleEditClick(userId) {
            this.router.navigateByUrl('/user-management/edit/' + userId);
          } //Gets the Selected Company from Local Storage

        }, {
          key: "getSelectedCompanyFromLocalStorage",
          value: function getSelectedCompanyFromLocalStorage() {
            return this.userService.getSelectedCompanyFromLocalStorage();
          }
        }, {
          key: "handleAddProfile",
          value: function handleAddProfile() {
            this.router.navigateByUrl('/user-management/new-super-admin');
          }
        }, {
          key: "onChangeSuperAdmin",
          value: function onChangeSuperAdmin(event) {
            var _this21 = this;

            this.companyUser = event.checked;

            if (this.companyUser) {
              this.superadmins.data = this.originalData;
            } else {
              if (this.localStorageCompany) {
                this.superadmins.data = this.originalData.filter(function (userData) {
                  return userData.companies.includes(_this21.localStorageCompany);
                });
              } else {
                this.superadmins.data = this.originalData;
              }
            }
          }
        }]);

        return SuperadminsComponent;
      }();

      SuperadminsComponent.??fac = function SuperadminsComponent_Factory(t) {
        return new (t || SuperadminsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]));
      };

      SuperadminsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: SuperadminsComponent,
        selectors: [["app-superadmins"]],
        decls: 2,
        vars: 2,
        consts: [["class", "row", 4, "ngIf"], ["class", "error error-3 d-flex flex-row-fluid bgi-size-cover bgi-position-center", "style", "background-image: url('./assets/media/error/bg3.jpg'); height: 100%;zoom: 1;\n  display: block;\n  min-height: 80vh;\n  font-size: 14px;\n  line-height: 1.4;\n  color: #0e1724;", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], [1, "pb-3"], [1, "col-xl-6"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "col-xl-6", "all-super-user", "align-self-center", "d-flex"], ["color", "primary", 3, "ngModel", "ngModelChange", "change"], [1, "example-container", "mat-elevation-z8"], [3, "dataSource"], ["table", ""], ["matColumnDef", "fullname"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "email"], ["matColumnDef", "companyname"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "stat"], ["matColumnDef", "action"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [4, "ngIf"], [3, "ngClass"], ["title", "Edit Super Admin", 1, "btn", "btn-icon", "btn-light", "btn-hover-primary", "btn-sm", "mx-3", 3, "click"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-md", "svg-icon-primary", 3, "inlineSVG"], [2, "text-align", "center", "padding", "10px"], [1, "error", "error-3", "d-flex", "flex-row-fluid", "bgi-size-cover", "bgi-position-center", 2, "background-image", "url('./assets/media/error/bg3.jpg')", "height", "100%", "zoom", "1", "display", "block", "min-height", "80vh", "font-size", "14px", "line-height", "1.4", "color", "#0e1724"], [1, "px-10", "px-md-30", "py-10", "py-md-0", "d-flex", "flex-column", "justify-content-md-center"], [1, "display-4", "font-weight-boldest", "text-white", "mb-12"], [1, "font-size-h1", "font-weight-boldest", "text-dark-75"], [1, "font-size-h4", "line-height-md"]],
        template: function SuperadminsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, SuperadminsComponent_div_0_Template, 37, 5, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, SuperadminsComponent_div_1_Template, 10, 0, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.hidden);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.hidden);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_8__["InlineSVGDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]],
        styles: [".all-super-user[_ngcontent-%COMP%] {\n  justify-content: flex-end !important;\n}\n\n@media (max-width: 1200px) {\n  .all-super-user[_ngcontent-%COMP%] {\n    justify-content: flex-start !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyLW1hbmFnZW1lbnQvc3VwZXJhZG1pbnMvc3VwZXJhZG1pbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSxzQ0FBQTtFQUNOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3VzZXItbWFuYWdlbWVudC9zdXBlcmFkbWlucy9zdXBlcmFkbWlucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGwtc3VwZXItdXNlciB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5hbGwtc3VwZXItdXNlciB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SuperadminsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-superadmins',
            templateUrl: './superadmins.component.html',
            styleUrls: ['./superadmins.component.scss']
          }]
        }], function () {
          return [{
            type: _shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/user-management/user-management-routing.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/modules/user-management/user-management-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: UserManagementRoutingModule */

    /***/
    function srcAppModulesUserManagementUserManagementRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserManagementRoutingModule", function () {
        return UserManagementRoutingModule;
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


      var _user_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-management.component */
      "./src/app/modules/user-management/user-management.component.ts");
      /* harmony import */


      var _superadmins_superadmins_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./superadmins/superadmins.component */
      "./src/app/modules/user-management/superadmins/superadmins.component.ts");
      /* harmony import */


      var _admins_admins_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./admins/admins.component */
      "./src/app/modules/user-management/admins/admins.component.ts");
      /* harmony import */


      var _advertisers_advertisers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./advertisers/advertisers.component */
      "./src/app/modules/user-management/advertisers/advertisers.component.ts");
      /* harmony import */


      var _users_users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./users/users.component */
      "./src/app/modules/user-management/users/users.component.ts");
      /* harmony import */


      var _roles_roles_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./roles/roles.component */
      "./src/app/modules/user-management/roles/roles.component.ts");
      /* harmony import */


      var _edit_users_edit_users_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./edit-users/edit-users.component */
      "./src/app/modules/user-management/edit-users/edit-users.component.ts");
      /* harmony import */


      var _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./new-user/new-user.component */
      "./src/app/modules/user-management/new-user/new-user.component.ts");
      /* harmony import */


      var _new_superadmin_new_superadmin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./new-superadmin/new-superadmin.component */
      "./src/app/modules/user-management/new-superadmin/new-superadmin.component.ts");
      /* harmony import */


      var _new_admin_new_admin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./new-admin/new-admin.component */
      "./src/app/modules/user-management/new-admin/new-admin.component.ts");
      /* harmony import */


      var _new_advertiser_new_advertiser_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./new-advertiser/new-advertiser.component */
      "./src/app/modules/user-management/new-advertiser/new-advertiser.component.ts");

      var routes = [{
        path: '',
        component: _user_management_component__WEBPACK_IMPORTED_MODULE_2__["UserManagementComponent"],
        children: [{
          path: 'super-admin-users',
          component: _superadmins_superadmins_component__WEBPACK_IMPORTED_MODULE_3__["SuperadminsComponent"]
        }, {
          path: 'admin-users',
          component: _admins_admins_component__WEBPACK_IMPORTED_MODULE_4__["AdminsComponent"]
        }, {
          path: 'advertiser-users',
          component: _advertisers_advertisers_component__WEBPACK_IMPORTED_MODULE_5__["AdvertisersComponent"]
        }, {
          path: 'publisher-users',
          component: _users_users_component__WEBPACK_IMPORTED_MODULE_6__["UsersComponent"]
        }, {
          path: 'roles',
          component: _roles_roles_component__WEBPACK_IMPORTED_MODULE_7__["RolesComponent"]
        }, {
          path: 'new-super-admin',
          component: _new_superadmin_new_superadmin_component__WEBPACK_IMPORTED_MODULE_10__["NewSuperadminComponent"]
        }, {
          path: 'new-admin',
          component: _new_admin_new_admin_component__WEBPACK_IMPORTED_MODULE_11__["NewAdminComponent"]
        }, {
          path: 'new-advertiser',
          component: _new_advertiser_new_advertiser_component__WEBPACK_IMPORTED_MODULE_12__["NewAdvertiserComponent"]
        }, {
          path: 'new-publisher',
          component: _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_9__["NewUserComponent"]
        }, {
          path: 'edit-user',
          component: _edit_users_edit_users_component__WEBPACK_IMPORTED_MODULE_8__["EditUsersComponent"]
        }, {
          path: 'edit/:id',
          component: _edit_users_edit_users_component__WEBPACK_IMPORTED_MODULE_8__["EditUsersComponent"],
          pathMatch: 'full'
        }, {
          path: '',
          redirectTo: 'publisher-users',
          pathMatch: 'full'
        }, {
          path: '**',
          redirectTo: 'publisher-users',
          pathMatch: 'full'
        }]
      }];

      var UserManagementRoutingModule = function UserManagementRoutingModule() {
        _classCallCheck(this, UserManagementRoutingModule);
      };

      UserManagementRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: UserManagementRoutingModule
      });
      UserManagementRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function UserManagementRoutingModule_Factory(t) {
          return new (t || UserManagementRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](UserManagementRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserManagementRoutingModule, [{
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
    "./src/app/modules/user-management/user-management.component.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/modules/user-management/user-management.component.ts ***!
      \**********************************************************************/

    /*! exports provided: UserManagementComponent */

    /***/
    function srcAppModulesUserManagementUserManagementComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserManagementComponent", function () {
        return UserManagementComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var UserManagementComponent = /*#__PURE__*/function () {
        function UserManagementComponent() {
          _classCallCheck(this, UserManagementComponent);
        }

        _createClass(UserManagementComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UserManagementComponent;
      }();

      UserManagementComponent.??fac = function UserManagementComponent_Factory(t) {
        return new (t || UserManagementComponent)();
      };

      UserManagementComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: UserManagementComponent,
        selectors: [["app-user-management"]],
        decls: 1,
        vars: 0,
        template: function UserManagementComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserManagementComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-user-management',
            templateUrl: './user-management.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/user-management/user-management.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/modules/user-management/user-management.module.ts ***!
      \*******************************************************************/

    /*! exports provided: UserManagementModule */

    /***/
    function srcAppModulesUserManagementUserManagementModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserManagementModule", function () {
        return UserManagementModule;
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


      var _users_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./users/users.component */
      "./src/app/modules/user-management/users/users.component.ts");
      /* harmony import */


      var _roles_roles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./roles/roles.component */
      "./src/app/modules/user-management/roles/roles.component.ts");
      /* harmony import */


      var _user_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./user-management.component */
      "./src/app/modules/user-management/user-management.component.ts");
      /* harmony import */


      var _user_management_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-management-routing.module */
      "./src/app/modules/user-management/user-management-routing.module.ts");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/table */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _edit_users_edit_users_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./edit-users/edit-users.component */
      "./src/app/modules/user-management/edit-users/edit-users.component.ts");
      /* harmony import */


      var ng_validate_equal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ng-validate-equal */
      "./node_modules/ng-validate-equal/__ivy_ngcc__/fesm2015/ng-validate-equal.js");
      /* harmony import */


      var _edit_users_user_password_reset_user_password_reset_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./edit-users/user-password-reset/user-password-reset.component */
      "./src/app/modules/user-management/edit-users/user-password-reset/user-password-reset.component.ts");
      /* harmony import */


      var src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! src/app/shared/service/snackbar.service */
      "./src/app/shared/service/snackbar.service.ts");
      /* harmony import */


      var _edit_users_add_tag_add_tag_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./edit-users/add-tag/add-tag.component */
      "./src/app/modules/user-management/edit-users/add-tag/add-tag.component.ts");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
      /* harmony import */


      var _edit_users_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./edit-users/add-company/add-company.component */
      "./src/app/modules/user-management/edit-users/add-company/add-company.component.ts");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/list */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _roles_permission_permission_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./roles/permission/permission.component */
      "./src/app/modules/user-management/roles/permission/permission.component.ts");
      /* harmony import */


      var _superadmins_superadmins_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./superadmins/superadmins.component */
      "./src/app/modules/user-management/superadmins/superadmins.component.ts");
      /* harmony import */


      var _admins_admins_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./admins/admins.component */
      "./src/app/modules/user-management/admins/admins.component.ts");
      /* harmony import */


      var _advertisers_advertisers_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./advertisers/advertisers.component */
      "./src/app/modules/user-management/advertisers/advertisers.component.ts");
      /* harmony import */


      var _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./new-user/new-user.component */
      "./src/app/modules/user-management/new-user/new-user.component.ts");
      /* harmony import */


      var _new_superadmin_new_superadmin_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./new-superadmin/new-superadmin.component */
      "./src/app/modules/user-management/new-superadmin/new-superadmin.component.ts");
      /* harmony import */


      var _new_admin_new_admin_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./new-admin/new-admin.component */
      "./src/app/modules/user-management/new-admin/new-admin.component.ts");
      /* harmony import */


      var _new_advertiser_new_advertiser_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./new-advertiser/new-advertiser.component */
      "./src/app/modules/user-management/new-advertiser/new-advertiser.component.ts");
      /* harmony import */


      var ng_inline_svg__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ng-inline-svg */
      "./node_modules/ng-inline-svg/__ivy_ngcc__/lib_esmodule/index.js");

      var UserManagementModule = function UserManagementModule() {
        _classCallCheck(this, UserManagementModule);
      };

      UserManagementModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: UserManagementModule
      });
      UserManagementModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function UserManagementModule_Factory(t) {
          return new (t || UserManagementModule)();
        },
        providers: [src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_18__["SnackbarService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"], _user_management_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserManagementRoutingModule"], ng_validate_equal__WEBPACK_IMPORTED_MODULE_16__["ValidateEqualModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__["NgxDatatableModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_33__["InlineSVGModule"].forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](UserManagementModule, {
          declarations: [_users_users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"], _roles_roles_component__WEBPACK_IMPORTED_MODULE_3__["RolesComponent"], _user_management_component__WEBPACK_IMPORTED_MODULE_4__["UserManagementComponent"], _edit_users_edit_users_component__WEBPACK_IMPORTED_MODULE_15__["EditUsersComponent"], _edit_users_user_password_reset_user_password_reset_component__WEBPACK_IMPORTED_MODULE_17__["UserPasswordResetComponent"], _edit_users_add_tag_add_tag_component__WEBPACK_IMPORTED_MODULE_19__["AddTagComponent"], _edit_users_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_22__["AddCompanyComponent"], _roles_permission_permission_component__WEBPACK_IMPORTED_MODULE_25__["PermissionComponent"], _superadmins_superadmins_component__WEBPACK_IMPORTED_MODULE_26__["SuperadminsComponent"], _admins_admins_component__WEBPACK_IMPORTED_MODULE_27__["AdminsComponent"], _advertisers_advertisers_component__WEBPACK_IMPORTED_MODULE_28__["AdvertisersComponent"], _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_29__["NewUserComponent"], _new_superadmin_new_superadmin_component__WEBPACK_IMPORTED_MODULE_30__["NewSuperadminComponent"], _new_admin_new_admin_component__WEBPACK_IMPORTED_MODULE_31__["NewAdminComponent"], _new_advertiser_new_advertiser_component__WEBPACK_IMPORTED_MODULE_32__["NewAdvertiserComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"], _user_management_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserManagementRoutingModule"], ng_validate_equal__WEBPACK_IMPORTED_MODULE_16__["ValidateEqualModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__["NgxDatatableModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_33__["InlineSVGModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserManagementModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_users_users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"], _roles_roles_component__WEBPACK_IMPORTED_MODULE_3__["RolesComponent"], _user_management_component__WEBPACK_IMPORTED_MODULE_4__["UserManagementComponent"], _edit_users_edit_users_component__WEBPACK_IMPORTED_MODULE_15__["EditUsersComponent"], _edit_users_user_password_reset_user_password_reset_component__WEBPACK_IMPORTED_MODULE_17__["UserPasswordResetComponent"], _edit_users_add_tag_add_tag_component__WEBPACK_IMPORTED_MODULE_19__["AddTagComponent"], _edit_users_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_22__["AddCompanyComponent"], _roles_permission_permission_component__WEBPACK_IMPORTED_MODULE_25__["PermissionComponent"], _superadmins_superadmins_component__WEBPACK_IMPORTED_MODULE_26__["SuperadminsComponent"], _admins_admins_component__WEBPACK_IMPORTED_MODULE_27__["AdminsComponent"], _advertisers_advertisers_component__WEBPACK_IMPORTED_MODULE_28__["AdvertisersComponent"], _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_29__["NewUserComponent"], _new_superadmin_new_superadmin_component__WEBPACK_IMPORTED_MODULE_30__["NewSuperadminComponent"], _new_admin_new_admin_component__WEBPACK_IMPORTED_MODULE_31__["NewAdminComponent"], _new_advertiser_new_advertiser_component__WEBPACK_IMPORTED_MODULE_32__["NewAdvertiserComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"], _user_management_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserManagementRoutingModule"], ng_validate_equal__WEBPACK_IMPORTED_MODULE_16__["ValidateEqualModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__["NgxDatatableModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_33__["InlineSVGModule"].forRoot()],
            providers: [src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_18__["SnackbarService"]],
            entryComponents: [_edit_users_user_password_reset_user_password_reset_component__WEBPACK_IMPORTED_MODULE_17__["UserPasswordResetComponent"], _edit_users_add_tag_add_tag_component__WEBPACK_IMPORTED_MODULE_19__["AddTagComponent"], _edit_users_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_22__["AddCompanyComponent"], _edit_users_edit_users_component__WEBPACK_IMPORTED_MODULE_15__["EditUsersComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/user-management/user-management.service.ts":
    /*!********************************************************************!*\
      !*** ./src/app/modules/user-management/user-management.service.ts ***!
      \********************************************************************/

    /*! exports provided: UserManagementService */

    /***/
    function srcAppModulesUserManagementUserManagementServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserManagementService", function () {
        return UserManagementService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/service/users.service */
      "./src/app/shared/service/users.service.ts");
      /* harmony import */


      var _shared_service_tags_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../shared/service/tags.service */
      "./src/app/shared/service/tags.service.ts");

      var UserManagementService = /*#__PURE__*/function () {
        function UserManagementService(usersService, tagsService) {
          _classCallCheck(this, UserManagementService);

          this.usersService = usersService;
          this.tagsService = tagsService;
        }

        _createClass(UserManagementService, [{
          key: "resetPassword",
          value: function resetPassword(userId, password) {
            return this.usersService.resetPassword(userId, password);
          }
        }, {
          key: "getAllTags",
          value: function getAllTags() {
            return this.tagsService.getAll();
          }
        }, {
          key: "addTag",
          value: function addTag(tag) {
            return this.tagsService.add(tag);
          }
        }, {
          key: "addNewUser",
          value: function addNewUser(user) {
            return this.usersService.addUser(user);
          }
        }, {
          key: "updateUser",
          value: function updateUser(user) {
            return this.usersService.updateUser(user);
          }
        }, {
          key: "getUser",
          value: function getUser(userId) {
            return this.usersService.getUser(userId);
          }
        }, {
          key: "updateOnePermission",
          value: function updateOnePermission(permission) {
            return this.usersService.updateOnePermission(permission);
          }
        }, {
          key: "getOnePermission",
          value: function getOnePermission(permission) {
            return this.usersService.getOnePermission(permission);
          }
        }]);

        return UserManagementService;
      }();

      UserManagementService.??fac = function UserManagementService_Factory(t) {
        return new (t || UserManagementService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_shared_service_tags_service__WEBPACK_IMPORTED_MODULE_2__["TagsService"]));
      };

      UserManagementService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: UserManagementService,
        factory: UserManagementService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserManagementService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]
          }, {
            type: _shared_service_tags_service__WEBPACK_IMPORTED_MODULE_2__["TagsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/user-management/users/users.component.ts":
    /*!******************************************************************!*\
      !*** ./src/app/modules/user-management/users/users.component.ts ***!
      \******************************************************************/

    /*! exports provided: UsersComponent */

    /***/
    function srcAppModulesUserManagementUsersUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
        return UsersComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
      /* harmony import */


      var _shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/service/users.service */
      "./src/app/shared/service/users.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/service/notification.service */
      "./src/app/shared/service/notification.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var ng_inline_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-inline-svg */
      "./node_modules/ng-inline-svg/__ivy_ngcc__/lib_esmodule/index.js");

      function UsersComponent_div_0_mat_header_cell_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Full Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UsersComponent_div_0_mat_cell_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r16.fullname, " ");
        }
      }

      function UsersComponent_div_0_mat_header_cell_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UsersComponent_div_0_mat_cell_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r17.email, " ");
        }
      }

      function UsersComponent_div_0_mat_header_cell_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Companies ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UsersComponent_div_0_mat_cell_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", "font-weight-bold");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r18.companyname, " ");
        }
      }

      function UsersComponent_div_0_mat_header_cell_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Stat# ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UsersComponent_div_0_mat_cell_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r19.tags.length, " ");
        }
      }

      function UsersComponent_div_0_mat_header_cell_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Action ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UsersComponent_div_0_mat_cell_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UsersComponent_div_0_mat_cell_33_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22);

            var element_r20 = ctx.$implicit;

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r21.handleEditClick(element_r20._key);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UsersComponent_div_0_mat_cell_33_Template_a_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22);

            var element_r20 = ctx.$implicit;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r23.deletePublisher(element_r20._key);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("inlineSVG", "./assets/media/svg/icons/Communication/Write.svg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("inlineSVG", "./assets/media/svg/icons/General/Trash.svg");
        }
      }

      function UsersComponent_div_0_mat_header_row_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "mat-header-row");
        }
      }

      function UsersComponent_div_0_mat_row_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "mat-row");
        }
      }

      function UsersComponent_div_0_div_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "No records found");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UsersComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Publisher Users");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UsersComponent_div_0_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r25.handleAddProfile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Add Publisher ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-checkbox", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsersComponent_div_0_Template_mat_checkbox_ngModelChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r26);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r27.companyUser = $event;
          })("change", function UsersComponent_div_0_Template_mat_checkbox_change_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r26);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r28.onChangePublisher($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Display All Publishers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-table", 15, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](19, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, UsersComponent_div_0_mat_header_cell_20_Template, 2, 0, "mat-header-cell", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, UsersComponent_div_0_mat_cell_21_Template, 2, 1, "mat-cell", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](22, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, UsersComponent_div_0_mat_header_cell_23_Template, 2, 0, "mat-header-cell", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, UsersComponent_div_0_mat_cell_24_Template, 2, 1, "mat-cell", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](25, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, UsersComponent_div_0_mat_header_cell_26_Template, 2, 0, "mat-header-cell", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, UsersComponent_div_0_mat_cell_27_Template, 2, 2, "mat-cell", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](28, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, UsersComponent_div_0_mat_header_cell_29_Template, 2, 0, "mat-header-cell", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, UsersComponent_div_0_mat_cell_30_Template, 2, 1, "mat-cell", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](31, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, UsersComponent_div_0_mat_header_cell_32_Template, 2, 0, "mat-header-cell", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, UsersComponent_div_0_mat_cell_33_Template, 5, 2, "mat-cell", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](34, UsersComponent_div_0_mat_header_row_34_Template, 1, 0, "mat-header-row", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](35, UsersComponent_div_0_mat_row_35_Template, 1, 0, "mat-row", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](36, UsersComponent_div_0_div_36_Template, 3, 0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r0.companyUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx_r0.users);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx_r0.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx_r0.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.users.data.length === 0);
        }
      }

      function UsersComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " How did you get here ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Sorry you can't access the page you're looking for. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " There may be a misspelling in the URL entered,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "or the page you are looking for may no longer exist. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var UsersComponent = /*#__PURE__*/function () {
        function UsersComponent(usersServie, cdr, router, route, userService, notification) {
          _classCallCheck(this, UsersComponent);

          this.usersServie = usersServie;
          this.cdr = cdr;
          this.router = router;
          this.route = route;
          this.userService = userService;
          this.notification = notification;
          this.displayedColumns = ["fullname", "email", "companyname", "stat", "action"];
          this.users = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
          this.subscritions = [];
          this.hidden = false;
          this.companyUser = false;
        }

        _createClass(UsersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this22 = this;

            this.localStorageCompany = this.getSelectedCompanyFromLocalStorage(); //access page part

            if (!this.localStorageCompany) {
              this.hidden = true;
              this.notification.showError("Please select your Company!", "");
            } else {
              this.hidden = false;
            }

            this.subscritions.push(this.usersServie.getPublisherAll().subscribe(function (data) {
              // console.log(data);
              _this22.originalData = data;

              if (_this22.localStorageCompany) {
                _this22.users.data = data.filter(function (userData) {
                  return userData.companies.includes(_this22.localStorageCompany);
                });
              } else {
                _this22.users.data = data.filter(function (userData) {
                  return userData.companies.length == 0;
                });
              }

              _this22.cdr.detectChanges();
            }));
          }
        }, {
          key: "handleEditClick",
          value: function handleEditClick(userId) {
            this.router.navigateByUrl('/user-management/edit/' + userId);
          } //Gets the Selected Company from Local Storage

        }, {
          key: "getSelectedCompanyFromLocalStorage",
          value: function getSelectedCompanyFromLocalStorage() {
            return this.userService.getSelectedCompanyFromLocalStorage();
          }
        }, {
          key: "handleAddProfile",
          value: function handleAddProfile() {
            this.router.navigateByUrl('/user-management/new-publisher');
          }
        }, {
          key: "deletePublisher",
          value: function deletePublisher(id) {
            var _this23 = this;

            if (window.confirm('Do you want to go ahead?')) {
              this.usersServie.deleteUser(id).subscribe(function (res) {
                _this23.usersServie.getPublisherAll().subscribe(function (data) {
                  // console.log(data);
                  if (_this23.companyUser) {
                    _this23.users.data = data;
                  } else {
                    if (_this23.localStorageCompany) {
                      _this23.users.data = data.filter(function (userData) {
                        return userData.companies.includes(_this23.localStorageCompany);
                      });
                    } else {
                      _this23.users.data = data.filter(function (userData) {
                        return userData.companies.length == 0;
                      });
                    }
                  }

                  _this23.cdr.detectChanges();
                });

                _this23.notification.showWarning('Deleted a User', "");
              });
            }
          }
        }, {
          key: "onChangePublisher",
          value: function onChangePublisher(event) {
            var _this24 = this;

            this.companyUser = event.checked;

            if (this.companyUser) {
              this.users.data = this.originalData;
            } else {
              if (this.localStorageCompany) {
                this.users.data = this.originalData.filter(function (userData) {
                  return userData.companies.includes(_this24.localStorageCompany);
                });
              } else {
                this.users.data = this.originalData;
              }
            }
          }
        }]);

        return UsersComponent;
      }();

      UsersComponent.??fac = function UsersComponent_Factory(t) {
        return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]));
      };

      UsersComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: UsersComponent,
        selectors: [["app-users"]],
        decls: 2,
        vars: 2,
        consts: [["class", "row", 4, "ngIf"], ["class", "error error-3 d-flex flex-row-fluid bgi-size-cover bgi-position-center", "style", "background-image: url('./assets/media/error/bg3.jpg'); height: 100%;zoom: 1;\n  display: block;\n  min-height: 80vh;\n  font-size: 14px;\n  line-height: 1.4;\n  color: #0e1724;", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], [1, "pb-3"], [1, "col-xl-6"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "col-xl-6", "all-publisher-user", "align-self-center", "d-flex"], ["color", "primary", 3, "ngModel", "ngModelChange", "change"], [1, "example-container", "mat-elevation-z8"], [3, "dataSource"], ["table", ""], ["matColumnDef", "fullname"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "email"], ["matColumnDef", "companyname"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "stat"], ["matColumnDef", "action"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [4, "ngIf"], [3, "ngClass"], ["title", "Edit Pubisher", 1, "btn", "btn-icon", "btn-light", "btn-hover-primary", "btn-sm", "mx-3", 3, "click"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-md", "svg-icon-primary", 3, "inlineSVG"], ["title", "Delete Pubisher", 1, "btn", "btn-icon", "btn-light", "btn-hover-danger", "btn-sm", 3, "click"], ["cacheSVG", "false", 1, "svg-icon", "svg-icon-md", "svg-icon-danger", 3, "inlineSVG"], [2, "text-align", "center", "padding", "10px"], [1, "error", "error-3", "d-flex", "flex-row-fluid", "bgi-size-cover", "bgi-position-center", 2, "background-image", "url('./assets/media/error/bg3.jpg')", "height", "100%", "zoom", "1", "display", "block", "min-height", "80vh", "font-size", "14px", "line-height", "1.4", "color", "#0e1724"], [1, "px-10", "px-md-30", "py-10", "py-md-0", "d-flex", "flex-column", "justify-content-md-center"], [1, "display-4", "font-weight-boldest", "text-white", "mb-12"], [1, "font-size-h1", "font-weight-boldest", "text-dark-75"], [1, "font-size-h4", "line-height-md"]],
        template: function UsersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, UsersComponent_div_0_Template, 37, 5, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, UsersComponent_div_1_Template, 10, 0, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.hidden);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.hidden);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_8__["InlineSVGDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]],
        styles: [".all-publisher-user[_ngcontent-%COMP%] {\n  justify-content: flex-end !important;\n}\n\n@media (max-width: 1200px) {\n  .all-admin-user[_ngcontent-%COMP%] {\n    justify-content: flex-start !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyLW1hbmFnZW1lbnQvdXNlcnMvdXNlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSxzQ0FBQTtFQUNOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3VzZXItbWFuYWdlbWVudC91c2Vycy91c2Vycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGwtcHVibGlzaGVyLXVzZXIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAuYWxsLWFkbWluLXVzZXIge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UsersComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-users',
            templateUrl: './users.component.html',
            styleUrls: ['./users.component.scss']
          }]
        }], function () {
          return [{
            type: _shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
          }, {
            type: src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/service/helper.service.ts":
    /*!**************************************************!*\
      !*** ./src/app/shared/service/helper.service.ts ***!
      \**************************************************/

    /*! exports provided: HelperService */

    /***/
    function srcAppSharedServiceHelperServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelperService", function () {
        return HelperService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var HelperService = /*#__PURE__*/function () {
        function HelperService() {
          _classCallCheck(this, HelperService);
        }

        _createClass(HelperService, null, [{
          key: "passwordConfirming",
          value: function passwordConfirming(c) {
            if (c.get('password').value !== c.get('passwordConfirm').value) {
              return {
                invalid: true
              };
            }
          }
        }]);

        return HelperService;
      }();

      HelperService.??fac = function HelperService_Factory(t) {
        return new (t || HelperService)();
      };

      HelperService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: HelperService,
        factory: HelperService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HelperService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-user-management-user-management-module-es5.js.map