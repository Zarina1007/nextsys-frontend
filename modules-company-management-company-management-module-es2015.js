(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-company-management-company-management-module"],{

/***/ "./src/app/modules/company-management/companies/companies.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/company-management/companies/companies.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CompaniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesComponent", function() { return CompaniesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _company_management_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../company-management.service */ "./src/app/modules/company-management/company-management.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/users.service */ "./src/app/shared/service/users.service.ts");
/* harmony import */ var src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/notification.service */ "./src/app/shared/service/notification.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-inline-svg */ "./node_modules/ng-inline-svg/lib_esmodule/index.js");









function CompaniesComponent_div_0_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Name ");
} }
function CompaniesComponent_div_0_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const value_r7 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r7, " ");
} }
function CompaniesComponent_div_0_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Edit");
} }
function CompaniesComponent_div_0_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompaniesComponent_div_0_ng_template_14_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const row_r8 = ctx.row; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.editCompany(row_r8._key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Communication/Write.svg");
} }
function CompaniesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "View Companies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ngx-datatable", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngx-datatable-column", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CompaniesComponent_div_0_ng_template_10_Template, 1, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CompaniesComponent_div_0_ng_template_11_Template, 1, 1, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ngx-datatable-column", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CompaniesComponent_div_0_ng_template_13_Template, 1, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CompaniesComponent_div_0_ng_template_14_Template, 2, 1, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx_r0.rows)("columnMode", "force")("loadingIndicator", ctx_r0.loadingIndicator)("footerHeight", 50)("rowHeight", 50)("scrollbarH", true)("headerHeight", 50)("limit", 10);
} }
function CompaniesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " How did you get here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Sorry you can't access the page you're looking for. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " There may be a misspelling in the URL entered,");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "or the page you are looking for may no longer exist. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CompaniesComponent {
    constructor(companyService, cdr, router, userService, notification) {
        this.companyService = companyService;
        this.cdr = cdr;
        this.router = router;
        this.userService = userService;
        this.notification = notification;
        this.loadingIndicator = true;
        this.hidden = false;
        this.getAllCompanies();
    }
    getAllCompanies() {
        this.localStorageCompany = this.getSelectedCompanyFromLocalStorage();
        //access page part
        if (!this.localStorageCompany) {
            this.hidden = true;
            this.notification.showError("Please select your Company!", "");
        }
        else {
            this.hidden = false;
        }
        this.companyService.getAllCompanies().subscribe((x) => {
            this.rows = x;
            console.log(this.rows);
            this.loadingIndicator = false;
            this.cdr.detectChanges();
        });
    }
    editCompany(companyID) {
        this.router.navigateByUrl('/company-management/edit/' + companyID);
    }
    ngOnInit() {
        // console.log(companies)
    }
    //Gets the Selected Company from Local Storage
    getSelectedCompanyFromLocalStorage() {
        return this.userService.getSelectedCompanyFromLocalStorage();
    }
}
CompaniesComponent.ɵfac = function CompaniesComponent_Factory(t) { return new (t || CompaniesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_company_management_service__WEBPACK_IMPORTED_MODULE_1__["CompanyManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"])); };
CompaniesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompaniesComponent, selectors: [["app-companies"]], decls: 2, vars: 2, consts: [["class", "row", 4, "ngIf"], ["class", "error error-3 d-flex flex-row-fluid bgi-size-cover bgi-position-center", "style", "background-image: url('./assets/media/error/bg3.jpg'); height: 100%;zoom: 1;\n  display: block;\n  min-height: 80vh;\n  font-size: 14px;\n  line-height: 1.4;\n  color: #0e1724;", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], [1, "material", "fullscreen", 3, "rows", "columnMode", "loadingIndicator", "footerHeight", "rowHeight", "scrollbarH", "headerHeight", "limit"], ["name", "Name"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], ["name", "id"], ["title", "Edit company", 1, "btn", "btn-icon", "btn-light", "btn-hover-primary", "btn-sm", "mx-3", 3, "click"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-md", "svg-icon-primary", 3, "inlineSVG"], [1, "error", "error-3", "d-flex", "flex-row-fluid", "bgi-size-cover", "bgi-position-center", 2, "background-image", "url('./assets/media/error/bg3.jpg')", "height", "100%", "zoom", "1", "display", "block", "min-height", "80vh", "font-size", "14px", "line-height", "1.4", "color", "#0e1724"], [1, "px-10", "px-md-30", "py-10", "py-md-0", "d-flex", "flex-column", "justify-content-md-center"], [1, "display-4", "font-weight-boldest", "text-white", "mb-12"], [1, "font-size-h1", "font-weight-boldest", "text-dark-75"], [1, "font-size-h4", "line-height-md"]], template: function CompaniesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CompaniesComponent_div_0_Template, 15, 8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CompaniesComponent_div_1_Template, 10, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hidden);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["DataTableColumnHeaderDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["DataTableColumnCellDirective"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_7__["InlineSVGDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tcGFueS1tYW5hZ2VtZW50L2NvbXBhbmllcy9jb21wYW5pZXMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompaniesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-companies',
                templateUrl: './companies.component.html',
                styleUrls: ['./companies.component.scss'],
            }]
    }], function () { return [{ type: _company_management_service__WEBPACK_IMPORTED_MODULE_1__["CompanyManagementService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] }, { type: src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/company-management/company-management-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/company-management/company-management-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: CompanyManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyManagementRoutingModule", function() { return CompanyManagementRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _companies_companies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./companies/companies.component */ "./src/app/modules/company-management/companies/companies.component.ts");
/* harmony import */ var _company_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company-management.component */ "./src/app/modules/company-management/company-management.component.ts");
/* harmony import */ var _edit_company_edit_company_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-company/edit-company.component */ "./src/app/modules/company-management/edit-company/edit-company.component.ts");
/* harmony import */ var _new_company_new_company_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-company/new-company.component */ "./src/app/modules/company-management/new-company/new-company.component.ts");








const routes = [
    {
        path: '',
        component: _company_management_component__WEBPACK_IMPORTED_MODULE_3__["CompanyManagementComponent"],
        children: [
            {
                path: 'companies',
                component: _companies_companies_component__WEBPACK_IMPORTED_MODULE_2__["CompaniesComponent"]
            },
            {
                path: 'new',
                component: _new_company_new_company_component__WEBPACK_IMPORTED_MODULE_5__["NewCompanyComponent"]
            },
            {
                path: 'edit/:id',
                component: _edit_company_edit_company_component__WEBPACK_IMPORTED_MODULE_4__["EditCompanyComponent"],
                pathMatch: 'full'
            },
            { path: '', redirectTo: '', pathMatch: 'full' },
            { path: '**', redirectTo: '', pathMatch: 'full' },
        ],
    },
];
class CompanyManagementRoutingModule {
}
CompanyManagementRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CompanyManagementRoutingModule });
CompanyManagementRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CompanyManagementRoutingModule_Factory(t) { return new (t || CompanyManagementRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CompanyManagementRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyManagementRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/company-management/company-management.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/company-management/company-management.module.ts ***!
  \*************************************************************************/
/*! exports provided: CompanyManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyManagementModule", function() { return CompanyManagementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _company_management_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company-management-routing.module */ "./src/app/modules/company-management/company-management-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/fesm2015/form-field.js");
/* harmony import */ var _new_company_new_company_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-company/new-company.component */ "./src/app/modules/company-management/new-company/new-company.component.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/fesm2015/snack-bar.js");
/* harmony import */ var src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/service/snackbar.service */ "./src/app/shared/service/snackbar.service.ts");
/* harmony import */ var _companies_companies_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./companies/companies.component */ "./src/app/modules/company-management/companies/companies.component.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _edit_company_edit_company_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./edit-company/edit-company.component */ "./src/app/modules/company-management/edit-company/edit-company.component.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/fesm2015/select.js");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-inline-svg */ "./node_modules/ng-inline-svg/lib_esmodule/index.js");


















