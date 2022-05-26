(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-user-management-user-management-module"],{

/***/ "./node_modules/ng-validate-equal/__ivy_ngcc__/fesm2015/ng-validate-equal.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/ng-validate-equal/__ivy_ngcc__/fesm2015/ng-validate-equal.js ***!
  \***********************************************************************************/
/*! exports provided: ValidateEqualDirective, ValidateEqualModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateEqualDirective", function() { return ValidateEqualDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateEqualModule", function() { return ValidateEqualModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





var ValidateEqualDirective_1;
let ValidateEqualDirective = ValidateEqualDirective_1 = class ValidateEqualDirective {
    constructor(otherControl) {
        this.otherControl = otherControl;
    }
    ngOnDestroy() {
        if (this.valueChangesSub) {
            this.valueChangesSub.unsubscribe();
        }
    }
    validate(selfControl) {
        const selfControlValue = selfControl.value;
        const otherControl = selfControl.root.get(this.otherControl);
        if (this.valueChangesSub) {
            this.valueChangesSub.unsubscribe();
        }
        // this code works when user types in other control putting the error in self control
        this.valueChangesSub = otherControl.valueChanges.subscribe(otherControlValue => {
            if (!this.isEqual(selfControlValue, otherControlValue) && (selfControl.touched || selfControl.dirty)) {
                selfControl.setErrors({
                    notEqual: true
                });
            }
            else {
                if (selfControl.hasError('notEqual')) {
                    delete selfControl.errors['notEqual'];
                    if (!Object.keys(selfControl.errors).length) {
                        selfControl.setErrors(null);
                    }
                }
            }
        });
        // this code works when the user types in self control putting the error in self control
        if (!this.isEqual(selfControlValue, otherControl.value) && (selfControl.touched || selfControl.dirty)) {
            return {
                notEqual: true
            };
        }
        return null;
    }
    isEqual(val1, val2) {
        val1 = this.unifyEmptyStrings(val1);
        val2 = this.unifyEmptyStrings(val2);
        return val1 === val2;
    }
    unifyEmptyStrings(val) {
        const isDefined = this.isDefined;
        if (val === null || !isDefined(val)) {
            val = '';
        }
        return val;
    }
    isDefined(value) {
        const defaultUndefined = void (0);
        return value !== defaultUndefined;
    }
};
ValidateEqualDirective.ɵfac = function ValidateEqualDirective_Factory(t) { return new (t || ValidateEqualDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('ngValidateEqual')); };
ValidateEqualDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: ValidateEqualDirective, selectors: [["", "ngValidateEqual", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => ValidateEqualDirective_1), multi: true }
        ])] });
ValidateEqualDirective.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"], args: ['ngValidateEqual',] }] }
];
ValidateEqualDirective = ValidateEqualDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"])('ngValidateEqual'))
], ValidateEqualDirective);

let ValidateEqualModule = class ValidateEqualModule {
};
ValidateEqualModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ValidateEqualModule });
ValidateEqualModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ValidateEqualModule_Factory(t) { return new (t || ValidateEqualModule)(); }, imports: [[]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ValidateEqualDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[ngValidateEqual]',
                providers: [
                    { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => ValidateEqualDirective_1), multi: true }
                ]
            }]
    }], function () { return [{ type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
                args: ['ngValidateEqual']
            }] }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ValidateEqualModule, { declarations: [ValidateEqualDirective], exports: [ValidateEqualDirective] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ValidateEqualModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [ValidateEqualDirective],
                imports: [],
                exports: [ValidateEqualDirective]
            }]
    }], null, null); })();

/*
 * Public API Surface of ng-validate-equal
 */

/**
 * Generated bundle index. Do not edit.
 */




//# sourceMappingURL=ng-validate-equal.js.map

/***/ }),

/***/ "./src/app/modules/user-management/edit-users/add-company/add-company.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/user-management/edit-users/add-company/add-company.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AddCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCompanyComponent", function() { return AddCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_shared_service_companies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/companies.service */ "./src/app/shared/service/companies.service.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");










