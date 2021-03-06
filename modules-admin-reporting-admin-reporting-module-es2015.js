(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-admin-reporting-admin-reporting-module"],{

/***/ "./src/app/modules/admin-reporting/admin-reporting-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/admin-reporting/admin-reporting-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: AdminReportingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminReportingRoutingModule", function() { return AdminReportingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _apptitude_apptitude_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apptitude/apptitude.component */ "./src/app/modules/admin-reporting/apptitude/apptitude.component.ts");
/* harmony import */ var _hopkins_hopkins_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hopkins/hopkins.component */ "./src/app/modules/admin-reporting/hopkins/hopkins.component.ts");
/* harmony import */ var _imgage_advantage_imgage_advantage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imgage-advantage/imgage-advantage.component */ "./src/app/modules/admin-reporting/imgage-advantage/imgage-advantage.component.ts");
/* harmony import */ var _media_net_media_net_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./media-net/media-net.component */ "./src/app/modules/admin-reporting/media-net/media-net.component.ts");
/* harmony import */ var _perion_perion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perion/perion.component */ "./src/app/modules/admin-reporting/perion/perion.component.ts");
/* harmony import */ var _admin_reporting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-reporting.component */ "./src/app/modules/admin-reporting/admin-reporting.component.ts");
/* harmony import */ var _third_party_third_party_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./third-party/third-party.component */ "./src/app/modules/admin-reporting/third-party/third-party.component.ts");
/* harmony import */ var _bing_direct_bing_direct_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bing-direct/bing-direct.component */ "./src/app/modules/admin-reporting/bing-direct/bing-direct.component.ts");
/* harmony import */ var _lyons_lyons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lyons/lyons.component */ "./src/app/modules/admin-reporting/lyons/lyons.component.ts");
/* harmony import */ var _rubi_rubi_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rubi/rubi.component */ "./src/app/modules/admin-reporting/rubi/rubi.component.ts");
/* harmony import */ var _verizon_direct_verizon_direct_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./verizon-direct/verizon-direct.component */ "./src/app/modules/admin-reporting/verizon-direct/verizon-direct.component.ts");
/* harmony import */ var _manual_update_manual_update_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./manual-update/manual-update.component */ "./src/app/modules/admin-reporting/manual-update/manual-update.component.ts");
/* harmony import */ var _manual_split_update_manual_split_update_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./manual-split-update/manual-split-update.component */ "./src/app/modules/admin-reporting/manual-split-update/manual-split-update.component.ts");

















const routes = [
    {
        path: '',
        component: _admin_reporting_component__WEBPACK_IMPORTED_MODULE_7__["AdminReportingComponent"],
        children: [
            {
                path: 'perion',
                component: _perion_perion_component__WEBPACK_IMPORTED_MODULE_6__["PerionComponent"],
            },
            {
                path: 'image-advantage',
                component: _imgage_advantage_imgage_advantage_component__WEBPACK_IMPORTED_MODULE_4__["ImgageAdvantageComponent"],
            },
            {
                path: 'hopkins',
                component: _hopkins_hopkins_component__WEBPACK_IMPORTED_MODULE_3__["HopkinsComponent"],
            },
            {
                path: 'apptitude',
                component: _apptitude_apptitude_component__WEBPACK_IMPORTED_MODULE_2__["ApptitudeComponent"],
            },
            {
                path: 'media-net',
                component: _media_net_media_net_component__WEBPACK_IMPORTED_MODULE_5__["MediaNetComponent"],
            },
            {
                path: 'bing-direct',
                component: _bing_direct_bing_direct_component__WEBPACK_IMPORTED_MODULE_9__["BingDirectComponent"],
            },
            {
                path: 'lyons',
                component: _lyons_lyons_component__WEBPACK_IMPORTED_MODULE_10__["LyonsComponent"],
            },
            {
                path: 'rubi',
                component: _rubi_rubi_component__WEBPACK_IMPORTED_MODULE_11__["RubiComponent"],
            },
            {
                path: 'verizon-direct',
                component: _verizon_direct_verizon_direct_component__WEBPACK_IMPORTED_MODULE_12__["VerizonDirectComponent"],
            },
            {
                path: 'third-party',
                component: _third_party_third_party_component__WEBPACK_IMPORTED_MODULE_8__["ThirdPartyComponent"],
            },
            {
                path: 'manual-stat-update',
                component: _manual_update_manual_update_component__WEBPACK_IMPORTED_MODULE_13__["ManualUpdateComponent"],
            },
            {
                path: 'manual-split-update',
                component: _manual_split_update_manual_split_update_component__WEBPACK_IMPORTED_MODULE_14__["ManualSplitUpdateComponent"],
            },
            { path: '', redirectTo: '', pathMatch: 'full' },
            { path: '**', redirectTo: '', pathMatch: 'full' },
        ],
    },
];
class AdminReportingRoutingModule {
}
AdminReportingRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AdminReportingRoutingModule });
AdminReportingRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AdminReportingRoutingModule_Factory(t) { return new (t || AdminReportingRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AdminReportingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AdminReportingRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/admin-reporting/admin-reporting.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/admin-reporting/admin-reporting.module.ts ***!
  \*******************************************************************/
/*! exports provided: AdminReportingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminReportingModule", function() { return AdminReportingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _admin_reporting_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-reporting-routing.module */ "./src/app/modules/admin-reporting/admin-reporting-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _perion_perion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./perion/perion.component */ "./src/app/modules/admin-reporting/perion/perion.component.ts");
/* harmony import */ var _imgage_advantage_imgage_advantage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imgage-advantage/imgage-advantage.component */ "./src/app/modules/admin-reporting/imgage-advantage/imgage-advantage.component.ts");
/* harmony import */ var _hopkins_hopkins_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hopkins/hopkins.component */ "./src/app/modules/admin-reporting/hopkins/hopkins.component.ts");
/* harmony import */ var _apptitude_apptitude_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./apptitude/apptitude.component */ "./src/app/modules/admin-reporting/apptitude/apptitude.component.ts");
/* harmony import */ var _all_reporting_all_reporting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./all-reporting/all-reporting.component */ "./src/app/modules/admin-reporting/all-reporting/all-reporting.component.ts");
/* harmony import */ var _media_net_media_net_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./media-net/media-net.component */ "./src/app/modules/admin-reporting/media-net/media-net.component.ts");
/* harmony import */ var _third_party_third_party_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./third-party/third-party.component */ "./src/app/modules/admin-reporting/third-party/third-party.component.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "./src/app/shared/modules/shared.module.ts");
/* harmony import */ var _bing_direct_bing_direct_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bing-direct/bing-direct.component */ "./src/app/modules/admin-reporting/bing-direct/bing-direct.component.ts");
/* harmony import */ var _lyons_lyons_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lyons/lyons.component */ "./src/app/modules/admin-reporting/lyons/lyons.component.ts");
/* harmony import */ var _rubi_rubi_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./rubi/rubi.component */ "./src/app/modules/admin-reporting/rubi/rubi.component.ts");
/* harmony import */ var _verizon_direct_verizon_direct_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./verizon-direct/verizon-direct.component */ "./src/app/modules/admin-reporting/verizon-direct/verizon-direct.component.ts");
/* harmony import */ var _manual_update_manual_update_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./manual-update/manual-update.component */ "./src/app/modules/admin-reporting/manual-update/manual-update.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-inline-svg */ "./node_modules/ng-inline-svg/__ivy_ngcc__/lib_esmodule/index.js");
/* harmony import */ var _manual_split_update_manual_split_update_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./manual-split-update/manual-split-update.component */ "./src/app/modules/admin-reporting/manual-split-update/manual-split-update.component.ts");





























class AdminReportingModule {
}
AdminReportingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AdminReportingModule });
AdminReportingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AdminReportingModule_Factory(t) { return new (t || AdminReportingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _admin_reporting_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminReportingRoutingModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["NgxDatatableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOptionModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"],
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_26__["InlineSVGModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AdminReportingModule, { declarations: [_perion_perion_component__WEBPACK_IMPORTED_MODULE_4__["PerionComponent"],
        _imgage_advantage_imgage_advantage_component__WEBPACK_IMPORTED_MODULE_5__["ImgageAdvantageComponent"],
        _hopkins_hopkins_component__WEBPACK_IMPORTED_MODULE_6__["HopkinsComponent"],
        _apptitude_apptitude_component__WEBPACK_IMPORTED_MODULE_7__["ApptitudeComponent"],
        _all_reporting_all_reporting_component__WEBPACK_IMPORTED_MODULE_8__["AllReportingComponent"],
        _media_net_media_net_component__WEBPACK_IMPORTED_MODULE_9__["MediaNetComponent"],
        _third_party_third_party_component__WEBPACK_IMPORTED_MODULE_10__["ThirdPartyComponent"],
        _bing_direct_bing_direct_component__WEBPACK_IMPORTED_MODULE_19__["BingDirectComponent"],
        _lyons_lyons_component__WEBPACK_IMPORTED_MODULE_20__["LyonsComponent"],
        _rubi_rubi_component__WEBPACK_IMPORTED_MODULE_21__["RubiComponent"],
        _verizon_direct_verizon_direct_component__WEBPACK_IMPORTED_MODULE_22__["VerizonDirectComponent"],
        _manual_update_manual_update_component__WEBPACK_IMPORTED_MODULE_23__["ManualUpdateComponent"],
        _manual_split_update_manual_split_update_component__WEBPACK_IMPORTED_MODULE_27__["ManualSplitUpdateComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _admin_reporting_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminReportingRoutingModule"],
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["NgxDatatableModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
        src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOptionModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"],
        ng_inline_svg__WEBPACK_IMPORTED_MODULE_26__["InlineSVGModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AdminReportingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _perion_perion_component__WEBPACK_IMPORTED_MODULE_4__["PerionComponent"],
                    _imgage_advantage_imgage_advantage_component__WEBPACK_IMPORTED_MODULE_5__["ImgageAdvantageComponent"],
                    _hopkins_hopkins_component__WEBPACK_IMPORTED_MODULE_6__["HopkinsComponent"],
                    _apptitude_apptitude_component__WEBPACK_IMPORTED_MODULE_7__["ApptitudeComponent"],
                    _all_reporting_all_reporting_component__WEBPACK_IMPORTED_MODULE_8__["AllReportingComponent"],
                    _media_net_media_net_component__WEBPACK_IMPORTED_MODULE_9__["MediaNetComponent"],
                    _third_party_third_party_component__WEBPACK_IMPORTED_MODULE_10__["ThirdPartyComponent"],
                    _bing_direct_bing_direct_component__WEBPACK_IMPORTED_MODULE_19__["BingDirectComponent"],
                    _lyons_lyons_component__WEBPACK_IMPORTED_MODULE_20__["LyonsComponent"],
                    _rubi_rubi_component__WEBPACK_IMPORTED_MODULE_21__["RubiComponent"],
                    _verizon_direct_verizon_direct_component__WEBPACK_IMPORTED_MODULE_22__["VerizonDirectComponent"],
                    _manual_update_manual_update_component__WEBPACK_IMPORTED_MODULE_23__["ManualUpdateComponent"],
                    _manual_split_update_manual_split_update_component__WEBPACK_IMPORTED_MODULE_27__["ManualSplitUpdateComponent"],
                ],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _admin_reporting_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminReportingRoutingModule"],
                    _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["NgxDatatableModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
                    src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOptionModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"],
                    ng_inline_svg__WEBPACK_IMPORTED_MODULE_26__["InlineSVGModule"]
                ],
                entryComponents: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/admin-reporting/all-reporting/all-reporting.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/admin-reporting/all-reporting/all-reporting.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AllReportingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllReportingComponent", function() { return AllReportingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AllReportingComponent {
    constructor() { }
    ngOnInit() {
    }
}
AllReportingComponent.??fac = function AllReportingComponent_Factory(t) { return new (t || AllReportingComponent)(); };
AllReportingComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AllReportingComponent, selectors: [["app-all-reporting"]], decls: 2, vars: 0, template: function AllReportingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "all-reporting works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL2FsbC1yZXBvcnRpbmcvYWxsLXJlcG9ydGluZy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AllReportingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-all-reporting',
                templateUrl: './all-reporting.component.html',
                styleUrls: ['./all-reporting.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/admin-reporting/apptitude/apptitude.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/admin-reporting/apptitude/apptitude.component.ts ***!
  \**************************************************************************/
/*! exports provided: ApptitudeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApptitudeComponent", function() { return ApptitudeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var _shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/modules/reporting-filtering/reporting-filtering.component */ "./src/app/shared/modules/reporting-filtering/reporting-filtering.component.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








const _c0 = ["expandableTable"];
function ApptitudeComponent_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Test");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ApptitudeComponent_ng_template_47_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ApptitudeComponent_ng_template_47_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r23); const row_r20 = ctx.row; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r22.toggleExpandRow(row_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const expanded_r21 = ctx.expanded;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("datatable-icon-right", !expanded_r21)("datatable-icon-down", expanded_r21);
} }
function ApptitudeComponent_ng_template_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Publisher ");
} }
function ApptitudeComponent_ng_template_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const value_r25 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](value_r25);
} }
function ApptitudeComponent_ng_template_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Tag ");
} }
function ApptitudeComponent_ng_template_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const value_r27 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](value_r27);
} }
function ApptitudeComponent_ng_template_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Total Searches ");
} }
function ApptitudeComponent_ng_template_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const value_r29 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, value_r29));
} }
function ApptitudeComponent_ng_template_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Monetized Searches ");
} }
function ApptitudeComponent_ng_template_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const value_r31 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, value_r31));
} }
function ApptitudeComponent_ng_template_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Clicks ");
} }
function ApptitudeComponent_ng_template_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const value_r33 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, value_r33));
} }
function ApptitudeComponent_ng_template_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const column_r34 = ctx.column;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](column_r34.name);
} }
function ApptitudeComponent_ng_template_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "strong", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](1, "percent");
} if (rf & 2) {
    const row_r36 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](1, 1, row_r36["clicks"] / row_r36["totalSearches"], "2.2-2"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);
} }
function ApptitudeComponent_ng_template_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Revenue ");
} }
function ApptitudeComponent_ng_template_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const value_r39 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](2, 1, value_r39, "USD"));
} }
class ApptitudeComponent {
    constructor() {
        this.rows = [
            {
                name: 'MNA',
                tag: 'BHS',
                totalSearches: '152311',
                monetizedSearches: '102316',
                revenue: '8623',
                clicks: 15684,
            },
        ];
        this.columns = [{ prop: 'name' }, { name: 'Gender' }];
        this.expanded = {};
    }
    ngOnInit() {
        let revenueByDayArray = Array.from({ length: 20 }, () => Math.floor(Math.random() * (8000 - 4000) + 4000));
        let searchesPerDay = Array.from({ length: 20 }, () => Math.floor(Math.random() * (100000 - 40000) + 40000));
        this.setChartOptions(10000, 100000, [
            'Nov 1, Nov 2, Nov 3, Nov 4',
            'Nov 5',
            'Nov 5',
            'Nov 6',
            'Nov 7',
            'Nov 8',
            'Nov 9',
            'Nov 10',
            'Nov 11',
            'Nov 12',
            'Nov 13',
            'Nov 14',
            'Nov 15',
            'Nov 16',
            'Nov 17',
            'Nov 18',
            'Nov 19',
            'Nov 20',
        ], revenueByDayArray, searchesPerDay);
    }
    toggleExpandRow(row) {
        console.log('Toggled Expand Row!', row);
        this.table.rowDetail.toggleExpandRow(row);
    }
    onDetailToggle(event) {
        console.log('Detail Toggled', event);
    }
    updateReportingFiltering(range) {
        // this.range = range;
        // this.getAllPerionStats(
        //   'manic_perion',
        //   this.range.startDate,
        //   this.range.endDate
        // );
        console.log('Report');
    }
    setChartOptions(maxRevenue, maxSearches, daysArray, revenueByDayArray, searchesPerDay) {
        this.chartDom = document.getElementById('main');
        this.myChart = echarts__WEBPACK_IMPORTED_MODULE_1__["init"](this.chartDom);
        this.option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999',
                    },
                },
            },
            toolbox: {
                feature: {
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true },
                },
            },
            legend: {
                data: ['Revenue', 'Searches'],
            },
            xAxis: [
                {
                    type: 'category',
                    data: daysArray,
                    axisPointer: {
                        type: 'shadow',
                    },
                },
            ],
            yAxis: [
                {
                    type: 'value',
                    name: 'Revenue',
                    min: 0,
                    max: maxRevenue,
                    interval: 25000,
                    axisLabel: {
                        formatter: '${value}',
                    },
                },
                {
                    type: 'value',
                    name: 'Searches',
                    min: 0,
                    max: maxSearches,
                    interval: 100000,
                    axisLabel: {
                        formatter: '{value}',
                    },
                },
            ],
            series: [
                {
                    name: 'Revenue',
                    type: 'bar',
                    data: revenueByDayArray,
                },
                {
                    name: 'Searches',
                    type: 'line',
                    yAxisIndex: 1,
                    data: searchesPerDay,
                },
            ],
        };
        this.option && this.myChart.setOption(this.option);
    }
}
ApptitudeComponent.??fac = function ApptitudeComponent_Factory(t) { return new (t || ApptitudeComponent)(); };
ApptitudeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ApptitudeComponent, selectors: [["app-apptitude"]], viewQuery: function ApptitudeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 69, vars: 13, consts: [[3, "onDatesPicked"], ["id", "main", 2, "width", "100%", "height", "300px"], [1, "row"], [1, "col-xl-6"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], [1, "material", "fullscreen", "expandable", 2, "top", "52px", "margin-bottom", "10px", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "scrollbarH", "rows"], ["expandableTable", ""], [3, "rowHeight", "toggle"], ["myDetailRow", ""], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["ngx-datatable-cell-template", ""], ["name", "name"], ["ngx-datatable-header-template", ""], ["name", "tag"], ["name", "totalSearches"], ["name", "monetizedSearches"], ["name", "clicks"], ["name", "CTR"], ["name", "revenue"], [2, "padding-left", "35px"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 3, "click"], [3, "innerHTML"]], template: function ApptitudeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-reporting-filtering", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("onDatesPicked", function ApptitudeComponent_Template_app_reporting_filtering_onDatesPicked_0_listener($event) { return ctx.updateReportingFiltering($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Month to Date Stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Revenue: $202,121.26");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Revenue Pace: $231,285.19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Profit: $29,109.59");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Profit Pace: $173,121.45");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Percentage Change: +21%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Last Month Stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Revenue: $167,542.23");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Profit: $22,954.45");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Percentage Change: +0%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "ngx-datatable", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "ngx-datatable-row-detail", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("toggle", function ApptitudeComponent_Template_ngx_datatable_row_detail_toggle_43_listener($event) { return ctx.onDetailToggle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](45, ApptitudeComponent_ng_template_45_Template, 6, 0, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "ngx-datatable-column", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](47, ApptitudeComponent_ng_template_47_Template, 1, 4, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "ngx-datatable-column", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](49, ApptitudeComponent_ng_template_49_Template, 1, 0, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](50, ApptitudeComponent_ng_template_50_Template, 2, 1, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "ngx-datatable-column", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](52, ApptitudeComponent_ng_template_52_Template, 1, 0, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](53, ApptitudeComponent_ng_template_53_Template, 2, 1, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "ngx-datatable-column", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](55, ApptitudeComponent_ng_template_55_Template, 1, 0, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](56, ApptitudeComponent_ng_template_56_Template, 3, 3, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "ngx-datatable-column", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](58, ApptitudeComponent_ng_template_58_Template, 1, 0, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](59, ApptitudeComponent_ng_template_59_Template, 3, 3, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "ngx-datatable-column", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](61, ApptitudeComponent_ng_template_61_Template, 1, 0, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](62, ApptitudeComponent_ng_template_62_Template, 3, 3, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "ngx-datatable-column", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](64, ApptitudeComponent_ng_template_64_Template, 2, 1, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](65, ApptitudeComponent_ng_template_65_Template, 2, 4, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "ngx-datatable-column", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](67, ApptitudeComponent_ng_template_67_Template, 1, 0, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](68, ApptitudeComponent_ng_template_68_Template, 3, 4, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("columnMode", "force")("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("scrollbarH", true)("rows", ctx.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rowHeight", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("width", 50)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);
    } }, directives: [_shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_2__["ReportingFilteringComponent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDivider"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DatatableRowDetailDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DatatableRowDetailTemplateDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DataTableColumnCellDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DataTableColumnHeaderDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL2FwcHRpdHVkZS9hcHB0aXR1ZGUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ApptitudeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-apptitude',
                templateUrl: './apptitude.component.html',
                styleUrls: ['./apptitude.component.scss'],
            }]
    }], function () { return []; }, { table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['expandableTable']
        }] }); })();


