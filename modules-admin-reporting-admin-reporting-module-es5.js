(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-admin-reporting-admin-reporting-module"], {
    /***/
    "./src/app/modules/admin-reporting/admin-reporting-routing.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/modules/admin-reporting/admin-reporting-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: AdminReportingRoutingModule */

    /***/
    function srcAppModulesAdminReportingAdminReportingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminReportingRoutingModule", function () {
        return AdminReportingRoutingModule;
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


      var _apptitude_apptitude_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./apptitude/apptitude.component */
      "./src/app/modules/admin-reporting/apptitude/apptitude.component.ts");
      /* harmony import */


      var _hopkins_hopkins_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./hopkins/hopkins.component */
      "./src/app/modules/admin-reporting/hopkins/hopkins.component.ts");
      /* harmony import */


      var _imgage_advantage_imgage_advantage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./imgage-advantage/imgage-advantage.component */
      "./src/app/modules/admin-reporting/imgage-advantage/imgage-advantage.component.ts");
      /* harmony import */


      var _media_net_media_net_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./media-net/media-net.component */
      "./src/app/modules/admin-reporting/media-net/media-net.component.ts");
      /* harmony import */


      var _perion_perion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./perion/perion.component */
      "./src/app/modules/admin-reporting/perion/perion.component.ts");
      /* harmony import */


      var _admin_reporting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./admin-reporting.component */
      "./src/app/modules/admin-reporting/admin-reporting.component.ts");
      /* harmony import */


      var _third_party_third_party_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./third-party/third-party.component */
      "./src/app/modules/admin-reporting/third-party/third-party.component.ts");
      /* harmony import */


      var _bing_direct_bing_direct_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./bing-direct/bing-direct.component */
      "./src/app/modules/admin-reporting/bing-direct/bing-direct.component.ts");
      /* harmony import */


      var _lyons_lyons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./lyons/lyons.component */
      "./src/app/modules/admin-reporting/lyons/lyons.component.ts");
      /* harmony import */


      var _rubi_rubi_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./rubi/rubi.component */
      "./src/app/modules/admin-reporting/rubi/rubi.component.ts");
      /* harmony import */


      var _verizon_direct_verizon_direct_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./verizon-direct/verizon-direct.component */
      "./src/app/modules/admin-reporting/verizon-direct/verizon-direct.component.ts");
      /* harmony import */


      var _manual_update_manual_update_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./manual-update/manual-update.component */
      "./src/app/modules/admin-reporting/manual-update/manual-update.component.ts");

      var routes = [{
        path: '',
        component: _admin_reporting_component__WEBPACK_IMPORTED_MODULE_7__["AdminReportingComponent"],
        children: [{
          path: 'perion',
          component: _perion_perion_component__WEBPACK_IMPORTED_MODULE_6__["PerionComponent"]
        }, {
          path: 'image-advantage',
          component: _imgage_advantage_imgage_advantage_component__WEBPACK_IMPORTED_MODULE_4__["ImgageAdvantageComponent"]
        }, {
          path: 'hopkins',
          component: _hopkins_hopkins_component__WEBPACK_IMPORTED_MODULE_3__["HopkinsComponent"]
        }, {
          path: 'apptitude',
          component: _apptitude_apptitude_component__WEBPACK_IMPORTED_MODULE_2__["ApptitudeComponent"]
        }, {
          path: 'media-net',
          component: _media_net_media_net_component__WEBPACK_IMPORTED_MODULE_5__["MediaNetComponent"]
        }, {
          path: 'bing-direct',
          component: _bing_direct_bing_direct_component__WEBPACK_IMPORTED_MODULE_9__["BingDirectComponent"]
        }, {
          path: 'lyons',
          component: _lyons_lyons_component__WEBPACK_IMPORTED_MODULE_10__["LyonsComponent"]
        }, {
          path: 'rubi',
          component: _rubi_rubi_component__WEBPACK_IMPORTED_MODULE_11__["RubiComponent"]
        }, {
          path: 'verizon-direct',
          component: _verizon_direct_verizon_direct_component__WEBPACK_IMPORTED_MODULE_12__["VerizonDirectComponent"]
        }, {
          path: 'third-party',
          component: _third_party_third_party_component__WEBPACK_IMPORTED_MODULE_8__["ThirdPartyComponent"]
        }, {
          path: 'manual-update',
          component: _manual_update_manual_update_component__WEBPACK_IMPORTED_MODULE_13__["ManualUpdateComponent"]
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

      var AdminReportingRoutingModule = function AdminReportingRoutingModule() {
        _classCallCheck(this, AdminReportingRoutingModule);
      };

      AdminReportingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AdminReportingRoutingModule
      });
      AdminReportingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AdminReportingRoutingModule_Factory(t) {
          return new (t || AdminReportingRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminReportingRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminReportingRoutingModule, [{
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
    "./src/app/modules/admin-reporting/admin-reporting.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/modules/admin-reporting/admin-reporting.module.ts ***!
      \*******************************************************************/

    /*! exports provided: AdminReportingModule */

    /***/
    function srcAppModulesAdminReportingAdminReportingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminReportingModule", function () {
        return AdminReportingModule;
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


      var _admin_reporting_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./admin-reporting-routing.module */
      "./src/app/modules/admin-reporting/admin-reporting-routing.module.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _perion_perion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./perion/perion.component */
      "./src/app/modules/admin-reporting/perion/perion.component.ts");
      /* harmony import */


      var _imgage_advantage_imgage_advantage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./imgage-advantage/imgage-advantage.component */
      "./src/app/modules/admin-reporting/imgage-advantage/imgage-advantage.component.ts");
      /* harmony import */


      var _hopkins_hopkins_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./hopkins/hopkins.component */
      "./src/app/modules/admin-reporting/hopkins/hopkins.component.ts");
      /* harmony import */


      var _apptitude_apptitude_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./apptitude/apptitude.component */
      "./src/app/modules/admin-reporting/apptitude/apptitude.component.ts");
      /* harmony import */


      var _all_reporting_all_reporting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./all-reporting/all-reporting.component */
      "./src/app/modules/admin-reporting/all-reporting/all-reporting.component.ts");
      /* harmony import */


      var _media_net_media_net_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./media-net/media-net.component */
      "./src/app/modules/admin-reporting/media-net/media-net.component.ts");
      /* harmony import */


      var _third_party_third_party_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./third-party/third-party.component */
      "./src/app/modules/admin-reporting/third-party/third-party.component.ts");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/list */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "./src/app/shared/modules/shared.module.ts");
      /* harmony import */


      var _bing_direct_bing_direct_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./bing-direct/bing-direct.component */
      "./src/app/modules/admin-reporting/bing-direct/bing-direct.component.ts");
      /* harmony import */


      var _lyons_lyons_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./lyons/lyons.component */
      "./src/app/modules/admin-reporting/lyons/lyons.component.ts");
      /* harmony import */


      var _rubi_rubi_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./rubi/rubi.component */
      "./src/app/modules/admin-reporting/rubi/rubi.component.ts");
      /* harmony import */


      var _verizon_direct_verizon_direct_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./verizon-direct/verizon-direct.component */
      "./src/app/modules/admin-reporting/verizon-direct/verizon-direct.component.ts");
      /* harmony import */


      var _manual_update_manual_update_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./manual-update/manual-update.component */
      "./src/app/modules/admin-reporting/manual-update/manual-update.component.ts");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var ng_inline_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ng-inline-svg */
      "./node_modules/ng-inline-svg/__ivy_ngcc__/lib_esmodule/index.js");

      var AdminReportingModule = function AdminReportingModule() {
        _classCallCheck(this, AdminReportingModule);
      };

      AdminReportingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AdminReportingModule
      });
      AdminReportingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AdminReportingModule_Factory(t) {
          return new (t || AdminReportingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_reporting_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminReportingRoutingModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["NgxDatatableModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOptionModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_26__["InlineSVGModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminReportingModule, {
          declarations: [_perion_perion_component__WEBPACK_IMPORTED_MODULE_4__["PerionComponent"], _imgage_advantage_imgage_advantage_component__WEBPACK_IMPORTED_MODULE_5__["ImgageAdvantageComponent"], _hopkins_hopkins_component__WEBPACK_IMPORTED_MODULE_6__["HopkinsComponent"], _apptitude_apptitude_component__WEBPACK_IMPORTED_MODULE_7__["ApptitudeComponent"], _all_reporting_all_reporting_component__WEBPACK_IMPORTED_MODULE_8__["AllReportingComponent"], _media_net_media_net_component__WEBPACK_IMPORTED_MODULE_9__["MediaNetComponent"], _third_party_third_party_component__WEBPACK_IMPORTED_MODULE_10__["ThirdPartyComponent"], _bing_direct_bing_direct_component__WEBPACK_IMPORTED_MODULE_19__["BingDirectComponent"], _lyons_lyons_component__WEBPACK_IMPORTED_MODULE_20__["LyonsComponent"], _rubi_rubi_component__WEBPACK_IMPORTED_MODULE_21__["RubiComponent"], _verizon_direct_verizon_direct_component__WEBPACK_IMPORTED_MODULE_22__["VerizonDirectComponent"], _manual_update_manual_update_component__WEBPACK_IMPORTED_MODULE_23__["ManualUpdateComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_reporting_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminReportingRoutingModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["NgxDatatableModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOptionModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_26__["InlineSVGModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminReportingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_perion_perion_component__WEBPACK_IMPORTED_MODULE_4__["PerionComponent"], _imgage_advantage_imgage_advantage_component__WEBPACK_IMPORTED_MODULE_5__["ImgageAdvantageComponent"], _hopkins_hopkins_component__WEBPACK_IMPORTED_MODULE_6__["HopkinsComponent"], _apptitude_apptitude_component__WEBPACK_IMPORTED_MODULE_7__["ApptitudeComponent"], _all_reporting_all_reporting_component__WEBPACK_IMPORTED_MODULE_8__["AllReportingComponent"], _media_net_media_net_component__WEBPACK_IMPORTED_MODULE_9__["MediaNetComponent"], _third_party_third_party_component__WEBPACK_IMPORTED_MODULE_10__["ThirdPartyComponent"], _bing_direct_bing_direct_component__WEBPACK_IMPORTED_MODULE_19__["BingDirectComponent"], _lyons_lyons_component__WEBPACK_IMPORTED_MODULE_20__["LyonsComponent"], _rubi_rubi_component__WEBPACK_IMPORTED_MODULE_21__["RubiComponent"], _verizon_direct_verizon_direct_component__WEBPACK_IMPORTED_MODULE_22__["VerizonDirectComponent"], _manual_update_manual_update_component__WEBPACK_IMPORTED_MODULE_23__["ManualUpdateComponent"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_reporting_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminReportingRoutingModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["NgxDatatableModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOptionModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_26__["InlineSVGModule"]],
            entryComponents: []
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/admin-reporting/all-reporting/all-reporting.component.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/modules/admin-reporting/all-reporting/all-reporting.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: AllReportingComponent */

    /***/
    function srcAppModulesAdminReportingAllReportingAllReportingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AllReportingComponent", function () {
        return AllReportingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AllReportingComponent = /*#__PURE__*/function () {
        function AllReportingComponent() {
          _classCallCheck(this, AllReportingComponent);
        }

        _createClass(AllReportingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AllReportingComponent;
      }();

      AllReportingComponent.ɵfac = function AllReportingComponent_Factory(t) {
        return new (t || AllReportingComponent)();
      };

      AllReportingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AllReportingComponent,
        selectors: [["app-all-reporting"]],
        decls: 2,
        vars: 0,
        template: function AllReportingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "all-reporting works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL2FsbC1yZXBvcnRpbmcvYWxsLXJlcG9ydGluZy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllReportingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-all-reporting',
            templateUrl: './all-reporting.component.html',
            styleUrls: ['./all-reporting.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/admin-reporting/apptitude/apptitude.component.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/modules/admin-reporting/apptitude/apptitude.component.ts ***!
      \**************************************************************************/

    /*! exports provided: ApptitudeComponent */

    /***/
    function srcAppModulesAdminReportingApptitudeApptitudeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApptitudeComponent", function () {
        return ApptitudeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var echarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! echarts */
      "./node_modules/echarts/index.js");
      /* harmony import */


      var _shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/modules/reporting-filtering/reporting-filtering.component */
      "./src/app/shared/modules/reporting-filtering/reporting-filtering.component.ts");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/list */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/divider */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var _c0 = ["expandableTable"];

      function ApptitudeComponent_ng_template_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Test");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ApptitudeComponent_ng_template_47_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApptitudeComponent_ng_template_47_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var row_r20 = ctx.row;

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.toggleExpandRow(row_r20);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var expanded_r21 = ctx.expanded;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("datatable-icon-right", !expanded_r21)("datatable-icon-down", expanded_r21);
        }
      }

      function ApptitudeComponent_ng_template_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Publisher ");
        }
      }

      function ApptitudeComponent_ng_template_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r25 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r25);
        }
      }

      function ApptitudeComponent_ng_template_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Tag ");
        }
      }

      function ApptitudeComponent_ng_template_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r27 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r27);
        }
      }

      function ApptitudeComponent_ng_template_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Total Searches ");
        }
      }

      function ApptitudeComponent_ng_template_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r29 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, value_r29));
        }
      }

      function ApptitudeComponent_ng_template_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Monetized Searches ");
        }
      }

      function ApptitudeComponent_ng_template_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r31 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, value_r31));
        }
      }

      function ApptitudeComponent_ng_template_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Clicks ");
        }
      }

      function ApptitudeComponent_ng_template_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r33 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, value_r33));
        }
      }

      function ApptitudeComponent_ng_template_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var column_r34 = ctx.column;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r34.name);
        }
      }

      function ApptitudeComponent_ng_template_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "strong", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "percent");
        }

        if (rf & 2) {
          var row_r36 = ctx.row;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 1, row_r36["clicks"] / row_r36["totalSearches"], "2.2-2"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function ApptitudeComponent_ng_template_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Revenue ");
        }
      }

      function ApptitudeComponent_ng_template_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r39 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, value_r39, "USD"));
        }
      }

      var ApptitudeComponent = /*#__PURE__*/function () {
        function ApptitudeComponent() {
          _classCallCheck(this, ApptitudeComponent);

          this.rows = [{
            name: 'MNA',
            tag: 'BHS',
            totalSearches: '152311',
            monetizedSearches: '102316',
            revenue: '8623',
            clicks: 15684
          }];
          this.columns = [{
            prop: 'name'
          }, {
            name: 'Gender'
          }];
          this.expanded = {};
        }

        _createClass(ApptitudeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var revenueByDayArray = Array.from({
              length: 20
            }, function () {
              return Math.floor(Math.random() * (8000 - 4000) + 4000);
            });
            var searchesPerDay = Array.from({
              length: 20
            }, function () {
              return Math.floor(Math.random() * (100000 - 40000) + 40000);
            });
            this.setChartOptions(10000, 100000, ['Nov 1, Nov 2, Nov 3, Nov 4', 'Nov 5', 'Nov 5', 'Nov 6', 'Nov 7', 'Nov 8', 'Nov 9', 'Nov 10', 'Nov 11', 'Nov 12', 'Nov 13', 'Nov 14', 'Nov 15', 'Nov 16', 'Nov 17', 'Nov 18', 'Nov 19', 'Nov 20'], revenueByDayArray, searchesPerDay);
          }
        }, {
          key: "toggleExpandRow",
          value: function toggleExpandRow(row) {
            console.log('Toggled Expand Row!', row);
            this.table.rowDetail.toggleExpandRow(row);
          }
        }, {
          key: "onDetailToggle",
          value: function onDetailToggle(event) {
            console.log('Detail Toggled', event);
          }
        }, {
          key: "updateReportingFiltering",
          value: function updateReportingFiltering(range) {
            // this.range = range;
            // this.getAllPerionStats(
            //   'manic_perion',
            //   this.range.startDate,
            //   this.range.endDate
            // );
            console.log('Report');
          }
        }, {
          key: "setChartOptions",
          value: function setChartOptions(maxRevenue, maxSearches, daysArray, revenueByDayArray, searchesPerDay) {
            this.chartDom = document.getElementById('main');
            this.myChart = echarts__WEBPACK_IMPORTED_MODULE_1__["init"](this.chartDom);
            this.option = {
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'cross',
                  crossStyle: {
                    color: '#999'
                  }
                }
              },
              toolbox: {
                feature: {
                  dataView: {
                    show: true,
                    readOnly: false
                  },
                  magicType: {
                    show: true,
                    type: ['line', 'bar']
                  },
                  restore: {
                    show: true
                  },
                  saveAsImage: {
                    show: true
                  }
                }
              },
              legend: {
                data: ['Revenue', 'Searches']
              },
              xAxis: [{
                type: 'category',
                data: daysArray,
                axisPointer: {
                  type: 'shadow'
                }
              }],
              yAxis: [{
                type: 'value',
                name: 'Revenue',
                min: 0,
                max: maxRevenue,
                interval: 25000,
                axisLabel: {
                  formatter: '${value}'
                }
              }, {
                type: 'value',
                name: 'Searches',
                min: 0,
                max: maxSearches,
                interval: 100000,
                axisLabel: {
                  formatter: '{value}'
                }
              }],
              series: [{
                name: 'Revenue',
                type: 'bar',
                data: revenueByDayArray
              }, {
                name: 'Searches',
                type: 'line',
                yAxisIndex: 1,
                data: searchesPerDay
              }]
            };
            this.option && this.myChart.setOption(this.option);
          }
        }]);

        return ApptitudeComponent;
      }();

      ApptitudeComponent.ɵfac = function ApptitudeComponent_Factory(t) {
        return new (t || ApptitudeComponent)();
      };

      ApptitudeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ApptitudeComponent,
        selectors: [["app-apptitude"]],
        viewQuery: function ApptitudeComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 69,
        vars: 13,
        consts: [[3, "onDatesPicked"], ["id", "main", 2, "width", "100%", "height", "300px"], [1, "row"], [1, "col-xl-6"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], [1, "material", "fullscreen", "expandable", 2, "top", "52px", "margin-bottom", "10px", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "scrollbarH", "rows"], ["expandableTable", ""], [3, "rowHeight", "toggle"], ["myDetailRow", ""], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["ngx-datatable-cell-template", ""], ["name", "name"], ["ngx-datatable-header-template", ""], ["name", "tag"], ["name", "totalSearches"], ["name", "monetizedSearches"], ["name", "clicks"], ["name", "CTR"], ["name", "revenue"], [2, "padding-left", "35px"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 3, "click"], [3, "innerHTML"]],
        template: function ApptitudeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-reporting-filtering", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onDatesPicked", function ApptitudeComponent_Template_app_reporting_filtering_onDatesPicked_0_listener($event) {
              return ctx.updateReportingFiltering($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Month to Date Stats");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Revenue: $202,121.26");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Revenue Pace: $231,285.19");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Profit: $29,109.59");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Profit Pace: $173,121.45");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Percentage Change: +21%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Last Month Stats");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Revenue: $167,542.23");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Profit: $22,954.45");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Percentage Change: +0%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ngx-datatable", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ngx-datatable-row-detail", 11, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggle", function ApptitudeComponent_Template_ngx_datatable_row_detail_toggle_43_listener($event) {
              return ctx.onDetailToggle($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ApptitudeComponent_ng_template_45_Template, 6, 0, "ng-template", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ngx-datatable-column", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ApptitudeComponent_ng_template_47_Template, 1, 4, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ngx-datatable-column", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, ApptitudeComponent_ng_template_49_Template, 1, 0, "ng-template", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ApptitudeComponent_ng_template_50_Template, 2, 1, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ngx-datatable-column", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, ApptitudeComponent_ng_template_52_Template, 1, 0, "ng-template", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ApptitudeComponent_ng_template_53_Template, 2, 1, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "ngx-datatable-column", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ApptitudeComponent_ng_template_55_Template, 1, 0, "ng-template", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ApptitudeComponent_ng_template_56_Template, 3, 3, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "ngx-datatable-column", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, ApptitudeComponent_ng_template_58_Template, 1, 0, "ng-template", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, ApptitudeComponent_ng_template_59_Template, 3, 3, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "ngx-datatable-column", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, ApptitudeComponent_ng_template_61_Template, 1, 0, "ng-template", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, ApptitudeComponent_ng_template_62_Template, 3, 3, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ngx-datatable-column", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, ApptitudeComponent_ng_template_64_Template, 2, 1, "ng-template", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, ApptitudeComponent_ng_template_65_Template, 2, 4, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "ngx-datatable-column", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, ApptitudeComponent_ng_template_67_Template, 1, 0, "ng-template", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, ApptitudeComponent_ng_template_68_Template, 3, 4, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnMode", "force")("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("scrollbarH", true)("rows", ctx.rows);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowHeight", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 50)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);
          }
        },
        directives: [_shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_2__["ReportingFilteringComponent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDivider"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DatatableRowDetailDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DatatableRowDetailTemplateDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DataTableColumnCellDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DataTableColumnHeaderDirective"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL2FwcHRpdHVkZS9hcHB0aXR1ZGUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApptitudeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-apptitude',
            templateUrl: './apptitude.component.html',
            styleUrls: ['./apptitude.component.scss']
          }]
        }], function () {
          return [];
        }, {
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['expandableTable']
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/modules/admin-reporting/bing-direct/bing-direct.component.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/modules/admin-reporting/bing-direct/bing-direct.component.ts ***!
      \******************************************************************************/

    /*! exports provided: BingDirectComponent */

    /***/
    function srcAppModulesAdminReportingBingDirectBingDirectComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BingDirectComponent", function () {
        return BingDirectComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var BingDirectComponent = /*#__PURE__*/function () {
        function BingDirectComponent() {
          _classCallCheck(this, BingDirectComponent);
        }

        _createClass(BingDirectComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BingDirectComponent;
      }();

      BingDirectComponent.ɵfac = function BingDirectComponent_Factory(t) {
        return new (t || BingDirectComponent)();
      };

      BingDirectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BingDirectComponent,
        selectors: [["app-bing-direct"]],
        decls: 2,
        vars: 0,
        template: function BingDirectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "bing-direct works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL2JpbmctZGlyZWN0L2JpbmctZGlyZWN0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BingDirectComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-bing-direct',
            templateUrl: './bing-direct.component.html',
            styleUrls: ['./bing-direct.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/admin-reporting/hopkins/hopkins.component.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/modules/admin-reporting/hopkins/hopkins.component.ts ***!
      \**********************************************************************/

    /*! exports provided: HopkinsComponent */

    /***/
    function srcAppModulesAdminReportingHopkinsHopkinsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HopkinsComponent", function () {
        return HopkinsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var echarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! echarts */
      "./node_modules/echarts/index.js");
      /* harmony import */


      var _shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/modules/reporting-filtering/reporting-filtering.component */
      "./src/app/shared/modules/reporting-filtering/reporting-filtering.component.ts");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/list */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/divider */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var _c0 = ["expandableTable"];

      function HopkinsComponent_ng_template_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Test");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HopkinsComponent_ng_template_47_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HopkinsComponent_ng_template_47_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var row_r20 = ctx.row;

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.toggleExpandRow(row_r20);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var expanded_r21 = ctx.expanded;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("datatable-icon-right", !expanded_r21)("datatable-icon-down", expanded_r21);
        }
      }

      function HopkinsComponent_ng_template_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Publisher ");
        }
      }

      function HopkinsComponent_ng_template_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r25 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r25);
        }
      }

      function HopkinsComponent_ng_template_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Tag ");
        }
      }

      function HopkinsComponent_ng_template_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r27 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r27);
        }
      }

      function HopkinsComponent_ng_template_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Total Searches ");
        }
      }

      function HopkinsComponent_ng_template_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r29 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, value_r29));
        }
      }

      function HopkinsComponent_ng_template_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Monetized Searches ");
        }
      }

      function HopkinsComponent_ng_template_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r31 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, value_r31));
        }
      }

      function HopkinsComponent_ng_template_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Clicks ");
        }
      }

      function HopkinsComponent_ng_template_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r33 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, value_r33));
        }
      }

      function HopkinsComponent_ng_template_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var column_r34 = ctx.column;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r34.name);
        }
      }

      function HopkinsComponent_ng_template_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "strong", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "percent");
        }

        if (rf & 2) {
          var row_r36 = ctx.row;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 1, row_r36["clicks"] / row_r36["totalSearches"], "2.2-2"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function HopkinsComponent_ng_template_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Revenue ");
        }
      }

      function HopkinsComponent_ng_template_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r39 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, value_r39, "USD"));
        }
      }

      var HopkinsComponent = /*#__PURE__*/function () {
        function HopkinsComponent() {
          _classCallCheck(this, HopkinsComponent);

          this.rows = [{
            name: 'Greg',
            tag: 'XML Hopkins',
            totalSearches: '759123',
            monetizedSearches: '431231',
            revenue: '19623',
            clicks: 50351
          }];
          this.columns = [{
            prop: 'name'
          }, {
            name: 'Gender'
          }];
          this.expanded = {};
        }

        _createClass(HopkinsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var revenueByDayArray = Array.from({
              length: 20
            }, function () {
              return Math.floor(Math.random() * (8000 - 4000) + 4000);
            });
            var searchesPerDay = Array.from({
              length: 20
            }, function () {
              return Math.floor(Math.random() * (100000 - 40000) + 40000);
            });
            this.setChartOptions(10000, 100000, ['Nov 1, Nov 2, Nov 3, Nov 4', 'Nov 5', 'Nov 5', 'Nov 6', 'Nov 7', 'Nov 8', 'Nov 9', 'Nov 10', 'Nov 11', 'Nov 12', 'Nov 13', 'Nov 14', 'Nov 15', 'Nov 16', 'Nov 17', 'Nov 18', 'Nov 19', 'Nov 20'], revenueByDayArray, searchesPerDay);
          }
        }, {
          key: "toggleExpandRow",
          value: function toggleExpandRow(row) {
            console.log('Toggled Expand Row!', row);
            this.table.rowDetail.toggleExpandRow(row);
          }
        }, {
          key: "onDetailToggle",
          value: function onDetailToggle(event) {
            console.log('Detail Toggled', event);
          }
        }, {
          key: "updateReportingFiltering",
          value: function updateReportingFiltering(range) {
            // this.range = range;
            // this.getAllPerionStats(
            //   'manic_perion',
            //   this.range.startDate,
            //   this.range.endDate
            // );
            console.log('Report');
          }
        }, {
          key: "setChartOptions",
          value: function setChartOptions(maxRevenue, maxSearches, daysArray, revenueByDayArray, searchesPerDay) {
            this.chartDom = document.getElementById('main');
            this.myChart = echarts__WEBPACK_IMPORTED_MODULE_1__["init"](this.chartDom);
            this.option = {
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'cross',
                  crossStyle: {
                    color: '#999'
                  }
                }
              },
              toolbox: {
                feature: {
                  dataView: {
                    show: true,
                    readOnly: false
                  },
                  magicType: {
                    show: true,
                    type: ['line', 'bar']
                  },
                  restore: {
                    show: true
                  },
                  saveAsImage: {
                    show: true
                  }
                }
              },
              legend: {
                data: ['Revenue', 'Searches']
              },
              xAxis: [{
                type: 'category',
                data: daysArray,
                axisPointer: {
                  type: 'shadow'
                }
              }],
              yAxis: [{
                type: 'value',
                name: 'Revenue',
                min: 0,
                max: maxRevenue,
                interval: 25000,
                axisLabel: {
                  formatter: '${value}'
                }
              }, {
                type: 'value',
                name: 'Searches',
                min: 0,
                max: maxSearches,
                interval: 100000,
                axisLabel: {
                  formatter: '{value}'
                }
              }],
              series: [{
                name: 'Revenue',
                type: 'bar',
                data: revenueByDayArray
              }, {
                name: 'Searches',
                type: 'line',
                yAxisIndex: 1,
                data: searchesPerDay
              }]
            };
            this.option && this.myChart.setOption(this.option);
          }
        }]);

        return HopkinsComponent;
      }();

      HopkinsComponent.ɵfac = function HopkinsComponent_Factory(t) {
        return new (t || HopkinsComponent)();
      };

      HopkinsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HopkinsComponent,
        selectors: [["app-hopkins"]],
        viewQuery: function HopkinsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 69,
        vars: 13,
        consts: [[3, "onDatesPicked"], ["id", "main", 2, "width", "100%", "height", "300px"], [1, "row"], [1, "col-xl-6"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], [1, "material", "fullscreen", "expandable", 2, "top", "52px", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "scrollbarH", "rows"], ["expandableTable", ""], [3, "rowHeight", "toggle"], ["myDetailRow", ""], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["ngx-datatable-cell-template", ""], ["name", "name"], ["ngx-datatable-header-template", ""], ["name", "tag"], ["name", "totalSearches"], ["name", "monetizedSearches"], ["name", "clicks"], ["name", "CTR"], ["name", "revenue"], [2, "padding-left", "35px"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 3, "click"], [3, "innerHTML"]],
        template: function HopkinsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-reporting-filtering", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onDatesPicked", function HopkinsComponent_Template_app_reporting_filtering_onDatesPicked_0_listener($event) {
              return ctx.updateReportingFiltering($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Month to Date Stats");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Revenue: $0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Revenue Pace: $0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Profit: $0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Profit Pace: $0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Percentage Change: +0%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Last Month Stats");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Revenue: $0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Profit: $0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Percentage Change: +11%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ngx-datatable", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ngx-datatable-row-detail", 11, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggle", function HopkinsComponent_Template_ngx_datatable_row_detail_toggle_43_listener($event) {
              return ctx.onDetailToggle($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, HopkinsComponent_ng_template_45_Template, 6, 0, "ng-template", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ngx-datatable-column", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, HopkinsComponent_ng_template_47_Template, 1, 4, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ngx-datatable-column", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, HopkinsComponent_ng_template_49_Template, 1, 0, "ng-template", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, HopkinsComponent_ng_template_50_Template, 2, 1, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ngx-datatable-column", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, HopkinsComponent_ng_template_52_Template, 1, 0, "ng-template", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, HopkinsComponent_ng_template_53_Template, 2, 1, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "ngx-datatable-column", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, HopkinsComponent_ng_template_55_Template, 1, 0, "ng-template", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, HopkinsComponent_ng_template_56_Template, 3, 3, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "ngx-datatable-column", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, HopkinsComponent_ng_template_58_Template, 1, 0, "ng-template", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, HopkinsComponent_ng_template_59_Template, 3, 3, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "ngx-datatable-column", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, HopkinsComponent_ng_template_61_Template, 1, 0, "ng-template", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, HopkinsComponent_ng_template_62_Template, 3, 3, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ngx-datatable-column", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, HopkinsComponent_ng_template_64_Template, 2, 1, "ng-template", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, HopkinsComponent_ng_template_65_Template, 2, 4, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "ngx-datatable-column", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, HopkinsComponent_ng_template_67_Template, 1, 0, "ng-template", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, HopkinsComponent_ng_template_68_Template, 3, 4, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnMode", "force")("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("scrollbarH", true)("rows", ctx.rows);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowHeight", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 50)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);
          }
        },
        directives: [_shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_2__["ReportingFilteringComponent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDivider"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DatatableRowDetailDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DatatableRowDetailTemplateDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DataTableColumnCellDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DataTableColumnHeaderDirective"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL2hvcGtpbnMvaG9wa2lucy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HopkinsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-hopkins',
            templateUrl: './hopkins.component.html',
            styleUrls: ['./hopkins.component.scss']
          }]
        }], function () {
          return [];
        }, {
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['expandableTable']
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/modules/admin-reporting/imgage-advantage/imgage-advantage.component.ts":
    /*!****************************************************************************************!*\
      !*** ./src/app/modules/admin-reporting/imgage-advantage/imgage-advantage.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: ImgageAdvantageComponent */

    /***/
    function srcAppModulesAdminReportingImgageAdvantageImgageAdvantageComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImgageAdvantageComponent", function () {
        return ImgageAdvantageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/list */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/divider */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var _c0 = ["expandableTable"];

      function ImgageAdvantageComponent_ng_template_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Test");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ImgageAdvantageComponent_ng_template_45_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImgageAdvantageComponent_ng_template_45_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var row_r22 = ctx.row;

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.toggleExpandRow(row_r22);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var expanded_r23 = ctx.expanded;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("datatable-icon-right", !expanded_r23)("datatable-icon-down", expanded_r23);
        }
      }

      function ImgageAdvantageComponent_ng_template_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Publisher ");
        }
      }

      function ImgageAdvantageComponent_ng_template_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r27 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r27);
        }
      }

      function ImgageAdvantageComponent_ng_template_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Tag ");
        }
      }

      function ImgageAdvantageComponent_ng_template_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r29 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r29);
        }
      }

      function ImgageAdvantageComponent_ng_template_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Total Searches ");
        }
      }

      function ImgageAdvantageComponent_ng_template_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r31 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, value_r31));
        }
      }

      function ImgageAdvantageComponent_ng_template_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Monetized Searches ");
        }
      }

      function ImgageAdvantageComponent_ng_template_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r33 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, value_r33));
        }
      }

      function ImgageAdvantageComponent_ng_template_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Clicks ");
        }
      }

      function ImgageAdvantageComponent_ng_template_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r35 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, value_r35));
        }
      }

      function ImgageAdvantageComponent_ng_template_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Follow On ");
        }
      }

      function ImgageAdvantageComponent_ng_template_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r37 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r37);
        }
      }

      function ImgageAdvantageComponent_ng_template_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var column_r38 = ctx.column;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r38.name);
        }
      }

      function ImgageAdvantageComponent_ng_template_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "strong", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "percent");
        }

        if (rf & 2) {
          var row_r40 = ctx.row;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 1, row_r40["clicks"] / row_r40["totalSearches"], "2.2-2"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function ImgageAdvantageComponent_ng_template_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Revenue ");
        }
      }

      function ImgageAdvantageComponent_ng_template_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r43 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, value_r43, "USD"));
        }
      }

      var ImgageAdvantageComponent = /*#__PURE__*/function () {
        function ImgageAdvantageComponent() {
          _classCallCheck(this, ImgageAdvantageComponent);

          this.rows = [{
            name: 'Greg',
            tag: 'YHS Organic',
            totalSearches: '536412',
            monetizedSearches: '501235',
            revenue: '52623',
            clicks: 50351,
            followOn: '13%'
          }];
          this.columns = [{
            prop: 'name'
          }, {
            name: 'Gender'
          }];
          this.expanded = {};
        }

        _createClass(ImgageAdvantageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleExpandRow",
          value: function toggleExpandRow(row) {
            console.log('Toggled Expand Row!', row);
            this.table.rowDetail.toggleExpandRow(row);
          }
        }, {
          key: "onDetailToggle",
          value: function onDetailToggle(event) {
            console.log('Detail Toggled', event);
          }
        }]);

        return ImgageAdvantageComponent;
      }();

      ImgageAdvantageComponent.ɵfac = function ImgageAdvantageComponent_Factory(t) {
        return new (t || ImgageAdvantageComponent)();
      };

      ImgageAdvantageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ImgageAdvantageComponent,
        selectors: [["app-imgage-advantage"]],
        viewQuery: function ImgageAdvantageComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 70,
        vars: 13,
        consts: [[1, "row"], [1, "col-xl-6"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], [1, "material", "fullscreen", "expandable", 2, "top", "52px", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "scrollbarH", "rows"], ["expandableTable", ""], [3, "rowHeight", "toggle"], ["myDetailRow", ""], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["ngx-datatable-cell-template", ""], ["name", "name"], ["ngx-datatable-header-template", ""], ["name", "tag"], ["name", "totalSearches"], ["name", "monetizedSearches"], ["name", "clicks"], ["name", "followOn"], ["name", "CTR"], ["name", "revenue"], [2, "padding-left", "35px"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 3, "click"], [3, "innerHTML"]],
        template: function ImgageAdvantageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Month to Date Stats");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Revenue: $103,201.26");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Revenue Pace: $131,285.19");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Profit: $21,109.59");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Profit Pace: $173,121.45");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Percentage Change: +27%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Last Month Stats");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Revenue: $113,542.23");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Profit: $14,121.39");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Percentage Change: +11%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ngx-datatable", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ngx-datatable-row-detail", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggle", function ImgageAdvantageComponent_Template_ngx_datatable_row_detail_toggle_41_listener($event) {
              return ctx.onDetailToggle($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ImgageAdvantageComponent_ng_template_43_Template, 6, 0, "ng-template", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ngx-datatable-column", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ImgageAdvantageComponent_ng_template_45_Template, 1, 4, "ng-template", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ngx-datatable-column", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ImgageAdvantageComponent_ng_template_47_Template, 1, 0, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, ImgageAdvantageComponent_ng_template_48_Template, 2, 1, "ng-template", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ngx-datatable-column", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ImgageAdvantageComponent_ng_template_50_Template, 1, 0, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, ImgageAdvantageComponent_ng_template_51_Template, 2, 1, "ng-template", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "ngx-datatable-column", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ImgageAdvantageComponent_ng_template_53_Template, 1, 0, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, ImgageAdvantageComponent_ng_template_54_Template, 3, 3, "ng-template", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ngx-datatable-column", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ImgageAdvantageComponent_ng_template_56_Template, 1, 0, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, ImgageAdvantageComponent_ng_template_57_Template, 3, 3, "ng-template", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ngx-datatable-column", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, ImgageAdvantageComponent_ng_template_59_Template, 1, 0, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, ImgageAdvantageComponent_ng_template_60_Template, 3, 3, "ng-template", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ngx-datatable-column", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, ImgageAdvantageComponent_ng_template_62_Template, 1, 0, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, ImgageAdvantageComponent_ng_template_63_Template, 2, 1, "ng-template", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "ngx-datatable-column", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, ImgageAdvantageComponent_ng_template_65_Template, 2, 1, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, ImgageAdvantageComponent_ng_template_66_Template, 2, 4, "ng-template", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "ngx-datatable-column", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, ImgageAdvantageComponent_ng_template_68_Template, 1, 0, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, ImgageAdvantageComponent_ng_template_69_Template, 3, 4, "ng-template", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnMode", "force")("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("scrollbarH", true)("rows", ctx.rows);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowHeight", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 50)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);
          }
        },
        directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListItem"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__["MatDivider"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableRowDetailDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableRowDetailTemplateDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableColumnCellDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableColumnHeaderDirective"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL2ltZ2FnZS1hZHZhbnRhZ2UvaW1nYWdlLWFkdmFudGFnZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImgageAdvantageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-imgage-advantage',
            templateUrl: './imgage-advantage.component.html',
            styleUrls: ['./imgage-advantage.component.scss']
          }]
        }], function () {
          return [];
        }, {
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['expandableTable']
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/modules/admin-reporting/lyons/lyons.component.ts":
    /*!******************************************************************!*\
      !*** ./src/app/modules/admin-reporting/lyons/lyons.component.ts ***!
      \******************************************************************/

    /*! exports provided: LyonsComponent */

    /***/
    function srcAppModulesAdminReportingLyonsLyonsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LyonsComponent", function () {
        return LyonsComponent;
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


      var src_app_shared_service_admin_stats_lyon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/service/admin-stats/lyon.service */
      "./src/app/shared/service/admin-stats/lyon.service.ts");
      /* harmony import */


      var _shared_service_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared/service/users.service */
      "./src/app/shared/service/users.service.ts");
      /* harmony import */


      var src_app_modules_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/modules/tag-management/tag-management.service */
      "./src/app/modules/tag-management/tag-management.service.ts");
      /* harmony import */


      var _shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../shared/modules/reporting-filtering/reporting-filtering.component */
      "./src/app/shared/modules/reporting-filtering/reporting-filtering.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var _shared_modules_reporting_revenue_chart_reporting_revenue_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shared/modules/reporting-revenue-chart/reporting-revenue-chart.component */
      "./src/app/shared/modules/reporting-revenue-chart/reporting-revenue-chart.component.ts");
      /* harmony import */


      var _shared_modules_summary_metrics_summary_metrics_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../shared/modules/summary-metrics/summary-metrics.component */
      "./src/app/shared/modules/summary-metrics/summary-metrics.component.ts");

      var _c0 = ["expandableTable"];

      function LyonsComponent_app_reporting_revenue_chart_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-reporting-revenue-chart", 22);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("chartData", ctx_r0.chartData);
        }
      }

      function LyonsComponent_app_summary_metrics_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-summary-metrics", 23);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("summaryMetricsData", ctx_r1.summaryMetricsData);
        }
      }

      function LyonsComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Test");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LyonsComponent_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LyonsComponent_ng_template_9_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33);

            var row_r30 = ctx.row;

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r32.toggleExpandRow(row_r30);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var expanded_r31 = ctx.expanded;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("datatable-icon-right", !expanded_r31)("datatable-icon-down", expanded_r31);
        }
      }

      function LyonsComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Date ");
        }
      }

      function LyonsComponent_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r35 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r35));
        }
      }

      function LyonsComponent_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Subid ");
        }
      }

      function LyonsComponent_ng_template_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r37 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r37);
        }
      }

      function LyonsComponent_ng_template_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Tag ");
        }
      }

      function LyonsComponent_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r39 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r39);
        }
      }

      function LyonsComponent_ng_template_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Publisher ");
        }
      }

      function LyonsComponent_ng_template_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r41 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r41);
        }
      }

      function LyonsComponent_ng_template_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Searches ");
        }
      }

      function LyonsComponent_ng_template_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r43 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r43));
        }
      }

      function LyonsComponent_ng_template_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Bid Searches ");
        }
      }

      function LyonsComponent_ng_template_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r45 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r45));
        }
      }

      function LyonsComponent_ng_template_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Clicks ");
        }
      }

      function LyonsComponent_ng_template_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r47 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r47));
        }
      }

      function LyonsComponent_ng_template_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " BiddedCTR ");
        }
      }

      function LyonsComponent_ng_template_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r49 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r49, "2.2-2") || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, 0, "2.2-2"));
        }
      }

      function LyonsComponent_ng_template_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " CTR ");
        }
      }

      function LyonsComponent_ng_template_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r51 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r51, "2.2-2") || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, 0, "2.2-2"));
        }
      }

      function LyonsComponent_ng_template_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Spilt ");
        }
      }

      function LyonsComponent_ng_template_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r53 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r53) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 3, 0, "1.0-0"));
        }
      }

      function LyonsComponent_ng_template_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Revenue ");
        }
      }

      function LyonsComponent_ng_template_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r55 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r55, "USD"));
        }
      }

      var LyonsComponent = /*#__PURE__*/function () {
        function LyonsComponent(lyonService, cdr, userService, tagService) {
          _classCallCheck(this, LyonsComponent);

          this.lyonService = lyonService;
          this.cdr = cdr;
          this.userService = userService;
          this.tagService = tagService;
          this.range = {
            startDate: '',
            endDate: ''
          };
          this.summary = {
            revenue: 0,
            profit: 0
          };
          this.columns = [{
            prop: 'name'
          }, {
            name: 'Gender'
          }];
          this.expanded = {};
          this.tagList = [];
          this.filteredLyonStat = [];
          this.selectedCompany = this.getSelectedCompanyFromLocalStorage();
        }

        _createClass(LyonsComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.getCompanyTags(this.selectedCompany);

                    case 2:
                      this.tagList = _context.sent;
                      this.rows = [];
                      _context.next = 6;
                      return this.getAllLyonStats(this.range.startDate, this.range.endDate);

                    case 6:
                      this.rows = _context.sent;
                      _context.next = 9;
                      return this.getChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 9:
                      this.chartData = _context.sent;
                      _context.next = 12;
                      return this.getSummaryMetrics(this.selectedCompany);

                    case 12:
                      this.summaryMetricsData = _context.sent;
                      this.refreshTable();

                    case 14:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "toggleExpandRow",
          value: function toggleExpandRow(row) {
            console.log('Toggled Expand Row!', row);
            this.table.rowDetail.toggleExpandRow(row);
          }
        }, {
          key: "onDetailToggle",
          value: function onDetailToggle(event) {
            console.log('Detail Toggled', event);
          }
        }, {
          key: "routeTester",
          value: function routeTester() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log('Testing Route');
                      this.lyonService.testingRoute().subscribe(function (response) {
                        console.log(response);
                      }), function (err) {
                        console.log(err);
                      };

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } //Gets the Selected Company from Local Storage

        }, {
          key: "getSelectedCompanyFromLocalStorage",
          value: function getSelectedCompanyFromLocalStorage() {
            return this.userService.getSelectedCompanyFromLocalStorage();
          } //get Tags with selected company

        }, {
          key: "getCompanyTags",
          value: function getCompanyTags(selectedCompany) {
            var companyId = selectedCompany.split("/")[1];
            return this.tagService.getCompanyTags(companyId).toPromise().then(function (response) {
              return response;
            })["catch"](function (error) {
              return error;
            });
          } //get Stat all

        }, {
          key: "getAllLyonStats",
          value: function getAllLyonStats(startDate, endDate) {
            var _this = this;

            return this.lyonService.getAllStats(startDate, endDate).toPromise().then(function (response) {
              _this.allstat = response;

              _this.allstat.map(function (resStat) {
                resStat.publisher = "No Publisher";
                resStat.tagname = "No Tag";
              }); // var allLyonStat = [];


              var _iterator = _createForOfIteratorHelper(_this.tagList),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var tagL = _step.value;

                  if (tagL.tag.advertiser == "lyons") {
                    var _iterator2 = _createForOfIteratorHelper(tagL.tag.subids),
                        _step2;

                    try {
                      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                        var tagSub = _step2.value;

                        if (tagSub.filterTag == "Contains") {
                          _this.allstat.map(function (stat) {
                            if (stat.subid.includes(tagSub.subid)) {
                              stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                              stat.tagname = tagL.tag.name;
                            }
                          });
                        } else if (tagSub.filterTag == "StartsWith") {
                          _this.allstat.map(function (stat) {
                            if (stat.subid.startsWith(tagSub.subid)) {
                              stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                              stat.tagname = tagL.tag.name;
                            }
                          });
                        } else if (tagSub.filterTag == "EndsWith") {
                          _this.allstat.map(function (stat) {
                            if (stat.subid.endsWith(tagSub.subid)) {
                              stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                              stat.tagname = tagL.tag.name;
                            }
                          });
                        } else if (tagSub.filterTag == "ExactValue") {
                          _this.allstat.map(function (stat) {
                            if (stat.subid == tagSub.subid) {
                              stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                              stat.tagname = tagL.tag.name;
                            }
                          });
                        }
                      }
                    } catch (err) {
                      _iterator2.e(err);
                    } finally {
                      _iterator2.f();
                    }
                  }
                } //duplicated remove

              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              var filtered_data = _this.allstat.filter(function (obj, pos, arr) {
                return arr.map(function (mapObj) {
                  return mapObj._id;
                }).indexOf(obj._id) == pos;
              });

              var helper = {};
              filtered_data.map(function (f) {
                f.revenue = parseFloat(f.revenue);
                f.ctr = parseFloat(f.ctr);
                f.biddedCtr = parseFloat(f.biddedCTR);
                f.split = parseFloat(f.split);
              }); //Calculate the sums and group data (while tracking count)

              var resultAll = filtered_data.reduce(function (prev, current) {
                var key = current.rptDate.toString() + '-' + current.subid;

                if (!helper[key]) {
                  helper[key] = Object.assign({}, current); // create a copy of o

                  helper[key].count = 1;
                  prev.push(helper[key]);
                } else {
                  helper[key].clicks += parseInt(current.clicks);
                  helper[key].searches += parseInt(current.searches);

                  if (current.biddedCtr) {
                    helper[key].biddedCtr += current.biddedCtr;
                  }

                  if (current.ctr) {
                    helper[key].ctr += current.ctr;
                  }

                  if (current.revenue) {
                    helper[key].revenue += current.revenue;
                  }

                  helper[key].biddedSearches += parseInt(current.biddedSearches);
                  helper[key].count += 1;
                  helper[key].split += parseInt(current.split); // helper[key].split_num = 70;
                }

                return prev;
              }, []);
              resultAll.map(function (item) {
                item.split = item.split / item.count;
              });
              return resultAll;
            })["catch"](function (error) {
              return error;
            });
          }
        }, {
          key: "updateAllLyonStats",
          value: function updateAllLyonStats(company, startDate, endDate) {
            this.lyonService.updateAllLyonStats(company, startDate, endDate).subscribe(function (response) {
              console.log(response);
            }), function (err) {
              console.log(err);
            };
          }
        }, {
          key: "updateReportingFiltering",
          value: function updateReportingFiltering(range) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      // console.log('Update report filtering....');
                      this.range = range;
                      _context3.next = 3;
                      return this.getAllLyonStats(this.range.startDate, this.range.endDate);

                    case 3:
                      this.rows = _context3.sent;
                      _context3.next = 6;
                      return this.getChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 6:
                      this.chartData = _context3.sent;
                      _context3.next = 9;
                      return this.getSummaryMetrics(this.selectedCompany);

                    case 9:
                      this.summaryMetricsData = _context3.sent;
                      this.refreshTable();

                    case 11:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "refreshTable",
          value: function refreshTable() {
            this.cdr.markForCheck();
          }
        }, {
          key: "getSummaryMetrics",
          value: function getSummaryMetrics(company) {
            var _this2 = this;

            return this.lyonService.getSummaryMetrics(company).toPromise().then(function (response) {
              _this2.currentMonthData = response[0].summaryMetrics;
              _this2.beforeMonthData = response[0].lastMonthStat;
              _this2.twoBeforeMonthData = response[0].twoLastMonthStat;
              var dayInCurrentMonth = response[0].dayInCurrentMonth;
              var dayInBeforeMonth = response[0].dayInBeforeMonth;
              var dayInTwoBeforeMonth = response[0].dayInTwoBeforeMonth; // var summaryCurrentStat = [];
              //current data get part
              // for (var tagL of this.tagList) {
              //   for (var tagSub of tagL.tag.subids) {
              //     if(tagSub.filterTag =="Contains") {
              //       summaryCurrentStat = summaryCurrentStat.concat(this.currentMonthData.filter(stat => stat.subid.includes(tagSub.subid)))
              //       summaryCurrentStat.map(stat => {
              //         stat.publisher = tagL.user ? tagL.user[0].fullname : ""
              //         stat.tagname = tagL.tag.name
              //       })
              //     } else if (tagSub.filterTag =="StartsWith") {
              //       summaryCurrentStat = summaryCurrentStat.concat(this.currentMonthData.filter(stat => stat.subid.startsWith(tagSub.subid)))
              //     } else if (tagSub.filterTag =="EndsWith") {
              //       summaryCurrentStat = summaryCurrentStat.concat(this.currentMonthData.filter(stat => stat.subid.endsWith(tagSub.subid)))
              //     } else if (tagSub.filterTag =="ExactValue") {
              //       summaryCurrentStat = summaryCurrentStat.concat(this.currentMonthData.filter(stat => stat.subid == tagSub.subid ))
              //     }
              //   }
              // }
              // //duplicated remove
              // let filter_data = summaryCurrentStat.filter((obj, pos, arr) => {
              //   return arr
              //     .map(mapObj => mapObj._id)
              //     .indexOf(obj._id) == pos;
              // });

              var helperSummary = {};

              _this2.currentMonthData.map(function (f) {
                f.revenue = parseFloat(f.revenue); // f.ctr = parseFloat(f.ctr);
                // f.biddedCtr = parseFloat(f.biddedCTR);
              });

              var resultSummary = _this2.currentMonthData.reduce(function (r, o) {
                var key = o.rptDate;

                if (!helperSummary[key]) {
                  helperSummary[key] = Object.assign({}, o); // create a copy of o

                  r.push(helperSummary[key]);
                } else {
                  helperSummary[key].searches += parseInt(o.searches);

                  if (o.revenue) {
                    helperSummary[key].revenue += o.revenue;
                  }
                }

                return r;
              }, []);

              var monthRevenue = 0;
              var monthProfit = 0;
              var monthRevenuePace = 0;
              var profitPace = 0;

              var _iterator3 = _createForOfIteratorHelper(resultSummary),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var sumData = _step3.value;
                  monthRevenue += sumData.revenue;
                  monthProfit += sumData.revenue * (100 - sumData.split) * 0.01;
                  monthRevenuePace += sumData.revenue / resultSummary.length * dayInCurrentMonth;
                  profitPace += sumData.revenue * (100 - sumData.split) * 0.01 / resultSummary.length * dayInCurrentMonth;
                } //before month data get part
                // var summaryBeforeStat = [];
                // for (var tagL of this.tagList) {
                //   for (var tagSub of tagL.tag.subids) {
                //     if(tagSub.filterTag =="Contains") {
                //       summaryBeforeStat = summaryBeforeStat.concat(this.beforeMonthData.filter(stat => stat.subid.includes(tagSub.subid)))
                //       summaryBeforeStat.map(stat => {
                //         stat.publisher = tagL.user ? tagL.user[0].fullname : ""
                //         stat.tagname = tagL.tag.name
                //       })
                //     } else if (tagSub.filterTag =="StartsWith") {
                //       summaryBeforeStat = summaryBeforeStat.concat(this.beforeMonthData.filter(stat => stat.subid.startsWith(tagSub.subid)))
                //     } else if (tagSub.filterTag =="EndsWith") {
                //       summaryBeforeStat = summaryBeforeStat.concat(this.beforeMonthData.filter(stat => stat.subid.endsWith(tagSub.subid)))
                //     } else if (tagSub.filterTag =="ExactValue") {
                //       summaryBeforeStat = summaryBeforeStat.concat(this.beforeMonthData.filter(stat => stat.subid == tagSub.subid ))
                //     }
                //   }
                // }
                // // //duplicated remove
                // let filt_data = summaryBeforeStat.filter((obj, pos, arr) => {
                //   return arr
                //     .map(mapObj => mapObj._id)
                //     .indexOf(obj._id) == pos;
                // });

              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

              var helperBeforeSummary = {};

              _this2.beforeMonthData.map(function (f) {
                f.revenue = parseFloat(f.revenue); // f.ctr = parseFloat(f.ctr);
                // f.biddedCtr = parseFloat(f.biddedCTR);
              });

              var resultBeforeSummary = _this2.beforeMonthData.reduce(function (r, o) {
                var key = o.rptDate;

                if (!helperBeforeSummary[key]) {
                  helperBeforeSummary[key] = Object.assign({}, o); // create a copy of o

                  r.push(helperBeforeSummary[key]);
                } else {
                  helperBeforeSummary[key].searches += parseInt(o.searches);

                  if (o.revenue) {
                    helperBeforeSummary[key].revenue += o.revenue;
                  }
                }

                return r;
              }, []);

              var monthBeforeRevenue = 0;
              var monthBeforeProfit = 0;
              var monthBeforeRevenuePace = 0;
              var profitBeforePace = 0;

              var _iterator4 = _createForOfIteratorHelper(resultBeforeSummary),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var sumBeforeData = _step4.value;
                  monthBeforeRevenue += sumBeforeData.revenue;
                  monthBeforeProfit += sumBeforeData.revenue * (100 - sumBeforeData.split) * 0.01;
                  monthBeforeRevenuePace += sumBeforeData.revenue / resultBeforeSummary.length * dayInBeforeMonth;
                  profitBeforePace += sumBeforeData.revenue * (100 - sumBeforeData.split) * 0.01 / resultBeforeSummary.length * dayInBeforeMonth;
                } //tow before month data get part
                // var summaryTwoBeforeStat = [];
                // for (var tagL of this.tagList) {
                //   for (var tagSub of tagL.tag.subids) {
                //     if(tagSub.filterTag =="Contains") {
                //       summaryTwoBeforeStat = summaryTwoBeforeStat.concat(this.twoBeforeMonthData.filter(stat => stat.subid.includes(tagSub.subid)))
                //       summaryTwoBeforeStat.map(stat => {
                //         stat.publisher = tagL.user ? tagL.user[0].fullname : ""
                //         stat.tagname = tagL.tag.name
                //       })
                //     } else if (tagSub.filterTag =="StartsWith") {
                //       summaryTwoBeforeStat = summaryTwoBeforeStat.concat(this.twoBeforeMonthData.filter(stat => stat.subid.startsWith(tagSub.subid)))
                //     } else if (tagSub.filterTag =="EndsWith") {
                //       summaryTwoBeforeStat = summaryTwoBeforeStat.concat(this.twoBeforeMonthData.filter(stat => stat.subid.endsWith(tagSub.subid)))
                //     } else if (tagSub.filterTag =="ExactValue") {
                //       summaryTwoBeforeStat = summaryTwoBeforeStat.concat(this.twoBeforeMonthData.filter(stat => stat.subid == tagSub.subid ))
                //     }
                //   }
                // }
                // // //duplicated remove
                // let filter_two_data = summaryTwoBeforeStat.filter((obj, pos, arr) => {
                //   return arr
                //     .map(mapObj => mapObj._id)
                //     .indexOf(obj._id) == pos;
                // });

              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }

              var helperTwoBeforeSummary = {};

              _this2.twoBeforeMonthData.map(function (f) {
                f.revenue = parseFloat(f.revenue); // f.ctr = parseFloat(f.ctr);
                // f.biddedCtr = parseFloat(f.biddedCTR);
              });

              var resultTwoBeforeSummary = _this2.twoBeforeMonthData.reduce(function (r, o) {
                var key = o.rptDate;

                if (!helperTwoBeforeSummary[key]) {
                  helperTwoBeforeSummary[key] = Object.assign({}, o); // create a copy of o

                  r.push(helperTwoBeforeSummary[key]);
                } else {
                  helperTwoBeforeSummary[key].searches += parseInt(o.searches);

                  if (o.revenue) {
                    helperTwoBeforeSummary[key].revenue += o.revenue;
                  }
                }

                return r;
              }, []);

              var monthTwoBeforeRevenue = 0;
              var monthTwoBeforeProfit = 0;
              var monthTwoBeforeRevenuePace = 0;
              var profitTwoBeforePace = 0;

              var _iterator5 = _createForOfIteratorHelper(resultTwoBeforeSummary),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var sumTwoBeforeData = _step5.value;
                  monthTwoBeforeRevenue += sumTwoBeforeData.revenue;
                  monthTwoBeforeProfit += sumTwoBeforeData.revenue * (100 - sumTwoBeforeData.split) * 0.01;
                  monthTwoBeforeRevenuePace += sumTwoBeforeData.revenue / resultTwoBeforeSummary.length * dayInTwoBeforeMonth;
                  profitTwoBeforePace += sumTwoBeforeData.revenue * (100 - sumTwoBeforeData.split) * 0.01 / resultTwoBeforeSummary.length * dayInTwoBeforeMonth;
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }

              var currentPercentPace = 0;
              var lastPercentPace = 0;

              if (profitBeforePace != 0) {
                currentPercentPace = (profitPace - profitBeforePace) / profitBeforePace * 100;
              }

              if (profitTwoBeforePace != 0) {
                lastPercentPace = (profitBeforePace - profitTwoBeforePace) / profitTwoBeforePace * 100;
              }

              var summaryFinalData = [];
              summaryFinalData.push({
                summaryMetrics: [{
                  revenue: monthRevenue,
                  revenuePace: monthRevenuePace,
                  profit: monthProfit,
                  profitPace: profitPace,
                  percentPace: currentPercentPace
                }],
                lastMonthStat: [{
                  revenue: monthBeforeRevenue,
                  revenuePace: monthBeforeRevenuePace,
                  profit: monthBeforeProfit,
                  profitPace: profitBeforePace,
                  percentPace: lastPercentPace
                }]
              });
              var allSummary = {};
              allSummary['summary'] = summaryFinalData;
              return allSummary; // this.combineSummaryMetrics(response);
            })["catch"](function (error) {
              return error;
            });
          }
        }, {
          key: "getChartMetrics",
          value: function getChartMetrics(company, startDate, endDate) {
            var _this3 = this;

            return this.lyonService.getAllStats(startDate, endDate).toPromise().then(function (response) {
              var sortResponse = response.slice().sort(function (a, b) {
                return a.rptDate - b.rptDate;
              });
              _this3.allChart = sortResponse; // var chartAllLyonStat = [];
              // for (var tagL of this.tagList) {
              //   for (var tagSub of tagL.tag.subids) {
              //     if(tagSub.filterTag =="Contains") {
              //       chartAllLyonStat = chartAllLyonStat.concat(this.allChart.filter(stat => stat.subid.includes(tagSub.subid)))
              //       chartAllLyonStat.map(stat => {
              //         stat.publisher = tagL.user ? tagL.user[0].fullname : ""
              //         stat.tagname = tagL.tag.name
              //       })
              //     } else if (tagSub.filterTag =="StartsWith") {
              //       chartAllLyonStat = chartAllLyonStat.concat(this.allChart.filter(stat => stat.subid.startsWith(tagSub.subid)))
              //       chartAllLyonStat.map(stat => {
              //         stat.publisher = tagL.user ? tagL.user[0].fullname : ""
              //         stat.tagname = tagL.tag.name
              //       })
              //     } else if (tagSub.filterTag =="EndsWith") {
              //       chartAllLyonStat = chartAllLyonStat.concat(this.allChart.filter(stat => stat.subid.endsWith(tagSub.subid)))
              //       chartAllLyonStat.map(stat => {
              //         stat.publisher = tagL.user ? tagL.user[0].fullname : ""
              //         stat.tagname = tagL.tag.name
              //       })
              //     } else if (tagSub.filterTag =="ExactValue") {
              //       chartAllLyonStat = chartAllLyonStat.concat(this.allChart.filter(stat => stat.subid == tagSub.subid ))
              //       chartAllLyonStat.map(stat => {
              //         stat.publisher = tagL.user ? tagL.user[0].fullname : ""
              //         stat.tagname = tagL.tag.name
              //       })
              //     }
              //   }
              // }
              //duplicated remove
              // let filter_data = chartAllLyonStat.filter((obj, pos, arr) => {
              //   return arr
              //     .map(mapObj => mapObj._id)
              //     .indexOf(obj._id) == pos;
              // });

              var helperChart = {};

              _this3.allChart.map(function (f) {
                f.revenue = parseFloat(f.revenue);
                f.ctr = parseFloat(f.ctr);
                f.biddedCtr = parseFloat(f.biddedCTR);
              });

              var resultChart = _this3.allChart.reduce(function (r, o) {
                var key = o.rptDate.toString();

                if (!helperChart[key]) {
                  helperChart[key] = Object.assign({}, o); // create a copy of o

                  r.push(helperChart[key]);
                } else {
                  helperChart[key].searches += parseInt(o.searches);

                  if (o.revenue) {
                    helperChart[key].revenue += o.revenue;
                  }
                }

                return r;
              }, []);

              var revenuePerDayVal = [];
              var datesOfRevenueVal = [];
              var searchesPerDayVal = [];
              var chartDataValue = {};

              var _iterator6 = _createForOfIteratorHelper(resultChart),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var resVal = _step6.value;
                  revenuePerDayVal.push(resVal.revenue);
                  datesOfRevenueVal.push(resVal.rptDate);
                  searchesPerDayVal.push(resVal.searches);
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }

              chartDataValue['revenuePerDay'] = revenuePerDayVal;
              chartDataValue['datesOfRevenue'] = datesOfRevenueVal;
              chartDataValue['searchesPerDay'] = searchesPerDayVal;
              return chartDataValue;
            })["catch"](function (error) {
              return error;
            });
          }
        }, {
          key: "combineSummaryMetrics",
          value: function combineSummaryMetrics(metrics) {
            var _this4 = this;

            metrics.summary.keys.forEach(function (element) {
              _this4.summary.revenue += element.revenue;
              _this4.summary.profit += element.revenue * ((100 - element.split) * 0.01);
            });
          }
        }, {
          key: "createChartData",
          value: function createChartData(stats) {}
        }]);

        return LyonsComponent;
      }();

      LyonsComponent.ɵfac = function LyonsComponent_Factory(t) {
        return new (t || LyonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_admin_stats_lyon_service__WEBPACK_IMPORTED_MODULE_2__["LyonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_service_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_modules_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__["TagManagementService"]));
      };

      LyonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: LyonsComponent,
        selectors: [["app-lyons"]],
        viewQuery: function LyonsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 43,
        vars: 14,
        consts: [[3, "onDatesPicked"], [3, "chartData", 4, "ngIf"], [3, "summaryMetricsData", 4, "ngIf"], [1, "material", "fullscreen", "expandable", 2, "top", "30px", "height", "500px", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "rows"], ["expandableTable", ""], [3, "rowHeight", "toggle"], ["myDetailRow", ""], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["ngx-datatable-cell-template", ""], ["name", "rptDate"], ["ngx-datatable-header-template", ""], ["name", "subid"], ["name", "tagname"], ["name", "publisher"], ["name", "searches"], ["name", "biddedSearches"], ["name", "clicks"], ["name", "biddedCtr"], ["name", "ctr"], ["name", "split"], ["name", "revenue"], [3, "chartData"], [3, "summaryMetricsData"], [2, "padding-left", "35px"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 3, "click"]],
        template: function LyonsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-reporting-filtering", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onDatesPicked", function LyonsComponent_Template_app_reporting_filtering_onDatesPicked_0_listener($event) {
              return ctx.updateReportingFiltering($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LyonsComponent_app_reporting_revenue_chart_1_Template, 1, 1, "app-reporting-revenue-chart", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LyonsComponent_app_summary_metrics_2_Template, 1, 1, "app-summary-metrics", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ngx-datatable", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ngx-datatable-row-detail", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("toggle", function LyonsComponent_Template_ngx_datatable_row_detail_toggle_5_listener($event) {
              return ctx.onDetailToggle($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LyonsComponent_ng_template_7_Template, 6, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ngx-datatable-column", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LyonsComponent_ng_template_9_Template, 1, 4, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ngx-datatable-column", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LyonsComponent_ng_template_11_Template, 1, 0, "ng-template", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, LyonsComponent_ng_template_12_Template, 3, 3, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ngx-datatable-column", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, LyonsComponent_ng_template_14_Template, 1, 0, "ng-template", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, LyonsComponent_ng_template_15_Template, 2, 1, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ngx-datatable-column", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, LyonsComponent_ng_template_17_Template, 1, 0, "ng-template", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, LyonsComponent_ng_template_18_Template, 2, 1, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ngx-datatable-column", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, LyonsComponent_ng_template_20_Template, 1, 0, "ng-template", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, LyonsComponent_ng_template_21_Template, 2, 1, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ngx-datatable-column", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, LyonsComponent_ng_template_23_Template, 1, 0, "ng-template", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, LyonsComponent_ng_template_24_Template, 3, 3, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ngx-datatable-column", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, LyonsComponent_ng_template_26_Template, 1, 0, "ng-template", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, LyonsComponent_ng_template_27_Template, 3, 3, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ngx-datatable-column", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, LyonsComponent_ng_template_29_Template, 1, 0, "ng-template", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, LyonsComponent_ng_template_30_Template, 3, 3, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ngx-datatable-column", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, LyonsComponent_ng_template_32_Template, 1, 0, "ng-template", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, LyonsComponent_ng_template_33_Template, 4, 7, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ngx-datatable-column", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, LyonsComponent_ng_template_35_Template, 1, 0, "ng-template", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, LyonsComponent_ng_template_36_Template, 4, 7, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ngx-datatable-column", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, LyonsComponent_ng_template_38_Template, 1, 0, "ng-template", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, LyonsComponent_ng_template_39_Template, 4, 6, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ngx-datatable-column", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, LyonsComponent_ng_template_41_Template, 1, 0, "ng-template", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, LyonsComponent_ng_template_42_Template, 3, 4, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.chartData);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.summaryMetricsData);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnMode", "force")("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("rows", ctx.rows);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowHeight", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 30)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);
          }
        },
        directives: [_shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_5__["ReportingFilteringComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableRowDetailDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableRowDetailTemplateDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnCellDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnHeaderDirective"], _shared_modules_reporting_revenue_chart_reporting_revenue_chart_component__WEBPACK_IMPORTED_MODULE_8__["ReportingRevenueChartComponent"], _shared_modules_summary_metrics_summary_metrics_component__WEBPACK_IMPORTED_MODULE_9__["SummaryMetricsComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL2x5b25zL2x5b25zLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LyonsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-lyons',
            templateUrl: './lyons.component.html',
            styleUrls: ['./lyons.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_shared_service_admin_stats_lyon_service__WEBPACK_IMPORTED_MODULE_2__["LyonService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _shared_service_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]
          }, {
            type: src_app_modules_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__["TagManagementService"]
          }];
        }, {
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['expandableTable']
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/modules/admin-reporting/manual-update/manual-update.component.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/modules/admin-reporting/manual-update/manual-update.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: ManualUpdateComponent */

    /***/
    function srcAppModulesAdminReportingManualUpdateManualUpdateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManualUpdateComponent", function () {
        return ManualUpdateComponent;
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


      var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var src_app_shared_service_admin_stats_update_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/service/admin-stats/update.service */
      "./src/app/shared/service/admin-stats/update.service.ts");
      /* harmony import */


      var src_app_modules_company_management_company_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/modules/company-management/company-management.service */
      "./src/app/modules/company-management/company-management.service.ts");
      /* harmony import */


      var src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/modules/auth/_services/auth.service */
      "./src/app/modules/auth/_services/auth.service.ts");
      /* harmony import */


      var src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/service/users.service */
      "./src/app/shared/service/users.service.ts");
      /* harmony import */


      var src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/service/notification.service */
      "./src/app/shared/service/notification.service.ts");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

      function ManualUpdateComponent_mat_option_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var reportItem_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", reportItem_r7.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", reportItem_r7.viewValue, " ");
        }
      }

      function ManualUpdateComponent_mat_error_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid start date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ManualUpdateComponent_mat_error_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid end date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ManualUpdateComponent_mat_error_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Start Date Required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ManualUpdateComponent_mat_error_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "End Date Required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ManualUpdateComponent_mat_option_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dateRange_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", dateRange_r8.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dateRange_r8.viewValue, " ");
        }
      }

      var ManualUpdateComponent = /*#__PURE__*/function () {
        function ManualUpdateComponent(manualUpdateService, fb, companyService, authService, userService, notification) {
          _classCallCheck(this, ManualUpdateComponent);

          this.manualUpdateService = manualUpdateService;
          this.fb = fb;
          this.companyService = companyService;
          this.authService = authService;
          this.userService = userService;
          this.notification = notification;
          this.reportTypeData = [];
          this.currentUser = this.authService.currentUserValue;
          this.companySelected = this.getSelectedCompanyLocalStorage();
        }

        _createClass(ManualUpdateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getReportingProviderList();
            this.manaulUpFG = this.fb.group({
              reportType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              preSelectValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
            }); //Get the all PRESELECT ranges

            this.preSetDateRanges = this.getDateRanges();
            this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
            }); //Selected range of date picker

            this.selectedRange = {
              startDate: '',
              endDate: ''
            }; //Starting value of mat select

            this.preSelectValue = 'last7days'; //Gets the true start and end date values in date format

            this.preSelectDates = this.getPreSetDateRange(this.preSelectValue); //Manually updates the mat date picker with new start and end dates

            this.updateDatePickerRange(this.preSelectDates.startDate, this.preSelectDates.endDate);
          } //get Report Providers in Current Company

        }, {
          key: "getReportingProviderList",
          value: function getReportingProviderList() {
            var _this5 = this;

            if (this.companySelected) {
              this.companyService.getOneCompany(this.companySelected.split('/')[1]).subscribe(function (res) {
                res.reportingProviders.map(function (report) {
                  _this5.reportTypeData.push({
                    value: report.reportingProvider,
                    viewValue: report.reportingProvider
                  });
                });
              });
            }
          } //Gets the Selected Company from Local Storage

        }, {
          key: "getSelectedCompanyLocalStorage",
          value: function getSelectedCompanyLocalStorage() {
            return this.userService.getSelectedCompanyFromLocalStorage();
          }
        }, {
          key: "onReportSubmit",
          value: function onReportSubmit() {
            var _this6 = this;

            if (this.manaulUpFG.valid) {
              this.manaulUpFG.addControl('company', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required));
              this.manaulUpFG.patchValue({
                company: this.companySelected
              });
              var reportTypeValue = this.manaulUpFG.value['reportType'];
              this.manualUpdateService.updateManualStats(this.manaulUpFG.value).subscribe(function (response) {
                var checkExist = _this6.isObjectEmpty(response);

                if (!checkExist) {
                  _this6.notification.showSuccess("".concat(reportTypeValue, " data successfully updated!"), "");
                } else {
                  _this6.notification.showWarning("".concat(reportTypeValue, " data not existed!"), "");
                }
              });
            }
          }
        }, {
          key: "isObjectEmpty",
          value: function isObjectEmpty(obj) {
            return Object.keys(obj).length === 0;
          } //Grabbing the mat selector options

        }, {
          key: "getDateRanges",
          value: function getDateRanges() {
            return [{
              value: 'today',
              viewValue: 'Today'
            }, {
              value: 'yesterday',
              viewValue: 'Yesterday'
            }, {
              value: 'last7days',
              viewValue: 'Last 7 Days'
            }, {
              value: 'last30days',
              viewValue: 'Last 30 Days'
            }, {
              value: 'monthToDate',
              viewValue: 'Month to Date'
            }, {
              value: 'lastMonth',
              viewValue: 'Last Month'
            }, {
              value: 'custom',
              viewValue: 'Custom'
            }];
          } //Detects when datepicker change is updated

        }, {
          key: "changeDatePicker",
          value: function changeDatePicker() {
            if (this.range.valid) {
              this.selectedRange.startDate = this.range.value.startDate;
              this.selectedRange.endDate = this.range.value.endDate;
              this.manaulUpFG.patchValue({
                startDate: moment__WEBPACK_IMPORTED_MODULE_2__(this.range.value.startDate, 'MM-DD-YYYY').toDate(),
                endDate: moment__WEBPACK_IMPORTED_MODULE_2__(this.range.value.endDate, 'MM-DD-YYYY').toDate()
              });
              this.preSelectValue = 'custom';
            }
          } //Monitors mat selector, if changed (and not custom). updates the actual date picker

        }, {
          key: "onPreSetRangeSelectChange",
          value: function onPreSetRangeSelectChange(selection) {
            if (selection.value !== 'custom') {
              this.preSelectValue = selection.value;
              this.preSelectDates = this.getPreSetDateRange(this.preSelectValue); //Updates the date picker range manually

              this.updateDatePickerRange(this.preSelectDates.startDate, this.preSelectDates.endDate);
            }
          } //Updates the date picker range manually
          //Params startDate and endDate

        }, {
          key: "updateDatePickerRange",
          value: function updateDatePickerRange(startDate, endDate) {
            this.manaulUpFG.patchValue({
              startDate: moment__WEBPACK_IMPORTED_MODULE_2__(startDate, 'MM-DD-YYYY').toDate(),
              endDate: moment__WEBPACK_IMPORTED_MODULE_2__(endDate, 'MM-DD-YYYY').toDate()
            });
            this.range.patchValue({
              startDate: moment__WEBPACK_IMPORTED_MODULE_2__(startDate, 'MM-DD-YYYY').toDate(),
              endDate: moment__WEBPACK_IMPORTED_MODULE_2__(endDate, 'MM-DD-YYYY').toDate()
            });
          } //Convert mat selector options and return actual dates

        }, {
          key: "getPreSetDateRange",
          value: function getPreSetDateRange(selection) {
            var dateFormat = 'MM-DD-YYYY';

            switch (selection) {
              case 'today':
                return {
                  startDate: moment__WEBPACK_IMPORTED_MODULE_2__().utc().startOf('day').format(dateFormat),
                  endDate: moment__WEBPACK_IMPORTED_MODULE_2__().utc().endOf('day').format(dateFormat)
                };

              case 'yesterday':
                return {
                  startDate: moment__WEBPACK_IMPORTED_MODULE_2__().subtract(1, 'days').utc().startOf('day').format(dateFormat),
                  endDate: moment__WEBPACK_IMPORTED_MODULE_2__().subtract(1, 'days').utc().endOf('day').format(dateFormat)
                };

              case 'last7days':
                return {
                  startDate: moment__WEBPACK_IMPORTED_MODULE_2__().subtract(7, 'days').utc().startOf('day').format(dateFormat),
                  endDate: moment__WEBPACK_IMPORTED_MODULE_2__().utc().endOf('day').format(dateFormat)
                };

              case 'last30days':
                return {
                  startDate: moment__WEBPACK_IMPORTED_MODULE_2__().subtract(30, 'days').utc().startOf('day').format(dateFormat),
                  endDate: moment__WEBPACK_IMPORTED_MODULE_2__().utc().endOf('day').format(dateFormat)
                };

              case 'monthToDate':
                return {
                  startDate: moment__WEBPACK_IMPORTED_MODULE_2__().startOf('month').utc().startOf('day').format(dateFormat),
                  endDate: moment__WEBPACK_IMPORTED_MODULE_2__().utc().endOf('day').format(dateFormat)
                };

              case 'lastMonth':
                return {
                  startDate: moment__WEBPACK_IMPORTED_MODULE_2__().subtract(1, 'months').startOf('month').utc().startOf('day').format(dateFormat),
                  endDate: moment__WEBPACK_IMPORTED_MODULE_2__().utc().subtract(1, 'months').endOf('month').format(dateFormat)
                };
            }
          }
        }]);

        return ManualUpdateComponent;
      }();

      ManualUpdateComponent.ɵfac = function ManualUpdateComponent_Factory(t) {
        return new (t || ManualUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_admin_stats_update_service__WEBPACK_IMPORTED_MODULE_3__["ManualUpdateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_company_management_company_management_service__WEBPACK_IMPORTED_MODULE_4__["CompanyManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]));
      };

      ManualUpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ManualUpdateComponent,
        selectors: [["app-manual-update"]],
        decls: 36,
        vars: 11,
        consts: [["id", "manaulUpForm", 1, "example-container", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xl-6"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], ["matNativeControl", "", "placeholder", "Select Report", "formControlName", "reportType"], [3, "value", 4, "ngFor", "ngForOf"], [3, "rangePicker", "formGroup", "dateChange"], ["matStartDate", "", "formControlName", "startDate", "placeholder", "Start date", "required", ""], ["matEndDate", "", "formControlName", "endDate", "placeholder", "End date", "required", "", 3, "dateChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [4, "ngIf"], ["formControlName", "preSelectValue", 3, "ngModel", "ngModelChange", "selectionChange"], ["mat-raised-button", "", "color", "primary", "type", "submit"], [3, "value"]],
        template: function ManualUpdateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ManualUpdateComponent_Template_form_ngSubmit_0_listener() {
              return ctx.onReportSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Report Update");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Report Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ManualUpdateComponent_mat_option_13_Template, 2, 2, "mat-option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Enter a custom date range");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-date-range-input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function ManualUpdateComponent_Template_mat_date_range_input_dateChange_17_listener() {
              return ctx.changeDatePicker();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function ManualUpdateComponent_Template_input_dateChange_19_listener() {
              return ctx.changeDatePicker();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "mat-datepicker-toggle", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-date-range-picker", null, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ManualUpdateComponent_mat_error_23_Template, 2, 0, "mat-error", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ManualUpdateComponent_mat_error_24_Template, 2, 0, "mat-error", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ManualUpdateComponent_mat_error_25_Template, 2, 0, "mat-error", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ManualUpdateComponent_mat_error_26_Template, 2, 0, "mat-error", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Preset Date Range");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-select", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManualUpdateComponent_Template_mat_select_ngModelChange_30_listener($event) {
              return ctx.preSelectValue = $event;
            })("selectionChange", function ManualUpdateComponent_Template_mat_select_selectionChange_30_listener($event) {
              return ctx.onPreSetRangeSelectChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ManualUpdateComponent_mat_option_31_Template, 2, 2, "mat-option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Update Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.manaulUpFG);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reportTypeData);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rangePicker", _r1)("formGroup", ctx.range);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.manaulUpFG.controls.startDate.hasError("matStartDateInvalid"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.manaulUpFG.controls.endDate.hasError("matEndDateInvalid"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.manaulUpFG.controls.startDate.errors == null ? null : ctx.manaulUpFG.controls.startDate.errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.manaulUpFG.controls.endDate.errors == null ? null : ctx.manaulUpFG.controls.endDate.errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.preSelectValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.preSetDateRanges);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDateRangeInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatStartDate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatEndDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDateRangePicker"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL21hbnVhbC11cGRhdGUvbWFudWFsLXVwZGF0ZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManualUpdateComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-manual-update',
            templateUrl: './manual-update.component.html',
            styleUrls: ['./manual-update.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_shared_service_admin_stats_update_service__WEBPACK_IMPORTED_MODULE_3__["ManualUpdateService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_modules_company_management_company_management_service__WEBPACK_IMPORTED_MODULE_4__["CompanyManagementService"]
          }, {
            type: src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
          }, {
            type: src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"]
          }, {
            type: src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/admin-reporting/media-net/media-net.component.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/modules/admin-reporting/media-net/media-net.component.ts ***!
      \**************************************************************************/

    /*! exports provided: MediaNetComponent */

    /***/
    function srcAppModulesAdminReportingMediaNetMediaNetComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MediaNetComponent", function () {
        return MediaNetComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var MediaNetComponent = /*#__PURE__*/function () {
        function MediaNetComponent() {
          _classCallCheck(this, MediaNetComponent);
        }

        _createClass(MediaNetComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MediaNetComponent;
      }();

      MediaNetComponent.ɵfac = function MediaNetComponent_Factory(t) {
        return new (t || MediaNetComponent)();
      };

      MediaNetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MediaNetComponent,
        selectors: [["app-media-net"]],
        decls: 2,
        vars: 0,
        template: function MediaNetComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "media-net works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL21lZGlhLW5ldC9tZWRpYS1uZXQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaNetComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-media-net',
            templateUrl: './media-net.component.html',
            styleUrls: ['./media-net.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/admin-reporting/perion/perion.component.ts":
    /*!********************************************************************!*\
      !*** ./src/app/modules/admin-reporting/perion/perion.component.ts ***!
      \********************************************************************/

    /*! exports provided: PerionComponent */

    /***/
    function srcAppModulesAdminReportingPerionPerionComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerionComponent", function () {
        return PerionComponent;
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


      var src_app_shared_service_admin_stats_perion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/service/admin-stats/perion.service */
      "./src/app/shared/service/admin-stats/perion.service.ts");
      /* harmony import */


      var _shared_service_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared/service/users.service */
      "./src/app/shared/service/users.service.ts");
      /* harmony import */


      var src_app_modules_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/modules/tag-management/tag-management.service */
      "./src/app/modules/tag-management/tag-management.service.ts");
      /* harmony import */


      var _shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../shared/modules/reporting-filtering/reporting-filtering.component */
      "./src/app/shared/modules/reporting-filtering/reporting-filtering.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var _shared_modules_reporting_revenue_chart_reporting_revenue_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shared/modules/reporting-revenue-chart/reporting-revenue-chart.component */
      "./src/app/shared/modules/reporting-revenue-chart/reporting-revenue-chart.component.ts");
      /* harmony import */


      var _shared_modules_summary_metrics_summary_metrics_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../shared/modules/summary-metrics/summary-metrics.component */
      "./src/app/shared/modules/summary-metrics/summary-metrics.component.ts");

      var _c0 = ["expandableTable"];

      function PerionComponent_app_reporting_revenue_chart_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-reporting-revenue-chart", 26);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("chartData", ctx_r0.chartData);
        }
      }

      function PerionComponent_app_summary_metrics_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-summary-metrics", 27);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("summaryMetricsData", ctx_r1.summaryMetrics);
        }
      }

      function PerionComponent_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Test");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function PerionComponent_ng_template_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerionComponent_ng_template_15_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35);

            var row_r32 = ctx.row;

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r34.toggleExpandRow(row_r32);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var expanded_r33 = ctx.expanded;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("datatable-icon-right", !expanded_r33)("datatable-icon-down", expanded_r33);
        }
      }

      function PerionComponent_ng_template_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Date ");
        }
      }

      function PerionComponent_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r37 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r37));
        }
      }

      function PerionComponent_ng_template_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Subid ");
        }
      }

      function PerionComponent_ng_template_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r39 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r39);
        }
      }

      function PerionComponent_ng_template_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Publisher ");
        }
      }

      function PerionComponent_ng_template_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r41 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r41);
        }
      }

      function PerionComponent_ng_template_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Searches ");
        }
      }

      function PerionComponent_ng_template_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r43 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r43));
        }
      }

      function PerionComponent_ng_template_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Clicks ");
        }
      }

      function PerionComponent_ng_template_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r45 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r45));
        }
      }

      function PerionComponent_ng_template_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " CPC ");
        }
      }

      function PerionComponent_ng_template_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r47 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r47, "USD") || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, 0, "USD"));
        }
      }

      function PerionComponent_ng_template_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " CTR ");
        }
      }

      function PerionComponent_ng_template_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "percent");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "percent");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r49 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r49, "2.2-2") || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, 0, "2.2-2"));
        }
      }

      function PerionComponent_ng_template_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Follow On ");
        }
      }

      function PerionComponent_ng_template_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "percent");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "percent");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r51 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r51, "2.2-2") || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, 0, "2.2-2"));
        }
      }

      function PerionComponent_ng_template_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Revenue ");
        }
      }

      function PerionComponent_ng_template_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r53 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r53, "USD"));
        }
      }

      function PerionComponent_ng_template_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Publisher Net ");
        }
      }

      function PerionComponent_ng_template_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r55 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r55, "USD"));
        }
      }

      function PerionComponent_ng_template_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Profit ");
        }
      }

      function PerionComponent_ng_template_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r57 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r57, "USD"));
        }
      }

      function PerionComponent_ng_template_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Split ");
        }
      }

      function PerionComponent_ng_template_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r59 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r59) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 3, 0, "1.0-0"));
        }
      }

      var PerionComponent = /*#__PURE__*/function () {
        function PerionComponent(perionService, cdr, userService, tagService) {
          _classCallCheck(this, PerionComponent);

          this.perionService = perionService;
          this.cdr = cdr;
          this.userService = userService;
          this.tagService = tagService;
          this.range = {
            startDate: '',
            endDate: ''
          };
          this.loadingIndicator = true;
          this.company = {
            name: 'Manic Traffic',
            login: {
              username: 'kevin@manictraffic.com',
              password: 'kauf2552'
            },
            statsUpdateURL: 'https://services.hub.codefuel.com/analytics/reports?channelQueryType=all_channels&columnQueryData=%7B%22ids%22:%5B%22date%22,%22product%22,%22channel%22,%22country%22,%22searches%22,%22ad_clicks%22,%22publisher_cpc%22,%22monetized_ctr%22,%22revenue%22,%22searches_monetized%22%5D%7D&columnQueryType=specific_columns&endDate=1600991999000&geoQueryType=all&limit=10000&productQueryType=all_product&startDate=1600905600000&walletQueryType=all_wallets'
          };
          this.summary = {
            revenue: 0,
            profit: 0
          };
          this.columns = [{
            prop: 'name'
          }, {
            name: 'Gender'
          }];
          this.expanded = {};
          this.tagList = [];
          this.selectedCompany = this.getSelectedCompanyFromLocalStorage();
        }

        _createClass(PerionComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.getCompanyTags(this.selectedCompany);

                    case 2:
                      this.tagList = _context4.sent;
                      this.rows = [];
                      _context4.next = 6;
                      return this.getAllPerionStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 6:
                      this.rows = _context4.sent;
                      _context4.next = 9;
                      return this.getChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 9:
                      this.chartData = _context4.sent;
                      _context4.next = 12;
                      return this.getSummaryMetrics(this.selectedCompany);

                    case 12:
                      this.summaryMetrics = _context4.sent;
                      this.refreshTable();

                    case 14:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          } //Gets the Selected Company from Local Storage

        }, {
          key: "getSelectedCompanyFromLocalStorage",
          value: function getSelectedCompanyFromLocalStorage() {
            return this.userService.getSelectedCompanyFromLocalStorage();
          }
        }, {
          key: "toggleExpandRow",
          value: function toggleExpandRow(row) {
            console.log('Toggled Expand Row!', row);
            this.table.rowDetail.toggleExpandRow(row);
          }
        }, {
          key: "onDetailToggle",
          value: function onDetailToggle(event) {
            console.log('Detail Toggled', event);
          }
        }, {
          key: "routeTester",
          value: function routeTester() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      console.log('Testing Route');
                      this.perionService.testingRoute().subscribe(function (response) {
                        console.log(response);
                      }), function (err) {
                        console.log(err);
                      };

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "updateAllPerionStats",
          value: function updateAllPerionStats(company, startDate, endDate) {
            this.perionService.updateAllPerionStats(company, startDate, endDate).subscribe(function (response) {
              console.log(response);
            }), function (err) {
              console.log(err);
            };
          }
        }, {
          key: "updateReportingFiltering",
          value: function updateReportingFiltering(range) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      // console.log('Update report filtering....');
                      this.range = range;
                      _context6.next = 3;
                      return this.getAllPerionStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 3:
                      this.rows = _context6.sent;
                      _context6.next = 6;
                      return this.getChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 6:
                      this.chartData = _context6.sent;
                      _context6.next = 9;
                      return this.getSummaryMetrics(this.selectedCompany);

                    case 9:
                      this.summaryMetrics = _context6.sent;
                      this.refreshTable();

                    case 11:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "getAllPerionStats",
          value: function getAllPerionStats(company, startDate, endDate) {
            var _this7 = this;

            return this.perionService.getAllPerionStats(company, startDate, endDate).toPromise().then(function (response) {
              console.log('getAllPerionStats() response:');
              _this7.loadingIndicator = false; // console.log(response.stats);

              _this7.allStat = response.stats;

              _this7.allStat.map(function (resStat) {
                resStat.publisher = "No Publisher";
                resStat.tagname = "No Tag";
              });

              var _iterator7 = _createForOfIteratorHelper(_this7.tagList),
                  _step7;

              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var tagL = _step7.value;

                  if (tagL.tag.advertiser == "perion") {
                    var _iterator8 = _createForOfIteratorHelper(tagL.tag.subids),
                        _step8;

                    try {
                      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                        var tagSub = _step8.value;

                        if (tagSub.filterTag == "Contains") {
                          _this7.allStat.map(function (stat) {
                            if (stat.subid.includes(tagSub.subid)) {
                              stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                              stat.tagname = tagL.tag.name;
                            }
                          });
                        } else if (tagSub.filterTag == "StartsWith") {
                          _this7.allStat.map(function (stat) {
                            if (stat.subid.startsWith(tagSub.subid)) {
                              stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                              stat.tagname = tagL.tag.name;
                            }
                          });
                        } else if (tagSub.filterTag == "EndsWith") {
                          _this7.allStat.map(function (stat) {
                            if (stat.subid.endsWith(tagSub.subid)) {
                              stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                              stat.tagname = tagL.tag.name;
                            }
                          });
                        } else if (tagSub.filterTag == "ExactValue") {
                          _this7.allStat.map(function (stat) {
                            if (stat.subid == tagSub.subid) {
                              stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                              stat.tagname = tagL.tag.name;
                            }
                          });
                        }
                      }
                    } catch (err) {
                      _iterator8.e(err);
                    } finally {
                      _iterator8.f();
                    }
                  }
                } // var helper = new Set();
                // //duplicated remove
                // let filtered_data = this.allStat.filter((perionStat) => {
                //   const key = JSON.stringify([perionStat.date, perionStat.subid]);
                //   return !helper.has(key) && helper.add(key);
                // });
                // console.log("=========", filtered_data.length)
                //return filtered_data.slice().sort((a, b) => b.date - a.date);

              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }

              return _this7.allStat;
            })["catch"](function (error) {
              return error;
            });
          }
        }, {
          key: "refreshTable",
          value: function refreshTable() {
            this.cdr.markForCheck();
          }
        }, {
          key: "getSummaryMetrics",
          value: function getSummaryMetrics(company) {
            return this.perionService.getSummaryMetrics(company).toPromise().then(function (response) {
              console.log('Got summary metrics'); // console.log("===============", response)
              // this.currentMonthData = response.summary[0].summaryMetrics;
              // this.beforeMonthData = response.summary[0].lastMonthStat;  
              // this.twoBeforeMonthData = response.summary[0].twoLastMonthStat;  
              // var dayInCurrentMonth = response.summary[0].dayInCurrentMonth;
              // var dayInBeforeMonth = response.summary[0].dayInBeforeMonth;
              // var dayInTwoBeforeMonth = response.summary[0].dayInTwoBeforeMonth;
              // var summaryCurrentStat = [];
              //current data get part
              // for (var tagL of this.tagList) {
              //   for (var tagSub of tagL.tag.subids) {
              //     if(tagSub.filterTag =="Contains") {
              //       summaryCurrentStat = summaryCurrentStat.concat(this.currentMonthData.filter(stat => stat.subid.includes(tagSub.subid)))
              //       summaryCurrentStat.map(stat => {
              //         stat.publisher = tagL.user ? tagL.user[0].fullname : ""
              //         stat.tagname = tagL.tag.name
              //       })
              //     } else if (tagSub.filterTag =="StartsWith") {
              //       summaryCurrentStat = summaryCurrentStat.concat(this.currentMonthData.filter(stat => stat.subid.startsWith(tagSub.subid)))
              //       summaryCurrentStat.map(stat => {
              //         stat.publisher = tagL.user ? tagL.user[0].fullname : ""
              //         stat.tagname = tagL.tag.name
              //       })
              //     } else if (tagSub.filterTag =="EndsWith") {
              //       summaryCurrentStat = summaryCurrentStat.concat(this.currentMonthData.filter(stat => stat.subid.endsWith(tagSub.subid)))
              //       summaryCurrentStat.map(stat => {
              //         stat.publisher = tagL.user ? tagL.user[0].fullname : ""
              //         stat.tagname = tagL.tag.name
              //       })
              //     } else if (tagSub.filterTag =="ExactValue") {
              //       summaryCurrentStat = summaryCurrentStat.concat(this.currentMonthData.filter(stat => stat.subid == tagSub.subid ))
              //       summaryCurrentStat.map(stat => {
              //         stat.publisher = tagL.user ? tagL.user[0].fullname : ""
              //         stat.tagname = tagL.tag.name
              //       })
              //     }
              //   }
              // }
              // // //duplicated remove
              // let filter_data = summaryCurrentStat.filter((obj, pos, arr) => {
              //   return arr
              //     .map(mapObj => mapObj._id)
              //     .indexOf(obj._id) == pos;
              // });
              // var helperSummary = {};
              // filter_data.map(f =>{
              //   f.revenue = parseFloat(f.revenue);
              //   f.ctr = parseFloat(f.ctr);
              //   f.biddedCtr = parseFloat(f.biddedCTR);
              // })
              // var resultSummary = filter_data.reduce(function(r, o) {
              //   var key = o.rptDate;
              //   if(!helperSummary[key]) {
              //     helperSummary[key] = Object.assign({}, o); // create a copy of o
              //     r.push(helperSummary[key]);
              //   } else {
              //     helperSummary[key].searches += parseInt(o.searches);
              //     if(o.revenue) {
              //       helperSummary[key].revenue += o.revenue;
              //     }
              //   } 
              //   return r;
              // }, []);
              // var monthRevenue = 0;
              // var monthProfit = 0;
              // var monthRevenuePace = 0;
              // var profitPace = 0;
              // for(var sumData of resultSummary) {
              //   monthRevenue += sumData.revenue;
              //   monthProfit += sumData.revenue *(100 - sumData.split) * 0.01;
              //   monthRevenuePace += (monthRevenue/resultSummary.length) * dayInCurrentMonth;
              //   profitPace += (monthProfit/resultSummary.length)*dayInCurrentMonth;
              // }
              // //before month data get part
              // var summaryBeforeStat = [];
              // for (var tagL of this.tagList) {
              //   for (var tagSub of tagL.tag.subids) {
              //     if(tagSub.filterTag =="Contains") {
              //       summaryBeforeStat = summaryBeforeStat.concat(this.beforeMonthData.filter(stat => stat.subid.includes(tagSub.subid)))
              //       summaryBeforeStat.map(stat => {
              //         stat.publisher = tagL.user ? tagL.user[0].fullname : ""
              //         stat.tagname = tagL.tag.name
              //       })
              //     } else if (tagSub.filterTag =="StartsWith") {
              //       summaryBeforeStat = summaryBeforeStat.concat(this.beforeMonthData.filter(stat => stat.subid.startsWith(tagSub.subid)))
              //     } else if (tagSub.filterTag =="EndsWith") {
              //       summaryBeforeStat = summaryBeforeStat.concat(this.beforeMonthData.filter(stat => stat.subid.endsWith(tagSub.subid)))
              //     } else if (tagSub.filterTag =="ExactValue") {
              //       summaryBeforeStat = summaryBeforeStat.concat(this.beforeMonthData.filter(stat => stat.subid == tagSub.subid ))
              //     }
              //   }
              // }
              // // //duplicated remove
              // let filt_data = summaryBeforeStat.filter((obj, pos, arr) => {
              //   return arr
              //     .map(mapObj => mapObj._id)
              //     .indexOf(obj._id) == pos;
              // });
              // var helperBeforeSummary = {};
              // filt_data.map(f =>{
              //   f.revenue = parseFloat(f.revenue);
              //   f.ctr = parseFloat(f.ctr);
              //   f.biddedCtr = parseFloat(f.biddedCTR);
              // })
              // var resultBeforeSummary = filt_data.reduce(function(r, o) {
              //   var key = o.rptDate;
              //   if(!helperBeforeSummary[key]) {
              //     helperBeforeSummary[key] = Object.assign({}, o); // create a copy of o
              //     r.push(helperBeforeSummary[key]);
              //   } else {
              //     helperBeforeSummary[key].searches += parseInt(o.searches);
              //     if(o.revenue) {
              //       helperBeforeSummary[key].revenue += o.revenue;
              //     }
              //   } 
              //   return r;
              // }, []);
              // var monthBeforeRevenue = 0;
              // var monthBeforeProfit = 0;
              // var monthBeforeRevenuePace = 0;
              // var profitBeforePace = 0;
              // for(var sumBeforeData of resultBeforeSummary) {
              //   monthBeforeRevenue += sumBeforeData.revenue;
              //   monthBeforeProfit += sumBeforeData.revenue *(100 - sumBeforeData.split) * 0.01;
              //   monthBeforeRevenuePace += (monthBeforeRevenue/resultBeforeSummary.length) * dayInBeforeMonth;
              //   profitBeforePace += (monthBeforeProfit/resultBeforeSummary.length)*dayInBeforeMonth;
              // }
              // //tow before month data get part
              // var summaryTwoBeforeStat = [];
              // for (var tagL of this.tagList) {
              //   for (var tagSub of tagL.tag.subids) {
              //     if(tagSub.filterTag =="Contains") {
              //       summaryTwoBeforeStat = summaryTwoBeforeStat.concat(this.twoBeforeMonthData.filter(stat => stat.subid.includes(tagSub.subid)))
              //       summaryTwoBeforeStat.map(stat => {
              //         stat.publisher = tagL.user ? tagL.user[0].fullname : ""
              //         stat.tagname = tagL.tag.name
              //       })
              //     } else if (tagSub.filterTag =="StartsWith") {
              //       summaryTwoBeforeStat = summaryTwoBeforeStat.concat(this.twoBeforeMonthData.filter(stat => stat.subid.startsWith(tagSub.subid)))
              //     } else if (tagSub.filterTag =="EndsWith") {
              //       summaryTwoBeforeStat = summaryTwoBeforeStat.concat(this.twoBeforeMonthData.filter(stat => stat.subid.endsWith(tagSub.subid)))
              //     } else if (tagSub.filterTag =="ExactValue") {
              //       summaryTwoBeforeStat = summaryTwoBeforeStat.concat(this.twoBeforeMonthData.filter(stat => stat.subid == tagSub.subid ))
              //     }
              //   }
              // }
              // // //duplicated remove
              // let filter_two_data = summaryTwoBeforeStat.filter((obj, pos, arr) => {
              //   return arr
              //     .map(mapObj => mapObj._id)
              //     .indexOf(obj._id) == pos;
              // });
              // var helperTwoBeforeSummary = {};
              // filter_two_data.map(f =>{
              //   f.revenue = parseFloat(f.revenue);
              //   f.ctr = parseFloat(f.ctr);
              //   f.biddedCtr = parseFloat(f.biddedCTR);
              // })
              // var resultTwoBeforeSummary = filter_two_data.reduce(function(r, o) {
              //   var key = o.rptDate;
              //   if(!helperTwoBeforeSummary[key]) {
              //     helperTwoBeforeSummary[key] = Object.assign({}, o); // create a copy of o
              //     r.push(helperTwoBeforeSummary[key]);
              //   } else {
              //     helperTwoBeforeSummary[key].searches += parseInt(o.searches);
              //     if(o.revenue) {
              //       helperTwoBeforeSummary[key].revenue += o.revenue;
              //     }
              //   } 
              //   return r;
              // }, []);
              // var monthTwoBeforeRevenue = 0;
              // var monthTwoBeforeProfit = 0;
              // var monthTwoBeforeRevenuePace = 0;
              // var profitTwoBeforePace = 0;
              // for(var sumTwoBeforeData of resultTwoBeforeSummary) {
              //   monthTwoBeforeRevenue += sumTwoBeforeData.revenue;
              //   monthTwoBeforeProfit += sumTwoBeforeData.revenue *(100 - sumTwoBeforeData.split) * 0.01;
              //   monthTwoBeforeRevenuePace += (monthTwoBeforeRevenue/resultTwoBeforeSummary.length) * dayInTwoBeforeMonth;
              //   profitTwoBeforePace += (monthTwoBeforeProfit/resultTwoBeforeSummary.length)*dayInTwoBeforeMonth;
              // }
              // var currentPercentPace = 0;
              // var lastPercentPace = 0;
              // if (profitBeforePace != 0) {
              //   currentPercentPace = ((profitPace - profitBeforePace) / profitBeforePace) * 100
              // }
              // if (profitTwoBeforePace != 0) {
              //   lastPercentPace = ((profitBeforePace - profitTwoBeforePace) / profitTwoBeforePace) * 100
              // }
              // var summaryFinalData = [];
              // summaryFinalData.push({
              //   summaryMetrics: [{
              //     revenue: monthRevenue,
              //     revenuePace: monthRevenuePace,
              //     profit: monthProfit,
              //     profitPace: profitPace,
              //     percentPace: currentPercentPace
              //   }],
              //   lastMonthStat: [{
              //     revenue: monthBeforeRevenue,
              //     revenuePace: monthBeforeRevenuePace,
              //     profit: monthBeforeProfit,
              //     profitPace: profitBeforePace,
              //     percentPace: lastPercentPace
              //   }]
              // });

              var allSummary = {};
              var currentPercentPace = 0;
              var lastPercentPace = 0;

              if (response.summary[0].lastMonthStat[0].profitPace != 0) {
                currentPercentPace = (response.summary[0].summaryMetrics[0].profitPace - response.summary[0].lastMonthStat[0].profitPace) / response.summary[0].lastMonthStat[0].profitPace * 100;
              }

              if (response.summary[0].twoLastMonthStat[0].profitPace != 0) {
                lastPercentPace = (response.summary[0].lastMonthStat[0].profitPace - response.summary[0].twoLastMonthStat[0].profitPace) / response.summary[0].twoLastMonthStat[0].profitPace * 100;
              }

              response.summary[0].summaryMetrics[0].percentPace = currentPercentPace;
              response.summary[0].lastMonthStat[0].percentPace = lastPercentPace;
              allSummary['summary'] = response.summary;
              return allSummary;
            })["catch"](function (error) {
              return error;
            });
          }
        }, {
          key: "getChartMetrics",
          value: function getChartMetrics(company, startDate, endDate) {
            var _this8 = this;

            return this.perionService.getAllPerionStats(company, startDate, endDate).toPromise().then(function (response) {
              // console.log('getAllPerionStats() response:');
              _this8.allChartStat = response.stats; // var allChartPerionStat = [];
              // for (var tagL of this.tagList) {
              //   if(tagL.tag.advertiser == "perion") {
              //     for (var tagSub of tagL.tag.subids) {
              //       if(tagSub.filterTag =="Contains") {
              //         allChartPerionStat = allChartPerionStat.concat(this.allChartStat.filter(stat => stat.subid.includes(tagSub.subid)))
              //         allChartPerionStat.map(stat => {
              //           stat.publisher = tagL.user ? tagL.user[0].fullname : ""
              //           stat.tagname = tagL.tag.name
              //         })
              //       } else if (tagSub.filterTag =="StartsWith") {
              //         allChartPerionStat = allChartPerionStat.concat(this.allChartStat.filter(stat => stat.subid.startsWith(tagSub.subid)))
              //         allChartPerionStat.map(stat => {
              //           stat.publisher = tagL.user ? tagL.user[0].fullname : ""
              //           stat.tagname = tagL.tag.name
              //         })
              //       } else if (tagSub.filterTag =="EndsWith") {
              //         allChartPerionStat = allChartPerionStat.concat(this.allChartStat.filter(stat => stat.subid.endsWith(tagSub.subid)))
              //         allChartPerionStat.map(stat => {
              //           stat.publisher = tagL.user ? tagL.user[0].fullname : ""
              //           stat.tagname = tagL.tag.name
              //         })
              //       } else if (tagSub.filterTag =="ExactValue") {
              //         allChartPerionStat = allChartPerionStat.concat(this.allChartStat.filter(stat => stat.subid == tagSub.subid ))
              //         allChartPerionStat.map(stat => {
              //           stat.publisher = tagL.user ? tagL.user[0].fullname : ""
              //           stat.tagname = tagL.tag.name
              //         })
              //       }
              //     }
              //   }
              // }
              // var helper = new Set();
              //duplicated remove
              // let filtered_data = this.allChartStat.filter((perionStat) => {
              //   const key = JSON.stringify([perionStat.date, perionStat.subid]);
              //   return !helper.has(key) && helper.add(key);
              // });

              _this8.allChartStat = _this8.allChartStat.slice().sort(function (a, b) {
                return a.date - b.date;
              });
              var helperChart = {};

              var resultChart = _this8.allChartStat.reduce(function (r, o) {
                var key = o.date;

                if (!helperChart[key]) {
                  helperChart[key] = Object.assign({}, o); // create a copy of o

                  r.push(helperChart[key]);
                } else {
                  helperChart[key].impressions += parseInt(o.impressions);

                  if (o.revenue) {
                    helperChart[key].revenue += o.revenue;
                  }
                }

                return r;
              }, []);

              var revenuePerDayVal = [];
              var datesOfRevenueVal = [];
              var searchesPerDayVal = [];
              var chartDataValue = {};

              var _iterator9 = _createForOfIteratorHelper(resultChart),
                  _step9;

              try {
                for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                  var resVal = _step9.value;
                  revenuePerDayVal.push(resVal.revenue);
                  datesOfRevenueVal.push(resVal.date);
                  searchesPerDayVal.push(resVal.impressions);
                }
              } catch (err) {
                _iterator9.e(err);
              } finally {
                _iterator9.f();
              }

              chartDataValue['revenuePerDay'] = revenuePerDayVal;
              chartDataValue['datesOfRevenue'] = datesOfRevenueVal;
              chartDataValue['searchesPerDay'] = searchesPerDayVal;
              return chartDataValue;
            })["catch"](function (error) {
              return error;
            });
          }
        }, {
          key: "combineSummaryMetrics",
          value: function combineSummaryMetrics(metrics) {
            var _this9 = this;

            metrics.summary.keys.forEach(function (element) {
              console.log(element.revenue);
              _this9.summary.revenue += element.revenue;
              _this9.summary.profit += element.revenue * ((100 - element.split) * 0.01);
            });
          } //get Tags with selected company

        }, {
          key: "getCompanyTags",
          value: function getCompanyTags(selectedCompany) {
            var companyId = selectedCompany.split("/")[1];
            return this.tagService.getCompanyTags(companyId).toPromise().then(function (response) {
              return response;
            })["catch"](function (error) {
              return error;
            });
          }
        }, {
          key: "createChartData",
          value: function createChartData(stats) {}
        }]);

        return PerionComponent;
      }();

      PerionComponent.ɵfac = function PerionComponent_Factory(t) {
        return new (t || PerionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_admin_stats_perion_service__WEBPACK_IMPORTED_MODULE_2__["PerionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_service_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_modules_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__["TagManagementService"]));
      };

      PerionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: PerionComponent,
        selectors: [["app-perion"]],
        viewQuery: function PerionComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 52,
        vars: 18,
        consts: [[3, "onDatesPicked"], [3, "chartData", 4, "ngIf"], [3, "summaryMetricsData", 4, "ngIf"], [1, "btn", "btn-sm", "btn-dark", 3, "click"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "btn", "btn-sm", "btn-info", 3, "click"], [1, "material", "fullscreen", "expandable", 2, "top", "30px", "height", "500px", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "rows", "loadingIndicator"], ["expandableTable", ""], [3, "rowHeight", "toggle"], ["myDetailRow", ""], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["ngx-datatable-cell-template", ""], ["name", "date", 3, "minWidth"], ["ngx-datatable-header-template", ""], ["name", "subid"], ["name", "publisher", 3, "minWidth"], ["name", "impressions"], ["name", "clicks"], ["name", "cpc"], ["name", "ctr"], ["name", "followon"], ["name", "revenue"], ["name", "publisherNet"], ["name", "profit"], ["name", "split", 3, "minWidth"], [3, "chartData"], [3, "summaryMetricsData"], [2, "padding-left", "35px"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 3, "click"]],
        template: function PerionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-reporting-filtering", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onDatesPicked", function PerionComponent_Template_app_reporting_filtering_onDatesPicked_0_listener($event) {
              return ctx.updateReportingFiltering($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PerionComponent_app_reporting_revenue_chart_1_Template, 1, 1, "app-reporting-revenue-chart", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PerionComponent_app_summary_metrics_2_Template, 1, 1, "app-summary-metrics", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerionComponent_Template_button_click_3_listener() {
              return ctx.updateAllPerionStats(ctx.selectedCompany, ctx.range.startDate, ctx.range.endDate);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " updateAllPerionStats\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerionComponent_Template_button_click_5_listener() {
              return ctx.getAllPerionStats(ctx.selectedCompany, ctx.range.startDate, ctx.range.endDate);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " getAllPerionStats\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerionComponent_Template_button_click_7_listener() {
              return ctx.getSummaryMetrics(ctx.selectedCompany);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "getSummaryMetrics");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ngx-datatable", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ngx-datatable-row-detail", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("toggle", function PerionComponent_Template_ngx_datatable_row_detail_toggle_11_listener($event) {
              return ctx.onDetailToggle($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, PerionComponent_ng_template_13_Template, 6, 0, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ngx-datatable-column", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, PerionComponent_ng_template_15_Template, 1, 4, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ngx-datatable-column", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, PerionComponent_ng_template_17_Template, 1, 0, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, PerionComponent_ng_template_18_Template, 3, 3, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ngx-datatable-column", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, PerionComponent_ng_template_20_Template, 1, 0, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, PerionComponent_ng_template_21_Template, 2, 1, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ngx-datatable-column", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, PerionComponent_ng_template_23_Template, 1, 0, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, PerionComponent_ng_template_24_Template, 2, 1, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ngx-datatable-column", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, PerionComponent_ng_template_26_Template, 1, 0, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, PerionComponent_ng_template_27_Template, 3, 3, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ngx-datatable-column", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, PerionComponent_ng_template_29_Template, 1, 0, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, PerionComponent_ng_template_30_Template, 3, 3, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ngx-datatable-column", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, PerionComponent_ng_template_32_Template, 1, 0, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, PerionComponent_ng_template_33_Template, 4, 7, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ngx-datatable-column", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, PerionComponent_ng_template_35_Template, 1, 0, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, PerionComponent_ng_template_36_Template, 4, 7, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ngx-datatable-column", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, PerionComponent_ng_template_38_Template, 1, 0, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, PerionComponent_ng_template_39_Template, 4, 7, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ngx-datatable-column", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, PerionComponent_ng_template_41_Template, 1, 0, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, PerionComponent_ng_template_42_Template, 3, 4, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "ngx-datatable-column", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, PerionComponent_ng_template_44_Template, 1, 0, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, PerionComponent_ng_template_45_Template, 3, 4, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "ngx-datatable-column", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, PerionComponent_ng_template_47_Template, 1, 0, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, PerionComponent_ng_template_48_Template, 3, 4, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "ngx-datatable-column", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, PerionComponent_ng_template_50_Template, 1, 0, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, PerionComponent_ng_template_51_Template, 4, 6, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.chartData);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.summaryMetrics);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnMode", "force")("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("rows", ctx.rows)("loadingIndicator", ctx.loadingIndicator);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowHeight", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 30)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 35);
          }
        },
        directives: [_shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_5__["ReportingFilteringComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableRowDetailDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableRowDetailTemplateDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnCellDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnHeaderDirective"], _shared_modules_reporting_revenue_chart_reporting_revenue_chart_component__WEBPACK_IMPORTED_MODULE_8__["ReportingRevenueChartComponent"], _shared_modules_summary_metrics_summary_metrics_component__WEBPACK_IMPORTED_MODULE_9__["SummaryMetricsComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["PercentPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL3Blcmlvbi9wZXJpb24uY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PerionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-perion',
            templateUrl: './perion.component.html',
            styleUrls: ['./perion.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_shared_service_admin_stats_perion_service__WEBPACK_IMPORTED_MODULE_2__["PerionService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _shared_service_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]
          }, {
            type: src_app_modules_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__["TagManagementService"]
          }];
        }, {
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['expandableTable']
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/modules/admin-reporting/rubi/rubi.component.ts":
    /*!****************************************************************!*\
      !*** ./src/app/modules/admin-reporting/rubi/rubi.component.ts ***!
      \****************************************************************/

    /*! exports provided: RubiComponent */

    /***/
    function srcAppModulesAdminReportingRubiRubiComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RubiComponent", function () {
        return RubiComponent;
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


      var _shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/service/users.service */
      "./src/app/shared/service/users.service.ts");
      /* harmony import */


      var src_app_shared_service_admin_stats_rubi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/service/admin-stats/rubi.service */
      "./src/app/shared/service/admin-stats/rubi.service.ts");
      /* harmony import */


      var src_app_modules_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/modules/tag-management/tag-management.service */
      "./src/app/modules/tag-management/tag-management.service.ts");
      /* harmony import */


      var _shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../shared/modules/reporting-filtering/reporting-filtering.component */
      "./src/app/shared/modules/reporting-filtering/reporting-filtering.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var _shared_modules_reporting_revenue_chart_reporting_revenue_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shared/modules/reporting-revenue-chart/reporting-revenue-chart.component */
      "./src/app/shared/modules/reporting-revenue-chart/reporting-revenue-chart.component.ts");
      /* harmony import */


      var _shared_modules_summary_metrics_summary_metrics_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../shared/modules/summary-metrics/summary-metrics.component */
      "./src/app/shared/modules/summary-metrics/summary-metrics.component.ts");

      var _c0 = ["expandableTable"];

      function RubiComponent_app_reporting_revenue_chart_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-reporting-revenue-chart", 18);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("chartData", ctx_r0.chartData);
        }
      }

      function RubiComponent_app_summary_metrics_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-summary-metrics", 19);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("summaryMetricsData", ctx_r1.summaryMetrics);
        }
      }

      function RubiComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Test");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function RubiComponent_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RubiComponent_ng_template_9_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

            var row_r22 = ctx.row;

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r24.toggleExpandRow(row_r22);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var expanded_r23 = ctx.expanded;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("datatable-icon-right", !expanded_r23)("datatable-icon-down", expanded_r23);
        }
      }

      function RubiComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Date ");
        }
      }

      function RubiComponent_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r27 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r27));
        }
      }

      function RubiComponent_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Subid ");
        }
      }

      function RubiComponent_ng_template_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r29 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r29);
        }
      }

      function RubiComponent_ng_template_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Publisher ");
        }
      }

      function RubiComponent_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r31 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r31);
        }
      }

      function RubiComponent_ng_template_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Searches ");
        }
      }

      function RubiComponent_ng_template_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r33 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r33));
        }
      }

      function RubiComponent_ng_template_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Clicks ");
        }
      }

      function RubiComponent_ng_template_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r35 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r35));
        }
      }

      function RubiComponent_ng_template_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Revenue ");
        }
      }

      function RubiComponent_ng_template_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r37 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r37, "USD"));
        }
      }

      function RubiComponent_ng_template_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Split ");
        }
      }

      function RubiComponent_ng_template_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r39 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r39) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 3, 0, "1.0-0"));
        }
      }

      var RubiComponent = /*#__PURE__*/function () {
        function RubiComponent(cdr, userService, rubiService, tagService) {
          _classCallCheck(this, RubiComponent);

          this.cdr = cdr;
          this.userService = userService;
          this.rubiService = rubiService;
          this.tagService = tagService;
          this.range = {
            startDate: '',
            endDate: ''
          };
          this.loadingIndicator = true;
          this.summary = {
            revenue: 0,
            profit: 0
          };
          this.expanded = {};
          this.tagList = [];
          this.selectedCompany = this.getSelectedCompanyStored();
        }

        _createClass(RubiComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.getCompanyTags(this.selectedCompany);

                    case 2:
                      this.tagList = _context7.sent;
                      this.rows = [];
                      _context7.next = 6;
                      return this.getAllRubiStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 6:
                      this.rows = _context7.sent;
                      _context7.next = 9;
                      return this.getChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 9:
                      this.chartData = _context7.sent;
                      _context7.next = 12;
                      return this.getSummaryMetrics(this.selectedCompany);

                    case 12:
                      this.summaryMetrics = _context7.sent;
                      this.refreshTable();

                    case 14:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "updateReportingFiltering",
          value: function updateReportingFiltering(range) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      this.range = range;
                      _context8.next = 3;
                      return this.getAllRubiStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 3:
                      this.rows = _context8.sent;
                      _context8.next = 6;
                      return this.getChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 6:
                      this.chartData = _context8.sent;
                      _context8.next = 9;
                      return this.getSummaryMetrics(this.selectedCompany);

                    case 9:
                      this.summaryMetrics = _context8.sent;
                      this.refreshTable();

                    case 11:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          } //Gets the Selected Company from Local Storage

        }, {
          key: "getSelectedCompanyStored",
          value: function getSelectedCompanyStored() {
            return this.userService.getSelectedCompanyFromLocalStorage();
          }
        }, {
          key: "toggleExpandRow",
          value: function toggleExpandRow(row) {
            console.log('Toggled Expand Row!', row);
            this.table.rowDetail.toggleExpandRow(row);
          }
        }, {
          key: "onDetailToggle",
          value: function onDetailToggle(event) {
            console.log('Detail Toggled', event);
          }
        }, {
          key: "refreshTable",
          value: function refreshTable() {
            this.cdr.markForCheck();
          }
        }, {
          key: "getAllRubiStats",
          value: function getAllRubiStats(company, startDate, endDate) {
            var _this10 = this;

            return this.rubiService.getAllRubiStats(company, startDate, endDate).toPromise().then(function (response) {
              console.log('getAllRubiStats() response:', response);
              _this10.loadingIndicator = false;
              _this10.allStats = response.stats;

              _this10.allStats.map(function (resStat) {
                resStat.publisher = "No Publisher";
                resStat.tagname = "No Tag";
              });

              var _iterator10 = _createForOfIteratorHelper(_this10.tagList),
                  _step10;

              try {
                for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                  var tagL = _step10.value;

                  if (tagL.tag.advertiser == "rubi") {
                    var _iterator11 = _createForOfIteratorHelper(tagL.tag.subids),
                        _step11;

                    try {
                      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                        var tagSub = _step11.value;

                        if (tagSub.filterTag == "Contains") {
                          _this10.allStats.map(function (stat) {
                            if (stat.subid.includes(tagSub.subid)) {
                              stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                              stat.tagname = tagL.tag.name;
                            }
                          });
                        } else if (tagSub.filterTag == "StartsWith") {
                          _this10.allStats.map(function (stat) {
                            if (stat.subid.startsWith(tagSub.subid)) {
                              stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                              stat.tagname = tagL.tag.name;
                            }
                          });
                        } else if (tagSub.filterTag == "EndsWith") {
                          _this10.allStats.map(function (stat) {
                            if (stat.subid.endsWith(tagSub.subid)) {
                              stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                              stat.tagname = tagL.tag.name;
                            }
                          });
                        } else if (tagSub.filterTag == "ExactValue") {
                          _this10.allStats.map(function (stat) {
                            if (stat.subid == tagSub.subid) {
                              stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                              stat.tagname = tagL.tag.name;
                            }
                          });
                        }
                      }
                    } catch (err) {
                      _iterator11.e(err);
                    } finally {
                      _iterator11.f();
                    }
                  }
                }
              } catch (err) {
                _iterator10.e(err);
              } finally {
                _iterator10.f();
              }

              return _this10.allStats;
            });
          }
        }, {
          key: "getChartMetrics",
          value: function getChartMetrics(company, startDate, endDate) {
            return this.rubiService.getChartMetrics(company, startDate, endDate).toPromise().then(function (response) {
              return response;
            })["catch"](function (error) {
              return error;
            });
          }
        }, {
          key: "getSummaryMetrics",
          value: function getSummaryMetrics(company) {
            return this.rubiService.getSummaryMetrics(company).toPromise().then(function (response) {
              console.log('Got summary metrics');
              var allSummary = {};
              var currentPercentPace = 0;
              var lastPercentPace = 0;

              if (response.summary[0].lastMonthStat[0].profitPace != 0) {
                currentPercentPace = (response.summary[0].summaryMetrics[0].profitPace - response.summary[0].lastMonthStat[0].profitPace) / response.summary[0].lastMonthStat[0].profitPace * 100;
              }

              if (response.summary[0].twoLastMonthStat[0].profitPace != 0) {
                lastPercentPace = (response.summary[0].lastMonthStat[0].profitPace - response.summary[0].twoLastMonthStat[0].profitPace) / response.summary[0].twoLastMonthStat[0].profitPace * 100;
              }

              response.summary[0].summaryMetrics[0].percentPace = currentPercentPace;
              response.summary[0].lastMonthStat[0].percentPace = lastPercentPace;
              allSummary['summary'] = response.summary;
              return allSummary;
            });
          } //get Tags with selected company

        }, {
          key: "getCompanyTags",
          value: function getCompanyTags(selectedCompany) {
            var companyId = selectedCompany.split("/")[1];
            return this.tagService.getCompanyTags(companyId).toPromise().then(function (response) {
              return response;
            })["catch"](function (error) {
              return error;
            });
          }
        }]);

        return RubiComponent;
      }();

      RubiComponent.ɵfac = function RubiComponent_Factory(t) {
        return new (t || RubiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_admin_stats_rubi_service__WEBPACK_IMPORTED_MODULE_3__["RubiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_modules_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__["TagManagementService"]));
      };

      RubiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: RubiComponent,
        selectors: [["app-rubi"]],
        viewQuery: function RubiComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 31,
        vars: 18,
        consts: [[3, "onDatesPicked"], [3, "chartData", 4, "ngIf"], [3, "summaryMetricsData", 4, "ngIf"], [1, "material", "fullscreen", "expandable", 2, "top", "30px", "height", "500px", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "rows", "loadingIndicator"], ["expandableTable", ""], [3, "rowHeight", "toggle"], ["myDetailRow", ""], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["ngx-datatable-cell-template", ""], ["name", "date", 3, "minWidth"], ["ngx-datatable-header-template", ""], ["name", "subid"], ["name", "publisher", 3, "minWidth"], ["name", "searches"], ["name", "clicks"], ["name", "revenue"], ["name", "split", 3, "minWidth"], [3, "chartData"], [3, "summaryMetricsData"], [2, "padding-left", "35px"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 3, "click"]],
        template: function RubiComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-reporting-filtering", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onDatesPicked", function RubiComponent_Template_app_reporting_filtering_onDatesPicked_0_listener($event) {
              return ctx.updateReportingFiltering($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RubiComponent_app_reporting_revenue_chart_1_Template, 1, 1, "app-reporting-revenue-chart", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RubiComponent_app_summary_metrics_2_Template, 1, 1, "app-summary-metrics", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ngx-datatable", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ngx-datatable-row-detail", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("toggle", function RubiComponent_Template_ngx_datatable_row_detail_toggle_5_listener($event) {
              return ctx.onDetailToggle($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, RubiComponent_ng_template_7_Template, 6, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ngx-datatable-column", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, RubiComponent_ng_template_9_Template, 1, 4, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ngx-datatable-column", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, RubiComponent_ng_template_11_Template, 1, 0, "ng-template", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, RubiComponent_ng_template_12_Template, 3, 3, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ngx-datatable-column", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, RubiComponent_ng_template_14_Template, 1, 0, "ng-template", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, RubiComponent_ng_template_15_Template, 2, 1, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ngx-datatable-column", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, RubiComponent_ng_template_17_Template, 1, 0, "ng-template", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, RubiComponent_ng_template_18_Template, 2, 1, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ngx-datatable-column", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, RubiComponent_ng_template_20_Template, 1, 0, "ng-template", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, RubiComponent_ng_template_21_Template, 3, 3, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ngx-datatable-column", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, RubiComponent_ng_template_23_Template, 1, 0, "ng-template", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, RubiComponent_ng_template_24_Template, 3, 3, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ngx-datatable-column", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, RubiComponent_ng_template_26_Template, 1, 0, "ng-template", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, RubiComponent_ng_template_27_Template, 3, 4, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ngx-datatable-column", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, RubiComponent_ng_template_29_Template, 1, 0, "ng-template", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, RubiComponent_ng_template_30_Template, 4, 6, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.chartData);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.summaryMetrics);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnMode", "force")("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("rows", ctx.rows)("loadingIndicator", ctx.loadingIndicator);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowHeight", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 30)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 35);
          }
        },
        directives: [_shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_5__["ReportingFilteringComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableRowDetailDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableRowDetailTemplateDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnCellDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnHeaderDirective"], _shared_modules_reporting_revenue_chart_reporting_revenue_chart_component__WEBPACK_IMPORTED_MODULE_8__["ReportingRevenueChartComponent"], _shared_modules_summary_metrics_summary_metrics_component__WEBPACK_IMPORTED_MODULE_9__["SummaryMetricsComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL3J1YmkvcnViaS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RubiComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-rubi',
            templateUrl: './rubi.component.html',
            styleUrls: ['./rubi.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
          }, {
            type: src_app_shared_service_admin_stats_rubi_service__WEBPACK_IMPORTED_MODULE_3__["RubiService"]
          }, {
            type: src_app_modules_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__["TagManagementService"]
          }];
        }, {
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['expandableTable']
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/modules/admin-reporting/third-party/third-party.component.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/modules/admin-reporting/third-party/third-party.component.ts ***!
      \******************************************************************************/

    /*! exports provided: ThirdPartyComponent */

    /***/
    function srcAppModulesAdminReportingThirdPartyThirdPartyComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThirdPartyComponent", function () {
        return ThirdPartyComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var echarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! echarts */
      "./node_modules/echarts/index.js");
      /* harmony import */


      var _shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/modules/reporting-filtering/reporting-filtering.component */
      "./src/app/shared/modules/reporting-filtering/reporting-filtering.component.ts");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var _c0 = ["expandableTable"];

      function ThirdPartyComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Test");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ThirdPartyComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThirdPartyComponent_ng_template_8_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var row_r20 = ctx.row;

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.toggleExpandRow(row_r20);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var expanded_r21 = ctx.expanded;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("datatable-icon-right", !expanded_r21)("datatable-icon-down", expanded_r21);
        }
      }

      function ThirdPartyComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Publisher ");
        }
      }

      function ThirdPartyComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r25 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r25);
        }
      }

      function ThirdPartyComponent_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Tag ");
        }
      }

      function ThirdPartyComponent_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r27 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r27);
        }
      }

      function ThirdPartyComponent_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Total Searches ");
        }
      }

      function ThirdPartyComponent_ng_template_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r29 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, value_r29));
        }
      }

      function ThirdPartyComponent_ng_template_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Monetized Searches ");
        }
      }

      function ThirdPartyComponent_ng_template_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r31 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, value_r31));
        }
      }

      function ThirdPartyComponent_ng_template_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Clicks ");
        }
      }

      function ThirdPartyComponent_ng_template_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r33 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, value_r33));
        }
      }

      function ThirdPartyComponent_ng_template_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var column_r34 = ctx.column;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r34.name);
        }
      }

      function ThirdPartyComponent_ng_template_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "strong", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "percent");
        }

        if (rf & 2) {
          var row_r36 = ctx.row;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 1, row_r36["clicks"] / row_r36["totalSearches"], "2.2-2"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function ThirdPartyComponent_ng_template_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Revenue ");
        }
      }

      function ThirdPartyComponent_ng_template_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r39 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, value_r39, "USD"));
        }
      }

      var ThirdPartyComponent = /*#__PURE__*/function () {
        function ThirdPartyComponent() {
          _classCallCheck(this, ThirdPartyComponent);

          this.rows = [{
            name: 'Datalox',
            tag: 'Guppy Media',
            totalSearches: '5341',
            monetizedSearches: '5213',
            revenue: '1362',
            clicks: 562
          }, {
            name: 'Hopkins Branded',
            tag: 'Guppy Media',
            totalSearches: '5341',
            monetizedSearches: '5213',
            revenue: '1362',
            clicks: 562
          }, {
            name: 'Datalox 2',
            tag: 'Guppy Media',
            totalSearches: '5341',
            monetizedSearches: '5213',
            revenue: '1362',
            clicks: 562
          }];
          this.columns = [{
            prop: 'name'
          }, {
            name: 'Gender'
          }];
          this.expanded = {};
        }

        _createClass(ThirdPartyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var revenueByDayArray = Array.from({
              length: 20
            }, function () {
              return Math.floor(Math.random() * (8000 - 4000) + 4000);
            });
            var searchesPerDay = Array.from({
              length: 20
            }, function () {
              return Math.floor(Math.random() * (100000 - 40000) + 40000);
            });
            this.setChartOptions(10000, 100000, ['Nov 1, Nov 2, Nov 3, Nov 4', 'Nov 5', 'Nov 5', 'Nov 6', 'Nov 7', 'Nov 8', 'Nov 9', 'Nov 10', 'Nov 11', 'Nov 12', 'Nov 13', 'Nov 14', 'Nov 15', 'Nov 16', 'Nov 17', 'Nov 18', 'Nov 19', 'Nov 20'], revenueByDayArray, searchesPerDay);
          }
        }, {
          key: "updateReportingFiltering",
          value: function updateReportingFiltering(range) {
            // this.range = range;
            // this.getAllPerionStats(
            //   'manic_perion',
            //   this.range.startDate,
            //   this.range.endDate
            // );
            console.log('Report');
          }
        }, {
          key: "toggleExpandRow",
          value: function toggleExpandRow(row) {
            console.log('Toggled Expand Row!', row);
            this.table.rowDetail.toggleExpandRow(row);
          }
        }, {
          key: "onDetailToggle",
          value: function onDetailToggle(event) {
            console.log('Detail Toggled', event);
          }
        }, {
          key: "setChartOptions",
          value: function setChartOptions(maxRevenue, maxSearches, daysArray, revenueByDayArray, searchesPerDay) {
            this.chartDom = document.getElementById('main');
            this.myChart = echarts__WEBPACK_IMPORTED_MODULE_1__["init"](this.chartDom);
            this.option = {
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'cross',
                  crossStyle: {
                    color: '#999'
                  }
                }
              },
              toolbox: {
                feature: {
                  dataView: {
                    show: true,
                    readOnly: false
                  },
                  magicType: {
                    show: true,
                    type: ['line', 'bar']
                  },
                  restore: {
                    show: true
                  },
                  saveAsImage: {
                    show: true
                  }
                }
              },
              legend: {
                data: ['Revenue', 'Searches']
              },
              xAxis: [{
                type: 'category',
                data: daysArray,
                axisPointer: {
                  type: 'shadow'
                }
              }],
              yAxis: [{
                type: 'value',
                name: 'Revenue',
                min: 0,
                max: maxRevenue,
                interval: 25000,
                axisLabel: {
                  formatter: '${value}'
                }
              }, {
                type: 'value',
                name: 'Searches',
                min: 0,
                max: maxSearches,
                interval: 100000,
                axisLabel: {
                  formatter: '{value}'
                }
              }],
              series: [{
                name: 'Revenue',
                type: 'bar',
                data: revenueByDayArray
              }, {
                name: 'Searches',
                type: 'line',
                yAxisIndex: 1,
                data: searchesPerDay
              }]
            };
            this.option && this.myChart.setOption(this.option);
          }
        }]);

        return ThirdPartyComponent;
      }();

      ThirdPartyComponent.ɵfac = function ThirdPartyComponent_Factory(t) {
        return new (t || ThirdPartyComponent)();
      };

      ThirdPartyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ThirdPartyComponent,
        selectors: [["app-third-party"]],
        viewQuery: function ThirdPartyComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 30,
        vars: 13,
        consts: [[3, "onDatesPicked"], ["id", "main", 2, "width", "100%", "height", "300px"], [1, "material", "fullscreen", "expandable", 2, "top", "52px", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "scrollbarH", "rows"], ["expandableTable", ""], [3, "rowHeight", "toggle"], ["myDetailRow", ""], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["ngx-datatable-cell-template", ""], ["name", "name"], ["ngx-datatable-header-template", ""], ["name", "tag"], ["name", "totalSearches"], ["name", "monetizedSearches"], ["name", "clicks"], ["name", "CTR"], ["name", "revenue"], [2, "padding-left", "35px"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 3, "click"], [3, "innerHTML"]],
        template: function ThirdPartyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-reporting-filtering", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onDatesPicked", function ThirdPartyComponent_Template_app_reporting_filtering_onDatesPicked_0_listener($event) {
              return ctx.updateReportingFiltering($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ngx-datatable", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngx-datatable-row-detail", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggle", function ThirdPartyComponent_Template_ngx_datatable_row_detail_toggle_4_listener($event) {
              return ctx.onDetailToggle($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ThirdPartyComponent_ng_template_6_Template, 6, 0, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ngx-datatable-column", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ThirdPartyComponent_ng_template_8_Template, 1, 4, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngx-datatable-column", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ThirdPartyComponent_ng_template_10_Template, 1, 0, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ThirdPartyComponent_ng_template_11_Template, 2, 1, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ngx-datatable-column", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ThirdPartyComponent_ng_template_13_Template, 1, 0, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ThirdPartyComponent_ng_template_14_Template, 2, 1, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ngx-datatable-column", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ThirdPartyComponent_ng_template_16_Template, 1, 0, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ThirdPartyComponent_ng_template_17_Template, 3, 3, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ngx-datatable-column", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ThirdPartyComponent_ng_template_19_Template, 1, 0, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ThirdPartyComponent_ng_template_20_Template, 3, 3, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ngx-datatable-column", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ThirdPartyComponent_ng_template_22_Template, 1, 0, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ThirdPartyComponent_ng_template_23_Template, 3, 3, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ngx-datatable-column", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ThirdPartyComponent_ng_template_25_Template, 2, 1, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ThirdPartyComponent_ng_template_26_Template, 2, 4, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ngx-datatable-column", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ThirdPartyComponent_ng_template_28_Template, 1, 0, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ThirdPartyComponent_ng_template_29_Template, 3, 4, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnMode", "force")("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("scrollbarH", true)("rows", ctx.rows);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowHeight", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 50)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);
          }
        },
        directives: [_shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_2__["ReportingFilteringComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableRowDetailDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableRowDetailTemplateDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableColumnCellDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableColumnHeaderDirective"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL3RoaXJkLXBhcnR5L3RoaXJkLXBhcnR5LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThirdPartyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-third-party',
            templateUrl: './third-party.component.html',
            styleUrls: ['./third-party.component.scss']
          }]
        }], function () {
          return [];
        }, {
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['expandableTable']
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/modules/admin-reporting/verizon-direct/verizon-direct.component.ts":
    /*!************************************************************************************!*\
      !*** ./src/app/modules/admin-reporting/verizon-direct/verizon-direct.component.ts ***!
      \************************************************************************************/

    /*! exports provided: VerizonDirectComponent */

    /***/
    function srcAppModulesAdminReportingVerizonDirectVerizonDirectComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerizonDirectComponent", function () {
        return VerizonDirectComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var VerizonDirectComponent = /*#__PURE__*/function () {
        function VerizonDirectComponent() {
          _classCallCheck(this, VerizonDirectComponent);
        }

        _createClass(VerizonDirectComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return VerizonDirectComponent;
      }();

      VerizonDirectComponent.ɵfac = function VerizonDirectComponent_Factory(t) {
        return new (t || VerizonDirectComponent)();
      };

      VerizonDirectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VerizonDirectComponent,
        selectors: [["app-verizon-direct"]],
        decls: 2,
        vars: 0,
        template: function VerizonDirectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "verizon-direct works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL3Zlcml6b24tZGlyZWN0L3Zlcml6b24tZGlyZWN0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VerizonDirectComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-verizon-direct',
            templateUrl: './verizon-direct.component.html',
            styleUrls: ['./verizon-direct.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/service/admin-stats/rubi.service.ts":
    /*!************************************************************!*\
      !*** ./src/app/shared/service/admin-stats/rubi.service.ts ***!
      \************************************************************/

    /*! exports provided: RubiService */

    /***/
    function srcAppSharedServiceAdminStatsRubiServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RubiService", function () {
        return RubiService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var API_RUBI_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/stats/admin/rubi");

      var RubiService = /*#__PURE__*/function () {
        function RubiService(http) {
          _classCallCheck(this, RubiService);

          this.http = http;
        }

        _createClass(RubiService, [{
          key: "testingRoute",
          value: function testingRoute() {
            console.log('being tested');
            console.log(API_RUBI_URL);
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/stats/admin/rubi/test"));
          }
        }, {
          key: "getChartMetrics",
          value: function getChartMetrics(company, startDate, endDate) {
            return this.http.get(API_RUBI_URL + '/chart_metrics', {
              params: {
                company: company,
                startDate: startDate,
                endDate: endDate
              }
            });
          }
        }, {
          key: "getAllRubiStats",
          value: function getAllRubiStats(company, startDate, endDate) {
            return this.http.get(API_RUBI_URL + '/', {
              params: {
                company: company,
                startDate: startDate,
                endDate: endDate
              }
            });
          }
        }, {
          key: "getSummaryMetrics",
          value: function getSummaryMetrics(company) {
            return this.http.get(API_RUBI_URL + '/summary_metrics', {
              params: {
                company: company
              }
            });
          }
        }, {
          key: "updateAllPerionStats",
          value: function updateAllPerionStats(company, startDate, endDate) {
            var data = {
              "company": company,
              'startDate': startDate,
              'endDate': endDate
            };
            return this.http.put(API_RUBI_URL + '/', data);
          }
        }]);

        return RubiService;
      }();

      RubiService.ɵfac = function RubiService_Factory(t) {
        return new (t || RubiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      RubiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RubiService,
        factory: RubiService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RubiService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/service/admin-stats/update.service.ts":
    /*!**************************************************************!*\
      !*** ./src/app/shared/service/admin-stats/update.service.ts ***!
      \**************************************************************/

    /*! exports provided: ManualUpdateService */

    /***/
    function srcAppSharedServiceAdminStatsUpdateServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManualUpdateService", function () {
        return ManualUpdateService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var API_MANUAL_UPDATE_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/stats/admin/manual-update");

      var ManualUpdateService = /*#__PURE__*/function () {
        function ManualUpdateService(http) {
          _classCallCheck(this, ManualUpdateService);

          this.http = http;
        }

        _createClass(ManualUpdateService, [{
          key: "updateManualStats",
          value: function updateManualStats(updateData) {
            var company = updateData.company,
                reportType = updateData.reportType,
                startDate = updateData.startDate,
                endDate = updateData.endDate;
            var data = {
              "company": company,
              "reportType": reportType,
              'startDate': startDate,
              'endDate': endDate
            };
            return this.http.put(API_MANUAL_UPDATE_URL + '/', data);
          }
        }]);

        return ManualUpdateService;
      }();

      ManualUpdateService.ɵfac = function ManualUpdateService_Factory(t) {
        return new (t || ManualUpdateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      ManualUpdateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ManualUpdateService,
        factory: ManualUpdateService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManualUpdateService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-admin-reporting-admin-reporting-module-es5.js.map