function AddCompanyComponent_mat_list_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const company_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", company_r2._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", company_r2.name, " ");
} }
class AddCompanyComponent {
    constructor(companyService, cdr, dialogRef, data) {
        this.companyService = companyService;
        this.cdr = cdr;
        this.dialogRef = dialogRef;
        this.data = data;
        //Variable for loading indicator
        this.loadingIndicator = true;
    }
    ngOnInit() {
        //Sets current user to data input variable
        this.user = this.data;
        //Sets userCompanies to user's current companies
        this.userCompanies = this.user.companies;
        console.log(this.user);
        console.log(this.userCompanies);
        //Gets ALL companies available
        this.getAllCompanies();
    }
    /**
     * getAllCompanies()
     * * Gets all companies available from companyService method.
     * * @param NONE
     */
    getAllCompanies() {
        this.companyService.getAllCompanies().subscribe((response) => {
            console.log(response);
            this.loadingIndicator = false;
            this.allCompanies = response;
            this.cdr.detectChanges();
        });
    }
    /**
     * save()
     * * Saves added or removed companies to the user's profile
     * TODO: TBD
     * @param NONE
     */
    save() {
        this.user.companies = [...this.userCompanies];
        this.dialogRef.close({ user: this.user });
    }
    /**
     * close()
     * * Closes the dialog and does not make any changes.
     *
     */
    close() {
        this.dialogRef.close();
    }
}
AddCompanyComponent.ɵfac = function AddCompanyComponent_Factory(t) { return new (t || AddCompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_companies_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
AddCompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddCompanyComponent, selectors: [["app-add-company"]], decls: 21, vars: 2, consts: [[1, "mat-typography"], [1, "row"], [1, "col-xl-12"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], ["color", "primary", 3, "ngModel", "ngModelChange"], ["company", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "row", "buttons"], [1, "col-md-6"], ["mat-raised-button", "", "color", "secondary", 1, "save-button", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "back-button", 3, "click"], [3, "value"]], template: function AddCompanyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add or Remove Companies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-selection-list", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_Template_mat_selection_list_ngModelChange_11_listener($event) { return ctx.userCompanies = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AddCompanyComponent_mat_list_option_13_Template, 2, 2, "mat-list-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCompanyComponent_Template_button_click_16_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCompanyComponent_Template_button_click_19_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userCompanies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allCompanies);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatSelectionList"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListOption"]], styles: [".buttons[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 100%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyLW1hbmFnZW1lbnQvZWRpdC11c2Vycy9hZGQtY29tcGFueS9hZGQtY29tcGFueS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy91c2VyLW1hbmFnZW1lbnQvZWRpdC11c2Vycy9hZGQtY29tcGFueS9hZGQtY29tcGFueS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b25zIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddCompanyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-company',
                templateUrl: './add-company.component.html',
                styleUrls: ['./add-company.component.scss'],
            }]
    }], function () { return [{ type: src_app_shared_service_companies_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/user-management/edit-users/add-tag/add-tag.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/user-management/edit-users/add-tag/add-tag.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AddTagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTagComponent", function() { return AddTagComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _user_management_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../user-management.service */ "./src/app/modules/user-management/user-management.service.ts");
/* harmony import */ var src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/snackbar.service */ "./src/app/shared/service/snackbar.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function AddTagComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddTagComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Company is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AddTagComponent {
    constructor(activeModal, userManagementService, fb, sS) {
        this.activeModal = activeModal;
        this.userManagementService = userManagementService;
        this.fb = fb;
        this.sS = sS;
    }
    ngOnInit() {
        this.tagFG = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            company: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    handleSubmit() {
        this.tagFG.markAllAsTouched();
        if (this.tagFG.valid) {
            this.userManagementService.addTag(this.tagFG.value).subscribe(x => {
                console.log(x);
                this.sS.info('Added a new tag');
                this.activeModal.close(x);
            });
        }
    }
}
AddTagComponent.ɵfac = function AddTagComponent_Factory(t) { return new (t || AddTagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_management_service__WEBPACK_IMPORTED_MODULE_3__["UserManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"])); };
AddTagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddTagComponent, selectors: [["app-add-tag"]], decls: 23, vars: 3, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "example-container", 3, "formGroup"], [1, "row"], [1, "col-md-12"], ["type", "text", "matInput", "", "formControlName", "name", "placeholder", "Name"], [4, "ngIf"], ["type", "text", "matInput", "", "formControlName", "company", "placeholder", "Company"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function AddTagComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "New Tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddTagComponent_Template_button_click_3_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AddTagComponent_mat_error_12_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AddTagComponent_mat_error_17_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddTagComponent_Template_button_click_19_listener() { return ctx.activeModal.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddTagComponent_Template_button_click_21_listener() { return ctx.handleSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.tagFG);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tagFG.get("name").errors == null ? null : ctx.tagFG.get("name").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tagFG.get("company").errors == null ? null : ctx.tagFG.get("company").errors.required);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci1tYW5hZ2VtZW50L2VkaXQtdXNlcnMvYWRkLXRhZy9hZGQtdGFnLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddTagComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-tag',
                templateUrl: './add-tag.component.html',
                styleUrls: ['./add-tag.component.scss']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }, { type: _user_management_service__WEBPACK_IMPORTED_MODULE_3__["UserManagementService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/user-management/edit-users/edit-users.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/user-management/edit-users/edit-users.component.ts ***!
  \****************************************************************************/
/*! exports provided: EditUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUsersComponent", function() { return EditUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _user_password_reset_user_password_reset_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-password-reset/user-password-reset.component */ "./src/app/modules/user-management/edit-users/user-password-reset/user-password-reset.component.ts");
/* harmony import */ var _add_tag_add_tag_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-tag/add-tag.component */ "./src/app/modules/user-management/edit-users/add-tag/add-tag.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _add_company_add_company_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-company/add-company.component */ "./src/app/modules/user-management/edit-users/add-company/add-company.component.ts");
/* harmony import */ var _user_management_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user-management.service */ "./src/app/modules/user-management/user-management.service.ts");
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../auth/_services/auth.service */ "./src/app/modules/auth/_services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/snackbar.service */ "./src/app/shared/service/snackbar.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_shared_service_companies_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/service/companies.service */ "./src/app/shared/service/companies.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");

























