(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-api-documentation-api-documentation-module"], {
    /***/
    "./src/app/modules/api-documentation/api-documentation-routing.module.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/modules/api-documentation/api-documentation-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: ApiDocumentationRoutingModule */

    /***/
    function srcAppModulesApiDocumentationApiDocumentationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiDocumentationRoutingModule", function () {
        return ApiDocumentationRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _api_documentation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./api-documentation.component */
      "./src/app/modules/api-documentation/api-documentation.component.ts");
      /* harmony import */


      var _superadmin_documentation_superadmin_documentation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./superadmin-documentation/superadmin-documentation.component */
      "./src/app/modules/api-documentation/superadmin-documentation/superadmin-documentation.component.ts");
      /* harmony import */


      var _publisher_documentation_publisher_documentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./publisher-documentation/publisher-documentation.component */
      "./src/app/modules/api-documentation/publisher-documentation/publisher-documentation.component.ts");

      var routes = [{
        path: '',
        component: _api_documentation_component__WEBPACK_IMPORTED_MODULE_2__["ApiDocumentationComponent"],
        children: [{
          path: 'superadmin-documentation',
          component: _superadmin_documentation_superadmin_documentation_component__WEBPACK_IMPORTED_MODULE_3__["SuperadminDocumentationComponent"]
        }, {
          path: 'publisher-documentation',
          component: _publisher_documentation_publisher_documentation_component__WEBPACK_IMPORTED_MODULE_4__["PublisherDocumentationComponent"]
        }, {
          path: '',
          redirectTo: '',
          pathMatch: 'full'
        }, {
          path: '**',
          redirectTo: '',
          pathMatch: 'full'
        }]
      }];

      var ApiDocumentationRoutingModule = function ApiDocumentationRoutingModule() {
        _classCallCheck(this, ApiDocumentationRoutingModule);
      };

      ApiDocumentationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ApiDocumentationRoutingModule
      });
      ApiDocumentationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ApiDocumentationRoutingModule_Factory(t) {
          return new (t || ApiDocumentationRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ApiDocumentationRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiDocumentationRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/api-documentation/api-documentation.component.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/modules/api-documentation/api-documentation.component.ts ***!
      \**************************************************************************/

    /*! exports provided: ApiDocumentationComponent */

    /***/
    function srcAppModulesApiDocumentationApiDocumentationComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiDocumentationComponent", function () {
        return ApiDocumentationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var ApiDocumentationComponent = /*#__PURE__*/function () {
        function ApiDocumentationComponent() {
          _classCallCheck(this, ApiDocumentationComponent);
        }

        _createClass(ApiDocumentationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ApiDocumentationComponent;
      }();

      ApiDocumentationComponent.ɵfac = function ApiDocumentationComponent_Factory(t) {
        return new (t || ApiDocumentationComponent)();
      };

      ApiDocumentationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ApiDocumentationComponent,
        selectors: [["app-api-documentation"]],
        decls: 1,
        vars: 0,
        template: function ApiDocumentationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXBpLWRvY3VtZW50YXRpb24vYXBpLWRvY3VtZW50YXRpb24uY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiDocumentationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-api-documentation',
            templateUrl: './api-documentation.component.html',
            styleUrls: ['./api-documentation.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/api-documentation/api-documentation.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/modules/api-documentation/api-documentation.module.ts ***!
      \***********************************************************************/

    /*! exports provided: ApiDocumentationModule */

    /***/
    function srcAppModulesApiDocumentationApiDocumentationModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiDocumentationModule", function () {
        return ApiDocumentationModule;
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


      var _api_documentation_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./api-documentation-routing.module */
      "./src/app/modules/api-documentation/api-documentation-routing.module.ts");
      /* harmony import */


      var _api_documentation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./api-documentation.component */
      "./src/app/modules/api-documentation/api-documentation.component.ts");
      /* harmony import */


      var _publisher_documentation_publisher_documentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./publisher-documentation/publisher-documentation.component */
      "./src/app/modules/api-documentation/publisher-documentation/publisher-documentation.component.ts");
      /* harmony import */


      var _superadmin_documentation_superadmin_documentation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./superadmin-documentation/superadmin-documentation.component */
      "./src/app/modules/api-documentation/superadmin-documentation/superadmin-documentation.component.ts");
      /* harmony import */


      var ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-inline-svg */
      "./node_modules/ng-inline-svg/__ivy_ngcc__/lib_esmodule/index.js");

      var ApiDocumentationModule = function ApiDocumentationModule() {
        _classCallCheck(this, ApiDocumentationModule);
      };

      ApiDocumentationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ApiDocumentationModule
      });
      ApiDocumentationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ApiDocumentationModule_Factory(t) {
          return new (t || ApiDocumentationModule)();
        },
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _api_documentation_routing_module__WEBPACK_IMPORTED_MODULE_2__["ApiDocumentationRoutingModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__["InlineSVGModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ApiDocumentationModule, {
          declarations: [_api_documentation_component__WEBPACK_IMPORTED_MODULE_3__["ApiDocumentationComponent"], _publisher_documentation_publisher_documentation_component__WEBPACK_IMPORTED_MODULE_4__["PublisherDocumentationComponent"], _superadmin_documentation_superadmin_documentation_component__WEBPACK_IMPORTED_MODULE_5__["SuperadminDocumentationComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _api_documentation_routing_module__WEBPACK_IMPORTED_MODULE_2__["ApiDocumentationRoutingModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__["InlineSVGModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiDocumentationModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_api_documentation_component__WEBPACK_IMPORTED_MODULE_3__["ApiDocumentationComponent"], _publisher_documentation_publisher_documentation_component__WEBPACK_IMPORTED_MODULE_4__["PublisherDocumentationComponent"], _superadmin_documentation_superadmin_documentation_component__WEBPACK_IMPORTED_MODULE_5__["SuperadminDocumentationComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _api_documentation_routing_module__WEBPACK_IMPORTED_MODULE_2__["ApiDocumentationRoutingModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__["InlineSVGModule"]],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/api-documentation/publisher-documentation/publisher-documentation.component.ts":
    /*!********************************************************************************************************!*\
      !*** ./src/app/modules/api-documentation/publisher-documentation/publisher-documentation.component.ts ***!
      \********************************************************************************************************/

    /*! exports provided: PublisherDocumentationComponent */

    /***/
    function srcAppModulesApiDocumentationPublisherDocumentationPublisherDocumentationComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PublisherDocumentationComponent", function () {
        return PublisherDocumentationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../auth/_services/auth.service */
      "./src/app/modules/auth/_services/auth.service.ts");
      /* harmony import */


      var src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/service/users.service */
      "./src/app/shared/service/users.service.ts");
      /* harmony import */


      var ngx_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-clipboard */
      "./node_modules/ngx-clipboard/__ivy_ngcc__/fesm2015/ngx-clipboard.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var ng_inline_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-inline-svg */
      "./node_modules/ng-inline-svg/__ivy_ngcc__/lib_esmodule/index.js");

      function PublisherDocumentationComponent_div_41_span_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PublisherDocumentationComponent_div_41_span_5_Template_span_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var tagId_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.openClipBoard(ctx_r5.userApiKey, tagId_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/General/Clipboard.svg");
        }
      }

      function PublisherDocumentationComponent_div_41_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 14);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/General/Clip.svg");
        }
      }

      function PublisherDocumentationComponent_div_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PublisherDocumentationComponent_div_41_span_5_Template, 1, 1, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PublisherDocumentationComponent_div_41_span_6_Template, 1, 1, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tagId_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "http://api.nextsys.io/api/publisher/reporting/api?apiKey=" + ctx_r0.userApiKey + "&tag=" + tagId_r1.tagKey + "&startDate=" + ctx_r0.beforeDate + "&endDate=" + ctx_r0.currentDate + "&reportType=csv", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" http://api.nextsys.io/api/publisher/reporting/api?apiKey=", ctx_r0.userApiKey, "&tag=", tagId_r1.tagKey, "&startDate=", ctx_r0.beforeDate, "&endDate=", ctx_r0.currentDate, "&reportType=csv ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !tagId_r1.copy);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tagId_r1.copy);
        }
      }

      var PublisherDocumentationComponent = /*#__PURE__*/function () {
        function PublisherDocumentationComponent(authService, userService, cdr, clipboardService, datePipe) {
          _classCallCheck(this, PublisherDocumentationComponent);

          this.authService = authService;
          this.userService = userService;
          this.cdr = cdr;
          this.clipboardService = clipboardService;
          this.datePipe = datePipe;
          this.tagIds = [];
          var today = new Date();
          var previousDate = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000); // Subtracting 30 day (720 hours)

          this.currentDate = this.datePipe.transform(today, 'MM-dd-yyyy');
          this.beforeDate = this.datePipe.transform(previousDate, 'MM-dd-yyyy');
        }

        _createClass(PublisherDocumentationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.selectedCompany = this.getSelectedCompanyFromLocalStorage();
            console.log(this.selectedCompany);
            this.currentUser = this.authService.currentUserValue;
            this.userApiKey = this.currentUser.apiKey;
            console.log(this.currentUser);

            if (this.currentUser.tagsId[this.selectedCompany]) {
              this.tagIds = this.currentUser.tagsId[this.selectedCompany].map(function (tagId) {
                var tagKey = tagId.split("/")[1];
                var tagIdData = {
                  tagKey: tagKey,
                  copy: false
                };
                return tagIdData;
              });
            } else {
              this.tagIds = [];
            }
          }
        }, {
          key: "openClipBoard",
          value: function openClipBoard(apiKey, tagId) {
            var _this = this;

            tagId.copy = !tagId.copy;
            var reportApi = "http://api.nextsys.io/api/publisher/reporting/api?apiKey=".concat(apiKey, "&tag=").concat(tagId.tagKey, "&startDate=").concat(this.beforeDate, "&endDate=").concat(this.currentDate, "&reportType=csv");
            this.clipboardService.copyFromContent(reportApi);
            setTimeout(function () {
              tagId.copy = !tagId.copy;

              _this.cdr.detectChanges();
            }, 3000);
            this.cdr.detectChanges();
          } //Gets the Selected Company from Local Storage

        }, {
          key: "getSelectedCompanyFromLocalStorage",
          value: function getSelectedCompanyFromLocalStorage() {
            return this.userService.getSelectedCompanyFromLocalStorage();
          }
        }]);

        return PublisherDocumentationComponent;
      }();

      PublisherDocumentationComponent.ɵfac = function PublisherDocumentationComponent_Factory(t) {
        return new (t || PublisherDocumentationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]));
      };

      PublisherDocumentationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PublisherDocumentationComponent,
        selectors: [["app-publisher-documentation"]],
        decls: 42,
        vars: 2,
        consts: [[1, "contents__box", "contents__box--right"], [1, "section"], [1, "section-head"], [1, "section-content"], [1, "hljs", "bash"], [1, "hljs-built_in"], [1, "hljs-built"], ["class", "available-api", 4, "ngFor", "ngForOf"], [1, "available-api"], ["target", "_blank", 1, "available-api-a", 3, "href"], ["title", "Copy API", 1, "btn", "btn-sm"], ["cacheSVG", "true", "class", "svg-icon svg-icon-md svg-icon-primary", 3, "inlineSVG", "click", 4, "ngIf"], ["cacheSVG", "true", "class", "svg-icon svg-icon-md svg-icon-primary", 3, "inlineSVG", 4, "ngIf"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-md", "svg-icon-primary", 3, "inlineSVG", "click"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-md", "svg-icon-primary", 3, "inlineSVG"]],
        template: function PublisherDocumentationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "API Documentation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "API Link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "code", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "http://api.nextsys.io/api/publisher/reporting/api?apiKey=APIKEY&tag=TAGID&startDate=MM-DD-YYYY&endDate=MM-DD-YYYY");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Parameters");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "code", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "apiKey(required):");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "tag(required):");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Tag ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "startDate(required):");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " MM-DD-YYYY");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "endDate(required):");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " MM-DD-YYYY");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "reportFormat(optional):");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " csv, json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "The Available Request API");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, PublisherDocumentationComponent_div_41_Template, 7, 7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.userApiKey, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tagIds);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_5__["InlineSVGDirective"]],
        styles: ["@media screen and (max-width: 1280px) {\n  .contents__box[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.section[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.section[_ngcontent-%COMP%]   .section-head[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 28px;\n  margin-bottom: 40px;\n  padding: 0;\n  color: #333;\n}\n.section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%] {\n  color: #6f728d;\n  margin-bottom: 20px;\n}\n.contents__box[_ngcontent-%COMP%] {\n  padding: 40px;\n  width: 900px;\n  border-radius: 5px;\n  background-color: #ffffff;\n  -o-box-shadow: 0 0 15px 0 rgba(220, 220, 220, 0.4);\n  box-shadow: 0 0 15px 0 rgba(220, 220, 220, 0.4);\n}\n.hljs[_ngcontent-%COMP%] {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #232323;\n  color: #e6e1dc;\n}\n.hljs[_ngcontent-%COMP%] {\n  padding: 10px 20px !important;\n  border-radius: 3px;\n}\npre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%] {\n  max-height: 500px;\n}\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-size: inherit;\n  color: inherit;\n  word-break: normal;\n}\n.hljs-built_in[_ngcontent-%COMP%] {\n  color: #ffffff;\n  display: block;\n}\n.hljs-built[_ngcontent-%COMP%] {\n  color: #6d9cbe;\n}\n.available-api[_ngcontent-%COMP%] {\n  padding: 10px 25px;\n  border-radius: 8px;\n  background-color: #232323;\n  display: flex;\n  margin: 2px;\n  font-size: 10px;\n}\n.available-api-a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hcGktZG9jdW1lbnRhdGlvbi9wdWJsaXNoZXItZG9jdW1lbnRhdGlvbi9wdWJsaXNoZXItZG9jdW1lbnRhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksV0FBQTtFQUNOO0FBQ0Y7QUFFQTtFQUNJLFdBQUE7QUFBSjtBQUdBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUFKO0FBR0E7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUdBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0RBQUE7RUFDQSwrQ0FBQTtBQUFKO0FBR0E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQUo7QUFHQTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUdBO0VBQ0ksaUJBQUE7QUFBSjtBQUdBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUdBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUFBSjtBQUdBO0VBQ0ksY0FBQTtBQUFKO0FBR0E7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFBSjtBQUdBO0VBQ0ksV0FBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hcGktZG9jdW1lbnRhdGlvbi9wdWJsaXNoZXItZG9jdW1lbnRhdGlvbi9wdWJsaXNoZXItZG9jdW1lbnRhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gICAgLmNvbnRlbnRzX19ib3gge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2VjdGlvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNlY3Rpb24gLnNlY3Rpb24taGVhZCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCB7XHJcbiAgICBjb2xvcjogIzZmNzI4ZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50c19fYm94IHtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICB3aWR0aDogOTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgLW8tYm94LXNoYWRvdzogMCAwIDE1cHggMCByZ2JhKDIyMCwyMjAsMjIwLDAuNCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTVweCAwIHJnYigyMjAgMjIwIDIyMCAvIDQwJSk7XHJcbn1cclxuXHJcbi5obGpzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgYmFja2dyb3VuZDogIzIzMjMyMztcclxuICAgIGNvbG9yOiAjZTZlMWRjO1xyXG59XHJcblxyXG4uaGxqcyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxucHJlPmNvZGUge1xyXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbn1cclxuXHJcbnByZSBjb2RlIHtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgd29yZC1icmVhazogbm9ybWFsO1xyXG59XHJcblxyXG4uaGxqcy1idWlsdF9pbiB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uaGxqcy1idWlsdCB7XHJcbiAgICBjb2xvcjogIzZkOWNiZTtcclxufVxyXG5cclxuLmF2YWlsYWJsZS1hcGkge1xyXG4gICAgcGFkZGluZzogMTBweCAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjMyMztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDJweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLmF2YWlsYWJsZS1hcGktYSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublisherDocumentationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-publisher-documentation',
            templateUrl: './publisher-documentation.component.html',
            styleUrls: ['./publisher-documentation.component.scss']
          }]
        }], function () {
          return [{
            type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }, {
            type: src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: ngx_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardService"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/api-documentation/superadmin-documentation/superadmin-documentation.component.ts":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/modules/api-documentation/superadmin-documentation/superadmin-documentation.component.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: SuperadminDocumentationComponent */

    /***/
    function srcAppModulesApiDocumentationSuperadminDocumentationSuperadminDocumentationComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuperadminDocumentationComponent", function () {
        return SuperadminDocumentationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../auth/_services/auth.service */
      "./src/app/modules/auth/_services/auth.service.ts");

      var SuperadminDocumentationComponent = /*#__PURE__*/function () {
        function SuperadminDocumentationComponent(authService) {
          _classCallCheck(this, SuperadminDocumentationComponent);

          this.authService = authService;
        }

        _createClass(SuperadminDocumentationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentUser = this.authService.currentUserValue;
            this.userApiKey = this.currentUser.apiKey;
          }
        }]);

        return SuperadminDocumentationComponent;
      }();

      SuperadminDocumentationComponent.ɵfac = function SuperadminDocumentationComponent_Factory(t) {
        return new (t || SuperadminDocumentationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
      };

      SuperadminDocumentationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SuperadminDocumentationComponent,
        selectors: [["app-superadmin-documentation"]],
        decls: 10,
        vars: 1,
        consts: [[1, "contents__box", "contents__box--right"], [1, "section"], [1, "section-head"], [1, "section-content"], [1, "text-dark", 2, "font-size", "1.25rem"]],
        template: function SuperadminDocumentationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Super Admin API Documentation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "API Key : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userApiKey);
          }
        },
        styles: ["@media screen and (max-width: 1280px) {\n  .contents__box[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.section[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.section[_ngcontent-%COMP%]   .section-head[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 28px;\n  margin-bottom: 40px;\n  padding: 0;\n  color: #333;\n}\n.section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%] {\n  color: #6f728d;\n  margin-bottom: 20px;\n}\n.contents__box[_ngcontent-%COMP%] {\n  padding: 40px;\n  width: 900px;\n  border-radius: 5px;\n  background-color: #ffffff;\n  -o-box-shadow: 0 0 15px 0 rgba(220, 220, 220, 0.4);\n  box-shadow: 0 0 15px 0 rgba(220, 220, 220, 0.4);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hcGktZG9jdW1lbnRhdGlvbi9zdXBlcmFkbWluLWRvY3VtZW50YXRpb24vc3VwZXJhZG1pbi1kb2N1bWVudGF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7SUFDSSxXQUFBO0VBQ047QUFDRjtBQUVBO0VBQ0ksV0FBQTtBQUFKO0FBR0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQUo7QUFHQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtBQUFKO0FBR0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrREFBQTtFQUNBLCtDQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FwaS1kb2N1bWVudGF0aW9uL3N1cGVyYWRtaW4tZG9jdW1lbnRhdGlvbi9zdXBlcmFkbWluLWRvY3VtZW50YXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAgIC5jb250ZW50c19fYm94IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLnNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zZWN0aW9uIC5zZWN0aW9uLWhlYWQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQge1xyXG4gICAgY29sb3I6ICM2ZjcyOGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uY29udGVudHNfX2JveCB7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgd2lkdGg6IDkwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIC1vLWJveC1zaGFkb3c6IDAgMCAxNXB4IDAgcmdiYSgyMjAsMjIwLDIyMCwwLjQpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggMCByZ2IoMjIwIDIyMCAyMjAgLyA0MCUpO1xyXG59XHJcblxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SuperadminDocumentationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-superadmin-documentation',
            templateUrl: './superadmin-documentation.component.html',
            styleUrls: ['./superadmin-documentation.component.scss']
          }]
        }], function () {
          return [{
            type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-api-documentation-api-documentation-module-es5.js.map