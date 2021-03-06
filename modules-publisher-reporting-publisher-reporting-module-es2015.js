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
PublisherReportingRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: PublisherReportingRoutingModule });
PublisherReportingRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function PublisherReportingRoutingModule_Factory(t) { return new (t || PublisherReportingRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](PublisherReportingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PublisherReportingRoutingModule, [{
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
PublisherReportingComponent.??fac = function PublisherReportingComponent_Factory(t) { return new (t || PublisherReportingComponent)(); };
PublisherReportingComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PublisherReportingComponent, selectors: [["app-publisher-reporting"]], decls: 1, vars: 0, template: function PublisherReportingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHVibGlzaGVyLXJlcG9ydGluZy9wdWJsaXNoZXItcmVwb3J0aW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PublisherReportingComponent, [{
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
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");









class PublisherReportingModule {
}
PublisherReportingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: PublisherReportingModule });
PublisherReportingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function PublisherReportingModule_Factory(t) { return new (t || PublisherReportingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _publisher_reporting_routing_module__WEBPACK_IMPORTED_MODULE_3__["PublisherReportingRoutingModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](PublisherReportingModule, { declarations: [_publisher_publisher_component__WEBPACK_IMPORTED_MODULE_4__["PublisherComponent"],
        _publisher_reporting_component__WEBPACK_IMPORTED_MODULE_5__["PublisherReportingComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _publisher_reporting_routing_module__WEBPACK_IMPORTED_MODULE_3__["PublisherReportingRoutingModule"],
        src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PublisherReportingModule, [{
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
                    src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"]
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
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _shared_modules_reporting_revenue_chart_reporting_revenue_chart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/modules/reporting-revenue-chart/reporting-revenue-chart.component */ "./src/app/shared/modules/reporting-revenue-chart/reporting-revenue-chart.component.ts");












const _c0 = ["expandableTable"];
function PublisherComponent_app_reporting_revenue_chart_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-reporting-revenue-chart", 16);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("chartData", ctx_r0.chartData);
} }
function PublisherComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "Test");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function PublisherComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function PublisherComponent_ng_template_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r22); const row_r19 = ctx.row; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r21.toggleExpandRow(row_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const expanded_r20 = ctx.expanded;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classProp"]("datatable-icon-right", !expanded_r20)("datatable-icon-down", expanded_r20);
} }
function PublisherComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](0, " Date ");
} }
function PublisherComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const value_r24 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](2, 1, value_r24));
} }
function PublisherComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](0, " Subid ");
} }
function PublisherComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const value_r26 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](value_r26);
} }
function PublisherComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](0, " Tag ");
} }
function PublisherComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const value_r28 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](value_r28);
} }
function PublisherComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](0, " Publisher ");
} }
function PublisherComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const value_r30 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](value_r30);
} }
function PublisherComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](0, " Spilt ");
} }
function PublisherComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const value_r32 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](2, 1, value_r32) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](3, 3, 0, "1.0-0"));
} }
function PublisherComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](0, " Revenue ");
} }
function PublisherComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const value_r34 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](2, 1, value_r34, "USD"));
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
        this.selectedCompany = this.getSelectedCompanyFromLocalStorage();
    }
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.route.params.subscribe((routeParams) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                //console.log("routeParams===>", routeParams)
                this.statData = [];
                this.tagRows = yield this.getTagInformation(routeParams.tagId);
                this.selectedAdvertiser = this.tagRows.advertiser;
                this.selectedCompany = this.tagRows.company;
                if (this.selectedAdvertiser == "lyons") {
                    this.chartData = yield this.getLyonChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);
                    this.statData = yield this.getAllLyonStats(this.range.startDate, this.range.endDate, this.tagRows);
                }
                else if (this.selectedAdvertiser == "perion") {
                    this.chartData = yield this.getPerionChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);
                    this.statData = yield this.getAllPerionStats(this.range.startDate, this.range.endDate, this.tagRows);
                }
                this.refreshTable();
            }));
        });
    }
    //Gets the Selected Company from Local Storage
    getSelectedCompanyFromLocalStorage() {
        return this.userService.getSelectedCompanyFromLocalStorage();
    }
    toggleExpandRow(row) {
        console.log('Toggled Expand Row!', row);
        this.table.rowDetail.toggleExpandRow(row);
    }
    onDetailToggle(event) {
        console.log('Detail Toggled', event);
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
                this.statData = yield this.getAllLyonStats(this.range.startDate, this.range.endDate, this.tagRows);
            }
            else if (this.selectedAdvertiser == "perion") {
                this.chartData = yield this.getPerionChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);
                this.statData = yield this.getAllPerionStats(this.range.startDate, this.range.endDate, this.tagRows);
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
    getAllPerionStats(startDate, endDate, tag) {
        return this.perionService.getPerTagPerionStats(this.selectedCompany, startDate, endDate).toPromise().then((response) => {
            this.allPerionStatData = response;
            var allPerionStat = [];
            for (var tagSub of tag.subids) {
                if (tagSub.filterTag == "Contains") {
                    allPerionStat = allPerionStat.concat(this.allPerionStatData.filter(stat => stat.subid.includes(tagSub.subid)));
                    allPerionStat.map(stat => {
                        stat.publisher = tag.publisher ? tag.publisher[0].fullname : "No Publisher";
                        stat.tagname = tag.name;
                    });
                }
                else if (tagSub.filterTag == "StartsWith") {
                    allPerionStat = allPerionStat.concat(this.allPerionStatData.filter(stat => stat.subid.startsWith(tagSub.subid)));
                    allPerionStat.map(stat => {
                        stat.publisher = tag.publisher ? tag.publisher[0].fullname : "No Publisher";
                        stat.tagname = tag.name;
                    });
                }
                else if (tagSub.filterTag == "EndsWith") {
                    allPerionStat = allPerionStat.concat(this.allPerionStatData.filter(stat => stat.subid.endsWith(tagSub.subid)));
                    allPerionStat.map(stat => {
                        stat.publisher = tag.publisher ? tag.publisher[0].fullname : "No Publisher";
                        stat.tagname = tag.name;
                    });
                }
                else if (tagSub.filterTag == "ExactValue") {
                    allPerionStat = allPerionStat.concat(this.allPerionStatData.filter(stat => stat.subid == tagSub.subid));
                    allPerionStat.map(stat => {
                        stat.publisher = tag.publisher ? tag.publisher[0].fullname : "No Publisher";
                        stat.tagname = tag.name;
                    });
                }
            }
            //duplicated remove
            let filtered_data = allPerionStat.filter((obj, pos, arr) => {
                return arr
                    .map(mapObj => mapObj._id)
                    .indexOf(obj._id) == pos;
            });
            var helper = {};
            filtered_data.map(f => {
                f.revenue = parseFloat(f.revenue);
                f.rptDate = f.date;
            });
            var resultAll = filtered_data.reduce(function (prev, current) {
                var key = (current.date).toString() + '-' + current.subid;
                if (!helper[key]) {
                    helper[key] = Object.assign({}, current); // create a copy of o
                    prev.push(helper[key]);
                }
                else {
                    helper[key].clicks += parseInt(current.clicks);
                    if (current.revenue) {
                        helper[key].revenue += current.revenue;
                    }
                    helper[key].split += parseInt(current.split);
                }
                return prev;
            }, []);
            return resultAll.slice().sort((a, b) => b.date - a.date);
        })
            .catch((error) => {
            return error;
        });
    }
    getAllLyonStats(startDate, endDate, tag) {
        return this.lyonService.getAllStats(startDate, endDate).toPromise().then((response) => {
            this.allLyonStatData = response;
            var allLyonStat = [];
            for (var tagSub of tag.subids) {
                if (tagSub.filterTag == "Contains") {
                    allLyonStat = allLyonStat.concat(this.allLyonStatData.filter(stat => stat.subid.includes(tagSub.subid)));
                    allLyonStat.map(stat => {
                        stat.publisher = tag.publisher ? tag.publisher[0].fullname : "";
                        stat.tagname = tag.name;
                    });
                }
                else if (tagSub.filterTag == "StartsWith") {
                    allLyonStat = allLyonStat.concat(this.allLyonStatData.filter(stat => stat.subid.startsWith(tagSub.subid)));
                    allLyonStat.map(stat => {
                        stat.publisher = tag.publisher ? tag.publisher[0].fullname : "";
                        stat.tagname = tag.name;
                    });
                }
                else if (tagSub.filterTag == "EndsWith") {
                    allLyonStat = allLyonStat.concat(this.allLyonStatData.filter(stat => stat.subid.endsWith(tagSub.subid)));
                    allLyonStat.map(stat => {
                        stat.publisher = tag.publisher ? tag.publisher[0].fullname : "";
                        stat.tagname = tag.name;
                    });
                }
                else if (tagSub.filterTag == "ExactValue") {
                    allLyonStat = allLyonStat.concat(this.allLyonStatData.filter(stat => stat.subid == tagSub.subid));
                    allLyonStat.map(stat => {
                        stat.publisher = tag.publisher ? tag.publisher[0].fullname : "";
                        stat.tagname = tag.name;
                    });
                }
            }
            //duplicated remove
            let filtered_data = allLyonStat.filter((obj, pos, arr) => {
                return arr
                    .map(mapObj => mapObj._id)
                    .indexOf(obj._id) == pos;
            });
            var helper = {};
            filtered_data.map(f => {
                f.revenue = parseFloat(f.revenue);
                f.ctr = parseFloat(f.ctr);
                f.biddedCtr = parseFloat(f.biddedCTR);
            });
            var resultAll = filtered_data.reduce(function (prev, current) {
                var key = (current.rptDate).toString() + '-' + current.subid;
                if (!helper[key]) {
                    helper[key] = Object.assign({}, current); // create a copy of o
                    prev.push(helper[key]);
                }
                else {
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
                    helper[key].split += parseInt(current.split);
                }
                return prev;
            }, []);
            return resultAll.slice().sort((a, b) => b.rptDate - a.rptDate);
        })
            .catch((error) => {
            return error;
        });
    }
}
PublisherComponent.??fac = function PublisherComponent_Factory(t) { return new (t || PublisherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_3__["TagManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_shared_service_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_shared_service_admin_stats_perion_service__WEBPACK_IMPORTED_MODULE_5__["PerionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_shared_service_admin_stats_lyon_service__WEBPACK_IMPORTED_MODULE_6__["LyonService"])); };
PublisherComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: PublisherComponent, selectors: [["app-publisher"]], viewQuery: function PublisherComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 27, vars: 14, consts: [[3, "onDatesPicked"], [3, "chartData", 4, "ngIf"], [1, "material", "fullscreen", "expandable", 2, "top", "30px", "height", "500px", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "scrollbarH", "rows"], ["expandableTable", ""], [3, "rowHeight", "toggle"], ["myDetailRow", ""], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["ngx-datatable-cell-template", ""], ["name", "rptDate"], ["ngx-datatable-header-template", ""], ["name", "subid"], ["name", "tagname"], ["name", "publisher"], ["name", "spilt"], ["name", "revenue"], [3, "chartData"], [2, "padding-left", "35px"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 3, "click"]], template: function PublisherComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "app-reporting-filtering", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("onDatesPicked", function PublisherComponent_Template_app_reporting_filtering_onDatesPicked_0_listener($event) { return ctx.updateReportingFiltering($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, PublisherComponent_app_reporting_revenue_chart_1_Template, 1, 1, "app-reporting-revenue-chart", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "ngx-datatable", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "ngx-datatable-row-detail", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("toggle", function PublisherComponent_Template_ngx_datatable_row_detail_toggle_4_listener($event) { return ctx.onDetailToggle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](6, PublisherComponent_ng_template_6_Template, 6, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "ngx-datatable-column", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](8, PublisherComponent_ng_template_8_Template, 1, 4, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "ngx-datatable-column", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](10, PublisherComponent_ng_template_10_Template, 1, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](11, PublisherComponent_ng_template_11_Template, 3, 3, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "ngx-datatable-column", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](13, PublisherComponent_ng_template_13_Template, 1, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](14, PublisherComponent_ng_template_14_Template, 2, 1, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "ngx-datatable-column", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](16, PublisherComponent_ng_template_16_Template, 1, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](17, PublisherComponent_ng_template_17_Template, 2, 1, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "ngx-datatable-column", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](19, PublisherComponent_ng_template_19_Template, 1, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](20, PublisherComponent_ng_template_20_Template, 2, 1, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "ngx-datatable-column", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](22, PublisherComponent_ng_template_22_Template, 1, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](23, PublisherComponent_ng_template_23_Template, 4, 6, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "ngx-datatable-column", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](25, PublisherComponent_ng_template_25_Template, 1, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](26, PublisherComponent_ng_template_26_Template, 3, 4, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.chartData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("columnMode", "force")("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("scrollbarH", true)("rows", ctx.statData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("rowHeight", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("width", 50)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);
    } }, directives: [_shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_7__["ReportingFilteringComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__["DatatableRowDetailDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__["DatatableRowDetailTemplateDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__["DataTableColumnCellDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__["DataTableColumnHeaderDirective"], _shared_modules_reporting_revenue_chart_reporting_revenue_chart_component__WEBPACK_IMPORTED_MODULE_10__["ReportingRevenueChartComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHVibGlzaGVyLXJlcG9ydGluZy9wdWJsaXNoZXIvcHVibGlzaGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](PublisherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-publisher',
                templateUrl: './publisher.component.html',
                styleUrls: ['./publisher.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_3__["TagManagementService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _shared_service_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] }, { type: src_app_shared_service_admin_stats_perion_service__WEBPACK_IMPORTED_MODULE_5__["PerionService"] }, { type: src_app_shared_service_admin_stats_lyon_service__WEBPACK_IMPORTED_MODULE_6__["LyonService"] }]; }, { table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['expandableTable']
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=modules-publisher-reporting-publisher-reporting-module-es2015.js.map