/***/ }),

/***/ "./src/app/modules/admin-reporting/bing-direct/bing-direct.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/admin-reporting/bing-direct/bing-direct.component.ts ***!
  \******************************************************************************/
/*! exports provided: BingDirectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BingDirectComponent", function() { return BingDirectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BingDirectComponent {
    constructor() { }
    ngOnInit() {
    }
}
BingDirectComponent.??fac = function BingDirectComponent_Factory(t) { return new (t || BingDirectComponent)(); };
BingDirectComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: BingDirectComponent, selectors: [["app-bing-direct"]], decls: 2, vars: 0, template: function BingDirectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "bing-direct works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL2JpbmctZGlyZWN0L2JpbmctZGlyZWN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BingDirectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bing-direct',
                templateUrl: './bing-direct.component.html',
                styleUrls: ['./bing-direct.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/admin-reporting/hopkins/hopkins.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/admin-reporting/hopkins/hopkins.component.ts ***!
  \**********************************************************************/
/*! exports provided: HopkinsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HopkinsComponent", function() { return HopkinsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var _shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/modules/reporting-filtering/reporting-filtering.component */ "./src/app/shared/modules/reporting-filtering/reporting-filtering.component.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








const _c0 = ["expandableTable"];
function HopkinsComponent_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Test");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function HopkinsComponent_ng_template_47_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HopkinsComponent_ng_template_47_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r23); const row_r20 = ctx.row; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r22.toggleExpandRow(row_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const expanded_r21 = ctx.expanded;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("datatable-icon-right", !expanded_r21)("datatable-icon-down", expanded_r21);
} }
function HopkinsComponent_ng_template_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Publisher ");
} }
function HopkinsComponent_ng_template_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const value_r25 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](value_r25);
} }
function HopkinsComponent_ng_template_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Tag ");
} }
function HopkinsComponent_ng_template_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const value_r27 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](value_r27);
} }
function HopkinsComponent_ng_template_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Total Searches ");
} }
function HopkinsComponent_ng_template_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const value_r29 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, value_r29));
} }
function HopkinsComponent_ng_template_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Monetized Searches ");
} }
function HopkinsComponent_ng_template_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const value_r31 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, value_r31));
} }
function HopkinsComponent_ng_template_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Clicks ");
} }
function HopkinsComponent_ng_template_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const value_r33 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, value_r33));
} }
function HopkinsComponent_ng_template_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const column_r34 = ctx.column;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](column_r34.name);
} }
function HopkinsComponent_ng_template_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "strong", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](1, "percent");
} if (rf & 2) {
    const row_r36 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](1, 1, row_r36["clicks"] / row_r36["totalSearches"], "2.2-2"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);
} }
function HopkinsComponent_ng_template_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Revenue ");
} }
function HopkinsComponent_ng_template_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const value_r39 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](2, 1, value_r39, "USD"));
} }
class HopkinsComponent {
    constructor() {
        this.rows = [
            {
                name: 'Greg',
                tag: 'XML Hopkins',
                totalSearches: '759123',
                monetizedSearches: '431231',
                revenue: '19623',
                clicks: 50351,
            },
        ];
        this.columns = [{ prop: 'name' }, { name: 'Gender' }];
        this.expanded = {};
    }
    ngOnInit() {
        let revenueByDayArray = Array.from({ length: 20 }, () => Math.floor(Math.random() * (8000 - 4000) + 4000));
        let searchesPerDay = Array.from({ length: 20 }, () => Math.floor(Math.random() * (100000 - 40000) + 40000));
        this.setChartOptions(10000, 100000, [
            'Nov 1, Nov 2, Nov 3, Nov 4',
            'Nov 5',
            'Nov 5',
            'Nov 6',
            'Nov 7',
            'Nov 8',
            'Nov 9',
            'Nov 10',
            'Nov 11',
            'Nov 12',
            'Nov 13',
            'Nov 14',
            'Nov 15',
            'Nov 16',
            'Nov 17',
            'Nov 18',
            'Nov 19',
            'Nov 20',
        ], revenueByDayArray, searchesPerDay);
    }
    toggleExpandRow(row) {
        console.log('Toggled Expand Row!', row);
        this.table.rowDetail.toggleExpandRow(row);
    }
    onDetailToggle(event) {
        console.log('Detail Toggled', event);
    }
    updateReportingFiltering(range) {
        // this.range = range;
        // this.getAllPerionStats(
        //   'manic_perion',
        //   this.range.startDate,
        //   this.range.endDate
        // );
        console.log('Report');
    }
    setChartOptions(maxRevenue, maxSearches, daysArray, revenueByDayArray, searchesPerDay) {
        this.chartDom = document.getElementById('main');
        this.myChart = echarts__WEBPACK_IMPORTED_MODULE_1__["init"](this.chartDom);
        this.option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999',
                    },
                },
            },
            toolbox: {
                feature: {
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true },
                },
            },
            legend: {
                data: ['Revenue', 'Searches'],
            },
            xAxis: [
                {
                    type: 'category',
                    data: daysArray,
                    axisPointer: {
                        type: 'shadow',
                    },
                },
            ],
            yAxis: [
                {
                    type: 'value',
                    name: 'Revenue',
                    min: 0,
                    max: maxRevenue,
                    interval: 25000,
                    axisLabel: {
                        formatter: '${value}',
                    },
                },
                {
                    type: 'value',
                    name: 'Searches',
                    min: 0,
                    max: maxSearches,
                    interval: 100000,
                    axisLabel: {
                        formatter: '{value}',
                    },
                },
            ],
            series: [
                {
                    name: 'Revenue',
                    type: 'bar',
                    data: revenueByDayArray,
                },
                {
                    name: 'Searches',
                    type: 'line',
                    yAxisIndex: 1,
                    data: searchesPerDay,
                },
            ],
        };
        this.option && this.myChart.setOption(this.option);
    }
}
HopkinsComponent.??fac = function HopkinsComponent_Factory(t) { return new (t || HopkinsComponent)(); };
HopkinsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HopkinsComponent, selectors: [["app-hopkins"]], viewQuery: function HopkinsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 69, vars: 13, consts: [[3, "onDatesPicked"], ["id", "main", 2, "width", "100%", "height", "300px"], [1, "row"], [1, "col-xl-6"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], [1, "material", "fullscreen", "expandable", 2, "top", "52px", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "scrollbarH", "rows"], ["expandableTable", ""], [3, "rowHeight", "toggle"], ["myDetailRow", ""], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["ngx-datatable-cell-template", ""], ["name", "name"], ["ngx-datatable-header-template", ""], ["name", "tag"], ["name", "totalSearches"], ["name", "monetizedSearches"], ["name", "clicks"], ["name", "CTR"], ["name", "revenue"], [2, "padding-left", "35px"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 3, "click"], [3, "innerHTML"]], template: function HopkinsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-reporting-filtering", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("onDatesPicked", function HopkinsComponent_Template_app_reporting_filtering_onDatesPicked_0_listener($event) { return ctx.updateReportingFiltering($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Month to Date Stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Revenue: $0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Revenue Pace: $0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Profit: $0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Profit Pace: $0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Percentage Change: +0%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Last Month Stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Revenue: $0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Profit: $0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Percentage Change: +11%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "ngx-datatable", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "ngx-datatable-row-detail", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("toggle", function HopkinsComponent_Template_ngx_datatable_row_detail_toggle_43_listener($event) { return ctx.onDetailToggle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](45, HopkinsComponent_ng_template_45_Template, 6, 0, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "ngx-datatable-column", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](47, HopkinsComponent_ng_template_47_Template, 1, 4, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "ngx-datatable-column", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](49, HopkinsComponent_ng_template_49_Template, 1, 0, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](50, HopkinsComponent_ng_template_50_Template, 2, 1, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "ngx-datatable-column", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](52, HopkinsComponent_ng_template_52_Template, 1, 0, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](53, HopkinsComponent_ng_template_53_Template, 2, 1, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "ngx-datatable-column", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](55, HopkinsComponent_ng_template_55_Template, 1, 0, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](56, HopkinsComponent_ng_template_56_Template, 3, 3, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "ngx-datatable-column", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](58, HopkinsComponent_ng_template_58_Template, 1, 0, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](59, HopkinsComponent_ng_template_59_Template, 3, 3, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "ngx-datatable-column", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](61, HopkinsComponent_ng_template_61_Template, 1, 0, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](62, HopkinsComponent_ng_template_62_Template, 3, 3, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "ngx-datatable-column", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](64, HopkinsComponent_ng_template_64_Template, 2, 1, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](65, HopkinsComponent_ng_template_65_Template, 2, 4, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "ngx-datatable-column", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](67, HopkinsComponent_ng_template_67_Template, 1, 0, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](68, HopkinsComponent_ng_template_68_Template, 3, 4, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("columnMode", "force")("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("scrollbarH", true)("rows", ctx.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rowHeight", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("width", 50)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);
    } }, directives: [_shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_2__["ReportingFilteringComponent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDivider"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DatatableRowDetailDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DatatableRowDetailTemplateDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DataTableColumnCellDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DataTableColumnHeaderDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL2hvcGtpbnMvaG9wa2lucy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HopkinsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hopkins',
                templateUrl: './hopkins.component.html',
                styleUrls: ['./hopkins.component.scss'],
            }]
    }], function () { return []; }, { table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['expandableTable']
        }] }); })();


