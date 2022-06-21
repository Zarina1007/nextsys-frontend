(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-publisher-reporting-publisher-reporting-module"],{

/***/ "./src/app/modules/publisher-reporting/publisher-reporting-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/publisher-reporting/publisher-reporting-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: PublisherReportingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublisherReportingRoutingModule", function() { return PublisherReportingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _publisher_reporting_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./publisher-reporting.component */ "./src/app/modules/publisher-reporting/publisher-reporting.component.ts");
/* harmony import */ var _publisher_publisher_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./publisher/publisher.component */ "./src/app/modules/publisher-reporting/publisher/publisher.component.ts");






const routes = [
    {
        path: '',
        component: _publisher_reporting_component__WEBPACK_IMPORTED_MODULE_2__["PublisherReportingComponent"],
        children: [
            {
                path: ':tagId',
                component: _publisher_publisher_component__WEBPACK_IMPORTED_MODULE_3__["PublisherComponent"],
                pathMatch: 'full',
            },
            { path: '', redirectTo: '', pathMatch: 'full' },
            { path: '**', redirectTo: '', pathMatch: 'full' },
        ]
    }
];
class PublisherReportingRoutingModule {
}
PublisherReportingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PublisherReportingRoutingModule });
PublisherReportingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PublisherReportingRoutingModule_Factory(t) { return new (t || PublisherReportingRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PublisherReportingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublisherReportingRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/publisher-reporting/publisher-reporting.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/publisher-reporting/publisher-reporting.component.ts ***!
  \******************************************************************************/
/*! exports provided: PublisherReportingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublisherReportingComponent", function() { return PublisherReportingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class PublisherReportingComponent {
    constructor() { }
    ngOnInit() {
    }
}
PublisherReportingComponent.ɵfac = function PublisherReportingComponent_Factory(t) { return new (t || PublisherReportingComponent)(); };
PublisherReportingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PublisherReportingComponent, selectors: [["app-publisher-reporting"]], decls: 1, vars: 0, template: function PublisherReportingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHVibGlzaGVyLXJlcG9ydGluZy9wdWJsaXNoZXItcmVwb3J0aW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublisherReportingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-publisher-reporting',
                templateUrl: './publisher-reporting.component.html',
                styleUrls: ['./publisher-reporting.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/publisher-reporting/publisher-reporting.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/publisher-reporting/publisher-reporting.module.ts ***!
  \***************************************************************************/
/*! exports provided: PublisherReportingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublisherReportingModule", function() { return PublisherReportingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _publisher_reporting_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./publisher-reporting-routing.module */ "./src/app/modules/publisher-reporting/publisher-reporting-routing.module.ts");
/* harmony import */ var _publisher_publisher_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./publisher/publisher.component */ "./src/app/modules/publisher-reporting/publisher/publisher.component.ts");
/* harmony import */ var _publisher_reporting_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./publisher-reporting.component */ "./src/app/modules/publisher-reporting/publisher-reporting.component.ts");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "./src/app/shared/modules/shared.module.ts");








class PublisherReportingModule {
}
PublisherReportingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PublisherReportingModule });
PublisherReportingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PublisherReportingModule_Factory(t) { return new (t || PublisherReportingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _publisher_reporting_routing_module__WEBPACK_IMPORTED_MODULE_3__["PublisherReportingRoutingModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PublisherReportingModule, { declarations: [_publisher_publisher_component__WEBPACK_IMPORTED_MODULE_4__["PublisherComponent"],
        _publisher_reporting_component__WEBPACK_IMPORTED_MODULE_5__["PublisherReportingComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _publisher_reporting_routing_module__WEBPACK_IMPORTED_MODULE_3__["PublisherReportingRoutingModule"],
        src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublisherReportingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _publisher_publisher_component__WEBPACK_IMPORTED_MODULE_4__["PublisherComponent"],
                    _publisher_reporting_component__WEBPACK_IMPORTED_MODULE_5__["PublisherReportingComponent"]
                ],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _publisher_reporting_routing_module__WEBPACK_IMPORTED_MODULE_3__["PublisherReportingRoutingModule"],
                    src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
                ],
                entryComponents: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/publisher-reporting/publisher/publisher.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/publisher-reporting/publisher/publisher.component.ts ***!
  \******************************************************************************/
/*! exports provided: PublisherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublisherComponent", function() { return PublisherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tag-management/tag-management.service */ "./src/app/modules/tag-management/tag-management.service.ts");
/* harmony import */ var _shared_service_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/users.service */ "./src/app/shared/service/users.service.ts");
/* harmony import */ var src_app_shared_service_admin_stats_perion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/admin-stats/perion.service */ "./src/app/shared/service/admin-stats/perion.service.ts");
/* harmony import */ var src_app_shared_service_admin_stats_lyon_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/admin-stats/lyon.service */ "./src/app/shared/service/admin-stats/lyon.service.ts");
/* harmony import */ var _shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/modules/reporting-filtering/reporting-filtering.component */ "./src/app/shared/modules/reporting-filtering/reporting-filtering.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_modules_reporting_revenue_chart_reporting_revenue_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/modules/reporting-revenue-chart/reporting-revenue-chart.component */ "./src/app/shared/modules/reporting-revenue-chart/reporting-revenue-chart.component.ts");











