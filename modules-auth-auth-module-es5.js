(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-auth-auth-module"], {
    /***/
    "./src/app/modules/auth/_models/auth.model.ts":
    /*!****************************************************!*\
      !*** ./src/app/modules/auth/_models/auth.model.ts ***!
      \****************************************************/

    /*! exports provided: AuthModel */

    /***/
    function srcAppModulesAuth_modelsAuthModelTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthModel", function () {
        return AuthModel;
      });

      var AuthModel = /*#__PURE__*/function () {
        function AuthModel() {
          _classCallCheck(this, AuthModel);
        }

        _createClass(AuthModel, [{
          key: "setAuth",
          value: function setAuth(auth) {
            this.accessToken = auth.accessToken;
            this.refreshToken = auth.refreshToken;
            this.expiresIn = auth.expiresIn;
          }
        }]);

        return AuthModel;
      }();
      /***/

    },

    /***/
    "./src/app/modules/auth/_models/user.model.ts":
    /*!****************************************************!*\
      !*** ./src/app/modules/auth/_models/user.model.ts ***!
      \****************************************************/

    /*! exports provided: UserModel */

    /***/
    function srcAppModulesAuth_modelsUserModelTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserModel", function () {
        return UserModel;
      });
      /* harmony import */


      var _auth_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.model */
      "./src/app/modules/auth/_models/auth.model.ts");

      var UserModel = /*#__PURE__*/function (_auth_model__WEBPACK_) {
        _inherits(UserModel, _auth_model__WEBPACK_);

        var _super = _createSuper(UserModel);

        function UserModel() {
          _classCallCheck(this, UserModel);

          return _super.apply(this, arguments);
        }

        _createClass(UserModel, [{
          key: "setUser",
          value: function setUser(user) {
            this.id = user.id;
            this.username = user.username || '';
            this.password = user.password || '';
            this.fullname = user.fullname || '';
            this.email = user.email || '';
            this.pic = user.pic || './assets/media/users/default.jpg';
            this.roles = user.roles || [];
            this.test = ['hello', 'world'];
            this.occupation = user.occupation || '';
            this.companyName = user.companyName || '';
            this.phone = user.phone || '';
            this.address = user.address;
            this.socialNetworks = user.socialNetworks;
            this.role = 0;
            this.companies = [];
            this.tagsId = [];
            this._key = user._key;
          }
        }]);

        return UserModel;
      }(_auth_model__WEBPACK_IMPORTED_MODULE_0__["AuthModel"]);
      /***/

    },

    /***/
    "./src/app/modules/auth/auth-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/modules/auth/auth-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: AuthRoutingModule */

    /***/
    function srcAppModulesAuthAuthRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () {
        return AuthRoutingModule;
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


      var _auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth.component */
      "./src/app/modules/auth/auth.component.ts");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login/login.component */
      "./src/app/modules/auth/login/login.component.ts");
      /* harmony import */


      var _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./registration/registration.component */
      "./src/app/modules/auth/registration/registration.component.ts");
      /* harmony import */


      var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./forgot-password/forgot-password.component */
      "./src/app/modules/auth/forgot-password/forgot-password.component.ts");
      /* harmony import */


      var _logout_logout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./logout/logout.component */
      "./src/app/modules/auth/logout/logout.component.ts");

      var routes = [{
        path: '',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"],
        children: [{
          path: '',
          redirectTo: 'login',
          pathMatch: 'full'
        }, {
          path: 'login',
          component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
          data: {
            returnUrl: window.location.pathname
          }
        }, {
          path: 'registration',
          component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"]
        }, {
          path: 'forgot-password',
          component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordComponent"]
        }, {
          path: 'logout',
          component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_6__["LogoutComponent"]
        }, {
          path: '',
          redirectTo: 'login',
          pathMatch: 'full'
        }, {
          path: '**',
          redirectTo: 'login',
          pathMatch: 'full'
        }]
      }];

      var AuthRoutingModule = function AuthRoutingModule() {
        _classCallCheck(this, AuthRoutingModule);
      };

      AuthRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: AuthRoutingModule
      });
      AuthRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function AuthRoutingModule_Factory(t) {
          return new (t || AuthRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AuthRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthRoutingModule, [{
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
    "./src/app/modules/auth/auth.component.ts":
    /*!************************************************!*\
      !*** ./src/app/modules/auth/auth.component.ts ***!
      \************************************************/

    /*! exports provided: AuthComponent */

    /***/
    function srcAppModulesAuthAuthComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
        return AuthComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AuthComponent = /*#__PURE__*/function () {
        function AuthComponent() {
          _classCallCheck(this, AuthComponent);

          this.today = new Date();
        }

        _createClass(AuthComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AuthComponent;
      }();

      AuthComponent.??fac = function AuthComponent_Factory(t) {
        return new (t || AuthComponent)();
      };

      AuthComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AuthComponent,
        selectors: [["app-auth"]],
        decls: 21,
        vars: 0,
        consts: [["id", "kt_login_wrapper", 1, "d-flex", "flex-column", "flex-root", "h-100"], ["id", "kt_login", 1, "login", "login-1", "login-signin-on", "d-flex", "flex-column", "flex-lg-row", "flex-column-fluid", "bg-white"], [1, "login-aside", "d-flex", "flex-column", "flex-row-auto", 2, "background-color", "#1b3665"], [1, "d-flex", "flex-column-auto", "flex-column", "pt-lg-40", "pt-15"], ["href", "#", 1, "text-center", "mb-10"], ["src", "https://nextsys.io/wp-content/uploads/2021/01/logo-NextSys2-symbol@2x.png", "alt", "", 1, "max-h-70px"], [1, "font-weight-bolder", "text-center", "font-size-h4", "font-size-h1-lg", 2, "color", "#ffffff"], [1, "aside-img", "d-flex", "flex-row-fluid", "bgi-no-repeat", "bgi-position-y-bottom", "bgi-position-x-center"], [1, "login-content", "flex-row-fluid", "d-flex", "flex-column", "justify-content-center", "position-relative", "overflow-hidden", "p-7", "mx-auto"], [1, "d-flex", "flex-column-fluid", "flex-center"], [1, "d-flex", "justify-content-lg-start", "justify-content-center", "align-items-end", "py-7", "py-lg-0"], ["href", "#", 1, "text-primary", "font-weight-bolder", "font-size-h5"], ["href", "#", 1, "text-primary", "ml-10", "font-weight-bolder", "font-size-h5"]],
        template: function AuthComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Platform NextSys");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " The Ultimate Traffic Platform ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Terms");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Plans");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Contact Us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: [".login.login-1[_ngcontent-%COMP%]   .login-aside[_ngcontent-%COMP%]   .aside-img[_ngcontent-%COMP%] {\n  min-height: 450px;\n}\n.login.login-1[_ngcontent-%COMP%]   .login-signin[_ngcontent-%COMP%], .login.login-1[_ngcontent-%COMP%]   .login-signup[_ngcontent-%COMP%], .login.login-1[_ngcontent-%COMP%]   .login-forgot[_ngcontent-%COMP%] {\n  display: none;\n}\n.login.login-1.login-signin-on[_ngcontent-%COMP%]   .login-signup[_ngcontent-%COMP%] {\n  display: none;\n}\n.login.login-1.login-signin-on[_ngcontent-%COMP%]   .login-signin[_ngcontent-%COMP%] {\n  display: block;\n}\n.login.login-1.login-signin-on[_ngcontent-%COMP%]   .login-forgot[_ngcontent-%COMP%] {\n  display: none;\n}\n.login.login-1.login-signup-on[_ngcontent-%COMP%]   .login-signup[_ngcontent-%COMP%] {\n  display: block;\n}\n.login.login-1.login-signup-on[_ngcontent-%COMP%]   .login-signin[_ngcontent-%COMP%] {\n  display: none;\n}\n.login.login-1.login-signup-on[_ngcontent-%COMP%]   .login-forgot[_ngcontent-%COMP%] {\n  display: none;\n}\n.login.login-1.login-forgot-on[_ngcontent-%COMP%]   .login-signup[_ngcontent-%COMP%] {\n  display: none;\n}\n.login.login-1.login-forgot-on[_ngcontent-%COMP%]   .login-signin[_ngcontent-%COMP%] {\n  display: none;\n}\n.login.login-1.login-forgot-on[_ngcontent-%COMP%]   .login-forgot[_ngcontent-%COMP%] {\n  display: block;\n}\n@media (min-width: 992px) {\n  .login.login-1[_ngcontent-%COMP%]   .login-aside[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 600px;\n  }\n  .login.login-1[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 500px;\n  }\n  .login.login-1[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 450px;\n  }\n}\n@media (min-width: 992px) and (max-width: 1399.98px) {\n  .login.login-1[_ngcontent-%COMP%]   .login-aside[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 450px;\n  }\n}\n@media (max-width: 991.98px) {\n  .login.login-1[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 400px;\n  }\n}\n@media (max-width: 575.98px) {\n  .login.login-1[_ngcontent-%COMP%]   .aside-img[_ngcontent-%COMP%] {\n    min-height: 300px !important;\n    background-size: 400px;\n  }\n  .login.login-1[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n  }\n}\n[_nghost-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Fzcy9wYWdlcy9sb2dpbi9sb2dpbi0xLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIiwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fYnJlYWtwb2ludHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXUTtFQUNJLGlCQUFBO0FDVlo7QURlSTs7O0VBR0ksYUFBQTtBQ2JSO0FEaUJRO0VBQ0ksYUFBQTtBQ2ZaO0FEa0JRO0VBQ0ksY0FBQTtBQ2hCWjtBRG1CUTtFQUNJLGFBQUE7QUNqQlo7QURzQlE7RUFDSSxjQUFBO0FDcEJaO0FEdUJRO0VBQ0ksYUFBQTtBQ3JCWjtBRHdCUTtFQUNJLGFBQUE7QUN0Qlo7QUQyQlE7RUFDSSxhQUFBO0FDekJaO0FENEJRO0VBQ0ksYUFBQTtBQzFCWjtBRDZCUTtFQUNJLGNBQUE7QUMzQlo7QUMwQkk7RUZTSTtJQUNJLFdBQUE7SUFDQSxnQkFBQTtFQy9CVjtFRGtDTTtJQUNJLFdBQUE7SUFDQSxnQkFBQTtFQ2hDVjtFRGtDVTtJQUNJLFdBQUE7SUFDQSxnQkFBQTtFQ2hDZDtBQUNGO0FDdUNJO0VGQ0k7SUFDSSxXQUFBO0lBQ0EsZ0JBQUE7RUNyQ1Y7QUFDRjtBQ2tCSTtFRjJCUTtJQUNJLFdBQUE7SUFDQSxnQkFBQTtFQzFDZDtBQUNGO0FDWUk7RUZzQ0k7SUFDSSw0QkFBQTtJQUNBLHNCQUFBO0VDL0NWO0VEbURVO0lBQ0ksV0FBQTtJQUNBLGVBQUE7RUNqRGQ7QUFDRjtBQXJFQTtFQUNFLFlBQUE7QUF1RUYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vXHJcbi8vIExvZ2luIDFcclxuLy8gUGFnZXMgU0FTUyBmaWxlcyBhcmUgY29tcGlsZWQgaW50byBzZXBhcmF0ZSBjc3MgZmlsZXNcclxuLy9cclxuXHJcblxyXG4vLyBJbml0aWFsaXphdGlvbiBvZiBnbG9iYWwgdmFyaWFibGVzLCBtaXhpbnMgYW5kIGZ1bmN0aW9uc1xyXG5AaW1wb3J0IFwiLi4vLi4vaW5pdFwiO1xyXG5cclxuLmxvZ2luLmxvZ2luLTEge1xyXG4gICAgLmxvZ2luLWFzaWRlIHtcclxuICAgICAgICAuYXNpZGUtaW1nIHtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogNDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvcm0gbW9kZXNcclxuICAgIC5sb2dpbi1zaWduaW4sXHJcbiAgICAubG9naW4tc2lnbnVwLFxyXG4gICAgLmxvZ2luLWZvcmdvdCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAmLmxvZ2luLXNpZ25pbi1vbiB7XHJcbiAgICAgICAgLmxvZ2luLXNpZ251cCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubG9naW4tc2lnbmluIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubG9naW4tZm9yZ290IHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5sb2dpbi1zaWdudXAtb24ge1xyXG4gICAgICAgIC5sb2dpbi1zaWdudXAge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2dpbi1zaWduaW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxvZ2luLWZvcmdvdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYubG9naW4tZm9yZ290LW9uIHtcclxuICAgICAgICAubG9naW4tc2lnbnVwIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2dpbi1zaWduaW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxvZ2luLWZvcmdvdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gRGVza3RvcCB2aWV3XHJcbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobGcpIHtcclxuICAgIC5sb2dpbi5sb2dpbi0xIHtcclxuICAgICAgICAubG9naW4tYXNpZGUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2dpbi1jb250ZW50IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XHJcblxyXG4gICAgICAgICAgICAubG9naW4tZm9ybSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNDUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFRhYmxldCBhbmQgTW9iaWxlIG1vZGVcclxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKGxnLCB4bCkge1xyXG4gICAgLmxvZ2luLmxvZ2luLTEge1xyXG4gICAgICAgIC5sb2dpbi1hc2lkZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gVGFibGV0IG1vZGVcclxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKG1kKSB7XHJcbiAgICAubG9naW4ubG9naW4tMSB7XHJcbiAgICAgICAgLmxvZ2luLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAubG9naW4tZm9ybSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIE1vYmlsZSBtb2RlXHJcbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bih4cykge1xyXG4gICAgLmxvZ2luLmxvZ2luLTEge1xyXG4gICAgICAgIC5hc2lkZS1pbWcge1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDQwMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxvZ2luLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAubG9naW4tZm9ybSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIubG9naW4ubG9naW4tMSAubG9naW4tYXNpZGUgLmFzaWRlLWltZyB7XG4gIG1pbi1oZWlnaHQ6IDQ1MHB4O1xufVxuLmxvZ2luLmxvZ2luLTEgLmxvZ2luLXNpZ25pbixcbi5sb2dpbi5sb2dpbi0xIC5sb2dpbi1zaWdudXAsXG4ubG9naW4ubG9naW4tMSAubG9naW4tZm9yZ290IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5sb2dpbi5sb2dpbi0xLmxvZ2luLXNpZ25pbi1vbiAubG9naW4tc2lnbnVwIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5sb2dpbi5sb2dpbi0xLmxvZ2luLXNpZ25pbi1vbiAubG9naW4tc2lnbmluIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubG9naW4ubG9naW4tMS5sb2dpbi1zaWduaW4tb24gLmxvZ2luLWZvcmdvdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubG9naW4ubG9naW4tMS5sb2dpbi1zaWdudXAtb24gLmxvZ2luLXNpZ251cCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmxvZ2luLmxvZ2luLTEubG9naW4tc2lnbnVwLW9uIC5sb2dpbi1zaWduaW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmxvZ2luLmxvZ2luLTEubG9naW4tc2lnbnVwLW9uIC5sb2dpbi1mb3Jnb3Qge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmxvZ2luLmxvZ2luLTEubG9naW4tZm9yZ290LW9uIC5sb2dpbi1zaWdudXAge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmxvZ2luLmxvZ2luLTEubG9naW4tZm9yZ290LW9uIC5sb2dpbi1zaWduaW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmxvZ2luLmxvZ2luLTEubG9naW4tZm9yZ290LW9uIC5sb2dpbi1mb3Jnb3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5sb2dpbi5sb2dpbi0xIC5sb2dpbi1hc2lkZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgfVxuICAubG9naW4ubG9naW4tMSAubG9naW4tY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgfVxuICAubG9naW4ubG9naW4tMSAubG9naW4tY29udGVudCAubG9naW4tZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA0NTBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTM5OS45OHB4KSB7XG4gIC5sb2dpbi5sb2dpbi0xIC5sb2dpbi1hc2lkZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA0NTBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gIC5sb2dpbi5sb2dpbi0xIC5sb2dpbi1jb250ZW50IC5sb2dpbi1mb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcbiAgLmxvZ2luLmxvZ2luLTEgLmFzaWRlLWltZyB7XG4gICAgbWluLWhlaWdodDogMzAwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQwMHB4O1xuICB9XG4gIC5sb2dpbi5sb2dpbi0xIC5sb2dpbi1jb250ZW50IC5sb2dpbi1mb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbn1cbjpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufSIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-auth',
            templateUrl: './auth.component.html',
            styleUrls: ['./auth.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/auth/auth.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/modules/auth/auth.module.ts ***!
      \*********************************************/

    /*! exports provided: AuthModule */

    /***/
    function srcAppModulesAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
        return AuthModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./auth-routing.module */
      "./src/app/modules/auth/auth-routing.module.ts");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login/login.component */
      "./src/app/modules/auth/login/login.component.ts");
      /* harmony import */


      var _registration_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./registration/registration.component */
      "./src/app/modules/auth/registration/registration.component.ts");
      /* harmony import */


      var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./forgot-password/forgot-password.component */
      "./src/app/modules/auth/forgot-password/forgot-password.component.ts");
      /* harmony import */


      var _logout_logout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./logout/logout.component */
      "./src/app/modules/auth/logout/logout.component.ts");
      /* harmony import */


      var _auth_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./auth.component */
      "./src/app/modules/auth/auth.component.ts");
      /* harmony import */


      var _i18n_translation_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../i18n/translation.module */
      "./src/app/modules/i18n/translation.module.ts");

      var AuthModule = function AuthModule() {
        _classCallCheck(this, AuthModule);
      };

      AuthModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: AuthModule
      });
      AuthModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function AuthModule_Factory(t) {
          return new (t || AuthModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _i18n_translation_module__WEBPACK_IMPORTED_MODULE_10__["TranslationModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AuthModule, {
          declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_8__["LogoutComponent"], _auth_component__WEBPACK_IMPORTED_MODULE_9__["AuthComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _i18n_translation_module__WEBPACK_IMPORTED_MODULE_10__["TranslationModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_8__["LogoutComponent"], _auth_component__WEBPACK_IMPORTED_MODULE_9__["AuthComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _i18n_translation_module__WEBPACK_IMPORTED_MODULE_10__["TranslationModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/auth/forgot-password/forgot-password.component.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/modules/auth/forgot-password/forgot-password.component.ts ***!
      \***************************************************************************/

    /*! exports provided: ForgotPasswordComponent */

    /***/
    function srcAppModulesAuthForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
        return ForgotPasswordComponent;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_services/auth.service */
      "./src/app/modules/auth/_services/auth.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      function ForgotPasswordComponent_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "The email detail is incorrect");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }
      }

      function ForgotPasswordComponent_ng_container_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }
      }

      function ForgotPasswordComponent_ng_container_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h3", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Email is correct!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Message with 'recovery' instruction");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " has been sent");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Ok, got it! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }
      }

      function ForgotPasswordComponent_ng_template_23_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var message_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().message;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", message_r6, " ");
        }
      }

      function ForgotPasswordComponent_ng_template_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, ForgotPasswordComponent_ng_template_23_ng_container_0_Template, 4, 1, "ng-container", 5);
        }

        if (rf & 2) {
          var control_r5 = ctx.control;
          var validation_r7 = ctx.validation;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", control_r5.hasError(validation_r7) && (control_r5.dirty || control_r5.touched));
        }
      }

      var _c0 = function _c0(a0) {
        return {
          display: a0
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "is-invalid": a0
        };
      };

      var _c2 = function _c2(a2) {
        return {
          validation: "required",
          message: "Email is required",
          control: a2
        };
      };

      var _c3 = function _c3(a2) {
        return {
          validation: "email",
          message: "Email is invalid",
          control: a2
        };
      };

      var _c4 = function _c4(a2) {
        return {
          validation: "minLength",
          message: "Email should have at least 3 symbols",
          control: a2
        };
      };

      var _c5 = function _c5(a2) {
        return {
          validation: "maxLength",
          message: "Email should have maximum 360 symbols",
          control: a2
        };
      };

      var ErrorStates;

      (function (ErrorStates) {
        ErrorStates[ErrorStates["NotSubmitted"] = 0] = "NotSubmitted";
        ErrorStates[ErrorStates["HasError"] = 1] = "HasError";
        ErrorStates[ErrorStates["NoError"] = 2] = "NoError";
      })(ErrorStates || (ErrorStates = {}));

      var ForgotPasswordComponent = /*#__PURE__*/function () {
        function ForgotPasswordComponent(fb, authService) {
          _classCallCheck(this, ForgotPasswordComponent);

          this.fb = fb;
          this.authService = authService;
          this.errorState = ErrorStates.NotSubmitted;
          this.errorStates = ErrorStates; // private fields

          this.unsubscribe = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

          this.isLoading$ = this.authService.isLoading$;
        }

        _createClass(ForgotPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initForm();
          } // convenience getter for easy access to form fields

        }, {
          key: "initForm",
          value: function initForm() {
            this.forgotPasswordForm = this.fb.group({
              email: ['admin@demo.com', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(320)])]
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this = this;

            this.errorState = ErrorStates.NotSubmitted;
            var forgotPasswordSubscr = this.authService.forgotPassword(this.f.email.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (result) {
              _this.errorState = result ? ErrorStates.NoError : ErrorStates.HasError;
            });
            this.unsubscribe.push(forgotPasswordSubscr);
          }
        }, {
          key: "f",
          get: function get() {
            return this.forgotPasswordForm.controls;
          }
        }]);

        return ForgotPasswordComponent;
      }();

      ForgotPasswordComponent.??fac = function ForgotPasswordComponent_Factory(t) {
        return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
      };

      ForgotPasswordComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ForgotPasswordComponent,
        selectors: [["app-forgot-password"]],
        decls: 25,
        vars: 28,
        consts: [[1, "login-form", "login-forgot"], ["novalidate", "novalidate", "id", "kt_login_forgot_form", 1, "form", "fv-plugins-bootstrap", "fv-plugins-framework", 3, "formGroup", "ngStyle", "ngSubmit"], [1, "pb-13", "pt-lg-0", "pt-5"], [1, "font-weight-bolder", "text-dark", "font-size-h4", "font-size-h1-lg"], [1, "text-muted", "font-weight-bold", "font-size-h4"], [4, "ngIf"], [1, "form-group", "fv-plugins-icon-container", "has-danger"], ["type", "email", "formControlName", "email", "placeholder", "Email", "name", "email", "autocomplete", "off", 1, "form-control", "form-control-solid", "h-auto", "py-7", "px-6", "rounded-lg", "font-size-h6", 3, "ngClass"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "form-group", "d-flex", "flex-wrap", "pb-lg-0"], ["type", "submit", "id", "kt_login_forgot_submit", 1, "btn", "btn-primary", "font-weight-bolder", "font-size-h6", "px-8", "py-4", "my-3", "mr-4"], ["routerLink", "/auth/login", "id", "kt_login_forgot_cancel", 1, "btn", "btn-light-primary", "font-weight-bolder", "font-size-h6", "px-8", "py-4", "my-3"], ["formError", ""], [1, "mb-10", "alert", "alert-custom", "alert-light-danger", "alert-dismissible"], [1, "alert-text"], [1, "spinner", "spinner-primary", "ml-5"], [1, "card", "card-custom", "bgi-no-repeat", "gutter-b", 2, "height", "175px", "background-color", "#4ab58e", "background-position", "calc(100% + 1rem) bottom", "background-size", "25% auto", "background-image", "url(assets/media/svg/humans/custom-1.svg)"], [1, "card-body", "d-flex", "align-items-center"], [1, "py-2"], [1, "text-white", "font-weight-bolder", "mb-3"], [1, "text-white", "font-size-lg"], ["routerLink", "/auth/login", 1, "swal2-confirm", "btn", "font-weight-bold", "btn-light-primary"], [1, "fv-plugins-message-container"], [1, "fv-help-block"]],
        template: function ForgotPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_1_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " Forgotten Password ? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " Enter your email to reset your password ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, ForgotPasswordComponent_ng_container_7_Template, 4, 0, "ng-container", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](10, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](11, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](12, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](13, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " Submit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " Cancel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, ForgotPasswordComponent_ng_container_19_Template, 2, 0, "ng-container", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](20, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, ForgotPasswordComponent_ng_container_22_Template, 13, 0, "ng-container", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, ForgotPasswordComponent_ng_template_23_Template, 1, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
          }

          if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.forgotPasswordForm)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](16, _c0, ctx.errorState === ctx.errorStates.NoError ? "none" : "block"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.errorState === ctx.errorStates.HasError);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](18, _c1, ctx.forgotPasswordForm.controls["email"].invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](20, _c2, ctx.forgotPasswordForm.controls["email"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](22, _c3, ctx.forgotPasswordForm.controls["email"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](24, _c4, ctx.forgotPasswordForm.controls["email"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](26, _c5, ctx.forgotPasswordForm.controls["email"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](20, 14, ctx.isLoading$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.errorState === ctx.errorStates.NoError);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
        styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n@media (min-width: 992px) {\n  [_nghost-%COMP%]   .login-form[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 450px;\n  }\n  [_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdXRoL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7QUFBRTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0VBRUo7RUFBSTtJQUNFLFdBQUE7RUFFTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hdXRoL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAubG9naW4tZm9ybSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG5cclxuICAgICAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ForgotPasswordComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-forgot-password',
            templateUrl: './forgot-password.component.html',
            styleUrls: ['./forgot-password.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/auth/login/login.component.ts":
    /*!*******************************************************!*\
      !*** ./src/app/modules/auth/login/login.component.ts ***!
      \*******************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function srcAppModulesAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_services/auth.service */
      "./src/app/modules/auth/_services/auth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      function LoginComponent_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Use account ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " and password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " to continue. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.defaultAuth.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.defaultAuth.password);
        }
      }

      function LoginComponent_ng_container_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "The login details are incorrect");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }
      }

      function LoginComponent_ng_container_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }
      }

      function LoginComponent_ng_template_39_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var message_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().message;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", message_r6, " ");
        }
      }

      function LoginComponent_ng_template_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, LoginComponent_ng_template_39_ng_container_0_Template, 4, 1, "ng-container", 6);
        }

        if (rf & 2) {
          var control_r5 = ctx.control;
          var validation_r7 = ctx.validation;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", control_r5.hasError(validation_r7) && (control_r5.dirty || control_r5.touched));
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var _c1 = function _c1(a2) {
        return {
          validation: "required",
          message: "Email is required",
          control: a2
        };
      };

      var _c2 = function _c2(a2) {
        return {
          validation: "email",
          message: "Email is invalid",
          control: a2
        };
      };

      var _c3 = function _c3(a2) {
        return {
          validation: "minLength",
          message: "Email should have at least 3 symbols",
          control: a2
        };
      };

      var _c4 = function _c4(a2) {
        return {
          validation: "maxLength",
          message: "Email should have maximum 360 symbols",
          control: a2
        };
      };

      var _c5 = function _c5(a2) {
        return {
          validation: "required",
          message: "Password is required",
          control: a2
        };
      };

      var _c6 = function _c6(a2) {
        return {
          validation: "minlength",
          message: "Password should have at least 3 symbols",
          control: a2
        };
      };

      var _c7 = function _c7(a2) {
        return {
          validation: "maxLength",
          message: "Password should have maximum 100 symbols",
          control: a2
        };
      };

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(fb, authService, route, router) {
          _classCallCheck(this, LoginComponent);

          this.fb = fb;
          this.authService = authService;
          this.route = route;
          this.router = router; // KeenThemes mock, change it to:
          // defaultAuth = {
          //   email: '',
          //   password: '',
          // };

          this.defaultAuth = {
            email: 'admin@demo.com',
            password: 'demo'
          }; // private fields

          this.unsubscribe = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

          this.isLoading$ = this.authService.isLoading$; // redirect to home if already logged in

          if (this.authService.currentUserValue) {
            this.router.navigate(['/']);
          }
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initForm(); // get return url from route parameters or default to '/'

            this.returnUrl = this.route.snapshot.queryParams['returnUrl'.toString()] || '/';
          } // convenience getter for easy access to form fields

        }, {
          key: "initForm",
          value: function initForm() {
            this.loginForm = this.fb.group({
              email: [this.defaultAuth.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(320)])],
              password: [this.defaultAuth.password, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)])]
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this2 = this;

            this.hasError = false;
            var loginSubscr = this.authService.login(this.f.email.value, this.f.password.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (user) {
              if (user) {
                _this2.router.navigate([_this2.returnUrl]);
              } else {
                _this2.hasError = true;
              }
            });
            this.unsubscribe.push(loginSubscr);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unsubscribe.forEach(function (sb) {
              return sb.unsubscribe();
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.loginForm.controls;
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.??fac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 41,
        vars: 44,
        consts: [[1, "login-form", "login-signin"], ["novalidate", "novalidate", "id", "kt_login_signin_form", 1, "form", 3, "formGroup", "ngSubmit"], [1, "pb-13", "pt-lg-0", "pt-5"], [1, "font-weight-bolder", "text-dark", "font-size-h4", "font-size-h1-lg"], [1, "text-muted", "font-weight-bold", "font-size-h4"], ["routerLink", "/auth/registration", "id", "kt_login_signup", 1, "text-primary", "font-weight-bolder"], [4, "ngIf"], [1, "form-group"], [1, "font-size-h6", "font-weight-bolder", "text-dark"], ["type", "email", "name", "email", "formControlName", "email", "autocomplete", "off", 1, "form-control", "form-control-solid", "h-auto", "py-7", "px-6", "rounded-lg", 3, "ngClass"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "d-flex", "justify-content-between", "mt-n5"], [1, "font-size-h6", "font-weight-bolder", "text-dark", "pt-5"], ["routerLink", "/auth/forgot-password", "id", "kt_login_forgot", 1, "text-primary", "font-size-h6", "font-weight-bolder", "text-hover-primary", "pt-5"], ["type", "password", "name", "password", "autocomplete", "off", "formControlName", "password", 1, "form-control", "form-control-solid", "h-auto", "py-7", "px-6", "rounded-lg", 3, "ngClass"], [1, "pb-lg-0", "pb-5"], ["type", "submit", "id", "kt_login_signin_submit", 1, "btn", "btn-primary", "font-weight-bolder", "font-size-h6", "px-8", "py-4", "my-3", "mr-3", 3, "disabled"], ["type", "button", 1, "btn", "btn-light-primary", "font-weight-bolder", "px-8", "py-4", "my-3", "font-size-lg"], [1, "svg-icon", "svg-icon-md"], ["src", "./assets/media/svg/social-icons/google.svg"], ["formError", ""], [1, "mb-10", "alert", "alert-custom", "alert-light-info", "alert-dismissible"], [1, "alert-text"], [1, "mb-10", "alert", "alert-custom", "alert-light-danger", "alert-dismissible"], [1, "spinner", "spinner-primary", "ml-5"], [1, "fv-plugins-message-container"], [1, "fv-help-block"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_1_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " Welcome to NextSys ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "New Here? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](9, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, LoginComponent_ng_container_10_Template, 10, 2, "ng-container", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, LoginComponent_ng_container_11_Template, 4, 0, "ng-container", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](16, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](17, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](18, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](19, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Forgot Password ? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](27, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](28, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](29, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, " Sign In ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, " Sign in with Google ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](37, LoginComponent_ng_container_37_Template, 2, 0, "ng-container", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](38, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](39, LoginComponent_ng_template_39_Template, 1, 1, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
          }

          if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.loginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](9, 22, "AUTH.GENERAL.SIGNUP_BUTTON"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.hasError);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.hasError);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](26, _c0, ctx.loginForm.controls["email"].invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](28, _c1, ctx.loginForm.controls["email"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](30, _c2, ctx.loginForm.controls["email"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](32, _c3, ctx.loginForm.controls["email"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](34, _c4, ctx.loginForm.controls["email"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](36, _c0, ctx.loginForm.controls["password"].invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](38, _c5, ctx.loginForm.controls["password"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](40, _c6, ctx.loginForm.controls["password"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](42, _c7, ctx.loginForm.controls["password"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.loginForm.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](38, 24, ctx.isLoading$));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgTemplateOutlet"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
        styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n@media (min-width: 992px) {\n  [_nghost-%COMP%]   .login-form[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 450px;\n  }\n  [_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGO0FBQUU7RUFDRTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQUVKO0VBQUk7SUFDRSxXQUFBO0VBRU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5sb2dpbi1mb3JtIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1heC13aWR0aDogNDUwcHg7XHJcblxyXG4gICAgICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/auth/logout/logout.component.ts":
    /*!*********************************************************!*\
      !*** ./src/app/modules/auth/logout/logout.component.ts ***!
      \*********************************************************/

    /*! exports provided: LogoutComponent */

    /***/
    function srcAppModulesAuthLogoutLogoutComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () {
        return LogoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_services/auth.service */
      "./src/app/modules/auth/_services/auth.service.ts");

      var LogoutComponent = /*#__PURE__*/function () {
        function LogoutComponent(authService) {
          _classCallCheck(this, LogoutComponent);

          this.authService = authService;
          this.authService.logout();
        }

        _createClass(LogoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LogoutComponent;
      }();

      LogoutComponent.??fac = function LogoutComponent_Factory(t) {
        return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
      };

      LogoutComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: LogoutComponent,
        selectors: [["app-logout"]],
        decls: 2,
        vars: 0,
        template: function LogoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "logout works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LogoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-logout',
            templateUrl: './logout.component.html',
            styleUrls: ['./logout.component.scss']
          }]
        }], function () {
          return [{
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/auth/registration/registration.component.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/modules/auth/registration/registration.component.ts ***!
      \*********************************************************************/

    /*! exports provided: RegistrationComponent */

    /***/
    function srcAppModulesAuthRegistrationRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function () {
        return RegistrationComponent;
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


      var _confirm_password_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./confirm-password.validator */
      "./src/app/modules/auth/registration/confirm-password.validator.ts");
      /* harmony import */


      var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_models/user.model */
      "./src/app/modules/auth/_models/user.model.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../_services/auth.service */
      "./src/app/modules/auth/_services/auth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function RegistrationComponent_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "The registration details are incorrect");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }
      }

      function RegistrationComponent_ng_container_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " 'Passsword' and 'Confirm Password' didn't match. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }
      }

      function RegistrationComponent_ng_container_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }
      }

      function RegistrationComponent_ng_template_53_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var message_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().message;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", message_r6, " ");
        }
      }

      function RegistrationComponent_ng_template_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, RegistrationComponent_ng_template_53_ng_container_0_Template, 4, 1, "ng-container", 5);
        }

        if (rf & 2) {
          var control_r5 = ctx.control;
          var validation_r7 = ctx.validation;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", control_r5.hasError(validation_r7) && (control_r5.dirty || control_r5.touched));
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var _c1 = function _c1(a2) {
        return {
          validation: "required",
          message: "Fullname is required",
          control: a2
        };
      };

      var _c2 = function _c2(a2) {
        return {
          validation: "minlength",
          message: "Fullname should have at least 3 symbols",
          control: a2
        };
      };

      var _c3 = function _c3(a2) {
        return {
          validation: "maxLength",
          message: "Fullname should have maximum 100 symbols",
          control: a2
        };
      };

      var _c4 = function _c4(a2) {
        return {
          validation: "required",
          message: "Email is required",
          control: a2
        };
      };

      var _c5 = function _c5(a2) {
        return {
          validation: "email",
          message: "Email is invalid",
          control: a2
        };
      };

      var _c6 = function _c6(a2) {
        return {
          validation: "minlength",
          message: "Email should have at least 3 symbols",
          control: a2
        };
      };

      var _c7 = function _c7(a2) {
        return {
          validation: "maxLength",
          message: "Email should have maximum 360 symbols",
          control: a2
        };
      };

      var _c8 = function _c8(a2) {
        return {
          validation: "required",
          message: "Password is required",
          control: a2
        };
      };

      var _c9 = function _c9(a2) {
        return {
          validation: "minlength",
          message: "Password should have at least 3 symbols",
          control: a2
        };
      };

      var _c10 = function _c10(a2) {
        return {
          validation: "maxLength",
          message: "Password should have maximum 100 symbols",
          control: a2
        };
      };

      var _c11 = function _c11(a2) {
        return {
          validation: "required",
          message: "Confirm Password is required",
          control: a2
        };
      };

      var _c12 = function _c12(a2) {
        return {
          validation: "minlength",
          message: "Confirm Password should have at least 3 symbols",
          control: a2
        };
      };

      var _c13 = function _c13(a2) {
        return {
          validation: "maxLength",
          message: "Confirm Password should have maximum 100 symbols",
          control: a2
        };
      };

      var RegistrationComponent = /*#__PURE__*/function () {
        function RegistrationComponent(fb, authService, router) {
          _classCallCheck(this, RegistrationComponent);

          this.fb = fb;
          this.authService = authService;
          this.router = router; // private fields

          this.unsubscribe = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

          this.isLoading$ = this.authService.isLoading$; // redirect to home if already logged in

          if (this.authService.currentUserValue) {
            this.router.navigate(['/']);
          }
        }

        _createClass(RegistrationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initForm();
          } // convenience getter for easy access to form fields

        }, {
          key: "initForm",
          value: function initForm() {
            this.registrationForm = this.fb.group({
              fullname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)])],
              email: ['email@example.com', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(320)])],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)])],
              cPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)])],
              agree: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])]
            }, {
              validator: _confirm_password_validator__WEBPACK_IMPORTED_MODULE_2__["ConfirmPasswordValidator"].MatchPassword
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this3 = this;

            this.hasError = false;
            var result = {};
            Object.keys(this.f).forEach(function (key) {
              result[key] = _this3.f[key].value;
            });
            var newUser = new _models_user_model__WEBPACK_IMPORTED_MODULE_3__["UserModel"]();
            newUser.setUser(result);
            var registrationSubscr = this.authService.registration(newUser).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (user) {
              if (user) {
                _this3.router.navigate(['/']);
              } else {
                _this3.hasError = true;
              }
            });
            this.unsubscribe.push(registrationSubscr);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unsubscribe.forEach(function (sb) {
              return sb.unsubscribe();
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.registrationForm.controls;
          }
        }]);

        return RegistrationComponent;
      }();

      RegistrationComponent.??fac = function RegistrationComponent_Factory(t) {
        return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
      };

      RegistrationComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: RegistrationComponent,
        selectors: [["app-registration"]],
        decls: 55,
        vars: 71,
        consts: [[1, "login-form", "login-signup"], ["novalidate", "novalidate", "id", "kt_login_signup_form", 1, "form", 3, "formGroup", "ngSubmit"], [1, "pb-13", "pt-lg-0", "pt-5"], [1, "font-weight-bolder", "text-dark", "font-size-h4", "font-size-h1-lg"], [1, "text-muted", "font-weight-bold", "font-size-h4"], [4, "ngIf"], [1, "form-group"], [1, "font-size-h6", "font-weight-bolder", "text-dark"], ["type", "text", "name", "fullname", "formControlName", "fullname", "placeholder", "Fullname", "autocomplete", "off", 1, "form-control", "form-control-solid", "h-auto", "py-7", "px-6", "rounded-lg", "font-size-h6", 3, "ngClass"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "email", "placeholder", "Email", "name", "email", "formControlName", "email", "autocomplete", "off", 1, "form-control", "form-control-solid", "h-auto", "py-7", "px-6", "rounded-lg", "font-size-h6", 3, "ngClass"], [1, "font-size-h6", "font-weight-bolder", "text-dark", "pt-5"], ["type", "password", "placeholder", "Password", "name", "password", "formControlName", "password", "autocomplete", "off", 1, "form-control", "form-control-solid", "h-auto", "py-7", "px-6", "rounded-lg", "font-size-h6", 3, "ngClass"], ["type", "password", "placeholder", "Confirm password", "name", "cPassword", "autocomplete", "off", "formControlName", "cPassword", 1, "form-control", "form-control-solid", "h-auto", "py-7", "px-6", "rounded-lg", "font-size-h6", 3, "ngClass"], [1, "checkbox", "mb-0"], ["type", "checkbox", "formControlName", "agree", "name", "agree"], ["href", "https://brandclick.com/terms-of-service/", "target", "_blank"], [1, "form-group", "d-flex", "flex-wrap", "pb-lg-0", "pb-3"], ["type", "submit", "id", "kt_login_signup_submit", 1, "btn", "btn-primary", "font-weight-bolder", "font-size-h6", "px-8", "py-4", "my-3", "mr-4", 3, "disabled"], ["routerLink", "/auth/login", "type", "button", "id", "kt_login_signup_cancel", 1, "btn", "btn-light-primary", "font-weight-bolder", "font-size-h6", "px-8", "py-4", "my-3"], ["formError", ""], [1, "mb-10", "alert", "alert-custom", "alert-light-danger", "alert-dismissible"], [1, "alert-text"], [1, "fv-plugins-message-container"], [1, "fv-help-block"], [1, "spinner", "spinner-primary", "ml-5"]],
        template: function RegistrationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function RegistrationComponent_Template_form_ngSubmit_1_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " Sign Up ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " Enter your details to create your account ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, RegistrationComponent_ng_container_7_Template, 4, 0, "ng-container", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Fullname");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](12, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](13, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](14, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](19, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](20, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](21, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](22, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](27, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](28, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](29, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Confirm Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](34, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](35, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](36, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](37, RegistrationComponent_ng_container_37_Template, 4, 0, "ng-container", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "\xA0I Agree the\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "terms and conditions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, ".\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, " Submit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, " Cancel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](51, RegistrationComponent_ng_container_51_Template, 2, 0, "ng-container", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](52, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](53, RegistrationComponent_ng_template_53_Template, 1, 1, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
          }

          if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.registrationForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.hasError);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](37, _c0, ctx.registrationForm.controls["fullname"].invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](39, _c1, ctx.registrationForm.controls["fullname"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](41, _c2, ctx.registrationForm.controls["fullname"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](43, _c3, ctx.registrationForm.controls["fullname"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](45, _c0, ctx.registrationForm.controls["email"].invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](47, _c4, ctx.registrationForm.controls["email"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](49, _c5, ctx.registrationForm.controls["email"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](51, _c6, ctx.registrationForm.controls["email"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](53, _c7, ctx.registrationForm.controls["email"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](55, _c0, ctx.registrationForm.controls["password"].invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](57, _c8, ctx.registrationForm.controls["password"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](59, _c9, ctx.registrationForm.controls["password"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](61, _c10, ctx.registrationForm.controls["password"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](63, _c0, ctx.registrationForm.controls["cPassword"].invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](65, _c11, ctx.registrationForm.controls["cPassword"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](67, _c12, ctx.registrationForm.controls["cPassword"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](69, _c13, ctx.registrationForm.controls["cPassword"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.registrationForm.controls["cPassword"].errors && ctx.registrationForm.controls["cPassword"].errors.ConfirmPassword);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.registrationForm.invalid || !ctx.registrationForm.controls["agree"].value);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](52, 35, ctx.isLoading$));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
        styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n@media (min-width: 992px) {\n  [_nghost-%COMP%]   .login-form[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 450px;\n  }\n  [_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdXRoL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7QUFBRTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0VBRUo7RUFBSTtJQUNFLFdBQUE7RUFFTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hdXRoL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAubG9naW4tZm9ybSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG5cclxuICAgICAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RegistrationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-registration',
            templateUrl: './registration.component.html',
            styleUrls: ['./registration.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-auth-auth-module-es5.js.map