/***/ }),

/***/ "./src/app/modules/admin-reporting/imgage-advantage/imgage-advantage.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/admin-reporting/imgage-advantage/imgage-advantage.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ImgageAdvantageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgageAdvantageComponent", function() { return ImgageAdvantageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = ["expandableTable"];
function ImgageAdvantageComponent_ng_template_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Test");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ImgageAdvantageComponent_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ImgageAdvantageComponent_ng_template_45_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r25); const row_r22 = ctx.row; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r24.toggleExpandRow(row_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const expanded_r23 = ctx.expanded;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("datatable-icon-right", !expanded_r23)("datatable-icon-down", expanded_r23);
} }
function ImgageAdvantageComponent_ng_template_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Publisher ");
} }
function ImgageAdvantageComponent_ng_template_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const value_r27 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](value_r27);
} }
function ImgageAdvantageComponent_ng_template_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Tag ");
} }
function ImgageAdvantageComponent_ng_template_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const value_r29 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](value_r29);
} }
function ImgageAdvantageComponent_ng_template_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Total Searches ");
} }
function ImgageAdvantageComponent_ng_template_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const value_r31 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, value_r31));
} }
function ImgageAdvantageComponent_ng_template_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Monetized Searches ");
} }
function ImgageAdvantageComponent_ng_template_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const value_r33 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, value_r33));
} }
function ImgageAdvantageComponent_ng_template_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Clicks ");
} }
function ImgageAdvantageComponent_ng_template_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const value_r35 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, value_r35));
} }
function ImgageAdvantageComponent_ng_template_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Follow On ");
} }
function ImgageAdvantageComponent_ng_template_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const value_r37 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](value_r37);
} }
function ImgageAdvantageComponent_ng_template_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const column_r38 = ctx.column;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](column_r38.name);
} }
function ImgageAdvantageComponent_ng_template_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "strong", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](1, "percent");
} if (rf & 2) {
    const row_r40 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](1, 1, row_r40["clicks"] / row_r40["totalSearches"], "2.2-2"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);
} }
function ImgageAdvantageComponent_ng_template_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Revenue ");
} }
function ImgageAdvantageComponent_ng_template_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const value_r43 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](2, 1, value_r43, "USD"));
} }
class ImgageAdvantageComponent {
    constructor() {
        this.rows = [
            {
                name: 'Greg',
                tag: 'YHS Organic',
                totalSearches: '536412',
                monetizedSearches: '501235',
                revenue: '52623',
                clicks: 50351,
                followOn: '13%',
            },
        ];
        this.columns = [{ prop: 'name' }, { name: 'Gender' }];
        this.expanded = {};
    }
    ngOnInit() { }
    toggleExpandRow(row) {
        console.log('Toggled Expand Row!', row);
        this.table.rowDetail.toggleExpandRow(row);
    }
    onDetailToggle(event) {
        console.log('Detail Toggled', event);
    }
}
ImgageAdvantageComponent.??fac = function ImgageAdvantageComponent_Factory(t) { return new (t || ImgageAdvantageComponent)(); };
ImgageAdvantageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ImgageAdvantageComponent, selectors: [["app-imgage-advantage"]], viewQuery: function ImgageAdvantageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 70, vars: 13, consts: [[1, "row"], [1, "col-xl-6"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], [1, "material", "fullscreen", "expandable", 2, "top", "52px", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "scrollbarH", "rows"], ["expandableTable", ""], [3, "rowHeight", "toggle"], ["myDetailRow", ""], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["ngx-datatable-cell-template", ""], ["name", "name"], ["ngx-datatable-header-template", ""], ["name", "tag"], ["name", "totalSearches"], ["name", "monetizedSearches"], ["name", "clicks"], ["name", "followOn"], ["name", "CTR"], ["name", "revenue"], [2, "padding-left", "35px"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 3, "click"], [3, "innerHTML"]], template: function ImgageAdvantageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Month to Date Stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Revenue: $103,201.26");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Revenue Pace: $131,285.19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Profit: $21,109.59");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Profit Pace: $173,121.45");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Percentage Change: +27%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Last Month Stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Revenue: $113,542.23");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Profit: $14,121.39");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Percentage Change: +11%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "ngx-datatable", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "ngx-datatable-row-detail", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("toggle", function ImgageAdvantageComponent_Template_ngx_datatable_row_detail_toggle_41_listener($event) { return ctx.onDetailToggle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](43, ImgageAdvantageComponent_ng_template_43_Template, 6, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "ngx-datatable-column", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](45, ImgageAdvantageComponent_ng_template_45_Template, 1, 4, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "ngx-datatable-column", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](47, ImgageAdvantageComponent_ng_template_47_Template, 1, 0, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](48, ImgageAdvantageComponent_ng_template_48_Template, 2, 1, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "ngx-datatable-column", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](50, ImgageAdvantageComponent_ng_template_50_Template, 1, 0, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](51, ImgageAdvantageComponent_ng_template_51_Template, 2, 1, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "ngx-datatable-column", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](53, ImgageAdvantageComponent_ng_template_53_Template, 1, 0, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](54, ImgageAdvantageComponent_ng_template_54_Template, 3, 3, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "ngx-datatable-column", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](56, ImgageAdvantageComponent_ng_template_56_Template, 1, 0, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](57, ImgageAdvantageComponent_ng_template_57_Template, 3, 3, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "ngx-datatable-column", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](59, ImgageAdvantageComponent_ng_template_59_Template, 1, 0, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](60, ImgageAdvantageComponent_ng_template_60_Template, 3, 3, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "ngx-datatable-column", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](62, ImgageAdvantageComponent_ng_template_62_Template, 1, 0, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](63, ImgageAdvantageComponent_ng_template_63_Template, 2, 1, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "ngx-datatable-column", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](65, ImgageAdvantageComponent_ng_template_65_Template, 2, 1, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](66, ImgageAdvantageComponent_ng_template_66_Template, 2, 4, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "ngx-datatable-column", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](68, ImgageAdvantageComponent_ng_template_68_Template, 1, 0, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](69, ImgageAdvantageComponent_ng_template_69_Template, 3, 4, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("columnMode", "force")("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("scrollbarH", true)("rows", ctx.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rowHeight", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("width", 50)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListItem"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__["MatDivider"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableRowDetailDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableRowDetailTemplateDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableColumnCellDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableColumnHeaderDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL2ltZ2FnZS1hZHZhbnRhZ2UvaW1nYWdlLWFkdmFudGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ImgageAdvantageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-imgage-advantage',
                templateUrl: './imgage-advantage.component.html',
                styleUrls: ['./imgage-advantage.component.scss'],
            }]
    }], function () { return []; }, { table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['expandableTable']
        }] }); })();


/***/ }),

/***/ "./src/app/modules/admin-reporting/lyons/lyons.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/admin-reporting/lyons/lyons.component.ts ***!
  \******************************************************************/
/*! exports provided: LyonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LyonsComponent", function() { return LyonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_service_admin_stats_lyon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/admin-stats/lyon.service */ "./src/app/shared/service/admin-stats/lyon.service.ts");
/* harmony import */ var _shared_service_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/users.service */ "./src/app/shared/service/users.service.ts");
/* harmony import */ var src_app_modules_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/tag-management/tag-management.service */ "./src/app/modules/tag-management/tag-management.service.ts");
/* harmony import */ var _shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/modules/reporting-filtering/reporting-filtering.component */ "./src/app/shared/modules/reporting-filtering/reporting-filtering.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _shared_modules_reporting_revenue_chart_reporting_revenue_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/modules/reporting-revenue-chart/reporting-revenue-chart.component */ "./src/app/shared/modules/reporting-revenue-chart/reporting-revenue-chart.component.ts");
/* harmony import */ var _shared_modules_summary_metrics_summary_metrics_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/modules/summary-metrics/summary-metrics.component */ "./src/app/shared/modules/summary-metrics/summary-metrics.component.ts");