function EditUsersComponent_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditUsersComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is not valid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditUsersComponent_mat_error_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Role is not valid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditUsersComponent_mat_header_cell_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditUsersComponent_mat_cell_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r11.name, " ");
} }
function EditUsersComponent_mat_header_cell_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Company ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditUsersComponent_mat_cell_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r12.company, " ");
} }
function EditUsersComponent_mat_header_row_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-header-row");
} }
function EditUsersComponent_mat_row_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-row");
} }
function EditUsersComponent_mat_list_74_mat_list_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const company_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", company_r16.name, " ");
} }
function EditUsersComponent_mat_list_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list", null, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EditUsersComponent_mat_list_74_mat_list_item_2_Template, 3, 1, "mat-list-item", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r10.userCompanies);
} }
class EditUsersComponent {
    constructor(userManagementService, authService, route, sS, modalService, companyService, snackBarService, dialog) {
        this.userManagementService = userManagementService;
        this.authService = authService;
        this.route = route;
        this.sS = sS;
        this.modalService = modalService;
        this.companyService = companyService;
        this.snackBarService = snackBarService;
        this.dialog = dialog;
        this.tagsColumnDisplay = ['name', 'company'];
        this.tags = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.userProfileFG = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
        if (this.route.snapshot.params.id) {
            this.getUserData(this.route.snapshot.params.id);
            // await this.getUserCompanies(this.user.companies);
        }
        else {
            this.user = this.authService.currentUserSubject.value;
        }
    }
    /**
     * getUserData(id)
     * @param id: User _key value
     */
    getUserData(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //Pulls the specific USER from the database.
            this.user = yield this.userManagementService.getUser(id).toPromise();
            console.log("user information", this.user);
            //If user has companies on their account
            if (this.user.companies.length) {
                this.userCompanies = yield this.companyService
                    .getUserCompanies(this.user.companies)
                    .toPromise();
                console.log(this.userCompanies);
            }
            //Patches value into FormGroup
            this.userProfileFG.patchValue(this.user);
        });
    }
    updateUserProfile($event) {
        if (this.userProfileFG.valid) {
            this.user = Object.assign(Object.assign({}, this.user), this.userProfileFG.value);
            this.userManagementService.updateUser(this.user).subscribe((x) => {
                this.sS.info('user profile updated');
            });
        }
    }
    openPasswordResetDialog() {
        const modalRef = this.modalService.open(_user_password_reset_user_password_reset_component__WEBPACK_IMPORTED_MODULE_3__["UserPasswordResetComponent"], {
            size: 'sm',
        });
        modalRef.componentInstance.data = {
            id: this.user._key,
        };
        modalRef.result.then((c) => { });
    }
    openAddTagDialog() {
        const modalRef = this.modalService.open(_add_tag_add_tag_component__WEBPACK_IMPORTED_MODULE_4__["AddTagComponent"], {
            size: 'sm',
        });
        modalRef.componentInstance.data = {};
        modalRef.result.then((c) => {
            var tags = this.user.tags || [];
            var tagsId = this.user.tagsId || [];
            tags.push(c);
            tagsId.push(c._key);
            this.user.tagsId = tagsId;
            this.tags.data = tags;
            this.userManagementService.updateUser(this.user).subscribe((x) => { });
        });
    }
    //Add/Edit Companies to a user profile
    openAddCompanyDialog() {
        console.log(this.user);
        let dialogRef = this.dialog
            .open(_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_6__["AddCompanyComponent"], {
            height: 'auto',
            width: '600px',
            data: this.user,
        })
            .afterClosed()
            .subscribe((response) => {
            //If user hits save
            if (response) {
                console.log(response);
                //New variable readability -- all user data
                this.user = response.user;
                //Updates current user with new company selection.
                this.userManagementService.updateUser(this.user).subscribe((x) => {
                    //
                    this.getUserData(this.user._key);
                    this.snackBarService.info(`Updated  ${this.user.fullname}'s companies.`);
                });
            }
        });
        // dialogRef.afterClosed().subscribe((result) => {
        //   console.log(`Dialog result: ${result}`);
        // });
        // console.log(this.user);
        // const initialState = { data: this.user };
        // const modalRef = this.modalService.open(AddCompanyComponent, {
        //   size: 'md',
        // });
        // modalRef.componentInstance.companies = [...this.user.companies];
        // modalRef.result.then((res) => {
        //   //If a result is passed back, update the user profile with new companies.
        //   if (res) {
        //     this.user.companies = [...res];
        //     this.userManagementService.updateUser(this.user).subscribe((x) => {
        //       this.getUserData(this.user._key);
        //       this.snackBarService.info(
        //         `Updated  ${this.user.fullname}'s companies.`
        //       );
        //     });
        //   }
        // });
    }
}
EditUsersComponent.ɵfac = function EditUsersComponent_Factory(t) { return new (t || EditUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_management_service__WEBPACK_IMPORTED_MODULE_7__["UserManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_10__["SnackbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_companies_service__WEBPACK_IMPORTED_MODULE_12__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_10__["SnackbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"])); };
EditUsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditUsersComponent, selectors: [["app-edit-users"]], decls: 75, vars: 12, consts: [[1, "row"], [1, "col-xl-6"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], ["mat-button", "", "color", "primary", "type", "button", 3, "click"], [1, "card-body"], [1, "example-container", 3, "formGroup", "submit"], [1, "col-md-12"], ["matInput", "", "formControlName", "fullname", "placeholder", "Full Name"], [4, "ngIf"], ["matInput", "", "formControlName", "email", "placeholder", "Email"], ["formControlName", "role", "placeholder", "Role"], [3, "value"], [1, "row", "updateProfile"], ["mat-raised-button", "", "color", "primary", "type", "submit"], [1, "card-toolbar"], [1, "example-tools", "justify-content-center"], [1, "btn", "btn-sm", "btn-icon", "btn-bg-light", "btn-icon-success", "btn-hover-success", 3, "click"], [1, "flaticon-add-circular-button"], [1, "btn", "btn-sm", "btn-icon", "btn-bg-light", "btn-icon-danger", "btn-hover-danger"], [1, "flaticon2-line"], [1, "example-container", "mat-elevation-z8"], [3, "dataSource"], ["table", ""], ["matColumnDef", "name"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "company"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["mat-button", "", "color", "primary", 3, "click"], [1, "col-xl-12"], ["company", ""], [4, "ngFor", "ngForOf"]], template: function EditUsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Update Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditUsersComponent_Template_button_click_7_listener() { return ctx.openPasswordResetDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Reset Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function EditUsersComponent_Template_form_submit_10_listener($event) { return ctx.updateUserProfile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, EditUsersComponent_mat_error_15_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, EditUsersComponent_mat_error_20_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Super Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Publisher");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Advertiser");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, EditUsersComponent_mat_error_33_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Update Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditUsersComponent_Template_button_click_46_listener() { return ctx.openAddTagDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "mat-table", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](54, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, EditUsersComponent_mat_header_cell_55_Template, 2, 0, "mat-header-cell", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, EditUsersComponent_mat_cell_56_Template, 2, 1, "mat-cell", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](57, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, EditUsersComponent_mat_header_cell_58_Template, 2, 0, "mat-header-cell", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, EditUsersComponent_mat_cell_59_Template, 2, 1, "mat-cell", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, EditUsersComponent_mat_header_row_60_Template, 1, 0, "mat-header-row", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, EditUsersComponent_mat_row_61_Template, 1, 0, "mat-row", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Companies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditUsersComponent_Template_button_click_69_listener() { return ctx.openAddCompanyDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, " Add or Remove ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, EditUsersComponent_mat_list_74_Template, 3, 1, "mat-list", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.userProfileFG);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userProfileFG.get("fullname").errors == null ? null : ctx.userProfileFG.get("fullname").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userProfileFG.get("email").errors == null ? null : ctx.userProfileFG.get("email").errors.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userProfileFG.get("role").errors == null ? null : ctx.userProfileFG.get("role").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.tags);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.tagsColumnDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.tagsColumnDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOption"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRowDef"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatError"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRow"], _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListItem"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDivider"]], styles: [".card-title[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: space-between;\n}\n\n.updateProfile[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.warning-text[_ngcontent-%COMP%] {\n  color: #f00;\n}\n\n.list-group[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-height: 300px;\n  min-width: 300px;\n}\n\n.mat-table[_ngcontent-%COMP%] {\n  overflow: auto;\n  max-height: 300px;\n}\n\n.example[_ngcontent-%COMP%]   .example-preview[_ngcontent-%COMP%] {\n  min-height: 165px;\n  padding: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyLW1hbmFnZW1lbnQvZWRpdC11c2Vycy9lZGl0LXVzZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBR0U7RUFDRSxlQUFBO0FBQUo7O0FBSUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBR0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7QUFBRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci1tYW5hZ2VtZW50L2VkaXQtdXNlcnMvZWRpdC11c2Vycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXRpdGxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi51cGRhdGVQcm9maWxlIGJ1dHRvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi53YXJuaW5nLXRleHQge1xyXG4gIGNvbG9yOiAjZjAwO1xyXG59XHJcblxyXG4ubGlzdC1ncm91cCB7XHJcbiAgLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG59XHJcbi5tYXQtdGFibGUge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZSAuZXhhbXBsZS1wcmV2aWV3IHtcclxuICBtaW4taGVpZ2h0OiAxNjVweDtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditUsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-edit-users',
                templateUrl: './edit-users.component.html',
                styleUrls: ['./edit-users.component.scss'],
            }]
    }], function () { return [{ type: _user_management_service__WEBPACK_IMPORTED_MODULE_7__["UserManagementService"] }, { type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] }, { type: src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_10__["SnackbarService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"] }, { type: src_app_shared_service_companies_service__WEBPACK_IMPORTED_MODULE_12__["CompanyService"] }, { type: src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_10__["SnackbarService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/user-management/edit-users/user-password-reset/user-password-reset.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/user-management/edit-users/user-password-reset/user-password-reset.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: UserPasswordResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPasswordResetComponent", function() { return UserPasswordResetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_service_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/helper.service */ "./src/app/shared/service/helper.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _user_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../user-management.service */ "./src/app/modules/user-management/user-management.service.ts");
/* harmony import */ var src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/snackbar.service */ "./src/app/shared/service/snackbar.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











function UserPasswordResetComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserPasswordResetComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserPasswordResetComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is not match");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class UserPasswordResetComponent {
    constructor(activeModal, userManagementService, fb, sS) {
        this.activeModal = activeModal;
        this.userManagementService = userManagementService;
        this.fb = fb;
        this.sS = sS;
    }
    ngOnInit() {
        this.passwordFG = this.fb.group({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            passwordConfirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        }, { validator: src_app_shared_service_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"].passwordConfirming });
    }
    handleSubmit() {
        this.passwordFG.markAllAsTouched();
        if (this.passwordFG.valid) {
            var password = this.passwordFG.value.password;
            var id = this.data.id;
            this.userManagementService.resetPassword(id, password).subscribe(x => {
                this.sS.info('password has been reset');
                this.activeModal.close();
            });
        }
    }
}
UserPasswordResetComponent.ɵfac = function UserPasswordResetComponent_Factory(t) { return new (t || UserPasswordResetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_management_service__WEBPACK_IMPORTED_MODULE_4__["UserManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_5__["SnackbarService"])); };
UserPasswordResetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserPasswordResetComponent, selectors: [["app-user-password-reset"]], inputs: { data: "data" }, decls: 24, vars: 4, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "example-container", 3, "formGroup"], [1, "row"], [1, "col-md-12"], ["type", "password", "matInput", "", "formControlName", "password", "placeholder", "Password"], [4, "ngIf"], ["type", "password", "matInput", "", "formControlName", "passwordConfirm", "placeholder", "Confirm Password"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function UserPasswordResetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Update Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserPasswordResetComponent_Template_button_click_3_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, UserPasswordResetComponent_mat_error_12_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, UserPasswordResetComponent_mat_error_17_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, UserPasswordResetComponent_mat_error_18_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserPasswordResetComponent_Template_button_click_20_listener() { return ctx.activeModal.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserPasswordResetComponent_Template_button_click_22_listener() { return ctx.handleSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.passwordFG);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.passwordFG.get("password").errors == null ? null : ctx.passwordFG.get("password").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.passwordFG.get("passwordConfirm").errors == null ? null : ctx.passwordFG.get("passwordConfirm").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.passwordFG.errors == null ? null : ctx.passwordFG.errors.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci1tYW5hZ2VtZW50L2VkaXQtdXNlcnMvdXNlci1wYXNzd29yZC1yZXNldC91c2VyLXBhc3N3b3JkLXJlc2V0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserPasswordResetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-password-reset',
                templateUrl: './user-password-reset.component.html',
                styleUrls: ['./user-password-reset.component.scss']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] }, { type: _user_management_service__WEBPACK_IMPORTED_MODULE_4__["UserManagementService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_5__["SnackbarService"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/user-management/roles/roles.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/user-management/roles/roles.component.ts ***!
  \******************************************************************/
/*! exports provided: RolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesComponent", function() { return RolesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");



function RolesComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RolesComponent_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r6.position, " ");
} }
function RolesComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Role ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RolesComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r7.name, " ");
} }
function RolesComponent_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 9);
} }
function RolesComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 10);
} }
const ELEMENT_DATA = [
    { position: 1, name: "Super Admin" },
    { position: 2, name: "Admin" },
    { position: 3, name: "Advertiser" },
    { position: 4, name: "Publisher" },
];
class RolesComponent {
    constructor() {
        this.displayedColumns = ["position", "name"];
        this.dataSource = ELEMENT_DATA;
    }
    ngOnInit() { }
}
RolesComponent.ɵfac = function RolesComponent_Factory(t) { return new (t || RolesComponent)(); };
RolesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RolesComponent, selectors: [["app-roles"]], decls: 9, vars: 3, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function RolesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RolesComponent_th_2_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RolesComponent_td_3_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RolesComponent_th_5_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RolesComponent_td_6_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RolesComponent_tr_7_Template, 1, 0, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RolesComponent_tr_8_Template, 1, 0, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyLW1hbmFnZW1lbnQvcm9sZXMvcm9sZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3VzZXItbWFuYWdlbWVudC9yb2xlcy9yb2xlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RolesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-roles",
                templateUrl: "./roles.component.html",
                styleUrls: ["./roles.component.scss"],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/user-management/user-management-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/user-management/user-management-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: UserManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementRoutingModule", function() { return UserManagementRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-management.component */ "./src/app/modules/user-management/user-management.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users/users.component */ "./src/app/modules/user-management/users/users.component.ts");
/* harmony import */ var _roles_roles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./roles/roles.component */ "./src/app/modules/user-management/roles/roles.component.ts");
/* harmony import */ var _edit_users_edit_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-users/edit-users.component */ "./src/app/modules/user-management/edit-users/edit-users.component.ts");








const routes = [
    {
        path: '',
        component: _user_management_component__WEBPACK_IMPORTED_MODULE_2__["UserManagementComponent"],
        children: [
            {
                path: 'publisher-users',
                component: _users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"],
            },
            {
                path: 'roles',
                component: _roles_roles_component__WEBPACK_IMPORTED_MODULE_4__["RolesComponent"],
            },
            {
                path: 'edit-user',
                component: _edit_users_edit_users_component__WEBPACK_IMPORTED_MODULE_5__["EditUsersComponent"],
            },
            {
                path: 'edit/:id',
                component: _edit_users_edit_users_component__WEBPACK_IMPORTED_MODULE_5__["EditUsersComponent"],
                pathMatch: 'full'
            },
            { path: '', redirectTo: 'publisher-users', pathMatch: 'full' },
            { path: '**', redirectTo: 'publisher-users', pathMatch: 'full' },
        ],
    },
];
class UserManagementRoutingModule {
}
UserManagementRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserManagementRoutingModule });
UserManagementRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserManagementRoutingModule_Factory(t) { return new (t || UserManagementRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserManagementRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserManagementRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/user-management/user-management.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/user-management/user-management.component.ts ***!
  \**********************************************************************/
/*! exports provided: UserManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementComponent", function() { return UserManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class UserManagementComponent {
    constructor() { }
    ngOnInit() { }
}
UserManagementComponent.ɵfac = function UserManagementComponent_Factory(t) { return new (t || UserManagementComponent)(); };
UserManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserManagementComponent, selectors: [["app-user-management"]], decls: 1, vars: 0, template: function UserManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-management',
                templateUrl: './user-management.component.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/user-management/user-management.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/user-management/user-management.module.ts ***!
  \*******************************************************************/
/*! exports provided: UserManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementModule", function() { return UserManagementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users/users.component */ "./src/app/modules/user-management/users/users.component.ts");
/* harmony import */ var _roles_roles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./roles/roles.component */ "./src/app/modules/user-management/roles/roles.component.ts");
/* harmony import */ var _user_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-management.component */ "./src/app/modules/user-management/user-management.component.ts");
/* harmony import */ var _user_management_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-management-routing.module */ "./src/app/modules/user-management/user-management-routing.module.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _edit_users_edit_users_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./edit-users/edit-users.component */ "./src/app/modules/user-management/edit-users/edit-users.component.ts");
/* harmony import */ var ng_validate_equal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-validate-equal */ "./node_modules/ng-validate-equal/__ivy_ngcc__/fesm2015/ng-validate-equal.js");
/* harmony import */ var _edit_users_user_password_reset_user_password_reset_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./edit-users/user-password-reset/user-password-reset.component */ "./src/app/modules/user-management/edit-users/user-password-reset/user-password-reset.component.ts");
/* harmony import */ var src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/service/snackbar.service */ "./src/app/shared/service/snackbar.service.ts");
/* harmony import */ var _edit_users_add_tag_add_tag_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./edit-users/add-tag/add-tag.component */ "./src/app/modules/user-management/edit-users/add-tag/add-tag.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _edit_users_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./edit-users/add-company/add-company.component */ "./src/app/modules/user-management/edit-users/add-company/add-company.component.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");

























class UserManagementModule {
}
UserManagementModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserManagementModule });
UserManagementModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserManagementModule_Factory(t) { return new (t || UserManagementModule)(); }, providers: [src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_18__["SnackbarService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
            _user_management_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserManagementRoutingModule"],
            ng_validate_equal__WEBPACK_IMPORTED_MODULE_16__["ValidateEqualModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__["NgxDatatableModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserManagementModule, { declarations: [_users_users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"],
        _roles_roles_component__WEBPACK_IMPORTED_MODULE_3__["RolesComponent"],
        _user_management_component__WEBPACK_IMPORTED_MODULE_4__["UserManagementComponent"],
        _edit_users_edit_users_component__WEBPACK_IMPORTED_MODULE_15__["EditUsersComponent"],
        _edit_users_user_password_reset_user_password_reset_component__WEBPACK_IMPORTED_MODULE_17__["UserPasswordResetComponent"],
        _edit_users_add_tag_add_tag_component__WEBPACK_IMPORTED_MODULE_19__["AddTagComponent"],
        _edit_users_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_21__["AddCompanyComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
        _user_management_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserManagementRoutingModule"],
        ng_validate_equal__WEBPACK_IMPORTED_MODULE_16__["ValidateEqualModule"],
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__["NgxDatatableModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserManagementModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _users_users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"],
                    _roles_roles_component__WEBPACK_IMPORTED_MODULE_3__["RolesComponent"],
                    _user_management_component__WEBPACK_IMPORTED_MODULE_4__["UserManagementComponent"],
                    _edit_users_edit_users_component__WEBPACK_IMPORTED_MODULE_15__["EditUsersComponent"],
                    _edit_users_user_password_reset_user_password_reset_component__WEBPACK_IMPORTED_MODULE_17__["UserPasswordResetComponent"],
                    _edit_users_add_tag_add_tag_component__WEBPACK_IMPORTED_MODULE_19__["AddTagComponent"],
                    _edit_users_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_21__["AddCompanyComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
                    _user_management_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserManagementRoutingModule"],
                    ng_validate_equal__WEBPACK_IMPORTED_MODULE_16__["ValidateEqualModule"],
                    _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__["NgxDatatableModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                ],
                providers: [src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_18__["SnackbarService"]],
                entryComponents: [
                    _edit_users_user_password_reset_user_password_reset_component__WEBPACK_IMPORTED_MODULE_17__["UserPasswordResetComponent"],
                    _edit_users_add_tag_add_tag_component__WEBPACK_IMPORTED_MODULE_19__["AddTagComponent"],
                    _edit_users_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_21__["AddCompanyComponent"],
                    _edit_users_edit_users_component__WEBPACK_IMPORTED_MODULE_15__["EditUsersComponent"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/user-management/user-management.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/user-management/user-management.service.ts ***!
  \********************************************************************/
/*! exports provided: UserManagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementService", function() { return UserManagementService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/service/users.service */ "./src/app/shared/service/users.service.ts");
/* harmony import */ var _shared_service_tags_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/service/tags.service */ "./src/app/shared/service/tags.service.ts");




class UserManagementService {
    constructor(usersService, tagsService) {
        this.usersService = usersService;
        this.tagsService = tagsService;
    }
    resetPassword(userId, password) {
        return this.usersService.resetPassword(userId, password);
    }
    getAllTags() {
        return this.tagsService.getAll();
    }
    addTag(tag) {
        return this.tagsService.add(tag);
    }
    updateUser(user) {
        return this.usersService.updateUser(user);
    }
    getUser(userId) {
        return this.usersService.getUser(userId);
    }
}
UserManagementService.ɵfac = function UserManagementService_Factory(t) { return new (t || UserManagementService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_service_tags_service__WEBPACK_IMPORTED_MODULE_2__["TagsService"])); };
UserManagementService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserManagementService, factory: UserManagementService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserManagementService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"] }, { type: _shared_service_tags_service__WEBPACK_IMPORTED_MODULE_2__["TagsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/user-management/users/users.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/user-management/users/users.component.ts ***!
  \******************************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/users.service */ "./src/app/shared/service/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






function UsersComponent_mat_header_cell_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Full Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UsersComponent_mat_cell_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r11.fullname, " ");
} }
function UsersComponent_mat_header_cell_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UsersComponent_mat_cell_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r12.email, " ");
} }
function UsersComponent_mat_header_cell_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Stat# ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UsersComponent_mat_cell_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r13.tags.length, " ");
} }
function UsersComponent_mat_header_cell_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UsersComponent_mat_cell_22_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_mat_cell_22_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const element_r14 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.handleEditClick(element_r14._key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UsersComponent_mat_header_row_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
} }
function UsersComponent_mat_row_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
} }
class UsersComponent {
    constructor(usersServie, cdr, router, route) {
        this.usersServie = usersServie;
        this.cdr = cdr;
        this.router = router;
        this.route = route;
        this.displayedColumns = ["fullname", "email", "stat", "action"];
        this.users = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.subscritions = [];
    }
    ngOnInit() {
        this.subscritions.push(this.usersServie.getAll().subscribe(data => {
            console.log(data);
            this.users.data = data;
            this.cdr.detectChanges();
        }));
    }
    handleEditClick(userId) {
        this.router.navigateByUrl('/user-management/edit/' + userId);
    }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["app-users"]], decls: 25, vars: 3, consts: [[1, "row"], [1, "col-xl-12"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], [1, "example-container", "mat-elevation-z8"], [3, "dataSource"], ["table", ""], ["matColumnDef", "fullname"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "email"], ["matColumnDef", "stat"], ["matColumnDef", "action"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-table", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, UsersComponent_mat_header_cell_12_Template, 2, 0, "mat-header-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UsersComponent_mat_cell_13_Template, 2, 1, "mat-cell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UsersComponent_mat_header_cell_15_Template, 2, 0, "mat-header-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UsersComponent_mat_cell_16_Template, 2, 1, "mat-cell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, UsersComponent_mat_header_cell_18_Template, 2, 0, "mat-header-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, UsersComponent_mat_cell_19_Template, 2, 1, "mat-cell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, UsersComponent_mat_header_cell_21_Template, 2, 0, "mat-header-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, UsersComponent_mat_cell_22_Template, 3, 0, "mat-cell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, UsersComponent_mat_header_row_23_Template, 1, 0, "mat-header-row", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, UsersComponent_mat_row_24_Template, 1, 0, "mat-row", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci1tYW5hZ2VtZW50L3VzZXJzL3VzZXJzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-users',
                templateUrl: './users.component.html',
                styleUrls: ['./users.component.scss']
            }]
    }], function () { return [{ type: _shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/service/helper.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/service/helper.service.ts ***!
  \**************************************************/
/*! exports provided: HelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperService", function() { return HelperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HelperService {
    constructor() { }
    static passwordConfirming(c) {
        if (c.get('password').value !== c.get('passwordConfirm').value) {
            return { invalid: true };
        }
    }
}
HelperService.ɵfac = function HelperService_Factory(t) { return new (t || HelperService)(); };
HelperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HelperService, factory: HelperService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelperService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-user-management-user-management-module-es2015.js.map