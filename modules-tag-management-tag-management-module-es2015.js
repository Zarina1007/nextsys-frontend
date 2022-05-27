(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-tag-management-tag-management-module"],{

/***/ "./src/app/modules/tag-management/edit-tag/edit-tag.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/tag-management/edit-tag/edit-tag.component.ts ***!
  \***********************************************************************/
/*! exports provided: EditTagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTagComponent", function() { return EditTagComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tag_management_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tag-management.service */ "./src/app/modules/tag-management/tag-management.service.ts");
/* harmony import */ var src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/snackbar.service */ "./src/app/shared/service/snackbar.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");













function EditTagComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditTagComponent_mat_error_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Company name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditTagComponent_mat_option_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const browserVersion_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", browserVersion_r9.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", browserVersion_r9.viewValue, " ");
} }
function EditTagComponent_mat_option_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", country_r10.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", country_r10.viewValue, " ");
} }
function EditTagComponent_mat_option_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const statType_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", statType_r11.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", statType_r11.viewValue, " ");
} }
function EditTagComponent_div_88_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditTagComponent_div_88_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const i_r13 = ctx.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.removeSubid(i_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r13 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r13);
} }
function EditTagComponent_mat_option_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rotationType_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", rotationType_r16.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rotationType_r16.viewValue, " ");
} }
function EditTagComponent_mat_error_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Final URL is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditTagComponent_div_105_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const paramType_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", paramType_r20.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", paramType_r20.viewValue, " ");
} }
function EditTagComponent_div_105_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Param Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-select", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function EditTagComponent_div_105_Template_mat_select_selectionChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const i_r18 = ctx.index; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.updateInitialParams($event, i_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EditTagComponent_div_105_mat_option_12_Template, 2, 2, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function EditTagComponent_div_105_Template_input_keyup_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const i_r18 = ctx.index; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.updateInitialParamURL($event, i_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r18 = ctx.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.paramTypes);
} }
class EditTagComponent {
    constructor(route, tagManagementService, fb, _snackBarService, router) {
        this.route = route;
        this.tagManagementService = tagManagementService;
        this.fb = fb;
        this._snackBarService = _snackBarService;
        this.versionList = [];
        //Get the current tag to edit
        if (this.route.snapshot.params.id) {
            this.tagManagementService.getOneTag(this.route.snapshot.params.id).subscribe(x => {
                this.tag = x;
                var browserVal = [];
                var deviceTypeVal = [];
                var versionVal = [];
                var countryVal = [];
                this.url = x['url'];
                this.initialURL = new URL('https://adserver.com/search');
                for (var bval of x['browser'].toString().split(",")) {
                    browserVal.push(bval);
                }
                for (var dval of x['deviceType'].toString().split(",")) {
                    deviceTypeVal.push(dval);
                }
                for (var vval of x['version'].toString().split(",")) {
                    versionVal.push(vval);
                }
                for (var cval of x['country'].toString().split(",")) {
                    countryVal.push(cval);
                }
                x['subids'].map((item) => {
                    this.subids.push(this.fb.group(item));
                });
                x['params'].map((param) => {
                    this.params.push(this.fb.group(param));
                });
                // this.updateTagFG.patchValue(x);
                this.updateTagFG.setValue({
                    name: x['name'],
                    company: x['name'],
                    advertiser: x['advertiser'],
                    publisher: x['publisher'],
                    browser: browserVal,
                    deviceType: deviceTypeVal,
                    country: countryVal,
                    version: versionVal,
                    adServerUrl: x['adServerUrl'],
                    statType: x['statType'],
                    subids: x['subids'],
                    rotationType: x['rotationType'],
                    url: x['url'],
                    params: x['params'],
                });
            });
        }
    }
    ngOnInit() {
        this.updateTagFG = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            publisher: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            advertiser: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            browser: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            deviceType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            version: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            adServerUrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            statType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            subids: this.fb.array([]),
            rotationType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            url: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            params: this.fb.array([]),
        });
        this.statTypes = this.getStatTypes();
        this.rotationTypes = this.getRotationTypes();
        this.paramTypes = this.getParamTypes();
        this.countries = this.getCountries();
        this.browserVersions = this.getVersions();
    }
    //Update the tag onto the database
    updateTag() {
        this.updateTagFG.markAllAsTouched();
        if (this.updateTagFG.valid) {
            this.tag = Object.assign(Object.assign({}, this.tag), this.updateTagFG.value);
            this.tagManagementService.updateOneTag(this.tag).subscribe(res => {
                this._snackBarService.info('Updated a  tag');
            }, (err) => {
                this._snackBarService.info(err.error);
            });
        }
    }
    get subids() {
        return this.updateTagFG.controls['subids'];
    }
    newSubids() {
        return this.fb.group({
            subid: "",
            limit: "",
            split: ""
        });
    }
    addSubid(event) {
        this.subids.push(this.newSubids());
    }
    removeSubid(i) {
        this.subids.removeAt(i);
    }
    //Detects when URL is pasted into the field
    //https://us.search.yahoo.com/yhs/search?hspart=brandclick&hsimp=yhs-calm&p=flowers
    getUrlParams(url) {
        //Resets the URL params on every change
        this.deleteValueOfFormControl('params');
        if (this.isValidURL(url)) {
            url = new URL(url);
            for (var key of url.searchParams.keys()) {
                let value = url.searchParams.get(key);
                this.addParamsToUrlForm(key, value);
            }
        }
        else {
            return;
        }
    }
    //Gets the value of any form Array
    //Returns a form array
    get params() {
        return this.updateTagFG.controls['params'];
    }
    //Deletes value of any given form control
    deleteValueOfFormControl(controlName) {
        this.params.clear();
    }
    //Updates the original parameters that will be received and sent on the first server request
    //Example: domain.com/search?subid={{dynamic}}&q={{dynamic}}&search=[bing]
    updateInitialParams(param, index) {
        console.log('Updating Initial Params');
        console.log(param, index);
        if (param.value === 'static') {
            console.log('static!');
            this.params.controls[index]
                .get('initialParam')
                .setValue(this.params.controls[index].get('value').value);
            this.createInitialURL();
        }
        else {
            // this.params.controls[index]
            //   .get('initialParam')
            //   .setValue(this.params.controls[index].get('key').value);
        }
    }
    //Checks to see if initialParam mat input field has been touched and updates initial URL
    updateInitialParamURL(value, index) {
        if (this.params.controls[index].get('paramType').value === 'dynamic') {
            this.createInitialURL();
        }
    }
    //Builds the initial URL from the paramaters
    createInitialURL() {
        console.log('Updating URL');
        this.initialURL = new URL('https://adserver.com/search');
        this.params.controls.forEach((element, index) => {
            if (element.value.paramType === 'dynamic') {
                this.initialURL.searchParams.append(element.value.key, '{{' + element.value.initialParam + '}}');
            }
            else if (element.value.paramType === 'static') {
                // this.initialURL.searchParams.append(
                //   element.value.key,
                //   element.value.value
                // );
            }
            else {
            }
        });
    }
    //Decodes the URL for the Angular Template
    decodeURL(url) {
        return decodeURI(url);
    }
    //Adds key/valuew to FormArray 'Params'
    addParamsToUrlForm(key, value) {
        let paramForm = this.fb.group({
            key: [key, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            value: [value, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            paramType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            initialParam: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        console.log(this.updateTagFG);
        this.params.push(paramForm);
    }
    //Checks to see if URL entered is valid
    //If URL is valid return true
    //Else if URL is invalid return false and throw mat-error
    isValidURL(url) {
        console.log(url);
        try {
            let finalUrl = new URL(url);
            return true;
        }
        catch (err) {
            return false;
        }
    }
    getBrowers(event) {
        if (event.value.length > 0) {
            let vTemp = [];
            for (var e of event.value) {
                let filterdata = this.versionList.filter(function (version) {
                    return version.value.includes(e);
                });
                filterdata.map((filter) => {
                    vTemp.push(filter);
                });
            }
            this.browserVersions = vTemp;
        }
    }
    //update the tag as a template
    updateTemplate() { }
    //Gets different ways a tag can display stats
    getStatTypes() {
        return [
            { value: 'rpm', viewValue: 'RPM Based' },
            { value: 'subid', viewValue: 'Sub-ID Based' },
        ];
    }
    //Gets Country List
    getCountries() {
        return [
            { value: 'Afghanistan', viewValue: 'Afghanistan' },
            { value: 'Åland Islands', viewValue: 'Åland Islands' },
            { value: 'Albania', viewValue: 'Albania' },
            { value: 'Algeria', viewValue: 'Algeria' },
            { value: 'American Samoa', viewValue: 'American Samoa' },
            { value: 'Andorra', viewValue: 'Andorra' },
            { value: 'Angola', viewValue: 'Angola' },
            { value: 'Anguilla', viewValue: 'Anguilla' },
            { value: 'Antarctica', viewValue: 'Antarctica' },
            { value: 'Antigua and Barbuda', viewValue: 'Antigua and Barbuda' },
            { value: 'Argentina', viewValue: 'Argentina' },
            { value: 'Armenia', viewValue: 'Armenia' },
            { value: 'Aruba', viewValue: 'Aruba' },
            { value: 'Australia', viewValue: 'Australia' },
            { value: 'Austria', viewValue: 'Austria' },
            { value: 'Azerbaijan', viewValue: 'Azerbaijan' },
            { value: 'Bahamas', viewValue: 'Bahamas' },
            { value: 'Bahrain', viewValue: 'Bahrain' },
            { value: 'Bangladesh', viewValue: 'Bangladesh' },
            { value: 'Barbados', viewValue: 'Barbados' },
            { value: 'Belarus', viewValue: 'Belarus' },
            { value: 'Belgium', viewValue: 'Belgium' },
            { value: 'Belize', viewValue: 'Belize' },
            { value: 'Benin', viewValue: 'Benin' },
            { value: 'Bermuda', viewValue: 'Bermuda' },
            { value: 'Bhutan', viewValue: 'Bhutan' },
            { value: 'Bolivia', viewValue: 'Bolivia' },
            { value: 'Bosnia and Herzegovina', viewValue: 'Bosnia and Herzegovina' },
            { value: 'Botswana', viewValue: 'Botswana' },
            { value: 'Bouvet Island', viewValue: 'Bouvet Island' },
            { value: 'Brazil', viewValue: 'Brazil' },
            { value: 'British Indian Ocean Territory', viewValue: 'British Indian Ocean Territory' },
            { value: 'Brunei Darussalam', viewValue: 'Brunei Darussala' },
            { value: 'Bulgaria', viewValue: 'Bulgaria' },
            { value: 'Burkina Faso', viewValue: 'Burkina Faso' },
            { value: 'Burundi', viewValue: 'Burundi' },
            { value: 'Cambodia', viewValue: 'Cambodia' },
            { value: 'Cameroon', viewValue: 'Cameroon' },
            { value: 'Canada', viewValue: 'Canada' },
            { value: 'Cape Verde', viewValue: 'Cape Verde' },
            { value: 'Cayman Islands', viewValue: 'Cayman Islands' },
            { value: 'Central African Republic', viewValue: 'Central African Republic' },
            { value: 'Chad', viewValue: 'Chad' },
            { value: 'Chile', viewValue: 'Chile' },
            { value: 'China', viewValue: 'China' },
            { value: 'Christmas Island', viewValue: 'Christmas Island' },
            { value: 'Cocos (Keeling) Islands', viewValue: 'Cocos (Keeling) Islands' },
            { value: 'Colombia', viewValue: 'Colombia' },
            { value: 'Comoros', viewValue: 'Comoros' },
            { value: 'Congo', viewValue: 'Congo' },
            { value: 'Congo, The Democratic Republic of the', viewValue: 'Congo, The Democratic Republic of the' },
            { value: 'Cook Islands', viewValue: 'Cook Islands' },
            { value: 'Costa Rica', viewValue: 'Costa Rica' },
            { value: 'Cote D\'Ivoire', viewValue: 'Cote D\'Ivoire' },
            { value: 'Croatia', viewValue: 'Croatia' },
            { value: 'Cuba', viewValue: 'Cuba' },
            { value: 'Cyprus', viewValue: 'Cyprus' },
            { value: 'Czech Republic', viewValue: 'Czech Republic' },
            { value: 'Denmark', viewValue: 'Denmark' },
            { value: 'Djibouti', viewValue: 'Djibouti' },
            { value: 'Dominica', viewValue: 'Dominica' },
            { value: 'Dominican Republic', viewValue: 'Dominican Republic' },
            { value: 'Ecuador', viewValue: 'Ecuador' },
            { value: 'Egypt', viewValue: 'Egypt' },
            { value: 'El Salvador', viewValue: 'El Salvador' },
            { value: 'Equatorial Guinea', viewValue: 'Equatorial Guinea' },
            { value: 'Eritrea', viewValue: 'Eritrea' },
            { value: 'Estonia', viewValue: 'Estonia' },
            { value: 'Ethiopia', viewValue: 'Ethiopia' },
            { value: 'Falkland Islands (Malvinas)', viewValue: 'Falkland Islands (Malvinas)' },
            { value: 'Faroe Islands', viewValue: 'Faroe Islands' },
            { value: 'Fiji', viewValue: 'Fiji' },
            { value: 'Finland', viewValue: 'Finland' },
            { value: 'France', viewValue: 'France' },
            { value: 'French Guiana', viewValue: 'French Guiana' },
            { value: 'French Polynesia', viewValue: 'French Polynesia' },
            { value: 'French Southern Territories', viewValue: 'French Southern Territories' },
            { value: 'Gabon', viewValue: 'Gabon' },
            { value: 'Gambia', viewValue: 'Gambia' },
            { value: 'Georgia', viewValue: 'Georgia' },
            { value: 'Germany', viewValue: 'Germany' },
            { value: 'Ghana', viewValue: 'Ghana' },
            { value: 'Gibraltar', viewValue: 'Gibraltar' },
            { value: 'Greece', viewValue: 'Greece' },
            { value: 'Greenland', viewValue: 'Greenland' },
            { value: 'Grenada', viewValue: 'Grenada' },
            { value: 'Guadeloupe', viewValue: 'Guadeloupe' },
            { value: 'Guam', viewValue: 'Guam' },
            { value: 'Guatemala', viewValue: 'Guatemala' },
            { value: 'Guernsey', viewValue: 'Guernsey' },
            { value: 'Guinea', viewValue: 'Guinea' },
            { value: 'Guinea-Bissau', viewValue: 'Guinea-Bissau' },
            { value: 'Guyana', viewValue: 'Guyana' },
            { value: 'Haiti', viewValue: 'Haiti' },
            { value: 'Heard Island and Mcdonald Islands', viewValue: 'Heard Island and Mcdonald Islands' },
            { value: 'Holy See (Vatican City State)', viewValue: 'Holy See (Vatican City State)' },
            { value: 'Honduras', viewValue: 'Honduras' },
            { value: 'Hong Kong', viewValue: 'Hong Kong' },
            { value: 'Hungary', viewValue: 'Hungary' },
            { value: 'Iceland', viewValue: 'Iceland' },
            { value: 'India', viewValue: 'India' },
            { value: 'Indonesia', viewValue: 'Indonesia' },
            { value: 'Iran, Islamic Republic Of', viewValue: 'Iran, Islamic Republic Of' },
            { value: 'Iraq', viewValue: 'Iraq' },
            { value: 'Ireland', viewValue: 'Ireland' },
            { value: 'Isle of Man', viewValue: 'Isle of Man' },
            { value: 'Israel', viewValue: 'Israel' },
            { value: 'Italy', viewValue: 'Italy' },
            { value: 'Jamaica', viewValue: 'Jamaica' },
            { value: 'Japan', viewValue: 'Japan' },
            { value: 'Jersey', viewValue: 'Jersey' },
            { value: 'Jordan', viewValue: 'Jordan' },
            { value: 'Kazakhstan', viewValue: 'Kazakhstan' },
            { value: 'Kenya', viewValue: 'Kenya' },
            { value: 'Kiribati', viewValue: 'Kiribati' },
            { value: 'Korea, Democratic People\'S Republic of', viewValue: 'Korea, Democratic People\'S Republic o' },
            { value: 'Korea, Republic of', viewValue: 'Korea, Republic of' },
            { value: 'Kuwait', viewValue: 'Kuwait' },
            { value: 'Kyrgyzstan', viewValue: 'Kyrgyzstan' },
            { value: 'Lao People\'S Democratic Republic', viewValue: 'Lao People\'S Democratic Republic' },
            { value: 'Latvia', viewValue: 'Latvia' },
            { value: 'Lebanon', viewValue: 'Lebanon' },
            { value: 'Lesotho', viewValue: 'Lesotho' },
            { value: 'Liberia', viewValue: 'Liberia' },
            { value: 'Libyan Arab Jamahiriya', viewValue: 'Libyan Arab Jamahiriya' },
            { value: 'Liechtenstein', viewValue: 'Liechtenstein' },
            { value: 'Lithuania', viewValue: 'Lithuania' },
            { value: 'Luxembourg', viewValue: 'Luxembourg' },
            { value: 'Macao', viewValue: 'Macao' },
            { value: 'Macedonia, The Former Yugoslav Republic of', viewValue: 'Macedonia, The Former Yugoslav Republic of' },
            { value: 'Madagascar', viewValue: 'Madagascar' },
            { value: 'Malawi', viewValue: 'Malawi' },
            { value: 'Malaysia', viewValue: 'Malaysia' },
            { value: 'Maldives', viewValue: 'Maldives' },
            { value: 'Mali', viewValue: 'Mali' },
            { value: 'Malta', viewValue: 'Malta' },
            { value: 'Marshall Islands', viewValue: 'Marshall Islands' },
            { value: 'Martinique', viewValue: 'Martinique' },
            { value: 'Mauritania', viewValue: 'Mauritania' },
            { value: 'Mauritius', viewValue: 'Mauritius' },
            { value: 'Mayotte', viewValue: 'Mayotte' },
            { value: 'Mexico', viewValue: 'Mexico' },
            { value: 'Micronesia, Federated States of', viewValue: 'Micronesia, Federated States of' },
            { value: 'Moldova, Republic of', viewValue: 'Moldova, Republic of' },
            { value: 'Monaco', viewValue: 'Monaco' },
            { value: 'Mongolia', viewValue: 'Mongolia' },
            { value: 'Montserrat', viewValue: 'Montserrat' },
            { value: 'Morocco', viewValue: 'Morocco' },
            { value: 'Mozambique', viewValue: 'Mozambique' },
            { value: 'Myanmar', viewValue: 'Myanmar' },
            { value: 'Namibia', viewValue: 'Namibia' },
            { value: 'Nauru', viewValue: 'Nauru' },
            { value: 'Nepal', viewValue: 'Nepal' },
            { value: 'Netherlands', viewValue: 'Netherlands' },
            { value: 'Netherlands Antilles', viewValue: 'Netherlands Antilles' },
            { value: 'New Caledonia', viewValue: 'New Caledonia' },
            { value: 'New Zealand', viewValue: 'New Zealand' },
            { value: 'Nicaragua', viewValue: 'Nicaragua' },
            { value: 'Niger', viewValue: 'Niger' },
            { value: 'Nigeria', viewValue: 'Nigeria' },
            { value: 'Niue', viewValue: 'Niue' },
            { value: 'Norfolk Island', viewValue: 'Norfolk Island' },
            { value: 'Northern Mariana Islands', viewValue: 'Northern Mariana Islands' },
            { value: 'Norway', viewValue: 'Norway' },
            { value: 'Oman', viewValue: 'Oman' },
            { value: 'Pakistan', viewValue: 'Pakistan' },
            { value: 'Palau', viewValue: 'Palau' },
            { value: 'Palestinian Territory, Occupied', viewValue: 'Palestinian Territory, Occupied' },
            { value: 'Panama', viewValue: 'Panama' },
            { value: 'Papua New Guinea', viewValue: 'Papua New Guinea' },
            { value: 'Paraguay', viewValue: 'Paraguay' },
            { value: 'Peru', viewValue: 'Peru' },
            { value: 'Philippines', viewValue: 'Philippines' },
            { value: 'Pitcairn', viewValue: 'Pitcairn' },
            { value: 'Poland', viewValue: 'Poland' },
            { value: 'Portugal', viewValue: 'Portugal' },
            { value: 'Puerto Rico', viewValue: 'Puerto Rico' },
            { value: 'Qatar', viewValue: 'Qatar' },
            { value: 'Reunion', viewValue: 'Reunion' },
            { value: 'Romania', viewValue: 'Romania' },
            { value: 'Russian Federation', viewValue: 'Russian Federatio' },
            { value: 'RWANDA', viewValue: 'RWANDA' },
            { value: 'Saint Helena', viewValue: 'Saint Helena' },
            { value: 'Saint Kitts and Nevis', viewValue: 'Saint Kitts and Nevis' },
            { value: 'Saint Lucia', viewValue: 'Saint Lucia' },
            { value: 'Saint Pierre and Miquelon', viewValue: 'Saint Pierre and Miquelon' },
            { value: 'Saint Vincent and the Grenadines', viewValue: 'Saint Vincent and the Grenadines' },
            { value: 'Samoa', viewValue: 'Samoa' },
            { value: 'San Marino', viewValue: 'San Marino' },
            { value: 'Sao Tome and Principe', viewValue: 'Sao Tome and Principe' },
            { value: 'Saudi Arabia', viewValue: 'Saudi Arabia' },
            { value: 'Senegal', viewValue: 'Senegal' },
            { value: 'Serbia and Montenegro', viewValue: 'Serbia and Montenegro' },
            { value: 'Seychelles', viewValue: 'Seychelles' },
            { value: 'Sierra Leone', viewValue: 'Sierra Leone' },
            { value: 'Singapore', viewValue: 'Singapore' },
            { value: 'Slovakia', viewValue: 'Slovakia' },
            { value: 'Slovenia', viewValue: 'Slovenia' },
            { value: 'Solomon Islands', viewValue: 'Solomon Islands' },
            { value: 'Somalia', viewValue: 'Somalia' },
            { value: 'South Africa', viewValue: 'South Africa' },
            { value: 'South Georgia and the South Sandwich Islands', viewValue: 'South Georgia and the South Sandwich Isla' },
            { value: 'Spain', viewValue: 'Spain' },
            { value: 'Sri Lanka', viewValue: 'Sri Lanka' },
            { value: 'Sudan', viewValue: 'Sudan' },
            { value: 'Surivalue', viewValue: 'Surivalue' },
            { value: 'Svalbard and Jan Mayen', viewValue: 'Svalbard and Jan Mayen' },
            { value: 'Swaziland', viewValue: 'Swaziland' },
            { value: 'Sweden', viewValue: 'Sweden' },
            { value: 'Switzerland', viewValue: 'Switzerland' },
            { value: 'Syrian Arab Republic', viewValue: 'Syrian Arab Republic' },
            { value: 'Taiwan, Province of China', viewValue: 'Taiwan, Province of China' },
            { value: 'Tajikistan', viewValue: 'Tajikistan' },
            { value: 'Tanzania, United Republic of', viewValue: 'Tanzania, United Republic of' },
            { value: 'Thailand', viewValue: 'Thailand' },
            { value: 'Timor-Leste', viewValue: 'Timor-Leste' },
            { value: 'Togo', viewValue: 'Togo' },
            { value: 'Tokelau', viewValue: 'Tokelau' },
            { value: 'Tonga', viewValue: 'Tonga' },
            { value: 'TrinviewValuead and Tobago', viewValue: 'TrinviewValuead and Tobago' },
            { value: 'Tunisia', viewValue: 'Tunisia' },
            { value: 'Turkey', viewValue: 'Turkey' },
            { value: 'Turkmenistan', viewValue: 'Turkmenistan' },
            { value: 'Turks and Caicos Islands', viewValue: 'Turks and Caicos Islands' },
            { value: 'Tuvalu', viewValue: 'Tuvalu' },
            { value: 'Uganda', viewValue: 'Uganda' },
            { value: 'Ukraine', viewValue: 'Ukraine' },
            { value: 'United Arab Emirates', viewValue: 'United Arab Emirates' },
            { value: 'United Kingdom', viewValue: 'United Kingdom' },
            { value: 'United States', viewValue: 'United States' },
            { value: 'United States Minor Outlying Islands', viewValue: 'United States Minor Outlying Islands' },
            { value: 'Uruguay', viewValue: 'Uruguay' },
            { value: 'Uzbekistan', viewValue: 'Uzbekistan' },
            { value: 'Vanuatu', viewValue: 'Vanuatu' },
            { value: 'Venezuela', viewValue: 'Venezuela' },
            { value: 'Viet Nam', viewValue: 'Viet Nam' },
            { value: 'Virgin Islands, British', viewValue: 'Virgin Islands, British' },
            { value: 'Virgin Islands, U.S.', viewValue: 'Virgin Islands, U.S.' },
            { value: 'Wallis and Futuna', viewValue: 'Wallis and Futuna' },
            { value: 'Western Sahara', viewValue: 'Western Sahara' },
            { value: 'Yemen', viewValue: 'Yemen' },
            { value: 'Zambia', viewValue: 'Zambia' },
            { value: 'Zimbabwe', viewValue: 'Zimbabwe' }
        ];
    }
    //Gets Browser Versions
    getVersions() {
        this.edgeVersions = [
            { value: "Edge - 102.0.1245.7", viewValue: "Edge - 102.0.1245.7" },
            { value: "Edge - 101.0.1210.10", viewValue: "Edge - 101.0.1210.10" },
            { value: "Edge - 100.0.1185.10", viewValue: "Edge - 100.0.1185.10" },
            { value: "Edge - 99.0.1150.11", viewValue: "Edge - 99.0.1150.11" },
            { value: "Edge - 98.0.1108.23", viewValue: "Edge - 98.0.1108.23" },
            { value: "Edge - 97.0.1072.21", viewValue: "Edge - 97.0.1072.21" },
        ];
        this.operaVersions = [
            { value: "Opera - 12.15", viewValue: "Opera - 12.15" },
            { value: "Opera - 12.14", viewValue: "Opera - 12.14" },
            { value: "Opera - 12.13", viewValue: "Opera - 12.13" },
            { value: "Opera - 12.12", viewValue: "Opera - 12.12" },
            { value: "Opera - 12.11", viewValue: "Opera - 12.11" },
            { value: "Opera - 12.10", viewValue: "Opera - 12.10" }
        ];
        this.edgeVersions.map((edge) => {
            this.versionList.push(edge);
        });
        this.operaVersions.map((opera) => {
            this.versionList.push(opera);
        });
        //Chrome Version List Get
        this.tagManagementService.getChromeBrowserVersion().subscribe((res) => {
            let versionsChromeData = res.slice(0, 6);
            versionsChromeData.map((version) => {
                this.versionList.push({
                    value: "Chrome - " + version.version,
                    viewValue: "Chrome - " + version.version
                });
            });
        });
        //FireFox Version List Get
        this.tagManagementService.getFirefoxBrowserVersion().subscribe(res => {
            var firefoxList = [];
            for (var i in res) {
                firefoxList.push({
                    value: "Firefox - " + i,
                    viewValue: "Firefox - " + i
                });
            }
            firefoxList.slice(firefoxList['length'] - 6, firefoxList['length']).map((version) => {
                this.versionList.push({
                    value: version['value'],
                    viewValue: version['viewValue']
                });
            });
        });
        return this.versionList;
    }
    //Gets different ways a tag can display stats
    getRotationTypes() {
        return [
            { value: 'roundRobin', viewValue: 'Round Robin' },
            { value: 'percentage', viewValue: 'Percentage' },
        ];
    }
    getParamTypes() {
        return [
            { value: 'static', viewValue: 'Static' },
            { value: 'dynamic', viewValue: 'Dynamic' },
        ];
    }
}
EditTagComponent.ɵfac = function EditTagComponent_Factory(t) { return new (t || EditTagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tag_management_service__WEBPACK_IMPORTED_MODULE_3__["TagManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
EditTagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditTagComponent, selectors: [["app-edit-tag"]], viewQuery: function EditTagComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formGroupDirective = _t.first);
    } }, decls: 117, vars: 16, consts: [[1, "example-container", 3, "formGroup", "submit"], [1, "row"], [1, "col-xl-6"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], ["matInput", "", "formControlName", "name", "placeholder", "Name"], [4, "ngIf"], ["matNativeControl", "", "formControlName", "advertiser"], ["value", "Perion"], ["value", "Apptitude"], ["value", "Hopkins"], ["value", "Third Party"], ["matNativeControl", "", "formControlName", "publisher"], ["value", "Pub 1"], ["value", "Pub 2"], ["value", "Pub 3"], ["matInput", "", "formControlName", "company", "placeholder", "Company", 3, "ngModel", "ngModelChange"], ["matNativeControl", "", "formControlName", "browser", "multiple", "", 3, "selectionChange"], ["value", "Chrome"], ["value", "Firefox"], ["value", "Edge"], ["value", "Internet Explorer"], ["matNativeControl", "", "formControlName", "deviceType", "multiple", ""], ["value", "Desktop"], ["value", "Mobile"], ["value", "Tablet"], ["matNativeControl", "", "formControlName", "version", "multiple", ""], [3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", "formControlName", "country", "multiple", ""], ["formControlName", "adServerUrl"], ["value", "devisedata.com"], ["value", "search.monarchdigital.com"], ["formControlName", "statType"], [1, "row", "mb-2"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], ["formArrayName", "subids"], ["class", "row", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["formControlName", "rotationType"], ["matInput", "", "formControlName", "url", "placeholder", "Final URL", 3, "ngModel", "ngModelChange"], ["formArrayName", "params"], ["class", "params row", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "col-md-6"], ["mat-raised-button", "", "color", "primary", "type", "submit"], ["mat-raised-button", "", "color", "primary", "type", "button", 3, "click"], [3, "value"], [1, "row", 3, "formGroupName"], [1, "col-md-3"], ["matInput", "", "placeholder", "Subid", "formControlName", "subid"], ["matInput", "", "placeholder", "Limit", "formControlName", "limit"], ["matInput", "", "placeholder", "Split", "formControlName", "split"], [1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "flaticon2-line"], [1, "params", "row", 3, "formGroupName"], ["matInput", "", "formControlName", "key", "placeholder", "Final Key"], ["matInput", "", "formControlName", "value", "placeholder", "Final Value"], ["formControlName", "paramType", 3, "selectionChange"], ["matInput", "", "formControlName", "initialParam", "placeholder", "Inital Value", 3, "keyup"]], template: function EditTagComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function EditTagComponent_Template_form_submit_0_listener() { return ctx.updateTag(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Create New Tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EditTagComponent_mat_error_13_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Advertiser");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Perion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Apptitude");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Hopkins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Third Party");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Publisher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Pub 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Pub 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Pub 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditTagComponent_Template_input_ngModelChange_37_listener($event) { return ctx.company = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, EditTagComponent_mat_error_38_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Browsers Allowed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function EditTagComponent_Template_mat_select_selectionChange_42_listener($event) { return ctx.getBrowers($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Chrome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Firefox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Edge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Internet Explorer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Device Type Allowed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Desktop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Tablet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Browser Version Allowed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-select", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, EditTagComponent_mat_option_65_Template, 2, 2, "mat-option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Country Allowed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-select", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, EditTagComponent_mat_option_70_Template, 2, 2, "mat-option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Ad Server URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-select", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "devisedata.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "search.monarchdigital.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Stat Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-select", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, EditTagComponent_mat_option_83_Template, 2, 2, "mat-option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditTagComponent_Template_button_click_85_listener($event) { return ctx.addSubid($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, EditTagComponent_div_88_Template, 13, 1, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Rotation Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-select", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, EditTagComponent_mat_option_93_Template, 2, 2, "mat-option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Tag URLs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditTagComponent_Template_input_ngModelChange_102_listener($event) { return ctx.url = $event; })("ngModelChange", function EditTagComponent_Template_input_ngModelChange_102_listener($event) { return ctx.getUrlParams($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, EditTagComponent_mat_error_103_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, EditTagComponent_div_105_Template, 16, 2, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Inital URL: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditTagComponent_Template_button_click_115_listener() { return ctx.updateTag(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " Update as Template ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.updateTagFG);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 14, ctx.updateTagFG.value), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updateTagFG.get("name").errors == null ? null : ctx.updateTagFG.get("name").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.company);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updateTagFG.get("company").errors == null ? null : ctx.updateTagFG.get("company").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.browserVersions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countries);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.statTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subids.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rotationTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updateTagFG.get("url").errors == null ? null : ctx.updateTagFG.get("url").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.params.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.decodeURL(ctx.initialURL));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGFnLW1hbmFnZW1lbnQvZWRpdC10YWcvZWRpdC10YWcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditTagComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-tag',
                templateUrl: './edit-tag.component.html',
                styleUrls: ['./edit-tag.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _tag_management_service__WEBPACK_IMPORTED_MODULE_3__["TagManagementService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { formGroupDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/tag-management/new-tag/new-tag.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/tag-management/new-tag/new-tag.component.ts ***!
  \*********************************************************************/
/*! exports provided: NewTagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTagComponent", function() { return NewTagComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tag_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tag-management.service */ "./src/app/modules/tag-management/tag-management.service.ts");
/* harmony import */ var src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/snackbar.service */ "./src/app/shared/service/snackbar.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");












function NewTagComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewTagComponent_mat_error_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Company name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewTagComponent_mat_option_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const browserVersion_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", browserVersion_r9.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", browserVersion_r9.viewValue, " ");
} }
function NewTagComponent_mat_option_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", country_r10.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", country_r10.viewValue, " ");
} }
function NewTagComponent_mat_option_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const statType_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", statType_r11.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", statType_r11.viewValue, " ");
} }
function NewTagComponent_div_88_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewTagComponent_div_88_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const i_r13 = ctx.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.removeSubid(i_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r13 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r13);
} }
function NewTagComponent_mat_option_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rotationType_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", rotationType_r16.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rotationType_r16.viewValue, " ");
} }
function NewTagComponent_mat_error_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Final URL is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewTagComponent_div_105_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const paramType_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", paramType_r20.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", paramType_r20.viewValue, " ");
} }
function NewTagComponent_div_105_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Param Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-select", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function NewTagComponent_div_105_Template_mat_select_selectionChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const i_r18 = ctx.index; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.updateInitialParams($event, i_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NewTagComponent_div_105_mat_option_10_Template, 2, 2, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function NewTagComponent_div_105_Template_input_keyup_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const i_r18 = ctx.index; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.updateInitialParamURL($event, i_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r17 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", p_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.paramTypes);
} }
class NewTagComponent {
    constructor(tagManagementService, fb, _snackBarService) {
        this.tagManagementService = tagManagementService;
        this.fb = fb;
        this._snackBarService = _snackBarService;
        this.versionList = [];
        this.initSubid = [
            {
                subid: "1",
                limit: "1000",
                split: "70"
            },
            {
                subid: "2",
                limit: "1000",
                split: "70"
            }
        ];
    }
    ngOnInit() {
        this.company = 'Manic Traffic';
        this.url =
            'https://us.search.yahoo.com/yhs/search?hspart=brandclick&hsimp=yhs-calm&p=flowers';
        this.initialURL = new URL('https://adserver.com/search');
        this.newTagFG = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            publisher: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            advertiser: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            browser: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            deviceType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            version: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            adServerUrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            statType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            // subid: ['', Validators.required],
            // limit: ['', Validators.required],
            // split: ['', Validators.required],
            subids: this.fb.array([]),
            rotationType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            url: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            params: this.fb.array([]),
        });
        this.statTypes = this.getStatTypes();
        this.rotationTypes = this.getRotationTypes();
        this.paramTypes = this.getParamTypes();
        this.countries = this.getCountries();
        this.browserVersions = this.getVersions();
        this.initSubid.map((item) => {
            this.subids.push(this.fb.group(item));
        });
    }
    //Detects when URL is pasted into the field
    //https://us.search.yahoo.com/yhs/search?hspart=brandclick&hsimp=yhs-calm&p=flowers
    getUrlParams(url) {
        //Resets the URL params on every change
        this.deleteValueOfFormControl('params');
        if (this.isValidURL(url)) {
            url = new URL(url);
            for (var key of url.searchParams.keys()) {
                let value = url.searchParams.get(key);
                this.addParamsToUrlForm(key, value);
            }
        }
        else {
            return;
        }
    }
    //Gets the value of any form Array
    //Returns a form array
    get params() {
        return this.newTagFG.controls['params'];
    }
    get subids() {
        return this.newTagFG.controls['subids'];
    }
    newSubids() {
        return this.fb.group({
            subid: "",
            limit: "",
            split: ""
        });
    }
    addSubid(event) {
        this.subids.push(this.newSubids());
    }
    removeSubid(i) {
        this.subids.removeAt(i);
    }
    //Deletes value of any given form control
    deleteValueOfFormControl(controlName) {
        this.params.clear();
    }
    //Updates the original parameters that will be received and sent on the first server request
    //Example: domain.com/search?subid={{dynamic}}&q={{dynamic}}&search=[bing]
    updateInitialParams(param, index) {
        console.log('Updating Initial Params');
        console.log(param, index);
        if (param.value === 'static') {
            console.log('static!');
            this.params.controls[index]
                .get('initialParam')
                .setValue(this.params.controls[index].get('value').value);
            this.createInitialURL();
        }
        else {
            // this.params.controls[index]
            //   .get('initialParam')
            //   .setValue(this.params.controls[index].get('key').value);
        }
    }
    //Checks to see if initialParam mat input field has been touched and updates initial URL
    updateInitialParamURL(value, index) {
        if (this.params.controls[index].get('paramType').value === 'dynamic') {
            this.createInitialURL();
        }
    }
    //Builds the initial URL from the paramaters
    createInitialURL() {
        console.log('Updating URL');
        this.initialURL = new URL('https://adserver.com/search');
        this.params.controls.forEach((element, index) => {
            if (element.value.paramType === 'dynamic') {
                this.initialURL.searchParams.append(element.value.key, '{{' + element.value.initialParam + '}}');
            }
            else if (element.value.paramType === 'static') {
                // this.initialURL.searchParams.append(
                //   element.value.key,
                //   element.value.value
                // );
            }
            else {
            }
        });
    }
    //Decodes the URL for the Angular Template
    decodeURL(url) {
        return decodeURI(url);
    }
    //Adds key/valuew to FormArray 'Params'
    addParamsToUrlForm(key, value) {
        let paramForm = this.fb.group({
            key: [key, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            value: [value, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            paramType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            initialParam: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        console.log(this.newTagFG);
        this.params.push(paramForm);
    }
    //Checks to see if URL entered is valid
    //If URL is valid return true
    //Else if URL is invalid return false and throw mat-error
    isValidURL(url) {
        console.log(url);
        try {
            let finalUrl = new URL(url);
            return true;
        }
        catch (err) {
            return false;
        }
    }
    //Saves the tag onto the database
    saveTag() {
        console.log("============", this.newTagFG.value, this.newTagFG.valid);
        this.newTagFG.markAllAsTouched();
        if (this.newTagFG.valid) {
            this.tagManagementService.addTag(this.newTagFG.value).subscribe(res => {
                this._snackBarService.info('Added a new tag');
                this.newTagFG.reset();
                this.formGroupDirective.resetForm();
                this.url = 'https://us.search.yahoo.com/yhs/search?hspart=brandclick&hsimp=yhs-calm&p=flowers';
                this.initialURL = new URL('https://adserver.com/search');
                this.getUrlParams(this.url);
            }, (err) => {
                this._snackBarService.info(err.error);
            });
        }
    }
    getBrowers(event) {
        if (event.value.length > 0) {
            let vTemp = [];
            for (var e of event.value) {
                let filterdata = this.versionList.filter(function (version) {
                    return version.value.includes(e);
                });
                filterdata.map((filter) => {
                    vTemp.push(filter);
                });
            }
            this.browserVersions = vTemp;
        }
    }
    //Saves the tag as a template
    saveTemplate() { }
    //Gets different ways a tag can display stats
    getStatTypes() {
        return [
            { value: 'rpm', viewValue: 'RPM Based' },
            { value: 'subid', viewValue: 'Sub-ID Based' },
        ];
    }
    //Gets Country List
    getCountries() {
        return [
            { value: 'Afghanistan', viewValue: 'Afghanistan' },
            { value: 'Åland Islands', viewValue: 'Åland Islands' },
            { value: 'Albania', viewValue: 'Albania' },
            { value: 'Algeria', viewValue: 'Algeria' },
            { value: 'American Samoa', viewValue: 'American Samoa' },
            { value: 'Andorra', viewValue: 'Andorra' },
            { value: 'Angola', viewValue: 'Angola' },
            { value: 'Anguilla', viewValue: 'Anguilla' },
            { value: 'Antarctica', viewValue: 'Antarctica' },
            { value: 'Antigua and Barbuda', viewValue: 'Antigua and Barbuda' },
            { value: 'Argentina', viewValue: 'Argentina' },
            { value: 'Armenia', viewValue: 'Armenia' },
            { value: 'Aruba', viewValue: 'Aruba' },
            { value: 'Australia', viewValue: 'Australia' },
            { value: 'Austria', viewValue: 'Austria' },
            { value: 'Azerbaijan', viewValue: 'Azerbaijan' },
            { value: 'Bahamas', viewValue: 'Bahamas' },
            { value: 'Bahrain', viewValue: 'Bahrain' },
            { value: 'Bangladesh', viewValue: 'Bangladesh' },
            { value: 'Barbados', viewValue: 'Barbados' },
            { value: 'Belarus', viewValue: 'Belarus' },
            { value: 'Belgium', viewValue: 'Belgium' },
            { value: 'Belize', viewValue: 'Belize' },
            { value: 'Benin', viewValue: 'Benin' },
            { value: 'Bermuda', viewValue: 'Bermuda' },
            { value: 'Bhutan', viewValue: 'Bhutan' },
            { value: 'Bolivia', viewValue: 'Bolivia' },
            { value: 'Bosnia and Herzegovina', viewValue: 'Bosnia and Herzegovina' },
            { value: 'Botswana', viewValue: 'Botswana' },
            { value: 'Bouvet Island', viewValue: 'Bouvet Island' },
            { value: 'Brazil', viewValue: 'Brazil' },
            { value: 'British Indian Ocean Territory', viewValue: 'British Indian Ocean Territory' },
            { value: 'Brunei Darussalam', viewValue: 'Brunei Darussala' },
            { value: 'Bulgaria', viewValue: 'Bulgaria' },
            { value: 'Burkina Faso', viewValue: 'Burkina Faso' },
            { value: 'Burundi', viewValue: 'Burundi' },
            { value: 'Cambodia', viewValue: 'Cambodia' },
            { value: 'Cameroon', viewValue: 'Cameroon' },
            { value: 'Canada', viewValue: 'Canada' },
            { value: 'Cape Verde', viewValue: 'Cape Verde' },
            { value: 'Cayman Islands', viewValue: 'Cayman Islands' },
            { value: 'Central African Republic', viewValue: 'Central African Republic' },
            { value: 'Chad', viewValue: 'Chad' },
            { value: 'Chile', viewValue: 'Chile' },
            { value: 'China', viewValue: 'China' },
            { value: 'Christmas Island', viewValue: 'Christmas Island' },
            { value: 'Cocos (Keeling) Islands', viewValue: 'Cocos (Keeling) Islands' },
            { value: 'Colombia', viewValue: 'Colombia' },
            { value: 'Comoros', viewValue: 'Comoros' },
            { value: 'Congo', viewValue: 'Congo' },
            { value: 'Congo, The Democratic Republic of the', viewValue: 'Congo, The Democratic Republic of the' },
            { value: 'Cook Islands', viewValue: 'Cook Islands' },
            { value: 'Costa Rica', viewValue: 'Costa Rica' },
            { value: 'Cote D\'Ivoire', viewValue: 'Cote D\'Ivoire' },
            { value: 'Croatia', viewValue: 'Croatia' },
            { value: 'Cuba', viewValue: 'Cuba' },
            { value: 'Cyprus', viewValue: 'Cyprus' },
            { value: 'Czech Republic', viewValue: 'Czech Republic' },
            { value: 'Denmark', viewValue: 'Denmark' },
            { value: 'Djibouti', viewValue: 'Djibouti' },
            { value: 'Dominica', viewValue: 'Dominica' },
            { value: 'Dominican Republic', viewValue: 'Dominican Republic' },
            { value: 'Ecuador', viewValue: 'Ecuador' },
            { value: 'Egypt', viewValue: 'Egypt' },
            { value: 'El Salvador', viewValue: 'El Salvador' },
            { value: 'Equatorial Guinea', viewValue: 'Equatorial Guinea' },
            { value: 'Eritrea', viewValue: 'Eritrea' },
            { value: 'Estonia', viewValue: 'Estonia' },
            { value: 'Ethiopia', viewValue: 'Ethiopia' },
            { value: 'Falkland Islands (Malvinas)', viewValue: 'Falkland Islands (Malvinas)' },
            { value: 'Faroe Islands', viewValue: 'Faroe Islands' },
            { value: 'Fiji', viewValue: 'Fiji' },
            { value: 'Finland', viewValue: 'Finland' },
            { value: 'France', viewValue: 'France' },
            { value: 'French Guiana', viewValue: 'French Guiana' },
            { value: 'French Polynesia', viewValue: 'French Polynesia' },
            { value: 'French Southern Territories', viewValue: 'French Southern Territories' },
            { value: 'Gabon', viewValue: 'Gabon' },
            { value: 'Gambia', viewValue: 'Gambia' },
            { value: 'Georgia', viewValue: 'Georgia' },
            { value: 'Germany', viewValue: 'Germany' },
            { value: 'Ghana', viewValue: 'Ghana' },
            { value: 'Gibraltar', viewValue: 'Gibraltar' },
            { value: 'Greece', viewValue: 'Greece' },
            { value: 'Greenland', viewValue: 'Greenland' },
            { value: 'Grenada', viewValue: 'Grenada' },
            { value: 'Guadeloupe', viewValue: 'Guadeloupe' },
            { value: 'Guam', viewValue: 'Guam' },
            { value: 'Guatemala', viewValue: 'Guatemala' },
            { value: 'Guernsey', viewValue: 'Guernsey' },
            { value: 'Guinea', viewValue: 'Guinea' },
            { value: 'Guinea-Bissau', viewValue: 'Guinea-Bissau' },
            { value: 'Guyana', viewValue: 'Guyana' },
            { value: 'Haiti', viewValue: 'Haiti' },
            { value: 'Heard Island and Mcdonald Islands', viewValue: 'Heard Island and Mcdonald Islands' },
            { value: 'Holy See (Vatican City State)', viewValue: 'Holy See (Vatican City State)' },
            { value: 'Honduras', viewValue: 'Honduras' },
            { value: 'Hong Kong', viewValue: 'Hong Kong' },
            { value: 'Hungary', viewValue: 'Hungary' },
            { value: 'Iceland', viewValue: 'Iceland' },
            { value: 'India', viewValue: 'India' },
            { value: 'Indonesia', viewValue: 'Indonesia' },
            { value: 'Iran, Islamic Republic Of', viewValue: 'Iran, Islamic Republic Of' },
            { value: 'Iraq', viewValue: 'Iraq' },
            { value: 'Ireland', viewValue: 'Ireland' },
            { value: 'Isle of Man', viewValue: 'Isle of Man' },
            { value: 'Israel', viewValue: 'Israel' },
            { value: 'Italy', viewValue: 'Italy' },
            { value: 'Jamaica', viewValue: 'Jamaica' },
            { value: 'Japan', viewValue: 'Japan' },
            { value: 'Jersey', viewValue: 'Jersey' },
            { value: 'Jordan', viewValue: 'Jordan' },
            { value: 'Kazakhstan', viewValue: 'Kazakhstan' },
            { value: 'Kenya', viewValue: 'Kenya' },
            { value: 'Kiribati', viewValue: 'Kiribati' },
            { value: 'Korea, Democratic People\'S Republic of', viewValue: 'Korea, Democratic People\'S Republic o' },
            { value: 'Korea, Republic of', viewValue: 'Korea, Republic of' },
            { value: 'Kuwait', viewValue: 'Kuwait' },
            { value: 'Kyrgyzstan', viewValue: 'Kyrgyzstan' },
            { value: 'Lao People\'S Democratic Republic', viewValue: 'Lao People\'S Democratic Republic' },
            { value: 'Latvia', viewValue: 'Latvia' },
            { value: 'Lebanon', viewValue: 'Lebanon' },
            { value: 'Lesotho', viewValue: 'Lesotho' },
            { value: 'Liberia', viewValue: 'Liberia' },
            { value: 'Libyan Arab Jamahiriya', viewValue: 'Libyan Arab Jamahiriya' },
            { value: 'Liechtenstein', viewValue: 'Liechtenstein' },
            { value: 'Lithuania', viewValue: 'Lithuania' },
            { value: 'Luxembourg', viewValue: 'Luxembourg' },
            { value: 'Macao', viewValue: 'Macao' },
            { value: 'Macedonia, The Former Yugoslav Republic of', viewValue: 'Macedonia, The Former Yugoslav Republic of' },
            { value: 'Madagascar', viewValue: 'Madagascar' },
            { value: 'Malawi', viewValue: 'Malawi' },
            { value: 'Malaysia', viewValue: 'Malaysia' },
            { value: 'Maldives', viewValue: 'Maldives' },
            { value: 'Mali', viewValue: 'Mali' },
            { value: 'Malta', viewValue: 'Malta' },
            { value: 'Marshall Islands', viewValue: 'Marshall Islands' },
            { value: 'Martinique', viewValue: 'Martinique' },
            { value: 'Mauritania', viewValue: 'Mauritania' },
            { value: 'Mauritius', viewValue: 'Mauritius' },
            { value: 'Mayotte', viewValue: 'Mayotte' },
            { value: 'Mexico', viewValue: 'Mexico' },
            { value: 'Micronesia, Federated States of', viewValue: 'Micronesia, Federated States of' },
            { value: 'Moldova, Republic of', viewValue: 'Moldova, Republic of' },
            { value: 'Monaco', viewValue: 'Monaco' },
            { value: 'Mongolia', viewValue: 'Mongolia' },
            { value: 'Montserrat', viewValue: 'Montserrat' },
            { value: 'Morocco', viewValue: 'Morocco' },
            { value: 'Mozambique', viewValue: 'Mozambique' },
            { value: 'Myanmar', viewValue: 'Myanmar' },
            { value: 'Namibia', viewValue: 'Namibia' },
            { value: 'Nauru', viewValue: 'Nauru' },
            { value: 'Nepal', viewValue: 'Nepal' },
            { value: 'Netherlands', viewValue: 'Netherlands' },
            { value: 'Netherlands Antilles', viewValue: 'Netherlands Antilles' },
            { value: 'New Caledonia', viewValue: 'New Caledonia' },
            { value: 'New Zealand', viewValue: 'New Zealand' },
            { value: 'Nicaragua', viewValue: 'Nicaragua' },
            { value: 'Niger', viewValue: 'Niger' },
            { value: 'Nigeria', viewValue: 'Nigeria' },
            { value: 'Niue', viewValue: 'Niue' },
            { value: 'Norfolk Island', viewValue: 'Norfolk Island' },
            { value: 'Northern Mariana Islands', viewValue: 'Northern Mariana Islands' },
            { value: 'Norway', viewValue: 'Norway' },
            { value: 'Oman', viewValue: 'Oman' },
            { value: 'Pakistan', viewValue: 'Pakistan' },
            { value: 'Palau', viewValue: 'Palau' },
            { value: 'Palestinian Territory, Occupied', viewValue: 'Palestinian Territory, Occupied' },
            { value: 'Panama', viewValue: 'Panama' },
            { value: 'Papua New Guinea', viewValue: 'Papua New Guinea' },
            { value: 'Paraguay', viewValue: 'Paraguay' },
            { value: 'Peru', viewValue: 'Peru' },
            { value: 'Philippines', viewValue: 'Philippines' },
            { value: 'Pitcairn', viewValue: 'Pitcairn' },
            { value: 'Poland', viewValue: 'Poland' },
            { value: 'Portugal', viewValue: 'Portugal' },
            { value: 'Puerto Rico', viewValue: 'Puerto Rico' },
            { value: 'Qatar', viewValue: 'Qatar' },
            { value: 'Reunion', viewValue: 'Reunion' },
            { value: 'Romania', viewValue: 'Romania' },
            { value: 'Russian Federation', viewValue: 'Russian Federatio' },
            { value: 'RWANDA', viewValue: 'RWANDA' },
            { value: 'Saint Helena', viewValue: 'Saint Helena' },
            { value: 'Saint Kitts and Nevis', viewValue: 'Saint Kitts and Nevis' },
            { value: 'Saint Lucia', viewValue: 'Saint Lucia' },
            { value: 'Saint Pierre and Miquelon', viewValue: 'Saint Pierre and Miquelon' },
            { value: 'Saint Vincent and the Grenadines', viewValue: 'Saint Vincent and the Grenadines' },
            { value: 'Samoa', viewValue: 'Samoa' },
            { value: 'San Marino', viewValue: 'San Marino' },
            { value: 'Sao Tome and Principe', viewValue: 'Sao Tome and Principe' },
            { value: 'Saudi Arabia', viewValue: 'Saudi Arabia' },
            { value: 'Senegal', viewValue: 'Senegal' },
            { value: 'Serbia and Montenegro', viewValue: 'Serbia and Montenegro' },
            { value: 'Seychelles', viewValue: 'Seychelles' },
            { value: 'Sierra Leone', viewValue: 'Sierra Leone' },
            { value: 'Singapore', viewValue: 'Singapore' },
            { value: 'Slovakia', viewValue: 'Slovakia' },
            { value: 'Slovenia', viewValue: 'Slovenia' },
            { value: 'Solomon Islands', viewValue: 'Solomon Islands' },
            { value: 'Somalia', viewValue: 'Somalia' },
            { value: 'South Africa', viewValue: 'South Africa' },
            { value: 'South Georgia and the South Sandwich Islands', viewValue: 'South Georgia and the South Sandwich Isla' },
            { value: 'Spain', viewValue: 'Spain' },
            { value: 'Sri Lanka', viewValue: 'Sri Lanka' },
            { value: 'Sudan', viewValue: 'Sudan' },
            { value: 'Surivalue', viewValue: 'Surivalue' },
            { value: 'Svalbard and Jan Mayen', viewValue: 'Svalbard and Jan Mayen' },
            { value: 'Swaziland', viewValue: 'Swaziland' },
            { value: 'Sweden', viewValue: 'Sweden' },
            { value: 'Switzerland', viewValue: 'Switzerland' },
            { value: 'Syrian Arab Republic', viewValue: 'Syrian Arab Republic' },
            { value: 'Taiwan, Province of China', viewValue: 'Taiwan, Province of China' },
            { value: 'Tajikistan', viewValue: 'Tajikistan' },
            { value: 'Tanzania, United Republic of', viewValue: 'Tanzania, United Republic of' },
            { value: 'Thailand', viewValue: 'Thailand' },
            { value: 'Timor-Leste', viewValue: 'Timor-Leste' },
            { value: 'Togo', viewValue: 'Togo' },
            { value: 'Tokelau', viewValue: 'Tokelau' },
            { value: 'Tonga', viewValue: 'Tonga' },
            { value: 'TrinviewValuead and Tobago', viewValue: 'TrinviewValuead and Tobago' },
            { value: 'Tunisia', viewValue: 'Tunisia' },
            { value: 'Turkey', viewValue: 'Turkey' },
            { value: 'Turkmenistan', viewValue: 'Turkmenistan' },
            { value: 'Turks and Caicos Islands', viewValue: 'Turks and Caicos Islands' },
            { value: 'Tuvalu', viewValue: 'Tuvalu' },
            { value: 'Uganda', viewValue: 'Uganda' },
            { value: 'Ukraine', viewValue: 'Ukraine' },
            { value: 'United Arab Emirates', viewValue: 'United Arab Emirates' },
            { value: 'United Kingdom', viewValue: 'United Kingdom' },
            { value: 'United States', viewValue: 'United States' },
            { value: 'United States Minor Outlying Islands', viewValue: 'United States Minor Outlying Islands' },
            { value: 'Uruguay', viewValue: 'Uruguay' },
            { value: 'Uzbekistan', viewValue: 'Uzbekistan' },
            { value: 'Vanuatu', viewValue: 'Vanuatu' },
            { value: 'Venezuela', viewValue: 'Venezuela' },
            { value: 'Viet Nam', viewValue: 'Viet Nam' },
            { value: 'Virgin Islands, British', viewValue: 'Virgin Islands, British' },
            { value: 'Virgin Islands, U.S.', viewValue: 'Virgin Islands, U.S.' },
            { value: 'Wallis and Futuna', viewValue: 'Wallis and Futuna' },
            { value: 'Western Sahara', viewValue: 'Western Sahara' },
            { value: 'Yemen', viewValue: 'Yemen' },
            { value: 'Zambia', viewValue: 'Zambia' },
            { value: 'Zimbabwe', viewValue: 'Zimbabwe' }
        ];
    }
    //Gets Browser Versions
    getVersions() {
        this.edgeVersions = [
            { value: "Edge - 102.0.1245.7", viewValue: "Edge - 102.0.1245.7" },
            { value: "Edge - 101.0.1210.10", viewValue: "Edge - 101.0.1210.10" },
            { value: "Edge - 100.0.1185.10", viewValue: "Edge - 100.0.1185.10" },
            { value: "Edge - 99.0.1150.11", viewValue: "Edge - 99.0.1150.11" },
            { value: "Edge - 98.0.1108.23", viewValue: "Edge - 98.0.1108.23" },
            { value: "Edge - 97.0.1072.21", viewValue: "Edge - 97.0.1072.21" },
        ];
        this.operaVersions = [
            { value: "Opera - 12.15", viewValue: "Opera - 12.15" },
            { value: "Opera - 12.14", viewValue: "Opera - 12.14" },
            { value: "Opera - 12.13", viewValue: "Opera - 12.13" },
            { value: "Opera - 12.12", viewValue: "Opera - 12.12" },
            { value: "Opera - 12.11", viewValue: "Opera - 12.11" },
            { value: "Opera - 12.10", viewValue: "Opera - 12.10" }
        ];
        this.edgeVersions.map((edge) => {
            this.versionList.push(edge);
        });
        this.operaVersions.map((opera) => {
            this.versionList.push(opera);
        });
        //Chrome Version List Get
        this.tagManagementService.getChromeBrowserVersion().subscribe((res) => {
            let versionsChromeData = res.slice(0, 6);
            versionsChromeData.map((version) => {
                this.versionList.push({
                    value: "Chrome - " + version.version,
                    viewValue: "Chrome - " + version.version
                });
            });
        });
        //FireFox Version List Get
        this.tagManagementService.getFirefoxBrowserVersion().subscribe(res => {
            var firefoxList = [];
            for (var i in res) {
                firefoxList.push({
                    value: "Firefox - " + i,
                    viewValue: "Firefox - " + i
                });
            }
            firefoxList.slice(firefoxList['length'] - 6, firefoxList['length']).map((version) => {
                this.versionList.push({
                    value: version['value'],
                    viewValue: version['viewValue']
                });
            });
        });
        return this.versionList;
    }
    //Gets different ways a tag can display stats
    getRotationTypes() {
        return [
            { value: 'roundRobin', viewValue: 'Round Robin' },
            { value: 'percentage', viewValue: 'Percentage' },
        ];
    }
    getParamTypes() {
        return [
            { value: 'static', viewValue: 'Static' },
            { value: 'dynamic', viewValue: 'Dynamic' },
        ];
    }
}
NewTagComponent.ɵfac = function NewTagComponent_Factory(t) { return new (t || NewTagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tag_management_service__WEBPACK_IMPORTED_MODULE_2__["TagManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_3__["SnackbarService"])); };
NewTagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewTagComponent, selectors: [["app-new-tag"]], viewQuery: function NewTagComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formGroupDirective = _t.first);
    } }, decls: 117, vars: 16, consts: [[1, "example-container", 3, "formGroup", "submit"], [1, "row"], [1, "col-xl-6"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], ["matInput", "", "formControlName", "name", "placeholder", "Name"], [4, "ngIf"], ["matNativeControl", "", "formControlName", "advertiser"], ["value", "Perion"], ["value", "Apptitude"], ["value", "Hopkins"], ["value", "Third Party"], ["matNativeControl", "", "formControlName", "publisher"], ["value", "Pub 1"], ["value", "Pub 2"], ["value", "Pub 3"], ["matInput", "", "formControlName", "company", "placeholder", "Company", 3, "ngModel", "ngModelChange"], ["matNativeControl", "", "formControlName", "browser", "multiple", "", 3, "selectionChange"], ["value", "Chrome"], ["value", "Firefox"], ["value", "Edge"], ["value", "Internet Explorer"], ["matNativeControl", "", "formControlName", "deviceType", "multiple", ""], ["value", "Desktop"], ["value", "Mobile"], ["value", "Tablet"], ["matNativeControl", "", "formControlName", "version", "multiple", ""], [3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", "formControlName", "country", "multiple", ""], ["formControlName", "adServerUrl"], ["value", "devisedata.com"], ["value", "search.monarchdigital.com"], ["formControlName", "statType"], [1, "row", "mb-2"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], ["formArrayName", "subids"], ["class", "row", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["formControlName", "rotationType"], ["matInput", "", "formControlName", "url", "placeholder", "Final URL", 3, "ngModel", "ngModelChange"], ["formArrayName", "params"], [4, "ngFor", "ngForOf"], [1, "col-md-6"], ["mat-raised-button", "", "color", "primary", "type", "submit"], ["mat-raised-button", "", "color", "primary", "type", "button", 3, "click"], [3, "value"], [1, "row", 3, "formGroupName"], [1, "col-md-3"], ["matInput", "", "placeholder", "Subid", "formControlName", "subid"], ["matInput", "", "placeholder", "Limit", "formControlName", "limit"], ["matInput", "", "placeholder", "Split", "formControlName", "split"], [1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "flaticon2-line"], [1, "params", 3, "formGroup"], ["matInput", "", "formControlName", "key", "placeholder", "Final Key"], ["matInput", "", "formControlName", "value", "placeholder", "Final Value"], ["formControlName", "paramType", 3, "selectionChange"], ["matInput", "", "formControlName", "initialParam", "placeholder", "Inital Value", 3, "keyup"]], template: function NewTagComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function NewTagComponent_Template_form_submit_0_listener() { return ctx.saveTag(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Create New Tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NewTagComponent_mat_error_13_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Advertiser");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Perion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Apptitude");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Hopkins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Third Party");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Publisher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Pub 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Pub 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Pub 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewTagComponent_Template_input_ngModelChange_37_listener($event) { return ctx.company = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, NewTagComponent_mat_error_38_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Browsers Allowed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function NewTagComponent_Template_mat_select_selectionChange_42_listener($event) { return ctx.getBrowers($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Chrome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Firefox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Edge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Internet Explorer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Device Type Allowed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Desktop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Tablet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Browser Version Allowed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-select", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, NewTagComponent_mat_option_65_Template, 2, 2, "mat-option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Country Allowed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-select", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, NewTagComponent_mat_option_70_Template, 2, 2, "mat-option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Ad Server URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-select", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "devisedata.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "search.monarchdigital.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Stat Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-select", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, NewTagComponent_mat_option_83_Template, 2, 2, "mat-option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewTagComponent_Template_button_click_85_listener($event) { return ctx.addSubid($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, NewTagComponent_div_88_Template, 13, 1, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Rotation Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-select", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, NewTagComponent_mat_option_93_Template, 2, 2, "mat-option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Tag URLs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewTagComponent_Template_input_ngModelChange_102_listener($event) { return ctx.url = $event; })("ngModelChange", function NewTagComponent_Template_input_ngModelChange_102_listener($event) { return ctx.getUrlParams($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, NewTagComponent_mat_error_103_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](104, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, NewTagComponent_div_105_Template, 13, 2, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Inital URL: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewTagComponent_Template_button_click_115_listener() { return ctx.saveTag(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " Save as Template ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.newTagFG);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 14, ctx.newTagFG.value), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newTagFG.get("name").errors == null ? null : ctx.newTagFG.get("name").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.company);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newTagFG.get("company").errors == null ? null : ctx.newTagFG.get("company").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.browserVersions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countries);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.statTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subids.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rotationTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newTagFG.get("url").errors == null ? null : ctx.newTagFG.get("url").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.params.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.decodeURL(ctx.initialURL));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["JsonPipe"]], styles: [".params[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.params[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  max-width: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy90YWctbWFuYWdlbWVudC9uZXctdGFnL25ldy10YWcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxjQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3RhZy1tYW5hZ2VtZW50L25ldy10YWcvbmV3LXRhZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJhbXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWF4LXdpZHRoOiAyNSU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewTagComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-tag',
                templateUrl: './new-tag.component.html',
                styleUrls: ['./new-tag.component.scss'],
            }]
    }], function () { return [{ type: _tag_management_service__WEBPACK_IMPORTED_MODULE_2__["TagManagementService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_3__["SnackbarService"] }]; }, { formGroupDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/tag-management/tag-management-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/tag-management/tag-management-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: TagManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagManagementRoutingModule", function() { return TagManagementRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _new_tag_new_tag_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-tag/new-tag.component */ "./src/app/modules/tag-management/new-tag/new-tag.component.ts");
/* harmony import */ var _edit_tag_edit_tag_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-tag/edit-tag.component */ "./src/app/modules/tag-management/edit-tag/edit-tag.component.ts");
/* harmony import */ var _tags_tags_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tags/tags.component */ "./src/app/modules/tag-management/tags/tags.component.ts");
/* harmony import */ var _tag_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tag-management.component */ "./src/app/modules/tag-management/tag-management.component.ts");








const routes = [
    {
        path: '',
        component: _tag_management_component__WEBPACK_IMPORTED_MODULE_5__["TagManagementComponent"],
        children: [
            {
                path: 'tags',
                component: _tags_tags_component__WEBPACK_IMPORTED_MODULE_4__["TagsComponent"]
            },
            {
                path: 'new',
                component: _new_tag_new_tag_component__WEBPACK_IMPORTED_MODULE_2__["NewTagComponent"]
            },
            {
                path: 'edit/:id',
                component: _edit_tag_edit_tag_component__WEBPACK_IMPORTED_MODULE_3__["EditTagComponent"],
                pathMatch: 'full'
            },
            { path: '', redirectTo: '', pathMatch: 'full' },
            { path: '**', redirectTo: '', pathMatch: 'full' },
        ],
    },
];
class TagManagementRoutingModule {
}
TagManagementRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TagManagementRoutingModule });
TagManagementRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TagManagementRoutingModule_Factory(t) { return new (t || TagManagementRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TagManagementRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagManagementRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/tag-management/tag-management.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/tag-management/tag-management.component.ts ***!
  \********************************************************************/
/*! exports provided: TagManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagManagementComponent", function() { return TagManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class TagManagementComponent {
    constructor() { }
    ngOnInit() {
    }
}
TagManagementComponent.ɵfac = function TagManagementComponent_Factory(t) { return new (t || TagManagementComponent)(); };
TagManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TagManagementComponent, selectors: [["app-tag-management"]], decls: 1, vars: 0, template: function TagManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tag-management',
                templateUrl: './tag-management.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/tag-management/tag-management.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/tag-management/tag-management.module.ts ***!
  \*****************************************************************/
/*! exports provided: TagManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagManagementModule", function() { return TagManagementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _tag_management_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tag-management-routing.module */ "./src/app/modules/tag-management/tag-management-routing.module.ts");
/* harmony import */ var _tag_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tag-management.component */ "./src/app/modules/tag-management/tag-management.component.ts");
/* harmony import */ var _new_tag_new_tag_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-tag/new-tag.component */ "./src/app/modules/tag-management/new-tag/new-tag.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/snackbar.service */ "./src/app/shared/service/snackbar.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _tags_tags_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tags/tags.component */ "./src/app/modules/tag-management/tags/tags.component.ts");
/* harmony import */ var _edit_tag_edit_tag_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./edit-tag/edit-tag.component */ "./src/app/modules/tag-management/edit-tag/edit-tag.component.ts");


















