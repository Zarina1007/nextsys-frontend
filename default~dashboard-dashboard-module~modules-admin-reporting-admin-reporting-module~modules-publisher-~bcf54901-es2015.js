(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module~modules-admin-reporting-admin-reporting-module~modules-publisher-~bcf54901"],{

/***/ "./src/app/modules/tag-management/tag-management.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/tag-management/tag-management.service.ts ***!
  \******************************************************************/
/*! exports provided: TagManagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagManagementService", function() { return TagManagementService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_service_tags_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/service/tags.service */ "./src/app/shared/service/tags.service.ts");



class TagManagementService {
    constructor(tagsService) {
        this.tagsService = tagsService;
    }
    // Get all Chrome objects
    getChromeBrowserVersion() {
        return this.tagsService.getChrome();
    }
    // Get all Chrome objects
    getFirefoxBrowserVersion() {
        return this.tagsService.getFirefox();
    }
    addTag(tag) {
        return this.tagsService.add(tag);
    }
    addPublisherTag(tagId, companyId, publisherId) {
        return this.tagsService.addPublisherTag(tagId, companyId, publisherId);
    }
    getAllTags() {
        return this.tagsService.getAllTags();
    }
    getCompanyTags(companyKey) {
        return this.tagsService.getCompanyTags(companyKey);
    }
    deleteTag(tagKey) {
        return this.tagsService.deleteTag(tagKey);
    }
    getOneTag(tag) {
        return this.tagsService.getOneTag(tag);
    }
    updateOneTag(tag) {
        return this.tagsService.updateOneTag(tag);
    }
    addTemplate(template) {
        return this.tagsService.addTemplate(template);
    }
    getAllTemplates() {
        return this.tagsService.getAllTemplates();
    }
    deleteTemplate(templateKey) {
        return this.tagsService.deleteTemplate(templateKey);
    }
    getOneTemplate(template) {
        return this.tagsService.getOneTemplate(template);
    }
}
TagManagementService.ɵfac = function TagManagementService_Factory(t) { return new (t || TagManagementService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_service_tags_service__WEBPACK_IMPORTED_MODULE_1__["TagsService"])); };
TagManagementService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TagManagementService, factory: TagManagementService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagManagementService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_service_tags_service__WEBPACK_IMPORTED_MODULE_1__["TagsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/service/admin-stats/apptitude.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/service/admin-stats/apptitude.service.ts ***!
  \*****************************************************************/
/*! exports provided: ApptitudeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApptitudeService", function() { return ApptitudeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const API_APPTITDE_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/stats/admin/apptitude`;
class ApptitudeService {
    constructor(http) {
        this.http = http;
    }
    getChartMetrics(company, startDate, endDate) {
        return this.http.get(API_APPTITDE_URL + '/chart_metrics', {
            params: { company: company, startDate: startDate, endDate: endDate },
        });
    }
    getPublisherApptitudeStats(company, startDate, endDate) {
        return this.http.get(API_APPTITDE_URL + '/all-publishers', {
            params: { company: company, startDate: startDate, endDate: endDate },
        });
    }
    getApptitudeStats(company, startDate, endDate) {
        return this.http.get(API_APPTITDE_URL + '/', {
            params: { company: company, startDate: startDate, endDate: endDate },
        });
    }
    getSummaryMetrics(company, startDate, endDate) {
        return this.http.get(API_APPTITDE_URL + '/summary_metrics', {
            params: { company: company, startDate: startDate, endDate: endDate },
        });
    }
    getAllDashboardStats() {
        return this.http.get(API_APPTITDE_URL + '/all-stat');
    }
}
ApptitudeService.ɵfac = function ApptitudeService_Factory(t) { return new (t || ApptitudeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ApptitudeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApptitudeService, factory: ApptitudeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApptitudeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/service/admin-stats/lyon.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/service/admin-stats/lyon.service.ts ***!
  \************************************************************/
/*! exports provided: LyonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LyonService", function() { return LyonService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");





const API_LYON_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/stats/admin/lyon`;
class LyonService {
    constructor(http) {
        this.http = http;
    }
    getAllStats(startDate, endDate) {
        return this.http.get(API_LYON_URL + '/all', {
            params: { startDate: startDate, endDate: endDate },
        });
    }
    getAllPublisherStats(startDate, endDate) {
        return this.http.get(API_LYON_URL + '/all-publishers', {
            params: { startDate: startDate, endDate: endDate },
        });
    }
    getAllDashboardStats() {
        return this.http.get(API_LYON_URL + '/all-stat');
    }
    updateAllLyonStats(company, startDate, endDate) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .set('company', company)
            .set('startDate', startDate)
            .set('endDate', endDate);
        return this.http.put(API_LYON_URL + '/', { params });
    }
    getSummaryMetrics(company, startDate, endDate) {
        return this.http.get(API_LYON_URL + '/summary_metrics', {
            params: { company: company, startDate: startDate, endDate: endDate },
        });
    }
    getChartMetrics(company, startDate, endDate) {
        return this.http.get(API_LYON_URL + '/chart_metrics', {
            params: { company: company, startDate: startDate, endDate: endDate },
        });
    }
}
LyonService.ɵfac = function LyonService_Factory(t) { return new (t || LyonService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
LyonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LyonService, factory: LyonService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LyonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/service/admin-stats/perion.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/service/admin-stats/perion.service.ts ***!
  \**************************************************************/
/*! exports provided: PerionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerionService", function() { return PerionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const API_PERION_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/stats/admin/perion`;
class PerionService {
    constructor(http) {
        this.http = http;
    }
    testingRoute() {
        console.log('being tested');
        console.log(API_PERION_URL);
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/stats/admin/perion/asd`);
    }
    getAllPerionStats(company, startDate, endDate) {
        return this.http.get(API_PERION_URL + '/', {
            params: { company: company, startDate: startDate, endDate: endDate },
        });
    }
    getPerTagPerionStats(company, startDate, endDate) {
        return this.http.get(API_PERION_URL + '/per-tag-stat', {
            params: { company: company, startDate: startDate, endDate: endDate },
        });
    }
    getAllDashboardStats(company) {
        return this.http.get(API_PERION_URL + '/all-stat', { params: { company: company } });
    }
    updateAllPerionStats(company, startDate, endDate) {
        var data = {
            "company": company,
            'startDate': startDate,
            'endDate': endDate
        };
        return this.http.put(API_PERION_URL + '/', data);
    }
    getSummaryMetrics(company, startDate, endDate) {
        return this.http.get(API_PERION_URL + '/summary_metrics', {
            params: { company: company, startDate: startDate, endDate: endDate },
        });
    }
    getChartMetrics(company, startDate, endDate) {
        return this.http.get(API_PERION_URL + '/chart_metrics', {
            params: { company: company, startDate: startDate, endDate: endDate },
        });
    }
    getPerionChart(company) {
        return this.http.get(API_PERION_URL + '/chart_perion_stat', {
            params: { company: company },
        });
    }
}
PerionService.ɵfac = function PerionService_Factory(t) { return new (t || PerionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PerionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PerionService, factory: PerionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PerionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/service/admin-stats/rubi.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/service/admin-stats/rubi.service.ts ***!
  \************************************************************/
/*! exports provided: RubiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RubiService", function() { return RubiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const API_RUBI_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/stats/admin/rubi`;
class RubiService {
    constructor(http) {
        this.http = http;
    }
    getChartMetrics(company, startDate, endDate) {
        return this.http.get(API_RUBI_URL + '/chart_metrics', {
            params: { company: company, startDate: startDate, endDate: endDate },
        });
    }
    getAllRubiStats(company, startDate, endDate) {
        return this.http.get(API_RUBI_URL + '/all-publishers', {
            params: { company: company, startDate: startDate, endDate: endDate },
        });
    }
    getRubiStats(company, startDate, endDate) {
        return this.http.get(API_RUBI_URL + '/', {
            params: { company: company, startDate: startDate, endDate: endDate },
        });
    }
    getSummaryMetrics(company, startDate, endDate) {
        return this.http.get(API_RUBI_URL + '/summary_metrics', {
            params: { company: company, startDate: startDate, endDate: endDate },
        });
    }
    updateAllPerionStats(company, startDate, endDate) {
        var data = {
            "company": company,
            'startDate': startDate,
            'endDate': endDate
        };
        return this.http.put(API_RUBI_URL + '/', data);
    }
    getAllDashboardStats() {
        return this.http.get(API_RUBI_URL + '/all-stat');
    }
}
RubiService.ɵfac = function RubiService_Factory(t) { return new (t || RubiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
RubiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RubiService, factory: RubiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RubiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/service/admin-stats/solexbc.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/service/admin-stats/solexbc.service.ts ***!
  \***************************************************************/
/*! exports provided: SolexBCService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolexBCService", function() { return SolexBCService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const API_SOLEXBC_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/stats/admin/solexbc`;
class SolexBCService {
    constructor(http) {
        this.http = http;
    }
    getChartMetrics(company, startDate, endDate) {
        return this.http.get(API_SOLEXBC_URL + '/chart_metrics', {
            params: { company: company, startDate: startDate, endDate: endDate },
        });
    }
    getAllSolexBCStats(company, startDate, endDate) {
        return this.http.get(API_SOLEXBC_URL + '/all-publishers', {
            params: { company: company, startDate: startDate, endDate: endDate },
        });
    }
    getSolexBCStats(company, startDate, endDate) {
        return this.http.get(API_SOLEXBC_URL + '/', {
            params: { company: company, startDate: startDate, endDate: endDate },
        });
    }
    getSummaryMetrics(company, startDate, endDate) {
        return this.http.get(API_SOLEXBC_URL + '/summary_metrics', {
            params: { company: company, startDate: startDate, endDate: endDate },
        });
    }
    getAllDashboardStats() {
        return this.http.get(API_SOLEXBC_URL + '/all-stat');
    }
}
SolexBCService.ɵfac = function SolexBCService_Factory(t) { return new (t || SolexBCService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
SolexBCService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SolexBCService, factory: SolexBCService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SolexBCService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/service/admin-stats/system1.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/service/admin-stats/system1.service.ts ***!
  \***************************************************************/
/*! exports provided: System1Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "System1Service", function() { return System1Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const API_SYSTEM1_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/stats/admin/system1`;
class System1Service {
    constructor(http) {
        this.http = http;
    }
    getAllSystem1Stats(company, startDate, endDate) {
        return this.http.get(API_SYSTEM1_URL + '/', {
            params: { company: company, startDate: startDate, endDate: endDate },
        });
    }
    getAllDashboardStats() {
        return this.http.get(API_SYSTEM1_URL + '/all-stat');
    }
    getSystem1PublisherStats(company, startDate, endDate) {
        return this.http.get(API_SYSTEM1_URL + '/all-publishers', {
            params: { company: company, startDate: startDate, endDate: endDate },
        });
    }
    getSummaryMetrics(company, startDate, endDate) {
        return this.http.get(API_SYSTEM1_URL + '/summary_metrics', {
            params: { company: company, startDate: startDate, endDate: endDate },
        });
    }
}
System1Service.ɵfac = function System1Service_Factory(t) { return new (t || System1Service)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
System1Service.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: System1Service, factory: System1Service.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](System1Service, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/service/admin-stats/verizon.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/service/admin-stats/verizon.service.ts ***!
  \***************************************************************/
/*! exports provided: VerizonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerizonService", function() { return VerizonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const API_VERIZON_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/stats/admin/verizon`;
class VerizonService {
    constructor(http) {
        this.http = http;
    }
    getChartMetrics(company, startDate, endDate) {
        return this.http.get(API_VERIZON_URL + '/chart_metrics', {
            params: { company: company, startDate: startDate, endDate: endDate },
        });
    }
    getAllVerizonStats(company, startDate, endDate) {
        return this.http.get(API_VERIZON_URL + '/', {
            params: { company: company, startDate: startDate, endDate: endDate },
        });
    }
    getAllPublisherVerizonStats(company, startDate, endDate) {
        return this.http.get(API_VERIZON_URL + '/all-publishers', {
            params: { company: company, startDate: startDate, endDate: endDate },
        });
    }
    getSummaryMetrics(company, startDate, endDate) {
        return this.http.get(API_VERIZON_URL + '/summary_metrics', {
            params: { company: company, startDate: startDate, endDate: endDate },
        });
    }
    updateAllPerionStats(company, startDate, endDate) {
        var data = {
            "company": company,
            'startDate': startDate,
            'endDate': endDate
        };
        return this.http.put(API_VERIZON_URL + '/', data);
    }
    getAllDashboardStats() {
        return this.http.get(API_VERIZON_URL + '/all-stat');
    }
}
VerizonService.ɵfac = function VerizonService_Factory(t) { return new (t || VerizonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
VerizonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VerizonService, factory: VerizonService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VerizonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~dashboard-dashboard-module~modules-admin-reporting-admin-reporting-module~modules-publisher-~bcf54901-es2015.js.map