(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _publisher_reporting_routing_module__WEBPACK_IMPORTED_MODULE_3__["PublisherReportingRoutingModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PublisherReportingModule, {
          declarations: [_publisher_publisher_component__WEBPACK_IMPORTED_MODULE_4__["PublisherComponent"], _publisher_reporting_component__WEBPACK_IMPORTED_MODULE_5__["PublisherReportingComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _publisher_reporting_routing_module__WEBPACK_IMPORTED_MODULE_3__["PublisherReportingRoutingModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublisherReportingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_publisher_publisher_component__WEBPACK_IMPORTED_MODULE_4__["PublisherComponent"], _publisher_reporting_component__WEBPACK_IMPORTED_MODULE_5__["PublisherReportingComponent"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _publisher_reporting_routing_module__WEBPACK_IMPORTED_MODULE_3__["PublisherReportingRoutingModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
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


      var _shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../shared/modules/reporting-filtering/reporting-filtering.component */
      "./src/app/shared/modules/reporting-filtering/reporting-filtering.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _shared_modules_reporting_revenue_chart_reporting_revenue_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../shared/modules/reporting-revenue-chart/reporting-revenue-chart.component */
      "./src/app/shared/modules/reporting-revenue-chart/reporting-revenue-chart.component.ts");

      function PublisherComponent_app_reporting_revenue_chart_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-reporting-revenue-chart", 2);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("chartData", ctx_r0.chartData);
        }
      }

      var PublisherComponent = /*#__PURE__*/function () {
        function PublisherComponent(route, tagManagementService, cdr, userService, perionService, lyonService) {
          _classCallCheck(this, PublisherComponent);

          this.route = route;
          this.tagManagementService = tagManagementService;
          this.cdr = cdr;
          this.userService = userService;
          this.perionService = perionService;
          this.lyonService = lyonService;
          this.loadingIndicator = true;
          this.range = {
            startDate: '',
            endDate: ''
          };
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
                      this.route.params.subscribe(function (routeParams) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  _context.next = 2;
                                  return this.getTagInformation(routeParams.tagId);

                                case 2:
                                  this.tagRows = _context.sent;
                                  this.selectedAdvertiser = this.tagRows.advertiser;
                                  this.selectedCompany = this.tagRows.company;

                                  if (!(this.selectedAdvertiser == "lyons")) {
                                    _context.next = 11;
                                    break;
                                  }

                                  _context.next = 8;
                                  return this.getLyonChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                                case 8:
                                  this.chartData = _context.sent;
                                  _context.next = 15;
                                  break;

                                case 11:
                                  if (!(this.selectedAdvertiser == "perion")) {
                                    _context.next = 15;
                                    break;
                                  }

                                  _context.next = 14;
                                  return this.getPerionChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                                case 14:
                                  this.chartData = _context.sent;

                                case 15:
                                  this.refreshTable();

                                case 16:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        }));
                      });

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
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
                        _context3.next = 7;
                        break;
                      }

                      _context3.next = 4;
                      return this.getLyonChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 4:
                      this.chartData = _context3.sent;
                      _context3.next = 11;
                      break;

                    case 7:
                      if (!(this.selectedAdvertiser == "perion")) {
                        _context3.next = 11;
                        break;
                      }

                      _context3.next = 10;
                      return this.getPerionChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 10:
                      this.chartData = _context3.sent;

                    case 11:
                      this.refreshTable();

                    case 12:
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

            return this.lyonService.getAllStats(startDate, endDate).toPromise().then(function (response) {
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

              var filter_data = chartAllLyonStat.filter(function (obj, pos, arr) {
                return arr.map(function (mapObj) {
                  return mapObj._id;
                }).indexOf(obj._id) == pos;
              });
              var helperChart = {};
              filter_data.map(function (f) {
                f.revenue = parseFloat(f.revenue);
                f.ctr = parseFloat(f.ctr);
                f.biddedCtr = parseFloat(f.biddedCTR);
              });
              var resultChart = filter_data.reduce(function (r, o) {
                var key = o.rptDate;

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
                  datesOfRevenueVal.push(resVal.rptDate);
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
            return this.perionService.getChartMetrics(company, startDate, endDate).toPromise().then(function (response) {
              return response;
            })["catch"](function (error) {
              return error;
            });
          }
        }]);

        return PublisherComponent;
      }();

      PublisherComponent.ɵfac = function PublisherComponent_Factory(t) {
        return new (t || PublisherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_3__["TagManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_service_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_admin_stats_perion_service__WEBPACK_IMPORTED_MODULE_5__["PerionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_admin_stats_lyon_service__WEBPACK_IMPORTED_MODULE_6__["LyonService"]));
      };

      PublisherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: PublisherComponent,
        selectors: [["app-publisher"]],
        decls: 2,
        vars: 1,
        consts: [[3, "onDatesPicked"], [3, "chartData", 4, "ngIf"], [3, "chartData"]],
        template: function PublisherComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-reporting-filtering", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onDatesPicked", function PublisherComponent_Template_app_reporting_filtering_onDatesPicked_0_listener($event) {
              return ctx.updateReportingFiltering($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PublisherComponent_app_reporting_revenue_chart_1_Template, 1, 1, "app-reporting-revenue-chart", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.chartData);
          }
        },
        directives: [_shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_7__["ReportingFilteringComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _shared_modules_reporting_revenue_chart_reporting_revenue_chart_component__WEBPACK_IMPORTED_MODULE_9__["ReportingRevenueChartComponent"]],
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
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-publisher-reporting-publisher-reporting-module-es5.js.map