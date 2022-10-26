(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/_metronic/partials/layout/splash-screen/splash-screen.component.ts":
    /*!************************************************************************************!*\
      !*** ./src/app/_metronic/partials/layout/splash-screen/splash-screen.component.ts ***!
      \************************************************************************************/

    /*! exports provided: SplashScreenComponent */

    /***/
    function srcApp_metronicPartialsLayoutSplashScreenSplashScreenComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SplashScreenComponent", function () {
        return SplashScreenComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _splash_screen_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./splash-screen.service */
      "./src/app/_metronic/partials/layout/splash-screen/splash-screen.service.ts");

      var _c0 = ["splashScreen"];

      var SplashScreenComponent = /*#__PURE__*/function () {
        function SplashScreenComponent(el, splashScreenService) {
          _classCallCheck(this, SplashScreenComponent);

          this.el = el;
          this.splashScreenService = splashScreenService;
        }

        _createClass(SplashScreenComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.splashScreenService.init(this.splashScreen);
          }
        }]);

        return SplashScreenComponent;
      }();

      SplashScreenComponent.ɵfac = function SplashScreenComponent_Factory(t) {
        return new (t || SplashScreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_splash_screen_service__WEBPACK_IMPORTED_MODULE_1__["SplashScreenService"]));
      };

      SplashScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SplashScreenComponent,
        selectors: [["app-splash-screen"]],
        viewQuery: function SplashScreenComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.splashScreen = _t.first);
          }
        },
        decls: 5,
        vars: 0,
        consts: [["id", "splash-screen"], ["splashScreen", ""], ["src", "./assets/media/logos/logo-dark.png", "alt", "Logo"], ["viewBox", "0 0 50 50", 1, "splash-spinner"], ["cx", "25", "cy", "25", "r", "20", "fill", "none", "stroke-width", "5", 1, "path"]],
        template: function SplashScreenComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "circle", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["#splash-screen[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background-color: #f2f3f8;\n}\n\n#splash-screen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: calc(100vw - 100%);\n  margin-bottom: 30px;\n}\n\n#splash-screen.hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.splash-spinner[_ngcontent-%COMP%] {\n  -webkit-animation: rotate 2s linear infinite;\n          animation: rotate 2s linear infinite;\n  margin-left: calc(100vw - 100%);\n  width: 50px;\n  height: 50px;\n}\n\n.splash-spinner[_ngcontent-%COMP%]   .path[_ngcontent-%COMP%] {\n  stroke: #5d78ff;\n  stroke-linecap: round;\n  -webkit-animation: dash 1.5s ease-in-out infinite;\n          animation: dash 1.5s ease-in-out infinite;\n}\n\n@-webkit-keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes dash {\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -35;\n  }\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124;\n  }\n}\n\n@keyframes dash {\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -35;\n  }\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX21ldHJvbmljL3BhcnRpYWxzL2xheW91dC9zcGxhc2gtc2NyZWVuL3NwbGFzaC1zY3JlZW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsK0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw0Q0FBQTtVQUFBLG9DQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaURBQUE7VUFBQSx5Q0FBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSx5QkFBQTtFQUNGO0FBQ0Y7O0FBSkE7RUFDRTtJQUNFLHlCQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSxvQkFBQTtFQUFGO0VBR0E7SUFDRSx5QkFBQTtJQUNBLHNCQUFBO0VBREY7RUFJQTtJQUNFLHlCQUFBO0lBQ0EsdUJBQUE7RUFGRjtBQUNGOztBQVpBO0VBQ0U7SUFDRSx3QkFBQTtJQUNBLG9CQUFBO0VBQUY7RUFHQTtJQUNFLHlCQUFBO0lBQ0Esc0JBQUE7RUFERjtFQUlBO0lBQ0UseUJBQUE7SUFDQSx1QkFBQTtFQUZGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9fbWV0cm9uaWMvcGFydGlhbHMvbGF5b3V0L3NwbGFzaC1zY3JlZW4vc3BsYXNoLXNjcmVlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzcGxhc2gtc2NyZWVuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjNmODtcclxufVxyXG5cclxuI3NwbGFzaC1zY3JlZW4gaW1nIHtcclxuICBtYXJnaW4tbGVmdDogY2FsYygxMDB2dyAtIDEwMCUpO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbiNzcGxhc2gtc2NyZWVuLmhpZGRlbiB7XHJcbiAgb3BhY2l0eTogMDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zcGxhc2gtc3Bpbm5lciB7XHJcbiAgYW5pbWF0aW9uOiByb3RhdGUgMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIG1hcmdpbi1sZWZ0OiBjYWxjKDEwMHZ3IC0gMTAwJSk7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uc3BsYXNoLXNwaW5uZXIgLnBhdGgge1xyXG4gIHN0cm9rZTogIzVkNzhmZjtcclxuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XHJcbiAgYW5pbWF0aW9uOiBkYXNoIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRlIHtcclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGRhc2gge1xyXG4gIDAlIHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEsIDE1MDtcclxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDkwLCAxNTA7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTM1O1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiA5MCwgMTUwO1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMjQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplashScreenComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-splash-screen',
            templateUrl: './splash-screen.component.html',
            styleUrls: ['./splash-screen.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _splash_screen_service__WEBPACK_IMPORTED_MODULE_1__["SplashScreenService"]
          }];
        }, {
          splashScreen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['splashScreen', {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/_metronic/partials/layout/splash-screen/splash-screen.module.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/_metronic/partials/layout/splash-screen/splash-screen.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: SplashScreenModule */

    /***/
    function srcApp_metronicPartialsLayoutSplashScreenSplashScreenModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SplashScreenModule", function () {
        return SplashScreenModule;
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


      var _splash_screen_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./splash-screen.component */
      "./src/app/_metronic/partials/layout/splash-screen/splash-screen.component.ts");

      var SplashScreenModule = function SplashScreenModule() {
        _classCallCheck(this, SplashScreenModule);
      };

      SplashScreenModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SplashScreenModule
      });
      SplashScreenModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SplashScreenModule_Factory(t) {
          return new (t || SplashScreenModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SplashScreenModule, {
          declarations: [_splash_screen_component__WEBPACK_IMPORTED_MODULE_2__["SplashScreenComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_splash_screen_component__WEBPACK_IMPORTED_MODULE_2__["SplashScreenComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplashScreenModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_splash_screen_component__WEBPACK_IMPORTED_MODULE_2__["SplashScreenComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [_splash_screen_component__WEBPACK_IMPORTED_MODULE_2__["SplashScreenComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/_metronic/partials/layout/splash-screen/splash-screen.service.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/_metronic/partials/layout/splash-screen/splash-screen.service.ts ***!
      \**********************************************************************************/

    /*! exports provided: SplashScreenService */

    /***/
    function srcApp_metronicPartialsLayoutSplashScreenSplashScreenServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SplashScreenService", function () {
        return SplashScreenService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

      var SplashScreenService = /*#__PURE__*/function () {
        /**
         * Service constructor
         *
         * @param animationBuilder: AnimationBuilder
         */
        function SplashScreenService(animationBuilder) {
          _classCallCheck(this, SplashScreenService);

          this.animationBuilder = animationBuilder;
        }
        /**
         * Init
         *
         * @param element: ElementRef
         */


        _createClass(SplashScreenService, [{
          key: "init",
          value: function init(element) {
            this.el = element;
          }
          /**
           * Hide
           */

        }, {
          key: "hide",
          value: function hide() {
            var _this = this;

            if (this.stopped || !this.el) {
              return;
            }

            var player = this.animationBuilder.build([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              opacity: '1'
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(800, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              opacity: '0'
            }))]).create(this.el.nativeElement);
            player.onDone(function () {
              if (typeof _this.el.nativeElement.remove === 'function') {
                _this.el.nativeElement.remove();
              } else {
                _this.el.nativeElement.style.display = 'none !important';
              }

              _this.stopped = true;
            });
            setTimeout(function () {
              return player.play();
            }, 100);
          }
        }]);

        return SplashScreenService;
      }();

      SplashScreenService.ɵfac = function SplashScreenService_Factory(t) {
        return new (t || SplashScreenService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_animations__WEBPACK_IMPORTED_MODULE_1__["AnimationBuilder"]));
      };

      SplashScreenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SplashScreenService,
        factory: SplashScreenService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplashScreenService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AnimationBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: routes, AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [{
        path: 'auth',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-auth-auth-module */
          [__webpack_require__.e("common"), __webpack_require__.e("modules-auth-auth-module")]).then(__webpack_require__.bind(null,
          /*! ./modules/auth/auth.module */
          "./src/app/modules/auth/auth.module.ts")).then(function (m) {
            return m.AuthModule;
          });
        }
      }, {
        path: 'error',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-errors-errors-module */
          "modules-errors-errors-module").then(__webpack_require__.bind(null,
          /*! ./modules/errors/errors.module */
          "./src/app/modules/errors/errors.module.ts")).then(function (m) {
            return m.ErrorsModule;
          });
        }
      }, {
        path: '',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-layout-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-layout-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/layout.module */
          "./src/app/pages/layout.module.ts")).then(function (m) {
            return m.LayoutModule;
          });
        }
      }, {
        path: '**',
        redirectTo: 'error/404',
        pathMatch: 'full'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _modules_i18n_vocabs_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./modules/i18n/vocabs/en */
      "./src/app/modules/i18n/vocabs/en.ts");
      /* harmony import */


      var _modules_i18n_vocabs_ch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modules/i18n/vocabs/ch */
      "./src/app/modules/i18n/vocabs/ch.ts");
      /* harmony import */


      var _modules_i18n_vocabs_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./modules/i18n/vocabs/es */
      "./src/app/modules/i18n/vocabs/es.ts");
      /* harmony import */


      var _modules_i18n_vocabs_jp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./modules/i18n/vocabs/jp */
      "./src/app/modules/i18n/vocabs/jp.ts");
      /* harmony import */


      var _modules_i18n_vocabs_de__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./modules/i18n/vocabs/de */
      "./src/app/modules/i18n/vocabs/de.ts");
      /* harmony import */


      var _modules_i18n_vocabs_fr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./modules/i18n/vocabs/fr */
      "./src/app/modules/i18n/vocabs/fr.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _modules_i18n_translation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./modules/i18n/translation.service */
      "./src/app/modules/i18n/translation.service.ts");
      /* harmony import */


      var _metronic_partials_layout_splash_screen_splash_screen_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./_metronic/partials/layout/splash-screen/splash-screen.service */
      "./src/app/_metronic/partials/layout/splash-screen/splash-screen.service.ts");
      /* harmony import */


      var _metronic_partials_layout_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./_metronic/partials/layout/splash-screen/splash-screen.component */
      "./src/app/_metronic/partials/layout/splash-screen/splash-screen.component.ts"); // language list


      var _c0 = ["root", ""];

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(translationService, splashScreenService, router) {
          _classCallCheck(this, AppComponent);

          this.translationService = translationService;
          this.splashScreenService = splashScreenService;
          this.router = router;
          this.unsubscribe = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
          // register translations

          this.translationService.loadTranslations(_modules_i18n_vocabs_en__WEBPACK_IMPORTED_MODULE_1__["locale"], _modules_i18n_vocabs_ch__WEBPACK_IMPORTED_MODULE_2__["locale"], _modules_i18n_vocabs_es__WEBPACK_IMPORTED_MODULE_3__["locale"], _modules_i18n_vocabs_jp__WEBPACK_IMPORTED_MODULE_4__["locale"], _modules_i18n_vocabs_de__WEBPACK_IMPORTED_MODULE_5__["locale"], _modules_i18n_vocabs_fr__WEBPACK_IMPORTED_MODULE_6__["locale"]);
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            var routerSubscription = this.router.events.subscribe(function (event) {
              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__["NavigationEnd"]) {
                // hide splash screen
                _this2.splashScreenService.hide(); // scroll to top on every route change


                window.scrollTo(0, 0); // to display back the body content

                setTimeout(function () {
                  document.body.classList.add('page-loaded');
                }, 500);
              }
            });
            this.unsubscribe.push(routerSubscription);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unsubscribe.forEach(function (sb) {
              return sb.unsubscribe();
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_i18n_translation_service__WEBPACK_IMPORTED_MODULE_8__["TranslationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_metronic_partials_layout_splash_screen_splash_screen_service__WEBPACK_IMPORTED_MODULE_9__["SplashScreenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["body", "root", ""]],
        attrs: _c0,
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-splash-screen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
          }
        },
        directives: [_metronic_partials_layout_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_10__["SplashScreenComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"]],
        styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsWUFBQTtFQUNBLFNBQUE7QUFDRCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0bWFyZ2luOiAwO1xyXG59XHJcbiJdfQ== */"],
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            // tslint:disable-next-line:component-selector
            selector: 'body[root]',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss'],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _modules_i18n_translation_service__WEBPACK_IMPORTED_MODULE_8__["TranslationService"]
          }, {
            type: _metronic_partials_layout_splash_screen_splash_screen_service__WEBPACK_IMPORTED_MODULE_9__["SplashScreenService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: getHighlightLanguages, AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getHighlightLanguages", function () {
        return getHighlightLanguages;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var ngx_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-clipboard */
      "./node_modules/ngx-clipboard/__ivy_ngcc__/fesm2015/ngx-clipboard.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-inline-svg */
      "./node_modules/ng-inline-svg/__ivy_ngcc__/lib_esmodule/index.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./modules/auth/_services/auth.service */
      "./src/app/modules/auth/_services/auth.service.ts");
      /* harmony import */


      var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-highlightjs */
      "./node_modules/ngx-highlightjs/__ivy_ngcc__/fesm2015/ngx-highlightjs.js");
      /* harmony import */


      var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! highlight.js/lib/languages/xml */
      "./node_modules/highlight.js/lib/languages/xml.js");
      /* harmony import */


      var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var highlight_js_lib_languages_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! highlight.js/lib/languages/json */
      "./node_modules/highlight.js/lib/languages/json.js");
      /* harmony import */


      var highlight_js_lib_languages_json__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_json__WEBPACK_IMPORTED_MODULE_13__);
      /* harmony import */


      var highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! highlight.js/lib/languages/scss */
      "./node_modules/highlight.js/lib/languages/scss.js");
      /* harmony import */


      var highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_14__);
      /* harmony import */


      var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! highlight.js/lib/languages/typescript */
      "./node_modules/highlight.js/lib/languages/typescript.js");
      /* harmony import */


      var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_15__);
      /* harmony import */


      var _metronic_partials_layout_splash_screen_splash_screen_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./_metronic/partials/layout/splash-screen/splash-screen.module */
      "./src/app/_metronic/partials/layout/splash-screen/splash-screen.module.ts");
      /* harmony import */


      var _shared_service_auth_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./shared/service/auth.interceptor */
      "./src/app/shared/service/auth.interceptor.ts");
      /* harmony import */


      var _modules_company_management_company_management_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./modules/company-management/company-management.component */
      "./src/app/modules/company-management/company-management.component.ts");
      /* harmony import */


      var _modules_admin_reporting_admin_reporting_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./modules/admin-reporting/admin-reporting.component */
      "./src/app/modules/admin-reporting/admin-reporting.component.ts");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js"); // Highlight JS


      function appInitializer(authService) {
        return function () {
          return new Promise(function (resolve) {
            authService.getUserByToken().subscribe().add(resolve);
          });
        };
      }
      /**
       * Import specific languages to avoid importing everything
       * The following will lazy load highlight.js core script (~9.6KB) + the selected languages bundle (each lang. ~1kb)
       */


      function getHighlightLanguages() {
        return [{
          name: 'typescript',
          func: highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_15___default.a
        }, {
          name: 'scss',
          func: highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_14___default.a
        }, {
          name: 'xml',
          func: highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_12___default.a
        }, {
          name: 'json',
          func: highlight_js_lib_languages_json__WEBPACK_IMPORTED_MODULE_13___default.a
        }];
      }

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
          useFactory: appInitializer,
          multi: true,
          deps: [_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]]
        }, {
          provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_11__["HIGHLIGHT_OPTIONS"],
          useValue: {
            languages: getHighlightLanguages
          }
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
          useClass: _shared_service_auth_interceptor__WEBPACK_IMPORTED_MODULE_17__["AuthInterceptor"],
          multi: true
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _metronic_partials_layout_splash_screen_splash_screen_module__WEBPACK_IMPORTED_MODULE_16__["SplashScreenModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_11__["HighlightModule"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_4__["ClipboardModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__["InlineSVGModule"].forRoot(), ngx_toastr__WEBPACK_IMPORTED_MODULE_20__["ToastrModule"].forRoot(), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _modules_company_management_company_management_component__WEBPACK_IMPORTED_MODULE_18__["CompanyManagementComponent"], _modules_admin_reporting_admin_reporting_component__WEBPACK_IMPORTED_MODULE_19__["AdminReportingComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _metronic_partials_layout_splash_screen_splash_screen_module__WEBPACK_IMPORTED_MODULE_16__["SplashScreenModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_11__["HighlightModule"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_4__["ClipboardModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__["InlineSVGModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_20__["ToastrModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _modules_company_management_company_management_component__WEBPACK_IMPORTED_MODULE_18__["CompanyManagementComponent"], _modules_admin_reporting_admin_reporting_component__WEBPACK_IMPORTED_MODULE_19__["AdminReportingComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _metronic_partials_layout_splash_screen_splash_screen_module__WEBPACK_IMPORTED_MODULE_16__["SplashScreenModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_11__["HighlightModule"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_4__["ClipboardModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__["InlineSVGModule"].forRoot(), ngx_toastr__WEBPACK_IMPORTED_MODULE_20__["ToastrModule"].forRoot(), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]],
            providers: [{
              provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
              useFactory: appInitializer,
              multi: true,
              deps: [_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]]
            }, {
              provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_11__["HIGHLIGHT_OPTIONS"],
              useValue: {
                languages: getHighlightLanguages
              }
            }, {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
              useClass: _shared_service_auth_interceptor__WEBPACK_IMPORTED_MODULE_17__["AuthInterceptor"],
              multi: true
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/admin-reporting/admin-reporting.component.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/modules/admin-reporting/admin-reporting.component.ts ***!
      \**********************************************************************/

    /*! exports provided: AdminReportingComponent */

    /***/
    function srcAppModulesAdminReportingAdminReportingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminReportingComponent", function () {
        return AdminReportingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AdminReportingComponent = /*#__PURE__*/function () {
        function AdminReportingComponent() {
          _classCallCheck(this, AdminReportingComponent);
        }

        _createClass(AdminReportingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AdminReportingComponent;
      }();

      AdminReportingComponent.ɵfac = function AdminReportingComponent_Factory(t) {
        return new (t || AdminReportingComponent)();
      };

      AdminReportingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AdminReportingComponent,
        selectors: [["app-reporting"]],
        decls: 1,
        vars: 0,
        template: function AdminReportingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminReportingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-reporting',
            templateUrl: './admin-reporting.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/auth/_services/auth-http/auth-http.service.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/modules/auth/_services/auth-http/auth-http.service.ts ***!
      \***********************************************************************/

    /*! exports provided: AuthHTTPService */

    /***/
    function srcAppModulesAuth_servicesAuthHttpAuthHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthHTTPService", function () {
        return AuthHTTPService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../environments/environment */
      "./src/environments/environment.ts");

      var API_USERS_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/users");

      var AuthHTTPService = /*#__PURE__*/function () {
        function AuthHTTPService(http) {
          _classCallCheck(this, AuthHTTPService);

          this.http = http;
        } // public methods


        _createClass(AuthHTTPService, [{
          key: "login",
          value: function login(email, password) {
            return this.http.post("".concat(API_USERS_URL, "/login"), {
              email: email,
              password: password
            });
          } // CREATE =>  POST: add a new user to the server

        }, {
          key: "createUser",
          value: function createUser(user) {
            return this.http.post("".concat(API_USERS_URL, "/signup"), user);
          } // Your server should check email => If email exists send link to the user and return true | If email doesn't exist return false

        }, {
          key: "forgotPassword",
          value: function forgotPassword(email) {
            return this.http.post("".concat(API_USERS_URL, "/forgot-password"), {
              email: email
            });
          }
        }, {
          key: "getUserByToken",
          value: function getUserByToken(token) {
            var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              Authorization: "Bearer ".concat(token)
            });
            return this.http.get("".concat(API_USERS_URL, "/getUserByToken"), {
              headers: httpHeaders
            });
          }
        }]);

        return AuthHTTPService;
      }();

      AuthHTTPService.ɵfac = function AuthHTTPService_Factory(t) {
        return new (t || AuthHTTPService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      AuthHTTPService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthHTTPService,
        factory: AuthHTTPService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthHTTPService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/auth/_services/auth-http/index.ts":
    /*!***********************************************************!*\
      !*** ./src/app/modules/auth/_services/auth-http/index.ts ***!
      \***********************************************************/

    /*! exports provided: AuthHTTPService */

    /***/
    function srcAppModulesAuth_servicesAuthHttpIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _auth_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth-http.service */
      "./src/app/modules/auth/_services/auth-http/auth-http.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthHTTPService", function () {
        return _auth_http_service__WEBPACK_IMPORTED_MODULE_0__["AuthHTTPService"];
      }); //export { AuthHTTPService } from './auth-fake-http.service'; // You have to comment this, when your real back-end is done
      // You have to uncomment this, when your real back-end is done

      /***/

    },

    /***/
    "./src/app/modules/auth/_services/auth.service.ts":
    /*!********************************************************!*\
      !*** ./src/app/modules/auth/_services/auth.service.ts ***!
      \********************************************************/

    /*! exports provided: AuthService */

    /***/
    function srcAppModulesAuth_servicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _auth_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./auth-http */
      "./src/app/modules/auth/_services/auth-http/index.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(authHttpService, router) {
          _classCallCheck(this, AuthService);

          this.authHttpService = authHttpService;
          this.router = router; // private fields

          this.unsubscribe = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

          this.authLocalStorageToken = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].appVersion, "-").concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].USERDATA_KEY);
          this.LOCALIZATION_LOCAL_STORAGE_KEY = 'company';
          this.isLoadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
          this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
          this.currentUser$ = this.currentUserSubject.asObservable();
          this.isLoading$ = this.isLoadingSubject.asObservable();
          var subscr = this.getUserByToken().subscribe();
          this.unsubscribe.push(subscr);
        }

        _createClass(AuthService, [{
          key: "login",
          // public methods
          value: function login(email, password) {
            var _this3 = this;

            this.isLoadingSubject.next(true);
            return this.authHttpService.login(email, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (auth) {
              var result = _this3.setAuthFromLocalStorage(auth);

              return result;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
              return _this3.getUserByToken();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
              console.error('err', err);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
              return _this3.isLoadingSubject.next(false);
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem(this.LOCALIZATION_LOCAL_STORAGE_KEY);
            localStorage.removeItem(this.authLocalStorageToken);
            this.router.navigate(['/auth/login'], {
              queryParams: {}
            });
          }
        }, {
          key: "getUserByToken",
          value: function getUserByToken() {
            var _this4 = this;

            var auth = this.getAuthFromLocalStorage();

            if (!auth || !auth.accessToken) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
            }

            this.isLoadingSubject.next(true);
            return this.authHttpService.getUserByToken(auth.accessToken).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
              if (user) {
                _this4.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](user);
              } else {
                _this4.logout();
              }

              return user;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
              return _this4.isLoadingSubject.next(false);
            }));
          } // need create new user then login

        }, {
          key: "registration",
          value: function registration(user) {
            var _this5 = this;

            console.log('registration');
            console.log(user);
            this.isLoadingSubject.next(true);
            return this.authHttpService.createUser(user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
              _this5.isLoadingSubject.next(false);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
              return _this5.login(user.email, user.password);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
              console.error('err', err);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
              return _this5.isLoadingSubject.next(false);
            }));
          }
        }, {
          key: "forgotPassword",
          value: function forgotPassword(email) {
            var _this6 = this;

            this.isLoadingSubject.next(true);
            return this.authHttpService.forgotPassword(email).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
              return _this6.isLoadingSubject.next(false);
            }));
          } // private methods

        }, {
          key: "setAuthFromLocalStorage",
          value: function setAuthFromLocalStorage(auth) {
            // store auth accessToken/refreshToken/epiresIn in local storage to keep user logged in between page refreshes
            if (auth && auth.accessToken) {
              localStorage.setItem(this.authLocalStorageToken, JSON.stringify(auth));
              return true;
            }

            return false;
          }
        }, {
          key: "getAuthFromLocalStorage",
          value: function getAuthFromLocalStorage() {
            try {
              var authData = JSON.parse(localStorage.getItem(this.authLocalStorageToken));
              return authData;
            } catch (error) {
              console.error(error);
              return undefined;
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unsubscribe.forEach(function (sb) {
              return sb.unsubscribe();
            });
          }
        }, {
          key: "currentUserValue",
          get: function get() {
            return this.currentUserSubject.value;
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_http__WEBPACK_IMPORTED_MODULE_4__["AuthHTTPService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _auth_http__WEBPACK_IMPORTED_MODULE_4__["AuthHTTPService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/company-management/company-management.component.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/modules/company-management/company-management.component.ts ***!
      \****************************************************************************/

    /*! exports provided: CompanyManagementComponent */

    /***/
    function srcAppModulesCompanyManagementCompanyManagementComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyManagementComponent", function () {
        return CompanyManagementComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var CompanyManagementComponent = /*#__PURE__*/function () {
        function CompanyManagementComponent() {
          _classCallCheck(this, CompanyManagementComponent);
        }

        _createClass(CompanyManagementComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CompanyManagementComponent;
      }();

      CompanyManagementComponent.ɵfac = function CompanyManagementComponent_Factory(t) {
        return new (t || CompanyManagementComponent)();
      };

      CompanyManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CompanyManagementComponent,
        selectors: [["app-company-management"]],
        decls: 1,
        vars: 0,
        template: function CompanyManagementComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tcGFueS1tYW5hZ2VtZW50L2NvbXBhbnktbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyManagementComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-company-management',
            templateUrl: './company-management.component.html',
            styleUrls: ['./company-management.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/i18n/translation.service.ts":
    /*!*****************************************************!*\
      !*** ./src/app/modules/i18n/translation.service.ts ***!
      \*****************************************************/

    /*! exports provided: TranslationService */

    /***/
    function srcAppModulesI18nTranslationServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TranslationService", function () {
        return TranslationService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js"); // Localization is based on '@ngx-translate/core';
      // Please be familiar with official documentations first => https://github.com/ngx-translate/core


      var LOCALIZATION_LOCAL_STORAGE_KEY = 'language';

      var TranslationService = /*#__PURE__*/function () {
        function TranslationService(translate) {
          _classCallCheck(this, TranslationService);

          this.translate = translate; // Private properties

          this.langIds = []; // add new langIds to the list

          this.translate.addLangs(['en']); // this language will be used as a fallback when a translation isn't found in the current language

          this.translate.setDefaultLang('en');
        }

        _createClass(TranslationService, [{
          key: "loadTranslations",
          value: function loadTranslations() {
            var _this7 = this;

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            var locales = [].concat(args);
            locales.forEach(function (locale) {
              // use setTranslation() with the third argument set to true
              // to append translations instead of replacing them
              _this7.translate.setTranslation(locale.lang, locale.data, true);

              _this7.langIds.push(locale.lang);
            }); // add new languages to the list

            this.translate.addLangs(this.langIds);
          }
        }, {
          key: "setLanguage",
          value: function setLanguage(lang) {
            if (lang) {
              this.translate.use(this.translate.getDefaultLang());
              this.translate.use(lang);
              localStorage.setItem(LOCALIZATION_LOCAL_STORAGE_KEY, lang);
            }
          }
          /**
           * Returns selected language
           */

        }, {
          key: "getSelectedLanguage",
          value: function getSelectedLanguage() {
            return localStorage.getItem(LOCALIZATION_LOCAL_STORAGE_KEY) || this.translate.getDefaultLang();
          }
        }]);

        return TranslationService;
      }();

      TranslationService.ɵfac = function TranslationService_Factory(t) {
        return new (t || TranslationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]));
      };

      TranslationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TranslationService,
        factory: TranslationService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/i18n/vocabs/ch.ts":
    /*!*******************************************!*\
      !*** ./src/app/modules/i18n/vocabs/ch.ts ***!
      \*******************************************/

    /*! exports provided: locale */

    /***/
    function srcAppModulesI18nVocabsChTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "locale", function () {
        return locale;
      }); // China


      var locale = {
        lang: 'ch',
        data: {
          TRANSLATOR: {
            SELECT: '选择你的语言'
          },
          MENU: {
            NEW: '新',
            ACTIONS: '行动',
            CREATE_POST: '创建新帖子',
            PAGES: 'Pages',
            FEATURES: '特征',
            APPS: '应用',
            DASHBOARD: '仪表板'
          },
          AUTH: {
            GENERAL: {
              OR: '要么',
              SUBMIT_BUTTON: '提交',
              NO_ACCOUNT: '没有账号？',
              SIGNUP_BUTTON: '注册',
              FORGOT_BUTTON: '忘记密码',
              BACK_BUTTON: '背部',
              PRIVACY: '隐私',
              LEGAL: '法律',
              CONTACT: '联系'
            },
            LOGIN: {
              TITLE: '创建帐号',
              BUTTON: '签到'
            },
            FORGOT: {
              TITLE: 'Forgotten Password?',
              DESC: 'Enter your email to reset your password',
              SUCCESS: 'Your account has been successfully reset.'
            },
            REGISTER: {
              TITLE: 'Sign Up',
              DESC: 'Enter your details to create your account',
              SUCCESS: 'Your account has been successfuly registered.'
            },
            INPUT: {
              EMAIL: 'Email',
              FULLNAME: 'Fullname',
              PASSWORD: 'Password',
              CONFIRM_PASSWORD: 'Confirm Password',
              USERNAME: '用戶名'
            },
            VALIDATION: {
              INVALID: '{{name}} is not valid',
              REQUIRED: '{{name}} is required',
              MIN_LENGTH: '{{name}} minimum length is {{min}}',
              AGREEMENT_REQUIRED: 'Accepting terms & conditions are required',
              NOT_FOUND: 'The requested {{name}} is not found',
              INVALID_LOGIN: 'The login detail is incorrect',
              REQUIRED_FIELD: 'Required field',
              MIN_LENGTH_FIELD: 'Minimum field length:',
              MAX_LENGTH_FIELD: 'Maximum field length:',
              INVALID_FIELD: 'Field is not valid'
            }
          },
          ECOMMERCE: {
            COMMON: {
              SELECTED_RECORDS_COUNT: 'Selected records count: ',
              ALL: 'All',
              SUSPENDED: 'Suspended',
              ACTIVE: 'Active',
              FILTER: 'Filter',
              BY_STATUS: 'by Status',
              BY_TYPE: 'by Type',
              BUSINESS: 'Business',
              INDIVIDUAL: 'Individual',
              SEARCH: 'Search',
              IN_ALL_FIELDS: 'in all fields'
            },
            ECOMMERCE: 'eCommerce',
            CUSTOMERS: {
              CUSTOMERS: '顾客',
              CUSTOMERS_LIST: '客户名单',
              NEW_CUSTOMER: 'New Customer',
              DELETE_CUSTOMER_SIMPLE: {
                TITLE: 'Customer Delete',
                DESCRIPTION: 'Are you sure to permanently delete this customer?',
                WAIT_DESCRIPTION: 'Customer is deleting...',
                MESSAGE: 'Customer has been deleted'
              },
              DELETE_CUSTOMER_MULTY: {
                TITLE: 'Customers Delete',
                DESCRIPTION: 'Are you sure to permanently delete selected customers?',
                WAIT_DESCRIPTION: 'Customers are deleting...',
                MESSAGE: 'Selected customers have been deleted'
              },
              UPDATE_STATUS: {
                TITLE: 'Status has been updated for selected customers',
                MESSAGE: 'Selected customers status have successfully been updated'
              },
              EDIT: {
                UPDATE_MESSAGE: 'Customer has been updated',
                ADD_MESSAGE: 'Customer has been created'
              }
            }
          }
        }
      };
      /***/
    },

    /***/
    "./src/app/modules/i18n/vocabs/de.ts":
    /*!*******************************************!*\
      !*** ./src/app/modules/i18n/vocabs/de.ts ***!
      \*******************************************/

    /*! exports provided: locale */

    /***/
    function srcAppModulesI18nVocabsDeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "locale", function () {
        return locale;
      }); // Germany


      var locale = {
        lang: 'de',
        data: {
          TRANSLATOR: {
            SELECT: 'Wähle deine Sprache'
          },
          MENU: {
            NEW: 'Neu',
            ACTIONS: 'Aktionen',
            CREATE_POST: 'Erstellen Sie einen neuen Beitrag',
            PAGES: 'Pages',
            FEATURES: 'Eigenschaften',
            APPS: 'Apps',
            DASHBOARD: 'Instrumententafel'
          },
          AUTH: {
            GENERAL: {
              OR: 'Oder',
              SUBMIT_BUTTON: 'einreichen',
              NO_ACCOUNT: 'Hast du kein Konto?',
              SIGNUP_BUTTON: 'Anmelden',
              FORGOT_BUTTON: 'Passwort vergessen',
              BACK_BUTTON: 'Zurück',
              PRIVACY: 'Privatsphäre',
              LEGAL: 'Legal',
              CONTACT: 'Kontakt'
            },
            LOGIN: {
              TITLE: 'Create Account',
              BUTTON: 'Sign In'
            },
            FORGOT: {
              TITLE: 'Forgotten Password?',
              DESC: 'Enter your email to reset your password',
              SUCCESS: 'Your account has been successfully reset.'
            },
            REGISTER: {
              TITLE: 'Sign Up',
              DESC: 'Enter your details to create your account',
              SUCCESS: 'Your account has been successfuly registered.'
            },
            INPUT: {
              EMAIL: 'Email',
              FULLNAME: 'Fullname',
              PASSWORD: 'Password',
              CONFIRM_PASSWORD: 'Confirm Password',
              USERNAME: 'Nutzername'
            },
            VALIDATION: {
              INVALID: '{{name}} is not valid',
              REQUIRED: '{{name}} is required',
              MIN_LENGTH: '{{name}} minimum length is {{min}}',
              AGREEMENT_REQUIRED: 'Accepting terms & conditions are required',
              NOT_FOUND: 'The requested {{name}} is not found',
              INVALID_LOGIN: 'The login detail is incorrect',
              REQUIRED_FIELD: 'Required field',
              MIN_LENGTH_FIELD: 'Minimum field length:',
              MAX_LENGTH_FIELD: 'Maximum field length:',
              INVALID_FIELD: 'Field is not valid'
            }
          },
          ECOMMERCE: {
            COMMON: {
              SELECTED_RECORDS_COUNT: 'Selected records count: ',
              ALL: 'All',
              SUSPENDED: 'Suspended',
              ACTIVE: 'Active',
              FILTER: 'Filter',
              BY_STATUS: 'by Status',
              BY_TYPE: 'by Type',
              BUSINESS: 'Business',
              INDIVIDUAL: 'Individual',
              SEARCH: 'Search',
              IN_ALL_FIELDS: 'in all fields'
            },
            ECOMMERCE: 'eCommerce',
            CUSTOMERS: {
              CUSTOMERS: 'Customers',
              CUSTOMERS_LIST: 'Customers list',
              NEW_CUSTOMER: 'New Customer',
              DELETE_CUSTOMER_SIMPLE: {
                TITLE: 'Customer Delete',
                DESCRIPTION: 'Are you sure to permanently delete this customer?',
                WAIT_DESCRIPTION: 'Customer is deleting...',
                MESSAGE: 'Customer has been deleted'
              },
              DELETE_CUSTOMER_MULTY: {
                TITLE: 'Customers Delete',
                DESCRIPTION: 'Are you sure to permanently delete selected customers?',
                WAIT_DESCRIPTION: 'Customers are deleting...',
                MESSAGE: 'Selected customers have been deleted'
              },
              UPDATE_STATUS: {
                TITLE: 'Status has been updated for selected customers',
                MESSAGE: 'Selected customers status have successfully been updated'
              },
              EDIT: {
                UPDATE_MESSAGE: 'Customer has been updated',
                ADD_MESSAGE: 'Customer has been created'
              }
            }
          }
        }
      };
      /***/
    },

    /***/
    "./src/app/modules/i18n/vocabs/en.ts":
    /*!*******************************************!*\
      !*** ./src/app/modules/i18n/vocabs/en.ts ***!
      \*******************************************/

    /*! exports provided: locale */

    /***/
    function srcAppModulesI18nVocabsEnTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "locale", function () {
        return locale;
      }); // USA


      var locale = {
        lang: 'en',
        data: {
          TRANSLATOR: {
            SELECT: 'Select your language'
          },
          MENU: {
            NEW: 'new',
            ACTIONS: 'Actions',
            CREATE_POST: 'Create New Post',
            PAGES: 'Pages',
            FEATURES: 'Features',
            APPS: 'Apps',
            DASHBOARD: 'Dashboard'
          },
          AUTH: {
            GENERAL: {
              OR: 'Or',
              SUBMIT_BUTTON: 'Submit',
              NO_ACCOUNT: 'Don\'t have an account?',
              SIGNUP_BUTTON: 'Sign Up',
              FORGOT_BUTTON: 'Forgot Password',
              BACK_BUTTON: 'Back',
              PRIVACY: 'Privacy',
              LEGAL: 'Legal',
              CONTACT: 'Contact'
            },
            LOGIN: {
              TITLE: 'Login Account',
              BUTTON: 'Sign In'
            },
            FORGOT: {
              TITLE: 'Forgotten Password?',
              DESC: 'Enter your email to reset your password',
              SUCCESS: 'Your account has been successfully reset.'
            },
            REGISTER: {
              TITLE: 'Sign Up',
              DESC: 'Enter your details to create your account',
              SUCCESS: 'Your account has been successfuly registered.'
            },
            INPUT: {
              EMAIL: 'Email',
              FULLNAME: 'Fullname',
              PASSWORD: 'Password',
              CONFIRM_PASSWORD: 'Confirm Password',
              USERNAME: 'Username'
            },
            VALIDATION: {
              INVALID: '{{name}} is not valid',
              REQUIRED: '{{name}} is required',
              MIN_LENGTH: '{{name}} minimum length is {{min}}',
              AGREEMENT_REQUIRED: 'Accepting terms & conditions are required',
              NOT_FOUND: 'The requested {{name}} is not found',
              INVALID_LOGIN: 'The login detail is incorrect',
              REQUIRED_FIELD: 'Required field',
              MIN_LENGTH_FIELD: 'Minimum field length:',
              MAX_LENGTH_FIELD: 'Maximum field length:',
              INVALID_FIELD: 'Field is not valid'
            }
          },
          ECOMMERCE: {
            COMMON: {
              SELECTED_RECORDS_COUNT: 'Selected records count: ',
              ALL: 'All',
              SUSPENDED: 'Suspended',
              ACTIVE: 'Active',
              FILTER: 'Filter',
              BY_STATUS: 'by Status',
              BY_TYPE: 'by Type',
              BUSINESS: 'Business',
              INDIVIDUAL: 'Individual',
              SEARCH: 'Search',
              IN_ALL_FIELDS: 'in all fields'
            },
            ECOMMERCE: 'eCommerce',
            CUSTOMERS: {
              CUSTOMERS: 'Customers',
              CUSTOMERS_LIST: 'Customers list',
              NEW_CUSTOMER: 'New Customer',
              DELETE_CUSTOMER_SIMPLE: {
                TITLE: 'Customer Delete',
                DESCRIPTION: 'Are you sure to permanently delete this customer?',
                WAIT_DESCRIPTION: 'Customer is deleting...',
                MESSAGE: 'Customer has been deleted'
              },
              DELETE_CUSTOMER_MULTY: {
                TITLE: 'Customers Delete',
                DESCRIPTION: 'Are you sure to permanently delete selected customers?',
                WAIT_DESCRIPTION: 'Customers are deleting...',
                MESSAGE: 'Selected customers have been deleted'
              },
              UPDATE_STATUS: {
                TITLE: 'Status has been updated for selected customers',
                MESSAGE: 'Selected customers status have successfully been updated'
              },
              EDIT: {
                UPDATE_MESSAGE: 'Customer has been updated',
                ADD_MESSAGE: 'Customer has been created'
              }
            }
          }
        }
      };
      /***/
    },

    /***/
    "./src/app/modules/i18n/vocabs/es.ts":
    /*!*******************************************!*\
      !*** ./src/app/modules/i18n/vocabs/es.ts ***!
      \*******************************************/

    /*! exports provided: locale */

    /***/
    function srcAppModulesI18nVocabsEsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "locale", function () {
        return locale;
      }); // Spain


      var locale = {
        lang: 'es',
        data: {
          TRANSLATOR: {
            SELECT: 'Elige tu idioma'
          },
          MENU: {
            NEW: 'nuevo',
            ACTIONS: 'Comportamiento',
            CREATE_POST: 'Crear nueva publicación',
            PAGES: 'Pages',
            FEATURES: 'Caracteristicas',
            APPS: 'Aplicaciones',
            DASHBOARD: 'Tablero'
          },
          AUTH: {
            GENERAL: {
              OR: 'O',
              SUBMIT_BUTTON: 'Enviar',
              NO_ACCOUNT: 'No tienes una cuenta?',
              SIGNUP_BUTTON: 'Regístrate',
              FORGOT_BUTTON: 'Se te olvidó tu contraseña',
              BACK_BUTTON: 'Espalda',
              PRIVACY: 'Intimidad',
              LEGAL: 'Legal',
              CONTACT: 'Contacto'
            },
            LOGIN: {
              TITLE: 'Crear una cuenta',
              BUTTON: 'Registrarse'
            },
            FORGOT: {
              TITLE: 'Contraseña olvidada?',
              DESC: 'Ingrese su correo electrónico para restablecer su contraseña',
              SUCCESS: 'Your account has been successfully reset.'
            },
            REGISTER: {
              TITLE: 'Sign Up',
              DESC: 'Enter your details to create your account',
              SUCCESS: 'Your account has been successfuly registered.'
            },
            INPUT: {
              EMAIL: 'Email',
              FULLNAME: 'Fullname',
              PASSWORD: 'Password',
              CONFIRM_PASSWORD: 'Confirm Password',
              USERNAME: 'Usuario'
            },
            VALIDATION: {
              INVALID: '{{name}} is not valid',
              REQUIRED: '{{name}} is required',
              MIN_LENGTH: '{{name}} minimum length is {{min}}',
              AGREEMENT_REQUIRED: 'Accepting terms & conditions are required',
              NOT_FOUND: 'The requested {{name}} is not found',
              INVALID_LOGIN: 'The login detail is incorrect',
              REQUIRED_FIELD: 'Required field',
              MIN_LENGTH_FIELD: 'Minimum field length:',
              MAX_LENGTH_FIELD: 'Maximum field length:',
              INVALID_FIELD: 'Field is not valid'
            }
          },
          ECOMMERCE: {
            COMMON: {
              SELECTED_RECORDS_COUNT: 'Selected records count: ',
              ALL: 'All',
              SUSPENDED: 'Suspended',
              ACTIVE: 'Active',
              FILTER: 'Filter',
              BY_STATUS: 'by Status',
              BY_TYPE: 'by Type',
              BUSINESS: 'Business',
              INDIVIDUAL: 'Individual',
              SEARCH: 'Search',
              IN_ALL_FIELDS: 'in all fields'
            },
            ECOMMERCE: 'eCommerce',
            CUSTOMERS: {
              CUSTOMERS: 'Customers',
              CUSTOMERS_LIST: 'Customers list',
              NEW_CUSTOMER: 'New Customer',
              DELETE_CUSTOMER_SIMPLE: {
                TITLE: 'Customer Delete',
                DESCRIPTION: 'Are you sure to permanently delete this customer?',
                WAIT_DESCRIPTION: 'Customer is deleting...',
                MESSAGE: 'Customer has been deleted'
              },
              DELETE_CUSTOMER_MULTY: {
                TITLE: 'Customers Delete',
                DESCRIPTION: 'Are you sure to permanently delete selected customers?',
                WAIT_DESCRIPTION: 'Customers are deleting...',
                MESSAGE: 'Selected customers have been deleted'
              },
              UPDATE_STATUS: {
                TITLE: 'Status has been updated for selected customers',
                MESSAGE: 'Selected customers status have successfully been updated'
              },
              EDIT: {
                UPDATE_MESSAGE: 'Customer has been updated',
                ADD_MESSAGE: 'Customer has been created'
              }
            }
          }
        }
      };
      /***/
    },

    /***/
    "./src/app/modules/i18n/vocabs/fr.ts":
    /*!*******************************************!*\
      !*** ./src/app/modules/i18n/vocabs/fr.ts ***!
      \*******************************************/

    /*! exports provided: locale */

    /***/
    function srcAppModulesI18nVocabsFrTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "locale", function () {
        return locale;
      }); // France


      var locale = {
        lang: 'fr',
        data: {
          TRANSLATOR: {
            SELECT: 'choisissez votre langue'
          },
          MENU: {
            NEW: 'Nouveau',
            ACTIONS: 'Actes',
            CREATE_POST: 'Créer un nouveau Post',
            PAGES: 'Pages',
            FEATURES: 'Fonctionnalités',
            APPS: 'Applications',
            DASHBOARD: 'Tableau de Bord'
          },
          AUTH: {
            GENERAL: {
              OR: 'Ou',
              SUBMIT_BUTTON: 'Soumettre',
              NO_ACCOUNT: 'Ne pas avoir de compte?',
              SIGNUP_BUTTON: 'Registre',
              FORGOT_BUTTON: 'Mot de passe oublié',
              BACK_BUTTON: 'Back',
              PRIVACY: 'Privacy',
              LEGAL: 'Legal',
              CONTACT: 'Contact'
            },
            LOGIN: {
              TITLE: 'Créer un compte',
              BUTTON: 'Sign In'
            },
            FORGOT: {
              TITLE: 'Forgotten Password?',
              DESC: 'Enter your email to reset your password',
              SUCCESS: 'Your account has been successfully reset.'
            },
            REGISTER: {
              TITLE: 'Sign Up',
              DESC: 'Enter your details to create your account',
              SUCCESS: 'Your account has been successfuly registered.'
            },
            INPUT: {
              EMAIL: 'Email',
              FULLNAME: 'Fullname',
              PASSWORD: 'Mot de passe',
              CONFIRM_PASSWORD: 'Confirm Password',
              USERNAME: 'Nom d\'utilisateur'
            },
            VALIDATION: {
              INVALID: '{{name}} n\'est pas valide',
              REQUIRED: '{{name}} est requis',
              MIN_LENGTH: '{{name}} minimum length is {{min}}',
              AGREEMENT_REQUIRED: 'Accepting terms & conditions are required',
              NOT_FOUND: 'The requested {{name}} is not found',
              INVALID_LOGIN: 'The login detail is incorrect',
              REQUIRED_FIELD: 'Required field',
              MIN_LENGTH_FIELD: 'Minimum field length:',
              MAX_LENGTH_FIELD: 'Maximum field length:',
              INVALID_FIELD: 'Field is not valid'
            }
          },
          ECOMMERCE: {
            COMMON: {
              SELECTED_RECORDS_COUNT: 'Nombre d\'enregistrements sélectionnés: ',
              ALL: 'All',
              SUSPENDED: 'Suspended',
              ACTIVE: 'Active',
              FILTER: 'Filter',
              BY_STATUS: 'by Status',
              BY_TYPE: 'by Type',
              BUSINESS: 'Business',
              INDIVIDUAL: 'Individual',
              SEARCH: 'Search',
              IN_ALL_FIELDS: 'in all fields'
            },
            ECOMMERCE: 'éCommerce',
            CUSTOMERS: {
              CUSTOMERS: 'Les clients',
              CUSTOMERS_LIST: 'Liste des clients',
              NEW_CUSTOMER: 'Nouveau client',
              DELETE_CUSTOMER_SIMPLE: {
                TITLE: 'Suppression du client',
                DESCRIPTION: 'Êtes-vous sûr de supprimer définitivement ce client?',
                WAIT_DESCRIPTION: 'Le client est en train de supprimer ...',
                MESSAGE: 'Le client a été supprimé'
              },
              DELETE_CUSTOMER_MULTY: {
                TITLE: 'Supprimer les clients',
                DESCRIPTION: 'Êtes-vous sûr de supprimer définitivement les clients sélectionnés?',
                WAIT_DESCRIPTION: 'Les clients suppriment ...',
                MESSAGE: 'Les clients sélectionnés ont été supprimés'
              },
              UPDATE_STATUS: {
                TITLE: 'Le statut a été mis à jour pour les clients sélectionnés',
                MESSAGE: 'Le statut des clients sélectionnés a été mis à jour avec succès'
              },
              EDIT: {
                UPDATE_MESSAGE: 'Le client a été mis à jour',
                ADD_MESSAGE: 'Le client a été créé'
              }
            }
          }
        }
      };
      /***/
    },

    /***/
    "./src/app/modules/i18n/vocabs/jp.ts":
    /*!*******************************************!*\
      !*** ./src/app/modules/i18n/vocabs/jp.ts ***!
      \*******************************************/

    /*! exports provided: locale */

    /***/
    function srcAppModulesI18nVocabsJpTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "locale", function () {
        return locale;
      }); // Japan


      var locale = {
        lang: 'jp',
        data: {
          TRANSLATOR: {
            SELECT: 'あなたが使う言語を選んでください'
          },
          MENU: {
            NEW: '新しい',
            ACTIONS: '行動',
            CREATE_POST: '新しい投稿を作成',
            PAGES: 'Pages',
            FEATURES: '特徴',
            APPS: 'アプリ',
            DASHBOARD: 'ダッシュボード'
          },
          AUTH: {
            GENERAL: {
              OR: 'または',
              SUBMIT_BUTTON: '提出する',
              NO_ACCOUNT: 'アカウントを持っていない？',
              SIGNUP_BUTTON: 'サインアップ',
              FORGOT_BUTTON: 'パスワードをお忘れですか',
              BACK_BUTTON: 'バック',
              PRIVACY: 'プライバシー',
              LEGAL: '法的',
              CONTACT: '接触'
            },
            LOGIN: {
              TITLE: 'Create Account',
              BUTTON: 'Sign In'
            },
            FORGOT: {
              TITLE: 'Forgotten Password?',
              DESC: 'Enter your email to reset your password',
              SUCCESS: 'Your account has been successfully reset.'
            },
            REGISTER: {
              TITLE: 'Sign Up',
              DESC: 'Enter your details to create your account',
              SUCCESS: 'Your account has been successfuly registered.'
            },
            INPUT: {
              EMAIL: 'Email',
              FULLNAME: 'Fullname',
              PASSWORD: 'Password',
              CONFIRM_PASSWORD: 'Confirm Password',
              USERNAME: 'ユーザー名'
            },
            VALIDATION: {
              INVALID: '{{name}} is not valid',
              REQUIRED: '{{name}} is required',
              MIN_LENGTH: '{{name}} minimum length is {{min}}',
              AGREEMENT_REQUIRED: 'Accepting terms & conditions are required',
              NOT_FOUND: 'The requested {{name}} is not found',
              INVALID_LOGIN: 'The login detail is incorrect',
              REQUIRED_FIELD: 'Required field',
              MIN_LENGTH_FIELD: 'Minimum field length:',
              MAX_LENGTH_FIELD: 'Maximum field length:',
              INVALID_FIELD: 'Field is not valid'
            }
          },
          ECOMMERCE: {
            COMMON: {
              SELECTED_RECORDS_COUNT: 'Selected records count: ',
              ALL: 'All',
              SUSPENDED: 'Suspended',
              ACTIVE: 'Active',
              FILTER: 'Filter',
              BY_STATUS: 'by Status',
              BY_TYPE: 'by Type',
              BUSINESS: 'Business',
              INDIVIDUAL: 'Individual',
              SEARCH: 'Search',
              IN_ALL_FIELDS: 'in all fields'
            },
            ECOMMERCE: 'eCommerce',
            CUSTOMERS: {
              CUSTOMERS: 'Customers',
              CUSTOMERS_LIST: 'Customers list',
              NEW_CUSTOMER: 'New Customer',
              DELETE_CUSTOMER_SIMPLE: {
                TITLE: 'Customer Delete',
                DESCRIPTION: 'Are you sure to permanently delete this customer?',
                WAIT_DESCRIPTION: 'Customer is deleting...',
                MESSAGE: 'Customer has been deleted'
              },
              DELETE_CUSTOMER_MULTY: {
                TITLE: 'Customers Delete',
                DESCRIPTION: 'Are you sure to permanently delete selected customers?',
                WAIT_DESCRIPTION: 'Customers are deleting...',
                MESSAGE: 'Selected customers have been deleted'
              },
              UPDATE_STATUS: {
                TITLE: 'Status has been updated for selected customers',
                MESSAGE: 'Selected customers status have successfully been updated'
              },
              EDIT: {
                UPDATE_MESSAGE: 'Customer has been updated',
                ADD_MESSAGE: 'Customer has been created'
              }
            }
          }
        }
      };
      /***/
    },

    /***/
    "./src/app/shared/service/auth.interceptor.ts":
    /*!****************************************************!*\
      !*** ./src/app/shared/service/auth.interceptor.ts ***!
      \****************************************************/

    /*! exports provided: AuthInterceptor */

    /***/
    function srcAppSharedServiceAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
        return AuthInterceptor;
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

      var AuthInterceptor = /*#__PURE__*/function () {
        function AuthInterceptor() {
          _classCallCheck(this, AuthInterceptor);
        }

        _createClass(AuthInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            if (this.accessToken && !req.url.endsWith('/login')) {
              var authReq = req.clone({
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                  'Authorization': 'Bearer ' + this.accessToken
                })
              });
              return next.handle(authReq);
            } else {
              return next.handle(req);
            }
          }
        }, {
          key: "accessToken",
          get: function get() {
            var auth = localStorage.getItem("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].appVersion, "-").concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].USERDATA_KEY));
            if (!auth) return;
            var authJson = JSON.parse(auth);
            if (!authJson) return;
            return authJson.accessToken;
          }
        }]);

        return AuthInterceptor;
      }();

      AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
        return new (t || AuthInterceptor)();
      };

      AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AuthInterceptor,
        factory: AuthInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        appVersion: 'v710nextsystem',
        USERDATA_KEY: 'authf649fc9a5f55',
        apiUrl: 'http://34.232.43.97/api'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Code\gitpro\nextsys-in\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map