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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-ngbootstrap-ngbootstrap-module"], {
    /***/
    "./src/app/modules/ngbootstrap/accordion/accordion.component.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/modules/ngbootstrap/accordion/accordion.component.ts ***!
      \**********************************************************************/

    /*! exports provided: AccordionComponent */

    /***/
    function srcAppModulesNgbootstrapAccordionAccordionComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccordionComponent", function () {
        return AccordionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _metronic_partials_content_general_notice_notice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../_metronic/partials/content/general/notice/notice.component */
      "./src/app/_metronic/partials/content/general/notice/notice.component.ts");
      /* harmony import */


      var _metronic_partials_content_general_code_preview_code_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../_metronic/partials/content/general/code-preview/code-preview.component */
      "./src/app/_metronic/partials/content/general/code-preview/code-preview.component.ts");

      function AccordionComponent_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Simple");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AccordionComponent_ng_template_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        }
      }

      function AccordionComponent_ng_template_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2605 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Fancy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " title \u2605");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AccordionComponent_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        }
      }

      function AccordionComponent_ng_template_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Disabled");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AccordionComponent_ng_template_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        }
      }

      function AccordionComponent_ng_template_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Simple");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AccordionComponent_ng_template_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        }
      }

      function AccordionComponent_ng_template_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2605 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Fancy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " title \u2605");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AccordionComponent_ng_template_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        }
      }

      function AccordionComponent_ng_template_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Disabled");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AccordionComponent_ng_template_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        }
      }

      function AccordionComponent_ng_template_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First panel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AccordionComponent_ng_template_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        }
      }

      function AccordionComponent_ng_template_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Second");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AccordionComponent_ng_template_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        }
      }

      function AccordionComponent_ng_template_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Simple");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AccordionComponent_ng_template_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        }
      }

      function AccordionComponent_ng_template_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "I can't be toggled...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AccordionComponent_ng_template_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        }
      }

      function AccordionComponent_ng_template_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "I can be opened, but not closed...\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AccordionComponent_ng_template_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        }
      }

      function AccordionComponent_ng_template_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "One");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AccordionComponent_ng_template_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        }
      }

      function AccordionComponent_ng_template_70_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Two");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AccordionComponent_ng_template_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        }
      }

      var accordion = {
        beforeCodeTitle: 'Accordion',
        htmlCode: "\n<div class=\"example-preview\">\n  <h3>Self closing</h3>\n  <div>\n    <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\">\n      <ngb-panel>\n        <ng-template ngbPanelTitle>\n\t      <span class=\"card-header--title\">Simple</span>\n        </ng-template>\n        <ng-template ngbPanelContent>\n\t\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n\t\t  aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n\t\t  sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n\t\t  craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat\n          craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n\t    </ng-template>\n      </ngb-panel>\n      <ngb-panel>\n        <ng-template ngbPanelTitle>\n          <span class=\"card-header--title\">&#9733;\n\t\t    <b>Fancy</b> title &#9733;\n          </span>\n        </ng-template>\n        <ng-template ngbPanelContent>\n\t\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n\t\t  non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua\n\t\t  put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore\n\t\t  wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,\n          raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n        </ng-template>\n      </ngb-panel>\n      <ngb-panel [disabled]=\"true\">\n        <ng-template ngbPanelTitle>\n          <span class=\"card-header--title\">Disabled</span>\n        </ng-template>\n        <ng-template ngbPanelContent>\n\t\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.\n          3 wolf moon officia aute,\n\t\t  non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf\n          moon tempor, sunt aliqua put a bird\n\t\t  on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n          craft beer labore wes anderson cred nesciunt\n\t\t  sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,\n          raw denim aesthetic synth nesciunt you\n          probably haven't heard of them accusamus labore sustainable VHS.\n        </ng-template>\n\t  </ngb-panel>\n    </ngb-accordion>\n   </div>\n</div>\n",
        tsCode: "\nimport { Component } from '@angular/core';\n\n@Component({\n  selector: 'ngbd-accordion-basic',\n  templateUrl: './accordion-basic.html'\n})\nexport class NgbdAccordionBasic {}",
        viewCode: "",
        isCodeVisible: false,
        isExampleExpanded: true
      };
      var oneOpenPanelAtAHome = {
        beforeCodeTitle: 'One open panel at a time',
        htmlCode: "\n<ngb-accordion [closeOthers]=\"true\" activeIds=\"static-1\">\n  <ngb-panel id=\"static-1\">\n    <ng-template ngbPanelTitle>\n      <span class=\"card-header--title\">Simple</span>\n    </ng-template>\n    <ng-template ngbPanelContent>\n\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n\t  non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua\n\t  put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore\n\t  wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,\n      raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n    </ng-template>\n  </ngb-panel>\n  <ngb-panel id=\"static-2\">\n  <ng-template ngbPanelTitle>\n     <span>&#9733;\n\t\t<b>Fancy</b> title &#9733;\n    </span>\n  </ng-template>\n  <ng-template ngbPanelContent>\n\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non\n\tcupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird\n\ton it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred\n\tnesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim\n    aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n  </ng-template>\n  </ngb-panel>\n  <ngb-panel id=\"static-3\" [disabled]=\"true\">\n    <ng-template ngbPanelTitle>\n      <span class=\"card-header--title\">Disabled</span>\n    </ng-template>\n    <ng-template ngbPanelContent>\n\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non\n\t  cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird\n\t  on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson\n\t  cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic\n      synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n    </ng-template>\n   </ngb-panel>\n</ngb-accordion>",
        tsCode: "\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'ngbd-accordion-static',\n\ttemplateUrl: './accordion-static.html',\n    styles: [`\n        .card-header--title {\n        display:block;\n    }\n    `],\n})\nexport class NgbdAccordionStatic {\n}",
        viewCode: "",
        isCodeVisible: false
      };
      var togglePanels = {
        beforeCodeTitle: 'Toggle panels',
        htmlCode: "\n<ngb-accordion #acc11=\"ngbAccordion\">\n  <ngb-panel id=\"toggle-11\">\n    <ng-template ngbPanelTitle>\n      <span class=\"card-header--title\">First panel</span>\n    </ng-template>\n    <ng-template ngbPanelContent>\n\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n\t  non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua\n\t  put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer\n\t  labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft\n      beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n    </ng-template>\n  </ngb-panel>\n  <ngb-panel id=\"toggle-22\">\n    <ng-template ngbPanelTitle>\n      <span class=\"card-header--title\">Second</span>\n    </ng-template>\n    <ng-template ngbPanelContent>\n\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n\t  non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua\n\t  put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer\n\t  labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft\n      beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n    </ng-template>\n  </ngb-panel>\n</ngb-accordion>\n<div class=\"separator separator-dashed my-6\"></div>\n<button class=\"btn btn-primary\" (click)=\"acc11.toggle('toggle-11')\">Toggle first</button>\n<button class=\"btn btn-info\" (click)=\"acc11.toggle('toggle-22')\">Toggle second</button>\n\t  ",
        tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n  selector: 'ngbd-accordion-toggle',\n  templateUrl: './accordion-toggle.html'\n})\nexport class NgbdAccordionToggle { }\n",
        viewCode: "",
        isCodeVisible: false
      };
      var preventPanelToggle = {
        beforeCodeTitle: 'Prevent panel toggle',
        htmlCode: "\n<ngb-accordion (panelChange)=\"beforeChange($event)\">\n  <ngb-panel id=\"preventchange-1\">\n    <ng-template ngbPanelTitle>\n      <span class=\"card-header--title\">Simple</span>\n    </ng-template>\n    <ng-template ngbPanelContent>\n\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n\t  non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua\n\t put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer\n\t labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer\n     farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n    </ng-template>\n  </ngb-panel>\n  <ngb-panel id=\"preventchange-2\">\n    <ng-template ngbPanelTitle>\n      <span class=\"card-header--title\">I can't be toggled...</span>\n    </ng-template>\n    <ng-template ngbPanelContent>\n\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n\t  non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua\n\t put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore\n\t wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,\n     raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n    </ng-template>\n  </ngb-panel>\n  <ngb-panel id=\"preventchange-3\">\n    <ng-template ngbPanelTitle>\n      <span class=\"card-header--title\">I can be opened, but not closed...\"</span>\n    </ng-template>\n    <ng-template ngbPanelContent>\n\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n\t  non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua\n\t  put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore\n\t  wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,\n      raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n    </ng-template>\n  </ngb-panel>\n</ngb-accordion>",
        tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbPanelChangeEvent} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-accordion-preventchange',\n    templateUrl: './accordion-preventchange.html',\n})\nexport class NgbdAccordionPreventchange {\n    public beforeChange($event: NgbPanelChangeEvent) {\n\n        if ($event.panelId === 'preventchange-2') {\n            $event.preventDefault();\n        }\n\n        if ($event.panelId === 'preventchange-3' && $event.nextState === false) {\n            $event.preventDefault();\n        }\n    };\n}",
        viewCode: "",
        isCodeVisible: false
      };
      var globalConfigurationOfAccordions = {
        beforeCodeTitle: 'Global configuration of accordions',
        htmlCode: "\n<div class=\"example-preview\">\n  <span>\n    This accordion uses customized default values.\n  </span>\n  <div>\n    <ngb-accordion #acc33=\"ngbAccordion\" activeIds=\"config-panel-one\">\n      <ngb-panel id=\"config-panel-one\">\n        <ng-template ngbPanelTitle>\n          <span class=\"card-header--title\">One</span>\n        </ng-template>\n        <ng-template ngbPanelContent>\n\t\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n\t\t  aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n\t\t  sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n\t\t  craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat\n          craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n        </ng-template>\n      </ngb-panel>\n      <ngb-panel>\n        <ng-template ngbPanelTitle>\n          <span class=\"card-header--title\">Two</span>\n        </ng-template>\n        <ng-template ngbPanelContent>\n\t\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non\n\t\t  cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird\n\t\t  on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred\n\t\t  nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic\n          synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n        </ng-template>\n      </ngb-panel>\n    </ngb-accordion>\n   </div>\n</div>",
        tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-accordion-config',\n        templateUrl: './accordion-config.html',\n        providers: [NgbAccordionConfig] // add the NgbAccordionConfig to the component providers\n    })\n\nexport class NgbdAccordionConfig {\n    constructor(config: NgbAccordionConfig) {\n        // customize default values of accordions used by this component tree\n        config.closeOthers = true;\n\t    config.type = 'info';\n    }\n}",
        viewCode: "",
        isCodeVisible: false
      };

      var AccordionComponent = /*#__PURE__*/function () {
        function AccordionComponent(config) {// customize default values of accordions used by this component tree
          // config.closeOthers = true;
          //  config.type = 'info';

          _classCallCheck(this, AccordionComponent);
        }

        _createClass(AccordionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.exampleAccordion = accordion;
            this.exampleOneOpenPanelAtAHome = oneOpenPanelAtAHome;
            this.exampleTogglePanels = togglePanels;
            this.examplePreventPanelToggle = preventPanelToggle;
            this.exampleGlobalConfigurationOfAccordions = globalConfigurationOfAccordions;
          } // api methods
          // ng-methods

        }, {
          key: "beforeChange",
          value: function beforeChange($event) {
            if ($event.panelId === 'preventchange-2') {
              $event.preventDefault();
            }

            if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
              $event.preventDefault();
            }
          }
        }]);

        return AccordionComponent;
      }();

      AccordionComponent.ɵfac = function AccordionComponent_Factory(t) {
        return new (t || AccordionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbAccordionConfig"]));
      };

      AccordionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AccordionComponent,
        selectors: [["app-ng-accordion"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbAccordionConfig"]])],
        decls: 72,
        vars: 11,
        consts: [[3, "svg"], ["href", "https://ng-bootstrap.github.io/#/components/accordion/examples", "target", "_blank", 1, "font-weight-bold"], [1, "row"], [1, "col-xl-6"], [3, "viewItem"], ["activeIds", "ngb-panel-0"], ["acc", "ngbAccordion"], ["ngbPanelTitle", ""], ["ngbPanelContent", ""], [3, "disabled"], ["activeIds", "static-1", 3, "closeOthers"], ["id", "static-1"], ["id", "static-2"], ["id", "static-3", 3, "disabled"], ["acc11", "ngbAccordion"], ["id", "toggle-11"], ["id", "toggle-22"], [1, "separator", "separator-dashed", "my-6"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-info", 3, "click"], [3, "panelChange"], ["id", "preventchange-1"], ["id", "preventchange-2"], ["id", "preventchange-3"], ["activeIds", "config-panel-one", 3, "closeOthers", "type"], ["acc33", "ngbAccordion"], ["id", "config-panel-one"], [1, "card-header--title"]],
        template: function AccordionComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notice", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " For more info please check the components's official demos & documentation ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "demos & documentation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Self closing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ngb-accordion", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ngb-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AccordionComponent_ng_template_14_Template, 2, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AccordionComponent_ng_template_15_Template, 1, 0, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ngb-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AccordionComponent_ng_template_17_Template, 5, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AccordionComponent_ng_template_18_Template, 1, 0, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ngb-panel", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AccordionComponent_ng_template_20_Template, 2, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AccordionComponent_ng_template_21_Template, 1, 0, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ngb-accordion", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ngb-panel", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AccordionComponent_ng_template_25_Template, 2, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AccordionComponent_ng_template_26_Template, 1, 0, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ngb-panel", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AccordionComponent_ng_template_28_Template, 5, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AccordionComponent_ng_template_29_Template, 1, 0, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ngb-panel", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AccordionComponent_ng_template_31_Template, 2, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AccordionComponent_ng_template_32_Template, 1, 0, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ngb-accordion", null, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ngb-panel", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AccordionComponent_ng_template_37_Template, 2, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, AccordionComponent_ng_template_38_Template, 1, 0, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ngb-panel", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, AccordionComponent_ng_template_40_Template, 2, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, AccordionComponent_ng_template_41_Template, 1, 0, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccordionComponent_Template_button_click_43_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

              var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);

              return _r13.toggle("toggle-11");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Toggle first");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccordionComponent_Template_button_click_46_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

              var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);

              return _r13.toggle("toggle-22");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Toggle second ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ngb-accordion", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("panelChange", function AccordionComponent_Template_ngb_accordion_panelChange_50_listener($event) {
              return ctx.beforeChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ngb-panel", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, AccordionComponent_ng_template_52_Template, 2, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, AccordionComponent_ng_template_53_Template, 1, 0, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "ngb-panel", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, AccordionComponent_ng_template_55_Template, 2, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, AccordionComponent_ng_template_56_Template, 1, 0, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "ngb-panel", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, AccordionComponent_ng_template_58_Template, 2, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, AccordionComponent_ng_template_59_Template, 1, 0, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "This accordion uses customized default values.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "ngb-accordion", 24, 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "ngb-panel", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, AccordionComponent_ng_template_67_Template, 2, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, AccordionComponent_ng_template_68_Template, 1, 0, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "ngb-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, AccordionComponent_ng_template_70_Template, 2, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, AccordionComponent_ng_template_71_Template, 1, 0, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svg", "assets/media/svg/icons/Tools/Compass.svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleAccordion);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleOneOpenPanelAtAHome);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("closeOthers", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleTogglePanels);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.examplePreventPanelToggle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleGlobalConfigurationOfAccordions);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("closeOthers", "true")("type", "info");
          }
        },
        directives: [_metronic_partials_content_general_notice_notice_component__WEBPACK_IMPORTED_MODULE_2__["NoticeComponent"], _metronic_partials_content_general_code_preview_code_preview_component__WEBPACK_IMPORTED_MODULE_3__["CodePreviewComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbAccordion"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPanel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPanelTitle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPanelContent"]],
        styles: [".card-header--title[_ngcontent-%COMP%] {\n        display: block;\n      }"],
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ng-accordion',
            templateUrl: './accordion.component.html',
            styles: ["\n      .card-header--title {\n        display: block;\n      }\n    "],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbAccordionConfig"]]
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbAccordionConfig"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/ngbootstrap/alert/alert.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/modules/ngbootstrap/alert/alert.component.ts ***!
      \**************************************************************/

    /*! exports provided: AlertComponent */

    /***/
    function srcAppModulesNgbootstrapAlertAlertComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
        return AlertComponent;
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


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _metronic_partials_content_general_notice_notice_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../_metronic/partials/content/general/notice/notice.component */
      "./src/app/_metronic/partials/content/general/notice/notice.component.ts");
      /* harmony import */


      var _metronic_partials_content_general_code_preview_code_preview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../_metronic/partials/content/general/code-preview/code-preview.component */
      "./src/app/_metronic/partials/content/general/code-preview/code-preview.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function AlertComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngb-alert", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function AlertComponent_div_12_Template_ngb_alert_close_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var alert_r3 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.closeAlert(alert_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var alert_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", true)("type", alert_r3.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](alert_r3.message);
        }
      }

      function AlertComponent_ngb_alert_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function AlertComponent_ngb_alert_22_Template_ngb_alert_close_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.staticAlertClosed = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Check out our awesome new features!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "brand");
        }
      }

      function AlertComponent_ngb_alert_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function AlertComponent_ngb_alert_28_Template_ngb_alert_close_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.successMessage = null;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.successMessage);
        }
      }

      var basicAlert = {
        beforeCodeTitle: 'Basic Alert',
        htmlCode: "\n<p>\n  <ngb-alert [dismissible]=\"false\" [type]=\"'success'\">\n    <strong>Well done! </strong> You successfully read this important alert message.\n  </ngb-alert>\n</p>",
        tsCode: "\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'ngbd-alert-basic',\n    templateUrl: './alert-basic.html'\n})\nexport class NgbdAlertBasic {}",
        isCodeVisible: false,
        isExampleExpanded: true
      };
      var closeableAlert = {
        beforeCodeTitle: 'Closeable Alert ',
        htmlCode: "\n<p *ngFor=\"let alert of alerts\">\n    <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\">{{ alert.message }}</ngb-alert>\n</p>\n<p>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"reset()\">Reset</button>\n</p>",
        tsCode: "\nimport { Input, Component } from '@angular/core';\n\n@Component({\n    selector: 'ngbd-alert-closeable',\n    templateUrl: './alert-closeable.html'\n})\nexport class NgbdAlertCloseable {\n\n    @Input() public alerts: Array<IAlert> = [];\n    private backup: Array<IAlert>;\n\n    constructor() {\n        this.alerts.push({\n            id: 1,\n            type: 'success',\n            message: 'This is an success alert',\n        }, {\n            id: 2,\n            type: 'info',\n            message: 'This is an info alert',\n        }, {\n            id: 3,\n            type: 'warning',\n            message: 'This is a warning alert',\n        }, {\n            id: 4,\n            type: 'danger',\n            message: 'This is a danger alert',\n        }, {\n            id: 5,\n            type: 'primary',\n            message: 'This is a primary alert',\n        }, {\n            id: 6,\n            type: 'secondary',\n            message: 'This is a secondary alert',\n        }, {\n            id: 7,\n            type: 'light',\n            message: 'This is a light alert',\n        }, {\n            id: 8,\n            type: 'dark',\n            message: 'This is a dark alert',\n        });\n        this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));\n    }\n\n    public closeAlert(alert: IAlert) {\n\t\tconst index: number = this.alerts.indexOf(alert);\n        this.alerts.splice(index, 1);\n    }\n\n    public reset() {\n        this.alerts = this.backup.map((alert: IAlert) => Object.assign({}, alert));\n    }\n}\n\nexport interface IAlert {\n    id: number;\n    type: string;\n    message: string;\n}",
        viewCode: "",
        isCodeVisible: false
      };
      var selfClosingAlert = {
        beforeCodeTitle: 'Self-Closing Alert',
        htmlCode: "\n<div class=\"example-preview\">\n  <h3>Self closing</h3>\n  <span>\n    Static self-closing alert that disappears after 20 seconds (refresh the page if it has already disappeared)\n  </span>\n  <div>\n    <ngb-alert *ngIf=\"!staticAlertClosed\" (close)=\"staticAlertClosed = true\">Check out our awesome new features!</ngb-alert>\n  </div>\n</div>\n<div class=\"separator separator-dashed my-6\"></div>\n<div class=\"example-preview\">\n  <h3>Change message</h3>\n  <span>\n    Show a self-closing success message that disappears after 5 seconds.\n  </span>\n  <div>\n    <ngb-alert *ngIf=\"successMessage\" type=\"success\" (close)=\"successMessage = null\">{{ successMessage }}</ngb-alert>\n      <p>\n        <button class=\"btn btn-primary\" (click)=\"changeSuccessMessage()\">Change message</button>\n      </p>\n  </div>\n</div>\n",
        tsCode: "\nimport {Component, OnInit} from '@angular/core';\nimport {Subject} from 'rxjs/Subject';\nimport {debounceTime} from 'rxjs/operator/debounceTime';\n\n@Component({\n    selector: 'ngbd-alert-selfclosing',\n    templateUrl: './alert-selfclosing.html'\n})\nexport class NgbdAlertSelfclosing implements OnInit {\n    private _success = new Subject<string>();\n\n    staticAlertClosed = false;\n    successMessage: string;\n\n    ngOnInit(): void {\n        setTimeout(() => this.staticAlertClosed = true, 20000);\n        this._success.pipe(\n          debounceTime(5000)\n        ).subscribe(() => this.successMessage = null);\n\n        public changeSuccessMessage() {\n            this._success.next(`${new Date()} - Message successfully changed.`);\n        }\n    }\n}",
        viewCode: "",
        isCodeVisible: false
      };
      var customAlert = {
        beforeCodeTitle: 'Custom Alert',
        htmlCode: "\n<div class=\"example-preview\">\n  <span>\n    Show a custom alert that can be styled via CSS or SCSS.\n  </span>\n  <div>\n    <ngb-alert type=\"custom\" [dismissible]=\"false\">\n      <strong>Whoa!</strong> This is a custom alert.</ngb-alert>\n  </div>\n</div>\n\t",
        tsCode: "\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'ngbd-alert-custom',\n    templateUrl: './alert-custom.html',\n\tstyles: [`\n\t    :host >>> .alert-custom {\n            color: #99004d;\n            background-color: #f169b4;\n            border-color: #800040;\n        }\n    `]\n})\nexport class NgbdAlertCustom {}",
        viewCode: "",
        isCodeVisible: false
      };
      var globalConfigurationOfAlerts = {
        beforeCodeTitle: 'Global configuration of alerts',
        htmlCode: "\n<p>\n  <ngb-alert>\n    This alert's type is success and it's not dismissible because the config has been customized\n  </ngb-alert>\n</p>",
        tsCode: "\nimport {Component, Input} from '@angular/core';\nimport {NgbAlertConfig} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-alert-config',\n\ttemplateUrl: './alert-config.html',\n    // add NgbAlertConfig  to the component providers\n    providers: [NgbAlertConfig]\n})\nexport class NgbdAlertConfig {\n    @Input() public alerts: Array<string> = [];\n\n    constructor(alertConfig: NgbAlertConfig) {\n        // customize default values of alerts used by this component tree\n        alertConfig.type = 'success';\n        alertConfig.dismissible = false;\n    }\n}",
        viewCode: "",
        isCodeVisible: false
      };

      var AlertComponent = /*#__PURE__*/function () {
        function AlertComponent(alertConfig) {
          _classCallCheck(this, AlertComponent);

          // customize default values of alerts used by this component tree
          // alertConfig.type = 'success';
          // alertConfig.dismissible = false;
          this.alerts = []; // tslint:disable-next-line:variable-name

          this._success = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.staticAlertClosed = false;
          this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is an success alert'
          }, {
            id: 2,
            type: 'info',
            message: 'This is an info alert'
          }, {
            id: 3,
            type: 'warning',
            message: 'This is a warning alert'
          }, {
            id: 4,
            type: 'danger',
            message: 'This is a danger alert'
          }, {
            id: 5,
            type: 'brand',
            message: 'This is a brand  alert'
          }, {
            id: 6,
            type: 'primary',
            message: 'This is a primary alert'
          });
          this.backup = this.alerts.map(function (alert) {
            return Object.assign({}, alert);
          });
        }

        _createClass(AlertComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.exampleBasicAlert = basicAlert;
            this.exampleCloseableAlert = closeableAlert;
            this.exampleSelfClosingAlert = selfClosingAlert;
            this.exampleCustomAlert = customAlert;
            this.exampleGlobalConfigurationOfAlerts = globalConfigurationOfAlerts;
            setTimeout(function () {
              return _this.staticAlertClosed = true;
            }, 20000);

            this._success.subscribe(function (message) {
              return _this.successMessage = message;
            });

            this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(5000)).subscribe(function () {
              return _this.successMessage = null;
            });
          }
        }, {
          key: "closeAlert",
          value: function closeAlert(alert) {
            var index = this.alerts.indexOf(alert);
            this.alerts.splice(index, 1);
          }
        }, {
          key: "reset",
          value: function reset() {
            this.alerts = this.backup.map(function (alert) {
              return Object.assign({}, alert);
            });
          }
        }, {
          key: "changeSuccessMessage",
          value: function changeSuccessMessage() {
            this._success.next("".concat(new Date(), " - Message successfully changed."));
          }
        }]);

        return AlertComponent;
      }();

      AlertComponent.ɵfac = function AlertComponent_Factory(t) {
        return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlertConfig"]));
      };

      AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AlertComponent,
        selectors: [["app-ng-alert"]],
        inputs: {
          alerts: "alerts"
        },
        decls: 44,
        vars: 14,
        consts: [[3, "svg"], ["href", "https://ng-bootstrap.github.io/#/components/alert/examples", "target", "_blank", 1, "font-weight-bold"], [1, "row"], [1, "col-xl-6"], [3, "viewItem"], [3, "dismissible", "type"], [4, "ngFor", "ngForOf"], [1, "example-preview"], [3, "type", "close", 4, "ngIf"], [1, "separator", "separator-dashed", "my-6"], [1, "btn", "btn-primary", 3, "click"], ["type", "custom", 3, "dismissible"], [3, "dismissible", "type", "close"], [3, "type", "close"]],
        template: function AlertComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notice", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " For more info please check the components's official demos & documentation ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "demos & documentation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ngb-alert", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Well done! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " You successfully read this important alert message. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AlertComponent_div_12_Template, 3, 3, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Static self-closing alert that disappears ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "after 20 seconds");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " (refresh the page if it has already disappeared) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AlertComponent_ngb_alert_22_Template, 2, 1, "ngb-alert", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Show a self-closing success message that disappears after 5 seconds. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AlertComponent_ngb_alert_28_Template, 2, 2, "ngb-alert", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_Template_button_click_30_listener() {
              return ctx.changeSuccessMessage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Change message ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Show a custom alert that can be styled via CSS or SCSS. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ngb-alert", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Whoa!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " This is a custom alert. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ngb-alert", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " This alert's type is success and it's not dismissible because the config has been customized ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svg", "assets/media/svg/icons/Tools/Compass.svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleBasicAlert);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", false)("type", "success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleCloseableAlert);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.alerts);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleSelfClosingAlert);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.staticAlertClosed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleCustomAlert);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleGlobalConfigurationOfAlerts);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", false)("type", "success");
          }
        },
        directives: [_metronic_partials_content_general_notice_notice_component__WEBPACK_IMPORTED_MODULE_4__["NoticeComponent"], _metronic_partials_content_general_code_preview_code_preview_component__WEBPACK_IMPORTED_MODULE_5__["CodePreviewComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlert"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
        styles: ["[_nghost-%COMP%]     .alert-custom {\n        color: #99004d;\n        background-color: #f169b4;\n        border-color: #800040;\n      }"],
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ng-alert',
            templateUrl: './alert.component.html',
            styles: ["\n      :host >>> .alert-custom {\n        color: #99004d;\n        background-color: #f169b4;\n        border-color: #800040;\n      }\n    "],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlertConfig"]
          }];
        }, {
          alerts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/modules/ngbootstrap/buttons/buttons.component.ts":
    /*!******************************************************************!*\
      !*** ./src/app/modules/ngbootstrap/buttons/buttons.component.ts ***!
      \******************************************************************/

    /*! exports provided: ButtonsComponent */

    /***/
    function srcAppModulesNgbootstrapButtonsButtonsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function () {
        return ButtonsComponent;
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


      var _metronic_partials_content_general_notice_notice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../_metronic/partials/content/general/notice/notice.component */
      "./src/app/_metronic/partials/content/general/notice/notice.component.ts");
      /* harmony import */


      var _metronic_partials_content_general_code_preview_code_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../_metronic/partials/content/general/code-preview/code-preview.component */
      "./src/app/_metronic/partials/content/general/code-preview/code-preview.component.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var checkboxButtons = {
        beforeCodeTitle: 'Checkbox buttons',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        htmlCode: "\n<div class=\"example-preview\">\n  <span>\n    Click buttons to get the result:\n    <pre>{{modelFirst | json}}</pre>\n  </span>\n  <div>\n    <div class=\"btn-group btn-group-toggle\">\n      <label class=\"btn-primary\" ngbButtonLabel>\n        <input type=\"checkbox\" ngbButton [(ngModel)]=\"modelFirst.left\"> Left (pre-checked)\n      </label>\n      <label class=\"btn-success\" ngbButtonLabel>\n        <input type=\"checkbox\" ngbButton [(ngModel)]=\"modelFirst.middle\"> Middle\n      </label>\n      <label class=\"btn-info\" ngbButtonLabel>\n        <input type=\"checkbox\" ngbButton [(ngModel)]=\"modelFirst.right\"> Right\n       </label>\n    </div>\n  </div>\n</div>\n",
        tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-buttons-checkbox',\n    templateUrl: './buttons-checkbox.html'\n})\nexport class NgbdButtonsCheckbox {\n    model = {\n    left: true,\n    middle: false,\n    right: false\n  };\n}\n",
        isCodeVisible: false,
        isExampleExpanded: true
      };
      var checkboxButtonsReactiveForms = {
        beforeCodeTitle: 'Checkbox buttons (Reactive Forms)',
        htmlCode: "\n<div class=\"example-preview\">\n  <span>\n    Click buttons to get the result:\n    <pre>{{checkboxGroupForm.value | json}}</pre>\n  </span>\n  <div>\n    <form [formGroup]=\"checkboxGroupForm\">\n      <div class=\"btn-group btn-group-toggle\">\n        <label class=\"btn-warning\" ngbButtonLabel>\n          <input type=\"checkbox\" formControlName=\"left\" ngbButton> Left (pre-checked)\n        </label>\n        <label class=\"btn-danger\" ngbButtonLabel>\n          <input type=\"checkbox\" formControlName=\"middle\" ngbButton> Middle\n        </label>\n        <label class=\"btn-success\" ngbButtonLabel>\n          <input type=\"checkbox\" formControlName=\"right\" ngbButton> Right\n        </label>\n      </div>\n     </form>\n  </div>\n</div>\n",
        tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-buttons-checkbox',\n    templateUrl: './buttons-checkbox.html'\n})\nexport class NgbdButtonsCheckbox {\n    model = {\n        left: true,\n        middle: false,\n        right: false\n    };\n}\n",
        isCodeVisible: false,
        isExampleExpanded: true
      };
      var radioButtons = {
        beforeCodeTitle: 'Radio buttons',
        htmlCode: "\n<div class=\"example-preview\">\n  <span>\n    Click buttons to get the result:\n    <pre>{{secondModel}}</pre>\n  </span>\n  <div>\n    <div class=\"btn-group btn-group-toggle\" ngbRadioGroup name=\"radioBasic\" [(ngModel)]=\"secondModel\">\n      <label ngbButtonLabel class=\"btn-primary\">\n        <input ngbButton type=\"radio\" [value]=\"1\"> Left (pre-checked)\n      </label>\n      <label ngbButtonLabel class=\"btn-info\">\n        <input ngbButton type=\"radio\" value=\"middle\"> Middle\n      </label>\n      <label ngbButtonLabel class=\"btn-danger\">\n        <input ngbButton type=\"radio\" [value]=\"false\"> Right\n      </label>\n    </div>\n  </div>\n</div>\n",
        tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-buttons-radio',\n    templateUrl: './buttons-radio.html'\n})\nexport class NgbdButtonsRadio {\n    model = 1;\n}\n",
        isCodeVisible: false,
        isExampleExpanded: true
      };
      var radioButtonsReactiveForms = {
        beforeCodeTitle: 'Radio buttons (Reactive Forms)',
        htmlCode: "\n<div class=\"example-preview\">\n  <span>\n    Click buttons to get the result:\n    <pre>{{radioGroupForm.value['model']}}</pre>\n  </span>\n  <div>\n    <form [formGroup]=\"radioGroupForm\">\n      <div class=\"btn-group btn-group-toggle\" ngbRadioGroup name=\"radioBasic\" formControlName=\"model\">\n        <label ngbButtonLabel class=\"btn-warning\">\n          <input ngbButton type=\"radio\" [value]=\"1\"> Left (pre-checked)\n        </label>\n        <label ngbButtonLabel class=\"btn-success\">\n          <input ngbButton type=\"radio\" value=\"middle\"> Middle\n        </label>\n        <label ngbButtonLabel class=\"btn-info\">\n          <input ngbButton type=\"radio\" [value]=\"false\"> Right\n        </label>\n      </div>\n    </form>\n  </div>\n</div>\n",
        tsCode: "\nimport {Component, OnInit} from '@angular/core';\nimport {FormBuilder, FormGroup} from '@angular/forms';\n\n@Component({\n    selector: 'ngbd-buttons-radioreactive',\n    templateUrl: './buttons-radioreactive.html'\n})\nexport class NgbdButtonsRadioreactive implements OnInit {\n    public radioGroupForm: FormGroup;\n\n    constructor(private formBuilder: FormBuilder) {}\n\n    ngOnInit() {\n        this.radioGroupForm = this.formBuilder.group({\n            'model': 1\n        });\n    }\n}\n",
        isCodeVisible: false,
        isExampleExpanded: true
      };

      var ButtonsComponent = /*#__PURE__*/function () {
        function ButtonsComponent(formBuilder) {
          _classCallCheck(this, ButtonsComponent);

          this.formBuilder = formBuilder;
          this.modelFirst = {
            left: true,
            middle: false,
            right: false
          };
          this.secondModel = 1;
        }

        _createClass(ButtonsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.exampleCheckboxButtons = checkboxButtons;
            this.exampleCheckboxButtonsReactiveForms = checkboxButtonsReactiveForms;
            this.exampleRadioButtons = radioButtons;
            this.exampleRadioButtonsReactiveForms = radioButtonsReactiveForms;
            this.checkboxGroupForm = this.formBuilder.group({
              left: true,
              middle: false,
              right: false
            });
            this.radioGroupForm = this.formBuilder.group({
              model: 1
            });
          }
        }]);

        return ButtonsComponent;
      }();

      ButtonsComponent.ɵfac = function ButtonsComponent_Factory(t) {
        return new (t || ButtonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      ButtonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ButtonsComponent,
        selectors: [["app-ng-buttons"]],
        decls: 79,
        vars: 23,
        consts: [[3, "svg"], ["href", "https://ng-bootstrap.github.io/#/components/buttons/examples", "target", "_blank", 1, "font-weight-bold"], [1, "row"], [1, "col-xl-6"], [3, "viewItem"], [1, "example-preview"], [1, "btn-group", "btn-group-toggle"], ["ngbButtonLabel", "", 1, "btn-primary"], ["type", "checkbox", "ngbButton", "", 3, "ngModel", "ngModelChange"], ["ngbButtonLabel", "", 1, "btn-success"], ["ngbButtonLabel", "", 1, "btn-info"], [3, "formGroup"], ["ngbButtonLabel", "", 1, "btn-warning"], ["type", "checkbox", "formControlName", "left", "ngbButton", ""], ["ngbButtonLabel", "", 1, "btn-danger"], ["type", "checkbox", "formControlName", "middle", "ngbButton", ""], ["type", "checkbox", "formControlName", "right", "ngbButton", ""], ["ngbRadioGroup", "", "name", "radioBasic", 1, "btn-group", "btn-group-toggle", 3, "ngModel", "ngModelChange"], ["ngbButton", "", "type", "radio", 3, "value"], ["ngbButton", "", "type", "radio", "value", "middle"], ["ngbRadioGroup", "", "name", "radioBasic", "formControlName", "model", 1, "btn-group", "btn-group-toggle"]],
        template: function ButtonsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notice", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " For more info please check the components's official demos & documentation ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "demos & documentation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Click buttons to get the result: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ButtonsComponent_Template_input_ngModelChange_16_listener($event) {
              return ctx.modelFirst.left = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Left (pre-checked) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ButtonsComponent_Template_input_ngModelChange_19_listener($event) {
              return ctx.modelFirst.middle = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Middle ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ButtonsComponent_Template_input_ngModelChange_22_listener($event) {
              return ctx.modelFirst.right = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Right ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Click buttons to get the result: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "form", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Left (pre-checked) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Middle ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Right ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Click buttons to get the result: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ButtonsComponent_Template_div_ngModelChange_51_listener($event) {
              return ctx.secondModel = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Left (pre-checked) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Middle ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Right ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Click buttons to get the result: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "form", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Left (pre-checked) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Middle ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Right ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svg", "assets/media/svg/icons/Tools/Compass.svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleCheckboxButtons);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 19, ctx.modelFirst));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.modelFirst.left);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.modelFirst.middle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.modelFirst.right);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleCheckboxButtonsReactiveForms);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 21, ctx.checkboxGroupForm.value));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.checkboxGroupForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleRadioButtons);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.secondModel);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.secondModel);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleRadioButtonsReactiveForms);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.radioGroupForm.value["model"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.radioGroupForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", false);
          }
        },
        directives: [_metronic_partials_content_general_notice_notice_component__WEBPACK_IMPORTED_MODULE_2__["NoticeComponent"], _metronic_partials_content_general_code_preview_code_preview_component__WEBPACK_IMPORTED_MODULE_3__["CodePreviewComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbButtonLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCheckBox"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbRadioGroup"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbRadio"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["JsonPipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ng-buttons',
            templateUrl: './buttons.component.html'
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/ngbootstrap/carousel/carousel.component.ts":
    /*!********************************************************************!*\
      !*** ./src/app/modules/ngbootstrap/carousel/carousel.component.ts ***!
      \********************************************************************/

    /*! exports provided: CarouselComponent */

    /***/
    function srcAppModulesNgbootstrapCarouselCarouselComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarouselComponent", function () {
        return CarouselComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _metronic_partials_content_general_notice_notice_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../_metronic/partials/content/general/notice/notice.component */
      "./src/app/_metronic/partials/content/general/notice/notice.component.ts");
      /* harmony import */


      var _metronic_partials_content_general_code_preview_code_preview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../_metronic/partials/content/general/code-preview/code-preview.component */
      "./src/app/_metronic/partials/content/general/code-preview/code-preview.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function CarouselComponent_ngb_carousel_7_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "First slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Nulla vitae elit libero, a pharetra augue mollis interdum.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function CarouselComponent_ngb_carousel_7_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Second slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.images[1], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function CarouselComponent_ngb_carousel_7_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Third slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Praesent commodo cursus magna, vel scelerisque nisl consectetur. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r5.images[2], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function CarouselComponent_ngb_carousel_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_ngb_carousel_7_ng_template_1_Template, 6, 1, "ng-template", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CarouselComponent_ngb_carousel_7_ng_template_2_Template, 6, 1, "ng-template", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CarouselComponent_ngb_carousel_7_ng_template_3_Template, 6, 1, "ng-template", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CarouselComponent_ngb_carousel_10_1_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No mouse navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "This carousel hides navigation arrows and indicators.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var image_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function CarouselComponent_ngb_carousel_10_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselComponent_ngb_carousel_10_1_ng_template_0_Template, 6, 1, "ng-template", 9);
        }
      }

      function CarouselComponent_ngb_carousel_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_ngb_carousel_10_1_Template, 1, 0, undefined, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", ctx_r1.showNavigationArrows)("showNavigationIndicators", ctx_r1.showNavigationIndicators);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.images);
        }
      }

      function CarouselComponent_ngb_carousel_19_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "10 seconds between slides...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "This carousel uses customized default values.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r10.secondImages[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function CarouselComponent_ngb_carousel_19_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No keyboard...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "This carousel uses customized default values.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r11.secondImages[1], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function CarouselComponent_ngb_carousel_19_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "And no wrap after last slide.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "This carousel uses customized default values.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r12.secondImages[2], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function CarouselComponent_ngb_carousel_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_ngb_carousel_19_ng_template_1_Template, 6, 1, "ng-template", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CarouselComponent_ngb_carousel_19_ng_template_2_Template, 6, 1, "ng-template", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CarouselComponent_ngb_carousel_19_ng_template_3_Template, 6, 1, "ng-template", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var carousel = {
        beforeCodeTitle: 'Carousel',
        htmlCode: "\n<ngb-carousel *ngIf=\"images\">\n  <ng-template ngbSlide>\n    <img [src]=\"images[0]\" alt=\"Random first slide\">\n    <div class=\"carousel-caption\">\n      <h3>First slide label</h3>\n      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n    </div>\n  </ng-template>\n  <ng-template ngbSlide>\n    <img [src]=\"images[1]\" alt=\"Random second slide\">\n    <div class=\"carousel-caption\">\n      <h3>Second slide label</h3>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n    </div>\n  </ng-template>\n  <ng-template ngbSlide>\n    <img [src]=\"images[2]\" alt=\"Random third slide\">\n      <div class=\"carousel-caption\">\n        <h3>Third slide label</h3>\n        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n      </div>\n  </ng-template>\n</ngb-carousel>\n",
        tsCode: "\nimport {Component, OnInit} from '@angular/core';\nimport {HttpClient} from '@angular/common/http';\nimport {map} from 'rxjs/operators';\n\n@Component({selector: 'ngbd-carousel-basic', templateUrl: './carousel-basic.html'})\nexport class NgbdCarouselBasic implements OnInit {\n    images: Array<string>;\n\n    constructor(private _http: HttpClient) {}\n\n    ngOnInit() {\n        this._http.get('https://picsum.photos/list')\n            .pipe(map((images: Array<{id: number}>) => this._randomImageUrls(images)))\n            .subscribe(images => this.images = images);\n    }\n\n    private _randomImageUrls(images: Array<{id: number}>): Array<string> {\n        return [1, 2, 3].map(() => {\n            const randomId = images[Math.floor(Math.random() * images.length)].id;\n            return `https://picsum.photos/900/500?image=${randomId}`;\n        });\n    }\n}\n",
        isCodeVisible: false,
        isExampleExpanded: true
      };
      var navigationArrowsAndIndicatorsCarousel = {
        beforeCodeTitle: 'Navigation arrows and indicators',
        htmlCode: "\n<ngb-carousel *ngIf=\"images\" [showNavigationArrows]=\"showNavigationArrows\" [showNavigationIndicators]=\"showNavigationIndicators\">\n  <ng-template ngbSlide *ngFor=\"let image of images\">\n    <img [src]=\"image\" alt=\"Random slide\" />\n    <div class=\"carousel-caption\">\n      <h3>No mouse navigation</h3>\n      <p>This carousel hides navigation arrows and indicators.</p>\n    </div>\n  </ng-template>\n</ngb-carousel>\n<hr />\n<div class=\"btn-group\" role=\"group\" aria-label=\"Carousel toggle controls\">\n  <button type=\"button\" (click)=\"showNavigationArrows = !showNavigationArrows\"\n    class=\"btn btn-outline-dark btn-sm\">Toggle navigation arrows</button>\n  <button type=\"button\" (click)=\"showNavigationIndicators = !showNavigationIndicators\"\n    class=\"btn btn-outline-dark btn-sm\">Toggle navigation indicators</button>\n  </div>\n",
        tsCode: "\nimport {Component, OnInit} from '@angular/core';\nimport {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';\nimport {map} from 'rxjs/operators';\nimport {HttpClient} from '@angular/common/http';\n\n@Component({\n  selector: 'ngbd-carousel-navigation',\n  templateUrl: './carousel-navigation.html',\n  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers\n})\nexport class NgbdCarouselNavigation implements OnInit {\n  showNavigationArrows = false;\n  showNavigationIndicators = false;\n  images: Array<string>;\n\n\n  constructor(config: NgbCarouselConfig, private _http: HttpClient) {\n    // customize default values of carousels used by this component tree\n    config.showNavigationArrows = true;\n    config.showNavigationIndicators = true;\n  }\n\n\n  ngOnInit() {\n    this._http.get('https://picsum.photos/list')\n      .pipe(map((images: Array<{id: number}>) => this._randomImageUrls(images)))\n      .subscribe(images => this.images = images);\n  }\n\n\n  private _randomImageUrls(images: Array<{id: number}>): Array<string> {\n    return [1, 2].map(() => {\n      const randomId = images[Math.floor(Math.random() * images.length)].id;\n      return `https://picsum.photos/900/500?image=${randomId}`;\n    });\n  }\n}\n",
        isCodeVisible: false,
        isExampleExpanded: true
      };
      var globalConfigurationOfCarousels = {
        beforeCodeTitle: 'Global configuration of carousels',
        htmlCode: "\n<ngb-carousel *ngIf=\"images\">\n  <ng-template ngbSlide>\n    <img [src]=\"images[0]\" alt=\"Random first slide\">\n    <div class=\"carousel-caption\">\n      <h3>10 seconds between slides...</h3>\n      <p>This carousel uses customized default values.</p>\n    </div>\n  </ng-template>\n  <ng-template ngbSlide>\n    <img [src]=\"images[1]\"  alt=\"Random second slide\">\n    <div class=\"carousel-caption\">\n      <h3>No keyboard...</h3>\n      <p>This carousel uses customized default values.</p>\n    </div>\n  </ng-template>\n  <ng-template ngbSlide>\n    <img [src]=\"images[2]\" alt=\"Random third slide\">\n    <div class=\"carousel-caption\">\n      <h3>And no wrap after last slide.</h3>\n      <p>This carousel uses customized default values.</p>\n    </div>\n  </ng-template>\n</ngb-carousel>\n",
        tsCode: "\nimport {Component, OnInit} from '@angular/core';\nimport {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';\nimport {map} from 'rxjs/operators';\nimport {HttpClient} from '@angular/common/http';\n\n@Component({\n    selector: 'ngbd-carousel-config',\n    templateUrl: './carousel-config.html',\n    providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers\n})\nexport class NgbdCarouselConfig implements OnInit {\n    images: Array<string>;\n\n    constructor(config: NgbCarouselConfig, private _http: HttpClient) {\n        // customize default values of carousels used by this component tree\n        config.interval = 10000;\n        config.wrap = false;\n        config.keyboard = false;\n    }\n\n    ngOnInit() {\n        this._http.get('https://picsum.photos/list')\n            .pipe(map((images: Array<{id: number}>) => this._randomImageUrls(images)))\n            .subscribe(images => this.images = images);\n    }\n\n    private _randomImageUrls(images: Array<{id: number}>): Array<string> {\n        return [1, 2, 3].map(() => {\n            const randomId = images[Math.floor(Math.random() * images.length)].id;\n            return `https://picsum.photos/900/500?image=${randomId}`;\n        });\n    }\n}\n",
        isCodeVisible: false,
        isExampleExpanded: true
      };

      var CarouselComponent = /*#__PURE__*/function () {
        // tslint:disable-next-line:variable-name
        function CarouselComponent(_http, config) {
          _classCallCheck(this, CarouselComponent);

          this._http = _http;
          this.showNavigationArrows = false;
          this.showNavigationIndicators = false; // customize default values of carousels used by this component tree

          config.interval = 10000;
          config.wrap = false;
          config.keyboard = false; // customize default values of carousels used by this component tree

          config.showNavigationArrows = true;
          config.showNavigationIndicators = true;
        }

        _createClass(CarouselComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.exampleCarousel = carousel;
            this.exampleGlobalConfigurationOfCarousels = globalConfigurationOfCarousels;
            this.exampleNavigationArrowsAndIndicatorsCarousel = navigationArrowsAndIndicatorsCarousel;

            this._http.get('https://picsum.photos/list').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (images) {
              return _this2._randomImageUrls(images);
            })).subscribe(function (images) {
              return _this2.images = images;
            });

            this._http.get('https://picsum.photos/list').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (images) {
              return _this2._randomImageUrls(images);
            })).subscribe(function (images) {
              return _this2.secondImages = images;
            });

            this._http.get('https://picsum.photos/list').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (images) {
              return _this2._randomImageUrls(images);
            })).subscribe(function (images) {
              return _this2.thirdImages = images;
            });
          }
        }, {
          key: "_randomImageUrls",
          value: function _randomImageUrls(images) {
            return [1, 2, 3].map(function () {
              var randomId = images[Math.floor(Math.random() * images.length)].id;
              return "https://picsum.photos/900/500?image=".concat(randomId);
            });
          }
        }]);

        return CarouselComponent;
      }();

      CarouselComponent.ɵfac = function CarouselComponent_Factory(t) {
        return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]));
      };

      CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CarouselComponent,
        selectors: [["app-ng-carousel"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]])],
        decls: 20,
        vars: 7,
        consts: [[3, "svg"], ["href", "https://ng-bootstrap.github.io/#/components/carousel/examples", "target", "_blank", 1, "font-weight-bold"], [1, "row"], [1, "col-xl-12"], [3, "viewItem"], [4, "ngIf"], [3, "showNavigationArrows", "showNavigationIndicators", 4, "ngIf"], ["role", "group", "aria-label", "Carousel toggle controls", 1, "btn-group"], ["type", "button", 1, "btn", "btn-outline-dark", "btn-sm", 3, "click"], ["ngbSlide", ""], ["alt", "Random first slide", 2, "width", "100%", 3, "src"], [1, "carousel-caption"], ["alt", "Random second slide", 2, "width", "100%", 3, "src"], ["alt", "Random third slide", 2, "width", "100%", 3, "src"], [3, "showNavigationArrows", "showNavigationIndicators"], [4, "ngFor", "ngForOf"], ["alt", "Random slide", 2, "width", "100%", 3, "src"]],
        template: function CarouselComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notice", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " For more info please check the components's official demos & documentation ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "demos & documentation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CarouselComponent_ngb_carousel_7_Template, 4, 0, "ngb-carousel", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CarouselComponent_ngb_carousel_10_Template, 2, 3, "ngb-carousel", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_Template_button_click_13_listener() {
              return ctx.showNavigationArrows = !ctx.showNavigationArrows;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Toggle navigation arrows ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_Template_button_click_15_listener() {
              return ctx.showNavigationIndicators = !ctx.showNavigationIndicators;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Toggle navigation indicators ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CarouselComponent_ngb_carousel_19_Template, 4, 0, "ngb-carousel", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svg", "assets/media/svg/icons/Tools/Compass.svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleCarousel);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.images);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleNavigationArrowsAndIndicatorsCarousel);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.thirdImages);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleGlobalConfigurationOfCarousels);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.secondImages);
          }
        },
        directives: [_metronic_partials_content_general_notice_notice_component__WEBPACK_IMPORTED_MODULE_4__["NoticeComponent"], _metronic_partials_content_general_code_preview_code_preview_component__WEBPACK_IMPORTED_MODULE_5__["CodePreviewComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlide"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
        encapsulation: 2,
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ng-carousel',
            templateUrl: './carousel.component.html',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]]
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/ngbootstrap/collapse/collapse.component.ts":
    /*!********************************************************************!*\
      !*** ./src/app/modules/ngbootstrap/collapse/collapse.component.ts ***!
      \********************************************************************/

    /*! exports provided: CollapseComponent */

    /***/
    function srcAppModulesNgbootstrapCollapseCollapseComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CollapseComponent", function () {
        return CollapseComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _metronic_partials_content_general_notice_notice_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../_metronic/partials/content/general/notice/notice.component */
      "./src/app/_metronic/partials/content/general/notice/notice.component.ts");
      /* harmony import */


      var _metronic_partials_content_general_code_preview_code_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../_metronic/partials/content/general/code-preview/code-preview.component */
      "./src/app/_metronic/partials/content/general/code-preview/code-preview.component.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

      var demo = {
        beforeCodeTitle: 'Demo',
        htmlCode: "\n<div class=\"example-preview\">\n  <div>\n    <button type=\"button\"\n      class=\"btn btn-primary\"\n      (click)=\"isCollapsed = !isCollapsed\"\n      [attr.aria-expanded]=\"!isCollapsed\"\n      aria-controls=\"collapseExample\">\n      Toggle\n    </button>\n  </div>\n  <div id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        You can collapse this card by clicking Toggle\n      </div>\n    </div>\n  </div>\n</div>\n",
        tsCode: "\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'ngbd-collapse-basic',\n    templateUrl: './collapse-basic.html'\n})\nexport class NgbdCollapseBasic {\n    public isCollapsed = false;\n}\n",
        isCodeVisible: false,
        isExampleExpanded: true
      };

      var CollapseComponent = /*#__PURE__*/function () {
        function CollapseComponent() {
          _classCallCheck(this, CollapseComponent);

          this.isCollapsed = false;
        }

        _createClass(CollapseComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.exampleDemo = demo;
          }
        }]);

        return CollapseComponent;
      }();

      CollapseComponent.ɵfac = function CollapseComponent_Factory(t) {
        return new (t || CollapseComponent)();
      };

      CollapseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CollapseComponent,
        selectors: [["app-ng-collapse"]],
        decls: 16,
        vars: 4,
        consts: [[3, "svg"], ["href", "https://ng-bootstrap.github.io/#/components/collapse/examples", "target", "_blank", 1, "font-weight-bold"], [1, "row"], [1, "col-xl-12"], [3, "viewItem"], [1, "example-preview"], ["type", "button", "aria-controls", "collapseExample", 1, "btn", "btn-primary", 3, "click"], ["id", "collapseExample", 3, "ngbCollapse"], [1, "card"], [1, "card-body"]],
        template: function CollapseComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notice", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " For more info please check the components's official demos & documentation ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "demos & documentation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CollapseComponent_Template_button_click_9_listener() {
              return ctx.isCollapsed = !ctx.isCollapsed;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Toggle ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " You can collapse this card by clicking Toggle ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svg", "assets/media/svg/icons/Tools/Compass.svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleDemo);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
          }
        },
        directives: [_metronic_partials_content_general_notice_notice_component__WEBPACK_IMPORTED_MODULE_1__["NoticeComponent"], _metronic_partials_content_general_code_preview_code_preview_component__WEBPACK_IMPORTED_MODULE_2__["CodePreviewComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCollapse"]],
        encapsulation: 2,
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollapseComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ng-collapse',
            templateUrl: './collapse.component.html',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/ngbootstrap/datepicker/datepicker.component.ts":
    /*!************************************************************************!*\
      !*** ./src/app/modules/ngbootstrap/datepicker/datepicker.component.ts ***!
      \************************************************************************/

    /*! exports provided: NgbDateNativeAdapter, I18n, CustomDatepickerI18n, DatepickerComponent */

    /***/
    function srcAppModulesNgbootstrapDatepickerDatepickerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbDateNativeAdapter", function () {
        return NgbDateNativeAdapter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I18n", function () {
        return I18n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomDatepickerI18n", function () {
        return CustomDatepickerI18n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatepickerComponent", function () {
        return DatepickerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _metronic_partials_content_general_notice_notice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../_metronic/partials/content/general/notice/notice.component */
      "./src/app/_metronic/partials/content/general/notice/notice.component.ts");
      /* harmony import */


      var _metronic_partials_content_general_code_preview_code_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../_metronic/partials/content/general/code-preview/code-preview.component */
      "./src/app/_metronic/partials/content/general/code-preview/code-preview.component.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function DatepickerComponent_ng_template_83_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function DatepickerComponent_ng_template_83_Template_span_mouseenter_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var date_r13 = ctx.date;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.hoveredDate = date_r13;
          })("mouseleave", function DatepickerComponent_ng_template_83_Template_span_mouseleave_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.hoveredDate = null;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var date_r13 = ctx.date;
          var focused_r14 = ctx.focused;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("focused", focused_r14)("range", ctx_r5.isFrom(date_r13) || ctx_r5.isTo(date_r13) || ctx_r5.isInside(date_r13) || ctx_r5.isHovered(date_r13))("faded", ctx_r5.isHovered(date_r13) || ctx_r5.isInside(date_r13));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", date_r13.day, " ");
        }
      }

      function DatepickerComponent_ng_template_161_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var date_r18 = ctx.date;
          var currentMonth_r19 = ctx.currentMonth;
          var selected_r20 = ctx.selected;
          var disabled_r21 = ctx.disabled;
          var focused_r22 = ctx.focused;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("weekend", ctx_r12.isWeekend(date_r18))("focused", focused_r22)("bg-primary", selected_r20)("hidden", date_r18.month !== currentMonth_r19)("text-muted", disabled_r21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", date_r18.day, " ");
        }
      }

      var now = new Date();

      var equals = function equals(one, two) {
        return one && two && two.year === one.year && two.month === one.month && two.day === one.day;
      };

      var before = function before(one, two) {
        return !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day ? false : one.day < two.day : one.month < two.month : one.year < two.year;
      };

      var after = function after(one, two) {
        return !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day ? false : one.day > two.day : one.month > two.month : one.year > two.year;
      };

      var basicDatepicker = {
        beforeCodeTitle: 'Basic datepicker',
        htmlCode: "\n<div class=\"example-preview\">\n  <h3>Simple datepicker</h3>\n  <div>\n    <ngb-datepicker #dp [(ngModel)]=\"model\" (navigate)=\"date = $event.next\"></ngb-datepicker>\n  </div>\n</div>\n<div class=\"separator separator-dashed my-6\"></div>\n<div class=\"example-preview\">\n  <div>\n    <button class=\"btn btn-sm btn-primary\" (click)=\"selectToday()\">Select Today</button>\n    <button class=\"btn btn-sm btn-info\" (click)=\"dp.navigateTo()\">To current month</button>\n    <button class=\"btn btn-sm btn-danger\" (click)=\"dp.navigateTo({year: 2013, month: 2})\">To Feb 2013</button>\n  </div>\n  <div>\n    <pre>Month: {{ date.month }}.{{ date.year }}</pre>\n    <pre>Model: {{ model | json }}</pre>\n  </div>\n</div>\n",
        tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';\n\nconst now = new Date();\n\n@Component({\n  selector: 'ngbd-datepicker-basic',\n  templateUrl: './datepicker-basic.html'\n})\nexport class NgbdDatepickerBasic {\n\n  model: NgbDateStruct;\n  date: {year: number, month: number};\n\n  selectToday() {\n    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};\n  }\n}\n",
        isCodeVisible: false,
        isExampleExpanded: true
      };
      var datepickerInAPopup = {
        beforeCodeTitle: 'Datepicker in a popup',
        htmlCode: "\n<div class=\"example-preview\">\n  <div>\n    <pre>Model: {{ model | json }}</pre>\n  </div>\n  <div>\n    <form class=\"form-inline\">\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\">\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-primary\" (click)=\"d.toggle()\" type=\"button\">\n              <i class=\"la la-calendar\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n",
        tsCode: "\nimport { Component } from '@angular/core';\n\n@Component({\n  selector: 'ngbd-collapse-basic',\n  templateUrl: './collapse-basic.html'\n})\nexport class NgbdCollapseBasic {\n  public isCollapsed = false;\n}\n",
        isCodeVisible: false,
        isExampleExpanded: true
      };
      var multipleMonths = {
        beforeCodeTitle: 'Multiple months',
        htmlCode: "\n<div class=\"example-preview\">\n  <div>\n    <ngb-datepicker [displayMonths]=\"displayMonths\" [navigation]=\"navigation\" [showWeekNumbers]=\"showWeekNumbers\"></ngb-datepicker>\n  </div>\n</div>\n<div class=\"separator separator-dashed my-6\"></div>\n<div class=\"example-preview\">\n  <div>\n    <form class=\"form-inline\">\n      <div class=\"form-group kt-form__group\">\n        <div class=\"input-group\">\n\t\t  <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [displayMonths]=\"displayMonths\"\n           [navigation]=\"navigation\" [showWeekNumbers]=\"showWeekNumbers\" ngbDatepicker #d=\"ngbDatepicker\">\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-primary\" (click)=\"d.toggle()\" type=\"button\">\n              <i class=\"la la-calendar\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n<div class=\"separator separator-dashed my-6\"></div>\n<div class=\"example-preview\">\n  <div>\n    <select class=\"custom-select kt-input\" [(ngModel)]=\"displayMonths\">\n      <option [ngValue]=\"1\">One month</option>\n      <option [ngValue]=\"2\">Two months</option>\n      <option [ngValue]=\"3\">Three months</option>\n    </select>\n    <select class=\"custom-select kt-input\" [(ngModel)]=\"navigation\">\n      <option value=\"none\">Without navigation</option>\n      <option value=\"select\">With select boxes</option>\n      <option value=\"arrows\">Without select boxes</option>\n    </select>\n    <select class=\"custom-select kt-input\" [(ngModel)]=\"showWeekNumbers\">\n      <option [ngValue]=\"true\">Week numbers</option>\n      <option [ngValue]=\"false\">No week numbers</option>\n    </select>\n  </div>\n</div>\n",
        tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n  selector: 'ngbd-datepicker-multiple',\n  templateUrl: './datepicker-multiple.html',\n  styles: [`\n    select.custom-select {\n    margin-right: 0.5rem;\n    width: auto;\n  }\n `]\n})\nexport class NgbdDatepickerMultiple {\n  displayMonths = 2;\n  navigation = 'select';\n  showWeekNumbers = false;\n}\n",
        isCodeVisible: false,
        isExampleExpanded: true
      };
      var rangeSelection = {
        beforeCodeTitle: 'Range selection',
        htmlCode: "\n<div class=\"example-preview\">\n  <h3>Example of the range selection</h3>\n  <div>\n    <ngb-datepicker #dp ngModel (ngModelChange)=\"onDateChange($event)\" [displayMonths]=\"2\" [dayTemplate]=\"t\"></ngb-datepicker>\n    <ng-template #t let-date=\"date\" let-focused=\"focused\">\n\t  <span class=\"custom-day\" [class.focused]=\"focused\"\n        [class.range]=\"isFrom(date) || isTo(date) || isInside(date) || isHovered(date)\" [class.faded]=\"isHovered(date) || isInside(date)\"\n        (mouseenter)=\"hoveredDate = date\" (mouseleave)=\"hoveredDate = null\">\n        {{ date.day }}\n      </span>\n    </ng-template>\n  </div>\n</div>\n<div class=\"separator separator-dashed my-6\"></div>\n<div class=\"example-preview\">\n  <div>\n    <pre>From: {{ fromDate | json }} </pre>\n    <pre>To: {{ toDate | json }} </pre>\n  </div>\n</div>\n",
        tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';\n\nconst equals = (one: NgbDateStruct, two: NgbDateStruct) =>\n  one && two && two.year === one.year && two.month === one.month && two.day === one.day;\n\nconst before = (one: NgbDateStruct, two: NgbDateStruct) =>\n  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day\n  ? false : one.day < two.day : one.month < two.month : one.year < two.year;\n\nconst after = (one: NgbDateStruct, two: NgbDateStruct) =>\n  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day\n  ? false : one.day > two.day : one.month > two.month : one.year > two.year;\n\n@Component({\n  selector: 'ngbd-datepicker-range',\n  templateUrl: './datepicker-range.html',\n  styles: [`\n    .custom-day {\n      text-align: center;\n      padding: 0.185rem 0.25rem;\n      display: inline-block;\n      height: 2rem;\n      width: 2rem;\n\t}\n    .custom-day.focused {\n      background-color: #e6e6e6;\n    }\n    .custom-day.range, .custom-day:hover {\n      background-color: rgb(2, 117, 216);\n      color: white;\n    }\n    .custom-day.faded {\n      background-color: rgba(2, 117, 216, 0.5);\n    }\n `]\n})\nexport class NgbdDatepickerRange {\n  hoveredDate: NgbDateStruct;\n  fromDate: NgbDateStruct;\n  toDate: NgbDateStruct;\n\n  constructor(calendar: NgbCalendar) {\n    this.fromDate = calendar.getToday();\n    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);\n  }\n\n  onDateChange(date: NgbDateStruct) {\n    if (!this.fromDate && !this.toDate) {\n      this.fromDate = date;\n    } else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {\n      this.toDate = date;\n    } else {\n      this.toDate = null;\n      this.fromDate = date;\n    }\n  }\n\n  isHovered = date => this.fromDate && !this.toDate && this.hoveredDate && after(date, this.fromDate) && before(date, this.hoveredDate);\n  isInside = date => after(date, this.fromDate) && before(date, this.toDate);\n  isFrom = date => equals(date, this.fromDate);\n  isTo = date => equals(date, this.toDate);\n}\n",
        isCodeVisible: false,
        isExampleExpanded: true
      };
      var disabledDatepicker = {
        beforeCodeTitle: 'Disabled datepicker',
        htmlCode: "\n<div class=\"example-preview\">\n  <div>\n    <ngb-datepicker [(ngModel)]=\"model\" [disabled]=\"disabled\"></ngb-datepicker>\n  </div>\n</div>\n<div class=\"separator separator-dashed my-6\"></div>\n<div class=\"example-preview\">\n  <div>\n    <button class=\"btn btn-sm btn-{{disabled ? 'danger' : 'success'}}\" (click)=\"disabled = !disabled\">\n      {{ disabled ? \"disabled\" : \"enabled\"}}\n    </button>\n  </div>\n</div>\n",
        tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';\n\nconst now = new Date();\n\n@Component({\n  selector: 'ngbd-datepicker-disabled',\n  templateUrl: './datepicker-disabled.html'\n})\nexport class NgbdDatepickerDisabled {\n  model: NgbDateStruct = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};\n  disabled = true;\n}\n",
        isCodeVisible: false,
        isExampleExpanded: true
      };
      var customDateAdapter = {
        beforeCodeTitle: 'Custom date adapter',
        htmlCode: "\n\n<div class=\"example-preview\">\n  <span>\n\tThese datepickers use custom Date adapter that lets you use your own model implementation.\n    In this example we are converting from and to a JS native Date object\n  </span>\n  <div>\n    <ngb-datepicker #d1 [(ngModel)]=\"model1\" #c1=\"ngModel\"></ngb-datepicker>\n    <div class=\"separator separator-dashed my-6\"></div>\n    <button class=\"btn btn-sm btn-primary\" (click)=\"model1 = today\">Select Today</button>\n    <div class=\"separator separator-dashed my-6\"></div>\n    <pre>Model: {{ model1 | json }}</pre>\n    <pre>State: {{ c1.status }}</pre>\n  </div>\n</div>\n<div class=\"separator separator-dashed my-6\"></div>\n<div class=\"example-preview\">\n  <span>\n\tThese datepickers use custom Date adapter that lets you use your own model implementation. In this example we are\n    converting from and to a JS native Date object\n  </span>\n\n  <div>\n    <form class=\"form-inline\">\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n\t\t  <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"d22\" #c2=\"ngModel\" [(ngModel)]=\"model2\"\n            ngbDatepicker #d22=\"ngbDatepicker\">\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-primary\" (click)=\"d22.toggle()\" type=\"button\">\n              <i class=\"la la-calendar\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n    </form>\n    <div class=\"separator separator-dashed my-6\"></div>\n    <button class=\"btn btn-sm btn-info\" (click)=\"model2 = today\">Select Today</button>\n\t<div class=\"separator separator-dashed my-6\"></div>\n    <pre>Model: {{ model2 | json }}</pre>\n    <pre>State: {{ c2.status }}</pre>\n  </div>\n</div>\n",
        tsCode: "\nimport {Component, Injectable} from '@angular/core';\nimport {NgbDateAdapter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';\n\n/**\n* Example of a Native Date adapter\n*/\n@Injectable()\nexport class NgbDateNativeAdapter extends NgbDateAdapter<Date> {\n  fromModel(date: Date): NgbDateStruct {\n    return (date && date.getFullYear) ? {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()} : null;\n  }\n\n  toModel(date: NgbDateStruct): Date {\n    return date ? new Date(date.year, date.month - 1, date.day) : null;\n  }\n}\n\n@Component({\n  selector: 'ngbd-datepicker-adapter',\n  templateUrl: './datepicker-adapter.html',\n\n  // NOTE: For this example we are only providing current component, but probably\n  // NOTE: you will want to provide your main App Module\n  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]\n})\nexport class NgbdDatepickerAdapter {\n  model1: Date;\n  model2: Date;\n\n  get today() {\n    return new Date();\n  }\n}\n",
        isCodeVisible: false,
        isExampleExpanded: true
      };
      var iternationalizationOfDatepickers = {
        beforeCodeTitle: 'Internationalization of datepicker',
        htmlCode: "\n<div class=\"example-preview\">\n  <span>\n    Datepicker in French\n  </span>\n  <div>\n    <ngb-datepicker [(ngModel)]=\"fourthModel\"></ngb-datepicker>\n  </div>\n</div>\n",
        tsCode: "\nimport {Component, Injectable} from '@angular/core';\nimport {NgbDatepickerI18n} from '@ng-bootstrap/ng-bootstrap';\n\nconst I18N_VALUES = {\n  'fr': {\n    weekdays: ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'],\n    months: ['Jan', 'F\xE9v', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'D\xE9c'],\n  }\n  // other languages you would support\n};\n\n// Define a service holding the language. You probably already have one if your app is i18ned. Or you could also\n// use the Angular LOCALE_ID value\n@Injectable()\nexport class I18n {\n  language = 'fr';\n}\n\n// Define custom service providing the months and weekdays translations\n@Injectable()\nexport class CustomDatepickerI18n extends NgbDatepickerI18n {\n  constructor(private _i18n: I18n) {\n    super();\n  }\n\n  getWeekdayShortName(weekday: number): string {\n    return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];\n  }\n\n  getMonthShortName(month: number): string {\n    return I18N_VALUES[this._i18n.language].months[month - 1];\n  }\n\n  getMonthFullName(month: number): string {\n    return this.getMonthShortName(month);\n  }\n}\n\n@Component({\n  selector: 'ngbd-datepicker-i18n',\n  templateUrl: './datepicker-i18n.html',\n  providers: [I18n, {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n}] // define custom NgbDatepickerI18n provider\n})\nexport class NgbdDatepickerI18n {\n  model;\n}\n",
        isCodeVisible: false,
        isExampleExpanded: true
      };
      var customDayView = {
        beforeCodeTitle: 'Custom day view',
        htmlCode: "\n<div class=\"example-preview\">\n  <span>\n    This datepicker uses a custom template to display days. All week-ends are displayed with an orange background.\n  </span>\n  <div>\n    <form class=\"form-inline\">\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n\t\t  <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"fifthModel\" ngbDatepicker\n           [dayTemplate]=\"customDay\" [markDisabled]=\"isDisabled\" #d=\"ngbDatepicker\">\n\t      <div class=\"input-group-append\">\n            <button class=\"btn btn-primary\" (click)=\"d.toggle()\" type=\"button\">\n              <i class=\"la la-calendar\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n   </form>\n\t<ng-template #customDay let-date=\"date\" let-currentMonth=\"currentMonth\" let-selected=\"selected\" let-disabled=\"disabled\"\n      let-focused=\"focused\">\n\t  <span class=\"custom-day\" [class.weekend]=\"isWeekend(date)\" [class.focused]=\"focused\" [class.bg-primary]=\"selected\"\n        [class.hidden]=\"date.month !== currentMonth\" [class.text-muted]=\"disabled\">\n        {{ date.day }}\n      </span>\n    </ng-template>\n  </div>\n</div>\n",
        tsCode: "\nimport {Component, Input} from '@angular/core';\nimport {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';\n@Component({\n  selector: 'ngbd-datepicker-customday',\n  templateUrl: './datepicker-customday.html',\n  styles: [`\n    .custom-day {\n      text-align: center;\n      padding: 0.185rem 0.25rem;\n      border-radius: 0.25rem;\n      display: inline-block;\n      width: 2rem;\n    }\n    .custom-day:hover, .custom-day.focused {\n      background-color: #e6e6e6;\n    }\n    .weekend {\n      background-color: #f0ad4e;\n      border-radius: 1rem;\n      color: white;\n    }\n    .hidden {\n      display: none;\n    }\n `]\n})\nexport class NgbdDatepickerCustomday {\n  model: NgbDateStruct;\n\n  isWeekend(date: NgbDateStruct) {\n    const d = new Date(date.year, date.month - 1, date.day);\n    return d.getDay() === 0 || d.getDay() === 6;\n  }\n\n  isDisabled(date: NgbDateStruct, current: {month: number}) {\n    return date.month !== current.month;\n  }\n}\n",
        isCodeVisible: false,
        isExampleExpanded: true
      };
      var alternativeCalendars = {
        beforeCodeTitle: 'Alternative calendars',
        htmlCode: "\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <ngbd-islamic-civil></ngbd-islamic-civil>\n    </div>\n    <div class=\"col\">\n      <ngbd-islamic-umalqura></ngbd-islamic-umalqura>\n    </div>\n  </div>\n</div>\n",
        tsCode: "\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'ngbd-collapse-basic',\n    templateUrl: './collapse-basic.html'\n})\nexport class NgbdCollapseBasic {\n    public isCollapsed = false;\n}\n",
        isCodeVisible: false,
        isExampleExpanded: true
      };
      var globalConfigurationOfDatepickers = {
        beforeCodeTitle: 'Global configuration of datepickers',
        htmlCode: "\n<div class=\"example-preview\">\n  <span>\n    This datepicker uses customized default values.\n  </span>\n  <div>\n    <ngb-datepicker [(ngModel)]=\"model\"></ngb-datepicker>\n  </div>\n</div>\n",
        tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbDatepickerConfig, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n  selector: 'ngbd-datepicker-config',\n  templateUrl: './datepicker-config.html',\n  providers: [NgbDatepickerConfig] // add NgbDatepickerConfig to the component providers\n})\nexport class NgbdDatepickerConfig {\n  model;\n\n  constructor(config: NgbDatepickerConfig) {\n    // customize default values of datepickers used by this component tree\n    config.minDate = {year: 1900, month: 1, day: 1};\n    config.maxDate = {year: 2099, month: 12, day: 31};\n\n    // days that don't belong to current month are not visible\n    config.outsideDays = 'hidden';\n\n    // weekends are disabled\n    config.markDisabled = (date: NgbDateStruct) => {\n    const d = new Date(date.year, date.month - 1, date.day);\n      return d.getDay() === 0 || d.getDay() === 6;\n     };\n  }\n}\n",
        isCodeVisible: false,
        isExampleExpanded: true
      };
      /**
       * Example of a Native Date adapter
       */

      var NgbDateNativeAdapter = /*#__PURE__*/function (_ng_bootstrap_ng_boot) {
        _inherits(NgbDateNativeAdapter, _ng_bootstrap_ng_boot);

        var _super = _createSuper(NgbDateNativeAdapter);

        function NgbDateNativeAdapter() {
          _classCallCheck(this, NgbDateNativeAdapter);

          return _super.apply(this, arguments);
        }

        _createClass(NgbDateNativeAdapter, [{
          key: "fromModel",
          value: function fromModel(date) {
            return date && date.getFullYear ? {
              year: date.getFullYear(),
              month: date.getMonth() + 1,
              day: date.getDate()
            } : null;
          }
        }, {
          key: "toModel",
          value: function toModel(date) {
            return date ? new Date(date.year, date.month - 1, date.day) : null;
          }
        }]);

        return NgbDateNativeAdapter;
      }(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"]);

      NgbDateNativeAdapter.ɵfac = function NgbDateNativeAdapter_Factory(t) {
        return ɵNgbDateNativeAdapter_BaseFactory(t || NgbDateNativeAdapter);
      };

      NgbDateNativeAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NgbDateNativeAdapter,
        factory: NgbDateNativeAdapter.ɵfac
      });

      var ɵNgbDateNativeAdapter_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgbDateNativeAdapter);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDateNativeAdapter, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();

      var I18N_VALUES = {
        fr: {
          weekdays: ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'],
          months: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Déc']
        }
      }; // Define a service holding the language. You probably already have one if your app is i18ned. Or you could also
      // use the Angular LOCALE_ID value

      var I18n = function I18n() {
        _classCallCheck(this, I18n);

        this.language = 'fr';
      };

      I18n.ɵfac = function I18n_Factory(t) {
        return new (t || I18n)();
      };

      I18n.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: I18n,
        factory: I18n.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](I18n, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })(); // Define custom service providing the months and weekdays translations


      var CustomDatepickerI18n = /*#__PURE__*/function (_ng_bootstrap_ng_boot2) {
        _inherits(CustomDatepickerI18n, _ng_bootstrap_ng_boot2);

        var _super2 = _createSuper(CustomDatepickerI18n);

        // tslint:disable-next-line:variable-name
        function CustomDatepickerI18n(_i18n) {
          var _this3;

          _classCallCheck(this, CustomDatepickerI18n);

          _this3 = _super2.call(this);
          _this3._i18n = _i18n;
          return _this3;
        }

        _createClass(CustomDatepickerI18n, [{
          key: "getDayAriaLabel",
          value: function getDayAriaLabel(date) {
            throw new Error('Method not implemented.'); // TODO: implement this
          }
        }, {
          key: "getWeekdayShortName",
          value: function getWeekdayShortName(weekday) {
            return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
          }
        }, {
          key: "getMonthShortName",
          value: function getMonthShortName(month) {
            return I18N_VALUES[this._i18n.language].months[month - 1];
          }
        }, {
          key: "getMonthFullName",
          value: function getMonthFullName(month) {
            return this.getMonthShortName(month);
          }
        }]);

        return CustomDatepickerI18n;
      }(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepickerI18n"]);

      CustomDatepickerI18n.ɵfac = function CustomDatepickerI18n_Factory(t) {
        return new (t || CustomDatepickerI18n)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](I18n));
      };

      CustomDatepickerI18n.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CustomDatepickerI18n,
        factory: CustomDatepickerI18n.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomDatepickerI18n, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: I18n
          }];
        }, null);
      })();

      var DatepickerComponent = /*#__PURE__*/function () {
        function DatepickerComponent(calendar, config) {
          var _this4 = this;

          _classCallCheck(this, DatepickerComponent);

          this.displayMonths = 2;
          this.navigation = 'select';
          this.showWeekNumbers = false;
          this.thirdModel = {
            year: now.getFullYear(),
            month: now.getMonth() + 1,
            day: now.getDate()
          };
          this.disabled = true;

          this.isHovered = function (date) {
            return _this4.fromDate && !_this4.toDate && _this4.hoveredDate && after(date, _this4.fromDate) && // tslint:disable-next-line:semicolon
            before(date, _this4.hoveredDate);
          };

          this.isInside = function (date) {
            return after(date, _this4.fromDate) && before(date, _this4.toDate);
          };

          this.isFrom = function (date) {
            return equals(date, _this4.fromDate);
          };

          this.isTo = function (date) {
            return equals(date, _this4.toDate);
          };

          this.fromDate = calendar.getToday();
          this.toDate = calendar.getNext(calendar.getToday(), 'd', 10); // customize default values of datepickers used by this component tree

          config.minDate = {
            year: 1900,
            month: 1,
            day: 1
          };
          config.maxDate = {
            year: 2099,
            month: 12,
            day: 31
          }; // days that don't belong to current month are not visible

          config.outsideDays = 'hidden'; // weekends are disabled

          config.markDisabled = function (date) {
            var d = new Date(date.year, date.month - 1, date.day);
            return d.getDay() === 0 || d.getDay() === 6;
          };
        }

        _createClass(DatepickerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.exampleBasicDatepicker = basicDatepicker;
            this.exampleDatepickerInAPopup = datepickerInAPopup;
            this.exampleMultipleMonths = multipleMonths;
            this.exampleRangeSelection = rangeSelection;
            this.exampleDisabledDatepicker = disabledDatepicker;
            this.exampleCustomDateAdapter = customDateAdapter;
            this.exampleInternationalizationOfDatepickers = iternationalizationOfDatepickers;
            this.exampleCustomDayView = customDayView;
            this.exampleAlternativeCalendar = alternativeCalendars;
            this.exampleGlobalConfigurationOfDatepickers = globalConfigurationOfDatepickers;
          }
        }, {
          key: "selectToday",
          value: function selectToday() {
            this.model = {
              year: now.getFullYear(),
              month: now.getMonth() + 1,
              day: now.getDate()
            };
          }
        }, {
          key: "isWeekend",
          value: function isWeekend(date) {
            var d = new Date(date.year, date.month - 1, date.day);
            return d.getDay() === 0 || d.getDay() === 6;
          }
        }, {
          key: "isDisabled",
          value: function isDisabled(date, current) {
            return date.month !== current.month;
          }
        }, {
          key: "onDateChange",
          value: function onDateChange(date) {
            if (!this.fromDate && !this.toDate) {
              this.fromDate = date;
            } else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
              this.toDate = date;
            } else {
              this.toDate = null;
              this.fromDate = date;
            }
          }
        }, {
          key: "today",
          get: function get() {
            return new Date();
          }
        }]);

        return DatepickerComponent;
      }();

      DatepickerComponent.ɵfac = function DatepickerComponent_Factory(t) {
        return new (t || DatepickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepickerConfig"]));
      };

      DatepickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DatepickerComponent,
        selectors: [["app-ng-datepicker"]],
        decls: 169,
        vars: 63,
        consts: [[3, "svg"], ["href", "https://ng-bootstrap.github.io/#/components/datepicker/examples", "target", "_blank", 1, "font-weight-bold"], [1, "row"], [1, "col-xl-6"], [3, "viewItem"], [1, "example-preview"], [3, "ngModel", "ngModelChange", "navigate"], ["dp", ""], [1, "separator", "separator-dashed", "my-6"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "btn", "btn-sm", "btn-info", 3, "click"], [1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "mt-6"], [1, "form-inline"], [1, "form-group"], [1, "input-group"], ["placeholder", "yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["dd", "ngbDatepicker"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "la", "la-calendar"], [3, "displayMonths", "navigation", "showWeekNumbers"], [1, "form-group", "kt-form__group"], ["placeholder", "yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", 1, "form-control", 3, "displayMonths", "navigation", "showWeekNumbers"], ["d", "ngbDatepicker"], [1, "kt-section", "kt-form__group"], [1, "custom-select", "kt-input", 3, "ngModel", "ngModelChange"], [3, "ngValue"], ["value", "none"], ["value", "select"], ["value", "arrows"], ["ngModel", "", 3, "displayMonths", "dayTemplate", "ngModelChange"], ["t", ""], [3, "ngModel", "disabled", "ngModelChange"], [3, "click"], [3, "ngModel", "ngModelChange"], ["d1", "", "c1", "ngModel"], ["placeholder", "yyyy-mm-dd", "name", "d22", "ngbDatepicker", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["c2", "ngModel", "d22", "ngbDatepicker"], ["placeholder", "yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", 1, "form-control", 3, "ngModel", "dayTemplate", "markDisabled", "ngModelChange"], ["customDay", ""], [1, "custom-day", 3, "mouseenter", "mouseleave"], [1, "custom-day"]],
        template: function DatepickerComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notice", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " For more info please check the components's official demos & documentation ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "demos & documentation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Simple datepicker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ngb-datepicker", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DatepickerComponent_Template_ngb_datepicker_ngModelChange_11_listener($event) {
              return ctx.model = $event;
            })("navigate", function DatepickerComponent_Template_ngb_datepicker_navigate_11_listener($event) {
              return ctx.date = $event.next;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerComponent_Template_button_click_15_listener() {
              return ctx.selectToday();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Select Today");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerComponent_Template_button_click_18_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

              return _r0.navigateTo();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " To current month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerComponent_Template_button_click_21_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

              return _r0.navigateTo({
                year: 2013,
                month: 2
              });
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " To Feb 2013 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "form", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 16, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DatepickerComponent_Template_input_ngModelChange_37_listener($event) {
              return ctx.secondModel = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerComponent_Template_button_click_40_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

              return _r1.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "ngb-datepicker", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "form", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 23, 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerComponent_Template_button_click_52_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50);

              return _r2.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "select", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DatepickerComponent_Template_select_ngModelChange_57_listener($event) {
              return ctx.displayMonths = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "option", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "One month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Two months");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "option", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Three months");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "select", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DatepickerComponent_Template_select_ngModelChange_64_listener($event) {
              return ctx.navigation = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "option", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Without navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "option", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "With select boxes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "option", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Without select boxes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "select", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DatepickerComponent_Template_select_ngModelChange_71_listener($event) {
              return ctx.showWeekNumbers = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "option", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Week numbers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "option", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "No week numbers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Example of the range selection");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "ngb-datepicker", 31, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DatepickerComponent_Template_ngb_datepicker_ngModelChange_81_listener($event) {
              return ctx.onDateChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, DatepickerComponent_ng_template_83_Template, 2, 7, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](89, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](92, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "ngb-datepicker", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DatepickerComponent_Template_ngb_datepicker_ngModelChange_96_listener($event) {
              return ctx.thirdModel = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerComponent_Template_button_click_99_listener() {
              return ctx.disabled = !ctx.disabled;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " These datepickers use custom Date adapter that lets you use your own model implementation. In this example we are converting from and to a JS native Date object ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "ngb-datepicker", 35, 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DatepickerComponent_Template_ngb_datepicker_ngModelChange_107_listener($event) {
              return ctx.model1 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerComponent_Template_button_click_111_listener() {
              return ctx.model1 = ctx.today;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Select Today ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](116, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " These datepickers use custom Date adapter that lets you use your own model implementation. In this example we are converting from and to a JS native Date object ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "form", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "input", 37, 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DatepickerComponent_Template_input_ngModelChange_127_listener($event) {
              return ctx.model2 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerComponent_Template_button_click_131_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

              var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](129);

              return _r9.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerComponent_Template_button_click_134_listener() {
              return ctx.model2 = ctx.today;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " Select Today ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](139, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " Datepicker in French ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "ngb-datepicker", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DatepickerComponent_Template_ngb_datepicker_ngModelChange_147_listener($event) {
              return ctx.fourthModel = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " This datepicker uses a custom template to display days. All week-ends are displayed with an orange background. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "form", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "input", 39, 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DatepickerComponent_Template_input_ngModelChange_156_listener($event) {
              return ctx.fifthModel = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerComponent_Template_button_click_159_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50);

              return _r2.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](161, DatepickerComponent_ng_template_161_Template, 2, 11, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " This datepicker uses customized default values. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "ngb-datepicker", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DatepickerComponent_Template_ngb_datepicker_ngModelChange_168_listener($event) {
              return ctx.sixModel = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](84);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](109);

            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](128);

            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](162);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svg", "assets/media/svg/icons/Tools/Compass.svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleBasicDatepicker);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Month: ", ctx.date.month, ".", ctx.date.year, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Model: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 51, ctx.model), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleDatepickerInAPopup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Model: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 53, ctx.secondModel), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.secondModel);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleMultipleMonths);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayMonths", ctx.displayMonths)("navigation", ctx.navigation)("showWeekNumbers", ctx.showWeekNumbers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayMonths", ctx.displayMonths)("navigation", ctx.navigation)("showWeekNumbers", ctx.showWeekNumbers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.displayMonths);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.navigation);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.showWeekNumbers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleRangeSelection);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayMonths", 2)("dayTemplate", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("From: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](89, 55, ctx.fromDate), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("To: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](92, 57, ctx.toDate), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleDisabledDatepicker);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.thirdModel)("disabled", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-sm btn-", ctx.disabled ? "danger" : "success", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.disabled ? "disabled" : "enabled", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleCustomDateAdapter);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Model: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](116, 59, ctx.model1), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("State: ", _r7.status, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Model: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](139, 61, ctx.model2), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("State: ", _r8.status, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleInternationalizationOfDatepickers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fourthModel);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleCustomDayView);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fifthModel)("dayTemplate", _r11)("markDisabled", ctx.isDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleGlobalConfigurationOfDatepickers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sixModel);
          }
        },
        directives: [_metronic_partials_content_general_notice_notice_component__WEBPACK_IMPORTED_MODULE_2__["NoticeComponent"], _metronic_partials_content_general_code_preview_code_preview_component__WEBPACK_IMPORTED_MODULE_3__["CodePreviewComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbInputDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["JsonPipe"]],
        styles: ["select.custom-select[_ngcontent-%COMP%] {\n        margin-right: 0.5rem;\n        width: auto;\n      }\n      .custom-day[_ngcontent-%COMP%] {\n        text-align: center;\n        padding: 0.185rem 0.25rem;\n        display: inline-block;\n        height: 2rem;\n        width: 2rem;\n      }\n      .custom-day.focused[_ngcontent-%COMP%] {\n        background-color: #e6e6e6;\n      }\n      .custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover {\n        background-color: rgb(2, 117, 216);\n        color: white;\n      }\n      .custom-day.faded[_ngcontent-%COMP%] {\n        background-color: rgba(2, 117, 216, 0.5);\n      }\n      .weekend[_ngcontent-%COMP%] {\n        background-color: #f0ad4e;\n        border-radius: 1rem;\n        color: white;\n      }\n      .hidden[_ngcontent-%COMP%] {\n        display: none;\n      }"],
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatepickerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ng-datepicker',
            templateUrl: './datepicker.component.html',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: ["\n      select.custom-select {\n        margin-right: 0.5rem;\n        width: auto;\n      }\n      .custom-day {\n        text-align: center;\n        padding: 0.185rem 0.25rem;\n        display: inline-block;\n        height: 2rem;\n        width: 2rem;\n      }\n      .custom-day.focused {\n        background-color: #e6e6e6;\n      }\n      .custom-day.range,\n      .custom-day:hover {\n        background-color: rgb(2, 117, 216);\n        color: white;\n      }\n      .custom-day.faded {\n        background-color: rgba(2, 117, 216, 0.5);\n      }\n      .weekend {\n        background-color: #f0ad4e;\n        border-radius: 1rem;\n        color: white;\n      }\n      .hidden {\n        display: none;\n      }\n    "]
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepickerConfig"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/ngbootstrap/dropdown/dropdown.component.ts":
    /*!********************************************************************!*\
      !*** ./src/app/modules/ngbootstrap/dropdown/dropdown.component.ts ***!
      \********************************************************************/

    /*! exports provided: DropdownComponent */

    /***/
    function srcAppModulesNgbootstrapDropdownDropdownComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropdownComponent", function () {
        return DropdownComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _metronic_partials_content_general_notice_notice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../_metronic/partials/content/general/notice/notice.component */
      "./src/app/_metronic/partials/content/general/notice/notice.component.ts");
      /* harmony import */


      var _metronic_partials_content_general_code_preview_code_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../_metronic/partials/content/general/code-preview/code-preview.component */
      "./src/app/_metronic/partials/content/general/code-preview/code-preview.component.ts");

      var dropdown = {
        beforeCodeTitle: 'Dropdown',
        htmlCode: "\n<div class=\"example-preview\">\n  <div>\n    <div class=\"row\">\n      <div class=\"col\">\n        <div ngbDropdown class=\"d-inline-block\">\n          <button class=\"btn btn-success\" id=\"dropdownBasic1\" ngbDropdownToggle>Toggle dropdown</button>\n          <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n            <button class=\"dropdown-item\">Action - 1</button>\n            <button class=\"dropdown-item\">Another Action</button>\n            <button class=\"dropdown-item\">Something else is here</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"col text-right\">\n        <div ngbDropdown placement=\"top-right\" class=\"d-inline-block\">\n          <button class=\"btn btn-outline-success\" id=\"dropdownBasic2\" ngbDropdownToggle>Toggle dropup</button>\n          <div ngbDropdownMenu aria-labelledby=\"dropdownBasic2\">\n            <button class=\"dropdown-item\">Action - 1</button>\n            <button class=\"dropdown-item\">Another Action</button>\n            <button class=\"dropdown-item\">Something else is here</button>\n           </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
        tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n  selector: 'ngbd-dropdown-basic',\n  templateUrl: './dropdown-basic.html'\n})\nexport class NgbdDropdownBasic { }\n",
        isCodeVisible: false,
        isExampleExpanded: true
      };
      var manualTriggers = {
        beforeCodeTitle: 'Manual triggers',
        htmlCode: "\n<div class=\"example-preview\">\n  <span>\n    You can easily control dropdowns programmatically using the exported dropdown instance.\n  </span>\n  <div>\n    <div class=\"d-inline-block\" ngbDropdown #myDrop=\"ngbDropdown\">\n      <button class=\"btn btn-primary\" id=\"dropdownManual\" ngbDropdownToggle>Toggle dropdown</button>\n      <div ngbDropdownMenu aria-labelledby=\"dropdownManual\">\n        <button class=\"dropdown-item\">Action - 1</button>\n        <button class=\"dropdown-item\">Another Action</button>\n        <button class=\"dropdown-item\">Something else is here</button>\n      </div>\n      <button class=\"btn btn-success\" (click)=\"$event.stopPropagation(); myDrop.open();\">Open from outside</button>\n      <button class=\"btn btn-danger\" (click)=\"$event.stopPropagation(); myDrop.close();\">Close from outside</button>\n    </div>\n  </div>\n</div>\n",
        tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n  selector: 'ngbd-dropdown-manual',\n  templateUrl: './dropdown-manual.html'\n})\nexport class NgbdDropdownManual { }\n",
        isCodeVisible: false,
        isExampleExpanded: true
      };
      var buttonGroupsAndSplitButtons = {
        beforeCodeTitle: 'Button groups and split buttons',
        htmlCode: "\n<div class=\"example-preview\">\n  <span>\n    Bootstrap split buttons and dropdowns on button groups are supported with the existing dropdown directives.\n  </span>\n  <div>\n    <div class=\"btn-group\">\n      <button type=\"button\" class=\"btn btn-success\">Plain ol' button</button>\n      <div class=\"btn-group\" ngbDropdown role=\"group\" aria-label=\"Button group with nested dropdown\">\n        <button class=\"btn btn-primary\" ngbDropdownToggle>Drop me</button>\n        <div class=\"dropdown-menu\" ngbDropdownMenu>\n          <button class=\"dropdown-item\">One</button>\n          <button class=\"dropdown-item\">Two</button>\n          <button class=\"dropdown-item\">Four!</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"btn-group\">\n      <button type=\"button\" class=\"btn btn-outline-primary\">Split me</button>\n      <div class=\"btn-group\" ngbDropdown role=\"group\" aria-label=\"Button group with nested dropdown\">\n        <button class=\"btn btn-outline-primary dropdown-toggle-split\" ngbDropdownToggle></button>\n        <div class=\"dropdown-menu\" ngbDropdownMenu>\n          <button class=\"dropdown-item\">One</button>\n          <button class=\"dropdown-item\">Two</button>\n          <button class=\"dropdown-item\">Four!</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"btn-group\">\n      <div class=\"btn-group\" ngbDropdown role=\"group\" aria-label=\"Button group with nested dropdown\">\n        <button class=\"btn btn-danger\" ngbDropdownToggle>Select me</button>\n        <div class=\"dropdown-menu\" ngbDropdownMenu>\n          <button class=\"dropdown-item\">One</button>\n          <button class=\"dropdown-item\">Two</button>\n          <button class=\"dropdown-item\">Four!</button>\n        </div>\n      </div>\n      <div class=\"btn-group\" ngbDropdown role=\"group\" aria-label=\"Button group with nested dropdown\">\n        <button class=\"btn btn-success\" ngbDropdownToggle>Or me</button>\n        <div class=\"dropdown-menu\" ngbDropdownMenu>\n          <button class=\"dropdown-item\">One</button>\n          <button class=\"dropdown-item\">Two</button>\n          <button class=\"dropdown-item\">Four!</button>\n        </div>\n      </div>\n    </div>\n   </div>\n</div>\n",
        tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-dropdown-split',\n    templateUrl: './dropdown-split.html'\n})\nexport class NgbdDropdownSplit {\n}\n",
        isCodeVisible: false,
        isExampleExpanded: true
      };
      var globalConfigurationOfDropdowns = {
        beforeCodeTitle: 'Global configuration of dropdowns',
        htmlCode: "\n<div class=\"example-preview\">\n  <span>This dropdown uses customized default values.</span>\n  <div>\n    <div ngbDropdown>\n      <button class=\"btn btn-primary\" id=\"dropdownConfig\" ngbDropdownToggle>Toggle</button>\n      <div ngbDropdownMenu aria-labelledby=\"dropdownConfig\">\n        <button class=\"dropdown-item\">Action - 1</button>\n        <button class=\"dropdown-item\">Another Action</button>\n        <button class=\"dropdown-item\">Something else is here</button>\n\t  </div>\n    </div>\n  </div>\n</div>\n",
        tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-dropdown-config',\n    templateUrl: './dropdown-config.html',\n    providers: [NgbDropdownConfig] // add NgbDropdownConfig to the component providers\n})\nexport class NgbdDropdownConfig {\n    constructor(config: NgbDropdownConfig) {\n        // customize default values of dropdowns used by this component tree\n        config.placement = 'top-left';\n        config.autoClose = false;\n    }\n}\n",
        isCodeVisible: false,
        isExampleExpanded: true
      };

      var DropdownComponent = /*#__PURE__*/function () {
        function DropdownComponent(config) {
          _classCallCheck(this, DropdownComponent);

          // customize default values of dropdowns used by this component tree
          // config.placement = 'top-left';
          config.autoClose = true;
        }

        _createClass(DropdownComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.exampleDropdown = dropdown;
            this.exampleManualTriggers = manualTriggers;
            this.exampleButtonGroupsAndSplitButtons = buttonGroupsAndSplitButtons;
            this.exampleGlobalConfigurationOfDropdowns = globalConfigurationOfDropdowns;
          }
        }]);

        return DropdownComponent;
      }();

      DropdownComponent.ɵfac = function DropdownComponent_Factory(t) {
        return new (t || DropdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"]));
      };

      DropdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DropdownComponent,
        selectors: [["app-ng-dropdown"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"]])],
        decls: 125,
        vars: 5,
        consts: [[3, "svg"], ["href", "https://ng-bootstrap.github.io/#/components/dropdown/examples", "target", "_blank", 1, "font-weight-bold"], [1, "row"], [1, "col-xl-6"], [3, "viewItem"], [1, "example-preview"], [1, "col"], ["ngbDropdown", "", 1, "d-inline-block"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-success"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], [1, "dropdown-item"], [1, "col", "text-right"], ["ngbDropdown", "", "placement", "top-right", 1, "d-inline-block"], ["id", "dropdownBasic2", "ngbDropdownToggle", "", 1, "btn", "btn-outline-success"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic2"], ["myDrop", "ngbDropdown"], ["id", "dropdownManual", "ngbDropdownToggle", "", 1, "btn", "btn-primary"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownManual"], [1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-danger", 3, "click"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-success"], ["ngbDropdown", "", "role", "group", "aria-label", "Button group with nested dropdown", 1, "btn-group"], ["ngbDropdownToggle", "", 1, "btn", "btn-primary"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["type", "button", 1, "btn", "btn-outline-primary"], ["ngbDropdownToggle", "", 1, "btn", "btn-outline-primary", "dropdown-toggle-split"], ["ngbDropdownToggle", "", 1, "btn", "btn-danger"], ["ngbDropdownToggle", "", 1, "btn", "btn-success"], ["ngbDropdown", ""], ["id", "dropdownConfig", "ngbDropdownToggle", "", 1, "btn", "btn-primary"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownConfig"]],
        template: function DropdownComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notice", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " For more info please check the components's official demos & documentation ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "demos & documentation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Toggle dropdown ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Action - 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Another Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Something else is here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Toggle dropup ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Action - 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Another Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Something else is here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " You can easily control dropdowns programmatically using the exported dropdown instance. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Toggle dropdown");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Action - 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Another Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Something else is here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropdownComponent_Template_button_click_49_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

              $event.stopPropagation();
              return _r0.open();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Open from outside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropdownComponent_Template_button_click_52_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

              $event.stopPropagation();
              return _r0.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Close from outside ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Bootstrap split buttons and dropdowns on button groups are supported with the existing dropdown directives. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Plain ol' button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Drop me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "One");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Two");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Four!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Split me ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "One");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Two");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Four!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Select me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "One");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Two");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Four!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Or me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "One");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Two");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Four!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " This dropdown uses customized default values. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " Toggle ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Action - 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Another Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Something else is here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svg", "assets/media/svg/icons/Tools/Compass.svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleDropdown);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleManualTriggers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleButtonGroupsAndSplitButtons);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleGlobalConfigurationOfDropdowns);
          }
        },
        directives: [_metronic_partials_content_general_notice_notice_component__WEBPACK_IMPORTED_MODULE_2__["NoticeComponent"], _metronic_partials_content_general_code_preview_code_preview_component__WEBPACK_IMPORTED_MODULE_3__["CodePreviewComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"]],
        styles: ["[_nghost-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: inline-block !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uZ2Jvb3RzdHJhcC9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQztFQUNDLGdDQUFBO0FBREYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL25nYm9vdHN0cmFwL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG5cdC8vIHNob3cgYm9vdHN0cmFwIGRyb3Bkb3duIGFycm93XHJcblx0LmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcblx0fVxyXG59XHJcbiJdfQ== */"],
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropdownComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ng-dropdown',
            templateUrl: './dropdown.component.html',
            styleUrls: ['dropdown.component.scss'],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"]]
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/ngbootstrap/modal/modal.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/modules/ngbootstrap/modal/modal.component.ts ***!
      \**************************************************************/

    /*! exports provided: NgbdModalContentComponent, ModalComponent */

    /***/
    function srcAppModulesNgbootstrapModalModalComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbdModalContentComponent", function () {
        return NgbdModalContentComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalComponent", function () {
        return ModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _metronic_partials_content_general_notice_notice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../_metronic/partials/content/general/notice/notice.component */
      "./src/app/_metronic/partials/content/general/notice/notice.component.ts");
      /* harmony import */


      var _metronic_partials_content_general_code_preview_code_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../_metronic/partials/content/general/code-preview/code-preview.component */
      "./src/app/_metronic/partials/content/general/code-preview/code-preview.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");

      function ModalComponent_span_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.closeResult);
        }
      }

      function ModalComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Basic demo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_ng_template_10_Template_button_click_3_listener() {
            var d_r16 = ctx.dismiss;
            return d_r16("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_ng_template_10_Template_button_click_10_listener() {
            var c_r15 = ctx.close;
            return c_r15("Close click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Close ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Save changes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ModalComponent_ng_template_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Modal title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_ng_template_31_Template_button_click_3_listener() {
            var d_r20 = ctx.dismiss;
            return d_r20("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "One fine body\u2026");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_ng_template_31_Template_button_click_10_listener() {
            var c_r19 = ctx.close;
            return c_r19("Close click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Close ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Save changes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ModalComponent_ng_template_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Scrollable fixed content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_ng_template_38_Template_button_click_3_listener() {
            var d_r24 = ctx.dismiss;
            return d_r24("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "perfect-scrollbar", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_ng_template_38_Template_button_click_15_listener() {
            var c_r23 = ctx.close;
            return c_r23("Close click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Close ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Save changes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ModalComponent_ng_template_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Scrollable long content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_ng_template_45_Template_button_click_3_listener() {
            var d_r28 = ctx.dismiss;
            return d_r28("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_ng_template_45_Template_button_click_22_listener() {
            var c_r27 = ctx.close;
            return c_r27("Close click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Close ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Save changes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ModalComponent_ng_template_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Modal title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_ng_template_53_Template_button_click_3_listener() {
            var d_r32 = ctx.dismiss;
            return d_r32("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_ng_template_53_Template_button_click_10_listener() {
            var c_r31 = ctx.close;
            return c_r31("Close click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Close ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Save changes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ModalComponent_ng_template_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Modal title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_ng_template_60_Template_button_click_3_listener() {
            var d_r36 = ctx.dismiss;
            return d_r36("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_ng_template_60_Template_button_click_10_listener() {
            var c_r35 = ctx.close;
            return c_r35("Close click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Close ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Save changes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ModalComponent_ng_template_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Modal title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_ng_template_67_Template_button_click_3_listener() {
            var d_r40 = ctx.dismiss;
            return d_r40("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_ng_template_67_Template_button_click_10_listener() {
            var c_r39 = ctx.close;
            return c_r39("Close click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Close ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Save changes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var modalWithDefaultOptions = {
        beforeCodeTitle: 'Modal with default options',
        htmlCode: "\n<div class=\"example-preview\">\n  <span *ngIf=\"closeResult\">\n    <pre>{{closeResult}}</pre>\n  </span>\n  <div>\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Basic demo</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's\n\t\t  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a\n\t\t  type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining\n\t\t  essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum\n          passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </ng-template>\n    <button class=\"btn btn-primary\" (click)=\"open(content)\">Launch demo modal</button>\n  </div>\n</div>\n",
        tsCode: "\nimport {Component} from '@angular/core';\n\nimport {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-modal-basic',\n    templateUrl: './modal-basic.html'\n})\nexport class NgbdModalBasic {\n    closeResult: string;\n\n    constructor(private modalService: NgbModal) {}\n\n    open(content) {\n        this.modalService.open(content).result.then((result) => {\n        this.closeResult = `Closed with: ${result}`;\n        }, (reason) => {\n            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;\n        });\n    }\n\n    private getDismissReason(reason: any): string {\n        if (reason === ModalDismissReasons.ESC) {\n            return 'by pressing ESC';\n        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {\n            return 'by clicking on a backdrop';\n        } else {\n            return  `with: ${reason}`;\n        }\n    }\n}\n",
        isCodeVisible: false,
        isExampleExpanded: true
      };
      var componentsAsContent = {
        beforeCodeTitle: 'Components as content',
        htmlCode: "\n<div class=\"example-preview\">\n  <div>\n    <p>You can pass an existing component as content of the modal window. In this case remember to add content component as an\n      <code>entryComponents</code> section of your\n      <code>NgModule</code>.\n    </p>\n  </div>\n  <div>\n    <button class=\"btn btn-info\" (click)=\"open2()\">Launch demo modal</button>\n  </div>\n</div>\n",
        tsCode: "\nimport {Component, Input} from '@angular/core';\n\nimport {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-modal-content',\n    template: `\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Hi there!</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <p>Hello, {{name}}!</p>\n        </div>\n\t\t<div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n        </div>\n    `\n})\nexport class NgbdModalContent {\n    @Input() name;\n    constructor(public activeModal: NgbActiveModal) {}\n    }\n\n@Component({\n    selector: 'ngbd-modal-component',\n    templateUrl: './modal-component.html'\n})\nexport class NgbdModalComponent {\n    constructor(private modalService: NgbModal) {}\n\n    open() {\n        const modalRef = this.modalService.open(NgbdModalContent);\n        modalRef.componentInstance.name = 'World';\n    }\n}\n",
        isCodeVisible: false,
        isExampleExpanded: true
      };
      var modalWithCustomClass = {
        beforeCodeTitle: 'Modal with custom class',
        htmlCode: "\n<div class=\"example-preview\">\n  <div>\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal title</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>One fine body&hellip;</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n       </div>\n    </ng-template>\n    <button class=\"btn btn-focus\" (click)=\"open(content)\">Launch demo modal</button>\n  </div>\n</div>\n",
        tsCode: "\nimport {Component, ViewEncapsulation} from '@angular/core';\n\nimport {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-modal-customclass',\n    templateUrl: './modal-customclass.html',\n\tencapsulation: ViewEncapsulation.None,\n\tstyles: [`\n            .dark-modal .modal-content {\n            background-color: #292b2c;\n            color: white;\n        }\n            .dark-modal .close {\n            color: white;\n        }\n   `]\n})\nexport class NgbdModalCustomclass {\n    closeResult: string;\n\n    constructor(private modalService: NgbModal) {}\n\n    open(content) {\n        this.modalService.open(content, { windowClass: 'dark-modal' });\n    }\n\n}\n",
        isCodeVisible: false,
        isExampleExpanded: true
      };
      var scrollableFixedContent = {
        beforeCodeTitle: 'Scrollable fixed content',
        htmlCode: "\n<div class=\"example-preview\">\n  <div>\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Scrollable fixed content</h4>\n\t    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n          <span aria-hidden=\"true\">&times;</span>\n\t    </button>\n      </div>\n      <div class=\"modal-body\">\n        <perfect-scrollbar style=\"height: 250px;\" [config]=\"config\">\n\t\t  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's\n\t\t\tstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a\n\t\t\ttype specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,\n\t\t\tremaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing\n\t\t\tLorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n          </p>\n\t\t  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's\n\t\t\tstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a\n\t\t\ttype specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining\n\t\t\tessentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,\n            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n\t\t  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard\n\t\t   dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen\n\t\t   book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n           It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,\n           and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n        </perfect-scrollbar>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </ng-template>\n    <button class=\"btn btn-metal\" (click)=\"open(content)\">Launch demo modal</button>\n  </div>\n</div>\n",
        tsCode: "\nimport {Component, ViewEncapsulation} from '@angular/core';\nimport {NgbModal} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-modal-scrollablefixedcontent',\n    templateUrl: './modal-scrollabledixedcontent.html',\n})\nexport class NgbdModalScrollableFixedContent {\n    constructor(private modalService: NgbModal) {}\n\n    open(content) {\n        this.modalService.open(content);\n    }\n}\n",
        isCodeVisible: false,
        isExampleExpanded: true
      };
      var scrollingLongContent = {
        beforeCodeTitle: 'Scrolling long content',
        htmlCode: "\n<div class=\"example-preview\">\n  <div>\n    <ng-template #content5 let-c=\"close\" let-d=\"dismiss\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Scrollable fixed content</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>\n\t\t  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.\n\t\t  Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.\n          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum ateros.\n        </p>\n        <p>\n\t\t  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.\n\t\t  Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.\n          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n        </p>\n        <p>\n\t\t  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi\n\t\t  leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\n          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n        </p>\n        <p>\n\t\t  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi\n\t\t  leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\n          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n        </p>\n        <p>\n\t\t  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi\n\t\t  leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo\n          odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n        </p>\n        <p>\n\t\t  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi\n\t\t  leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo\n          odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n        </p>\n        <p>\n\t\t  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi\n\t\t  leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo\n          odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n        </p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </ng-template>\n    <button class=\"btn btn-brand\" (click)=\"open(content5)\">Launch demo modal</button>\n  </div>\n</div>\n",
        tsCode: "\nimport {Component, ViewEncapsulation} from '@angular/core';\nimport {NgbModal} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-modal-scrollingLongContent',\n    templateUrl: './modal-scrollingLongContent.html',\n})\nexport class NgbdModalScrollinglongcontent {\n    constructor(private modalService: NgbModal) {}\n\n    open(content) {\n        this.modalService.open(content);\n    }\n}\n",
        isCodeVisible: false,
        isExampleExpanded: true
      };
      var largeModal = {
        beforeCodeTitle: 'Large modal',
        htmlCode: "\n<div class=\"example-preview\">\n  <div>\n    <ng-template #content6 let-c=\"close\" let-d=\"dismiss\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal title</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>\n\t\t  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.\n\t\t  Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.\n          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n        </p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </ng-template>\n    <button class=\"btn btn-success\" (click)=\"openLarge(content6)\">Launch demo modal</button>\n  </div>\n</div>\n",
        tsCode: "\nimport {Component, ViewEncapsulation} from '@angular/core';\nimport {NgbModal} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-modal-largemodal',\n    templateUrl: './modal-largemodal.html',\n})\nexport class NgbdModalLargeModal {\n    constructor(private modalService: NgbModal) {}\n\n    openLarge(content) {\n        this.modalService.open(content, {\n            size: 'lg'\n        });\n    }\n}\n",
        isCodeVisible: false,
        isExampleExpanded: true
      };
      var smallModal = {
        beforeCodeTitle: 'Small modal',
        htmlCode: "\n<div class=\"example-preview\">\n  <div>\n    <ng-template #content7 let-c=\"close\" let-d=\"dismiss\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal title</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>\n\t\t  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.\n\t\t  Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.\n          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n        </p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </ng-template>\n    <button class=\"btn btn-success\" (click)=\"openSmall(content7)\">Launch demo modal</button>\n  </div>\n</div>\n",
        tsCode: "\nimport {Component, ViewEncapsulation} from '@angular/core';\nimport {NgbModal} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-modal-smallmodal',\n    templateUrl: './modal-smallmodal.html',\n})\nexport class NgbdModalSmallmodal {\n    constructor(private modalService: NgbModal) {}\n\n    openSmall(content) {\n        this.modalService.open(content, {\n            size: 'sm'\n        });\n    }\n}\n",
        isCodeVisible: false,
        isExampleExpanded: true
      };
      var verticallyCentered = {
        beforeCodeTitle: 'Vertically centered',
        htmlCode: "\n<div class=\"example-preview\">\n  <div>\n    <ng-template #content8 let-c=\"close\" let-d=\"dismiss\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal title</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>\n\t\t  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.\n\t\t  Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.\n          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n        </p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </ng-template>\n    <button class=\"btn btn-danger\" (click)=\"openCentred(content7)\">Launch demo modal</button>\n  </div>\n</div>\n",
        tsCode: "\nimport {Component, ViewEncapsulation} from '@angular/core';\nimport {NgbModal} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-modal-vertically\u0441entered',\n    templateUrl: './modal-vertically\u0441entered.html',\n})\nexport class NgbdModalVerticallycentered {\n    constructor(private modalService: NgbModal) {}\n\n    openCentred(content) {\n        this.modalService.open(content, { centered: true } );\n    }\n}\n",
        isCodeVisible: false,
        isExampleExpanded: true
      };

      var NgbdModalContentComponent = function NgbdModalContentComponent(activeModal) {
        _classCallCheck(this, NgbdModalContentComponent);

        this.activeModal = activeModal;
      };

      NgbdModalContentComponent.ɵfac = function NgbdModalContentComponent_Factory(t) {
        return new (t || NgbdModalContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]));
      };

      NgbdModalContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NgbdModalContentComponent,
        selectors: [["app-ngbd-modal-content"]],
        inputs: {
          name: "name"
        },
        decls: 12,
        vars: 1,
        consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-info", 3, "click"]],
        template: function NgbdModalContentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hi there!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbdModalContentComponent_Template_button_click_3_listener() {
              return ctx.activeModal.dismiss("Cross click");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbdModalContentComponent_Template_button_click_10_listener() {
              return ctx.activeModal.close("Close click");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Close ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hello, ", ctx.name, "!");
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbdModalContentComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ngbd-modal-content',
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Hi there!</h4>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"activeModal.dismiss('Cross click')\"\n      >\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p>Hello, {{ name }}!</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button\n        type=\"button\"\n        class=\"btn btn-info\"\n        (click)=\"activeModal.close('Close click')\"\n      >\n        Close\n      </button>\n    </div>\n  "
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var ModalComponent = /*#__PURE__*/function () {
        function ModalComponent(modalService) {
          _classCallCheck(this, ModalComponent);

          this.modalService = modalService;
        }

        _createClass(ModalComponent, [{
          key: "open",
          value: function open(content) {
            var _this5 = this;

            this.modalService.open(content).result.then(function (result) {
              _this5.closeResult = "Closed with: ".concat(result);
            }, function (reason) {
              _this5.closeResult = "Dismissed ".concat(_this5.getDismissReason(reason));
            });
          }
        }, {
          key: "open2",
          value: function open2() {
            var modalRef = this.modalService.open(NgbdModalContentComponent);
            modalRef.componentInstance.name = 'World';
          }
        }, {
          key: "open3",
          value: function open3(content) {
            this.modalService.open(content, {
              windowClass: 'dark-modal'
            });
          }
        }, {
          key: "getDismissReason",
          value: function getDismissReason(reason) {
            if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
              return 'by pressing ESC';
            } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
              return 'by clicking on a backdrop';
            } else {
              return "with: ".concat(reason);
            }
          }
        }, {
          key: "openLarge",
          value: function openLarge(content) {
            this.modalService.open(content, {
              size: 'lg'
            });
          }
        }, {
          key: "openSmall",
          value: function openSmall(content) {
            this.modalService.open(content, {
              size: 'sm'
            });
          }
        }, {
          key: "openCentred",
          value: function openCentred(content) {
            this.modalService.open(content // { centered: true }
            );
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.exampleModalWithDefaultOptions = modalWithDefaultOptions;
            this.exampleComponentsAsContent = componentsAsContent;
            this.exampleModalWithCustomClass = modalWithCustomClass;
            this.exampleScrollableFixedContent = scrollableFixedContent;
            this.exampleScrollingLongContent = scrollingLongContent;
            this.exampleLargeModal = largeModal;
            this.exampleSmallModal = smallModal;
            this.exampleVerticallyCentered = verticallyCentered;
          }
        }]);

        return ModalComponent;
      }();

      ModalComponent.ɵfac = function ModalComponent_Factory(t) {
        return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]));
      };

      ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ModalComponent,
        selectors: [["app-ng-modal"]],
        decls: 71,
        vars: 10,
        consts: [[3, "svg"], ["href", "https://ng-bootstrap.github.io/#/components/alert/examples", "target", "_blank", 1, "font-weight-bold"], [1, "row"], [1, "col-xl-6"], [3, "viewItem"], [1, "example-preview"], [4, "ngIf"], ["content", ""], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-info", 3, "click"], ["content3", ""], [1, "btn", "btn-focus", 3, "click"], ["content4", ""], [1, "btn", "btn-metal", 3, "click"], ["content5", ""], [1, "btn", "btn-brand", 3, "click"], ["content6", ""], [1, "btn", "btn-success", 3, "click"], ["content7", ""], [1, "btn", "btn-warning", 3, "click"], ["content8", ""], [1, "btn", "btn-danger", 3, "click"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary"], [2, "height", "250px"]],
        template: function ModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notice", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " For more info please check the components's official demos & documentation ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "demos & documentation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ModalComponent_span_8_Template, 3, 1, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ModalComponent_ng_template_10_Template, 14, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_12_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

              return ctx.open(_r1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Launch demo modal ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " You can pass an existing component as content of the modal window. In this case remember to add content component as an ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "entryComponents");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " section of your ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "NgModule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_26_listener() {
              return ctx.open2();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Launch demo modal ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ModalComponent_ng_template_31_Template, 14, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_33_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

              return ctx.open3(_r3);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Launch demo modal ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ModalComponent_ng_template_38_Template, 19, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_40_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

              var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);

              return ctx.open(_r5);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Launch demo modal ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ModalComponent_ng_template_45_Template, 26, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_47_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

              var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46);

              return ctx.open(_r7);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Launch demo modal ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ModalComponent_ng_template_53_Template, 14, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_55_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

              var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](54);

              return ctx.openLarge(_r9);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Launch demo modal ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, ModalComponent_ng_template_60_Template, 14, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_62_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

              var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](61);

              return ctx.openSmall(_r11);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Launch demo modal ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, ModalComponent_ng_template_67_Template, 14, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_69_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

              var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](61);

              return ctx.openCentred(_r11);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Launch demo modal ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svg", "assets/media/svg/icons/Tools/Compass.svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleModalWithDefaultOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.closeResult);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleComponentsAsContent);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleModalWithCustomClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleScrollableFixedContent);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleScrollingLongContent);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleLargeModal);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleSmallModal);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleVerticallyCentered);
          }
        },
        directives: [_metronic_partials_content_general_notice_notice_component__WEBPACK_IMPORTED_MODULE_2__["NoticeComponent"], _metronic_partials_content_general_code_preview_code_preview_component__WEBPACK_IMPORTED_MODULE_3__["CodePreviewComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarComponent"]],
        styles: ["\n      .dark-modal .modal-content {\n        background-color: #292b2c;\n        color: white;\n      }\n      .dark-modal .close {\n        color: white;\n      }\n    "],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ng-modal',
            templateUrl: './modal.component.html',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: ["\n      .dark-modal .modal-content {\n        background-color: #292b2c;\n        color: white;\n      }\n      .dark-modal .close {\n        color: white;\n      }\n    "]
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/ngbootstrap/ngbootstrap.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/modules/ngbootstrap/ngbootstrap.component.ts ***!
      \**************************************************************/

    /*! exports provided: NgbootstrapComponent */

    /***/
    function srcAppModulesNgbootstrapNgbootstrapComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbootstrapComponent", function () {
        return NgbootstrapComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var NgbootstrapComponent = /*#__PURE__*/function () {
        function NgbootstrapComponent() {
          _classCallCheck(this, NgbootstrapComponent);
        }

        _createClass(NgbootstrapComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NgbootstrapComponent;
      }();

      NgbootstrapComponent.ɵfac = function NgbootstrapComponent_Factory(t) {
        return new (t || NgbootstrapComponent)();
      };

      NgbootstrapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NgbootstrapComponent,
        selectors: [["app-ngbootstrap"]],
        decls: 1,
        vars: 0,
        template: function NgbootstrapComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbootstrapComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ngbootstrap',
            templateUrl: './ngbootstrap.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/ngbootstrap/ngbootstrap.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/modules/ngbootstrap/ngbootstrap.module.ts ***!
      \***********************************************************/

    /*! exports provided: NgbootstrapModule */

    /***/
    function srcAppModulesNgbootstrapNgbootstrapModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbootstrapModule", function () {
        return NgbootstrapModule;
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


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
      /* harmony import */


      var _metronic_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../_metronic/core */
      "./src/app/_metronic/core/index.ts");
      /* harmony import */


      var _metronic_partials_content_general_general_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../_metronic/partials/content/general/general.module */
      "./src/app/_metronic/partials/content/general/general.module.ts");
      /* harmony import */


      var _ngbootstrap_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./ngbootstrap.component */
      "./src/app/modules/ngbootstrap/ngbootstrap.component.ts");
      /* harmony import */


      var _alert_alert_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./alert/alert.component */
      "./src/app/modules/ngbootstrap/alert/alert.component.ts");
      /* harmony import */


      var _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./accordion/accordion.component */
      "./src/app/modules/ngbootstrap/accordion/accordion.component.ts");
      /* harmony import */


      var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./buttons/buttons.component */
      "./src/app/modules/ngbootstrap/buttons/buttons.component.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./carousel/carousel.component */
      "./src/app/modules/ngbootstrap/carousel/carousel.component.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _collapse_collapse_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./collapse/collapse.component */
      "./src/app/modules/ngbootstrap/collapse/collapse.component.ts");
      /* harmony import */


      var _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./datepicker/datepicker.component */
      "./src/app/modules/ngbootstrap/datepicker/datepicker.component.ts");
      /* harmony import */


      var _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./dropdown/dropdown.component */
      "./src/app/modules/ngbootstrap/dropdown/dropdown.component.ts");
      /* harmony import */


      var _modal_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./modal/modal.component */
      "./src/app/modules/ngbootstrap/modal/modal.component.ts");
      /* harmony import */


      var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./pagination/pagination.component */
      "./src/app/modules/ngbootstrap/pagination/pagination.component.ts");
      /* harmony import */


      var _popover_popover_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./popover/popover.component */
      "./src/app/modules/ngbootstrap/popover/popover.component.ts");
      /* harmony import */


      var _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./progressbar/progressbar.component */
      "./src/app/modules/ngbootstrap/progressbar/progressbar.component.ts");
      /* harmony import */


      var _rating_rating_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./rating/rating.component */
      "./src/app/modules/ngbootstrap/rating/rating.component.ts");
      /* harmony import */


      var _timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./timepicker/timepicker.component */
      "./src/app/modules/ngbootstrap/timepicker/timepicker.component.ts");
      /* harmony import */


      var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./tooltip/tooltip.component */
      "./src/app/modules/ngbootstrap/tooltip/tooltip.component.ts");
      /* harmony import */


      var _typehead_typehead_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./typehead/typehead.component */
      "./src/app/modules/ngbootstrap/typehead/typehead.component.ts");

      var routes = [{
        path: '',
        component: _ngbootstrap_component__WEBPACK_IMPORTED_MODULE_7__["NgbootstrapComponent"],
        children: [{
          path: 'accordion',
          component: _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_9__["AccordionComponent"]
        }, {
          path: 'alert',
          component: _alert_alert_component__WEBPACK_IMPORTED_MODULE_8__["AlertComponent"]
        }, {
          path: 'buttons',
          component: _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_10__["ButtonsComponent"]
        }, {
          path: 'carousel',
          component: _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_12__["CarouselComponent"]
        }, {
          path: 'collapse',
          component: _collapse_collapse_component__WEBPACK_IMPORTED_MODULE_14__["CollapseComponent"]
        }, {
          path: 'datepicker',
          component: _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_15__["DatepickerComponent"]
        }, {
          path: 'dropdown',
          component: _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_16__["DropdownComponent"]
        }, {
          path: 'modal',
          component: _modal_modal_component__WEBPACK_IMPORTED_MODULE_17__["ModalComponent"]
        }, {
          path: 'pagination',
          component: _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_18__["PaginationComponent"]
        }, {
          path: 'popover',
          component: _popover_popover_component__WEBPACK_IMPORTED_MODULE_19__["PopoverComponent"]
        }, {
          path: 'progressbar',
          component: _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_20__["ProgressbarComponent"]
        }, {
          path: 'rating',
          component: _rating_rating_component__WEBPACK_IMPORTED_MODULE_21__["RatingComponent"]
        }, {
          path: 'timepicker',
          component: _timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_22__["TimepickerComponent"]
        }, {
          path: 'tooltip',
          component: _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_23__["TooltipComponent"]
        }, {
          path: 'typehead',
          component: _typehead_typehead_component__WEBPACK_IMPORTED_MODULE_24__["TypeheadComponent"]
        }, {
          path: '',
          redirectTo: 'accordion',
          pathMatch: 'full'
        }, {
          path: '**',
          redirectTo: 'accordion',
          pathMatch: 'full'
        }]
      }];

      var NgbootstrapModule = function NgbootstrapModule() {
        _classCallCheck(this, NgbootstrapModule);
      };

      NgbootstrapModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NgbootstrapModule
      });
      NgbootstrapModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NgbootstrapModule_Factory(t) {
          return new (t || NgbootstrapModule)();
        },
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlertConfig"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _metronic_partials_content_general_general_module__WEBPACK_IMPORTED_MODULE_6__["GeneralModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _metronic_core__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgbootstrapModule, {
          declarations: [_ngbootstrap_component__WEBPACK_IMPORTED_MODULE_7__["NgbootstrapComponent"], _alert_alert_component__WEBPACK_IMPORTED_MODULE_8__["AlertComponent"], _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_9__["AccordionComponent"], _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_10__["ButtonsComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_12__["CarouselComponent"], _collapse_collapse_component__WEBPACK_IMPORTED_MODULE_14__["CollapseComponent"], _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_15__["DatepickerComponent"], _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_16__["DropdownComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_17__["ModalComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_17__["NgbdModalContentComponent"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_18__["PaginationComponent"], _popover_popover_component__WEBPACK_IMPORTED_MODULE_19__["PopoverComponent"], _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_20__["ProgressbarComponent"], _rating_rating_component__WEBPACK_IMPORTED_MODULE_21__["RatingComponent"], _timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_22__["TimepickerComponent"], _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_23__["TooltipComponent"], _typehead_typehead_component__WEBPACK_IMPORTED_MODULE_24__["TypeheadComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _metronic_partials_content_general_general_module__WEBPACK_IMPORTED_MODULE_6__["GeneralModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _metronic_core__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbootstrapModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _metronic_partials_content_general_general_module__WEBPACK_IMPORTED_MODULE_6__["GeneralModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _metronic_core__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: [_ngbootstrap_component__WEBPACK_IMPORTED_MODULE_7__["NgbootstrapComponent"], _alert_alert_component__WEBPACK_IMPORTED_MODULE_8__["AlertComponent"], _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_9__["AccordionComponent"], _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_10__["ButtonsComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_12__["CarouselComponent"], _collapse_collapse_component__WEBPACK_IMPORTED_MODULE_14__["CollapseComponent"], _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_15__["DatepickerComponent"], _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_16__["DropdownComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_17__["ModalComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_17__["NgbdModalContentComponent"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_18__["PaginationComponent"], _popover_popover_component__WEBPACK_IMPORTED_MODULE_19__["PopoverComponent"], _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_20__["ProgressbarComponent"], _rating_rating_component__WEBPACK_IMPORTED_MODULE_21__["RatingComponent"], _timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_22__["TimepickerComponent"], _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_23__["TooltipComponent"], _typehead_typehead_component__WEBPACK_IMPORTED_MODULE_24__["TypeheadComponent"]],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlertConfig"]],
            entryComponents: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_17__["NgbdModalContentComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/ngbootstrap/pagination/pagination.component.ts":
    /*!************************************************************************!*\
      !*** ./src/app/modules/ngbootstrap/pagination/pagination.component.ts ***!
      \************************************************************************/

    /*! exports provided: PaginationComponent */

    /***/
    function srcAppModulesNgbootstrapPaginationPaginationComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaginationComponent", function () {
        return PaginationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _metronic_partials_content_general_notice_notice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../_metronic/partials/content/general/notice/notice.component */
      "./src/app/_metronic/partials/content/general/notice/notice.component.ts");
      /* harmony import */


      var _metronic_partials_content_general_code_preview_code_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../_metronic/partials/content/general/code-preview/code-preview.component */
      "./src/app/_metronic/partials/content/general/code-preview/code-preview.component.ts");

      var basicPagination = {
        beforeCodeTitle: 'Basic pagination',
        htmlCode: "\n<div class=\"example-preview\">\n  <span>\n    Default pagination:\n  </span>\n  <div>\n    <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" aria-label=\"Default pagination\"></ngb-pagination>\n  </div>\n</div>\n<div class=\"separator separator-dashed my-6\"></div>\n<div class=\"example-preview\">\n  <span>\n    No direction links:\n  </span>\n  <div>\n    <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" [directionLinks]=\"false\"></ngb-pagination>\n  </div>\n</div>\n<div class=\"separator separator-dashed my-6\"></div>\n  <div class=\"example-preview\">\n    <span>\n      With boundary links:\n    </span>\n  <div>\n    <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" [boundaryLinks]=\"true\"></ngb-pagination>\n  </div>\n</div>\n<div class=\"separator separator-dashed my-6\"></div>\n<div class=\"example-preview\">\n   <div>\n     <pre>Current page: {{page}}</pre>\n  </div>\n</div>\n",
        tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-pagination-basic',\n    templateUrl: './pagination-basic.html'\n})\nexport class NgbdPaginationBasic {\n    page = 4;\n}\n\t",
        viewCode: "",
        isCodeVisible: false,
        isExampleExpanded: true
      };
      var advancedPagination = {
        beforeCodeTitle: 'Advanced pagination',
        htmlCode: "\n<div class=\"example-preview\">\n  <span>\n    Restricted size, no rotation:\n  </span>\n  <div>\n    <ngb-pagination [collectionSize]=\"120\" [(page)]=\"page2\" [maxSize]=\"5\" [boundaryLinks]=\"true\"></ngb-pagination>\n  </div>\n</div>\n<div class=\"separator separator-dashed my-6\"></div>\n<div class=\"example-preview\">\n  <span>\n    Restricted size with rotation:\n  </span>\n  <div>\n    <ngb-pagination [collectionSize]=\"120\" [(page)]=\"page2\" [maxSize]=\"5\" [rotate]=\"true\" [boundaryLinks]=\"true\"></ngb-pagination>\n  </div>\n</div>\n<div class=\"separator separator-dashed my-6\"></div>\n<div class=\"example-preview\">\n  <span>\n    Restricted size with rotation and no ellipses:\n  </span>\n  <div>\n\t<ngb-pagination [collectionSize]=\"120\" [(page)]=\"page2\" [maxSize]=\"5\" [rotate]=\"true\" [ellipses]=\"false\"\n      [boundaryLinks]=\"true\"></ngb-pagination>\n  </div>\n</div>\n<div class=\"separator separator-dashed my-6\"></div>\n  <div class=\"example-preview\">\n    <div>\n      <pre>Current page: {{page2}}</pre>\n  </div>\n</div>\n\t\t",
        tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-pagination-advanced',\n    templateUrl: './pagination-advanced.html'\n})\nexport class NgbdPaginationAdvanced {\n    page = 1;\n}\n\t\t",
        viewCode: "",
        isCodeVisible: false
      };
      var paginationSize = {
        beforeCodeTitle: 'Pagination size',
        htmlCode: "\n<div class=\"example-preview\">\n  <div>\n    <ngb-pagination [collectionSize]=\"50\" [(page)]=\"currentPage\" size=\"lg\"></ngb-pagination>\n    <ngb-pagination [collectionSize]=\"50\" [(page)]=\"currentPage\"></ngb-pagination>\n    <ngb-pagination [collectionSize]=\"50\" [(page)]=\"currentPage\" size=\"sm\"></ngb-pagination>\n  </div>\n</div>\n\t\t",
        tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-pagination-size',\n    templateUrl: './pagination-size.html'\n})\nexport class NgbdPaginationSize {\n    currentPage = 3;\n}\n\t\t",
        viewCode: "",
        isCodeVisible: false
      };
      var paginationAlignment = {
        beforeCodeTitle: 'Pagination alignment',
        htmlCode: "\n<div class=\"example-preview\">\n  <span>\n    Change the alignment of pagination components with flexbox utilities\n  </span>\n  <div>\n    <ngb-pagination class=\"d-flex justify-content-start\" [collectionSize]=\"70\" [(page)]=\"page3\"></ngb-pagination>\n    <ngb-pagination class=\"d-flex justify-content-center\" [collectionSize]=\"70\" [(page)]=\"page3\"></ngb-pagination>\n    <ngb-pagination class=\"d-flex justify-content-end\" [collectionSize]=\"70\" [(page)]=\"page3\"></ngb-pagination>\n  </div>\n</div>",
        tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-pagination-justify',\n    templateUrl: './pagination-justify.html'\n})\nexport class NgbdPaginationJustify {\n    page = 4;\n}\n",
        viewCode: "",
        isCodeVisible: false
      };
      var disabledPagination = {
        beforeCodeTitle: 'Disabled pagination',
        htmlCode: "\n<div class=\"example-preview\">\n  <span>\n    Pagination control can be disabled:</span>\n  <div>\n    <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page4\" [disabled]='isDisabled'></ngb-pagination>\n  </div>\n</div>\n<div class=\"separator separator-dashed my-6\"></div>\n<div class=\"example-preview\">\n  <div>\n    <button class=\"btn btn-sm btn-primary\" (click)=\"toggleDisabled()\">\n      Toggle disabled\n    </button>\n  </div>\n</div>\n\t\t",
        tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-pagination-disabled',\n    templateUrl: './pagination-disabled.html'\n})\nexport class NgbdPaginationDisabled {\n    page = 3;\n    isDisabled = true;\n\n    toggleDisabled() {\n        this.isDisabled = !this.isDisabled;\n    }\n}",
        viewCode: "",
        isCodeVisible: false
      };
      var globalConfiguration = {
        beforeCodeTitle: 'Global configuration',
        htmlCode: "\n<div class=\"example-preview\">\n  <h3>Self closing</h3>\n  <span>\n\tThis pagination uses custom default values\n  </span>\n  <div>\n    <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page5\" [size]=\"'sm'\" [boundaryLinks]=\"'true'\"></ngb-pagination>\n  </div>\n</div>\n\t\t",
        tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-pagination-config',\n    templateUrl: './pagination-config.html',\n    providers: [NgbPaginationConfig] // add NgbPaginationConfig to the component providers\n})\nexport class NgbdPaginationConfig {\n    page = 4;\n\n    constructor(config: NgbPaginationConfig) {\n        // customize default values of paginations used by this component tree\n        config.size = 'sm';\n        config.boundaryLinks = true;\n    }\n}\n\t\t",
        viewCode: "",
        isCodeVisible: false
      };

      var PaginationComponent = /*#__PURE__*/function () {
        function PaginationComponent(config) {
          _classCallCheck(this, PaginationComponent);

          this.exampleBasicPagination = basicPagination;
          this.exampleAdvancedPagination = advancedPagination;
          this.examplePaginationSize = paginationSize;
          this.examplePaginationAlignment = paginationAlignment;
          this.exampleDisabledPagination = disabledPagination;
          this.exampleGlobalConfiguration = globalConfiguration;
          this.page = 4;
          this.page2 = 1;
          this.page3 = 4;
          this.currentPage = 3;
          this.page4 = 3;
          this.isDisabled = true;
          this.page5 = 4; // customize default values of paginations used by this component tree
          // config.size = 'sm';
          // config.boundaryLinks = true;
        }

        _createClass(PaginationComponent, [{
          key: "toggleDisabled",
          value: function toggleDisabled() {
            this.isDisabled = !this.isDisabled;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PaginationComponent;
      }();

      PaginationComponent.ɵfac = function PaginationComponent_Factory(t) {
        return new (t || PaginationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPaginationConfig"]));
      };

      PaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PaginationComponent,
        selectors: [["app-ng-pagination"]],
        decls: 81,
        vars: 51,
        consts: [[3, "svg"], ["href", "https://ng-bootstrap.github.io/#/components/pagination/examples", "target", "_blank", 1, "font-weight-bold"], [1, "row"], [1, "col-xl-6"], [3, "viewItem"], [1, "example-preview"], ["aria-label", "Default pagination", 3, "collectionSize", "page", "pageChange"], [1, "separator", "separator-dashed", "my-6"], [3, "collectionSize", "page", "directionLinks", "pageChange"], [3, "collectionSize", "page", "boundaryLinks", "pageChange"], [3, "collectionSize", "page", "maxSize", "boundaryLinks", "pageChange"], [3, "collectionSize", "page", "maxSize", "rotate", "boundaryLinks", "pageChange"], [3, "collectionSize", "page", "maxSize", "rotate", "ellipses", "boundaryLinks", "pageChange"], ["size", "lg", 3, "collectionSize", "page", "pageChange"], [3, "collectionSize", "page", "pageChange"], ["size", "sm", 3, "collectionSize", "page", "pageChange"], [1, "d-flex", "justify-content-start", 3, "collectionSize", "page", "pageChange"], [1, "d-flex", "justify-content-center", 3, "collectionSize", "page", "pageChange"], [1, "d-flex", "justify-content-end", 3, "collectionSize", "page", "pageChange"], [3, "collectionSize", "page", "disabled", "pageChange"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], [3, "collectionSize", "page", "size", "boundaryLinks", "pageChange"]],
        template: function PaginationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notice", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " For more info please check the components's official demos & documentation ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "demos & documentation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Default pagination: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ngb-pagination", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginationComponent_Template_ngb_pagination_pageChange_11_listener($event) {
              return ctx.page = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " No direction links: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ngb-pagination", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginationComponent_Template_ngb_pagination_pageChange_17_listener($event) {
              return ctx.page = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " With boundary links: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ngb-pagination", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginationComponent_Template_ngb_pagination_pageChange_23_listener($event) {
              return ctx.page = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Restricted size, no rotation: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ngb-pagination", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginationComponent_Template_ngb_pagination_pageChange_33_listener($event) {
              return ctx.page2 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Restricted size with rotation: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ngb-pagination", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginationComponent_Template_ngb_pagination_pageChange_39_listener($event) {
              return ctx.page2 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Restricted size with rotation and no ellipses: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ngb-pagination", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginationComponent_Template_ngb_pagination_pageChange_45_listener($event) {
              return ctx.page2 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ngb-pagination", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginationComponent_Template_ngb_pagination_pageChange_53_listener($event) {
              return ctx.currentPage = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "ngb-pagination", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginationComponent_Template_ngb_pagination_pageChange_54_listener($event) {
              return ctx.currentPage = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ngb-pagination", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginationComponent_Template_ngb_pagination_pageChange_55_listener($event) {
              return ctx.currentPage = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Change the alignment of pagination components with flexbox utilities ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "ngb-pagination", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginationComponent_Template_ngb_pagination_pageChange_62_listener($event) {
              return ctx.page3 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ngb-pagination", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginationComponent_Template_ngb_pagination_pageChange_63_listener($event) {
              return ctx.page3 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "ngb-pagination", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginationComponent_Template_ngb_pagination_pageChange_64_listener($event) {
              return ctx.page3 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Pagination control can be disabled: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "ngb-pagination", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginationComponent_Template_ngb_pagination_pageChange_70_listener($event) {
              return ctx.page4 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_button_click_73_listener() {
              return ctx.toggleDisabled();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Toggle disabled ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " This pagination uses custom default values ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "ngb-pagination", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginationComponent_Template_ngb_pagination_pageChange_80_listener($event) {
              return ctx.page5 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svg", "assets/media/svg/icons/Tools/Compass.svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleBasicPagination);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", 70)("page", ctx.page);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", 70)("page", ctx.page)("directionLinks", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", 70)("page", ctx.page)("boundaryLinks", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Current page: ", ctx.page, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleAdvancedPagination);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", 120)("page", ctx.page2)("maxSize", 5)("boundaryLinks", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", 120)("page", ctx.page2)("maxSize", 5)("rotate", true)("boundaryLinks", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", 120)("page", ctx.page2)("maxSize", 5)("rotate", true)("ellipses", false)("boundaryLinks", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Current page: ", ctx.page2, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.examplePaginationSize);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", 50)("page", ctx.currentPage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", 50)("page", ctx.currentPage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", 50)("page", ctx.currentPage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.examplePaginationAlignment);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", 70)("page", ctx.page3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", 70)("page", ctx.page3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", 70)("page", ctx.page3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleDisabledPagination);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", 70)("page", ctx.page4)("disabled", ctx.isDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleGlobalConfiguration);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", 70)("page", ctx.page5)("size", "sm")("boundaryLinks", "true");
          }
        },
        directives: [_metronic_partials_content_general_notice_notice_component__WEBPACK_IMPORTED_MODULE_2__["NoticeComponent"], _metronic_partials_content_general_code_preview_code_preview_component__WEBPACK_IMPORTED_MODULE_3__["CodePreviewComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPagination"]],
        encapsulation: 2,
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ng-pagination',
            templateUrl: './pagination.component.html',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPaginationConfig"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/ngbootstrap/popover/popover.component.ts":
    /*!******************************************************************!*\
      !*** ./src/app/modules/ngbootstrap/popover/popover.component.ts ***!
      \******************************************************************/

    /*! exports provided: PopoverComponent */

    /***/
    function srcAppModulesNgbootstrapPopoverPopoverComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverComponent", function () {
        return PopoverComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _metronic_partials_content_general_notice_notice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../_metronic/partials/content/general/notice/notice.component */
      "./src/app/_metronic/partials/content/general/notice/notice.component.ts");
      /* harmony import */


      var _metronic_partials_content_general_code_preview_code_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../_metronic/partials/content/general/code-preview/code-preview.component */
      "./src/app/_metronic/partials/content/general/code-preview/code-preview.component.ts");

      var _c0 = ["p"];
      var _c1 = ["p2"];

      function PopoverComponent_ng_template_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hello");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "! ");
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.name);
        }
      }

      function PopoverComponent_ng_template_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "! ");
        }

        if (rf & 2) {
          var greeting_r7 = ctx.greeting;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", greeting_r7, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.name1);
        }
      }

      var quickAndEasyPopovers = {
        beforeCodeTitle: 'Quick and easy popovers',
        htmlCode: "\n<div class=\"example-preview\">\n  <div>\n    <button type=\"button\" class=\"btn btn-primary kt-btn--wide\" placement=\"top\"\n      ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on top\">\n      Popover on top\n    </button>\n    <button type=\"button\" class=\"btn btn-success kt-btn--wide\" placement=\"right\"\n      ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on right\">\n      Popover on right\n    </button>\n    <button type=\"button\" class=\"btn btn-info kt-btn--wide\" container=\"body\" placement=\"bottom\"\n      ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on bottom\">\n      Popover on bottom\n    </button>\n\t<button type=\"button\" class=\"btn btn-danger kt-btn--wide\" placement=\"left\"\n      ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on left\">\n      Popover on left\n    </button>\n  </div>\n</div>\n",
        tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-popover-basic',\n    templateUrl: './popover-basic.html'\n})\nexport class NgbdPopoverBasic {\n}\n\t\t",
        viewCode: "",
        isCodeVisible: false,
        isExampleExpanded: true
      };
      var HTMLAndBindingsInPopovers = {
        beforeCodeTitle: 'HTML and bindings in popovers',
        htmlCode: "\n<div class=\"example-preview\">\n  <div>\n    Popovers can contain any arbitrary HTML, Angular bindings and even directives! Simply enclose desired content in a\n    <code>&lt;ng-template&gt;</code> element.\n  </div>\n  <div>\n    <ng-template #popContent>\n      <span>Hello</span>,\n      <b>{{name}}</b>!\n    </ng-template>\n    <button type=\"button\" class=\"btn btn-warning\" [ngbPopover]=\"popContent\" popoverTitle=\"Fancy content\">\n      I've got markup and bindings in my popover!\n    </button>\n   </div>\n</div>\n\t\t",
        tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-popover-tplcontent',\n    templateUrl: './popover-tplcontent.html'\n})\nexport class NgbdPopoverTplcontent {\n    name = 'World';\n}",
        viewCode: "",
        isCodeVisible: false
      };
      var customAndManualTriggers = {
        beforeCodeTitle: 'Custom and manual triggers',
        htmlCode: "\n<div class=\"example-preview\">\n  <div>\n    You can easily override open and close triggers by specifying event names (separated by\n    <code>:</code>) in the\n    <code>triggers</code> property.\n  </div>\n  <div>\n\t<button type=\"button\" class=\"btn btn-primary\" ngbPopover=\"You see, I show up on hover!\" triggers=\"mouseenter:mouseleave\"\n      popoverTitle=\"Pop title\">\n      Hover over me!\n    </button>\n  </div>\n</div>\n<div class=\"separator separator-dashed my-6\"></div>\n<div class=\"example-preview\">\n  <span>\n    Alternatively you can take full manual control over popover opening / closing events.\n  </span>\n  <div>\n\t<button type=\"button\" class=\"btn btn-success\" ngbPopover=\"What a great tip!\" triggers=\"manual\" #p=\"ngbPopover\"\n      (click)=\"p.open()\" popoverTitle=\"Pop title\">\n      Click me to open a popover\n    </button>\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"p.close()\">\n      Click me to close a popover\n    </button>\n  </div>\n</div>\n\t\t",
        tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-popover-triggers',\n    templateUrl: './popover-triggers.html'\n})\nexport class NgbdPopoverTriggers {\n}\n\t\t",
        viewCode: "",
        isCodeVisible: false
      };
      var contextAndManualTriggers = {
        beforeCodeTitle: 'Context and manual triggers',
        htmlCode: "\n<div class=\"example-preview\">\n  <span>\n    You can optionally pass in a context when manually triggering a popover.\n  </span>\n  <div>\n    <ng-template #popContent let-greeting=\"greeting\">{{greeting}},\n\t  <b>{{name1}}</b>!\n\t</ng-template>\n    <p>\n      How would you like to greet\n      <strong [ngbPopover]=\"popContent\" popoverTitle=\"Greeting\" #p2=\"ngbPopover\" triggers=\"manual\">me</strong>?\n    </p>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"changeGreeting({ greeting: 'Bonjour' })\">\n      French\n    </button>\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"changeGreeting({ greeting: 'Gutentag' })\">\n      German\n    </button>\n    <button type=\"button\" class=\"btn btn-success\" (click)=\"changeGreeting({ greeting: 'Hello' })\">\n      English\n    </button>\n  </div>\n</div>\n\t\t",
        tsCode: "\nimport {NgbPopover} from '@ng-bootstrap/ng-bootstrap';\nimport {Component, ViewChild} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-popover-tplwithcontext',\n    templateUrl: './popover-tplwithcontext.html'\n})\nexport class NgbdPopoverTplwithcontext {\n    greeting = {};\n    name = 'World';\n\n    @ViewChild('p', {static: true}) public popover: NgbPopover;\n\n    public changeGreeting(greeting: any): void {\n        const isOpen = this.popover.isOpen();\n        this.popover.close();\n        if (greeting !== this.greeting || !isOpen) {\n            this.greeting = greeting;\n            this.popover.open(greeting);\n        }\n    }\n}\n",
        viewCode: "",
        isCodeVisible: false
      };
      var popoverVisibilityEvents = {
        beforeCodeTitle: 'Popover visibility events',
        htmlCode: "\n<div class=\"example-preview\">\n  <div>\n\t<button type=\"button\" class=\"btn btn-primary\" placement=\"top\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum\n      faucibus.\" popoverTitle=\"Popover on top\" #popover=\"ngbPopover\">\n      Open Popover\n    </button>\n  </div>\n</div>\n<div class=\"separator separator-dashed my-6\"></div>\n<div class=\"example-preview\">\n  <div>\n    Popover is currently:\n    <code>{{ popover.isOpen() ? 'open' : 'closed' }}</code>\n  </div>\n</div>\n",
        tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-popover-visibility',\n    templateUrl: './popover-visibility.html'\n})\nexport class NgbdPopoverVisibility {}\n",
        viewCode: "",
        isCodeVisible: false
      };
      var appendPopoverInTheBody = {
        beforeCodeTitle: 'Append popover in the body',
        htmlCode: "\n<div class=\"example-preview\">\n  <div>\n    Set the\n\t<code>container</code> property to \"body\" to have the popover be appended to the body instead of the triggering element's\n      parent. This option is useful if the element triggering the popover is inside an element that clips its contents (i.e.\n    <code>overflow: hidden</code>).\n  </div>\n  <div>\n    <div class='row'>\n      <div class='card'>\n        <button type=\"button\" class=\"btn btn-outline-info\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n\t\t  Default popover\n        </button>\n\t\t<br />\n\t\t<button type=\"button\" class=\"btn btn-outline-danger\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n          container=\"body\">\n          Popover appended to body\n        </button>\n      </div>\n\t</div>\n  </div>\n</div>\n\t\t",
        tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-popover-container',\n    templateUrl: './popover-container.html',\n    styles: ['.card { padding: 50px 0; text-align: center; overflow:hidden }']\n})\nexport class NgbdPopoverContainer {\n}\n",
        viewCode: "",
        isCodeVisible: false
      };
      var globalConfigurationOfPopovers = {
        beforeCodeTitle: 'Global configuration of popovers',
        htmlCode: "\n<button type=\"button\" class=\"btn btn-outline-secondary\"\n  ngbPopover=\"This popover gets its inputs from the customized configuration\" popoverTitle=\"Customized popover\">\n  Customized popover\n</button>\n\t\t",
        tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbPopoverConfig} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-popover-config',\n    templateUrl: './popover-config.html',\n    providers: [NgbPopoverConfig] // add NgbPopoverConfig to the component providers\n})\nexport class NgbdPopoverConfig {\nconstructor(config: NgbPopoverConfig) {\n    // customize default values of popovers used by this component tree\n    config.placement = 'right';\n    config.triggers = 'hover';\n    }\n}\n",
        viewCode: "",
        isCodeVisible: false
      };

      var PopoverComponent = /*#__PURE__*/function () {
        function PopoverComponent(config) {
          _classCallCheck(this, PopoverComponent);

          this.name = 'World';
          this.greeting = {};
          this.name1 = 'World'; // customize default values of popovers used by this component tree
          // config.placement = 'right';

          config.container = 'body';
        }

        _createClass(PopoverComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.exampleQuickAndEasyPopovers = quickAndEasyPopovers;
            this.exampleHTMLAndBindingsInPopovers = HTMLAndBindingsInPopovers;
            this.exampleCustomAndManualTriggers = customAndManualTriggers;
            this.exampleContextAndManualTriggers = contextAndManualTriggers;
            this.examplePopoverVisibilityEvents = popoverVisibilityEvents;
            this.exampleAppendPopoverInTheBody = appendPopoverInTheBody;
            this.exampleGlobalConfigurationOfPopovers = globalConfigurationOfPopovers;
          }
        }, {
          key: "changeGreeting",
          value: function changeGreeting(greeting) {
            var isOpen = this.popover2.isOpen();
            this.popover2.close();

            if (greeting !== this.greeting || !isOpen) {
              this.greeting = greeting;
              this.popover2.open(greeting);
            }
          }
        }]);

        return PopoverComponent;
      }();

      PopoverComponent.ɵfac = function PopoverComponent_Factory(t) {
        return new (t || PopoverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPopoverConfig"]));
      };

      PopoverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PopoverComponent,
        selectors: [["app-ng-popover"]],
        viewQuery: function PopoverComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.popover = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.popover2 = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPopoverConfig"]])],
        decls: 112,
        vars: 11,
        consts: [[3, "svg"], ["href", "https://ng-bootstrap.github.io/#/components/pagination/examples", "target", "_blank", 1, "font-weight-bold"], [1, "row"], [1, "col-xl-6"], [3, "viewItem"], [1, "example-preview"], ["type", "button", "placement", "right", "ngbPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "popoverTitle", "Popover on right", 1, "btn", "btn-success"], ["type", "button", "placement", "top", "ngbPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "popoverTitle", "Popover on top", 1, "btn", "btn-primary", "kt-btn--wide"], [1, "separator", "separator-dashed", "my-6"], ["type", "button", "placement", "left", "ngbPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "popoverTitle", "Popover on left", 1, "btn", "btn-danger", "kt-btn--wide"], ["type", "button", "placement", "bottom", "ngbPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "popoverTitle", "Popover on bottom", 1, "btn", "btn-info", "kt-btn--wide"], ["popContent", ""], ["type", "button", "popoverTitle", "Fancy content", 1, "btn", "btn-warning", 3, "ngbPopover"], ["type", "button", "ngbPopover", "You see, I show up on hover!", "triggers", "mouseenter:mouseleave", "popoverTitle", "Pop title", 1, "btn", "btn-primary"], ["type", "button", "ngbPopover", "What a great tip!", "triggers", "manual", "popoverTitle", "Pop title", 1, "btn", "btn-success", 3, "click"], ["p", "ngbPopover"], ["type", "button", 1, "btn", "btn-info", 3, "click"], ["popoverTitle", "Greeting", "triggers", "manual", 3, "ngbPopover"], ["p2", "ngbPopover"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["type", "button", "placement", "top", "ngbPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "popoverTitle", "Popover on top", 1, "btn", "btn-primary"], ["popover", "ngbPopover"], [1, "card"], ["type", "button", "ngbPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", 1, "btn", "btn-outline-info"], ["type", "button", "ngbPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "container", "body", 1, "btn", "btn-outline-danger"], ["type", "button", "ngbPopover", "This popover gets its inputs from the customized configuration", "popoverTitle", "Customized popover", "placement", "right", "triggers", "hover", 1, "btn", "btn-success"]],
        template: function PopoverComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notice", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " For more info please check the components's official demos & documentation ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "demos & documentation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Popover on right");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Popover on top ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Popover on left");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Popover on bottom ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Popovers can contain any arbitrary HTML, Angular bindings and even directives! Simply enclose desired content in a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "<ng-template>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " element. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, PopoverComponent_ng_template_28_Template, 6, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " I've got markup and bindings in my popover! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " You can easily override open and close triggers by specifying event names (separated by ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, ":");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, ") in the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "triggers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " property. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Hover over me! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Alternatively you can take full manual control over popover opening / closing events. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 14, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverComponent_Template_button_click_50_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51);

              return _r2.open();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Click me to open a popover");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverComponent_Template_button_click_54_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51);

              return _r2.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Click me to close a popover ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " You can optionally pass in a context when manually triggering a popover. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, PopoverComponent_ng_template_61_Template, 4, 2, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " How would you like to greet ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "strong", 17, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverComponent_Template_button_click_69_listener() {
              return ctx.changeGreeting({
                greeting: "Bonjour"
              });
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " French");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverComponent_Template_button_click_72_listener() {
              return ctx.changeGreeting({
                greeting: "Gutentag"
              });
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " German");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverComponent_Template_button_click_75_listener() {
              return ctx.changeGreeting({
                greeting: "Hello"
              });
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " English ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 21, 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Open Popover ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Popover is currently: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Set the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "container");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " property to \"body\" to have the popover be appended to the body instead of the triggering element's parent. This option is useful if the element triggering the popover is inside an element that clips its contents (i.e. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "overflow: hidden");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "). ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Default popover ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Popover appended to body ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " Customized popover ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svg", "assets/media/svg/icons/Tools/Compass.svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleQuickAndEasyPopovers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleHTMLAndBindingsInPopovers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbPopover", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleCustomAndManualTriggers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleContextAndManualTriggers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbPopover", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.examplePopoverVisibilityEvents);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r6.isOpen() ? "open" : "closed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.examplePopoverVisibilityEvents);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleGlobalConfigurationOfPopovers);
          }
        },
        directives: [_metronic_partials_content_general_notice_notice_component__WEBPACK_IMPORTED_MODULE_2__["NoticeComponent"], _metronic_partials_content_general_code_preview_code_preview_component__WEBPACK_IMPORTED_MODULE_3__["CodePreviewComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPopover"]],
        encapsulation: 2,
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ng-popover',
            templateUrl: './popover.component.html',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            // styles: [`.card { padding: 50px 0; text-align: center; overflow:hidden }`],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPopoverConfig"]]
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPopoverConfig"]
          }];
        }, {
          popover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['p', {
              "static": true
            }]
          }],
          popover2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['p2', {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/modules/ngbootstrap/progressbar/progressbar.component.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/modules/ngbootstrap/progressbar/progressbar.component.ts ***!
      \**************************************************************************/

    /*! exports provided: ProgressbarComponent */

    /***/
    function srcAppModulesNgbootstrapProgressbarProgressbarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressbarComponent", function () {
        return ProgressbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _metronic_partials_content_general_notice_notice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../_metronic/partials/content/general/notice/notice.component */
      "./src/app/_metronic/partials/content/general/notice/notice.component.ts");
      /* harmony import */


      var _metronic_partials_content_general_code_preview_code_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../_metronic/partials/content/general/code-preview/code-preview.component */
      "./src/app/_metronic/partials/content/general/code-preview/code-preview.component.ts");

      var contextualProgressBars = {
        beforeCodeTitle: 'Contextual progress bars',
        htmlCode: "\n<div class=\"example-preview\">\n  <div>\n    <p>\n      <ngb-progressbar type=\"success\" [value]=\"25\"></ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar type=\"info\" [value]=\"50\"></ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar type=\"warning\" [value]=\"75\"></ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar type=\"danger\" [value]=\"100\"></ngb-progressbar>\n    </p>\n  </div>\n</div>\n",
        tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-progressbar-basic',\n    templateUrl: './progressbar-basic.html',\n    styles: [`\n        ngb-progressbar {\n            margin-top: 5rem;\n        }\n   `]\n})\nexport class NgbdProgressbarBasic {}\n\t\t",
        viewCode: "",
        isCodeVisible: false,
        isExampleExpanded: true
      };
      var progressBarsWithCurrentValueLabels = {
        beforeCodeTitle: 'Progress bars with current value labels',
        htmlCode: "\n<div class=\"example-preview\">\n  <div>\n    <p>\n      <ngb-progressbar showValue=\"true\" type=\"success\" [value]=\"25\"></ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar [showValue]=\"true\" type=\"info\" [value]=\"50\"></ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar showValue=\"true\" type=\"warning\" [value]=\"150\" [max]=\"200\"></ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar [showValue]=\"true\" type=\"danger\" [value]=\"150\" [max]=\"150\"></ngb-progressbar>\n    </p>\n  </div>\n</div>\n\t\t",
        tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-progressbar-showvalue',\n    templateUrl: './progressbar-showvalue.html',\n    styles: [`\n        ngb-progressbar {\n            margin-top: 5rem;\n        }\n   `]\n})\nexport class NgbdProgressbarShowvalue {\n}\n\t\t",
        viewCode: "",
        isCodeVisible: false
      };
      var stripedProgressBars = {
        beforeCodeTitle: 'Striped progress bars',
        htmlCode: "\n<div class=\"example-preview\">\n  <div>\n    <p>\n      <ngb-progressbar type=\"success\" [value]=\"25\" [striped]=\"true\"></ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar type=\"info\" [value]=\"50\" [striped]=\"true\"></ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\"></ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\"></ngb-progressbar>\n    </p>\n  </div>\n</div>\n\t\t",
        tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-progressbar-striped',\n    templateUrl: './progressbar-striped.html'\n})\nexport class NgbdProgressbarStriped {\n}\n\t\t",
        viewCode: "",
        isCodeVisible: false
      };
      var progressBarsWithCustomLabels = {
        beforeCodeTitle: 'Progress bars with custom labels',
        htmlCode: "\n<div class=\"example-preview\">\n  <div>\n    <p>\n      <ngb-progressbar type=\"success\" [value]=\"25\">25</ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar type=\"info\" [value]=\"50\">Copying file\n\t\t<b>2 of 4</b>...\n\t  </ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\" [animated]=\"true\">\n        <i>50%</i>\n      </ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\">Completed!</ngb-progressbar>\n    </p>\n  </div>\n</div>\n",
        tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-progressbar-labels',\n    templateUrl: './progressbar-labels.html',\n    styles: [`\n        ngb-progressbar {\n            margin-top: 5rem;\n        }\n    `]\n})\nexport class NgbdProgressbarLabels {\n}\n",
        viewCode: "",
        isCodeVisible: false
      };
      var progressBarsWithHeight = {
        beforeCodeTitle: 'Progress bars with height',
        htmlCode: "\n<div class=\"example-preview\">\n  <div>\n    <p>\n      <ngb-progressbar type=\"success\" [value]=\"25\">default</ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar type=\"info\" [value]=\"50\" height=\"10px\">10px</ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar type=\"warning\" [value]=\"75\" height=\".5rem\">.5rem</ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar type=\"danger\" [value]=\"100\" [height]=\"height\">{{height}}</ngb-progressbar>\n    </p>\n  </div>\n</div>\n\t\t",
        tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-progressbar-height',\n    templateUrl: './progressbar-height.html',\n    styles: [`\n        ngb-progressbar {\n            margin-top: 5rem;\n        }\n    `]\n})\nexport class NgbdProgressbarHeight {\n    height = '20px';\n}\n",
        viewCode: "",
        isCodeVisible: false
      };
      var globalConfigurationOfProgressBars = {
        beforeCodeTitle: 'Global configuration of progress bars',
        htmlCode: "\n<div class=\"example-preview\">\n  <div>\n    <p>This progress bar uses the customized default values.</p>\n    <p><ngb-progressbar value=\"250\"></ngb-progressbar></p>\n\t<p>This progress bar uses the customized default values, but changes the type using an input.</p>\n    <p><ngb-progressbar value=\"500\" type=\"info\"></ngb-progressbar></p>\n  </div>\n</div>\n\t\t",
        tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-progressbar-config',\n    templateUrl: './progressbar-config.html',\n    providers: [NgbProgressbarConfig] // add the NgbProgressbarConfig to the component providers\n})\nexport class NgbdProgressbarConfig {\n    constructor(config: NgbProgressbarConfig) {\n        // customize default values of progress bars used by this component tree\n        config.max = 1000;\n        config.striped = true;\n\t\tconfig.animated = true;\n        config.type = 'success';\n        config.height = '20px';\n    }\n}\n",
        viewCode: "",
        isCodeVisible: false
      };

      var ProgressbarComponent = /*#__PURE__*/function () {
        function ProgressbarComponent(config) {
          _classCallCheck(this, ProgressbarComponent);

          this.height = '20px'; // customize default values of progress bars used by this component tree
          // config.max = 1000;
          // config.striped = true;
          // config.animated = true;
          // config.type = 'success';
          // config.height = '20px';
        }

        _createClass(ProgressbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.exampleContextualProgressBars = contextualProgressBars;
            this.exampleProgressBarsWithCurrentValueLabels = progressBarsWithCurrentValueLabels;
            this.exampleStripedProgressBars = stripedProgressBars;
            this.exampleProgressBarsWithCustomLabels = progressBarsWithCustomLabels;
            this.exampleProgressBarsWithHeight = progressBarsWithHeight;
            this.exampleGlobalConfigurationOfProgressBars = globalConfigurationOfProgressBars;
          }
        }]);

        return ProgressbarComponent;
      }();

      ProgressbarComponent.ɵfac = function ProgressbarComponent_Factory(t) {
        return new (t || ProgressbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbarConfig"]));
      };

      ProgressbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProgressbarComponent,
        selectors: [["app-ng-progressbar"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbarConfig"]])],
        decls: 85,
        vars: 42,
        consts: [[3, "svg"], ["href", "https://ng-bootstrap.github.io/#/components/progressbar/examples", "target", "_blank", 1, "font-weight-bold"], [1, "row"], [1, "col-xl-6"], [3, "viewItem"], [1, "example-preview"], ["type", "success", 3, "value"], ["type", "info", 3, "value"], ["type", "warning", 3, "value"], ["type", "danger", 3, "value"], ["showValue", "true", "type", "success", 3, "value", "max"], ["type", "info", 3, "showValue", "value", "max"], ["showValue", "true", "type", "warning", 3, "value", "max"], ["type", "danger", 3, "showValue", "value", "max"], ["type", "success", 3, "value", "striped"], ["type", "info", 3, "value", "striped"], ["type", "warning", 3, "value", "striped"], ["type", "danger", 3, "value", "striped"], ["type", "warning", 3, "value", "striped", "animated"], ["type", "info", "height", "10px", 3, "value"], ["type", "warning", "height", ".5rem", 3, "value"], ["type", "danger", 3, "value", "height"], ["value", "250", "max", "1000", "striped", "true", "animated", "true", "height", "20px", "type", "success"], [1, "mt-6"], ["value", "500", "max", "1000", "striped", "true", "animated", "true", "height", "20px", "type", "info"]],
        template: function ProgressbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notice", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " For more info please check the components's official demos & documentation ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "demos & documentation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ngb-progressbar", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "ngb-progressbar", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "ngb-progressbar", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "ngb-progressbar", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "ngb-progressbar", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "ngb-progressbar", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "ngb-progressbar", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "ngb-progressbar", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "ngb-progressbar", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "ngb-progressbar", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "ngb-progressbar", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "ngb-progressbar", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ngb-progressbar", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "25");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ngb-progressbar", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Copying file ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "2 of 4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "... ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ngb-progressbar", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "50%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "ngb-progressbar", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Completed!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ngb-progressbar", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "default");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "ngb-progressbar", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "10px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "ngb-progressbar", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, ".5rem");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "ngb-progressbar", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "This progress bar uses the customized default values.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "ngb-progressbar", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " This progress bar uses the customized default values, but changes the type using an input. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "ngb-progressbar", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svg", "assets/media/svg/icons/Tools/Compass.svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleContextualProgressBars);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleProgressBarsWithCurrentValueLabels);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 25)("max", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showValue", true)("value", 50)("max", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 150)("max", 200);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showValue", true)("value", 150)("max", 150);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleStripedProgressBars);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 25)("striped", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 50)("striped", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 75)("striped", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 100)("striped", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleProgressBarsWithCustomLabels);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 75)("striped", true)("animated", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 100)("striped", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleProgressBarsWithHeight);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 100)("height", ctx.height);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.height);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleGlobalConfigurationOfProgressBars);
          }
        },
        directives: [_metronic_partials_content_general_notice_notice_component__WEBPACK_IMPORTED_MODULE_2__["NoticeComponent"], _metronic_partials_content_general_code_preview_code_preview_component__WEBPACK_IMPORTED_MODULE_3__["CodePreviewComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbar"]],
        styles: ["ngb-progressbar[_ngcontent-%COMP%] {\n        margin-top: 5rem;\n      }"],
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ng-progressbar',
            templateUrl: './progressbar.component.html',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: ["\n      ngb-progressbar {\n        margin-top: 5rem;\n      }\n    "],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbarConfig"]]
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbarConfig"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/ngbootstrap/rating/rating.component.ts":
    /*!****************************************************************!*\
      !*** ./src/app/modules/ngbootstrap/rating/rating.component.ts ***!
      \****************************************************************/

    /*! exports provided: RatingComponent */

    /***/
    function srcAppModulesNgbootstrapRatingRatingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RatingComponent", function () {
        return RatingComponent;
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


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _metronic_partials_content_general_notice_notice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../_metronic/partials/content/general/notice/notice.component */
      "./src/app/_metronic/partials/content/general/notice/notice.component.ts");
      /* harmony import */


      var _metronic_partials_content_general_code_preview_code_preview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../_metronic/partials/content/general/code-preview/code-preview.component */
      "./src/app/_metronic/partials/content/general/code-preview/code-preview.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function RatingComponent_ng_template_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2605");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var fill_r5 = ctx.fill;
          var index_r6 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("filled", fill_r5 === 100)("bad", index_r6 < 3);
        }
      }

      function RatingComponent_ng_template_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2665");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u2665 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var fill_r7 = ctx.fill;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("full", fill_r7 === 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", fill_r7, "%");
        }
      }

      function RatingComponent_div_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Thanks!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RatingComponent_div_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please rate us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var basicDemo = {
        beforeCodeTitle: 'Basic demo',
        htmlCode: "\n<div class=\"example-preview\">\n  <div>\n    <ngb-rating [(rate)]=\"currentRate\"></ngb-rating>\n    <div class=\"separator separator-dashed my-6\"></div>\n    <pre>Rate: <b>{{currentRate}}</b></pre>\n  </div>\n</div>\n",
        tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-rating-basic',\n    templateUrl: './rating-basic.html'\n})\nexport class NgbdRatingBasic {\n    currentRate = 8;\n}\n",
        viewCode: "",
        isCodeVisible: false,
        isExampleExpanded: true
      };
      var eventsAndReadonlyRatings = {
        beforeCodeTitle: 'Events and readonly ratings',
        htmlCode: "\n<div class=\"example-preview\">\n  <div>\n    <pre>Selected: <b>{{selected}}</b></pre>\n    <pre>Hovered: <b>{{hovered}}</b></pre>\n    <ngb-rating [(rate)]=\"selected\" (hover)=\"hovered=$event\" (leave)=\"hovered=0\" [readonly]=\"readonly\"></ngb-rating>\n  </div>\n</div>\n<div class=\"separator separator-dashed my-6\"></div>\n<div class=\"example-preview\">\n  <div>\n    <button class=\"btn btn-sm btn-{{readonly ? 'danger' : 'success'}}\" (click)=\"readonly = !readonly\">\n      {{ readonly ? \"readonly\" : \"editable\"}}\n    </button>\n  </div>\n</div>\n",
        tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n  selector: 'ngbd-rating-events',\n  templateUrl: './rating-events.html'\n})\nexport class NgbdRatingEvents {\n  selected = 0;\n  hovered = 0;\n  readonly = false;\n}\n\t\t",
        viewCode: "",
        isCodeVisible: false
      };
      var customStarTemplate = {
        beforeCodeTitle: 'Custom star template',
        htmlCode: "\n<div class=\"example-preview\">\n  <span>\n    Custom rating template provided as child element\n  </span>\n  <div>\n    <ngb-rating [(rate)]=\"currentRate1\">\n      <ng-template let-fill=\"fill\" let-index=\"index\">\n        <span class=\"star\" [class.filled]=\"fill === 100\" [class.bad]=\"index < 3\">&#9733;</span>\n      </ng-template>\n\t</ngb-rating>\n  </div>\n</div>\n<div class=\"separator separator-dashed my-6\"></div>\n<div class=\"example-preview\">\n  <div>\n    <pre>Rate: <b>{{currentRate1}}</b></pre>\n  </div>\n</div>\n",
        tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-rating-template',\n    templateUrl: './rating-template.html',\n    styles: [`\n        .star {\n            font-size: 1.5rem;\n                color: #b0c4de;\n            }\n            .filled {\n                color: #1e90ff;\n            }\n            .bad {\n                color: #deb0b0;\n            }\n            .filled.bad {\n                color: #ff1e1e;\n            }\n        `]\n})\nexport class NgbdRatingTemplate {\n    currentRate = 6;\n}\n ",
        viewCode: "",
        isCodeVisible: false
      };
      var customDecimalRating = {
        beforeCodeTitle: 'Custom decimal rating',
        htmlCode: "\n<div class=\"example-preview\">\n  <span>\n    Custom rating template provided via a variable. Shows fine-grained rating display\n  </span>\n  <div>\n    <ng-template #t let-fill=\"fill\">\n      <span class=\"star2\" [class.full]=\"fill === 100\">\n        <span class=\"half\" [style.width.%]=\"fill\">&hearts;</span>&hearts;\n      </span>\n    </ng-template>\n    <ngb-rating [(rate)]=\"currentRate2\" [starTemplate]=\"t\" [readonly]=\"true\" max=\"5\"></ngb-rating>\n  </div>\n</div>\n<div class=\"separator separator-dashed my-6\"></div>\n<div class=\"example-preview\">\n  <div>\n    <pre>Rate: <b>{{currentRate2}}</b></pre>\n    <button class=\"btn btn-sm btn-primary\" (click)=\"currentRate2 = 1.35\">1.35</button>\n    <button class=\"btn btn-sm btn-primary\" (click)=\"currentRate2 = 4.72\">4.72</button>\n  </div>\n</div>\n",
        tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-rating-decimal',\n    templateUrl: './rating-decimal.html',\n    styles: [`\n        .star {\n\t\t\tposition: relative;\n            display: inline-block;\n            font-size: 3rem;\n            color: #d3d3d3;\n        }\n        .full {\n             color: red;\n        }\n        .half {\n            position: absolute;\n            display: inline-block;\n            overflow: hidden;\n            color: red;\n        }\n   `]\n})\nexport class NgbdRatingDecimal {\n    currentRate = 3.14;\n}\n\t",
        viewCode: "",
        isCodeVisible: false
      };
      var formIntegration = {
        beforeCodeTitle: 'Form integration',
        htmlCode: "\n<div class=\"example-preview\">\n  <span>\n    NgModel and reactive forms can be used without the 'rate' binding\n  </span>\n  <div>\n    <div class=\"form-group\">\n\t  <ngb-rating [formControl]=\"ctrl\"></ngb-rating>\n      <div class=\"form-text small\">\n        <div *ngIf=\"ctrl.valid\" class=\"text-success\">Thanks!</div>\n        <div *ngIf=\"ctrl.invalid\" class=\"text-danger\">Please rate us</div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"example-preview\">\n  <span>Model: <b>{{ ctrl.value }}</b></span>\n  <div>\n    <button class=\"btn btn-sm btn-{{ ctrl.disabled ? 'danger' : 'success'}}\" (click)=\"toggle()\">\n      {{ ctrl.disabled ? \"control disabled\" : \" control enabled\" }}\n    </button>\n\t<button class=\"btn btn-sm btn-primary\" (click)=\"ctrl.setValue(null)\">Clear</button>\n  </div>\n</div>\n\t\t",
        tsCode: "\nimport {Component} from '@angular/core';\nimport {FormControl, Validators} from '@angular/forms';\n\n@Component({\n    selector: 'ngbd-rating-form',\n    templateUrl: './rating-form.html'\n})\nexport class NgbdRatingForm {\n    ctrl = new FormControl(null, Validators.required);\n\n    toggle() {\n        if (this.ctrl.disabled) {\n            this.ctrl.enable();\n        } else {\n            this.ctrl.disable();\n        }\n    }\n}\n",
        viewCode: "",
        isCodeVisible: false
      };
      var globalConfigurationOfRatings = {
        beforeCodeTitle: 'Global configuration of ratings',
        htmlCode: "\n<div class=\"example-preview\">\n  <span>\n    This rating uses customized default values.\n  </span>\n  <div>\n    <ngb-rating [rate]=\"3\" max=\"5\" [readonly]=\"true\"></ngb-rating>\n  </div>\n</div>\n\t\t",
        tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-rating-config',\n    templateUrl: './rating-config.html',\n    providers: [NgbRatingConfig] // add NgbRatingConfig to the component providers\n})\nexport class NgbdRatingConfig {\n    constructor(config: NgbRatingConfig) {\n    // customize default values of ratings used by this component tree\n    config.max = 5;\n    config.readonly = true;\n    }\n}\n",
        viewCode: "",
        isCodeVisible: false
      };

      var RatingComponent = /*#__PURE__*/function () {
        function RatingComponent(config) {
          _classCallCheck(this, RatingComponent);

          this.currentRate = 8;
          this.currentRate1 = 6;
          this.currentRate2 = 3.14;
          this.selected = 0;
          this.hovered = 0;
          this.readonly = false;
          this.ctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required); // customize default values of ratings used by this component tree
          // config.max = 5;
          // config.readonly = true;
        }

        _createClass(RatingComponent, [{
          key: "toggle",
          value: function toggle() {
            if (this.ctrl.disabled) {
              this.ctrl.enable();
            } else {
              this.ctrl.disable();
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.exampleBasicDemo = basicDemo;
            this.exampleEventsAndReadonlyRatings = eventsAndReadonlyRatings;
            this.exampleCustomStarTemplate = customStarTemplate;
            this.exampleCustomDecimalRating = customDecimalRating;
            this.exampleFormIntegration = formIntegration;
            this.exampleGlobalConfigurationOfRatings = globalConfigurationOfRatings;
          }
        }]);

        return RatingComponent;
      }();

      RatingComponent.ɵfac = function RatingComponent_Factory(t) {
        return new (t || RatingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbRatingConfig"]));
      };

      RatingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RatingComponent,
        selectors: [["app-ng-rating"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbRatingConfig"]])],
        decls: 93,
        vars: 33,
        consts: [[3, "svg"], ["href", "https://ng-bootstrap.github.io/#/components/rating/examples", "target", "_blank", 1, "font-weight-bold"], [1, "row"], [1, "col-xl-6"], [3, "viewItem"], [1, "example-preview"], [3, "rate", "rateChange"], [1, "separator", "separator-dashed", "my-6"], [3, "rate", "readonly", "rateChange", "hover", "leave"], [3, "click"], ["t", ""], ["max", "5", 3, "rate", "starTemplate", "readonly", "rateChange"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "form-group"], [3, "formControl"], [1, "form-text", "small"], ["class", "text-success", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], ["max", "5", 3, "rate", "readonly"], [1, "star"], [1, "star2"], [1, "half"], [1, "text-success"], [1, "text-danger"]],
        template: function RatingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notice", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " For more info please check the components's official demos & documentation ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "demos & documentation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngb-rating", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rateChange", function RatingComponent_Template_ngb_rating_rateChange_9_listener($event) {
              return ctx.currentRate = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Rate: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Selected: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Hovered: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ngb-rating", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rateChange", function RatingComponent_Template_ngb_rating_rateChange_27_listener($event) {
              return ctx.selected = $event;
            })("hover", function RatingComponent_Template_ngb_rating_hover_27_listener($event) {
              return ctx.hovered = $event;
            })("leave", function RatingComponent_Template_ngb_rating_leave_27_listener() {
              return ctx.hovered = 0;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_30_listener() {
              return ctx.readonly = !ctx.readonly;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Custom rating template provided as child element ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ngb-rating", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rateChange", function RatingComponent_Template_ngb_rating_rateChange_37_listener($event) {
              return ctx.currentRate1 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, RatingComponent_ng_template_38_Template, 2, 4, "ng-template");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Rate: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Custom rating template provided via a variable. Shows fine-grained rating display ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, RatingComponent_ng_template_52_Template, 4, 4, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "ngb-rating", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rateChange", function RatingComponent_Template_ngb_rating_rateChange_54_listener($event) {
              return ctx.currentRate2 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Rate: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_62_listener() {
              return ctx.currentRate2 = 1.35;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " 1.35");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_65_listener() {
              return ctx.currentRate2 = 4.72;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " 4.72 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " NgModel and reactive forms can be used without the 'rate' binding ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "ngb-rating", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, RatingComponent_div_75_Template, 2, 0, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, RatingComponent_div_76_Template, 2, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Model: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_82_listener() {
              return ctx.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_85_listener() {
              return ctx.ctrl.setValue(null);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Clear ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " This rating uses customized default values. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "ngb-rating", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svg", "assets/media/svg/icons/Tools/Compass.svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleBasicDemo);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", ctx.currentRate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentRate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleEventsAndReadonlyRatings);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selected);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hovered);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", ctx.selected)("readonly", ctx.readonly);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-sm btn-", ctx.readonly ? "danger" : "success", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.readonly ? "readonly" : "editable", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleCustomStarTemplate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", ctx.currentRate1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentRate1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleCustomDecimalRating);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", ctx.currentRate2)("starTemplate", _r1)("readonly", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentRate2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleFormIntegration);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.ctrl);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ctrl.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ctrl.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ctrl.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-sm btn-", ctx.ctrl.disabled ? "danger" : "success", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.ctrl.disabled ? "control disabled" : " control enabled", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleGlobalConfigurationOfRatings);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", 3)("readonly", true);
          }
        },
        directives: [_metronic_partials_content_general_notice_notice_component__WEBPACK_IMPORTED_MODULE_3__["NoticeComponent"], _metronic_partials_content_general_code_preview_code_preview_component__WEBPACK_IMPORTED_MODULE_4__["CodePreviewComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbRating"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
        styles: [".star[_ngcontent-%COMP%] {\n\t\tf\tont-size: 1.5rem;\n\t\t\tcolor: #b0c4de;\n\t\t}\n\t\t.filled[_ngcontent-%COMP%] {\n\t\t\tcolor: #1e90ff;\n\t\t}\n\t\t.bad[_ngcontent-%COMP%] {\n\t\t\tcolor: #deb0b0;\n\t\t}\n\t\t.filled.bad[_ngcontent-%COMP%] {\n\t\t\tcolor: #ff1e1e;\n\t\t}\n\t\t.star2[_ngcontent-%COMP%] {\n\t\t\tposition: relative;\n\t\t\tdisplay: inline-block;\n\t\t\tfont-size: 3rem;\n\t\t\tcolor: #d3d3d3;\n\t\t  }\n\t\t.full[_ngcontent-%COMP%] {\n\t\t\tcolor: red;\n\t\t  }\n\t\t.half[_ngcontent-%COMP%] {\n\t\t\tposition: absolute;\n\t\t\tdisplay: inline-block;\n\t\t\toverflow: hidden;\n\t\t\tcolor: red;\n\t\t}"],
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RatingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ng-rating',
            templateUrl: './rating.component.html',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: ["\n\t\t.star {\n\t\tf\tont-size: 1.5rem;\n\t\t\tcolor: #b0c4de;\n\t\t}\n\t\t.filled {\n\t\t\tcolor: #1e90ff;\n\t\t}\n\t\t.bad {\n\t\t\tcolor: #deb0b0;\n\t\t}\n\t\t.filled.bad {\n\t\t\tcolor: #ff1e1e;\n\t\t}\n\t\t.star2 {\n\t\t\tposition: relative;\n\t\t\tdisplay: inline-block;\n\t\t\tfont-size: 3rem;\n\t\t\tcolor: #d3d3d3;\n\t\t  }\n\t\t.full {\n\t\t\tcolor: red;\n\t\t  }\n\t\t.half {\n\t\t\tposition: absolute;\n\t\t\tdisplay: inline-block;\n\t\t\toverflow: hidden;\n\t\t\tcolor: red;\n\t\t}\n\t"],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbRatingConfig"]]
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbRatingConfig"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/ngbootstrap/timepicker/timepicker.component.ts":
    /*!************************************************************************!*\
      !*** ./src/app/modules/ngbootstrap/timepicker/timepicker.component.ts ***!
      \************************************************************************/

    /*! exports provided: TimepickerComponent */

    /***/
    function srcAppModulesNgbootstrapTimepickerTimepickerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimepickerComponent", function () {
        return TimepickerComponent;
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


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _metronic_partials_content_general_notice_notice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../_metronic/partials/content/general/notice/notice.component */
      "./src/app/_metronic/partials/content/general/notice/notice.component.ts");
      /* harmony import */


      var _metronic_partials_content_general_code_preview_code_preview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../_metronic/partials/content/general/code-preview/code-preview.component */
      "./src/app/_metronic/partials/content/general/code-preview/code-preview.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function TimepickerComponent_div_80_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Great choice ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TimepickerComponent_div_81_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Select some time during lunchtime ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TimepickerComponent_div_81_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Oh no, it's way too late");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TimepickerComponent_div_81_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "It's a bit too early");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TimepickerComponent_div_81_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TimepickerComponent_div_81_div_1_Template, 2, 0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TimepickerComponent_div_81_div_2_Template, 2, 0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TimepickerComponent_div_81_div_3_Template, 2, 0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.ctrl.errors["required"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.ctrl.errors["tooLate"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.ctrl.errors["tooEarly"]);
        }
      }

      var timepicker = {
        beforeCodeTitle: 'Timepicker',
        htmlCode: "\n<div class=\"example-preview\">\n  <div>\n    <ngb-timepicker [(ngModel)]=\"time\"></ngb-timepicker>\n  </div>\n</div>\n<div class=\"separator separator-dashed my-6\"></div>\n<div class=\"example-preview\">\n  <div>\n    <pre>Selected time: {{time | json}}</pre>\n  </div>\n</div>\n",
        tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-timepicker-basic',\n    templateUrl: './timepicker-basic.html'\n})\nexport class NgbdTimepickerBasic {\n    time = {hour: 13, minute: 30};\n}\n",
        viewCode: "",
        isCodeVisible: false,
        isExampleExpanded: true
      };
      var meridian = {
        beforeCodeTitle: 'Meridian',
        htmlCode: "\n<div class=\"example-preview\">\n  <div>\n    <ngb-timepicker [(ngModel)]=\"time\" [meridian]=\"meridian\"></ngb-timepicker>\n    <button class=\"btn btn-sm btn-{{meridian ? 'success' : 'danger'}}\" (click)=\"toggleMeridian()\">\n      Meridian - {{meridian ? \"ON\" : \"OFF\"}}\n    </button>\n  </div>\n</div>\n<div class=\"separator separator-dashed my-6\"></div>\n<div class=\"example-preview\">\n  <div>\n\t<pre>Selected time: {{time | json}}</pre>\n  </div>\n</div>\n",
        tsCode: "\n\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-timepicker-meridian',\n    templateUrl: './timepicker-meridian.html'\n})\nexport class NgbdTimepickerMeridian {\n    time = {hour: 13, minute: 30};\n    meridian = true;\n\n    toggleMeridian() {\n        this.meridian = !this.meridian;\n    }\n}\n",
        viewCode: "",
        isCodeVisible: false
      };
      var seconds = {
        beforeCodeTitle: 'Seconds',
        htmlCode: "\n<div class=\"example-preview\">\n  <div>\n    <ngb-timepicker [(ngModel)]=\"time\" [seconds]=\"seconds\"></ngb-timepicker>\n    <button class=\"btn btn-sm btn-{{seconds ? 'success' : 'danger'}}\" (click)=\"toggleSeconds()\">\n      Seconds - {{seconds ? \"ON\" : \"OFF\"}}\n    </button>\n  </div>\n</div>\n<div class=\"separator separator-dashed my-6\"></div>\n<div class=\"example-preview\">\n  <div>\n    <pre>Selected time: {{time | json}}</pre>\n  </div>\n</div>\n",
        tsCode: "\nimport { Component } from '@angular/core';\nimport { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-timepicker-seconds',\n    templateUrl: './timepicker-seconds.html'\n})\nexport class NgbdTimepickerSeconds {\n    time: NgbTimeStruct = {hour: 13, minute: 30, second: 30};\n    seconds = true;\n\n    toggleSeconds() {\n\t\tthis.seconds = !this.seconds;\n    }\n}\n ",
        viewCode: "",
        isCodeVisible: false
      };
      var spinners = {
        beforeCodeTitle: 'Spinners',
        htmlCode: "\n<div class=\"example-preview\">\n  <div>\n    <ngb-timepicker [(ngModel)]=\"time\" [spinners]=\"spinners\"></ngb-timepicker>\n  </div>\n</div>\n<div class=\"separator separator-dashed my-6\"></div>\n<div class=\"example-preview\">\n  <div>\n    <button class=\"kt-t-1 btn btn-sm btn-{{spinners ? 'success' : 'danger'}}\" (click)=\"toggleSpinners()\">\n      Spinners - {{spinners ? \"ON\" : \"OFF\"}}\n    </button>\n  </div>\n</div>\n",
        tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-timepicker-spinners',\n    templateUrl: './timepicker-spinners.html'\n})\nexport class NgbdTimepickerSpinners {\n    time = {hour: 13, minute: 30};\n    spinners = true;\n\n    toggleSpinners() {\n        this.spinners = !this.spinners;\n    }\n}\n\n\t",
        viewCode: "",
        isCodeVisible: false
      };
      var customSteps = {
        beforeCodeTitle: 'Custom steps',
        htmlCode: "\n<div class=\"example-preview\">\n  <div>\n\t<ngb-timepicker [(ngModel)]=\"time\" [seconds]=\"true\" [hourStep]=\"hourStep\" [minuteStep]=\"minuteStep\"\n      [secondStep]=\"secondStep\"></ngb-timepicker>\n     <div class=\"row\">\n        <div class=\"col-sm-3\">\n          <label for=\"changeHourStep\">Hour Step</label>\n          <input id=\"changeHourStep\" type=\"number\" class=\"form-control form-control-sm\" [(ngModel)]=\"hourStep\" />\n        </div>\n        <div class=\"col-sm-3\">\n          <label for=\"changeMinuteStep\">Minute Step</label>\n          <input id=\"changeMinuteStep\" type=\"number\" class=\"form-control form-control-sm\" [(ngModel)]=\"minuteStep\" />\n        </div>\n        <div class=\"col-sm-3\">\n          <label for=\"changeSecondStep\">Second Step</label>\n          <input id=\"changeSecondStep\" type=\"number\" class=\"form-control form-control-sm\" [(ngModel)]=\"secondStep\" />\n        </div>\n      </div>\n    </div>\n</div>\n<div class=\"separator separator-dashed my-6\"></div>\n<div class=\"example-preview\">\n  <div>\n  <pre>Selected time: {{time | json}}</pre>\n  </div>\n</div>\n\t\t",
        tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-timepicker-steps',\n    templateUrl: './timepicker-steps.html'\n})\nexport class NgbdTimepickerSteps {\n    time: NgbTimeStruct = {hour: 13, minute: 30, second: 0};\n    hourStep = 1;\n    minuteStep = 15;\n    secondStep = 30;\n}\n",
        viewCode: "",
        isCodeVisible: false
      };
      var customValidation = {
        beforeCodeTitle: 'Custom validation',
        htmlCode: "\n<div class=\"example-preview\">\n  <span>\n\tIllustrates custom validation, you have to select time between 12:00 and 13:59\n  </span>\n  <div>\n    <div class=\"form-group\">\n      <ngb-timepicker [(ngModel)]=\"time\" [formControl]=\"ctrl\" required></ngb-timepicker>\n\t  <div *ngIf=\"ctrl.valid\" class=\"small form-text text-success\">Great choice</div>\n      <div class=\"small form-text text-danger\" *ngIf=\"!ctrl.valid\">\n      <div *ngIf=\"ctrl.errors['required']\">Select some time during lunchtime</div>\n      <div *ngIf=\"ctrl.errors['tooLate']\">Oh no, it's way too late</div>\n      <div *ngIf=\"ctrl.errors['tooEarly']\">It's a bit too early</div>\n    </div>\n  </div>\n</div>\n<div class=\"separator separator-dashed my-6\"></div>\n<div class=\"example-preview\">\n  <div>\n    <pre>Selected time: {{time | json}}</pre>\n  </div>\n</div>\n\t\t",
        tsCode: "\nimport {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\n\n@Component({\n    selector: 'ngbd-timepicker-validation',\n    templateUrl: './timepicker-validation.html'\n})\nexport class NgbdTimepickerValidation {\n    time;\n\n    ctrl = new FormControl('', (control: FormControl) => {\n        const value = control.value;\n\n        if (!value) {\n            return null;\n        }\n\n        if (value.hour < 12) {\n            return {tooEarly: true};\n        }\n\n        if (value.hour > 13) {\n            return {tooLate: true};\n\t\t}\n\n        return null;\n    });\n}\n",
        viewCode: "",
        isCodeVisible: false
      };
      var globalConfigurationOfTimepickers = {
        beforeCodeTitle: 'Global configuration of timepickers',
        htmlCode: "\n<div class=\"example-preview\">\n  <span>\n\tThis timepicker uses customized default values.\n  </span>\n  <div>\n    <ngb-timepicker [(ngModel)]=\"time\" [seconds]=\"'true'\" [spinners]=\"'false'\"></ngb-timepicker>\n  </div>\n</div>\n\t\t",
        tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbTimepickerConfig} from '@ng-bootstrap/ng-bootstrap';\nimport {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-timepicker-config',\n    templateUrl: './timepicker-config.html',\n    providers: [NgbTimepickerConfig] // add NgbTimepickerConfig to the component providers\n})\nexport class NgbdTimepickerConfig {\n    time: NgbTimeStruct = {hour: 13, minute: 30, second: 0};\n\n    constructor(config: NgbTimepickerConfig) {\n        // customize default values of ratings used by this component tree\n        config.seconds = true;\n        config.spinners = false;\n    }\n}\n",
        viewCode: "",
        isCodeVisible: false
      };

      var TimepickerComponent = /*#__PURE__*/function () {
        function TimepickerComponent(config) {
          _classCallCheck(this, TimepickerComponent);

          this.time = {
            hour: 13,
            minute: 30
          };
          this.time2 = {
            hour: 13,
            minute: 30
          };
          this.meridian = true;
          this.time3 = {
            hour: 13,
            minute: 30,
            second: 30
          };
          this.seconds = true;
          this.time4 = {
            hour: 13,
            minute: 30,
            second: 0
          };
          this.hourStep = 1;
          this.minuteStep = 15;
          this.secondStep = 30;
          this.time6 = {
            hour: 13,
            minute: 30,
            second: 0
          };
          this.time7 = {
            hour: 13,
            minute: 30
          };
          this.spinners = true; // customize default values of ratings used by this component tree
          // config.seconds = true;
          // config.spinners = false;
        }

        _createClass(TimepickerComponent, [{
          key: "toggleSpinners",
          value: function toggleSpinners() {
            this.spinners = !this.spinners;
          }
        }, {
          key: "toggleSeconds",
          value: function toggleSeconds() {
            this.seconds = !this.seconds;
          }
        }, {
          key: "toggleMeridian",
          value: function toggleMeridian() {
            this.meridian = !this.meridian;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.exampleTimepicker = timepicker;
            this.exampleMeridian = meridian;
            this.exampleSeconds = seconds;
            this.exampleSpinners = spinners;
            this.exampleCustomSteps = customSteps;
            this.exampleCustomValidation = customValidation;
            this.exampleGlobalConfigurationOfTimepickers = globalConfigurationOfTimepickers;
            this.ctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', function (control) {
              var value = control.value;

              if (!value) {
                return null;
              }

              if (value.hour < 12) {
                return {
                  tooEarly: true
                };
              }

              if (value.hour > 13) {
                return {
                  tooLate: true
                };
              }

              return null;
            });
          }
        }]);

        return TimepickerComponent;
      }();

      TimepickerComponent.ɵfac = function TimepickerComponent_Factory(t) {
        return new (t || TimepickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTimepickerConfig"]));
      };

      TimepickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TimepickerComponent,
        selectors: [["app-ng-timepicker"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTimepickerConfig"]])],
        decls: 94,
        vars: 57,
        consts: [[3, "svg"], ["href", "https://ng-bootstrap.github.io/#/components/timepicker/examples", "target", "_blank", 1, "font-weight-bold"], [1, "row"], [1, "col-xl-6"], [3, "viewItem"], [1, "example-preview"], [3, "ngModel", "ngModelChange"], [1, "separator", "separator-dashed", "my-6"], [3, "ngModel", "meridian", "ngModelChange"], [3, "click"], [3, "ngModel", "seconds", "ngModelChange"], [3, "ngModel", "spinners", "ngModelChange"], [3, "ngModel", "seconds", "hourStep", "minuteStep", "secondStep", "ngModelChange"], [1, "col-sm-3"], ["for", "changeHourStep"], ["id", "changeHourStep", "type", "number", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["for", "changeMinuteStep"], ["id", "changeMinuteStep", "type", "number", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["for", "changeSecondStep"], ["id", "changeSecondStep", "type", "number", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], [1, "form-group"], ["required", "", 3, "ngModel", "formControl", "ngModelChange"], ["class", "small form-text text-success", 4, "ngIf"], ["class", "small form-text text-danger", 4, "ngIf"], [3, "ngModel", "seconds", "spinners", "ngModelChange"], [1, "small", "form-text", "text-success"], [1, "small", "form-text", "text-danger"], [4, "ngIf"]],
        template: function TimepickerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notice", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " For more info please check the components's official demos & documentation ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "demos & documentation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngb-timepicker", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TimepickerComponent_Template_ngb_timepicker_ngModelChange_9_listener($event) {
              return ctx.time = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ngb-timepicker", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TimepickerComponent_Template_ngb_timepicker_ngModelChange_19_listener($event) {
              return ctx.time2 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimepickerComponent_Template_button_click_20_listener() {
              return ctx.toggleMeridian();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ngb-timepicker", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TimepickerComponent_Template_ngb_timepicker_ngModelChange_31_listener($event) {
              return ctx.time3 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimepickerComponent_Template_button_click_32_listener() {
              return ctx.toggleSeconds();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ngb-timepicker", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TimepickerComponent_Template_ngb_timepicker_ngModelChange_43_listener($event) {
              return ctx.time7 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimepickerComponent_Template_button_click_47_listener() {
              return ctx.toggleSpinners();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ngb-timepicker", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TimepickerComponent_Template_ngb_timepicker_ngModelChange_53_listener($event) {
              return ctx.time4 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Hour Step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TimepickerComponent_Template_input_ngModelChange_58_listener($event) {
              return ctx.hourStep = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Minute Step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TimepickerComponent_Template_input_ngModelChange_62_listener($event) {
              return ctx.minuteStep = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Second Step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TimepickerComponent_Template_input_ngModelChange_66_listener($event) {
              return ctx.secondStep = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](72, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Illustrates custom validation, you have to select time between 12:00 and 13:59 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "ngb-timepicker", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TimepickerComponent_Template_ngb_timepicker_ngModelChange_79_listener($event) {
              return ctx.time5 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, TimepickerComponent_div_80_Template, 2, 0, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, TimepickerComponent_div_81_Template, 4, 3, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](87, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " This timepicker uses customized default values. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "ngb-timepicker", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TimepickerComponent_Template_ngb_timepicker_ngModelChange_93_listener($event) {
              return ctx.time6 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svg", "assets/media/svg/icons/Tools/Compass.svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleTimepicker);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.time);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Selected time: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 47, ctx.time), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleMeridian);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.time2)("meridian", ctx.meridian);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-sm btn-", ctx.meridian ? "success" : "danger", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Meridian - ", ctx.meridian ? "ON" : "OFF", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Selected time: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 49, ctx.time2), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleSeconds);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.time3)("seconds", ctx.seconds);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-sm btn-", ctx.seconds ? "success" : "danger", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Seconds - ", ctx.seconds ? "ON" : "OFF", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Selected time: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 51, ctx.time3), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleSpinners);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.time7)("spinners", ctx.spinners);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("kt-t-1 btn btn-sm btn-", ctx.spinners ? "success" : "danger", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Spinners - ", ctx.spinners ? "ON" : "OFF", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleCustomSteps);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.time4)("seconds", true)("hourStep", ctx.hourStep)("minuteStep", ctx.minuteStep)("secondStep", ctx.secondStep);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.hourStep);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.minuteStep);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.secondStep);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Selected time: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](72, 53, ctx.time4), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleCustomValidation);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.time5)("formControl", ctx.ctrl);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ctrl.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.ctrl.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Selected time: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](87, 55, ctx.time5), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleGlobalConfigurationOfTimepickers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.time6)("seconds", "true")("spinners", "false");
          }
        },
        directives: [_metronic_partials_content_general_notice_notice_component__WEBPACK_IMPORTED_MODULE_3__["NoticeComponent"], _metronic_partials_content_general_code_preview_code_preview_component__WEBPACK_IMPORTED_MODULE_4__["CodePreviewComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTimepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["JsonPipe"]],
        encapsulation: 2,
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimepickerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ng-timepicker',
            templateUrl: './timepicker.component.html',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTimepickerConfig"]]
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTimepickerConfig"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/ngbootstrap/tooltip/tooltip.component.ts":
    /*!******************************************************************!*\
      !*** ./src/app/modules/ngbootstrap/tooltip/tooltip.component.ts ***!
      \******************************************************************/

    /*! exports provided: TooltipComponent */

    /***/
    function srcAppModulesNgbootstrapTooltipTooltipComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TooltipComponent", function () {
        return TooltipComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _metronic_partials_content_general_notice_notice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../_metronic/partials/content/general/notice/notice.component */
      "./src/app/_metronic/partials/content/general/notice/notice.component.ts");
      /* harmony import */


      var _metronic_partials_content_general_code_preview_code_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../_metronic/partials/content/general/code-preview/code-preview.component */
      "./src/app/_metronic/partials/content/general/code-preview/code-preview.component.ts");

      var _c0 = ["t2"];

      function TooltipComponent_ng_template_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Hello, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "! ");
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.name);
        }
      }

      function TooltipComponent_ng_template_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "! ");
        }

        if (rf & 2) {
          var greeting_r6 = ctx.greeting;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", greeting_r6, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.name2);
        }
      }

      var quickAndEasyTooltips = {
        beforeCodeTitle: 'Quick and easy tooltips',
        htmlCode: "\n<div class=\"example-preview\">\n  <div>\n    <button type=\"button\" class=\"btn btn-primary\" placement=\"top\" ngbTooltip=\"Tooltip on top\" ngbTooltipClass=\"kt-tooltip\">\n      Tooltip on top\n\t</button>\n    <button type=\"button\" class=\"btn btn-info\" placement=\"right\" ngbTooltip=\"Tooltip on right\">\n      Tooltip on right\n    </button>\n    <button type=\"button\" class=\"btn btn-success\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">\n      Tooltip on bottom\n    </button>\n\t<button type=\"button\" class=\"btn btn-danger\" placement=\"left\" ngbTooltip=\"Tooltip on left\">\n      Tooltip on left\n    </button>\n  </div>\n</div>\n",
        tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-tooltip-basic',\n    templateUrl: './tooltip-basic.html'\n})\nexport class NgbdTooltipBasic {}\n\t\t",
        viewCode: "",
        isCodeVisible: false,
        isExampleExpanded: true
      };
      var HTMLAndBindingsInTooltips = {
        beforeCodeTitle: 'Progress bars with current value labels',
        htmlCode: "\n<div class=\"example-preview\">\n  <div>\n    Tooltips can contain any arbitrary HTML, Angular bindings and even directives! Simply enclose desired content in a\n    <code>&lt;ng-template&gt;</code> element.\n  </div>\n  <div>\n    <ng-template #tipContentS>Hello,\n      <b>{{name}}</b>!</ng-template>\n    <button type=\"button\" class=\"btn btn-primary\" [ngbTooltip]=\"tipContentS\">\n      I've got markup and bindings in my tooltip!\n    </button>\n  </div>\n</div>\n\t\t",
        tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-tooltip-tplcontent',\n    templateUrl: './tooltip-tplcontent.html'\n})\nexport class NgbdTooltipTplcontent {\n    name = 'World';\n}\n\n\t\t",
        viewCode: "",
        isCodeVisible: false
      };
      var customAndManualTriggers = {
        beforeCodeTitle: 'Custom and manual triggers',
        htmlCode: "\n<div class=\"example-preview\">\n  <div>\n    You can easily override open and close triggers by specifying event names (separated by\n    <code>:</code>) in the\n    <code>triggers</code> property.\n  </div>\n  <div>\n    <button type=\"button\" class=\"btn btn-primary\" ngbTooltip=\"You see, I show up on click!\" triggers=\"click:blur\">\n      Click me!\n    </button>\n  </div>\n</div>\n<div class=\"separator separator-dashed my-6\"></div>\n<div class=\"example-preview\">\n  <div>\n    Alternatively you can take full manual control over tooltip opening / closing events.\n  </div>\n  <div>\n    <button type=\"button\" class=\"btn btn-primary\" ngbTooltip=\"What a great tip!\" triggers=\"manual\" #t=\"ngbTooltip\" (click)=\"t.open()\">\n      Click me to open a tooltip\n    </button>\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"t.close()\">\n      Click me to close a tooltip\n    </button>\n  </div>\n</div>\n\t\t",
        tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-progressbar-striped',\n    templateUrl: './progressbar-striped.html'\n})\nexport class NgbdProgressbarStriped {\n}\n\t\t",
        viewCode: "",
        isCodeVisible: false
      };
      var contextAndManualTriggers = {
        beforeCodeTitle: 'Context and manual triggers',
        htmlCode: "\n<ng-template #tipContent let-greeting=\"greeting\">{{greeting}},\n  <b>{{name2}}</b>!\n</ng-template>\n<div class=\"example-preview\">\n  <div>\n    You can optionally pass in a context when manually triggering a popover.\n    <div class=\"separator separator-dashed my-6\"></div>\n    How would you like to greet\n   <strong [ngbTooltip]=\"tipContent\" #t2=\"ngbTooltip\" triggers=\"manual\">me</strong>?\n  </div>\n  <div>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"changeGreeting({ greeting: 'Bonjour' })\">\n      French\n    </button>\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"changeGreeting({ greeting: 'Gutentag' })\">\n      German\n    </button>\n    <button type=\"button\" class=\"btn btn-success\" (click)=\"changeGreeting({ greeting: 'Hello' })\">\n      English\n    </button>\n  </div>\n</div>\n\t\t",
        tsCode: "\nimport {NgbTooltip} from '@ng-bootstrap/ng-bootstrap';\nimport {Component, ViewChild} from '@angular/core';\n\n@Component({\n     selector: 'ngbd-tooltip-tplwithcontext',\n     templateUrl: './tooltip-tplwithcontext.html'\n})\nexport class NgbdTooltipTplwithcontext {\n    greeting = {};\n    name = 'World';\n\n    @ViewChild('t', {static: true}) public tooltip: NgbTooltip;\n\n    public changeGreeting(greeting: any): void {\n        const isOpen = this.tooltip.isOpen();\n        this.tooltip.close();\n        if (greeting !== this.greeting || !isOpen) {\n\t\t    this.greeting = greeting;\n            this.tooltip.open(greeting);\n        }\n    }\n}\n",
        viewCode: "",
        isCodeVisible: false
      };
      var appendTooltipInTheBody = {
        beforeCodeTitle: 'Append tooltip in the body',
        htmlCode: "\n<div class=\"example-preview\">\n  <div>\n    Set the\n\t<code>container</code> property to \"body\" to have the tooltip be appended to the body instead of the triggering element's parent.\n      This option is useful if the element triggering the tooltip is inside an element that clips its contents (i.e.\n    <code>overflow: hidden</code>).\n  </div>\n  <div>\n    <div class='row'>\n      <div class='card'>\n        <button type=\"button\" class=\"btn btn-outline-primary\" ngbTooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n          Default tooltip\n        </button>\n        <br />\n\t\t<button type=\"button\" class=\"btn btn-outline-info\"\n          ngbTooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" container=\"body\">\n          Tooltip appended to body\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\t\t",
        tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-tooltip-container',\n    templateUrl: './tooltip-container.html',\n    styles: ['.card { padding: 50px 0; text-align: center; overflow:hidden }']\n})\nexport class NgbdTooltipContainer {\n}\n\n",
        viewCode: "",
        isCodeVisible: false
      };
      var globalConfigurationOfTooltips = {
        beforeCodeTitle: 'Global configuration of progress tooltips',
        htmlCode: "\n<div class=\"example-preview\">\n  <div>\n\t<button type=\"button\" class=\"btn btn-primary\"\n      ngbTooltip=\"This tooltip gets its inputs from the customized configuration\" placement=\"right\" triggers=\"click\">\n      Customized tooltip\n    </button>\n  </div>\n</div>\n\t\t",
        tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbTooltipConfig} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n  selector: 'ngbd-tooltip-config',\n  templateUrl: './tooltip-config.html',\n  providers: [NgbTooltipConfig] // add NgbTooltipConfig to the component providers\n})\nexport class NgbdTooltipConfig {\n    constructor(config: NgbTooltipConfig) {\n        // customize default values of tooltips used by this component tree\n        config.placement = 'right';\n        config.triggers = 'click';\n    }\n}\n\n",
        viewCode: "",
        isCodeVisible: false
      };

      var TooltipComponent = /*#__PURE__*/function () {
        function TooltipComponent(config) {
          _classCallCheck(this, TooltipComponent);

          this.name = 'World';
          this.greeting = {};
          this.name2 = 'World'; // customize default values of tooltips used by this component tree
          // config.placement = 'right';
          // config.triggers = 'click';

          config.container = 'body';
        }

        _createClass(TooltipComponent, [{
          key: "changeGreeting",
          value: function changeGreeting(greeting) {
            var isOpen = this.tooltip.isOpen();
            this.tooltip.close();

            if (greeting !== this.greeting || !isOpen) {
              this.greeting = greeting;
              this.tooltip.open(greeting);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.exampleQuickAndEasyTooltips = quickAndEasyTooltips;
            this.exampleHTMLAndBindingsInTooltipsl = HTMLAndBindingsInTooltips;
            this.exampleCustomAndManualTriggers = customAndManualTriggers;
            this.exampleContextAndManualTriggers = contextAndManualTriggers;
            this.exampleAppendTooltipInTheBody = appendTooltipInTheBody;
            this.exampleGlobalConfigurationOfTooltips = globalConfigurationOfTooltips;
          }
        }]);

        return TooltipComponent;
      }();

      TooltipComponent.ɵfac = function TooltipComponent_Factory(t) {
        return new (t || TooltipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTooltipConfig"]));
      };

      TooltipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TooltipComponent,
        selectors: [["app-ng-tooltip"]],
        viewQuery: function TooltipComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tooltip = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTooltipConfig"]])],
        decls: 101,
        vars: 9,
        consts: [[3, "svg"], ["href", "https://ng-bootstrap.github.io/#/components/tooltip/examples", "target", "_blank", 1, "font-weight-bold"], [1, "row"], [1, "col-xl-6"], [3, "viewItem"], [1, "example-preview"], ["type", "button", "placement", "top", "ngbTooltip", "Tooltip on top", "ngbTooltipClass", "kt-tooltip", 1, "btn", "btn-primary"], ["type", "button", "placement", "right", "ngbTooltip", "Tooltip on right", 1, "btn", "btn-info"], ["type", "button", "placement", "bottom", "ngbTooltip", "Tooltip on bottom", 1, "btn", "btn-success"], ["type", "button", "placement", "left", "ngbTooltip", "Tooltip on left", 1, "btn", "btn-danger"], ["tipContentS", ""], ["type", "button", 1, "btn", "btn-primary", 3, "ngbTooltip"], ["type", "button", "ngbTooltip", "You see, I show up on click!", "triggers", "click:blur", 1, "btn", "btn-primary"], [1, "separator", "separator-dashed", "my-6"], ["type", "button", "ngbTooltip", "What a great tip!", "triggers", "manual", 1, "btn", "btn-primary", 3, "click"], ["t", "ngbTooltip"], ["type", "button", 1, "btn", "btn-info", 3, "click"], ["tipContent", ""], ["triggers", "manual", 3, "ngbTooltip"], ["t2", "ngbTooltip"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "card"], ["type", "button", "ngbTooltip", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", 1, "btn", "btn-outline-primary"], ["type", "button", "ngbTooltip", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "container", "body", 1, "btn", "btn-outline-info"], ["type", "button", "ngbTooltip", "This tooltip gets its inputs from the customized configuration", "placement", "right", "triggers", "click", 1, "btn", "btn-primary"]],
        template: function TooltipComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notice", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " For more info please check the components's official demos & documentation ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "demos & documentation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Tooltip on top");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Tooltip on right");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Tooltip on bottom");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Tooltip on left ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Tooltips can contain any arbitrary HTML, Angular bindings and even directives! Simply enclose desired content in a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "<ng-template>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " element. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, TooltipComponent_ng_template_28_Template, 4, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " I've got markup and bindings in my tooltip! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " You can easily override open and close triggers by specifying event names (separated by ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, ":");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, ") in the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "triggers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " property. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Click me! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Alternatively you can take full manual control over tooltip opening / closing events. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 14, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TooltipComponent_Template_button_click_50_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51);

              return _r2.open();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Click me to open a tooltip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TooltipComponent_Template_button_click_54_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51);

              return _r2.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Click me to close a tooltip ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, TooltipComponent_ng_template_58_Template, 4, 2, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " You can optionally pass in a context when manually triggering a popover. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " How would you like to greet ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "strong", 18, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TooltipComponent_Template_button_click_70_listener() {
              return ctx.changeGreeting({
                greeting: "Bonjour"
              });
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " French");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TooltipComponent_Template_button_click_73_listener() {
              return ctx.changeGreeting({
                greeting: "Gutentag"
              });
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " German");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TooltipComponent_Template_button_click_76_listener() {
              return ctx.changeGreeting({
                greeting: "Hello"
              });
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " English ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Set the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "container");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " property to \"body\" to have the tooltip be appended to the body instead of the triggering element's parent. This option is useful if the element triggering the tooltip is inside an element that clips its contents (i.e. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "overflow: hidden");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "). ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Default tooltip ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Tooltip appended to body ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Customized tooltip ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svg", "assets/media/svg/icons/Tools/Compass.svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleQuickAndEasyTooltips);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleHTMLAndBindingsInTooltipsl);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbTooltip", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleCustomAndManualTriggers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleContextAndManualTriggers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbTooltip", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleAppendTooltipInTheBody);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleGlobalConfigurationOfTooltips);
          }
        },
        directives: [_metronic_partials_content_general_notice_notice_component__WEBPACK_IMPORTED_MODULE_2__["NoticeComponent"], _metronic_partials_content_general_code_preview_code_preview_component__WEBPACK_IMPORTED_MODULE_3__["CodePreviewComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTooltip"]],
        styles: [".card[_ngcontent-%COMP%] { padding: 50px 0; text-align: center; overflow:hidden }"],
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ng-tooltip',
            templateUrl: './tooltip.component.html',
            styles: ['.card { padding: 50px 0; text-align: center; overflow:hidden }'],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTooltipConfig"]]
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTooltipConfig"]
          }];
        }, {
          tooltip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['t2', {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/modules/ngbootstrap/typehead/typehead.component.ts":
    /*!********************************************************************!*\
      !*** ./src/app/modules/ngbootstrap/typehead/typehead.component.ts ***!
      \********************************************************************/

    /*! exports provided: TypeheadComponent */

    /***/
    function srcAppModulesNgbootstrapTypeheadTypeheadComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypeheadComponent", function () {
        return TypeheadComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _wikipedia_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./wikipedia.service */
      "./src/app/modules/ngbootstrap/typehead/wikipedia.service.ts");
      /* harmony import */


      var _metronic_partials_content_general_notice_notice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../_metronic/partials/content/general/notice/notice.component */
      "./src/app/_metronic/partials/content/general/notice/notice.component.ts");
      /* harmony import */


      var _metronic_partials_content_general_code_preview_code_preview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../_metronic/partials/content/general/code-preview/code-preview.component */
      "./src/app/_metronic/partials/content/general/code-preview/code-preview.component.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var _c0 = ["instance"];

      function TypeheadComponent_span_100_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "searching...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TypeheadComponent_div_101_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sorry, suggestions could not be loaded. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TypeheadComponent_ng_template_112_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        }

        if (rf & 2) {
          var r_r5 = ctx.result;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/" + r_r5["flag"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", r_r5.name, " ");
        }
      }

      var simpleTypeahead = {
        beforeCodeTitle: 'Simple Typeahead',
        htmlCode: "\n<div class=\"example-preview\">\n<div>\nA typeahead example that gets values from a static\n<code>string[]</code>\n<ul>\n  <li>\n\t<code>debounceTime</code> operator\n  </li>\n  <li>kicks in only if 2+ characters typed</li>\n  <li>limits to 10 results</li>\n</ul>\n</div>\n<div>\n<label for=\"typeahead-basic\">Search for a state:</label>\n<input id=\"typeahead-basic\" type=\"text\" class=\"form-control\" [(ngModel)]=\"model\" [ngbTypeahead]=\"search\" />\n</div>\n</div>\n<div class=\"separator separator-dashed my-6\"></div>\n<div class=\"example-preview\">\n<div>\n<pre>Model: {{ model | json }}</pre>\n</div>\n</div>\n",
        tsCode: "\nimport {Component} from '@angular/core';\nimport {Observable} from 'rxjs/Observable';\nimport 'rxjs/add/operator/map';\nimport 'rxjs/add/operator/debounceTime';\nimport 'rxjs/add/operator/distinctUntilChanged';\n\nconst states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',\n'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',\n'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',\n'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',\n'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',\n'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',\n'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',\n'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];\n\n@Component({\nselector: 'ngbd-typeahead-basic',\ntemplateUrl: './typeahead-basic.html',\nstyles: [`.form-control { width: 300px; }`]\n})\nexport class NgbdTypeaheadBasic {\npublic model: any;\n\n  search = (text$: Observable<string>) =>\n  text$.pipe(\n    debounceTime(200),\n    distinctUntilChanged(),\n    map(term => term.length < 2 ? [] : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))\n  );\n}\n",
        viewCode: "",
        isCodeVisible: false,
        isExampleExpanded: true
      };
      var openOnFocus = {
        beforeCodeTitle: 'Open on focus',
        htmlCode: "\n<div class=\"example-preview\">\n<div>\nIt is possible to get the focus events with the current input value to emit results on focus with a great flexibility.\nIn this simple example, a search is done no matter the content of the input:\n<ul>\n  <li>on empty input all options will be taken</li>\n  <li>otherwise options will be filtered against the search term</li>\n  <li>it will limit the display to 10 results in all cases</li>\n</ul>\n</div>\n<div>\n<label for=\"typeahead-focus\">Search for a state:</label>\n<input id=\"typeahead-focus\" type=\"text\" class=\"form-control\" [(ngModel)]=\"model\" [ngbTypeahead]=\"search\"\n  (focus)=\"focus$.next($event.target.value)\" (click)=\"click$.next($event.target.value)\" #instance=\"ngbTypeahead\" />\n</div>\n</div>\n\n<div class=\"separator separator-dashed my-6\"></div>\n<div class=\"example-preview\">\n<div>\n<pre>Model: {{ model | json }}</pre>\n</div>\n</div>\n",
        tsCode: "\nimport {Component, ViewChild} from '@angular/core';\nimport {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';\nimport {Observable} from 'rxjs/Observable';\nimport {Subject} from 'rxjs/Subject';\nimport 'rxjs/add/operator/map';\nimport 'rxjs/add/operator/merge';\nimport 'rxjs/add/operator/filter';\nimport 'rxjs/add/operator/debounceTime';\nimport 'rxjs/add/operator/distinctUntilChanged';\n\nconst states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',\n'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',\n'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',\n'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',\n'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',\n'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',\n'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',\n'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];\n\n@Component({\nselector: 'ngbd-typeahead-focus',\ntemplateUrl: './typeahead-focus.html',\nstyles: [`.form-control { width: 300px; }`]\n})\nexport class NgbdTypeaheadFocus {\nmodel: any;\n\n@ViewChild('instance', {static: true}) instance: NgbTypeahead;\nfocus$ = new Subject<string>();\nclick$ = new Subject<string>();\n\nsearch = (text$: Observable<string>) => {\n  const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());\n  const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));\n  const inputFocus$ = this.focus$;\n\n\n  return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(\n    map(term => (term === '' ? states\n      : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))\n  );\n}\n\n",
        viewCode: "",
        isCodeVisible: false
      };
      var formattedResults = {
        beforeCodeTitle: 'Formatted results',
        htmlCode: "\n<div class=\"example-preview\">\n<div>\nA typeahead example that uses a formatter function for string results\n</div>\n<div>\n<label for=\"typeahead-format\">Search for a state:</label>\n<input id=\"typeahead-format\" type=\"text\" class=\"form-control\" [(ngModel)]=\"model\" [ngbTypeahead]=\"search\"\n  [resultFormatter]=\"formatter\" />\n</div>\n</div>\n<div class=\"separator separator-dashed my-6\"></div>\n<div class=\"example-preview\">\n<div>\n<pre>Model: {{ model | json }}</pre>\n</div>\n</div>\n",
        tsCode: "\nimport {Component} from '@angular/core';\nimport {Observable} from 'rxjs/Observable';\nimport 'rxjs/add/operator/map';\nimport 'rxjs/add/operator/debounceTime';\nimport 'rxjs/add/operator/distinctUntilChanged';\n\nconst states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',\n'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',\n'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',\n'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',\n'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',\n'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',\n'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',\n'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];\n\n@Component({\nselector: 'ngbd-typeahead-format',\ntemplateUrl: './typeahead-format.html',\nstyles: [`.form-control { width: 300px; }`]\n})\nexport class NgbdTypeaheadFormat {\n  public model: any;\n\n  formatter = (result: string) => result.toUpperCase();\n\n  search = (text$: Observable<string>) =>\n    text$.pipe(\n      debounceTime(200),\n      distinctUntilChanged(),\n      map(term => term === '' ? []\n        : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))\n    );\n}\n",
        viewCode: "",
        isCodeVisible: false
      };
      var wikipediaSearch = {
        beforeCodeTitle: 'Wikipedia search',
        htmlCode: "\n<div class=\"example-preview\">\n  <div>\n    A typeahead example that gets values from the\n    <code>WikipediaService</code>\n    <ul>\n      <li>remote data retrieval</li>\n      <li><code>debounceTime</code> operator</li>\n      <li><code>do</code> operator</li>\n      <li><code>distinctUntilChanged</code> operator</li>\n      <li><code>switchMap</code> operator</li>\n      <li><code>catch</code> operator to display an error message in case of connectivity issue</li>\n    </ul>\n  </div>\n  <div>\n    <div class=\"form-group\">\n      <label for=\"typeahead-http\">Search for a wiki page:</label>\n      <input id=\"typeahead-http\" type=\"text\" class=\"form-control\" [class.is-invalid]=\"searchFailed\" [(ngModel)]=\"model\"\n       [ngbTypeahead]=\"search\" placeholder=\"Wikipedia search\" />\n      <span *ngIf=\"searching\">searching...</span>\n      <div class=\"invalid-feedback\" *ngIf=\"searchFailed\">Sorry, suggestions could not be loaded.</div>\n    </div>\n  </div>\n</div>\n<div class=\"separator separator-dashed my-6\"></div>\n<div class=\"example-preview\">\n  <div>\n    <pre>Model: {{ model | json }}</pre>\n  </div>\n</div>\n",
        tsCode: "\nimport {Component, Injectable} from '@angular/core';\nimport {HttpClient, HttpParams} from '@angular/common/http';\nimport {Observable} from 'rxjs/Observable';\nimport {of} from 'rxjs/observable/of';\nimport 'rxjs/add/operator/catch';\nimport 'rxjs/add/operator/debounceTime';\nimport 'rxjs/add/operator/distinctUntilChanged';\nimport 'rxjs/add/operator/do';\nimport 'rxjs/add/operator/map';\nimport 'rxjs/add/operator/switchMap';\nimport 'rxjs/add/operator/merge';\n\nconst WIKI_URL = 'https://en.wikipedia.org/w/api.php';\nconst PARAMS = new HttpParams({\n  fromObject: {\n    action: 'opensearch',\n    format: 'json',\n    origin: '*'\n  }\n});\n\n@Injectable()\nexport class WikipediaService {\nconstructor(private http: HttpClient) {}\n\n  search(term: string) {\n    if (term === '') {\n      return of([]);\n    }\n\n    return this.http\n      .get(WIKI_URL, {params: PARAMS.set('search', term)})\n      .map(response => response[1]);\n  }\n}\n\n@Component({\n  selector: 'ngbd-typeahead-http',\n  templateUrl: './typeahead-http.html',\n  providers: [WikipediaService],\n  styles: [`.form-control { width: 300px; display: inline; }`]\n})\nexport class NgbdTypeaheadHttp {\n  model: any;\n  searching = false;\n  searchFailed = false;\n  hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);\n\n  constructor(private _service: WikipediaService) {}\n\n  search = (text$: Observable<string>) =>\n    text$.pipe(\n      debounceTime(300),\n      distinctUntilChanged(),\n      tap(() => this.searching = true),\n      switchMap(term =>\n        this._service.search(term).pipe(\n        tap(() => this.searchFailed = false),\n        catchError(() => {\n\t\t  this.searchFailed = true;\n          return of([]);\n        }))\n    ),\n    tap(() => this.searching = false)\n  );\n}\n",
        viewCode: "",
        isCodeVisible: false
      };
      var templateForResults = {
        beforeCodeTitle: 'Template for results',
        htmlCode: "\n<div class=\"example-preview\">\n  <div>\n    A typeahead example that uses custom template for results display and uses object as a model\n  </div>\n  <div>\n    <ng-template #rt let-r=\"result\" let-t=\"term\">\n      <img [src]=\"'https://upload.wikimedia.org/wikipedia/commons/thumb/' + r['flag']\" width=\"16\"> {{ r.name}}\n    </ng-template>\n    <label for=\"typeahead-template\">Search for a state:</label>\n\t<input id=\"typeahead-template\" type=\"text\" class=\"form-control\" [(ngModel)]=\"model\"\n      [ngbTypeahead]=\"search\" [resultTemplate]=\"rt\" [inputFormatter]=\"formatter\" />\n  </div>\n</div>\n<div class=\"separator separator-dashed my-6\"></div>\n<div class=\"example-preview\">\n  <div>\n    <pre>Model: {{ model | json }}</pre>\n  </div>\n</div>\n",
        tsCode: "\nimport {Component} from '@angular/core';\nimport {Observable} from 'rxjs/Observable';\nimport 'rxjs/add/operator/debounceTime';\nimport 'rxjs/add/operator/map';\n\nconst statesWithFlags = [\n  {'name': 'Alabama', 'flag': '5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png'},\n  {'name': 'Alaska', 'flag': 'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png'},\n  {'name': 'Arizona', 'flag': '9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png'},\n  {'name': 'Arkansas', 'flag': '9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png'},\n  {'name': 'California', 'flag': '0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png'},\n  {'name': 'Colorado', 'flag': '4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png'},\n  {'name': 'Connecticut', 'flag': '9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png'},\n  {'name': 'Delaware', 'flag': 'c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png'},\n  {'name': 'Florida', 'flag': 'f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png'},\n  {\n    'name': 'Georgia',\n    'flag': '5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png'\n  },\n  {'name': 'Hawaii', 'flag': 'e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png'},\n  {'name': 'Idaho', 'flag': 'a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png'},\n  {'name': 'Illinois', 'flag': '0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png'},\n  {'name': 'Indiana', 'flag': 'a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png'},\n  {'name': 'Iowa', 'flag': 'a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png'},\n  {'name': 'Kansas', 'flag': 'd/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png'},\n  {'name': 'Kentucky', 'flag': '8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png'},\n  {'name': 'Louisiana', 'flag': 'e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png'},\n  {'name': 'Maine', 'flag': '3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png'},\n  {'name': 'Maryland', 'flag': 'a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png'},\n  {'name': 'Massachusetts', 'flag': 'f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png'},\n  {'name': 'Michigan', 'flag': 'b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png'},\n  {'name': 'Minnesota', 'flag': 'b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png'},\n  {'name': 'Mississippi', 'flag': '4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png'},\n  {'name': 'Missouri', 'flag': '5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png'},\n  {'name': 'Montana', 'flag': 'c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png'},\n  {'name': 'Nebraska', 'flag': '4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png'},\n  {'name': 'Nevada', 'flag': 'f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png'},\n  {'name': 'New Hampshire', 'flag': '2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png'},\n  {'name': 'New Jersey', 'flag': '9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png'},\n  {'name': 'New Mexico', 'flag': 'c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png'},\n  {'name': 'New York', 'flag': '1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png'},\n  {'name': 'North Carolina', 'flag': 'b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png'},\n  {'name': 'North Dakota', 'flag': 'e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png'},\n  {'name': 'Ohio', 'flag': '4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png'},\n  {'name': 'Oklahoma', 'flag': '6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png'},\n  {'name': 'Oregon', 'flag': 'b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png'},\n  {'name': 'Pennsylvania', 'flag': 'f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png'},\n  {'name': 'Rhode Island', 'flag': 'f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png'},\n  {'name': 'South Carolina', 'flag': '6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png'},\n  {'name': 'South Dakota', 'flag': '1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png'},\n  {'name': 'Tennessee', 'flag': '9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png'},\n  {'name': 'Texas', 'flag': 'f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png'},\n  {'name': 'Utah', 'flag': 'f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png'},\n  {'name': 'Vermont', 'flag': '4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png'},\n  {'name': 'Virginia', 'flag': '4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png'},\n  {'name': 'Washington', 'flag': '5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png'},\n  {'name': 'West Virginia', 'flag': '2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png'},\n  {'name': 'Wisconsin', 'flag': '2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png'},\n  {'name': 'Wyoming', 'flag': 'b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png'}\n]; \n\n@Component({\n  selector: 'ngbd-typeahead-template',\n  templateUrl: './typeahead-template.html',\n  styles: [`.form-control { width: 300px; }`]\n})\nexport class NgbdTypeaheadTemplate {\n  public model: any;\n\n  search = (text$: Observable<string>) =>\n  text$.pipe(\n\tdebounceTime(200),\n    map(term => term === '' ? []\n      : statesWithFlags.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))\n  );\n\n  formatter = (x: {name: string}) => x.name;\n}\n",
        viewCode: "",
        isCodeVisible: false
      };
      var globalConfigurationOfTypeaheads = {
        beforeCodeTitle: 'Global configuration of progress typeaheads',
        htmlCode: "\n<div class=\"example-preview\">\n  <div>\n    This typeahead shows a hint when the input matches because the default values have been customized.\n  </div>\n  <div>\n    <label for=\"typeahead-config\">Search for a state:</label>\n    <input id=\"typeahead-config\" type=\"text\" class=\"form-control\" [(ngModel)]=\"model\" [ngbTypeahead]=\"search\" />\n  </div>\n</div>\n",
        tsCode: "\nimport {Component} from '@angular/core';\nimport {Observable} from 'rxjs/Observable';\nimport {NgbTypeaheadConfig} from '@ng-bootstrap/ng-bootstrap';\nimport 'rxjs/add/operator/map';\nimport 'rxjs/add/operator/debounceTime';\nimport 'rxjs/add/operator/distinctUntilChanged'; \n\nconst states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',\n  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',\n  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',\n  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',\n  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',\n  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',\n  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',\n  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];\n\n@Component({\n  selector: 'ngbd-typeahead-config',\n  templateUrl: './typeahead-config.html',\n  styles: [`.form-control { width: 300px; }`],\n  providers: [NgbTypeaheadConfig] // add NgbTypeaheadConfig to the component providers\n})\nexport class NgbdTypeaheadConfig {\n  public model: any;\n\n  constructor(config: NgbTypeaheadConfig) {\n    // customize default values of typeaheads used by this component tree\n    config.showHint = true;\n  } \n\n  search = (text$: Observable<string>) =>\n    text$.pipe(\n\t  debounceTime(200),\n      distinctUntilChanged(),\n      map(term => term.length < 2 ? []\n        : states.filter(v => v.toLowerCase().startsWith(term.toLocaleLowerCase())).splice(0, 10))\n  );\n}\n",
        viewCode: "",
        isCodeVisible: false
      };
      var statesWithFlags = [{
        name: 'Alabama',
        flag: '5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png'
      }, {
        name: 'Alaska',
        flag: 'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png'
      }, {
        name: 'Arizona',
        flag: '9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png'
      }, {
        name: 'Arkansas',
        flag: '9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png'
      }, {
        name: 'California',
        flag: '0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png'
      }, {
        name: 'Colorado',
        flag: '4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png'
      }, {
        name: 'Connecticut',
        flag: '9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png'
      }, {
        name: 'Delaware',
        flag: 'c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png'
      }, {
        name: 'Florida',
        flag: 'f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png'
      }, {
        name: 'Georgia',
        flag: '5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png'
      }, {
        name: 'Hawaii',
        flag: 'e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png'
      }, {
        name: 'Idaho',
        flag: 'a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png'
      }, {
        name: 'Illinois',
        flag: '0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png'
      }, {
        name: 'Indiana',
        flag: 'a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png'
      }, {
        name: 'Iowa',
        flag: 'a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png'
      }, {
        name: 'Kansas',
        flag: 'd/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png'
      }, {
        name: 'Kentucky',
        flag: '8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png'
      }, {
        name: 'Louisiana',
        flag: 'e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png'
      }, {
        name: 'Maine',
        flag: '3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png'
      }, {
        name: 'Maryland',
        flag: 'a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png'
      }, {
        name: 'Massachusetts',
        flag: 'f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png'
      }, {
        name: 'Michigan',
        flag: 'b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png'
      }, {
        name: 'Minnesota',
        flag: 'b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png'
      }, {
        name: 'Mississippi',
        flag: '4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png'
      }, {
        name: 'Missouri',
        flag: '5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png'
      }, {
        name: 'Montana',
        flag: 'c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png'
      }, {
        name: 'Nebraska',
        flag: '4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png'
      }, {
        name: 'Nevada',
        flag: 'f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png'
      }, {
        name: 'New Hampshire',
        flag: '2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png'
      }, {
        name: 'New Jersey',
        flag: '9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png'
      }, {
        name: 'New Mexico',
        flag: 'c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png'
      }, {
        name: 'New York',
        flag: '1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png'
      }, {
        name: 'North Carolina',
        flag: 'b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png'
      }, {
        name: 'North Dakota',
        flag: 'e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png'
      }, {
        name: 'Ohio',
        flag: '4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png'
      }, {
        name: 'Oklahoma',
        flag: '6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png'
      }, {
        name: 'Oregon',
        flag: 'b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png'
      }, {
        name: 'Pennsylvania',
        flag: 'f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png'
      }, {
        name: 'Rhode Island',
        flag: 'f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png'
      }, {
        name: 'South Carolina',
        flag: '6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png'
      }, {
        name: 'South Dakota',
        flag: '1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png'
      }, {
        name: 'Tennessee',
        flag: '9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png'
      }, {
        name: 'Texas',
        flag: 'f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png'
      }, {
        name: 'Utah',
        flag: 'f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png'
      }, {
        name: 'Vermont',
        flag: '4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png'
      }, {
        name: 'Virginia',
        flag: '4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png'
      }, {
        name: 'Washington',
        flag: '5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png'
      }, {
        name: 'West Virginia',
        flag: '2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png'
      }, {
        name: 'Wisconsin',
        flag: '2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png'
      }, {
        name: 'Wyoming',
        flag: 'b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png'
      }];
      var states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

      var TypeheadComponent = /*#__PURE__*/function () {
        // tslint:disable-next-line:variable-name
        function TypeheadComponent(_service, config) {
          var _this6 = this;

          _classCallCheck(this, TypeheadComponent);

          this._service = _service;
          this.focus$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.click$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.searching = false;
          this.searchFailed = false;

          this.search6 = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) {
              return term.length < 2 ? [] : states.filter(function (v) {
                return v.toLowerCase().startsWith(term.toLocaleLowerCase());
              }).splice(0, 10);
            }) // tslint:disable-next-line:semicolon
            );
          };

          this.search5 = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) {
              return term === '' ? [] : statesWithFlags.filter(function (v) {
                return v.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
              }).slice(0, 10);
            }) // tslint:disable-next-line:semicolon
            );
          };

          this.formatter3 = function (result) {
            return result.toUpperCase();
          };

          this.formatter = function (x) {
            return x.name;
          };

          this.search4 = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
              return _this6.searching = true;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (term) {
              return _this6._service.search(term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
                return _this6.searchFailed = false;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
                _this6.searchFailed = true;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
              }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
              return _this6.searching = false;
            }) // tslint:disable-next-line:semicolon
            );
          };

          this.search3 = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) {
              return term === '' ? [] : states.filter(function (v) {
                return v.toLowerCase().indexOf(term.toLowerCase()) > -1;
              }).slice(0, 10);
            }) // tslint:disable-next-line:semicolon
            );
          };

          this.search2 = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());

            var clicksWithClosedPopup$ = _this6.click$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function () {
              return !_this6.instance.isPopupOpen();
            }));

            var inputFocus$ = _this6.focus$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) {
              return (term === '' ? states : states.filter(function (v) {
                return v.toLowerCase().indexOf(term.toLowerCase()) > -1;
              })).slice(0, 10);
            })); // tslint:disable-next-line:semicolon
          };

          this.search = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) {
              return term.length < 2 ? [] : states.filter(function (v) {
                return v.toLowerCase().indexOf(term.toLowerCase()) > -1;
              }).slice(0, 10);
            }) // tslint:disable-next-line:semicolon
            );
          };
        }

        _createClass(TypeheadComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.exampleSimpleTypeahead = simpleTypeahead;
            this.exampleOpenOnFocus = openOnFocus;
            this.exampleFormattedResults = formattedResults;
            this.exampleWikipediaSearch = wikipediaSearch;
            this.exampleTemplateForResults = templateForResults;
            this.exampleGlobalConfigurationOfTypeaheads = globalConfigurationOfTypeaheads;
          }
        }]);

        return TypeheadComponent;
      }();

      TypeheadComponent.ɵfac = function TypeheadComponent_Factory(t) {
        return new (t || TypeheadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_wikipedia_service__WEBPACK_IMPORTED_MODULE_4__["WikipediaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTypeaheadConfig"]));
      };

      TypeheadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TypeheadComponent,
        selectors: [["app-ng-typehead"]],
        viewQuery: function TypeheadComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.instance = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_wikipedia_service__WEBPACK_IMPORTED_MODULE_4__["WikipediaService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTypeaheadConfig"]])],
        decls: 130,
        vars: 41,
        consts: [[3, "svg"], ["href", "https://ng-bootstrap.github.io/#/components/typeahead/examples", "target", "_blank", 1, "font-weight-bold"], [1, "row"], [1, "col-xl-6"], [3, "viewItem"], [1, "example-preview"], ["for", "typeahead-basic"], ["id", "typeahead-basic", "type", "text", 1, "form-control", 3, "ngModel", "ngbTypeahead", "ngModelChange"], [1, "separator", "separator-dashed", "my-6"], ["for", "typeahead-focus"], ["id", "typeahead-focus", "type", "text", 1, "form-control", 3, "ngModel", "ngbTypeahead", "ngModelChange", "focus", "click"], ["instance", "ngbTypeahead"], ["for", "typeahead-format"], ["id", "typeahead-format", "type", "text", 1, "form-control", 3, "ngModel", "ngbTypeahead", "resultFormatter", "ngModelChange"], [1, "form-group"], ["for", "typeahead-http"], ["id", "typeahead-http", "type", "text", "placeholder", "Wikipedia search", 1, "form-control", 3, "ngModel", "ngbTypeahead", "ngModelChange"], [4, "ngIf"], ["class", "invalid-feedback", 4, "ngIf"], ["rt", ""], ["for", "typeahead-template"], ["id", "typeahead-template", "type", "text", 1, "form-control", 3, "ngModel", "ngbTypeahead", "resultTemplate", "inputFormatter", "ngModelChange"], ["for", "typeahead-config"], ["id", "typeahead-config", "type", "text", 1, "form-control", 3, "ngModel", "ngbTypeahead", "ngModelChange"], [1, "invalid-feedback"], ["width", "16", 3, "src"]],
        template: function TypeheadComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notice", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " For more info please check the components's official demos & documentation ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "demos & documentation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " A typeahead example that gets values from a static ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "string[]");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "debounceTime");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " operator");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "kicks in only if 2+ characters typed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "limits to 10 results");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Search for a state:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TypeheadComponent_Template_input_ngModelChange_24_listener($event) {
              return ctx.model = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " It is possible to get the focus events with the current input value to emit results on focus with a great flexibility. In this simple example, a search is done no matter the content of the input: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "on empty input all options will be taken");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "otherwise options will be filtered against the search term");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "it will limit the display to 10 results in all cases");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Search for a state:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TypeheadComponent_Template_input_ngModelChange_44_listener($event) {
              return ctx.model2 = $event;
            })("focus", function TypeheadComponent_Template_input_focus_44_listener($event) {
              return ctx.focus$.next($event.target.value);
            })("click", function TypeheadComponent_Template_input_click_44_listener($event) {
              return ctx.click$.next($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " A typeahead example that uses a formatter function for string results ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Search for a state:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TypeheadComponent_Template_input_ngModelChange_59_listener($event) {
              return ctx.model3 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " A typeahead example that gets values from the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Wikipedia Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "remote data retrieval");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "debounceTime");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " operator");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "do");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " operator");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "distinctUntilChanged");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " operator");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "switchMap");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " operator");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "catch");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " operator to display an error message in case of connectivity issue ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Search for a wiki page:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TypeheadComponent_Template_input_ngModelChange_99_listener($event) {
              return ctx.model4 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, TypeheadComponent_span_100_Template, 2, 0, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, TypeheadComponent_div_101_Template, 2, 0, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](106, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " A typeahead example that uses custom template for results display and uses object as a model ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](112, TypeheadComponent_ng_template_112_Template, 2, 2, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Search for a state:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TypeheadComponent_Template_input_ngModelChange_116_listener($event) {
              return ctx.model5 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](121, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "app-code-preview", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " This typeahead shows a hint when the input matches because the default values have been customized. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Search for a state:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TypeheadComponent_Template_input_ngModelChange_129_listener($event) {
              return ctx.model6 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](113);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svg", "assets/media/svg/icons/Tools/Compass.svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleSimpleTypeahead);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model)("ngbTypeahead", ctx.search);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Model: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 31, ctx.model), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleOpenOnFocus);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model2)("ngbTypeahead", ctx.search2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Model: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 33, ctx.model2), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleFormattedResults);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model3)("ngbTypeahead", ctx.search3)("resultFormatter", ctx.formatter3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Model: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](64, 35, ctx.model3), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleWikipediaSearch);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.searchFailed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model4)("ngbTypeahead", ctx.search4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searching);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchFailed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Model: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](106, 37, ctx.model4), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleTemplateForResults);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model5)("ngbTypeahead", ctx.search5)("resultTemplate", _r3)("inputFormatter", ctx.formatter);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Model: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](121, 39, ctx.model5), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewItem", ctx.exampleGlobalConfigurationOfTypeaheads);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model6)("ngbTypeahead", ctx.search6);
          }
        },
        directives: [_metronic_partials_content_general_notice_notice_component__WEBPACK_IMPORTED_MODULE_5__["NoticeComponent"], _metronic_partials_content_general_code_preview_code_preview_component__WEBPACK_IMPORTED_MODULE_6__["CodePreviewComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTypeahead"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["JsonPipe"]],
        styles: [".form-control[_ngcontent-%COMP%] {\n        width: 300px;\n      }"],
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypeheadComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ng-typehead',
            templateUrl: './typehead.component.html',
            styles: ["\n      .form-control {\n        width: 300px;\n      }\n    "],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            providers: [_wikipedia_service__WEBPACK_IMPORTED_MODULE_4__["WikipediaService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTypeaheadConfig"]]
          }]
        }], function () {
          return [{
            type: _wikipedia_service__WEBPACK_IMPORTED_MODULE_4__["WikipediaService"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTypeaheadConfig"]
          }];
        }, {
          instance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['instance', {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/modules/ngbootstrap/typehead/wikipedia.service.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/modules/ngbootstrap/typehead/wikipedia.service.ts ***!
      \*******************************************************************/

    /*! exports provided: WikipediaService */

    /***/
    function srcAppModulesNgbootstrapTypeheadWikipediaServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WikipediaService", function () {
        return WikipediaService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js"); // https://ng-bootstrap.github.io/#/components/typeahead/examples


      var WIKI_URL = 'https://en.wikipedia.org/w/api.php';
      var PARAMS = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
        fromObject: {
          action: 'opensearch',
          format: 'json',
          origin: '*'
        }
      });

      var WikipediaService = /*#__PURE__*/function () {
        function WikipediaService(http) {
          _classCallCheck(this, WikipediaService);

          this.http = http;
        }

        _createClass(WikipediaService, [{
          key: "search",
          value: function search(term) {
            if (term === '') {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
            }

            return this.http.get(WIKI_URL, {
              params: PARAMS.set('search', term)
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
              return response[1];
            }));
          }
        }]);

        return WikipediaService;
      }();

      WikipediaService.ɵfac = function WikipediaService_Factory(t) {
        return new (t || WikipediaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      WikipediaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: WikipediaService,
        factory: WikipediaService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WikipediaService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-ngbootstrap-ngbootstrap-module-es5.js.map