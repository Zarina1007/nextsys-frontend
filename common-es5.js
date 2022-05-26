(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "./src/app/modules/i18n/translation.module.ts":
    /*!****************************************************!*\
      !*** ./src/app/modules/i18n/translation.module.ts ***!
      \****************************************************/

    /*! exports provided: TranslationModule */

    /***/
    function srcAppModulesI18nTranslationModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TranslationModule", function () {
        return TranslationModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var TranslationModule = function TranslationModule() {
        _classCallCheck(this, TranslationModule);
      };

      TranslationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: TranslationModule
      });
      TranslationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function TranslationModule_Factory(t) {
          return new (t || TranslationModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TranslationModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslationModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]],
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/service/snackbar.service.ts":
    /*!****************************************************!*\
      !*** ./src/app/shared/service/snackbar.service.ts ***!
      \****************************************************/

    /*! exports provided: SnackbarService */

    /***/
    function srcAppSharedServiceSnackbarServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SnackbarService", function () {
        return SnackbarService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");

      var SnackbarService = /*#__PURE__*/function () {
        function SnackbarService(_snackBar) {
          _classCallCheck(this, SnackbarService);

          this._snackBar = _snackBar;
        }

        _createClass(SnackbarService, [{
          key: "info",
          value: function info(message) {
            this._snackBar.open(message, null, {
              duration: 2000,
              horizontalPosition: 'right',
              verticalPosition: 'bottom'
            });
          }
        }]);

        return SnackbarService;
      }();

      SnackbarService.ɵfac = function SnackbarService_Factory(t) {
        return new (t || SnackbarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]));
      };

      SnackbarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SnackbarService,
        factory: SnackbarService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SnackbarService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/service/tags.service.ts":
    /*!************************************************!*\
      !*** ./src/app/shared/service/tags.service.ts ***!
      \************************************************/

    /*! exports provided: TagsService */

    /***/
    function srcAppSharedServiceTagsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsService", function () {
        return TagsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var API_TAGS_URL = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/tags");

      var TagsService = /*#__PURE__*/function () {
        function TagsService(http) {
          _classCallCheck(this, TagsService);

          this.http = http;
        }

        _createClass(TagsService, [{
          key: "getAll",
          value: function getAll() {
            return this.http.get(API_TAGS_URL);
          }
        }, {
          key: "add",
          value: function add(tag) {
            return this.http.post(API_TAGS_URL, tag);
          }
        }, {
          key: "getChrome",
          value: function getChrome() {
            return this.http.get(API_TAGS_URL + "/chrome/browser");
          }
        }, {
          key: "getFirefox",
          value: function getFirefox() {
            return this.http.get(API_TAGS_URL + "/firefox/browser");
          }
        }, {
          key: "getAllTags",
          value: function getAllTags() {
            return this.http.get(API_TAGS_URL + '/');
          }
        }, {
          key: "deleteTag",
          value: function deleteTag(tagKey) {
            return this.http["delete"](API_TAGS_URL + "/".concat(tagKey));
          }
        }, {
          key: "getOneTag",
          value: function getOneTag(tag) {
            return this.http.get(API_TAGS_URL + "/get_tag/".concat(tag));
          }
        }, {
          key: "updateOneTag",
          value: function updateOneTag(tag) {
            return this.http.post(API_TAGS_URL + "/update/".concat(tag._key), tag);
          }
        }]);

        return TagsService;
      }();

      TagsService.ɵfac = function TagsService_Factory(t) {
        return new (t || TagsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      TagsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TagsService,
        factory: TagsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagsService, [{
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
//# sourceMappingURL=common-es5.js.map