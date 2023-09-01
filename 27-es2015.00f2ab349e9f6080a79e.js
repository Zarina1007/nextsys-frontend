(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"5MAs":function(t,e,n){"use strict";n.r(e),n.d(e,"ApiDocumentationModule",(function(){return y}));var i=n("ofXK"),o=n("tyNb"),c=n("fXoL");let a=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Kb({type:t,selectors:[["app-api-documentation"]],decls:1,vars:0,template:function(t,e){1&t&&c.Rb(0,"router-outlet")},directives:[o.l],styles:[""]}),t})();var r=n("+BVi");let s=(()=>{class t{constructor(t){this.authService=t}ngOnInit(){this.currentUser=this.authService.currentUserValue,this.userApiKey=this.currentUser.apiKey}}return t.\u0275fac=function(e){return new(e||t)(c.Qb(r.a))},t.\u0275cmp=c.Kb({type:t,selectors:[["app-superadmin-documentation"]],decls:10,vars:1,consts:[[1,"contents__box","contents__box--right"],[1,"section"],[1,"section-head"],[1,"section-content"],[1,"text-dark",2,"font-size","1.25rem"]],template:function(t,e){1&t&&(c.Wb(0,"div",0),c.Wb(1,"div",1),c.Wb(2,"h3",2),c.Oc(3,"Super Admin API Documentation"),c.Vb(),c.Wb(4,"div",3),c.Wb(5,"div"),c.Wb(6,"span",4),c.Oc(7,"API Key : "),c.Vb(),c.Wb(8,"span",4),c.Oc(9),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb()),2&t&&(c.Db(9),c.Pc(e.userApiKey))},styles:["@media screen and (max-width:1280px){.contents__box[_ngcontent-%COMP%]{width:100%}}.section[_ngcontent-%COMP%]{width:100%}.section[_ngcontent-%COMP%]   .section-head[_ngcontent-%COMP%]{font-weight:600;font-size:28px;margin-bottom:40px;padding:0;color:#333}.section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]{color:#6f728d;margin-bottom:20px}.contents__box[_ngcontent-%COMP%]{padding:40px;width:900px;border-radius:5px;background-color:#fff;-o-box-shadow:0 0 15px 0 hsla(0,0%,86.3%,.4);box-shadow:0 0 15px 0 hsla(0,0%,86.3%,.4)}"]}),t})();var p=n("oabR"),b=n("Dvla"),d=n("e8Ap");function l(t,e){if(1&t){const t=c.Xb();c.Wb(0,"span",13),c.hc("click",(function(){c.Dc(t);const e=c.lc().$implicit,n=c.lc();return n.openClipBoard(n.userApiKey,e)})),c.Vb()}2&t&&c.rc("inlineSVG","./assets/media/svg/icons/General/Clipboard.svg")}function h(t,e){1&t&&c.Rb(0,"span",14),2&t&&c.rc("inlineSVG","./assets/media/svg/icons/General/Clip.svg")}function u(t,e){if(1&t&&(c.Wb(0,"div",8),c.Wb(1,"a",9),c.Wb(2,"span"),c.Oc(3),c.Vb(),c.Vb(),c.Wb(4,"a",10),c.Mc(5,l,1,1,"span",11),c.Mc(6,h,1,1,"span",12),c.Vb(),c.Vb()),2&t){const t=e.$implicit,n=c.lc();c.Db(1),c.rc("href","http://api.nextsys.io/api/publisher/reporting/api?apiKey="+n.userApiKey+"&tag="+t.tagKey+"&startDate="+n.beforeDate+"&endDate="+n.currentDate+"&reportType=csv",c.Fc),c.Db(2),c.Sc(" http://api.nextsys.io/api/publisher/reporting/api?apiKey=",n.userApiKey,"&tag=",t.tagKey,"&startDate=",n.beforeDate,"&endDate=",n.currentDate,"&reportType=csv "),c.Db(2),c.rc("ngIf",!t.copy),c.Db(1),c.rc("ngIf",t.copy)}}const g=[{path:"",component:a,children:[{path:"superadmin-documentation",component:s},{path:"publisher-documentation",component:(()=>{class t{constructor(t,e,n,i,o){this.authService=t,this.userService=e,this.cdr=n,this.clipboardService=i,this.datePipe=o,this.tagIds=[];const c=new Date,a=new Date(c.getTime()-2592e6);this.currentDate=this.datePipe.transform(c,"MM-dd-yyyy"),this.beforeDate=this.datePipe.transform(a,"MM-dd-yyyy")}ngOnInit(){this.selectedCompany=this.getSelectedCompanyFromLocalStorage(),this.currentUser=this.authService.currentUserValue,this.userApiKey=this.currentUser.apiKey,this.tagIds=this.currentUser.tagsId[this.selectedCompany]?this.currentUser.tagsId[this.selectedCompany].map(t=>({tagKey:t.split("/")[1],copy:!1})):[]}openClipBoard(t,e){e.copy=!e.copy,this.clipboardService.copyFromContent(`http://api.nextsys.io/api/publisher/reporting/api?apiKey=${t}&tag=${e.tagKey}&startDate=${this.beforeDate}&endDate=${this.currentDate}&reportType=csv`),setTimeout(()=>{e.copy=!e.copy,this.cdr.detectChanges()},3e3),this.cdr.detectChanges()}getSelectedCompanyFromLocalStorage(){return this.userService.getSelectedCompanyFromLocalStorage()}}return t.\u0275fac=function(e){return new(e||t)(c.Qb(r.a),c.Qb(p.a),c.Qb(c.i),c.Qb(b.b),c.Qb(i.f))},t.\u0275cmp=c.Kb({type:t,selectors:[["app-publisher-documentation"]],decls:42,vars:2,consts:[[1,"contents__box","contents__box--right"],[1,"section"],[1,"section-head"],[1,"section-content"],[1,"hljs","bash"],[1,"hljs-built_in"],[1,"hljs-built"],["class","available-api",4,"ngFor","ngForOf"],[1,"available-api"],["target","_blank",1,"available-api-a",3,"href"],["title","Copy API",1,"btn","btn-sm"],["cacheSVG","true","class","svg-icon svg-icon-md svg-icon-primary",3,"inlineSVG","click",4,"ngIf"],["cacheSVG","true","class","svg-icon svg-icon-md svg-icon-primary",3,"inlineSVG",4,"ngIf"],["cacheSVG","true",1,"svg-icon","svg-icon-md","svg-icon-primary",3,"inlineSVG","click"],["cacheSVG","true",1,"svg-icon","svg-icon-md","svg-icon-primary",3,"inlineSVG"]],template:function(t,e){1&t&&(c.Wb(0,"div",0),c.Wb(1,"div",1),c.Wb(2,"h3",2),c.Oc(3,"API Documentation"),c.Vb(),c.Wb(4,"div",3),c.Wb(5,"ol"),c.Wb(6,"li"),c.Wb(7,"p"),c.Oc(8,"API Link"),c.Vb(),c.Wb(9,"pre"),c.Wb(10,"code",4),c.Wb(11,"span",5),c.Oc(12,"http://api.nextsys.io/api/publisher/reporting/api?apiKey=PUBLISHER_API_KEY&tag=TAG_ID&startDate=MM-DD-YYYY&endDate=MM-DD-YYYY"),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Wb(13,"li"),c.Wb(14,"p"),c.Oc(15,"Parameters"),c.Vb(),c.Wb(16,"pre"),c.Wb(17,"code",4),c.Wb(18,"span",5),c.Wb(19,"span",6),c.Oc(20,"apiKey(required):"),c.Vb(),c.Oc(21),c.Vb(),c.Wb(22,"span",5),c.Wb(23,"span",6),c.Oc(24,"tag(required):"),c.Vb(),c.Oc(25," Tag ID"),c.Vb(),c.Wb(26,"span",5),c.Wb(27,"span",6),c.Oc(28,"startDate(required):"),c.Vb(),c.Oc(29," MM-DD-YYYY"),c.Vb(),c.Wb(30,"span",5),c.Wb(31,"span",6),c.Oc(32,"endDate(required):"),c.Vb(),c.Oc(33," MM-DD-YYYY"),c.Vb(),c.Wb(34,"span",5),c.Wb(35,"span",6),c.Oc(36,"reportFormat(optional):"),c.Vb(),c.Oc(37," csv, json"),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Wb(38,"li"),c.Wb(39,"p"),c.Oc(40,"The Available Request API"),c.Vb(),c.Mc(41,u,7,7,"div",7),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb()),2&t&&(c.Db(21),c.Qc(" ",e.userApiKey,""),c.Db(20),c.rc("ngForOf",e.tagIds))},directives:[i.o,i.p,d.a],styles:["@media screen and (max-width:1280px){.contents__box[_ngcontent-%COMP%]{width:100%}}.section[_ngcontent-%COMP%]{width:100%}.section[_ngcontent-%COMP%]   .section-head[_ngcontent-%COMP%]{font-weight:600;font-size:28px;margin-bottom:40px;padding:0;color:#333}.section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]{color:#6f728d;margin-bottom:20px}.contents__box[_ngcontent-%COMP%]{padding:40px;width:900px;border-radius:5px;background-color:#fff;-o-box-shadow:0 0 15px 0 hsla(0,0%,86.3%,.4);box-shadow:0 0 15px 0 hsla(0,0%,86.3%,.4)}.hljs[_ngcontent-%COMP%]{display:block;overflow-x:auto;padding:.5em;background:#232323;color:#e6e1dc;padding:10px 20px!important;border-radius:3px}pre[_ngcontent-%COMP%] > code[_ngcontent-%COMP%]{max-height:500px}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-size:inherit;color:inherit;word-break:normal}.hljs-built_in[_ngcontent-%COMP%]{color:#fff;display:block}.hljs-built[_ngcontent-%COMP%]{color:#6d9cbe}.available-api[_ngcontent-%COMP%]{padding:10px 25px;border-radius:8px;background-color:#232323;display:flex;margin:2px;font-size:10px}.available-api-a[_ngcontent-%COMP%]{color:#fff}"]}),t})()},{path:"",redirectTo:"",pathMatch:"full"},{path:"**",redirectTo:"",pathMatch:"full"}]}];let m=(()=>{class t{}return t.\u0275mod=c.Ob({type:t}),t.\u0275inj=c.Nb({factory:function(e){return new(e||t)},imports:[[o.k.forChild(g)],o.k]}),t})(),y=(()=>{class t{}return t.\u0275mod=c.Ob({type:t}),t.\u0275inj=c.Nb({factory:function(e){return new(e||t)},providers:[i.f],imports:[[i.c,m,d.b]]}),t})()}}]);