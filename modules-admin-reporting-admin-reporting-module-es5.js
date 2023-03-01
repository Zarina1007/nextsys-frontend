(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-admin-reporting-admin-reporting-module"], {
    /***/
    "./src/app/modules/admin-reporting/accounting/accounting.component.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/modules/admin-reporting/accounting/accounting.component.ts ***!
      \****************************************************************************/

    /*! exports provided: AccountingComponent */

    /***/
    function srcAppModulesAdminReportingAccountingAccountingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountingComponent", function () {
        return AccountingComponent;
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


      var src_app_shared_service_admin_stats_accounting_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/service/admin-stats/accounting.service */
      "./src/app/shared/service/admin-stats/accounting.service.ts");
      /* harmony import */


      var src_app_modules_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/modules/tag-management/tag-management.service */
      "./src/app/modules/tag-management/tag-management.service.ts");
      /* harmony import */


      var src_app_modules_company_management_company_management_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/modules/company-management/company-management.service */
      "./src/app/modules/company-management/company-management.service.ts");
      /* harmony import */


      var _shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../shared/modules/reporting-filtering/reporting-filtering.component */
      "./src/app/shared/modules/reporting-filtering/reporting-filtering.component.ts");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var _c0 = ["expandableTable"];

      function AccountingComponent_ng_template_4_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var report_r8 = ctx.$implicit;
          var i_r9 = ctx.index;

          var row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().row;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", report_r8, " : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 2, row_r5.everyrevenue[i_r9], "USD"));
        }
      }

      function AccountingComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AccountingComponent_ng_template_4_div_1_Template, 9, 5, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "strong", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Total : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "strong", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r5 = ctx.row;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", row_r5.reporting);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](10, 2, row_r5.total, "USD"));
        }
      }

      function AccountingComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccountingComponent_ng_template_6_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);

            var row_r11 = ctx.row;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r13.toggleExpandRow(row_r11);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var expanded_r12 = ctx.expanded;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("datatable-icon-right", !expanded_r12)("datatable-icon-down", expanded_r12);
        }
      }

      function AccountingComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Publisher Name ");
        }
      }

      function AccountingComponent_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r16 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r16);
        }
      }

      var AccountingComponent = /*#__PURE__*/function () {
        function AccountingComponent(cdr, userService, accountingService, tagService, companyService) {
          _classCallCheck(this, AccountingComponent);

          this.cdr = cdr;
          this.userService = userService;
          this.accountingService = accountingService;
          this.tagService = tagService;
          this.companyService = companyService;
          this.rows = [];
          this.loadingIndicator = true;
          this.range = {
            startDate: '',
            endDate: ''
          };
          this.allRubiStats = [];
          this.allLyonStats = [];
          this.allPerionStats = [];
          this.allSystem1Stats = [];
          this.allVerizonStats = [];
          this.allSolexBCStats = [];
          this.allApptitudeStats = [];
          this.tagList = [];
          this.tempStatData = [];
          this.tempUpdateStatData = [];
          this.reportTypeData = [];
          this.selectedCompany = this.getSelectedCompanyStored();
        }

        _createClass(AccountingComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var result, _i, _result, resultData;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.getCompanyTags(this.selectedCompany);

                    case 2:
                      this.tagList = _context.sent;
                      _context.next = 5;
                      return this.getReportingProviderList();

                    case 5:
                      this.reportTypeData = _context.sent;
                      this.rows = [];
                      this.tempStatData = [];
                      _context.next = 10;
                      return this.getPerionStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 10:
                      this.PerionData = _context.sent;
                      _context.next = 13;
                      return this.getLyonStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 13:
                      this.LyonData = _context.sent;
                      _context.next = 16;
                      return this.getRubiStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 16:
                      this.RubiData = _context.sent;
                      _context.next = 19;
                      return this.getApptitudeStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 19:
                      this.ApptitudeData = _context.sent;
                      _context.next = 22;
                      return this.getSolexBCStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 22:
                      this.SolexBCData = _context.sent;
                      _context.next = 25;
                      return this.getVerizonDirectStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 25:
                      this.VerizonData = _context.sent;
                      _context.next = 28;
                      return this.getSystem1Stats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 28:
                      this.System1Data = _context.sent;

                      if (this.reportTypeData.includes('perion')) {
                        this.tempStatData = this.tempStatData.concat(this.PerionData);
                      }

                      if (this.reportTypeData.includes('lyons')) {
                        this.tempStatData = this.tempStatData.concat(this.LyonData);
                      }

                      if (this.reportTypeData.includes('rubi')) {
                        this.tempStatData = this.tempStatData.concat(this.RubiData);
                      }

                      if (this.reportTypeData.includes('apptitude')) {
                        this.tempStatData = this.tempStatData.concat(this.ApptitudeData);
                      }

                      if (this.reportTypeData.includes('solex-bc')) {
                        this.tempStatData = this.tempStatData.concat(this.SolexBCData);
                      }

                      if (this.reportTypeData.includes('verizon-direct')) {
                        this.tempStatData = this.tempStatData.concat(this.VerizonData);
                      }

                      if (this.reportTypeData.includes('verizon-direct')) {
                        this.tempStatData = this.tempStatData.concat(this.System1Data);
                      }

                      result = [];
                      this.tempStatData.forEach(function (object) {
                        var existing = result.filter(function (item) {
                          return item.publisher == object.publisher;
                        });

                        if (existing.length) {
                          var existingIndex = result.indexOf(existing[0]);
                          result[existingIndex].reporting = result[existingIndex].reporting.concat(object.reporting);
                          result[existingIndex].everyrevenue = result[existingIndex].everyrevenue.concat(String(object.revenue));
                          result[existingIndex].total = result[existingIndex].total + object.revenue;
                        } else {
                          if (typeof object.reporting == 'string') object.reporting = [object.reporting];

                          if (typeof object.revenue == 'number') {
                            object.everyrevenue = [String(object.revenue)];
                            object.total = object.revenue;
                          }

                          result.push(object);
                        }
                      });

                      for (_i = 0, _result = result; _i < _result.length; _i++) {
                        resultData = _result[_i];
                        resultData.detailHeight = (resultData.reporting.length + 1) * 30;
                      }

                      this.rows = result;
                      this.loadingIndicator = false;
                      this.cdr.detectChanges();

                    case 42:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } //Gets the Selected Company from Local Storage

        }, {
          key: "getSelectedCompanyStored",
          value: function getSelectedCompanyStored() {
            return this.userService.getSelectedCompanyFromLocalStorage();
          }
        }, {
          key: "updateReportingFiltering",
          value: function updateReportingFiltering(range) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var perionUpData, lyonsUpData, rubiUpData, apptitudeUpData, solexBCUpData, verizonUpData, system1UpData, result, _i2, _result2, resultData;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.loadingIndicator = true;
                      this.range = range;
                      this.rows = [];
                      this.tempUpdateStatData = [];
                      perionUpData = [];
                      lyonsUpData = [];
                      rubiUpData = [];
                      apptitudeUpData = [];
                      solexBCUpData = [];
                      verizonUpData = [];
                      system1UpData = [];
                      _context2.next = 13;
                      return this.getPerionStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 13:
                      perionUpData = _context2.sent;
                      _context2.next = 16;
                      return this.getLyonStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 16:
                      lyonsUpData = _context2.sent;
                      _context2.next = 19;
                      return this.getRubiStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 19:
                      rubiUpData = _context2.sent;
                      _context2.next = 22;
                      return this.getApptitudeStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 22:
                      apptitudeUpData = _context2.sent;
                      _context2.next = 25;
                      return this.getSolexBCStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 25:
                      solexBCUpData = _context2.sent;
                      _context2.next = 28;
                      return this.getVerizonDirectStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 28:
                      verizonUpData = _context2.sent;
                      _context2.next = 31;
                      return this.getSystem1Stats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 31:
                      system1UpData = _context2.sent;

                      if (this.reportTypeData.includes('perion')) {
                        this.tempUpdateStatData = this.tempUpdateStatData.concat(perionUpData);
                      }

                      if (this.reportTypeData.includes('lyons')) {
                        this.tempUpdateStatData = this.tempUpdateStatData.concat(lyonsUpData);
                      }

                      if (this.reportTypeData.includes('rubi')) {
                        this.tempUpdateStatData = this.tempUpdateStatData.concat(rubiUpData);
                      }

                      if (this.reportTypeData.includes('apptitude')) {
                        this.tempUpdateStatData = this.tempUpdateStatData.concat(apptitudeUpData);
                      }

                      if (this.reportTypeData.includes('solex-bc')) {
                        this.tempUpdateStatData = this.tempUpdateStatData.concat(solexBCUpData);
                      }

                      if (this.reportTypeData.includes('verizon-direct')) {
                        this.tempUpdateStatData = this.tempUpdateStatData.concat(verizonUpData);
                      }

                      if (this.reportTypeData.includes('system1')) {
                        this.tempUpdateStatData = this.tempUpdateStatData.concat(system1UpData);
                      }

                      result = [];
                      this.tempUpdateStatData.forEach(function (object) {
                        var existing = result.filter(function (item) {
                          return item.publisher == object.publisher;
                        });

                        if (existing.length) {
                          var existingIndex = result.indexOf(existing[0]);
                          result[existingIndex].reporting = result[existingIndex].reporting.concat(object.reporting);
                          result[existingIndex].everyrevenue = result[existingIndex].everyrevenue.concat(String(object.revenue));
                          result[existingIndex].total = result[existingIndex].total + object.revenue;
                        } else {
                          if (typeof object.reporting == 'string') object.reporting = [object.reporting];

                          if (typeof object.revenue == 'number') {
                            object.everyrevenue = [String(object.revenue)];
                            object.total = object.revenue;
                          }

                          result.push(object);
                        }
                      });

                      for (_i2 = 0, _result2 = result; _i2 < _result2.length; _i2++) {
                        resultData = _result2[_i2];
                        resultData.detailHeight = (resultData.reporting.length + 1) * 30;
                      }

                      this.rows = result;
                      this.loadingIndicator = false;
                      this.cdr.detectChanges();

                    case 45:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } //get Report Providers in Current Company

        }, {
          key: "getReportingProviderList",
          value: function getReportingProviderList() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var res, providerList;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!this.selectedCompany) {
                        _context3.next = 14;
                        break;
                      }

                      _context3.prev = 1;
                      _context3.next = 4;
                      return this.companyService.getReportCompany(this.selectedCompany.split('/')[1]).toPromise();

                    case 4:
                      res = _context3.sent;
                      providerList = [];
                      res.reportingProviders.map(function (report) {
                        providerList.push(report.reportingProvider);
                      });
                      return _context3.abrupt("return", providerList);

                    case 10:
                      _context3.prev = 10;
                      _context3.t0 = _context3["catch"](1);
                      return _context3.abrupt("return", _context3.t0);

                    case 13:
                      ;

                    case 14:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[1, 10]]);
            }));
          }
        }, {
          key: "getRubiStats",
          value: function getRubiStats(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var response, _iterator, _step, tagL, _iterator2, _step2, tagSub, rubiStats, helperRubiSummary, groupRubiData;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.accountingService.getRubiStats(company, startDate, endDate).toPromise();

                    case 2:
                      response = _context4.sent;
                      this.allRubiStats = response.stats;
                      _iterator = _createForOfIteratorHelper(this.tagList);

                      try {
                        for (_iterator.s(); !(_step = _iterator.n()).done;) {
                          tagL = _step.value;

                          if (tagL.tag.advertiser == "rubi") {
                            _iterator2 = _createForOfIteratorHelper(tagL.tag.subids);

                            try {
                              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                                tagSub = _step2.value;

                                if (tagSub.filterTag == "Contains") {
                                  this.allRubiStats.map(function (stat) {
                                    if (stat.subid.includes(tagSub.subid)) {
                                      stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat.reporting = "Rubi";
                                    }
                                  });
                                } else if (tagSub.filterTag == "StartsWith") {
                                  this.allRubiStats.map(function (stat_1) {
                                    if (stat_1.subid.startsWith(tagSub.subid)) {
                                      stat_1.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_1.reporting = "Rubi";
                                    }
                                  });
                                } else if (tagSub.filterTag == "EndsWith") {
                                  this.allRubiStats.map(function (stat_2) {
                                    if (stat_2.subid.endsWith(tagSub.subid)) {
                                      stat_2.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_2.reporting = "Rubi";
                                    }
                                  });
                                } else if (tagSub.filterTag == "ExactValue") {
                                  this.allRubiStats.map(function (stat_3) {
                                    if (stat_3.subid == tagSub.subid) {
                                      stat_3.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_3.reporting = "Rubi";
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
                        }
                      } catch (err) {
                        _iterator.e(err);
                      } finally {
                        _iterator.f();
                      }

                      rubiStats = [];
                      helperRubiSummary = {};

                      if (this.allRubiStats.length > 0) {
                        groupRubiData = this.allRubiStats.reduce(function (r, o) {
                          var key = o.publisher;

                          if (!helperRubiSummary[key]) {
                            helperRubiSummary[key] = Object.assign({}, o); // create a copy of o

                            r.push(helperRubiSummary[key]);
                          } else {
                            helperRubiSummary[key].revenue += parseFloat(o.revenue);
                          }

                          return r;
                        }, []);
                        groupRubiData.map(function (rubiOne) {
                          rubiStats.push({
                            publisher: rubiOne.publisher ? rubiOne.publisher : "No Publisher",
                            reporting: rubiOne.reporting ? rubiOne.reporting : "No Reporting",
                            revenue: rubiOne.revenue
                          });
                        });
                      }

                      return _context4.abrupt("return", rubiStats);

                    case 10:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "getSolexBCStats",
          value: function getSolexBCStats(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var response, _iterator3, _step3, tagL, _iterator4, _step4, tagSub, solexBCStats, helperSolexBCSummary, groupSolexBCData;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.accountingService.getSolexBCStats(company, startDate, endDate).toPromise();

                    case 2:
                      response = _context5.sent;
                      this.allSolexBCStats = response.stats;
                      _iterator3 = _createForOfIteratorHelper(this.tagList);

                      try {
                        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                          tagL = _step3.value;

                          if (tagL.tag.advertiser == "solex-bc") {
                            _iterator4 = _createForOfIteratorHelper(tagL.tag.subids);

                            try {
                              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                                tagSub = _step4.value;

                                if (tagSub.filterTag == "Contains") {
                                  this.allSolexBCStats.map(function (stat) {
                                    if (stat.subid.includes(tagSub.subid)) {
                                      stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat.reporting = "Solex BC";
                                    }
                                  });
                                } else if (tagSub.filterTag == "StartsWith") {
                                  this.allSolexBCStats.map(function (stat_1) {
                                    if (stat_1.subid.startsWith(tagSub.subid)) {
                                      stat_1.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_1.reporting = "Solex BC";
                                    }
                                  });
                                } else if (tagSub.filterTag == "EndsWith") {
                                  this.allSolexBCStats.map(function (stat_2) {
                                    if (stat_2.subid.endsWith(tagSub.subid)) {
                                      stat_2.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_2.reporting = "Solex BC";
                                    }
                                  });
                                } else if (tagSub.filterTag == "ExactValue") {
                                  this.allSolexBCStats.map(function (stat_3) {
                                    if (stat_3.subid == tagSub.subid) {
                                      stat_3.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_3.reporting = "Solex BC";
                                    }
                                  });
                                }
                              }
                            } catch (err) {
                              _iterator4.e(err);
                            } finally {
                              _iterator4.f();
                            }
                          }
                        }
                      } catch (err) {
                        _iterator3.e(err);
                      } finally {
                        _iterator3.f();
                      }

                      solexBCStats = [];
                      helperSolexBCSummary = {};

                      if (this.allSolexBCStats.length > 0) {
                        groupSolexBCData = this.allSolexBCStats.reduce(function (r, o) {
                          var key = o.publisher;

                          if (!helperSolexBCSummary[key]) {
                            helperSolexBCSummary[key] = Object.assign({}, o); // create a copy of o

                            r.push(helperSolexBCSummary[key]);
                          } else {
                            helperSolexBCSummary[key].revenue += parseFloat(o.revenue);
                          }

                          return r;
                        }, []);
                        groupSolexBCData.map(function (solexbcOne) {
                          solexBCStats.push({
                            publisher: solexbcOne.publisher ? solexbcOne.publisher : "No Publisher",
                            reporting: solexbcOne.reporting ? solexbcOne.reporting : "No Reporting",
                            revenue: solexbcOne.revenue
                          });
                        });
                      }

                      return _context5.abrupt("return", solexBCStats);

                    case 10:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "getVerizonDirectStats",
          value: function getVerizonDirectStats(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var response, _iterator5, _step5, tagL, _iterator6, _step6, tagSub, verizonStats, helperVerizonSummary, groupVerizonData;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.accountingService.getVerizonDirectStats(company, startDate, endDate).toPromise();

                    case 2:
                      response = _context6.sent;
                      this.allVerizonStats = response.stats;
                      _iterator5 = _createForOfIteratorHelper(this.tagList);

                      try {
                        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                          tagL = _step5.value;

                          if (tagL.tag.advertiser == "verizon-direct") {
                            _iterator6 = _createForOfIteratorHelper(tagL.tag.subids);

                            try {
                              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                                tagSub = _step6.value;

                                if (tagSub.filterTag == "Contains") {
                                  this.allVerizonStats.map(function (stat) {
                                    if (stat.subid.includes(tagSub.subid)) {
                                      stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat.reporting = "Verizon Direct";
                                    }
                                  });
                                } else if (tagSub.filterTag == "StartsWith") {
                                  this.allVerizonStats.map(function (stat_1) {
                                    if (stat_1.subid.startsWith(tagSub.subid)) {
                                      stat_1.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_1.reporting = "Verizon Direct";
                                    }
                                  });
                                } else if (tagSub.filterTag == "EndsWith") {
                                  this.allVerizonStats.map(function (stat_2) {
                                    if (stat_2.subid.endsWith(tagSub.subid)) {
                                      stat_2.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_2.reporting = "Verizon Direct";
                                    }
                                  });
                                } else if (tagSub.filterTag == "ExactValue") {
                                  this.allVerizonStats.map(function (stat_3) {
                                    if (stat_3.subid == tagSub.subid) {
                                      stat_3.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_3.reporting = "Verizon Direct";
                                    }
                                  });
                                }
                              }
                            } catch (err) {
                              _iterator6.e(err);
                            } finally {
                              _iterator6.f();
                            }
                          }
                        }
                      } catch (err) {
                        _iterator5.e(err);
                      } finally {
                        _iterator5.f();
                      }

                      verizonStats = [];
                      helperVerizonSummary = {};

                      if (this.allVerizonStats.length > 0) {
                        groupVerizonData = this.allVerizonStats.reduce(function (r, o) {
                          var key = o.publisher;

                          if (!helperVerizonSummary[key]) {
                            helperVerizonSummary[key] = Object.assign({}, o); // create a copy of o

                            r.push(helperVerizonSummary[key]);
                          } else {
                            helperVerizonSummary[key].revenue += parseFloat(o.revenue);
                          }

                          return r;
                        }, []);
                        groupVerizonData.map(function (verizonOne) {
                          verizonStats.push({
                            publisher: verizonOne.publisher ? verizonOne.publisher : "No Publisher",
                            reporting: verizonOne.reporting ? verizonOne.reporting : "No Reporting",
                            revenue: verizonOne.revenue
                          });
                        });
                      }

                      return _context6.abrupt("return", verizonStats);

                    case 10:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "getLyonStats",
          value: function getLyonStats(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var response, _iterator7, _step7, tagL, _iterator8, _step8, tagSub, lyonStats, helperLyonsSummary, groupLyonsData;

              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.accountingService.getLyonStats(company, startDate, endDate).toPromise();

                    case 2:
                      response = _context7.sent;
                      this.allLyonStats = response.stats;
                      _iterator7 = _createForOfIteratorHelper(this.tagList);

                      try {
                        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                          tagL = _step7.value;

                          if (tagL.tag.advertiser == "lyons") {
                            _iterator8 = _createForOfIteratorHelper(tagL.tag.subids);

                            try {
                              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                                tagSub = _step8.value;

                                if (tagSub.filterTag == "Contains") {
                                  this.allLyonStats.map(function (stat) {
                                    if (stat.subid.includes(tagSub.subid)) {
                                      stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat.reporting = "Lyons";
                                    }
                                  });
                                } else if (tagSub.filterTag == "StartsWith") {
                                  this.allLyonStats.map(function (stat_1) {
                                    if (stat_1.subid.startsWith(tagSub.subid)) {
                                      stat_1.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_1.reporting = "Lyons";
                                    }
                                  });
                                } else if (tagSub.filterTag == "EndsWith") {
                                  this.allLyonStats.map(function (stat_2) {
                                    if (stat_2.subid.endsWith(tagSub.subid)) {
                                      stat_2.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_2.reporting = "Lyons";
                                    }
                                  });
                                } else if (tagSub.filterTag == "ExactValue") {
                                  this.allLyonStats.map(function (stat_3) {
                                    if (stat_3.subid == tagSub.subid) {
                                      stat_3.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_3.reporting = "Lyons";
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
                        }
                      } catch (err) {
                        _iterator7.e(err);
                      } finally {
                        _iterator7.f();
                      }

                      lyonStats = [];
                      helperLyonsSummary = {};

                      if (this.allLyonStats.length > 0) {
                        groupLyonsData = this.allLyonStats.reduce(function (r, o) {
                          var key = o.publisher;

                          if (!helperLyonsSummary[key]) {
                            helperLyonsSummary[key] = Object.assign({}, o); // create a copy of o

                            r.push(helperLyonsSummary[key]);
                          } else {
                            helperLyonsSummary[key].revenue += parseFloat(o.revenue);
                          }

                          return r;
                        }, []);
                        groupLyonsData.map(function (lyonOne) {
                          lyonStats.push({
                            publisher: lyonOne.publisher ? lyonOne.publisher : "No Publisher",
                            reporting: lyonOne.reporting ? lyonOne.reporting : "No Reporting",
                            revenue: lyonOne.revenue
                          });
                        });
                      }

                      return _context7.abrupt("return", lyonStats);

                    case 10:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "getPerionStats",
          value: function getPerionStats(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var response, _iterator9, _step9, tagL, _iterator10, _step10, tagSub, perionStats, helperPerionSummary, groupPerionData;

              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.accountingService.getPerionStats(company, startDate, endDate).toPromise();

                    case 2:
                      response = _context8.sent;
                      this.allPerionStats = response.stats;
                      _iterator9 = _createForOfIteratorHelper(this.tagList);

                      try {
                        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                          tagL = _step9.value;

                          if (tagL.tag.advertiser == "perion") {
                            _iterator10 = _createForOfIteratorHelper(tagL.tag.subids);

                            try {
                              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                                tagSub = _step10.value;

                                if (tagSub.filterTag == "Contains") {
                                  this.allPerionStats.map(function (stat) {
                                    if (stat.subid.includes(tagSub.subid)) {
                                      stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat.reporting = "Perion";
                                    }
                                  });
                                } else if (tagSub.filterTag == "StartsWith") {
                                  this.allPerionStats.map(function (stat_1) {
                                    if (stat_1.subid.startsWith(tagSub.subid)) {
                                      stat_1.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_1.reporting = "Perion";
                                    }
                                  });
                                } else if (tagSub.filterTag == "EndsWith") {
                                  this.allPerionStats.map(function (stat_2) {
                                    if (stat_2.subid.endsWith(tagSub.subid)) {
                                      stat_2.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_2.reporting = "Perion";
                                    }
                                  });
                                } else if (tagSub.filterTag == "ExactValue") {
                                  this.allPerionStats.map(function (stat_3) {
                                    if (stat_3.subid == tagSub.subid) {
                                      stat_3.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_3.reporting = "Perion";
                                    }
                                  });
                                }
                              }
                            } catch (err) {
                              _iterator10.e(err);
                            } finally {
                              _iterator10.f();
                            }
                          }
                        }
                      } catch (err) {
                        _iterator9.e(err);
                      } finally {
                        _iterator9.f();
                      }

                      perionStats = [];
                      helperPerionSummary = {};

                      if (this.allPerionStats.length > 0) {
                        groupPerionData = this.allPerionStats.reduce(function (r, o) {
                          var key = o.publisher;

                          if (!helperPerionSummary[key]) {
                            helperPerionSummary[key] = Object.assign({}, o); // create a copy of o

                            r.push(helperPerionSummary[key]);
                          } else {
                            helperPerionSummary[key].revenue += parseFloat(o.revenue);
                          }

                          return r;
                        }, []);
                        groupPerionData.map(function (perionOne) {
                          perionStats.push({
                            publisher: perionOne.publisher ? perionOne.publisher : "No Publisher",
                            reporting: perionOne.reporting ? perionOne.reporting : "No Reporting",
                            revenue: perionOne.revenue
                          });
                        });
                      }

                      return _context8.abrupt("return", perionStats);

                    case 10:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "getApptitudeStats",
          value: function getApptitudeStats(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var response, _iterator11, _step11, tagL, _iterator12, _step12, tagSub, apptitudeStats, helperApptitudeSummary, groupApptitudeData;

              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.accountingService.getApptitudeStats(company, startDate, endDate).toPromise();

                    case 2:
                      response = _context9.sent;
                      this.allApptitudeStats = response.stats;
                      _iterator11 = _createForOfIteratorHelper(this.tagList);

                      try {
                        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                          tagL = _step11.value;

                          if (tagL.tag.advertiser == "apptitude") {
                            _iterator12 = _createForOfIteratorHelper(tagL.tag.subids);

                            try {
                              for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                                tagSub = _step12.value;

                                if (tagSub.filterTag == "Contains") {
                                  this.allApptitudeStats.map(function (stat) {
                                    if (stat.subid.includes(tagSub.subid)) {
                                      stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat.reporting = "Apptitude";
                                    }
                                  });
                                } else if (tagSub.filterTag == "StartsWith") {
                                  this.allApptitudeStats.map(function (stat_1) {
                                    if (stat_1.subid.startsWith(tagSub.subid)) {
                                      stat_1.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_1.reporting = "Apptitude";
                                    }
                                  });
                                } else if (tagSub.filterTag == "EndsWith") {
                                  this.allApptitudeStats.map(function (stat_2) {
                                    if (stat_2.subid.endsWith(tagSub.subid)) {
                                      stat_2.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_2.reporting = "Apptitude";
                                    }
                                  });
                                } else if (tagSub.filterTag == "ExactValue") {
                                  this.allApptitudeStats.map(function (stat_3) {
                                    if (stat_3.subid == tagSub.subid) {
                                      stat_3.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_3.reporting = "Apptitude";
                                    }
                                  });
                                }
                              }
                            } catch (err) {
                              _iterator12.e(err);
                            } finally {
                              _iterator12.f();
                            }
                          }
                        }
                      } catch (err) {
                        _iterator11.e(err);
                      } finally {
                        _iterator11.f();
                      }

                      apptitudeStats = [];
                      helperApptitudeSummary = {};

                      if (this.allApptitudeStats.length > 0) {
                        groupApptitudeData = this.allApptitudeStats.reduce(function (r, o) {
                          var key = o.publisher;

                          if (!helperApptitudeSummary[key]) {
                            helperApptitudeSummary[key] = Object.assign({}, o); // create a copy of o

                            r.push(helperApptitudeSummary[key]);
                          } else {
                            helperApptitudeSummary[key].revenue += parseFloat(o.revenue);
                          }

                          return r;
                        }, []);
                        groupApptitudeData.map(function (apptitudeOne) {
                          apptitudeStats.push({
                            publisher: apptitudeOne.publisher ? apptitudeOne.publisher : "No Publisher",
                            reporting: apptitudeOne.reporting ? apptitudeOne.reporting : "No Reporting",
                            revenue: apptitudeOne.revenue
                          });
                        });
                      } // console.log(this.allApptitudeStats, "dfsdfsdf")


                      return _context9.abrupt("return", apptitudeStats);

                    case 10:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "getSystem1Stats",
          value: function getSystem1Stats(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var response, _iterator13, _step13, tagL, _iterator14, _step14, tagSub, system1Stats, helperSystem1Summary, groupSystem1Data;

              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.accountingService.getSystem1Stats(company, startDate, endDate).toPromise();

                    case 2:
                      response = _context10.sent;
                      this.allSystem1Stats = response.stats;
                      _iterator13 = _createForOfIteratorHelper(this.tagList);

                      try {
                        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                          tagL = _step13.value;

                          if (tagL.tag.advertiser == "system1") {
                            _iterator14 = _createForOfIteratorHelper(tagL.tag.subids);

                            try {
                              for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                                tagSub = _step14.value;

                                if (tagSub.filterTag == "Contains") {
                                  this.allSystem1Stats.map(function (stat) {
                                    if (stat.subid.includes(tagSub.subid)) {
                                      stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat.reporting = "System1";
                                    }
                                  });
                                } else if (tagSub.filterTag == "StartsWith") {
                                  this.allSystem1Stats.map(function (stat_1) {
                                    if (stat_1.subid.startsWith(tagSub.subid)) {
                                      stat_1.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_1.reporting = "System1";
                                    }
                                  });
                                } else if (tagSub.filterTag == "EndsWith") {
                                  this.allSystem1Stats.map(function (stat_2) {
                                    if (stat_2.subid.endsWith(tagSub.subid)) {
                                      stat_2.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_2.reporting = "System1";
                                    }
                                  });
                                } else if (tagSub.filterTag == "ExactValue") {
                                  this.allSystem1Stats.map(function (stat_3) {
                                    if (stat_3.subid == tagSub.subid) {
                                      stat_3.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_3.reporting = "System1";
                                    }
                                  });
                                }
                              }
                            } catch (err) {
                              _iterator14.e(err);
                            } finally {
                              _iterator14.f();
                            }
                          }
                        }
                      } catch (err) {
                        _iterator13.e(err);
                      } finally {
                        _iterator13.f();
                      }

                      system1Stats = [];
                      helperSystem1Summary = {};

                      if (this.allSystem1Stats.length > 0) {
                        groupSystem1Data = this.allSystem1Stats.reduce(function (r, o) {
                          var key = o.publisher;

                          if (!helperSystem1Summary[key]) {
                            helperSystem1Summary[key] = Object.assign({}, o); // create a copy of o

                            r.push(helperSystem1Summary[key]);
                          } else {
                            helperSystem1Summary[key].revenue += parseFloat(o.revenue);
                          }

                          return r;
                        }, []);
                        groupSystem1Data.map(function (system1One) {
                          system1Stats.push({
                            publisher: system1One.publisher ? system1One.publisher : "No Publisher",
                            reporting: system1One.reporting ? system1One.reporting : "No Reporting",
                            revenue: system1One.revenue
                          });
                        });
                      }

                      return _context10.abrupt("return", system1Stats);

                    case 10:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          } //get Tags with selected company

        }, {
          key: "getCompanyTags",
          value: function getCompanyTags(selectedCompany) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var companyId, response;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      companyId = selectedCompany.split("/")[1];
                      _context11.prev = 1;
                      _context11.next = 4;
                      return this.tagService.getCompanyTags(companyId).toPromise();

                    case 4:
                      response = _context11.sent;
                      return _context11.abrupt("return", response);

                    case 8:
                      _context11.prev = 8;
                      _context11.t0 = _context11["catch"](1);
                      return _context11.abrupt("return", _context11.t0);

                    case 11:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this, [[1, 8]]);
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
          key: "getDetailRowHeight",
          value: function getDetailRowHeight(row, index) {
            var height;

            if (row) {
              height = row.detailHeight;
            }

            console.log(height, "-------");
            return height;
          }
        }]);

        return AccountingComponent;
      }();

      AccountingComponent.ɵfac = function AccountingComponent_Factory(t) {
        return new (t || AccountingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_admin_stats_accounting_service__WEBPACK_IMPORTED_MODULE_3__["AccountingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_modules_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__["TagManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_modules_company_management_company_management_service__WEBPACK_IMPORTED_MODULE_5__["CompanyManagementService"]));
      };

      AccountingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AccountingComponent,
        selectors: [["app-accounting"]],
        viewQuery: function AccountingComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 10,
        vars: 14,
        consts: [[3, "onDatesPicked"], [1, "material", "fullscreen", "expandable", 2, "top", "30px", "height", "500px", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "rows", "loadingIndicator"], ["expandableTable", ""], [3, "rowHeight", "toggle"], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["ngx-datatable-cell-template", ""], ["name", "publisher", 3, "minWidth"], ["ngx-datatable-header-template", ""], [2, "padding-left", "36px"], [4, "ngFor", "ngForOf"], [2, "padding-left", "36px", "margin-top", "5px"], [2, "display", "flex"], [2, "min-width", "20%"], [2, "font-size", "14px"], [2, "min-width", "80%"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 3, "click"]],
        template: function AccountingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-reporting-filtering", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onDatesPicked", function AccountingComponent_Template_app_reporting_filtering_onDatesPicked_0_listener($event) {
              return ctx.updateReportingFiltering($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ngx-datatable", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ngx-datatable-row-detail", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("toggle", function AccountingComponent_Template_ngx_datatable_row_detail_toggle_3_listener($event) {
              return ctx.onDetailToggle($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AccountingComponent_ng_template_4_Template, 11, 5, "ng-template", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ngx-datatable-column", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AccountingComponent_ng_template_6_Template, 1, 4, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ngx-datatable-column", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AccountingComponent_ng_template_8_Template, 1, 0, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AccountingComponent_ng_template_9_Template, 2, 1, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnMode", "force")("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("rows", ctx.rows)("loadingIndicator", ctx.loadingIndicator);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowHeight", ctx.getDetailRowHeight);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 30)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 100);
          }
        },
        directives: [_shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_6__["ReportingFilteringComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableRowDetailDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableRowDetailTemplateDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnCellDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnHeaderDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CurrencyPipe"]],
        styles: [".ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-detail[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n  overflow-x: hidden !important;\n}\n\n.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-detail[_ngcontent-%COMP%] {\n  border-top: 1px solid #222 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi1yZXBvcnRpbmcvYWNjb3VudGluZy9hY2NvdW50aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUVBO0VBQ0kscUNBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL2FjY291bnRpbmcvYWNjb3VudGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLXJvdy1kZXRhaWwge1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtcm93LWRldGFpbCB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzIyMiFpbXBvcnRhbnQ7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AccountingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-accounting',
            templateUrl: './accounting.component.html',
            styleUrls: ['./accounting.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
          }, {
            type: src_app_shared_service_admin_stats_accounting_service__WEBPACK_IMPORTED_MODULE_3__["AccountingService"]
          }, {
            type: src_app_modules_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__["TagManagementService"]
          }, {
            type: src_app_modules_company_management_company_management_service__WEBPACK_IMPORTED_MODULE_5__["CompanyManagementService"]
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


      var _system1_system1_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./system1/system1.component */
      "./src/app/modules/admin-reporting/system1/system1.component.ts");
      /* harmony import */


      var _manual_update_manual_update_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./manual-update/manual-update.component */
      "./src/app/modules/admin-reporting/manual-update/manual-update.component.ts");
      /* harmony import */


      var _manual_split_update_manual_split_update_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./manual-split-update/manual-split-update.component */
      "./src/app/modules/admin-reporting/manual-split-update/manual-split-update.component.ts");
      /* harmony import */


      var _solex_bc_solex_bc_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./solex-bc/solex-bc.component */
      "./src/app/modules/admin-reporting/solex-bc/solex-bc.component.ts");
      /* harmony import */


      var _accounting_accounting_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./accounting/accounting.component */
      "./src/app/modules/admin-reporting/accounting/accounting.component.ts");

      var routes = [{
        path: '',
        component: _admin_reporting_component__WEBPACK_IMPORTED_MODULE_7__["AdminReportingComponent"],
        children: [{
          path: 'accounting',
          component: _accounting_accounting_component__WEBPACK_IMPORTED_MODULE_17__["AccountingComponent"]
        }, {
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
          path: 'system1',
          component: _system1_system1_component__WEBPACK_IMPORTED_MODULE_13__["System1Component"]
        }, {
          path: 'verizon-direct',
          component: _verizon_direct_verizon_direct_component__WEBPACK_IMPORTED_MODULE_12__["VerizonDirectComponent"]
        }, {
          path: 'third-party',
          component: _third_party_third_party_component__WEBPACK_IMPORTED_MODULE_8__["ThirdPartyComponent"]
        }, {
          path: 'solex-bc',
          component: _solex_bc_solex_bc_component__WEBPACK_IMPORTED_MODULE_16__["SolexBcComponent"]
        }, {
          path: 'manual-stat-update',
          component: _manual_update_manual_update_component__WEBPACK_IMPORTED_MODULE_14__["ManualUpdateComponent"]
        }, {
          path: 'manual-split-update',
          component: _manual_split_update_manual_split_update_component__WEBPACK_IMPORTED_MODULE_15__["ManualSplitUpdateComponent"]
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
      /* harmony import */


      var _manual_split_update_manual_split_update_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./manual-split-update/manual-split-update.component */
      "./src/app/modules/admin-reporting/manual-split-update/manual-split-update.component.ts");
      /* harmony import */


      var _system1_system1_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./system1/system1.component */
      "./src/app/modules/admin-reporting/system1/system1.component.ts");
      /* harmony import */


      var _solex_bc_solex_bc_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./solex-bc/solex-bc.component */
      "./src/app/modules/admin-reporting/solex-bc/solex-bc.component.ts");
      /* harmony import */


      var _accounting_accounting_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./accounting/accounting.component */
      "./src/app/modules/admin-reporting/accounting/accounting.component.ts");

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
          declarations: [_perion_perion_component__WEBPACK_IMPORTED_MODULE_4__["PerionComponent"], _imgage_advantage_imgage_advantage_component__WEBPACK_IMPORTED_MODULE_5__["ImgageAdvantageComponent"], _hopkins_hopkins_component__WEBPACK_IMPORTED_MODULE_6__["HopkinsComponent"], _apptitude_apptitude_component__WEBPACK_IMPORTED_MODULE_7__["ApptitudeComponent"], _all_reporting_all_reporting_component__WEBPACK_IMPORTED_MODULE_8__["AllReportingComponent"], _media_net_media_net_component__WEBPACK_IMPORTED_MODULE_9__["MediaNetComponent"], _third_party_third_party_component__WEBPACK_IMPORTED_MODULE_10__["ThirdPartyComponent"], _bing_direct_bing_direct_component__WEBPACK_IMPORTED_MODULE_19__["BingDirectComponent"], _lyons_lyons_component__WEBPACK_IMPORTED_MODULE_20__["LyonsComponent"], _rubi_rubi_component__WEBPACK_IMPORTED_MODULE_21__["RubiComponent"], _verizon_direct_verizon_direct_component__WEBPACK_IMPORTED_MODULE_22__["VerizonDirectComponent"], _manual_update_manual_update_component__WEBPACK_IMPORTED_MODULE_23__["ManualUpdateComponent"], _manual_split_update_manual_split_update_component__WEBPACK_IMPORTED_MODULE_27__["ManualSplitUpdateComponent"], _system1_system1_component__WEBPACK_IMPORTED_MODULE_28__["System1Component"], _solex_bc_solex_bc_component__WEBPACK_IMPORTED_MODULE_29__["SolexBcComponent"], _accounting_accounting_component__WEBPACK_IMPORTED_MODULE_30__["AccountingComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_reporting_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminReportingRoutingModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["NgxDatatableModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOptionModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_26__["InlineSVGModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminReportingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_perion_perion_component__WEBPACK_IMPORTED_MODULE_4__["PerionComponent"], _imgage_advantage_imgage_advantage_component__WEBPACK_IMPORTED_MODULE_5__["ImgageAdvantageComponent"], _hopkins_hopkins_component__WEBPACK_IMPORTED_MODULE_6__["HopkinsComponent"], _apptitude_apptitude_component__WEBPACK_IMPORTED_MODULE_7__["ApptitudeComponent"], _all_reporting_all_reporting_component__WEBPACK_IMPORTED_MODULE_8__["AllReportingComponent"], _media_net_media_net_component__WEBPACK_IMPORTED_MODULE_9__["MediaNetComponent"], _third_party_third_party_component__WEBPACK_IMPORTED_MODULE_10__["ThirdPartyComponent"], _bing_direct_bing_direct_component__WEBPACK_IMPORTED_MODULE_19__["BingDirectComponent"], _lyons_lyons_component__WEBPACK_IMPORTED_MODULE_20__["LyonsComponent"], _rubi_rubi_component__WEBPACK_IMPORTED_MODULE_21__["RubiComponent"], _verizon_direct_verizon_direct_component__WEBPACK_IMPORTED_MODULE_22__["VerizonDirectComponent"], _manual_update_manual_update_component__WEBPACK_IMPORTED_MODULE_23__["ManualUpdateComponent"], _manual_split_update_manual_split_update_component__WEBPACK_IMPORTED_MODULE_27__["ManualSplitUpdateComponent"], _system1_system1_component__WEBPACK_IMPORTED_MODULE_28__["System1Component"], _solex_bc_solex_bc_component__WEBPACK_IMPORTED_MODULE_29__["SolexBcComponent"], _accounting_accounting_component__WEBPACK_IMPORTED_MODULE_30__["AccountingComponent"]],
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


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/service/users.service */
      "./src/app/shared/service/users.service.ts");
      /* harmony import */


      var src_app_shared_service_admin_stats_apptitude_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/service/admin-stats/apptitude.service */
      "./src/app/shared/service/admin-stats/apptitude.service.ts");
      /* harmony import */


      var _tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../tag-management/tag-management.service */
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

      function ApptitudeComponent_app_reporting_revenue_chart_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-reporting-revenue-chart", 26);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("chartData", ctx_r0.chartData);
        }
      }

      function ApptitudeComponent_app_summary_metrics_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-summary-metrics", 27);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("summaryMetricsData", ctx_r1.summaryMetrics);
        }
      }

      function ApptitudeComponent_ng_template_12_Template(rf, ctx) {
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

      function ApptitudeComponent_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApptitudeComponent_ng_template_14_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28);

            var row_r25 = ctx.row;

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r27.toggleExpandRow(row_r25);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var expanded_r26 = ctx.expanded;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("datatable-icon-right", !expanded_r26)("datatable-icon-down", expanded_r26);
        }
      }

      function ApptitudeComponent_ngx_datatable_column_15_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Date ");
        }
      }

      function ApptitudeComponent_ngx_datatable_column_15_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r32 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r32));
        }
      }

      function ApptitudeComponent_ngx_datatable_column_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ApptitudeComponent_ngx_datatable_column_15_ng_template_1_Template, 1, 0, "ng-template", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ApptitudeComponent_ngx_datatable_column_15_ng_template_2_Template, 3, 3, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 100);
        }
      }

      function ApptitudeComponent_ngx_datatable_column_16_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Subid ");
        }
      }

      function ApptitudeComponent_ngx_datatable_column_16_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r36 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r36);
        }
      }

      function ApptitudeComponent_ngx_datatable_column_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ApptitudeComponent_ngx_datatable_column_16_ng_template_1_Template, 1, 0, "ng-template", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ApptitudeComponent_ngx_datatable_column_16_ng_template_2_Template, 2, 1, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ApptitudeComponent_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Publisher ");
        }
      }

      function ApptitudeComponent_ng_template_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r38 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r38);
        }
      }

      function ApptitudeComponent_ngx_datatable_column_20_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Clicks ");
        }
      }

      function ApptitudeComponent_ngx_datatable_column_20_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r42 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r42));
        }
      }

      function ApptitudeComponent_ngx_datatable_column_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ApptitudeComponent_ngx_datatable_column_20_ng_template_1_Template, 1, 0, "ng-template", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ApptitudeComponent_ngx_datatable_column_20_ng_template_2_Template, 3, 3, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ApptitudeComponent_ngx_datatable_column_21_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Searches ");
        }
      }

      function ApptitudeComponent_ngx_datatable_column_21_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r46 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r46));
        }
      }

      function ApptitudeComponent_ngx_datatable_column_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ApptitudeComponent_ngx_datatable_column_21_ng_template_1_Template, 1, 0, "ng-template", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ApptitudeComponent_ngx_datatable_column_21_ng_template_2_Template, 3, 3, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ApptitudeComponent_ngx_datatable_column_22_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Impressions ");
        }
      }

      function ApptitudeComponent_ngx_datatable_column_22_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r50 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r50));
        }
      }

      function ApptitudeComponent_ngx_datatable_column_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ApptitudeComponent_ngx_datatable_column_22_ng_template_1_Template, 1, 0, "ng-template", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ApptitudeComponent_ngx_datatable_column_22_ng_template_2_Template, 3, 3, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ApptitudeComponent_ngx_datatable_column_23_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " CPC ");
        }
      }

      function ApptitudeComponent_ngx_datatable_column_23_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r54 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r54, "1.2-2"));
        }
      }

      function ApptitudeComponent_ngx_datatable_column_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ApptitudeComponent_ngx_datatable_column_23_ng_template_1_Template, 1, 0, "ng-template", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ApptitudeComponent_ngx_datatable_column_23_ng_template_2_Template, 3, 4, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ApptitudeComponent_ngx_datatable_column_24_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " CTR ");
        }
      }

      function ApptitudeComponent_ngx_datatable_column_24_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r58 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r58, "1.2-2"));
        }
      }

      function ApptitudeComponent_ngx_datatable_column_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ApptitudeComponent_ngx_datatable_column_24_ng_template_1_Template, 1, 0, "ng-template", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ApptitudeComponent_ngx_datatable_column_24_ng_template_2_Template, 3, 4, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ApptitudeComponent_ng_template_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Split ");
        }
      }

      function ApptitudeComponent_ng_template_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r60 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r60));
        }
      }

      function ApptitudeComponent_ng_template_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Publisher Net ");
        }
      }

      function ApptitudeComponent_ng_template_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r62 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r62, "USD"));
        }
      }

      function ApptitudeComponent_ng_template_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Profit ");
        }
      }

      function ApptitudeComponent_ng_template_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r64 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r64, "USD"));
        }
      }

      function ApptitudeComponent_ng_template_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Revenue ");
        }
      }

      function ApptitudeComponent_ng_template_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r66 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r66, "USD"));
        }
      }

      var ApptitudeComponent = /*#__PURE__*/function () {
        function ApptitudeComponent(cdr, userService, apptitudeService, tagService) {
          _classCallCheck(this, ApptitudeComponent);

          this.cdr = cdr;
          this.userService = userService;
          this.apptitudeService = apptitudeService;
          this.tagService = tagService; //Chart setup variables

          this.range = {
            startDate: '',
            endDate: ''
          };
          this.loadingIndicator = true;
          this.expanded = {};
          this.tagList = [];
          this.groupPublishFlag = false;
          this.selectedCompany = this.getSelectedCompanyStored();
        }

        _createClass(ApptitudeComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return this.getCompanyTags(this.selectedCompany);

                    case 2:
                      this.tagList = _context12.sent;
                      this.rows = [];
                      _context12.next = 6;
                      return this.getAllApptitudeStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 6:
                      this.rows = _context12.sent;
                      _context12.next = 9;
                      return this.getChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 9:
                      this.chartData = _context12.sent;
                      _context12.next = 12;
                      return this.getSummaryMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 12:
                      this.summaryMetrics = _context12.sent;
                      this.cdr.markForCheck();

                    case 14:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "getAllApptitudeStats",
          value: function getAllApptitudeStats(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var response, _iterator15, _step15, tagL, _iterator16, _step16, tagSub;

              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return this.apptitudeService.getApptitudeStats(company, startDate, endDate).toPromise();

                    case 2:
                      response = _context13.sent;
                      console.log('getApptitudeStats() response:', response);
                      this.loadingIndicator = false;
                      this.allStats = response.stats;
                      this.allStats.map(function (resStat) {
                        resStat.publisher = "No Publisher";
                      });
                      _iterator15 = _createForOfIteratorHelper(this.tagList);

                      try {
                        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                          tagL = _step15.value;

                          if (tagL.tag.advertiser == "apptitude") {
                            _iterator16 = _createForOfIteratorHelper(tagL.tag.subids);

                            try {
                              for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                                tagSub = _step16.value;

                                if (tagSub.filterTag == "Contains") {
                                  this.allStats.map(function (stat) {
                                    if (stat.subid.includes(tagSub.subid)) {
                                      stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                    }
                                  });
                                } else if (tagSub.filterTag == "StartsWith") {
                                  this.allStats.map(function (stat_1) {
                                    if (stat_1.subid.startsWith(tagSub.subid)) {
                                      stat_1.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                    }
                                  });
                                } else if (tagSub.filterTag == "EndsWith") {
                                  this.allStats.map(function (stat_2) {
                                    if (stat_2.subid.endsWith(tagSub.subid)) {
                                      stat_2.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                    }
                                  });
                                } else if (tagSub.filterTag == "ExactValue") {
                                  this.allStats.map(function (stat_3) {
                                    if (stat_3.subid == tagSub.subid) {
                                      stat_3.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                    }
                                  });
                                }
                              }
                            } catch (err) {
                              _iterator16.e(err);
                            } finally {
                              _iterator16.f();
                            }
                          }
                        }
                      } catch (err) {
                        _iterator15.e(err);
                      } finally {
                        _iterator15.f();
                      }

                      return _context13.abrupt("return", this.allStats);

                    case 10:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
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
          key: "updateReportingFiltering",
          value: function updateReportingFiltering(range) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      this.range = range;
                      _context14.next = 3;
                      return this.getAllApptitudeStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 3:
                      this.rows = _context14.sent;
                      _context14.next = 6;
                      return this.getChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 6:
                      this.chartData = _context14.sent;
                      _context14.next = 9;
                      return this.getSummaryMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 9:
                      this.summaryMetrics = _context14.sent;
                      this.groupPublishFlag = false;
                      this.cdr.markForCheck();

                    case 12:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "groupProvider",
          value: function groupProvider() {
            var helperSummary = {};
            var groupData = this.allStats.reduce(function (r, o) {
              var key = o.publisher;

              if (!helperSummary[key]) {
                helperSummary[key] = Object.assign({}, o); // create a copy of o

                helperSummary[key].counter = 1;
                r.push(helperSummary[key]);
              } else {
                helperSummary[key].clicks += parseFloat(o.clicks);
                helperSummary[key].cpc += parseFloat(o.cpc ? o.cpc : 0);
                helperSummary[key].ctr += parseFloat(o.ctr ? o.ctr : 0);
                helperSummary[key].impressions += parseFloat(o.impressions ? o.impressions : 0);
                helperSummary[key].searches += parseFloat(o.searches ? o.searches : 0);
                helperSummary[key].revenue += parseFloat(o.revenue);
                helperSummary[key].split += parseFloat(o.split);
                helperSummary[key].profit += parseFloat(o.profit);
                helperSummary[key].publisherNet += parseFloat(o.publisherNet);
                helperSummary[key].counter++;
              }

              return r;
            }, []);

            var _iterator17 = _createForOfIteratorHelper(groupData),
                _step17;

            try {
              for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                var group = _step17.value;
                group.split = group.split / group.counter;
                group.cpc = group.cpc / group.counter;
                group.ctr = group.ctr / group.counter;
              }
            } catch (err) {
              _iterator17.e(err);
            } finally {
              _iterator17.f();
            }

            this.rows = groupData;
            this.groupPublishFlag = true;
            this.cdr.markForCheck();
          }
        }, {
          key: "backProvider",
          value: function backProvider() {
            this.rows = this.allStats;
            this.groupPublishFlag = false;
            this.cdr.markForCheck();
          }
        }, {
          key: "getChartMetrics",
          value: function getChartMetrics(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var response;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.prev = 0;
                      _context15.next = 3;
                      return this.apptitudeService.getChartMetrics(company, startDate, endDate).toPromise();

                    case 3:
                      response = _context15.sent;
                      return _context15.abrupt("return", response);

                    case 7:
                      _context15.prev = 7;
                      _context15.t0 = _context15["catch"](0);
                      return _context15.abrupt("return", _context15.t0);

                    case 10:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this, [[0, 7]]);
            }));
          }
        }, {
          key: "getSummaryMetrics",
          value: function getSummaryMetrics(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var response, allSummary, currentPercentPace, lastPercentPace, selectedPercentPace;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      _context16.next = 2;
                      return this.apptitudeService.getSummaryMetrics(this.selectedCompany, startDate, endDate).toPromise();

                    case 2:
                      response = _context16.sent;
                      allSummary = {};
                      currentPercentPace = 0;
                      lastPercentPace = 0;
                      selectedPercentPace = 0;

                      if (response.summary[0].lastMonthStat[0].profitPace != 0) {
                        currentPercentPace = (response.summary[0].summaryMetrics[0].profitPace - response.summary[0].lastMonthStat[0].profitPace) / response.summary[0].lastMonthStat[0].profitPace * 100;
                      }

                      if (response.summary[0].twoLastMonthStat[0].profitPace != 0) {
                        lastPercentPace = (response.summary[0].lastMonthStat[0].profitPace - response.summary[0].twoLastMonthStat[0].profitPace) / response.summary[0].twoLastMonthStat[0].profitPace * 100;
                      }

                      if (response.summary[0].prevSelectedStat[0].profitPace != 0) {
                        selectedPercentPace = (response.summary[0].selectedStat[0].profitPace - response.summary[0].prevSelectedStat[0].profitPace) / response.summary[0].prevSelectedStat[0].profitPace * 100;
                      }

                      response.summary[0].summaryMetrics[0].percentPace = currentPercentPace;
                      response.summary[0].lastMonthStat[0].percentPace = lastPercentPace;
                      response.summary[0].selectedStat[0].percentPace = selectedPercentPace;
                      response.summary[0].selectedStat[0].selectedStartDate = startDate;
                      response.summary[0].selectedStat[0].selectedEndDate = endDate;
                      allSummary['summary'] = response.summary;
                      return _context16.abrupt("return", allSummary);

                    case 17:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          } //get Tags with selected company

        }, {
          key: "getCompanyTags",
          value: function getCompanyTags(selectedCompany) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              var companyId, response;
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      companyId = selectedCompany.split("/")[1];
                      _context17.prev = 1;
                      _context17.next = 4;
                      return this.tagService.getCompanyTags(companyId).toPromise();

                    case 4:
                      response = _context17.sent;
                      return _context17.abrupt("return", response);

                    case 8:
                      _context17.prev = 8;
                      _context17.t0 = _context17["catch"](1);
                      return _context17.abrupt("return", _context17.t0);

                    case 11:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this, [[1, 8]]);
            }));
          }
        }]);

        return ApptitudeComponent;
      }();

      ApptitudeComponent.ɵfac = function ApptitudeComponent_Factory(t) {
        return new (t || ApptitudeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_admin_stats_apptitude_service__WEBPACK_IMPORTED_MODULE_3__["ApptitudeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__["TagManagementService"]));
      };

      ApptitudeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ApptitudeComponent,
        selectors: [["app-apptitude"]],
        viewQuery: function ApptitudeComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 37,
        vars: 22,
        consts: [[3, "onDatesPicked"], [3, "chartData", 4, "ngIf"], [3, "summaryMetricsData", 4, "ngIf"], [1, "row", "px-6"], [1, "btn", "btn-sm", "btn-primary", "mx-3", 3, "click"], [1, "btn", "btn-sm", "btn-dark", "mx-3", 3, "click"], [1, "material", "fullscreen", "expandable", 2, "top", "30px", "height", "500px", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "rows", "loadingIndicator"], ["expandableTable", ""], [3, "rowHeight", "toggle"], ["myDetailRow", ""], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["ngx-datatable-cell-template", ""], ["name", "date", 3, "minWidth", 4, "ngIf"], ["name", "subid", 4, "ngIf"], ["name", "publisher"], ["ngx-datatable-header-template", ""], ["name", "clicks", 4, "ngIf"], ["name", "searches", 4, "ngIf"], ["name", "impressions", 4, "ngIf"], ["name", "cpc", 4, "ngIf"], ["name", "ctr", 4, "ngIf"], ["name", "split"], ["name", "publisherNet"], ["name", "profit"], ["name", "revenue"], [3, "chartData"], [3, "summaryMetricsData"], [2, "padding-left", "35px"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 3, "click"], ["name", "date", 3, "minWidth"], ["name", "subid"], ["name", "clicks"], ["name", "searches"], ["name", "impressions"], ["name", "cpc"], ["name", "ctr"]],
        template: function ApptitudeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-reporting-filtering", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onDatesPicked", function ApptitudeComponent_Template_app_reporting_filtering_onDatesPicked_0_listener($event) {
              return ctx.updateReportingFiltering($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ApptitudeComponent_app_reporting_revenue_chart_1_Template, 1, 1, "app-reporting-revenue-chart", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ApptitudeComponent_app_summary_metrics_2_Template, 1, 1, "app-summary-metrics", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApptitudeComponent_Template_button_click_4_listener() {
              return ctx.groupProvider();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Group ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApptitudeComponent_Template_button_click_6_listener() {
              return ctx.backProvider();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Back ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ngx-datatable", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ngx-datatable-row-detail", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("toggle", function ApptitudeComponent_Template_ngx_datatable_row_detail_toggle_10_listener($event) {
              return ctx.onDetailToggle($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ApptitudeComponent_ng_template_12_Template, 6, 0, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ngx-datatable-column", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ApptitudeComponent_ng_template_14_Template, 1, 4, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ApptitudeComponent_ngx_datatable_column_15_Template, 3, 1, "ngx-datatable-column", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ApptitudeComponent_ngx_datatable_column_16_Template, 3, 0, "ngx-datatable-column", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ngx-datatable-column", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ApptitudeComponent_ng_template_18_Template, 1, 0, "ng-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ApptitudeComponent_ng_template_19_Template, 2, 1, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ApptitudeComponent_ngx_datatable_column_20_Template, 3, 0, "ngx-datatable-column", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ApptitudeComponent_ngx_datatable_column_21_Template, 3, 0, "ngx-datatable-column", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ApptitudeComponent_ngx_datatable_column_22_Template, 3, 0, "ngx-datatable-column", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ApptitudeComponent_ngx_datatable_column_23_Template, 3, 0, "ngx-datatable-column", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, ApptitudeComponent_ngx_datatable_column_24_Template, 3, 0, "ngx-datatable-column", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ngx-datatable-column", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ApptitudeComponent_ng_template_26_Template, 1, 0, "ng-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ApptitudeComponent_ng_template_27_Template, 3, 3, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ngx-datatable-column", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ApptitudeComponent_ng_template_29_Template, 1, 0, "ng-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ApptitudeComponent_ng_template_30_Template, 3, 4, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ngx-datatable-column", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ApptitudeComponent_ng_template_32_Template, 1, 0, "ng-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, ApptitudeComponent_ng_template_33_Template, 3, 4, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ngx-datatable-column", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, ApptitudeComponent_ng_template_35_Template, 1, 0, "ng-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, ApptitudeComponent_ng_template_36_Template, 3, 4, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.chartData);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.summaryMetrics);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnMode", "force")("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("rows", ctx.rows)("loadingIndicator", ctx.loadingIndicator);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowHeight", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 50)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag);
          }
        },
        directives: [_shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_5__["ReportingFilteringComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableRowDetailDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableRowDetailTemplateDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnCellDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnHeaderDirective"], _shared_modules_reporting_revenue_chart_reporting_revenue_chart_component__WEBPACK_IMPORTED_MODULE_8__["ReportingRevenueChartComponent"], _shared_modules_summary_metrics_summary_metrics_component__WEBPACK_IMPORTED_MODULE_9__["SummaryMetricsComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL2FwcHRpdHVkZS9hcHB0aXR1ZGUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApptitudeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-apptitude',
            templateUrl: './apptitude.component.html',
            styleUrls: ['./apptitude.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
          }, {
            type: src_app_shared_service_admin_stats_apptitude_service__WEBPACK_IMPORTED_MODULE_3__["ApptitudeService"]
          }, {
            type: _tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__["TagManagementService"]
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


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/service/users.service */
      "./src/app/shared/service/users.service.ts");
      /* harmony import */


      var src_app_shared_service_admin_stats_hopkin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/service/admin-stats/hopkin.service */
      "./src/app/shared/service/admin-stats/hopkin.service.ts");
      /* harmony import */


      var _tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../tag-management/tag-management.service */
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

      function HopkinsComponent_app_reporting_revenue_chart_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-reporting-revenue-chart", 26);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("chartData", ctx_r0.chartData);
        }
      }

      function HopkinsComponent_app_summary_metrics_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-summary-metrics", 27);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("summaryMetricsData", ctx_r1.summaryMetrics);
        }
      }

      function HopkinsComponent_ng_template_12_Template(rf, ctx) {
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

      function HopkinsComponent_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HopkinsComponent_ng_template_14_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28);

            var row_r25 = ctx.row;

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r27.toggleExpandRow(row_r25);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var expanded_r26 = ctx.expanded;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("datatable-icon-right", !expanded_r26)("datatable-icon-down", expanded_r26);
        }
      }

      function HopkinsComponent_ngx_datatable_column_15_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Date ");
        }
      }

      function HopkinsComponent_ngx_datatable_column_15_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r32 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r32));
        }
      }

      function HopkinsComponent_ngx_datatable_column_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HopkinsComponent_ngx_datatable_column_15_ng_template_1_Template, 1, 0, "ng-template", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HopkinsComponent_ngx_datatable_column_15_ng_template_2_Template, 3, 3, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 100);
        }
      }

      function HopkinsComponent_ngx_datatable_column_16_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Subid ");
        }
      }

      function HopkinsComponent_ngx_datatable_column_16_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r36 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r36);
        }
      }

      function HopkinsComponent_ngx_datatable_column_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HopkinsComponent_ngx_datatable_column_16_ng_template_1_Template, 1, 0, "ng-template", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HopkinsComponent_ngx_datatable_column_16_ng_template_2_Template, 2, 1, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function HopkinsComponent_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Publisher ");
        }
      }

      function HopkinsComponent_ng_template_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r38 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r38);
        }
      }

      function HopkinsComponent_ngx_datatable_column_20_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Searches ");
        }
      }

      function HopkinsComponent_ngx_datatable_column_20_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r42 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r42));
        }
      }

      function HopkinsComponent_ngx_datatable_column_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HopkinsComponent_ngx_datatable_column_20_ng_template_1_Template, 1, 0, "ng-template", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HopkinsComponent_ngx_datatable_column_20_ng_template_2_Template, 3, 3, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function HopkinsComponent_ngx_datatable_column_21_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Clicks ");
        }
      }

      function HopkinsComponent_ngx_datatable_column_21_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r46 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r46));
        }
      }

      function HopkinsComponent_ngx_datatable_column_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HopkinsComponent_ngx_datatable_column_21_ng_template_1_Template, 1, 0, "ng-template", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HopkinsComponent_ngx_datatable_column_21_ng_template_2_Template, 3, 3, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function HopkinsComponent_ngx_datatable_column_22_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Coverage ");
        }
      }

      function HopkinsComponent_ngx_datatable_column_22_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r50 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r50));
        }
      }

      function HopkinsComponent_ngx_datatable_column_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HopkinsComponent_ngx_datatable_column_22_ng_template_1_Template, 1, 0, "ng-template", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HopkinsComponent_ngx_datatable_column_22_ng_template_2_Template, 3, 3, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function HopkinsComponent_ngx_datatable_column_23_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " PPC ");
        }
      }

      function HopkinsComponent_ngx_datatable_column_23_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r54 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r54));
        }
      }

      function HopkinsComponent_ngx_datatable_column_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HopkinsComponent_ngx_datatable_column_23_ng_template_1_Template, 1, 0, "ng-template", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HopkinsComponent_ngx_datatable_column_23_ng_template_2_Template, 3, 3, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function HopkinsComponent_ngx_datatable_column_24_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " TQ ");
        }
      }

      function HopkinsComponent_ngx_datatable_column_24_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r58 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r58));
        }
      }

      function HopkinsComponent_ngx_datatable_column_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HopkinsComponent_ngx_datatable_column_24_ng_template_1_Template, 1, 0, "ng-template", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HopkinsComponent_ngx_datatable_column_24_ng_template_2_Template, 3, 3, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function HopkinsComponent_ng_template_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Split ");
        }
      }

      function HopkinsComponent_ng_template_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r60 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r60) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 3, 0, "1.0-0"));
        }
      }

      function HopkinsComponent_ng_template_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Publisher Net ");
        }
      }

      function HopkinsComponent_ng_template_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r62 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r62, "USD"));
        }
      }

      function HopkinsComponent_ng_template_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Profit ");
        }
      }

      function HopkinsComponent_ng_template_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r64 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r64, "USD"));
        }
      }

      function HopkinsComponent_ng_template_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Revenue ");
        }
      }

      function HopkinsComponent_ng_template_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r66 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r66, "USD"));
        }
      }

      var HopkinsComponent = /*#__PURE__*/function () {
        function HopkinsComponent(cdr, userService, hopkinService, tagService) {
          _classCallCheck(this, HopkinsComponent);

          this.cdr = cdr;
          this.userService = userService;
          this.hopkinService = hopkinService;
          this.tagService = tagService;
          this.range = {
            startDate: '',
            endDate: ''
          };
          this.loadingIndicator = true;
          this.groupPublishFlag = false;
          this.expanded = {};
          this.tagList = [];
          this.selectedCompany = this.getSelectedCompanyStored();
        }

        _createClass(HopkinsComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      _context18.next = 2;
                      return this.getCompanyTags(this.selectedCompany);

                    case 2:
                      this.tagList = _context18.sent;
                      this.rows = [];
                      _context18.next = 6;
                      return this.getAllHopkinStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 6:
                      this.rows = _context18.sent;
                      _context18.next = 9;
                      return this.getChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 9:
                      this.chartData = _context18.sent;
                      _context18.next = 12;
                      return this.getSummaryMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 12:
                      this.summaryMetrics = _context18.sent;
                      this.refreshTable();

                    case 14:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          }
        }, {
          key: "getAllHopkinStats",
          value: function getAllHopkinStats(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              var response, _iterator18, _step18, tagL, _iterator19, _step19, tagSub;

              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      _context19.next = 2;
                      return this.hopkinService.getHopkinStats(company, startDate, endDate).toPromise();

                    case 2:
                      response = _context19.sent;
                      console.log('response:', response);
                      this.loadingIndicator = false;
                      this.allStats = response.stats;
                      this.allStats.map(function (resStat) {
                        resStat.publisher = "No Publisher";
                        resStat.tagname = "No Tag";
                      });
                      _iterator18 = _createForOfIteratorHelper(this.tagList);

                      try {
                        for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                          tagL = _step18.value;

                          if (tagL.tag.advertiser == "hopkins") {
                            _iterator19 = _createForOfIteratorHelper(tagL.tag.subids);

                            try {
                              for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                                tagSub = _step19.value;

                                if (tagSub.filterTag == "Contains") {
                                  this.allStats.map(function (stat) {
                                    if (stat.subid.includes(tagSub.subid)) {
                                      stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat.tagname = tagL.tag.name;
                                    }
                                  });
                                } else if (tagSub.filterTag == "StartsWith") {
                                  this.allStats.map(function (stat_1) {
                                    if (stat_1.subid.startsWith(tagSub.subid)) {
                                      stat_1.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_1.tagname = tagL.tag.name;
                                    }
                                  });
                                } else if (tagSub.filterTag == "EndsWith") {
                                  this.allStats.map(function (stat_2) {
                                    if (stat_2.subid.endsWith(tagSub.subid)) {
                                      stat_2.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_2.tagname = tagL.tag.name;
                                    }
                                  });
                                } else if (tagSub.filterTag == "ExactValue") {
                                  this.allStats.map(function (stat_3) {
                                    if (stat_3.subid == tagSub.subid) {
                                      stat_3.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_3.tagname = tagL.tag.name;
                                    }
                                  });
                                }
                              }
                            } catch (err) {
                              _iterator19.e(err);
                            } finally {
                              _iterator19.f();
                            }
                          }
                        }
                      } catch (err) {
                        _iterator18.e(err);
                      } finally {
                        _iterator18.f();
                      }

                      return _context19.abrupt("return", this.allStats);

                    case 10:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          }
        }, {
          key: "groupProvider",
          value: function groupProvider() {
            var helperSummary = {};
            var groupData = this.allStats.reduce(function (r, o) {
              var key = o.publisher;

              if (!helperSummary[key]) {
                helperSummary[key] = Object.assign({}, o); // create a copy of o

                helperSummary[key].counter = 1;
                r.push(helperSummary[key]);
              } else {
                helperSummary[key].clicks += parseFloat(o.clicks);
                helperSummary[key].searches += parseFloat(o.searches ? o.searches : 0);
                helperSummary[key].coverage += parseFloat(o.coverage ? o.coverage : 0);
                helperSummary[key].ppc += parseFloat(o.ppc ? o.ppc : 0);
                helperSummary[key].tq += parseFloat(o.tq ? o.tq : 0);
                helperSummary[key].revenue += parseFloat(o.revenue);
                helperSummary[key].split += parseFloat(o.split);
                helperSummary[key].profit += parseFloat(o.profit);
                helperSummary[key].publisherNet += parseFloat(o.publisherNet);
                helperSummary[key].counter++;
              }

              return r;
            }, []);

            var _iterator20 = _createForOfIteratorHelper(groupData),
                _step20;

            try {
              for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                var group = _step20.value;
                group.split = group.split / group.counter;
              }
            } catch (err) {
              _iterator20.e(err);
            } finally {
              _iterator20.f();
            }

            this.rows = groupData;
            this.groupPublishFlag = true;
            this.cdr.markForCheck();
          }
        }, {
          key: "backProvider",
          value: function backProvider() {
            this.rows = this.allStats;
            this.groupPublishFlag = false;
            this.cdr.markForCheck();
          }
        }, {
          key: "updateReportingFiltering",
          value: function updateReportingFiltering(range) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      this.range = range;
                      _context20.next = 3;
                      return this.getAllHopkinStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 3:
                      this.rows = _context20.sent;
                      _context20.next = 6;
                      return this.getChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 6:
                      this.chartData = _context20.sent;
                      _context20.next = 9;
                      return this.getSummaryMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 9:
                      this.summaryMetrics = _context20.sent;
                      this.groupPublishFlag = false;
                      this.refreshTable();

                    case 12:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
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
          } //get Tags with selected company

        }, {
          key: "getCompanyTags",
          value: function getCompanyTags(selectedCompany) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
              var companyId, response;
              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      companyId = selectedCompany.split("/")[1];
                      _context21.prev = 1;
                      _context21.next = 4;
                      return this.tagService.getCompanyTags(companyId).toPromise();

                    case 4:
                      response = _context21.sent;
                      return _context21.abrupt("return", response);

                    case 8:
                      _context21.prev = 8;
                      _context21.t0 = _context21["catch"](1);
                      return _context21.abrupt("return", _context21.t0);

                    case 11:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this, [[1, 8]]);
            }));
          }
        }, {
          key: "getChartMetrics",
          value: function getChartMetrics(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
              var response;
              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      _context22.prev = 0;
                      _context22.next = 3;
                      return this.hopkinService.getChartMetrics(company, startDate, endDate).toPromise();

                    case 3:
                      response = _context22.sent;
                      return _context22.abrupt("return", response);

                    case 7:
                      _context22.prev = 7;
                      _context22.t0 = _context22["catch"](0);
                      return _context22.abrupt("return", _context22.t0);

                    case 10:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22, this, [[0, 7]]);
            }));
          }
        }, {
          key: "getSummaryMetrics",
          value: function getSummaryMetrics(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
              var response, allSummary, currentPercentPace, lastPercentPace, selectedPercentPace;
              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      _context23.next = 2;
                      return this.hopkinService.getSummaryMetrics(company, startDate, endDate).toPromise();

                    case 2:
                      response = _context23.sent;
                      allSummary = {};
                      currentPercentPace = 0;
                      lastPercentPace = 0;
                      selectedPercentPace = 0;

                      if (response.summary[0].lastMonthStat[0].profitPace != 0) {
                        currentPercentPace = (response.summary[0].summaryMetrics[0].profitPace - response.summary[0].lastMonthStat[0].profitPace) / response.summary[0].lastMonthStat[0].profitPace * 100;
                      }

                      if (response.summary[0].twoLastMonthStat[0].profitPace != 0) {
                        lastPercentPace = (response.summary[0].lastMonthStat[0].profitPace - response.summary[0].twoLastMonthStat[0].profitPace) / response.summary[0].twoLastMonthStat[0].profitPace * 100;
                      }

                      if (response.summary[0].prevSelectedStat[0].profitPace != 0) {
                        selectedPercentPace = (response.summary[0].selectedStat[0].profitPace - response.summary[0].prevSelectedStat[0].profitPace) / response.summary[0].prevSelectedStat[0].profitPace * 100;
                      }

                      response.summary[0].summaryMetrics[0].percentPace = currentPercentPace;
                      response.summary[0].lastMonthStat[0].percentPace = lastPercentPace;
                      response.summary[0].selectedStat[0].percentPace = selectedPercentPace;
                      response.summary[0].selectedStat[0].selectedStartDate = startDate;
                      response.summary[0].selectedStat[0].selectedEndDate = endDate;
                      allSummary['summary'] = response.summary;
                      return _context23.abrupt("return", allSummary);

                    case 17:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23, this);
            }));
          }
        }]);

        return HopkinsComponent;
      }();

      HopkinsComponent.ɵfac = function HopkinsComponent_Factory(t) {
        return new (t || HopkinsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_admin_stats_hopkin_service__WEBPACK_IMPORTED_MODULE_3__["HopkinService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__["TagManagementService"]));
      };

      HopkinsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: HopkinsComponent,
        selectors: [["app-hopkins"]],
        viewQuery: function HopkinsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 37,
        vars: 24,
        consts: [[3, "onDatesPicked"], [3, "chartData", 4, "ngIf"], [3, "summaryMetricsData", 4, "ngIf"], [1, "row", "px-6"], [1, "btn", "btn-sm", "btn-primary", "mx-3", 3, "click"], [1, "btn", "btn-sm", "btn-dark", "mx-3", 3, "click"], [1, "material", "fullscreen", "expandable", 2, "top", "30px", "height", "500px", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "rows", "loadingIndicator"], ["expandableTable", ""], [3, "rowHeight", "toggle"], ["myDetailRow", ""], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["ngx-datatable-cell-template", ""], ["name", "date", 3, "minWidth", 4, "ngIf"], ["name", "subid", 4, "ngIf"], ["name", "publisher", 3, "minWidth"], ["ngx-datatable-header-template", ""], ["name", "searches", 4, "ngIf"], ["name", "clicks", 4, "ngIf"], ["name", "coverage", 4, "ngIf"], ["name", "ppc", 4, "ngIf"], ["name", "tq", 4, "ngIf"], ["name", "split", 3, "minWidth"], ["name", "publisherNet"], ["name", "profit"], ["name", "revenue"], [3, "chartData"], [3, "summaryMetricsData"], [2, "padding-left", "35px"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 3, "click"], ["name", "date", 3, "minWidth"], ["name", "subid"], ["name", "searches"], ["name", "clicks"], ["name", "coverage"], ["name", "ppc"], ["name", "tq"]],
        template: function HopkinsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-reporting-filtering", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onDatesPicked", function HopkinsComponent_Template_app_reporting_filtering_onDatesPicked_0_listener($event) {
              return ctx.updateReportingFiltering($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HopkinsComponent_app_reporting_revenue_chart_1_Template, 1, 1, "app-reporting-revenue-chart", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HopkinsComponent_app_summary_metrics_2_Template, 1, 1, "app-summary-metrics", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HopkinsComponent_Template_button_click_4_listener() {
              return ctx.groupProvider();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Group ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HopkinsComponent_Template_button_click_6_listener() {
              return ctx.backProvider();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Back ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ngx-datatable", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ngx-datatable-row-detail", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("toggle", function HopkinsComponent_Template_ngx_datatable_row_detail_toggle_10_listener($event) {
              return ctx.onDetailToggle($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, HopkinsComponent_ng_template_12_Template, 6, 0, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ngx-datatable-column", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, HopkinsComponent_ng_template_14_Template, 1, 4, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, HopkinsComponent_ngx_datatable_column_15_Template, 3, 1, "ngx-datatable-column", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, HopkinsComponent_ngx_datatable_column_16_Template, 3, 0, "ngx-datatable-column", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ngx-datatable-column", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, HopkinsComponent_ng_template_18_Template, 1, 0, "ng-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, HopkinsComponent_ng_template_19_Template, 2, 1, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, HopkinsComponent_ngx_datatable_column_20_Template, 3, 0, "ngx-datatable-column", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, HopkinsComponent_ngx_datatable_column_21_Template, 3, 0, "ngx-datatable-column", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, HopkinsComponent_ngx_datatable_column_22_Template, 3, 0, "ngx-datatable-column", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, HopkinsComponent_ngx_datatable_column_23_Template, 3, 0, "ngx-datatable-column", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, HopkinsComponent_ngx_datatable_column_24_Template, 3, 0, "ngx-datatable-column", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ngx-datatable-column", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, HopkinsComponent_ng_template_26_Template, 1, 0, "ng-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, HopkinsComponent_ng_template_27_Template, 4, 6, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ngx-datatable-column", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, HopkinsComponent_ng_template_29_Template, 1, 0, "ng-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, HopkinsComponent_ng_template_30_Template, 3, 4, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ngx-datatable-column", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, HopkinsComponent_ng_template_32_Template, 1, 0, "ng-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, HopkinsComponent_ng_template_33_Template, 3, 4, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ngx-datatable-column", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, HopkinsComponent_ng_template_35_Template, 1, 0, "ng-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, HopkinsComponent_ng_template_36_Template, 3, 4, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.chartData);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.summaryMetrics);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnMode", "force")("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("rows", ctx.rows)("loadingIndicator", ctx.loadingIndicator);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowHeight", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 30)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 35);
          }
        },
        directives: [_shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_5__["ReportingFilteringComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableRowDetailDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableRowDetailTemplateDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnCellDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnHeaderDirective"], _shared_modules_reporting_revenue_chart_reporting_revenue_chart_component__WEBPACK_IMPORTED_MODULE_8__["ReportingRevenueChartComponent"], _shared_modules_summary_metrics_summary_metrics_component__WEBPACK_IMPORTED_MODULE_9__["SummaryMetricsComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL2hvcGtpbnMvaG9wa2lucy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HopkinsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-hopkins',
            templateUrl: './hopkins.component.html',
            styleUrls: ['./hopkins.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
          }, {
            type: src_app_shared_service_admin_stats_hopkin_service__WEBPACK_IMPORTED_MODULE_3__["HopkinService"]
          }, {
            type: _tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__["TagManagementService"]
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
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-reporting-revenue-chart", 28);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("chartData", ctx_r0.chartData);
        }
      }

      function LyonsComponent_app_summary_metrics_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-summary-metrics", 29);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("summaryMetricsData", ctx_r1.summaryMetricsData);
        }
      }

      function LyonsComponent_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);

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

      function LyonsComponent_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LyonsComponent_ng_template_18_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27);

            var row_r24 = ctx.row;

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r26.toggleExpandRow(row_r24);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var expanded_r25 = ctx.expanded;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("datatable-icon-right", !expanded_r25)("datatable-icon-down", expanded_r25);
        }
      }

      function LyonsComponent_ngx_datatable_column_19_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Date ");
        }
      }

      function LyonsComponent_ngx_datatable_column_19_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r31 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r31));
        }
      }

      function LyonsComponent_ngx_datatable_column_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LyonsComponent_ngx_datatable_column_19_ng_template_1_Template, 1, 0, "ng-template", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LyonsComponent_ngx_datatable_column_19_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LyonsComponent_ngx_datatable_column_20_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Subid ");
        }
      }

      function LyonsComponent_ngx_datatable_column_20_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r35 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r35);
        }
      }

      function LyonsComponent_ngx_datatable_column_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LyonsComponent_ngx_datatable_column_20_ng_template_1_Template, 1, 0, "ng-template", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LyonsComponent_ngx_datatable_column_20_ng_template_2_Template, 2, 1, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LyonsComponent_ngx_datatable_column_21_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Publisher ");
        }
      }

      function LyonsComponent_ngx_datatable_column_21_ng_template_2_Template(rf, ctx) {
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

      function LyonsComponent_ngx_datatable_column_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LyonsComponent_ngx_datatable_column_21_ng_template_1_Template, 1, 0, "ng-template", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LyonsComponent_ngx_datatable_column_21_ng_template_2_Template, 2, 1, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LyonsComponent_ngx_datatable_column_22_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Searches ");
        }
      }

      function LyonsComponent_ngx_datatable_column_22_ng_template_2_Template(rf, ctx) {
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

      function LyonsComponent_ngx_datatable_column_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LyonsComponent_ngx_datatable_column_22_ng_template_1_Template, 1, 0, "ng-template", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LyonsComponent_ngx_datatable_column_22_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LyonsComponent_ngx_datatable_column_23_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Bid Searches ");
        }
      }

      function LyonsComponent_ngx_datatable_column_23_ng_template_2_Template(rf, ctx) {
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

      function LyonsComponent_ngx_datatable_column_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LyonsComponent_ngx_datatable_column_23_ng_template_1_Template, 1, 0, "ng-template", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LyonsComponent_ngx_datatable_column_23_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LyonsComponent_ngx_datatable_column_24_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Clicks ");
        }
      }

      function LyonsComponent_ngx_datatable_column_24_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r51 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r51));
        }
      }

      function LyonsComponent_ngx_datatable_column_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LyonsComponent_ngx_datatable_column_24_ng_template_1_Template, 1, 0, "ng-template", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LyonsComponent_ngx_datatable_column_24_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LyonsComponent_ngx_datatable_column_25_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " BiddedCTR ");
        }
      }

      function LyonsComponent_ngx_datatable_column_25_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r55 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r55, "2.2-2") || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, 0, "2.2-2"));
        }
      }

      function LyonsComponent_ngx_datatable_column_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LyonsComponent_ngx_datatable_column_25_ng_template_1_Template, 1, 0, "ng-template", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LyonsComponent_ngx_datatable_column_25_ng_template_2_Template, 4, 7, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LyonsComponent_ngx_datatable_column_26_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " CTR ");
        }
      }

      function LyonsComponent_ngx_datatable_column_26_ng_template_2_Template(rf, ctx) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r59, "2.2-2") || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, 0, "2.2-2"));
        }
      }

      function LyonsComponent_ngx_datatable_column_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LyonsComponent_ngx_datatable_column_26_ng_template_1_Template, 1, 0, "ng-template", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LyonsComponent_ngx_datatable_column_26_ng_template_2_Template, 4, 7, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LyonsComponent_ng_template_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Publisher Net ");
        }
      }

      function LyonsComponent_ng_template_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r61 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r61, "USD"));
        }
      }

      function LyonsComponent_ng_template_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Profit ");
        }
      }

      function LyonsComponent_ng_template_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r63 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r63, "USD"));
        }
      }

      function LyonsComponent_ng_template_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Revenue ");
        }
      }

      function LyonsComponent_ng_template_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r65 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r65, "USD"));
        }
      }

      function LyonsComponent_ng_template_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Spilt ");
        }
      }

      function LyonsComponent_ng_template_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r67 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r67) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 3, 0, "1.0-0"));
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
          this.loadingIndicator = true;
          this.columns = [{
            prop: 'name'
          }, {
            name: 'Gender'
          }];
          this.expanded = {};
          this.tagList = [];
          this.filteredLyonStat = [];
          this.groupPublishFlag = false;
          this.groupDateShowFlag = false;
          this.groupSubidShowFlag = false;
          this.selectedCompany = this.getSelectedCompanyFromLocalStorage();
        }

        _createClass(LyonsComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      _context24.next = 2;
                      return this.getCompanyTags(this.selectedCompany);

                    case 2:
                      this.tagList = _context24.sent;
                      this.rows = [];
                      _context24.next = 6;
                      return this.getAllLyonStats(this.range.startDate, this.range.endDate);

                    case 6:
                      this.rows = _context24.sent;
                      _context24.next = 9;
                      return this.getChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 9:
                      this.chartData = _context24.sent;
                      _context24.next = 12;
                      return this.getSummaryMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 12:
                      this.summaryMetricsData = _context24.sent;
                      this.refreshTable();

                    case 14:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24, this);
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
              return regeneratorRuntime.wrap(function _callee25$(_context25) {
                while (1) {
                  switch (_context25.prev = _context25.next) {
                    case 0:
                      console.log('Testing Route');
                      this.lyonService.testingRoute().subscribe(function (response) {
                        console.log(response);
                      }), function (err) {
                        console.log(err);
                      };

                    case 2:
                    case "end":
                      return _context25.stop();
                  }
                }
              }, _callee25, this);
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
              var companyId, response;
              return regeneratorRuntime.wrap(function _callee26$(_context26) {
                while (1) {
                  switch (_context26.prev = _context26.next) {
                    case 0:
                      companyId = selectedCompany.split("/")[1];
                      _context26.prev = 1;
                      _context26.next = 4;
                      return this.tagService.getCompanyTags(companyId).toPromise();

                    case 4:
                      response = _context26.sent;
                      return _context26.abrupt("return", response);

                    case 8:
                      _context26.prev = 8;
                      _context26.t0 = _context26["catch"](1);
                      return _context26.abrupt("return", _context26.t0);

                    case 11:
                    case "end":
                      return _context26.stop();
                  }
                }
              }, _callee26, this, [[1, 8]]);
            }));
          } //get Stat all

        }, {
          key: "getAllLyonStats",
          value: function getAllLyonStats(startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
              var response, _iterator21, _step21, tagL, _iterator22, _step22, tagSub;

              return regeneratorRuntime.wrap(function _callee27$(_context27) {
                while (1) {
                  switch (_context27.prev = _context27.next) {
                    case 0:
                      _context27.prev = 0;
                      _context27.next = 3;
                      return this.lyonService.getAllStats(startDate, endDate).toPromise();

                    case 3:
                      response = _context27.sent;
                      this.loadingIndicator = false;
                      this.allstat = response;
                      this.allstat.map(function (resStat) {
                        resStat.publisher = "No Publisher";
                        resStat.tagname = "No Tag";
                      }); // var allLyonStat = [];

                      _iterator21 = _createForOfIteratorHelper(this.tagList);

                      try {
                        for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                          tagL = _step21.value;

                          if (tagL.tag.advertiser == "lyons") {
                            _iterator22 = _createForOfIteratorHelper(tagL.tag.subids);

                            try {
                              for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                                tagSub = _step22.value;

                                if (tagSub.filterTag == "Contains") {
                                  this.allstat.map(function (stat) {
                                    if (stat.subid.includes(tagSub.subid)) {
                                      stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat.tagname = tagL.tag.name;
                                    }
                                  });
                                } else if (tagSub.filterTag == "StartsWith") {
                                  this.allstat.map(function (stat_1) {
                                    if (stat_1.subid.startsWith(tagSub.subid)) {
                                      stat_1.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_1.tagname = tagL.tag.name;
                                    }
                                  });
                                } else if (tagSub.filterTag == "EndsWith") {
                                  this.allstat.map(function (stat_2) {
                                    if (stat_2.subid.endsWith(tagSub.subid)) {
                                      stat_2.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_2.tagname = tagL.tag.name;
                                    }
                                  });
                                } else if (tagSub.filterTag == "ExactValue") {
                                  this.allstat.map(function (stat_3) {
                                    if (stat_3.subid == tagSub.subid) {
                                      stat_3.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_3.tagname = tagL.tag.name;
                                    }
                                  });
                                }
                              }
                            } catch (err) {
                              _iterator22.e(err);
                            } finally {
                              _iterator22.f();
                            }
                          }
                        }
                      } catch (err) {
                        _iterator21.e(err);
                      } finally {
                        _iterator21.f();
                      }

                      return _context27.abrupt("return", this.allstat);

                    case 12:
                      _context27.prev = 12;
                      _context27.t0 = _context27["catch"](0);
                      return _context27.abrupt("return", _context27.t0);

                    case 15:
                    case "end":
                      return _context27.stop();
                  }
                }
              }, _callee27, this, [[0, 12]]);
            }));
          }
        }, {
          key: "groupDate",
          value: function groupDate() {
            var helperSummary = {};
            var groupData = this.allstat.reduce(function (r, o) {
              var key = o.date;

              if (!helperSummary[key]) {
                helperSummary[key] = Object.assign({}, o); // create a copy of o

                helperSummary[key].counter = 1;
                r.push(helperSummary[key]);
              } else {
                helperSummary[key].clicks += parseFloat(o.clicks);
                helperSummary[key].cpc += parseFloat(o.cpc ? o.cpc : 0);
                helperSummary[key].ctr += parseFloat(o.ctr ? o.ctr : 0);
                helperSummary[key].biddedCtr += parseFloat(o.biddedCtr ? o.biddedCtr : 0);
                helperSummary[key].biddedSearches += parseFloat(o.biddedSearches ? o.biddedSearches : 0);
                helperSummary[key].searches += parseFloat(o.searches ? o.searches : 0);
                helperSummary[key].revenue += parseFloat(o.revenue);
                helperSummary[key].profit += parseFloat(o.profit);
                helperSummary[key].publisherNet += parseFloat(o.publisherNet);
                helperSummary[key].split += parseFloat(o.split);
                helperSummary[key].counter++;
              }

              return r;
            }, []);

            var _iterator23 = _createForOfIteratorHelper(groupData),
                _step23;

            try {
              for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                var group = _step23.value;
                group.split = group.split / group.counter;
                group.biddedCtr = group.biddedCtr / group.counter;
                group.ctr = group.ctr / group.counter;
              }
            } catch (err) {
              _iterator23.e(err);
            } finally {
              _iterator23.f();
            }

            this.rows = groupData;
            this.groupPublishFlag = false;
            this.groupDateShowFlag = true;
            this.groupSubidShowFlag = false;
            this.cdr.markForCheck();
          }
        }, {
          key: "groupSubid",
          value: function groupSubid() {
            var helperSummary = {};
            var groupData = this.allstat.reduce(function (r, o) {
              var key = o.subid;

              if (!helperSummary[key]) {
                helperSummary[key] = Object.assign({}, o); // create a copy of o

                helperSummary[key].counter = 1;
                r.push(helperSummary[key]);
              } else {
                helperSummary[key].clicks += parseFloat(o.clicks);
                helperSummary[key].cpc += parseFloat(o.cpc ? o.cpc : 0);
                helperSummary[key].ctr += parseFloat(o.ctr ? o.ctr : 0);
                helperSummary[key].biddedCtr += parseFloat(o.biddedCtr ? o.biddedCtr : 0);
                helperSummary[key].biddedSearches += parseFloat(o.biddedSearches ? o.biddedSearches : 0);
                helperSummary[key].searches += parseFloat(o.searches ? o.searches : 0);
                helperSummary[key].revenue += parseFloat(o.revenue);
                helperSummary[key].profit += parseFloat(o.profit);
                helperSummary[key].publisherNet += parseFloat(o.publisherNet);
                helperSummary[key].split += parseFloat(o.split);
                helperSummary[key].counter++;
              }

              return r;
            }, []);

            var _iterator24 = _createForOfIteratorHelper(groupData),
                _step24;

            try {
              for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                var group = _step24.value;
                group.split = group.split / group.counter;
                group.biddedCtr = group.biddedCtr / group.counter;
                group.ctr = group.ctr / group.counter;
              }
            } catch (err) {
              _iterator24.e(err);
            } finally {
              _iterator24.f();
            }

            this.rows = groupData;
            this.groupPublishFlag = false;
            this.groupDateShowFlag = false;
            this.groupSubidShowFlag = true;
            this.cdr.markForCheck();
          }
        }, {
          key: "groupProvider",
          value: function groupProvider() {
            var helperSummary = {};
            var groupData = this.allstat.reduce(function (r, o) {
              var key = o.publisher;

              if (!helperSummary[key]) {
                helperSummary[key] = Object.assign({}, o); // create a copy of o

                helperSummary[key].counter = 1;
                r.push(helperSummary[key]);
              } else {
                helperSummary[key].clicks += parseFloat(o.clicks);
                helperSummary[key].cpc += parseFloat(o.cpc ? o.cpc : 0);
                helperSummary[key].ctr += parseFloat(o.ctr ? o.ctr : 0);
                helperSummary[key].biddedCtr += parseFloat(o.biddedCtr ? o.biddedCtr : 0);
                helperSummary[key].biddedSearches += parseFloat(o.biddedSearches ? o.biddedSearches : 0);
                helperSummary[key].searches += parseFloat(o.searches ? o.searches : 0);
                helperSummary[key].revenue += parseFloat(o.revenue);
                helperSummary[key].profit += parseFloat(o.profit);
                helperSummary[key].publisherNet += parseFloat(o.publisherNet);
                helperSummary[key].split += parseFloat(o.split);
                helperSummary[key].counter++;
              }

              return r;
            }, []);

            var _iterator25 = _createForOfIteratorHelper(groupData),
                _step25;

            try {
              for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                var group = _step25.value;
                group.split = group.split / group.counter;
                group.biddedCtr = group.biddedCtr / group.counter;
                group.ctr = group.ctr / group.counter;
              }
            } catch (err) {
              _iterator25.e(err);
            } finally {
              _iterator25.f();
            }

            this.rows = groupData;
            this.groupPublishFlag = true;
            this.groupDateShowFlag = false;
            this.groupSubidShowFlag = false;
            this.cdr.markForCheck();
          }
        }, {
          key: "backGroup",
          value: function backGroup() {
            this.rows = this.allstat;
            this.groupPublishFlag = false;
            this.groupDateShowFlag = false;
            this.groupSubidShowFlag = false;
            this.cdr.markForCheck();
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
              return regeneratorRuntime.wrap(function _callee28$(_context28) {
                while (1) {
                  switch (_context28.prev = _context28.next) {
                    case 0:
                      // console.log('Update report filtering....');
                      this.range = range;
                      _context28.next = 3;
                      return this.getAllLyonStats(this.range.startDate, this.range.endDate);

                    case 3:
                      this.rows = _context28.sent;
                      _context28.next = 6;
                      return this.getChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 6:
                      this.chartData = _context28.sent;
                      _context28.next = 9;
                      return this.getSummaryMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 9:
                      this.summaryMetricsData = _context28.sent;
                      this.groupPublishFlag = false;
                      this.refreshTable();

                    case 12:
                    case "end":
                      return _context28.stop();
                  }
                }
              }, _callee28, this);
            }));
          }
        }, {
          key: "refreshTable",
          value: function refreshTable() {
            this.cdr.markForCheck();
          }
        }, {
          key: "getSummaryMetrics",
          value: function getSummaryMetrics(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
              var response, allSummary, currentPercentPace, lastPercentPace, selectedPercentPace;
              return regeneratorRuntime.wrap(function _callee29$(_context29) {
                while (1) {
                  switch (_context29.prev = _context29.next) {
                    case 0:
                      _context29.prev = 0;
                      _context29.next = 3;
                      return this.lyonService.getSummaryMetrics(company, startDate, endDate).toPromise();

                    case 3:
                      response = _context29.sent;
                      allSummary = {};
                      currentPercentPace = 0;
                      lastPercentPace = 0;
                      selectedPercentPace = 0;

                      if (response.summary[0].lastMonthStat[0].profitPace != 0) {
                        currentPercentPace = (response.summary[0].summaryMetrics[0].profitPace - response.summary[0].lastMonthStat[0].profitPace) / response.summary[0].lastMonthStat[0].profitPace * 100;
                      }

                      if (response.summary[0].twoLastMonthStat[0].profitPace != 0) {
                        lastPercentPace = (response.summary[0].lastMonthStat[0].profitPace - response.summary[0].twoLastMonthStat[0].profitPace) / response.summary[0].twoLastMonthStat[0].profitPace * 100;
                      }

                      if (response.summary[0].prevSelectedStat[0].profitPace != 0) {
                        selectedPercentPace = (response.summary[0].selectedStat[0].profitPace - response.summary[0].prevSelectedStat[0].profitPace) / response.summary[0].prevSelectedStat[0].profitPace * 100;
                      }

                      response.summary[0].summaryMetrics[0].percentPace = currentPercentPace;
                      response.summary[0].lastMonthStat[0].percentPace = lastPercentPace;
                      response.summary[0].selectedStat[0].percentPace = selectedPercentPace;
                      response.summary[0].selectedStat[0].selectedStartDate = startDate;
                      response.summary[0].selectedStat[0].selectedEndDate = endDate;
                      allSummary['summary'] = response.summary;
                      return _context29.abrupt("return", allSummary);

                    case 20:
                      _context29.prev = 20;
                      _context29.t0 = _context29["catch"](0);
                      return _context29.abrupt("return", _context29.t0);

                    case 23:
                    case "end":
                      return _context29.stop();
                  }
                }
              }, _callee29, this, [[0, 20]]);
            }));
          }
        }, {
          key: "getChartMetrics",
          value: function getChartMetrics(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
              var response, sortResponse, helperChart, resultChart, revenuePerDayVal, datesOfRevenueVal, searchesPerDayVal, chartDataValue, _iterator26, _step26, resVal;

              return regeneratorRuntime.wrap(function _callee30$(_context30) {
                while (1) {
                  switch (_context30.prev = _context30.next) {
                    case 0:
                      _context30.prev = 0;
                      _context30.next = 3;
                      return this.lyonService.getAllStats(startDate, endDate).toPromise();

                    case 3:
                      response = _context30.sent;
                      sortResponse = response.slice().sort(function (a, b) {
                        return a.date - b.date;
                      });
                      this.allChart = sortResponse; // var chartAllLyonStat = [];
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

                      helperChart = {}; // this.allChart.map(f =>{
                      //   f.revenue = parseFloat(f.revenue);
                      //   f.ctr = parseFloat(f.ctr);
                      //   f.searches = parseFloat(f.searches);
                      //   f.biddedCtr = parseFloat(f.biddedCTR);
                      // })

                      resultChart = this.allChart.reduce(function (r, o) {
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
                      revenuePerDayVal = [];
                      datesOfRevenueVal = [];
                      searchesPerDayVal = [];
                      chartDataValue = {};
                      _iterator26 = _createForOfIteratorHelper(resultChart);

                      try {
                        for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                          resVal = _step26.value;
                          revenuePerDayVal.push(resVal.revenue);
                          datesOfRevenueVal.push(resVal.date);
                          searchesPerDayVal.push(resVal.searches);
                        }
                      } catch (err) {
                        _iterator26.e(err);
                      } finally {
                        _iterator26.f();
                      }

                      chartDataValue['revenuePerDay'] = revenuePerDayVal;
                      chartDataValue['datesOfRevenue'] = datesOfRevenueVal;
                      chartDataValue['searchesPerDay'] = searchesPerDayVal;
                      return _context30.abrupt("return", chartDataValue);

                    case 20:
                      _context30.prev = 20;
                      _context30.t0 = _context30["catch"](0);
                      return _context30.abrupt("return", _context30.t0);

                    case 23:
                    case "end":
                      return _context30.stop();
                  }
                }
              }, _callee30, this, [[0, 20]]);
            }));
          }
        }, {
          key: "combineSummaryMetrics",
          value: function combineSummaryMetrics(metrics) {
            var _this = this;

            metrics.summary.keys.forEach(function (element) {
              _this.summary.revenue += element.revenue;
              _this.summary.profit += element.revenue * ((100 - element.split) * 0.01);
            });
          }
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
        decls: 39,
        vars: 23,
        consts: [[3, "onDatesPicked"], [3, "chartData", 4, "ngIf"], [3, "summaryMetricsData", 4, "ngIf"], [1, "row", "px-6"], [1, "btn", "btn-sm", "btn-primary", "mx-1", 3, "click"], [1, "btn", "btn-sm", "btn-success", "mx-1", 3, "click"], [1, "btn", "btn-sm", "btn-info", "mx-1", 3, "click"], [1, "btn", "btn-sm", "btn-dark", "mx-1", 3, "click"], [1, "material", "fullscreen", "expandable", 2, "top", "30px", "height", "500px", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "rows", "loadingIndicator"], ["expandableTable", ""], [3, "rowHeight", "toggle"], ["myDetailRow", ""], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["ngx-datatable-cell-template", ""], ["name", "date", 4, "ngIf"], ["name", "subid", 4, "ngIf"], ["name", "publisher", 4, "ngIf"], ["name", "searches", 4, "ngIf"], ["name", "biddedSearches", 4, "ngIf"], ["name", "clicks", 4, "ngIf"], ["name", "biddedCtr", 4, "ngIf"], ["name", "ctr", 4, "ngIf"], ["name", "publisherNet"], ["ngx-datatable-header-template", ""], ["name", "profit"], ["name", "revenue"], ["name", "split"], [3, "chartData"], [3, "summaryMetricsData"], [2, "padding-left", "35px"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 3, "click"], ["name", "date"], ["name", "subid"], ["name", "publisher"], ["name", "searches"], ["name", "biddedSearches"], ["name", "clicks"], ["name", "biddedCtr"], ["name", "ctr"]],
        template: function LyonsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-reporting-filtering", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onDatesPicked", function LyonsComponent_Template_app_reporting_filtering_onDatesPicked_0_listener($event) {
              return ctx.updateReportingFiltering($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LyonsComponent_app_reporting_revenue_chart_1_Template, 1, 1, "app-reporting-revenue-chart", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LyonsComponent_app_summary_metrics_2_Template, 1, 1, "app-summary-metrics", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LyonsComponent_Template_button_click_4_listener() {
              return ctx.groupDate();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Group by Date ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LyonsComponent_Template_button_click_6_listener() {
              return ctx.groupProvider();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Group by Publisher ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LyonsComponent_Template_button_click_8_listener() {
              return ctx.groupSubid();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Group by Subid ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LyonsComponent_Template_button_click_10_listener() {
              return ctx.backGroup();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Back ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ngx-datatable", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ngx-datatable-row-detail", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("toggle", function LyonsComponent_Template_ngx_datatable_row_detail_toggle_14_listener($event) {
              return ctx.onDetailToggle($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, LyonsComponent_ng_template_16_Template, 6, 0, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ngx-datatable-column", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, LyonsComponent_ng_template_18_Template, 1, 4, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, LyonsComponent_ngx_datatable_column_19_Template, 3, 0, "ngx-datatable-column", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, LyonsComponent_ngx_datatable_column_20_Template, 3, 0, "ngx-datatable-column", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, LyonsComponent_ngx_datatable_column_21_Template, 3, 0, "ngx-datatable-column", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, LyonsComponent_ngx_datatable_column_22_Template, 3, 0, "ngx-datatable-column", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, LyonsComponent_ngx_datatable_column_23_Template, 3, 0, "ngx-datatable-column", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, LyonsComponent_ngx_datatable_column_24_Template, 3, 0, "ngx-datatable-column", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, LyonsComponent_ngx_datatable_column_25_Template, 3, 0, "ngx-datatable-column", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, LyonsComponent_ngx_datatable_column_26_Template, 3, 0, "ngx-datatable-column", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ngx-datatable-column", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, LyonsComponent_ng_template_28_Template, 1, 0, "ng-template", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, LyonsComponent_ng_template_29_Template, 3, 4, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ngx-datatable-column", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, LyonsComponent_ng_template_31_Template, 1, 0, "ng-template", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, LyonsComponent_ng_template_32_Template, 3, 4, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ngx-datatable-column", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, LyonsComponent_ng_template_34_Template, 1, 0, "ng-template", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, LyonsComponent_ng_template_35_Template, 3, 4, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ngx-datatable-column", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, LyonsComponent_ng_template_37_Template, 1, 0, "ng-template", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, LyonsComponent_ng_template_38_Template, 4, 6, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.chartData);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.summaryMetricsData);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnMode", "force")("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("rows", ctx.rows)("loadingIndicator", ctx.loadingIndicator);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowHeight", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 30)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);
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
    "./src/app/modules/admin-reporting/manual-split-update/manual-split-update.component.ts":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/admin-reporting/manual-split-update/manual-split-update.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: ManualSplitUpdateComponent */

    /***/
    function srcAppModulesAdminReportingManualSplitUpdateManualSplitUpdateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManualSplitUpdateComponent", function () {
        return ManualSplitUpdateComponent;
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


      var _tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../tag-management/tag-management.service */
      "./src/app/modules/tag-management/tag-management.service.ts");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

      function ManualSplitUpdateComponent_mat_option_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var reportProvider_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", reportProvider_r8.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", reportProvider_r8.viewValue, " ");
        }
      }

      function ManualSplitUpdateComponent_mat_option_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tagItem_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", tagItem_r9.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tagItem_r9.viewValue, " ");
        }
      }

      function ManualSplitUpdateComponent_mat_error_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid start date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ManualSplitUpdateComponent_mat_error_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid end date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ManualSplitUpdateComponent_mat_error_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Start Date Required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ManualSplitUpdateComponent_mat_error_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "End Date Required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ManualSplitUpdateComponent_mat_option_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dateRange_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", dateRange_r10.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dateRange_r10.viewValue, " ");
        }
      }

      var ManualSplitUpdateComponent = /*#__PURE__*/function () {
        function ManualSplitUpdateComponent(manualUpdateService, fb, companyService, authService, userService, notification, tagService, cdr) {
          _classCallCheck(this, ManualSplitUpdateComponent);

          this.manualUpdateService = manualUpdateService;
          this.fb = fb;
          this.companyService = companyService;
          this.authService = authService;
          this.userService = userService;
          this.notification = notification;
          this.tagService = tagService;
          this.cdr = cdr;
          this.reportProviderData = [];
          this.tagData = [];
          this.selectedTagData = [];
          this.reportUpdateTitle = 'Report Split Update';
          this.selectedTagName = '';
          this.currentUser = this.authService.currentUserValue;
          this.companySelected = this.getSelectedCompanyLocalStorage();
        }

        _createClass(ManualSplitUpdateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getReportingProviderList();
            this.getAllTags();
            this.manaulUpFG = this.fb.group({
              reportType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              tag: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
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
          } //Gets the Selected Company from Local Storage

        }, {
          key: "getSelectedCompanyLocalStorage",
          value: function getSelectedCompanyLocalStorage() {
            return this.userService.getSelectedCompanyFromLocalStorage();
          }
        }, {
          key: "getAllTags",
          value: function getAllTags() {
            var _this2 = this;

            this.tagService.getAllTags().subscribe(function (response) {
              var resData = [];

              if (_this2.companySelected) {
                resData = response.filter(function (res) {
                  return res.company[0]['_id'] == _this2.companySelected;
                });
              }

              resData.map(function (res) {
                _this2.tagData.push({
                  value: res._id,
                  viewValue: res.name,
                  advertiser: res.advertiser
                });
              });
              _this2.selectedTagData = _this2.tagData;

              _this2.cdr.detectChanges();
            });
          }
        }, {
          key: "handleTag",
          value: function handleTag(event) {
            this.selectedTagName = this.tagData.filter(function (tag) {
              return tag.value == event.value;
            })[0].viewValue;
          } //get report Provider List

        }, {
          key: "getReportingProviderList",
          value: function getReportingProviderList() {
            var _this3 = this;

            if (this.companySelected) {
              this.companyService.getOneCompany(this.companySelected.split('/')[1]).subscribe(function (res) {
                res.reportingProviders.map(function (report) {
                  _this3.reportProviderData.push({
                    value: report.reportingProvider,
                    viewValue: report.reportingProvider
                  });
                });
              });
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
          } //Monitors mat selector, if changed (and not custom). updates the actual date picker

        }, {
          key: "onPreSetRangeSelectChange",
          value: function onPreSetRangeSelectChange(selection) {
            if (selection.value !== 'custom') {
              this.preSelectValue = selection.value;
              this.preSelectDates = this.getPreSetDateRange(this.preSelectValue); //Updates the date picker range manually

              this.updateDatePickerRange(this.preSelectDates.startDate, this.preSelectDates.endDate);
            }
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
        }, {
          key: "handleReport",
          value: function handleReport(event) {
            if (event.value.length > 0) {
              var typeName = event.value.toLowerCase().replace(/\b[a-z]/g, function (letter) {
                return letter.toUpperCase();
              });
              this.reportUpdateTitle = "".concat(typeName, " Split Update");
              this.selectedTagData = this.tagData.filter(function (tag) {
                return tag.advertiser == event.value;
              });
              this.cdr.detectChanges();
            }
          }
        }, {
          key: "onReportSubmit",
          value: function onReportSubmit() {
            var _this4 = this;

            if (this.manaulUpFG.valid) {
              this.manaulUpFG.addControl('company', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required));
              this.manaulUpFG.patchValue({
                company: this.companySelected
              }); //var reportTypeValue = this.manaulUpFG.value['reportType'];

              this.manualUpdateService.updateManualSplit(this.manaulUpFG.value).subscribe(function (response) {
                var checkExist = _this4.isObjectEmpty(response);

                if (!checkExist) {
                  _this4.notification.showSuccess("".concat(_this4.selectedTagName, " data splits  successfully updated!"), "");
                } else {
                  _this4.notification.showWarning("".concat(_this4.selectedTagName, " data not existed!"), "");
                }
              });
            }
          }
        }, {
          key: "isObjectEmpty",
          value: function isObjectEmpty(obj) {
            return Object.keys(obj).length === 0;
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
          }
        }]);

        return ManualSplitUpdateComponent;
      }();

      ManualSplitUpdateComponent.ɵfac = function ManualSplitUpdateComponent_Factory(t) {
        return new (t || ManualSplitUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_admin_stats_update_service__WEBPACK_IMPORTED_MODULE_3__["ManualUpdateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_company_management_company_management_service__WEBPACK_IMPORTED_MODULE_4__["CompanyManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_8__["TagManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      ManualSplitUpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ManualSplitUpdateComponent,
        selectors: [["app-manual-split-update"]],
        decls: 41,
        vars: 13,
        consts: [["id", "manaulUpForm", 1, "example-container", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xl-6"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], ["matNativeControl", "", "placeholder", "Select Provider", "formControlName", "reportType", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", "placeholder", "Select Report", "formControlName", "tag", 3, "selectionChange"], [3, "rangePicker", "formGroup", "dateChange"], ["matStartDate", "", "formControlName", "startDate", "placeholder", "Start date", "required", ""], ["matEndDate", "", "formControlName", "endDate", "placeholder", "End date", "required", "", 3, "dateChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [4, "ngIf"], ["formControlName", "preSelectValue", 3, "ngModel", "ngModelChange", "selectionChange"], ["mat-raised-button", "", "color", "primary", "type", "submit"], [3, "value"]],
        template: function ManualSplitUpdateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ManualSplitUpdateComponent_Template_form_ngSubmit_0_listener() {
              return ctx.onReportSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Provider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ManualSplitUpdateComponent_Template_mat_select_selectionChange_12_listener($event) {
              return ctx.handleReport($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ManualSplitUpdateComponent_mat_option_13_Template, 2, 2, "mat-option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Tag");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-select", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ManualSplitUpdateComponent_Template_mat_select_selectionChange_17_listener($event) {
              return ctx.handleTag($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ManualSplitUpdateComponent_mat_option_18_Template, 2, 2, "mat-option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Enter a custom date range");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-date-range-input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function ManualSplitUpdateComponent_Template_mat_date_range_input_dateChange_22_listener() {
              return ctx.changeDatePicker();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function ManualSplitUpdateComponent_Template_input_dateChange_24_listener() {
              return ctx.changeDatePicker();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "mat-datepicker-toggle", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-date-range-picker", null, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ManualSplitUpdateComponent_mat_error_28_Template, 2, 0, "mat-error", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ManualSplitUpdateComponent_mat_error_29_Template, 2, 0, "mat-error", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ManualSplitUpdateComponent_mat_error_30_Template, 2, 0, "mat-error", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ManualSplitUpdateComponent_mat_error_31_Template, 2, 0, "mat-error", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Preset Date Range");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-select", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManualSplitUpdateComponent_Template_mat_select_ngModelChange_35_listener($event) {
              return ctx.preSelectValue = $event;
            })("selectionChange", function ManualSplitUpdateComponent_Template_mat_select_selectionChange_35_listener($event) {
              return ctx.onPreSetRangeSelectChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ManualSplitUpdateComponent_mat_option_36_Template, 2, 2, "mat-option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Update Splits");

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
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.manaulUpFG);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reportUpdateTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reportProviderData);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectedTagData);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rangePicker", _r2)("formGroup", ctx.range);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r2);

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
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDateRangeInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatStartDate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatEndDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDateRangePicker"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL21hbnVhbC1zcGxpdC11cGRhdGUvbWFudWFsLXNwbGl0LXVwZGF0ZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManualSplitUpdateComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-manual-split-update',
            templateUrl: './manual-split-update.component.html',
            styleUrls: ['./manual-split-update.component.scss']
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
          }, {
            type: _tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_8__["TagManagementService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, null);
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid start date ");

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
          this.reportUpdateTitle = 'Report Stat Update';
          this.reportTypeData = [];
          this.message = null;
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
                  if (response.stats == "ok") {
                    _this6.notification.showSuccess("".concat(reportTypeValue, " data stats successfully updated!"), "");
                  } else if (response.stats == "warn") {
                    _this6.notification.showWarning("".concat(reportTypeValue, " data not existed!"), "");
                  }
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
        }, {
          key: "handleReport",
          value: function handleReport(event) {
            if (event.value.length > 0) {
              var typeName = event.value.toLowerCase().replace(/\b[a-z]/g, function (letter) {
                return letter.toUpperCase();
              });
              this.reportUpdateTitle = "".concat(typeName, " Stat Update");
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
        vars: 12,
        consts: [["id", "manaulUpForm", 1, "example-container", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xl-6"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], ["matNativeControl", "", "placeholder", "Select Report", "formControlName", "reportType", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "rangePicker", "formGroup", "dateChange"], ["matStartDate", "", "formControlName", "startDate", "placeholder", "Start date", "required", ""], ["matEndDate", "", "formControlName", "endDate", "placeholder", "End date", "required", "", 3, "dateChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [4, "ngIf"], ["formControlName", "preSelectValue", 3, "ngModel", "ngModelChange", "selectionChange"], ["mat-raised-button", "", "color", "primary", "type", "submit"], [3, "value"]],
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Report Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ManualUpdateComponent_Template_mat_select_selectionChange_12_listener($event) {
              return ctx.handleReport($event);
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Update Stats");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reportUpdateTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

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
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-reporting-revenue-chart", 27);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("chartData", ctx_r0.chartData);
        }
      }

      function PerionComponent_app_summary_metrics_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-summary-metrics", 28);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("summaryMetricsData", ctx_r1.summaryMetrics);
        }
      }

      function PerionComponent_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);

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

      function PerionComponent_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerionComponent_ng_template_18_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);

            var row_r23 = ctx.row;

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r25.toggleExpandRow(row_r23);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var expanded_r24 = ctx.expanded;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("datatable-icon-right", !expanded_r24)("datatable-icon-down", expanded_r24);
        }
      }

      function PerionComponent_ngx_datatable_column_19_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Date ");
        }
      }

      function PerionComponent_ngx_datatable_column_19_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r30 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r30));
        }
      }

      function PerionComponent_ngx_datatable_column_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PerionComponent_ngx_datatable_column_19_ng_template_1_Template, 1, 0, "ng-template", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PerionComponent_ngx_datatable_column_19_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 100);
        }
      }

      function PerionComponent_ngx_datatable_column_20_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Subid ");
        }
      }

      function PerionComponent_ngx_datatable_column_20_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r34 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r34);
        }
      }

      function PerionComponent_ngx_datatable_column_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PerionComponent_ngx_datatable_column_20_ng_template_1_Template, 1, 0, "ng-template", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PerionComponent_ngx_datatable_column_20_ng_template_2_Template, 2, 1, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function PerionComponent_ngx_datatable_column_21_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Publisher ");
        }
      }

      function PerionComponent_ngx_datatable_column_21_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r38 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r38);
        }
      }

      function PerionComponent_ngx_datatable_column_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PerionComponent_ngx_datatable_column_21_ng_template_1_Template, 1, 0, "ng-template", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PerionComponent_ngx_datatable_column_21_ng_template_2_Template, 2, 1, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 100);
        }
      }

      function PerionComponent_ngx_datatable_column_22_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Searches ");
        }
      }

      function PerionComponent_ngx_datatable_column_22_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r42 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r42));
        }
      }

      function PerionComponent_ngx_datatable_column_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PerionComponent_ngx_datatable_column_22_ng_template_1_Template, 1, 0, "ng-template", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PerionComponent_ngx_datatable_column_22_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function PerionComponent_ngx_datatable_column_23_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Clicks ");
        }
      }

      function PerionComponent_ngx_datatable_column_23_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r46 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r46));
        }
      }

      function PerionComponent_ngx_datatable_column_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PerionComponent_ngx_datatable_column_23_ng_template_1_Template, 1, 0, "ng-template", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PerionComponent_ngx_datatable_column_23_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function PerionComponent_ngx_datatable_column_24_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " CPC ");
        }
      }

      function PerionComponent_ngx_datatable_column_24_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r50 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r50, "USD") || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, 0, "USD"));
        }
      }

      function PerionComponent_ngx_datatable_column_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PerionComponent_ngx_datatable_column_24_ng_template_1_Template, 1, 0, "ng-template", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PerionComponent_ngx_datatable_column_24_ng_template_2_Template, 4, 7, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function PerionComponent_ngx_datatable_column_25_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " CTR ");
        }
      }

      function PerionComponent_ngx_datatable_column_25_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "percent");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "percent");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r54 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r54, "2.2-2") || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, 0, "2.2-2"));
        }
      }

      function PerionComponent_ngx_datatable_column_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PerionComponent_ngx_datatable_column_25_ng_template_1_Template, 1, 0, "ng-template", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PerionComponent_ngx_datatable_column_25_ng_template_2_Template, 4, 7, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function PerionComponent_ng_template_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Publisher Net ");
        }
      }

      function PerionComponent_ng_template_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r56 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r56, "USD"));
        }
      }

      function PerionComponent_ng_template_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Profit ");
        }
      }

      function PerionComponent_ng_template_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r58 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r58, "USD"));
        }
      }

      function PerionComponent_ng_template_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Revenue ");
        }
      }

      function PerionComponent_ng_template_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r60 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r60, "USD"));
        }
      }

      function PerionComponent_ng_template_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Split ");
        }
      }

      function PerionComponent_ng_template_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r62 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r62) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 3, 0, "1.0-0"));
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
          this.summary = {
            revenue: 0,
            profit: 0
          };
          this.groupPublishFlag = false;
          this.groupDateShowFlag = false;
          this.groupSubidShowFlag = false;
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
              return regeneratorRuntime.wrap(function _callee31$(_context31) {
                while (1) {
                  switch (_context31.prev = _context31.next) {
                    case 0:
                      _context31.next = 2;
                      return this.getCompanyTags(this.selectedCompany);

                    case 2:
                      this.tagList = _context31.sent;
                      this.rows = [];
                      _context31.next = 6;
                      return this.getAllPerionStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 6:
                      this.rows = _context31.sent;
                      _context31.next = 9;
                      return this.getChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 9:
                      this.chartData = _context31.sent;
                      _context31.next = 12;
                      return this.getSummaryMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 12:
                      this.summaryMetrics = _context31.sent;
                      this.refreshTable();

                    case 14:
                    case "end":
                      return _context31.stop();
                  }
                }
              }, _callee31, this);
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
              return regeneratorRuntime.wrap(function _callee32$(_context32) {
                while (1) {
                  switch (_context32.prev = _context32.next) {
                    case 0:
                      console.log('Testing Route');
                      this.perionService.testingRoute().subscribe(function (response) {
                        console.log(response);
                      }), function (err) {
                        console.log(err);
                      };

                    case 2:
                    case "end":
                      return _context32.stop();
                  }
                }
              }, _callee32, this);
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee33() {
              return regeneratorRuntime.wrap(function _callee33$(_context33) {
                while (1) {
                  switch (_context33.prev = _context33.next) {
                    case 0:
                      // console.log('Update report filtering....');
                      this.range = range;
                      _context33.next = 3;
                      return this.getAllPerionStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 3:
                      this.rows = _context33.sent;
                      _context33.next = 6;
                      return this.getChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 6:
                      this.chartData = _context33.sent;
                      _context33.next = 9;
                      return this.getSummaryMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 9:
                      this.summaryMetrics = _context33.sent;
                      this.groupPublishFlag = false;
                      this.refreshTable();

                    case 12:
                    case "end":
                      return _context33.stop();
                  }
                }
              }, _callee33, this);
            }));
          }
        }, {
          key: "getAllPerionStats",
          value: function getAllPerionStats(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee34() {
              var response, _iterator27, _step27, tagL, _iterator28, _step28, tagSub;

              return regeneratorRuntime.wrap(function _callee34$(_context34) {
                while (1) {
                  switch (_context34.prev = _context34.next) {
                    case 0:
                      _context34.prev = 0;
                      _context34.next = 3;
                      return this.perionService.getAllPerionStats(company, startDate, endDate).toPromise();

                    case 3:
                      response = _context34.sent;
                      // console.log('response:', response);
                      this.loadingIndicator = false;
                      this.allStat = response.stats;
                      this.allStat.map(function (resStat) {
                        resStat.publisher = "No Publisher";
                        resStat.tagname = "No Tag";
                      });
                      _iterator27 = _createForOfIteratorHelper(this.tagList);

                      try {
                        for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                          tagL = _step27.value;

                          if (tagL.tag.advertiser == "perion") {
                            _iterator28 = _createForOfIteratorHelper(tagL.tag.subids);

                            try {
                              for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                                tagSub = _step28.value;

                                if (tagSub.filterTag == "Contains") {
                                  this.allStat.map(function (stat) {
                                    if (stat.subid.includes(tagSub.subid)) {
                                      stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat.tagname = tagL.tag.name;
                                    }
                                  });
                                } else if (tagSub.filterTag == "StartsWith") {
                                  this.allStat.map(function (stat_1) {
                                    if (stat_1.subid.startsWith(tagSub.subid)) {
                                      stat_1.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_1.tagname = tagL.tag.name;
                                    }
                                  });
                                } else if (tagSub.filterTag == "EndsWith") {
                                  this.allStat.map(function (stat_2) {
                                    if (stat_2.subid.endsWith(tagSub.subid)) {
                                      stat_2.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_2.tagname = tagL.tag.name;
                                    }
                                  });
                                } else if (tagSub.filterTag == "ExactValue") {
                                  this.allStat.map(function (stat_3) {
                                    if (stat_3.subid == tagSub.subid) {
                                      stat_3.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_3.tagname = tagL.tag.name;
                                    }
                                  });
                                }
                              }
                            } catch (err) {
                              _iterator28.e(err);
                            } finally {
                              _iterator28.f();
                            }
                          }
                        }
                      } catch (err) {
                        _iterator27.e(err);
                      } finally {
                        _iterator27.f();
                      }

                      return _context34.abrupt("return", this.allStat);

                    case 12:
                      _context34.prev = 12;
                      _context34.t0 = _context34["catch"](0);
                      return _context34.abrupt("return", _context34.t0);

                    case 15:
                    case "end":
                      return _context34.stop();
                  }
                }
              }, _callee34, this, [[0, 12]]);
            }));
          }
        }, {
          key: "groupDate",
          value: function groupDate() {
            var helperSummary = {};
            var groupData = this.allStat.reduce(function (r, o) {
              var key = o.date;

              if (!helperSummary[key]) {
                helperSummary[key] = Object.assign({}, o); // create a copy of o

                helperSummary[key].counter = 1;
                r.push(helperSummary[key]);
              } else {
                helperSummary[key].clicks += parseFloat(o.clicks);
                helperSummary[key].cpc += parseFloat(o.cpc ? o.cpc : 0);
                helperSummary[key].ctr += parseFloat(o.ctr ? o.ctr : 0);
                helperSummary[key].impressions += parseFloat(o.impressions ? o.impressions : 0);
                helperSummary[key].totalsearches += parseFloat(o.totalsearches ? o.totalsearches : 0);
                helperSummary[key].profit += parseFloat(o.profit);
                helperSummary[key].publisherNet += parseFloat(o.publisherNet);
                helperSummary[key].revenue += parseFloat(o.revenue);
                helperSummary[key].split += parseFloat(o.split);
                helperSummary[key].counter++;
              }

              return r;
            }, []);

            var _iterator29 = _createForOfIteratorHelper(groupData),
                _step29;

            try {
              for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
                var group = _step29.value;
                group.split = group.split / group.counter;
                group.followon = group.followon / group.counter;
                group.ctr = group.ctr / group.counter;
              }
            } catch (err) {
              _iterator29.e(err);
            } finally {
              _iterator29.f();
            }

            console.log("=======", groupData);
            this.rows = groupData;
            this.groupDateShowFlag = true;
            this.groupPublishFlag = false;
            this.groupSubidShowFlag = false;
            this.cdr.markForCheck();
          }
        }, {
          key: "groupSubid",
          value: function groupSubid() {
            var helperSummary = {};
            var groupData = this.allStat.reduce(function (r, o) {
              var key = o.subid;

              if (!helperSummary[key]) {
                helperSummary[key] = Object.assign({}, o); // create a copy of o

                helperSummary[key].counter = 1;
                r.push(helperSummary[key]);
              } else {
                helperSummary[key].clicks += parseFloat(o.clicks);
                helperSummary[key].cpc += parseFloat(o.cpc ? o.cpc : 0);
                helperSummary[key].ctr += parseFloat(o.ctr ? o.ctr : 0);
                helperSummary[key].impressions += parseFloat(o.impressions ? o.impressions : 0);
                helperSummary[key].totalsearches += parseFloat(o.totalsearches ? o.totalsearches : 0);
                helperSummary[key].profit += parseFloat(o.profit);
                helperSummary[key].publisherNet += parseFloat(o.publisherNet);
                helperSummary[key].revenue += parseFloat(o.revenue);
                helperSummary[key].split += parseFloat(o.split);
                helperSummary[key].counter++;
              }

              return r;
            }, []);

            var _iterator30 = _createForOfIteratorHelper(groupData),
                _step30;

            try {
              for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
                var group = _step30.value;
                group.split = group.split / group.counter;
                group.followon = group.followon / group.counter;
                group.ctr = group.ctr / group.counter;
              }
            } catch (err) {
              _iterator30.e(err);
            } finally {
              _iterator30.f();
            }

            this.rows = groupData;
            this.groupPublishFlag = false;
            this.groupDateShowFlag = false;
            this.groupSubidShowFlag = true;
            this.cdr.markForCheck();
          }
        }, {
          key: "groupProvider",
          value: function groupProvider() {
            var helperSummary = {};
            var groupData = this.allStat.reduce(function (r, o) {
              var key = o.publisher;

              if (!helperSummary[key]) {
                helperSummary[key] = Object.assign({}, o); // create a copy of o

                helperSummary[key].counter = 1;
                r.push(helperSummary[key]);
              } else {
                helperSummary[key].clicks += parseFloat(o.clicks);
                helperSummary[key].cpc += parseFloat(o.cpc ? o.cpc : 0);
                helperSummary[key].ctr += parseFloat(o.ctr ? o.ctr : 0);
                helperSummary[key].impressions += parseFloat(o.impressions ? o.impressions : 0);
                helperSummary[key].totalsearches += parseFloat(o.totalsearches ? o.totalsearches : 0);
                helperSummary[key].profit += parseFloat(o.profit);
                helperSummary[key].publisherNet += parseFloat(o.publisherNet);
                helperSummary[key].revenue += parseFloat(o.revenue);
                helperSummary[key].split += parseFloat(o.split);
                helperSummary[key].counter++;
              }

              return r;
            }, []);

            var _iterator31 = _createForOfIteratorHelper(groupData),
                _step31;

            try {
              for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
                var group = _step31.value;
                group.split = group.split / group.counter;
                group.followon = group.followon / group.counter;
                group.ctr = group.ctr / group.counter;
              }
            } catch (err) {
              _iterator31.e(err);
            } finally {
              _iterator31.f();
            }

            this.rows = groupData;
            this.groupPublishFlag = true;
            this.groupDateShowFlag = false;
            this.groupSubidShowFlag = false;
            this.cdr.markForCheck();
          }
        }, {
          key: "backGroup",
          value: function backGroup() {
            this.rows = this.allStat;
            this.groupPublishFlag = false;
            this.groupDateShowFlag = false;
            this.groupSubidShowFlag = false;
            this.cdr.markForCheck();
          }
        }, {
          key: "refreshTable",
          value: function refreshTable() {
            this.cdr.markForCheck();
          }
        }, {
          key: "getSummaryMetrics",
          value: function getSummaryMetrics(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee35() {
              var response, allSummary, currentPercentPace, lastPercentPace, selectedPercentPace;
              return regeneratorRuntime.wrap(function _callee35$(_context35) {
                while (1) {
                  switch (_context35.prev = _context35.next) {
                    case 0:
                      _context35.prev = 0;
                      _context35.next = 3;
                      return this.perionService.getSummaryMetrics(company, startDate, endDate).toPromise();

                    case 3:
                      response = _context35.sent;
                      allSummary = {};
                      currentPercentPace = 0;
                      lastPercentPace = 0;
                      selectedPercentPace = 0;

                      if (response.summary[0].lastMonthStat[0].profitPace != 0) {
                        currentPercentPace = (response.summary[0].summaryMetrics[0].profitPace - response.summary[0].lastMonthStat[0].profitPace) / response.summary[0].lastMonthStat[0].profitPace * 100;
                      }

                      if (response.summary[0].twoLastMonthStat[0].profitPace != 0) {
                        lastPercentPace = (response.summary[0].lastMonthStat[0].profitPace - response.summary[0].twoLastMonthStat[0].profitPace) / response.summary[0].twoLastMonthStat[0].profitPace * 100;
                      }

                      if (response.summary[0].prevSelectedStat[0].profitPace != 0) {
                        selectedPercentPace = (response.summary[0].selectedStat[0].profitPace - response.summary[0].prevSelectedStat[0].profitPace) / response.summary[0].prevSelectedStat[0].profitPace * 100;
                      }

                      response.summary[0].summaryMetrics[0].percentPace = currentPercentPace;
                      response.summary[0].lastMonthStat[0].percentPace = lastPercentPace;
                      response.summary[0].selectedStat[0].percentPace = selectedPercentPace;
                      response.summary[0].selectedStat[0].selectedStartDate = startDate;
                      response.summary[0].selectedStat[0].selectedEndDate = endDate;
                      allSummary['summary'] = response.summary;
                      return _context35.abrupt("return", allSummary);

                    case 20:
                      _context35.prev = 20;
                      _context35.t0 = _context35["catch"](0);
                      return _context35.abrupt("return", _context35.t0);

                    case 23:
                    case "end":
                      return _context35.stop();
                  }
                }
              }, _callee35, this, [[0, 20]]);
            }));
          }
        }, {
          key: "getChartMetrics",
          value: function getChartMetrics(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee36() {
              var response, helperChart, resultChart, revenuePerDayVal, datesOfRevenueVal, searchesPerDayVal, chartDataValue, _iterator32, _step32, resVal;

              return regeneratorRuntime.wrap(function _callee36$(_context36) {
                while (1) {
                  switch (_context36.prev = _context36.next) {
                    case 0:
                      _context36.prev = 0;
                      _context36.next = 3;
                      return this.perionService.getAllPerionStats(company, startDate, endDate).toPromise();

                    case 3:
                      response = _context36.sent;
                      // console.log('getAllPerionStats() response:');
                      this.allChartStat = response.stats;
                      this.allChartStat = this.allChartStat.slice().sort(function (a, b) {
                        return a.date - b.date;
                      });
                      helperChart = {};
                      resultChart = this.allChartStat.reduce(function (r, o) {
                        var key = o.date;

                        if (!helperChart[key]) {
                          helperChart[key] = Object.assign({}, o); // create a copy of o

                          r.push(helperChart[key]);
                        } else {
                          helperChart[key].totalsearches += parseInt(o.totalsearches);

                          if (o.revenue) {
                            helperChart[key].revenue += o.revenue;
                          }
                        }

                        return r;
                      }, []);
                      revenuePerDayVal = [];
                      datesOfRevenueVal = [];
                      searchesPerDayVal = [];
                      chartDataValue = {};
                      _iterator32 = _createForOfIteratorHelper(resultChart);

                      try {
                        for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
                          resVal = _step32.value;
                          revenuePerDayVal.push(resVal.revenue);
                          datesOfRevenueVal.push(resVal.date);
                          searchesPerDayVal.push(resVal.totalsearches);
                        }
                      } catch (err) {
                        _iterator32.e(err);
                      } finally {
                        _iterator32.f();
                      }

                      chartDataValue['revenuePerDay'] = revenuePerDayVal;
                      chartDataValue['datesOfRevenue'] = datesOfRevenueVal;
                      chartDataValue['searchesPerDay'] = searchesPerDayVal;
                      return _context36.abrupt("return", chartDataValue);

                    case 20:
                      _context36.prev = 20;
                      _context36.t0 = _context36["catch"](0);
                      return _context36.abrupt("return", _context36.t0);

                    case 23:
                    case "end":
                      return _context36.stop();
                  }
                }
              }, _callee36, this, [[0, 20]]);
            }));
          }
        }, {
          key: "combineSummaryMetrics",
          value: function combineSummaryMetrics(metrics) {
            var _this7 = this;

            metrics.summary.keys.forEach(function (element) {
              console.log(element.revenue);
              _this7.summary.revenue += element.revenue;
              _this7.summary.profit += element.revenue * ((100 - element.split) * 0.01);
            });
          } //get Tags with selected company

        }, {
          key: "getCompanyTags",
          value: function getCompanyTags(selectedCompany) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee37() {
              var companyId, response;
              return regeneratorRuntime.wrap(function _callee37$(_context37) {
                while (1) {
                  switch (_context37.prev = _context37.next) {
                    case 0:
                      companyId = selectedCompany.split("/")[1];
                      _context37.prev = 1;
                      _context37.next = 4;
                      return this.tagService.getCompanyTags(companyId).toPromise();

                    case 4:
                      response = _context37.sent;
                      return _context37.abrupt("return", response);

                    case 8:
                      _context37.prev = 8;
                      _context37.t0 = _context37["catch"](1);
                      return _context37.abrupt("return", _context37.t0);

                    case 11:
                    case "end":
                      return _context37.stop();
                  }
                }
              }, _callee37, this, [[1, 8]]);
            }));
          }
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
        decls: 38,
        vars: 23,
        consts: [[3, "onDatesPicked"], [3, "chartData", 4, "ngIf"], [3, "summaryMetricsData", 4, "ngIf"], [1, "row", "px-6"], [1, "btn", "btn-sm", "btn-primary", "mx-1", 3, "click"], [1, "btn", "btn-sm", "btn-success", "mx-1", 3, "click"], [1, "btn", "btn-sm", "btn-info", "mx-1", 3, "click"], [1, "btn", "btn-sm", "btn-dark", "mx-1", 3, "click"], [1, "material", "fullscreen", "expandable", 2, "top", "30px", "height", "500px", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "rows", "loadingIndicator"], ["expandableTable", ""], [3, "rowHeight", "toggle"], ["myDetailRow", ""], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["ngx-datatable-cell-template", ""], ["name", "date", 3, "minWidth", 4, "ngIf"], ["name", "subid", 4, "ngIf"], ["name", "publisher", 3, "minWidth", 4, "ngIf"], ["name", "totalsearches", 4, "ngIf"], ["name", "clicks", 4, "ngIf"], ["name", "cpc", 4, "ngIf"], ["name", "ctr", 4, "ngIf"], ["name", "publisherNet"], ["ngx-datatable-header-template", ""], ["name", "profit"], ["name", "revenue"], ["name", "split", 3, "minWidth"], [3, "chartData"], [3, "summaryMetricsData"], [2, "padding-left", "35px"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 3, "click"], ["name", "date", 3, "minWidth"], ["name", "subid"], ["name", "publisher", 3, "minWidth"], ["name", "totalsearches"], ["name", "clicks"], ["name", "cpc"], ["name", "ctr"]],
        template: function PerionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-reporting-filtering", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onDatesPicked", function PerionComponent_Template_app_reporting_filtering_onDatesPicked_0_listener($event) {
              return ctx.updateReportingFiltering($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PerionComponent_app_reporting_revenue_chart_1_Template, 1, 1, "app-reporting-revenue-chart", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PerionComponent_app_summary_metrics_2_Template, 1, 1, "app-summary-metrics", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerionComponent_Template_button_click_4_listener() {
              return ctx.groupDate();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Group by Date ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerionComponent_Template_button_click_6_listener() {
              return ctx.groupProvider();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Group by Publisher ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerionComponent_Template_button_click_8_listener() {
              return ctx.groupSubid();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Group by Subid ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerionComponent_Template_button_click_10_listener() {
              return ctx.backGroup();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Back ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ngx-datatable", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ngx-datatable-row-detail", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("toggle", function PerionComponent_Template_ngx_datatable_row_detail_toggle_14_listener($event) {
              return ctx.onDetailToggle($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, PerionComponent_ng_template_16_Template, 6, 0, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ngx-datatable-column", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, PerionComponent_ng_template_18_Template, 1, 4, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, PerionComponent_ngx_datatable_column_19_Template, 3, 1, "ngx-datatable-column", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, PerionComponent_ngx_datatable_column_20_Template, 3, 0, "ngx-datatable-column", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, PerionComponent_ngx_datatable_column_21_Template, 3, 1, "ngx-datatable-column", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, PerionComponent_ngx_datatable_column_22_Template, 3, 0, "ngx-datatable-column", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, PerionComponent_ngx_datatable_column_23_Template, 3, 0, "ngx-datatable-column", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, PerionComponent_ngx_datatable_column_24_Template, 3, 0, "ngx-datatable-column", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, PerionComponent_ngx_datatable_column_25_Template, 3, 0, "ngx-datatable-column", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ngx-datatable-column", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, PerionComponent_ng_template_27_Template, 1, 0, "ng-template", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, PerionComponent_ng_template_28_Template, 3, 4, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ngx-datatable-column", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, PerionComponent_ng_template_30_Template, 1, 0, "ng-template", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, PerionComponent_ng_template_31_Template, 3, 4, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ngx-datatable-column", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, PerionComponent_ng_template_33_Template, 1, 0, "ng-template", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, PerionComponent_ng_template_34_Template, 3, 4, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ngx-datatable-column", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, PerionComponent_ng_template_36_Template, 1, 0, "ng-template", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, PerionComponent_ng_template_37_Template, 4, 6, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.chartData);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.summaryMetrics);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnMode", "force")("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("rows", ctx.rows)("loadingIndicator", ctx.loadingIndicator);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowHeight", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 30)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

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
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-reporting-revenue-chart", 25);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("chartData", ctx_r0.chartData);
        }
      }

      function RubiComponent_app_summary_metrics_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-summary-metrics", 26);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("summaryMetricsData", ctx_r1.summaryMetrics);
        }
      }

      function RubiComponent_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);

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

      function RubiComponent_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RubiComponent_ng_template_18_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);

            var row_r21 = ctx.row;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r23.toggleExpandRow(row_r21);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var expanded_r22 = ctx.expanded;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("datatable-icon-right", !expanded_r22)("datatable-icon-down", expanded_r22);
        }
      }

      function RubiComponent_ngx_datatable_column_19_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Date ");
        }
      }

      function RubiComponent_ngx_datatable_column_19_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r28 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r28));
        }
      }

      function RubiComponent_ngx_datatable_column_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RubiComponent_ngx_datatable_column_19_ng_template_1_Template, 1, 0, "ng-template", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RubiComponent_ngx_datatable_column_19_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 100);
        }
      }

      function RubiComponent_ngx_datatable_column_20_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Subid ");
        }
      }

      function RubiComponent_ngx_datatable_column_20_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r32 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r32);
        }
      }

      function RubiComponent_ngx_datatable_column_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RubiComponent_ngx_datatable_column_20_ng_template_1_Template, 1, 0, "ng-template", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RubiComponent_ngx_datatable_column_20_ng_template_2_Template, 2, 1, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function RubiComponent_ngx_datatable_column_21_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Publisher ");
        }
      }

      function RubiComponent_ngx_datatable_column_21_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r36 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r36);
        }
      }

      function RubiComponent_ngx_datatable_column_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RubiComponent_ngx_datatable_column_21_ng_template_1_Template, 1, 0, "ng-template", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RubiComponent_ngx_datatable_column_21_ng_template_2_Template, 2, 1, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 100);
        }
      }

      function RubiComponent_ngx_datatable_column_22_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Searches ");
        }
      }

      function RubiComponent_ngx_datatable_column_22_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r40 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r40));
        }
      }

      function RubiComponent_ngx_datatable_column_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RubiComponent_ngx_datatable_column_22_ng_template_1_Template, 1, 0, "ng-template", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RubiComponent_ngx_datatable_column_22_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function RubiComponent_ngx_datatable_column_23_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Clicks ");
        }
      }

      function RubiComponent_ngx_datatable_column_23_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r44 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r44));
        }
      }

      function RubiComponent_ngx_datatable_column_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RubiComponent_ngx_datatable_column_23_ng_template_1_Template, 1, 0, "ng-template", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RubiComponent_ngx_datatable_column_23_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function RubiComponent_ng_template_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Split ");
        }
      }

      function RubiComponent_ng_template_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r46 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r46) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 3, 0, "1.0-0"));
        }
      }

      function RubiComponent_ng_template_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Publisher Net ");
        }
      }

      function RubiComponent_ng_template_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r48 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r48, "USD"));
        }
      }

      function RubiComponent_ng_template_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Profit ");
        }
      }

      function RubiComponent_ng_template_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r50 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r50, "USD"));
        }
      }

      function RubiComponent_ng_template_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Revenue ");
        }
      }

      function RubiComponent_ng_template_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r52 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r52, "USD"));
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
          this.groupPublishFlag = false;
          this.groupDateShowFlag = false;
          this.groupSubidShowFlag = false;
          this.expanded = {};
          this.tagList = [];
          this.selectedCompany = this.getSelectedCompanyStored();
        }

        _createClass(RubiComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee38() {
              return regeneratorRuntime.wrap(function _callee38$(_context38) {
                while (1) {
                  switch (_context38.prev = _context38.next) {
                    case 0:
                      _context38.next = 2;
                      return this.getCompanyTags(this.selectedCompany);

                    case 2:
                      this.tagList = _context38.sent;
                      this.rows = [];
                      _context38.next = 6;
                      return this.getAllRubiStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 6:
                      this.rows = _context38.sent;
                      _context38.next = 9;
                      return this.getChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 9:
                      this.chartData = _context38.sent;
                      _context38.next = 12;
                      return this.getSummaryMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 12:
                      this.summaryMetrics = _context38.sent;
                      this.refreshTable();

                    case 14:
                    case "end":
                      return _context38.stop();
                  }
                }
              }, _callee38, this);
            }));
          }
        }, {
          key: "updateReportingFiltering",
          value: function updateReportingFiltering(range) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee39() {
              return regeneratorRuntime.wrap(function _callee39$(_context39) {
                while (1) {
                  switch (_context39.prev = _context39.next) {
                    case 0:
                      this.range = range;
                      _context39.next = 3;
                      return this.getAllRubiStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 3:
                      this.rows = _context39.sent;
                      _context39.next = 6;
                      return this.getChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 6:
                      this.chartData = _context39.sent;
                      _context39.next = 9;
                      return this.getSummaryMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 9:
                      this.summaryMetrics = _context39.sent;
                      this.groupPublishFlag = false;
                      this.refreshTable();

                    case 12:
                    case "end":
                      return _context39.stop();
                  }
                }
              }, _callee39, this);
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee40() {
              var response, _iterator33, _step33, tagL, _iterator34, _step34, tagSub;

              return regeneratorRuntime.wrap(function _callee40$(_context40) {
                while (1) {
                  switch (_context40.prev = _context40.next) {
                    case 0:
                      _context40.next = 2;
                      return this.rubiService.getRubiStats(company, startDate, endDate).toPromise();

                    case 2:
                      response = _context40.sent;
                      console.log('getRubiStats() response:', response);
                      this.loadingIndicator = false;
                      this.allStats = response.stats;
                      this.allStats.map(function (resStat) {
                        resStat.publisher = "No Publisher";
                        resStat.tagname = "No Tag";
                      });
                      _iterator33 = _createForOfIteratorHelper(this.tagList);

                      try {
                        for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
                          tagL = _step33.value;

                          if (tagL.tag.advertiser == "rubi") {
                            _iterator34 = _createForOfIteratorHelper(tagL.tag.subids);

                            try {
                              for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
                                tagSub = _step34.value;

                                if (tagSub.filterTag == "Contains") {
                                  this.allStats.map(function (stat) {
                                    if (stat.subid.includes(tagSub.subid)) {
                                      stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat.tagname = tagL.tag.name;
                                    }
                                  });
                                } else if (tagSub.filterTag == "StartsWith") {
                                  this.allStats.map(function (stat_1) {
                                    if (stat_1.subid.startsWith(tagSub.subid)) {
                                      stat_1.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_1.tagname = tagL.tag.name;
                                    }
                                  });
                                } else if (tagSub.filterTag == "EndsWith") {
                                  this.allStats.map(function (stat_2) {
                                    if (stat_2.subid.endsWith(tagSub.subid)) {
                                      stat_2.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_2.tagname = tagL.tag.name;
                                    }
                                  });
                                } else if (tagSub.filterTag == "ExactValue") {
                                  this.allStats.map(function (stat_3) {
                                    if (stat_3.subid == tagSub.subid) {
                                      stat_3.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_3.tagname = tagL.tag.name;
                                    }
                                  });
                                }
                              }
                            } catch (err) {
                              _iterator34.e(err);
                            } finally {
                              _iterator34.f();
                            }
                          }
                        }
                      } catch (err) {
                        _iterator33.e(err);
                      } finally {
                        _iterator33.f();
                      }

                      return _context40.abrupt("return", this.allStats);

                    case 10:
                    case "end":
                      return _context40.stop();
                  }
                }
              }, _callee40, this);
            }));
          }
        }, {
          key: "groupDate",
          value: function groupDate() {
            var helperSummary = {};
            var groupData = this.allStats.reduce(function (r, o) {
              var key = o.date;

              if (!helperSummary[key]) {
                helperSummary[key] = Object.assign({}, o); // create a copy of o

                helperSummary[key].counter = 1;
                r.push(helperSummary[key]);
              } else {
                helperSummary[key].clicks += parseFloat(o.clicks);
                helperSummary[key].searches += parseFloat(o.searches ? o.searches : 0);
                helperSummary[key].monetized_searches += parseFloat(o.monetized_searches ? o.monetized_searches : 0);
                helperSummary[key].revenue += parseFloat(o.revenue);
                helperSummary[key].split += parseFloat(o.split);
                helperSummary[key].profit += parseFloat(o.profit);
                helperSummary[key].publisherNet += parseFloat(o.publisherNet);
                helperSummary[key].counter++;
              }

              return r;
            }, []);

            var _iterator35 = _createForOfIteratorHelper(groupData),
                _step35;

            try {
              for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
                var group = _step35.value;
                group.split = group.split / group.counter;
              }
            } catch (err) {
              _iterator35.e(err);
            } finally {
              _iterator35.f();
            }

            this.rows = groupData;
            this.groupPublishFlag = false;
            this.groupDateShowFlag = true;
            this.groupSubidShowFlag = false;
            this.cdr.markForCheck();
          }
        }, {
          key: "groupSubid",
          value: function groupSubid() {
            var helperSummary = {};
            var groupData = this.allStats.reduce(function (r, o) {
              var key = o.subid;

              if (!helperSummary[key]) {
                helperSummary[key] = Object.assign({}, o); // create a copy of o

                helperSummary[key].counter = 1;
                r.push(helperSummary[key]);
              } else {
                helperSummary[key].clicks += parseFloat(o.clicks);
                helperSummary[key].searches += parseFloat(o.searches ? o.searches : 0);
                helperSummary[key].monetized_searches += parseFloat(o.monetized_searches ? o.monetized_searches : 0);
                helperSummary[key].revenue += parseFloat(o.revenue);
                helperSummary[key].split += parseFloat(o.split);
                helperSummary[key].profit += parseFloat(o.profit);
                helperSummary[key].publisherNet += parseFloat(o.publisherNet);
                helperSummary[key].counter++;
              }

              return r;
            }, []);

            var _iterator36 = _createForOfIteratorHelper(groupData),
                _step36;

            try {
              for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
                var group = _step36.value;
                group.split = group.split / group.counter;
              }
            } catch (err) {
              _iterator36.e(err);
            } finally {
              _iterator36.f();
            }

            this.rows = groupData;
            this.groupPublishFlag = false;
            this.groupDateShowFlag = false;
            this.groupSubidShowFlag = true;
            this.cdr.markForCheck();
          }
        }, {
          key: "groupProvider",
          value: function groupProvider() {
            var helperSummary = {};
            var groupData = this.allStats.reduce(function (r, o) {
              var key = o.publisher;

              if (!helperSummary[key]) {
                helperSummary[key] = Object.assign({}, o); // create a copy of o

                helperSummary[key].counter = 1;
                r.push(helperSummary[key]);
              } else {
                helperSummary[key].clicks += parseFloat(o.clicks);
                helperSummary[key].searches += parseFloat(o.searches ? o.searches : 0);
                helperSummary[key].monetized_searches += parseFloat(o.monetized_searches ? o.monetized_searches : 0);
                helperSummary[key].revenue += parseFloat(o.revenue);
                helperSummary[key].split += parseFloat(o.split);
                helperSummary[key].profit += parseFloat(o.profit);
                helperSummary[key].publisherNet += parseFloat(o.publisherNet);
                helperSummary[key].counter++;
              }

              return r;
            }, []);

            var _iterator37 = _createForOfIteratorHelper(groupData),
                _step37;

            try {
              for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
                var group = _step37.value;
                group.split = group.split / group.counter;
              }
            } catch (err) {
              _iterator37.e(err);
            } finally {
              _iterator37.f();
            }

            this.rows = groupData;
            this.groupPublishFlag = true;
            this.groupDateShowFlag = false;
            this.groupSubidShowFlag = false;
            this.cdr.markForCheck();
          }
        }, {
          key: "backGroup",
          value: function backGroup() {
            this.rows = this.allStats;
            this.groupPublishFlag = false;
            this.groupDateShowFlag = false;
            this.groupSubidShowFlag = false;
            this.cdr.markForCheck();
          }
        }, {
          key: "getChartMetrics",
          value: function getChartMetrics(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee41() {
              var response;
              return regeneratorRuntime.wrap(function _callee41$(_context41) {
                while (1) {
                  switch (_context41.prev = _context41.next) {
                    case 0:
                      _context41.prev = 0;
                      _context41.next = 3;
                      return this.rubiService.getChartMetrics(company, startDate, endDate).toPromise();

                    case 3:
                      response = _context41.sent;
                      return _context41.abrupt("return", response);

                    case 7:
                      _context41.prev = 7;
                      _context41.t0 = _context41["catch"](0);
                      return _context41.abrupt("return", _context41.t0);

                    case 10:
                    case "end":
                      return _context41.stop();
                  }
                }
              }, _callee41, this, [[0, 7]]);
            }));
          }
        }, {
          key: "getSummaryMetrics",
          value: function getSummaryMetrics(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee42() {
              var response, allSummary, currentPercentPace, lastPercentPace, selectedPercentPace;
              return regeneratorRuntime.wrap(function _callee42$(_context42) {
                while (1) {
                  switch (_context42.prev = _context42.next) {
                    case 0:
                      _context42.next = 2;
                      return this.rubiService.getSummaryMetrics(company, startDate, endDate).toPromise();

                    case 2:
                      response = _context42.sent;
                      allSummary = {};
                      currentPercentPace = 0;
                      lastPercentPace = 0;
                      selectedPercentPace = 0;

                      if (response.summary[0].lastMonthStat[0].profitPace != 0) {
                        currentPercentPace = (response.summary[0].summaryMetrics[0].profitPace - response.summary[0].lastMonthStat[0].profitPace) / response.summary[0].lastMonthStat[0].profitPace * 100;
                      }

                      if (response.summary[0].twoLastMonthStat[0].profitPace != 0) {
                        lastPercentPace = (response.summary[0].lastMonthStat[0].profitPace - response.summary[0].twoLastMonthStat[0].profitPace) / response.summary[0].twoLastMonthStat[0].profitPace * 100;
                      }

                      if (response.summary[0].prevSelectedStat[0].profitPace != 0) {
                        selectedPercentPace = (response.summary[0].selectedStat[0].profitPace - response.summary[0].prevSelectedStat[0].profitPace) / response.summary[0].prevSelectedStat[0].profitPace * 100;
                      }

                      response.summary[0].summaryMetrics[0].percentPace = currentPercentPace;
                      response.summary[0].lastMonthStat[0].percentPace = lastPercentPace;
                      response.summary[0].selectedStat[0].percentPace = selectedPercentPace;
                      response.summary[0].selectedStat[0].selectedStartDate = startDate;
                      response.summary[0].selectedStat[0].selectedEndDate = endDate;
                      allSummary['summary'] = response.summary;
                      return _context42.abrupt("return", allSummary);

                    case 17:
                    case "end":
                      return _context42.stop();
                  }
                }
              }, _callee42, this);
            }));
          } //get Tags with selected company

        }, {
          key: "getCompanyTags",
          value: function getCompanyTags(selectedCompany) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee43() {
              var companyId, response;
              return regeneratorRuntime.wrap(function _callee43$(_context43) {
                while (1) {
                  switch (_context43.prev = _context43.next) {
                    case 0:
                      companyId = selectedCompany.split("/")[1];
                      _context43.prev = 1;
                      _context43.next = 4;
                      return this.tagService.getCompanyTags(companyId).toPromise();

                    case 4:
                      response = _context43.sent;
                      return _context43.abrupt("return", response);

                    case 8:
                      _context43.prev = 8;
                      _context43.t0 = _context43["catch"](1);
                      return _context43.abrupt("return", _context43.t0);

                    case 11:
                    case "end":
                      return _context43.stop();
                  }
                }
              }, _callee43, this, [[1, 8]]);
            }));
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
        decls: 36,
        vars: 21,
        consts: [[3, "onDatesPicked"], [3, "chartData", 4, "ngIf"], [3, "summaryMetricsData", 4, "ngIf"], [1, "row", "px-6"], [1, "btn", "btn-sm", "btn-primary", "mx-1", 3, "click"], [1, "btn", "btn-sm", "btn-success", "mx-1", 3, "click"], [1, "btn", "btn-sm", "btn-info", "mx-1", 3, "click"], [1, "btn", "btn-sm", "btn-dark", "mx-1", 3, "click"], [1, "material", "fullscreen", "expandable", 2, "top", "30px", "height", "500px", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "rows", "loadingIndicator"], ["expandableTable", ""], [3, "rowHeight", "toggle"], ["myDetailRow", ""], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["ngx-datatable-cell-template", ""], ["name", "date", 3, "minWidth", 4, "ngIf"], ["name", "subid", 4, "ngIf"], ["name", "publisher", 3, "minWidth", 4, "ngIf"], ["name", "searches", 4, "ngIf"], ["name", "clicks", 4, "ngIf"], ["name", "split", 3, "minWidth"], ["ngx-datatable-header-template", ""], ["name", "publisherNet"], ["name", "profit"], ["name", "revenue"], [3, "chartData"], [3, "summaryMetricsData"], [2, "padding-left", "35px"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 3, "click"], ["name", "date", 3, "minWidth"], ["name", "subid"], ["name", "publisher", 3, "minWidth"], ["name", "searches"], ["name", "clicks"]],
        template: function RubiComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-reporting-filtering", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onDatesPicked", function RubiComponent_Template_app_reporting_filtering_onDatesPicked_0_listener($event) {
              return ctx.updateReportingFiltering($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RubiComponent_app_reporting_revenue_chart_1_Template, 1, 1, "app-reporting-revenue-chart", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RubiComponent_app_summary_metrics_2_Template, 1, 1, "app-summary-metrics", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RubiComponent_Template_button_click_4_listener() {
              return ctx.groupDate();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Group by Date ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RubiComponent_Template_button_click_6_listener() {
              return ctx.groupProvider();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Group by Publisher ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RubiComponent_Template_button_click_8_listener() {
              return ctx.groupSubid();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Group by Subid ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RubiComponent_Template_button_click_10_listener() {
              return ctx.backGroup();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Back ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ngx-datatable", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ngx-datatable-row-detail", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("toggle", function RubiComponent_Template_ngx_datatable_row_detail_toggle_14_listener($event) {
              return ctx.onDetailToggle($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, RubiComponent_ng_template_16_Template, 6, 0, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ngx-datatable-column", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, RubiComponent_ng_template_18_Template, 1, 4, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, RubiComponent_ngx_datatable_column_19_Template, 3, 1, "ngx-datatable-column", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, RubiComponent_ngx_datatable_column_20_Template, 3, 0, "ngx-datatable-column", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, RubiComponent_ngx_datatable_column_21_Template, 3, 1, "ngx-datatable-column", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, RubiComponent_ngx_datatable_column_22_Template, 3, 0, "ngx-datatable-column", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, RubiComponent_ngx_datatable_column_23_Template, 3, 0, "ngx-datatable-column", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ngx-datatable-column", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, RubiComponent_ng_template_25_Template, 1, 0, "ng-template", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, RubiComponent_ng_template_26_Template, 4, 6, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ngx-datatable-column", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, RubiComponent_ng_template_28_Template, 1, 0, "ng-template", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, RubiComponent_ng_template_29_Template, 3, 4, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ngx-datatable-column", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, RubiComponent_ng_template_31_Template, 1, 0, "ng-template", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, RubiComponent_ng_template_32_Template, 3, 4, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ngx-datatable-column", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, RubiComponent_ng_template_34_Template, 1, 0, "ng-template", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, RubiComponent_ng_template_35_Template, 3, 4, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.chartData);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.summaryMetrics);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnMode", "force")("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("rows", ctx.rows)("loadingIndicator", ctx.loadingIndicator);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowHeight", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 30)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

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
    "./src/app/modules/admin-reporting/solex-bc/solex-bc.component.ts":
    /*!************************************************************************!*\
      !*** ./src/app/modules/admin-reporting/solex-bc/solex-bc.component.ts ***!
      \************************************************************************/

    /*! exports provided: SolexBcComponent */

    /***/
    function srcAppModulesAdminReportingSolexBcSolexBcComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SolexBcComponent", function () {
        return SolexBcComponent;
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


      var src_app_shared_service_admin_stats_solexbc_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/service/admin-stats/solexbc.service */
      "./src/app/shared/service/admin-stats/solexbc.service.ts");
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

      function SolexBcComponent_app_reporting_revenue_chart_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-reporting-revenue-chart", 25);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("chartData", ctx_r0.chartData);
        }
      }

      function SolexBcComponent_app_summary_metrics_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-summary-metrics", 26);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("summaryMetricsData", ctx_r1.summaryMetrics);
        }
      }

      function SolexBcComponent_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);

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

      function SolexBcComponent_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SolexBcComponent_ng_template_18_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);

            var row_r21 = ctx.row;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r23.toggleExpandRow(row_r21);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var expanded_r22 = ctx.expanded;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("datatable-icon-right", !expanded_r22)("datatable-icon-down", expanded_r22);
        }
      }

      function SolexBcComponent_ngx_datatable_column_19_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Date ");
        }
      }

      function SolexBcComponent_ngx_datatable_column_19_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r28 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r28));
        }
      }

      function SolexBcComponent_ngx_datatable_column_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SolexBcComponent_ngx_datatable_column_19_ng_template_1_Template, 1, 0, "ng-template", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SolexBcComponent_ngx_datatable_column_19_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 100);
        }
      }

      function SolexBcComponent_ngx_datatable_column_20_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Subid ");
        }
      }

      function SolexBcComponent_ngx_datatable_column_20_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r32 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r32);
        }
      }

      function SolexBcComponent_ngx_datatable_column_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SolexBcComponent_ngx_datatable_column_20_ng_template_1_Template, 1, 0, "ng-template", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SolexBcComponent_ngx_datatable_column_20_ng_template_2_Template, 2, 1, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SolexBcComponent_ngx_datatable_column_21_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Publisher ");
        }
      }

      function SolexBcComponent_ngx_datatable_column_21_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r36 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r36);
        }
      }

      function SolexBcComponent_ngx_datatable_column_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SolexBcComponent_ngx_datatable_column_21_ng_template_1_Template, 1, 0, "ng-template", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SolexBcComponent_ngx_datatable_column_21_ng_template_2_Template, 2, 1, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 100);
        }
      }

      function SolexBcComponent_ngx_datatable_column_22_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Searches ");
        }
      }

      function SolexBcComponent_ngx_datatable_column_22_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r40 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r40));
        }
      }

      function SolexBcComponent_ngx_datatable_column_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SolexBcComponent_ngx_datatable_column_22_ng_template_1_Template, 1, 0, "ng-template", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SolexBcComponent_ngx_datatable_column_22_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SolexBcComponent_ngx_datatable_column_23_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Clicks ");
        }
      }

      function SolexBcComponent_ngx_datatable_column_23_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r44 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r44));
        }
      }

      function SolexBcComponent_ngx_datatable_column_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SolexBcComponent_ngx_datatable_column_23_ng_template_1_Template, 1, 0, "ng-template", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SolexBcComponent_ngx_datatable_column_23_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SolexBcComponent_ng_template_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Split ");
        }
      }

      function SolexBcComponent_ng_template_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r46 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r46) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 3, 0, "1.0-0"));
        }
      }

      function SolexBcComponent_ng_template_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Publisher Net ");
        }
      }

      function SolexBcComponent_ng_template_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r48 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r48, "USD"));
        }
      }

      function SolexBcComponent_ng_template_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Profit ");
        }
      }

      function SolexBcComponent_ng_template_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r50 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r50, "USD"));
        }
      }

      function SolexBcComponent_ng_template_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Revenue ");
        }
      }

      function SolexBcComponent_ng_template_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r52 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r52, "USD"));
        }
      }

      var SolexBcComponent = /*#__PURE__*/function () {
        function SolexBcComponent(cdr, userService, solexBCService, tagService) {
          _classCallCheck(this, SolexBcComponent);

          this.cdr = cdr;
          this.userService = userService;
          this.solexBCService = solexBCService;
          this.tagService = tagService;
          this.range = {
            startDate: '',
            endDate: ''
          };
          this.loadingIndicator = true;
          this.expanded = {};
          this.tagList = [];
          this.groupPublishFlag = false;
          this.groupDateShowFlag = false;
          this.groupSubidShowFlag = false;
          this.selectedCompany = this.getSelectedCompanyStored();
        }

        _createClass(SolexBcComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee44() {
              return regeneratorRuntime.wrap(function _callee44$(_context44) {
                while (1) {
                  switch (_context44.prev = _context44.next) {
                    case 0:
                      _context44.next = 2;
                      return this.getCompanyTags(this.selectedCompany);

                    case 2:
                      this.tagList = _context44.sent;
                      this.rows = [];
                      _context44.next = 6;
                      return this.getAllSolexBCStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 6:
                      this.rows = _context44.sent;
                      _context44.next = 9;
                      return this.getChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 9:
                      this.chartData = _context44.sent;
                      _context44.next = 12;
                      return this.getSummaryMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 12:
                      this.summaryMetrics = _context44.sent;
                      this.refreshTable();

                    case 14:
                    case "end":
                      return _context44.stop();
                  }
                }
              }, _callee44, this);
            }));
          }
        }, {
          key: "updateReportingFiltering",
          value: function updateReportingFiltering(range) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee45() {
              return regeneratorRuntime.wrap(function _callee45$(_context45) {
                while (1) {
                  switch (_context45.prev = _context45.next) {
                    case 0:
                      this.range = range;
                      _context45.next = 3;
                      return this.getAllSolexBCStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 3:
                      this.rows = _context45.sent;
                      _context45.next = 6;
                      return this.getChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 6:
                      this.chartData = _context45.sent;
                      _context45.next = 9;
                      return this.getSummaryMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 9:
                      this.summaryMetrics = _context45.sent;
                      this.groupPublishFlag = false;
                      this.refreshTable();

                    case 12:
                    case "end":
                      return _context45.stop();
                  }
                }
              }, _callee45, this);
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
          key: "getAllSolexBCStats",
          value: function getAllSolexBCStats(company, startDate, endDate) {
            var _this8 = this;

            return this.solexBCService.getSolexBCStats(company, startDate, endDate).toPromise().then(function (response) {
              console.log('getSolexBCStats() response:', response);
              _this8.loadingIndicator = false;
              _this8.allStats = response.stats;

              _this8.allStats.map(function (resStat) {
                resStat.publisher = "No Publisher";
                resStat.tagname = "No Tag";
              });

              var _iterator38 = _createForOfIteratorHelper(_this8.tagList),
                  _step38;

              try {
                for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
                  var tagL = _step38.value;

                  if (tagL.tag.advertiser == "solex-bc") {
                    var _iterator39 = _createForOfIteratorHelper(tagL.tag.subids),
                        _step39;

                    try {
                      for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
                        var tagSub = _step39.value;

                        if (tagSub.filterTag == "Contains") {
                          _this8.allStats.map(function (stat) {
                            if (stat.subid.includes(tagSub.subid)) {
                              stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                              stat.tagname = tagL.tag.name;
                            }
                          });
                        } else if (tagSub.filterTag == "StartsWith") {
                          _this8.allStats.map(function (stat) {
                            if (stat.subid.startsWith(tagSub.subid)) {
                              stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                              stat.tagname = tagL.tag.name;
                            }
                          });
                        } else if (tagSub.filterTag == "EndsWith") {
                          _this8.allStats.map(function (stat) {
                            if (stat.subid.endsWith(tagSub.subid)) {
                              stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                              stat.tagname = tagL.tag.name;
                            }
                          });
                        } else if (tagSub.filterTag == "ExactValue") {
                          _this8.allStats.map(function (stat) {
                            if (stat.subid == tagSub.subid) {
                              stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                              stat.tagname = tagL.tag.name;
                            }
                          });
                        }
                      }
                    } catch (err) {
                      _iterator39.e(err);
                    } finally {
                      _iterator39.f();
                    }
                  }
                }
              } catch (err) {
                _iterator38.e(err);
              } finally {
                _iterator38.f();
              }

              return _this8.allStats;
            });
          }
        }, {
          key: "groupSubid",
          value: function groupSubid() {
            var helperSummary = {};
            var groupData = this.allStats.reduce(function (r, o) {
              var key = o.subid;

              if (!helperSummary[key]) {
                helperSummary[key] = Object.assign({}, o); // create a copy of o

                helperSummary[key].counter = 1;
                r.push(helperSummary[key]);
              } else {
                helperSummary[key].clicks += parseFloat(o.clicks);
                helperSummary[key].searches += parseFloat(o.searches ? o.searches : 0);
                helperSummary[key].revenue += parseFloat(o.revenue);
                helperSummary[key].split += parseFloat(o.split);
                helperSummary[key].profit += parseFloat(o.profit);
                helperSummary[key].publisherNet += parseFloat(o.publisherNet);
                helperSummary[key].counter++;
              }

              return r;
            }, []);

            var _iterator40 = _createForOfIteratorHelper(groupData),
                _step40;

            try {
              for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
                var group = _step40.value;
                group.split = group.split / group.counter;
              }
            } catch (err) {
              _iterator40.e(err);
            } finally {
              _iterator40.f();
            }

            this.rows = groupData;
            this.groupPublishFlag = false;
            this.groupDateShowFlag = false;
            this.groupSubidShowFlag = true;
            this.cdr.markForCheck();
          }
        }, {
          key: "groupDate",
          value: function groupDate() {
            var helperSummary = {};
            var groupData = this.allStats.reduce(function (r, o) {
              var key = o.date;

              if (!helperSummary[key]) {
                helperSummary[key] = Object.assign({}, o); // create a copy of o

                helperSummary[key].counter = 1;
                r.push(helperSummary[key]);
              } else {
                helperSummary[key].clicks += parseFloat(o.clicks);
                helperSummary[key].searches += parseFloat(o.searches ? o.searches : 0);
                helperSummary[key].revenue += parseFloat(o.revenue);
                helperSummary[key].split += parseFloat(o.split);
                helperSummary[key].profit += parseFloat(o.profit);
                helperSummary[key].publisherNet += parseFloat(o.publisherNet);
                helperSummary[key].counter++;
              }

              return r;
            }, []);

            var _iterator41 = _createForOfIteratorHelper(groupData),
                _step41;

            try {
              for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
                var group = _step41.value;
                group.split = group.split / group.counter;
              }
            } catch (err) {
              _iterator41.e(err);
            } finally {
              _iterator41.f();
            }

            this.rows = groupData;
            this.groupPublishFlag = false;
            this.groupDateShowFlag = true;
            this.groupSubidShowFlag = false;
            this.cdr.markForCheck();
          }
        }, {
          key: "groupProvider",
          value: function groupProvider() {
            var helperSummary = {};
            var groupData = this.allStats.reduce(function (r, o) {
              var key = o.publisher;

              if (!helperSummary[key]) {
                helperSummary[key] = Object.assign({}, o); // create a copy of o

                helperSummary[key].counter = 1;
                r.push(helperSummary[key]);
              } else {
                helperSummary[key].clicks += parseFloat(o.clicks);
                helperSummary[key].searches += parseFloat(o.searches ? o.searches : 0);
                helperSummary[key].revenue += parseFloat(o.revenue);
                helperSummary[key].split += parseFloat(o.split);
                helperSummary[key].profit += parseFloat(o.profit);
                helperSummary[key].publisherNet += parseFloat(o.publisherNet);
                helperSummary[key].counter++;
              }

              return r;
            }, []);

            var _iterator42 = _createForOfIteratorHelper(groupData),
                _step42;

            try {
              for (_iterator42.s(); !(_step42 = _iterator42.n()).done;) {
                var group = _step42.value;
                group.split = group.split / group.counter;
              }
            } catch (err) {
              _iterator42.e(err);
            } finally {
              _iterator42.f();
            }

            this.rows = groupData;
            this.groupPublishFlag = true;
            this.groupDateShowFlag = false;
            this.groupSubidShowFlag = false;
            this.cdr.markForCheck();
          }
        }, {
          key: "backGroup",
          value: function backGroup() {
            this.rows = this.allStats;
            this.groupPublishFlag = false;
            this.groupDateShowFlag = false;
            this.groupSubidShowFlag = false;
            this.cdr.markForCheck();
          }
        }, {
          key: "getChartMetrics",
          value: function getChartMetrics(company, startDate, endDate) {
            return this.solexBCService.getChartMetrics(company, startDate, endDate).toPromise().then(function (response) {
              return response;
            })["catch"](function (error) {
              return error;
            });
          }
        }, {
          key: "getSummaryMetrics",
          value: function getSummaryMetrics(company, startDate, endDate) {
            return this.solexBCService.getSummaryMetrics(company, startDate, endDate).toPromise().then(function (response) {
              var allSummary = {};
              var currentPercentPace = 0;
              var lastPercentPace = 0;
              var selectedPercentPace = 0;

              if (response.summary[0].lastMonthStat[0].profitPace != 0) {
                currentPercentPace = (response.summary[0].summaryMetrics[0].profitPace - response.summary[0].lastMonthStat[0].profitPace) / response.summary[0].lastMonthStat[0].profitPace * 100;
              }

              if (response.summary[0].twoLastMonthStat[0].profitPace != 0) {
                lastPercentPace = (response.summary[0].lastMonthStat[0].profitPace - response.summary[0].twoLastMonthStat[0].profitPace) / response.summary[0].twoLastMonthStat[0].profitPace * 100;
              }

              if (response.summary[0].prevSelectedStat[0].profitPace != 0) {
                selectedPercentPace = (response.summary[0].selectedStat[0].profitPace - response.summary[0].prevSelectedStat[0].profitPace) / response.summary[0].prevSelectedStat[0].profitPace * 100;
              }

              response.summary[0].summaryMetrics[0].percentPace = currentPercentPace;
              response.summary[0].lastMonthStat[0].percentPace = lastPercentPace;
              response.summary[0].selectedStat[0].percentPace = selectedPercentPace;
              response.summary[0].selectedStat[0].selectedStartDate = startDate;
              response.summary[0].selectedStat[0].selectedEndDate = endDate;
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

        return SolexBcComponent;
      }();

      SolexBcComponent.ɵfac = function SolexBcComponent_Factory(t) {
        return new (t || SolexBcComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_admin_stats_solexbc_service__WEBPACK_IMPORTED_MODULE_3__["SolexBCService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_modules_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__["TagManagementService"]));
      };

      SolexBcComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SolexBcComponent,
        selectors: [["app-solex-bc"]],
        viewQuery: function SolexBcComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 36,
        vars: 21,
        consts: [[3, "onDatesPicked"], [3, "chartData", 4, "ngIf"], [3, "summaryMetricsData", 4, "ngIf"], [1, "row", "px-6"], [1, "btn", "btn-sm", "btn-primary", "mx-1", 3, "click"], [1, "btn", "btn-sm", "btn-success", "mx-1", 3, "click"], [1, "btn", "btn-sm", "btn-info", "mx-1", 3, "click"], [1, "btn", "btn-sm", "btn-dark", "mx-1", 3, "click"], [1, "material", "fullscreen", "expandable", 2, "top", "30px", "height", "500px", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "rows", "loadingIndicator"], ["expandableTable", ""], [3, "rowHeight", "toggle"], ["myDetailRow", ""], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["ngx-datatable-cell-template", ""], ["name", "date", 3, "minWidth", 4, "ngIf"], ["name", "subid", 4, "ngIf"], ["name", "publisher", 3, "minWidth", 4, "ngIf"], ["name", "searches", 4, "ngIf"], ["name", "clicks", 4, "ngIf"], ["name", "split", 3, "minWidth"], ["ngx-datatable-header-template", ""], ["name", "publisherNet"], ["name", "profit"], ["name", "revenue"], [3, "chartData"], [3, "summaryMetricsData"], [2, "padding-left", "35px"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 3, "click"], ["name", "date", 3, "minWidth"], ["name", "subid"], ["name", "publisher", 3, "minWidth"], ["name", "searches"], ["name", "clicks"]],
        template: function SolexBcComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-reporting-filtering", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onDatesPicked", function SolexBcComponent_Template_app_reporting_filtering_onDatesPicked_0_listener($event) {
              return ctx.updateReportingFiltering($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SolexBcComponent_app_reporting_revenue_chart_1_Template, 1, 1, "app-reporting-revenue-chart", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SolexBcComponent_app_summary_metrics_2_Template, 1, 1, "app-summary-metrics", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SolexBcComponent_Template_button_click_4_listener() {
              return ctx.groupDate();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Group by Date ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SolexBcComponent_Template_button_click_6_listener() {
              return ctx.groupProvider();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Group by Publisher ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SolexBcComponent_Template_button_click_8_listener() {
              return ctx.groupSubid();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Group by Subid ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SolexBcComponent_Template_button_click_10_listener() {
              return ctx.backGroup();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Back ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ngx-datatable", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ngx-datatable-row-detail", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("toggle", function SolexBcComponent_Template_ngx_datatable_row_detail_toggle_14_listener($event) {
              return ctx.onDetailToggle($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, SolexBcComponent_ng_template_16_Template, 6, 0, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ngx-datatable-column", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, SolexBcComponent_ng_template_18_Template, 1, 4, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, SolexBcComponent_ngx_datatable_column_19_Template, 3, 1, "ngx-datatable-column", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, SolexBcComponent_ngx_datatable_column_20_Template, 3, 0, "ngx-datatable-column", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, SolexBcComponent_ngx_datatable_column_21_Template, 3, 1, "ngx-datatable-column", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, SolexBcComponent_ngx_datatable_column_22_Template, 3, 0, "ngx-datatable-column", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, SolexBcComponent_ngx_datatable_column_23_Template, 3, 0, "ngx-datatable-column", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ngx-datatable-column", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, SolexBcComponent_ng_template_25_Template, 1, 0, "ng-template", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, SolexBcComponent_ng_template_26_Template, 4, 6, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ngx-datatable-column", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, SolexBcComponent_ng_template_28_Template, 1, 0, "ng-template", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, SolexBcComponent_ng_template_29_Template, 3, 4, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ngx-datatable-column", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, SolexBcComponent_ng_template_31_Template, 1, 0, "ng-template", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, SolexBcComponent_ng_template_32_Template, 3, 4, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ngx-datatable-column", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, SolexBcComponent_ng_template_34_Template, 1, 0, "ng-template", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, SolexBcComponent_ng_template_35_Template, 3, 4, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.chartData);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.summaryMetrics);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnMode", "force")("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("rows", ctx.rows)("loadingIndicator", ctx.loadingIndicator);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowHeight", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 30)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 35);
          }
        },
        directives: [_shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_5__["ReportingFilteringComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableRowDetailDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableRowDetailTemplateDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnCellDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnHeaderDirective"], _shared_modules_reporting_revenue_chart_reporting_revenue_chart_component__WEBPACK_IMPORTED_MODULE_8__["ReportingRevenueChartComponent"], _shared_modules_summary_metrics_summary_metrics_component__WEBPACK_IMPORTED_MODULE_9__["SummaryMetricsComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL3NvbGV4LWJjL3NvbGV4LWJjLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SolexBcComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-solex-bc',
            templateUrl: './solex-bc.component.html',
            styleUrls: ['./solex-bc.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
          }, {
            type: src_app_shared_service_admin_stats_solexbc_service__WEBPACK_IMPORTED_MODULE_3__["SolexBCService"]
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
    "./src/app/modules/admin-reporting/system1/system1.component.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/modules/admin-reporting/system1/system1.component.ts ***!
      \**********************************************************************/

    /*! exports provided: System1Component */

    /***/
    function srcAppModulesAdminReportingSystem1System1ComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "System1Component", function () {
        return System1Component;
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


      var src_app_shared_service_admin_stats_system1_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/service/admin-stats/system1.service */
      "./src/app/shared/service/admin-stats/system1.service.ts");
      /* harmony import */


      var _shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../shared/modules/reporting-filtering/reporting-filtering.component */
      "./src/app/shared/modules/reporting-filtering/reporting-filtering.component.ts");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var _c0 = ["expandableTable"];

      function System1Component_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);

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

      function System1Component_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function System1Component_ng_template_7_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var row_r16 = ctx.row;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r18.toggleExpandRow(row_r16);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var expanded_r17 = ctx.expanded;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("datatable-icon-right", !expanded_r17)("datatable-icon-down", expanded_r17);
        }
      }

      function System1Component_ngx_datatable_column_8_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Date ");
        }
      }

      function System1Component_ngx_datatable_column_8_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r23 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r23));
        }
      }

      function System1Component_ngx_datatable_column_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, System1Component_ngx_datatable_column_8_ng_template_1_Template, 1, 0, "ng-template", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, System1Component_ngx_datatable_column_8_ng_template_2_Template, 3, 3, "ng-template", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 100);
        }
      }

      function System1Component_ngx_datatable_column_9_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Subid ");
        }
      }

      function System1Component_ngx_datatable_column_9_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r27 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r27);
        }
      }

      function System1Component_ngx_datatable_column_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, System1Component_ngx_datatable_column_9_ng_template_1_Template, 1, 0, "ng-template", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, System1Component_ngx_datatable_column_9_ng_template_2_Template, 2, 1, "ng-template", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function System1Component_ngx_datatable_column_10_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Device ");
        }
      }

      function System1Component_ngx_datatable_column_10_ng_template_2_Template(rf, ctx) {
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

      function System1Component_ngx_datatable_column_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, System1Component_ngx_datatable_column_10_ng_template_1_Template, 1, 0, "ng-template", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, System1Component_ngx_datatable_column_10_ng_template_2_Template, 2, 1, "ng-template", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 100);
        }
      }

      function System1Component_ngx_datatable_column_11_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " PageViews ");
        }
      }

      function System1Component_ngx_datatable_column_11_ng_template_2_Template(rf, ctx) {
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

      function System1Component_ngx_datatable_column_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, System1Component_ngx_datatable_column_11_ng_template_1_Template, 1, 0, "ng-template", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, System1Component_ngx_datatable_column_11_ng_template_2_Template, 3, 3, "ng-template", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function System1Component_ngx_datatable_column_12_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Clicks ");
        }
      }

      function System1Component_ngx_datatable_column_12_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r39 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r39));
        }
      }

      function System1Component_ngx_datatable_column_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, System1Component_ngx_datatable_column_12_ng_template_1_Template, 1, 0, "ng-template", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, System1Component_ngx_datatable_column_12_ng_template_2_Template, 3, 3, "ng-template", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function System1Component_ngx_datatable_column_13_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Impressions ");
        }
      }

      function System1Component_ngx_datatable_column_13_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r43 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r43) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 3, 0, "1.0-0"));
        }
      }

      function System1Component_ngx_datatable_column_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, System1Component_ngx_datatable_column_13_ng_template_1_Template, 1, 0, "ng-template", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, System1Component_ngx_datatable_column_13_ng_template_2_Template, 4, 6, "ng-template", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 35);
        }
      }

      function System1Component_ng_template_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Split ");
        }
      }

      function System1Component_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r45 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r45) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 3, 0, "1.0-0"));
        }
      }

      function System1Component_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Revenue ");
        }
      }

      function System1Component_ng_template_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r47 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r47, "USD"));
        }
      }

      var System1Component = /*#__PURE__*/function () {
        function System1Component(cdr, userService, system1Service) {
          _classCallCheck(this, System1Component);

          this.cdr = cdr;
          this.userService = userService;
          this.system1Service = system1Service;
          this.range = {
            startDate: '',
            endDate: ''
          };
          this.loadingIndicator = true;
          this.groupPublishFlag = false;
          this.selectedCompany = this.getSelectedCompanyFromLocalStorage();
        }

        _createClass(System1Component, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee46() {
              return regeneratorRuntime.wrap(function _callee46$(_context46) {
                while (1) {
                  switch (_context46.prev = _context46.next) {
                    case 0:
                      this.rows = [];
                      _context46.next = 3;
                      return this.getAllSystem1Stats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 3:
                      this.rows = _context46.sent;

                    case 4:
                    case "end":
                      return _context46.stop();
                  }
                }
              }, _callee46, this);
            }));
          }
        }, {
          key: "updateReportingFiltering",
          value: function updateReportingFiltering(range) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee47() {
              return regeneratorRuntime.wrap(function _callee47$(_context47) {
                while (1) {
                  switch (_context47.prev = _context47.next) {
                    case 0:
                      // console.log('Update report filtering....');
                      this.range = range;
                      _context47.next = 3;
                      return this.getAllSystem1Stats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 3:
                      this.rows = _context47.sent;
                      this.groupPublishFlag = false;
                      this.refreshTable();

                    case 6:
                    case "end":
                      return _context47.stop();
                  }
                }
              }, _callee47, this);
            }));
          } //get Stat all

        }, {
          key: "getAllSystem1Stats",
          value: function getAllSystem1Stats(company, startDate, endDate) {
            var _this9 = this;

            return this.system1Service.getAllSystem1Stats(company, startDate, endDate).toPromise().then(function (response) {
              console.log('getAllSystem1Stats() response:', response);
              _this9.loadingIndicator = false;
              _this9.allStats = response.stats;
              return _this9.allStats;
            });
          }
        }, {
          key: "getSummaryMetrics",
          value: function getSummaryMetrics(company) {
            return [];
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
          } //Gets the Selected Company from Local Storage

        }, {
          key: "getSelectedCompanyFromLocalStorage",
          value: function getSelectedCompanyFromLocalStorage() {
            return this.userService.getSelectedCompanyFromLocalStorage();
          }
        }]);

        return System1Component;
      }();

      System1Component.ɵfac = function System1Component_Factory(t) {
        return new (t || System1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_admin_stats_system1_service__WEBPACK_IMPORTED_MODULE_3__["System1Service"]));
      };

      System1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: System1Component,
        selectors: [["app-system1"]],
        viewQuery: function System1Component_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 20,
        vars: 20,
        consts: [[3, "onDatesPicked"], [1, "material", "fullscreen", "expandable", 2, "top", "30px", "height", "500px", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "rows", "loadingIndicator"], ["expandableTable", ""], [3, "rowHeight", "toggle"], ["myDetailRow", ""], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["ngx-datatable-cell-template", ""], ["name", "date", 3, "minWidth", 4, "ngIf"], ["name", "subid", 4, "ngIf"], ["name", "device", 3, "minWidth", 4, "ngIf"], ["name", "pageviews", 4, "ngIf"], ["name", "clicks", 4, "ngIf"], ["name", "impressions", 3, "minWidth", 4, "ngIf"], ["name", "split", 3, "minWidth"], ["ngx-datatable-header-template", ""], ["name", "revenue"], [2, "padding-left", "35px"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 3, "click"], ["name", "date", 3, "minWidth"], ["name", "subid"], ["name", "device", 3, "minWidth"], ["name", "pageviews"], ["name", "clicks"], ["name", "impressions", 3, "minWidth"]],
        template: function System1Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-reporting-filtering", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onDatesPicked", function System1Component_Template_app_reporting_filtering_onDatesPicked_0_listener($event) {
              return ctx.updateReportingFiltering($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ngx-datatable", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ngx-datatable-row-detail", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("toggle", function System1Component_Template_ngx_datatable_row_detail_toggle_3_listener($event) {
              return ctx.onDetailToggle($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, System1Component_ng_template_5_Template, 6, 0, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ngx-datatable-column", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, System1Component_ng_template_7_Template, 1, 4, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, System1Component_ngx_datatable_column_8_Template, 3, 1, "ngx-datatable-column", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, System1Component_ngx_datatable_column_9_Template, 3, 0, "ngx-datatable-column", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, System1Component_ngx_datatable_column_10_Template, 3, 1, "ngx-datatable-column", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, System1Component_ngx_datatable_column_11_Template, 3, 0, "ngx-datatable-column", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, System1Component_ngx_datatable_column_12_Template, 3, 0, "ngx-datatable-column", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, System1Component_ngx_datatable_column_13_Template, 3, 1, "ngx-datatable-column", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ngx-datatable-column", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, System1Component_ng_template_15_Template, 1, 0, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, System1Component_ng_template_16_Template, 4, 6, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ngx-datatable-column", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, System1Component_ng_template_18_Template, 1, 0, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, System1Component_ng_template_19_Template, 3, 4, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnMode", "force")("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("rows", ctx.rows)("loadingIndicator", ctx.loadingIndicator);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowHeight", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 30)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 35);
          }
        },
        directives: [_shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_4__["ReportingFilteringComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DatatableRowDetailDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DatatableRowDetailTemplateDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DataTableColumnCellDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DataTableColumnHeaderDirective"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL3N5c3RlbTEvc3lzdGVtMS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](System1Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-system1',
            templateUrl: './system1.component.html',
            styleUrls: ['./system1.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
          }, {
            type: src_app_shared_service_admin_stats_system1_service__WEBPACK_IMPORTED_MODULE_3__["System1Service"]
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


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_shared_service_admin_stats_verizon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/service/admin-stats/verizon.service */
      "./src/app/shared/service/admin-stats/verizon.service.ts");
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

      function VerizonDirectComponent_app_reporting_revenue_chart_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-reporting-revenue-chart", 32);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("chartData", ctx_r0.chartData);
        }
      }

      function VerizonDirectComponent_app_summary_metrics_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-summary-metrics", 33);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("summaryMetricsData", ctx_r1.summaryMetrics);
        }
      }

      function VerizonDirectComponent_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);

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

      function VerizonDirectComponent_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VerizonDirectComponent_ng_template_18_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31);

            var row_r28 = ctx.row;

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r30.toggleExpandRow(row_r28);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var expanded_r29 = ctx.expanded;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("datatable-icon-right", !expanded_r29)("datatable-icon-down", expanded_r29);
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_19_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Date ");
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_19_ng_template_2_Template(rf, ctx) {
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

      function VerizonDirectComponent_ngx_datatable_column_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VerizonDirectComponent_ngx_datatable_column_19_ng_template_1_Template, 1, 0, "ng-template", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VerizonDirectComponent_ngx_datatable_column_19_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 100);
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_20_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Subid ");
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_20_ng_template_2_Template(rf, ctx) {
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

      function VerizonDirectComponent_ngx_datatable_column_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VerizonDirectComponent_ngx_datatable_column_20_ng_template_1_Template, 1, 0, "ng-template", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VerizonDirectComponent_ngx_datatable_column_20_ng_template_2_Template, 2, 1, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_21_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Publisher ");
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_21_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r43 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r43);
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VerizonDirectComponent_ngx_datatable_column_21_ng_template_1_Template, 1, 0, "ng-template", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VerizonDirectComponent_ngx_datatable_column_21_ng_template_2_Template, 2, 1, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 100);
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_22_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Searches ");
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_22_ng_template_2_Template(rf, ctx) {
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

      function VerizonDirectComponent_ngx_datatable_column_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VerizonDirectComponent_ngx_datatable_column_22_ng_template_1_Template, 1, 0, "ng-template", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VerizonDirectComponent_ngx_datatable_column_22_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_23_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Bid Searches ");
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_23_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r51 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r51));
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VerizonDirectComponent_ngx_datatable_column_23_ng_template_1_Template, 1, 0, "ng-template", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VerizonDirectComponent_ngx_datatable_column_23_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_24_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Bid Searches Result ");
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_24_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r55 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r55));
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VerizonDirectComponent_ngx_datatable_column_24_ng_template_1_Template, 1, 0, "ng-template", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VerizonDirectComponent_ngx_datatable_column_24_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_25_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Clicks ");
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_25_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r59 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r59));
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VerizonDirectComponent_ngx_datatable_column_25_ng_template_1_Template, 1, 0, "ng-template", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VerizonDirectComponent_ngx_datatable_column_25_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_26_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Coverage ");
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_26_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r63 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r63));
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VerizonDirectComponent_ngx_datatable_column_26_ng_template_1_Template, 1, 0, "ng-template", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VerizonDirectComponent_ngx_datatable_column_26_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_27_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " CPC ");
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_27_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r67 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r67));
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VerizonDirectComponent_ngx_datatable_column_27_ng_template_1_Template, 1, 0, "ng-template", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VerizonDirectComponent_ngx_datatable_column_27_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_28_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " CTR ");
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_28_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r71 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r71));
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VerizonDirectComponent_ngx_datatable_column_28_ng_template_1_Template, 1, 0, "ng-template", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VerizonDirectComponent_ngx_datatable_column_28_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_29_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " RN ");
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_29_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r75 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r75));
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VerizonDirectComponent_ngx_datatable_column_29_ng_template_1_Template, 1, 0, "ng-template", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VerizonDirectComponent_ngx_datatable_column_29_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_30_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " TqScore ");
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_30_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r79 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r79));
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VerizonDirectComponent_ngx_datatable_column_30_ng_template_1_Template, 1, 0, "ng-template", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VerizonDirectComponent_ngx_datatable_column_30_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function VerizonDirectComponent_ng_template_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Publisher Net ");
        }
      }

      function VerizonDirectComponent_ng_template_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r81 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r81, "USD"));
        }
      }

      function VerizonDirectComponent_ng_template_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Profit ");
        }
      }

      function VerizonDirectComponent_ng_template_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r83 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r83, "USD"));
        }
      }

      function VerizonDirectComponent_ng_template_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Revenue ");
        }
      }

      function VerizonDirectComponent_ng_template_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r85 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r85, "USD"));
        }
      }

      function VerizonDirectComponent_ng_template_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Split ");
        }
      }

      function VerizonDirectComponent_ng_template_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r87 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r87) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 3, 0, "1.0-0"));
        }
      }

      var VerizonDirectComponent = /*#__PURE__*/function () {
        function VerizonDirectComponent(verizonService, cdr, userService, tagService) {
          _classCallCheck(this, VerizonDirectComponent);

          this.verizonService = verizonService;
          this.cdr = cdr;
          this.userService = userService;
          this.tagService = tagService;
          this.range = {
            startDate: '',
            endDate: ''
          };
          this.loadingIndicator = true;
          this.tagList = [];
          this.groupPublishFlag = false;
          this.groupDateShowFlag = false;
          this.groupSubidShowFlag = false;
          this.selectedCompany = this.getSelectedCompanyFromLocalStorage();
        }

        _createClass(VerizonDirectComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee48() {
              return regeneratorRuntime.wrap(function _callee48$(_context48) {
                while (1) {
                  switch (_context48.prev = _context48.next) {
                    case 0:
                      _context48.next = 2;
                      return this.getCompanyTags(this.selectedCompany);

                    case 2:
                      this.tagList = _context48.sent;
                      this.rows = [];
                      _context48.next = 6;
                      return this.getAllVerizonStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 6:
                      this.rows = _context48.sent;
                      _context48.next = 9;
                      return this.getChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 9:
                      this.chartData = _context48.sent;
                      _context48.next = 12;
                      return this.getSummaryMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 12:
                      this.summaryMetrics = _context48.sent;
                      this.refreshTable();

                    case 14:
                    case "end":
                      return _context48.stop();
                  }
                }
              }, _callee48, this);
            }));
          } //get Tags with selected company

        }, {
          key: "getCompanyTags",
          value: function getCompanyTags(selectedCompany) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee49() {
              var companyId, response;
              return regeneratorRuntime.wrap(function _callee49$(_context49) {
                while (1) {
                  switch (_context49.prev = _context49.next) {
                    case 0:
                      companyId = selectedCompany.split("/")[1];
                      _context49.prev = 1;
                      _context49.next = 4;
                      return this.tagService.getCompanyTags(companyId).toPromise();

                    case 4:
                      response = _context49.sent;
                      return _context49.abrupt("return", response);

                    case 8:
                      _context49.prev = 8;
                      _context49.t0 = _context49["catch"](1);
                      return _context49.abrupt("return", _context49.t0);

                    case 11:
                    case "end":
                      return _context49.stop();
                  }
                }
              }, _callee49, this, [[1, 8]]);
            }));
          } //Gets the Selected Company from Local Storage

        }, {
          key: "getSelectedCompanyFromLocalStorage",
          value: function getSelectedCompanyFromLocalStorage() {
            return this.userService.getSelectedCompanyFromLocalStorage();
          }
        }, {
          key: "updateReportingFiltering",
          value: function updateReportingFiltering(range) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee50() {
              return regeneratorRuntime.wrap(function _callee50$(_context50) {
                while (1) {
                  switch (_context50.prev = _context50.next) {
                    case 0:
                      // console.log('Update report filtering....');
                      this.range = range;
                      _context50.next = 3;
                      return this.getAllVerizonStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 3:
                      this.rows = _context50.sent;
                      _context50.next = 6;
                      return this.getChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 6:
                      this.chartData = _context50.sent;
                      _context50.next = 9;
                      return this.getSummaryMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 9:
                      this.summaryMetrics = _context50.sent;
                      this.refreshTable();

                    case 11:
                    case "end":
                      return _context50.stop();
                  }
                }
              }, _callee50, this);
            }));
          }
        }, {
          key: "refreshTable",
          value: function refreshTable() {
            this.cdr.markForCheck();
          }
        }, {
          key: "groupDate",
          value: function groupDate() {
            var helperSummary = {};
            var groupData = this.allStats.reduce(function (r, o) {
              var key = o.date;

              if (!helperSummary[key]) {
                helperSummary[key] = Object.assign({}, o); // create a copy of o

                helperSummary[key].counter = 1;
                r.push(helperSummary[key]);
              } else {
                helperSummary[key].clicks += parseFloat(o.clicks);
                helperSummary[key].cpc += parseFloat(o.cpc ? o.cpc : 0);
                helperSummary[key].ctr += parseFloat(o.ctr ? o.ctr : 0);
                helperSummary[key].rn += parseFloat(o.rn ? o.rn : 0);
                helperSummary[key].coverage += parseFloat(o.coverage ? o.coverage : 0);
                helperSummary[key].searches += parseFloat(o.searches ? o.searches : 0);
                helperSummary[key].biddedSearches += parseFloat(o.biddedSearches ? o.biddedSearches : 0);
                helperSummary[key].biddedResults += parseFloat(o.biddedResults ? o.biddedResults : 0);
                helperSummary[key].profit += parseFloat(o.profit);
                helperSummary[key].publisherNet += parseFloat(o.publisherNet);
                helperSummary[key].revenue += parseFloat(o.revenue);
                helperSummary[key].split += parseFloat(o.split);
                helperSummary[key].counter++;
              }

              return r;
            }, []);

            var _iterator43 = _createForOfIteratorHelper(groupData),
                _step43;

            try {
              for (_iterator43.s(); !(_step43 = _iterator43.n()).done;) {
                var group = _step43.value;
                group.split = group.split / group.counter;
                group.ctr = group.ctr / group.counter;
              }
            } catch (err) {
              _iterator43.e(err);
            } finally {
              _iterator43.f();
            }

            this.rows = groupData;
            this.groupPublishFlag = false;
            this.groupDateShowFlag = true;
            this.groupSubidShowFlag = false;
            this.cdr.markForCheck();
          }
        }, {
          key: "groupSubid",
          value: function groupSubid() {
            var helperSummary = {};
            var groupData = this.allStats.reduce(function (r, o) {
              var key = o.subid;

              if (!helperSummary[key]) {
                helperSummary[key] = Object.assign({}, o); // create a copy of o

                helperSummary[key].counter = 1;
                r.push(helperSummary[key]);
              } else {
                helperSummary[key].clicks += parseFloat(o.clicks);
                helperSummary[key].cpc += parseFloat(o.cpc ? o.cpc : 0);
                helperSummary[key].ctr += parseFloat(o.ctr ? o.ctr : 0);
                helperSummary[key].rn += parseFloat(o.rn ? o.rn : 0);
                helperSummary[key].coverage += parseFloat(o.coverage ? o.coverage : 0);
                helperSummary[key].searches += parseFloat(o.searches ? o.searches : 0);
                helperSummary[key].biddedSearches += parseFloat(o.biddedSearches ? o.biddedSearches : 0);
                helperSummary[key].biddedResults += parseFloat(o.biddedResults ? o.biddedResults : 0);
                helperSummary[key].profit += parseFloat(o.profit);
                helperSummary[key].publisherNet += parseFloat(o.publisherNet);
                helperSummary[key].revenue += parseFloat(o.revenue);
                helperSummary[key].split += parseFloat(o.split);
                helperSummary[key].counter++;
              }

              return r;
            }, []);

            var _iterator44 = _createForOfIteratorHelper(groupData),
                _step44;

            try {
              for (_iterator44.s(); !(_step44 = _iterator44.n()).done;) {
                var group = _step44.value;
                group.split = group.split / group.counter;
                group.ctr = group.ctr / group.counter;
              }
            } catch (err) {
              _iterator44.e(err);
            } finally {
              _iterator44.f();
            }

            this.rows = groupData;
            this.groupPublishFlag = false;
            this.groupDateShowFlag = false;
            this.groupSubidShowFlag = true;
            this.cdr.markForCheck();
          }
        }, {
          key: "groupProvider",
          value: function groupProvider() {
            var helperSummary = {};
            var groupData = this.allStats.reduce(function (r, o) {
              var key = o.publisher;

              if (!helperSummary[key]) {
                helperSummary[key] = Object.assign({}, o); // create a copy of o

                helperSummary[key].counter = 1;
                r.push(helperSummary[key]);
              } else {
                helperSummary[key].clicks += parseFloat(o.clicks);
                helperSummary[key].cpc += parseFloat(o.cpc ? o.cpc : 0);
                helperSummary[key].ctr += parseFloat(o.ctr ? o.ctr : 0);
                helperSummary[key].rn += parseFloat(o.rn ? o.rn : 0);
                helperSummary[key].coverage += parseFloat(o.coverage ? o.coverage : 0);
                helperSummary[key].searches += parseFloat(o.searches ? o.searches : 0);
                helperSummary[key].biddedSearches += parseFloat(o.biddedSearches ? o.biddedSearches : 0);
                helperSummary[key].biddedResults += parseFloat(o.biddedResults ? o.biddedResults : 0);
                helperSummary[key].profit += parseFloat(o.profit);
                helperSummary[key].publisherNet += parseFloat(o.publisherNet);
                helperSummary[key].revenue += parseFloat(o.revenue);
                helperSummary[key].split += parseFloat(o.split);
                helperSummary[key].counter++;
              }

              return r;
            }, []);

            var _iterator45 = _createForOfIteratorHelper(groupData),
                _step45;

            try {
              for (_iterator45.s(); !(_step45 = _iterator45.n()).done;) {
                var group = _step45.value;
                group.split = group.split / group.counter;
                group.ctr = group.ctr / group.counter;
              }
            } catch (err) {
              _iterator45.e(err);
            } finally {
              _iterator45.f();
            }

            this.rows = groupData;
            this.groupPublishFlag = true;
            this.groupDateShowFlag = false;
            this.groupSubidShowFlag = false;
            this.cdr.markForCheck();
          }
        }, {
          key: "backGroup",
          value: function backGroup() {
            this.rows = this.allStats;
            this.groupPublishFlag = false;
            this.groupDateShowFlag = false;
            this.groupSubidShowFlag = false;
            this.cdr.markForCheck();
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
          key: "getChartMetrics",
          value: function getChartMetrics(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee51() {
              var response;
              return regeneratorRuntime.wrap(function _callee51$(_context51) {
                while (1) {
                  switch (_context51.prev = _context51.next) {
                    case 0:
                      _context51.prev = 0;
                      _context51.next = 3;
                      return this.verizonService.getChartMetrics(company, startDate, endDate).toPromise();

                    case 3:
                      response = _context51.sent;
                      return _context51.abrupt("return", response);

                    case 7:
                      _context51.prev = 7;
                      _context51.t0 = _context51["catch"](0);
                      return _context51.abrupt("return", _context51.t0);

                    case 10:
                    case "end":
                      return _context51.stop();
                  }
                }
              }, _callee51, this, [[0, 7]]);
            }));
          }
        }, {
          key: "getAllVerizonStats",
          value: function getAllVerizonStats(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee52() {
              var response, _iterator46, _step46, tagL, _iterator47, _step47, tagSub;

              return regeneratorRuntime.wrap(function _callee52$(_context52) {
                while (1) {
                  switch (_context52.prev = _context52.next) {
                    case 0:
                      _context52.next = 2;
                      return this.verizonService.getAllVerizonStats(company, startDate, endDate).toPromise();

                    case 2:
                      response = _context52.sent;
                      console.log('getAllVerizonStats() response:', response);
                      this.loadingIndicator = false;
                      this.allStats = response.stats;
                      this.allStats.map(function (resStat) {
                        resStat.publisher = "No Publisher";
                        resStat.tagname = "No Tag";
                      });
                      _iterator46 = _createForOfIteratorHelper(this.tagList);

                      try {
                        for (_iterator46.s(); !(_step46 = _iterator46.n()).done;) {
                          tagL = _step46.value;

                          if (tagL.tag.advertiser == "verizon-direct") {
                            _iterator47 = _createForOfIteratorHelper(tagL.tag.subids);

                            try {
                              for (_iterator47.s(); !(_step47 = _iterator47.n()).done;) {
                                tagSub = _step47.value;

                                if (tagSub.filterTag == "Contains") {
                                  this.allStats.map(function (stat) {
                                    if (stat.subid.includes(tagSub.subid)) {
                                      stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat.tagname = tagL.tag.name;
                                    }
                                  });
                                } else if (tagSub.filterTag == "StartsWith") {
                                  this.allStats.map(function (stat_1) {
                                    if (stat_1.subid.startsWith(tagSub.subid)) {
                                      stat_1.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_1.tagname = tagL.tag.name;
                                    }
                                  });
                                } else if (tagSub.filterTag == "EndsWith") {
                                  this.allStats.map(function (stat_2) {
                                    if (stat_2.subid.endsWith(tagSub.subid)) {
                                      stat_2.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_2.tagname = tagL.tag.name;
                                    }
                                  });
                                } else if (tagSub.filterTag == "ExactValue") {
                                  this.allStats.map(function (stat_3) {
                                    if (stat_3.subid == tagSub.subid) {
                                      stat_3.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_3.tagname = tagL.tag.name;
                                    }
                                  });
                                }
                              }
                            } catch (err) {
                              _iterator47.e(err);
                            } finally {
                              _iterator47.f();
                            }
                          }
                        }
                      } catch (err) {
                        _iterator46.e(err);
                      } finally {
                        _iterator46.f();
                      }

                      return _context52.abrupt("return", this.allStats);

                    case 10:
                    case "end":
                      return _context52.stop();
                  }
                }
              }, _callee52, this);
            }));
          }
        }, {
          key: "getSummaryMetrics",
          value: function getSummaryMetrics(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee53() {
              var response, allSummary, currentPercentPace, lastPercentPace, selectedPercentPace;
              return regeneratorRuntime.wrap(function _callee53$(_context53) {
                while (1) {
                  switch (_context53.prev = _context53.next) {
                    case 0:
                      _context53.next = 2;
                      return this.verizonService.getSummaryMetrics(company, startDate, endDate).toPromise();

                    case 2:
                      response = _context53.sent;
                      allSummary = {};
                      currentPercentPace = 0;
                      lastPercentPace = 0;
                      selectedPercentPace = 0;

                      if (response.summary[0].lastMonthStat[0].profitPace != 0) {
                        currentPercentPace = (response.summary[0].summaryMetrics[0].profitPace - response.summary[0].lastMonthStat[0].profitPace) / response.summary[0].lastMonthStat[0].profitPace * 100;
                      }

                      if (response.summary[0].twoLastMonthStat[0].profitPace != 0) {
                        lastPercentPace = (response.summary[0].lastMonthStat[0].profitPace - response.summary[0].twoLastMonthStat[0].profitPace) / response.summary[0].twoLastMonthStat[0].profitPace * 100;
                      }

                      if (response.summary[0].prevSelectedStat[0].profitPace != 0) {
                        selectedPercentPace = (response.summary[0].selectedStat[0].profitPace - response.summary[0].prevSelectedStat[0].profitPace) / response.summary[0].prevSelectedStat[0].profitPace * 100;
                      }

                      response.summary[0].summaryMetrics[0].percentPace = currentPercentPace;
                      response.summary[0].lastMonthStat[0].percentPace = lastPercentPace;
                      response.summary[0].selectedStat[0].percentPace = selectedPercentPace;
                      response.summary[0].selectedStat[0].selectedStartDate = startDate;
                      response.summary[0].selectedStat[0].selectedEndDate = endDate;
                      allSummary['summary'] = response.summary;
                      return _context53.abrupt("return", allSummary);

                    case 17:
                    case "end":
                      return _context53.stop();
                  }
                }
              }, _callee53, this);
            }));
          }
        }]);

        return VerizonDirectComponent;
      }();

      VerizonDirectComponent.ɵfac = function VerizonDirectComponent_Factory(t) {
        return new (t || VerizonDirectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_admin_stats_verizon_service__WEBPACK_IMPORTED_MODULE_2__["VerizonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_service_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_modules_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__["TagManagementService"]));
      };

      VerizonDirectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: VerizonDirectComponent,
        selectors: [["app-verizon-direct"]],
        viewQuery: function VerizonDirectComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 43,
        vars: 28,
        consts: [[3, "onDatesPicked"], [3, "chartData", 4, "ngIf"], [3, "summaryMetricsData", 4, "ngIf"], [1, "row", "px-6"], [1, "btn", "btn-sm", "btn-primary", "mx-1", 3, "click"], [1, "btn", "btn-sm", "btn-success", "mx-1", 3, "click"], [1, "btn", "btn-sm", "btn-info", "mx-1", 3, "click"], [1, "btn", "btn-sm", "btn-dark", "mx-1", 3, "click"], [1, "material", "fullscreen", "expandable", 2, "top", "30px", "height", "500px", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "rows", "loadingIndicator"], ["expandableTable", ""], [3, "rowHeight", "toggle"], ["myDetailRow", ""], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["ngx-datatable-cell-template", ""], ["name", "date", 3, "minWidth", 4, "ngIf"], ["name", "subid", 4, "ngIf"], ["name", "publisher", 3, "minWidth", 4, "ngIf"], ["name", "searches", 4, "ngIf"], ["name", "biddedSearches", 4, "ngIf"], ["name", "biddedResults", 4, "ngIf"], ["name", "clicks", 4, "ngIf"], ["name", "coverage", 4, "ngIf"], ["name", "cpc", 4, "ngIf"], ["name", "ctr", 4, "ngIf"], ["name", "rn", 4, "ngIf"], ["name", "tqScore", 4, "ngIf"], ["name", "publisherNet"], ["ngx-datatable-header-template", ""], ["name", "profit"], ["name", "revenue"], ["name", "split", 3, "minWidth"], [3, "chartData"], [3, "summaryMetricsData"], [2, "padding-left", "35px"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 3, "click"], ["name", "date", 3, "minWidth"], ["name", "subid"], ["name", "publisher", 3, "minWidth"], ["name", "searches"], ["name", "biddedSearches"], ["name", "biddedResults"], ["name", "clicks"], ["name", "coverage"], ["name", "cpc"], ["name", "ctr"], ["name", "rn"], ["name", "tqScore"]],
        template: function VerizonDirectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-reporting-filtering", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onDatesPicked", function VerizonDirectComponent_Template_app_reporting_filtering_onDatesPicked_0_listener($event) {
              return ctx.updateReportingFiltering($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VerizonDirectComponent_app_reporting_revenue_chart_1_Template, 1, 1, "app-reporting-revenue-chart", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VerizonDirectComponent_app_summary_metrics_2_Template, 1, 1, "app-summary-metrics", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VerizonDirectComponent_Template_button_click_4_listener() {
              return ctx.groupDate();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Group by Date ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VerizonDirectComponent_Template_button_click_6_listener() {
              return ctx.groupProvider();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Group by Publisher ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VerizonDirectComponent_Template_button_click_8_listener() {
              return ctx.groupSubid();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Group by Subid ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VerizonDirectComponent_Template_button_click_10_listener() {
              return ctx.backGroup();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Back ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ngx-datatable", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ngx-datatable-row-detail", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("toggle", function VerizonDirectComponent_Template_ngx_datatable_row_detail_toggle_14_listener($event) {
              return ctx.onDetailToggle($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, VerizonDirectComponent_ng_template_16_Template, 6, 0, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ngx-datatable-column", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, VerizonDirectComponent_ng_template_18_Template, 1, 4, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, VerizonDirectComponent_ngx_datatable_column_19_Template, 3, 1, "ngx-datatable-column", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, VerizonDirectComponent_ngx_datatable_column_20_Template, 3, 0, "ngx-datatable-column", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, VerizonDirectComponent_ngx_datatable_column_21_Template, 3, 1, "ngx-datatable-column", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, VerizonDirectComponent_ngx_datatable_column_22_Template, 3, 0, "ngx-datatable-column", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, VerizonDirectComponent_ngx_datatable_column_23_Template, 3, 0, "ngx-datatable-column", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, VerizonDirectComponent_ngx_datatable_column_24_Template, 3, 0, "ngx-datatable-column", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, VerizonDirectComponent_ngx_datatable_column_25_Template, 3, 0, "ngx-datatable-column", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, VerizonDirectComponent_ngx_datatable_column_26_Template, 3, 0, "ngx-datatable-column", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, VerizonDirectComponent_ngx_datatable_column_27_Template, 3, 0, "ngx-datatable-column", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, VerizonDirectComponent_ngx_datatable_column_28_Template, 3, 0, "ngx-datatable-column", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, VerizonDirectComponent_ngx_datatable_column_29_Template, 3, 0, "ngx-datatable-column", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, VerizonDirectComponent_ngx_datatable_column_30_Template, 3, 0, "ngx-datatable-column", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ngx-datatable-column", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, VerizonDirectComponent_ng_template_32_Template, 1, 0, "ng-template", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, VerizonDirectComponent_ng_template_33_Template, 3, 4, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ngx-datatable-column", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, VerizonDirectComponent_ng_template_35_Template, 1, 0, "ng-template", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, VerizonDirectComponent_ng_template_36_Template, 3, 4, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ngx-datatable-column", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, VerizonDirectComponent_ng_template_38_Template, 1, 0, "ng-template", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, VerizonDirectComponent_ng_template_39_Template, 3, 4, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ngx-datatable-column", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, VerizonDirectComponent_ng_template_41_Template, 1, 0, "ng-template", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, VerizonDirectComponent_ng_template_42_Template, 4, 6, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.chartData);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.summaryMetrics);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnMode", "force")("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("rows", ctx.rows)("loadingIndicator", ctx.loadingIndicator);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowHeight", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 30)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 35);
          }
        },
        directives: [_shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_5__["ReportingFilteringComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableRowDetailDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableRowDetailTemplateDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnCellDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnHeaderDirective"], _shared_modules_reporting_revenue_chart_reporting_revenue_chart_component__WEBPACK_IMPORTED_MODULE_8__["ReportingRevenueChartComponent"], _shared_modules_summary_metrics_summary_metrics_component__WEBPACK_IMPORTED_MODULE_9__["SummaryMetricsComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL3Zlcml6b24tZGlyZWN0L3Zlcml6b24tZGlyZWN0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VerizonDirectComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-verizon-direct',
            templateUrl: './verizon-direct.component.html',
            styleUrls: ['./verizon-direct.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_shared_service_admin_stats_verizon_service__WEBPACK_IMPORTED_MODULE_2__["VerizonService"]
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
    "./src/app/shared/service/admin-stats/accounting.service.ts":
    /*!******************************************************************!*\
      !*** ./src/app/shared/service/admin-stats/accounting.service.ts ***!
      \******************************************************************/

    /*! exports provided: AccountingService */

    /***/
    function srcAppSharedServiceAdminStatsAccountingServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountingService", function () {
        return AccountingService;
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

      var API_ACCOUNTING_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/stats/admin/accounting");

      var AccountingService = /*#__PURE__*/function () {
        function AccountingService(http) {
          _classCallCheck(this, AccountingService);

          this.http = http;
        }

        _createClass(AccountingService, [{
          key: "getRubiStats",
          value: function getRubiStats(company, startDate, endDate) {
            return this.http.get(API_ACCOUNTING_URL + '/rubi', {
              params: {
                company: company,
                startDate: startDate,
                endDate: endDate
              }
            });
          }
        }, {
          key: "getPerionStats",
          value: function getPerionStats(company, startDate, endDate) {
            return this.http.get(API_ACCOUNTING_URL + '/perion', {
              params: {
                company: company,
                startDate: startDate,
                endDate: endDate
              }
            });
          }
        }, {
          key: "getLyonStats",
          value: function getLyonStats(company, startDate, endDate) {
            return this.http.get(API_ACCOUNTING_URL + '/lyons', {
              params: {
                company: company,
                startDate: startDate,
                endDate: endDate
              }
            });
          }
        }, {
          key: "getApptitudeStats",
          value: function getApptitudeStats(company, startDate, endDate) {
            return this.http.get(API_ACCOUNTING_URL + '/apptitude', {
              params: {
                company: company,
                startDate: startDate,
                endDate: endDate
              }
            });
          }
        }, {
          key: "getSolexBCStats",
          value: function getSolexBCStats(company, startDate, endDate) {
            return this.http.get(API_ACCOUNTING_URL + '/solex-bc', {
              params: {
                company: company,
                startDate: startDate,
                endDate: endDate
              }
            });
          }
        }, {
          key: "getVerizonDirectStats",
          value: function getVerizonDirectStats(company, startDate, endDate) {
            return this.http.get(API_ACCOUNTING_URL + '/verizon-direct', {
              params: {
                company: company,
                startDate: startDate,
                endDate: endDate
              }
            });
          }
        }, {
          key: "getSystem1Stats",
          value: function getSystem1Stats(company, startDate, endDate) {
            return this.http.get(API_ACCOUNTING_URL + '/system1', {
              params: {
                company: company,
                startDate: startDate,
                endDate: endDate
              }
            });
          }
        }]);

        return AccountingService;
      }();

      AccountingService.ɵfac = function AccountingService_Factory(t) {
        return new (t || AccountingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      AccountingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AccountingService,
        factory: AccountingService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountingService, [{
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


      var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
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
              'startDate': moment__WEBPACK_IMPORTED_MODULE_2__(startDate).format("YYYY-MM-DD"),
              'endDate': moment__WEBPACK_IMPORTED_MODULE_2__(endDate).format("YYYY-MM-DD")
            };
            return this.http.put(API_MANUAL_UPDATE_URL + '/stat-update', data);
          }
        }, {
          key: "updateManualSplit",
          value: function updateManualSplit(updateData) {
            var company = updateData.company,
                reportType = updateData.reportType,
                tag = updateData.tag,
                startDate = updateData.startDate,
                endDate = updateData.endDate;
            var data = {
              "company": company,
              "reportType": reportType,
              "tag": tag,
              'startDate': startDate,
              'endDate': endDate
            };
            return this.http.put(API_MANUAL_UPDATE_URL + '/split-update', data);
          }
        }]);

        return ManualUpdateService;
      }();

      ManualUpdateService.ɵfac = function ManualUpdateService_Factory(t) {
        return new (t || ManualUpdateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
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
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-admin-reporting-admin-reporting-module-es5.js.map