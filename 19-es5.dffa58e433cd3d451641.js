!function(){function e(t,n){return(e=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(t,n)}function t(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,i=r(e);if(t){var o=r(this).constructor;a=Reflect.construct(i,arguments,o)}else a=i.apply(this,arguments);return n(this,a)}}function n(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"/X+5":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n("fXoL"),i=n("3Pt+"),c=n("wd/R"),s=n("kmnG"),l=n("iadO"),u=n("ofXK"),h=n("d3UM"),d=n("FKr1");function b(e,t){1&e&&(r.Wb(0,"mat-error"),r.Oc(1,"Invalid start date"),r.Vb())}function m(e,t){1&e&&(r.Wb(0,"mat-error"),r.Oc(1,"Invalid end date"),r.Vb())}function f(e,t){if(1&e&&(r.Wb(0,"mat-option",15),r.Oc(1),r.Vb()),2&e){var n=t.$implicit;r.rc("value",n.value),r.Db(1),r.Qc(" ",n.viewValue," ")}}var p=function(){var e=function(){function e(){a(this,e),this.onDatesPicked=new r.p}return o(e,[{key:"ngOnInit",value:function(){this.preSetDateRanges=this.getDateRanges(),this.range=new i.j({startDate:new i.g,endDate:new i.g}),this.selectedRange={startDate:"",endDate:""},this.preSelectValue="last7days",this.preSelectDates=this.getPreSetDateRange(this.preSelectValue),this.updateDatePickerRange(this.preSelectDates.startDate,this.preSelectDates.endDate),this.emitSelectedRange()}},{key:"getDateRanges",value:function(){return[{value:"today",viewValue:"Today"},{value:"yesterday",viewValue:"Yesterday"},{value:"last7days",viewValue:"Last 7 Days"},{value:"last30days",viewValue:"Last 30 Days"},{value:"monthToDate",viewValue:"Month to Date"},{value:"lastMonth",viewValue:"Last Month"},{value:"custom",viewValue:"Custom"}]}},{key:"getPreSetDateRange",value:function(e){switch(e){case"today":return{startDate:c().utc().startOf("day").format("MM-DD-YYYY"),endDate:c().utc().endOf("day").format("MM-DD-YYYY")};case"yesterday":return{startDate:c().subtract(1,"days").utc().startOf("day").format("MM-DD-YYYY"),endDate:c().subtract(1,"days").utc().endOf("day").format("MM-DD-YYYY")};case"last7days":return{startDate:c().subtract(7,"days").utc().startOf("day").format("MM-DD-YYYY"),endDate:c().utc().endOf("day").format("MM-DD-YYYY")};case"last30days":return{startDate:c().subtract(30,"days").utc().startOf("day").format("MM-DD-YYYY"),endDate:c().utc().endOf("day").format("MM-DD-YYYY")};case"monthToDate":return{startDate:c().startOf("month").utc().startOf("day").format("MM-DD-YYYY"),endDate:c().utc().endOf("day").format("MM-DD-YYYY")};case"lastMonth":return{startDate:c().subtract(1,"months").startOf("month").utc().startOf("day").format("MM-DD-YYYY"),endDate:c().utc().subtract(1,"months").endOf("month").format("MM-DD-YYYY")}}}},{key:"onPreSetRangeSelectChange",value:function(e){"custom"!==e.value&&(this.preSelectValue=e.value,this.preSelectDates=this.getPreSetDateRange(this.preSelectValue),this.updateDatePickerRange(this.preSelectDates.startDate,this.preSelectDates.endDate),this.emitSelectedRange())}},{key:"updateDatePickerRange",value:function(e,t){this.range.patchValue({startDate:c(e,"MM-DD-YYYY").toDate(),endDate:c(t,"MM-DD-YYYY").toDate()})}},{key:"changeDatePicker",value:function(){this.range.valid&&(this.selectedRange.startDate=this.range.value.startDate,this.selectedRange.endDate=this.range.value.endDate,this.preSelectValue="custom",this.emitSelectedRange())}},{key:"emitSelectedRange",value:function(){if(this.range.valid){this.selectedRange.startDate=this.range.value.startDate,this.selectedRange.endDate=this.range.value.endDate;var e=this.selectedRange;e.startDate=c(this.selectedRange.startDate).startOf("day").format("MM-DD-YYYY"),e.endDate=c(this.selectedRange.endDate).endOf("day").format("MM-DD-YYYY"),this.onDatesPicked.emit(e)}}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Kb({type:e,selectors:[["app-reporting-filtering"]],outputs:{onDatesPicked:"onDatesPicked"},decls:24,vars:7,consts:[[1,"row"],[1,"col-xl-6"],[1,"card","card-custom","example","example-compact","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label"],[1,"card-body"],[3,"formGroup","rangePicker","dateChange"],["matStartDate","","formControlName","startDate","placeholder","Start date","required",""],["matEndDate","","formControlName","endDate","placeholder","End date","required","",3,"dateChange"],["matSuffix","",3,"for"],["picker",""],[4,"ngIf"],[3,"ngModel","ngModelChange","selectionChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,t){if(1&e&&(r.Wb(0,"div",0),r.Wb(1,"div",1),r.Wb(2,"div",2),r.Wb(3,"div",3),r.Wb(4,"div",4),r.Wb(5,"h2",5),r.Oc(6,"Filter Date Range"),r.Vb(),r.Vb(),r.Vb(),r.Wb(7,"div",6),r.Wb(8,"mat-form-field"),r.Wb(9,"mat-label"),r.Oc(10,"Enter a custom date range"),r.Vb(),r.Wb(11,"mat-date-range-input",7),r.hc("dateChange",(function(){return t.changeDatePicker()})),r.Rb(12,"input",8),r.Wb(13,"input",9),r.hc("dateChange",(function(){return t.changeDatePicker()})),r.Vb(),r.Vb(),r.Rb(14,"mat-datepicker-toggle",10),r.Rb(15,"mat-date-range-picker",null,11),r.Mc(17,b,2,0,"mat-error",12),r.Mc(18,m,2,0,"mat-error",12),r.Vb(),r.Wb(19,"mat-form-field"),r.Wb(20,"mat-label"),r.Oc(21,"Preset Date Range"),r.Vb(),r.Wb(22,"mat-select",13),r.hc("ngModelChange",(function(e){return t.preSelectValue=e}))("selectionChange",(function(e){return t.onPreSetRangeSelectChange(e)})),r.Mc(23,f,2,2,"mat-option",14),r.Vb(),r.Vb(),r.Vb(),r.Vb(),r.Vb(),r.Vb()),2&e){var n=r.Ac(16);r.Db(11),r.rc("formGroup",t.range)("rangePicker",n),r.Db(3),r.rc("for",n),r.Db(3),r.rc("ngIf",t.range.controls.startDate.hasError("matStartDateInvalid")),r.Db(1),r.rc("ngIf",t.range.controls.endDate.hasError("matEndDateInvalid")),r.Db(4),r.rc("ngModel",t.preSelectValue),r.Db(1),r.rc("ngForOf",t.preSetDateRanges)}},directives:[s.c,s.g,l.a,i.r,i.k,l.h,i.d,i.q,i.i,i.x,l.g,l.f,s.j,l.b,u.p,h.a,i.t,u.o,s.b,d.p],styles:[""]}),e}()},"0MNC":function(n,r,i){"use strict";i.d(r,"a",(function(){return M})),i.d(r,"b",(function(){return Y}));var c,s,l=i("fXoL"),u=i("8LU1"),h=i("XNiG"),d=i("itXk"),b=i("GyhO"),m=i("HDdC"),f=i("IzEk"),p=i("7o/Q"),g=function(){function e(t){a(this,e),this.total=t}return o(e,[{key:"call",value:function(e,t){return t.subscribe(new v(e,this.total))}}]),e}(),v=function(n){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&e(t,n)}(i,n);var r=t(i);function i(e,t){var n;return a(this,i),(n=r.call(this,e)).total=t,n.count=0,n}return o(i,[{key:"_next",value:function(e){++this.count>this.total&&this.destination.next(e)}}]),i}(p.a),y=i("Kj3r"),S=i("lJxs"),D=i("JX91"),w=i("1G5W"),V=i("nLfN"),x=new Set,W=((s=function(){function e(t){a(this,e),this._platform=t,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):O}return o(e,[{key:"matchMedia",value:function(e){return this._platform.WEBKIT&&function(e){if(!x.has(e))try{c||((c=document.createElement("style")).setAttribute("type","text/css"),document.head.appendChild(c)),c.sheet&&(c.sheet.insertRule("@media ".concat(e," {.fx-query-test{ }}"),0),x.add(e))}catch(t){console.error(t)}}(e),this._matchMedia(e)}}]),e}()).\u0275fac=function(e){return new(e||s)(l.ec(V.a))},s.\u0275prov=Object(l.Mb)({factory:function(){return new s(Object(l.ec)(V.a))},token:s,providedIn:"root"}),s);function O(e){return{matches:"all"===e||""===e,media:e,addListener:function(){},removeListener:function(){}}}var k,M=((k=function(){function e(t,n){a(this,e),this._mediaMatcher=t,this._zone=n,this._queries=new Map,this._destroySubject=new h.a}return o(e,[{key:"ngOnDestroy",value:function(){this._destroySubject.next(),this._destroySubject.complete()}},{key:"isMatched",value:function(e){var t=this;return R(Object(u.b)(e)).some((function(e){return t._registerQuery(e).mql.matches}))}},{key:"observe",value:function(e){var t=this,n=R(Object(u.b)(e)).map((function(e){return t._registerQuery(e).observable})),r=Object(d.a)(n);return(r=Object(b.a)(r.pipe(Object(f.a)(1)),r.pipe((function(e){return e.lift(new g(1))}),Object(y.a)(0)))).pipe(Object(S.a)((function(e){var t={matches:!1,breakpoints:{}};return e.forEach((function(e){var n=e.matches,r=e.query;t.matches=t.matches||n,t.breakpoints[r]=n})),t})))}},{key:"_registerQuery",value:function(e){var t=this;if(this._queries.has(e))return this._queries.get(e);var n=this._mediaMatcher.matchMedia(e),r={observable:new m.a((function(e){var r=function(n){return t._zone.run((function(){return e.next(n)}))};return n.addListener(r),function(){n.removeListener(r)}})).pipe(Object(D.a)(n),Object(S.a)((function(t){var n=t.matches;return{query:e,matches:n}})),Object(w.a)(this._destroySubject)),mql:n};return this._queries.set(e,r),r}}]),e}()).\u0275fac=function(e){return new(e||k)(l.ec(W),l.ec(l.C))},k.\u0275prov=Object(l.Mb)({factory:function(){return new k(Object(l.ec)(W),Object(l.ec)(l.C))},token:k,providedIn:"root"}),k);function R(e){return e.map((function(e){return e.split(",")})).reduce((function(e,t){return e.concat(t)})).map((function(e){return e.trim()}))}var Y={XSmall:"(max-width: 599.99px)",Small:"(min-width: 600px) and (max-width: 959.99px)",Medium:"(min-width: 960px) and (max-width: 1279.99px)",Large:"(min-width: 1280px) and (max-width: 1919.99px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.99px) and (orientation: portrait), (max-width: 959.99px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.99px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.99px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"}},"4R8J":function(e,t,n){"use strict";n.r(t),n.d(t,"GoogleSheetReportingModule",(function(){return ae}));var r=n("ofXK"),i=n("tyNb"),c=n("fXoL"),s=n("aoJj"),l=n("oabR"),u=n("soTd"),h=n("Dvla"),d=n("lDzL"),b=n("e8Ap");function m(e,t){1&e&&c.Oc(0," Sheet Name ")}function f(e,t){1&e&&c.Oc(0),2&e&&c.Qc(" ",t.value," ")}function p(e,t){1&e&&c.Oc(0," Sheet Url ")}function g(e,t){1&e&&c.Oc(0),2&e&&c.Qc(" ",t.value," ")}function v(e,t){1&e&&c.Oc(0," Sub Sheet Name ")}function y(e,t){1&e&&c.Oc(0),2&e&&c.Qc(" ",t.value," ")}function S(e,t){1&e&&c.Oc(0,"Action")}function D(e,t){if(1&e){var n=c.Xb();c.Wb(0,"a",16),c.hc("click",(function(){c.Dc(n);var e=t.row;return c.lc(2).editSheet(e._key)})),c.Rb(1,"span",17),c.Vb(),c.Wb(2,"a",18),c.hc("click",(function(){c.Dc(n);var e=t.row;return c.lc(2).deleteSheet(e._key)})),c.Rb(3,"span",19),c.Vb(),c.Wb(4,"a",20),c.hc("click",(function(){c.Dc(n);var e=t.row;return c.lc(2).copyToGoogleSheetAPIClipboard(e)})),c.Rb(5,"span",21),c.Vb()}if(2&e){var r=t.row;c.Db(1),c.rc("inlineSVG","./assets/media/svg/icons/Communication/Write.svg"),c.Db(2),c.rc("inlineSVG","./assets/media/svg/icons/General/Trash.svg"),c.Db(2),c.rc("inlineSVG",r.copy?"./assets/media/svg/icons/General/copied.svg":"./assets/media/svg/icons/General/Clipboard.svg")}}function w(e,t){if(1&e&&(c.Wb(0,"div",2),c.Wb(1,"div",3),c.Wb(2,"div",4),c.Wb(3,"div",5),c.Wb(4,"div",6),c.Wb(5,"h3",7),c.Oc(6,"Google Sheet Reporting"),c.Vb(),c.Vb(),c.Vb(),c.Wb(7,"div",8),c.Wb(8,"ngx-datatable",9),c.Wb(9,"ngx-datatable-column",10),c.Mc(10,m,1,0,"ng-template",11),c.Mc(11,f,1,1,"ng-template",12),c.Vb(),c.Wb(12,"ngx-datatable-column",13),c.Mc(13,p,1,0,"ng-template",11),c.Mc(14,g,1,1,"ng-template",12),c.Vb(),c.Wb(15,"ngx-datatable-column",14),c.Mc(16,v,1,0,"ng-template",11),c.Mc(17,y,1,1,"ng-template",12),c.Vb(),c.Wb(18,"ngx-datatable-column",15),c.Mc(19,S,1,0,"ng-template",11),c.Mc(20,D,6,3,"ng-template",12),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb()),2&e){var n=c.lc();c.Db(8),c.rc("rows",n.rows)("columnMode","force")("loadingIndicator",n.loadingIndicator)("footerHeight",50)("rowHeight",50)("scrollbarH",!0)("headerHeight",50)("limit",10),c.Db(1),c.rc("width",150),c.Db(9),c.rc("width",100)}}function V(e,t){1&e&&(c.Wb(0,"div",22),c.Wb(1,"div",23),c.Wb(2,"p",24),c.Oc(3," How did you get here "),c.Vb(),c.Wb(4,"p",25),c.Oc(5," Sorry you can't access the page you're looking for. "),c.Vb(),c.Wb(6,"p",26),c.Oc(7," There may be a misspelling in the URL entered,"),c.Rb(8,"br"),c.Oc(9,"or the page you are looking for may no longer exist. "),c.Vb(),c.Vb(),c.Vb())}var x,W,O=((W=function(){function e(t,n,r,i,o,c){a(this,e),this.googlesheetService=t,this.cdr=n,this.router=r,this.userService=i,this.notification=o,this.clipboardService=c,this.loadingIndicator=!0,this.hidden=!1}return o(e,[{key:"ngOnInit",value:function(){var e=this;this.localStorageCompany=this.getSelectedCompanyFromLocalStorage(),this.localStorageCompany?this.hidden=!1:(this.hidden=!0,this.notification.showError("Please select your Company!","")),this.googlesheetService.getSheetList().subscribe({next:function(t){e.rows=t,e.loadingIndicator=!1,e.cdr.detectChanges()},error:function(t){console.log(t),e.notification.showError(t.error,"")},complete:function(){return console.log("done")}})}},{key:"editSheet",value:function(e){this.router.navigateByUrl("/google-sheet-reporting/edit/"+e)}},{key:"getSelectedCompanyFromLocalStorage",value:function(){return this.userService.getSelectedCompanyFromLocalStorage()}},{key:"deleteSheet",value:function(e){var t=this;window.confirm("Do you want to go ahead?")&&this.googlesheetService.deleteSheet(e).subscribe((function(e){t.router.navigate(["/google-sheet-reporting/all-sheets"]).then((function(){window.location.reload()})),t.notification.showSuccess("Successfully deleted sheet.","")}),(function(e){console.log(e),t.notification.showError("Error deleting sheet: "+e,"")}))}},{key:"copyToGoogleSheetAPIClipboard",value:function(e){var t=this,n=e.sheetUrl.split("/")&&e.sheetUrl.split("/")[5]?e.sheetUrl.split("/")[5]:"";e.copy=!0,this.clipboardService.copyFromContent("http://api.nextsys.io/api/googlesheet/".concat(n,"/stats?startDate=MM/DD/YYYY&endDate=MM/DD/YYYY")),setTimeout((function(){e.copy=!1,t.cdr.detectChanges()}),3e3)}}]),e}()).\u0275fac=function(e){return new(e||W)(c.Qb(s.a),c.Qb(c.i),c.Qb(i.h),c.Qb(l.a),c.Qb(u.a),c.Qb(h.b))},W.\u0275cmp=c.Kb({type:W,selectors:[["app-all-sheets"]],decls:2,vars:2,consts:[["class","row",4,"ngIf"],["class","error error-3 d-flex flex-row-fluid bgi-size-cover bgi-position-center","style","background-image: url('./assets/media/error/bg3.jpg'); height: 100%;zoom: 1;\n    display: block;\n    min-height: 80vh;\n    font-size: 14px;\n    line-height: 1.4;\n    color: #0e1724;",4,"ngIf"],[1,"row"],[1,"col-xl-12"],[1,"card","card-custom","example","example-compact","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label"],[1,"card-body"],[1,"material","fullscreen",3,"rows","columnMode","loadingIndicator","footerHeight","rowHeight","scrollbarH","headerHeight","limit"],["name","SheetName",3,"width"],["ngx-datatable-header-template",""],["ngx-datatable-cell-template",""],["name","SheetUrl"],["name","subSheetName"],["name","id",3,"width"],["title","Edit Sheet",1,"btn","btn-icon","btn-light","btn-hover-primary","btn-sm","mx-2",3,"click"],["cacheSVG","true",1,"svg-icon","svg-icon-md","svg-icon-primary",3,"inlineSVG"],["title","Delete Sheet",1,"btn","btn-icon","btn-light","btn-hover-danger","btn-sm","mx-2",3,"click"],["cacheSVG","false",1,"svg-icon","svg-icon-md","svg-icon-danger",3,"inlineSVG"],["title","COPY GOOGLE SHEET API",1,"btn","btn-icon","btn-light","btn-hover-info","btn-sm","mx-2",3,"click"],["cacheSVG","false",1,"svg-icon","svg-icon-md","svg-icon-info",3,"inlineSVG"],[1,"error","error-3","d-flex","flex-row-fluid","bgi-size-cover","bgi-position-center",2,"background-image","url('./assets/media/error/bg3.jpg')","height","100%","zoom","1","display","block","min-height","80vh","font-size","14px","line-height","1.4","color","#0e1724"],[1,"px-10","px-md-30","py-10","py-md-0","d-flex","flex-column","justify-content-md-center"],[1,"display-4","font-weight-boldest","text-white","mb-12"],[1,"font-size-h1","font-weight-boldest","text-dark-75"],[1,"font-size-h4","line-height-md"]],template:function(e,t){1&e&&(c.Mc(0,w,21,10,"div",0),c.Mc(1,V,10,0,"div",1)),2&e&&(c.rc("ngIf",!t.hidden),c.Db(1),c.rc("ngIf",t.hidden))},directives:[r.p,d.d,d.b,d.c,d.a,b.a],styles:[""]}),W),k=((x=function(){function e(){a(this,e)}return o(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||x)},x.\u0275cmp=c.Kb({type:x,selectors:[["app-google-sheet-reporting"]],decls:1,vars:0,template:function(e,t){1&e&&c.Rb(0,"router-outlet")},directives:[i.l],styles:[""]}),x),M=n("3Pt+"),R=n("Qu3c"),Y=n("NFeN"),I=n("bTqV"),C=n("kmnG"),G=n("qFsG");function j(e,t){1&e&&(c.Wb(0,"mat-error"),c.Oc(1,"Sheet Name is required. "),c.Vb())}function N(e,t){1&e&&(c.Wb(0,"mat-error"),c.Oc(1,"Sheet Url is required. "),c.Vb())}function F(e,t){1&e&&(c.Wb(0,"mat-error"),c.Oc(1,"Sub Sheet Name is required. "),c.Vb())}function E(e,t){if(1&e){var n=c.Xb();c.Wb(0,"form",2),c.hc("submit",(function(){return c.Dc(n),c.lc().submitHandle()})),c.Wb(1,"div",3),c.Wb(2,"div",4),c.Wb(3,"div",3),c.Wb(4,"div",5),c.Wb(5,"div",6),c.Wb(6,"div",7),c.Wb(7,"div",8),c.Wb(8,"h3",9),c.Oc(9,"Create New Google Sheet"),c.Vb(),c.Vb(),c.Vb(),c.Wb(10,"div",10),c.Oc(11),c.mc(12,"json"),c.Wb(13,"div",11),c.Wb(14,"div",5),c.Wb(15,"span"),c.Oc(16),c.Wb(17,"span",12),c.Wb(18,"mat-icon"),c.Oc(19,"info"),c.Vb(),c.Vb(),c.Wb(20,"span"),c.Wb(21,"button",13),c.hc("click",(function(e){return c.Dc(n),c.lc().copyToEmailClipboard(e)})),c.Wb(22,"mat-icon"),c.Oc(23,"content_copy"),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Wb(24,"div",5),c.Wb(25,"mat-form-field"),c.Rb(26,"input",14),c.Mc(27,j,2,0,"mat-error",15),c.Vb(),c.Vb(),c.Vb(),c.Wb(28,"div",16),c.Wb(29,"div",5),c.Wb(30,"mat-form-field"),c.Rb(31,"input",17),c.Wb(32,"mat-hint",18),c.Oc(33,"e.g. https://docs.google.com/spreadsheets/d/1taJZ7W-sds54"),c.Vb(),c.Mc(34,N,2,0,"mat-error",15),c.Vb(),c.Vb(),c.Vb(),c.Wb(35,"div",16),c.Wb(36,"div",5),c.Wb(37,"mat-form-field"),c.Rb(38,"input",19),c.Wb(39,"mat-hint",18),c.Oc(40,"e.g. Raw"),c.Vb(),c.Mc(41,F,2,0,"mat-error",15),c.Vb(),c.Vb(),c.Vb(),c.Wb(42,"div",16),c.Wb(43,"div",20),c.Wb(44,"button",21),c.Oc(45,"Save"),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb()}if(2&e){var r=c.lc();c.rc("formGroup",r.sheetFG),c.Db(11),c.Qc(" ",c.nc(12,6,r.sheetFG.value)," "),c.Db(5),c.Qc(" Email Address : ",r.shareEmail," "),c.Db(11),c.rc("ngIf",null==r.sheetFG.get("sheetName").errors?null:r.sheetFG.get("sheetName").errors.required),c.Db(7),c.rc("ngIf",null==r.sheetFG.get("sheetUrl").errors?null:r.sheetFG.get("sheetUrl").errors.required),c.Db(7),c.rc("ngIf",null==r.sheetFG.get("subSheetName").errors?null:r.sheetFG.get("subSheetName").errors.required)}}function P(e,t){1&e&&(c.Wb(0,"div",22),c.Wb(1,"div",23),c.Wb(2,"p",24),c.Oc(3," How did you get here "),c.Vb(),c.Wb(4,"p",25),c.Oc(5," Sorry you can't access the page you're looking for. "),c.Vb(),c.Wb(6,"p",26),c.Oc(7," There may be a misspelling in the URL entered,"),c.Rb(8,"br"),c.Oc(9,"or the page you are looking for may no longer exist. "),c.Vb(),c.Vb(),c.Vb())}var z,Q=((z=function(){function e(t,n,r,i,o){a(this,e),this.userService=t,this.googleSheetReportingServie=n,this.router=r,this.notification=i,this.clipboardService=o,this.hidden=!1,this.shareEmail="nextsys-data-management@nextsys-stats-management.iam.gserviceaccount.com",this.localStorageCompany=this.getSelectedCompanyFromLocalStorage()}return o(e,[{key:"ngOnInit",value:function(){this.localStorageCompany?this.hidden=!1:(this.hidden=!0,this.notification.showError("Please select your Company!","")),this.sheetFG=new M.j({sheetName:new M.g("",M.z.required),sheetUrl:new M.g("",M.z.required),subSheetName:new M.g("",M.z.required)})}},{key:"submitHandle",value:function(){var e=this;this.sheetFG.markAllAsTouched(),this.sheetFG.valid&&this.googleSheetReportingServie.addSheet(this.sheetFG.value).subscribe((function(t){e.notification.showSuccess("Successfully added a new Sheet.",""),e.router.navigate(["/google-sheet-reporting/all-sheets"])}),(function(t){e.notification.showError(JSON.stringify(t.error),"")}))}},{key:"getSelectedCompanyFromLocalStorage",value:function(){return this.userService.getSelectedCompanyFromLocalStorage()}},{key:"copyToEmailClipboard",value:function(e){e.preventDefault(),this.clipboardService.copyFromContent(this.shareEmail)}}]),e}()).\u0275fac=function(e){return new(e||z)(c.Qb(l.a),c.Qb(s.a),c.Qb(i.h),c.Qb(u.a),c.Qb(h.b))},z.\u0275cmp=c.Kb({type:z,selectors:[["app-new-sheet"]],viewQuery:function(e,t){var n;1&e&&c.Tc(M.k,!0),2&e&&c.zc(n=c.ic())&&(t.formGroupDirective=n.first)},decls:2,vars:2,consts:[["class","example-container",3,"formGroup","submit",4,"ngIf"],["class","error error-3 d-flex flex-row-fluid bgi-size-cover bgi-position-center","style","background-image: url('./assets/media/error/bg3.jpg'); height: 100%;zoom: 1;\n  display: block;\n  min-height: 80vh;\n  font-size: 14px;\n  line-height: 1.4;\n  color: #0e1724;",4,"ngIf"],[1,"example-container",3,"formGroup","submit"],[1,"row"],[1,"col-xl-8"],[1,"col-xl-12"],[1,"card","card-custom","example","example-compact","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label"],[1,"card-body"],[1,"row","pb-2","pt-2"],["matTooltip","You have to share the GoogleSheet to this Email"],["mat-icon-button","","matTooltip","Copy to clipboard",3,"click"],["matInput","","formControlName","sheetName","placeholder","Sheet Name"],[4,"ngIf"],[1,"row","py-2"],["matInput","","formControlName","sheetUrl","placeholder","Sheet Url","type","url"],["align","start"],["matInput","","formControlName","subSheetName","placeholder","Sub Sheet Name","type","text"],[1,"col-md-12"],["mat-raised-button","","color","primary","type","submit",1,"save-button"],[1,"error","error-3","d-flex","flex-row-fluid","bgi-size-cover","bgi-position-center",2,"background-image","url('./assets/media/error/bg3.jpg')","height","100%","zoom","1","display","block","min-height","80vh","font-size","14px","line-height","1.4","color","#0e1724"],[1,"px-10","px-md-30","py-10","py-md-0","d-flex","flex-column","justify-content-md-center"],[1,"display-4","font-weight-boldest","text-white","mb-12"],[1,"font-size-h1","font-weight-boldest","text-dark-75"],[1,"font-size-h4","line-height-md"]],template:function(e,t){1&e&&(c.Mc(0,E,46,8,"form",0),c.Mc(1,P,10,0,"div",1)),2&e&&(c.rc("ngIf",!t.hidden),c.Db(1),c.rc("ngIf",t.hidden))},directives:[r.p,M.B,M.r,M.k,R.a,Y.a,I.b,C.c,G.b,M.d,M.q,M.i,C.f,C.b],pipes:[r.j],styles:[""]}),z);function L(e,t){1&e&&(c.Wb(0,"mat-error"),c.Oc(1,"Sheet Name is required. "),c.Vb())}function T(e,t){1&e&&(c.Wb(0,"mat-error"),c.Oc(1,"Sheet Url is required. "),c.Vb())}function q(e,t){1&e&&(c.Wb(0,"mat-error"),c.Oc(1,"Sub Sheet Name is required. "),c.Vb())}function _(e,t){if(1&e){var n=c.Xb();c.Wb(0,"form",2),c.hc("submit",(function(){return c.Dc(n),c.lc().submitHandle()})),c.Wb(1,"div",3),c.Wb(2,"div",4),c.Wb(3,"div",3),c.Wb(4,"div",5),c.Wb(5,"div",6),c.Wb(6,"div",7),c.Wb(7,"div",8),c.Wb(8,"h3",9),c.Oc(9,"Edit Google Sheet"),c.Vb(),c.Vb(),c.Vb(),c.Wb(10,"div",10),c.Oc(11),c.mc(12,"json"),c.Wb(13,"div",11),c.Wb(14,"div",5),c.Wb(15,"span"),c.Oc(16),c.Wb(17,"span",12),c.Wb(18,"mat-icon"),c.Oc(19,"info"),c.Vb(),c.Vb(),c.Wb(20,"span"),c.Wb(21,"button",13),c.hc("click",(function(e){return c.Dc(n),c.lc().copyToEmailClipboard(e)})),c.Wb(22,"mat-icon"),c.Oc(23,"content_copy"),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Wb(24,"div",5),c.Wb(25,"mat-form-field"),c.Rb(26,"input",14),c.Mc(27,L,2,0,"mat-error",15),c.Vb(),c.Vb(),c.Vb(),c.Wb(28,"div",16),c.Wb(29,"div",5),c.Wb(30,"mat-form-field"),c.Rb(31,"input",17),c.Wb(32,"mat-hint",18),c.Oc(33,"e.g. https://docs.google.com/spreadsheets/d/1taJZ7W-sds54"),c.Vb(),c.Mc(34,T,2,0,"mat-error",15),c.Vb(),c.Vb(),c.Vb(),c.Wb(35,"div",16),c.Wb(36,"div",5),c.Wb(37,"mat-form-field"),c.Rb(38,"input",19),c.Wb(39,"mat-hint",18),c.Oc(40,"e.g. Raw"),c.Vb(),c.Mc(41,q,2,0,"mat-error",15),c.Vb(),c.Vb(),c.Vb(),c.Wb(42,"div",20),c.Wb(43,"div",21),c.Wb(44,"button",22),c.Oc(45,"Save"),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb()}if(2&e){var r=c.lc();c.rc("formGroup",r.editSheetFG),c.Db(11),c.Qc(" ",c.nc(12,6,r.editSheetFG.value)," "),c.Db(5),c.Qc(" Email Address : ",r.shareEmail," "),c.Db(11),c.rc("ngIf",null==r.editSheetFG.get("sheetName").errors?null:r.editSheetFG.get("sheetName").errors.required),c.Db(7),c.rc("ngIf",null==r.editSheetFG.get("sheetUrl").errors?null:r.editSheetFG.get("sheetUrl").errors.required),c.Db(7),c.rc("ngIf",null==r.editSheetFG.get("subSheetName").errors?null:r.editSheetFG.get("subSheetName").errors.required)}}function H(e,t){1&e&&(c.Wb(0,"div",23),c.Wb(1,"div",24),c.Wb(2,"p",25),c.Oc(3," How did you get here "),c.Vb(),c.Wb(4,"p",26),c.Oc(5," Sorry you can't access the page you're looking for. "),c.Vb(),c.Wb(6,"p",27),c.Oc(7," There may be a misspelling in the URL entered,"),c.Rb(8,"br"),c.Oc(9,"or the page you are looking for may no longer exist. "),c.Vb(),c.Vb(),c.Vb())}var U,X,A,K,J=((U=function(){function e(t,n,r,i,o,c,s){a(this,e),this.cdr=t,this.router=n,this.route=r,this.userService=i,this.notification=o,this.googleSheetReportingServie=c,this.clipboardService=s,this.hidden=!1,this.shareEmail="nextsys-data-management@nextsys-stats-management.iam.gserviceaccount.com",this.localStorageCompany=this.getSelectedCompanyFromLocalStorage()}return o(e,[{key:"ngOnInit",value:function(){var e=this;this.localStorageCompany?this.hidden=!1:(this.hidden=!0,this.notification.showError("Please select your Company!","")),this.editSheetFG=new M.j({sheetName:new M.g("",M.z.required),sheetUrl:new M.g("",M.z.required),subSheetName:new M.g("",M.z.required)}),this.route.snapshot.params.id&&this.googleSheetReportingServie.getOneSheet(this.route.snapshot.params.id).subscribe((function(t){e.sheet=t,e.editSheetFG.setValue({sheetName:t.sheetName,sheetUrl:t.sheetUrl,subSheetName:t.subSheetName?t.subSheetName:""})}))}},{key:"getSelectedCompanyFromLocalStorage",value:function(){return this.userService.getSelectedCompanyFromLocalStorage()}},{key:"submitHandle",value:function(){var e=this;this.editSheetFG.markAllAsTouched(),this.editSheetFG.valid&&(this.sheet=Object.assign(Object.assign({},this.sheet),this.editSheetFG.value),this.googleSheetReportingServie.updateSheet(this.sheet).subscribe((function(t){e.notification.showSuccess("Successfully updated the Sheet.","")}),(function(t){e.notification.showError("Error updating sheet: "+t.statusText,"")})))}},{key:"copyToEmailClipboard",value:function(e){e.preventDefault(),this.clipboardService.copyFromContent(this.shareEmail)}}]),e}()).\u0275fac=function(e){return new(e||U)(c.Qb(c.i),c.Qb(i.h),c.Qb(i.a),c.Qb(l.a),c.Qb(u.a),c.Qb(s.a),c.Qb(h.b))},U.\u0275cmp=c.Kb({type:U,selectors:[["app-edit-sheet"]],viewQuery:function(e,t){var n;1&e&&c.Tc(M.k,!0),2&e&&c.zc(n=c.ic())&&(t.formGroupDirective=n.first)},decls:2,vars:2,consts:[["class","example-container",3,"formGroup","submit",4,"ngIf"],["class","error error-3 d-flex flex-row-fluid bgi-size-cover bgi-position-center","style","background-image: url('./assets/media/error/bg3.jpg'); height: 100%;zoom: 1;\n  display: block;\n  min-height: 80vh;\n  font-size: 14px;\n  line-height: 1.4;\n  color: #0e1724;",4,"ngIf"],[1,"example-container",3,"formGroup","submit"],[1,"row"],[1,"col-xl-8"],[1,"col-xl-12"],[1,"card","card-custom","example","example-compact","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label"],[1,"card-body"],[1,"row","pb-2","pt-2"],["matTooltip","You have to share the GoogleSheet to this Email"],["mat-icon-button","","matTooltip","Copy to clipboard",3,"click"],["matInput","","formControlName","sheetName","placeholder","Sheet Name"],[4,"ngIf"],[1,"row","py-2"],["matInput","","formControlName","sheetUrl","placeholder","Sheet Url","type","url"],["align","start"],["matInput","","formControlName","subSheetName","placeholder","Sub Sheet Name","type","text"],[1,"row","pt-2"],[1,"col-md-12"],["mat-raised-button","","color","primary","type","submit",1,"save-button"],[1,"error","error-3","d-flex","flex-row-fluid","bgi-size-cover","bgi-position-center",2,"background-image","url('./assets/media/error/bg3.jpg')","height","100%","zoom","1","display","block","min-height","80vh","font-size","14px","line-height","1.4","color","#0e1724"],[1,"px-10","px-md-30","py-10","py-md-0","d-flex","flex-column","justify-content-md-center"],[1,"display-4","font-weight-boldest","text-white","mb-12"],[1,"font-size-h1","font-weight-boldest","text-dark-75"],[1,"font-size-h4","line-height-md"]],template:function(e,t){1&e&&(c.Mc(0,_,46,8,"form",0),c.Mc(1,H,10,0,"div",1)),2&e&&(c.rc("ngIf",!t.hidden),c.Db(1),c.rc("ngIf",t.hidden))},directives:[r.p,M.B,M.r,M.k,R.a,Y.a,I.b,C.c,G.b,M.d,M.q,M.i,C.f,C.b],pipes:[r.j],styles:[""]}),U),B=n("mrSG"),Z=n("/X+5"),$=["expandableTable"],ee=[{path:"",component:k,children:[{path:"all-sheets",component:O},{path:"new-sheet",component:Q},{path:"edit/:id",component:J,pathMatch:"full"},{path:"sheet/:sheetId",component:(X=function(){function e(t,n,r,i,o){a(this,e),this.route=t,this.userService=n,this.cdr=r,this.googleSheetReportingService=i,this.notification=o,this.loadingIndicator=!0,this.sheetData=[],this.range={startDate:"",endDate:""},this.rows=[],this.columns=[],this.selectedCompany=this.getSelectedCompanyFromLocalStorage()}return o(e,[{key:"ngAfterViewInit",value:function(){return Object(B.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.loadingIndicator=!0,this.route.params.subscribe((function(e){return Object(B.a)(t,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.googlesheetId=e.sheetId,this.sheetData=[],t.next=4,this.getSheetInformation(this.googlesheetId,this.range.startDate,this.range.endDate);case 4:this.sheetData=t.sent,this.columns=this.sheetData.length>0?Object.keys(this.sheetData[0]).map((function(e){return{prop:e}})):[],this.cdr.markForCheck();case 7:case"end":return t.stop()}}),t,this)})))}));case 1:case"end":return e.stop()}}),e,this)})))}},{key:"getSelectedCompanyFromLocalStorage",value:function(){return this.userService.getSelectedCompanyFromLocalStorage()}},{key:"sheetFiltering",value:function(e){return Object(B.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(e),this.loadingIndicator=!0,this.range=e,this.sheetData=[],this.route.params.subscribe((function(e){return Object(B.a)(n,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.sheetData=[],t.next=3,this.getSheetInformation(e.sheetId,this.range.startDate,this.range.endDate);case 3:this.sheetData=t.sent,this.columns=this.sheetData.length>0?Object.keys(this.sheetData[0]).map((function(e){return{prop:e}})):[],this.loadingIndicator=!1,this.cdr.detectChanges();case 7:case"end":return t.stop()}}),t,this)})))}));case 1:case"end":return t.stop()}}),t,this)})))}},{key:"getSheetInformation",value:function(e,t,n){var r=this;return this.loadingIndicator=!0,this.googleSheetReportingService.getSheetData(e,t,n).toPromise().then((function(e){return r.loadingIndicator=!1,e})).catch((function(e){return[]}))}}]),e}(),X.\u0275fac=function(e){return new(e||X)(c.Qb(i.a),c.Qb(l.a),c.Qb(c.i),c.Qb(s.a),c.Qb(u.a))},X.\u0275cmp=c.Kb({type:X,selectors:[["app-sheet"]],viewQuery:function(e,t){var n;1&e&&c.Tc($,!0),2&e&&c.zc(n=c.ic())&&(t.table=n.first)},decls:2,vars:9,consts:[[3,"onDatesPicked"],[1,"material","fullscreen","expandable",2,"top","10px","height","500px",3,"loadingIndicator","rows","columns","columnMode","headerHeight","footerHeight","scrollbarV","scrollbarH","rowHeight"]],template:function(e,t){1&e&&(c.Wb(0,"app-reporting-filtering",0),c.hc("onDatesPicked",(function(e){return t.sheetFiltering(e)})),c.Vb(),c.Rb(1,"ngx-datatable",1)),2&e&&(c.Db(1),c.rc("loadingIndicator",t.loadingIndicator)("rows",t.sheetData)("columns",t.columns)("columnMode","force")("headerHeight",50)("footerHeight",0)("scrollbarV",!0)("scrollbarH",!0)("rowHeight",50))},directives:[Z.a,d.d],styles:[""]}),X),pathMatch:"full"},{path:"",redirectTo:"",pathMatch:"full"},{path:"**",redirectTo:"",pathMatch:"full"}]}],te=((A=function e(){a(this,e)}).\u0275mod=c.Ob({type:A}),A.\u0275inj=c.Nb({factory:function(e){return new(e||A)},imports:[[i.k.forChild(ee)],i.k]}),A),ne=n("iadO"),re=n("UKGz"),ae=((K=function e(){a(this,e)}).\u0275mod=c.Ob({type:K}),K.\u0275inj=c.Nb({factory:function(e){return new(e||K)},imports:[[r.c,te,M.m,M.w,C.e,G.c,I.c,ne.e,Y.b,R.b,d.g,re.a,b.b.forRoot()]]}),K)},UKGz:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n("ofXK"),i=n("3Pt+"),o=n("d3UM"),c=n("FKr1"),s=n("iadO"),l=n("MutI"),u=n("kmnG"),h=n("e8Ap"),d=n("fXoL"),b=function(){var e=function e(){a(this,e)};return e.\u0275mod=d.Ob({type:e}),e.\u0275inj=d.Nb({factory:function(t){return new(t||e)},imports:[[r.c,i.w,i.m,u.e,c.n,o.b,c.q,s.e,l.d,h.b]]}),e}()}}])}();