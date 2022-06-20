(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "./src/app/modules/auth/registration/confirm-password.validator.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/modules/auth/registration/confirm-password.validator.ts ***!
      \*************************************************************************/

    /*! exports provided: ConfirmPasswordValidator */

    /***/
    function srcAppModulesAuthRegistrationConfirmPasswordValidatorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmPasswordValidator", function () {
        return ConfirmPasswordValidator;
      });

      var ConfirmPasswordValidator = /*#__PURE__*/function () {
        function ConfirmPasswordValidator() {
          _classCallCheck(this, ConfirmPasswordValidator);
        }

        _createClass(ConfirmPasswordValidator, null, [{
          key: "MatchPassword",

          /**
           * Check matching password with confirm password
           * @param control AbstractControl
           */
          value: function MatchPassword(control) {
            var password = control.get('password').value;
            var confirmPassword = control.get('cPassword').value;

            if (password !== confirmPassword) {
              control.get('cPassword').setErrors({
                ConfirmPassword: true
              });
            } else {
              return null;
            }
          }
        }]);

        return ConfirmPasswordValidator;
      }();
      /***/

    },

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
    "./src/app/modules/tag-management/tag-management.service.ts":
    /*!******************************************************************!*\
      !*** ./src/app/modules/tag-management/tag-management.service.ts ***!
      \******************************************************************/

    /*! exports provided: TagManagementService */

    /***/
    function srcAppModulesTagManagementTagManagementServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagManagementService", function () {
        return TagManagementService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_service_tags_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../shared/service/tags.service */
      "./src/app/shared/service/tags.service.ts");

      var TagManagementService = /*#__PURE__*/function () {
        function TagManagementService(tagsService) {
          _classCallCheck(this, TagManagementService);

          this.tagsService = tagsService;
        } // Get all Chrome objects


        _createClass(TagManagementService, [{
          key: "getChromeBrowserVersion",
          value: function getChromeBrowserVersion() {
            return this.tagsService.getChrome();
          } // Get all Chrome objects

        }, {
          key: "getFirefoxBrowserVersion",
          value: function getFirefoxBrowserVersion() {
            return this.tagsService.getFirefox();
          }
        }, {
          key: "addTag",
          value: function addTag(tag) {
            return this.tagsService.add(tag);
          }
        }, {
          key: "getAllTags",
          value: function getAllTags() {
            return this.tagsService.getAllTags();
          }
        }, {
          key: "getCompanyTags",
          value: function getCompanyTags(companyKey) {
            return this.tagsService.getCompanyTags(companyKey);
          }
        }, {
          key: "deleteTag",
          value: function deleteTag(tagKey) {
            return this.tagsService.deleteTag(tagKey);
          }
        }, {
          key: "getOneTag",
          value: function getOneTag(tag) {
            return this.tagsService.getOneTag(tag);
          }
        }, {
          key: "updateOneTag",
          value: function updateOneTag(tag) {
            return this.tagsService.updateOneTag(tag);
          }
        }, {
          key: "addTemplate",
          value: function addTemplate(template) {
            return this.tagsService.addTemplate(template);
          }
        }, {
          key: "getAllTemplates",
          value: function getAllTemplates() {
            return this.tagsService.getAllTemplates();
          }
        }, {
          key: "deleteTemplate",
          value: function deleteTemplate(templateKey) {
            return this.tagsService.deleteTemplate(templateKey);
          }
        }, {
          key: "getOneTemplate",
          value: function getOneTemplate(template) {
            return this.tagsService.getOneTemplate(template);
          }
        }]);

        return TagManagementService;
      }();

      TagManagementService.ɵfac = function TagManagementService_Factory(t) {
        return new (t || TagManagementService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_service_tags_service__WEBPACK_IMPORTED_MODULE_1__["TagsService"]));
      };

      TagManagementService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TagManagementService,
        factory: TagManagementService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagManagementService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _shared_service_tags_service__WEBPACK_IMPORTED_MODULE_1__["TagsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/service/notification.service.ts":
    /*!********************************************************!*\
      !*** ./src/app/shared/service/notification.service.ts ***!
      \********************************************************/

    /*! exports provided: NotificationService */

    /***/
    function srcAppSharedServiceNotificationServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationService", function () {
        return NotificationService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

      var NotificationService = /*#__PURE__*/function () {
        function NotificationService(toastr) {
          _classCallCheck(this, NotificationService);

          this.toastr = toastr;
        }

        _createClass(NotificationService, [{
          key: "showSuccess",
          value: function showSuccess(message, title) {
            this.toastr.success(message, title);
          }
        }, {
          key: "showError",
          value: function showError(message, title) {
            this.toastr.error(message, title);
          }
        }, {
          key: "showInfo",
          value: function showInfo(message, title) {
            this.toastr.info(message, title);
          }
        }, {
          key: "showWarning",
          value: function showWarning(message, title) {
            this.toastr.warning(message, title);
          }
        }]);

        return NotificationService;
      }();

      NotificationService.ɵfac = function NotificationService_Factory(t) {
        return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]));
      };

      NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NotificationService,
        factory: NotificationService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]
          }];
        }, null);
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
        }, {
          key: "notAccess",
          value: function notAccess(message) {
            this._snackBar.open(message, null, {
              duration: 2000,
              horizontalPosition: 'right',
              verticalPosition: 'top',
              panelClass: 'not-allowed-access'
            });
          }
        }, {
          key: "error",
          value: function error(message) {
            this._snackBar.open(message, null, {
              duration: 2000,
              horizontalPosition: 'right',
              verticalPosition: 'top',
              panelClass: 'not-allowed-access'
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");

      var API_TAGS_URL = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/tags");
      var API_TEMPLATES_URL = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/templates");

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
          key: "getCompanyTags",
          value: function getCompanyTags(companyKey) {
            return this.http.get(API_TAGS_URL + "/get_tag_company/".concat(companyKey));
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
        }, {
          key: "addTemplate",
          value: function addTemplate(template) {
            return this.http.post(API_TEMPLATES_URL, template);
          }
        }, {
          key: "getAllTemplates",
          value: function getAllTemplates() {
            return this.http.get(API_TEMPLATES_URL);
          }
        }, {
          key: "deleteTemplate",
          value: function deleteTemplate(templateKey) {
            return this.http["delete"](API_TEMPLATES_URL + "/".concat(templateKey));
          }
        }, {
          key: "getOneTemplate",
          value: function getOneTemplate(template) {
            return this.http.get(API_TEMPLATES_URL + "/get_template/".concat(template));
          }
        }, {
          key: "getUserTags",
          value: function getUserTags(tags) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            params = params.append('tags', JSON.stringify(tags));
            return this.http.get(API_TAGS_URL + "/get_many_tags", {
              params: params
            });
          }
        }]);

        return TagsService;
      }();

      TagsService.ɵfac = function TagsService_Factory(t) {
        return new (t || TagsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      TagsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: TagsService,
        factory: TagsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TagsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map