!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{vqpL:function(t,n,c){"use strict";c.r(n),c.d(n,"LiveTrafficModule",(function(){return X}));var o=c("ofXK"),r=c("tyNb"),i=c("fXoL"),l=c("lDzL"),u=["expandableTable"];function b(e,t){1&e&&(i.Wb(0,"div",14),i.Wb(1,"div"),i.Wb(2,"strong"),i.Oc(3,"Address"),i.Vb(),i.Vb(),i.Wb(4,"div"),i.Oc(5,"Test"),i.Vb(),i.Vb())}function d(e,t){if(1&e){var a=i.Xb();i.Wb(0,"a",15),i.hc("click",(function(){i.Dc(a);var e=t.row;return i.lc().toggleExpandRow(e)})),i.Vb()}if(2&e){var n=t.expanded;i.Ib("datatable-icon-right",!n)("datatable-icon-down",n)}}function f(e,t){1&e&&i.Oc(0," Date ")}function s(e,t){if(1&e&&(i.Wb(0,"strong"),i.Oc(1),i.Vb()),2&e){var a=t.value;i.Db(1),i.Pc(a)}}function g(e,t){1&e&&i.Oc(0," Publisher ")}function p(e,t){if(1&e&&(i.Wb(0,"strong"),i.Oc(1),i.Vb()),2&e){var a=t.value;i.Db(1),i.Pc(a)}}function m(e,t){1&e&&i.Oc(0," Total Searches ")}function h(e,t){if(1&e&&(i.Wb(0,"strong"),i.Oc(1),i.mc(2,"number"),i.Vb()),2&e){var a=t.value;i.Db(1),i.Pc(i.nc(2,1,a))}}function v(e,t){1&e&&i.Oc(0," Allowed Searches ")}function w(e,t){if(1&e&&(i.Wb(0,"strong"),i.Oc(1),i.mc(2,"number"),i.Vb()),2&e){var a=t.value;i.Db(1),i.Pc(i.nc(2,1,a))}}function y(e,t){1&e&&i.Oc(0," Searches By IP ")}function M(e,t){if(1&e&&(i.Wb(0,"strong"),i.Oc(1),i.mc(2,"number"),i.Vb()),2&e){var a=t.value;i.Db(1),i.Pc(i.nc(2,1,a))}}function V(e,t){1&e&&i.Oc(0," Protected Media ")}function x(e,t){}var W,O,k,H,T=((k=function(){function t(){e(this,t),this.rows=[{date:"11-21-2021",name:"Monetizus",totalSearches:"106321",allowedSearches:"102365",ip:"2.3"},{date:"11-21-2021",name:"Monetizus",totalSearches:"106321",allowedSearches:"102365",ip:"2.3"},{date:"11-21-2021",name:"Monetizus",totalSearches:"106321",allowedSearches:"102365",ip:"2.3"}],this.columns=[{prop:"name"},{name:"Gender"}],this.expanded={}}return a(t,[{key:"ngOnInit",value:function(){}},{key:"toggleExpandRow",value:function(e){console.log("Toggled Expand Row!",e),this.table.rowDetail.toggleExpandRow(e)}},{key:"onDetailToggle",value:function(e){console.log("Detail Toggled",e)}},{key:"updateReportingFiltering",value:function(e){}}]),t}()).\u0275fac=function(e){return new(e||k)},k.\u0275cmp=i.Kb({type:k,selectors:[["app-daily-traffic"]],viewQuery:function(e,t){var a;1&e&&i.Tc(u,!0),2&e&&i.zc(a=i.ic())&&(t.table=a.first)},decls:25,vars:13,consts:[[1,"material","fullscreen","expandable",2,"top","52px",3,"columnMode","headerHeight","footerHeight","rowHeight","scrollbarV","scrollbarH","rows"],["expandableTable",""],[3,"rowHeight","toggle"],["myDetailRow",""],["ngx-datatable-row-detail-template",""],[3,"width","resizeable","sortable","draggable","canAutoResize"],["ngx-datatable-cell-template",""],["name","date"],["ngx-datatable-header-template",""],["name","name"],["name","totalSearches"],["name","allowedSearches"],["name","ip"],["name","link"],[2,"padding-left","35px"],["href","javascript:void(0)","title","Expand/Collapse Row",3,"click"]],template:function(e,t){1&e&&(i.Wb(0,"ngx-datatable",0,1),i.Wb(2,"ngx-datatable-row-detail",2,3),i.hc("toggle",(function(e){return t.onDetailToggle(e)})),i.Mc(4,b,6,0,"ng-template",4),i.Vb(),i.Wb(5,"ngx-datatable-column",5),i.Mc(6,d,1,4,"ng-template",6),i.Vb(),i.Wb(7,"ngx-datatable-column",7),i.Mc(8,f,1,0,"ng-template",8),i.Mc(9,s,2,1,"ng-template",6),i.Vb(),i.Wb(10,"ngx-datatable-column",9),i.Mc(11,g,1,0,"ng-template",8),i.Mc(12,p,2,1,"ng-template",6),i.Vb(),i.Wb(13,"ngx-datatable-column",10),i.Mc(14,m,1,0,"ng-template",8),i.Mc(15,h,3,3,"ng-template",6),i.Vb(),i.Wb(16,"ngx-datatable-column",11),i.Mc(17,v,1,0,"ng-template",8),i.Mc(18,w,3,3,"ng-template",6),i.Vb(),i.Wb(19,"ngx-datatable-column",12),i.Mc(20,y,1,0,"ng-template",8),i.Mc(21,M,3,3,"ng-template",6),i.Vb(),i.Wb(22,"ngx-datatable-column",13),i.Mc(23,V,1,0,"ng-template",8),i.Mc(24,x,0,0,"ng-template",6),i.Vb(),i.Vb()),2&e&&(i.rc("columnMode","force")("headerHeight",50)("footerHeight",0)("rowHeight",50)("scrollbarV",!0)("scrollbarH",!0)("rows",t.rows),i.Db(2),i.rc("rowHeight",100),i.Db(3),i.rc("width",50)("resizeable",!1)("sortable",!1)("draggable",!1)("canAutoResize",!1))},directives:[l.d,l.e,l.f,l.b,l.a,l.c],pipes:[o.g],styles:[""]}),k),D=((O=function(){function t(){e(this,t)}return a(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(e){return new(e||O)},O.\u0275cmp=i.Kb({type:O,selectors:[["app-grafana"]],decls:3,vars:0,consts:[[1,"frame"],["src","https://play.grafana.org/d/000000012/grafana-play-home?orgId=1&embedded=true","frameBorder","0"]],template:function(e,t){1&e&&(i.Wb(0,"div",0),i.Oc(1," https://play.grafana.org/d/000000012/grafana-play-home?orgId=1 "),i.Rb(2,"iframe",1),i.Vb())},styles:[".frame[_ngcontent-%COMP%]{height:100vh;width:100%}.frame[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:100%;height:100%}"]}),O),I=((W=function(){function t(){e(this,t)}return a(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(e){return new(e||W)},W.\u0275cmp=i.Kb({type:W,selectors:[["app-live-traffic"]],decls:1,vars:0,template:function(e,t){1&e&&i.Rb(0,"router-outlet")},directives:[r.l],styles:[""]}),W),P=c("AytR"),S=c("tk/3"),R=P.a.apiUrl+"/traffic-query",Q=((H=function(){function t(a){e(this,t),this.http=a}return a(t,[{key:"getAllTrafficQueries",value:function(){return this.http.get(R)}}]),t}()).\u0275fac=function(e){return new(e||H)(i.ec(S.c))},H.\u0275prov=i.Mb({token:H,factory:H.\u0275fac,providedIn:"root"}),H);function A(e,t){1&e&&i.Oc(0," Query ")}function z(e,t){1&e&&i.Oc(0),2&e&&i.Qc(" ",t.value," ")}function C(e,t){1&e&&i.Oc(0," IP ")}function E(e,t){1&e&&i.Oc(0),2&e&&i.Qc(" ",t.value," ")}var q,K,j,L=[{path:"",component:I,children:[{path:"view-queries",component:(q=function(){function t(a,n){e(this,t),this.trafficService=a,this.cdr=n,this.loadingIndicator=!0}return a(t,[{key:"ngOnInit",value:function(){this.getAllTrafficQuery()}},{key:"getAllTrafficQuery",value:function(){var e=this;this.trafficService.getAllTrafficQueries().subscribe((function(t){e.rows=t,e.loadingIndicator=!1,e.cdr.detectChanges()}))}}]),t}(),q.\u0275fac=function(e){return new(e||q)(i.Qb(Q),i.Qb(i.i))},q.\u0275cmp=i.Kb({type:q,selectors:[["app-view-queries"]],decls:15,vars:8,consts:[[1,"row"],[1,"col-xl-12"],[1,"card","card-custom","example","example-compact","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label"],[1,"card-body"],[1,"material","fullscreen",3,"rows","columnMode","loadingIndicator","footerHeight","rowHeight","scrollbarH","headerHeight","limit"],["name","query"],["ngx-datatable-header-template",""],["ngx-datatable-cell-template",""],["name","ip"]],template:function(e,t){1&e&&(i.Wb(0,"div",0),i.Wb(1,"div",1),i.Wb(2,"div",2),i.Wb(3,"div",3),i.Wb(4,"div",4),i.Wb(5,"h3",5),i.Oc(6,"View All Queries"),i.Vb(),i.Vb(),i.Vb(),i.Wb(7,"div",6),i.Wb(8,"ngx-datatable",7),i.Wb(9,"ngx-datatable-column",8),i.Mc(10,A,1,0,"ng-template",9),i.Mc(11,z,1,1,"ng-template",10),i.Vb(),i.Wb(12,"ngx-datatable-column",11),i.Mc(13,C,1,0,"ng-template",9),i.Mc(14,E,1,1,"ng-template",10),i.Vb(),i.Vb(),i.Vb(),i.Vb(),i.Vb(),i.Vb()),2&e&&(i.Db(8),i.rc("rows",t.rows)("columnMode","force")("loadingIndicator",t.loadingIndicator)("footerHeight",50)("rowHeight",50)("scrollbarH",!0)("headerHeight",50)("limit",10))},directives:[l.d,l.b,l.c,l.a],styles:[""]}),q)},{path:"daily-traffic",component:T},{path:"grafana",component:D},{path:"",redirectTo:"",pathMatch:"full"},{path:"**",redirectTo:"",pathMatch:"full"}]}],N=((j=function t(){e(this,t)}).\u0275mod=i.Ob({type:j}),j.\u0275inj=i.Nb({factory:function(e){return new(e||j)},imports:[[r.k.forChild(L)],r.k]}),j),X=((K=function t(){e(this,t)}).\u0275mod=i.Ob({type:K}),K.\u0275inj=i.Nb({factory:function(e){return new(e||K)},imports:[[o.c,N,l.g]]}),K)}}])}();