class TagManagementModule {
}
TagManagementModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TagManagementModule });
TagManagementModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TagManagementModule_Factory(t) { return new (t || TagManagementModule)(); }, providers: [src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_11__["SnackbarService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _tag_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["TagManagementRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__["NgxDatatableModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TagManagementModule, { declarations: [_tag_management_component__WEBPACK_IMPORTED_MODULE_3__["TagManagementComponent"], _new_tag_new_tag_component__WEBPACK_IMPORTED_MODULE_4__["NewTagComponent"], _tags_tags_component__WEBPACK_IMPORTED_MODULE_15__["TagsComponent"], _edit_tag_edit_tag_component__WEBPACK_IMPORTED_MODULE_16__["EditTagComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _tag_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["TagManagementRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__["NgxDatatableModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagManagementModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_tag_management_component__WEBPACK_IMPORTED_MODULE_3__["TagManagementComponent"], _new_tag_new_tag_component__WEBPACK_IMPORTED_MODULE_4__["NewTagComponent"], _tags_tags_component__WEBPACK_IMPORTED_MODULE_15__["TagsComponent"], _edit_tag_edit_tag_component__WEBPACK_IMPORTED_MODULE_16__["EditTagComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _tag_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["TagManagementRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                    _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__["NgxDatatableModule"],
                ],
                providers: [src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_11__["SnackbarService"]],
                entryComponents: [_new_tag_new_tag_component__WEBPACK_IMPORTED_MODULE_4__["NewTagComponent"]],
            }]
    }], null, null); })();


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
    getAllTags() {
        return this.tagsService.getAllTags();
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

/***/ "./src/app/modules/tag-management/tags/tags.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/tag-management/tags/tags.component.ts ***!
  \***************************************************************/
/*! exports provided: TagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsComponent", function() { return TagsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tag_management_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tag-management.service */ "./src/app/modules/tag-management/tag-management.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/snackbar.service */ "./src/app/shared/service/snackbar.service.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");






function TagsComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Name ");
} }
function TagsComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const value_r19 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r19, " ");
} }
function TagsComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Company ");
} }
function TagsComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const value_r21 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r21, " ");
} }
function TagsComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Advertiser ");
} }
function TagsComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const value_r23 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r23, " ");
} }
function TagsComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Publisher ");
} }
function TagsComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const value_r25 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r25, " ");
} }
function TagsComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Browser ");
} }
function TagsComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const value_r27 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r27, " ");
} }
function TagsComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Device Type ");
} }
function TagsComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const value_r29 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r29, " ");
} }
function TagsComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Browser Version ");
} }
function TagsComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const value_r31 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r31, " ");
} }
function TagsComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Country ");
} }
function TagsComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const value_r33 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r33, " ");
} }
function TagsComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Edit");
} }
function TagsComponent_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TagsComponent_ng_template_35_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const row_r34 = ctx.row; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.editTag(row_r34._key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TagsComponent_ng_template_35_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const row_r34 = ctx.row; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.deleteTag(row_r34._key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TagsComponent {
    constructor(tagService, cdr, router, _snackBarService) {
        this.tagService = tagService;
        this.cdr = cdr;
        this.router = router;
        this._snackBarService = _snackBarService;
        this.loadingIndicator = true;
        this.getAllTags();
    }
    ngOnInit() {
    }
    editTag(tagID) {
        this.router.navigateByUrl('/tag-management/edit/' + tagID);
    }
    deleteTag(id) {
        if (window.confirm('Do you want to go ahead?')) {
            this.tagService.deleteTag(id).subscribe((res) => {
                this.getAllTags();
                this._snackBarService.info('Deleted a tag');
            });
        }
    }
    getAllTags() {
        this.tagService.getAllTags().subscribe((x) => {
            this.rows = x;
            console.log(this.rows);
            this.loadingIndicator = false;
            this.cdr.detectChanges();
        });
    }
}
TagsComponent.ɵfac = function TagsComponent_Factory(t) { return new (t || TagsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tag_management_service__WEBPACK_IMPORTED_MODULE_1__["TagManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_3__["SnackbarService"])); };
TagsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TagsComponent, selectors: [["app-tags"]], decls: 36, vars: 8, consts: [[1, "row"], [1, "col-xl-12"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], [1, "material", "fullscreen", 3, "rows", "columnMode", "loadingIndicator", "footerHeight", "rowHeight", "scrollbarH", "headerHeight", "limit"], ["name", "Name"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], ["name", "Company"], ["name", "Advertiser"], ["name", "Publisher"], ["name", "Browser"], ["name", "Device Type"], ["name", "Version"], ["name", "Country"], ["name", "id"], [1, "btn", "btn-sm", "btn-icon", "btn-icon-white", "btn-bg-primary", "m-1", 3, "click"], [1, "flaticon2-pen"], [1, "btn", "btn-sm", "btn-icon", "btn-bg-light", "btn-icon-danger", "m-1", "btn-hover-danger", 3, "click"], [1, "flaticon2-line"]], template: function TagsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "View Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ngx-datatable", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngx-datatable-column", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TagsComponent_ng_template_10_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TagsComponent_ng_template_11_Template, 1, 1, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ngx-datatable-column", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TagsComponent_ng_template_13_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TagsComponent_ng_template_14_Template, 1, 1, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ngx-datatable-column", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TagsComponent_ng_template_16_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TagsComponent_ng_template_17_Template, 1, 1, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ngx-datatable-column", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TagsComponent_ng_template_19_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TagsComponent_ng_template_20_Template, 1, 1, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ngx-datatable-column", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TagsComponent_ng_template_22_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TagsComponent_ng_template_23_Template, 1, 1, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ngx-datatable-column", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, TagsComponent_ng_template_25_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, TagsComponent_ng_template_26_Template, 1, 1, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ngx-datatable-column", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, TagsComponent_ng_template_28_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, TagsComponent_ng_template_29_Template, 1, 1, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ngx-datatable-column", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, TagsComponent_ng_template_31_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, TagsComponent_ng_template_32_Template, 1, 1, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ngx-datatable-column", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, TagsComponent_ng_template_34_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, TagsComponent_ng_template_35_Template, 4, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx.rows)("columnMode", "force")("loadingIndicator", ctx.loadingIndicator)("footerHeight", 50)("rowHeight", 50)("scrollbarH", true)("headerHeight", 50)("limit", 10);
    } }, directives: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnHeaderDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnCellDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGFnLW1hbmFnZW1lbnQvdGFncy90YWdzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tags',
                templateUrl: './tags.component.html',
                styleUrls: ['./tags.component.scss']
            }]
    }], function () { return [{ type: _tag_management_service__WEBPACK_IMPORTED_MODULE_1__["TagManagementService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_3__["SnackbarService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-tag-management-tag-management-module-es2015.js.map