(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-e-commerce-e-commerce-module"],{

/***/ "./src/app/modules/e-commerce/customers/customers.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/e-commerce/customers/customers.component.ts ***!
  \*********************************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CustomersComponent {
    constructor() { }
    ngOnInit() {
    }
}
CustomersComponent.ɵfac = function CustomersComponent_Factory(t) { return new (t || CustomersComponent)(); };
CustomersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomersComponent, selectors: [["app-customers"]], decls: 4, vars: 0, template: function CustomersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Customers:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " - Coming soon in the following updates (ETA [v7.1.0 - v7.1.3]).\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL21vZHVsZXMvZS1jb21tZXJjZS9jdXN0b21lcnMvY3VzdG9tZXJzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-customers',
                templateUrl: './customers.component.html',
                styleUrls: ['./customers.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/e-commerce/e-commerce-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/e-commerce/e-commerce-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ECommerceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ECommerceRoutingModule", function() { return ECommerceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _e_commerce_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./e-commerce.component */ "./src/app/modules/e-commerce/e-commerce.component.ts");
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customers/customers.component */ "./src/app/modules/e-commerce/customers/customers.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/products.component */ "./src/app/modules/e-commerce/products/products.component.ts");







const routes = [
    {
        path: '',
        component: _e_commerce_component__WEBPACK_IMPORTED_MODULE_2__["ECommerceComponent"],
        children: [
            {
                path: 'customers',
                component: _customers_customers_component__WEBPACK_IMPORTED_MODULE_3__["CustomersComponent"],
            },
            {
                path: 'products',
                component: _products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"],
            },
            { path: '', redirectTo: 'customers', pathMatch: 'full' },
            { path: '**', redirectTo: 'customers', pathMatch: 'full' },
        ],
    },
];
class ECommerceRoutingModule {
}
ECommerceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ECommerceRoutingModule });
ECommerceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ECommerceRoutingModule_Factory(t) { return new (t || ECommerceRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ECommerceRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ECommerceRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/e-commerce/e-commerce.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/e-commerce/e-commerce.component.ts ***!
  \************************************************************/
/*! exports provided: ECommerceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ECommerceComponent", function() { return ECommerceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class ECommerceComponent {
    constructor() { }
    ngOnInit() { }
}
ECommerceComponent.ɵfac = function ECommerceComponent_Factory(t) { return new (t || ECommerceComponent)(); };
ECommerceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ECommerceComponent, selectors: [["app-e-commerce"]], decls: 1, vars: 0, template: function ECommerceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ECommerceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-e-commerce',
                templateUrl: './e-commerce.component.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/e-commerce/e-commerce.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/e-commerce/e-commerce.module.ts ***!
  \*********************************************************/
/*! exports provided: ECommerceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ECommerceModule", function() { return ECommerceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customers/customers.component */ "./src/app/modules/e-commerce/customers/customers.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products/products.component */ "./src/app/modules/e-commerce/products/products.component.ts");
/* harmony import */ var _e_commerce_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./e-commerce.component */ "./src/app/modules/e-commerce/e-commerce.component.ts");
/* harmony import */ var _e_commerce_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./e-commerce-routing.module */ "./src/app/modules/e-commerce/e-commerce-routing.module.ts");







class ECommerceModule {
}
ECommerceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ECommerceModule });
ECommerceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ECommerceModule_Factory(t) { return new (t || ECommerceModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _e_commerce_routing_module__WEBPACK_IMPORTED_MODULE_5__["ECommerceRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ECommerceModule, { declarations: [_customers_customers_component__WEBPACK_IMPORTED_MODULE_2__["CustomersComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"], _e_commerce_component__WEBPACK_IMPORTED_MODULE_4__["ECommerceComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _e_commerce_routing_module__WEBPACK_IMPORTED_MODULE_5__["ECommerceRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ECommerceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_customers_customers_component__WEBPACK_IMPORTED_MODULE_2__["CustomersComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"], _e_commerce_component__WEBPACK_IMPORTED_MODULE_4__["ECommerceComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _e_commerce_routing_module__WEBPACK_IMPORTED_MODULE_5__["ECommerceRoutingModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/e-commerce/products/products.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/e-commerce/products/products.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ProductsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(); };
ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 4, vars: 0, template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Products:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " - Coming soon in the following updates (ETA [v7.1.0 - v7.1.3]).\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL21vZHVsZXMvZS1jb21tZXJjZS9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-products',
                templateUrl: './products.component.html',
                styleUrls: ['./products.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-e-commerce-e-commerce-module-es2015.js.map