const _c0 = ["expandableTable"];
function LyonsComponent_app_reporting_revenue_chart_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-reporting-revenue-chart", 22);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("chartData", ctx_r0.chartData);
} }
function LyonsComponent_app_summary_metrics_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-summary-metrics", 23);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("summaryMetricsData", ctx_r1.summaryMetricsData);
} }
function LyonsComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 24);
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
function LyonsComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function LyonsComponent_ng_template_9_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r33); const row_r30 = ctx.row; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r32.toggleExpandRow(row_r30); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const expanded_r31 = ctx.expanded;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classProp"]("datatable-icon-right", !expanded_r31)("datatable-icon-down", expanded_r31);
} }
function LyonsComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](0, " Date ");
} }
function LyonsComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const value_r35 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](2, 1, value_r35));
} }
function LyonsComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](0, " Subid ");
} }
function LyonsComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const value_r37 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](value_r37);
} }
function LyonsComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](0, " Tag ");
} }
function LyonsComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const value_r39 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](value_r39);
} }
function LyonsComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](0, " Publisher ");
} }
function LyonsComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const value_r41 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](value_r41);
} }
function LyonsComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](0, " Searches ");
} }
function LyonsComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const value_r43 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](2, 1, value_r43));
} }
function LyonsComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](0, " Bid Searches ");
} }
function LyonsComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const value_r45 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](2, 1, value_r45));
} }
function LyonsComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](0, " Clicks ");
} }
function LyonsComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const value_r47 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](2, 1, value_r47));
} }
function LyonsComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](0, " BiddedCTR ");
} }
function LyonsComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const value_r49 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](2, 1, value_r49, "2.2-2") || _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](3, 4, 0, "2.2-2"));
} }
function LyonsComponent_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](0, " CTR ");
} }
function LyonsComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const value_r51 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](2, 1, value_r51, "2.2-2") || _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](3, 4, 0, "2.2-2"));
} }
function LyonsComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](0, " Spilt ");
} }
function LyonsComponent_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const value_r53 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](2, 1, value_r53) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](3, 3, 0, "1.0-0"));
} }
function LyonsComponent_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](0, " Revenue ");
} }
function LyonsComponent_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const value_r55 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](2, 1, value_r55, "USD"));
} }
class LyonsComponent {
    constructor(lyonService, cdr, userService, tagService) {
        this.lyonService = lyonService;
        this.cdr = cdr;
        this.userService = userService;
        this.tagService = tagService;
        this.range = {
            startDate: '',
            endDate: '',
        };
        this.summary = {
            revenue: 0,
            profit: 0,
        };
        this.columns = [{ prop: 'name' }, { name: 'Gender' }];
        this.expanded = {};
        this.tagList = [];
        this.filteredLyonStat = [];
        this.selectedCompany = this.getSelectedCompanyFromLocalStorage();
    }
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.tagList = yield this.getCompanyTags(this.selectedCompany);
            this.rows = [];
            this.rows = yield this.getAllLyonStats(this.range.startDate, this.range.endDate);
            this.chartData = yield this.getChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);
            this.summaryMetricsData = yield this.getSummaryMetrics(this.selectedCompany);
            this.refreshTable();
        });
    }
    toggleExpandRow(row) {
        console.log('Toggled Expand Row!', row);
        this.table.rowDetail.toggleExpandRow(row);
    }
    onDetailToggle(event) {
        console.log('Detail Toggled', event);
    }
    routeTester() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('Testing Route');
            this.lyonService.testingRoute().subscribe((response) => {
                console.log(response);
            }),
                (err) => {
                    console.log(err);
                };
        });
    }
    //Gets the Selected Company from Local Storage
    getSelectedCompanyFromLocalStorage() {
        return this.userService.getSelectedCompanyFromLocalStorage();
    }
    //get Tags with selected company
    getCompanyTags(selectedCompany) {
        var companyId = selectedCompany.split("/")[1];
        return this.tagService.getCompanyTags(companyId).toPromise().then((response) => {
            return response;
        })
            .catch((error) => {
            return error;
        });
    }
    //get Stat all
    getAllLyonStats(startDate, endDate) {
        return this.lyonService.getAllStats(startDate, endDate).toPromise().then((response) => {
            this.allstat = response;
            this.allstat.map(function (resStat) {
                resStat.publisher = "No Publisher";
                resStat.tagname = "No Tag";
            });
            // var allLyonStat = [];
            for (var tagL of this.tagList) {
                if (tagL.tag.advertiser == "lyons") {
                    for (var tagSub of tagL.tag.subids) {
                        if (tagSub.filterTag == "Contains") {
                            this.allstat.map(stat => {
                                if (stat.subid.includes(tagSub.subid)) {
                                    stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                    stat.tagname = tagL.tag.name;
                                }
                            });
                        }
                        else if (tagSub.filterTag == "StartsWith") {
                            this.allstat.map(stat => {
                                if (stat.subid.startsWith(tagSub.subid)) {
                                    stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                    stat.tagname = tagL.tag.name;
                                }
                            });
                        }
                        else if (tagSub.filterTag == "EndsWith") {
                            this.allstat.map(stat => {
                                if (stat.subid.endsWith(tagSub.subid)) {
                                    stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                    stat.tagname = tagL.tag.name;
                                }
                            });
                        }
                        else if (tagSub.filterTag == "ExactValue") {
                            this.allstat.map(stat => {
                                if (stat.subid == tagSub.subid) {
                                    stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                    stat.tagname = tagL.tag.name;
                                }
                            });
                        }
                    }
                }
            }
            //duplicated remove
            // let filtered_data = this.allstat.filter((obj, pos, arr) => {
            //   return arr
            //     .map(mapObj => mapObj._id)
            //     .indexOf(obj._id) == pos;
            // });
            // var helper = {};
            // filtered_data.map(f =>{
            //   f.revenue = parseFloat(f.revenue);
            //   f.ctr = parseFloat(f.ctr);
            //   f.biddedCtr = parseFloat(f.biddedCTR);
            //   f.split = parseFloat(f.split);
            //   f.searches = parseFloat(f.searches);
            //   f.biddedSearches = parseFloat(f.biddedSearches);
            //   f.clicks = parseFloat(f.clicks);
            // });
            //Calculate the sums and group data (while tracking count)
            // var resultAll = filtered_data.reduce(function(prev, current) {
            //   var key = (current.rptDate).toString() + '-' + current.subid;
            //   if(!helper[key]) {
            //     helper[key] = Object.assign({}, current); // create a copy of o
            //     helper[key].count = 1;
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
            //     helper[key].count += 1;
            //     helper[key].split += parseInt(current.split);
            //     // helper[key].split_num = 70;
            //   }
            //   return prev;
            // }, []);
            // resultAll.map((item) => {
            //   item.split = item.split/item.count
            // })
            // return resultAll;
            return this.allstat;
        })
            .catch((error) => {
            return error;
        });
    }
    updateAllLyonStats(company, startDate, endDate) {
        this.lyonService
            .updateAllLyonStats(company, startDate, endDate)
            .subscribe((response) => {
            console.log(response);
        }),
            (err) => {
                console.log(err);
            };
    }
    updateReportingFiltering(range) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log('Update report filtering....');
            this.range = range;
            this.rows = yield this.getAllLyonStats(this.range.startDate, this.range.endDate);
            this.chartData = yield this.getChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);
            this.summaryMetricsData = yield this.getSummaryMetrics(this.selectedCompany);
            this.refreshTable();
        });
    }
    refreshTable() {
        this.cdr.markForCheck();
    }
    getSummaryMetrics(company) {
        return this.lyonService.getSummaryMetrics(company).toPromise().then((response) => {
            this.currentMonthData = response[0].summaryMetrics;
            this.beforeMonthData = response[0].lastMonthStat;
            this.twoBeforeMonthData = response[0].twoLastMonthStat;
            var dayInCurrentMonth = response[0].dayInCurrentMonth;
            var dayInBeforeMonth = response[0].dayInBeforeMonth;
            var dayInTwoBeforeMonth = response[0].dayInTwoBeforeMonth;
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
            this.currentMonthData.map(f => {
                f.revenue = parseFloat(f.revenue);
                // f.ctr = parseFloat(f.ctr);
                // f.biddedCtr = parseFloat(f.biddedCTR);
            });
            var resultSummary = this.currentMonthData.reduce(function (r, o) {
                var key = o.rptDate;
                if (!helperSummary[key]) {
                    helperSummary[key] = Object.assign({}, o); // create a copy of o
                    r.push(helperSummary[key]);
                }
                else {
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
            for (var sumData of resultSummary) {
                monthRevenue += sumData.revenue;
                monthProfit += sumData.revenue * (100 - sumData.split) * 0.01;
                monthRevenuePace += (sumData.revenue / resultSummary.length) * dayInCurrentMonth;
                profitPace += (sumData.revenue * (100 - sumData.split) * 0.01 / resultSummary.length) * dayInCurrentMonth;
            }
            //before month data get part
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
            var helperBeforeSummary = {};
            this.beforeMonthData.map(f => {
                f.revenue = parseFloat(f.revenue);
                // f.ctr = parseFloat(f.ctr);
                // f.biddedCtr = parseFloat(f.biddedCTR);
            });
            var resultBeforeSummary = this.beforeMonthData.reduce(function (r, o) {
                var key = o.rptDate;
                if (!helperBeforeSummary[key]) {
                    helperBeforeSummary[key] = Object.assign({}, o); // create a copy of o
                    r.push(helperBeforeSummary[key]);
                }
                else {
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
            for (var sumBeforeData of resultBeforeSummary) {
                monthBeforeRevenue += sumBeforeData.revenue;
                monthBeforeProfit += sumBeforeData.revenue * (100 - sumBeforeData.split) * 0.01;
                monthBeforeRevenuePace += (sumBeforeData.revenue / resultBeforeSummary.length) * dayInBeforeMonth;
                profitBeforePace += (sumBeforeData.revenue * (100 - sumBeforeData.split) * 0.01 / resultBeforeSummary.length) * dayInBeforeMonth;
            }
            //tow before month data get part
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
            var helperTwoBeforeSummary = {};
            this.twoBeforeMonthData.map(f => {
                f.revenue = parseFloat(f.revenue);
                // f.ctr = parseFloat(f.ctr);
                // f.biddedCtr = parseFloat(f.biddedCTR);
            });
            var resultTwoBeforeSummary = this.twoBeforeMonthData.reduce(function (r, o) {
                var key = o.rptDate;
                if (!helperTwoBeforeSummary[key]) {
                    helperTwoBeforeSummary[key] = Object.assign({}, o); // create a copy of o
                    r.push(helperTwoBeforeSummary[key]);
                }
                else {
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
            for (var sumTwoBeforeData of resultTwoBeforeSummary) {
                monthTwoBeforeRevenue += sumTwoBeforeData.revenue;
                monthTwoBeforeProfit += sumTwoBeforeData.revenue * (100 - sumTwoBeforeData.split) * 0.01;
                monthTwoBeforeRevenuePace += (sumTwoBeforeData.revenue / resultTwoBeforeSummary.length) * dayInTwoBeforeMonth;
                profitTwoBeforePace += (sumTwoBeforeData.revenue * (100 - sumTwoBeforeData.split) * 0.01 / resultTwoBeforeSummary.length) * dayInTwoBeforeMonth;
            }
            var currentPercentPace = 0;
            var lastPercentPace = 0;
            if (profitBeforePace != 0) {
                currentPercentPace = ((profitPace - profitBeforePace) / profitBeforePace) * 100;
            }
            if (profitTwoBeforePace != 0) {
                lastPercentPace = ((profitBeforePace - profitTwoBeforePace) / profitTwoBeforePace) * 100;
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
            return allSummary;
            // this.combineSummaryMetrics(response);
        })
            .catch((error) => {
            return error;
        });
    }
    getChartMetrics(company, startDate, endDate) {
        return this.lyonService.getAllStats(startDate, endDate).toPromise().then((response) => {
            var sortResponse = response.slice().sort((a, b) => a.date - b.date);
            this.allChart = sortResponse;
            // var chartAllLyonStat = [];
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
            // this.allChart.map(f =>{
            //   f.revenue = parseFloat(f.revenue);
            //   f.ctr = parseFloat(f.ctr);
            //   f.searches = parseFloat(f.searches);
            //   f.biddedCtr = parseFloat(f.biddedCTR);
            // })
            var resultChart = this.allChart.reduce(function (r, o) {
                var key = o.date;
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
                datesOfRevenueVal.push(resVal.date);
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
    combineSummaryMetrics(metrics) {
        metrics.summary.keys.forEach((element) => {
            this.summary.revenue += element.revenue;
            this.summary.profit += element.revenue * ((100 - element.split) * 0.01);
        });
    }
    createChartData(stats) { }
}
LyonsComponent.??fac = function LyonsComponent_Factory(t) { return new (t || LyonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_shared_service_admin_stats_lyon_service__WEBPACK_IMPORTED_MODULE_2__["LyonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_shared_service_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_modules_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__["TagManagementService"])); };
LyonsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: LyonsComponent, selectors: [["app-lyons"]], viewQuery: function LyonsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 43, vars: 14, consts: [[3, "onDatesPicked"], [3, "chartData", 4, "ngIf"], [3, "summaryMetricsData", 4, "ngIf"], [1, "material", "fullscreen", "expandable", 2, "top", "30px", "height", "500px", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "rows"], ["expandableTable", ""], [3, "rowHeight", "toggle"], ["myDetailRow", ""], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["ngx-datatable-cell-template", ""], ["name", "date"], ["ngx-datatable-header-template", ""], ["name", "subid"], ["name", "tagname"], ["name", "publisher"], ["name", "searches"], ["name", "biddedSearches"], ["name", "clicks"], ["name", "biddedCtr"], ["name", "ctr"], ["name", "split"], ["name", "revenue"], [3, "chartData"], [3, "summaryMetricsData"], [2, "padding-left", "35px"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 3, "click"]], template: function LyonsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "app-reporting-filtering", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("onDatesPicked", function LyonsComponent_Template_app_reporting_filtering_onDatesPicked_0_listener($event) { return ctx.updateReportingFiltering($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, LyonsComponent_app_reporting_revenue_chart_1_Template, 1, 1, "app-reporting-revenue-chart", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, LyonsComponent_app_summary_metrics_2_Template, 1, 1, "app-summary-metrics", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "ngx-datatable", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "ngx-datatable-row-detail", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("toggle", function LyonsComponent_Template_ngx_datatable_row_detail_toggle_5_listener($event) { return ctx.onDetailToggle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](7, LyonsComponent_ng_template_7_Template, 6, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "ngx-datatable-column", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](9, LyonsComponent_ng_template_9_Template, 1, 4, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "ngx-datatable-column", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](11, LyonsComponent_ng_template_11_Template, 1, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](12, LyonsComponent_ng_template_12_Template, 3, 3, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "ngx-datatable-column", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](14, LyonsComponent_ng_template_14_Template, 1, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](15, LyonsComponent_ng_template_15_Template, 2, 1, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "ngx-datatable-column", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](17, LyonsComponent_ng_template_17_Template, 1, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](18, LyonsComponent_ng_template_18_Template, 2, 1, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "ngx-datatable-column", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](20, LyonsComponent_ng_template_20_Template, 1, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](21, LyonsComponent_ng_template_21_Template, 2, 1, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "ngx-datatable-column", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](23, LyonsComponent_ng_template_23_Template, 1, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](24, LyonsComponent_ng_template_24_Template, 3, 3, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "ngx-datatable-column", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](26, LyonsComponent_ng_template_26_Template, 1, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](27, LyonsComponent_ng_template_27_Template, 3, 3, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "ngx-datatable-column", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](29, LyonsComponent_ng_template_29_Template, 1, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](30, LyonsComponent_ng_template_30_Template, 3, 3, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "ngx-datatable-column", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](32, LyonsComponent_ng_template_32_Template, 1, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](33, LyonsComponent_ng_template_33_Template, 4, 7, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "ngx-datatable-column", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](35, LyonsComponent_ng_template_35_Template, 1, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](36, LyonsComponent_ng_template_36_Template, 4, 7, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "ngx-datatable-column", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](38, LyonsComponent_ng_template_38_Template, 1, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](39, LyonsComponent_ng_template_39_Template, 4, 6, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "ngx-datatable-column", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](41, LyonsComponent_ng_template_41_Template, 1, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](42, LyonsComponent_ng_template_42_Template, 3, 4, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.chartData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.summaryMetricsData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("columnMode", "force")("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("rows", ctx.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("rowHeight", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("width", 30)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);
    } }, directives: [_shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_5__["ReportingFilteringComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableRowDetailDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableRowDetailTemplateDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnCellDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnHeaderDirective"], _shared_modules_reporting_revenue_chart_reporting_revenue_chart_component__WEBPACK_IMPORTED_MODULE_8__["ReportingRevenueChartComponent"], _shared_modules_summary_metrics_summary_metrics_component__WEBPACK_IMPORTED_MODULE_9__["SummaryMetricsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL2x5b25zL2x5b25zLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](LyonsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-lyons',
                templateUrl: './lyons.component.html',
                styleUrls: ['./lyons.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_service_admin_stats_lyon_service__WEBPACK_IMPORTED_MODULE_2__["LyonService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _shared_service_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] }, { type: src_app_modules_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__["TagManagementService"] }]; }, { table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['expandableTable']
        }] }); })();


/***/ }),

/***/ "./src/app/modules/admin-reporting/manual-split-update/manual-split-update.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/admin-reporting/manual-split-update/manual-split-update.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ManualSplitUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualSplitUpdateComponent", function() { return ManualSplitUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_shared_service_admin_stats_update_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/admin-stats/update.service */ "./src/app/shared/service/admin-stats/update.service.ts");
/* harmony import */ var src_app_modules_company_management_company_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/company-management/company-management.service */ "./src/app/modules/company-management/company-management.service.ts");
/* harmony import */ var src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/auth/_services/auth.service */ "./src/app/modules/auth/_services/auth.service.ts");
/* harmony import */ var src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/users.service */ "./src/app/shared/service/users.service.ts");
/* harmony import */ var src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/notification.service */ "./src/app/shared/service/notification.service.ts");
/* harmony import */ var _tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../tag-management/tag-management.service */ "./src/app/modules/tag-management/tag-management.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

















function ManualSplitUpdateComponent_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const tagItem_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", tagItem_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", tagItem_r7.viewValue, " ");
} }
function ManualSplitUpdateComponent_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Invalid start date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ManualSplitUpdateComponent_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Invalid end date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ManualSplitUpdateComponent_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Start Date Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ManualSplitUpdateComponent_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "End Date Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ManualSplitUpdateComponent_mat_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const dateRange_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", dateRange_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", dateRange_r8.viewValue, " ");
} }
class ManualSplitUpdateComponent {
    constructor(manualUpdateService, fb, companyService, authService, userService, notification, tagService) {
        this.manualUpdateService = manualUpdateService;
        this.fb = fb;
        this.companyService = companyService;
        this.authService = authService;
        this.userService = userService;
        this.notification = notification;
        this.tagService = tagService;
        this.tagData = [];
        this.selectedTagName = '';
        this.currentUser = this.authService.currentUserValue;
        this.companySelected = this.getSelectedCompanyLocalStorage();
    }
    ngOnInit() {
        this.getAllTags();
        this.tagData = [{ value: 'all tag', viewValue: 'All Tag' }];
        this.manaulUpFG = this.fb.group({
            tag: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            preSelectValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        //Get the all PRESELECT ranges
        this.preSetDateRanges = this.getDateRanges();
        this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        //Selected range of date picker
        this.selectedRange = {
            startDate: '',
            endDate: '',
        };
        //Starting value of mat select
        this.preSelectValue = 'last7days';
        //Gets the true start and end date values in date format
        this.preSelectDates = this.getPreSetDateRange(this.preSelectValue);
        //Manually updates the mat date picker with new start and end dates
        this.updateDatePickerRange(this.preSelectDates.startDate, this.preSelectDates.endDate);
    }
    //Gets the Selected Company from Local Storage
    getSelectedCompanyLocalStorage() {
        return this.userService.getSelectedCompanyFromLocalStorage();
    }
    //get All tags List
    getAllTags() {
        this.tagService.getAllTags().subscribe((response) => {
            // console.log(response);
            response.map(res => {
                this.tagData.push({
                    value: res._id,
                    viewValue: res.name
                });
            });
        });
        // if(this.companySelected) {
        //   this.companyService.getOneCompany(this.companySelected.split('/')[1]).subscribe(res => {
        //     res.reportingProviders.map(report=> {
        //       this.tagData.push({
        //         value: report.reportingProvider,
        //         viewValue: report.reportingProvider
        //       })
        //     });
        //   });
        // } 
    }
    //Updates the date picker range manually
    //Params startDate and endDate
    updateDatePickerRange(startDate, endDate) {
        this.manaulUpFG.patchValue({
            startDate: moment__WEBPACK_IMPORTED_MODULE_2__(startDate, 'MM-DD-YYYY').toDate(),
            endDate: moment__WEBPACK_IMPORTED_MODULE_2__(endDate, 'MM-DD-YYYY').toDate(),
        });
        this.range.patchValue({
            startDate: moment__WEBPACK_IMPORTED_MODULE_2__(startDate, 'MM-DD-YYYY').toDate(),
            endDate: moment__WEBPACK_IMPORTED_MODULE_2__(endDate, 'MM-DD-YYYY').toDate(),
        });
    }
    //Grabbing the mat selector options
    getDateRanges() {
        return [
            { value: 'today', viewValue: 'Today' },
            { value: 'yesterday', viewValue: 'Yesterday' },
            { value: 'last7days', viewValue: 'Last 7 Days' },
            { value: 'last30days', viewValue: 'Last 30 Days' },
            { value: 'monthToDate', viewValue: 'Month to Date' },
            { value: 'lastMonth', viewValue: 'Last Month' },
            { value: 'custom', viewValue: 'Custom' },
        ];
    }
    //Monitors mat selector, if changed (and not custom). updates the actual date picker
    onPreSetRangeSelectChange(selection) {
        if (selection.value !== 'custom') {
            this.preSelectValue = selection.value;
            this.preSelectDates = this.getPreSetDateRange(this.preSelectValue);
            //Updates the date picker range manually
            this.updateDatePickerRange(this.preSelectDates.startDate, this.preSelectDates.endDate);
        }
    }
    //Convert mat selector options and return actual dates
    getPreSetDateRange(selection) {
        let dateFormat = 'MM-DD-YYYY';
        switch (selection) {
            case 'today':
                return {
                    startDate: moment__WEBPACK_IMPORTED_MODULE_2__().utc().startOf('day').format(dateFormat),
                    endDate: moment__WEBPACK_IMPORTED_MODULE_2__().utc().endOf('day').format(dateFormat),
                };
            case 'yesterday':
                return {
                    startDate: moment__WEBPACK_IMPORTED_MODULE_2__()
                        .subtract(1, 'days')
                        .utc()
                        .startOf('day')
                        .format(dateFormat),
                    endDate: moment__WEBPACK_IMPORTED_MODULE_2__()
                        .subtract(1, 'days')
                        .utc()
                        .endOf('day')
                        .format(dateFormat),
                };
            case 'last7days':
                return {
                    startDate: moment__WEBPACK_IMPORTED_MODULE_2__()
                        .subtract(7, 'days')
                        .utc()
                        .startOf('day')
                        .format(dateFormat),
                    endDate: moment__WEBPACK_IMPORTED_MODULE_2__().utc().endOf('day').format(dateFormat),
                };
            case 'last30days':
                return {
                    startDate: moment__WEBPACK_IMPORTED_MODULE_2__()
                        .subtract(30, 'days')
                        .utc()
                        .startOf('day')
                        .format(dateFormat),
                    endDate: moment__WEBPACK_IMPORTED_MODULE_2__().utc().endOf('day').format(dateFormat),
                };
            case 'monthToDate':
                return {
                    startDate: moment__WEBPACK_IMPORTED_MODULE_2__()
                        .startOf('month')
                        .utc()
                        .startOf('day')
                        .format(dateFormat),
                    endDate: moment__WEBPACK_IMPORTED_MODULE_2__().utc().endOf('day').format(dateFormat),
                };
            case 'lastMonth':
                return {
                    startDate: moment__WEBPACK_IMPORTED_MODULE_2__()
                        .subtract(1, 'months')
                        .startOf('month')
                        .utc()
                        .startOf('day')
                        .format(dateFormat),
                    endDate: moment__WEBPACK_IMPORTED_MODULE_2__()
                        .utc()
                        .subtract(1, 'months')
                        .endOf('month')
                        .format(dateFormat),
                };
        }
    }
    handleTag(event) {
        this.selectedTagName = this.tagData.filter(tag => tag.value == event.value)[0].viewValue;
    }
    onReportSubmit() {
        if (this.manaulUpFG.valid) {
            this.manaulUpFG.addControl('company', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required));
            this.manaulUpFG.patchValue({
                company: this.companySelected,
            });
            this.manualUpdateService.updateManualSplit(this.manaulUpFG.value).subscribe((response) => {
                var checkExist = this.isObjectEmpty(response);
                if (!checkExist) {
                    this.notification.showSuccess(`${this.selectedTagName} data splits  successfully updated!`, "");
                }
                else {
                    this.notification.showWarning(`${this.selectedTagName} data not existed!`, "");
                }
            });
        }
    }
    isObjectEmpty(obj) {
        return Object.keys(obj).length === 0;
    }
    //Detects when datepicker change is updated
    changeDatePicker() {
        if (this.range.valid) {
            this.selectedRange.startDate = this.range.value.startDate;
            this.selectedRange.endDate = this.range.value.endDate;
            this.manaulUpFG.patchValue({
                startDate: moment__WEBPACK_IMPORTED_MODULE_2__(this.range.value.startDate, 'MM-DD-YYYY').toDate(),
                endDate: moment__WEBPACK_IMPORTED_MODULE_2__(this.range.value.endDate, 'MM-DD-YYYY').toDate(),
            });
            this.preSelectValue = 'custom';
        }
    }
}
ManualSplitUpdateComponent.??fac = function ManualSplitUpdateComponent_Factory(t) { return new (t || ManualSplitUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_service_admin_stats_update_service__WEBPACK_IMPORTED_MODULE_3__["ManualUpdateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_modules_company_management_company_management_service__WEBPACK_IMPORTED_MODULE_4__["CompanyManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_8__["TagManagementService"])); };
ManualSplitUpdateComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ManualSplitUpdateComponent, selectors: [["app-manual-split-update"]], decls: 36, vars: 11, consts: [["id", "manaulUpForm", 1, "example-container", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xl-6"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], ["matNativeControl", "", "placeholder", "Select Report", "formControlName", "tag", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "rangePicker", "formGroup", "dateChange"], ["matStartDate", "", "formControlName", "startDate", "placeholder", "Start date", "required", ""], ["matEndDate", "", "formControlName", "endDate", "placeholder", "End date", "required", "", 3, "dateChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [4, "ngIf"], ["formControlName", "preSelectValue", 3, "ngModel", "ngModelChange", "selectionChange"], ["mat-raised-button", "", "color", "primary", "type", "submit"], [3, "value"]], template: function ManualSplitUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function ManualSplitUpdateComponent_Template_form_ngSubmit_0_listener() { return ctx.onReportSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Report Split Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("selectionChange", function ManualSplitUpdateComponent_Template_mat_select_selectionChange_12_listener($event) { return ctx.handleTag($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, ManualSplitUpdateComponent_mat_option_13_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Enter a custom date range");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-date-range-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("dateChange", function ManualSplitUpdateComponent_Template_mat_date_range_input_dateChange_17_listener() { return ctx.changeDatePicker(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("dateChange", function ManualSplitUpdateComponent_Template_input_dateChange_19_listener() { return ctx.changeDatePicker(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "mat-datepicker-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "mat-date-range-picker", null, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, ManualSplitUpdateComponent_mat_error_23_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, ManualSplitUpdateComponent_mat_error_24_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, ManualSplitUpdateComponent_mat_error_25_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, ManualSplitUpdateComponent_mat_error_26_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Preset Date Range");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "mat-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ManualSplitUpdateComponent_Template_mat_select_ngModelChange_30_listener($event) { return ctx.preSelectValue = $event; })("selectionChange", function ManualSplitUpdateComponent_Template_mat_select_selectionChange_30_listener($event) { return ctx.onPreSetRangeSelectChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](31, ManualSplitUpdateComponent_mat_option_31_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Update Splits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.manaulUpFG);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.tagData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rangePicker", _r1)("formGroup", ctx.range);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.manaulUpFG.controls.startDate.hasError("matStartDateInvalid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.manaulUpFG.controls.endDate.hasError("matEndDateInvalid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.manaulUpFG.controls.startDate.errors == null ? null : ctx.manaulUpFG.controls.startDate.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.manaulUpFG.controls.endDate.errors == null ? null : ctx.manaulUpFG.controls.endDate.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.preSelectValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.preSetDateRanges);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDateRangeInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatStartDate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatEndDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDateRangePicker"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL21hbnVhbC1zcGxpdC11cGRhdGUvbWFudWFsLXNwbGl0LXVwZGF0ZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ManualSplitUpdateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-manual-split-update',
                templateUrl: './manual-split-update.component.html',
                styleUrls: ['./manual-split-update.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_service_admin_stats_update_service__WEBPACK_IMPORTED_MODULE_3__["ManualUpdateService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_modules_company_management_company_management_service__WEBPACK_IMPORTED_MODULE_4__["CompanyManagementService"] }, { type: src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"] }, { type: src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }, { type: _tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_8__["TagManagementService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/admin-reporting/manual-update/manual-update.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/admin-reporting/manual-update/manual-update.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ManualUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualUpdateComponent", function() { return ManualUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_shared_service_admin_stats_update_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/admin-stats/update.service */ "./src/app/shared/service/admin-stats/update.service.ts");
/* harmony import */ var src_app_modules_company_management_company_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/company-management/company-management.service */ "./src/app/modules/company-management/company-management.service.ts");
/* harmony import */ var src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/auth/_services/auth.service */ "./src/app/modules/auth/_services/auth.service.ts");
/* harmony import */ var src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/users.service */ "./src/app/shared/service/users.service.ts");
/* harmony import */ var src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/notification.service */ "./src/app/shared/service/notification.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
















function ManualUpdateComponent_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const reportItem_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", reportItem_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", reportItem_r7.viewValue, " ");
} }
function ManualUpdateComponent_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Invalid start date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ManualUpdateComponent_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Invalid end date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ManualUpdateComponent_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Start Date Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ManualUpdateComponent_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "End Date Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ManualUpdateComponent_mat_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const dateRange_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", dateRange_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", dateRange_r8.viewValue, " ");
} }
class ManualUpdateComponent {
    constructor(manualUpdateService, fb, companyService, authService, userService, notification) {
        this.manualUpdateService = manualUpdateService;
        this.fb = fb;
        this.companyService = companyService;
        this.authService = authService;
        this.userService = userService;
        this.notification = notification;
        this.reportUpdateTitle = 'Report Stat Update';
        this.reportTypeData = [];
        this.currentUser = this.authService.currentUserValue;
        this.companySelected = this.getSelectedCompanyLocalStorage();
    }
    ngOnInit() {
        this.getReportingProviderList();
        this.manaulUpFG = this.fb.group({
            reportType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            preSelectValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        //Get the all PRESELECT ranges
        this.preSetDateRanges = this.getDateRanges();
        this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        //Selected range of date picker
        this.selectedRange = {
            startDate: '',
            endDate: '',
        };
        //Starting value of mat select
        this.preSelectValue = 'last7days';
        //Gets the true start and end date values in date format
        this.preSelectDates = this.getPreSetDateRange(this.preSelectValue);
        //Manually updates the mat date picker with new start and end dates
        this.updateDatePickerRange(this.preSelectDates.startDate, this.preSelectDates.endDate);
    }
    //get Report Providers in Current Company
    getReportingProviderList() {
        if (this.companySelected) {
            this.companyService.getOneCompany(this.companySelected.split('/')[1]).subscribe(res => {
                res.reportingProviders.map(report => {
                    this.reportTypeData.push({
                        value: report.reportingProvider,
                        viewValue: report.reportingProvider
                    });
                });
            });
        }
    }
    //Gets the Selected Company from Local Storage
    getSelectedCompanyLocalStorage() {
        return this.userService.getSelectedCompanyFromLocalStorage();
    }
    onReportSubmit() {
        if (this.manaulUpFG.valid) {
            this.manaulUpFG.addControl('company', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required));
            this.manaulUpFG.patchValue({
                company: this.companySelected,
            });
            var reportTypeValue = this.manaulUpFG.value['reportType'];
            this.manualUpdateService.updateManualStats(this.manaulUpFG.value).subscribe((response) => {
                var checkExist = this.isObjectEmpty(response);
                if (!checkExist) {
                    this.notification.showSuccess(`${reportTypeValue} data stats successfully updated!`, "");
                }
                else {
                    this.notification.showWarning(`${reportTypeValue} data not existed!`, "");
                }
            });
        }
    }
    isObjectEmpty(obj) {
        return Object.keys(obj).length === 0;
    }
    //Grabbing the mat selector options
    getDateRanges() {
        return [
            { value: 'today', viewValue: 'Today' },
            { value: 'yesterday', viewValue: 'Yesterday' },
            { value: 'last7days', viewValue: 'Last 7 Days' },
            { value: 'last30days', viewValue: 'Last 30 Days' },
            { value: 'monthToDate', viewValue: 'Month to Date' },
            { value: 'lastMonth', viewValue: 'Last Month' },
            { value: 'custom', viewValue: 'Custom' },
        ];
    }
    //Detects when datepicker change is updated
    changeDatePicker() {
        if (this.range.valid) {
            this.selectedRange.startDate = this.range.value.startDate;
            this.selectedRange.endDate = this.range.value.endDate;
            this.manaulUpFG.patchValue({
                startDate: moment__WEBPACK_IMPORTED_MODULE_2__(this.range.value.startDate, 'MM-DD-YYYY').toDate(),
                endDate: moment__WEBPACK_IMPORTED_MODULE_2__(this.range.value.endDate, 'MM-DD-YYYY').toDate(),
            });
            this.preSelectValue = 'custom';
        }
    }
    //Monitors mat selector, if changed (and not custom). updates the actual date picker
    onPreSetRangeSelectChange(selection) {
        if (selection.value !== 'custom') {
            this.preSelectValue = selection.value;
            this.preSelectDates = this.getPreSetDateRange(this.preSelectValue);
            //Updates the date picker range manually
            this.updateDatePickerRange(this.preSelectDates.startDate, this.preSelectDates.endDate);
        }
    }
    //Updates the date picker range manually
    //Params startDate and endDate
    updateDatePickerRange(startDate, endDate) {
        this.manaulUpFG.patchValue({
            startDate: moment__WEBPACK_IMPORTED_MODULE_2__(startDate, 'MM-DD-YYYY').toDate(),
            endDate: moment__WEBPACK_IMPORTED_MODULE_2__(endDate, 'MM-DD-YYYY').toDate(),
        });
        this.range.patchValue({
            startDate: moment__WEBPACK_IMPORTED_MODULE_2__(startDate, 'MM-DD-YYYY').toDate(),
            endDate: moment__WEBPACK_IMPORTED_MODULE_2__(endDate, 'MM-DD-YYYY').toDate(),
        });
    }
    //Convert mat selector options and return actual dates
    getPreSetDateRange(selection) {
        let dateFormat = 'MM-DD-YYYY';
        switch (selection) {
            case 'today':
                return {
                    startDate: moment__WEBPACK_IMPORTED_MODULE_2__().utc().startOf('day').format(dateFormat),
                    endDate: moment__WEBPACK_IMPORTED_MODULE_2__().utc().endOf('day').format(dateFormat),
                };
            case 'yesterday':
                return {
                    startDate: moment__WEBPACK_IMPORTED_MODULE_2__()
                        .subtract(1, 'days')
                        .utc()
                        .startOf('day')
                        .format(dateFormat),
                    endDate: moment__WEBPACK_IMPORTED_MODULE_2__()
                        .subtract(1, 'days')
                        .utc()
                        .endOf('day')
                        .format(dateFormat),
                };
            case 'last7days':
                return {
                    startDate: moment__WEBPACK_IMPORTED_MODULE_2__()
                        .subtract(7, 'days')
                        .utc()
                        .startOf('day')
                        .format(dateFormat),
                    endDate: moment__WEBPACK_IMPORTED_MODULE_2__().utc().endOf('day').format(dateFormat),
                };
            case 'last30days':
                return {
                    startDate: moment__WEBPACK_IMPORTED_MODULE_2__()
                        .subtract(30, 'days')
                        .utc()
                        .startOf('day')
                        .format(dateFormat),
                    endDate: moment__WEBPACK_IMPORTED_MODULE_2__().utc().endOf('day').format(dateFormat),
                };
            case 'monthToDate':
                return {
                    startDate: moment__WEBPACK_IMPORTED_MODULE_2__()
                        .startOf('month')
                        .utc()
                        .startOf('day')
                        .format(dateFormat),
                    endDate: moment__WEBPACK_IMPORTED_MODULE_2__().utc().endOf('day').format(dateFormat),
                };
            case 'lastMonth':
                return {
                    startDate: moment__WEBPACK_IMPORTED_MODULE_2__()
                        .subtract(1, 'months')
                        .startOf('month')
                        .utc()
                        .startOf('day')
                        .format(dateFormat),
                    endDate: moment__WEBPACK_IMPORTED_MODULE_2__()
                        .utc()
                        .subtract(1, 'months')
                        .endOf('month')
                        .format(dateFormat),
                };
        }
    }
    handleReport(event) {
        if (event.value.length > 0) {
            var typeName = event.value.toLowerCase().replace(/\b[a-z]/g, function (letter) {
                return letter.toUpperCase();
            });
            this.reportUpdateTitle = `${typeName} Stat Update`;
        }
    }
}
ManualUpdateComponent.??fac = function ManualUpdateComponent_Factory(t) { return new (t || ManualUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_service_admin_stats_update_service__WEBPACK_IMPORTED_MODULE_3__["ManualUpdateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_modules_company_management_company_management_service__WEBPACK_IMPORTED_MODULE_4__["CompanyManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"])); };
ManualUpdateComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ManualUpdateComponent, selectors: [["app-manual-update"]], decls: 36, vars: 12, consts: [["id", "manaulUpForm", 1, "example-container", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xl-6"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], ["matNativeControl", "", "placeholder", "Select Report", "formControlName", "reportType", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "rangePicker", "formGroup", "dateChange"], ["matStartDate", "", "formControlName", "startDate", "placeholder", "Start date", "required", ""], ["matEndDate", "", "formControlName", "endDate", "placeholder", "End date", "required", "", 3, "dateChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [4, "ngIf"], ["formControlName", "preSelectValue", 3, "ngModel", "ngModelChange", "selectionChange"], ["mat-raised-button", "", "color", "primary", "type", "submit"], [3, "value"]], template: function ManualUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function ManualUpdateComponent_Template_form_ngSubmit_0_listener() { return ctx.onReportSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Report Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("selectionChange", function ManualUpdateComponent_Template_mat_select_selectionChange_12_listener($event) { return ctx.handleReport($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, ManualUpdateComponent_mat_option_13_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Enter a custom date range");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-date-range-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("dateChange", function ManualUpdateComponent_Template_mat_date_range_input_dateChange_17_listener() { return ctx.changeDatePicker(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("dateChange", function ManualUpdateComponent_Template_input_dateChange_19_listener() { return ctx.changeDatePicker(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "mat-datepicker-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "mat-date-range-picker", null, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, ManualUpdateComponent_mat_error_23_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, ManualUpdateComponent_mat_error_24_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, ManualUpdateComponent_mat_error_25_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, ManualUpdateComponent_mat_error_26_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Preset Date Range");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "mat-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ManualUpdateComponent_Template_mat_select_ngModelChange_30_listener($event) { return ctx.preSelectValue = $event; })("selectionChange", function ManualUpdateComponent_Template_mat_select_selectionChange_30_listener($event) { return ctx.onPreSetRangeSelectChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](31, ManualUpdateComponent_mat_option_31_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Update Stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.manaulUpFG);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.reportUpdateTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.reportTypeData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rangePicker", _r1)("formGroup", ctx.range);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.manaulUpFG.controls.startDate.hasError("matStartDateInvalid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.manaulUpFG.controls.endDate.hasError("matEndDateInvalid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.manaulUpFG.controls.startDate.errors == null ? null : ctx.manaulUpFG.controls.startDate.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.manaulUpFG.controls.endDate.errors == null ? null : ctx.manaulUpFG.controls.endDate.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.preSelectValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.preSetDateRanges);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDateRangeInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatStartDate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatEndDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDateRangePicker"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL21hbnVhbC11cGRhdGUvbWFudWFsLXVwZGF0ZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ManualUpdateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-manual-update',
                templateUrl: './manual-update.component.html',
                styleUrls: ['./manual-update.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_service_admin_stats_update_service__WEBPACK_IMPORTED_MODULE_3__["ManualUpdateService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_modules_company_management_company_management_service__WEBPACK_IMPORTED_MODULE_4__["CompanyManagementService"] }, { type: src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"] }, { type: src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/admin-reporting/media-net/media-net.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/admin-reporting/media-net/media-net.component.ts ***!
  \**************************************************************************/
/*! exports provided: MediaNetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaNetComponent", function() { return MediaNetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MediaNetComponent {
    constructor() { }
    ngOnInit() {
    }
}
MediaNetComponent.??fac = function MediaNetComponent_Factory(t) { return new (t || MediaNetComponent)(); };
MediaNetComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: MediaNetComponent, selectors: [["app-media-net"]], decls: 2, vars: 0, template: function MediaNetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "media-net works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL21lZGlhLW5ldC9tZWRpYS1uZXQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MediaNetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-media-net',
                templateUrl: './media-net.component.html',
                styleUrls: ['./media-net.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/admin-reporting/perion/perion.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/admin-reporting/perion/perion.component.ts ***!
  \********************************************************************/
/*! exports provided: PerionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerionComponent", function() { return PerionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_service_admin_stats_perion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/admin-stats/perion.service */ "./src/app/shared/service/admin-stats/perion.service.ts");
/* harmony import */ var _shared_service_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/users.service */ "./src/app/shared/service/users.service.ts");
/* harmony import */ var src_app_modules_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/tag-management/tag-management.service */ "./src/app/modules/tag-management/tag-management.service.ts");
/* harmony import */ var _shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/modules/reporting-filtering/reporting-filtering.component */ "./src/app/shared/modules/reporting-filtering/reporting-filtering.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _shared_modules_reporting_revenue_chart_reporting_revenue_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/modules/reporting-revenue-chart/reporting-revenue-chart.component */ "./src/app/shared/modules/reporting-revenue-chart/reporting-revenue-chart.component.ts");
/* harmony import */ var _shared_modules_summary_metrics_summary_metrics_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/modules/summary-metrics/summary-metrics.component */ "./src/app/shared/modules/summary-metrics/summary-metrics.component.ts");











const _c0 = ["expandableTable"];
function PerionComponent_app_reporting_revenue_chart_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-reporting-revenue-chart", 26);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("chartData", ctx_r0.chartData);
} }
function PerionComponent_app_summary_metrics_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-summary-metrics", 27);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("summaryMetricsData", ctx_r1.summaryMetrics);
} }
function PerionComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 28);
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
function PerionComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function PerionComponent_ng_template_15_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r35); const row_r32 = ctx.row; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r34.toggleExpandRow(row_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const expanded_r33 = ctx.expanded;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classProp"]("datatable-icon-right", !expanded_r33)("datatable-icon-down", expanded_r33);
} }
function PerionComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](0, " Date ");
} }
function PerionComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const value_r37 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](2, 1, value_r37));
} }
function PerionComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](0, " Subid ");
} }
function PerionComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const value_r39 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](value_r39);
} }
function PerionComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](0, " Publisher ");
} }
function PerionComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const value_r41 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](value_r41);
} }
function PerionComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](0, " Searches ");
} }
function PerionComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const value_r43 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](2, 1, value_r43));
} }
function PerionComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](0, " Clicks ");
} }
function PerionComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const value_r45 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](2, 1, value_r45));
} }
function PerionComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](0, " CPC ");
} }
function PerionComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const value_r47 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](2, 1, value_r47, "USD") || _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](3, 4, 0, "USD"));
} }
function PerionComponent_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](0, " CTR ");
} }
function PerionComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](3, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const value_r49 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](2, 1, value_r49, "2.2-2") || _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](3, 4, 0, "2.2-2"));
} }
function PerionComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](0, " Follow On ");
} }
function PerionComponent_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](3, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const value_r51 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](2, 1, value_r51, "2.2-2") || _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](3, 4, 0, "2.2-2"));
} }
function PerionComponent_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](0, " Revenue ");
} }
function PerionComponent_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const value_r53 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](2, 1, value_r53, "USD"));
} }
function PerionComponent_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](0, " Publisher Net ");
} }
function PerionComponent_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const value_r55 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](2, 1, value_r55, "USD"));
} }
function PerionComponent_ng_template_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](0, " Profit ");
} }
function PerionComponent_ng_template_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const value_r57 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](2, 1, value_r57, "USD"));
} }
function PerionComponent_ng_template_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](0, " Split ");
} }
function PerionComponent_ng_template_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const value_r59 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](2, 1, value_r59) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](3, 3, 0, "1.0-0"));
} }
class PerionComponent {
    constructor(perionService, cdr, userService, tagService) {
        this.perionService = perionService;
        this.cdr = cdr;
        this.userService = userService;
        this.tagService = tagService;
        this.range = {
            startDate: '',
            endDate: '',
        };
        this.loadingIndicator = true;
        this.company = {
            name: 'Manic Traffic',
            login: {
                username: 'kevin@manictraffic.com',
                password: 'kauf2552',
            },
            statsUpdateURL: 'https://services.hub.codefuel.com/analytics/reports?channelQueryType=all_channels&columnQueryData=%7B%22ids%22:%5B%22date%22,%22product%22,%22channel%22,%22country%22,%22searches%22,%22ad_clicks%22,%22publisher_cpc%22,%22monetized_ctr%22,%22revenue%22,%22searches_monetized%22%5D%7D&columnQueryType=specific_columns&endDate=1600991999000&geoQueryType=all&limit=10000&productQueryType=all_product&startDate=1600905600000&walletQueryType=all_wallets',
        };
        this.summary = {
            revenue: 0,
            profit: 0,
        };
        this.columns = [{ prop: 'name' }, { name: 'Gender' }];
        this.expanded = {};
        this.tagList = [];
        this.selectedCompany = this.getSelectedCompanyFromLocalStorage();
    }
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.tagList = yield this.getCompanyTags(this.selectedCompany);
            this.rows = [];
            this.rows = yield this.getAllPerionStats(this.selectedCompany, this.range.startDate, this.range.endDate);
            this.chartData = yield this.getChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);
            this.summaryMetrics = yield this.getSummaryMetrics(this.selectedCompany);
            this.refreshTable();
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
    routeTester() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('Testing Route');
            this.perionService.testingRoute().subscribe((response) => {
                console.log(response);
            }),
                (err) => {
                    console.log(err);
                };
        });
    }
    updateAllPerionStats(company, startDate, endDate) {
        this.perionService
            .updateAllPerionStats(company, startDate, endDate)
            .subscribe((response) => {
            console.log(response);
        }),
            (err) => {
                console.log(err);
            };
    }
    updateReportingFiltering(range) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log('Update report filtering....');
            this.range = range;
            this.rows = yield this.getAllPerionStats(this.selectedCompany, this.range.startDate, this.range.endDate);
            this.chartData = yield this.getChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);
            this.summaryMetrics = yield this.getSummaryMetrics(this.selectedCompany);
            this.refreshTable();
        });
    }
    getAllPerionStats(company, startDate, endDate) {
        return this.perionService
            .getAllPerionStats(company, startDate, endDate)
            .toPromise()
            .then((response) => {
            console.log('getAllPerionStats() response:');
            this.loadingIndicator = false;
            // console.log(response.stats);
            this.allStat = response.stats;
            this.allStat.map(function (resStat) {
                resStat.publisher = "No Publisher";
                resStat.tagname = "No Tag";
            });
            for (var tagL of this.tagList) {
                if (tagL.tag.advertiser == "perion") {
                    for (var tagSub of tagL.tag.subids) {
                        if (tagSub.filterTag == "Contains") {
                            this.allStat.map(stat => {
                                if (stat.subid.includes(tagSub.subid)) {
                                    stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                    stat.tagname = tagL.tag.name;
                                }
                            });
                        }
                        else if (tagSub.filterTag == "StartsWith") {
                            this.allStat.map(stat => {
                                if (stat.subid.startsWith(tagSub.subid)) {
                                    stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                    stat.tagname = tagL.tag.name;
                                }
                            });
                        }
                        else if (tagSub.filterTag == "EndsWith") {
                            this.allStat.map(stat => {
                                if (stat.subid.endsWith(tagSub.subid)) {
                                    stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                    stat.tagname = tagL.tag.name;
                                }
                            });
                        }
                        else if (tagSub.filterTag == "ExactValue") {
                            this.allStat.map(stat => {
                                if (stat.subid == tagSub.subid) {
                                    stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                    stat.tagname = tagL.tag.name;
                                }
                            });
                        }
                    }
                }
            }
            // var helper = new Set();
            // //duplicated remove
            // let filtered_data = this.allStat.filter((perionStat) => {
            //   const key = JSON.stringify([perionStat.date, perionStat.subid]);
            //   return !helper.has(key) && helper.add(key);
            // });
            // console.log("=========", filtered_data.length)
            //return filtered_data.slice().sort((a, b) => b.date - a.date);
            return this.allStat;
        })
            .catch((error) => {
            return error;
        });
    }
    refreshTable() {
        this.cdr.markForCheck();
    }
    getSummaryMetrics(company) {
        return this.perionService.getSummaryMetrics(company).toPromise().then((response) => {
            console.log('Got summary metrics');
            // console.log("===============", response)
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
                currentPercentPace = (response.summary[0].summaryMetrics[0].profitPace - response.summary[0].lastMonthStat[0].profitPace) / (response.summary[0].lastMonthStat[0].profitPace) * 100;
            }
            if (response.summary[0].twoLastMonthStat[0].profitPace != 0) {
                lastPercentPace = (response.summary[0].lastMonthStat[0].profitPace - response.summary[0].twoLastMonthStat[0].profitPace) / (response.summary[0].twoLastMonthStat[0].profitPace) * 100;
            }
            response.summary[0].summaryMetrics[0].percentPace = currentPercentPace;
            response.summary[0].lastMonthStat[0].percentPace = lastPercentPace;
            allSummary['summary'] = response.summary;
            return allSummary;
        })
            .catch((error) => {
            return error;
        });
    }
    getChartMetrics(company, startDate, endDate) {
        return this.perionService
            .getAllPerionStats(company, startDate, endDate)
            .toPromise()
            .then((response) => {
            // console.log('getAllPerionStats() response:');
            this.allChartStat = response.stats;
            // var allChartPerionStat = [];
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
            this.allChartStat = this.allChartStat.slice().sort((a, b) => a.date - b.date);
            var helperChart = {};
            var resultChart = this.allChartStat.reduce(function (r, o) {
                var key = o.date;
                if (!helperChart[key]) {
                    helperChart[key] = Object.assign({}, o); // create a copy of o
                    r.push(helperChart[key]);
                }
                else {
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
            for (var resVal of resultChart) {
                revenuePerDayVal.push(resVal.revenue);
                datesOfRevenueVal.push(resVal.date);
                searchesPerDayVal.push(resVal.impressions);
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
    combineSummaryMetrics(metrics) {
        metrics.summary.keys.forEach((element) => {
            console.log(element.revenue);
            this.summary.revenue += element.revenue;
            this.summary.profit += element.revenue * ((100 - element.split) * 0.01);
        });
    }
    //get Tags with selected company
    getCompanyTags(selectedCompany) {
        var companyId = selectedCompany.split("/")[1];
        return this.tagService.getCompanyTags(companyId).toPromise().then((response) => {
            return response;
        })
            .catch((error) => {
            return error;
        });
    }
    createChartData(stats) { }
}
PerionComponent.??fac = function PerionComponent_Factory(t) { return new (t || PerionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_shared_service_admin_stats_perion_service__WEBPACK_IMPORTED_MODULE_2__["PerionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_shared_service_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_modules_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__["TagManagementService"])); };
PerionComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: PerionComponent, selectors: [["app-perion"]], viewQuery: function PerionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 52, vars: 18, consts: [[3, "onDatesPicked"], [3, "chartData", 4, "ngIf"], [3, "summaryMetricsData", 4, "ngIf"], [1, "btn", "btn-sm", "btn-dark", 3, "click"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "btn", "btn-sm", "btn-info", 3, "click"], [1, "material", "fullscreen", "expandable", 2, "top", "30px", "height", "500px", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "rows", "loadingIndicator"], ["expandableTable", ""], [3, "rowHeight", "toggle"], ["myDetailRow", ""], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["ngx-datatable-cell-template", ""], ["name", "date", 3, "minWidth"], ["ngx-datatable-header-template", ""], ["name", "subid"], ["name", "publisher", 3, "minWidth"], ["name", "impressions"], ["name", "clicks"], ["name", "cpc"], ["name", "ctr"], ["name", "followon"], ["name", "revenue"], ["name", "publisherNet"], ["name", "profit"], ["name", "split", 3, "minWidth"], [3, "chartData"], [3, "summaryMetricsData"], [2, "padding-left", "35px"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 3, "click"]], template: function PerionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "app-reporting-filtering", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("onDatesPicked", function PerionComponent_Template_app_reporting_filtering_onDatesPicked_0_listener($event) { return ctx.updateReportingFiltering($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, PerionComponent_app_reporting_revenue_chart_1_Template, 1, 1, "app-reporting-revenue-chart", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, PerionComponent_app_summary_metrics_2_Template, 1, 1, "app-summary-metrics", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function PerionComponent_Template_button_click_3_listener() { return ctx.updateAllPerionStats(ctx.selectedCompany, ctx.range.startDate, ctx.range.endDate); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, " updateAllPerionStats\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function PerionComponent_Template_button_click_5_listener() { return ctx.getAllPerionStats(ctx.selectedCompany, ctx.range.startDate, ctx.range.endDate); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, " getAllPerionStats\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function PerionComponent_Template_button_click_7_listener() { return ctx.getSummaryMetrics(ctx.selectedCompany); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "getSummaryMetrics");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "ngx-datatable", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "ngx-datatable-row-detail", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("toggle", function PerionComponent_Template_ngx_datatable_row_detail_toggle_11_listener($event) { return ctx.onDetailToggle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](13, PerionComponent_ng_template_13_Template, 6, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "ngx-datatable-column", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](15, PerionComponent_ng_template_15_Template, 1, 4, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "ngx-datatable-column", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](17, PerionComponent_ng_template_17_Template, 1, 0, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](18, PerionComponent_ng_template_18_Template, 3, 3, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "ngx-datatable-column", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](20, PerionComponent_ng_template_20_Template, 1, 0, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](21, PerionComponent_ng_template_21_Template, 2, 1, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "ngx-datatable-column", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](23, PerionComponent_ng_template_23_Template, 1, 0, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](24, PerionComponent_ng_template_24_Template, 2, 1, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "ngx-datatable-column", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](26, PerionComponent_ng_template_26_Template, 1, 0, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](27, PerionComponent_ng_template_27_Template, 3, 3, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "ngx-datatable-column", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](29, PerionComponent_ng_template_29_Template, 1, 0, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](30, PerionComponent_ng_template_30_Template, 3, 3, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "ngx-datatable-column", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](32, PerionComponent_ng_template_32_Template, 1, 0, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](33, PerionComponent_ng_template_33_Template, 4, 7, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "ngx-datatable-column", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](35, PerionComponent_ng_template_35_Template, 1, 0, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](36, PerionComponent_ng_template_36_Template, 4, 7, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "ngx-datatable-column", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](38, PerionComponent_ng_template_38_Template, 1, 0, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](39, PerionComponent_ng_template_39_Template, 4, 7, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "ngx-datatable-column", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](41, PerionComponent_ng_template_41_Template, 1, 0, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](42, PerionComponent_ng_template_42_Template, 3, 4, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "ngx-datatable-column", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](44, PerionComponent_ng_template_44_Template, 1, 0, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](45, PerionComponent_ng_template_45_Template, 3, 4, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "ngx-datatable-column", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](47, PerionComponent_ng_template_47_Template, 1, 0, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](48, PerionComponent_ng_template_48_Template, 3, 4, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "ngx-datatable-column", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](50, PerionComponent_ng_template_50_Template, 1, 0, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](51, PerionComponent_ng_template_51_Template, 4, 6, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.chartData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.summaryMetrics);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("columnMode", "force")("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("rows", ctx.rows)("loadingIndicator", ctx.loadingIndicator);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("rowHeight", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("width", 30)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("minWidth", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("minWidth", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("minWidth", 35);
    } }, directives: [_shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_5__["ReportingFilteringComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableRowDetailDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableRowDetailTemplateDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnCellDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnHeaderDirective"], _shared_modules_reporting_revenue_chart_reporting_revenue_chart_component__WEBPACK_IMPORTED_MODULE_8__["ReportingRevenueChartComponent"], _shared_modules_summary_metrics_summary_metrics_component__WEBPACK_IMPORTED_MODULE_9__["SummaryMetricsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["PercentPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL3Blcmlvbi9wZXJpb24uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](PerionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-perion',
                templateUrl: './perion.component.html',
                styleUrls: ['./perion.component.scss'],
            }]
    }], function () { return [{ type: src_app_shared_service_admin_stats_perion_service__WEBPACK_IMPORTED_MODULE_2__["PerionService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _shared_service_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] }, { type: src_app_modules_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__["TagManagementService"] }]; }, { table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['expandableTable']
        }] }); })();


/***/ }),

/***/ "./src/app/modules/admin-reporting/rubi/rubi.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/admin-reporting/rubi/rubi.component.ts ***!
  \****************************************************************/
/*! exports provided: RubiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RubiComponent", function() { return RubiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/users.service */ "./src/app/shared/service/users.service.ts");
/* harmony import */ var src_app_shared_service_admin_stats_rubi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/admin-stats/rubi.service */ "./src/app/shared/service/admin-stats/rubi.service.ts");
/* harmony import */ var src_app_modules_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/tag-management/tag-management.service */ "./src/app/modules/tag-management/tag-management.service.ts");
/* harmony import */ var _shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/modules/reporting-filtering/reporting-filtering.component */ "./src/app/shared/modules/reporting-filtering/reporting-filtering.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _shared_modules_reporting_revenue_chart_reporting_revenue_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/modules/reporting-revenue-chart/reporting-revenue-chart.component */ "./src/app/shared/modules/reporting-revenue-chart/reporting-revenue-chart.component.ts");
/* harmony import */ var _shared_modules_summary_metrics_summary_metrics_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/modules/summary-metrics/summary-metrics.component */ "./src/app/shared/modules/summary-metrics/summary-metrics.component.ts");











const _c0 = ["expandableTable"];
function RubiComponent_app_reporting_revenue_chart_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-reporting-revenue-chart", 18);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("chartData", ctx_r0.chartData);
} }
function RubiComponent_app_summary_metrics_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-summary-metrics", 19);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("summaryMetricsData", ctx_r1.summaryMetrics);
} }
function RubiComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 20);
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
function RubiComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function RubiComponent_ng_template_9_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r25); const row_r22 = ctx.row; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r24.toggleExpandRow(row_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const expanded_r23 = ctx.expanded;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classProp"]("datatable-icon-right", !expanded_r23)("datatable-icon-down", expanded_r23);
} }
function RubiComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](0, " Date ");
} }
function RubiComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const value_r27 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](2, 1, value_r27));
} }
function RubiComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](0, " Subid ");
} }
function RubiComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const value_r29 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](value_r29);
} }
function RubiComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](0, " Publisher ");
} }
function RubiComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const value_r31 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](value_r31);
} }
function RubiComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](0, " Searches ");
} }
function RubiComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const value_r33 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](2, 1, value_r33));
} }
function RubiComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](0, " Clicks ");
} }
function RubiComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const value_r35 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](2, 1, value_r35));
} }
function RubiComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](0, " Revenue ");
} }
function RubiComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const value_r37 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](2, 1, value_r37, "USD"));
} }
function RubiComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](0, " Split ");
} }
function RubiComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const value_r39 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](2, 1, value_r39) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](3, 3, 0, "1.0-0"));
} }
class RubiComponent {
    constructor(cdr, userService, rubiService, tagService) {
        this.cdr = cdr;
        this.userService = userService;
        this.rubiService = rubiService;
        this.tagService = tagService;
        this.range = {
            startDate: '',
            endDate: '',
        };
        this.loadingIndicator = true;
        this.summary = {
            revenue: 0,
            profit: 0,
        };
        this.expanded = {};
        this.tagList = [];
        this.selectedCompany = this.getSelectedCompanyStored();
    }
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.tagList = yield this.getCompanyTags(this.selectedCompany);
            this.rows = [];
            this.rows = yield this.getAllRubiStats(this.selectedCompany, this.range.startDate, this.range.endDate);
            this.chartData = yield this.getChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);
            this.summaryMetrics = yield this.getSummaryMetrics(this.selectedCompany);
            this.refreshTable();
        });
    }
    updateReportingFiltering(range) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.range = range;
            this.rows = yield this.getAllRubiStats(this.selectedCompany, this.range.startDate, this.range.endDate);
            this.chartData = yield this.getChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);
            this.summaryMetrics = yield this.getSummaryMetrics(this.selectedCompany);
            this.refreshTable();
        });
    }
    //Gets the Selected Company from Local Storage
    getSelectedCompanyStored() {
        return this.userService.getSelectedCompanyFromLocalStorage();
    }
    toggleExpandRow(row) {
        console.log('Toggled Expand Row!', row);
        this.table.rowDetail.toggleExpandRow(row);
    }
    onDetailToggle(event) {
        console.log('Detail Toggled', event);
    }
    refreshTable() {
        this.cdr.markForCheck();
    }
    getAllRubiStats(company, startDate, endDate) {
        return this.rubiService.getAllRubiStats(company, startDate, endDate).toPromise().then((response) => {
            console.log('getAllRubiStats() response:', response);
            this.loadingIndicator = false;
            this.allStats = response.stats;
            this.allStats.map(function (resStat) {
                resStat.publisher = "No Publisher";
                resStat.tagname = "No Tag";
            });
            for (var tagL of this.tagList) {
                if (tagL.tag.advertiser == "rubi") {
                    for (var tagSub of tagL.tag.subids) {
                        if (tagSub.filterTag == "Contains") {
                            this.allStats.map(stat => {
                                if (stat.subid.includes(tagSub.subid)) {
                                    stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                    stat.tagname = tagL.tag.name;
                                }
                            });
                        }
                        else if (tagSub.filterTag == "StartsWith") {
                            this.allStats.map(stat => {
                                if (stat.subid.startsWith(tagSub.subid)) {
                                    stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                    stat.tagname = tagL.tag.name;
                                }
                            });
                        }
                        else if (tagSub.filterTag == "EndsWith") {
                            this.allStats.map(stat => {
                                if (stat.subid.endsWith(tagSub.subid)) {
                                    stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                    stat.tagname = tagL.tag.name;
                                }
                            });
                        }
                        else if (tagSub.filterTag == "ExactValue") {
                            this.allStats.map(stat => {
                                if (stat.subid == tagSub.subid) {
                                    stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                    stat.tagname = tagL.tag.name;
                                }
                            });
                        }
                    }
                }
            }
            return this.allStats;
        });
    }
    getChartMetrics(company, startDate, endDate) {
        return this.rubiService
            .getChartMetrics(company, startDate, endDate)
            .toPromise()
            .then((response) => {
            return response;
        })
            .catch((error) => {
            return error;
        });
    }
    getSummaryMetrics(company) {
        return this.rubiService.getSummaryMetrics(company).toPromise().then((response) => {
            console.log('Got summary metrics');
            var allSummary = {};
            var currentPercentPace = 0;
            var lastPercentPace = 0;
            if (response.summary[0].lastMonthStat[0].profitPace != 0) {
                currentPercentPace = (response.summary[0].summaryMetrics[0].profitPace - response.summary[0].lastMonthStat[0].profitPace) / (response.summary[0].lastMonthStat[0].profitPace) * 100;
            }
            if (response.summary[0].twoLastMonthStat[0].profitPace != 0) {
                lastPercentPace = (response.summary[0].lastMonthStat[0].profitPace - response.summary[0].twoLastMonthStat[0].profitPace) / (response.summary[0].twoLastMonthStat[0].profitPace) * 100;
            }
            response.summary[0].summaryMetrics[0].percentPace = currentPercentPace;
            response.summary[0].lastMonthStat[0].percentPace = lastPercentPace;
            allSummary['summary'] = response.summary;
            return allSummary;
        });
    }
    //get Tags with selected company
    getCompanyTags(selectedCompany) {
        var companyId = selectedCompany.split("/")[1];
        return this.tagService.getCompanyTags(companyId).toPromise().then((response) => {
            return response;
        })
            .catch((error) => {
            return error;
        });
    }
}
RubiComponent.??fac = function RubiComponent_Factory(t) { return new (t || RubiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_shared_service_admin_stats_rubi_service__WEBPACK_IMPORTED_MODULE_3__["RubiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_modules_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__["TagManagementService"])); };
RubiComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: RubiComponent, selectors: [["app-rubi"]], viewQuery: function RubiComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 31, vars: 18, consts: [[3, "onDatesPicked"], [3, "chartData", 4, "ngIf"], [3, "summaryMetricsData", 4, "ngIf"], [1, "material", "fullscreen", "expandable", 2, "top", "30px", "height", "500px", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "rows", "loadingIndicator"], ["expandableTable", ""], [3, "rowHeight", "toggle"], ["myDetailRow", ""], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["ngx-datatable-cell-template", ""], ["name", "date", 3, "minWidth"], ["ngx-datatable-header-template", ""], ["name", "subid"], ["name", "publisher", 3, "minWidth"], ["name", "searches"], ["name", "clicks"], ["name", "revenue"], ["name", "split", 3, "minWidth"], [3, "chartData"], [3, "summaryMetricsData"], [2, "padding-left", "35px"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 3, "click"]], template: function RubiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "app-reporting-filtering", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("onDatesPicked", function RubiComponent_Template_app_reporting_filtering_onDatesPicked_0_listener($event) { return ctx.updateReportingFiltering($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, RubiComponent_app_reporting_revenue_chart_1_Template, 1, 1, "app-reporting-revenue-chart", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, RubiComponent_app_summary_metrics_2_Template, 1, 1, "app-summary-metrics", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "ngx-datatable", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "ngx-datatable-row-detail", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("toggle", function RubiComponent_Template_ngx_datatable_row_detail_toggle_5_listener($event) { return ctx.onDetailToggle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](7, RubiComponent_ng_template_7_Template, 6, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "ngx-datatable-column", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](9, RubiComponent_ng_template_9_Template, 1, 4, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "ngx-datatable-column", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](11, RubiComponent_ng_template_11_Template, 1, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](12, RubiComponent_ng_template_12_Template, 3, 3, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "ngx-datatable-column", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](14, RubiComponent_ng_template_14_Template, 1, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](15, RubiComponent_ng_template_15_Template, 2, 1, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "ngx-datatable-column", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](17, RubiComponent_ng_template_17_Template, 1, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](18, RubiComponent_ng_template_18_Template, 2, 1, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "ngx-datatable-column", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](20, RubiComponent_ng_template_20_Template, 1, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](21, RubiComponent_ng_template_21_Template, 3, 3, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "ngx-datatable-column", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](23, RubiComponent_ng_template_23_Template, 1, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](24, RubiComponent_ng_template_24_Template, 3, 3, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "ngx-datatable-column", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](26, RubiComponent_ng_template_26_Template, 1, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](27, RubiComponent_ng_template_27_Template, 3, 4, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "ngx-datatable-column", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](29, RubiComponent_ng_template_29_Template, 1, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](30, RubiComponent_ng_template_30_Template, 4, 6, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.chartData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.summaryMetrics);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("columnMode", "force")("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("rows", ctx.rows)("loadingIndicator", ctx.loadingIndicator);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("rowHeight", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("width", 30)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("minWidth", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("minWidth", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("minWidth", 35);
    } }, directives: [_shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_5__["ReportingFilteringComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableRowDetailDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableRowDetailTemplateDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnCellDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnHeaderDirective"], _shared_modules_reporting_revenue_chart_reporting_revenue_chart_component__WEBPACK_IMPORTED_MODULE_8__["ReportingRevenueChartComponent"], _shared_modules_summary_metrics_summary_metrics_component__WEBPACK_IMPORTED_MODULE_9__["SummaryMetricsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL3J1YmkvcnViaS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](RubiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-rubi',
                templateUrl: './rubi.component.html',
                styleUrls: ['./rubi.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] }, { type: src_app_shared_service_admin_stats_rubi_service__WEBPACK_IMPORTED_MODULE_3__["RubiService"] }, { type: src_app_modules_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__["TagManagementService"] }]; }, { table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['expandableTable']
        }] }); })();


/***/ }),

/***/ "./src/app/modules/admin-reporting/third-party/third-party.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/admin-reporting/third-party/third-party.component.ts ***!
  \******************************************************************************/
/*! exports provided: ThirdPartyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdPartyComponent", function() { return ThirdPartyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var _shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/modules/reporting-filtering/reporting-filtering.component */ "./src/app/shared/modules/reporting-filtering/reporting-filtering.component.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = ["expandableTable"];
function ThirdPartyComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Test");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ThirdPartyComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ThirdPartyComponent_ng_template_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r23); const row_r20 = ctx.row; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r22.toggleExpandRow(row_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const expanded_r21 = ctx.expanded;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("datatable-icon-right", !expanded_r21)("datatable-icon-down", expanded_r21);
} }
function ThirdPartyComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Publisher ");
} }
function ThirdPartyComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const value_r25 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](value_r25);
} }
function ThirdPartyComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Tag ");
} }
function ThirdPartyComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const value_r27 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](value_r27);
} }
function ThirdPartyComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Total Searches ");
} }
function ThirdPartyComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const value_r29 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, value_r29));
} }
function ThirdPartyComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Monetized Searches ");
} }
function ThirdPartyComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const value_r31 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, value_r31));
} }
function ThirdPartyComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Clicks ");
} }
function ThirdPartyComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const value_r33 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, value_r33));
} }
function ThirdPartyComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const column_r34 = ctx.column;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](column_r34.name);
} }
function ThirdPartyComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "strong", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](1, "percent");
} if (rf & 2) {
    const row_r36 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](1, 1, row_r36["clicks"] / row_r36["totalSearches"], "2.2-2"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);
} }
function ThirdPartyComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Revenue ");
} }
function ThirdPartyComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const value_r39 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](2, 1, value_r39, "USD"));
} }
class ThirdPartyComponent {
    constructor() {
        this.rows = [
            {
                name: 'Datalox',
                tag: 'Guppy Media',
                totalSearches: '5341',
                monetizedSearches: '5213',
                revenue: '1362',
                clicks: 562,
            },
            {
                name: 'Hopkins Branded',
                tag: 'Guppy Media',
                totalSearches: '5341',
                monetizedSearches: '5213',
                revenue: '1362',
                clicks: 562,
            },
            {
                name: 'Datalox 2',
                tag: 'Guppy Media',
                totalSearches: '5341',
                monetizedSearches: '5213',
                revenue: '1362',
                clicks: 562,
            },
        ];
        this.columns = [{ prop: 'name' }, { name: 'Gender' }];
        this.expanded = {};
    }
    ngOnInit() {
        let revenueByDayArray = Array.from({ length: 20 }, () => Math.floor(Math.random() * (8000 - 4000) + 4000));
        let searchesPerDay = Array.from({ length: 20 }, () => Math.floor(Math.random() * (100000 - 40000) + 40000));
        this.setChartOptions(10000, 100000, [
            'Nov 1, Nov 2, Nov 3, Nov 4',
            'Nov 5',
            'Nov 5',
            'Nov 6',
            'Nov 7',
            'Nov 8',
            'Nov 9',
            'Nov 10',
            'Nov 11',
            'Nov 12',
            'Nov 13',
            'Nov 14',
            'Nov 15',
            'Nov 16',
            'Nov 17',
            'Nov 18',
            'Nov 19',
            'Nov 20',
        ], revenueByDayArray, searchesPerDay);
    }
    updateReportingFiltering(range) {
        // this.range = range;
        // this.getAllPerionStats(
        //   'manic_perion',
        //   this.range.startDate,
        //   this.range.endDate
        // );
        console.log('Report');
    }
    toggleExpandRow(row) {
        console.log('Toggled Expand Row!', row);
        this.table.rowDetail.toggleExpandRow(row);
    }
    onDetailToggle(event) {
        console.log('Detail Toggled', event);
    }
    setChartOptions(maxRevenue, maxSearches, daysArray, revenueByDayArray, searchesPerDay) {
        this.chartDom = document.getElementById('main');
        this.myChart = echarts__WEBPACK_IMPORTED_MODULE_1__["init"](this.chartDom);
        this.option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999',
                    },
                },
            },
            toolbox: {
                feature: {
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true },
                },
            },
            legend: {
                data: ['Revenue', 'Searches'],
            },
            xAxis: [
                {
                    type: 'category',
                    data: daysArray,
                    axisPointer: {
                        type: 'shadow',
                    },
                },
            ],
            yAxis: [
                {
                    type: 'value',
                    name: 'Revenue',
                    min: 0,
                    max: maxRevenue,
                    interval: 25000,
                    axisLabel: {
                        formatter: '${value}',
                    },
                },
                {
                    type: 'value',
                    name: 'Searches',
                    min: 0,
                    max: maxSearches,
                    interval: 100000,
                    axisLabel: {
                        formatter: '{value}',
                    },
                },
            ],
            series: [
                {
                    name: 'Revenue',
                    type: 'bar',
                    data: revenueByDayArray,
                },
                {
                    name: 'Searches',
                    type: 'line',
                    yAxisIndex: 1,
                    data: searchesPerDay,
                },
            ],
        };
        this.option && this.myChart.setOption(this.option);
    }
}
ThirdPartyComponent.??fac = function ThirdPartyComponent_Factory(t) { return new (t || ThirdPartyComponent)(); };
ThirdPartyComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ThirdPartyComponent, selectors: [["app-third-party"]], viewQuery: function ThirdPartyComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 30, vars: 13, consts: [[3, "onDatesPicked"], ["id", "main", 2, "width", "100%", "height", "300px"], [1, "material", "fullscreen", "expandable", 2, "top", "52px", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "scrollbarH", "rows"], ["expandableTable", ""], [3, "rowHeight", "toggle"], ["myDetailRow", ""], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["ngx-datatable-cell-template", ""], ["name", "name"], ["ngx-datatable-header-template", ""], ["name", "tag"], ["name", "totalSearches"], ["name", "monetizedSearches"], ["name", "clicks"], ["name", "CTR"], ["name", "revenue"], [2, "padding-left", "35px"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 3, "click"], [3, "innerHTML"]], template: function ThirdPartyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-reporting-filtering", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("onDatesPicked", function ThirdPartyComponent_Template_app_reporting_filtering_onDatesPicked_0_listener($event) { return ctx.updateReportingFiltering($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ngx-datatable", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ngx-datatable-row-detail", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("toggle", function ThirdPartyComponent_Template_ngx_datatable_row_detail_toggle_4_listener($event) { return ctx.onDetailToggle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, ThirdPartyComponent_ng_template_6_Template, 6, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ngx-datatable-column", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, ThirdPartyComponent_ng_template_8_Template, 1, 4, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "ngx-datatable-column", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, ThirdPartyComponent_ng_template_10_Template, 1, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, ThirdPartyComponent_ng_template_11_Template, 2, 1, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "ngx-datatable-column", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, ThirdPartyComponent_ng_template_13_Template, 1, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, ThirdPartyComponent_ng_template_14_Template, 2, 1, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "ngx-datatable-column", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, ThirdPartyComponent_ng_template_16_Template, 1, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, ThirdPartyComponent_ng_template_17_Template, 3, 3, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "ngx-datatable-column", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, ThirdPartyComponent_ng_template_19_Template, 1, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, ThirdPartyComponent_ng_template_20_Template, 3, 3, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "ngx-datatable-column", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, ThirdPartyComponent_ng_template_22_Template, 1, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, ThirdPartyComponent_ng_template_23_Template, 3, 3, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "ngx-datatable-column", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, ThirdPartyComponent_ng_template_25_Template, 2, 1, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, ThirdPartyComponent_ng_template_26_Template, 2, 4, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "ngx-datatable-column", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, ThirdPartyComponent_ng_template_28_Template, 1, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, ThirdPartyComponent_ng_template_29_Template, 3, 4, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("columnMode", "force")("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("scrollbarH", true)("rows", ctx.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rowHeight", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("width", 50)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);
    } }, directives: [_shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_2__["ReportingFilteringComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableRowDetailDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableRowDetailTemplateDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableColumnCellDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableColumnHeaderDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL3RoaXJkLXBhcnR5L3RoaXJkLXBhcnR5LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ThirdPartyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-third-party',
                templateUrl: './third-party.component.html',
                styleUrls: ['./third-party.component.scss'],
            }]
    }], function () { return []; }, { table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['expandableTable']
        }] }); })();


