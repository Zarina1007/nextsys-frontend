(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-live-traffic-live-traffic-module"], {
    /***/
    "./src/app/modules/live-traffic/daily-traffic/daily-traffic.component.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/modules/live-traffic/daily-traffic/daily-traffic.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: DailyTrafficComponent */

    /***/
    function srcAppModulesLiveTrafficDailyTrafficDailyTrafficComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DailyTrafficComponent", function () {
        return DailyTrafficComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var _c0 = ["expandableTable"];

      function DailyTrafficComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Test");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DailyTrafficComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DailyTrafficComponent_ng_template_6_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var row_r18 = ctx.row;

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.toggleExpandRow(row_r18);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var expanded_r19 = ctx.expanded;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("datatable-icon-right", !expanded_r19)("datatable-icon-down", expanded_r19);
        }
      }

      function DailyTrafficComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Date ");
        }
      }

      function DailyTrafficComponent_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r23 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r23);
        }
      }

      function DailyTrafficComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Publisher ");
        }
      }

      function DailyTrafficComponent_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r25 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r25);
        }
      }

      function DailyTrafficComponent_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Total Searches ");
        }
      }

      function DailyTrafficComponent_ng_template_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r27 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, value_r27));
        }
      }

      function DailyTrafficComponent_ng_template_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Allowed Searches ");
        }
      }

      function DailyTrafficComponent_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r29 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, value_r29));
        }
      }

      function DailyTrafficComponent_ng_template_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Searches By IP ");
        }
      }

      function DailyTrafficComponent_ng_template_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r31 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, value_r31));
        }
      }

      function DailyTrafficComponent_ng_template_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Protected Media ");
        }
      }

      function DailyTrafficComponent_ng_template_24_Template(rf, ctx) {}

      var DailyTrafficComponent = /*#__PURE__*/function () {
        function DailyTrafficComponent() {
          _classCallCheck(this, DailyTrafficComponent);

          this.rows = [{
            date: '11-21-2021',
            name: 'Monetizus',
            totalSearches: '106321',
            allowedSearches: '102365',
            ip: '2.3'
          }, {
            date: '11-21-2021',
            name: 'Monetizus',
            totalSearches: '106321',
            allowedSearches: '102365',
            ip: '2.3'
          }, {
            date: '11-21-2021',
            name: 'Monetizus',
            totalSearches: '106321',
            allowedSearches: '102365',
            ip: '2.3'
          }];
          this.columns = [{
            prop: 'name'
          }, {
            name: 'Gender'
          }];
          this.expanded = {};
        }

        _createClass(DailyTrafficComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleExpandRow",
          value: function toggleExpandRow(row) {
            console.log('Toggled Expand Row!', row);
            this.table.rowDetail.toggleExpandRow(row);
          }
        }, {
          key: "onDetailToggle",
          value: function onDetailToggle(event) {
            console.log('Detail Toggled', event);
          }
        }, {
          key: "updateReportingFiltering",
          value: function updateReportingFiltering(range) {// this.range = range;
            // this.getAllPerionStats(
            //   'manic_perion',
            //   this.range.startDate,
            //   this.range.endDate
            // );
          }
        }]);

        return DailyTrafficComponent;
      }();

      DailyTrafficComponent.ɵfac = function DailyTrafficComponent_Factory(t) {
        return new (t || DailyTrafficComponent)();
      };

      DailyTrafficComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DailyTrafficComponent,
        selectors: [["app-daily-traffic"]],
        viewQuery: function DailyTrafficComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 25,
        vars: 13,
        consts: [[1, "material", "fullscreen", "expandable", 2, "top", "52px", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "scrollbarH", "rows"], ["expandableTable", ""], [3, "rowHeight", "toggle"], ["myDetailRow", ""], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["ngx-datatable-cell-template", ""], ["name", "date"], ["ngx-datatable-header-template", ""], ["name", "name"], ["name", "totalSearches"], ["name", "allowedSearches"], ["name", "ip"], ["name", "link"], [2, "padding-left", "35px"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 3, "click"]],
        template: function DailyTrafficComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-datatable", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ngx-datatable-row-detail", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggle", function DailyTrafficComponent_Template_ngx_datatable_row_detail_toggle_2_listener($event) {
              return ctx.onDetailToggle($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DailyTrafficComponent_ng_template_4_Template, 6, 0, "ng-template", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ngx-datatable-column", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DailyTrafficComponent_ng_template_6_Template, 1, 4, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ngx-datatable-column", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DailyTrafficComponent_ng_template_8_Template, 1, 0, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DailyTrafficComponent_ng_template_9_Template, 2, 1, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ngx-datatable-column", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DailyTrafficComponent_ng_template_11_Template, 1, 0, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DailyTrafficComponent_ng_template_12_Template, 2, 1, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ngx-datatable-column", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DailyTrafficComponent_ng_template_14_Template, 1, 0, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DailyTrafficComponent_ng_template_15_Template, 3, 3, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ngx-datatable-column", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DailyTrafficComponent_ng_template_17_Template, 1, 0, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DailyTrafficComponent_ng_template_18_Template, 3, 3, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ngx-datatable-column", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DailyTrafficComponent_ng_template_20_Template, 1, 0, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DailyTrafficComponent_ng_template_21_Template, 3, 3, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ngx-datatable-column", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DailyTrafficComponent_ng_template_23_Template, 1, 0, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DailyTrafficComponent_ng_template_24_Template, 0, 0, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnMode", "force")("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("scrollbarH", true)("rows", ctx.rows);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowHeight", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 50)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);
          }
        },
        directives: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableRowDetailDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableRowDetailTemplateDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DataTableColumnCellDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DataTableColumnHeaderDirective"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL21vZHVsZXMvbGl2ZS10cmFmZmljL2RhaWx5LXRyYWZmaWMvZGFpbHktdHJhZmZpYy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DailyTrafficComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-daily-traffic',
            templateUrl: './daily-traffic.component.html',
            styleUrls: ['./daily-traffic.component.scss']
          }]
        }], function () {
          return [];
        }, {
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['expandableTable']
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/modules/live-traffic/grafana/grafana.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/modules/live-traffic/grafana/grafana.component.ts ***!
      \*******************************************************************/

    /*! exports provided: GrafanaComponent */

    /***/
    function srcAppModulesLiveTrafficGrafanaGrafanaComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GrafanaComponent", function () {
        return GrafanaComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var GrafanaComponent = /*#__PURE__*/function () {
        function GrafanaComponent() {
          _classCallCheck(this, GrafanaComponent);
        }

        _createClass(GrafanaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GrafanaComponent;
      }();

      GrafanaComponent.ɵfac = function GrafanaComponent_Factory(t) {
        return new (t || GrafanaComponent)();
      };

      GrafanaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GrafanaComponent,
        selectors: [["app-grafana"]],
        decls: 3,
        vars: 0,
        consts: [[1, "frame"], ["src", "https://play.grafana.org/d/000000012/grafana-play-home?orgId=1&embedded=true", "frameBorder", "0"]],
        template: function GrafanaComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " https://play.grafana.org/d/000000012/grafana-play-home?orgId=1 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "iframe", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".frame[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n}\n.frame[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvbW9kdWxlcy9saXZlLXRyYWZmaWMvZ3JhZmFuYS9ncmFmYW5hLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiIuLi9zcmMvYXBwL21vZHVsZXMvbGl2ZS10cmFmZmljL2dyYWZhbmEvZ3JhZmFuYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mcmFtZSB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgaWZyYW1lIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GrafanaComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-grafana',
            templateUrl: './grafana.component.html',
            styleUrls: ['./grafana.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/live-traffic/live-traffic-routing.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/modules/live-traffic/live-traffic-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: LiveTrafficRoutingModule */

    /***/
    function srcAppModulesLiveTrafficLiveTrafficRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LiveTrafficRoutingModule", function () {
        return LiveTrafficRoutingModule;
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


      var _daily_traffic_daily_traffic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./daily-traffic/daily-traffic.component */
      "./src/app/modules/live-traffic/daily-traffic/daily-traffic.component.ts");
      /* harmony import */


      var _grafana_grafana_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./grafana/grafana.component */
      "./src/app/modules/live-traffic/grafana/grafana.component.ts");
      /* harmony import */


      var _live_traffic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./live-traffic.component */
      "./src/app/modules/live-traffic/live-traffic.component.ts");
      /* harmony import */


      var _view_queries_view_queries_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./view-queries/view-queries.component */
      "./src/app/modules/live-traffic/view-queries/view-queries.component.ts");

      var routes = [{
        path: '',
        component: _live_traffic_component__WEBPACK_IMPORTED_MODULE_4__["LiveTrafficComponent"],
        children: [{
          path: 'view-queries',
          component: _view_queries_view_queries_component__WEBPACK_IMPORTED_MODULE_5__["ViewQueriesComponent"]
        }, {
          path: 'daily-traffic',
          component: _daily_traffic_daily_traffic_component__WEBPACK_IMPORTED_MODULE_2__["DailyTrafficComponent"]
        }, {
          path: 'grafana',
          component: _grafana_grafana_component__WEBPACK_IMPORTED_MODULE_3__["GrafanaComponent"]
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

      var LiveTrafficRoutingModule = function LiveTrafficRoutingModule() {
        _classCallCheck(this, LiveTrafficRoutingModule);
      };

      LiveTrafficRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: LiveTrafficRoutingModule
      });
      LiveTrafficRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function LiveTrafficRoutingModule_Factory(t) {
          return new (t || LiveTrafficRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LiveTrafficRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LiveTrafficRoutingModule, [{
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
    "./src/app/modules/live-traffic/live-traffic.component.ts":
    /*!****************************************************************!*\
      !*** ./src/app/modules/live-traffic/live-traffic.component.ts ***!
      \****************************************************************/

    /*! exports provided: LiveTrafficComponent */

    /***/
    function srcAppModulesLiveTrafficLiveTrafficComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LiveTrafficComponent", function () {
        return LiveTrafficComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var LiveTrafficComponent = /*#__PURE__*/function () {
        function LiveTrafficComponent() {
          _classCallCheck(this, LiveTrafficComponent);
        }

        _createClass(LiveTrafficComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LiveTrafficComponent;
      }();

      LiveTrafficComponent.ɵfac = function LiveTrafficComponent_Factory(t) {
        return new (t || LiveTrafficComponent)();
      };

      LiveTrafficComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LiveTrafficComponent,
        selectors: [["app-live-traffic"]],
        decls: 1,
        vars: 0,
        template: function LiveTrafficComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL21vZHVsZXMvbGl2ZS10cmFmZmljL2xpdmUtdHJhZmZpYy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LiveTrafficComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-live-traffic',
            templateUrl: './live-traffic.component.html',
            styleUrls: ['./live-traffic.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/live-traffic/live-traffic.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/modules/live-traffic/live-traffic.module.ts ***!
      \*************************************************************/

    /*! exports provided: LiveTrafficModule */

    /***/
    function srcAppModulesLiveTrafficLiveTrafficModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LiveTrafficModule", function () {
        return LiveTrafficModule;
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


      var _live_traffic_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./live-traffic-routing.module */
      "./src/app/modules/live-traffic/live-traffic-routing.module.ts");
      /* harmony import */


      var _grafana_grafana_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./grafana/grafana.component */
      "./src/app/modules/live-traffic/grafana/grafana.component.ts");
      /* harmony import */


      var _view_queries_view_queries_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./view-queries/view-queries.component */
      "./src/app/modules/live-traffic/view-queries/view-queries.component.ts");
      /* harmony import */


      var _live_traffic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./live-traffic.component */
      "./src/app/modules/live-traffic/live-traffic.component.ts");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var _daily_traffic_daily_traffic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./daily-traffic/daily-traffic.component */
      "./src/app/modules/live-traffic/daily-traffic/daily-traffic.component.ts");

      var LiveTrafficModule = function LiveTrafficModule() {
        _classCallCheck(this, LiveTrafficModule);
      };

      LiveTrafficModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: LiveTrafficModule
      });
      LiveTrafficModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function LiveTrafficModule_Factory(t) {
          return new (t || LiveTrafficModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _live_traffic_routing_module__WEBPACK_IMPORTED_MODULE_2__["LiveTrafficRoutingModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LiveTrafficModule, {
          declarations: [_grafana_grafana_component__WEBPACK_IMPORTED_MODULE_3__["GrafanaComponent"], _view_queries_view_queries_component__WEBPACK_IMPORTED_MODULE_4__["ViewQueriesComponent"], _live_traffic_component__WEBPACK_IMPORTED_MODULE_5__["LiveTrafficComponent"], _daily_traffic_daily_traffic_component__WEBPACK_IMPORTED_MODULE_7__["DailyTrafficComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _live_traffic_routing_module__WEBPACK_IMPORTED_MODULE_2__["LiveTrafficRoutingModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LiveTrafficModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_grafana_grafana_component__WEBPACK_IMPORTED_MODULE_3__["GrafanaComponent"], _view_queries_view_queries_component__WEBPACK_IMPORTED_MODULE_4__["ViewQueriesComponent"], _live_traffic_component__WEBPACK_IMPORTED_MODULE_5__["LiveTrafficComponent"], _daily_traffic_daily_traffic_component__WEBPACK_IMPORTED_MODULE_7__["DailyTrafficComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _live_traffic_routing_module__WEBPACK_IMPORTED_MODULE_2__["LiveTrafficRoutingModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/live-traffic/view-queries/view-queries.component.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/modules/live-traffic/view-queries/view-queries.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: ViewQueriesComponent */

    /***/
    function srcAppModulesLiveTrafficViewQueriesViewQueriesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewQueriesComponent", function () {
        return ViewQueriesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_shared_service_traffic_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/service/traffic.service */
      "./src/app/shared/service/traffic.service.ts");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");

      function ViewQueriesComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Query ");
        }
      }

      function ViewQueriesComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var value_r5 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r5, " ");
        }
      }

      function ViewQueriesComponent_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " IP ");
        }
      }

      function ViewQueriesComponent_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var value_r7 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r7, " ");
        }
      }

      var ViewQueriesComponent = /*#__PURE__*/function () {
        function ViewQueriesComponent(trafficService, cdr) {
          _classCallCheck(this, ViewQueriesComponent);

          this.trafficService = trafficService;
          this.cdr = cdr;
          this.loadingIndicator = true;
        }

        _createClass(ViewQueriesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAllTrafficQuery(); // this.rows = [
            //   { query: 'buy+car', ip: '192.109.2.1' },
            //   { query: 'facebook', ip: '192.109.2.1' },
            //   { query: 'who goes there', ip: '192.109.2.1' },
            //   { query: 'asdasdasdasd', ip: '192.109.2.1' },
            //   { query: 'what is 9+7', ip: '192.109.2.1' },
            //   { query: 'what is the meaning of life', ip: '192.109.2.1' },
            //   { query: 'coffee cups', ip: '192.109.2.1' },
            //   { query: '34 inch ultrawide monitor', ip: '192.109.2.1' },
            //   { query: 'best desks of 2021', ip: '192.109.2.1' },
            //   { query: 'keyboard', ip: '192.109.2.1' },
            //   { query: 'instagram', ip: '192.109.2.1' },
            //   { query: 'fastest marathon', ip: '192.109.2.1' },
            //   { query: 'who is the first presidnets', ip: '192.109.2.1' },
            //   { query: 'power strip', ip: '192.109.2.1' },
            //   { query: 'asdiqhwdo', ip: '192.109.2.1' },
            //   { query: 'extra keys', ip: '192.109.2.1' },
            //   { query: 'sanctuary safe', ip: '192.109.2.1' },
            //   { query: 'facebook', ip: '192.109.2.1' },
            //   { query: 'what time is it in dubai', ip: '192.109.2.1' },
            //   { query: 'brands that are 2021', ip: '192.109.2.1' },
            //   { query: 'where is th', ip: '192.109.2.1' },
            //   { query: 'download skype', ip: '192.109.2.1' },
            //   { query: 'best bug for curing', ip: '192.109.2.1' },
            //   { query: 'best way to go to the mall', ip: '192.109.2.1' },
            //   { query: 'plants for sale', ip: '192.109.2.1' },
            //   { query: 'the best park for running', ip: '192.109.2.1' },
            //   { query: 'new macbook pro', ip: '192.109.2.1' },
            //   { query: 'uPhone 9', ip: '192.109.2.1' },
            //   { query: 'instagram', ip: '192.109.2.1' },
            //   { query: 'fb', ip: '192.109.2.1' },
            //   { query: 'fans fora sale', ip: '192.109.2.1' },
            //   { query: 'download instagraem', ip: '192.109.2.1' },
            // ];
          }
        }, {
          key: "getAllTrafficQuery",
          value: function getAllTrafficQuery() {
            var _this = this;

            this.trafficService.getAllTrafficQueries().subscribe(function (x) {
              console.log(x);
              _this.rows = x;
              _this.loadingIndicator = false;

              _this.cdr.detectChanges();
            });
          }
        }]);

        return ViewQueriesComponent;
      }();

      ViewQueriesComponent.ɵfac = function ViewQueriesComponent_Factory(t) {
        return new (t || ViewQueriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_traffic_service__WEBPACK_IMPORTED_MODULE_1__["TrafficService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      ViewQueriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ViewQueriesComponent,
        selectors: [["app-view-queries"]],
        decls: 15,
        vars: 8,
        consts: [[1, "row"], [1, "col-xl-12"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], [1, "material", "fullscreen", 3, "rows", "columnMode", "loadingIndicator", "footerHeight", "rowHeight", "scrollbarH", "headerHeight", "limit"], ["name", "query"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], ["name", "ip"]],
        template: function ViewQueriesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "View All Queries");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ngx-datatable", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngx-datatable-column", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ViewQueriesComponent_ng_template_10_Template, 1, 0, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ViewQueriesComponent_ng_template_11_Template, 1, 1, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ngx-datatable-column", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ViewQueriesComponent_ng_template_13_Template, 1, 0, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ViewQueriesComponent_ng_template_14_Template, 1, 1, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx.rows)("columnMode", "force")("loadingIndicator", ctx.loadingIndicator)("footerHeight", 50)("rowHeight", 50)("scrollbarH", true)("headerHeight", 50)("limit", 10);
          }
        },
        directives: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DataTableColumnHeaderDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DataTableColumnCellDirective"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL21vZHVsZXMvbGl2ZS10cmFmZmljL3ZpZXctcXVlcmllcy92aWV3LXF1ZXJpZXMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewQueriesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-view-queries',
            templateUrl: './view-queries.component.html',
            styleUrls: ['./view-queries.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_shared_service_traffic_service__WEBPACK_IMPORTED_MODULE_1__["TrafficService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/service/traffic.service.ts":
    /*!***************************************************!*\
      !*** ./src/app/shared/service/traffic.service.ts ***!
      \***************************************************/

    /*! exports provided: TrafficService */

    /***/
    function srcAppSharedServiceTrafficServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TrafficService", function () {
        return TrafficService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var API_TRAFFIC_QUERY_URL = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/traffic-query");

      var TrafficService = /*#__PURE__*/function () {
        function TrafficService(http) {
          _classCallCheck(this, TrafficService);

          this.http = http;
        }

        _createClass(TrafficService, [{
          key: "getAllTrafficQueries",
          value: function getAllTrafficQueries() {
            return this.http.get(API_TRAFFIC_QUERY_URL);
          }
        }]);

        return TrafficService;
      }();

      TrafficService.ɵfac = function TrafficService_Factory(t) {
        return new (t || TrafficService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      TrafficService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TrafficService,
        factory: TrafficService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrafficService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-live-traffic-live-traffic-module-es5.js.map