(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-tag-management-tag-management-module"], {
    /***/
    "./src/app/modules/tag-management/edit-tag/edit-tag.component.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/modules/tag-management/edit-tag/edit-tag.component.ts ***!
      \***********************************************************************/

    /*! exports provided: EditTagComponent */

    /***/
    function srcAppModulesTagManagementEditTagEditTagComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditTagComponent", function () {
        return EditTagComponent;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _tag_management_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../tag-management.service */
      "./src/app/modules/tag-management/tag-management.service.ts");
      /* harmony import */


      var src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/service/snackbar.service */
      "./src/app/shared/service/snackbar.service.ts");
      /* harmony import */


      var src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/service/notification.service */
      "./src/app/shared/service/notification.service.ts");
      /* harmony import */


      var src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/modules/auth/_services/auth.service */
      "./src/app/modules/auth/_services/auth.service.ts");
      /* harmony import */


      var src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/service/users.service */
      "./src/app/shared/service/users.service.ts");
      /* harmony import */


      var src_app_shared_service_companies_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/service/companies.service */
      "./src/app/shared/service/companies.service.ts");
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


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var ng_inline_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ng-inline-svg */
      "./node_modules/ng-inline-svg/__ivy_ngcc__/lib_esmodule/index.js");

      function EditTagComponent_form_0_mat_error_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function EditTagComponent_form_0_mat_option_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var advertiserItem_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", advertiserItem_r14.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", advertiserItem_r14.viewValue, " ");
        }
      }

      function EditTagComponent_form_0_mat_option_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var publisherItem_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", publisherItem_r15.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", publisherItem_r15.viewValue, " ");
        }
      }

      function EditTagComponent_form_0_mat_option_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var comItem_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", comItem_r16.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comItem_r16.viewValue, " ");
        }
      }

      function EditTagComponent_form_0_mat_option_98_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var browserVersion_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", browserVersion_r17.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", browserVersion_r17.viewValue, " ");
        }
      }

      function EditTagComponent_form_0_mat_option_116_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var country_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", country_r18.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", country_r18.viewValue, " ");
        }
      }

      function EditTagComponent_form_0_mat_option_121_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var serverUrl_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", serverUrl_r19.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", serverUrl_r19.viewValue, " ");
        }
      }

      function EditTagComponent_form_0_mat_option_128_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var statType_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", statType_r20.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", statType_r20.viewValue, " ");
        }
      }

      function EditTagComponent_form_0_mat_option_134_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var rotationType_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", rotationType_r21.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rotationType_r21.viewValue, " ");
        }
      }

      function EditTagComponent_form_0_mat_error_144_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Final URL is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function EditTagComponent_form_0_div_146_mat_option_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var paramType_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", paramType_r25.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", paramType_r25.viewValue, " ");
        }
      }

      function EditTagComponent_form_0_div_146_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Param Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-select", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function EditTagComponent_form_0_div_146_Template_mat_select_selectionChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var i_r23 = ctx.index;

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r26.updateInitialParams($event, i_r23);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EditTagComponent_form_0_div_146_mat_option_12_Template, 2, 2, "mat-option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function EditTagComponent_form_0_div_146_Template_input_keyup_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var i_r23 = ctx.index;

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r28.updateInitialParamURL($event, i_r23);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r23 = ctx.index;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.paramTypes);
        }
      }

      function EditTagComponent_form_0_div_162_mat_error_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Filter Tag is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function EditTagComponent_form_0_div_162_mat_error_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Subid is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function EditTagComponent_form_0_div_162_mat_error_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Limit is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function EditTagComponent_form_0_div_162_mat_error_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Split is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function EditTagComponent_form_0_div_162_Template(rf, ctx) {
        if (rf & 1) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Filter Tag");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-select", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Starts With");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-option", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ends With");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-option", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Contains");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-option", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Exact Value");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EditTagComponent_form_0_div_162_mat_error_14_Template, 2, 0, "mat-error", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, EditTagComponent_form_0_div_162_mat_error_18_Template, 2, 0, "mat-error", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, EditTagComponent_form_0_div_162_mat_error_22_Template, 2, 0, "mat-error", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, EditTagComponent_form_0_div_162_mat_error_26_Template, 2, 0, "mat-error", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditTagComponent_form_0_div_162_Template_a_click_28_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

            var i_r30 = ctx.index;

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r35.removeSubid(i_r30);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "span", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subItem_r29 = ctx.$implicit;
          var i_r30 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r29.get("filterTag").errors == null ? null : subItem_r29.get("filterTag").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r29.get("subid").errors == null ? null : subItem_r29.get("subid").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r29.get("limit").errors == null ? null : subItem_r29.get("limit").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r29.get("split").errors == null ? null : subItem_r29.get("split").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/General/Trash.svg");
        }
      }

      function EditTagComponent_form_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function EditTagComponent_form_0_Template_form_submit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r37.updateTag();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Create New Tag");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EditTagComponent_form_0_mat_error_13_Template, 2, 0, "mat-error", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Advertiser");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-select", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, EditTagComponent_form_0_mat_option_20_Template, 2, 2, "mat-option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Publisher");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-select", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, EditTagComponent_form_0_mat_option_26_Template, 2, 2, "mat-option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Company");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-select", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, EditTagComponent_form_0_mat_option_32_Template, 2, 2, "mat-option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Browsers Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-select", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function EditTagComponent_form_0_Template_mat_select_selectionChange_38_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r39.handleBrowserStatus($event);
          })("ngModelChange", function EditTagComponent_form_0_Template_mat_select_ngModelChange_38_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r40.selectBrowserStatus = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Allowed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Not Allowed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Browsers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-select", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function EditTagComponent_form_0_Template_mat_select_selectionChange_47_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r41.getBrowers($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Any");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Chrome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Firefox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Edge");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Internet Explorer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Opera");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Device Type Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-select", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function EditTagComponent_form_0_Template_mat_select_selectionChange_65_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r42.handleDeviceTypeStatus($event);
          })("ngModelChange", function EditTagComponent_form_0_Template_mat_select_ngModelChange_65_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r43.selectDeviceTypeStatus = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Allowed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Not Allowed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Device Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-select", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Any");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-option", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Desktop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Tablet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Browser Version Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-select", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function EditTagComponent_form_0_Template_mat_select_selectionChange_88_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r44.handleVersionStatus($event);
          })("ngModelChange", function EditTagComponent_form_0_Template_mat_select_ngModelChange_88_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r45.selectVersionStatus = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Allowed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Not Allowed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Browser Version");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-select", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, EditTagComponent_form_0_mat_option_98_Template, 2, 2, "mat-option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Country Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-select", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function EditTagComponent_form_0_Template_mat_select_selectionChange_104_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r46.handleCountryStatus($event);
          })("ngModelChange", function EditTagComponent_form_0_Template_mat_select_ngModelChange_104_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r47.selectCountryStatus = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Allowed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "mat-option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Not Allowed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Country Allowed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "mat-select", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "mat-option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Any");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](116, EditTagComponent_form_0_mat_option_116_Template, 2, 2, "mat-option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Ad Server URL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "mat-select", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](121, EditTagComponent_form_0_mat_option_121_Template, 2, 2, "mat-option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Stat Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "mat-select", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](128, EditTagComponent_form_0_mat_option_128_Template, 2, 2, "mat-option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Rotation Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "mat-select", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](134, EditTagComponent_form_0_mat_option_134_Template, 2, 2, "mat-option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "h3", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Tag URLs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditTagComponent_form_0_Template_input_ngModelChange_143_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r48.url = $event;
          })("ngModelChange", function EditTagComponent_form_0_Template_input_ngModelChange_143_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

            var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r49.getUrlParams($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](144, EditTagComponent_form_0_mat_error_144_Template, 2, 0, "mat-error", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](146, EditTagComponent_form_0_div_146_Template, 16, 2, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Inital URL: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "h3", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "SubIds");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditTagComponent_form_0_Template_button_click_159_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r50.addSubid($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " Add ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](162, EditTagComponent_form_0_div_162_Template, 30, 6, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.updateTagFG);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 21, ctx_r0.updateTagFG.value), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.updateTagFG.get("name").errors == null ? null : ctx_r0.updateTagFG.get("name").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.advertiserList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.publisherList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.companyList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.selectBrowserStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.selectDeviceTypeStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.selectVersionStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.browserVersions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.selectCountryStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.countries);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.adServerUrlList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.statTypes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.rotationTypes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.url);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.updateTagFG.get("url").errors == null ? null : ctx_r0.updateTagFG.get("url").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.params.controls);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.decodeURL(ctx_r0.initialURL));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.subids.controls);
        }
      }

      function EditTagComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " How did you get here ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Sorry you can't access the page you're looking for. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " There may be a misspelling in the URL entered,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "or the page you are looking for may no longer exist. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var EditTagComponent = /*#__PURE__*/function () {
        function EditTagComponent(route, tagManagementService, fb, _snackBarService, notification, router, auth, userService, companyService, changeDetectorRefs) {
          _classCallCheck(this, EditTagComponent);

          this.route = route;
          this.tagManagementService = tagManagementService;
          this.fb = fb;
          this._snackBarService = _snackBarService;
          this.notification = notification;
          this.auth = auth;
          this.userService = userService;
          this.companyService = companyService;
          this.changeDetectorRefs = changeDetectorRefs;
          this.companyList = [];
          this.adServerUrlList = [];
          this.publisherList = [];
          this.publishertempList = [];
          this.advertiserList = [];
          this.companySelected = "";
          this.versionList = [];
          this.hidden = false;
        }

        _createClass(EditTagComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.updateTagFG = this.fb.group({
              name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              publisher: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              advertiser: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              browserStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              browser: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              deviceTypeStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              deviceType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              versionStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              version: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              countryStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              adServerUrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              statType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              subids: this.fb.array([]),
              rotationType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              url: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
              params: this.fb.array([])
            });
            this.statTypes = this.getStatTypes();
            this.rotationTypes = this.getRotationTypes();
            this.paramTypes = this.getParamTypes();
            this.countries = this.getCountries();
            this.browserVersions = this.getVersions();
            this.getPublisherAll(); //get Company

            this.companySelected = this.getSelectedCompanyFromLocalStorage(); //access page part

            if (!this.companySelected) {
              this.hidden = true;
              this.notification.showError("Please select your Company!", "");
            } else {
              this.hidden = false;
            }

            var currentUserInfo = this.auth.currentUserValue;
            this.companyService.getUserCompanies(currentUserInfo.companies).subscribe(function (companyResult) {
              companyResult.map(function (company) {
                _this.companyList.push({
                  value: company._id,
                  viewValue: company.name
                });

                if (company._id == _this.companySelected) {
                  company.adServerUrls.map(function (url) {
                    _this.adServerUrlList.push({
                      value: url['adServerUrl'],
                      viewValue: url['adServerUrl']
                    });
                  }); //advertiser GET

                  company.reportingProviders.map(function (reporting) {
                    _this.advertiserList.push({
                      value: reporting.reportingProvider,
                      viewValue: reporting.reportingProvider
                    });
                  });
                }
              });
            }); //Get the current tag to edit

            if (this.route.snapshot.params.id) {
              this.tagManagementService.getOneTag(this.route.snapshot.params.id).subscribe(function (x) {
                _this.tag = x;
                var browserVal = [];
                var deviceTypeVal = [];
                var versionVal = [];
                var countryVal = [];
                _this.url = x['url'];
                _this.initialURL = new URL('https://adserver.com/search');

                var _iterator = _createForOfIteratorHelper(x['browser'].toString().split(",")),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var bval = _step.value;
                    browserVal.push(bval);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                var _iterator2 = _createForOfIteratorHelper(x['deviceType'].toString().split(",")),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var dval = _step2.value;
                    deviceTypeVal.push(dval);
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }

                var _iterator3 = _createForOfIteratorHelper(x['version'].toString().split(",")),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var vval = _step3.value;
                    versionVal.push(vval);
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }

                var _iterator4 = _createForOfIteratorHelper(x['country'].toString().split(",")),
                    _step4;

                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var cval = _step4.value;
                    countryVal.push(cval);
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }

                x['subids'].map(function (item) {
                  _this.subids.push(_this.fb.group(item));
                });
                x['params'].map(function (param) {
                  _this.params.push(_this.fb.group(param));
                }); // this.updateTagFG.patchValue(x);

                _this.updateTagFG.setValue({
                  name: x['name'],
                  company: x['company'],
                  advertiser: x['advertiser'],
                  publisher: x['publisher'][0]['_key'],
                  browserStatus: x['browserStatus'],
                  browser: browserVal,
                  deviceTypeStatus: x['deviceTypeStatus'],
                  deviceType: deviceTypeVal,
                  countryStatus: x['countryStatus'],
                  country: countryVal,
                  versionStatus: x['versionStatus'],
                  version: versionVal,
                  adServerUrl: x['adServerUrl'],
                  statType: x['statType'],
                  subids: x['subids'],
                  rotationType: x['rotationType'],
                  url: x['url'],
                  params: x['params']
                });
              });
            }

            this.changeDetectorRefs.detectChanges();
          }
        }, {
          key: "getPublisherAll",
          value: function getPublisherAll() {
            var _this2 = this;

            this.userService.getPublisherAll().subscribe(function (data) {
              console.log(data);

              if (_this2.companySelected) {
                _this2.publishertempList = data.filter(function (userData) {
                  return userData.companies.includes(_this2.companySelected);
                });
              } else {
                _this2.publishertempList = data;
              }

              _this2.publishertempList.map(function (publisher) {
                _this2.publisherList.push({
                  value: publisher._key,
                  viewValue: publisher.fullname
                });
              });
            });
          } //Gets the Selected Company from Local Storage

        }, {
          key: "getSelectedCompanyFromLocalStorage",
          value: function getSelectedCompanyFromLocalStorage() {
            return this.userService.getSelectedCompanyFromLocalStorage();
          } //Update the tag onto the database

        }, {
          key: "updateTag",
          value: function updateTag() {
            var _this3 = this;

            this.updateTagFG.markAllAsTouched();

            if (this.updateTagFG.valid) {
              this.tag = Object.assign(Object.assign({}, this.tag), this.updateTagFG.value);
              this.tagManagementService.updateOneTag(this.tag).subscribe(function (res) {
                _this3._snackBarService.info('Updated a  tag');
              }, function (err) {
                _this3._snackBarService.info(err.error);
              });
            }
          }
        }, {
          key: "newSubids",
          value: function newSubids() {
            return this.fb.group({
              subid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              limit: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              split: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              filterTag: ['']
            });
          }
        }, {
          key: "addSubid",
          value: function addSubid(event) {
            this.subids.push(this.newSubids());
          }
        }, {
          key: "removeSubid",
          value: function removeSubid(i) {
            this.subids.removeAt(i);
          } //Detects when URL is pasted into the field
          //https://us.search.yahoo.com/yhs/search?hspart=brandclick&hsimp=yhs-calm&p=flowers

        }, {
          key: "getUrlParams",
          value: function getUrlParams(url) {
            //Resets the URL params on every change
            this.deleteValueOfFormControl('params');

            if (this.isValidURL(url)) {
              url = new URL(url);

              var _iterator5 = _createForOfIteratorHelper(url.searchParams.keys()),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var key = _step5.value;
                  var value = url.searchParams.get(key);
                  this.addParamsToUrlForm(key, value);
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            } else {
              return;
            }
          } //Gets the value of any form Array
          //Returns a form array

        }, {
          key: "deleteValueOfFormControl",
          //Deletes value of any given form control
          value: function deleteValueOfFormControl(controlName) {
            this.params.clear();
          } //Updates the original parameters that will be received and sent on the first server request
          //Example: domain.com/search?subid={{dynamic}}&q={{dynamic}}&search=[bing]

        }, {
          key: "updateInitialParams",
          value: function updateInitialParams(param, index) {
            console.log('Updating Initial Params');
            console.log(param, index);

            if (param.value === 'static') {
              console.log('static!');
              this.params.controls[index].get('initialParam').setValue(this.params.controls[index].get('value').value);
              this.createInitialURL();
            } else {// this.params.controls[index]
              //   .get('initialParam')
              //   .setValue(this.params.controls[index].get('key').value);
            }
          } //Checks to see if initialParam mat input field has been touched and updates initial URL

        }, {
          key: "updateInitialParamURL",
          value: function updateInitialParamURL(value, index) {
            if (this.params.controls[index].get('paramType').value === 'dynamic') {
              this.createInitialURL();
            }
          } //Builds the initial URL from the paramaters

        }, {
          key: "createInitialURL",
          value: function createInitialURL() {
            var _this4 = this;

            console.log('Updating URL');
            this.initialURL = new URL('https://adserver.com/search');
            this.params.controls.forEach(function (element, index) {
              if (element.value.paramType === 'dynamic') {
                _this4.initialURL.searchParams.append(element.value.key, '{{' + element.value.initialParam + '}}');
              } else if (element.value.paramType === 'static') {// this.initialURL.searchParams.append(
                //   element.value.key,
                //   element.value.value
                // );
              } else {}
            });
          } //Decodes the URL for the Angular Template

        }, {
          key: "decodeURL",
          value: function decodeURL(url) {
            return decodeURI(url);
          } //Adds key/valuew to FormArray 'Params'

        }, {
          key: "addParamsToUrlForm",
          value: function addParamsToUrlForm(key, value) {
            var paramForm = this.fb.group({
              key: [key, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              value: [value, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              paramType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              initialParam: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
            this.params.push(paramForm);
          } //Checks to see if URL entered is valid
          //If URL is valid return true
          //Else if URL is invalid return false and throw mat-error

        }, {
          key: "isValidURL",
          value: function isValidURL(url) {
            try {
              var finalUrl = new URL(url);
              return true;
            } catch (err) {
              return false;
            }
          }
        }, {
          key: "getBrowers",
          value: function getBrowers(event) {
            var _this5 = this;

            if (event.value.length > 0) {
              var e;

              (function () {
                var vTemp = [];

                if (event.value.includes('Any')) {
                  _this5.browserVersions = _this5.versionList;
                } else {
                  var _iterator6 = _createForOfIteratorHelper(event.value),
                      _step6;

                  try {
                    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                      e = _step6.value;

                      var filterdata = _this5.versionList.filter(function (version) {
                        return version.value.includes(e);
                      });

                      filterdata.map(function (filter) {
                        vTemp.push(filter);
                      });
                    }
                  } catch (err) {
                    _iterator6.e(err);
                  } finally {
                    _iterator6.f();
                  }

                  _this5.browserVersions = vTemp;
                }
              })();
            } else {
              this.browserVersions = [];
            }
          } //update the tag as a template

        }, {
          key: "updateTemplate",
          value: function updateTemplate() {} //Gets different ways a tag can display stats

        }, {
          key: "getStatTypes",
          value: function getStatTypes() {
            return [{
              value: 'rpm',
              viewValue: 'RPM Based'
            }, {
              value: 'subid',
              viewValue: 'Sub-ID Based'
            }];
          } //Gets Country List

        }, {
          key: "getCountries",
          value: function getCountries() {
            return [{
              value: 'Afghanistan',
              viewValue: 'Afghanistan'
            }, {
              value: 'Åland Islands',
              viewValue: 'Åland Islands'
            }, {
              value: 'Albania',
              viewValue: 'Albania'
            }, {
              value: 'Algeria',
              viewValue: 'Algeria'
            }, {
              value: 'American Samoa',
              viewValue: 'American Samoa'
            }, {
              value: 'Andorra',
              viewValue: 'Andorra'
            }, {
              value: 'Angola',
              viewValue: 'Angola'
            }, {
              value: 'Anguilla',
              viewValue: 'Anguilla'
            }, {
              value: 'Antarctica',
              viewValue: 'Antarctica'
            }, {
              value: 'Antigua and Barbuda',
              viewValue: 'Antigua and Barbuda'
            }, {
              value: 'Argentina',
              viewValue: 'Argentina'
            }, {
              value: 'Armenia',
              viewValue: 'Armenia'
            }, {
              value: 'Aruba',
              viewValue: 'Aruba'
            }, {
              value: 'Australia',
              viewValue: 'Australia'
            }, {
              value: 'Austria',
              viewValue: 'Austria'
            }, {
              value: 'Azerbaijan',
              viewValue: 'Azerbaijan'
            }, {
              value: 'Bahamas',
              viewValue: 'Bahamas'
            }, {
              value: 'Bahrain',
              viewValue: 'Bahrain'
            }, {
              value: 'Bangladesh',
              viewValue: 'Bangladesh'
            }, {
              value: 'Barbados',
              viewValue: 'Barbados'
            }, {
              value: 'Belarus',
              viewValue: 'Belarus'
            }, {
              value: 'Belgium',
              viewValue: 'Belgium'
            }, {
              value: 'Belize',
              viewValue: 'Belize'
            }, {
              value: 'Benin',
              viewValue: 'Benin'
            }, {
              value: 'Bermuda',
              viewValue: 'Bermuda'
            }, {
              value: 'Bhutan',
              viewValue: 'Bhutan'
            }, {
              value: 'Bolivia',
              viewValue: 'Bolivia'
            }, {
              value: 'Bosnia and Herzegovina',
              viewValue: 'Bosnia and Herzegovina'
            }, {
              value: 'Botswana',
              viewValue: 'Botswana'
            }, {
              value: 'Bouvet Island',
              viewValue: 'Bouvet Island'
            }, {
              value: 'Brazil',
              viewValue: 'Brazil'
            }, {
              value: 'British Indian Ocean Territory',
              viewValue: 'British Indian Ocean Territory'
            }, {
              value: 'Brunei Darussalam',
              viewValue: 'Brunei Darussala'
            }, {
              value: 'Bulgaria',
              viewValue: 'Bulgaria'
            }, {
              value: 'Burkina Faso',
              viewValue: 'Burkina Faso'
            }, {
              value: 'Burundi',
              viewValue: 'Burundi'
            }, {
              value: 'Cambodia',
              viewValue: 'Cambodia'
            }, {
              value: 'Cameroon',
              viewValue: 'Cameroon'
            }, {
              value: 'Canada',
              viewValue: 'Canada'
            }, {
              value: 'Cape Verde',
              viewValue: 'Cape Verde'
            }, {
              value: 'Cayman Islands',
              viewValue: 'Cayman Islands'
            }, {
              value: 'Central African Republic',
              viewValue: 'Central African Republic'
            }, {
              value: 'Chad',
              viewValue: 'Chad'
            }, {
              value: 'Chile',
              viewValue: 'Chile'
            }, {
              value: 'China',
              viewValue: 'China'
            }, {
              value: 'Christmas Island',
              viewValue: 'Christmas Island'
            }, {
              value: 'Cocos (Keeling) Islands',
              viewValue: 'Cocos (Keeling) Islands'
            }, {
              value: 'Colombia',
              viewValue: 'Colombia'
            }, {
              value: 'Comoros',
              viewValue: 'Comoros'
            }, {
              value: 'Congo',
              viewValue: 'Congo'
            }, {
              value: 'Congo, The Democratic Republic of the',
              viewValue: 'Congo, The Democratic Republic of the'
            }, {
              value: 'Cook Islands',
              viewValue: 'Cook Islands'
            }, {
              value: 'Costa Rica',
              viewValue: 'Costa Rica'
            }, {
              value: 'Cote D\'Ivoire',
              viewValue: 'Cote D\'Ivoire'
            }, {
              value: 'Croatia',
              viewValue: 'Croatia'
            }, {
              value: 'Cuba',
              viewValue: 'Cuba'
            }, {
              value: 'Cyprus',
              viewValue: 'Cyprus'
            }, {
              value: 'Czech Republic',
              viewValue: 'Czech Republic'
            }, {
              value: 'Denmark',
              viewValue: 'Denmark'
            }, {
              value: 'Djibouti',
              viewValue: 'Djibouti'
            }, {
              value: 'Dominica',
              viewValue: 'Dominica'
            }, {
              value: 'Dominican Republic',
              viewValue: 'Dominican Republic'
            }, {
              value: 'Ecuador',
              viewValue: 'Ecuador'
            }, {
              value: 'Egypt',
              viewValue: 'Egypt'
            }, {
              value: 'El Salvador',
              viewValue: 'El Salvador'
            }, {
              value: 'Equatorial Guinea',
              viewValue: 'Equatorial Guinea'
            }, {
              value: 'Eritrea',
              viewValue: 'Eritrea'
            }, {
              value: 'Estonia',
              viewValue: 'Estonia'
            }, {
              value: 'Ethiopia',
              viewValue: 'Ethiopia'
            }, {
              value: 'Falkland Islands (Malvinas)',
              viewValue: 'Falkland Islands (Malvinas)'
            }, {
              value: 'Faroe Islands',
              viewValue: 'Faroe Islands'
            }, {
              value: 'Fiji',
              viewValue: 'Fiji'
            }, {
              value: 'Finland',
              viewValue: 'Finland'
            }, {
              value: 'France',
              viewValue: 'France'
            }, {
              value: 'French Guiana',
              viewValue: 'French Guiana'
            }, {
              value: 'French Polynesia',
              viewValue: 'French Polynesia'
            }, {
              value: 'French Southern Territories',
              viewValue: 'French Southern Territories'
            }, {
              value: 'Gabon',
              viewValue: 'Gabon'
            }, {
              value: 'Gambia',
              viewValue: 'Gambia'
            }, {
              value: 'Georgia',
              viewValue: 'Georgia'
            }, {
              value: 'Germany',
              viewValue: 'Germany'
            }, {
              value: 'Ghana',
              viewValue: 'Ghana'
            }, {
              value: 'Gibraltar',
              viewValue: 'Gibraltar'
            }, {
              value: 'Greece',
              viewValue: 'Greece'
            }, {
              value: 'Greenland',
              viewValue: 'Greenland'
            }, {
              value: 'Grenada',
              viewValue: 'Grenada'
            }, {
              value: 'Guadeloupe',
              viewValue: 'Guadeloupe'
            }, {
              value: 'Guam',
              viewValue: 'Guam'
            }, {
              value: 'Guatemala',
              viewValue: 'Guatemala'
            }, {
              value: 'Guernsey',
              viewValue: 'Guernsey'
            }, {
              value: 'Guinea',
              viewValue: 'Guinea'
            }, {
              value: 'Guinea-Bissau',
              viewValue: 'Guinea-Bissau'
            }, {
              value: 'Guyana',
              viewValue: 'Guyana'
            }, {
              value: 'Haiti',
              viewValue: 'Haiti'
            }, {
              value: 'Heard Island and Mcdonald Islands',
              viewValue: 'Heard Island and Mcdonald Islands'
            }, {
              value: 'Holy See (Vatican City State)',
              viewValue: 'Holy See (Vatican City State)'
            }, {
              value: 'Honduras',
              viewValue: 'Honduras'
            }, {
              value: 'Hong Kong',
              viewValue: 'Hong Kong'
            }, {
              value: 'Hungary',
              viewValue: 'Hungary'
            }, {
              value: 'Iceland',
              viewValue: 'Iceland'
            }, {
              value: 'India',
              viewValue: 'India'
            }, {
              value: 'Indonesia',
              viewValue: 'Indonesia'
            }, {
              value: 'Iran, Islamic Republic Of',
              viewValue: 'Iran, Islamic Republic Of'
            }, {
              value: 'Iraq',
              viewValue: 'Iraq'
            }, {
              value: 'Ireland',
              viewValue: 'Ireland'
            }, {
              value: 'Isle of Man',
              viewValue: 'Isle of Man'
            }, {
              value: 'Israel',
              viewValue: 'Israel'
            }, {
              value: 'Italy',
              viewValue: 'Italy'
            }, {
              value: 'Jamaica',
              viewValue: 'Jamaica'
            }, {
              value: 'Japan',
              viewValue: 'Japan'
            }, {
              value: 'Jersey',
              viewValue: 'Jersey'
            }, {
              value: 'Jordan',
              viewValue: 'Jordan'
            }, {
              value: 'Kazakhstan',
              viewValue: 'Kazakhstan'
            }, {
              value: 'Kenya',
              viewValue: 'Kenya'
            }, {
              value: 'Kiribati',
              viewValue: 'Kiribati'
            }, {
              value: 'Korea, Democratic People\'S Republic of',
              viewValue: 'Korea, Democratic People\'S Republic o'
            }, {
              value: 'Korea, Republic of',
              viewValue: 'Korea, Republic of'
            }, {
              value: 'Kuwait',
              viewValue: 'Kuwait'
            }, {
              value: 'Kyrgyzstan',
              viewValue: 'Kyrgyzstan'
            }, {
              value: 'Lao People\'S Democratic Republic',
              viewValue: 'Lao People\'S Democratic Republic'
            }, {
              value: 'Latvia',
              viewValue: 'Latvia'
            }, {
              value: 'Lebanon',
              viewValue: 'Lebanon'
            }, {
              value: 'Lesotho',
              viewValue: 'Lesotho'
            }, {
              value: 'Liberia',
              viewValue: 'Liberia'
            }, {
              value: 'Libyan Arab Jamahiriya',
              viewValue: 'Libyan Arab Jamahiriya'
            }, {
              value: 'Liechtenstein',
              viewValue: 'Liechtenstein'
            }, {
              value: 'Lithuania',
              viewValue: 'Lithuania'
            }, {
              value: 'Luxembourg',
              viewValue: 'Luxembourg'
            }, {
              value: 'Macao',
              viewValue: 'Macao'
            }, {
              value: 'Macedonia, The Former Yugoslav Republic of',
              viewValue: 'Macedonia, The Former Yugoslav Republic of'
            }, {
              value: 'Madagascar',
              viewValue: 'Madagascar'
            }, {
              value: 'Malawi',
              viewValue: 'Malawi'
            }, {
              value: 'Malaysia',
              viewValue: 'Malaysia'
            }, {
              value: 'Maldives',
              viewValue: 'Maldives'
            }, {
              value: 'Mali',
              viewValue: 'Mali'
            }, {
              value: 'Malta',
              viewValue: 'Malta'
            }, {
              value: 'Marshall Islands',
              viewValue: 'Marshall Islands'
            }, {
              value: 'Martinique',
              viewValue: 'Martinique'
            }, {
              value: 'Mauritania',
              viewValue: 'Mauritania'
            }, {
              value: 'Mauritius',
              viewValue: 'Mauritius'
            }, {
              value: 'Mayotte',
              viewValue: 'Mayotte'
            }, {
              value: 'Mexico',
              viewValue: 'Mexico'
            }, {
              value: 'Micronesia, Federated States of',
              viewValue: 'Micronesia, Federated States of'
            }, {
              value: 'Moldova, Republic of',
              viewValue: 'Moldova, Republic of'
            }, {
              value: 'Monaco',
              viewValue: 'Monaco'
            }, {
              value: 'Mongolia',
              viewValue: 'Mongolia'
            }, {
              value: 'Montserrat',
              viewValue: 'Montserrat'
            }, {
              value: 'Morocco',
              viewValue: 'Morocco'
            }, {
              value: 'Mozambique',
              viewValue: 'Mozambique'
            }, {
              value: 'Myanmar',
              viewValue: 'Myanmar'
            }, {
              value: 'Namibia',
              viewValue: 'Namibia'
            }, {
              value: 'Nauru',
              viewValue: 'Nauru'
            }, {
              value: 'Nepal',
              viewValue: 'Nepal'
            }, {
              value: 'Netherlands',
              viewValue: 'Netherlands'
            }, {
              value: 'Netherlands Antilles',
              viewValue: 'Netherlands Antilles'
            }, {
              value: 'New Caledonia',
              viewValue: 'New Caledonia'
            }, {
              value: 'New Zealand',
              viewValue: 'New Zealand'
            }, {
              value: 'Nicaragua',
              viewValue: 'Nicaragua'
            }, {
              value: 'Niger',
              viewValue: 'Niger'
            }, {
              value: 'Nigeria',
              viewValue: 'Nigeria'
            }, {
              value: 'Niue',
              viewValue: 'Niue'
            }, {
              value: 'Norfolk Island',
              viewValue: 'Norfolk Island'
            }, {
              value: 'Northern Mariana Islands',
              viewValue: 'Northern Mariana Islands'
            }, {
              value: 'Norway',
              viewValue: 'Norway'
            }, {
              value: 'Oman',
              viewValue: 'Oman'
            }, {
              value: 'Pakistan',
              viewValue: 'Pakistan'
            }, {
              value: 'Palau',
              viewValue: 'Palau'
            }, {
              value: 'Palestinian Territory, Occupied',
              viewValue: 'Palestinian Territory, Occupied'
            }, {
              value: 'Panama',
              viewValue: 'Panama'
            }, {
              value: 'Papua New Guinea',
              viewValue: 'Papua New Guinea'
            }, {
              value: 'Paraguay',
              viewValue: 'Paraguay'
            }, {
              value: 'Peru',
              viewValue: 'Peru'
            }, {
              value: 'Philippines',
              viewValue: 'Philippines'
            }, {
              value: 'Pitcairn',
              viewValue: 'Pitcairn'
            }, {
              value: 'Poland',
              viewValue: 'Poland'
            }, {
              value: 'Portugal',
              viewValue: 'Portugal'
            }, {
              value: 'Puerto Rico',
              viewValue: 'Puerto Rico'
            }, {
              value: 'Qatar',
              viewValue: 'Qatar'
            }, {
              value: 'Reunion',
              viewValue: 'Reunion'
            }, {
              value: 'Romania',
              viewValue: 'Romania'
            }, {
              value: 'Russian Federation',
              viewValue: 'Russian Federatio'
            }, {
              value: 'RWANDA',
              viewValue: 'RWANDA'
            }, {
              value: 'Saint Helena',
              viewValue: 'Saint Helena'
            }, {
              value: 'Saint Kitts and Nevis',
              viewValue: 'Saint Kitts and Nevis'
            }, {
              value: 'Saint Lucia',
              viewValue: 'Saint Lucia'
            }, {
              value: 'Saint Pierre and Miquelon',
              viewValue: 'Saint Pierre and Miquelon'
            }, {
              value: 'Saint Vincent and the Grenadines',
              viewValue: 'Saint Vincent and the Grenadines'
            }, {
              value: 'Samoa',
              viewValue: 'Samoa'
            }, {
              value: 'San Marino',
              viewValue: 'San Marino'
            }, {
              value: 'Sao Tome and Principe',
              viewValue: 'Sao Tome and Principe'
            }, {
              value: 'Saudi Arabia',
              viewValue: 'Saudi Arabia'
            }, {
              value: 'Senegal',
              viewValue: 'Senegal'
            }, {
              value: 'Serbia and Montenegro',
              viewValue: 'Serbia and Montenegro'
            }, {
              value: 'Seychelles',
              viewValue: 'Seychelles'
            }, {
              value: 'Sierra Leone',
              viewValue: 'Sierra Leone'
            }, {
              value: 'Singapore',
              viewValue: 'Singapore'
            }, {
              value: 'Slovakia',
              viewValue: 'Slovakia'
            }, {
              value: 'Slovenia',
              viewValue: 'Slovenia'
            }, {
              value: 'Solomon Islands',
              viewValue: 'Solomon Islands'
            }, {
              value: 'Somalia',
              viewValue: 'Somalia'
            }, {
              value: 'South Africa',
              viewValue: 'South Africa'
            }, {
              value: 'South Georgia and the South Sandwich Islands',
              viewValue: 'South Georgia and the South Sandwich Isla'
            }, {
              value: 'Spain',
              viewValue: 'Spain'
            }, {
              value: 'Sri Lanka',
              viewValue: 'Sri Lanka'
            }, {
              value: 'Sudan',
              viewValue: 'Sudan'
            }, {
              value: 'Surivalue',
              viewValue: 'Surivalue'
            }, {
              value: 'Svalbard and Jan Mayen',
              viewValue: 'Svalbard and Jan Mayen'
            }, {
              value: 'Swaziland',
              viewValue: 'Swaziland'
            }, {
              value: 'Sweden',
              viewValue: 'Sweden'
            }, {
              value: 'Switzerland',
              viewValue: 'Switzerland'
            }, {
              value: 'Syrian Arab Republic',
              viewValue: 'Syrian Arab Republic'
            }, {
              value: 'Taiwan, Province of China',
              viewValue: 'Taiwan, Province of China'
            }, {
              value: 'Tajikistan',
              viewValue: 'Tajikistan'
            }, {
              value: 'Tanzania, United Republic of',
              viewValue: 'Tanzania, United Republic of'
            }, {
              value: 'Thailand',
              viewValue: 'Thailand'
            }, {
              value: 'Timor-Leste',
              viewValue: 'Timor-Leste'
            }, {
              value: 'Togo',
              viewValue: 'Togo'
            }, {
              value: 'Tokelau',
              viewValue: 'Tokelau'
            }, {
              value: 'Tonga',
              viewValue: 'Tonga'
            }, {
              value: 'TrinviewValuead and Tobago',
              viewValue: 'TrinviewValuead and Tobago'
            }, {
              value: 'Tunisia',
              viewValue: 'Tunisia'
            }, {
              value: 'Turkey',
              viewValue: 'Turkey'
            }, {
              value: 'Turkmenistan',
              viewValue: 'Turkmenistan'
            }, {
              value: 'Turks and Caicos Islands',
              viewValue: 'Turks and Caicos Islands'
            }, {
              value: 'Tuvalu',
              viewValue: 'Tuvalu'
            }, {
              value: 'Uganda',
              viewValue: 'Uganda'
            }, {
              value: 'Ukraine',
              viewValue: 'Ukraine'
            }, {
              value: 'United Arab Emirates',
              viewValue: 'United Arab Emirates'
            }, {
              value: 'United Kingdom',
              viewValue: 'United Kingdom'
            }, {
              value: 'United States',
              viewValue: 'United States'
            }, {
              value: 'United States Minor Outlying Islands',
              viewValue: 'United States Minor Outlying Islands'
            }, {
              value: 'Uruguay',
              viewValue: 'Uruguay'
            }, {
              value: 'Uzbekistan',
              viewValue: 'Uzbekistan'
            }, {
              value: 'Vanuatu',
              viewValue: 'Vanuatu'
            }, {
              value: 'Venezuela',
              viewValue: 'Venezuela'
            }, {
              value: 'Viet Nam',
              viewValue: 'Viet Nam'
            }, {
              value: 'Virgin Islands, British',
              viewValue: 'Virgin Islands, British'
            }, {
              value: 'Virgin Islands, U.S.',
              viewValue: 'Virgin Islands, U.S.'
            }, {
              value: 'Wallis and Futuna',
              viewValue: 'Wallis and Futuna'
            }, {
              value: 'Western Sahara',
              viewValue: 'Western Sahara'
            }, {
              value: 'Yemen',
              viewValue: 'Yemen'
            }, {
              value: 'Zambia',
              viewValue: 'Zambia'
            }, {
              value: 'Zimbabwe',
              viewValue: 'Zimbabwe'
            }];
          } //Gets Browser Versions

        }, {
          key: "getVersions",
          value: function getVersions() {
            var _this6 = this;

            this.edgeVersions = [{
              value: "Edge - 102.0.1245.7",
              viewValue: "Edge - 102.0.1245.7"
            }, {
              value: "Edge - 101.0.1210.10",
              viewValue: "Edge - 101.0.1210.10"
            }, {
              value: "Edge - 100.0.1185.10",
              viewValue: "Edge - 100.0.1185.10"
            }, {
              value: "Edge - 99.0.1150.11",
              viewValue: "Edge - 99.0.1150.11"
            }, {
              value: "Edge - 98.0.1108.23",
              viewValue: "Edge - 98.0.1108.23"
            }, {
              value: "Edge - 97.0.1072.21",
              viewValue: "Edge - 97.0.1072.21"
            }, {
              value: "Edge - 96.0.1054.8",
              viewValue: "Edge - 96.0.1054.8"
            }, {
              value: "Edge - 95.0.1020.9",
              viewValue: "Edge - 95.0.1020.9"
            }, {
              value: "Edge - 94.0.992.9",
              viewValue: "Edge - 94.0.992.9"
            }, {
              value: "Edge - 93.0.961.11",
              viewValue: "Edge - 93.0.961.11"
            }, {
              value: "Edge - 92.0.902.9",
              viewValue: "Edge - 92.0.902.9"
            }, {
              value: "Edge - 91.0.864.11",
              viewValue: "Edge - 91.0.864.11"
            }, {
              value: "Edge - 90.0.818.8",
              viewValue: "Edge - 90.0.818.8"
            }, {
              value: "Edge - 89.0.774.18",
              viewValue: "Edge - 89.0.774.18"
            }, {
              value: "Edge - 88.0.705.18",
              viewValue: "Edge - 88.0.705.18"
            }];
            this.operaVersions = [{
              value: "Opera - 12.15",
              viewValue: "Opera - 12.15"
            }, {
              value: "Opera - 12.14",
              viewValue: "Opera - 12.14"
            }, {
              value: "Opera - 12.13",
              viewValue: "Opera - 12.13"
            }, {
              value: "Opera - 12.12",
              viewValue: "Opera - 12.12"
            }, {
              value: "Opera - 12.11",
              viewValue: "Opera - 12.11"
            }, {
              value: "Opera - 12.10",
              viewValue: "Opera - 12.10"
            }, {
              value: "Opera - 12.10b",
              viewValue: "Opera - 12.10b"
            }, {
              value: "Opera - 12.02",
              viewValue: "Opera - 12.02"
            }, {
              value: "Opera - 12.01",
              viewValue: "Opera - 12.01"
            }, {
              value: "Opera - 12.00",
              viewValue: "Opera - 12.00"
            }, {
              value: "Opera - 12.00b",
              viewValue: "Opera - 12.00b"
            }, {
              value: "Opera - 12.00a",
              viewValue: "Opera - 12.00a"
            }, {
              value: "Opera - 11.64",
              viewValue: "Opera - 11.64"
            }, {
              value: "Opera - 11.62",
              viewValue: "Opera - 11.62"
            }, {
              value: "Opera - 11.61",
              viewValue: "Opera - 11.61"
            }, {
              value: "Opera - 11.60",
              viewValue: "Opera - 11.60"
            }, {
              value: "Opera - 11.60b",
              viewValue: "Opera - 11.60b"
            }, {
              value: "Opera - 11.52",
              viewValue: "Opera - 11.52"
            }, {
              value: "Opera - 11.51",
              viewValue: "Opera - 11.51"
            }, {
              value: "Opera - 11.50",
              viewValue: "Opera - 11.50"
            }];
            this.internetExplorers = [{
              value: "Internet Explorer - 11.0.220",
              viewValue: "Internet Explorer - 11.0.220"
            }, {
              value: "Internet Explorer - 9.0.195",
              viewValue: "Internet Explorer - 9.0.195"
            }, {
              value: "Internet Explorer - 8.0.6001.18702",
              viewValue: "Internet Explorer - 8.0.6001.18702"
            }, {
              value: "Internet Explorer - 6.0 SP1",
              viewValue: "Internet Explorer - 6.0 SP1"
            }, {
              value: "Internet Explorer - 5.5 SP2",
              viewValue: "Internet Explorer - 5.5 SP2"
            }, {
              value: "Internet Explorer - 5.01 SP2",
              viewValue: "Internet Explorer - 5.01 SP2"
            }, {
              value: "Internet Explorer - 5.2.3",
              viewValue: "Internet Explorer - 5.2.3"
            }, {
              value: "Internet Explorer - 5.1.7",
              viewValue: "Internet Explorer - 5.1.7"
            }, {
              value: "Internet Explorer - 4.0.1",
              viewValue: "Internet Explorer - 4.0.1"
            }, {
              value: "Internet Explorer - 2.0.1",
              viewValue: "Internet Explorer - 2.0.1"
            }];
            this.versionList.push({
              value: "Any",
              viewValue: "Any"
            }); //Chrome Version List Get

            this.tagManagementService.getChromeBrowserVersion().subscribe(function (res) {
              var versionsChromeData = res.slice(0, 30);
              versionsChromeData.map(function (version) {
                _this6.versionList.push({
                  value: "Chrome - " + version.version,
                  viewValue: "Chrome - " + version.version
                });
              });
            });
            this.edgeVersions.map(function (edge) {
              _this6.versionList.push(edge);
            }); //FireFox Version List Get

            this.tagManagementService.getFirefoxBrowserVersion().subscribe(function (res) {
              var firefoxList = [];

              for (var i in res) {
                firefoxList.push({
                  value: "Firefox - " + i,
                  viewValue: "Firefox - " + i
                });
              }

              firefoxList.slice(firefoxList['length'] - 30, firefoxList['length']).map(function (version) {
                _this6.versionList.push({
                  value: version['value'],
                  viewValue: version['viewValue']
                });
              });
            });
            this.internetExplorers.map(function (internet) {
              _this6.versionList.push(internet);
            });
            this.operaVersions.map(function (opera) {
              _this6.versionList.push(opera);
            });
            return this.versionList;
          } //Gets different ways a tag can display stats

        }, {
          key: "getRotationTypes",
          value: function getRotationTypes() {
            return [{
              value: 'roundRobin',
              viewValue: 'Round Robin'
            }, {
              value: 'percentage',
              viewValue: 'Percentage'
            }];
          }
        }, {
          key: "getParamTypes",
          value: function getParamTypes() {
            return [{
              value: 'static',
              viewValue: 'Static'
            }, {
              value: 'dynamic',
              viewValue: 'Dynamic'
            }];
          }
        }, {
          key: "handleBrowserStatus",
          value: function handleBrowserStatus(event) {}
        }, {
          key: "handleDeviceTypeStatus",
          value: function handleDeviceTypeStatus(event) {}
        }, {
          key: "handleVersionStatus",
          value: function handleVersionStatus(event) {}
        }, {
          key: "handleCountryStatus",
          value: function handleCountryStatus(event) {}
        }, {
          key: "subids",
          get: function get() {
            return this.updateTagFG.controls['subids'];
          }
        }, {
          key: "params",
          get: function get() {
            return this.updateTagFG.controls['params'];
          }
        }]);

        return EditTagComponent;
      }();

      EditTagComponent.ɵfac = function EditTagComponent_Factory(t) {
        return new (t || EditTagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tag_management_service__WEBPACK_IMPORTED_MODULE_3__["TagManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_companies_service__WEBPACK_IMPORTED_MODULE_8__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      EditTagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditTagComponent,
        selectors: [["app-edit-tag"]],
        viewQuery: function EditTagComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formGroupDirective = _t.first);
          }
        },
        decls: 2,
        vars: 2,
        consts: [["class", "example-container", 3, "formGroup", "submit", 4, "ngIf"], ["class", "error error-3 d-flex flex-row-fluid bgi-size-cover bgi-position-center", "style", "background-image: url('./assets/media/error/bg3.jpg'); height: 100%;zoom: 1;\n  display: block;\n  min-height: 80vh;\n  font-size: 14px;\n  line-height: 1.4;\n  color: #0e1724;", 4, "ngIf"], [1, "example-container", 3, "formGroup", "submit"], [1, "row"], [1, "col-xl-6"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], ["matInput", "", "formControlName", "name", "placeholder", "Name"], [4, "ngIf"], [1, "col-xl-4"], ["matNativeControl", "", "formControlName", "advertiser"], [3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", "formControlName", "publisher"], ["formControlName", "company", 3, "disabled"], [1, "col-xl-3"], ["matNativeControl", "", "formControlName", "browserStatus", 3, "ngModel", "selectionChange", "ngModelChange"], ["value", "true"], ["value", "false"], [1, "col-xl-9"], ["matNativeControl", "", "formControlName", "browser", "multiple", "", 3, "selectionChange"], ["value", "Any"], ["value", "Chrome"], ["value", "Firefox"], ["value", "Edge"], ["value", "Internet Explorer"], ["value", "Opera"], ["matNativeControl", "", "formControlName", "deviceTypeStatus", 3, "ngModel", "selectionChange", "ngModelChange"], ["matNativeControl", "", "formControlName", "deviceType", "multiple", ""], ["value", "Desktop"], ["value", "Mobile"], ["value", "Tablet"], ["matNativeControl", "", "formControlName", "versionStatus", 3, "ngModel", "selectionChange", "ngModelChange"], ["matNativeControl", "", "formControlName", "version", "multiple", ""], ["matNativeControl", "", "formControlName", "countryStatus", 3, "ngModel", "selectionChange", "ngModelChange"], ["matNativeControl", "", "formControlName", "country", "multiple", ""], ["formControlName", "adServerUrl"], ["formControlName", "statType"], ["formControlName", "rotationType"], ["matInput", "", "formControlName", "url", "placeholder", "Final URL", 3, "ngModel", "ngModelChange"], ["formArrayName", "params"], ["class", "params row", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "row", "pb-4"], [1, "col-md-3"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], ["formArrayName", "subids"], ["class", "row", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "col-md-6"], ["mat-raised-button", "", "color", "primary", "type", "submit"], [3, "value"], [1, "params", "row", 3, "formGroupName"], ["matInput", "", "formControlName", "key", "placeholder", "Final Key"], ["matInput", "", "formControlName", "value", "placeholder", "Final Value"], ["formControlName", "paramType", 3, "selectionChange"], ["matInput", "", "formControlName", "initialParam", "placeholder", "Inital Value", 3, "keyup"], [1, "row", 3, "formGroupName"], ["matNativeControl", "", "formControlName", "filterTag"], ["value", "StartsWith"], ["value", "EndsWith"], ["value", "Contains"], ["value", "ExactValue"], ["matInput", "", "placeholder", "Subid(Numeric Range: example 1-10 input)", "formControlName", "subid"], [1, "col-xl-2"], ["matInput", "", "placeholder", "Limit", "formControlName", "limit"], ["matInput", "", "placeholder", "Split", "formControlName", "split"], [1, "col-xl-1"], ["title", "Delete Tag", 1, "btn", "btn-icon", "btn-light", "btn-hover-danger", "btn-sm", 3, "click"], ["cacheSVG", "false", 1, "svg-icon", "svg-icon-md", "svg-icon-danger", 3, "inlineSVG"], [1, "error", "error-3", "d-flex", "flex-row-fluid", "bgi-size-cover", "bgi-position-center", 2, "background-image", "url('./assets/media/error/bg3.jpg')", "height", "100%", "zoom", "1", "display", "block", "min-height", "80vh", "font-size", "14px", "line-height", "1.4", "color", "#0e1724"], [1, "px-10", "px-md-30", "py-10", "py-md-0", "d-flex", "flex-column", "justify-content-md-center"], [1, "display-4", "font-weight-boldest", "text-white", "mb-12"], [1, "font-size-h1", "font-weight-boldest", "text-dark-75"], [1, "font-size-h4", "line-height-md"]],
        template: function EditTagComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditTagComponent_form_0_Template, 167, 23, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditTagComponent_div_1_Template, 10, 0, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hidden);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hidden);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_15__["InlineSVGDirective"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["JsonPipe"]],
        styles: [".subid-header[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.25rem;\n  margin-bottom: 0;\n  background-color: #ffffff;\n  border-bottom: 1px solid #EBEDF3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy90YWctbWFuYWdlbWVudC9lZGl0LXRhZy9lZGl0LXRhZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3RhZy1tYW5hZ2VtZW50L2VkaXQtdGFnL2VkaXQtdGFnLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1YmlkLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC4yNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFQkVERjM7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditTagComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-edit-tag',
            templateUrl: './edit-tag.component.html',
            styleUrls: ['./edit-tag.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _tag_management_service__WEBPACK_IMPORTED_MODULE_3__["TagManagementService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"]
          }, {
            type: src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
          }, {
            type: src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"]
          }, {
            type: src_app_shared_service_companies_service__WEBPACK_IMPORTED_MODULE_8__["CompanyService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
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
    "./src/app/modules/tag-management/new-tag/new-tag.component.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/modules/tag-management/new-tag/new-tag.component.ts ***!
      \*********************************************************************/

    /*! exports provided: NewTagComponent */

    /***/
    function srcAppModulesTagManagementNewTagNewTagComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewTagComponent", function () {
        return NewTagComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _template_name_template_name_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../template-name/template-name.component */
      "./src/app/modules/tag-management/template-name/template-name.component.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _tag_management_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../tag-management.service */
      "./src/app/modules/tag-management/tag-management.service.ts");
      /* harmony import */


      var src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/service/snackbar.service */
      "./src/app/shared/service/snackbar.service.ts");
      /* harmony import */


      var src_app_shared_service_companies_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/service/companies.service */
      "./src/app/shared/service/companies.service.ts");
      /* harmony import */


      var src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/modules/auth/_services/auth.service */
      "./src/app/modules/auth/_services/auth.service.ts");
      /* harmony import */


      var src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/service/users.service */
      "./src/app/shared/service/users.service.ts");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/service/notification.service */
      "./src/app/shared/service/notification.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var ng_inline_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ng-inline-svg */
      "./node_modules/ng-inline-svg/__ivy_ngcc__/lib_esmodule/index.js");

      function NewTagComponent_div_0_mat_option_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var templateItem_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", templateItem_r16.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", templateItem_r16.viewValue, " ");
        }
      }

      function NewTagComponent_div_0_mat_error_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NewTagComponent_div_0_mat_option_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var advertiserItem_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", advertiserItem_r17.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", advertiserItem_r17.viewValue, " ");
        }
      }

      function NewTagComponent_div_0_mat_option_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var publisherItem_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", publisherItem_r18.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", publisherItem_r18.viewValue, " ");
        }
      }

      function NewTagComponent_div_0_mat_option_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var comItem_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", comItem_r19.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comItem_r19.viewValue, " ");
        }
      }

      function NewTagComponent_div_0_mat_option_107_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var browserVersion_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", browserVersion_r20.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", browserVersion_r20.viewValue, " ");
        }
      }

      function NewTagComponent_div_0_mat_option_125_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var country_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", country_r21.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", country_r21.viewValue, " ");
        }
      }

      function NewTagComponent_div_0_mat_option_130_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var serverUrl_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", serverUrl_r22.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", serverUrl_r22.viewValue, " ");
        }
      }

      function NewTagComponent_div_0_mat_option_137_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var statType_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", statType_r23.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", statType_r23.viewValue, " ");
        }
      }

      function NewTagComponent_div_0_mat_option_143_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var rotationType_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", rotationType_r24.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rotationType_r24.viewValue, " ");
        }
      }

      function NewTagComponent_div_0_mat_error_153_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Final URL is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NewTagComponent_div_0_div_155_mat_option_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var paramType_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", paramType_r28.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", paramType_r28.viewValue, " ");
        }
      }

      function NewTagComponent_div_0_div_155_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Param Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-select", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function NewTagComponent_div_0_div_155_Template_mat_select_selectionChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var i_r26 = ctx.index;

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r29.updateInitialParams($event, i_r26);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NewTagComponent_div_0_div_155_mat_option_10_Template, 2, 2, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function NewTagComponent_div_0_div_155_Template_input_keyup_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var i_r26 = ctx.index;

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r31.updateInitialParamURL($event, i_r26);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var p_r25 = ctx.$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", p_r25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r14.paramTypes);
        }
      }

      function NewTagComponent_div_0_div_171_mat_error_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Filter Tag is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NewTagComponent_div_0_div_171_mat_error_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Subid is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NewTagComponent_div_0_div_171_mat_error_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Limit is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NewTagComponent_div_0_div_171_mat_error_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Split is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NewTagComponent_div_0_div_171_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Filter Tag");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-select", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-option", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Starts With");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-option", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ends With");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-option", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Contains");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-option", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Exact Value");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NewTagComponent_div_0_div_171_mat_error_14_Template, 2, 0, "mat-error", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, NewTagComponent_div_0_div_171_mat_error_18_Template, 2, 0, "mat-error", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, NewTagComponent_div_0_div_171_mat_error_22_Template, 2, 0, "mat-error", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, NewTagComponent_div_0_div_171_mat_error_26_Template, 2, 0, "mat-error", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewTagComponent_div_0_div_171_Template_a_click_28_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var i_r33 = ctx.index;

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r38.removeSubid(i_r33);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "span", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subItem_r32 = ctx.$implicit;
          var i_r33 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r32.get("filterTag").errors == null ? null : subItem_r32.get("filterTag").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r32.get("subid").errors == null ? null : subItem_r32.get("subid").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r32.get("limit").errors == null ? null : subItem_r32.get("limit").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r32.get("split").errors == null ? null : subItem_r32.get("split").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/General/Trash.svg");
        }
      }

      function NewTagComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Template");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function NewTagComponent_div_0_Template_mat_select_selectionChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r40.handleTemplate($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NewTagComponent_div_0_mat_option_7_Template, 2, 2, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewTagComponent_div_0_Template_form_ngSubmit_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r42.saveTag();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Create New Tag");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, NewTagComponent_div_0_mat_error_22_Template, 2, 0, "mat-error", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Advertiser");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-select", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, NewTagComponent_div_0_mat_option_29_Template, 2, 2, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Publisher");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-select", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, NewTagComponent_div_0_mat_option_35_Template, 2, 2, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Company");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-select", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewTagComponent_div_0_Template_mat_select_ngModelChange_40_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r43.companySelected = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, NewTagComponent_div_0_mat_option_41_Template, 2, 2, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Browsers Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-select", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function NewTagComponent_div_0_Template_mat_select_selectionChange_47_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r44.handleBrowserStatus($event);
          })("ngModelChange", function NewTagComponent_div_0_Template_mat_select_ngModelChange_47_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r45.selectBrowserStatus = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Allowed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Not Allowed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Browsers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-select", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function NewTagComponent_div_0_Template_mat_select_selectionChange_56_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r46.getBrowers($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Any");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Chrome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-option", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Firefox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Edge");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-option", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Internet Explorer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Opera");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Device Type Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-select", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function NewTagComponent_div_0_Template_mat_select_selectionChange_74_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r47.handleDeviceTypeStatus($event);
          })("ngModelChange", function NewTagComponent_div_0_Template_mat_select_ngModelChange_74_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r48.selectDeviceTypeStatus = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Allowed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Not Allowed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Device Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-select", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Any");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Desktop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-option", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Tablet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Browser Version Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-select", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function NewTagComponent_div_0_Template_mat_select_selectionChange_97_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

            var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r49.handleVersionStatus($event);
          })("ngModelChange", function NewTagComponent_div_0_Template_mat_select_ngModelChange_97_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r50.selectVersionStatus = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "mat-option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Allowed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "mat-option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Not Allowed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Browser Version");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "mat-select", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](107, NewTagComponent_div_0_mat_option_107_Template, 2, 2, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Country Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "mat-select", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function NewTagComponent_div_0_Template_mat_select_selectionChange_113_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r51.handleCountryStatus($event);
          })("ngModelChange", function NewTagComponent_div_0_Template_mat_select_ngModelChange_113_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r52.selectCountryStatus = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "mat-option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Allowed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "mat-option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Not Allowed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Country Allowed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "mat-select", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "mat-option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Any");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](125, NewTagComponent_div_0_mat_option_125_Template, 2, 2, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Ad Server URL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "mat-select", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](130, NewTagComponent_div_0_mat_option_130_Template, 2, 2, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Stat Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "mat-select", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](137, NewTagComponent_div_0_mat_option_137_Template, 2, 2, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Rotation Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "mat-select", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](143, NewTagComponent_div_0_mat_option_143_Template, 2, 2, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "h3", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Tag URLs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewTagComponent_div_0_Template_input_ngModelChange_152_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r53.url = $event;
          })("ngModelChange", function NewTagComponent_div_0_Template_input_ngModelChange_152_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r54.getUrlParams($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](153, NewTagComponent_div_0_mat_error_153_Template, 2, 0, "mat-error", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](154, 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](155, NewTagComponent_div_0_div_155_Template, 13, 2, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Inital URL: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "h3", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "SubIds");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewTagComponent_div_0_Template_button_click_168_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

            var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r55.addSubid($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " Add ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](171, NewTagComponent_div_0_div_171_Template, 30, 6, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "button", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewTagComponent_div_0_Template_button_click_177_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

            var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r56.saveTemplate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " Save as Template ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.templateData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.newTagFG);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 23, ctx_r0.newTagFG.value), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.newTagFG.get("name").errors == null ? null : ctx_r0.newTagFG.get("name").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.advertiserList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.publisherList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.companySelected)("disabled", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.companyList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.selectBrowserStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.selectDeviceTypeStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.selectVersionStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.browserVersions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.selectCountryStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.countries);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.adServerUrlList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.statTypes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.rotationTypes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.url);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.newTagFG.get("url").errors == null ? null : ctx_r0.newTagFG.get("url").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.params.controls);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.decodeURL(ctx_r0.initialURL));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.subids.controls);
        }
      }

      function NewTagComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " How did you get here ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Sorry you can't access the page you're looking for. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " There may be a misspelling in the URL entered,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "or the page you are looking for may no longer exist. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var NewTagComponent = /*#__PURE__*/function () {
        function NewTagComponent(tagManagementService, fb, _snackBarService, companyService, auth, userService, dialog, notification, changeDetectorRefs) {
          var _this7 = this;

          _classCallCheck(this, NewTagComponent);

          this.tagManagementService = tagManagementService;
          this.fb = fb;
          this._snackBarService = _snackBarService;
          this.companyService = companyService;
          this.auth = auth;
          this.userService = userService;
          this.dialog = dialog;
          this.notification = notification;
          this.changeDetectorRefs = changeDetectorRefs;
          this.companyList = [];
          this.adServerUrlList = [];
          this.advertiserList = [];
          this.templateList = [];
          this.publisherList = [];
          this.publishertempList = [];
          this.templateData = [];
          this.companySelected = "";
          this.versionList = [];
          this.hidden = false;
          this.initSubid = [{
            subid: "1",
            limit: "1000",
            split: "70",
            filterTag: ""
          }, {
            subid: "2",
            limit: "1000",
            split: "70",
            filterTag: ""
          }]; //get Company

          this.companySelected = this.getSelectedCompanyFromLocalStorage(); //access page part

          if (!this.companySelected) {
            this.hidden = true;
            this.notification.showError("Please select your Company!", "");
          } else {
            this.hidden = false;
          }

          var currentUserInfo = this.auth.currentUserValue;
          this.companyService.getUserCompanies(currentUserInfo.companies).subscribe(function (companyResult) {
            companyResult.map(function (company) {
              _this7.companyList.push({
                value: company._id,
                viewValue: company.name
              });

              if (company._id == _this7.companySelected) {
                company.adServerUrls.map(function (url) {
                  _this7.adServerUrlList.push({
                    value: url['adServerUrl'],
                    viewValue: url['adServerUrl']
                  });
                }); //advertiser GET

                company.reportingProviders.map(function (reporting) {
                  _this7.advertiserList.push({
                    value: reporting.reportingProvider,
                    viewValue: reporting.reportingProvider
                  });
                });
              }
            });
          });
        }

        _createClass(NewTagComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.url = 'https://us.search.yahoo.com/yhs/search?hspart=brandclick&hsimp=yhs-calm&p=flowers';
            this.initialURL = new URL('https://adserver.com/search');
            this.selectBrowserStatus = "true";
            this.selectDeviceTypeStatus = "true";
            this.selectVersionStatus = "true";
            this.selectCountryStatus = "true";
            this.newTagFG = this.fb.group({
              name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              publisher: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              advertiser: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              browserStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              browser: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              deviceTypeStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              deviceType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              versionStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              version: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              countryStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              adServerUrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              statType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              subids: this.fb.array([]),
              rotationType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              url: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              params: this.fb.array([])
            });
            this.statTypes = this.getStatTypes();
            this.rotationTypes = this.getRotationTypes();
            this.paramTypes = this.getParamTypes();
            this.countries = this.getCountries();
            this.getVersions();
            this.browserVersions = [];
            this.initSubid.map(function (item) {
              _this8.subids.push(_this8.fb.group(item));
            });
            this.getTemplate();
            this.getPublisherAll();
            this.changeDetectorRefs.detectChanges();
          }
        }, {
          key: "openDialog",
          value: function openDialog() {
            var _this9 = this;

            var dialogRef = this.dialog.open(_template_name_template_name_component__WEBPACK_IMPORTED_MODULE_1__["TemplateNameComponent"], {
              width: '250px',
              data: {
                name: this.templateName
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed');
              _this9.templateName = result;
            });
          } //Gets the Selected Company from Local Storage

        }, {
          key: "getSelectedCompanyFromLocalStorage",
          value: function getSelectedCompanyFromLocalStorage() {
            return this.userService.getSelectedCompanyFromLocalStorage();
          } //Detects when URL is pasted into the field
          //https://us.search.yahoo.com/yhs/search?hspart=brandclick&hsimp=yhs-calm&p=flowers

        }, {
          key: "getUrlParams",
          value: function getUrlParams(url) {
            //Resets the URL params on every change
            this.deleteValueOfFormControl('params');

            if (this.isValidURL(url)) {
              url = new URL(url);

              var _iterator7 = _createForOfIteratorHelper(url.searchParams.keys()),
                  _step7;

              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var key = _step7.value;
                  var value = url.searchParams.get(key);
                  this.addParamsToUrlForm(key, value);
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }
            } else {
              return;
            }
          }
        }, {
          key: "getTemplate",
          value: function getTemplate() {
            var _this10 = this;

            this.tagManagementService.getAllTemplates().subscribe(function (response) {
              _this10.templateList = response.filter(function (template) {
                return template.company[0]['_id'] == _this10.companySelected;
              });

              _this10.templateList.map(function (template) {
                _this10.templateData.push({
                  value: template._key,
                  viewValue: template.templateName
                });
              });
            });
          }
        }, {
          key: "getPublisherAll",
          value: function getPublisherAll() {
            var _this11 = this;

            this.userService.getPublisherAll().subscribe(function (data) {
              console.log(data);

              if (_this11.companySelected) {
                _this11.publishertempList = data.filter(function (userData) {
                  return userData.companies.includes(_this11.companySelected);
                });
              } else {
                _this11.publishertempList = data;
              }

              _this11.publishertempList.map(function (publisher) {
                _this11.publisherList.push({
                  value: publisher._key,
                  viewValue: publisher.fullname
                });
              });
            });
          } //Gets the value of any form Array
          //Returns a form array

        }, {
          key: "newSubids",
          value: function newSubids() {
            return this.fb.group({
              subid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              limit: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              split: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              filterTag: ['']
            });
          }
        }, {
          key: "addSubid",
          value: function addSubid(event) {
            this.subids.push(this.newSubids());
          }
        }, {
          key: "removeSubid",
          value: function removeSubid(i) {
            this.subids.removeAt(i);
          } //Deletes value of any given form control

        }, {
          key: "deleteValueOfFormControl",
          value: function deleteValueOfFormControl(controlName) {
            this.params.clear();
          } //Updates the original parameters that will be received and sent on the first server request
          //Example: domain.com/search?subid={{dynamic}}&q={{dynamic}}&search=[bing]

        }, {
          key: "updateInitialParams",
          value: function updateInitialParams(param, index) {
            console.log('Updating Initial Params');
            console.log(param, index);

            if (param.value === 'static') {
              console.log('static!');
              this.params.controls[index].get('initialParam').setValue(this.params.controls[index].get('value').value);
              this.createInitialURL();
            } else {// this.params.controls[index]
              //   .get('initialParam')
              //   .setValue(this.params.controls[index].get('key').value);
            }
          } //Checks to see if initialParam mat input field has been touched and updates initial URL

        }, {
          key: "updateInitialParamURL",
          value: function updateInitialParamURL(value, index) {
            if (this.params.controls[index].get('paramType').value === 'dynamic') {
              this.createInitialURL();
            }
          } //Builds the initial URL from the paramaters

        }, {
          key: "createInitialURL",
          value: function createInitialURL() {
            var _this12 = this;

            console.log('Updating URL');
            this.initialURL = new URL('https://adserver.com/search');
            this.params.controls.forEach(function (element, index) {
              if (element.value.paramType === 'dynamic') {
                _this12.initialURL.searchParams.append(element.value.key, '{{' + element.value.initialParam + '}}');
              } else if (element.value.paramType === 'static') {// this.initialURL.searchParams.append(
                //   element.value.key,
                //   element.value.value
                // );
              } else {}
            });
          } //Decodes the URL for the Angular Template

        }, {
          key: "decodeURL",
          value: function decodeURL(url) {
            return decodeURI(url);
          } //Adds key/valuew to FormArray 'Params'

        }, {
          key: "addParamsToUrlForm",
          value: function addParamsToUrlForm(key, value) {
            var paramForm = this.fb.group({
              key: [key, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              value: [value, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              paramType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              initialParam: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
            this.params.push(paramForm);
          } //Checks to see if URL entered is valid
          //If URL is valid return true
          //Else if URL is invalid return false and throw mat-error

        }, {
          key: "isValidURL",
          value: function isValidURL(url) {
            try {
              var finalUrl = new URL(url);
              return true;
            } catch (err) {
              return false;
            }
          } //Saves the tag onto the database

        }, {
          key: "saveTag",
          value: function saveTag() {
            var _this13 = this;

            //this.newTagFG.markAllAsTouched();
            if (this.newTagFG.valid) {
              this.tagManagementService.addTag(this.newTagFG.value).subscribe(function (res) {
                _this13._snackBarService.info('Added a new tag');

                _this13.newTagFG.reset();

                _this13.formGroupDirective.resetForm();

                _this13.url = 'https://us.search.yahoo.com/yhs/search?hspart=brandclick&hsimp=yhs-calm&p=flowers';
                _this13.initialURL = new URL('https://adserver.com/search');

                _this13.getUrlParams(_this13.url);
              }, function (err) {
                _this13._snackBarService.info(err.error);
              });
            }
          }
        }, {
          key: "getBrowers",
          value: function getBrowers(event) {
            var _this14 = this;

            if (event.value.length > 0) {
              var e;

              (function () {
                var vTemp = [];

                if (event.value.includes('Any')) {
                  _this14.browserVersions = _this14.versionList;
                } else {
                  var _iterator8 = _createForOfIteratorHelper(event.value),
                      _step8;

                  try {
                    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                      e = _step8.value;

                      var filterdata = _this14.versionList.filter(function (version) {
                        return version.value.includes(e);
                      });

                      filterdata.map(function (filter) {
                        vTemp.push(filter);
                      });
                    }
                  } catch (err) {
                    _iterator8.e(err);
                  } finally {
                    _iterator8.f();
                  }

                  _this14.browserVersions = vTemp;
                }
              })();
            } else {
              this.browserVersions = [];
            }
          } //Saves the tag as a template

        }, {
          key: "saveTemplate",
          value: function saveTemplate() {
            var _this15 = this;

            this.newTagFG.markAllAsTouched();

            if (this.newTagFG.valid) {
              var dialogRef = this.dialog.open(_template_name_template_name_component__WEBPACK_IMPORTED_MODULE_1__["TemplateNameComponent"], {
                width: '300px',
                data: {
                  templateName: this.templateName
                }
              });
              dialogRef.afterClosed().subscribe(function (result) {
                console.log('dialog closed!');

                if (result && result.templateName) {
                  _this15.templateName = result.templateName;

                  _this15.newTagFG.addControl('templateName', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));

                  _this15.newTagFG.patchValue({
                    templateName: _this15.templateName
                  });

                  _this15.tagManagementService.addTemplate(_this15.newTagFG.value).subscribe(function (res) {
                    _this15.templateData.push({
                      value: res._key,
                      viewValue: res.templateName
                    });

                    _this15.newTagFG.removeControl('templateName');

                    _this15._snackBarService.info('Added a new template');

                    _this15.newTagFG.reset();

                    _this15.formGroupDirective.resetForm();

                    _this15.url = 'https://us.search.yahoo.com/yhs/search?hspart=brandclick&hsimp=yhs-calm&p=flowers';
                    _this15.initialURL = new URL('https://adserver.com/search');

                    _this15.getUrlParams(_this15.url);
                  }, function (err) {
                    _this15.newTagFG.markAllAsTouched();

                    _this15._snackBarService.info(err.error);
                  });
                }
              });
            } else {
              this._snackBarService.info('Please fill data!');
            }
          }
        }, {
          key: "handleTemplate",
          value: function handleTemplate(event) {
            var _this16 = this;

            if (event) {
              this.tagManagementService.getOneTemplate(event).subscribe(function (response) {
                var browserVal = [];
                var deviceTypeVal = [];
                var versionVal = [];
                var countryVal = [];
                _this16.url = response['url'];
                _this16.subids.controls = [];
                _this16.params.controls = [];
                _this16.initialURL = new URL('https://adserver.com/search');

                var _iterator9 = _createForOfIteratorHelper(response['browser'].toString().split(",")),
                    _step9;

                try {
                  for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                    var bval = _step9.value;
                    browserVal.push(bval);
                  }
                } catch (err) {
                  _iterator9.e(err);
                } finally {
                  _iterator9.f();
                }

                _this16.browserVersions = _this16.versionList;

                var _iterator10 = _createForOfIteratorHelper(response['deviceType'].toString().split(",")),
                    _step10;

                try {
                  for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                    var dval = _step10.value;
                    deviceTypeVal.push(dval);
                  }
                } catch (err) {
                  _iterator10.e(err);
                } finally {
                  _iterator10.f();
                }

                var _iterator11 = _createForOfIteratorHelper(response['version'].toString().split(",")),
                    _step11;

                try {
                  for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                    var vval = _step11.value;
                    versionVal.push(vval);
                  }
                } catch (err) {
                  _iterator11.e(err);
                } finally {
                  _iterator11.f();
                }

                var _iterator12 = _createForOfIteratorHelper(response['country'].toString().split(",")),
                    _step12;

                try {
                  for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                    var cval = _step12.value;
                    countryVal.push(cval);
                  }
                } catch (err) {
                  _iterator12.e(err);
                } finally {
                  _iterator12.f();
                }

                response['subids'].map(function (item) {
                  _this16.subids.push(_this16.fb.group(item));
                });
                response['params'].map(function (param) {
                  _this16.params.push(_this16.fb.group(param));
                });

                _this16.newTagFG.reset();

                _this16.formGroupDirective.resetForm();

                _this16.newTagFG.setValue({
                  name: response['name'],
                  company: response['company'],
                  advertiser: response['advertiser'],
                  publisher: response['publisher'],
                  browserStatus: response['browserStatus'],
                  browser: browserVal,
                  deviceTypeStatus: response['deviceTypeStatus'],
                  deviceType: deviceTypeVal,
                  countryStatus: response['countryStatus'],
                  country: countryVal,
                  versionStatus: response['versionStatus'],
                  version: versionVal,
                  adServerUrl: response['adServerUrl'],
                  statType: response['statType'],
                  subids: response['subids'],
                  rotationType: response['rotationType'],
                  url: response['url'],
                  params: response['params']
                });
              });
            }
          } //Gets different ways a tag can display stats

        }, {
          key: "getStatTypes",
          value: function getStatTypes() {
            return [{
              value: 'rpm',
              viewValue: 'RPM Based'
            }, {
              value: 'subid',
              viewValue: 'Sub-ID Based'
            }];
          }
        }, {
          key: "handleBrowserStatus",
          value: function handleBrowserStatus(event) {}
        }, {
          key: "handleDeviceTypeStatus",
          value: function handleDeviceTypeStatus(event) {}
        }, {
          key: "handleVersionStatus",
          value: function handleVersionStatus(event) {}
        }, {
          key: "handleCountryStatus",
          value: function handleCountryStatus(event) {} //Gets Country List

        }, {
          key: "getCountries",
          value: function getCountries() {
            return [{
              value: 'Afghanistan',
              viewValue: 'Afghanistan'
            }, {
              value: 'Åland Islands',
              viewValue: 'Åland Islands'
            }, {
              value: 'Albania',
              viewValue: 'Albania'
            }, {
              value: 'Algeria',
              viewValue: 'Algeria'
            }, {
              value: 'American Samoa',
              viewValue: 'American Samoa'
            }, {
              value: 'Andorra',
              viewValue: 'Andorra'
            }, {
              value: 'Angola',
              viewValue: 'Angola'
            }, {
              value: 'Anguilla',
              viewValue: 'Anguilla'
            }, {
              value: 'Antarctica',
              viewValue: 'Antarctica'
            }, {
              value: 'Antigua and Barbuda',
              viewValue: 'Antigua and Barbuda'
            }, {
              value: 'Argentina',
              viewValue: 'Argentina'
            }, {
              value: 'Armenia',
              viewValue: 'Armenia'
            }, {
              value: 'Aruba',
              viewValue: 'Aruba'
            }, {
              value: 'Australia',
              viewValue: 'Australia'
            }, {
              value: 'Austria',
              viewValue: 'Austria'
            }, {
              value: 'Azerbaijan',
              viewValue: 'Azerbaijan'
            }, {
              value: 'Bahamas',
              viewValue: 'Bahamas'
            }, {
              value: 'Bahrain',
              viewValue: 'Bahrain'
            }, {
              value: 'Bangladesh',
              viewValue: 'Bangladesh'
            }, {
              value: 'Barbados',
              viewValue: 'Barbados'
            }, {
              value: 'Belarus',
              viewValue: 'Belarus'
            }, {
              value: 'Belgium',
              viewValue: 'Belgium'
            }, {
              value: 'Belize',
              viewValue: 'Belize'
            }, {
              value: 'Benin',
              viewValue: 'Benin'
            }, {
              value: 'Bermuda',
              viewValue: 'Bermuda'
            }, {
              value: 'Bhutan',
              viewValue: 'Bhutan'
            }, {
              value: 'Bolivia',
              viewValue: 'Bolivia'
            }, {
              value: 'Bosnia and Herzegovina',
              viewValue: 'Bosnia and Herzegovina'
            }, {
              value: 'Botswana',
              viewValue: 'Botswana'
            }, {
              value: 'Bouvet Island',
              viewValue: 'Bouvet Island'
            }, {
              value: 'Brazil',
              viewValue: 'Brazil'
            }, {
              value: 'British Indian Ocean Territory',
              viewValue: 'British Indian Ocean Territory'
            }, {
              value: 'Brunei Darussalam',
              viewValue: 'Brunei Darussala'
            }, {
              value: 'Bulgaria',
              viewValue: 'Bulgaria'
            }, {
              value: 'Burkina Faso',
              viewValue: 'Burkina Faso'
            }, {
              value: 'Burundi',
              viewValue: 'Burundi'
            }, {
              value: 'Cambodia',
              viewValue: 'Cambodia'
            }, {
              value: 'Cameroon',
              viewValue: 'Cameroon'
            }, {
              value: 'Canada',
              viewValue: 'Canada'
            }, {
              value: 'Cape Verde',
              viewValue: 'Cape Verde'
            }, {
              value: 'Cayman Islands',
              viewValue: 'Cayman Islands'
            }, {
              value: 'Central African Republic',
              viewValue: 'Central African Republic'
            }, {
              value: 'Chad',
              viewValue: 'Chad'
            }, {
              value: 'Chile',
              viewValue: 'Chile'
            }, {
              value: 'China',
              viewValue: 'China'
            }, {
              value: 'Christmas Island',
              viewValue: 'Christmas Island'
            }, {
              value: 'Cocos (Keeling) Islands',
              viewValue: 'Cocos (Keeling) Islands'
            }, {
              value: 'Colombia',
              viewValue: 'Colombia'
            }, {
              value: 'Comoros',
              viewValue: 'Comoros'
            }, {
              value: 'Congo',
              viewValue: 'Congo'
            }, {
              value: 'Congo, The Democratic Republic of the',
              viewValue: 'Congo, The Democratic Republic of the'
            }, {
              value: 'Cook Islands',
              viewValue: 'Cook Islands'
            }, {
              value: 'Costa Rica',
              viewValue: 'Costa Rica'
            }, {
              value: 'Cote D\'Ivoire',
              viewValue: 'Cote D\'Ivoire'
            }, {
              value: 'Croatia',
              viewValue: 'Croatia'
            }, {
              value: 'Cuba',
              viewValue: 'Cuba'
            }, {
              value: 'Cyprus',
              viewValue: 'Cyprus'
            }, {
              value: 'Czech Republic',
              viewValue: 'Czech Republic'
            }, {
              value: 'Denmark',
              viewValue: 'Denmark'
            }, {
              value: 'Djibouti',
              viewValue: 'Djibouti'
            }, {
              value: 'Dominica',
              viewValue: 'Dominica'
            }, {
              value: 'Dominican Republic',
              viewValue: 'Dominican Republic'
            }, {
              value: 'Ecuador',
              viewValue: 'Ecuador'
            }, {
              value: 'Egypt',
              viewValue: 'Egypt'
            }, {
              value: 'El Salvador',
              viewValue: 'El Salvador'
            }, {
              value: 'Equatorial Guinea',
              viewValue: 'Equatorial Guinea'
            }, {
              value: 'Eritrea',
              viewValue: 'Eritrea'
            }, {
              value: 'Estonia',
              viewValue: 'Estonia'
            }, {
              value: 'Ethiopia',
              viewValue: 'Ethiopia'
            }, {
              value: 'Falkland Islands (Malvinas)',
              viewValue: 'Falkland Islands (Malvinas)'
            }, {
              value: 'Faroe Islands',
              viewValue: 'Faroe Islands'
            }, {
              value: 'Fiji',
              viewValue: 'Fiji'
            }, {
              value: 'Finland',
              viewValue: 'Finland'
            }, {
              value: 'France',
              viewValue: 'France'
            }, {
              value: 'French Guiana',
              viewValue: 'French Guiana'
            }, {
              value: 'French Polynesia',
              viewValue: 'French Polynesia'
            }, {
              value: 'French Southern Territories',
              viewValue: 'French Southern Territories'
            }, {
              value: 'Gabon',
              viewValue: 'Gabon'
            }, {
              value: 'Gambia',
              viewValue: 'Gambia'
            }, {
              value: 'Georgia',
              viewValue: 'Georgia'
            }, {
              value: 'Germany',
              viewValue: 'Germany'
            }, {
              value: 'Ghana',
              viewValue: 'Ghana'
            }, {
              value: 'Gibraltar',
              viewValue: 'Gibraltar'
            }, {
              value: 'Greece',
              viewValue: 'Greece'
            }, {
              value: 'Greenland',
              viewValue: 'Greenland'
            }, {
              value: 'Grenada',
              viewValue: 'Grenada'
            }, {
              value: 'Guadeloupe',
              viewValue: 'Guadeloupe'
            }, {
              value: 'Guam',
              viewValue: 'Guam'
            }, {
              value: 'Guatemala',
              viewValue: 'Guatemala'
            }, {
              value: 'Guernsey',
              viewValue: 'Guernsey'
            }, {
              value: 'Guinea',
              viewValue: 'Guinea'
            }, {
              value: 'Guinea-Bissau',
              viewValue: 'Guinea-Bissau'
            }, {
              value: 'Guyana',
              viewValue: 'Guyana'
            }, {
              value: 'Haiti',
              viewValue: 'Haiti'
            }, {
              value: 'Heard Island and Mcdonald Islands',
              viewValue: 'Heard Island and Mcdonald Islands'
            }, {
              value: 'Holy See (Vatican City State)',
              viewValue: 'Holy See (Vatican City State)'
            }, {
              value: 'Honduras',
              viewValue: 'Honduras'
            }, {
              value: 'Hong Kong',
              viewValue: 'Hong Kong'
            }, {
              value: 'Hungary',
              viewValue: 'Hungary'
            }, {
              value: 'Iceland',
              viewValue: 'Iceland'
            }, {
              value: 'India',
              viewValue: 'India'
            }, {
              value: 'Indonesia',
              viewValue: 'Indonesia'
            }, {
              value: 'Iran, Islamic Republic Of',
              viewValue: 'Iran, Islamic Republic Of'
            }, {
              value: 'Iraq',
              viewValue: 'Iraq'
            }, {
              value: 'Ireland',
              viewValue: 'Ireland'
            }, {
              value: 'Isle of Man',
              viewValue: 'Isle of Man'
            }, {
              value: 'Israel',
              viewValue: 'Israel'
            }, {
              value: 'Italy',
              viewValue: 'Italy'
            }, {
              value: 'Jamaica',
              viewValue: 'Jamaica'
            }, {
              value: 'Japan',
              viewValue: 'Japan'
            }, {
              value: 'Jersey',
              viewValue: 'Jersey'
            }, {
              value: 'Jordan',
              viewValue: 'Jordan'
            }, {
              value: 'Kazakhstan',
              viewValue: 'Kazakhstan'
            }, {
              value: 'Kenya',
              viewValue: 'Kenya'
            }, {
              value: 'Kiribati',
              viewValue: 'Kiribati'
            }, {
              value: 'Korea, Democratic People\'S Republic of',
              viewValue: 'Korea, Democratic People\'S Republic o'
            }, {
              value: 'Korea, Republic of',
              viewValue: 'Korea, Republic of'
            }, {
              value: 'Kuwait',
              viewValue: 'Kuwait'
            }, {
              value: 'Kyrgyzstan',
              viewValue: 'Kyrgyzstan'
            }, {
              value: 'Lao People\'S Democratic Republic',
              viewValue: 'Lao People\'S Democratic Republic'
            }, {
              value: 'Latvia',
              viewValue: 'Latvia'
            }, {
              value: 'Lebanon',
              viewValue: 'Lebanon'
            }, {
              value: 'Lesotho',
              viewValue: 'Lesotho'
            }, {
              value: 'Liberia',
              viewValue: 'Liberia'
            }, {
              value: 'Libyan Arab Jamahiriya',
              viewValue: 'Libyan Arab Jamahiriya'
            }, {
              value: 'Liechtenstein',
              viewValue: 'Liechtenstein'
            }, {
              value: 'Lithuania',
              viewValue: 'Lithuania'
            }, {
              value: 'Luxembourg',
              viewValue: 'Luxembourg'
            }, {
              value: 'Macao',
              viewValue: 'Macao'
            }, {
              value: 'Macedonia, The Former Yugoslav Republic of',
              viewValue: 'Macedonia, The Former Yugoslav Republic of'
            }, {
              value: 'Madagascar',
              viewValue: 'Madagascar'
            }, {
              value: 'Malawi',
              viewValue: 'Malawi'
            }, {
              value: 'Malaysia',
              viewValue: 'Malaysia'
            }, {
              value: 'Maldives',
              viewValue: 'Maldives'
            }, {
              value: 'Mali',
              viewValue: 'Mali'
            }, {
              value: 'Malta',
              viewValue: 'Malta'
            }, {
              value: 'Marshall Islands',
              viewValue: 'Marshall Islands'
            }, {
              value: 'Martinique',
              viewValue: 'Martinique'
            }, {
              value: 'Mauritania',
              viewValue: 'Mauritania'
            }, {
              value: 'Mauritius',
              viewValue: 'Mauritius'
            }, {
              value: 'Mayotte',
              viewValue: 'Mayotte'
            }, {
              value: 'Mexico',
              viewValue: 'Mexico'
            }, {
              value: 'Micronesia, Federated States of',
              viewValue: 'Micronesia, Federated States of'
            }, {
              value: 'Moldova, Republic of',
              viewValue: 'Moldova, Republic of'
            }, {
              value: 'Monaco',
              viewValue: 'Monaco'
            }, {
              value: 'Mongolia',
              viewValue: 'Mongolia'
            }, {
              value: 'Montserrat',
              viewValue: 'Montserrat'
            }, {
              value: 'Morocco',
              viewValue: 'Morocco'
            }, {
              value: 'Mozambique',
              viewValue: 'Mozambique'
            }, {
              value: 'Myanmar',
              viewValue: 'Myanmar'
            }, {
              value: 'Namibia',
              viewValue: 'Namibia'
            }, {
              value: 'Nauru',
              viewValue: 'Nauru'
            }, {
              value: 'Nepal',
              viewValue: 'Nepal'
            }, {
              value: 'Netherlands',
              viewValue: 'Netherlands'
            }, {
              value: 'Netherlands Antilles',
              viewValue: 'Netherlands Antilles'
            }, {
              value: 'New Caledonia',
              viewValue: 'New Caledonia'
            }, {
              value: 'New Zealand',
              viewValue: 'New Zealand'
            }, {
              value: 'Nicaragua',
              viewValue: 'Nicaragua'
            }, {
              value: 'Niger',
              viewValue: 'Niger'
            }, {
              value: 'Nigeria',
              viewValue: 'Nigeria'
            }, {
              value: 'Niue',
              viewValue: 'Niue'
            }, {
              value: 'Norfolk Island',
              viewValue: 'Norfolk Island'
            }, {
              value: 'Northern Mariana Islands',
              viewValue: 'Northern Mariana Islands'
            }, {
              value: 'Norway',
              viewValue: 'Norway'
            }, {
              value: 'Oman',
              viewValue: 'Oman'
            }, {
              value: 'Pakistan',
              viewValue: 'Pakistan'
            }, {
              value: 'Palau',
              viewValue: 'Palau'
            }, {
              value: 'Palestinian Territory, Occupied',
              viewValue: 'Palestinian Territory, Occupied'
            }, {
              value: 'Panama',
              viewValue: 'Panama'
            }, {
              value: 'Papua New Guinea',
              viewValue: 'Papua New Guinea'
            }, {
              value: 'Paraguay',
              viewValue: 'Paraguay'
            }, {
              value: 'Peru',
              viewValue: 'Peru'
            }, {
              value: 'Philippines',
              viewValue: 'Philippines'
            }, {
              value: 'Pitcairn',
              viewValue: 'Pitcairn'
            }, {
              value: 'Poland',
              viewValue: 'Poland'
            }, {
              value: 'Portugal',
              viewValue: 'Portugal'
            }, {
              value: 'Puerto Rico',
              viewValue: 'Puerto Rico'
            }, {
              value: 'Qatar',
              viewValue: 'Qatar'
            }, {
              value: 'Reunion',
              viewValue: 'Reunion'
            }, {
              value: 'Romania',
              viewValue: 'Romania'
            }, {
              value: 'Russian Federation',
              viewValue: 'Russian Federatio'
            }, {
              value: 'RWANDA',
              viewValue: 'RWANDA'
            }, {
              value: 'Saint Helena',
              viewValue: 'Saint Helena'
            }, {
              value: 'Saint Kitts and Nevis',
              viewValue: 'Saint Kitts and Nevis'
            }, {
              value: 'Saint Lucia',
              viewValue: 'Saint Lucia'
            }, {
              value: 'Saint Pierre and Miquelon',
              viewValue: 'Saint Pierre and Miquelon'
            }, {
              value: 'Saint Vincent and the Grenadines',
              viewValue: 'Saint Vincent and the Grenadines'
            }, {
              value: 'Samoa',
              viewValue: 'Samoa'
            }, {
              value: 'San Marino',
              viewValue: 'San Marino'
            }, {
              value: 'Sao Tome and Principe',
              viewValue: 'Sao Tome and Principe'
            }, {
              value: 'Saudi Arabia',
              viewValue: 'Saudi Arabia'
            }, {
              value: 'Senegal',
              viewValue: 'Senegal'
            }, {
              value: 'Serbia and Montenegro',
              viewValue: 'Serbia and Montenegro'
            }, {
              value: 'Seychelles',
              viewValue: 'Seychelles'
            }, {
              value: 'Sierra Leone',
              viewValue: 'Sierra Leone'
            }, {
              value: 'Singapore',
              viewValue: 'Singapore'
            }, {
              value: 'Slovakia',
              viewValue: 'Slovakia'
            }, {
              value: 'Slovenia',
              viewValue: 'Slovenia'
            }, {
              value: 'Solomon Islands',
              viewValue: 'Solomon Islands'
            }, {
              value: 'Somalia',
              viewValue: 'Somalia'
            }, {
              value: 'South Africa',
              viewValue: 'South Africa'
            }, {
              value: 'South Georgia and the South Sandwich Islands',
              viewValue: 'South Georgia and the South Sandwich Isla'
            }, {
              value: 'Spain',
              viewValue: 'Spain'
            }, {
              value: 'Sri Lanka',
              viewValue: 'Sri Lanka'
            }, {
              value: 'Sudan',
              viewValue: 'Sudan'
            }, {
              value: 'Surivalue',
              viewValue: 'Surivalue'
            }, {
              value: 'Svalbard and Jan Mayen',
              viewValue: 'Svalbard and Jan Mayen'
            }, {
              value: 'Swaziland',
              viewValue: 'Swaziland'
            }, {
              value: 'Sweden',
              viewValue: 'Sweden'
            }, {
              value: 'Switzerland',
              viewValue: 'Switzerland'
            }, {
              value: 'Syrian Arab Republic',
              viewValue: 'Syrian Arab Republic'
            }, {
              value: 'Taiwan, Province of China',
              viewValue: 'Taiwan, Province of China'
            }, {
              value: 'Tajikistan',
              viewValue: 'Tajikistan'
            }, {
              value: 'Tanzania, United Republic of',
              viewValue: 'Tanzania, United Republic of'
            }, {
              value: 'Thailand',
              viewValue: 'Thailand'
            }, {
              value: 'Timor-Leste',
              viewValue: 'Timor-Leste'
            }, {
              value: 'Togo',
              viewValue: 'Togo'
            }, {
              value: 'Tokelau',
              viewValue: 'Tokelau'
            }, {
              value: 'Tonga',
              viewValue: 'Tonga'
            }, {
              value: 'TrinviewValuead and Tobago',
              viewValue: 'TrinviewValuead and Tobago'
            }, {
              value: 'Tunisia',
              viewValue: 'Tunisia'
            }, {
              value: 'Turkey',
              viewValue: 'Turkey'
            }, {
              value: 'Turkmenistan',
              viewValue: 'Turkmenistan'
            }, {
              value: 'Turks and Caicos Islands',
              viewValue: 'Turks and Caicos Islands'
            }, {
              value: 'Tuvalu',
              viewValue: 'Tuvalu'
            }, {
              value: 'Uganda',
              viewValue: 'Uganda'
            }, {
              value: 'Ukraine',
              viewValue: 'Ukraine'
            }, {
              value: 'United Arab Emirates',
              viewValue: 'United Arab Emirates'
            }, {
              value: 'United Kingdom',
              viewValue: 'United Kingdom'
            }, {
              value: 'United States',
              viewValue: 'United States'
            }, {
              value: 'United States Minor Outlying Islands',
              viewValue: 'United States Minor Outlying Islands'
            }, {
              value: 'Uruguay',
              viewValue: 'Uruguay'
            }, {
              value: 'Uzbekistan',
              viewValue: 'Uzbekistan'
            }, {
              value: 'Vanuatu',
              viewValue: 'Vanuatu'
            }, {
              value: 'Venezuela',
              viewValue: 'Venezuela'
            }, {
              value: 'Viet Nam',
              viewValue: 'Viet Nam'
            }, {
              value: 'Virgin Islands, British',
              viewValue: 'Virgin Islands, British'
            }, {
              value: 'Virgin Islands, U.S.',
              viewValue: 'Virgin Islands, U.S.'
            }, {
              value: 'Wallis and Futuna',
              viewValue: 'Wallis and Futuna'
            }, {
              value: 'Western Sahara',
              viewValue: 'Western Sahara'
            }, {
              value: 'Yemen',
              viewValue: 'Yemen'
            }, {
              value: 'Zambia',
              viewValue: 'Zambia'
            }, {
              value: 'Zimbabwe',
              viewValue: 'Zimbabwe'
            }];
          } //Gets Browser Versions

        }, {
          key: "getVersions",
          value: function getVersions() {
            var _this17 = this;

            this.edgeVersions = [{
              value: "Edge - 102.0.1245.7",
              viewValue: "Edge - 102.0.1245.7"
            }, {
              value: "Edge - 101.0.1210.10",
              viewValue: "Edge - 101.0.1210.10"
            }, {
              value: "Edge - 100.0.1185.10",
              viewValue: "Edge - 100.0.1185.10"
            }, {
              value: "Edge - 99.0.1150.11",
              viewValue: "Edge - 99.0.1150.11"
            }, {
              value: "Edge - 98.0.1108.23",
              viewValue: "Edge - 98.0.1108.23"
            }, {
              value: "Edge - 97.0.1072.21",
              viewValue: "Edge - 97.0.1072.21"
            }, {
              value: "Edge - 96.0.1054.8",
              viewValue: "Edge - 96.0.1054.8"
            }, {
              value: "Edge - 95.0.1020.9",
              viewValue: "Edge - 95.0.1020.9"
            }, {
              value: "Edge - 94.0.992.9",
              viewValue: "Edge - 94.0.992.9"
            }, {
              value: "Edge - 93.0.961.11",
              viewValue: "Edge - 93.0.961.11"
            }, {
              value: "Edge - 92.0.902.9",
              viewValue: "Edge - 92.0.902.9"
            }, {
              value: "Edge - 91.0.864.11",
              viewValue: "Edge - 91.0.864.11"
            }, {
              value: "Edge - 90.0.818.8",
              viewValue: "Edge - 90.0.818.8"
            }, {
              value: "Edge - 89.0.774.18",
              viewValue: "Edge - 89.0.774.18"
            }, {
              value: "Edge - 88.0.705.18",
              viewValue: "Edge - 88.0.705.18"
            }];
            this.operaVersions = [{
              value: "Opera - 12.15",
              viewValue: "Opera - 12.15"
            }, {
              value: "Opera - 12.14",
              viewValue: "Opera - 12.14"
            }, {
              value: "Opera - 12.13",
              viewValue: "Opera - 12.13"
            }, {
              value: "Opera - 12.12",
              viewValue: "Opera - 12.12"
            }, {
              value: "Opera - 12.11",
              viewValue: "Opera - 12.11"
            }, {
              value: "Opera - 12.10",
              viewValue: "Opera - 12.10"
            }, {
              value: "Opera - 12.10b",
              viewValue: "Opera - 12.10b"
            }, {
              value: "Opera - 12.02",
              viewValue: "Opera - 12.02"
            }, {
              value: "Opera - 12.01",
              viewValue: "Opera - 12.01"
            }, {
              value: "Opera - 12.00",
              viewValue: "Opera - 12.00"
            }, {
              value: "Opera - 12.00b",
              viewValue: "Opera - 12.00b"
            }, {
              value: "Opera - 12.00a",
              viewValue: "Opera - 12.00a"
            }, {
              value: "Opera - 11.64",
              viewValue: "Opera - 11.64"
            }, {
              value: "Opera - 11.62",
              viewValue: "Opera - 11.62"
            }, {
              value: "Opera - 11.61",
              viewValue: "Opera - 11.61"
            }, {
              value: "Opera - 11.60",
              viewValue: "Opera - 11.60"
            }, {
              value: "Opera - 11.60b",
              viewValue: "Opera - 11.60b"
            }, {
              value: "Opera - 11.52",
              viewValue: "Opera - 11.52"
            }, {
              value: "Opera - 11.51",
              viewValue: "Opera - 11.51"
            }, {
              value: "Opera - 11.50",
              viewValue: "Opera - 11.50"
            }];
            this.internetExplorers = [{
              value: "Internet Explorer - 11.0.220",
              viewValue: "Internet Explorer - 11.0.220"
            }, {
              value: "Internet Explorer - 9.0.195",
              viewValue: "Internet Explorer - 9.0.195"
            }, {
              value: "Internet Explorer - 8.0.6001.18702",
              viewValue: "Internet Explorer - 8.0.6001.18702"
            }, {
              value: "Internet Explorer - 6.0 SP1",
              viewValue: "Internet Explorer - 6.0 SP1"
            }, {
              value: "Internet Explorer - 5.5 SP2",
              viewValue: "Internet Explorer - 5.5 SP2"
            }, {
              value: "Internet Explorer - 5.01 SP2",
              viewValue: "Internet Explorer - 5.01 SP2"
            }, {
              value: "Internet Explorer - 5.2.3",
              viewValue: "Internet Explorer - 5.2.3"
            }, {
              value: "Internet Explorer - 5.1.7",
              viewValue: "Internet Explorer - 5.1.7"
            }, {
              value: "Internet Explorer - 4.0.1",
              viewValue: "Internet Explorer - 4.0.1"
            }, {
              value: "Internet Explorer - 2.0.1",
              viewValue: "Internet Explorer - 2.0.1"
            }];
            this.versionList.push({
              value: "Any",
              viewValue: "Any"
            }); //Chrome Version List Get

            this.tagManagementService.getChromeBrowserVersion().subscribe(function (res) {
              var versionsChromeData = res.slice(0, 30);
              versionsChromeData.map(function (version) {
                _this17.versionList.push({
                  value: "Chrome - " + version.version,
                  viewValue: "Chrome - " + version.version
                });
              });
            });
            this.edgeVersions.map(function (edge) {
              _this17.versionList.push(edge);
            }); //FireFox Version List Get

            this.tagManagementService.getFirefoxBrowserVersion().subscribe(function (res) {
              var firefoxList = [];

              for (var i in res) {
                firefoxList.push({
                  value: "Firefox - " + i,
                  viewValue: "Firefox - " + i
                });
              }

              firefoxList.slice(firefoxList['length'] - 30, firefoxList['length']).map(function (version) {
                _this17.versionList.push({
                  value: version['value'],
                  viewValue: version['viewValue']
                });
              });
            });
            this.internetExplorers.map(function (internet) {
              _this17.versionList.push(internet);
            });
            this.operaVersions.map(function (opera) {
              _this17.versionList.push(opera);
            });
            return this.versionList;
          } //Gets different ways a tag can display stats

        }, {
          key: "getRotationTypes",
          value: function getRotationTypes() {
            return [{
              value: 'roundRobin',
              viewValue: 'Round Robin'
            }, {
              value: 'percentage',
              viewValue: 'Percentage'
            }];
          }
        }, {
          key: "getParamTypes",
          value: function getParamTypes() {
            return [{
              value: 'static',
              viewValue: 'Static'
            }, {
              value: 'dynamic',
              viewValue: 'Dynamic'
            }];
          }
        }, {
          key: "params",
          get: function get() {
            return this.newTagFG.controls['params'];
          }
        }, {
          key: "subids",
          get: function get() {
            return this.newTagFG.controls['subids'];
          }
        }]);

        return NewTagComponent;
      }();

      NewTagComponent.ɵfac = function NewTagComponent_Factory(t) {
        return new (t || NewTagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tag_management_service__WEBPACK_IMPORTED_MODULE_3__["TagManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_companies_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      NewTagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NewTagComponent,
        selectors: [["app-new-tag"]],
        viewQuery: function NewTagComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formGroupDirective = _t.first);
          }
        },
        decls: 2,
        vars: 2,
        consts: [["class", "container", 4, "ngIf"], ["class", "error error-3 d-flex flex-row-fluid bgi-size-cover bgi-position-center", "style", "background-image: url('./assets/media/error/bg3.jpg'); height: 100%;zoom: 1;\n  display: block;\n  min-height: 80vh;\n  font-size: 14px;\n  line-height: 1.4;\n  color: #0e1724;", 4, "ngIf"], [1, "container"], [1, "row"], [1, "col-xl-2"], ["matNativeControl", "", "placeholder", "Select Template", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "newTagForm", 1, "example-container", 3, "formGroup", "ngSubmit"], ["formGroupDirective", "ngForm"], [1, "col-xl-6"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], ["matInput", "", "formControlName", "name", "placeholder", "Name"], [4, "ngIf"], [1, "col-xl-4"], ["matNativeControl", "", "formControlName", "advertiser"], ["matNativeControl", "", "formControlName", "publisher"], ["formControlName", "company", 3, "ngModel", "disabled", "ngModelChange"], [1, "col-xl-3"], ["matNativeControl", "", "formControlName", "browserStatus", 3, "ngModel", "selectionChange", "ngModelChange"], ["value", "true"], ["value", "false"], [1, "col-xl-9"], ["matNativeControl", "", "formControlName", "browser", "multiple", "", 3, "selectionChange"], ["value", "Any"], ["value", "Chrome"], ["value", "Firefox"], ["value", "Edge"], ["value", "Internet Explorer"], ["value", "Opera"], ["matNativeControl", "", "formControlName", "deviceTypeStatus", 3, "ngModel", "selectionChange", "ngModelChange"], ["matNativeControl", "", "formControlName", "deviceType", "multiple", ""], ["value", "Desktop"], ["value", "Mobile"], ["value", "Tablet"], ["matNativeControl", "", "formControlName", "versionStatus", 3, "ngModel", "selectionChange", "ngModelChange"], ["matNativeControl", "", "formControlName", "version", "multiple", ""], ["matNativeControl", "", "formControlName", "countryStatus", 3, "ngModel", "selectionChange", "ngModelChange"], ["matNativeControl", "", "formControlName", "country", "multiple", ""], ["formControlName", "adServerUrl"], ["formControlName", "statType"], ["formControlName", "rotationType"], ["matInput", "", "formControlName", "url", "placeholder", "Final URL", 3, "ngModel", "ngModelChange"], ["formArrayName", "params"], [4, "ngFor", "ngForOf"], [1, "row", "pb-4"], [1, "col-md-3"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], ["formArrayName", "subids"], ["class", "row", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "col-md-6"], ["mat-raised-button", "", "color", "primary", "type", "submit"], ["type", "submit", "form", "newTagForm", "mat-raised-button", "", "color", "primary", "type", "button", 3, "click"], [3, "value"], [1, "params", 3, "formGroup"], ["matInput", "", "formControlName", "key", "placeholder", "Final Key"], ["matInput", "", "formControlName", "value", "placeholder", "Final Value"], ["formControlName", "paramType", 3, "selectionChange"], ["matInput", "", "formControlName", "initialParam", "placeholder", "Inital Value", 3, "keyup"], [1, "row", 3, "formGroupName"], ["matNativeControl", "", "formControlName", "filterTag"], ["value", "StartsWith"], ["value", "EndsWith"], ["value", "Contains"], ["value", "ExactValue"], ["matInput", "", "placeholder", "Subid(Numeric Range: example 1-10 input)", "formControlName", "subid"], ["matInput", "", "placeholder", "Limit", "formControlName", "limit"], ["matInput", "", "placeholder", "Split", "formControlName", "split"], [1, "col-xl-1"], ["title", "Delete Tag", 1, "btn", "btn-icon", "btn-light", "btn-hover-danger", "btn-sm", 3, "click"], ["cacheSVG", "false", 1, "svg-icon", "svg-icon-md", "svg-icon-danger", 3, "inlineSVG"], [1, "error", "error-3", "d-flex", "flex-row-fluid", "bgi-size-cover", "bgi-position-center", 2, "background-image", "url('./assets/media/error/bg3.jpg')", "height", "100%", "zoom", "1", "display", "block", "min-height", "80vh", "font-size", "14px", "line-height", "1.4", "color", "#0e1724"], [1, "px-10", "px-md-30", "py-10", "py-md-0", "d-flex", "flex-column", "justify-content-md-center"], [1, "display-4", "font-weight-boldest", "text-white", "mb-12"], [1, "font-size-h1", "font-weight-boldest", "text-dark-75"], [1, "font-size-h4", "line-height-md"]],
        template: function NewTagComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NewTagComponent_div_0_Template, 179, 25, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewTagComponent_div_1_Template, 10, 0, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hidden);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hidden);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_16__["InlineSVGDirective"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["JsonPipe"]],
        styles: [".params[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.params[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  max-width: 25%;\n}\n.subid-header[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.25rem;\n  margin-bottom: 0;\n  background-color: #ffffff;\n  border-bottom: 1px solid #EBEDF3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy90YWctbWFuYWdlbWVudC9uZXctdGFnL25ldy10YWcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxjQUFBO0FBQ0o7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3RhZy1tYW5hZ2VtZW50L25ldy10YWcvbmV3LXRhZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJhbXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWF4LXdpZHRoOiAyNSU7XHJcbiAgfVxyXG59XHJcbi5zdWJpZC1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjI1cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VCRURGMztcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewTagComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-new-tag',
            templateUrl: './new-tag.component.html',
            styleUrls: ['./new-tag.component.scss']
          }]
        }], function () {
          return [{
            type: _tag_management_service__WEBPACK_IMPORTED_MODULE_3__["TagManagementService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"]
          }, {
            type: src_app_shared_service_companies_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"]
          }, {
            type: src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
          }, {
            type: src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]
          }, {
            type: src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          formGroupDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/modules/tag-management/tag-management-routing.module.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/modules/tag-management/tag-management-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: TagManagementRoutingModule */

    /***/
    function srcAppModulesTagManagementTagManagementRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagManagementRoutingModule", function () {
        return TagManagementRoutingModule;
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


      var _new_tag_new_tag_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./new-tag/new-tag.component */
      "./src/app/modules/tag-management/new-tag/new-tag.component.ts");
      /* harmony import */


      var _edit_tag_edit_tag_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit-tag/edit-tag.component */
      "./src/app/modules/tag-management/edit-tag/edit-tag.component.ts");
      /* harmony import */


      var _tags_tags_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./tags/tags.component */
      "./src/app/modules/tag-management/tags/tags.component.ts");
      /* harmony import */


      var _tag_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tag-management.component */
      "./src/app/modules/tag-management/tag-management.component.ts");
      /* harmony import */


      var _template_template_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./template/template.component */
      "./src/app/modules/tag-management/template/template.component.ts");

      var routes = [{
        path: '',
        component: _tag_management_component__WEBPACK_IMPORTED_MODULE_5__["TagManagementComponent"],
        children: [{
          path: 'tags',
          component: _tags_tags_component__WEBPACK_IMPORTED_MODULE_4__["TagsComponent"]
        }, {
          path: 'templates',
          component: _template_template_component__WEBPACK_IMPORTED_MODULE_6__["TemplateComponent"]
        }, {
          path: 'new',
          component: _new_tag_new_tag_component__WEBPACK_IMPORTED_MODULE_2__["NewTagComponent"]
        }, {
          path: 'edit/:id',
          component: _edit_tag_edit_tag_component__WEBPACK_IMPORTED_MODULE_3__["EditTagComponent"],
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

      var TagManagementRoutingModule = function TagManagementRoutingModule() {
        _classCallCheck(this, TagManagementRoutingModule);
      };

      TagManagementRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: TagManagementRoutingModule
      });
      TagManagementRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function TagManagementRoutingModule_Factory(t) {
          return new (t || TagManagementRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TagManagementRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagManagementRoutingModule, [{
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
    "./src/app/modules/tag-management/tag-management.component.ts":
    /*!********************************************************************!*\
      !*** ./src/app/modules/tag-management/tag-management.component.ts ***!
      \********************************************************************/

    /*! exports provided: TagManagementComponent */

    /***/
    function srcAppModulesTagManagementTagManagementComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagManagementComponent", function () {
        return TagManagementComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var TagManagementComponent = /*#__PURE__*/function () {
        function TagManagementComponent() {
          _classCallCheck(this, TagManagementComponent);
        }

        _createClass(TagManagementComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TagManagementComponent;
      }();

      TagManagementComponent.ɵfac = function TagManagementComponent_Factory(t) {
        return new (t || TagManagementComponent)();
      };

      TagManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TagManagementComponent,
        selectors: [["app-tag-management"]],
        decls: 1,
        vars: 0,
        template: function TagManagementComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagManagementComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-tag-management',
            templateUrl: './tag-management.component.html',
            styles: []
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/tag-management/tag-management.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/modules/tag-management/tag-management.module.ts ***!
      \*****************************************************************/

    /*! exports provided: TagManagementModule */

    /***/
    function srcAppModulesTagManagementTagManagementModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagManagementModule", function () {
        return TagManagementModule;
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


      var _tag_management_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tag-management-routing.module */
      "./src/app/modules/tag-management/tag-management-routing.module.ts");
      /* harmony import */


      var _tag_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tag-management.component */
      "./src/app/modules/tag-management/tag-management.component.ts");
      /* harmony import */


      var _new_tag_new_tag_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./new-tag/new-tag.component */
      "./src/app/modules/tag-management/new-tag/new-tag.component.ts");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
      /* harmony import */


      var src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/service/snackbar.service */
      "./src/app/shared/service/snackbar.service.ts");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _tags_tags_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./tags/tags.component */
      "./src/app/modules/tag-management/tags/tags.component.ts");
      /* harmony import */


      var _edit_tag_edit_tag_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./edit-tag/edit-tag.component */
      "./src/app/modules/tag-management/edit-tag/edit-tag.component.ts");
      /* harmony import */


      var _template_name_template_name_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./template-name/template-name.component */
      "./src/app/modules/tag-management/template-name/template-name.component.ts");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var _template_template_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./template/template.component */
      "./src/app/modules/tag-management/template/template.component.ts");
      /* harmony import */


      var ng_inline_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ng-inline-svg */
      "./node_modules/ng-inline-svg/__ivy_ngcc__/lib_esmodule/index.js");

      var TagManagementModule = function TagManagementModule() {
        _classCallCheck(this, TagManagementModule);
      };

      TagManagementModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: TagManagementModule
      });
      TagManagementModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function TagManagementModule_Factory(t) {
          return new (t || TagManagementModule)();
        },
        providers: [src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_11__["SnackbarService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _tag_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["TagManagementRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__["NgxDatatableModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_20__["InlineSVGModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TagManagementModule, {
          declarations: [_tag_management_component__WEBPACK_IMPORTED_MODULE_3__["TagManagementComponent"], _new_tag_new_tag_component__WEBPACK_IMPORTED_MODULE_4__["NewTagComponent"], _tags_tags_component__WEBPACK_IMPORTED_MODULE_15__["TagsComponent"], _edit_tag_edit_tag_component__WEBPACK_IMPORTED_MODULE_16__["EditTagComponent"], _template_name_template_name_component__WEBPACK_IMPORTED_MODULE_17__["TemplateNameComponent"], _template_template_component__WEBPACK_IMPORTED_MODULE_19__["TemplateComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _tag_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["TagManagementRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__["NgxDatatableModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_20__["InlineSVGModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagManagementModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_tag_management_component__WEBPACK_IMPORTED_MODULE_3__["TagManagementComponent"], _new_tag_new_tag_component__WEBPACK_IMPORTED_MODULE_4__["NewTagComponent"], _tags_tags_component__WEBPACK_IMPORTED_MODULE_15__["TagsComponent"], _edit_tag_edit_tag_component__WEBPACK_IMPORTED_MODULE_16__["EditTagComponent"], _template_name_template_name_component__WEBPACK_IMPORTED_MODULE_17__["TemplateNameComponent"], _template_template_component__WEBPACK_IMPORTED_MODULE_19__["TemplateComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _tag_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["TagManagementRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__["NgxDatatableModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_20__["InlineSVGModule"]],
            providers: [src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_11__["SnackbarService"]],
            entryComponents: [_new_tag_new_tag_component__WEBPACK_IMPORTED_MODULE_4__["NewTagComponent"]]
          }]
        }], null, null);
      })();
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

      TagManagementService.ɵfac = function TagManagementService_Factory(t) {
        return new (t || TagManagementService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_service_tags_service__WEBPACK_IMPORTED_MODULE_1__["TagsService"]));
      };

      TagManagementService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TagManagementService,
        factory: TagManagementService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagManagementService, [{
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
    "./src/app/modules/tag-management/tags/tags.component.ts":
    /*!***************************************************************!*\
      !*** ./src/app/modules/tag-management/tags/tags.component.ts ***!
      \***************************************************************/

    /*! exports provided: TagsComponent */

    /***/
    function srcAppModulesTagManagementTagsTagsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsComponent", function () {
        return TagsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _tag_management_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../tag-management.service */
      "./src/app/modules/tag-management/tag-management.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/service/snackbar.service */
      "./src/app/shared/service/snackbar.service.ts");
      /* harmony import */


      var src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/service/users.service */
      "./src/app/shared/service/users.service.ts");
      /* harmony import */


      var src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/service/notification.service */
      "./src/app/shared/service/notification.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var ng_inline_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-inline-svg */
      "./node_modules/ng-inline-svg/__ivy_ngcc__/lib_esmodule/index.js");

      function TagsComponent_div_0_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Name ");
        }
      }

      function TagsComponent_div_0_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var value_r21 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r21, " ");
        }
      }

      function TagsComponent_div_0_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Company ");
        }
      }

      function TagsComponent_div_0_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var value_r23 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r23 ? value_r23[0].name : "", " ");
        }
      }

      function TagsComponent_div_0_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Advertiser ");
        }
      }

      function TagsComponent_div_0_ng_template_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var value_r25 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r25, " ");
        }
      }

      function TagsComponent_div_0_ng_template_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Publisher ");
        }
      }

      function TagsComponent_div_0_ng_template_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var value_r27 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r27 ? value_r27[0].fullname : "", " ");
        }
      }

      function TagsComponent_div_0_ng_template_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Browser ");
        }
      }

      function TagsComponent_div_0_ng_template_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var value_r29 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r29, " ");
        }
      }

      function TagsComponent_div_0_ng_template_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Device Type ");
        }
      }

      function TagsComponent_div_0_ng_template_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var value_r31 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r31, " ");
        }
      }

      function TagsComponent_div_0_ng_template_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Browser Version ");
        }
      }

      function TagsComponent_div_0_ng_template_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var value_r33 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r33, " ");
        }
      }

      function TagsComponent_div_0_ng_template_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Country ");
        }
      }

      function TagsComponent_div_0_ng_template_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var value_r35 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r35, " ");
        }
      }

      function TagsComponent_div_0_ng_template_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Action");
        }
      }

      function TagsComponent_div_0_ng_template_35_Template(rf, ctx) {
        if (rf & 1) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TagsComponent_div_0_ng_template_35_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

            var row_r36 = ctx.row;

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r37.editTag(row_r36._key);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TagsComponent_div_0_ng_template_35_Template_a_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

            var row_r36 = ctx.row;

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r39.deleteTag(row_r36._key);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Communication/Write.svg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/General/Trash.svg");
        }
      }

      function TagsComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "View Tags");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ngx-datatable", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngx-datatable-column", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TagsComponent_div_0_ng_template_10_Template, 1, 0, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TagsComponent_div_0_ng_template_11_Template, 1, 1, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ngx-datatable-column", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TagsComponent_div_0_ng_template_13_Template, 1, 0, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TagsComponent_div_0_ng_template_14_Template, 1, 1, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ngx-datatable-column", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TagsComponent_div_0_ng_template_16_Template, 1, 0, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TagsComponent_div_0_ng_template_17_Template, 1, 1, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ngx-datatable-column", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TagsComponent_div_0_ng_template_19_Template, 1, 0, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TagsComponent_div_0_ng_template_20_Template, 1, 1, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ngx-datatable-column", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TagsComponent_div_0_ng_template_22_Template, 1, 0, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TagsComponent_div_0_ng_template_23_Template, 1, 1, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ngx-datatable-column", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, TagsComponent_div_0_ng_template_25_Template, 1, 0, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, TagsComponent_div_0_ng_template_26_Template, 1, 1, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ngx-datatable-column", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, TagsComponent_div_0_ng_template_28_Template, 1, 0, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, TagsComponent_div_0_ng_template_29_Template, 1, 1, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ngx-datatable-column", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, TagsComponent_div_0_ng_template_31_Template, 1, 0, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, TagsComponent_div_0_ng_template_32_Template, 1, 1, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ngx-datatable-column", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, TagsComponent_div_0_ng_template_34_Template, 1, 0, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, TagsComponent_div_0_ng_template_35_Template, 4, 2, "ng-template", 12);

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

      function TagsComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " How did you get here ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Sorry you can't access the page you're looking for. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " There may be a misspelling in the URL entered,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "or the page you are looking for may no longer exist. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var TagsComponent = /*#__PURE__*/function () {
        function TagsComponent(tagService, cdr, router, _snackBarService, userService, notification) {
          _classCallCheck(this, TagsComponent);

          this.tagService = tagService;
          this.cdr = cdr;
          this.router = router;
          this._snackBarService = _snackBarService;
          this.userService = userService;
          this.notification = notification;
          this.loadingIndicator = true;
          this.hidden = false;
          this.tagList = [];
        }

        _createClass(TagsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.localStorageCompany = this.getSelectedCompanyFromLocalStorage(); //access page part

            if (!this.localStorageCompany) {
              this.hidden = true;
              this.notification.showError("Please select your Company!", "");
            } else {
              this.hidden = false;
            }

            this.getAllTags();
          }
        }, {
          key: "editTag",
          value: function editTag(tagID) {
            this.router.navigateByUrl('/tag-management/edit/' + tagID);
          }
        }, {
          key: "deleteTag",
          value: function deleteTag(id) {
            var _this18 = this;

            if (window.confirm('Do you want to go ahead?')) {
              this.tagService.deleteTag(id).subscribe(function (res) {
                _this18.getAllTags();

                _this18._snackBarService.info('Deleted a tag');
              });
            }
          }
        }, {
          key: "getAllTags",
          value: function getAllTags() {
            var _this19 = this;

            this.tagService.getAllTags().subscribe(function (x) {
              _this19.tagList = x;
              console.log(x);
              _this19.rows = _this19.tagList.filter(function (tag) {
                return tag.company[0]['_id'] == _this19.localStorageCompany;
              });
              _this19.loadingIndicator = false;

              _this19.cdr.detectChanges();
            });
          } //Gets the Selected Company from Local Storage

        }, {
          key: "getSelectedCompanyFromLocalStorage",
          value: function getSelectedCompanyFromLocalStorage() {
            return this.userService.getSelectedCompanyFromLocalStorage();
          }
        }]);

        return TagsComponent;
      }();

      TagsComponent.ɵfac = function TagsComponent_Factory(t) {
        return new (t || TagsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tag_management_service__WEBPACK_IMPORTED_MODULE_1__["TagManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_3__["SnackbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]));
      };

      TagsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TagsComponent,
        selectors: [["app-tags"]],
        decls: 2,
        vars: 2,
        consts: [["class", "row", 4, "ngIf"], ["class", "error error-3 d-flex flex-row-fluid bgi-size-cover bgi-position-center", "style", "background-image: url('./assets/media/error/bg3.jpg'); height: 100%;zoom: 1;\n  display: block;\n  min-height: 80vh;\n  font-size: 14px;\n  line-height: 1.4;\n  color: #0e1724;", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], [1, "material", "fullscreen", 3, "rows", "columnMode", "loadingIndicator", "footerHeight", "rowHeight", "scrollbarH", "headerHeight", "limit"], ["name", "Name"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], ["name", "Company"], ["name", "Advertiser"], ["name", "Publisher"], ["name", "Browser"], ["name", "Device Type"], ["name", "Version"], ["name", "Country"], ["name", "id"], ["title", "Edit Tag", 1, "btn", "btn-icon", "btn-light", "btn-hover-primary", "btn-sm", "mx-3", 3, "click"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-md", "svg-icon-primary", 3, "inlineSVG"], ["title", "Delete Tag", 1, "btn", "btn-icon", "btn-light", "btn-hover-danger", "btn-sm", 3, "click"], ["cacheSVG", "false", 1, "svg-icon", "svg-icon-md", "svg-icon-danger", 3, "inlineSVG"], [1, "error", "error-3", "d-flex", "flex-row-fluid", "bgi-size-cover", "bgi-position-center", 2, "background-image", "url('./assets/media/error/bg3.jpg')", "height", "100%", "zoom", "1", "display", "block", "min-height", "80vh", "font-size", "14px", "line-height", "1.4", "color", "#0e1724"], [1, "px-10", "px-md-30", "py-10", "py-md-0", "d-flex", "flex-column", "justify-content-md-center"], [1, "display-4", "font-weight-boldest", "text-white", "mb-12"], [1, "font-size-h1", "font-weight-boldest", "text-dark-75"], [1, "font-size-h4", "line-height-md"]],
        template: function TagsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TagsComponent_div_0_Template, 36, 8, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TagsComponent_div_1_Template, 10, 0, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hidden);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hidden);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnHeaderDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnCellDirective"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_8__["InlineSVGDirective"]],
        styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy90YWctbWFuYWdlbWVudC90YWdzL3RhZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3RhZy1tYW5hZ2VtZW50L3RhZ3MvdGFncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-tags',
            templateUrl: './tags.component.html',
            styleUrls: ['./tags.component.scss']
          }]
        }], function () {
          return [{
            type: _tag_management_service__WEBPACK_IMPORTED_MODULE_1__["TagManagementService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_3__["SnackbarService"]
          }, {
            type: src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]
          }, {
            type: src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/tag-management/template-name/template-name.component.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/modules/tag-management/template-name/template-name.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: TemplateNameComponent */

    /***/
    function srcAppModulesTagManagementTemplateNameTemplateNameComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TemplateNameComponent", function () {
        return TemplateNameComponent;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

      function TemplateNameComponent_mat_error_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Template Name is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var TemplateNameComponent = /*#__PURE__*/function () {
        function TemplateNameComponent(dialogRef, data) {
          _classCallCheck(this, TemplateNameComponent);

          this.dialogRef = dialogRef;
          this.data = data;
        }

        _createClass(TemplateNameComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.templateNameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
          }
        }, {
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close();
          }
        }, {
          key: "store",
          value: function store() {
            this.templateNameFormControl.markAllAsTouched();

            if (this.templateNameFormControl.valid) {
              this.dialogRef.close({
                templateName: this.data.templateName
              });
            }
          }
        }]);

        return TemplateNameComponent;
      }();

      TemplateNameComponent.ɵfac = function TemplateNameComponent_Factory(t) {
        return new (t || TemplateNameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
      };

      TemplateNameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TemplateNameComponent,
        selectors: [["app-template-name"]],
        decls: 14,
        vars: 3,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["appearance", "fill"], ["matInput", "", "required", "true", 3, "formControl", "ngModel", "ngModelChange"], [4, "ngIf"], ["mat-dialog-actions", "", 2, "justify-content", "end"], ["mat-raised-button", "", "color", "secondary", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
        template: function TemplateNameComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Template Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Template Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TemplateNameComponent_Template_input_ngModelChange_7_listener($event) {
              return ctx.data.templateName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TemplateNameComponent_mat_error_8_Template, 4, 0, "mat-error", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TemplateNameComponent_Template_button_click_10_listener() {
              return ctx.onNoClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TemplateNameComponent_Template_button_click_12_listener() {
              return ctx.store();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ok");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.templateNameFormControl)("ngModel", ctx.data.templateName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.templateNameFormControl.hasError("required"));
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGFnLW1hbmFnZW1lbnQvdGVtcGxhdGUtbmFtZS90ZW1wbGF0ZS1uYW1lLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemplateNameComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-template-name',
            templateUrl: './template-name.component.html',
            styleUrls: ['./template-name.component.scss']
          }]
        }], function () {
          return [{
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
    "./src/app/modules/tag-management/template/template.component.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/modules/tag-management/template/template.component.ts ***!
      \***********************************************************************/

    /*! exports provided: TemplateComponent */

    /***/
    function srcAppModulesTagManagementTemplateTemplateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TemplateComponent", function () {
        return TemplateComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _tag_management_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../tag-management.service */
      "./src/app/modules/tag-management/tag-management.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/service/snackbar.service */
      "./src/app/shared/service/snackbar.service.ts");
      /* harmony import */


      var src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/service/users.service */
      "./src/app/shared/service/users.service.ts");
      /* harmony import */


      var src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/service/notification.service */
      "./src/app/shared/service/notification.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var ng_inline_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-inline-svg */
      "./node_modules/ng-inline-svg/__ivy_ngcc__/lib_esmodule/index.js");

      function TemplateComponent_div_0_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Template Name ");
        }
      }

      function TemplateComponent_div_0_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var value_r23 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r23, " ");
        }
      }

      function TemplateComponent_div_0_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Tag Name ");
        }
      }

      function TemplateComponent_div_0_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var value_r25 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r25, " ");
        }
      }

      function TemplateComponent_div_0_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Company ");
        }
      }

      function TemplateComponent_div_0_ng_template_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var value_r27 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r27[0].name, " ");
        }
      }

      function TemplateComponent_div_0_ng_template_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Advertiser ");
        }
      }

      function TemplateComponent_div_0_ng_template_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var value_r29 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r29, " ");
        }
      }

      function TemplateComponent_div_0_ng_template_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Publisher ");
        }
      }

      function TemplateComponent_div_0_ng_template_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var value_r31 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r31, " ");
        }
      }

      function TemplateComponent_div_0_ng_template_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Browser ");
        }
      }

      function TemplateComponent_div_0_ng_template_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var value_r33 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r33, " ");
        }
      }

      function TemplateComponent_div_0_ng_template_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Device Type ");
        }
      }

      function TemplateComponent_div_0_ng_template_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var value_r35 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r35, " ");
        }
      }

      function TemplateComponent_div_0_ng_template_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Browser Version ");
        }
      }

      function TemplateComponent_div_0_ng_template_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var value_r37 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r37, " ");
        }
      }

      function TemplateComponent_div_0_ng_template_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Country ");
        }
      }

      function TemplateComponent_div_0_ng_template_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var value_r39 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r39, " ");
        }
      }

      function TemplateComponent_div_0_ng_template_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Action");
        }
      }

      function TemplateComponent_div_0_ng_template_38_Template(rf, ctx) {
        if (rf & 1) {
          var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TemplateComponent_div_0_ng_template_38_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

            var row_r40 = ctx.row;

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r41.deleteTemplate(row_r40._key);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/General/Trash.svg");
        }
      }

      function TemplateComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "View Templates");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ngx-datatable", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngx-datatable-column", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TemplateComponent_div_0_ng_template_10_Template, 1, 0, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TemplateComponent_div_0_ng_template_11_Template, 1, 1, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ngx-datatable-column", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TemplateComponent_div_0_ng_template_13_Template, 1, 0, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TemplateComponent_div_0_ng_template_14_Template, 1, 1, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ngx-datatable-column", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TemplateComponent_div_0_ng_template_16_Template, 1, 0, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TemplateComponent_div_0_ng_template_17_Template, 1, 1, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ngx-datatable-column", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TemplateComponent_div_0_ng_template_19_Template, 1, 0, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TemplateComponent_div_0_ng_template_20_Template, 1, 1, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ngx-datatable-column", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TemplateComponent_div_0_ng_template_22_Template, 1, 0, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TemplateComponent_div_0_ng_template_23_Template, 1, 1, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ngx-datatable-column", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, TemplateComponent_div_0_ng_template_25_Template, 1, 0, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, TemplateComponent_div_0_ng_template_26_Template, 1, 1, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ngx-datatable-column", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, TemplateComponent_div_0_ng_template_28_Template, 1, 0, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, TemplateComponent_div_0_ng_template_29_Template, 1, 1, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ngx-datatable-column", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, TemplateComponent_div_0_ng_template_31_Template, 1, 0, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, TemplateComponent_div_0_ng_template_32_Template, 1, 1, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ngx-datatable-column", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, TemplateComponent_div_0_ng_template_34_Template, 1, 0, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, TemplateComponent_div_0_ng_template_35_Template, 1, 1, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ngx-datatable-column", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, TemplateComponent_div_0_ng_template_37_Template, 1, 0, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, TemplateComponent_div_0_ng_template_38_Template, 2, 1, "ng-template", 12);

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

      function TemplateComponent_div_1_Template(rf, ctx) {
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

      var TemplateComponent = /*#__PURE__*/function () {
        function TemplateComponent(tagService, cdr, router, _snackBarService, userService, notification) {
          _classCallCheck(this, TemplateComponent);

          this.tagService = tagService;
          this.cdr = cdr;
          this.router = router;
          this._snackBarService = _snackBarService;
          this.userService = userService;
          this.notification = notification;
          this.loadingIndicator = true;
          this.hidden = false;
          this.templateList = [];
        }

        _createClass(TemplateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.localStorageCompany = this.getSelectedCompanyFromLocalStorage(); //access page part

            if (!this.localStorageCompany) {
              this.hidden = true;
              this.notification.showError("Please select your Company!", "");
            } else {
              this.hidden = false;
            }

            this.getAllTemplates();
          }
        }, {
          key: "editTemplate",
          value: function editTemplate(templateID) {//this.router.navigateByUrl('/tag-management/edit/' + tagID);
          }
        }, {
          key: "deleteTemplate",
          value: function deleteTemplate(id) {
            var _this20 = this;

            if (window.confirm('Do you want to go ahead?')) {
              this.tagService.deleteTemplate(id).subscribe(function (res) {
                _this20.getAllTemplates();

                _this20._snackBarService.info('Deleted a Template');
              });
            }
          }
        }, {
          key: "getAllTemplates",
          value: function getAllTemplates() {
            var _this21 = this;

            this.tagService.getAllTemplates().subscribe(function (x) {
              _this21.templateList = x;
              console.log(x);
              _this21.rows = _this21.templateList.filter(function (template) {
                return template.company[0]['_id'] == _this21.localStorageCompany;
              });
              _this21.loadingIndicator = false;

              _this21.cdr.detectChanges();
            });
          } //Gets the Selected Company from Local Storage

        }, {
          key: "getSelectedCompanyFromLocalStorage",
          value: function getSelectedCompanyFromLocalStorage() {
            return this.userService.getSelectedCompanyFromLocalStorage();
          }
        }]);

        return TemplateComponent;
      }();

      TemplateComponent.ɵfac = function TemplateComponent_Factory(t) {
        return new (t || TemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tag_management_service__WEBPACK_IMPORTED_MODULE_1__["TagManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_3__["SnackbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]));
      };

      TemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TemplateComponent,
        selectors: [["app-template"]],
        decls: 2,
        vars: 2,
        consts: [["class", "row", 4, "ngIf"], ["class", "error error-3 d-flex flex-row-fluid bgi-size-cover bgi-position-center", "style", "background-image: url('./assets/media/error/bg3.jpg'); height: 100%;zoom: 1;\n  display: block;\n  min-height: 80vh;\n  font-size: 14px;\n  line-height: 1.4;\n  color: #0e1724;", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], [1, "material", "fullscreen", 3, "rows", "columnMode", "loadingIndicator", "footerHeight", "rowHeight", "scrollbarH", "headerHeight", "limit"], ["name", "TemplateName"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], ["name", "Name"], ["name", "Company"], ["name", "Advertiser"], ["name", "Publisher"], ["name", "Browser"], ["name", "Device Type"], ["name", "Version"], ["name", "Country"], ["name", "id"], ["title", "Delete Template", 1, "btn", "btn-icon", "btn-light", "btn-hover-danger", "btn-sm", 3, "click"], ["cacheSVG", "false", 1, "svg-icon", "svg-icon-md", "svg-icon-danger", 3, "inlineSVG"], [1, "error", "error-3", "d-flex", "flex-row-fluid", "bgi-size-cover", "bgi-position-center", 2, "background-image", "url('./assets/media/error/bg3.jpg')", "height", "100%", "zoom", "1", "display", "block", "min-height", "80vh", "font-size", "14px", "line-height", "1.4", "color", "#0e1724"], [1, "px-10", "px-md-30", "py-10", "py-md-0", "d-flex", "flex-column", "justify-content-md-center"], [1, "display-4", "font-weight-boldest", "text-white", "mb-12"], [1, "font-size-h1", "font-weight-boldest", "text-dark-75"], [1, "font-size-h4", "line-height-md"]],
        template: function TemplateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TemplateComponent_div_0_Template, 39, 8, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TemplateComponent_div_1_Template, 10, 0, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hidden);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hidden);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnHeaderDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnCellDirective"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_8__["InlineSVGDirective"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGFnLW1hbmFnZW1lbnQvdGVtcGxhdGUvdGVtcGxhdGUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemplateComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-template',
            templateUrl: './template.component.html',
            styleUrls: ['./template.component.scss']
          }]
        }], function () {
          return [{
            type: _tag_management_service__WEBPACK_IMPORTED_MODULE_1__["TagManagementService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_3__["SnackbarService"]
          }, {
            type: src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]
          }, {
            type: src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-tag-management-tag-management-module-es5.js.map