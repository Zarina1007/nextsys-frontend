(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["builder-builder-module"], {
    /***/
    "./src/app/pages/builder/builder.component.ts":
    /*!****************************************************!*\
      !*** ./src/app/pages/builder/builder.component.ts ***!
      \****************************************************/

    /*! exports provided: BuilderComponent */

    /***/
    function srcAppPagesBuilderBuilderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BuilderComponent", function () {
        return BuilderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _assets_js_layout_extended_examples__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../assets/js/layout/extended/examples */
      "./src/assets/js/layout/extended/examples.js");
      /* harmony import */


      var _metronic_core___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../_metronic/core/ */
      "./src/app/_metronic/core/index.ts");
      /* harmony import */


      var _metronic_partials_content_general_notice_notice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../_metronic/partials/content/general/notice/notice.component */
      "./src/app/_metronic/partials/content/general/notice/notice.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-highlightjs */
      "./node_modules/ngx-highlightjs/__ivy_ngcc__/fesm2015/ngx-highlightjs.js");

      var _c0 = ["form"];

      var BuilderComponent = /*#__PURE__*/function () {
        function BuilderComponent(layout, el) {
          _classCallCheck(this, BuilderComponent);

          this.layout = layout;
          this.el = el;
          this.activeTabId = 1;
        }

        _createClass(BuilderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.model = this.layout.getConfig();
          }
        }, {
          key: "setActiveTab",
          value: function setActiveTab(tabId) {
            this.activeTabId = tabId;
          }
        }, {
          key: "getActiveTabCSSClass",
          value: function getActiveTabCSSClass(tabId) {
            if (tabId !== this.activeTabId) {
              return '';
            }

            return 'active';
          }
        }, {
          key: "resetPreview",
          value: function resetPreview() {
            this.layout.refreshConfigToDefault();
          }
        }, {
          key: "submitPreview",
          value: function submitPreview() {
            this.layout.setConfig(this.model);
            location.reload();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            // init code preview examples
            // see /src/assets/js/layout/extended/examples.js
            var elements = this.el.nativeElement.querySelectorAll('.example');

            _assets_js_layout_extended_examples__WEBPACK_IMPORTED_MODULE_1__["default"].init(elements);
          }
        }]);

        return BuilderComponent;
      }();

      BuilderComponent.??fac = function BuilderComponent_Factory(t) {
        return new (t || BuilderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_metronic_core___WEBPACK_IMPORTED_MODULE_2__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      BuilderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: BuilderComponent,
        selectors: [["app-builder"]],
        viewQuery: function BuilderComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????staticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.form = _t.first);
          }
        },
        decls: 258,
        vars: 32,
        consts: [[3, "svg"], [1, "card", "card-custom", "gutter-b"], [1, "card-header", "card-header-tabs-line"], ["role", "tablist", 1, "nav", "nav-dark", "nav-bold", "nav-tabs", "nav-tabs-line"], [1, "nav-item"], ["role", "tab", 1, "nav-link", "cursor-pointer", 3, "ngClass", "click"], ["novalidate", "", 1, "form", 3, "ngSubmit"], ["form", "ngForm"], [1, "card-body"], [1, "tab-content", "pt-3"], [1, "tab-pane", 3, "ngClass"], [1, "form-group", "row"], [1, "col-lg-3", "col-form-label", "text-lg-right"], [1, "col-lg-9", "col-xl-4"], [1, "switch", "switch-icon"], ["type", "checkbox", "name", "builder[header][self][fixed][desktop]", "value", "true", 3, "ngModel", "ngModelChange"], [1, "form-text", "text-muted"], ["type", "checkbox", "name", "builder[header][self][fixed][mobile]", "value", "true", 3, "ngModel", "ngModelChange"], ["name", "builder[header][self][width]", 1, "form-control", "form-control-solid", 3, "ngModel", "ngModelChange"], ["value", "fluid"], ["value", "fixed"], ["type", "checkbox", "name", "builder[header][menu][self][display]", "value", "true", 3, "ngModel", "ngModelChange"], ["name", "builder[header][menu][self][layout]", 1, "form-control", "form-control-solid", 3, "ngModel", "ngModelChange"], ["value", "default"], ["value", "tab"], ["type", "checkbox", "name", "builder[header][menu][self][rootArrow]", "value", "true", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "name", "builder[subheader][display]", "value", "true", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "name", "builder[subheader][fixed]", "value", "true", 3, "ngModel", "ngModelChange"], ["name", "builder[subheader][width]", 1, "form-control", "form-control-solid", 3, "ngModel", "ngModelChange"], ["name", "builder[subheader][style]", 1, "form-control", "form-control-solid", 3, "ngModel", "ngModelChange"], ["value", "transparent"], ["value", "solid"], ["name", "builder[layout][subheader][layoutVersion]", 1, "form-control", "form-control-solid", 3, "ngModel", "ngModelChange"], ["value", "v1"], ["value", "v2"], ["value", "v3"], ["value", "v4"], ["value", "v5"], ["value", "v6"], ["name", "builder[content][width]", 1, "form-control", "form-control-solid", 3, "ngModel", "ngModelChange"], [1, "col-lg-9", "col-xl-6"], ["type", "checkbox", "name", "builder[aside][self][display]", "value", "true", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "name", "builder[aside][self][fixed]", "value", "true", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "name", "builde[aside][self][minimize][toggle]", "value", "true", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "name", "builder[aside][self][minimize][default]", "value", "true", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "name", "builder[footer][fixed]", "value", "true", 3, "ngModel", "ngModelChange"], ["name", "builder[footer][width]", 1, "form-control", "form-control-solid", 3, "ngModel", "ngModelChange"], [1, "row"], [1, "col-lg-4"], [1, "col-lg-8"], ["type", "submit", "name", "builder_submit", 1, "btn", "btn-primary"], ["type", "submit", "name", "builder_reset", 1, "btn", "btn-secondary", 3, "click"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "example", "mb-10"], [1, "example-code"], ["data-placement", "left", "ngbTooltip", "Copy code", 1, "example-copy"], [1, "example-highlight"], [3, "highlight"]],
        template: function BuilderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-notice", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " The layout builder is to assist your set and configure your preferred project layout specifications and preview it in real time. The configured layout options will be saved until you change or reset them. To use the layout builder, choose the layout options and click the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Preview");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " button to preview the changes. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BuilderComponent_Template_a_click_10_listener() {
              return ctx.setActiveTab(1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " Header ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BuilderComponent_Template_a_click_13_listener() {
              return ctx.setActiveTab(2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " Subheader ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BuilderComponent_Template_a_click_16_listener() {
              return ctx.setActiveTab(3);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " Content ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BuilderComponent_Template_a_click_19_listener() {
              return ctx.setActiveTab(4);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " Aside ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BuilderComponent_Template_a_click_22_listener() {
              return ctx.setActiveTab(5);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " Footer ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "form", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function BuilderComponent_Template_form_ngSubmit_24_listener() {
              return ctx.submitPreview();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Desktop Fixed Header:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BuilderComponent_Template_input_ngModelChange_35_listener($event) {
              return ctx.model.header.self.fixed.desktop = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, " Enable fixed header for desktop mode ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Mobile Fixed Header:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BuilderComponent_Template_input_ngModelChange_45_listener($event) {
              return ctx.model.header.self.fixed.mobile = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, " Enable fixed header for mobile mode ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Header Width:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "select", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BuilderComponent_Template_select_ngModelChange_53_listener($event) {
              return ctx.model.header.self.width = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Fluid");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Fixed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Select header width type.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Display Header Menu:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BuilderComponent_Template_input_ngModelChange_66_listener($event) {
              return ctx.model.header.menu.self.display = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](67, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Display header menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "Header Menu Layout:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "select", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BuilderComponent_Template_select_ngModelChange_74_listener($event) {
              return ctx.model.header.menu.self.layout = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "option", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Default");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "Tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Select header width type.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "Header Menu Arrows:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BuilderComponent_Template_input_ngModelChange_87_listener($event) {
              return ctx.model.header.menu.self.rootArrow = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](88, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, " Enable header menu root link arrows ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "Display Subheader:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BuilderComponent_Template_input_ngModelChange_98_listener($event) {
              return ctx.model.subheader.display = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](99, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "Display subheader");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "Fixed Subheader:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BuilderComponent_Template_input_ngModelChange_108_listener($event) {
              return ctx.model.subheader.fixed = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](109, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, " Enable fixed(sticky) subheader. Requires ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "Solid");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, " subheader style. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "Width:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "select", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BuilderComponent_Template_select_ngModelChange_119_listener($event) {
              return ctx.model.subheader.width = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "Fluid");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "Fixed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "Select layout width type.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "Subheader Style:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "select", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BuilderComponent_Template_select_ngModelChange_130_listener($event) {
              return ctx.model.subheader.style = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "option", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "Transparent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "option", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "Solid");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "Select subheader style");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "Subheader Layout:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "select", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BuilderComponent_Template_select_ngModelChange_141_listener($event) {
              return ctx.model.subheader.layoutVersion = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "option", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "Subheader 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "Subheader 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "option", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "Subheader 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "option", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "Subheader 4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "option", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "Subheader 5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "option", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "Subheader 6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "Select subheader layout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "Width:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "select", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BuilderComponent_Template_select_ngModelChange_161_listener($event) {
              return ctx.model.content.width = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "Fluid");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "Fixed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "Select layout width type.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, "Display:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "input", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BuilderComponent_Template_input_ngModelChange_175_listener($event) {
              return ctx.model.aside.self.display = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](176, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, "Display aside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, "Fixed:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "input", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BuilderComponent_Template_input_ngModelChange_185_listener($event) {
              return ctx.model.aside.self.fixed = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](186, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188, "Set fixed aside layout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "Minimize:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "input", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BuilderComponent_Template_input_ngModelChange_195_listener($event) {
              return ctx.model.aside.self.minimize.toggle = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](196, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](198, "Allow aside minimizing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, "Default Minimize:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "input", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BuilderComponent_Template_input_ngModelChange_205_listener($event) {
              return ctx.model.aside.self.minimize["default"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](206, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, " Set aside minimized by default ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](212, "Fixed Desktop Footer:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "input", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BuilderComponent_Template_input_ngModelChange_216_listener($event) {
              return ctx.model.footer.fixed = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](217, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](219, "Set fixed desktop footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](222, "Width:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "select", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BuilderComponent_Template_select_ngModelChange_224_listener($event) {
              return ctx.model.footer.width = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](226, "Fluid");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](228, "Fixed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](230, "Select layout width type.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](233, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "button", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](236, " Preview ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](237, " \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "button", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BuilderComponent_Template_button_click_238_listener() {
              return ctx.resetPreview();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](239, " Reset ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "h3", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](244, "Generated Config");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](248, " Use for layout config in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](250, "/src/app/core/_config/layout.config.ts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](253, "span", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](255, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](256, "code", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](257, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("svg", "./assets/media/svg/icons/Tools/Tools.svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.getActiveTabCSSClass(1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.getActiveTabCSSClass(2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.getActiveTabCSSClass(3));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.getActiveTabCSSClass(4));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.getActiveTabCSSClass(5));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.getActiveTabCSSClass(1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.header.self.fixed.desktop);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.header.self.fixed.mobile);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.header.self.width);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.header.menu.self.display);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.header.menu.self.layout);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.header.menu.self.rootArrow);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.getActiveTabCSSClass(2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.subheader.display);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.subheader.fixed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.subheader.width);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.subheader.style);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.subheader.layoutVersion);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.getActiveTabCSSClass(3));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.content.width);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.getActiveTabCSSClass(4));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.aside.self.display);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.aside.self.fixed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.aside.self.minimize.toggle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.aside.self.minimize["default"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.getActiveTabCSSClass(5));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.footer.fixed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.footer.width);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("highlight", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](257, 30, ctx.model));
          }
        },
        directives: [_metronic_partials_content_general_notice_notice_component__WEBPACK_IMPORTED_MODULE_3__["NoticeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_x"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTooltip"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__["Highlight"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]],
        styles: ["[_nghost-%COMP%]   .hljs[_ngcontent-%COMP%] {\n  background: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYnVpbGRlci9idWlsZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0NBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2J1aWxkZXIvYnVpbGRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAuaGxqcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BuilderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-builder',
            templateUrl: './builder.component.html',
            styleUrls: ['./builder.component.scss']
          }]
        }], function () {
          return [{
            type: _metronic_core___WEBPACK_IMPORTED_MODULE_2__["LayoutService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['form', {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/pages/builder/builder.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/builder/builder.module.ts ***!
      \*************************************************/

    /*! exports provided: BuilderModule */

    /***/
    function srcAppPagesBuilderBuilderModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BuilderModule", function () {
        return BuilderModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _metronic_partials_content_general_general_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../_metronic/partials/content/general/general.module */
      "./src/app/_metronic/partials/content/general/general.module.ts");
      /* harmony import */


      var _builder_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./builder.component */
      "./src/app/pages/builder/builder.component.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-highlightjs */
      "./node_modules/ngx-highlightjs/__ivy_ngcc__/fesm2015/ngx-highlightjs.js");

      var BuilderModule = function BuilderModule() {
        _classCallCheck(this, BuilderModule);
      };

      BuilderModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: BuilderModule
      });
      BuilderModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function BuilderModule_Factory(t) {
          return new (t || BuilderModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _metronic_partials_content_general_general_module__WEBPACK_IMPORTED_MODULE_3__["GeneralModule"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__["HighlightModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbNavModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTooltipModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _builder_component__WEBPACK_IMPORTED_MODULE_4__["BuilderComponent"]
        }])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](BuilderModule, {
          declarations: [_builder_component__WEBPACK_IMPORTED_MODULE_4__["BuilderComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _metronic_partials_content_general_general_module__WEBPACK_IMPORTED_MODULE_3__["GeneralModule"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__["HighlightModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbNavModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTooltipModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BuilderModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_builder_component__WEBPACK_IMPORTED_MODULE_4__["BuilderComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _metronic_partials_content_general_general_module__WEBPACK_IMPORTED_MODULE_3__["GeneralModule"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__["HighlightModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbNavModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTooltipModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
              path: '',
              component: _builder_component__WEBPACK_IMPORTED_MODULE_4__["BuilderComponent"]
            }])]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=builder-builder-module-es5.js.map