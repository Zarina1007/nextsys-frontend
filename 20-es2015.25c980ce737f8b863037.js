(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"/X+5":function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a("fXoL"),i=a("3Pt+"),o=a("wd/R"),n=a("kmnG"),s=a("iadO"),c=a("ofXK"),l=a("d3UM"),h=a("FKr1");function d(e,t){1&e&&(r.Wb(0,"mat-error"),r.Oc(1,"Invalid start date"),r.Vb())}function b(e,t){1&e&&(r.Wb(0,"mat-error"),r.Oc(1,"Invalid end date"),r.Vb())}function u(e,t){if(1&e&&(r.Wb(0,"mat-option",15),r.Oc(1),r.Vb()),2&e){const e=t.$implicit;r.rc("value",e.value),r.Db(1),r.Qc(" ",e.viewValue," ")}}let m=(()=>{class e{constructor(){this.onDatesPicked=new r.p}ngOnInit(){this.preSetDateRanges=this.getDateRanges(),this.range=new i.j({startDate:new i.g,endDate:new i.g}),this.selectedRange={startDate:"",endDate:""},this.preSelectValue="last7days",this.preSelectDates=this.getPreSetDateRange(this.preSelectValue),this.updateDatePickerRange(this.preSelectDates.startDate,this.preSelectDates.endDate),this.emitSelectedRange()}getDateRanges(){return[{value:"today",viewValue:"Today"},{value:"yesterday",viewValue:"Yesterday"},{value:"last7days",viewValue:"Last 7 Days"},{value:"last30days",viewValue:"Last 30 Days"},{value:"monthToDate",viewValue:"Month to Date"},{value:"lastMonth",viewValue:"Last Month"},{value:"custom",viewValue:"Custom"}]}getPreSetDateRange(e){switch(e){case"today":return{startDate:o().utc().startOf("day").format("MM-DD-YYYY"),endDate:o().utc().endOf("day").format("MM-DD-YYYY")};case"yesterday":return{startDate:o().subtract(1,"days").utc().startOf("day").format("MM-DD-YYYY"),endDate:o().subtract(1,"days").utc().endOf("day").format("MM-DD-YYYY")};case"last7days":return{startDate:o().subtract(7,"days").utc().startOf("day").format("MM-DD-YYYY"),endDate:o().utc().endOf("day").format("MM-DD-YYYY")};case"last30days":return{startDate:o().subtract(30,"days").utc().startOf("day").format("MM-DD-YYYY"),endDate:o().utc().endOf("day").format("MM-DD-YYYY")};case"monthToDate":return{startDate:o().startOf("month").utc().startOf("day").format("MM-DD-YYYY"),endDate:o().utc().endOf("day").format("MM-DD-YYYY")};case"lastMonth":return{startDate:o().subtract(1,"months").startOf("month").utc().startOf("day").format("MM-DD-YYYY"),endDate:o().utc().subtract(1,"months").endOf("month").format("MM-DD-YYYY")}}}onPreSetRangeSelectChange(e){"custom"!==e.value&&(this.preSelectValue=e.value,this.preSelectDates=this.getPreSetDateRange(this.preSelectValue),this.updateDatePickerRange(this.preSelectDates.startDate,this.preSelectDates.endDate),this.emitSelectedRange())}updateDatePickerRange(e,t){this.range.patchValue({startDate:o(e,"MM-DD-YYYY").toDate(),endDate:o(t,"MM-DD-YYYY").toDate()})}changeDatePicker(){this.range.valid&&(this.selectedRange.startDate=this.range.value.startDate,this.selectedRange.endDate=this.range.value.endDate,this.preSelectValue="custom",this.emitSelectedRange())}emitSelectedRange(){if(this.range.valid){this.selectedRange.startDate=this.range.value.startDate,this.selectedRange.endDate=this.range.value.endDate;let e=this.selectedRange;e.startDate=o(this.selectedRange.startDate).startOf("day").format("MM-DD-YYYY"),e.endDate=o(this.selectedRange.endDate).endOf("day").format("MM-DD-YYYY"),this.onDatesPicked.emit(e)}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Kb({type:e,selectors:[["app-reporting-filtering"]],outputs:{onDatesPicked:"onDatesPicked"},decls:24,vars:7,consts:[[1,"row"],[1,"col-xl-6"],[1,"card","card-custom","example","example-compact","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label"],[1,"card-body"],[3,"formGroup","rangePicker","dateChange"],["matStartDate","","formControlName","startDate","placeholder","Start date","required",""],["matEndDate","","formControlName","endDate","placeholder","End date","required","",3,"dateChange"],["matSuffix","",3,"for"],["picker",""],[4,"ngIf"],[3,"ngModel","ngModelChange","selectionChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,t){if(1&e&&(r.Wb(0,"div",0),r.Wb(1,"div",1),r.Wb(2,"div",2),r.Wb(3,"div",3),r.Wb(4,"div",4),r.Wb(5,"h2",5),r.Oc(6,"Filter Date Range"),r.Vb(),r.Vb(),r.Vb(),r.Wb(7,"div",6),r.Wb(8,"mat-form-field"),r.Wb(9,"mat-label"),r.Oc(10,"Enter a custom date range"),r.Vb(),r.Wb(11,"mat-date-range-input",7),r.hc("dateChange",(function(){return t.changeDatePicker()})),r.Rb(12,"input",8),r.Wb(13,"input",9),r.hc("dateChange",(function(){return t.changeDatePicker()})),r.Vb(),r.Vb(),r.Rb(14,"mat-datepicker-toggle",10),r.Rb(15,"mat-date-range-picker",null,11),r.Mc(17,d,2,0,"mat-error",12),r.Mc(18,b,2,0,"mat-error",12),r.Vb(),r.Wb(19,"mat-form-field"),r.Wb(20,"mat-label"),r.Oc(21,"Preset Date Range"),r.Vb(),r.Wb(22,"mat-select",13),r.hc("ngModelChange",(function(e){return t.preSelectValue=e}))("selectionChange",(function(e){return t.onPreSetRangeSelectChange(e)})),r.Mc(23,u,2,2,"mat-option",14),r.Vb(),r.Vb(),r.Vb(),r.Vb(),r.Vb(),r.Vb()),2&e){const e=r.Ac(16);r.Db(11),r.rc("formGroup",t.range)("rangePicker",e),r.Db(3),r.rc("for",e),r.Db(3),r.rc("ngIf",t.range.controls.startDate.hasError("matStartDateInvalid")),r.Db(1),r.rc("ngIf",t.range.controls.endDate.hasError("matEndDateInvalid")),r.Db(4),r.rc("ngModel",t.preSelectValue),r.Db(1),r.rc("ngForOf",t.preSetDateRanges)}},directives:[n.c,n.g,s.a,i.r,i.k,s.h,i.d,i.q,i.i,i.x,s.g,s.f,n.j,s.b,c.p,l.a,i.t,c.o,n.b,h.p],styles:[""]}),e})()},"0MNC":function(e,t,a){"use strict";a.d(t,"a",(function(){return w})),a.d(t,"b",(function(){return x}));var r=a("fXoL"),i=a("8LU1"),o=a("XNiG"),n=a("itXk"),s=a("GyhO"),c=a("HDdC"),l=a("IzEk"),h=a("7o/Q");class d{constructor(e){this.total=e}call(e,t){return t.subscribe(new b(e,this.total))}}class b extends h.a{constructor(e,t){super(e),this.total=t,this.count=0}_next(e){++this.count>this.total&&this.destination.next(e)}}var u=a("Kj3r"),m=a("lJxs"),g=a("JX91"),p=a("1G5W"),f=a("nLfN");const v=new Set;let S,y=(()=>{class e{constructor(e){this._platform=e,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):D}matchMedia(e){return this._platform.WEBKIT&&function(e){if(!v.has(e))try{S||(S=document.createElement("style"),S.setAttribute("type","text/css"),document.head.appendChild(S)),S.sheet&&(S.sheet.insertRule(`@media ${e} {.fx-query-test{ }}`,0),v.add(e))}catch(t){console.error(t)}}(e),this._matchMedia(e)}}return e.\u0275fac=function(t){return new(t||e)(r.ec(f.a))},e.\u0275prov=Object(r.Mb)({factory:function(){return new e(Object(r.ec)(f.a))},token:e,providedIn:"root"}),e})();function D(e){return{matches:"all"===e||""===e,media:e,addListener:()=>{},removeListener:()=>{}}}let w=(()=>{class e{constructor(e,t){this._mediaMatcher=e,this._zone=t,this._queries=new Map,this._destroySubject=new o.a}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return V(Object(i.b)(e)).some(e=>this._registerQuery(e).mql.matches)}observe(e){const t=V(Object(i.b)(e)).map(e=>this._registerQuery(e).observable);let a=Object(n.a)(t);return a=Object(s.a)(a.pipe(Object(l.a)(1)),a.pipe(e=>e.lift(new d(1)),Object(u.a)(0))),a.pipe(Object(m.a)(e=>{const t={matches:!1,breakpoints:{}};return e.forEach(({matches:e,query:a})=>{t.matches=t.matches||e,t.breakpoints[a]=e}),t}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);const t=this._mediaMatcher.matchMedia(e),a={observable:new c.a(e=>{const a=t=>this._zone.run(()=>e.next(t));return t.addListener(a),()=>{t.removeListener(a)}}).pipe(Object(g.a)(t),Object(m.a)(({matches:t})=>({query:e,matches:t})),Object(p.a)(this._destroySubject)),mql:t};return this._queries.set(e,a),a}}return e.\u0275fac=function(t){return new(t||e)(r.ec(y),r.ec(r.C))},e.\u0275prov=Object(r.Mb)({factory:function(){return new e(Object(r.ec)(y),Object(r.ec)(r.C))},token:e,providedIn:"root"}),e})();function V(e){return e.map(e=>e.split(",")).reduce((e,t)=>e.concat(t)).map(e=>e.trim())}const x={XSmall:"(max-width: 599.99px)",Small:"(min-width: 600px) and (max-width: 959.99px)",Medium:"(min-width: 960px) and (max-width: 1279.99px)",Large:"(min-width: 1280px) and (max-width: 1919.99px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.99px) and (orientation: portrait), (max-width: 959.99px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.99px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.99px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"}},"4R8J":function(e,t,a){"use strict";a.r(t),a.d(t,"GoogleSheetReportingModule",(function(){return K}));var r=a("ofXK"),i=a("tyNb"),o=a("fXoL"),n=a("aoJj"),s=a("oabR"),c=a("soTd"),l=a("Dvla"),h=a("lDzL"),d=a("e8Ap");function b(e,t){1&e&&o.Oc(0," Sheet Name ")}function u(e,t){1&e&&o.Oc(0),2&e&&o.Qc(" ",t.value," ")}function m(e,t){1&e&&o.Oc(0," Sheet Url ")}function g(e,t){1&e&&o.Oc(0),2&e&&o.Qc(" ",t.value," ")}function p(e,t){1&e&&o.Oc(0," Sub Sheet Name ")}function f(e,t){1&e&&o.Oc(0),2&e&&o.Qc(" ",t.value," ")}function v(e,t){1&e&&o.Oc(0,"Action")}function S(e,t){if(1&e){const e=o.Xb();o.Wb(0,"a",16),o.hc("click",(function(){o.Dc(e);const a=t.row;return o.lc(2).editSheet(a._key)})),o.Rb(1,"span",17),o.Vb(),o.Wb(2,"a",18),o.hc("click",(function(){o.Dc(e);const a=t.row;return o.lc(2).deleteSheet(a._key)})),o.Rb(3,"span",19),o.Vb(),o.Wb(4,"a",20),o.hc("click",(function(){o.Dc(e);const a=t.row;return o.lc(2).copyToGoogleSheetAPIClipboard(a)})),o.Rb(5,"span",21),o.Vb()}if(2&e){const e=t.row;o.Db(1),o.rc("inlineSVG","./assets/media/svg/icons/Communication/Write.svg"),o.Db(2),o.rc("inlineSVG","./assets/media/svg/icons/General/Trash.svg"),o.Db(2),o.rc("inlineSVG",e.copy?"./assets/media/svg/icons/General/copied.svg":"./assets/media/svg/icons/General/Clipboard.svg")}}function y(e,t){if(1&e&&(o.Wb(0,"div",2),o.Wb(1,"div",3),o.Wb(2,"div",4),o.Wb(3,"div",5),o.Wb(4,"div",6),o.Wb(5,"h3",7),o.Oc(6,"Google Sheet Reporting"),o.Vb(),o.Vb(),o.Vb(),o.Wb(7,"div",8),o.Wb(8,"ngx-datatable",9),o.Wb(9,"ngx-datatable-column",10),o.Mc(10,b,1,0,"ng-template",11),o.Mc(11,u,1,1,"ng-template",12),o.Vb(),o.Wb(12,"ngx-datatable-column",13),o.Mc(13,m,1,0,"ng-template",11),o.Mc(14,g,1,1,"ng-template",12),o.Vb(),o.Wb(15,"ngx-datatable-column",14),o.Mc(16,p,1,0,"ng-template",11),o.Mc(17,f,1,1,"ng-template",12),o.Vb(),o.Wb(18,"ngx-datatable-column",15),o.Mc(19,v,1,0,"ng-template",11),o.Mc(20,S,6,3,"ng-template",12),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Vb()),2&e){const e=o.lc();o.Db(8),o.rc("rows",e.rows)("columnMode","force")("loadingIndicator",e.loadingIndicator)("footerHeight",50)("rowHeight",50)("scrollbarH",!0)("headerHeight",50)("limit",10),o.Db(1),o.rc("width",150),o.Db(9),o.rc("width",100)}}function D(e,t){1&e&&(o.Wb(0,"div",22),o.Wb(1,"div",23),o.Wb(2,"p",24),o.Oc(3," How did you get here "),o.Vb(),o.Wb(4,"p",25),o.Oc(5," Sorry you can't access the page you're looking for. "),o.Vb(),o.Wb(6,"p",26),o.Oc(7," There may be a misspelling in the URL entered,"),o.Rb(8,"br"),o.Oc(9,"or the page you are looking for may no longer exist. "),o.Vb(),o.Vb(),o.Vb())}let w=(()=>{class e{constructor(e,t,a,r,i,o){this.googlesheetService=e,this.cdr=t,this.router=a,this.userService=r,this.notification=i,this.clipboardService=o,this.loadingIndicator=!0,this.hidden=!1}ngOnInit(){this.localStorageCompany=this.getSelectedCompanyFromLocalStorage(),this.localStorageCompany?this.hidden=!1:(this.hidden=!0,this.notification.showError("Please select your Company!","")),this.googlesheetService.getSheetList().subscribe({next:e=>{this.rows=e,this.loadingIndicator=!1,this.cdr.detectChanges()},error:e=>{console.log(e),this.notification.showError(e.error,"")},complete:()=>console.log("done")})}editSheet(e){this.router.navigateByUrl("/google-sheet-reporting/edit/"+e)}getSelectedCompanyFromLocalStorage(){return this.userService.getSelectedCompanyFromLocalStorage()}deleteSheet(e){window.confirm("Do you want to go ahead?")&&this.googlesheetService.deleteSheet(e).subscribe(e=>{this.router.navigate(["/google-sheet-reporting/all-sheets"]).then(()=>{window.location.reload()}),this.notification.showSuccess("Successfully deleted sheet.","")},e=>{console.log(e),this.notification.showError("Error deleting sheet: "+e,"")})}copyToGoogleSheetAPIClipboard(e){const t=e.sheetUrl.split("/")&&e.sheetUrl.split("/")[5]?e.sheetUrl.split("/")[5]:"",a=e.sheetUUID;e.copy=!0,this.clipboardService.copyFromContent(`http://api.nextsys.io/api/googlesheet/${t}/${a}/stats?startDate=MM/DD/YYYY&endDate=MM/DD/YYYY`),setTimeout(()=>{e.copy=!1,this.cdr.detectChanges()},3e3)}}return e.\u0275fac=function(t){return new(t||e)(o.Qb(n.a),o.Qb(o.i),o.Qb(i.h),o.Qb(s.a),o.Qb(c.a),o.Qb(l.b))},e.\u0275cmp=o.Kb({type:e,selectors:[["app-all-sheets"]],decls:2,vars:2,consts:[["class","row",4,"ngIf"],["class","error error-3 d-flex flex-row-fluid bgi-size-cover bgi-position-center","style","background-image: url('./assets/media/error/bg3.jpg'); height: 100%;zoom: 1;\n    display: block;\n    min-height: 80vh;\n    font-size: 14px;\n    line-height: 1.4;\n    color: #0e1724;",4,"ngIf"],[1,"row"],[1,"col-xl-12"],[1,"card","card-custom","example","example-compact","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label"],[1,"card-body"],[1,"material","fullscreen",3,"rows","columnMode","loadingIndicator","footerHeight","rowHeight","scrollbarH","headerHeight","limit"],["name","SheetName",3,"width"],["ngx-datatable-header-template",""],["ngx-datatable-cell-template",""],["name","SheetUrl"],["name","subSheetName"],["name","id",3,"width"],["title","Edit Sheet",1,"btn","btn-icon","btn-light","btn-hover-primary","btn-sm","mx-2",3,"click"],["cacheSVG","true",1,"svg-icon","svg-icon-md","svg-icon-primary",3,"inlineSVG"],["title","Delete Sheet",1,"btn","btn-icon","btn-light","btn-hover-danger","btn-sm","mx-2",3,"click"],["cacheSVG","false",1,"svg-icon","svg-icon-md","svg-icon-danger",3,"inlineSVG"],["title","COPY GOOGLE SHEET API",1,"btn","btn-icon","btn-light","btn-hover-info","btn-sm","mx-2",3,"click"],["cacheSVG","false",1,"svg-icon","svg-icon-md","svg-icon-info",3,"inlineSVG"],[1,"error","error-3","d-flex","flex-row-fluid","bgi-size-cover","bgi-position-center",2,"background-image","url('./assets/media/error/bg3.jpg')","height","100%","zoom","1","display","block","min-height","80vh","font-size","14px","line-height","1.4","color","#0e1724"],[1,"px-10","px-md-30","py-10","py-md-0","d-flex","flex-column","justify-content-md-center"],[1,"display-4","font-weight-boldest","text-white","mb-12"],[1,"font-size-h1","font-weight-boldest","text-dark-75"],[1,"font-size-h4","line-height-md"]],template:function(e,t){1&e&&(o.Mc(0,y,21,10,"div",0),o.Mc(1,D,10,0,"div",1)),2&e&&(o.rc("ngIf",!t.hidden),o.Db(1),o.rc("ngIf",t.hidden))},directives:[r.p,h.d,h.b,h.c,h.a,d.a],styles:[""]}),e})(),V=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Kb({type:e,selectors:[["app-google-sheet-reporting"]],decls:1,vars:0,template:function(e,t){1&e&&o.Rb(0,"router-outlet")},directives:[i.l],styles:[""]}),e})();var x=a("3Pt+"),W=a("Qu3c"),O=a("NFeN"),M=a("bTqV"),Y=a("kmnG"),k=a("qFsG");function I(e,t){1&e&&(o.Wb(0,"mat-error"),o.Oc(1,"Sheet Name is required. "),o.Vb())}function G(e,t){1&e&&(o.Wb(0,"mat-error"),o.Oc(1,"Sheet Url is required. "),o.Vb())}function C(e,t){1&e&&(o.Wb(0,"mat-error"),o.Oc(1,"Sub Sheet Name is required. "),o.Vb())}function R(e,t){if(1&e){const e=o.Xb();o.Wb(0,"form",2),o.hc("submit",(function(){return o.Dc(e),o.lc().submitHandle()})),o.Wb(1,"div",3),o.Wb(2,"div",4),o.Wb(3,"div",3),o.Wb(4,"div",5),o.Wb(5,"div",6),o.Wb(6,"div",7),o.Wb(7,"div",8),o.Wb(8,"h3",9),o.Oc(9,"Create New Google Sheet"),o.Vb(),o.Vb(),o.Vb(),o.Wb(10,"div",10),o.Oc(11),o.mc(12,"json"),o.Wb(13,"div",11),o.Wb(14,"div",5),o.Wb(15,"span"),o.Oc(16),o.Wb(17,"span",12),o.Wb(18,"mat-icon"),o.Oc(19,"info"),o.Vb(),o.Vb(),o.Wb(20,"span"),o.Wb(21,"button",13),o.hc("click",(function(t){return o.Dc(e),o.lc().copyToEmailClipboard(t)})),o.Wb(22,"mat-icon"),o.Oc(23,"content_copy"),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Wb(24,"div",5),o.Wb(25,"mat-form-field"),o.Rb(26,"input",14),o.Mc(27,I,2,0,"mat-error",15),o.Vb(),o.Vb(),o.Vb(),o.Wb(28,"div",16),o.Wb(29,"div",5),o.Wb(30,"mat-form-field"),o.Rb(31,"input",17),o.Wb(32,"mat-hint",18),o.Oc(33,"e.g. https://docs.google.com/spreadsheets/d/1taJZ7W-sds54"),o.Vb(),o.Mc(34,G,2,0,"mat-error",15),o.Vb(),o.Vb(),o.Vb(),o.Wb(35,"div",16),o.Wb(36,"div",5),o.Wb(37,"mat-form-field"),o.Rb(38,"input",19),o.Wb(39,"mat-hint",18),o.Oc(40,"e.g. Raw"),o.Vb(),o.Mc(41,C,2,0,"mat-error",15),o.Vb(),o.Vb(),o.Vb(),o.Wb(42,"div",16),o.Wb(43,"div",20),o.Wb(44,"button",21),o.Oc(45,"Save"),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Vb()}if(2&e){const e=o.lc();o.rc("formGroup",e.sheetFG),o.Db(11),o.Qc(" ",o.nc(12,6,e.sheetFG.value)," "),o.Db(5),o.Qc(" Email Address : ",e.shareEmail," "),o.Db(11),o.rc("ngIf",null==e.sheetFG.get("sheetName").errors?null:e.sheetFG.get("sheetName").errors.required),o.Db(7),o.rc("ngIf",null==e.sheetFG.get("sheetUrl").errors?null:e.sheetFG.get("sheetUrl").errors.required),o.Db(7),o.rc("ngIf",null==e.sheetFG.get("subSheetName").errors?null:e.sheetFG.get("subSheetName").errors.required)}}function N(e,t){1&e&&(o.Wb(0,"div",22),o.Wb(1,"div",23),o.Wb(2,"p",24),o.Oc(3," How did you get here "),o.Vb(),o.Wb(4,"p",25),o.Oc(5," Sorry you can't access the page you're looking for. "),o.Vb(),o.Wb(6,"p",26),o.Oc(7," There may be a misspelling in the URL entered,"),o.Rb(8,"br"),o.Oc(9,"or the page you are looking for may no longer exist. "),o.Vb(),o.Vb(),o.Vb())}let F=(()=>{class e{constructor(e,t,a,r,i){this.userService=e,this.googleSheetReportingServie=t,this.router=a,this.notification=r,this.clipboardService=i,this.hidden=!1,this.shareEmail="nextsys-data-management@nextsys-stats-management.iam.gserviceaccount.com",this.localStorageCompany=this.getSelectedCompanyFromLocalStorage()}ngOnInit(){this.localStorageCompany?this.hidden=!1:(this.hidden=!0,this.notification.showError("Please select your Company!","")),this.sheetFG=new x.j({sheetName:new x.g("",x.z.required),sheetUrl:new x.g("",x.z.required),subSheetName:new x.g("",x.z.required)})}submitHandle(){this.sheetFG.markAllAsTouched(),this.sheetFG.valid&&this.googleSheetReportingServie.addSheet(this.sheetFG.value).subscribe(e=>{this.notification.showSuccess("Successfully added a new Sheet.",""),this.router.navigate(["/google-sheet-reporting/all-sheets"])},e=>{this.notification.showError(JSON.stringify(e.error),"")})}getSelectedCompanyFromLocalStorage(){return this.userService.getSelectedCompanyFromLocalStorage()}copyToEmailClipboard(e){e.preventDefault(),this.clipboardService.copyFromContent(this.shareEmail)}}return e.\u0275fac=function(t){return new(t||e)(o.Qb(s.a),o.Qb(n.a),o.Qb(i.h),o.Qb(c.a),o.Qb(l.b))},e.\u0275cmp=o.Kb({type:e,selectors:[["app-new-sheet"]],viewQuery:function(e,t){var a;1&e&&o.Tc(x.k,!0),2&e&&o.zc(a=o.ic())&&(t.formGroupDirective=a.first)},decls:2,vars:2,consts:[["class","example-container",3,"formGroup","submit",4,"ngIf"],["class","error error-3 d-flex flex-row-fluid bgi-size-cover bgi-position-center","style","background-image: url('./assets/media/error/bg3.jpg'); height: 100%;zoom: 1;\n  display: block;\n  min-height: 80vh;\n  font-size: 14px;\n  line-height: 1.4;\n  color: #0e1724;",4,"ngIf"],[1,"example-container",3,"formGroup","submit"],[1,"row"],[1,"col-xl-8"],[1,"col-xl-12"],[1,"card","card-custom","example","example-compact","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label"],[1,"card-body"],[1,"row","pb-2","pt-2"],["matTooltip","You have to share the GoogleSheet to this Email"],["mat-icon-button","","matTooltip","Copy to clipboard",3,"click"],["matInput","","formControlName","sheetName","placeholder","Sheet Name"],[4,"ngIf"],[1,"row","py-2"],["matInput","","formControlName","sheetUrl","placeholder","Sheet Url","type","url"],["align","start"],["matInput","","formControlName","subSheetName","placeholder","Sub Sheet Name","type","text"],[1,"col-md-12"],["mat-raised-button","","color","primary","type","submit",1,"save-button"],[1,"error","error-3","d-flex","flex-row-fluid","bgi-size-cover","bgi-position-center",2,"background-image","url('./assets/media/error/bg3.jpg')","height","100%","zoom","1","display","block","min-height","80vh","font-size","14px","line-height","1.4","color","#0e1724"],[1,"px-10","px-md-30","py-10","py-md-0","d-flex","flex-column","justify-content-md-center"],[1,"display-4","font-weight-boldest","text-white","mb-12"],[1,"font-size-h1","font-weight-boldest","text-dark-75"],[1,"font-size-h4","line-height-md"]],template:function(e,t){1&e&&(o.Mc(0,R,46,8,"form",0),o.Mc(1,N,10,0,"div",1)),2&e&&(o.rc("ngIf",!t.hidden),o.Db(1),o.rc("ngIf",t.hidden))},directives:[r.p,x.B,x.r,x.k,W.a,O.a,M.b,Y.c,k.b,x.d,x.q,x.i,Y.f,Y.b],pipes:[r.j],styles:[""]}),e})();function j(e,t){1&e&&(o.Wb(0,"mat-error"),o.Oc(1,"Sheet Name is required. "),o.Vb())}function z(e,t){1&e&&(o.Wb(0,"mat-error"),o.Oc(1,"Sheet Url is required. "),o.Vb())}function Q(e,t){1&e&&(o.Wb(0,"mat-error"),o.Oc(1,"Sub Sheet Name is required. "),o.Vb())}function E(e,t){if(1&e){const e=o.Xb();o.Wb(0,"form",2),o.hc("submit",(function(){return o.Dc(e),o.lc().submitHandle()})),o.Wb(1,"div",3),o.Wb(2,"div",4),o.Wb(3,"div",3),o.Wb(4,"div",5),o.Wb(5,"div",6),o.Wb(6,"div",7),o.Wb(7,"div",8),o.Wb(8,"h3",9),o.Oc(9,"Edit Google Sheet"),o.Vb(),o.Vb(),o.Vb(),o.Wb(10,"div",10),o.Oc(11),o.mc(12,"json"),o.Wb(13,"div",11),o.Wb(14,"div",5),o.Wb(15,"span"),o.Oc(16),o.Wb(17,"span",12),o.Wb(18,"mat-icon"),o.Oc(19,"info"),o.Vb(),o.Vb(),o.Wb(20,"span"),o.Wb(21,"button",13),o.hc("click",(function(t){return o.Dc(e),o.lc().copyToEmailClipboard(t)})),o.Wb(22,"mat-icon"),o.Oc(23,"content_copy"),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Wb(24,"div",5),o.Wb(25,"mat-form-field"),o.Rb(26,"input",14),o.Mc(27,j,2,0,"mat-error",15),o.Vb(),o.Vb(),o.Vb(),o.Wb(28,"div",16),o.Wb(29,"div",5),o.Wb(30,"mat-form-field"),o.Rb(31,"input",17),o.Wb(32,"mat-hint",18),o.Oc(33,"e.g. https://docs.google.com/spreadsheets/d/1taJZ7W-sds54"),o.Vb(),o.Mc(34,z,2,0,"mat-error",15),o.Vb(),o.Vb(),o.Vb(),o.Wb(35,"div",16),o.Wb(36,"div",5),o.Wb(37,"mat-form-field"),o.Rb(38,"input",19),o.Wb(39,"mat-hint",18),o.Oc(40,"e.g. Raw"),o.Vb(),o.Mc(41,Q,2,0,"mat-error",15),o.Vb(),o.Vb(),o.Vb(),o.Wb(42,"div",20),o.Wb(43,"div",21),o.Wb(44,"button",22),o.Oc(45,"Save"),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Vb()}if(2&e){const e=o.lc();o.rc("formGroup",e.editSheetFG),o.Db(11),o.Qc(" ",o.nc(12,6,e.editSheetFG.value)," "),o.Db(5),o.Qc(" Email Address : ",e.shareEmail," "),o.Db(11),o.rc("ngIf",null==e.editSheetFG.get("sheetName").errors?null:e.editSheetFG.get("sheetName").errors.required),o.Db(7),o.rc("ngIf",null==e.editSheetFG.get("sheetUrl").errors?null:e.editSheetFG.get("sheetUrl").errors.required),o.Db(7),o.rc("ngIf",null==e.editSheetFG.get("subSheetName").errors?null:e.editSheetFG.get("subSheetName").errors.required)}}function L(e,t){1&e&&(o.Wb(0,"div",23),o.Wb(1,"div",24),o.Wb(2,"p",25),o.Oc(3," How did you get here "),o.Vb(),o.Wb(4,"p",26),o.Oc(5," Sorry you can't access the page you're looking for. "),o.Vb(),o.Wb(6,"p",27),o.Oc(7," There may be a misspelling in the URL entered,"),o.Rb(8,"br"),o.Oc(9,"or the page you are looking for may no longer exist. "),o.Vb(),o.Vb(),o.Vb())}let q=(()=>{class e{constructor(e,t,a,r,i,o,n){this.cdr=e,this.router=t,this.route=a,this.userService=r,this.notification=i,this.googleSheetReportingServie=o,this.clipboardService=n,this.hidden=!1,this.shareEmail="nextsys-data-management@nextsys-stats-management.iam.gserviceaccount.com",this.localStorageCompany=this.getSelectedCompanyFromLocalStorage()}ngOnInit(){this.localStorageCompany?this.hidden=!1:(this.hidden=!0,this.notification.showError("Please select your Company!","")),this.editSheetFG=new x.j({sheetName:new x.g("",x.z.required),sheetUrl:new x.g("",x.z.required),subSheetName:new x.g("",x.z.required)}),this.route.snapshot.params.id&&this.googleSheetReportingServie.getOneSheet(this.route.snapshot.params.id).subscribe(e=>{this.sheet=e,this.editSheetFG.setValue({sheetName:e.sheetName,sheetUrl:e.sheetUrl,subSheetName:e.subSheetName?e.subSheetName:""})})}getSelectedCompanyFromLocalStorage(){return this.userService.getSelectedCompanyFromLocalStorage()}submitHandle(){this.editSheetFG.markAllAsTouched(),this.editSheetFG.valid&&(this.sheet=Object.assign(Object.assign({},this.sheet),this.editSheetFG.value),this.googleSheetReportingServie.updateSheet(this.sheet).subscribe(e=>{this.notification.showSuccess("Successfully updated the Sheet.","")},e=>{this.notification.showError("Error updating sheet: "+e.statusText,"")}))}copyToEmailClipboard(e){e.preventDefault(),this.clipboardService.copyFromContent(this.shareEmail)}}return e.\u0275fac=function(t){return new(t||e)(o.Qb(o.i),o.Qb(i.h),o.Qb(i.a),o.Qb(s.a),o.Qb(c.a),o.Qb(n.a),o.Qb(l.b))},e.\u0275cmp=o.Kb({type:e,selectors:[["app-edit-sheet"]],viewQuery:function(e,t){var a;1&e&&o.Tc(x.k,!0),2&e&&o.zc(a=o.ic())&&(t.formGroupDirective=a.first)},decls:2,vars:2,consts:[["class","example-container",3,"formGroup","submit",4,"ngIf"],["class","error error-3 d-flex flex-row-fluid bgi-size-cover bgi-position-center","style","background-image: url('./assets/media/error/bg3.jpg'); height: 100%;zoom: 1;\n  display: block;\n  min-height: 80vh;\n  font-size: 14px;\n  line-height: 1.4;\n  color: #0e1724;",4,"ngIf"],[1,"example-container",3,"formGroup","submit"],[1,"row"],[1,"col-xl-8"],[1,"col-xl-12"],[1,"card","card-custom","example","example-compact","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label"],[1,"card-body"],[1,"row","pb-2","pt-2"],["matTooltip","You have to share the GoogleSheet to this Email"],["mat-icon-button","","matTooltip","Copy to clipboard",3,"click"],["matInput","","formControlName","sheetName","placeholder","Sheet Name"],[4,"ngIf"],[1,"row","py-2"],["matInput","","formControlName","sheetUrl","placeholder","Sheet Url","type","url"],["align","start"],["matInput","","formControlName","subSheetName","placeholder","Sub Sheet Name","type","text"],[1,"row","pt-2"],[1,"col-md-12"],["mat-raised-button","","color","primary","type","submit",1,"save-button"],[1,"error","error-3","d-flex","flex-row-fluid","bgi-size-cover","bgi-position-center",2,"background-image","url('./assets/media/error/bg3.jpg')","height","100%","zoom","1","display","block","min-height","80vh","font-size","14px","line-height","1.4","color","#0e1724"],[1,"px-10","px-md-30","py-10","py-md-0","d-flex","flex-column","justify-content-md-center"],[1,"display-4","font-weight-boldest","text-white","mb-12"],[1,"font-size-h1","font-weight-boldest","text-dark-75"],[1,"font-size-h4","line-height-md"]],template:function(e,t){1&e&&(o.Mc(0,E,46,8,"form",0),o.Mc(1,L,10,0,"div",1)),2&e&&(o.rc("ngIf",!t.hidden),o.Db(1),o.rc("ngIf",t.hidden))},directives:[r.p,x.B,x.r,x.k,W.a,O.a,M.b,Y.c,k.b,x.d,x.q,x.i,Y.f,Y.b],pipes:[r.j],styles:[""]}),e})();var P=a("mrSG"),T=a("/X+5");const U=["expandableTable"],H=[{path:"",component:V,children:[{path:"all-sheets",component:w},{path:"new-sheet",component:F},{path:"edit/:id",component:q,pathMatch:"full"},{path:"sheet/:sheetId",component:(()=>{class e{constructor(e,t,a,r,i){this.route=e,this.userService=t,this.cdr=a,this.googleSheetReportingService=r,this.notification=i,this.loadingIndicator=!0,this.sheetData=[],this.range={startDate:"",endDate:""},this.rows=[],this.columns=[],this.selectedCompany=this.getSelectedCompanyFromLocalStorage()}ngAfterViewInit(){return Object(P.a)(this,void 0,void 0,(function*(){this.loadingIndicator=!0,this.route.params.subscribe(e=>Object(P.a)(this,void 0,void 0,(function*(){this.googlesheetId=e.sheetId,this.sheetData=[],this.sheetData=yield this.getSheetInformation(this.googlesheetId,this.range.startDate,this.range.endDate),this.columns=this.sheetData.length>0?Object.keys(this.sheetData[0]).map(e=>({prop:e})):[],this.cdr.markForCheck()})))}))}getSelectedCompanyFromLocalStorage(){return this.userService.getSelectedCompanyFromLocalStorage()}sheetFiltering(e){return Object(P.a)(this,void 0,void 0,(function*(){this.loadingIndicator=!0,this.range=e,this.sheetData=[],this.route.params.subscribe(e=>Object(P.a)(this,void 0,void 0,(function*(){this.sheetData=[],this.sheetData=yield this.getSheetInformation(e.sheetId,this.range.startDate,this.range.endDate),this.columns=this.sheetData.length>0?Object.keys(this.sheetData[0]).map(e=>({prop:e})):[],this.loadingIndicator=!1,this.cdr.detectChanges()})))}))}getSheetInformation(e,t,a){return this.loadingIndicator=!0,this.googleSheetReportingService.getSheetData(e,t,a).toPromise().then(e=>(this.loadingIndicator=!1,e)).catch(e=>[])}}return e.\u0275fac=function(t){return new(t||e)(o.Qb(i.a),o.Qb(s.a),o.Qb(o.i),o.Qb(n.a),o.Qb(c.a))},e.\u0275cmp=o.Kb({type:e,selectors:[["app-sheet"]],viewQuery:function(e,t){var a;1&e&&o.Tc(U,!0),2&e&&o.zc(a=o.ic())&&(t.table=a.first)},decls:2,vars:9,consts:[[3,"onDatesPicked"],[1,"material","fullscreen","expandable",2,"top","10px","height","500px",3,"loadingIndicator","rows","columns","columnMode","headerHeight","footerHeight","scrollbarV","scrollbarH","rowHeight"]],template:function(e,t){1&e&&(o.Wb(0,"app-reporting-filtering",0),o.hc("onDatesPicked",(function(e){return t.sheetFiltering(e)})),o.Vb(),o.Rb(1,"ngx-datatable",1)),2&e&&(o.Db(1),o.rc("loadingIndicator",t.loadingIndicator)("rows",t.sheetData)("columns",t.columns)("columnMode","force")("headerHeight",50)("footerHeight",0)("scrollbarV",!0)("scrollbarH",!0)("rowHeight",50))},directives:[T.a,h.d],styles:[""]}),e})(),pathMatch:"full"},{path:"",redirectTo:"",pathMatch:"full"},{path:"**",redirectTo:"",pathMatch:"full"}]}];let _=(()=>{class e{}return e.\u0275mod=o.Ob({type:e}),e.\u0275inj=o.Nb({factory:function(t){return new(t||e)},imports:[[i.k.forChild(H)],i.k]}),e})();var X=a("iadO"),A=a("UKGz");let K=(()=>{class e{}return e.\u0275mod=o.Ob({type:e}),e.\u0275inj=o.Nb({factory:function(t){return new(t||e)},imports:[[r.c,_,x.m,x.w,Y.e,k.c,M.c,X.e,O.b,W.b,h.g,A.a,d.b.forRoot()]]}),e})()},UKGz:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var r=a("ofXK"),i=a("3Pt+"),o=a("d3UM"),n=a("FKr1"),s=a("iadO"),c=a("MutI"),l=a("kmnG"),h=a("e8Ap"),d=a("fXoL");let b=(()=>{class e{}return e.\u0275mod=d.Ob({type:e}),e.\u0275inj=d.Nb({factory:function(t){return new(t||e)},imports:[[r.c,i.w,i.m,l.e,n.n,o.b,n.q,s.e,c.d,h.b]]}),e})()}}]);