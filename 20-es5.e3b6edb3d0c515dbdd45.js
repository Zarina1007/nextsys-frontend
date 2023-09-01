!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,r,a){return r&&t(e.prototype,r),a&&t(e,a),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"/X+5":function(t,a,n){"use strict";n.d(a,"a",(function(){return f}));var i=n("fXoL"),o=n("3Pt+"),s=n("wd/R"),c=n("kmnG"),l=n("iadO"),h=n("ofXK"),d=n("d3UM"),u=n("FKr1");function b(e,t){1&e&&(i.Wb(0,"mat-error"),i.Oc(1,"Invalid start date"),i.Vb())}function g(e,t){1&e&&(i.Wb(0,"mat-error"),i.Oc(1,"Invalid end date"),i.Vb())}function m(e,t){if(1&e&&(i.Wb(0,"mat-option",15),i.Oc(1),i.Vb()),2&e){var r=t.$implicit;i.rc("value",r.value),i.Db(1),i.Qc(" ",r.viewValue," ")}}var f=function(){var t=function(){function t(){e(this,t),this.onDatesPicked=new i.p}return r(t,[{key:"ngOnInit",value:function(){this.preSetDateRanges=this.getDateRanges(),this.range=new o.j({startDate:new o.g,endDate:new o.g}),this.selectedRange={startDate:"",endDate:""},this.preSelectValue="last7days",this.preSelectDates=this.getPreSetDateRange(this.preSelectValue),this.updateDatePickerRange(this.preSelectDates.startDate,this.preSelectDates.endDate),this.emitSelectedRange()}},{key:"getDateRanges",value:function(){return[{value:"today",viewValue:"Today"},{value:"yesterday",viewValue:"Yesterday"},{value:"last7days",viewValue:"Last 7 Days"},{value:"last30days",viewValue:"Last 30 Days"},{value:"monthToDate",viewValue:"Month to Date"},{value:"lastMonth",viewValue:"Last Month"},{value:"custom",viewValue:"Custom"}]}},{key:"getPreSetDateRange",value:function(e){switch(e){case"today":return{startDate:s().utc().startOf("day").format("MM-DD-YYYY"),endDate:s().utc().endOf("day").format("MM-DD-YYYY")};case"yesterday":return{startDate:s().subtract(1,"days").utc().startOf("day").format("MM-DD-YYYY"),endDate:s().subtract(1,"days").utc().endOf("day").format("MM-DD-YYYY")};case"last7days":return{startDate:s().subtract(7,"days").utc().startOf("day").format("MM-DD-YYYY"),endDate:s().utc().endOf("day").format("MM-DD-YYYY")};case"last30days":return{startDate:s().subtract(30,"days").utc().startOf("day").format("MM-DD-YYYY"),endDate:s().utc().endOf("day").format("MM-DD-YYYY")};case"monthToDate":return{startDate:s().startOf("month").utc().startOf("day").format("MM-DD-YYYY"),endDate:s().utc().endOf("day").format("MM-DD-YYYY")};case"lastMonth":return{startDate:s().subtract(1,"months").startOf("month").utc().startOf("day").format("MM-DD-YYYY"),endDate:s().utc().subtract(1,"months").endOf("month").format("MM-DD-YYYY")}}}},{key:"onPreSetRangeSelectChange",value:function(e){"custom"!==e.value&&(this.preSelectValue=e.value,this.preSelectDates=this.getPreSetDateRange(this.preSelectValue),this.updateDatePickerRange(this.preSelectDates.startDate,this.preSelectDates.endDate),this.emitSelectedRange())}},{key:"updateDatePickerRange",value:function(e,t){this.range.patchValue({startDate:s(e,"MM-DD-YYYY").toDate(),endDate:s(t,"MM-DD-YYYY").toDate()})}},{key:"changeDatePicker",value:function(){this.range.valid&&(this.selectedRange.startDate=this.range.value.startDate,this.selectedRange.endDate=this.range.value.endDate,this.preSelectValue="custom",this.emitSelectedRange())}},{key:"emitSelectedRange",value:function(){if(this.range.valid){this.selectedRange.startDate=this.range.value.startDate,this.selectedRange.endDate=this.range.value.endDate;var e=this.selectedRange;e.startDate=s(this.selectedRange.startDate).startOf("day").format("MM-DD-YYYY"),e.endDate=s(this.selectedRange.endDate).endOf("day").format("MM-DD-YYYY"),this.onDatesPicked.emit(e)}}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Kb({type:t,selectors:[["app-reporting-filtering"]],outputs:{onDatesPicked:"onDatesPicked"},decls:24,vars:7,consts:[[1,"row"],[1,"col-xl-6"],[1,"card","card-custom","example","example-compact","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label"],[1,"card-body"],[3,"formGroup","rangePicker","dateChange"],["matStartDate","","formControlName","startDate","placeholder","Start date","required",""],["matEndDate","","formControlName","endDate","placeholder","End date","required","",3,"dateChange"],["matSuffix","",3,"for"],["picker",""],[4,"ngIf"],[3,"ngModel","ngModelChange","selectionChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,t){if(1&e&&(i.Wb(0,"div",0),i.Wb(1,"div",1),i.Wb(2,"div",2),i.Wb(3,"div",3),i.Wb(4,"div",4),i.Wb(5,"h2",5),i.Oc(6,"Filter Date Range"),i.Vb(),i.Vb(),i.Vb(),i.Wb(7,"div",6),i.Wb(8,"mat-form-field"),i.Wb(9,"mat-label"),i.Oc(10,"Enter a custom date range"),i.Vb(),i.Wb(11,"mat-date-range-input",7),i.hc("dateChange",(function(){return t.changeDatePicker()})),i.Rb(12,"input",8),i.Wb(13,"input",9),i.hc("dateChange",(function(){return t.changeDatePicker()})),i.Vb(),i.Vb(),i.Rb(14,"mat-datepicker-toggle",10),i.Rb(15,"mat-date-range-picker",null,11),i.Mc(17,b,2,0,"mat-error",12),i.Mc(18,g,2,0,"mat-error",12),i.Vb(),i.Wb(19,"mat-form-field"),i.Wb(20,"mat-label"),i.Oc(21,"Preset Date Range"),i.Vb(),i.Wb(22,"mat-select",13),i.hc("ngModelChange",(function(e){return t.preSelectValue=e}))("selectionChange",(function(e){return t.onPreSetRangeSelectChange(e)})),i.Mc(23,m,2,2,"mat-option",14),i.Vb(),i.Vb(),i.Vb(),i.Vb(),i.Vb(),i.Vb()),2&e){var r=i.Ac(16);i.Db(11),i.rc("formGroup",t.range)("rangePicker",r),i.Db(3),i.rc("for",r),i.Db(3),i.rc("ngIf",t.range.controls.startDate.hasError("matStartDateInvalid")),i.Db(1),i.rc("ngIf",t.range.controls.endDate.hasError("matEndDateInvalid")),i.Db(4),i.rc("ngModel",t.preSelectValue),i.Db(1),i.rc("ngForOf",t.preSetDateRanges)}},directives:[c.c,c.g,l.a,o.r,o.k,l.h,o.d,o.q,o.i,o.x,l.g,l.f,c.j,l.b,h.p,d.a,o.t,h.o,c.b,u.p],styles:[""]}),t}()},"4R8J":function(t,a,n){"use strict";n.r(a),n.d(a,"GoogleSheetReportingModule",(function(){return $}));var i=n("ofXK"),o=n("tyNb"),s=n("fXoL"),c=n("aoJj"),l=n("oabR"),h=n("soTd"),d=n("Dvla"),u=n("lDzL"),b=n("e8Ap");function g(e,t){1&e&&s.Oc(0," Sheet Name ")}function m(e,t){1&e&&s.Oc(0),2&e&&s.Qc(" ",t.value," ")}function f(e,t){1&e&&s.Oc(0," Sheet Url ")}function p(e,t){1&e&&s.Oc(0),2&e&&s.Qc(" ",t.value," ")}function v(e,t){1&e&&s.Oc(0,"Action")}function y(e,t){if(1&e){var r=s.Xb();s.Wb(0,"a",15),s.hc("click",(function(){s.Dc(r);var e=t.row;return s.lc(2).editSheet(e._key)})),s.Rb(1,"span",16),s.Vb(),s.Wb(2,"a",17),s.hc("click",(function(){s.Dc(r);var e=t.row;return s.lc(2).deleteSheet(e._key)})),s.Rb(3,"span",18),s.Vb(),s.Wb(4,"a",19),s.hc("click",(function(){s.Dc(r);var e=t.row;return s.lc(2).copyToGoogleSheetAPIClipboard(e)})),s.Rb(5,"span",20),s.Vb()}if(2&e){var a=t.row;s.Db(1),s.rc("inlineSVG","./assets/media/svg/icons/Communication/Write.svg"),s.Db(2),s.rc("inlineSVG","./assets/media/svg/icons/General/Trash.svg"),s.Db(2),s.rc("inlineSVG",a.copy?"./assets/media/svg/icons/General/copied.svg":"./assets/media/svg/icons/General/Clipboard.svg")}}function D(e,t){if(1&e&&(s.Wb(0,"div",2),s.Wb(1,"div",3),s.Wb(2,"div",4),s.Wb(3,"div",5),s.Wb(4,"div",6),s.Wb(5,"h3",7),s.Oc(6,"Google Sheet Reporting"),s.Vb(),s.Vb(),s.Vb(),s.Wb(7,"div",8),s.Wb(8,"ngx-datatable",9),s.Wb(9,"ngx-datatable-column",10),s.Mc(10,g,1,0,"ng-template",11),s.Mc(11,m,1,1,"ng-template",12),s.Vb(),s.Wb(12,"ngx-datatable-column",13),s.Mc(13,f,1,0,"ng-template",11),s.Mc(14,p,1,1,"ng-template",12),s.Vb(),s.Wb(15,"ngx-datatable-column",14),s.Mc(16,v,1,0,"ng-template",11),s.Mc(17,y,6,3,"ng-template",12),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb()),2&e){var r=s.lc();s.Db(8),s.rc("rows",r.rows)("columnMode","force")("loadingIndicator",r.loadingIndicator)("footerHeight",50)("rowHeight",50)("scrollbarH",!0)("headerHeight",50)("limit",10),s.Db(1),s.rc("width",150),s.Db(6),s.rc("width",100)}}function S(e,t){1&e&&(s.Wb(0,"div",21),s.Wb(1,"div",22),s.Wb(2,"p",23),s.Oc(3," How did you get here "),s.Vb(),s.Wb(4,"p",24),s.Oc(5," Sorry you can't access the page you're looking for. "),s.Vb(),s.Wb(6,"p",25),s.Oc(7," There may be a misspelling in the URL entered,"),s.Rb(8,"br"),s.Oc(9,"or the page you are looking for may no longer exist. "),s.Vb(),s.Vb(),s.Vb())}var V,w,k=((w=function(){function t(r,a,n,i,o,s){e(this,t),this.googlesheetService=r,this.cdr=a,this.router=n,this.userService=i,this.notification=o,this.clipboardService=s,this.loadingIndicator=!0,this.hidden=!1}return r(t,[{key:"ngOnInit",value:function(){var e=this;this.localStorageCompany=this.getSelectedCompanyFromLocalStorage(),this.localStorageCompany?this.hidden=!1:(this.hidden=!0,this.notification.showError("Please select your Company!","")),this.googlesheetService.getSheetList().subscribe((function(t){e.rows=t,e.loadingIndicator=!1,e.cdr.detectChanges()}),(function(t){e.notification.showError(t.error,"")}))}},{key:"editSheet",value:function(e){this.router.navigateByUrl("/google-sheet-reporting/edit/"+e)}},{key:"getSelectedCompanyFromLocalStorage",value:function(){return this.userService.getSelectedCompanyFromLocalStorage()}},{key:"deleteSheet",value:function(e){var t=this;window.confirm("Do you want to go ahead?")&&this.googlesheetService.deleteSheet(e).subscribe((function(e){t.router.navigate(["/google-sheet-reporting/all-sheets"]).then((function(){window.location.reload()})),t.notification.showSuccess("Successfully deleted sheet.","")}),(function(e){console.log(e),t.notification.showError("Error deleting sheet: "+e,"")}))}},{key:"copyToGoogleSheetAPIClipboard",value:function(e){var t=this,r=e.sheetUrl.split("/")&&e.sheetUrl.split("/")[5]?e.sheetUrl.split("/")[5]:"";e.copy=!0,this.clipboardService.copyFromContent("http://api.nextsys.io/api/googlesheet/".concat(r,"/stats?startDate=MM/DD/YYYY&endDate=MM/DD/YYYY")),setTimeout((function(){e.copy=!1,t.cdr.detectChanges()}),3e3)}}]),t}()).\u0275fac=function(e){return new(e||w)(s.Qb(c.a),s.Qb(s.i),s.Qb(o.h),s.Qb(l.a),s.Qb(h.a),s.Qb(d.b))},w.\u0275cmp=s.Kb({type:w,selectors:[["app-all-sheets"]],decls:2,vars:2,consts:[["class","row",4,"ngIf"],["class","error error-3 d-flex flex-row-fluid bgi-size-cover bgi-position-center","style","background-image: url('./assets/media/error/bg3.jpg'); height: 100%;zoom: 1;\n    display: block;\n    min-height: 80vh;\n    font-size: 14px;\n    line-height: 1.4;\n    color: #0e1724;",4,"ngIf"],[1,"row"],[1,"col-xl-12"],[1,"card","card-custom","example","example-compact","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label"],[1,"card-body"],[1,"material","fullscreen",3,"rows","columnMode","loadingIndicator","footerHeight","rowHeight","scrollbarH","headerHeight","limit"],["name","SheetName",3,"width"],["ngx-datatable-header-template",""],["ngx-datatable-cell-template",""],["name","SheetUrl"],["name","id",3,"width"],["title","Edit Sheet",1,"btn","btn-icon","btn-light","btn-hover-primary","btn-sm","mx-2",3,"click"],["cacheSVG","true",1,"svg-icon","svg-icon-md","svg-icon-primary",3,"inlineSVG"],["title","Delete Sheet",1,"btn","btn-icon","btn-light","btn-hover-danger","btn-sm","mx-2",3,"click"],["cacheSVG","false",1,"svg-icon","svg-icon-md","svg-icon-danger",3,"inlineSVG"],["title","COPY GOOGLE SHEET API",1,"btn","btn-icon","btn-light","btn-hover-info","btn-sm","mx-2",3,"click"],["cacheSVG","false",1,"svg-icon","svg-icon-md","svg-icon-info",3,"inlineSVG"],[1,"error","error-3","d-flex","flex-row-fluid","bgi-size-cover","bgi-position-center",2,"background-image","url('./assets/media/error/bg3.jpg')","height","100%","zoom","1","display","block","min-height","80vh","font-size","14px","line-height","1.4","color","#0e1724"],[1,"px-10","px-md-30","py-10","py-md-0","d-flex","flex-column","justify-content-md-center"],[1,"display-4","font-weight-boldest","text-white","mb-12"],[1,"font-size-h1","font-weight-boldest","text-dark-75"],[1,"font-size-h4","line-height-md"]],template:function(e,t){1&e&&(s.Mc(0,D,18,10,"div",0),s.Mc(1,S,10,0,"div",1)),2&e&&(s.rc("ngIf",!t.hidden),s.Db(1),s.rc("ngIf",t.hidden))},directives:[i.p,u.d,u.b,u.c,u.a,b.a],styles:[""]}),w),W=((V=function(){function t(){e(this,t)}return r(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(e){return new(e||V)},V.\u0275cmp=s.Kb({type:V,selectors:[["app-google-sheet-reporting"]],decls:1,vars:0,template:function(e,t){1&e&&s.Rb(0,"router-outlet")},directives:[o.l],styles:[""]}),V),x=n("3Pt+"),O=n("kmnG"),M=n("qFsG"),Y=n("bTqV");function R(e,t){1&e&&(s.Wb(0,"mat-error"),s.Oc(1,"Sheet Name is required. "),s.Vb())}function I(e,t){1&e&&(s.Wb(0,"mat-error"),s.Oc(1,"Sheet Url is required. "),s.Vb())}function G(e,t){if(1&e){var r=s.Xb();s.Wb(0,"form",2),s.hc("submit",(function(){return s.Dc(r),s.lc().submitHandle()})),s.Wb(1,"div",3),s.Wb(2,"div",4),s.Wb(3,"div",3),s.Wb(4,"div",5),s.Wb(5,"div",6),s.Wb(6,"div",7),s.Wb(7,"div",8),s.Wb(8,"h3",9),s.Oc(9,"Create New Google Sheet"),s.Vb(),s.Vb(),s.Vb(),s.Wb(10,"div",10),s.Oc(11),s.mc(12,"json"),s.Wb(13,"div",11),s.Wb(14,"div",12),s.Wb(15,"mat-form-field"),s.Rb(16,"input",13),s.Mc(17,R,2,0,"mat-error",14),s.Vb(),s.Vb(),s.Vb(),s.Wb(18,"div",11),s.Wb(19,"div",12),s.Wb(20,"mat-form-field"),s.Rb(21,"input",15),s.Wb(22,"mat-hint",16),s.Oc(23,"e.g. https://docs.google.com/spreadsheets/d/1taJZ7W-sds54"),s.Vb(),s.Mc(24,I,2,0,"mat-error",14),s.Vb(),s.Vb(),s.Vb(),s.Wb(25,"div",17),s.Wb(26,"div",12),s.Wb(27,"button",18),s.Oc(28,"Save"),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb()}if(2&e){var a=s.lc();s.rc("formGroup",a.sheetFG),s.Db(11),s.Qc(" ",s.nc(12,4,a.sheetFG.value)," "),s.Db(6),s.rc("ngIf",null==a.sheetFG.get("sheetName").errors?null:a.sheetFG.get("sheetName").errors.required),s.Db(7),s.rc("ngIf",null==a.sheetFG.get("sheetUrl").errors?null:a.sheetFG.get("sheetUrl").errors.required)}}function C(e,t){1&e&&(s.Wb(0,"div",19),s.Wb(1,"div",20),s.Wb(2,"p",21),s.Oc(3," How did you get here "),s.Vb(),s.Wb(4,"p",22),s.Oc(5," Sorry you can't access the page you're looking for. "),s.Vb(),s.Wb(6,"p",23),s.Oc(7," There may be a misspelling in the URL entered,"),s.Rb(8,"br"),s.Oc(9,"or the page you are looking for may no longer exist. "),s.Vb(),s.Vb(),s.Vb())}var F,z=((F=function(){function t(r,a,n,i){e(this,t),this.userService=r,this.googleSheetReportingServie=a,this.router=n,this.notification=i,this.hidden=!1,this.localStorageCompany=this.getSelectedCompanyFromLocalStorage()}return r(t,[{key:"ngOnInit",value:function(){this.localStorageCompany?this.hidden=!1:(this.hidden=!0,this.notification.showError("Please select your Company!","")),this.sheetFG=new x.j({sheetName:new x.g("",x.z.required),sheetUrl:new x.g("",x.z.required)})}},{key:"submitHandle",value:function(){var e=this;this.sheetFG.markAllAsTouched(),this.sheetFG.valid&&this.googleSheetReportingServie.addSheet(this.sheetFG.value).subscribe((function(t){e.notification.showSuccess("Successfully added a new Sheet.",""),e.router.navigate(["/google-sheet-reporting/all-sheets"])}),(function(t){e.notification.showError(JSON.stringify(t.error),"")}))}},{key:"getSelectedCompanyFromLocalStorage",value:function(){return this.userService.getSelectedCompanyFromLocalStorage()}}]),t}()).\u0275fac=function(e){return new(e||F)(s.Qb(l.a),s.Qb(c.a),s.Qb(o.h),s.Qb(h.a))},F.\u0275cmp=s.Kb({type:F,selectors:[["app-new-sheet"]],viewQuery:function(e,t){var r;1&e&&s.Tc(x.k,!0),2&e&&s.zc(r=s.ic())&&(t.formGroupDirective=r.first)},decls:2,vars:2,consts:[["class","example-container",3,"formGroup","submit",4,"ngIf"],["class","error error-3 d-flex flex-row-fluid bgi-size-cover bgi-position-center","style","background-image: url('./assets/media/error/bg3.jpg'); height: 100%;zoom: 1;\n  display: block;\n  min-height: 80vh;\n  font-size: 14px;\n  line-height: 1.4;\n  color: #0e1724;",4,"ngIf"],[1,"example-container",3,"formGroup","submit"],[1,"row"],[1,"col-xl-8"],[1,"col-xl-12"],[1,"card","card-custom","example","example-compact","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label"],[1,"card-body"],[1,"row","pb-2","pt-2"],[1,"col-md-12"],["matInput","","formControlName","sheetName","placeholder","Sheet Name"],[4,"ngIf"],["matInput","","formControlName","sheetUrl","placeholder","Sheet Url","type","url"],["align","start"],[1,"row","pt-2"],["mat-raised-button","","color","primary","type","submit",1,"save-button"],[1,"error","error-3","d-flex","flex-row-fluid","bgi-size-cover","bgi-position-center",2,"background-image","url('./assets/media/error/bg3.jpg')","height","100%","zoom","1","display","block","min-height","80vh","font-size","14px","line-height","1.4","color","#0e1724"],[1,"px-10","px-md-30","py-10","py-md-0","d-flex","flex-column","justify-content-md-center"],[1,"display-4","font-weight-boldest","text-white","mb-12"],[1,"font-size-h1","font-weight-boldest","text-dark-75"],[1,"font-size-h4","line-height-md"]],template:function(e,t){1&e&&(s.Mc(0,G,29,6,"form",0),s.Mc(1,C,10,0,"div",1)),2&e&&(s.rc("ngIf",!t.hidden),s.Db(1),s.rc("ngIf",t.hidden))},directives:[i.p,x.B,x.r,x.k,O.c,M.b,x.d,x.q,x.i,O.f,Y.b,O.b],pipes:[i.j],styles:[""]}),F);function P(e,t){1&e&&(s.Wb(0,"mat-error"),s.Oc(1,"Sheet Name is required. "),s.Vb())}function j(e,t){1&e&&(s.Wb(0,"mat-error"),s.Oc(1,"Sheet Url is required. "),s.Vb())}function N(e,t){if(1&e){var r=s.Xb();s.Wb(0,"form",2),s.hc("submit",(function(){return s.Dc(r),s.lc().submitHandle()})),s.Wb(1,"div",3),s.Wb(2,"div",4),s.Wb(3,"div",3),s.Wb(4,"div",5),s.Wb(5,"div",6),s.Wb(6,"div",7),s.Wb(7,"div",8),s.Wb(8,"h3",9),s.Oc(9,"Edit Google Sheet"),s.Vb(),s.Vb(),s.Vb(),s.Wb(10,"div",10),s.Oc(11),s.mc(12,"json"),s.Wb(13,"div",11),s.Wb(14,"div",12),s.Wb(15,"mat-form-field"),s.Rb(16,"input",13),s.Mc(17,P,2,0,"mat-error",14),s.Vb(),s.Vb(),s.Vb(),s.Wb(18,"div",11),s.Wb(19,"div",12),s.Wb(20,"mat-form-field"),s.Rb(21,"input",15),s.Wb(22,"mat-hint",16),s.Oc(23,"e.g. https://docs.google.com/spreadsheets/d/1taJZ7W-sds54"),s.Vb(),s.Mc(24,j,2,0,"mat-error",14),s.Vb(),s.Vb(),s.Vb(),s.Wb(25,"div",17),s.Wb(26,"div",12),s.Wb(27,"button",18),s.Oc(28,"Save"),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb()}if(2&e){var a=s.lc();s.rc("formGroup",a.editSheetFG),s.Db(11),s.Qc(" ",s.nc(12,4,a.editSheetFG.value)," "),s.Db(6),s.rc("ngIf",null==a.editSheetFG.get("sheetName").errors?null:a.editSheetFG.get("sheetName").errors.required),s.Db(7),s.rc("ngIf",null==a.editSheetFG.get("sheetUrl").errors?null:a.editSheetFG.get("sheetUrl").errors.required)}}function Q(e,t){1&e&&(s.Wb(0,"div",19),s.Wb(1,"div",20),s.Wb(2,"p",21),s.Oc(3," How did you get here "),s.Vb(),s.Wb(4,"p",22),s.Oc(5," Sorry you can't access the page you're looking for. "),s.Vb(),s.Wb(6,"p",23),s.Oc(7," There may be a misspelling in the URL entered,"),s.Rb(8,"br"),s.Oc(9,"or the page you are looking for may no longer exist. "),s.Vb(),s.Vb(),s.Vb())}var U,H,L,T,E=((U=function(){function t(r,a,n,i,o,s){e(this,t),this.cdr=r,this.router=a,this.route=n,this.userService=i,this.notification=o,this.googleSheetReportingServie=s,this.hidden=!1,this.localStorageCompany=this.getSelectedCompanyFromLocalStorage()}return r(t,[{key:"ngOnInit",value:function(){var e=this;this.localStorageCompany?this.hidden=!1:(this.hidden=!0,this.notification.showError("Please select your Company!","")),this.editSheetFG=new x.j({sheetName:new x.g("",x.z.required),sheetUrl:new x.g("",x.z.required)}),this.route.snapshot.params.id&&this.googleSheetReportingServie.getOneSheet(this.route.snapshot.params.id).subscribe((function(t){e.sheet=t,e.editSheetFG.setValue({sheetName:t.sheetName,sheetUrl:t.sheetUrl})}))}},{key:"getSelectedCompanyFromLocalStorage",value:function(){return this.userService.getSelectedCompanyFromLocalStorage()}},{key:"submitHandle",value:function(){var e=this;this.editSheetFG.markAllAsTouched(),this.editSheetFG.valid&&(this.sheet=Object.assign(Object.assign({},this.sheet),this.editSheetFG.value),this.googleSheetReportingServie.updateSheet(this.sheet).subscribe((function(t){e.notification.showSuccess("Successfully updated the Sheet.","")}),(function(t){e.notification.showError("Error updating sheet: "+t.statusText,"")})))}}]),t}()).\u0275fac=function(e){return new(e||U)(s.Qb(s.i),s.Qb(o.h),s.Qb(o.a),s.Qb(l.a),s.Qb(h.a),s.Qb(c.a))},U.\u0275cmp=s.Kb({type:U,selectors:[["app-edit-sheet"]],viewQuery:function(e,t){var r;1&e&&s.Tc(x.k,!0),2&e&&s.zc(r=s.ic())&&(t.formGroupDirective=r.first)},decls:2,vars:2,consts:[["class","example-container",3,"formGroup","submit",4,"ngIf"],["class","error error-3 d-flex flex-row-fluid bgi-size-cover bgi-position-center","style","background-image: url('./assets/media/error/bg3.jpg'); height: 100%;zoom: 1;\n  display: block;\n  min-height: 80vh;\n  font-size: 14px;\n  line-height: 1.4;\n  color: #0e1724;",4,"ngIf"],[1,"example-container",3,"formGroup","submit"],[1,"row"],[1,"col-xl-8"],[1,"col-xl-12"],[1,"card","card-custom","example","example-compact","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label"],[1,"card-body"],[1,"row","pb-2","pt-2"],[1,"col-md-12"],["matInput","","formControlName","sheetName","placeholder","Sheet Name"],[4,"ngIf"],["matInput","","formControlName","sheetUrl","placeholder","Sheet Url","type","url"],["align","start"],[1,"row","pt-2"],["mat-raised-button","","color","primary","type","submit",1,"save-button"],[1,"error","error-3","d-flex","flex-row-fluid","bgi-size-cover","bgi-position-center",2,"background-image","url('./assets/media/error/bg3.jpg')","height","100%","zoom","1","display","block","min-height","80vh","font-size","14px","line-height","1.4","color","#0e1724"],[1,"px-10","px-md-30","py-10","py-md-0","d-flex","flex-column","justify-content-md-center"],[1,"display-4","font-weight-boldest","text-white","mb-12"],[1,"font-size-h1","font-weight-boldest","text-dark-75"],[1,"font-size-h4","line-height-md"]],template:function(e,t){1&e&&(s.Mc(0,N,29,6,"form",0),s.Mc(1,Q,10,0,"div",1)),2&e&&(s.rc("ngIf",!t.hidden),s.Db(1),s.rc("ngIf",t.hidden))},directives:[i.p,x.B,x.r,x.k,O.c,M.b,x.d,x.q,x.i,O.f,Y.b,O.b],pipes:[i.j],styles:[""]}),U),q=n("mrSG"),K=n("/X+5"),A=["expandableTable"],X=[{path:"",component:W,children:[{path:"all-sheets",component:k},{path:"new-sheet",component:z},{path:"edit/:id",component:E,pathMatch:"full"},{path:"sheet/:sheetId",component:(H=function(){function t(r,a,n,i,o){e(this,t),this.route=r,this.userService=a,this.cdr=n,this.googleSheetReportingService=i,this.notification=o,this.loadingIndicator=!0,this.sheetData=[],this.range={startDate:"",endDate:""},this.rows=[],this.columns=[],this.selectedCompany=this.getSelectedCompanyFromLocalStorage()}return r(t,[{key:"ngAfterViewInit",value:function(){return Object(q.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.loadingIndicator=!0,this.route.params.subscribe((function(e){return Object(q.a)(t,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.googlesheetId=e.sheetId,this.sheetData=[],t.next=4,this.getSheetInformation(this.googlesheetId,this.range.startDate,this.range.endDate);case 4:this.sheetData=t.sent,this.columns=Object.keys(this.sheetData[0]).map((function(e){return{prop:e}})),this.cdr.markForCheck();case 7:case"end":return t.stop()}}),t,this)})))}));case 1:case"end":return e.stop()}}),e,this)})))}},{key:"getSelectedCompanyFromLocalStorage",value:function(){return this.userService.getSelectedCompanyFromLocalStorage()}},{key:"sheetFiltering",value:function(e){return Object(q.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var r=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.loadingIndicator=!0,this.range=e,this.sheetData=[],this.route.params.subscribe((function(e){return Object(q.a)(r,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.sheetData=[],t.next=3,this.getSheetInformation(e.sheetId,this.range.startDate,this.range.endDate);case 3:this.sheetData=t.sent,this.columns=Object.keys(this.sheetData[0]).map((function(e){return{prop:e}})),this.cdr.markForCheck();case 6:case"end":return t.stop()}}),t,this)})))}));case 1:case"end":return t.stop()}}),t,this)})))}},{key:"getSheetInformation",value:function(e,t,r){var a=this;return this.loadingIndicator=!0,this.googleSheetReportingService.getSheetData(e,t,r).toPromise().then((function(e){return a.loadingIndicator=!1,e})).catch((function(e){return e}))}}]),t}(),H.\u0275fac=function(e){return new(e||H)(s.Qb(o.a),s.Qb(l.a),s.Qb(s.i),s.Qb(c.a),s.Qb(h.a))},H.\u0275cmp=s.Kb({type:H,selectors:[["app-sheet"]],viewQuery:function(e,t){var r;1&e&&s.Tc(A,!0),2&e&&s.zc(r=s.ic())&&(t.table=r.first)},decls:2,vars:9,consts:[[3,"onDatesPicked"],[1,"material","fullscreen","expandable",2,"top","10px","height","500px",3,"loadingIndicator","rows","columns","columnMode","headerHeight","footerHeight","scrollbarV","scrollbarH","rowHeight"]],template:function(e,t){1&e&&(s.Wb(0,"app-reporting-filtering",0),s.hc("onDatesPicked",(function(e){return t.sheetFiltering(e)})),s.Vb(),s.Rb(1,"ngx-datatable",1)),2&e&&(s.Db(1),s.rc("loadingIndicator",t.loadingIndicator)("rows",t.sheetData)("columns",t.columns)("columnMode","force")("headerHeight",50)("footerHeight",0)("scrollbarV",!0)("scrollbarH",!0)("rowHeight",50))},directives:[K.a,u.d],styles:[""]}),H),pathMatch:"full"},{path:"",redirectTo:"",pathMatch:"full"},{path:"**",redirectTo:"",pathMatch:"full"}]}],J=((L=function t(){e(this,t)}).\u0275mod=s.Ob({type:L}),L.\u0275inj=s.Nb({factory:function(e){return new(e||L)},imports:[[o.k.forChild(X)],o.k]}),L),B=n("NFeN"),Z=n("iadO"),_=n("UKGz"),$=((T=function t(){e(this,t)}).\u0275mod=s.Ob({type:T}),T.\u0275inj=s.Nb({factory:function(e){return new(e||T)},imports:[[i.c,J,x.m,x.w,O.e,M.c,Y.c,Z.e,B.b,u.g,_.a,b.b.forRoot()]]}),T)},UKGz:function(t,r,a){"use strict";a.d(r,"a",(function(){return b}));var n=a("ofXK"),i=a("3Pt+"),o=a("d3UM"),s=a("FKr1"),c=a("iadO"),l=a("MutI"),h=a("kmnG"),d=a("e8Ap"),u=a("fXoL"),b=function(){var t=function t(){e(this,t)};return t.\u0275mod=u.Ob({type:t}),t.\u0275inj=u.Nb({factory:function(e){return new(e||t)},imports:[[n.c,i.w,i.m,h.e,s.n,o.b,s.q,c.e,l.d,d.b]]}),t}()}}])}();