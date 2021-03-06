(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-company-management-company-management-module"], {
    /***/
    "./src/app/modules/company-management/companies/companies.component.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/modules/company-management/companies/companies.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: CompaniesComponent */

    /***/
    function srcAppModulesCompanyManagementCompaniesCompaniesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompaniesComponent", function () {
        return CompaniesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _company_management_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../company-management.service */
      "./src/app/modules/company-management/company-management.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/service/users.service */
      "./src/app/shared/service/users.service.ts");
      /* harmony import */


      var src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/service/notification.service */
      "./src/app/shared/service/notification.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var ng_inline_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-inline-svg */
      "./node_modules/ng-inline-svg/__ivy_ngcc__/lib_esmodule/index.js");

      function CompaniesComponent_div_0_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Name ");
        }
      }

      function CompaniesComponent_div_0_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0);
        }

        if (rf & 2) {
          var value_r7 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", value_r7, " ");
        }
      }

      function CompaniesComponent_div_0_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, "Edit");
        }
      }

      function CompaniesComponent_div_0_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CompaniesComponent_div_0_ng_template_14_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r10);

            var row_r8 = ctx.row;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r9.editCompany(row_r8._key);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("inlineSVG", "./assets/media/svg/icons/Communication/Write.svg");
        }
      }

      function CompaniesComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "View Companies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "ngx-datatable", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "ngx-datatable-column", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, CompaniesComponent_div_0_ng_template_10_Template, 1, 0, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, CompaniesComponent_div_0_ng_template_11_Template, 1, 1, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "ngx-datatable-column", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, CompaniesComponent_div_0_ng_template_13_Template, 1, 0, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, CompaniesComponent_div_0_ng_template_14_Template, 2, 1, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rows", ctx_r0.rows)("columnMode", "force")("loadingIndicator", ctx_r0.loadingIndicator)("footerHeight", 50)("rowHeight", 50)("scrollbarH", true)("headerHeight", 50)("limit", 10);
        }
      }

      function CompaniesComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " How did you get here ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Sorry you can't access the page you're looking for. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " There may be a misspelling in the URL entered,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "or the page you are looking for may no longer exist. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var CompaniesComponent = /*#__PURE__*/function () {
        function CompaniesComponent(companyService, cdr, router, userService, notification) {
          _classCallCheck(this, CompaniesComponent);

          this.companyService = companyService;
          this.cdr = cdr;
          this.router = router;
          this.userService = userService;
          this.notification = notification;
          this.loadingIndicator = true;
          this.hidden = false;
          this.getAllCompanies();
        }

        _createClass(CompaniesComponent, [{
          key: "getAllCompanies",
          value: function getAllCompanies() {
            var _this = this;

            this.localStorageCompany = this.getSelectedCompanyFromLocalStorage(); //access page part

            if (!this.localStorageCompany) {
              this.hidden = true;
              this.notification.showError("Please select your Company!", "");
            } else {
              this.hidden = false;
            }

            this.companyService.getAllCompanies().subscribe(function (x) {
              _this.rows = x;
              console.log(_this.rows);
              _this.loadingIndicator = false;

              _this.cdr.detectChanges();
            });
          }
        }, {
          key: "editCompany",
          value: function editCompany(companyID) {
            this.router.navigateByUrl('/company-management/edit/' + companyID);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {// console.log(companies)
          } //Gets the Selected Company from Local Storage

        }, {
          key: "getSelectedCompanyFromLocalStorage",
          value: function getSelectedCompanyFromLocalStorage() {
            return this.userService.getSelectedCompanyFromLocalStorage();
          }
        }]);

        return CompaniesComponent;
      }();

      CompaniesComponent.??fac = function CompaniesComponent_Factory(t) {
        return new (t || CompaniesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_company_management_service__WEBPACK_IMPORTED_MODULE_1__["CompanyManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]));
      };

      CompaniesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: CompaniesComponent,
        selectors: [["app-companies"]],
        decls: 2,
        vars: 2,
        consts: [["class", "row", 4, "ngIf"], ["class", "error error-3 d-flex flex-row-fluid bgi-size-cover bgi-position-center", "style", "background-image: url('./assets/media/error/bg3.jpg'); height: 100%;zoom: 1;\n  display: block;\n  min-height: 80vh;\n  font-size: 14px;\n  line-height: 1.4;\n  color: #0e1724;", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], [1, "material", "fullscreen", 3, "rows", "columnMode", "loadingIndicator", "footerHeight", "rowHeight", "scrollbarH", "headerHeight", "limit"], ["name", "Name"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], ["name", "id"], ["title", "Edit company", 1, "btn", "btn-icon", "btn-light", "btn-hover-primary", "btn-sm", "mx-3", 3, "click"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-md", "svg-icon-primary", 3, "inlineSVG"], [1, "error", "error-3", "d-flex", "flex-row-fluid", "bgi-size-cover", "bgi-position-center", 2, "background-image", "url('./assets/media/error/bg3.jpg')", "height", "100%", "zoom", "1", "display", "block", "min-height", "80vh", "font-size", "14px", "line-height", "1.4", "color", "#0e1724"], [1, "px-10", "px-md-30", "py-10", "py-md-0", "d-flex", "flex-column", "justify-content-md-center"], [1, "display-4", "font-weight-boldest", "text-white", "mb-12"], [1, "font-size-h1", "font-weight-boldest", "text-dark-75"], [1, "font-size-h4", "line-height-md"]],
        template: function CompaniesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, CompaniesComponent_div_0_Template, 15, 8, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CompaniesComponent_div_1_Template, 10, 0, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.hidden);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.hidden);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["DataTableColumnHeaderDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["DataTableColumnCellDirective"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_7__["InlineSVGDirective"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tcGFueS1tYW5hZ2VtZW50L2NvbXBhbmllcy9jb21wYW5pZXMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CompaniesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-companies',
            templateUrl: './companies.component.html',
            styleUrls: ['./companies.component.scss']
          }]
        }], function () {
          return [{
            type: _company_management_service__WEBPACK_IMPORTED_MODULE_1__["CompanyManagementService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]
          }, {
            type: src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/company-management/company-management-routing.module.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/modules/company-management/company-management-routing.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: CompanyManagementRoutingModule */

    /***/
    function srcAppModulesCompanyManagementCompanyManagementRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyManagementRoutingModule", function () {
        return CompanyManagementRoutingModule;
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


      var _companies_companies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./companies/companies.component */
      "./src/app/modules/company-management/companies/companies.component.ts");
      /* harmony import */


      var _company_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./company-management.component */
      "./src/app/modules/company-management/company-management.component.ts");
      /* harmony import */


      var _edit_company_edit_company_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./edit-company/edit-company.component */
      "./src/app/modules/company-management/edit-company/edit-company.component.ts");
      /* harmony import */


      var _new_company_new_company_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./new-company/new-company.component */
      "./src/app/modules/company-management/new-company/new-company.component.ts");

      var routes = [{
        path: '',
        component: _company_management_component__WEBPACK_IMPORTED_MODULE_3__["CompanyManagementComponent"],
        children: [{
          path: 'companies',
          component: _companies_companies_component__WEBPACK_IMPORTED_MODULE_2__["CompaniesComponent"]
        }, {
          path: 'new',
          component: _new_company_new_company_component__WEBPACK_IMPORTED_MODULE_5__["NewCompanyComponent"]
        }, {
          path: 'edit/:id',
          component: _edit_company_edit_company_component__WEBPACK_IMPORTED_MODULE_4__["EditCompanyComponent"],
          pathMatch: 'full'
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

      var CompanyManagementRoutingModule = function CompanyManagementRoutingModule() {
        _classCallCheck(this, CompanyManagementRoutingModule);
      };

      CompanyManagementRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: CompanyManagementRoutingModule
      });
      CompanyManagementRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function CompanyManagementRoutingModule_Factory(t) {
          return new (t || CompanyManagementRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](CompanyManagementRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CompanyManagementRoutingModule, [{
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
    "./src/app/modules/company-management/company-management.module.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/modules/company-management/company-management.module.ts ***!
      \*************************************************************************/

    /*! exports provided: CompanyManagementModule */

    /***/
    function srcAppModulesCompanyManagementCompanyManagementModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyManagementModule", function () {
        return CompanyManagementModule;
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


      var _company_management_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./company-management-routing.module */
      "./src/app/modules/company-management/company-management-routing.module.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _new_company_new_company_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./new-company/new-company.component */
      "./src/app/modules/company-management/new-company/new-company.component.ts");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
      /* harmony import */


      var src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/service/snackbar.service */
      "./src/app/shared/service/snackbar.service.ts");
      /* harmony import */


      var _companies_companies_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./companies/companies.component */
      "./src/app/modules/company-management/companies/companies.component.ts");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _edit_company_edit_company_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./edit-company/edit-company.component */
      "./src/app/modules/company-management/edit-company/edit-company.component.ts");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var ng_inline_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ng-inline-svg */
      "./node_modules/ng-inline-svg/__ivy_ngcc__/lib_esmodule/index.js");

      var CompanyManagementModule = function CompanyManagementModule() {
        _classCallCheck(this, CompanyManagementModule);
      };

      CompanyManagementModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: CompanyManagementModule
      });
      CompanyManagementModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function CompanyManagementModule_Factory(t) {
          return new (t || CompanyManagementModule)();
        },
        providers: [src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_9__["SnackbarService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _company_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["CompanyManagementRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["NgxDatatableModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_15__["InlineSVGModule"].forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](CompanyManagementModule, {
          declarations: [_new_company_new_company_component__WEBPACK_IMPORTED_MODULE_7__["NewCompanyComponent"], _companies_companies_component__WEBPACK_IMPORTED_MODULE_10__["CompaniesComponent"], _edit_company_edit_company_component__WEBPACK_IMPORTED_MODULE_13__["EditCompanyComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _company_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["CompanyManagementRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["NgxDatatableModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_15__["InlineSVGModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CompanyManagementModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_new_company_new_company_component__WEBPACK_IMPORTED_MODULE_7__["NewCompanyComponent"], _companies_companies_component__WEBPACK_IMPORTED_MODULE_10__["CompaniesComponent"], _edit_company_edit_company_component__WEBPACK_IMPORTED_MODULE_13__["EditCompanyComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _company_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["CompanyManagementRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["NgxDatatableModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_15__["InlineSVGModule"].forRoot()],
            providers: [src_app_shared_service_snackbar_service__WEBPACK_IMPORTED_MODULE_9__["SnackbarService"]],
            entryComponents: [_new_company_new_company_component__WEBPACK_IMPORTED_MODULE_7__["NewCompanyComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/company-management/edit-company/edit-company.component.ts":
    /*!***********************************************************************************!*\
      !*** ./src/app/modules/company-management/edit-company/edit-company.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: EditCompanyComponent */

    /***/
    function srcAppModulesCompanyManagementEditCompanyEditCompanyComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditCompanyComponent", function () {
        return EditCompanyComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/modules/auth/_services/auth.service */
      "./src/app/modules/auth/_services/auth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _company_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../company-management.service */
      "./src/app/modules/company-management/company-management.service.ts");
      /* harmony import */


      var src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/service/notification.service */
      "./src/app/shared/service/notification.service.ts");
      /* harmony import */


      var src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/service/users.service */
      "./src/app/shared/service/users.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

      function EditCompanyComponent_form_0_mat_error_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Company Name is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function EditCompanyComponent_form_0_div_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EditCompanyComponent_form_0_div_23_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r8.deleteOneCompany();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function EditCompanyComponent_form_0_mat_error_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Company Name is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function EditCompanyComponent_form_0_div_46_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EditCompanyComponent_form_0_div_46_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r10.deleteOneCompany();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function EditCompanyComponent_form_0_div_62_mat_error_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " AdServerURL is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function EditCompanyComponent_form_0_div_62_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, EditCompanyComponent_form_0_div_62_mat_error_4_Template, 2, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EditCompanyComponent_form_0_div_62_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r16);

            var i_r13 = ctx.index;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r15.removeAdServerUrl(i_r13);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var adUrlItem_r12 = ctx.$implicit;
          var i_r13 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroupName", i_r13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", adUrlItem_r12.get("adServerUrl").errors == null ? null : adUrlItem_r12.get("adServerUrl").errors.required);
        }
      }

      function EditCompanyComponent_form_0_div_70_mat_option_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var reportingProvider_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", reportingProvider_r25.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", reportingProvider_r25.viewValue, " ");
        }
      }

      function EditCompanyComponent_form_0_div_70_mat_error_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Reporting Provider is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function EditCompanyComponent_form_0_div_70_mat_error_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Email is not valid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function EditCompanyComponent_form_0_div_70_mat_error_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Password is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function EditCompanyComponent_form_0_div_70_mat_error_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "ApiUrl Name is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function EditCompanyComponent_form_0_div_70_mat_error_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "ApiKey Name is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function EditCompanyComponent_form_0_div_70_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h3", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EditCompanyComponent_form_0_div_70_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r27);

            var i_r18 = ctx.index;

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r26.removeReportingProvider(i_r18);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Reporting Providers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-select", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("selectionChange", function EditCompanyComponent_form_0_div_70_Template_mat_select_selectionChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r27);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r28.handleChangeProvider($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, EditCompanyComponent_form_0_div_70_mat_option_15_Template, 2, 2, "mat-option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, EditCompanyComponent_form_0_div_70_mat_error_16_Template, 2, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, EditCompanyComponent_form_0_div_70_mat_error_21_Template, 2, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, EditCompanyComponent_form_0_div_70_mat_error_25_Template, 2, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, EditCompanyComponent_form_0_div_70_mat_error_30_Template, 2, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](34, EditCompanyComponent_form_0_div_70_mat_error_34_Template, 2, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var reportItem_r17 = ctx.$implicit;
          var i_r18 = ctx.index;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroupName", i_r18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Reporting Providers - ", i_r18 + 1, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r7.reportingProviderHandleList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", reportItem_r17.get("reportingProvider").errors == null ? null : reportItem_r17.get("reportingProvider").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", reportItem_r17.get("email").errors == null ? null : reportItem_r17.get("email").errors.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", reportItem_r17.get("password").errors == null ? null : reportItem_r17.get("password").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", reportItem_r17.get("apiUrl").errors == null ? null : reportItem_r17.get("apiUrl").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", reportItem_r17.get("apiKey").errors == null ? null : reportItem_r17.get("apiKey").errors.required);
        }
      }

      function EditCompanyComponent_form_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function EditCompanyComponent_form_0_Template_form_submit_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r30);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r29.updateOneCompany($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h3", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Edit Company");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](10, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, EditCompanyComponent_form_0_mat_error_15_Template, 2, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, " Save ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EditCompanyComponent_form_0_Template_button_click_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r30);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r31.back();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " Back ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, EditCompanyComponent_form_0_div_23_Template, 3, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "h3", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Add Stats");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function EditCompanyComponent_form_0_Template_form_submit_31_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r30);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r32.updateOneCompany($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](34, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](38, EditCompanyComponent_form_0_mat_error_38_Template, 2, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, " Save ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EditCompanyComponent_form_0_Template_button_click_44_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r30);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r33.back();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, " Back ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](46, EditCompanyComponent_form_0_div_46_Template, 3, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "h3", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Ad Server Url");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EditCompanyComponent_form_0_Template_button_click_57_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r30);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r34.addAdServerUrl($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](62, EditCompanyComponent_form_0_div_62_Template, 8, 2, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EditCompanyComponent_form_0_Template_button_click_65_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r30);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r35.handleReportingProvider();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](70, EditCompanyComponent_form_0_div_70_Template, 35, 8, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r0.companyFG);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](10, 10, ctx_r0.companyFG.value), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.companyFG.get("name").errors == null ? null : ctx_r0.companyFG.get("name").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.currentUserRole == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r0.companyFG);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](34, 12, ctx_r0.companyFG.value), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.companyFG.get("name").errors == null ? null : ctx_r0.companyFG.get("name").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.currentUserRole == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r0.adServerUrls.controls);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r0.reportingProviders.controls);
        }
      }

      function EditCompanyComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " How did you get here ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Sorry you can't access the page you're looking for. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " There may be a misspelling in the URL entered,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "or the page you are looking for may no longer exist. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var EditCompanyComponent = /*#__PURE__*/function () {
        function EditCompanyComponent(fb, authService, route, companyManagementService, notification, userService, router) {
          _classCallCheck(this, EditCompanyComponent);

          this.fb = fb;
          this.authService = authService;
          this.route = route;
          this.companyManagementService = companyManagementService;
          this.notification = notification;
          this.userService = userService;
          this.router = router;
          this.hidden = false;
          this.reportingProviderList = [{
            value: "apptitude",
            viewValue: "Apptitude"
          }, {
            value: "bing-direct",
            viewValue: "Bing Direct"
          }, {
            value: "hopkins",
            viewValue: "Hopkins"
          }, {
            value: "lyons",
            viewValue: "Lyons"
          }, {
            value: "media-net",
            viewValue: "Media.net"
          }, {
            value: "perion",
            viewValue: "Perion"
          }, {
            value: "rubi",
            viewValue: "Rubi"
          }, {
            value: "verizon-direct",
            viewValue: "Verizon Direct"
          }];
          this.reportingProviderHandleList = [];
          this.currentUser = this.authService.currentUserValue;
          this.currentUserRole = this.currentUser.role;
          this.localStorageCompany = this.getSelectedCompanyFromLocalStorage();
        }

        _createClass(EditCompanyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            //access page part
            if (!this.localStorageCompany) {
              this.hidden = true;
              this.notification.showError("Please select your Company!", "");
            } else {
              this.hidden = false;
            }

            this.reportingProviderHandleList = this.reportingProviderList.sort(function (a, b) {
              return a.viewValue > b.viewValue ? 1 : -1;
            }); //Create update formgroup

            this.companyFG = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              adServerUrls: this.fb.array([]),
              reportingProviders: this.fb.array([])
            }); //Get the current company to edit

            if (this.route.snapshot.params.id) {
              this.companyManagementService.getOneCompany(this.route.snapshot.params.id).subscribe(function (res) {
                _this2.company = res;
                res['adServerUrls'].map(function (item) {
                  _this2.adServerUrls.push(_this2.fb.group(item));
                });
                res['reportingProviders'].map(function (reporting) {
                  _this2.reportingProviders.push(_this2.fb.group(reporting));
                });

                _this2.companyFG.setValue({
                  name: res['name'],
                  adServerUrls: res['adServerUrls'],
                  reportingProviders: res['reportingProviders']
                });
              });
            } else {// this.user = this.authService.currentUserSubject.value as any;
            }
          } //Gets the Selected Company from Local Storage

        }, {
          key: "getSelectedCompanyFromLocalStorage",
          value: function getSelectedCompanyFromLocalStorage() {
            return this.userService.getSelectedCompanyFromLocalStorage();
          } //Update one company
          //Checks to see if edits were made
          //If edits were made updates current company with new updated fields

        }, {
          key: "updateOneCompany",
          value: function updateOneCompany($event) {
            var _this3 = this;

            this.companyFG.markAllAsTouched();

            if (this.companyFG.valid) {
              this.company = Object.assign(Object.assign({}, this.company), this.companyFG.value);
              this.companyManagementService.updateOneCompany(this.company).subscribe(function (x) {
                _this3.notification.showSuccess('Successfully updated company.', "");
              }, function (err) {
                _this3.notification.showError("Error updating company: ".concat(err.statusText), "");
              });
            }
          }
        }, {
          key: "deleteOneCompany",
          value: function deleteOneCompany() {
            var _this4 = this;

            this.companyManagementService.deleteOneCompany(this.company).subscribe(function (x) {
              _this4.notification.showSuccess('Successfully deleted company.', "");

              _this4.router.navigate(['/company-management/companies']).then(function () {
                window.location.reload();
              });
            }, function (err) {
              _this4.notification.showError("Error deleting company: ".concat(err.statusText), "");
            });
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigate(['/company-management/companies']);
          }
        }, {
          key: "newAdServerUrls",
          value: function newAdServerUrls() {
            return this.fb.group({
              adServerUrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "addAdServerUrl",
          value: function addAdServerUrl(event) {
            this.adServerUrls.push(this.newAdServerUrls());
          }
        }, {
          key: "removeAdServerUrl",
          value: function removeAdServerUrl(i) {
            this.adServerUrls.removeAt(i);
          }
        }, {
          key: "newReporingProvider",
          value: function newReporingProvider() {
            return this.fb.group({
              reportingProvider: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              email: [''],
              password: [''],
              apiUrl: [''],
              apiKey: ['']
            });
          }
        }, {
          key: "handleReportingProvider",
          value: function handleReportingProvider() {
            this.reportingProviders.push(this.newReporingProvider());
          }
        }, {
          key: "handleChangeProvider",
          value: function handleChangeProvider(event) {}
        }, {
          key: "removeReportingProvider",
          value: function removeReportingProvider(i) {
            this.reportingProviders.removeAt(i);
          }
        }, {
          key: "adServerUrls",
          get: function get() {
            return this.companyFG.controls['adServerUrls'];
          }
        }, {
          key: "reportingProviders",
          get: function get() {
            return this.companyFG.controls['reportingProviders'];
          }
        }]);

        return EditCompanyComponent;
      }();

      EditCompanyComponent.??fac = function EditCompanyComponent_Factory(t) {
        return new (t || EditCompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_company_management_service__WEBPACK_IMPORTED_MODULE_4__["CompanyManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      EditCompanyComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: EditCompanyComponent,
        selectors: [["app-edit-company"]],
        decls: 2,
        vars: 2,
        consts: [["class", "example-container", 3, "formGroup", "submit", 4, "ngIf"], ["class", "error error-3 d-flex flex-row-fluid bgi-size-cover bgi-position-center", "style", "background-image: url('./assets/media/error/bg3.jpg'); height: 100%;zoom: 1;\n  display: block;\n  min-height: 80vh;\n  font-size: 14px;\n  line-height: 1.4;\n  color: #0e1724;", 4, "ngIf"], [1, "example-container", 3, "formGroup", "submit"], [1, "row"], [1, "col-xl-6"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], [1, "row", "pb-2"], [1, "col-md-12"], ["matInput", "", "formControlName", "name", "placeholder", "Company Name"], [4, "ngIf"], [1, "col-md-6"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "save-button"], ["mat-raised-button", "", "color", "secondary", 1, "back-button", 3, "click"], ["class", "row", 4, "ngIf"], [1, "col-md-3"], ["type", "button", 1, "btn", "btn-sm", "btn-icon", "btn-bg-light", "btn-icon-primary", "btn-hover-primary", 3, "click"], [1, "flaticon-add-circular-button"], ["formArrayName", "adServerUrls"], ["class", "row", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "col-xl-3", "mb-3"], [1, "col-xl-12"], ["formArrayName", "reportingProviders"], ["class", "col-xl-4", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "delete", 3, "click"], [1, "row", 3, "formGroupName"], [1, "col-md-10"], ["matInput", "", "placeholder", "Ad Server Url", "formControlName", "adServerUrl"], [1, "col-md-2"], [1, "btn", "btn-sm", "btn-icon", "btn-bg-light", "btn-icon-danger", "btn-hover-danger", 3, "click"], [1, "flaticon2-line"], [1, "col-xl-4", 3, "formGroupName"], [1, "card-title", "col-12", 2, "justify-content", "space-between", "display", "flex"], ["matNativeControl", "", "formControlName", "reportingProvider", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "email", "placeholder", "Email"], ["matInput", "", "formControlName", "password", "placeholder", "Password", "type", "password", "autocomplete", "off"], ["matInput", "", "formControlName", "apiUrl", "placeholder", "ApiUrl"], ["matInput", "", "formControlName", "apiKey", "placeholder", "ApiKey"], [3, "value"], [1, "error", "error-3", "d-flex", "flex-row-fluid", "bgi-size-cover", "bgi-position-center", 2, "background-image", "url('./assets/media/error/bg3.jpg')", "height", "100%", "zoom", "1", "display", "block", "min-height", "80vh", "font-size", "14px", "line-height", "1.4", "color", "#0e1724"], [1, "px-10", "px-md-30", "py-10", "py-md-0", "d-flex", "flex-column", "justify-content-md-center"], [1, "display-4", "font-weight-boldest", "text-white", "mb-12"], [1, "font-size-h1", "font-weight-boldest", "text-dark-75"], [1, "font-size-h4", "line-height-md"]],
        template: function EditCompanyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, EditCompanyComponent_form_0_Template, 71, 14, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, EditCompanyComponent_div_1_Template, 10, 0, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.hidden);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.hidden);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["JsonPipe"]],
        styles: [".save-button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.back-button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.delete[_ngcontent-%COMP%] {\n  margin: 5px auto;\n  cursor: pointer;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21wYW55LW1hbmFnZW1lbnQvZWRpdC1jb21wYW55L2VkaXQtY29tcGFueS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tcGFueS1tYW5hZ2VtZW50L2VkaXQtY29tcGFueS9lZGl0LWNvbXBhbnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2F2ZS1idXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYmFjay1idXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZGVsZXRlIHtcclxuICBtYXJnaW46IDVweCBhdXRvO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EditCompanyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-edit-company',
            templateUrl: './edit-company.component.html',
            styleUrls: ['./edit-company.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _company_management_service__WEBPACK_IMPORTED_MODULE_4__["CompanyManagementService"]
          }, {
            type: src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]
          }, {
            type: src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/company-management/new-company/new-company.component.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/modules/company-management/new-company/new-company.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: NewCompanyComponent */

    /***/
    function srcAppModulesCompanyManagementNewCompanyNewCompanyComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewCompanyComponent", function () {
        return NewCompanyComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _company_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../company-management.service */
      "./src/app/modules/company-management/company-management.service.ts");
      /* harmony import */


      var src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/service/notification.service */
      "./src/app/shared/service/notification.service.ts");
      /* harmony import */


      var src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/service/users.service */
      "./src/app/shared/service/users.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

      function NewCompanyComponent_form_0_mat_error_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Company Name is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NewCompanyComponent_form_0_div_38_mat_error_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " AdServerURL is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NewCompanyComponent_form_0_div_38_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, NewCompanyComponent_form_0_div_38_mat_error_4_Template, 2, 0, "mat-error", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NewCompanyComponent_form_0_div_38_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var i_r6 = ctx.index;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r8.removeAdServerUrl(i_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "i", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var adUrlItem_r5 = ctx.$implicit;
          var i_r6 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroupName", i_r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", adUrlItem_r5.get("adServerUrl").errors == null ? null : adUrlItem_r5.get("adServerUrl").errors.required);
        }
      }

      function NewCompanyComponent_form_0_div_46_mat_option_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var reportingProvider_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", reportingProvider_r18.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", reportingProvider_r18.viewValue, " ");
        }
      }

      function NewCompanyComponent_form_0_div_46_mat_error_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Reporting Provider is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NewCompanyComponent_form_0_div_46_mat_error_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Email is not valid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NewCompanyComponent_form_0_div_46_mat_error_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Password is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NewCompanyComponent_form_0_div_46_mat_error_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "ApiUrl Name is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NewCompanyComponent_form_0_div_46_mat_error_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "ApiKey Name is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NewCompanyComponent_form_0_div_46_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h3", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NewCompanyComponent_form_0_div_46_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r20);

            var i_r11 = ctx.index;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r19.removeReportingProvider(i_r11);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "i", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Reporting Providers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-select", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("selectionChange", function NewCompanyComponent_form_0_div_46_Template_mat_select_selectionChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r20);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r21.handleChangeProvider($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, NewCompanyComponent_form_0_div_46_mat_option_15_Template, 2, 2, "mat-option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, NewCompanyComponent_form_0_div_46_mat_error_16_Template, 2, 0, "mat-error", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, NewCompanyComponent_form_0_div_46_mat_error_21_Template, 2, 0, "mat-error", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, NewCompanyComponent_form_0_div_46_mat_error_25_Template, 2, 0, "mat-error", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, NewCompanyComponent_form_0_div_46_mat_error_30_Template, 2, 0, "mat-error", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](34, NewCompanyComponent_form_0_div_46_mat_error_34_Template, 2, 0, "mat-error", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var reportItem_r10 = ctx.$implicit;
          var i_r11 = ctx.index;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroupName", i_r11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Reporting Providers - ", i_r11 + 1, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r4.reportingProviderHandleList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", reportItem_r10.get("reportingProvider").errors == null ? null : reportItem_r10.get("reportingProvider").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", reportItem_r10.get("email").errors == null ? null : reportItem_r10.get("email").errors.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", reportItem_r10.get("password").errors == null ? null : reportItem_r10.get("password").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", reportItem_r10.get("apiUrl").errors == null ? null : reportItem_r10.get("apiUrl").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", reportItem_r10.get("apiKey").errors == null ? null : reportItem_r10.get("apiKey").errors.required);
        }
      }

      function NewCompanyComponent_form_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function NewCompanyComponent_form_0_Template_form_submit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r22.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h3", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Create New Company");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](12, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, NewCompanyComponent_form_0_mat_error_17_Template, 2, 0, "mat-error", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "h3", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Ad Server Url");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NewCompanyComponent_form_0_Template_button_click_33_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r23);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r24.addAdServerUrl($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](38, NewCompanyComponent_form_0_div_38_Template, 8, 2, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NewCompanyComponent_form_0_Template_button_click_41_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r23);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r25.handleReportingProvider();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](46, NewCompanyComponent_form_0_div_46_Template, 35, 8, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r0.companyFG);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](12, 5, ctx_r0.companyFG.value), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.companyFG.get("name").errors == null ? null : ctx_r0.companyFG.get("name").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r0.adServerUrls.controls);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r0.reportingProviders.controls);
        }
      }

      function NewCompanyComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " How did you get here ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Sorry you can't access the page you're looking for. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " There may be a misspelling in the URL entered,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "or the page you are looking for may no longer exist. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var NewCompanyComponent = /*#__PURE__*/function () {
        function NewCompanyComponent(companyManagementService, notification, fb, userService) {
          _classCallCheck(this, NewCompanyComponent);

          this.companyManagementService = companyManagementService;
          this.notification = notification;
          this.fb = fb;
          this.userService = userService;
          this.hidden = false;
          this.intialServerUrl = {
            adServerUrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          };
          this.intialReportProvider = {
            reportingProvider: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [''],
            password: [''],
            apiUrl: [''],
            apiKey: ['']
          };
          this.reportingProviderList = [{
            value: "apptitude",
            viewValue: "Apptitude"
          }, {
            value: "bing-direct",
            viewValue: "Bing Direct"
          }, {
            value: "hopkins",
            viewValue: "Hopkins"
          }, {
            value: "lyons",
            viewValue: "Lyons"
          }, {
            value: "media-net",
            viewValue: "Media.net"
          }, {
            value: "perion",
            viewValue: "Perion"
          }, {
            value: "rubi",
            viewValue: "Rubi"
          }, {
            value: "verizon-direct",
            viewValue: "Verizon Direct"
          }];
          this.reportingProviderHandleList = [];
          this.localStorageCompany = this.getSelectedCompanyFromLocalStorage();
        }

        _createClass(NewCompanyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            //access page part
            if (!this.localStorageCompany) {
              this.hidden = true;
              this.notification.showError("Please select your Company!", "");
            } else {
              this.hidden = false;
            }

            this.companyFG = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              adServerUrls: this.fb.array([]),
              reportingProviders: this.fb.array([])
            });
            this.adServerUrls.push(this.fb.group(this.intialServerUrl));
            this.reportingProviders.push(this.fb.group(this.intialReportProvider));
            this.reportingProviderHandleList = this.reportingProviderList.sort(function (a, b) {
              return a.viewValue > b.viewValue ? 1 : -1;
            });
          }
        }, {
          key: "save",
          value: function save() {
            var _this5 = this;

            this.companyFG.markAllAsTouched();

            if (this.companyFG.valid) {
              this.companyManagementService.addCompany(this.companyFG.value).subscribe(function (x) {
                _this5.notification.showSuccess('Successfully added a new company.', "");

                _this5.companyFG.reset();

                _this5.formGroupDirective.resetForm();
              }, function (err) {
                _this5.notification.showError(err.error, "");
              });
            }
          }
        }, {
          key: "newAdServerUrls",
          value: function newAdServerUrls() {
            return this.fb.group({
              adServerUrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "addAdServerUrl",
          value: function addAdServerUrl(event) {
            this.adServerUrls.push(this.newAdServerUrls());
          }
        }, {
          key: "removeAdServerUrl",
          value: function removeAdServerUrl(i) {
            this.adServerUrls.removeAt(i);
          }
        }, {
          key: "removeReportingProvider",
          value: function removeReportingProvider(i) {
            this.reportingProviders.removeAt(i);
          }
        }, {
          key: "newReporingProvider",
          value: function newReporingProvider() {
            return this.fb.group({
              reportingProvider: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              email: [''],
              password: [''],
              apiUrl: [''],
              apiKey: ['']
            });
          }
        }, {
          key: "handleReportingProvider",
          value: function handleReportingProvider() {
            this.reportingProviders.push(this.newReporingProvider());
          }
        }, {
          key: "handleChangeProvider",
          value: function handleChangeProvider(event) {} //Gets the Selected Company from Local Storage

        }, {
          key: "getSelectedCompanyFromLocalStorage",
          value: function getSelectedCompanyFromLocalStorage() {
            return this.userService.getSelectedCompanyFromLocalStorage();
          }
        }, {
          key: "reportingProviders",
          get: function get() {
            return this.companyFG.controls['reportingProviders'];
          }
        }, {
          key: "adServerUrls",
          get: function get() {
            return this.companyFG.controls['adServerUrls'];
          }
        }]);

        return NewCompanyComponent;
      }();

      NewCompanyComponent.??fac = function NewCompanyComponent_Factory(t) {
        return new (t || NewCompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_company_management_service__WEBPACK_IMPORTED_MODULE_2__["CompanyManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]));
      };

      NewCompanyComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: NewCompanyComponent,
        selectors: [["app-new-company"]],
        viewQuery: function NewCompanyComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.formGroupDirective = _t.first);
          }
        },
        decls: 2,
        vars: 2,
        consts: [["class", "example-container", 3, "formGroup", "submit", 4, "ngIf"], ["class", "error error-3 d-flex flex-row-fluid bgi-size-cover bgi-position-center", "style", "background-image: url('./assets/media/error/bg3.jpg'); height: 100%;zoom: 1;\n  display: block;\n  min-height: 80vh;\n  font-size: 14px;\n  line-height: 1.4;\n  color: #0e1724;", 4, "ngIf"], [1, "example-container", 3, "formGroup", "submit"], [1, "row"], [1, "col-xl-6"], [1, "col-xl-12"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], [1, "row", "pb-2", "pt-2"], [1, "col-md-12"], ["matInput", "", "formControlName", "name", "placeholder", "Company Name"], [4, "ngIf"], [1, "row", "pt-2"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "save-button"], [1, "row", "pb-2"], [1, "col-md-3"], ["type", "button", 1, "btn", "btn-sm", "btn-icon", "btn-bg-light", "btn-icon-primary", "btn-hover-primary", 3, "click"], [1, "flaticon-add-circular-button"], ["formArrayName", "adServerUrls"], ["class", "row", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "col-xl-3", "mb-3"], ["formArrayName", "reportingProviders"], ["class", "col-xl-4", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "row", 3, "formGroupName"], [1, "col-md-10"], ["matInput", "", "placeholder", "Ad Server Url", "formControlName", "adServerUrl"], [1, "col-md-2"], [1, "btn", "btn-sm", "btn-icon", "btn-bg-light", "btn-icon-danger", "btn-hover-danger", 3, "click"], [1, "flaticon2-line"], [1, "col-xl-4", 3, "formGroupName"], [1, "card-title", "col-12", 2, "justify-content", "space-between", "display", "flex"], ["matNativeControl", "", "formControlName", "reportingProvider", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "email", "placeholder", "Email"], ["matInput", "", "formControlName", "password", "placeholder", "Password", "type", "password", "autocomplete", "off"], ["matInput", "", "formControlName", "apiUrl", "placeholder", "ApiUrl"], ["matInput", "", "formControlName", "apiKey", "placeholder", "ApiKey"], [3, "value"], [1, "error", "error-3", "d-flex", "flex-row-fluid", "bgi-size-cover", "bgi-position-center", 2, "background-image", "url('./assets/media/error/bg3.jpg')", "height", "100%", "zoom", "1", "display", "block", "min-height", "80vh", "font-size", "14px", "line-height", "1.4", "color", "#0e1724"], [1, "px-10", "px-md-30", "py-10", "py-md-0", "d-flex", "flex-column", "justify-content-md-center"], [1, "display-4", "font-weight-boldest", "text-white", "mb-12"], [1, "font-size-h1", "font-weight-boldest", "text-dark-75"], [1, "font-size-h4", "line-height-md"]],
        template: function NewCompanyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, NewCompanyComponent_form_0_Template, 47, 7, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, NewCompanyComponent_div_1_Template, 10, 0, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.hidden);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.hidden);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["JsonPipe"]],
        styles: [".save-button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21wYW55LW1hbmFnZW1lbnQvbmV3LWNvbXBhbnkvbmV3LWNvbXBhbnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvbXBhbnktbWFuYWdlbWVudC9uZXctY29tcGFueS9uZXctY29tcGFueS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zYXZlLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NewCompanyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-new-company',
            templateUrl: './new-company.component.html',
            styleUrls: ['./new-company.component.scss']
          }]
        }], function () {
          return [{
            type: _company_management_service__WEBPACK_IMPORTED_MODULE_2__["CompanyManagementService"]
          }, {
            type: src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]
          }];
        }, {
          formGroupDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]]
          }]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-company-management-company-management-module-es5.js.map