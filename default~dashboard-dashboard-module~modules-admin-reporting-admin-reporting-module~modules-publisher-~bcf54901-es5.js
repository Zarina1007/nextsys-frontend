(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module~modules-admin-reporting-admin-reporting-module~modules-publisher-~bcf54901"], {
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
    "./src/app/shared/service/admin-stats/lyon.service.ts":
    /*!************************************************************!*\
      !*** ./src/app/shared/service/admin-stats/lyon.service.ts ***!
      \************************************************************/

    /*! exports provided: LyonService */

    /***/
    function srcAppSharedServiceAdminStatsLyonServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LyonService", function () {
        return LyonService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "./src/environments/environment.ts");

      var API_LYON_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/stats/admin/lyon");

      var LyonService = /*#__PURE__*/function () {
        function LyonService(http) {
          _classCallCheck(this, LyonService);

          this.http = http;
        }

        _createClass(LyonService, [{
          key: "testingRoute",
          value: function testingRoute() {
            console.log('being tested');
            console.log(API_LYON_URL);
            return this.http.get('http://localhost:3000/stats/admin/lyon/asd');
          } // getAllLyonStats(company, startDate, endDate): Observable<any> {
          //   return this.http.get<any>(API_LYON_URL + '/all', {
          //     params: { company: company, startDate: startDate, endDate: endDate },
          //   });
          // }

        }, {
          key: "getAllStats",
          value: function getAllStats(startDate, endDate) {
            return this.http.get(API_LYON_URL + '/all', {
              params: {
                startDate: startDate,
                endDate: endDate
              }
            });
          }
        }, {
          key: "getAllDashboardStats",
          value: function getAllDashboardStats() {
            return this.http.get(API_LYON_URL + '/all-stat');
          }
        }, {
          key: "updateAllLyonStats",
          value: function updateAllLyonStats(company, startDate, endDate) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('company', company).set('startDate', startDate).set('endDate', endDate);
            return this.http.put(API_LYON_URL + '/', {
              params: params
            });
          }
        }, {
          key: "getSummaryMetrics",
          value: function getSummaryMetrics(company) {
            return this.http.get(API_LYON_URL + '/summary_metrics', {
              params: {
                company: company
              }
            });
          }
        }, {
          key: "getChartMetrics",
          value: function getChartMetrics(company, startDate, endDate) {
            return this.http.get(API_LYON_URL + '/chart_metrics', {
              params: {
                company: company,
                startDate: startDate,
                endDate: endDate
              }
            });
          }
        }]);

        return LyonService;
      }();

      LyonService.ɵfac = function LyonService_Factory(t) {
        return new (t || LyonService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      LyonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: LyonService,
        factory: LyonService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LyonService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/service/admin-stats/perion.service.ts":
    /*!**************************************************************!*\
      !*** ./src/app/shared/service/admin-stats/perion.service.ts ***!
      \**************************************************************/

    /*! exports provided: PerionService */

    /***/
    function srcAppSharedServiceAdminStatsPerionServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerionService", function () {
        return PerionService;
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

      var API_COMPANY_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/stats/admin/perion");

      var PerionService = /*#__PURE__*/function () {
        function PerionService(http) {
          _classCallCheck(this, PerionService);

          this.http = http;
        }

        _createClass(PerionService, [{
          key: "testingRoute",
          value: function testingRoute() {
            console.log('being tested');
            console.log(API_COMPANY_URL);
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/stats/admin/perion/asd"));
          }
        }, {
          key: "getAllPerionStats",
          value: function getAllPerionStats(company, startDate, endDate) {
            return this.http.get(API_COMPANY_URL + '/', {
              params: {
                company: company,
                startDate: startDate,
                endDate: endDate
              }
            });
          }
        }, {
          key: "getPerTagPerionStats",
          value: function getPerTagPerionStats(company, startDate, endDate) {
            return this.http.get(API_COMPANY_URL + '/per-tag-stat', {
              params: {
                company: company,
                startDate: startDate,
                endDate: endDate
              }
            });
          }
        }, {
          key: "getAllDashboardStats",
          value: function getAllDashboardStats(company) {
            return this.http.get(API_COMPANY_URL + '/all-stat', {
              params: {
                company: company
              }
            });
          }
        }, {
          key: "updateAllPerionStats",
          value: function updateAllPerionStats(company, startDate, endDate) {
            // let params = new HttpParams()
            //   .set('company', company)
            //   .set('startDate', startDate)
            //   .set('endDate', endDate);
            //   console.log("===============", params)
            var data = {
              "company": company,
              'startDate': startDate,
              'endDate': endDate
            };
            return this.http.put(API_COMPANY_URL + '/', data);
          }
        }, {
          key: "getSummaryMetrics",
          value: function getSummaryMetrics(company) {
            return this.http.get(API_COMPANY_URL + '/summary_metrics', {
              params: {
                company: company
              }
            });
          }
        }, {
          key: "getChartMetrics",
          value: function getChartMetrics(company, startDate, endDate) {
            return this.http.get(API_COMPANY_URL + '/chart_metrics', {
              params: {
                company: company,
                startDate: startDate,
                endDate: endDate
              }
            });
          }
        }, {
          key: "getPerionChart",
          value: function getPerionChart(company) {
            return this.http.get(API_COMPANY_URL + '/chart_perion_stat', {
              params: {
                company: company
              }
            });
          }
        }]);

        return PerionService;
      }();

      PerionService.ɵfac = function PerionService_Factory(t) {
        return new (t || PerionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      PerionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: PerionService,
        factory: PerionService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PerionService, [{
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
        }, {
          key: "getAllDashboardStats",
          value: function getAllDashboardStats() {
            return this.http.get(API_RUBI_URL + '/all-stat');
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
    "./src/app/shared/service/admin-stats/verizon.service.ts":
    /*!***************************************************************!*\
      !*** ./src/app/shared/service/admin-stats/verizon.service.ts ***!
      \***************************************************************/

    /*! exports provided: VerizonService */

    /***/
    function srcAppSharedServiceAdminStatsVerizonServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerizonService", function () {
        return VerizonService;
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

      var API_VERIZON_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/stats/admin/verizon");

      var VerizonService = /*#__PURE__*/function () {
        function VerizonService(http) {
          _classCallCheck(this, VerizonService);

          this.http = http;
        }

        _createClass(VerizonService, [{
          key: "getChartMetrics",
          value: function getChartMetrics(company, startDate, endDate) {
            return this.http.get(API_VERIZON_URL + '/chart_metrics', {
              params: {
                company: company,
                startDate: startDate,
                endDate: endDate
              }
            });
          }
        }, {
          key: "getAllVerizonStats",
          value: function getAllVerizonStats(company, startDate, endDate) {
            return this.http.get(API_VERIZON_URL + '/', {
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
            return this.http.get(API_VERIZON_URL + '/summary_metrics', {
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
            return this.http.put(API_VERIZON_URL + '/', data);
          }
        }, {
          key: "getAllDashboardStats",
          value: function getAllDashboardStats() {
            return this.http.get(API_VERIZON_URL + '/all-stat');
          }
        }]);

        return VerizonService;
      }();

      VerizonService.ɵfac = function VerizonService_Factory(t) {
        return new (t || VerizonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      VerizonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: VerizonService,
        factory: VerizonService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VerizonService, [{
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
//# sourceMappingURL=default~dashboard-dashboard-module~modules-admin-reporting-admin-reporting-module~modules-publisher-~bcf54901-es5.js.map