function PublisherComponent_app_reporting_revenue_chart_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-reporting-revenue-chart", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("chartData", ctx_r0.chartData);
} }
class PublisherComponent {
    constructor(route, tagManagementService, cdr, userService, perionService, lyonService) {
        this.route = route;
        this.tagManagementService = tagManagementService;
        this.cdr = cdr;
        this.userService = userService;
        this.perionService = perionService;
        this.lyonService = lyonService;
        this.loadingIndicator = true;
        this.range = {
            startDate: '',
            endDate: '',
        };
    }
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.route.params.subscribe((routeParams) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                //console.log("routeParams===>", routeParams)
                this.tagRows = yield this.getTagInformation(routeParams.tagId);
                this.selectedAdvertiser = this.tagRows.advertiser;
                this.selectedCompany = this.tagRows.company;
                if (this.selectedAdvertiser == "lyons") {
                    this.chartData = yield this.getLyonChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);
                }
                else if (this.selectedAdvertiser == "perion") {
                    this.chartData = yield this.getPerionChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);
                }
                this.refreshTable();
            }));
        });
    }
    getTagInformation(id) {
        return this.tagManagementService.getOneTag(id).toPromise().then((response) => {
            return response;
        }).catch((error) => {
            return error;
        });
    }
    updateReportingFiltering(range) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log('Update report filtering....');
            this.range = range;
            if (this.selectedAdvertiser == "lyons") {
                this.chartData = yield this.getLyonChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);
            }
            else if (this.selectedAdvertiser == "perion") {
                this.chartData = yield this.getPerionChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);
            }
            this.refreshTable();
        });
    }
    getLyonChartMetrics(company, startDate, endDate) {
        return this.lyonService.getAllStats(startDate, endDate).toPromise().then((response) => {
            this.allChart = response;
            var chartAllLyonStat = [];
            for (var tagSub of this.tagRows.subids) {
                if (tagSub['filterTag'] == "Contains") {
                    chartAllLyonStat = chartAllLyonStat.concat(this.allChart.filter(stat => stat.subid.includes(tagSub['subid'])));
                }
                else if (tagSub['filterTag'] == "StartsWith") {
                    chartAllLyonStat = chartAllLyonStat.concat(this.allChart.filter(stat => stat.subid.startsWith(tagSub['subid'])));
                }
                else if (tagSub['filterTag'] == "EndsWith") {
                    chartAllLyonStat = chartAllLyonStat.concat(this.allChart.filter(stat => stat.subid.endsWith(tagSub['subid'])));
                }
                else if (tagSub['filterTag'] == "ExactValue") {
                    chartAllLyonStat = chartAllLyonStat.concat(this.allChart.filter(stat => stat.subid == tagSub['subid']));
                }
            }
            //duplicated remove
            let filter_data = chartAllLyonStat.filter((obj, pos, arr) => {
                return arr
                    .map(mapObj => mapObj._id)
                    .indexOf(obj._id) == pos;
            });
            var helperChart = {};
            filter_data.map(f => {
                f.revenue = parseFloat(f.revenue);
                f.ctr = parseFloat(f.ctr);
                f.biddedCtr = parseFloat(f.biddedCTR);
            });
            var resultChart = filter_data.reduce(function (r, o) {
                var key = o.rptDate;
                if (!helperChart[key]) {
                    helperChart[key] = Object.assign({}, o); // create a copy of o
                    r.push(helperChart[key]);
                }
                else {
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
            for (var resVal of resultChart) {
                revenuePerDayVal.push(resVal.revenue);
                datesOfRevenueVal.push(resVal.rptDate);
                searchesPerDayVal.push(resVal.searches);
            }
            chartDataValue['revenuePerDay'] = revenuePerDayVal;
            chartDataValue['datesOfRevenue'] = datesOfRevenueVal;
            chartDataValue['searchesPerDay'] = searchesPerDayVal;
            return chartDataValue;
        })
            .catch((error) => {
            return error;
        });
    }
    refreshTable() {
        this.cdr.markForCheck();
    }
    getPerionChartMetrics(company, startDate, endDate) {
        return this.perionService
            .getChartMetrics(company, startDate, endDate)
            .toPromise()
            .then((response) => {
            return response;
        })
            .catch((error) => {
            return error;
        });
    }
}
PublisherComponent.ɵfac = function PublisherComponent_Factory(t) { return new (t || PublisherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_3__["TagManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_service_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_admin_stats_perion_service__WEBPACK_IMPORTED_MODULE_5__["PerionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_admin_stats_lyon_service__WEBPACK_IMPORTED_MODULE_6__["LyonService"])); };
PublisherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PublisherComponent, selectors: [["app-publisher"]], decls: 2, vars: 1, consts: [[3, "onDatesPicked"], [3, "chartData", 4, "ngIf"], [3, "chartData"]], template: function PublisherComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-reporting-filtering", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onDatesPicked", function PublisherComponent_Template_app_reporting_filtering_onDatesPicked_0_listener($event) { return ctx.updateReportingFiltering($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PublisherComponent_app_reporting_revenue_chart_1_Template, 1, 1, "app-reporting-revenue-chart", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.chartData);
    } }, directives: [_shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_7__["ReportingFilteringComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _shared_modules_reporting_revenue_chart_reporting_revenue_chart_component__WEBPACK_IMPORTED_MODULE_9__["ReportingRevenueChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHVibGlzaGVyLXJlcG9ydGluZy9wdWJsaXNoZXIvcHVibGlzaGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PublisherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-publisher',
                templateUrl: './publisher.component.html',
                styleUrls: ['./publisher.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_3__["TagManagementService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _shared_service_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] }, { type: src_app_shared_service_admin_stats_perion_service__WEBPACK_IMPORTED_MODULE_5__["PerionService"] }, { type: src_app_shared_service_admin_stats_lyon_service__WEBPACK_IMPORTED_MODULE_6__["LyonService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-publisher-reporting-publisher-reporting-module-es2015.js.map