/***/ }),

/***/ "./src/app/modules/admin-reporting/verizon-direct/verizon-direct.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/admin-reporting/verizon-direct/verizon-direct.component.ts ***!
  \************************************************************************************/
/*! exports provided: VerizonDirectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerizonDirectComponent", function() { return VerizonDirectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class VerizonDirectComponent {
    constructor() { }
    ngOnInit() {
    }
}
VerizonDirectComponent.??fac = function VerizonDirectComponent_Factory(t) { return new (t || VerizonDirectComponent)(); };
VerizonDirectComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: VerizonDirectComponent, selectors: [["app-verizon-direct"]], decls: 2, vars: 0, template: function VerizonDirectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "verizon-direct works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL3Zlcml6b24tZGlyZWN0L3Zlcml6b24tZGlyZWN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](VerizonDirectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-verizon-direct',
                templateUrl: './verizon-direct.component.html',
                styleUrls: ['./verizon-direct.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/service/admin-stats/update.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/service/admin-stats/update.service.ts ***!
  \**************************************************************/
/*! exports provided: ManualUpdateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualUpdateService", function() { return ManualUpdateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const API_MANUAL_UPDATE_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/stats/admin/manual-update`;
class ManualUpdateService {
    constructor(http) {
        this.http = http;
    }
    updateManualStats(updateData) {
        const { company, reportType, startDate, endDate } = updateData;
        var data = {
            "company": company,
            "reportType": reportType,
            'startDate': startDate,
            'endDate': endDate
        };
        return this.http.put(API_MANUAL_UPDATE_URL + '/stat-update', data);
    }
    updateManualSplit(updateData) {
        const { company, tag, startDate, endDate } = updateData;
        var data = {
            "company": company,
            "tag": tag,
            'startDate': startDate,
            'endDate': endDate
        };
        return this.http.put(API_MANUAL_UPDATE_URL + '/split-update', data);
    }
}
ManualUpdateService.??fac = function ManualUpdateService_Factory(t) { return new (t || ManualUpdateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ManualUpdateService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: ManualUpdateService, factory: ManualUpdateService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ManualUpdateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-admin-reporting-admin-reporting-module-es2015.js.map