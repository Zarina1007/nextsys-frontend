(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-protected-media-protected-media-module"], {
    /***/
    "./src/app/modules/protected-media/protected-media-routing.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/modules/protected-media/protected-media-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: ProtectedMediaRoutingModule */

    /***/
    function srcAppModulesProtectedMediaProtectedMediaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProtectedMediaRoutingModule", function () {
        return ProtectedMediaRoutingModule;
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


      var _protected_media_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./protected-media.component */
      "./src/app/modules/protected-media/protected-media.component.ts");

      var routes = [{
        path: '',
        component: _protected_media_component__WEBPACK_IMPORTED_MODULE_2__["ProtectedMediaComponent"],
        children: [{
          path: 'protected-media',
          component: _protected_media_component__WEBPACK_IMPORTED_MODULE_2__["ProtectedMediaComponent"]
        }]
      }];

      var ProtectedMediaRoutingModule = function ProtectedMediaRoutingModule() {
        _classCallCheck(this, ProtectedMediaRoutingModule);
      };

      ProtectedMediaRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ProtectedMediaRoutingModule
      });
      ProtectedMediaRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ProtectedMediaRoutingModule_Factory(t) {
          return new (t || ProtectedMediaRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProtectedMediaRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProtectedMediaRoutingModule, [{
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
    "./src/app/modules/protected-media/protected-media.component.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/modules/protected-media/protected-media.component.ts ***!
      \**********************************************************************/

    /*! exports provided: ProtectedMediaComponent */

    /***/
    function srcAppModulesProtectedMediaProtectedMediaComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProtectedMediaComponent", function () {
        return ProtectedMediaComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ProtectedMediaComponent = /*#__PURE__*/function () {
        function ProtectedMediaComponent() {
          _classCallCheck(this, ProtectedMediaComponent);
        }

        _createClass(ProtectedMediaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProtectedMediaComponent;
      }();

      ProtectedMediaComponent.ɵfac = function ProtectedMediaComponent_Factory(t) {
        return new (t || ProtectedMediaComponent)();
      };

      ProtectedMediaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProtectedMediaComponent,
        selectors: [["app-protected-media"]],
        decls: 2,
        vars: 0,
        consts: [[1, "frame"], ["src", "https://ui.protected.media/dashboard/", "frameBorder", "0"]],
        template: function ProtectedMediaComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".frame[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n}\n.frame[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvbW9kdWxlcy9wcm90ZWN0ZWQtbWVkaWEvcHJvdGVjdGVkLW1lZGlhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiIuLi9zcmMvYXBwL21vZHVsZXMvcHJvdGVjdGVkLW1lZGlhL3Byb3RlY3RlZC1tZWRpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mcmFtZSB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgaWZyYW1lIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProtectedMediaComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-protected-media',
            templateUrl: './protected-media.component.html',
            styleUrls: ['./protected-media.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/protected-media/protected-media.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/modules/protected-media/protected-media.module.ts ***!
      \*******************************************************************/

    /*! exports provided: ProtectedMediaModule */

    /***/
    function srcAppModulesProtectedMediaProtectedMediaModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProtectedMediaModule", function () {
        return ProtectedMediaModule;
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


      var _protected_media_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./protected-media-routing.module */
      "./src/app/modules/protected-media/protected-media-routing.module.ts");
      /* harmony import */


      var _protected_media_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./protected-media.component */
      "./src/app/modules/protected-media/protected-media.component.ts");

      var ProtectedMediaModule = function ProtectedMediaModule() {
        _classCallCheck(this, ProtectedMediaModule);
      };

      ProtectedMediaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ProtectedMediaModule
      });
      ProtectedMediaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ProtectedMediaModule_Factory(t) {
          return new (t || ProtectedMediaModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _protected_media_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProtectedMediaRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProtectedMediaModule, {
          declarations: [_protected_media_component__WEBPACK_IMPORTED_MODULE_3__["ProtectedMediaComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _protected_media_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProtectedMediaRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProtectedMediaModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_protected_media_component__WEBPACK_IMPORTED_MODULE_3__["ProtectedMediaComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _protected_media_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProtectedMediaRoutingModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-protected-media-protected-media-module-es5.js.map