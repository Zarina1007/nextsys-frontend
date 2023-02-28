(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-publisher-reporting-publisher-reporting-module"], {
    /***/
    "./src/app/modules/publisher-reporting/publisher-reporting-routing.module.ts":
    /*!***********************************************************************************!*\
      !*** ./src/app/modules/publisher-reporting/publisher-reporting-routing.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: PublisherReportingRoutingModule */

    /***/
    function srcAppModulesPublisherReportingPublisherReportingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PublisherReportingRoutingModule", function () {
        return PublisherReportingRoutingModule;
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


      var _publisher_reporting_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./publisher-reporting.component */
      "./src/app/modules/publisher-reporting/publisher-reporting.component.ts");
      /* harmony import */


      var _publisher_publisher_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./publisher/publisher.component */
      "./src/app/modules/publisher-reporting/publisher/publisher.component.ts");

      var routes = [{
        path: '',
        component: _publisher_reporting_component__WEBPACK_IMPORTED_MODULE_2__["PublisherReportingComponent"],
        children: [{
          path: ':tagId',
          component: _publisher_publisher_component__WEBPACK_IMPORTED_MODULE_3__["PublisherComponent"],
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

      var PublisherReportingRoutingModule = function PublisherReportingRoutingModule() {
        _classCallCheck(this, PublisherReportingRoutingModule);
      };

      PublisherReportingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PublisherReportingRoutingModule
      });
      PublisherReportingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PublisherReportingRoutingModule_Factory(t) {
          return new (t || PublisherReportingRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PublisherReportingRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublisherReportingRoutingModule, [{
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
    "./src/app/modules/publisher-reporting/publisher-reporting.component.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/modules/publisher-reporting/publisher-reporting.component.ts ***!
      \******************************************************************************/

    /*! exports provided: PublisherReportingComponent */

    /***/
    function srcAppModulesPublisherReportingPublisherReportingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PublisherReportingComponent", function () {
        return PublisherReportingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var PublisherReportingComponent = /*#__PURE__*/function () {
        function PublisherReportingComponent() {
          _classCallCheck(this, PublisherReportingComponent);
        }

        _createClass(PublisherReportingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PublisherReportingComponent;
      }();

      PublisherReportingComponent.ɵfac = function PublisherReportingComponent_Factory(t) {
        return new (t || PublisherReportingComponent)();
      };

      PublisherReportingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PublisherReportingComponent,
        selectors: [["app-publisher-reporting"]],
        decls: 1,
        vars: 0,
        template: function PublisherReportingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHVibGlzaGVyLXJlcG9ydGluZy9wdWJsaXNoZXItcmVwb3J0aW5nLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublisherReportingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-publisher-reporting',
            templateUrl: './publisher-reporting.component.html',
            styleUrls: ['./publisher-reporting.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/publisher-reporting/publisher-reporting.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/modules/publisher-reporting/publisher-reporting.module.ts ***!
      \***************************************************************************/

    /*! exports provided: PublisherReportingModule */

    /***/
    function srcAppModulesPublisherReportingPublisherReportingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PublisherReportingModule", function () {
        return PublisherReportingModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _publisher_reporting_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./publisher-reporting-routing.module */
      "./src/app/modules/publisher-reporting/publisher-reporting-routing.module.ts");
      /* harmony import */


      var _publisher_publisher_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./publisher/publisher.component */
      "./src/app/modules/publisher-reporting/publisher/publisher.component.ts");
      /* harmony import */


      var _publisher_reporting_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./publisher-reporting.component */
      "./src/app/modules/publisher-reporting/publisher-reporting.component.ts");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "./src/app/shared/modules/shared.module.ts");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");

      var PublisherReportingModule = function PublisherReportingModule() {
        _classCallCheck(this, PublisherReportingModule);
      };

      PublisherReportingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PublisherReportingModule
      });
      PublisherReportingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PublisherReportingModule_Factory(t) {
          return new (t || PublisherReportingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _publisher_reporting_routing_module__WEBPACK_IMPORTED_MODULE_3__["PublisherReportingRoutingModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PublisherReportingModule, {
          declarations: [_publisher_publisher_component__WEBPACK_IMPORTED_MODULE_4__["PublisherComponent"], _publisher_reporting_component__WEBPACK_IMPORTED_MODULE_5__["PublisherReportingComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _publisher_reporting_routing_module__WEBPACK_IMPORTED_MODULE_3__["PublisherReportingRoutingModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublisherReportingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_publisher_publisher_component__WEBPACK_IMPORTED_MODULE_4__["PublisherComponent"], _publisher_reporting_component__WEBPACK_IMPORTED_MODULE_5__["PublisherReportingComponent"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _publisher_reporting_routing_module__WEBPACK_IMPORTED_MODULE_3__["PublisherReportingRoutingModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"]],
            entryComponents: []
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/publisher-reporting/publisher/publisher.component.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/modules/publisher-reporting/publisher/publisher.component.ts ***!
      \******************************************************************************/

    /*! exports provided: PublisherComponent */

    /***/
    function srcAppModulesPublisherReportingPublisherPublisherComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PublisherComponent", function () {
        return PublisherComponent;
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


      var _tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../tag-management/tag-management.service */
      "./src/app/modules/tag-management/tag-management.service.ts");
      /* harmony import */


      var _shared_service_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared/service/users.service */
      "./src/app/shared/service/users.service.ts");
      /* harmony import */


      var src_app_shared_service_admin_stats_perion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/service/admin-stats/perion.service */
      "./src/app/shared/service/admin-stats/perion.service.ts");
      /* harmony import */


      var src_app_shared_service_admin_stats_lyon_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/service/admin-stats/lyon.service */
      "./src/app/shared/service/admin-stats/lyon.service.ts");
      /* harmony import */


      var src_app_shared_service_admin_stats_verizon_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/service/admin-stats/verizon.service */
      "./src/app/shared/service/admin-stats/verizon.service.ts");
      /* harmony import */


      var src_app_shared_service_admin_stats_rubi_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/service/admin-stats/rubi.service */
      "./src/app/shared/service/admin-stats/rubi.service.ts");
      /* harmony import */


      var src_app_shared_service_admin_stats_solexbc_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/service/admin-stats/solexbc.service */
      "./src/app/shared/service/admin-stats/solexbc.service.ts");
      /* harmony import */


      var src_app_shared_service_admin_stats_system1_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/service/admin-stats/system1.service */
      "./src/app/shared/service/admin-stats/system1.service.ts");
      /* harmony import */


      var src_app_shared_service_admin_stats_apptitude_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/service/admin-stats/apptitude.service */
      "./src/app/shared/service/admin-stats/apptitude.service.ts");
      /* harmony import */


      var _shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../shared/modules/reporting-filtering/reporting-filtering.component */
      "./src/app/shared/modules/reporting-filtering/reporting-filtering.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var _shared_modules_reporting_revenue_chart_reporting_revenue_chart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../shared/modules/reporting-revenue-chart/reporting-revenue-chart.component */
      "./src/app/shared/modules/reporting-revenue-chart/reporting-revenue-chart.component.ts");

      var _c0 = ["expandableTable"];

      function PublisherComponent_app_reporting_revenue_chart_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-reporting-revenue-chart", 16);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartData", ctx_r0.chartData);
        }
      }

      function PublisherComponent_ng_template_6_Template(rf, ctx) {
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

      function PublisherComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PublisherComponent_ng_template_8_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var row_r19 = ctx.row;

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r21.toggleExpandRow(row_r19);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var expanded_r20 = ctx.expanded;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("datatable-icon-right", !expanded_r20)("datatable-icon-down", expanded_r20);
        }
      }

      function PublisherComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Date ");
        }
      }

      function PublisherComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r24 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, value_r24));
        }
      }

      function PublisherComponent_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Publisher ");
        }
      }

      function PublisherComponent_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r26 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r26);
        }
      }

      function PublisherComponent_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Searches ");
        }
      }

      function PublisherComponent_ng_template_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r28 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r28);
        }
      }

      function PublisherComponent_ng_template_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " CTR ");
        }
      }

      function PublisherComponent_ng_template_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r30 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, value_r30) || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 3, 0, "1.0-0"));
        }
      }

      function PublisherComponent_ng_template_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " CPC ");
        }
      }

      function PublisherComponent_ng_template_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r32 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, value_r32, "1.2-2"));
        }
      }

      function PublisherComponent_ng_template_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Revenue ");
        }
      }

      function PublisherComponent_ng_template_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r34 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, value_r34, "USD"));
        }
      }

      var PublisherComponent = /*#__PURE__*/function () {
        function PublisherComponent(route, tagManagementService, cdr, userService, perionService, lyonService, verizonService, rubiService, solexbcService, system1Service, apptitudeService) {
          _classCallCheck(this, PublisherComponent);

          this.route = route;
          this.tagManagementService = tagManagementService;
          this.cdr = cdr;
          this.userService = userService;
          this.perionService = perionService;
          this.lyonService = lyonService;
          this.verizonService = verizonService;
          this.rubiService = rubiService;
          this.solexbcService = solexbcService;
          this.system1Service = system1Service;
          this.apptitudeService = apptitudeService;
          this.loadingIndicator = true;
          this.range = {
            startDate: '',
            endDate: ''
          };
          this.selectedCompany = this.getSelectedCompanyFromLocalStorage();
        }

        _createClass(PublisherComponent, [{
          key: "ngAfterViewInit",
          value: function () {
            var _ngAfterViewInit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.route.params.subscribe( /*#__PURE__*/function () {
                        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(routeParams) {
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  //console.log("routeParams===>", routeParams)
                                  _this.statData = [];
                                  _context.next = 3;
                                  return _this.getTagInformation(routeParams.tagId);

                                case 3:
                                  _this.tagRows = _context.sent;
                                  _this.selectedAdvertiser = _this.tagRows.advertiser;
                                  _this.selectedCompany = _this.tagRows.company;

                                  if (!(_this.selectedAdvertiser == "lyons")) {
                                    _context.next = 15;
                                    break;
                                  }

                                  _context.next = 9;
                                  return _this.getLyonChartMetrics(_this.selectedCompany, _this.range.startDate, _this.range.endDate);

                                case 9:
                                  _this.chartData = _context.sent;
                                  _context.next = 12;
                                  return _this.getAllLyonStats(_this.range.startDate, _this.range.endDate, _this.tagRows);

                                case 12:
                                  _this.statData = _context.sent;
                                  _context.next = 67;
                                  break;

                                case 15:
                                  if (!(_this.selectedAdvertiser == "perion")) {
                                    _context.next = 24;
                                    break;
                                  }

                                  _context.next = 18;
                                  return _this.getPerionChartMetrics(_this.selectedCompany, _this.range.startDate, _this.range.endDate);

                                case 18:
                                  _this.chartData = _context.sent;
                                  _context.next = 21;
                                  return _this.getAllPerionStats(_this.range.startDate, _this.range.endDate, _this.tagRows);

                                case 21:
                                  _this.statData = _context.sent;
                                  _context.next = 67;
                                  break;

                                case 24:
                                  if (!(_this.selectedAdvertiser == "verizon-direct")) {
                                    _context.next = 33;
                                    break;
                                  }

                                  _context.next = 27;
                                  return _this.getVerizonChartMetrics(_this.selectedCompany, _this.range.startDate, _this.range.endDate);

                                case 27:
                                  _this.chartData = _context.sent;
                                  _context.next = 30;
                                  return _this.getAllVerizonStats(_this.range.startDate, _this.range.endDate, _this.tagRows);

                                case 30:
                                  _this.statData = _context.sent;
                                  _context.next = 67;
                                  break;

                                case 33:
                                  if (!(_this.selectedAdvertiser == "rubi")) {
                                    _context.next = 42;
                                    break;
                                  }

                                  _context.next = 36;
                                  return _this.getRubiChartMetrics(_this.selectedCompany, _this.range.startDate, _this.range.endDate);

                                case 36:
                                  _this.chartData = _context.sent;
                                  _context.next = 39;
                                  return _this.getRubiAllStats(_this.range.startDate, _this.range.endDate, _this.tagRows);

                                case 39:
                                  _this.statData = _context.sent;
                                  _context.next = 67;
                                  break;

                                case 42:
                                  if (!(_this.selectedAdvertiser == "solex-bc")) {
                                    _context.next = 51;
                                    break;
                                  }

                                  _context.next = 45;
                                  return _this.getSolexBCChartMetrics(_this.selectedCompany, _this.range.startDate, _this.range.endDate);

                                case 45:
                                  _this.chartData = _context.sent;
                                  _context.next = 48;
                                  return _this.getSolexBCAllStats(_this.range.startDate, _this.range.endDate, _this.tagRows);

                                case 48:
                                  _this.statData = _context.sent;
                                  _context.next = 67;
                                  break;

                                case 51:
                                  if (!(_this.selectedAdvertiser == "system1")) {
                                    _context.next = 60;
                                    break;
                                  }

                                  _context.next = 54;
                                  return _this.getSystem1ChartMetrics(_this.selectedCompany, _this.range.startDate, _this.range.endDate);

                                case 54:
                                  _this.chartData = _context.sent;
                                  _context.next = 57;
                                  return _this.getSystem1AllStats(_this.range.startDate, _this.range.endDate, _this.tagRows);

                                case 57:
                                  _this.statData = _context.sent;
                                  _context.next = 67;
                                  break;

                                case 60:
                                  if (!(_this.selectedAdvertiser == "apptitude")) {
                                    _context.next = 67;
                                    break;
                                  }

                                  _context.next = 63;
                                  return _this.getApptitudeChartMetrics(_this.selectedCompany, _this.range.startDate, _this.range.endDate);

                                case 63:
                                  _this.chartData = _context.sent;
                                  _context.next = 66;
                                  return _this.getApptitudePublisherStats(_this.range.startDate, _this.range.endDate, _this.tagRows);

                                case 66:
                                  _this.statData = _context.sent;

                                case 67:
                                  _this.refreshTable();

                                case 68:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee);
                        }));

                        return function (_x) {
                          return _ref.apply(this, arguments);
                        };
                      }());

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function ngAfterViewInit() {
              return _ngAfterViewInit.apply(this, arguments);
            }

            return ngAfterViewInit;
          }() //Gets the Selected Company from Local Storage

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
          key: "getTagInformation",
          value: function getTagInformation(id) {
            return this.tagManagementService.getOneTag(id).toPromise().then(function (response) {
              return response;
            })["catch"](function (error) {
              return error;
            });
          }
        }, {
          key: "updateReportingFiltering",
          value: function () {
            var _updateReportingFiltering = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(range) {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      // console.log('Update report filtering....');
                      this.range = range;

                      if (!(this.selectedAdvertiser == "lyons")) {
                        _context3.next = 10;
                        break;
                      }

                      _context3.next = 4;
                      return this.getLyonChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 4:
                      this.chartData = _context3.sent;
                      _context3.next = 7;
                      return this.getAllLyonStats(this.range.startDate, this.range.endDate, this.tagRows);

                    case 7:
                      this.statData = _context3.sent;
                      _context3.next = 62;
                      break;

                    case 10:
                      if (!(this.selectedAdvertiser == "perion")) {
                        _context3.next = 19;
                        break;
                      }

                      _context3.next = 13;
                      return this.getPerionChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 13:
                      this.chartData = _context3.sent;
                      _context3.next = 16;
                      return this.getAllPerionStats(this.range.startDate, this.range.endDate, this.tagRows);

                    case 16:
                      this.statData = _context3.sent;
                      _context3.next = 62;
                      break;

                    case 19:
                      if (!(this.selectedAdvertiser == "verizon-direct")) {
                        _context3.next = 28;
                        break;
                      }

                      _context3.next = 22;
                      return this.getVerizonChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 22:
                      this.chartData = _context3.sent;
                      _context3.next = 25;
                      return this.getAllVerizonStats(this.range.startDate, this.range.endDate, this.tagRows);

                    case 25:
                      this.statData = _context3.sent;
                      _context3.next = 62;
                      break;

                    case 28:
                      if (!(this.selectedAdvertiser == "rubi")) {
                        _context3.next = 37;
                        break;
                      }

                      _context3.next = 31;
                      return this.getRubiChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 31:
                      this.chartData = _context3.sent;
                      _context3.next = 34;
                      return this.getRubiAllStats(this.range.startDate, this.range.endDate, this.tagRows);

                    case 34:
                      this.statData = _context3.sent;
                      _context3.next = 62;
                      break;

                    case 37:
                      if (!(this.selectedAdvertiser == "solex-bc")) {
                        _context3.next = 46;
                        break;
                      }

                      _context3.next = 40;
                      return this.getSolexBCChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 40:
                      this.chartData = _context3.sent;
                      _context3.next = 43;
                      return this.getSolexBCAllStats(this.range.startDate, this.range.endDate, this.tagRows);

                    case 43:
                      this.statData = _context3.sent;
                      _context3.next = 62;
                      break;

                    case 46:
                      if (!(this.selectedAdvertiser == "system1")) {
                        _context3.next = 55;
                        break;
                      }

                      _context3.next = 49;
                      return this.getSystem1ChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 49:
                      this.chartData = _context3.sent;
                      _context3.next = 52;
                      return this.getSystem1AllStats(this.range.startDate, this.range.endDate, this.tagRows);

                    case 52:
                      this.statData = _context3.sent;
                      _context3.next = 62;
                      break;

                    case 55:
                      if (!(this.selectedAdvertiser == "apptitude")) {
                        _context3.next = 62;
                        break;
                      }

                      _context3.next = 58;
                      return this.getApptitudeChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 58:
                      this.chartData = _context3.sent;
                      _context3.next = 61;
                      return this.getApptitudePublisherStats(this.range.startDate, this.range.endDate, this.tagRows);

                    case 61:
                      this.statData = _context3.sent;

                    case 62:
                      this.refreshTable();

                    case 63:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function updateReportingFiltering(_x2) {
              return _updateReportingFiltering.apply(this, arguments);
            }

            return updateReportingFiltering;
          }()
        }, {
          key: "getLyonChartMetrics",
          value: function getLyonChartMetrics(company, startDate, endDate) {
            var _this2 = this;

            return this.lyonService.getAllPublisherStats(startDate, endDate).toPromise().then(function (response) {
              _this2.allChart = response;
              var chartAllLyonStat = [];

              var _iterator = _createForOfIteratorHelper(_this2.tagRows.subids),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var tagSub = _step.value;

                  if (tagSub['filterTag'] == "Contains") {
                    chartAllLyonStat = chartAllLyonStat.concat(_this2.allChart.filter(function (stat) {
                      return stat.subid.includes(tagSub['subid']);
                    }));
                  } else if (tagSub['filterTag'] == "StartsWith") {
                    chartAllLyonStat = chartAllLyonStat.concat(_this2.allChart.filter(function (stat) {
                      return stat.subid.startsWith(tagSub['subid']);
                    }));
                  } else if (tagSub['filterTag'] == "EndsWith") {
                    chartAllLyonStat = chartAllLyonStat.concat(_this2.allChart.filter(function (stat) {
                      return stat.subid.endsWith(tagSub['subid']);
                    }));
                  } else if (tagSub['filterTag'] == "ExactValue") {
                    chartAllLyonStat = chartAllLyonStat.concat(_this2.allChart.filter(function (stat) {
                      return stat.subid == tagSub['subid'];
                    }));
                  }
                } //duplicated remove

              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              var filter_data = chartAllLyonStat.filter(function (thing, index, self) {
                return index === self.findIndex(function (t) {
                  return t.date === thing.date && t.subid === thing.subid;
                });
              }); // filter_data.map(f =>{
              //   f.revenue = parseFloat(f.revenue) * parseFloat(f.split)/100;
              // })

              filter_data = filter_data.slice().sort(function (a, b) {
                return a.date - b.date;
              });
              var helperChart = {};
              var resultChart = filter_data.reduce(function (r, o) {
                var key = o.date;

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

              var _iterator2 = _createForOfIteratorHelper(resultChart),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var resVal = _step2.value;
                  revenuePerDayVal.push(resVal.revenue);
                  datesOfRevenueVal.push(resVal.date);
                  searchesPerDayVal.push(resVal.searches);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
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
          key: "refreshTable",
          value: function refreshTable() {
            this.cdr.markForCheck();
          }
        }, {
          key: "getPerionChartMetrics",
          value: function getPerionChartMetrics(company, startDate, endDate) {
            var _this3 = this;

            return this.perionService.getPerTagPerionStats(this.selectedCompany, startDate, endDate).toPromise().then(function (response) {
              _this3.allPerionChart = response;
              var chartAllPerionStat = [];

              var _iterator3 = _createForOfIteratorHelper(_this3.tagRows.subids),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var tagSub = _step3.value;

                  if (tagSub['filterTag'] == "Contains") {
                    chartAllPerionStat = chartAllPerionStat.concat(_this3.allPerionChart.filter(function (stat) {
                      return stat.subid.includes(tagSub['subid']);
                    }));
                  } else if (tagSub['filterTag'] == "StartsWith") {
                    chartAllPerionStat = chartAllPerionStat.concat(_this3.allPerionChart.filter(function (stat) {
                      return stat.subid.startsWith(tagSub['subid']);
                    }));
                  } else if (tagSub['filterTag'] == "EndsWith") {
                    chartAllPerionStat = chartAllPerionStat.concat(_this3.allPerionChart.filter(function (stat) {
                      return stat.subid.endsWith(tagSub['subid']);
                    }));
                  } else if (tagSub['filterTag'] == "ExactValue") {
                    chartAllPerionStat = chartAllPerionStat.concat(_this3.allPerionChart.filter(function (stat) {
                      return stat.subid == tagSub['subid'];
                    }));
                  }
                } //duplicated remove

              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

              var filter_data = chartAllPerionStat.filter(function (thing, index, self) {
                return index === self.findIndex(function (t) {
                  return t.date === thing.date && t.subid === thing.subid;
                });
              });
              filter_data = filter_data.slice().sort(function (a, b) {
                return a.date - b.date;
              });
              var helperChart = {};
              var resultChart = filter_data.reduce(function (r, o) {
                var key = o.date;

                if (!helperChart[key]) {
                  helperChart[key] = Object.assign({}, o); // create a copy of o

                  r.push(helperChart[key]);
                } else {
                  helperChart[key].searches += parseInt(o.impressions);

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

              var _iterator4 = _createForOfIteratorHelper(resultChart),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var resVal = _step4.value;
                  revenuePerDayVal.push(resVal.revenue);
                  datesOfRevenueVal.push(resVal.date);
                  searchesPerDayVal.push(resVal.impressions);
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
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
          key: "getAllPerionStats",
          value: function getAllPerionStats(startDate, endDate, tag) {
            var _this4 = this;

            return this.perionService.getPerTagPerionStats(this.selectedCompany, startDate, endDate).toPromise().then(function (response) {
              _this4.allPerionStatData = response;
              var allPerionStat = [];

              var _iterator5 = _createForOfIteratorHelper(tag.subids),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var tagSub = _step5.value;

                  if (tagSub.filterTag == "Contains") {
                    allPerionStat = allPerionStat.concat(_this4.allPerionStatData.filter(function (stat) {
                      return stat.subid.includes(tagSub.subid);
                    }));
                    allPerionStat.map(function (stat) {
                      stat.publisher = tag.publisher ? tag.publisher.fullname : "No Publisher"; // stat.tagname = tag.name
                    });
                  } else if (tagSub.filterTag == "StartsWith") {
                    allPerionStat = allPerionStat.concat(_this4.allPerionStatData.filter(function (stat) {
                      return stat.subid.startsWith(tagSub.subid);
                    }));
                    allPerionStat.map(function (stat) {
                      stat.publisher = tag.publisher ? tag.publisher.fullname : "No Publisher"; // stat.tagname = tag.name
                    });
                  } else if (tagSub.filterTag == "EndsWith") {
                    allPerionStat = allPerionStat.concat(_this4.allPerionStatData.filter(function (stat) {
                      return stat.subid.endsWith(tagSub.subid);
                    }));
                    allPerionStat.map(function (stat) {
                      stat.publisher = tag.publisher ? tag.publisher.fullname : "No Publisher"; // stat.tagname = tag.name
                    });
                  } else if (tagSub.filterTag == "ExactValue") {
                    allPerionStat = allPerionStat.concat(_this4.allPerionStatData.filter(function (stat) {
                      return stat.subid == tagSub.subid;
                    }));
                    allPerionStat.map(function (stat) {
                      stat.publisher = tag.publisher ? tag.publisher.fullname : "No Publisher"; //stat.tagname = tag.name
                    });
                  }
                } //duplicated remove

              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }

              var filter_data = allPerionStat.filter(function (thing, index, self) {
                return index === self.findIndex(function (t) {
                  return t.date === thing.date && t.subid === thing.subid;
                });
              }); // let filtered_data = allPerionStat.filter((obj, pos, arr) => {
              //   return arr
              //     .map(mapObj => mapObj._id)
              //     .indexOf(obj._id) == pos;
              // });
              // var helper = {};
              // var resultAll = filtered_data.reduce(function(prev, current) {
              //   var key = (current.date).toString() + '-' + current.subid;
              //   if(!helper[key]) {
              //     helper[key] = Object.assign({}, current); // create a copy of o
              //     prev.push(helper[key]);
              //   } else {
              //     helper[key].clicks += parseInt(current.clicks);
              //     if(current.revenue) {
              //       helper[key].revenue += current.revenue;
              //     }
              //     helper[key].split += parseInt(current.split);
              //   }
              //   return prev;
              // }, []);
              // return resultAll.slice().sort((a, b) => b.date - a.date);

              return filter_data.slice().sort(function (a, b) {
                return b.date - a.date;
              });
            })["catch"](function (error) {
              return error;
            });
          }
        }, {
          key: "getAllLyonStats",
          value: function getAllLyonStats(startDate, endDate, tag) {
            var _this5 = this;

            return this.lyonService.getAllPublisherStats(startDate, endDate).toPromise().then(function (response) {
              _this5.allLyonStatData = response;
              var allLyonStat = [];

              var _iterator6 = _createForOfIteratorHelper(tag.subids),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var tagSub = _step6.value;

                  if (tagSub.filterTag == "Contains") {
                    allLyonStat = allLyonStat.concat(_this5.allLyonStatData.filter(function (stat) {
                      return stat.subid.includes(tagSub.subid);
                    }));
                    allLyonStat.map(function (stat) {
                      stat.publisher = tag.publisher ? tag.publisher.fullname : ""; // stat.tagname = tag.name
                    });
                  } else if (tagSub.filterTag == "StartsWith") {
                    allLyonStat = allLyonStat.concat(_this5.allLyonStatData.filter(function (stat) {
                      return stat.subid.startsWith(tagSub.subid);
                    }));
                    allLyonStat.map(function (stat) {
                      stat.publisher = tag.publisher ? tag.publisher.fullname : ""; // stat.tagname = tag.name
                    });
                  } else if (tagSub.filterTag == "EndsWith") {
                    allLyonStat = allLyonStat.concat(_this5.allLyonStatData.filter(function (stat) {
                      return stat.subid.endsWith(tagSub.subid);
                    }));
                    allLyonStat.map(function (stat) {
                      stat.publisher = tag.publisher ? tag.publisher.fullname : ""; // stat.tagname = tag.name
                    });
                  } else if (tagSub.filterTag == "ExactValue") {
                    allLyonStat = allLyonStat.concat(_this5.allLyonStatData.filter(function (stat) {
                      return stat.subid == tagSub.subid;
                    }));
                    allLyonStat.map(function (stat) {
                      stat.publisher = tag.publisher ? tag.publisher.fullname : ""; // stat.tagname = tag.name
                    });
                  }
                } //duplicated remove

              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }

              var filtered_data = allLyonStat.filter(function (thing, index, self) {
                return index === self.findIndex(function (t) {
                  return t.date === thing.date && t.subid === thing.subid;
                });
              }); // var helper = {};
              // filtered_data.map(f =>{
              //   f.revenue = parseFloat(f.revenue) * parseFloat(f.split)/100;
              // })
              // var resultAll = filtered_data.reduce(function(prev, current) {
              //   var key = (current.rptDate).toString() + '-' + current.subid;
              //   if(!helper[key]) {
              //     helper[key] = Object.assign({}, current); // create a copy of o
              //     prev.push(helper[key]);
              //   } else {
              //     helper[key].clicks += parseInt(current.clicks);
              //     helper[key].searches += parseInt(current.searches);
              //     if(current.biddedCtr) {
              //       helper[key].biddedCtr += current.biddedCtr;
              //     }
              //     if(current.ctr) {
              //       helper[key].ctr += current.ctr;
              //     }
              //     if(current.revenue) {
              //       helper[key].revenue += current.revenue;
              //     }
              //     helper[key].biddedSearches += parseInt(current.biddedSearches);
              //     helper[key].split += parseInt(current.split);
              //   }
              //   return prev;
              // }, []);
              //return resultAll.slice().sort((a, b) => b.rptDate - a.rptDate);

              return filtered_data.slice().sort(function (a, b) {
                return b.date - a.date;
              });
            })["catch"](function (error) {
              return error;
            });
          }
        }, {
          key: "getAllVerizonStats",
          value: function getAllVerizonStats(startDate, endDate, tag) {
            var _this6 = this;

            return this.verizonService.getAllPublisherVerizonStats(this.selectedCompany, startDate, endDate).toPromise().then(function (response) {
              _this6.allVerizonStatData = response.stats;
              var allVerizonStat = [];

              var _iterator7 = _createForOfIteratorHelper(tag.subids),
                  _step7;

              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var tagSub = _step7.value;

                  if (tagSub.filterTag == "Contains") {
                    allVerizonStat = allVerizonStat.concat(_this6.allVerizonStatData.filter(function (stat) {
                      return stat.subid.includes(tagSub.subid);
                    }));
                    allVerizonStat.map(function (stat) {
                      stat.publisher = tag.publisher ? tag.publisher.fullname : "";
                      stat.tagname = tag.name;
                    });
                  } else if (tagSub.filterTag == "StartsWith") {
                    allVerizonStat = allVerizonStat.concat(_this6.allVerizonStatData.filter(function (stat) {
                      return stat.subid.startsWith(tagSub.subid);
                    }));
                    allVerizonStat.map(function (stat) {
                      stat.publisher = tag.publisher ? tag.publisher.fullname : "";
                      stat.tagname = tag.name;
                    });
                  } else if (tagSub.filterTag == "EndsWith") {
                    allVerizonStat = allVerizonStat.concat(_this6.allVerizonStatData.filter(function (stat) {
                      return stat.subid.endsWith(tagSub.subid);
                    }));
                    allVerizonStat.map(function (stat) {
                      stat.publisher = tag.publisher ? tag.publisher.fullname : "";
                      stat.tagname = tag.name;
                    });
                  } else if (tagSub.filterTag == "ExactValue") {
                    allVerizonStat = allVerizonStat.concat(_this6.allVerizonStatData.filter(function (stat) {
                      return stat.subid == tagSub.subid;
                    }));
                    allVerizonStat.map(function (stat) {
                      stat.publisher = tag.publisher ? tag.publisher.fullname : "";
                      stat.tagname = tag.name;
                    });
                  }
                } //duplicated remove

              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }

              var filtered_data = allVerizonStat.filter(function (thing, index, self) {
                return index === self.findIndex(function (t) {
                  return t.date === thing.date && t.subid === thing.subid;
                });
              }); // var helper = {};
              // filtered_data.map(f =>{
              //   f.revenue = parseFloat(f.revenue) * parseFloat(f.split)/100;
              // })

              return filtered_data.slice().sort(function (a, b) {
                return b.date - a.date;
              });
            })["catch"](function (error) {
              return error;
            });
          }
        }, {
          key: "getVerizonChartMetrics",
          value: function getVerizonChartMetrics(company, startDate, endDate) {
            var _this7 = this;

            return this.verizonService.getAllPublisherVerizonStats(this.selectedCompany, startDate, endDate).toPromise().then(function (response) {
              _this7.allVerizonChart = response.stats;
              var chartAllVerizonStat = [];

              var _iterator8 = _createForOfIteratorHelper(_this7.tagRows.subids),
                  _step8;

              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var tagSub = _step8.value;

                  if (tagSub['filterTag'] == "Contains") {
                    chartAllVerizonStat = chartAllVerizonStat.concat(_this7.allVerizonChart.filter(function (stat) {
                      return stat.subid.includes(tagSub['subid']);
                    }));
                  } else if (tagSub['filterTag'] == "StartsWith") {
                    chartAllVerizonStat = chartAllVerizonStat.concat(_this7.allVerizonChart.filter(function (stat) {
                      return stat.subid.startsWith(tagSub['subid']);
                    }));
                  } else if (tagSub['filterTag'] == "EndsWith") {
                    chartAllVerizonStat = chartAllVerizonStat.concat(_this7.allVerizonChart.filter(function (stat) {
                      return stat.subid.endsWith(tagSub['subid']);
                    }));
                  } else if (tagSub['filterTag'] == "ExactValue") {
                    chartAllVerizonStat = chartAllVerizonStat.concat(_this7.allVerizonChart.filter(function (stat) {
                      return stat.subid == tagSub['subid'];
                    }));
                  }
                } //duplicated remove

              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }

              var filter_data = chartAllVerizonStat.filter(function (thing, index, self) {
                return index === self.findIndex(function (t) {
                  return t.date === thing.date && t.subid === thing.subid;
                });
              }); // filter_data.map(f =>{
              //   f.revenue = parseFloat(f.revenue) * parseFloat(f.split)/100;
              // })

              filter_data = filter_data.slice().sort(function (a, b) {
                return a.date - b.date;
              });
              var helperChart = {};
              var resultChart = filter_data.reduce(function (r, o) {
                var key = o.date;

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

              var _iterator9 = _createForOfIteratorHelper(resultChart),
                  _step9;

              try {
                for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                  var resVal = _step9.value;
                  revenuePerDayVal.push(resVal.revenue);
                  datesOfRevenueVal.push(resVal.date);
                  searchesPerDayVal.push(resVal.searches);
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
          key: "getRubiAllStats",
          value: function getRubiAllStats(startDate, endDate, tag) {
            var _this8 = this;

            return this.rubiService.getAllRubiStats(this.selectedCompany, startDate, endDate).toPromise().then(function (res) {
              _this8.allRubiStatData = res.stats;
              var allRubiStat = [];

              var _iterator10 = _createForOfIteratorHelper(tag.subids),
                  _step10;

              try {
                for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                  var tagSub = _step10.value;

                  if (tagSub.filterTag == "Contains") {
                    allRubiStat = allRubiStat.concat(_this8.allRubiStatData.filter(function (stat) {
                      return stat.subid.includes(tagSub.subid);
                    }));
                    allRubiStat.map(function (stat) {
                      stat.publisher = tag.publisher ? tag.publisher.fullname : ""; // stat.tagname = tag.name
                    });
                  } else if (tagSub.filterTag == "StartsWith") {
                    allRubiStat = allRubiStat.concat(_this8.allRubiStatData.filter(function (stat) {
                      return stat.subid.startsWith(tagSub.subid);
                    }));
                    allRubiStat.map(function (stat) {
                      stat.publisher = tag.publisher ? tag.publisher.fullname : ""; // stat.tagname = tag.name
                    });
                  } else if (tagSub.filterTag == "EndsWith") {
                    allRubiStat = allRubiStat.concat(_this8.allRubiStatData.filter(function (stat) {
                      return stat.subid.endsWith(tagSub.subid);
                    }));
                    allRubiStat.map(function (stat) {
                      stat.publisher = tag.publisher ? tag.publisher.fullname : ""; // stat.tagname = tag.name
                    });
                  } else if (tagSub.filterTag == "ExactValue") {
                    allRubiStat = allRubiStat.concat(_this8.allRubiStatData.filter(function (stat) {
                      return stat.subid == tagSub.subid;
                    }));
                    allRubiStat.map(function (stat) {
                      stat.publisher = tag.publisher ? tag.publisher.fullname : ""; // stat.tagname = tag.name
                    });
                  }
                } //duplicated remove

              } catch (err) {
                _iterator10.e(err);
              } finally {
                _iterator10.f();
              }

              var filtered_data = allRubiStat.filter(function (thing, index, self) {
                return index === self.findIndex(function (t) {
                  return t.date === thing.date && t.subid === thing.subid;
                });
              }); // // var helper = {};
              // filtered_data.map(f =>{
              //   f.revenue = parseFloat(f.revenue) * parseFloat(f.split)/100;
              //   f.cpc = parseFloat(f.revenue)/parseFloat(f.clicks);
              // })

              return filtered_data.slice().sort(function (a, b) {
                return b.date - a.date;
              });
            })["catch"](function (error) {
              return error;
            });
          }
        }, {
          key: "getRubiChartMetrics",
          value: function getRubiChartMetrics(company, startDate, endDate) {
            var _this9 = this;

            return this.rubiService.getAllRubiStats(this.selectedCompany, startDate, endDate).toPromise().then(function (response) {
              _this9.allRubiChart = response.stats;
              var chartAllRubiStat = [];

              var _iterator11 = _createForOfIteratorHelper(_this9.tagRows.subids),
                  _step11;

              try {
                for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                  var tagSub = _step11.value;

                  if (tagSub['filterTag'] == "Contains") {
                    chartAllRubiStat = chartAllRubiStat.concat(_this9.allRubiChart.filter(function (stat) {
                      return stat.subid.includes(tagSub['subid']);
                    }));
                  } else if (tagSub['filterTag'] == "StartsWith") {
                    chartAllRubiStat = chartAllRubiStat.concat(_this9.allRubiChart.filter(function (stat) {
                      return stat.subid.startsWith(tagSub['subid']);
                    }));
                  } else if (tagSub['filterTag'] == "EndsWith") {
                    chartAllRubiStat = chartAllRubiStat.concat(_this9.allRubiChart.filter(function (stat) {
                      return stat.subid.endsWith(tagSub['subid']);
                    }));
                  } else if (tagSub['filterTag'] == "ExactValue") {
                    chartAllRubiStat = chartAllRubiStat.concat(_this9.allRubiChart.filter(function (stat) {
                      return stat.subid == tagSub['subid'];
                    }));
                  }
                } //duplicated remove

              } catch (err) {
                _iterator11.e(err);
              } finally {
                _iterator11.f();
              }

              var filter_data = chartAllRubiStat.filter(function (thing, index, self) {
                return index === self.findIndex(function (t) {
                  return t.date === thing.date && t.subid === thing.subid;
                });
              }); // filter_data.map(f =>{
              //   f.revenue = parseFloat(f.revenue) * parseFloat(f.split)/100;
              // })

              filter_data = filter_data.slice().sort(function (a, b) {
                return a.date - b.date;
              });
              var helperChart = {};
              var resultChart = filter_data.reduce(function (r, o) {
                var key = o.date;

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

              var _iterator12 = _createForOfIteratorHelper(resultChart),
                  _step12;

              try {
                for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                  var resVal = _step12.value;
                  revenuePerDayVal.push(resVal.revenue);
                  datesOfRevenueVal.push(resVal.date);
                  searchesPerDayVal.push(resVal.searches);
                }
              } catch (err) {
                _iterator12.e(err);
              } finally {
                _iterator12.f();
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
          key: "getSolexBCAllStats",
          value: function getSolexBCAllStats(startDate, endDate, tag) {
            var _this10 = this;

            return this.solexbcService.getAllSolexBCStats(this.selectedCompany, startDate, endDate).toPromise().then(function (res) {
              _this10.allSolexBCStatData = res.stats;
              var allSolexBCStat = [];

              var _iterator13 = _createForOfIteratorHelper(tag.subids),
                  _step13;

              try {
                for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                  var tagSub = _step13.value;

                  if (tagSub.filterTag == "Contains") {
                    allSolexBCStat = allSolexBCStat.concat(_this10.allSolexBCStatData.filter(function (stat) {
                      return stat.subid.includes(tagSub.subid);
                    }));
                    allSolexBCStat.map(function (stat) {
                      stat.publisher = tag.publisher ? tag.publisher.fullname : ""; // stat.tagname = tag.name
                    });
                  } else if (tagSub.filterTag == "StartsWith") {
                    allSolexBCStat = allSolexBCStat.concat(_this10.allSolexBCStatData.filter(function (stat) {
                      return stat.subid.startsWith(tagSub.subid);
                    }));
                    allSolexBCStat.map(function (stat) {
                      stat.publisher = tag.publisher ? tag.publisher.fullname : ""; // stat.tagname = tag.name
                    });
                  } else if (tagSub.filterTag == "EndsWith") {
                    allSolexBCStat = allSolexBCStat.concat(_this10.allSolexBCStatData.filter(function (stat) {
                      return stat.subid.endsWith(tagSub.subid);
                    }));
                    allSolexBCStat.map(function (stat) {
                      stat.publisher = tag.publisher ? tag.publisher.fullname : ""; // stat.tagname = tag.name
                    });
                  } else if (tagSub.filterTag == "ExactValue") {
                    allSolexBCStat = allSolexBCStat.concat(_this10.allSolexBCStatData.filter(function (stat) {
                      return stat.subid == tagSub.subid;
                    }));
                    allSolexBCStat.map(function (stat) {
                      stat.publisher = tag.publisher ? tag.publisher.fullname : ""; // stat.tagname = tag.name
                    });
                  }
                } //duplicated remove

              } catch (err) {
                _iterator13.e(err);
              } finally {
                _iterator13.f();
              }

              var filtered_data = allSolexBCStat.filter(function (thing, index, self) {
                return index === self.findIndex(function (t) {
                  return t.date === thing.date && t.subid === thing.subid;
                });
              }); // // var helper = {};
              // filtered_data.map(f =>{
              //   f.revenue = parseFloat(f.revenue) * parseFloat(f.split)/100;
              //   f.cpc = parseFloat(f.revenue)/parseFloat(f.clicks);
              // })

              return filtered_data.slice().sort(function (a, b) {
                return b.date - a.date;
              });
            })["catch"](function (error) {
              return error;
            });
          }
        }, {
          key: "getSolexBCChartMetrics",
          value: function getSolexBCChartMetrics(company, startDate, endDate) {
            var _this11 = this;

            return this.solexbcService.getAllSolexBCStats(this.selectedCompany, startDate, endDate).toPromise().then(function (response) {
              _this11.allSolexBCChart = response.stats;
              var chartAllSolexbcStat = [];

              var _iterator14 = _createForOfIteratorHelper(_this11.tagRows.subids),
                  _step14;

              try {
                for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                  var tagSub = _step14.value;

                  if (tagSub['filterTag'] == "Contains") {
                    chartAllSolexbcStat = chartAllSolexbcStat.concat(_this11.allSolexBCChart.filter(function (stat) {
                      return stat.subid.includes(tagSub['subid']);
                    }));
                  } else if (tagSub['filterTag'] == "StartsWith") {
                    chartAllSolexbcStat = chartAllSolexbcStat.concat(_this11.allSolexBCChart.filter(function (stat) {
                      return stat.subid.startsWith(tagSub['subid']);
                    }));
                  } else if (tagSub['filterTag'] == "EndsWith") {
                    chartAllSolexbcStat = chartAllSolexbcStat.concat(_this11.allSolexBCChart.filter(function (stat) {
                      return stat.subid.endsWith(tagSub['subid']);
                    }));
                  } else if (tagSub['filterTag'] == "ExactValue") {
                    chartAllSolexbcStat = chartAllSolexbcStat.concat(_this11.allSolexBCChart.filter(function (stat) {
                      return stat.subid == tagSub['subid'];
                    }));
                  }
                } //duplicated remove

              } catch (err) {
                _iterator14.e(err);
              } finally {
                _iterator14.f();
              }

              var filter_data = chartAllSolexbcStat.filter(function (thing, index, self) {
                return index === self.findIndex(function (t) {
                  return t.date === thing.date && t.subid === thing.subid;
                });
              }); // filter_data.map(f =>{
              //   f.revenue = parseFloat(f.revenue) * parseFloat(f.split)/100;
              // })

              filter_data = filter_data.slice().sort(function (a, b) {
                return a.date - b.date;
              });
              var helperChart = {};
              var resultChart = filter_data.reduce(function (r, o) {
                var key = o.date;

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

              var _iterator15 = _createForOfIteratorHelper(resultChart),
                  _step15;

              try {
                for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                  var resVal = _step15.value;
                  revenuePerDayVal.push(resVal.revenue);
                  datesOfRevenueVal.push(resVal.date);
                  searchesPerDayVal.push(resVal.searches);
                }
              } catch (err) {
                _iterator15.e(err);
              } finally {
                _iterator15.f();
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
          key: "getSystem1AllStats",
          value: function getSystem1AllStats(startDate, endDate, tag) {
            var _this12 = this;

            return this.system1Service.getSystem1PublisherStats(this.selectedCompany, startDate, endDate).toPromise().then(function (res) {
              _this12.allSolexBCStatData = res.stats;
              var allSolexBCStat = [];

              var _iterator16 = _createForOfIteratorHelper(tag.subids),
                  _step16;

              try {
                for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                  var tagSub = _step16.value;

                  if (tagSub.filterTag == "Contains") {
                    allSolexBCStat = allSolexBCStat.concat(_this12.allSolexBCStatData.filter(function (stat) {
                      return stat.subid.includes(tagSub.subid);
                    }));
                    allSolexBCStat.map(function (stat) {
                      stat.publisher = tag.publisher ? tag.publisher.fullname : ""; // stat.tagname = tag.name
                    });
                  } else if (tagSub.filterTag == "StartsWith") {
                    allSolexBCStat = allSolexBCStat.concat(_this12.allSolexBCStatData.filter(function (stat) {
                      return stat.subid.startsWith(tagSub.subid);
                    }));
                    allSolexBCStat.map(function (stat) {
                      stat.publisher = tag.publisher ? tag.publisher.fullname : ""; // stat.tagname = tag.name
                    });
                  } else if (tagSub.filterTag == "EndsWith") {
                    allSolexBCStat = allSolexBCStat.concat(_this12.allSolexBCStatData.filter(function (stat) {
                      return stat.subid.endsWith(tagSub.subid);
                    }));
                    allSolexBCStat.map(function (stat) {
                      stat.publisher = tag.publisher ? tag.publisher.fullname : ""; // stat.tagname = tag.name
                    });
                  } else if (tagSub.filterTag == "ExactValue") {
                    allSolexBCStat = allSolexBCStat.concat(_this12.allSolexBCStatData.filter(function (stat) {
                      return stat.subid == tagSub.subid;
                    }));
                    allSolexBCStat.map(function (stat) {
                      stat.publisher = tag.publisher ? tag.publisher.fullname : ""; // stat.tagname = tag.name
                    });
                  }
                } //duplicated remove

              } catch (err) {
                _iterator16.e(err);
              } finally {
                _iterator16.f();
              }

              var filtered_data = allSolexBCStat.filter(function (thing, index, self) {
                return index === self.findIndex(function (t) {
                  return t.date === thing.date && t.subid === thing.subid;
                });
              }); // // var helper = {};
              // filtered_data.map(f =>{
              //   f.revenue = parseFloat(f.revenue) * parseFloat(f.split)/100;
              //   f.cpc = parseFloat(f.revenue)/parseFloat(f.clicks);
              // })

              return filtered_data.slice().sort(function (a, b) {
                return b.date - a.date;
              });
            })["catch"](function (error) {
              return error;
            });
          }
        }, {
          key: "getSystem1ChartMetrics",
          value: function getSystem1ChartMetrics(company, startDate, endDate) {
            var _this13 = this;

            return this.system1Service.getSystem1PublisherStats(this.selectedCompany, startDate, endDate).toPromise().then(function (response) {
              _this13.allSolexBCChart = response.stats;
              var chartAllSolexbcStat = [];

              var _iterator17 = _createForOfIteratorHelper(_this13.tagRows.subids),
                  _step17;

              try {
                for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                  var tagSub = _step17.value;

                  if (tagSub['filterTag'] == "Contains") {
                    chartAllSolexbcStat = chartAllSolexbcStat.concat(_this13.allSolexBCChart.filter(function (stat) {
                      return stat.subid.includes(tagSub['subid']);
                    }));
                  } else if (tagSub['filterTag'] == "StartsWith") {
                    chartAllSolexbcStat = chartAllSolexbcStat.concat(_this13.allSolexBCChart.filter(function (stat) {
                      return stat.subid.startsWith(tagSub['subid']);
                    }));
                  } else if (tagSub['filterTag'] == "EndsWith") {
                    chartAllSolexbcStat = chartAllSolexbcStat.concat(_this13.allSolexBCChart.filter(function (stat) {
                      return stat.subid.endsWith(tagSub['subid']);
                    }));
                  } else if (tagSub['filterTag'] == "ExactValue") {
                    chartAllSolexbcStat = chartAllSolexbcStat.concat(_this13.allSolexBCChart.filter(function (stat) {
                      return stat.subid == tagSub['subid'];
                    }));
                  }
                } //duplicated remove

              } catch (err) {
                _iterator17.e(err);
              } finally {
                _iterator17.f();
              }

              var filter_data = chartAllSolexbcStat.filter(function (thing, index, self) {
                return index === self.findIndex(function (t) {
                  return t.date === thing.date && t.subid === thing.subid;
                });
              }); // filter_data.map(f =>{
              //   f.revenue = parseFloat(f.revenue) * parseFloat(f.split)/100;
              // })

              filter_data = filter_data.slice().sort(function (a, b) {
                return a.date - b.date;
              });
              var helperChart = {};
              var resultChart = filter_data.reduce(function (r, o) {
                var key = o.date;

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

              var _iterator18 = _createForOfIteratorHelper(resultChart),
                  _step18;

              try {
                for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                  var resVal = _step18.value;
                  revenuePerDayVal.push(resVal.revenue);
                  datesOfRevenueVal.push(resVal.date);
                  searchesPerDayVal.push(resVal.searches);
                }
              } catch (err) {
                _iterator18.e(err);
              } finally {
                _iterator18.f();
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
          key: "getApptitudePublisherStats",
          value: function getApptitudePublisherStats(startDate, endDate, tag) {
            var _this14 = this;

            return this.apptitudeService.getPublisherApptitudeStats(this.selectedCompany, startDate, endDate).toPromise().then(function (res) {
              _this14.allApptitudeStatData = res.stats;
              var allApptitudeStat = [];

              var _iterator19 = _createForOfIteratorHelper(tag.subids),
                  _step19;

              try {
                for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                  var tagSub = _step19.value;

                  if (tagSub.filterTag == "Contains") {
                    allApptitudeStat = allApptitudeStat.concat(_this14.allApptitudeStatData.filter(function (stat) {
                      return stat.subid.includes(tagSub.subid);
                    }));
                    allApptitudeStat.map(function (stat) {
                      stat.publisher = tag.publisher ? tag.publisher.fullname : ""; // stat.tagname = tag.name
                    });
                  } else if (tagSub.filterTag == "StartsWith") {
                    allApptitudeStat = allApptitudeStat.concat(_this14.allApptitudeStatData.filter(function (stat) {
                      return stat.subid.startsWith(tagSub.subid);
                    }));
                    allApptitudeStat.map(function (stat) {
                      stat.publisher = tag.publisher ? tag.publisher.fullname : ""; // stat.tagname = tag.name
                    });
                  } else if (tagSub.filterTag == "EndsWith") {
                    allApptitudeStat = allApptitudeStat.concat(_this14.allApptitudeStatData.filter(function (stat) {
                      return stat.subid.endsWith(tagSub.subid);
                    }));
                    allApptitudeStat.map(function (stat) {
                      stat.publisher = tag.publisher ? tag.publisher.fullname : ""; // stat.tagname = tag.name
                    });
                  } else if (tagSub.filterTag == "ExactValue") {
                    allApptitudeStat = allApptitudeStat.concat(_this14.allApptitudeStatData.filter(function (stat) {
                      return stat.subid == tagSub.subid;
                    }));
                    allApptitudeStat.map(function (stat) {
                      stat.publisher = tag.publisher ? tag.publisher.fullname : ""; // stat.tagname = tag.name
                    });
                  }
                } //duplicated remove

              } catch (err) {
                _iterator19.e(err);
              } finally {
                _iterator19.f();
              }

              var filtered_data = allApptitudeStat.filter(function (thing, index, self) {
                return index === self.findIndex(function (t) {
                  return t.date === thing.date && t.subid === thing.subid;
                });
              });
              return filtered_data.slice().sort(function (a, b) {
                return b.date - a.date;
              });
            })["catch"](function (error) {
              return error;
            });
          }
        }, {
          key: "getApptitudeChartMetrics",
          value: function getApptitudeChartMetrics(company, startDate, endDate) {
            var _this15 = this;

            return this.apptitudeService.getPublisherApptitudeStats(this.selectedCompany, startDate, endDate).toPromise().then(function (response) {
              _this15.allApptitudeChart = response.stats;
              var chatAllApptitudeStat = [];

              var _iterator20 = _createForOfIteratorHelper(_this15.tagRows.subids),
                  _step20;

              try {
                for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                  var tagSub = _step20.value;

                  if (tagSub['filterTag'] == "Contains") {
                    chatAllApptitudeStat = chatAllApptitudeStat.concat(_this15.allApptitudeChart.filter(function (stat) {
                      return stat.subid.includes(tagSub['subid']);
                    }));
                  } else if (tagSub['filterTag'] == "StartsWith") {
                    chatAllApptitudeStat = chatAllApptitudeStat.concat(_this15.allApptitudeChart.filter(function (stat) {
                      return stat.subid.startsWith(tagSub['subid']);
                    }));
                  } else if (tagSub['filterTag'] == "EndsWith") {
                    chatAllApptitudeStat = chatAllApptitudeStat.concat(_this15.allApptitudeChart.filter(function (stat) {
                      return stat.subid.endsWith(tagSub['subid']);
                    }));
                  } else if (tagSub['filterTag'] == "ExactValue") {
                    chatAllApptitudeStat = chatAllApptitudeStat.concat(_this15.allApptitudeChart.filter(function (stat) {
                      return stat.subid == tagSub['subid'];
                    }));
                  }
                } //duplicated remove

              } catch (err) {
                _iterator20.e(err);
              } finally {
                _iterator20.f();
              }

              var filter_data = chatAllApptitudeStat.filter(function (thing, index, self) {
                return index === self.findIndex(function (t) {
                  return t.date === thing.date && t.subid === thing.subid;
                });
              });
              filter_data = filter_data.slice().sort(function (a, b) {
                return a.date - b.date;
              });
              var helperChart = {};
              var resultChart = filter_data.reduce(function (r, o) {
                var key = o.date;

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

              var _iterator21 = _createForOfIteratorHelper(resultChart),
                  _step21;

              try {
                for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                  var resVal = _step21.value;
                  revenuePerDayVal.push(resVal.revenue);
                  datesOfRevenueVal.push(resVal.date);
                  searchesPerDayVal.push(resVal.searches);
                }
              } catch (err) {
                _iterator21.e(err);
              } finally {
                _iterator21.f();
              }

              chartDataValue['revenuePerDay'] = revenuePerDayVal;
              chartDataValue['datesOfRevenue'] = datesOfRevenueVal;
              chartDataValue['searchesPerDay'] = searchesPerDayVal;
              return chartDataValue;
            })["catch"](function (error) {
              return error;
            });
          }
        }]);

        return PublisherComponent;
      }();

      PublisherComponent.ɵfac = function PublisherComponent_Factory(t) {
        return new (t || PublisherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_2__["TagManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_admin_stats_perion_service__WEBPACK_IMPORTED_MODULE_4__["PerionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_admin_stats_lyon_service__WEBPACK_IMPORTED_MODULE_5__["LyonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_admin_stats_verizon_service__WEBPACK_IMPORTED_MODULE_6__["VerizonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_admin_stats_rubi_service__WEBPACK_IMPORTED_MODULE_7__["RubiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_admin_stats_solexbc_service__WEBPACK_IMPORTED_MODULE_8__["SolexBCService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_admin_stats_system1_service__WEBPACK_IMPORTED_MODULE_9__["System1Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_admin_stats_apptitude_service__WEBPACK_IMPORTED_MODULE_10__["ApptitudeService"]));
      };

      PublisherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PublisherComponent,
        selectors: [["app-publisher"]],
        viewQuery: function PublisherComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 27,
        vars: 14,
        consts: [[3, "onDatesPicked"], [3, "chartData", 4, "ngIf"], [1, "material", "fullscreen", "expandable", 2, "top", "30px", "height", "500px", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "scrollbarH", "rows"], ["expandableTable", ""], [3, "rowHeight", "toggle"], ["myDetailRow", ""], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["ngx-datatable-cell-template", ""], ["name", "date"], ["ngx-datatable-header-template", ""], ["name", "publisher"], ["name", "searches"], ["name", "ctr"], ["name", "cpc"], ["name", "revenue"], [3, "chartData"], [2, "padding-left", "35px"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 3, "click"]],
        template: function PublisherComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-reporting-filtering", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onDatesPicked", function PublisherComponent_Template_app_reporting_filtering_onDatesPicked_0_listener($event) {
              return ctx.updateReportingFiltering($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PublisherComponent_app_reporting_revenue_chart_1_Template, 1, 1, "app-reporting-revenue-chart", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ngx-datatable", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngx-datatable-row-detail", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggle", function PublisherComponent_Template_ngx_datatable_row_detail_toggle_4_listener($event) {
              return ctx.onDetailToggle($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PublisherComponent_ng_template_6_Template, 6, 0, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ngx-datatable-column", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PublisherComponent_ng_template_8_Template, 1, 4, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngx-datatable-column", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PublisherComponent_ng_template_10_Template, 1, 0, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PublisherComponent_ng_template_11_Template, 3, 3, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ngx-datatable-column", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PublisherComponent_ng_template_13_Template, 1, 0, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PublisherComponent_ng_template_14_Template, 2, 1, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ngx-datatable-column", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PublisherComponent_ng_template_16_Template, 1, 0, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PublisherComponent_ng_template_17_Template, 2, 1, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ngx-datatable-column", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PublisherComponent_ng_template_19_Template, 1, 0, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PublisherComponent_ng_template_20_Template, 4, 6, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ngx-datatable-column", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PublisherComponent_ng_template_22_Template, 1, 0, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, PublisherComponent_ng_template_23_Template, 3, 4, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ngx-datatable-column", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, PublisherComponent_ng_template_25_Template, 1, 0, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, PublisherComponent_ng_template_26_Template, 3, 4, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chartData);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnMode", "force")("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("scrollbarH", true)("rows", ctx.statData);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowHeight", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 50)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);
          }
        },
        directives: [_shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_11__["ReportingFilteringComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__["DatatableRowDetailDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__["DatatableRowDetailTemplateDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__["DataTableColumnCellDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__["DataTableColumnHeaderDirective"], _shared_modules_reporting_revenue_chart_reporting_revenue_chart_component__WEBPACK_IMPORTED_MODULE_14__["ReportingRevenueChartComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHVibGlzaGVyLXJlcG9ydGluZy9wdWJsaXNoZXIvcHVibGlzaGVyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublisherComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-publisher',
            templateUrl: './publisher.component.html',
            styleUrls: ['./publisher.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_2__["TagManagementService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _shared_service_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]
          }, {
            type: src_app_shared_service_admin_stats_perion_service__WEBPACK_IMPORTED_MODULE_4__["PerionService"]
          }, {
            type: src_app_shared_service_admin_stats_lyon_service__WEBPACK_IMPORTED_MODULE_5__["LyonService"]
          }, {
            type: src_app_shared_service_admin_stats_verizon_service__WEBPACK_IMPORTED_MODULE_6__["VerizonService"]
          }, {
            type: src_app_shared_service_admin_stats_rubi_service__WEBPACK_IMPORTED_MODULE_7__["RubiService"]
          }, {
            type: src_app_shared_service_admin_stats_solexbc_service__WEBPACK_IMPORTED_MODULE_8__["SolexBCService"]
          }, {
            type: src_app_shared_service_admin_stats_system1_service__WEBPACK_IMPORTED_MODULE_9__["System1Service"]
          }, {
            type: src_app_shared_service_admin_stats_apptitude_service__WEBPACK_IMPORTED_MODULE_10__["ApptitudeService"]
          }];
        }, {
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['expandableTable']
          }]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-publisher-reporting-publisher-reporting-module-es5.js.map