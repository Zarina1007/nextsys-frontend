(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-publisher-reporting-publisher-reporting-module"], {
    /***/
    "./node_modules/file-saver/dist/FileSaver.min.js":
    /*!*******************************************************!*\
      !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function node_modulesFileSaverDistFileSaverMinJs(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

      (function (a, b) {
        if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = b, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
      })(this, function () {
        "use strict";

        function b(a, b) {
          return "undefined" == typeof b ? b = {
            autoBom: !1
          } : "object" != typeof b && (console.warn("Deprecated: Expected third argument to be a object"), b = {
            autoBom: !b
          }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["\uFEFF", a], {
            type: a.type
          }) : a;
        }

        function c(b, c, d) {
          var e = new XMLHttpRequest();
          e.open("GET", b), e.responseType = "blob", e.onload = function () {
            a(e.response, c, d);
          }, e.onerror = function () {
            console.error("could not download file");
          }, e.send();
        }

        function d(a) {
          var b = new XMLHttpRequest();
          b.open("HEAD", a, !1);

          try {
            b.send();
          } catch (a) {}

          return 200 <= b.status && 299 >= b.status;
        }

        function e(a) {
          try {
            a.dispatchEvent(new MouseEvent("click"));
          } catch (c) {
            var b = document.createEvent("MouseEvents");
            b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b);
          }
        }

        var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0,
            a = f.saveAs || ("object" != typeof window || window !== f ? function () {} : "download" in HTMLAnchorElement.prototype ? function (b, g, h) {
          var i = f.URL || f.webkitURL,
              j = document.createElement("a");
          g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function () {
            i.revokeObjectURL(j.href);
          }, 4E4), setTimeout(function () {
            e(j);
          }, 0));
        } : "msSaveOrOpenBlob" in navigator ? function (f, g, h) {
          if (g = g || f.name || "download", "string" != typeof f) navigator.msSaveOrOpenBlob(b(f, h), g);else if (d(f)) c(f, g, h);else {
            var i = document.createElement("a");
            i.href = f, i.target = "_blank", setTimeout(function () {
              e(i);
            });
          }
        } : function (a, b, d, e) {
          if (e = e || open("", "_blank"), e && (e.document.title = e.document.body.innerText = "downloading..."), "string" == typeof a) return c(a, b, d);
          var g = "application/octet-stream" === a.type,
              h = /constructor/i.test(f.HTMLElement) || f.safari,
              i = /CriOS\/[\d]+/.test(navigator.userAgent);

          if ((i || g && h) && "object" == typeof FileReader) {
            var j = new FileReader();
            j.onloadend = function () {
              var a = j.result;
              a = i ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), e ? e.location.href = a : location = a, e = null;
            }, j.readAsDataURL(a);
          } else {
            var k = f.URL || f.webkitURL,
                l = k.createObjectURL(a);
            e ? e.location = l : location.href = l, e = null, setTimeout(function () {
              k.revokeObjectURL(l);
            }, 4E4);
          }
        });
        f.saveAs = a.saveAs = a, true && (module.exports = a);
      }); //# sourceMappingURL=FileSaver.min.js.map

      /***/

    },

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
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]],
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
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]],
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


      var _tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../tag-management/tag-management.service */
      "./src/app/modules/tag-management/tag-management.service.ts");
      /* harmony import */


      var _shared_service_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../shared/service/users.service */
      "./src/app/shared/service/users.service.ts");
      /* harmony import */


      var src_app_shared_service_admin_stats_perion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/service/admin-stats/perion.service */
      "./src/app/shared/service/admin-stats/perion.service.ts");
      /* harmony import */


      var src_app_shared_service_admin_stats_lyon_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/service/admin-stats/lyon.service */
      "./src/app/shared/service/admin-stats/lyon.service.ts");
      /* harmony import */


      var src_app_shared_service_admin_stats_verizon_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/service/admin-stats/verizon.service */
      "./src/app/shared/service/admin-stats/verizon.service.ts");
      /* harmony import */


      var src_app_shared_service_admin_stats_rubi_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/service/admin-stats/rubi.service */
      "./src/app/shared/service/admin-stats/rubi.service.ts");
      /* harmony import */


      var src_app_shared_service_admin_stats_solexbc_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/service/admin-stats/solexbc.service */
      "./src/app/shared/service/admin-stats/solexbc.service.ts");
      /* harmony import */


      var src_app_shared_service_admin_stats_system1_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/service/admin-stats/system1.service */
      "./src/app/shared/service/admin-stats/system1.service.ts");
      /* harmony import */


      var src_app_shared_service_admin_stats_apptitude_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/service/admin-stats/apptitude.service */
      "./src/app/shared/service/admin-stats/apptitude.service.ts");
      /* harmony import */


      var src_app_shared_service_export_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/service/export-data.service */
      "./src/app/shared/service/export-data.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../shared/modules/reporting-filtering/reporting-filtering.component */
      "./src/app/shared/modules/reporting-filtering/reporting-filtering.component.ts");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var _shared_modules_reporting_publisher_revenue_chart_reporting_publisher_revenue_chart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../shared/modules/reporting-publisher-revenue-chart/reporting-publisher-revenue-chart.component */
      "./src/app/shared/modules/reporting-publisher-revenue-chart/reporting-publisher-revenue-chart.component.ts");

      var _c0 = ["expandableTable"];

      function PublisherComponent_app_reporting_publisher_revenue_chart_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-reporting-publisher-revenue-chart", 17);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("chartData", ctx_r0.chartData);
        }
      }

      function PublisherComponent_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);

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

      function PublisherComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PublisherComponent_ng_template_11_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

            var row_r17 = ctx.row;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r19.toggleExpandRow(row_r17);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var expanded_r18 = ctx.expanded;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("datatable-icon-right", !expanded_r18)("datatable-icon-down", expanded_r18);
        }
      }

      function PublisherComponent_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Date ");
        }
      }

      function PublisherComponent_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r22 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r22));
        }
      }

      function PublisherComponent_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Searches ");
        }
      }

      function PublisherComponent_ng_template_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r24 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r24);
        }
      }

      function PublisherComponent_ng_template_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " CPC ");
        }
      }

      function PublisherComponent_ng_template_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r26 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r26, "USD") || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, 0, "USD"));
        }
      }

      function PublisherComponent_ng_template_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " CTR ");
        }
      }

      function PublisherComponent_ng_template_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "percent");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "percent");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r28 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r28, "1.2-2") || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, 0, "1.2-2"));
        }
      }

      function PublisherComponent_ng_template_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Revenue ");
        }
      }

      function PublisherComponent_ng_template_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r30 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r30, "USD"));
        }
      }

      var PublisherComponent = /*#__PURE__*/function () {
        function PublisherComponent(route, tagManagementService, cdr, userService, perionService, lyonService, verizonService, rubiService, solexbcService, system1Service, apptitudeService, exportDataService, datePipe, currencyPipe, percentPipe) {
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
          this.exportDataService = exportDataService;
          this.datePipe = datePipe;
          this.currencyPipe = currencyPipe;
          this.percentPipe = percentPipe;
          this.loadingIndicator = true;
          this.range = {
            startDate: '',
            endDate: ''
          };
          this.selectedCompany = this.getSelectedCompanyFromLocalStorage();
        }

        _createClass(PublisherComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.users = [{
                        id: 1,
                        firstName: 'Mark',
                        lastName: 'Otto',
                        handle: '@mdo'
                      }, {
                        id: 2,
                        firstName: 'Jacob',
                        lastName: 'Thornton',
                        handle: '@fat'
                      }, {
                        id: 3,
                        firstName: 'Larry',
                        lastName: 'the Bird',
                        handle: '@twitter'
                      }];
                      this.route.params.subscribe(function (routeParams) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  this.statData = [];
                                  _context.next = 3;
                                  return this.getTagInformation(routeParams.tagId);

                                case 3:
                                  this.tagRows = _context.sent;
                                  this.selectedAdvertiser = this.tagRows.advertiser;
                                  this.selectedCompany = this.tagRows.company;

                                  if (!(this.selectedAdvertiser == "lyons")) {
                                    _context.next = 15;
                                    break;
                                  }

                                  _context.next = 9;
                                  return this.getLyonChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                                case 9:
                                  this.chartData = _context.sent;
                                  _context.next = 12;
                                  return this.getAllLyonStats(this.range.startDate, this.range.endDate, this.tagRows);

                                case 12:
                                  this.statData = _context.sent;
                                  _context.next = 67;
                                  break;

                                case 15:
                                  if (!(this.selectedAdvertiser == "perion")) {
                                    _context.next = 24;
                                    break;
                                  }

                                  _context.next = 18;
                                  return this.getPerionChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                                case 18:
                                  this.chartData = _context.sent;
                                  _context.next = 21;
                                  return this.getAllPerionStats(this.range.startDate, this.range.endDate, this.tagRows);

                                case 21:
                                  this.statData = _context.sent;
                                  _context.next = 67;
                                  break;

                                case 24:
                                  if (!(this.selectedAdvertiser == "verizon-direct")) {
                                    _context.next = 33;
                                    break;
                                  }

                                  _context.next = 27;
                                  return this.getVerizonChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                                case 27:
                                  this.chartData = _context.sent;
                                  _context.next = 30;
                                  return this.getAllVerizonStats(this.range.startDate, this.range.endDate, this.tagRows);

                                case 30:
                                  this.statData = _context.sent;
                                  _context.next = 67;
                                  break;

                                case 33:
                                  if (!(this.selectedAdvertiser == "rubi")) {
                                    _context.next = 42;
                                    break;
                                  }

                                  _context.next = 36;
                                  return this.getRubiChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                                case 36:
                                  this.chartData = _context.sent;
                                  _context.next = 39;
                                  return this.getRubiAllStats(this.range.startDate, this.range.endDate, this.tagRows);

                                case 39:
                                  this.statData = _context.sent;
                                  _context.next = 67;
                                  break;

                                case 42:
                                  if (!(this.selectedAdvertiser == "solex-bc")) {
                                    _context.next = 51;
                                    break;
                                  }

                                  _context.next = 45;
                                  return this.getSolexBCChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                                case 45:
                                  this.chartData = _context.sent;
                                  _context.next = 48;
                                  return this.getSolexBCAllStats(this.range.startDate, this.range.endDate, this.tagRows);

                                case 48:
                                  this.statData = _context.sent;
                                  _context.next = 67;
                                  break;

                                case 51:
                                  if (!(this.selectedAdvertiser == "system1")) {
                                    _context.next = 60;
                                    break;
                                  }

                                  _context.next = 54;
                                  return this.getSystem1ChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                                case 54:
                                  this.chartData = _context.sent;
                                  _context.next = 57;
                                  return this.getSystem1AllStats(this.range.startDate, this.range.endDate, this.tagRows);

                                case 57:
                                  this.statData = _context.sent;
                                  _context.next = 67;
                                  break;

                                case 60:
                                  if (!(this.selectedAdvertiser == "apptitude")) {
                                    _context.next = 67;
                                    break;
                                  }

                                  _context.next = 63;
                                  return this.getApptitudeChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                                case 63:
                                  this.chartData = _context.sent;
                                  _context.next = 66;
                                  return this.getApptitudePublisherStats(this.range.startDate, this.range.endDate, this.tagRows);

                                case 66:
                                  this.statData = _context.sent;

                                case 67:
                                  this.refreshTable();

                                case 68:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        }));
                      });

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
          value: function updateReportingFiltering(range) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
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
          }
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
              var publisherRevenuePerDayVal = [];
              var datesOfRevenueVal = [];
              var searchesPerDayVal = [];
              var chartDataValue = {};

              var _iterator2 = _createForOfIteratorHelper(resultChart),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var resVal = _step2.value;
                  revenuePerDayVal.push(0);
                  publisherRevenuePerDayVal.push(resVal.revenue);
                  datesOfRevenueVal.push(resVal.date);
                  searchesPerDayVal.push(resVal.searches);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              chartDataValue['revenuePerDay'] = revenuePerDayVal;
              chartDataValue['publisherRevenuePerDay'] = publisherRevenuePerDayVal;
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
          key: "exportToCsv",
          value: function exportToCsv() {
            var exportCov = [];

            var _iterator3 = _createForOfIteratorHelper(this.statData),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var statOne = _step3.value;
                var stat = {
                  date: this.datePipe.transform(statOne.date, "dd MMM yyyy"),
                  searches: statOne.searches,
                  cpc: this.currencyPipe.transform(statOne.cpc ? statOne.cpc : 0),
                  ctr: this.percentPipe.transform(statOne.ctr, "1.2-2"),
                  revenue: statOne.revenue
                };
                exportCov.push(stat);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            this.exportDataService.exportToCsv(exportCov, this.tagRows.nickName ? this.tagRows.nickName : this.tagRows.name, ['date', 'searches', 'cpc', 'ctr', 'revenue']);
          }
        }, {
          key: "getPerionChartMetrics",
          value: function getPerionChartMetrics(company, startDate, endDate) {
            var _this3 = this;

            return this.perionService.getPerTagPerionStats(this.selectedCompany, startDate, endDate).toPromise().then(function (response) {
              _this3.allPerionChart = response;
              var chartAllPerionStat = [];

              var _iterator4 = _createForOfIteratorHelper(_this3.tagRows.subids),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var tagSub = _step4.value;

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
                _iterator4.e(err);
              } finally {
                _iterator4.f();
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
              var publisherRevenuePerDayVal = [];
              var datesOfRevenueVal = [];
              var searchesPerDayVal = [];
              var chartDataValue = {};

              var _iterator5 = _createForOfIteratorHelper(resultChart),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var resVal = _step5.value;
                  revenuePerDayVal.push(0);
                  publisherRevenuePerDayVal.push(resVal.revenue);
                  datesOfRevenueVal.push(resVal.date);
                  searchesPerDayVal.push(resVal.impressions);
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }

              chartDataValue['revenuePerDay'] = revenuePerDayVal;
              chartDataValue['publisherRevenuePerDay'] = publisherRevenuePerDayVal;
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

              var _iterator6 = _createForOfIteratorHelper(tag.subids),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var tagSub = _step6.value;

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
                _iterator6.e(err);
              } finally {
                _iterator6.f();
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

              var _iterator7 = _createForOfIteratorHelper(tag.subids),
                  _step7;

              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var tagSub = _step7.value;

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
                _iterator7.e(err);
              } finally {
                _iterator7.f();
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

              var _iterator8 = _createForOfIteratorHelper(tag.subids),
                  _step8;

              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var tagSub = _step8.value;

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
                _iterator8.e(err);
              } finally {
                _iterator8.f();
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

              var _iterator9 = _createForOfIteratorHelper(_this7.tagRows.subids),
                  _step9;

              try {
                for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                  var tagSub = _step9.value;

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
                _iterator9.e(err);
              } finally {
                _iterator9.f();
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
              var publisherRevenuePerDayVal = [];
              var datesOfRevenueVal = [];
              var searchesPerDayVal = [];
              var chartDataValue = {};

              var _iterator10 = _createForOfIteratorHelper(resultChart),
                  _step10;

              try {
                for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                  var resVal = _step10.value;
                  revenuePerDayVal.push(0);
                  publisherRevenuePerDayVal.push(resVal.revenue);
                  datesOfRevenueVal.push(resVal.date);
                  searchesPerDayVal.push(resVal.searches);
                }
              } catch (err) {
                _iterator10.e(err);
              } finally {
                _iterator10.f();
              }

              chartDataValue['revenuePerDay'] = revenuePerDayVal;
              chartDataValue['publisherRevenuePerDay'] = publisherRevenuePerDayVal;
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

              var _iterator11 = _createForOfIteratorHelper(tag.subids),
                  _step11;

              try {
                for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                  var tagSub = _step11.value;

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
                _iterator11.e(err);
              } finally {
                _iterator11.f();
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

              var _iterator12 = _createForOfIteratorHelper(_this9.tagRows.subids),
                  _step12;

              try {
                for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                  var tagSub = _step12.value;

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
                _iterator12.e(err);
              } finally {
                _iterator12.f();
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
              var publisherRevenuePerDayVal = [];
              var datesOfRevenueVal = [];
              var searchesPerDayVal = [];
              var chartDataValue = {};

              var _iterator13 = _createForOfIteratorHelper(resultChart),
                  _step13;

              try {
                for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                  var resVal = _step13.value;
                  revenuePerDayVal.push(0);
                  publisherRevenuePerDayVal.push(resVal.revenue);
                  datesOfRevenueVal.push(resVal.date);
                  searchesPerDayVal.push(resVal.searches);
                }
              } catch (err) {
                _iterator13.e(err);
              } finally {
                _iterator13.f();
              }

              chartDataValue['revenuePerDay'] = revenuePerDayVal;
              chartDataValue['publisherRevenuePerDay'] = publisherRevenuePerDayVal;
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

              var _iterator14 = _createForOfIteratorHelper(tag.subids),
                  _step14;

              try {
                for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                  var tagSub = _step14.value;

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
                _iterator14.e(err);
              } finally {
                _iterator14.f();
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

              var _iterator15 = _createForOfIteratorHelper(_this11.tagRows.subids),
                  _step15;

              try {
                for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                  var tagSub = _step15.value;

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
                _iterator15.e(err);
              } finally {
                _iterator15.f();
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
              var publisherRevenuePerDayVal = [];
              var datesOfRevenueVal = [];
              var searchesPerDayVal = [];
              var chartDataValue = {};

              var _iterator16 = _createForOfIteratorHelper(resultChart),
                  _step16;

              try {
                for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                  var resVal = _step16.value;
                  revenuePerDayVal.push(0);
                  publisherRevenuePerDayVal.push(resVal.revenue);
                  datesOfRevenueVal.push(resVal.date);
                  searchesPerDayVal.push(resVal.searches);
                }
              } catch (err) {
                _iterator16.e(err);
              } finally {
                _iterator16.f();
              }

              chartDataValue['revenuePerDay'] = revenuePerDayVal;
              chartDataValue['publisherRevenuePerDay'] = publisherRevenuePerDayVal;
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

              var _iterator17 = _createForOfIteratorHelper(tag.subids),
                  _step17;

              try {
                for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                  var tagSub = _step17.value;

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
                _iterator17.e(err);
              } finally {
                _iterator17.f();
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

              var _iterator18 = _createForOfIteratorHelper(_this13.tagRows.subids),
                  _step18;

              try {
                for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                  var tagSub = _step18.value;

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
                _iterator18.e(err);
              } finally {
                _iterator18.f();
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
              var publisherRevenuePerDayVal = [];
              var datesOfRevenueVal = [];
              var searchesPerDayVal = [];
              var chartDataValue = {};

              var _iterator19 = _createForOfIteratorHelper(resultChart),
                  _step19;

              try {
                for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                  var resVal = _step19.value;
                  revenuePerDayVal.push(0);
                  publisherRevenuePerDayVal.push(resVal.revenue);
                  datesOfRevenueVal.push(resVal.date);
                  searchesPerDayVal.push(resVal.searches);
                }
              } catch (err) {
                _iterator19.e(err);
              } finally {
                _iterator19.f();
              }

              chartDataValue['revenuePerDay'] = revenuePerDayVal;
              chartDataValue['publisherRevenuePerDay'] = publisherRevenuePerDayVal;
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

              var _iterator20 = _createForOfIteratorHelper(tag.subids),
                  _step20;

              try {
                for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                  var tagSub = _step20.value;

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
                _iterator20.e(err);
              } finally {
                _iterator20.f();
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

              var _iterator21 = _createForOfIteratorHelper(_this15.tagRows.subids),
                  _step21;

              try {
                for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                  var tagSub = _step21.value;

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
                _iterator21.e(err);
              } finally {
                _iterator21.f();
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
              var publisherRevenuePerDayVal = [];
              var datesOfRevenueVal = [];
              var searchesPerDayVal = [];
              var chartDataValue = {};

              var _iterator22 = _createForOfIteratorHelper(resultChart),
                  _step22;

              try {
                for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                  var resVal = _step22.value;
                  revenuePerDayVal.push(0);
                  publisherRevenuePerDayVal.push(resVal.revenue);
                  datesOfRevenueVal.push(resVal.date);
                  searchesPerDayVal.push(resVal.searches);
                }
              } catch (err) {
                _iterator22.e(err);
              } finally {
                _iterator22.f();
              }

              chartDataValue['revenuePerDay'] = revenuePerDayVal;
              chartDataValue['publisherRevenuePerDay'] = publisherRevenuePerDayVal;
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
        return new (t || PublisherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_3__["TagManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_service_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_admin_stats_perion_service__WEBPACK_IMPORTED_MODULE_5__["PerionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_admin_stats_lyon_service__WEBPACK_IMPORTED_MODULE_6__["LyonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_admin_stats_verizon_service__WEBPACK_IMPORTED_MODULE_7__["VerizonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_admin_stats_rubi_service__WEBPACK_IMPORTED_MODULE_8__["RubiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_admin_stats_solexbc_service__WEBPACK_IMPORTED_MODULE_9__["SolexBCService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_admin_stats_system1_service__WEBPACK_IMPORTED_MODULE_10__["System1Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_admin_stats_apptitude_service__WEBPACK_IMPORTED_MODULE_11__["ApptitudeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_export_data_service__WEBPACK_IMPORTED_MODULE_12__["ExportDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__["PercentPipe"]));
      };

      PublisherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: PublisherComponent,
        selectors: [["app-publisher"]],
        viewQuery: function PublisherComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 27,
        vars: 14,
        consts: [[3, "onDatesPicked"], [3, "chartData", 4, "ngIf"], [1, "row", "py-6"], [1, "btn", "btn-sm", "btn-primary", "mx-3", 3, "click"], [1, "material", "fullscreen", "expandable", 2, "top", "10px", "height", "500px", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "scrollbarH", "rows"], ["expandableTable", ""], [3, "rowHeight", "toggle"], ["myDetailRow", ""], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["ngx-datatable-cell-template", ""], ["name", "date"], ["ngx-datatable-header-template", ""], ["name", "searches"], ["name", "cpc"], ["name", "ctr"], ["name", "revenue"], [3, "chartData"], [2, "padding-left", "35px"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 3, "click"]],
        template: function PublisherComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-reporting-filtering", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onDatesPicked", function PublisherComponent_Template_app_reporting_filtering_onDatesPicked_0_listener($event) {
              return ctx.updateReportingFiltering($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PublisherComponent_app_reporting_publisher_revenue_chart_1_Template, 1, 1, "app-reporting-publisher-revenue-chart", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PublisherComponent_Template_button_click_3_listener() {
              return ctx.exportToCsv();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Export Stats ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ngx-datatable", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ngx-datatable-row-detail", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("toggle", function PublisherComponent_Template_ngx_datatable_row_detail_toggle_7_listener($event) {
              return ctx.onDetailToggle($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, PublisherComponent_ng_template_9_Template, 6, 0, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ngx-datatable-column", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, PublisherComponent_ng_template_11_Template, 1, 4, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ngx-datatable-column", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, PublisherComponent_ng_template_13_Template, 1, 0, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, PublisherComponent_ng_template_14_Template, 3, 3, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ngx-datatable-column", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, PublisherComponent_ng_template_16_Template, 1, 0, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, PublisherComponent_ng_template_17_Template, 2, 1, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ngx-datatable-column", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, PublisherComponent_ng_template_19_Template, 1, 0, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, PublisherComponent_ng_template_20_Template, 4, 7, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ngx-datatable-column", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, PublisherComponent_ng_template_22_Template, 1, 0, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, PublisherComponent_ng_template_23_Template, 4, 7, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ngx-datatable-column", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, PublisherComponent_ng_template_25_Template, 1, 0, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, PublisherComponent_ng_template_26_Template, 3, 4, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.chartData);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnMode", "force")("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("scrollbarH", true)("rows", ctx.statData);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowHeight", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 50)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);
          }
        },
        directives: [_shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_14__["ReportingFilteringComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_15__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_15__["DatatableRowDetailDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_15__["DatatableRowDetailTemplateDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_15__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_15__["DataTableColumnCellDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_15__["DataTableColumnHeaderDirective"], _shared_modules_reporting_publisher_revenue_chart_reporting_publisher_revenue_chart_component__WEBPACK_IMPORTED_MODULE_16__["ReportingPublisherRevenueChartComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["PercentPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHVibGlzaGVyLXJlcG9ydGluZy9wdWJsaXNoZXIvcHVibGlzaGVyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PublisherComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-publisher',
            templateUrl: './publisher.component.html',
            styleUrls: ['./publisher.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_3__["TagManagementService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _shared_service_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]
          }, {
            type: src_app_shared_service_admin_stats_perion_service__WEBPACK_IMPORTED_MODULE_5__["PerionService"]
          }, {
            type: src_app_shared_service_admin_stats_lyon_service__WEBPACK_IMPORTED_MODULE_6__["LyonService"]
          }, {
            type: src_app_shared_service_admin_stats_verizon_service__WEBPACK_IMPORTED_MODULE_7__["VerizonService"]
          }, {
            type: src_app_shared_service_admin_stats_rubi_service__WEBPACK_IMPORTED_MODULE_8__["RubiService"]
          }, {
            type: src_app_shared_service_admin_stats_solexbc_service__WEBPACK_IMPORTED_MODULE_9__["SolexBCService"]
          }, {
            type: src_app_shared_service_admin_stats_system1_service__WEBPACK_IMPORTED_MODULE_10__["System1Service"]
          }, {
            type: src_app_shared_service_admin_stats_apptitude_service__WEBPACK_IMPORTED_MODULE_11__["ApptitudeService"]
          }, {
            type: src_app_shared_service_export_data_service__WEBPACK_IMPORTED_MODULE_12__["ExportDataService"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_13__["CurrencyPipe"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_13__["PercentPipe"]
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
    "./src/app/shared/service/export-data.service.ts":
    /*!*******************************************************!*\
      !*** ./src/app/shared/service/export-data.service.ts ***!
      \*******************************************************/

    /*! exports provided: ExportDataService */

    /***/
    function srcAppSharedServiceExportDataServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExportDataService", function () {
        return ExportDataService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! file-saver */
      "./node_modules/file-saver/dist/FileSaver.min.js");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);

      var CSV_EXTENSION = '.csv';
      var CSV_TYPE = 'text/plain;charset=utf-8';

      var ExportDataService = /*#__PURE__*/function () {
        function ExportDataService() {
          _classCallCheck(this, ExportDataService);
        }

        _createClass(ExportDataService, [{
          key: "saveAsFile",
          value: function saveAsFile(buffer, fileName, fileType) {
            var data = new Blob([buffer], {
              type: fileType
            });
            file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"](data, fileName);
          }
        }, {
          key: "exportToCsv",
          value: function exportToCsv(rows, fileName, columns) {
            if (!rows || !rows.length) {
              return;
            }

            var separator = ',';
            var keys = Object.keys(rows[0]).filter(function (k) {
              if (columns === null || columns === void 0 ? void 0 : columns.length) {
                return columns.includes(k);
              } else {
                return true;
              }
            });
            var csvContent = keys.join(separator) + '\n' + rows.map(function (row) {
              return keys.map(function (k) {
                var cell = row[k] === null || row[k] === undefined ? '' : row[k];
                cell = cell instanceof Date ? cell.toLocaleString() : cell.toString().replace(/"/g, '""');

                if (cell.search(/("|,|\n)/g) >= 0) {
                  cell = "\"".concat(cell, "\"");
                }

                return cell;
              }).join(separator);
            }).join('\n');
            this.saveAsFile(csvContent, "".concat(fileName).concat(CSV_EXTENSION), CSV_TYPE);
          }
        }]);

        return ExportDataService;
      }();

      ExportDataService.ɵfac = function ExportDataService_Factory(t) {
        return new (t || ExportDataService)();
      };

      ExportDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ExportDataService,
        factory: ExportDataService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExportDataService, [{
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
//# sourceMappingURL=modules-publisher-reporting-publisher-reporting-module-es5.js.map