class CompanyManagementModule {
}
CompanyManagementModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CompanyManagementModule });
CompanyManagementModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CompanyManagementModule_Factory(t) { return new (t || CompanyManagementModule)(); }, providers: [src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_9__["SnackbarService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _company_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["CompanyManagementRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["NgxDatatableModule"],
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_15__["InlineSVGModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CompanyManagementModule, { declarations: [_new_company_new_company_component__WEBPACK_IMPORTED_MODULE_7__["NewCompanyComponent"], _companies_companies_component__WEBPACK_IMPORTED_MODULE_10__["CompaniesComponent"], _edit_company_edit_company_component__WEBPACK_IMPORTED_MODULE_13__["EditCompanyComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _company_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["CompanyManagementRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["NgxDatatableModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_15__["InlineSVGModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyManagementModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_new_company_new_company_component__WEBPACK_IMPORTED_MODULE_7__["NewCompanyComponent"], _companies_companies_component__WEBPACK_IMPORTED_MODULE_10__["CompaniesComponent"], _edit_company_edit_company_component__WEBPACK_IMPORTED_MODULE_13__["EditCompanyComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _company_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["CompanyManagementRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                    _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["NgxDatatableModule"],
                    ng_inline_svg__WEBPACK_IMPORTED_MODULE_15__["InlineSVGModule"].forRoot()
                ],
                providers: [src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_9__["SnackbarService"]],
                entryComponents: [_new_company_new_company_component__WEBPACK_IMPORTED_MODULE_7__["NewCompanyComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/company-management/edit-company/edit-company.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/company-management/edit-company/edit-company.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EditCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCompanyComponent", function() { return EditCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/auth/_services/auth.service */ "./src/app/modules/auth/_services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _company_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../company-management.service */ "./src/app/modules/company-management/company-management.service.ts");
/* harmony import */ var src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/notification.service */ "./src/app/shared/service/notification.service.ts");
/* harmony import */ var src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/users.service */ "./src/app/shared/service/users.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/fesm2015/core.js");















function EditCompanyComponent_form_0_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Company Name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditCompanyComponent_form_0_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditCompanyComponent_form_0_div_23_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.deleteOneCompany(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditCompanyComponent_form_0_mat_error_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Company Name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditCompanyComponent_form_0_div_46_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditCompanyComponent_form_0_div_46_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.deleteOneCompany(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditCompanyComponent_form_0_div_62_mat_error_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " AdServerURL is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditCompanyComponent_form_0_div_62_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditCompanyComponent_form_0_div_62_mat_error_4_Template, 2, 0, "mat-error", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditCompanyComponent_form_0_div_62_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const i_r13 = ctx.index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.removeAdServerUrl(i_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const adUrlItem_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", adUrlItem_r12.get("adServerUrl").errors == null ? null : adUrlItem_r12.get("adServerUrl").errors.required);
} }
function EditCompanyComponent_form_0_div_70_mat_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reportingProvider_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", reportingProvider_r25.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", reportingProvider_r25.viewValue, " ");
} }
function EditCompanyComponent_form_0_div_70_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Reporting Provider is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditCompanyComponent_form_0_div_70_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is not valid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditCompanyComponent_form_0_div_70_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditCompanyComponent_form_0_div_70_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ApiUrl Name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditCompanyComponent_form_0_div_70_mat_error_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ApiKey Name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditCompanyComponent_form_0_div_70_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditCompanyComponent_form_0_div_70_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const i_r18 = ctx.index; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.removeReportingProvider(i_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Reporting Providers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function EditCompanyComponent_form_0_div_70_Template_mat_select_selectionChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.handleChangeProvider($event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EditCompanyComponent_form_0_div_70_mat_option_15_Template, 2, 2, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EditCompanyComponent_form_0_div_70_mat_error_16_Template, 2, 0, "mat-error", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, EditCompanyComponent_form_0_div_70_mat_error_21_Template, 2, 0, "mat-error", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, EditCompanyComponent_form_0_div_70_mat_error_25_Template, 2, 0, "mat-error", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, EditCompanyComponent_form_0_div_70_mat_error_30_Template, 2, 0, "mat-error", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, EditCompanyComponent_form_0_div_70_mat_error_34_Template, 2, 0, "mat-error", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reportItem_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Reporting Providers - ", i_r18 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.reportingProviderHandleList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", reportItem_r17.get("reportingProvider").errors == null ? null : reportItem_r17.get("reportingProvider").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", reportItem_r17.get("email").errors == null ? null : reportItem_r17.get("email").errors.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", reportItem_r17.get("password").errors == null ? null : reportItem_r17.get("password").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", reportItem_r17.get("apiUrl").errors == null ? null : reportItem_r17.get("apiUrl").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", reportItem_r17.get("apiKey").errors == null ? null : reportItem_r17.get("apiKey").errors.required);
} }
function EditCompanyComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function EditCompanyComponent_form_0_Template_form_submit_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.updateOneCompany($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Edit Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EditCompanyComponent_form_0_mat_error_15_Template, 2, 0, "mat-error", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditCompanyComponent_form_0_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.back(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, EditCompanyComponent_form_0_div_23_Template, 3, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Add Stats");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function EditCompanyComponent_form_0_Template_form_submit_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.updateOneCompany($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, EditCompanyComponent_form_0_mat_error_38_Template, 2, 0, "mat-error", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditCompanyComponent_form_0_Template_button_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.back(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, EditCompanyComponent_form_0_div_46_Template, 3, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Ad Server Url");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditCompanyComponent_form_0_Template_button_click_57_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.addAdServerUrl($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, EditCompanyComponent_form_0_div_62_Template, 8, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditCompanyComponent_form_0_Template_button_click_65_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.handleReportingProvider(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, EditCompanyComponent_form_0_div_70_Template, 35, 8, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.companyFG);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 10, ctx_r0.companyFG.value), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.companyFG.get("name").errors == null ? null : ctx_r0.companyFG.get("name").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentUserRole == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.companyFG);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 12, ctx_r0.companyFG.value), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.companyFG.get("name").errors == null ? null : ctx_r0.companyFG.get("name").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentUserRole == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.adServerUrls.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.reportingProviders.controls);
} }
function EditCompanyComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " How did you get here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Sorry you can't access the page you're looking for. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " There may be a misspelling in the URL entered,");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "or the page you are looking for may no longer exist. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class EditCompanyComponent {
    constructor(fb, authService, route, companyManagementService, notification, userService, router) {
        this.fb = fb;
        this.authService = authService;
        this.route = route;
        this.companyManagementService = companyManagementService;
        this.notification = notification;
        this.userService = userService;
        this.router = router;
        this.hidden = false;
        this.reportingProviderList = [
            { value: "apptitude", viewValue: "Apptitude" },
            { value: "bing-direct", viewValue: "Bing Direct" },
            { value: "hopkins", viewValue: "Hopkins" },
            { value: "lyons", viewValue: "Lyons" },
            { value: "media-net", viewValue: "Media.net" },
            { value: "perion", viewValue: "Perion" },
            { value: "rubi", viewValue: "Rubi" },
            { value: "verizon-direct", viewValue: "Verizon Direct" },
        ];
        this.reportingProviderHandleList = [];
        this.currentUser = this.authService.currentUserValue;
        this.currentUserRole = this.currentUser.role;
        this.localStorageCompany = this.getSelectedCompanyFromLocalStorage();
    }
    ngOnInit() {
        //access page part
        if (!this.localStorageCompany) {
            this.hidden = true;
            this.notification.showError("Please select your Company!", "");
        }
        else {
            this.hidden = false;
        }
        this.reportingProviderHandleList = this.reportingProviderList.sort((a, b) => (a.viewValue > b.viewValue) ? 1 : -1);
        //Create update formgroup
        this.companyFG = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            adServerUrls: this.fb.array([]),
            reportingProviders: this.fb.array([]),
        });
        //Get the current company to edit
        if (this.route.snapshot.params.id) {
            this.companyManagementService.getOneCompany(this.route.snapshot.params.id).subscribe(res => {
                this.company = res;
                res['adServerUrls'].map((item) => {
                    this.adServerUrls.push(this.fb.group(item));
                });
                res['reportingProviders'].map((reporting) => {
                    this.reportingProviders.push(this.fb.group(reporting));
                });
                this.companyFG.setValue({
                    name: res['name'],
                    adServerUrls: res['adServerUrls'],
                    reportingProviders: res['reportingProviders']
                });
            });
        }
        else {
            // this.user = this.authService.currentUserSubject.value as any;
        }
    }
    //Gets the Selected Company from Local Storage
    getSelectedCompanyFromLocalStorage() {
        return this.userService.getSelectedCompanyFromLocalStorage();
    }
    //Update one company
    //Checks to see if edits were made
    //If edits were made updates current company with new updated fields
    updateOneCompany($event) {
        this.companyFG.markAllAsTouched();
        if (this.companyFG.valid) {
            this.company = Object.assign(Object.assign({}, this.company), this.companyFG.value);
            this.companyManagementService.updateOneCompany(this.company).subscribe(x => {
                this.notification.showSuccess('Successfully updated company.', "");
            }, (err) => {
                this.notification.showError(`Error updating company: ${err.statusText}`, "");
            });
        }
    }
    deleteOneCompany() {
        this.companyManagementService.deleteOneCompany(this.company).subscribe(x => {
            this.notification.showSuccess('Successfully deleted company.', "");
            this.router.navigate(['/company-management/companies']).then(() => {
                window.location.reload();
            });
        }, (err) => {
            this.notification.showError(`Error deleting company: ${err.statusText}`, "");
        });
    }
    back() {
        this.router.navigate(['/company-management/companies']);
    }
    get adServerUrls() {
        return this.companyFG.controls['adServerUrls'];
    }
    get reportingProviders() {
        return this.companyFG.controls['reportingProviders'];
    }
    newAdServerUrls() {
        return this.fb.group({
            adServerUrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    addAdServerUrl(event) {
        this.adServerUrls.push(this.newAdServerUrls());
    }
    removeAdServerUrl(i) {
        this.adServerUrls.removeAt(i);
    }
    newReporingProvider() {
        return this.fb.group({
            reportingProvider: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [''],
            password: [''],
            apiUrl: [''],
            apiKey: [''],
        });
    }
    handleReportingProvider() {
        this.reportingProviders.push(this.newReporingProvider());
    }
    handleChangeProvider(event) {
    }
    removeReportingProvider(i) {
        this.reportingProviders.removeAt(i);
    }
}
EditCompanyComponent.ɵfac = function EditCompanyComponent_Factory(t) { return new (t || EditCompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_company_management_service__WEBPACK_IMPORTED_MODULE_4__["CompanyManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
EditCompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditCompanyComponent, selectors: [["app-edit-company"]], decls: 2, vars: 2, consts: [["class", "example-container", 3, "formGroup", "submit", 4, "ngIf"], ["class", "error error-3 d-flex flex-row-fluid bgi-size-cover bgi-position-center", "style", "background-image: url('./assets/media/error/bg3.jpg'); height: 100%;zoom: 1;\n  display: block;\n  min-height: 80vh;\n  font-size: 14px;\n  line-height: 1.4;\n  color: #0e1724;", 4, "ngIf"], [1, "example-container", 3, "formGroup", "submit"], [1, "row"], [1, "col-xl-6"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], [1, "row", "pb-2"], [1, "col-md-12"], ["matInput", "", "formControlName", "name", "placeholder", "Company Name"], [4, "ngIf"], [1, "col-md-6"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "save-button"], ["mat-raised-button", "", "color", "secondary", 1, "back-button", 3, "click"], ["class", "row", 4, "ngIf"], [1, "col-md-3"], ["type", "button", 1, "btn", "btn-sm", "btn-icon", "btn-bg-light", "btn-icon-primary", "btn-hover-primary", 3, "click"], [1, "flaticon-add-circular-button"], ["formArrayName", "adServerUrls"], ["class", "row", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "col-xl-3", "mb-3"], [1, "col-xl-12"], ["formArrayName", "reportingProviders"], ["class", "col-xl-4", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "delete", 3, "click"], [1, "row", 3, "formGroupName"], [1, "col-md-10"], ["matInput", "", "placeholder", "Ad Server Url", "formControlName", "adServerUrl"], [1, "col-md-2"], [1, "btn", "btn-sm", "btn-icon", "btn-bg-light", "btn-icon-danger", "btn-hover-danger", 3, "click"], [1, "flaticon2-line"], [1, "col-xl-4", 3, "formGroupName"], [1, "card-title", "col-12", 2, "justify-content", "space-between", "display", "flex"], ["matNativeControl", "", "formControlName", "reportingProvider", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "email", "placeholder", "Email"], ["matInput", "", "formControlName", "password", "placeholder", "Password", "type", "password", "autocomplete", "off"], ["matInput", "", "formControlName", "apiUrl", "placeholder", "ApiUrl"], ["matInput", "", "formControlName", "apiKey", "placeholder", "ApiKey"], [3, "value"], [1, "error", "error-3", "d-flex", "flex-row-fluid", "bgi-size-cover", "bgi-position-center", 2, "background-image", "url('./assets/media/error/bg3.jpg')", "height", "100%", "zoom", "1", "display", "block", "min-height", "80vh", "font-size", "14px", "line-height", "1.4", "color", "#0e1724"], [1, "px-10", "px-md-30", "py-10", "py-md-0", "d-flex", "flex-column", "justify-content-md-center"], [1, "display-4", "font-weight-boldest", "text-white", "mb-12"], [1, "font-size-h1", "font-weight-boldest", "text-dark-75"], [1, "font-size-h4", "line-height-md"]], template: function EditCompanyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditCompanyComponent_form_0_Template, 71, 14, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditCompanyComponent_div_1_Template, 10, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hidden);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["JsonPipe"]], styles: [".save-button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.back-button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.delete[_ngcontent-%COMP%] {\n  margin: 5px auto;\n  cursor: pointer;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21wYW55LW1hbmFnZW1lbnQvZWRpdC1jb21wYW55L2VkaXQtY29tcGFueS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tcGFueS1tYW5hZ2VtZW50L2VkaXQtY29tcGFueS9lZGl0LWNvbXBhbnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2F2ZS1idXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYmFjay1idXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZGVsZXRlIHtcclxuICBtYXJnaW46IDVweCBhdXRvO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditCompanyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-company',
                templateUrl: './edit-company.component.html',
                styleUrls: ['./edit-company.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _company_management_service__WEBPACK_IMPORTED_MODULE_4__["CompanyManagementService"] }, { type: src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }, { type: src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/company-management/new-company/new-company.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/company-management/new-company/new-company.component.ts ***!
  \*********************************************************************************/
/*! exports provided: NewCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCompanyComponent", function() { return NewCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _company_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../company-management.service */ "./src/app/modules/company-management/company-management.service.ts");
/* harmony import */ var src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/notification.service */ "./src/app/shared/service/notification.service.ts");
/* harmony import */ var src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/users.service */ "./src/app/shared/service/users.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/fesm2015/core.js");













function NewCompanyComponent_form_0_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Company Name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewCompanyComponent_form_0_div_38_mat_error_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " AdServerURL is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewCompanyComponent_form_0_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NewCompanyComponent_form_0_div_38_mat_error_4_Template, 2, 0, "mat-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewCompanyComponent_form_0_div_38_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const i_r6 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.removeAdServerUrl(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const adUrlItem_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", adUrlItem_r5.get("adServerUrl").errors == null ? null : adUrlItem_r5.get("adServerUrl").errors.required);
} }
function NewCompanyComponent_form_0_div_46_mat_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reportingProvider_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", reportingProvider_r18.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", reportingProvider_r18.viewValue, " ");
} }
function NewCompanyComponent_form_0_div_46_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Reporting Provider is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewCompanyComponent_form_0_div_46_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is not valid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewCompanyComponent_form_0_div_46_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewCompanyComponent_form_0_div_46_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ApiUrl Name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewCompanyComponent_form_0_div_46_mat_error_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ApiKey Name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewCompanyComponent_form_0_div_46_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewCompanyComponent_form_0_div_46_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const i_r11 = ctx.index; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.removeReportingProvider(i_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Reporting Providers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-select", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function NewCompanyComponent_form_0_div_46_Template_mat_select_selectionChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.handleChangeProvider($event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NewCompanyComponent_form_0_div_46_mat_option_15_Template, 2, 2, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NewCompanyComponent_form_0_div_46_mat_error_16_Template, 2, 0, "mat-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, NewCompanyComponent_form_0_div_46_mat_error_21_Template, 2, 0, "mat-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, NewCompanyComponent_form_0_div_46_mat_error_25_Template, 2, 0, "mat-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, NewCompanyComponent_form_0_div_46_mat_error_30_Template, 2, 0, "mat-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, NewCompanyComponent_form_0_div_46_mat_error_34_Template, 2, 0, "mat-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reportItem_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Reporting Providers - ", i_r11 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.reportingProviderHandleList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", reportItem_r10.get("reportingProvider").errors == null ? null : reportItem_r10.get("reportingProvider").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", reportItem_r10.get("email").errors == null ? null : reportItem_r10.get("email").errors.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", reportItem_r10.get("password").errors == null ? null : reportItem_r10.get("password").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", reportItem_r10.get("apiUrl").errors == null ? null : reportItem_r10.get("apiUrl").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", reportItem_r10.get("apiKey").errors == null ? null : reportItem_r10.get("apiKey").errors.required);
} }
function NewCompanyComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function NewCompanyComponent_form_0_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Create New Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NewCompanyComponent_form_0_mat_error_17_Template, 2, 0, "mat-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Ad Server Url");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewCompanyComponent_form_0_Template_button_click_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.addAdServerUrl($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, NewCompanyComponent_form_0_div_38_Template, 8, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewCompanyComponent_form_0_Template_button_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.handleReportingProvider(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, NewCompanyComponent_form_0_div_46_Template, 35, 8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.companyFG);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 5, ctx_r0.companyFG.value), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.companyFG.get("name").errors == null ? null : ctx_r0.companyFG.get("name").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.adServerUrls.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.reportingProviders.controls);
} }
function NewCompanyComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " How did you get here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Sorry you can't access the page you're looking for. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " There may be a misspelling in the URL entered,");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "or the page you are looking for may no longer exist. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NewCompanyComponent {
    constructor(companyManagementService, notification, fb, userService) {
        this.companyManagementService = companyManagementService;
        this.notification = notification;
        this.fb = fb;
        this.userService = userService;
        this.hidden = false;
        this.intialServerUrl = { adServerUrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] };
        this.intialReportProvider = {
            reportingProvider: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [''],
            password: [''],
            apiUrl: [''],
            apiKey: [''],
        };
        this.reportingProviderList = [
            { value: "apptitude", viewValue: "Apptitude" },
            { value: "bing-direct", viewValue: "Bing Direct" },
            { value: "hopkins", viewValue: "Hopkins" },
            { value: "lyons", viewValue: "Lyons" },
            { value: "media-net", viewValue: "Media.net" },
            { value: "perion", viewValue: "Perion" },
            { value: "rubi", viewValue: "Rubi" },
            { value: "verizon-direct", viewValue: "Verizon Direct" },
        ];
        this.reportingProviderHandleList = [];
        this.localStorageCompany = this.getSelectedCompanyFromLocalStorage();
    }
    ngOnInit() {
        //access page part
        if (!this.localStorageCompany) {
            this.hidden = true;
            this.notification.showError("Please select your Company!", "");
        }
        else {
            this.hidden = false;
        }
        this.companyFG = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            adServerUrls: this.fb.array([]),
            reportingProviders: this.fb.array([]),
        });
        this.adServerUrls.push(this.fb.group(this.intialServerUrl));
        this.reportingProviders.push(this.fb.group(this.intialReportProvider));
        this.reportingProviderHandleList = this.reportingProviderList.sort((a, b) => (a.viewValue > b.viewValue) ? 1 : -1);
    }
    save() {
        this.companyFG.markAllAsTouched();
        if (this.companyFG.valid) {
            this.companyManagementService.addCompany(this.companyFG.value).subscribe(x => {
                this.notification.showSuccess('Successfully added a new company.', "");
                this.companyFG.reset();
                this.formGroupDirective.resetForm();
            }, (err) => {
                this.notification.showError(err.error, "");
            });
        }
    }
    get reportingProviders() {
        return this.companyFG.controls['reportingProviders'];
    }
    get adServerUrls() {
        return this.companyFG.controls['adServerUrls'];
    }
    newAdServerUrls() {
        return this.fb.group({
            adServerUrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    addAdServerUrl(event) {
        this.adServerUrls.push(this.newAdServerUrls());
    }
    removeAdServerUrl(i) {
        this.adServerUrls.removeAt(i);
    }
    removeReportingProvider(i) {
        this.reportingProviders.removeAt(i);
    }
    newReporingProvider() {
        return this.fb.group({
            reportingProvider: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [''],
            password: [''],
            apiUrl: [''],
            apiKey: [''],
        });
    }
    handleReportingProvider() {
        this.reportingProviders.push(this.newReporingProvider());
    }
    handleChangeProvider(event) {
    }
    //Gets the Selected Company from Local Storage
    getSelectedCompanyFromLocalStorage() {
        return this.userService.getSelectedCompanyFromLocalStorage();
    }
}
NewCompanyComponent.ɵfac = function NewCompanyComponent_Factory(t) { return new (t || NewCompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_company_management_service__WEBPACK_IMPORTED_MODULE_2__["CompanyManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"])); };
NewCompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewCompanyComponent, selectors: [["app-new-company"]], viewQuery: function NewCompanyComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formGroupDirective = _t.first);
    } }, decls: 2, vars: 2, consts: [["class", "example-container", 3, "formGroup", "submit", 4, "ngIf"], ["class", "error error-3 d-flex flex-row-fluid bgi-size-cover bgi-position-center", "style", "background-image: url('./assets/media/error/bg3.jpg'); height: 100%;zoom: 1;\n  display: block;\n  min-height: 80vh;\n  font-size: 14px;\n  line-height: 1.4;\n  color: #0e1724;", 4, "ngIf"], [1, "example-container", 3, "formGroup", "submit"], [1, "row"], [1, "col-xl-6"], [1, "col-xl-12"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], [1, "row", "pb-2", "pt-2"], [1, "col-md-12"], ["matInput", "", "formControlName", "name", "placeholder", "Company Name"], [4, "ngIf"], [1, "row", "pt-2"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "save-button"], [1, "row", "pb-2"], [1, "col-md-3"], ["type", "button", 1, "btn", "btn-sm", "btn-icon", "btn-bg-light", "btn-icon-primary", "btn-hover-primary", 3, "click"], [1, "flaticon-add-circular-button"], ["formArrayName", "adServerUrls"], ["class", "row", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "col-xl-3", "mb-3"], ["formArrayName", "reportingProviders"], ["class", "col-xl-4", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "row", 3, "formGroupName"], [1, "col-md-10"], ["matInput", "", "placeholder", "Ad Server Url", "formControlName", "adServerUrl"], [1, "col-md-2"], [1, "btn", "btn-sm", "btn-icon", "btn-bg-light", "btn-icon-danger", "btn-hover-danger", 3, "click"], [1, "flaticon2-line"], [1, "col-xl-4", 3, "formGroupName"], [1, "card-title", "col-12", 2, "justify-content", "space-between", "display", "flex"], ["matNativeControl", "", "formControlName", "reportingProvider", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "email", "placeholder", "Email"], ["matInput", "", "formControlName", "password", "placeholder", "Password", "type", "password", "autocomplete", "off"], ["matInput", "", "formControlName", "apiUrl", "placeholder", "ApiUrl"], ["matInput", "", "formControlName", "apiKey", "placeholder", "ApiKey"], [3, "value"], [1, "error", "error-3", "d-flex", "flex-row-fluid", "bgi-size-cover", "bgi-position-center", 2, "background-image", "url('./assets/media/error/bg3.jpg')", "height", "100%", "zoom", "1", "display", "block", "min-height", "80vh", "font-size", "14px", "line-height", "1.4", "color", "#0e1724"], [1, "px-10", "px-md-30", "py-10", "py-md-0", "d-flex", "flex-column", "justify-content-md-center"], [1, "display-4", "font-weight-boldest", "text-white", "mb-12"], [1, "font-size-h1", "font-weight-boldest", "text-dark-75"], [1, "font-size-h4", "line-height-md"]], template: function NewCompanyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NewCompanyComponent_form_0_Template, 47, 7, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewCompanyComponent_div_1_Template, 10, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hidden);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["JsonPipe"]], styles: [".save-button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21wYW55LW1hbmFnZW1lbnQvbmV3LWNvbXBhbnkvbmV3LWNvbXBhbnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvbXBhbnktbWFuYWdlbWVudC9uZXctY29tcGFueS9uZXctY29tcGFueS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zYXZlLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewCompanyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-company',
                templateUrl: './new-company.component.html',
                styleUrls: ['./new-company.component.scss']
            }]
    }], function () { return [{ type: _company_management_service__WEBPACK_IMPORTED_MODULE_2__["CompanyManagementService"] }, { type: src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] }]; }, { formGroupDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=modules-company-management-company-management-module-es2015.js.map