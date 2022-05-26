(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/modules/i18n/translation.module.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/i18n/translation.module.ts ***!
  \****************************************************/
/*! exports provided: TranslationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationModule", function() { return TranslationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");




class TranslationModule {
}
TranslationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TranslationModule });
TranslationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TranslationModule_Factory(t) { return new (t || TranslationModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TranslationModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]],
                exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/service/snackbar.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/service/snackbar.service.ts ***!
  \****************************************************/
/*! exports provided: SnackbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarService", function() { return SnackbarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");



class SnackbarService {
    constructor(_snackBar) {
        this._snackBar = _snackBar;
    }
    info(message) {
        this._snackBar.open(message, null, {
            duration: 2000,
            horizontalPosition: 'right',
            verticalPosition: 'bottom',
        });
    }
}
SnackbarService.ɵfac = function SnackbarService_Factory(t) { return new (t || SnackbarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"])); };
SnackbarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SnackbarService, factory: SnackbarService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SnackbarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/service/tags.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/service/tags.service.ts ***!
  \************************************************/
/*! exports provided: TagsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsService", function() { return TagsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const API_TAGS_URL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/tags`;
class TagsService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get(API_TAGS_URL);
    }
    add(tag) {
        return this.http.post(API_TAGS_URL, tag);
    }
    getChrome() {
        return this.http.get(API_TAGS_URL + "/chrome/browser");
    }
    getFirefox() {
        return this.http.get(API_TAGS_URL + "/firefox/browser");
    }
    getAllTags() {
        return this.http.get(API_TAGS_URL + '/');
    }
    deleteTag(tagKey) {
        return this.http.delete(API_TAGS_URL + `/${tagKey}`);
    }
    getOneTag(tag) {
        return this.http.get(API_TAGS_URL + `/get_tag/${tag}`);
    }
    updateOneTag(tag) {
        return this.http.post(API_TAGS_URL + `/update/${tag._key}`, tag);
    }
}
TagsService.ɵfac = function TagsService_Factory(t) { return new (t || TagsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
TagsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TagsService, factory: TagsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map