(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-publisher-api-publisher-api-module"],{

/***/ "./src/app/modules/publisher-api/publisher-api-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/publisher-api/publisher-api-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: PublisherApiRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublisherApiRoutingModule", function() { return PublisherApiRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _publisher_api_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./publisher-api.component */ "./src/app/modules/publisher-api/publisher-api.component.ts");
/* harmony import */ var _tag_api_tag_api_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tag-api/tag-api.component */ "./src/app/modules/publisher-api/tag-api/tag-api.component.ts");






const routes = [
    {
        path: '',
        component: _publisher_api_component__WEBPACK_IMPORTED_MODULE_2__["PublisherApiComponent"],
        children: [
            {
                path: ':fullname/:apiKey/:tagId',
                component: _tag_api_tag_api_component__WEBPACK_IMPORTED_MODULE_3__["TagApiComponent"],
                pathMatch: 'full',
            },
            { path: '', redirectTo: '', pathMatch: 'full' },
            { path: '**', redirectTo: '', pathMatch: 'full' },
        ]
    }
];
class PublisherApiRoutingModule {
}
PublisherApiRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PublisherApiRoutingModule });
PublisherApiRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PublisherApiRoutingModule_Factory(t) { return new (t || PublisherApiRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PublisherApiRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublisherApiRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/publisher-api/publisher-api.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/publisher-api/publisher-api.component.ts ***!
  \******************************************************************/
/*! exports provided: PublisherApiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublisherApiComponent", function() { return PublisherApiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class PublisherApiComponent {
    constructor() { }
    ngOnInit() {
    }
}
PublisherApiComponent.ɵfac = function PublisherApiComponent_Factory(t) { return new (t || PublisherApiComponent)(); };
PublisherApiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PublisherApiComponent, selectors: [["app-publisher-api"]], decls: 1, vars: 0, template: function PublisherApiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHVibGlzaGVyLWFwaS9wdWJsaXNoZXItYXBpLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublisherApiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-publisher-api',
                templateUrl: './publisher-api.component.html',
                styleUrls: ['./publisher-api.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/publisher-api/publisher-api.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/publisher-api/publisher-api.module.ts ***!
  \***************************************************************/
/*! exports provided: PublisherApiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublisherApiModule", function() { return PublisherApiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _publisher_api_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./publisher-api-routing.module */ "./src/app/modules/publisher-api/publisher-api-routing.module.ts");
/* harmony import */ var _publisher_api_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./publisher-api.component */ "./src/app/modules/publisher-api/publisher-api.component.ts");
/* harmony import */ var _tag_api_tag_api_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tag-api/tag-api.component */ "./src/app/modules/publisher-api/tag-api/tag-api.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "./src/app/shared/modules/shared.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");









class PublisherApiModule {
}
PublisherApiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PublisherApiModule });
PublisherApiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PublisherApiModule_Factory(t) { return new (t || PublisherApiModule)(); }, providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _publisher_api_routing_module__WEBPACK_IMPORTED_MODULE_2__["PublisherApiRoutingModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PublisherApiModule, { declarations: [_publisher_api_component__WEBPACK_IMPORTED_MODULE_3__["PublisherApiComponent"], _tag_api_tag_api_component__WEBPACK_IMPORTED_MODULE_4__["TagApiComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _publisher_api_routing_module__WEBPACK_IMPORTED_MODULE_2__["PublisherApiRoutingModule"],
        src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublisherApiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_publisher_api_component__WEBPACK_IMPORTED_MODULE_3__["PublisherApiComponent"], _tag_api_tag_api_component__WEBPACK_IMPORTED_MODULE_4__["TagApiComponent"]],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _publisher_api_routing_module__WEBPACK_IMPORTED_MODULE_2__["PublisherApiRoutingModule"],
                    src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"]
                ],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]],
                entryComponents: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/publisher-api/tag-api/tag-api.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/publisher-api/tag-api/tag-api.component.ts ***!
  \********************************************************************/
