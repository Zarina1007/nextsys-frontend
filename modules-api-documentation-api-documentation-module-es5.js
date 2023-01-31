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

      var routes = [{
        path: "",
        component: _api_documentation_component__WEBPACK_IMPORTED_MODULE_2__["ApiDocumentationComponent"]
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
        decls: 42,
        vars: 0,
        consts: [[1, "contents__box", "contents__box--right"], [1, "section"], [1, "section-head"], [1, "section-content"], [1, "hljs", "bash"], [1, "hljs-built_in"], [1, "hljs-built"], ["href", "http://api.nextsys.io/api/publisher/reporting/api?apiKey=o23MVG3zMrh3JfnMdTCJvr&tag=194689521&startDate=11-28-2022&endDate=11-30-2022&reportType=csv", "target", "_blank"]],
        template: function ApiDocumentationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " publisher API Key");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "For Example Request API");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "code", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "http://api.nextsys.io/api/publisher/reporting/api?apiKey=o23MVG3zMrh3JfnMdTCJvr&tag=194689521&startDate=11-28-2022&endDate=11-30-2022&reportType=csv");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["@media screen and (max-width: 1280px) {\n  .contents__box[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.section[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.section[_ngcontent-%COMP%]   .section-head[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 32px;\n  margin-bottom: 40px;\n  padding: 0;\n  color: #333;\n}\n.section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%] {\n  color: #6f728d;\n  margin-bottom: 20px;\n}\n.contents__box[_ngcontent-%COMP%] {\n  padding: 40px;\n  width: 900px;\n  border-radius: 5px;\n  background-color: #ffffff;\n  -o-box-shadow: 0 0 15px 0 rgba(220, 220, 220, 0.4);\n  box-shadow: 0 0 15px 0 rgba(220, 220, 220, 0.4);\n}\n.hljs[_ngcontent-%COMP%] {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #232323;\n  color: #e6e1dc;\n}\n.hljs[_ngcontent-%COMP%] {\n  padding: 10px 20px !important;\n  border-radius: 3px;\n}\npre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%] {\n  max-height: 500px;\n}\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-size: inherit;\n  color: inherit;\n  word-break: normal;\n}\n.hljs-built_in[_ngcontent-%COMP%] {\n  color: #ffffff;\n  display: block;\n}\n.hljs-built[_ngcontent-%COMP%] {\n  color: #6d9cbe;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hcGktZG9jdW1lbnRhdGlvbi9hcGktZG9jdW1lbnRhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksV0FBQTtFQUNOO0FBQ0Y7QUFFQTtFQUNJLFdBQUE7QUFBSjtBQUdBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUFKO0FBR0E7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUdBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0RBQUE7RUFDQSwrQ0FBQTtBQUFKO0FBR0E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQUo7QUFHQTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUdBO0VBQ0ksaUJBQUE7QUFBSjtBQUdBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUdBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUFBSjtBQUdBO0VBQ0ksY0FBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hcGktZG9jdW1lbnRhdGlvbi9hcGktZG9jdW1lbnRhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gICAgLmNvbnRlbnRzX19ib3gge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2VjdGlvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNlY3Rpb24gLnNlY3Rpb24taGVhZCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCB7XHJcbiAgICBjb2xvcjogIzZmNzI4ZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50c19fYm94IHtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICB3aWR0aDogOTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgLW8tYm94LXNoYWRvdzogMCAwIDE1cHggMCByZ2JhKDIyMCwyMjAsMjIwLDAuNCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTVweCAwIHJnYigyMjAgMjIwIDIyMCAvIDQwJSk7XHJcbn1cclxuXHJcbi5obGpzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgYmFja2dyb3VuZDogIzIzMjMyMztcclxuICAgIGNvbG9yOiAjZTZlMWRjO1xyXG59XHJcblxyXG4uaGxqcyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxucHJlPmNvZGUge1xyXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbn1cclxuXHJcbnByZSBjb2RlIHtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgd29yZC1icmVhazogbm9ybWFsO1xyXG59XHJcblxyXG4uaGxqcy1idWlsdF9pbiB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uaGxqcy1idWlsdCB7XHJcbiAgICBjb2xvcjogIzZkOWNiZTtcclxufSJdfQ== */"]
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
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _api_documentation_routing_module__WEBPACK_IMPORTED_MODULE_2__["ApiDocumentationRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ApiDocumentationModule, {
          declarations: [_api_documentation_component__WEBPACK_IMPORTED_MODULE_3__["ApiDocumentationComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _api_documentation_routing_module__WEBPACK_IMPORTED_MODULE_2__["ApiDocumentationRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiDocumentationModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_api_documentation_component__WEBPACK_IMPORTED_MODULE_3__["ApiDocumentationComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _api_documentation_routing_module__WEBPACK_IMPORTED_MODULE_2__["ApiDocumentationRoutingModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-api-documentation-api-documentation-module-es5.js.map