/*! exports provided: TagApiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagApiComponent", function() { return TagApiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/users.service */ "./src/app/shared/service/users.service.ts");
/* harmony import */ var src_app_shared_service_admin_stats_publisher_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/admin-stats/publisher-api.service */ "./src/app/shared/service/admin-stats/publisher-api.service.ts");
/* harmony import */ var src_app_shared_service_export_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/export-data.service */ "./src/app/shared/service/export-data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../tag-management/tag-management.service */ "./src/app/modules/tag-management/tag-management.service.ts");
/* harmony import */ var _shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/modules/reporting-filtering/reporting-filtering.component */ "./src/app/shared/modules/reporting-filtering/reporting-filtering.component.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _shared_modules_reporting_publisher_revenue_chart_reporting_publisher_revenue_chart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/modules/reporting-publisher-revenue-chart/reporting-publisher-revenue-chart.component */ "./src/app/shared/modules/reporting-publisher-revenue-chart/reporting-publisher-revenue-chart.component.ts");












const _c0 = ["expandableTable"];
function TagApiComponent_app_reporting_publisher_revenue_chart_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-reporting-publisher-revenue-chart", 16);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("chartData", ctx_r0.chartData);
} }
function TagApiComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Date ");
} }
function TagApiComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r19 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r19));
} }
function TagApiComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Subid ");
} }
function TagApiComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r21 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r21);
} }
function TagApiComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Clicks ");
} }
function TagApiComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r23 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r23));
} }
function TagApiComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Searches ");
} }
function TagApiComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r25 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r25);
} }
function TagApiComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Country ");
} }
function TagApiComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r27 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r27);
} }
function TagApiComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " CPC ");
} }
function TagApiComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r29 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r29, "USD") || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, 0, "USD"));
} }
function TagApiComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " CTR ");
} }
function TagApiComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r31 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r31, "1.2-2") || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, 0, "1.2-2"));
} }
function TagApiComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Revenue ");
} }
function TagApiComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r33 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r33, "USD"));
} }
class TagApiComponent {
    constructor(route, cdr, userService, publisherApiService, exportDataService, datePipe, currencyPipe, percentPipe, tagManagementService) {
        this.route = route;
        this.cdr = cdr;
        this.userService = userService;
        this.publisherApiService = publisherApiService;
        this.exportDataService = exportDataService;
        this.datePipe = datePipe;
        this.currencyPipe = currencyPipe;
        this.percentPipe = percentPipe;
        this.tagManagementService = tagManagementService;
        this.loadingIndicator = true;
        this.statData = [];
        this.range = {
            startDate: '',
            endDate: '',
        };
        this.selectedCompany = this.getSelectedCompanyFromLocalStorage();
    }
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.route.params.subscribe((routeParams) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.paramTagId = routeParams.tagId;
                this.paramApiKey = routeParams.apiKey;
                this.tagRows = yield this.getTagInformation(routeParams.tagId);
                this.statData = [];
                this.statData = yield this.getPublisherAPIData(this.selectedCompany, this.paramApiKey, this.paramTagId, this.range.startDate, this.range.endDate);
                this.chartData = yield this.getChartMetrics(this.selectedCompany, this.paramApiKey, this.paramTagId, this.range.startDate, this.range.endDate);
                this.loadingIndicator = false;
                this.cdr.markForCheck();
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
    getChartMetrics(company, apiKey, tagId, startDate, endDate) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const response = yield this.publisherApiService.getPublisherAPIStats(company, apiKey, tagId, startDate, endDate).toPromise();
                var helperChart = {};
                var resultChart = response.reduce(function (r, o) {
                    var key = o.date;
                    if (!helperChart[key]) {
                        helperChart[key] = Object.assign({}, o); // create a copy of o
                        r.push(helperChart[key]);
                    }
                    else {
                        helperChart[key].searches += parseInt(o.searches);
                        if (o.revenue) {
                            helperChart[key].revenue += parseFloat(o.revenue);
                        }
                    }
                    return r;
                }, []);
                var revenuePerDayVal = [];
                var publisherRevenuePerDayVal = [];
                var datesOfRevenueVal = [];
                var searchesPerDayVal = [];
                var chartDataValue = {};
                for (var resVal of resultChart) {
                    revenuePerDayVal.push(0);
                    publisherRevenuePerDayVal.push(resVal.revenue);
                    datesOfRevenueVal.push(resVal.date);
                    searchesPerDayVal.push(resVal.searches);
                }
                chartDataValue['revenuePerDay'] = revenuePerDayVal;
                chartDataValue['publisherRevenuePerDay'] = publisherRevenuePerDayVal;
                chartDataValue['datesOfRevenue'] = datesOfRevenueVal;
                chartDataValue['searchesPerDay'] = searchesPerDayVal;
                return chartDataValue;
            }
            catch (error) {
                return error;
            }
        });
    }
    exportToCsv() {
        let exportCsv = [];
        for (var statOne of this.statData) {
            let stat = {
                date: this.datePipe.transform(statOne.date, "dd MMM yyyy"),
                subid: statOne.subid,
                country: statOne.country,
                clicks: statOne.clicks,
                searches: statOne.searches,
                cpc: this.currencyPipe.transform(statOne.cpc ? statOne.cpc : 0),
                ctr: this.percentPipe.transform(statOne.ctr, "1.2-2"),
                revenue: statOne.revenue,
            };
            exportCsv.push(stat);
        }
        this.exportDataService.exportToCsv(exportCsv, this.tagRows.nickName ? this.tagRows.nickName : this.tagRows.name, ['date', 'subid', 'country', 'clicks', 'searches', 'cpc', 'ctr', 'revenue']);
    }
    updateReportingFiltering(range) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.range = range;
            this.loadingIndicator = true;
            this.statData = [];
            if (this.paramApiKey && this.paramTagId) {
                this.statData = yield this.getPublisherAPIData(this.selectedCompany, this.paramApiKey, this.paramTagId, this.range.startDate, this.range.endDate);
                this.chartData = yield this.getChartMetrics(this.selectedCompany, this.paramApiKey, this.paramTagId, this.range.startDate, this.range.endDate);
                this.loadingIndicator = false;
                this.cdr.markForCheck();
            }
        });
    }
    //Gets the Selected Company from Local Storage
    getSelectedCompanyFromLocalStorage() {
        return this.userService.getSelectedCompanyFromLocalStorage();
    }
    getPublisherAPIData(company, apiKey, tagId, startDate, endDate) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const response = yield this.publisherApiService.getPublisherAPIStats(company, apiKey, tagId, startDate, endDate).toPromise();
                return response.slice().sort((a, b) => b.date - a.date);
            }
            catch (error) {
                return error;
            }
        });
    }
    toggleExpandRow(row) {
        // console.log('Toggled Expand Row!', row);
        this.table.rowDetail.toggleExpandRow(row);
    }
    onDetailToggle(event) {
        // console.log('Detail Toggled', event);
    }
}
TagApiComponent.ɵfac = function TagApiComponent_Factory(t) { return new (t || TagApiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_admin_stats_publisher_api_service__WEBPACK_IMPORTED_MODULE_4__["PublisherAPIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_export_data_service__WEBPACK_IMPORTED_MODULE_5__["ExportDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["PercentPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_7__["TagManagementService"])); };
TagApiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TagApiComponent, selectors: [["app-tag-api"]], viewQuery: function TagApiComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 31, vars: 9, consts: [[3, "onDatesPicked"], [3, "chartData", 4, "ngIf"], [1, "row", "py-6"], [1, "btn", "btn-sm", "btn-primary", "mx-3", 3, "click"], [1, "material", "fullscreen", "expandable", 2, "top", "10px", "height", "500px", 3, "loadingIndicator", "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "scrollbarH", "rows"], ["expandableTable", ""], ["name", "date"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], ["name", "subid"], ["name", "clicks"], ["name", "searches"], ["name", "country"], ["name", "cpc"], ["name", "ctr"], ["name", "revenue"], [3, "chartData"]], template: function TagApiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-reporting-filtering", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onDatesPicked", function TagApiComponent_Template_app_reporting_filtering_onDatesPicked_0_listener($event) { return ctx.updateReportingFiltering($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TagApiComponent_app_reporting_publisher_revenue_chart_1_Template, 1, 1, "app-reporting-publisher-revenue-chart", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TagApiComponent_Template_button_click_3_listener() { return ctx.exportToCsv(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Export Stats ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ngx-datatable", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ngx-datatable-column", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TagApiComponent_ng_template_8_Template, 1, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TagApiComponent_ng_template_9_Template, 3, 3, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ngx-datatable-column", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, TagApiComponent_ng_template_11_Template, 1, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, TagApiComponent_ng_template_12_Template, 2, 1, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ngx-datatable-column", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, TagApiComponent_ng_template_14_Template, 1, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, TagApiComponent_ng_template_15_Template, 3, 3, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ngx-datatable-column", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, TagApiComponent_ng_template_17_Template, 1, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, TagApiComponent_ng_template_18_Template, 2, 1, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ngx-datatable-column", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, TagApiComponent_ng_template_20_Template, 1, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, TagApiComponent_ng_template_21_Template, 2, 1, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ngx-datatable-column", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, TagApiComponent_ng_template_23_Template, 1, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, TagApiComponent_ng_template_24_Template, 4, 7, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ngx-datatable-column", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, TagApiComponent_ng_template_26_Template, 1, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, TagApiComponent_ng_template_27_Template, 4, 7, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ngx-datatable-column", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, TagApiComponent_ng_template_29_Template, 1, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, TagApiComponent_ng_template_30_Template, 3, 4, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.chartData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loadingIndicator", ctx.loadingIndicator)("columnMode", "force")("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("scrollbarH", true)("rows", ctx.statData);
    } }, directives: [_shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_8__["ReportingFilteringComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__["DataTableColumnHeaderDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__["DataTableColumnCellDirective"], _shared_modules_reporting_publisher_revenue_chart_reporting_publisher_revenue_chart_component__WEBPACK_IMPORTED_MODULE_10__["ReportingPublisherRevenueChartComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["PercentPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHVibGlzaGVyLWFwaS90YWctYXBpL3RhZy1hcGkuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TagApiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-tag-api',
                templateUrl: './tag-api.component.html',
                styleUrls: ['./tag-api.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] }, { type: src_app_shared_service_admin_stats_publisher_api_service__WEBPACK_IMPORTED_MODULE_4__["PublisherAPIService"] }, { type: src_app_shared_service_export_data_service__WEBPACK_IMPORTED_MODULE_5__["ExportDataService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["PercentPipe"] }, { type: _tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_7__["TagManagementService"] }]; }, { table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['expandableTable']
        }] }); })();


/***/ }),

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

/***/ "./src/app/shared/service/admin-stats/publisher-api.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/service/admin-stats/publisher-api.service.ts ***!
  \*********************************************************************/
/*! exports provided: PublisherAPIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublisherAPIService", function() { return PublisherAPIService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const API_PUBLISHER_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/publisher-api`;
class PublisherAPIService {
    constructor(http) {
        this.http = http;
    }
    getPublisherAPIStats(company, apiKey, tagId, startDate, endDate) {
        return this.http.get(API_PUBLISHER_URL + '/', {
            params: { company: company, apiKey: apiKey, tag: tagId, startDate: startDate, endDate: endDate },
        });
    }
    getSummaryMetrics(company, startDate, endDate) {
        return this.http.get(API_PUBLISHER_URL + '/summary_metrics', {
            params: { company: company, startDate: startDate, endDate: endDate },
        });
    }
}
PublisherAPIService.ɵfac = function PublisherAPIService_Factory(t) { return new (t || PublisherAPIService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PublisherAPIService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PublisherAPIService, factory: PublisherAPIService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublisherAPIService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-publisher-api-publisher-api-module-es2015.js.map