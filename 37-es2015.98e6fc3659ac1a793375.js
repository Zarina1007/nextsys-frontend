(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{Ntm9:function(t,e,a){"use strict";a.r(e),a.d(e,"PublisherReportingModule",(function(){return H}));var i=a("ofXK"),s=a("tyNb"),r=a("fXoL");let l=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Kb({type:t,selectors:[["app-publisher-reporting"]],decls:1,vars:0,template:function(t,e){1&t&&r.Rb(0,"router-outlet")},directives:[s.l],styles:[""]}),t})();var n=a("mrSG"),h=a("3awX"),u=a("oabR"),c=a("0TA1"),d=a("d9f2"),o=a("uJD8"),b=a("2Q/2"),p=a("Wxo5"),g=a("mPAa"),f=a("m5p0"),m=a("aNep"),v=a("SHm6"),D=a("/X+5"),S=a("lDzL"),C=a("PTT0");const y=["expandableTable"];function x(t,e){if(1&t&&r.Rb(0,"app-reporting-publisher-revenue-chart",18),2&t){const t=r.lc();r.rc("chartData",t.chartData)}}function P(t,e){1&t&&(r.Wb(0,"div",19),r.Wb(1,"div"),r.Wb(2,"strong"),r.Oc(3,"Address"),r.Vb(),r.Vb(),r.Wb(4,"div"),r.Oc(5,"Test"),r.Vb(),r.Vb())}function A(t,e){if(1&t){const t=r.Xb();r.Wb(0,"a",20),r.hc("click",(function(){r.Dc(t);const a=e.row;return r.lc().toggleExpandRow(a)})),r.Vb()}if(2&t){const t=e.expanded;r.Ib("datatable-icon-right",!t)("datatable-icon-down",t)}}function T(t,e){1&t&&r.Oc(0," Date ")}function W(t,e){if(1&t&&(r.Wb(0,"strong"),r.Oc(1),r.mc(2,"date"),r.Vb()),2&t){const t=e.value;r.Db(1),r.Pc(r.nc(2,1,t))}}function R(t,e){1&t&&r.Oc(0," Subid ")}function V(t,e){if(1&t&&(r.Wb(0,"strong"),r.Oc(1),r.Vb()),2&t){const t=e.value;r.Db(1),r.Pc(t)}}function w(t,e){1&t&&r.Oc(0," Searches ")}function z(t,e){if(1&t&&(r.Wb(0,"strong"),r.Oc(1),r.Vb()),2&t){const t=e.value;r.Db(1),r.Pc(t)}}function M(t,e){1&t&&r.Oc(0," CPC ")}function I(t,e){if(1&t&&(r.Wb(0,"strong"),r.Oc(1),r.mc(2,"currency"),r.mc(3,"currency"),r.Vb()),2&t){const t=e.value;r.Db(1),r.Pc(r.oc(2,1,t,"USD")||r.oc(3,4,0,"USD"))}}function O(t,e){1&t&&r.Oc(0," CTR ")}function E(t,e){if(1&t&&(r.Wb(0,"strong"),r.Oc(1),r.mc(2,"percent"),r.mc(3,"percent"),r.Vb()),2&t){const t=e.value;r.Db(1),r.Pc(r.oc(2,1,t,"1.2-2")||r.oc(3,4,0,"1.2-2"))}}function B(t,e){1&t&&r.Oc(0," Revenue ")}function Q(t,e){if(1&t&&(r.Wb(0,"strong"),r.Oc(1),r.mc(2,"currency"),r.Vb()),2&t){const t=e.value;r.Db(1),r.Pc(r.oc(2,1,t,"USD"))}}const L=[{path:"",component:l,children:[{path:":tagId",component:(()=>{class t{constructor(t,e,a,i,s,r,l,n,h,u,c,d,o,b,p,g){this.route=t,this.tagManagementService=e,this.cdr=a,this.userService=i,this.perionService=s,this.lyonService=r,this.verizonService=l,this.verizonArbService=n,this.rubiService=h,this.solexbcService=u,this.system1Service=c,this.apptitudeService=d,this.exportDataService=o,this.datePipe=b,this.currencyPipe=p,this.percentPipe=g,this.loadingIndicator=!0,this.range={startDate:"",endDate:""},this.selectedCompany=this.getSelectedCompanyFromLocalStorage()}ngAfterViewInit(){return Object(n.a)(this,void 0,void 0,(function*(){this.route.params.subscribe(t=>Object(n.a)(this,void 0,void 0,(function*(){this.loadingIndicator=!0,this.paramTagId=t.tagId,this.statData=[],this.tagRows=yield this.getTagInformation(t.tagId),this.selectedAdvertiser=this.tagRows.advertiser,this.selectedCompany=this.tagRows.company,"lyons"==this.selectedAdvertiser?(this.chartData=yield this.getLyonChartMetrics(this.selectedCompany,this.range.startDate,this.range.endDate),this.statData=yield this.getAllLyonStats(this.range.startDate,this.range.endDate,this.tagRows)):"perion"==this.selectedAdvertiser?(this.chartData=yield this.getPerionChartMetrics(this.selectedCompany,this.range.startDate,this.range.endDate),this.statData=yield this.getAllPerionStats(this.range.startDate,this.range.endDate,this.tagRows)):"verizon-direct"==this.selectedAdvertiser?(this.chartData=yield this.getVerizonChartMetrics(this.selectedCompany,this.range.startDate,this.range.endDate),this.statData=yield this.getAllVerizonStats(this.range.startDate,this.range.endDate,this.tagRows)):"verizon-direct-arb"==this.selectedAdvertiser?(this.chartData=yield this.getVerizonArbChartMetrics(this.selectedCompany,this.range.startDate,this.range.endDate),this.statData=yield this.getAllVerizonArbStats(this.range.startDate,this.range.endDate,this.tagRows)):"rubi"==this.selectedAdvertiser?(this.chartData=yield this.getRubiChartMetrics(this.selectedCompany,this.range.startDate,this.range.endDate),this.statData=yield this.getRubiAllStats(this.range.startDate,this.range.endDate,this.tagRows)):"solex-bc"==this.selectedAdvertiser?(this.chartData=yield this.getSolexBCChartMetrics(this.selectedCompany,this.range.startDate,this.range.endDate),this.statData=yield this.getSolexBCAllStats(this.range.startDate,this.range.endDate,this.tagRows)):"system1"==this.selectedAdvertiser?(this.chartData=yield this.getSystem1ChartMetrics(this.selectedCompany,this.range.startDate,this.range.endDate),this.statData=yield this.getSystem1AllStats(this.range.startDate,this.range.endDate,this.tagRows)):"apptitude"==this.selectedAdvertiser&&(this.chartData=yield this.getApptitudeChartMetrics(this.selectedCompany,this.range.startDate,this.range.endDate),this.statData=yield this.getApptitudePublisherStats(this.range.startDate,this.range.endDate,this.tagRows)),this.loadingIndicator=!1,this.refreshTable()})))}))}getSelectedCompanyFromLocalStorage(){return this.userService.getSelectedCompanyFromLocalStorage()}toggleExpandRow(t){this.table.rowDetail.toggleExpandRow(t)}onDetailToggle(t){}getTagInformation(t){return this.tagManagementService.getOneTag(t).toPromise().then(t=>t).catch(t=>t)}updateReportingFiltering(t){return Object(n.a)(this,void 0,void 0,(function*(){this.range=t,this.loadingIndicator=!0,this.statData=[],"lyons"==this.selectedAdvertiser?(this.chartData=yield this.getLyonChartMetrics(this.selectedCompany,this.range.startDate,this.range.endDate),this.statData=yield this.getAllLyonStats(this.range.startDate,this.range.endDate,this.tagRows)):"perion"==this.selectedAdvertiser?(this.chartData=yield this.getPerionChartMetrics(this.selectedCompany,this.range.startDate,this.range.endDate),this.statData=yield this.getAllPerionStats(this.range.startDate,this.range.endDate,this.tagRows)):"verizon-direct"==this.selectedAdvertiser?(this.chartData=yield this.getVerizonChartMetrics(this.selectedCompany,this.range.startDate,this.range.endDate),this.statData=yield this.getAllVerizonStats(this.range.startDate,this.range.endDate,this.tagRows)):"verizon-direct-arb"==this.selectedAdvertiser?(this.chartData=yield this.getVerizonArbChartMetrics(this.selectedCompany,this.range.startDate,this.range.endDate),this.statData=yield this.getAllVerizonArbStats(this.range.startDate,this.range.endDate,this.tagRows)):"rubi"==this.selectedAdvertiser?(this.chartData=yield this.getRubiChartMetrics(this.selectedCompany,this.range.startDate,this.range.endDate),this.statData=yield this.getRubiAllStats(this.range.startDate,this.range.endDate,this.tagRows)):"solex-bc"==this.selectedAdvertiser?(this.chartData=yield this.getSolexBCChartMetrics(this.selectedCompany,this.range.startDate,this.range.endDate),this.statData=yield this.getSolexBCAllStats(this.range.startDate,this.range.endDate,this.tagRows)):"system1"==this.selectedAdvertiser?(this.chartData=yield this.getSystem1ChartMetrics(this.selectedCompany,this.range.startDate,this.range.endDate),this.statData=yield this.getSystem1AllStats(this.range.startDate,this.range.endDate,this.tagRows)):"apptitude"==this.selectedAdvertiser&&(this.chartData=yield this.getApptitudeChartMetrics(this.selectedCompany,this.range.startDate,this.range.endDate),this.statData=yield this.getApptitudePublisherStats(this.range.startDate,this.range.endDate,this.tagRows)),this.loadingIndicator=!1,this.refreshTable()}))}getLyonChartMetrics(t,e,a){return this.lyonService.getAllPublisherStats(e,a).toPromise().then(t=>{this.allChart=t;var e=[];for(var a of this.tagRows.subids)"Contains"==a.filterTag?e=e.concat(this.allChart.filter(t=>t.subid.includes(a.subid))):"StartsWith"==a.filterTag?e=e.concat(this.allChart.filter(t=>t.subid.startsWith(a.subid))):"EndsWith"==a.filterTag?e=e.concat(this.allChart.filter(t=>t.subid.endsWith(a.subid))):"ExactValue"==a.filterTag&&(e=e.concat(this.allChart.filter(t=>t.subid==a.subid)));let i=e.filter((t,e,a)=>e===a.findIndex(e=>e.date===t.date&&e.subid===t.subid));i=i.slice().sort((t,e)=>t.date-e.date);var s={},r=i.reduce((function(t,e){var a=e.date;return s[a]?(s[a].searches+=parseInt(e.searches),e.revenue&&(s[a].revenue+=e.revenue)):(s[a]=Object.assign({},e),t.push(s[a])),t}),[]),l=[],n=[],h=[],u=[],c={};for(var d of r)l.push(0),n.push(d.revenue),h.push(d.date),u.push(d.searches);return c.revenuePerDay=l,c.publisherRevenuePerDay=n,c.datesOfRevenue=h,c.searchesPerDay=u,c}).catch(t=>t)}refreshTable(){this.cdr.detectChanges()}exportToCsv(){let t=[];for(var e of this.statData){let a={date:this.datePipe.transform(e.date,"dd MMM yyyy"),subid:e.subid,searches:e.searches,cpc:this.currencyPipe.transform(e.cpc?e.cpc:0),ctr:this.percentPipe.transform(e.ctr,"1.2-2"),revenue:e.revenue};t.push(a)}this.exportDataService.exportToCsv(t,this.tagRows.nickName?this.tagRows.nickName:this.tagRows.name,["date","subid","searches","cpc","ctr","revenue"])}getPerionChartMetrics(t,e,a){return this.perionService.getPerTagPerionStats(this.selectedCompany,e,a).toPromise().then(t=>{this.allPerionChart=t;var e=[];for(var a of this.tagRows.subids)"Contains"==a.filterTag?e=e.concat(this.allPerionChart.filter(t=>t.subid.includes(a.subid))):"StartsWith"==a.filterTag?e=e.concat(this.allPerionChart.filter(t=>t.subid.startsWith(a.subid))):"EndsWith"==a.filterTag?e=e.concat(this.allPerionChart.filter(t=>t.subid.endsWith(a.subid))):"ExactValue"==a.filterTag&&(e=e.concat(this.allPerionChart.filter(t=>t.subid==a.subid)));let i=e.filter((t,e,a)=>e===a.findIndex(e=>e.date===t.date&&e.subid===t.subid));i=i.slice().sort((t,e)=>t.date-e.date);var s={},r=i.reduce((function(t,e){var a=e.date;return s[a]?(s[a].searches+=parseInt(e.impressions),e.revenue&&(s[a].revenue+=e.revenue)):(s[a]=Object.assign({},e),t.push(s[a])),t}),[]),l=[],n=[],h=[],u=[],c={};for(var d of r)l.push(0),n.push(d.revenue),h.push(d.date),u.push(d.impressions);return c.revenuePerDay=l,c.publisherRevenuePerDay=n,c.datesOfRevenue=h,c.searchesPerDay=u,c}).catch(t=>t)}getAllPerionStats(t,e,a){return this.perionService.getPerTagPerionStats(this.selectedCompany,t,e).toPromise().then(t=>{this.allPerionStatData=t;var e=[];for(var i of a.subids)"Contains"==i.filterTag?(e=e.concat(this.allPerionStatData.filter(t=>t.subid.includes(i.subid)))).map(t=>{t.publisher=a.publisher?a.publisher.fullname:"No Publisher"}):"StartsWith"==i.filterTag?(e=e.concat(this.allPerionStatData.filter(t=>t.subid.startsWith(i.subid)))).map(t=>{t.publisher=a.publisher?a.publisher.fullname:"No Publisher"}):"EndsWith"==i.filterTag?(e=e.concat(this.allPerionStatData.filter(t=>t.subid.endsWith(i.subid)))).map(t=>{t.publisher=a.publisher?a.publisher.fullname:"No Publisher"}):"ExactValue"==i.filterTag&&(e=e.concat(this.allPerionStatData.filter(t=>t.subid==i.subid))).map(t=>{t.publisher=a.publisher?a.publisher.fullname:"No Publisher"});return e.filter((t,e,a)=>e===a.findIndex(e=>e.date===t.date&&e.subid===t.subid)).slice().sort((t,e)=>e.date-t.date)}).catch(t=>t)}getAllLyonStats(t,e,a){return this.lyonService.getAllPublisherStats(t,e).toPromise().then(t=>{this.allLyonStatData=t;var e=[];for(var i of a.subids)"Contains"==i.filterTag?(e=e.concat(this.allLyonStatData.filter(t=>t.subid.includes(i.subid)))).map(t=>{t.publisher=a.publisher?a.publisher.fullname:""}):"StartsWith"==i.filterTag?(e=e.concat(this.allLyonStatData.filter(t=>t.subid.startsWith(i.subid)))).map(t=>{t.publisher=a.publisher?a.publisher.fullname:""}):"EndsWith"==i.filterTag?(e=e.concat(this.allLyonStatData.filter(t=>t.subid.endsWith(i.subid)))).map(t=>{t.publisher=a.publisher?a.publisher.fullname:""}):"ExactValue"==i.filterTag&&(e=e.concat(this.allLyonStatData.filter(t=>t.subid==i.subid))).map(t=>{t.publisher=a.publisher?a.publisher.fullname:""});return e.filter((t,e,a)=>e===a.findIndex(e=>e.date===t.date&&e.subid===t.subid)).slice().sort((t,e)=>e.date-t.date)}).catch(t=>t)}getAllVerizonStats(t,e,a){return this.verizonService.getAllPublisherVerizonStats(this.selectedCompany,t,e).toPromise().then(t=>{this.allVerizonStatData=t.stats;var e=[];for(var i of a.subids)"Contains"==i.filterTag?(e=e.concat(this.allVerizonStatData.filter(t=>t.subid.includes(i.subid)))).map(t=>{t.publisher=a.publisher?a.publisher.fullname:"",t.tagname=a.name}):"StartsWith"==i.filterTag?(e=e.concat(this.allVerizonStatData.filter(t=>t.subid.startsWith(i.subid)))).map(t=>{t.publisher=a.publisher?a.publisher.fullname:"",t.tagname=a.name}):"EndsWith"==i.filterTag?(e=e.concat(this.allVerizonStatData.filter(t=>t.subid.endsWith(i.subid)))).map(t=>{t.publisher=a.publisher?a.publisher.fullname:"",t.tagname=a.name}):"ExactValue"==i.filterTag&&(e=e.concat(this.allVerizonStatData.filter(t=>t.subid==i.subid))).map(t=>{t.publisher=a.publisher?a.publisher.fullname:"",t.tagname=a.name});return e.filter((t,e,a)=>e===a.findIndex(e=>e.date===t.date&&e.subid===t.subid)).slice().sort((t,e)=>e.date-t.date)}).catch(t=>t)}getAllVerizonArbStats(t,e,a){return this.verizonArbService.getAllPublisherVerizonArbStats(this.selectedCompany,t,e).toPromise().then(t=>{this.allVerizonArbStatData=t.stats;var e=[];for(var i of a.subids)"Contains"==i.filterTag?(e=e.concat(this.allVerizonArbStatData.filter(t=>t.subid.includes(i.subid)))).map(t=>{t.publisher=a.publisher?a.publisher.fullname:"",t.tagname=a.name}):"StartsWith"==i.filterTag?(e=e.concat(this.allVerizonArbStatData.filter(t=>t.subid.startsWith(i.subid)))).map(t=>{t.publisher=a.publisher?a.publisher.fullname:"",t.tagname=a.name}):"EndsWith"==i.filterTag?(e=e.concat(this.allVerizonArbStatData.filter(t=>t.subid.endsWith(i.subid)))).map(t=>{t.publisher=a.publisher?a.publisher.fullname:"",t.tagname=a.name}):"ExactValue"==i.filterTag&&(e=e.concat(this.allVerizonArbStatData.filter(t=>t.subid==i.subid))).map(t=>{t.publisher=a.publisher?a.publisher.fullname:"",t.tagname=a.name});return e.filter((t,e,a)=>e===a.findIndex(e=>e.date===t.date&&e.subid===t.subid)).slice().sort((t,e)=>e.date-t.date)}).catch(t=>t)}getVerizonChartMetrics(t,e,a){return this.verizonService.getAllPublisherVerizonStats(this.selectedCompany,e,a).toPromise().then(t=>{this.allVerizonChart=t.stats;var e=[];for(var a of this.tagRows.subids)"Contains"==a.filterTag?e=e.concat(this.allVerizonChart.filter(t=>t.subid.includes(a.subid))):"StartsWith"==a.filterTag?e=e.concat(this.allVerizonChart.filter(t=>t.subid.startsWith(a.subid))):"EndsWith"==a.filterTag?e=e.concat(this.allVerizonChart.filter(t=>t.subid.endsWith(a.subid))):"ExactValue"==a.filterTag&&(e=e.concat(this.allVerizonChart.filter(t=>t.subid==a.subid)));let i=e.filter((t,e,a)=>e===a.findIndex(e=>e.date===t.date&&e.subid===t.subid));i=i.slice().sort((t,e)=>t.date-e.date);var s={},r=i.reduce((function(t,e){var a=e.date;return s[a]?(s[a].searches+=parseInt(e.searches),e.revenue&&(s[a].revenue+=e.revenue)):(s[a]=Object.assign({},e),t.push(s[a])),t}),[]),l=[],n=[],h=[],u=[],c={};for(var d of r)l.push(0),n.push(d.revenue),h.push(d.date),u.push(d.searches);return c.revenuePerDay=l,c.publisherRevenuePerDay=n,c.datesOfRevenue=h,c.searchesPerDay=u,c}).catch(t=>t)}getVerizonArbChartMetrics(t,e,a){return this.verizonArbService.getAllPublisherVerizonArbStats(this.selectedCompany,e,a).toPromise().then(t=>{this.allVerizonArbChart=t.stats;var e=[];for(var a of this.tagRows.subids)"Contains"==a.filterTag?e=e.concat(this.allVerizonArbChart.filter(t=>t.subid.includes(a.subid))):"StartsWith"==a.filterTag?e=e.concat(this.allVerizonArbChart.filter(t=>t.subid.startsWith(a.subid))):"EndsWith"==a.filterTag?e=e.concat(this.allVerizonArbChart.filter(t=>t.subid.endsWith(a.subid))):"ExactValue"==a.filterTag&&(e=e.concat(this.allVerizonArbChart.filter(t=>t.subid==a.subid)));let i=e.filter((t,e,a)=>e===a.findIndex(e=>e.date===t.date&&e.subid===t.subid));i=i.slice().sort((t,e)=>t.date-e.date);var s={},r=i.reduce((function(t,e){var a=e.date;return s[a]?(s[a].searches+=parseInt(e.searches),e.revenue&&(s[a].revenue+=e.revenue)):(s[a]=Object.assign({},e),t.push(s[a])),t}),[]),l=[],n=[],h=[],u=[],c={};for(var d of r)l.push(0),n.push(d.revenue),h.push(d.date),u.push(d.searches);return c.revenuePerDay=l,c.publisherRevenuePerDay=n,c.datesOfRevenue=h,c.searchesPerDay=u,c}).catch(t=>t)}getRubiAllStats(t,e,a){return this.rubiService.getAllRubiStats(this.selectedCompany,t,e).toPromise().then(t=>{this.allRubiStatData=t.stats;var e=[];for(var i of a.subids)"Contains"==i.filterTag?(e=e.concat(this.allRubiStatData.filter(t=>t.subid.includes(i.subid)))).map(t=>{t.publisher=a.publisher?a.publisher.fullname:""}):"StartsWith"==i.filterTag?(e=e.concat(this.allRubiStatData.filter(t=>t.subid.startsWith(i.subid)))).map(t=>{t.publisher=a.publisher?a.publisher.fullname:""}):"EndsWith"==i.filterTag?(e=e.concat(this.allRubiStatData.filter(t=>t.subid.endsWith(i.subid)))).map(t=>{t.publisher=a.publisher?a.publisher.fullname:""}):"ExactValue"==i.filterTag&&(e=e.concat(this.allRubiStatData.filter(t=>t.subid==i.subid))).map(t=>{t.publisher=a.publisher?a.publisher.fullname:""});return e.filter((t,e,a)=>e===a.findIndex(e=>e.date===t.date&&e.subid===t.subid)).slice().sort((t,e)=>e.date-t.date)}).catch(t=>t)}getRubiChartMetrics(t,e,a){return this.rubiService.getAllRubiStats(this.selectedCompany,e,a).toPromise().then(t=>{this.allRubiChart=t.stats;var e=[];for(var a of this.tagRows.subids)"Contains"==a.filterTag?e=e.concat(this.allRubiChart.filter(t=>t.subid.includes(a.subid))):"StartsWith"==a.filterTag?e=e.concat(this.allRubiChart.filter(t=>t.subid.startsWith(a.subid))):"EndsWith"==a.filterTag?e=e.concat(this.allRubiChart.filter(t=>t.subid.endsWith(a.subid))):"ExactValue"==a.filterTag&&(e=e.concat(this.allRubiChart.filter(t=>t.subid==a.subid)));let i=e.filter((t,e,a)=>e===a.findIndex(e=>e.date===t.date&&e.subid===t.subid));i=i.slice().sort((t,e)=>t.date-e.date);var s={},r=i.reduce((function(t,e){var a=e.date;return s[a]?(s[a].searches+=parseInt(e.searches),e.revenue&&(s[a].revenue+=e.revenue)):(s[a]=Object.assign({},e),t.push(s[a])),t}),[]),l=[],n=[],h=[],u=[],c={};for(var d of r)l.push(0),n.push(d.revenue),h.push(d.date),u.push(d.searches);return c.revenuePerDay=l,c.publisherRevenuePerDay=n,c.datesOfRevenue=h,c.searchesPerDay=u,c}).catch(t=>t)}getSolexBCAllStats(t,e,a){return this.solexbcService.getAllSolexBCStats(this.selectedCompany,t,e).toPromise().then(t=>{this.allSolexBCStatData=t.stats;var e=[];for(var i of a.subids)"Contains"==i.filterTag?(e=e.concat(this.allSolexBCStatData.filter(t=>t.subid.includes(i.subid)))).map(t=>{t.publisher=a.publisher?a.publisher.fullname:""}):"StartsWith"==i.filterTag?(e=e.concat(this.allSolexBCStatData.filter(t=>t.subid.startsWith(i.subid)))).map(t=>{t.publisher=a.publisher?a.publisher.fullname:""}):"EndsWith"==i.filterTag?(e=e.concat(this.allSolexBCStatData.filter(t=>t.subid.endsWith(i.subid)))).map(t=>{t.publisher=a.publisher?a.publisher.fullname:""}):"ExactValue"==i.filterTag&&(e=e.concat(this.allSolexBCStatData.filter(t=>t.subid==i.subid))).map(t=>{t.publisher=a.publisher?a.publisher.fullname:""});return e.filter((t,e,a)=>e===a.findIndex(e=>e.date===t.date&&e.subid===t.subid)).slice().sort((t,e)=>e.date-t.date)}).catch(t=>t)}getSolexBCChartMetrics(t,e,a){return this.solexbcService.getAllSolexBCStats(this.selectedCompany,e,a).toPromise().then(t=>{this.allSolexBCChart=t.stats;var e=[];for(var a of this.tagRows.subids)"Contains"==a.filterTag?e=e.concat(this.allSolexBCChart.filter(t=>t.subid.includes(a.subid))):"StartsWith"==a.filterTag?e=e.concat(this.allSolexBCChart.filter(t=>t.subid.startsWith(a.subid))):"EndsWith"==a.filterTag?e=e.concat(this.allSolexBCChart.filter(t=>t.subid.endsWith(a.subid))):"ExactValue"==a.filterTag&&(e=e.concat(this.allSolexBCChart.filter(t=>t.subid==a.subid)));let i=e.filter((t,e,a)=>e===a.findIndex(e=>e.date===t.date&&e.subid===t.subid));i=i.slice().sort((t,e)=>t.date-e.date);var s={},r=i.reduce((function(t,e){var a=e.date;return s[a]?(s[a].searches+=parseInt(e.searches),e.revenue&&(s[a].revenue+=e.revenue)):(s[a]=Object.assign({},e),t.push(s[a])),t}),[]),l=[],n=[],h=[],u=[],c={};for(var d of r)l.push(0),n.push(d.revenue),h.push(d.date),u.push(d.searches);return c.revenuePerDay=l,c.publisherRevenuePerDay=n,c.datesOfRevenue=h,c.searchesPerDay=u,c}).catch(t=>t)}getSystem1AllStats(t,e,a){return this.system1Service.getSystem1PublisherStats(this.selectedCompany,t,e).toPromise().then(t=>{this.allSolexBCStatData=t.stats;var e=[];for(var i of a.subids)"Contains"==i.filterTag?(e=e.concat(this.allSolexBCStatData.filter(t=>t.subid.includes(i.subid)))).map(t=>{t.publisher=a.publisher?a.publisher.fullname:""}):"StartsWith"==i.filterTag?(e=e.concat(this.allSolexBCStatData.filter(t=>t.subid.startsWith(i.subid)))).map(t=>{t.publisher=a.publisher?a.publisher.fullname:""}):"EndsWith"==i.filterTag?(e=e.concat(this.allSolexBCStatData.filter(t=>t.subid.endsWith(i.subid)))).map(t=>{t.publisher=a.publisher?a.publisher.fullname:""}):"ExactValue"==i.filterTag&&(e=e.concat(this.allSolexBCStatData.filter(t=>t.subid==i.subid))).map(t=>{t.publisher=a.publisher?a.publisher.fullname:""});return e.filter((t,e,a)=>e===a.findIndex(e=>e.date===t.date&&e.subid===t.subid)).slice().sort((t,e)=>e.date-t.date)}).catch(t=>t)}getSystem1ChartMetrics(t,e,a){return this.system1Service.getSystem1PublisherStats(this.selectedCompany,e,a).toPromise().then(t=>{this.allSolexBCChart=t.stats;var e=[];for(var a of this.tagRows.subids)"Contains"==a.filterTag?e=e.concat(this.allSolexBCChart.filter(t=>t.subid.includes(a.subid))):"StartsWith"==a.filterTag?e=e.concat(this.allSolexBCChart.filter(t=>t.subid.startsWith(a.subid))):"EndsWith"==a.filterTag?e=e.concat(this.allSolexBCChart.filter(t=>t.subid.endsWith(a.subid))):"ExactValue"==a.filterTag&&(e=e.concat(this.allSolexBCChart.filter(t=>t.subid==a.subid)));let i=e.filter((t,e,a)=>e===a.findIndex(e=>e.date===t.date&&e.subid===t.subid));i=i.slice().sort((t,e)=>t.date-e.date);var s={},r=i.reduce((function(t,e){var a=e.date;return s[a]?(s[a].searches+=parseInt(e.searches),e.revenue&&(s[a].revenue+=e.revenue)):(s[a]=Object.assign({},e),t.push(s[a])),t}),[]),l=[],n=[],h=[],u=[],c={};for(var d of r)l.push(0),n.push(d.revenue),h.push(d.date),u.push(d.searches);return c.revenuePerDay=l,c.publisherRevenuePerDay=n,c.datesOfRevenue=h,c.searchesPerDay=u,c}).catch(t=>t)}getApptitudePublisherStats(t,e,a){return this.apptitudeService.getPublisherApptitudeStats(this.selectedCompany,t,e).toPromise().then(t=>{this.allApptitudeStatData=t.stats;var e=[];for(var i of a.subids)"Contains"==i.filterTag?(e=e.concat(this.allApptitudeStatData.filter(t=>t.subid.includes(i.subid)))).map(t=>{t.publisher=a.publisher?a.publisher.fullname:""}):"StartsWith"==i.filterTag?(e=e.concat(this.allApptitudeStatData.filter(t=>t.subid.startsWith(i.subid)))).map(t=>{t.publisher=a.publisher?a.publisher.fullname:""}):"EndsWith"==i.filterTag?(e=e.concat(this.allApptitudeStatData.filter(t=>t.subid.endsWith(i.subid)))).map(t=>{t.publisher=a.publisher?a.publisher.fullname:""}):"ExactValue"==i.filterTag&&(e=e.concat(this.allApptitudeStatData.filter(t=>t.subid==i.subid))).map(t=>{t.publisher=a.publisher?a.publisher.fullname:""});return e.filter((t,e,a)=>e===a.findIndex(e=>e.date===t.date&&e.subid===t.subid)).slice().sort((t,e)=>e.date-t.date)}).catch(t=>t)}getApptitudeChartMetrics(t,e,a){return this.apptitudeService.getPublisherApptitudeStats(this.selectedCompany,e,a).toPromise().then(t=>{this.allApptitudeChart=t.stats;var e=[];for(var a of this.tagRows.subids)"Contains"==a.filterTag?e=e.concat(this.allApptitudeChart.filter(t=>t.subid.includes(a.subid))):"StartsWith"==a.filterTag?e=e.concat(this.allApptitudeChart.filter(t=>t.subid.startsWith(a.subid))):"EndsWith"==a.filterTag?e=e.concat(this.allApptitudeChart.filter(t=>t.subid.endsWith(a.subid))):"ExactValue"==a.filterTag&&(e=e.concat(this.allApptitudeChart.filter(t=>t.subid==a.subid)));let i=e.filter((t,e,a)=>e===a.findIndex(e=>e.date===t.date&&e.subid===t.subid));i=i.slice().sort((t,e)=>t.date-e.date);var s={},r=i.reduce((function(t,e){var a=e.date;return s[a]?(s[a].searches+=parseInt(e.searches),e.revenue&&(s[a].revenue+=e.revenue)):(s[a]=Object.assign({},e),t.push(s[a])),t}),[]),l=[],n=[],h=[],u=[],c={};for(var d of r)l.push(0),n.push(d.revenue),h.push(d.date),u.push(d.searches);return c.revenuePerDay=l,c.publisherRevenuePerDay=n,c.datesOfRevenue=h,c.searchesPerDay=u,c}).catch(t=>t)}}return t.\u0275fac=function(e){return new(e||t)(r.Qb(s.a),r.Qb(h.a),r.Qb(r.i),r.Qb(u.a),r.Qb(c.a),r.Qb(d.a),r.Qb(o.a),r.Qb(b.a),r.Qb(p.a),r.Qb(g.a),r.Qb(f.a),r.Qb(m.a),r.Qb(v.a),r.Qb(i.f),r.Qb(i.d),r.Qb(i.w))},t.\u0275cmp=r.Kb({type:t,selectors:[["app-publisher"]],viewQuery:function(t,e){var a;1&t&&r.Tc(y,!0),2&t&&r.zc(a=r.ic())&&(e.table=a.first)},decls:30,vars:15,consts:[[3,"onDatesPicked"],[3,"chartData",4,"ngIf"],[1,"row","py-6"],[1,"btn","btn-sm","btn-primary","mx-3",3,"click"],[1,"material","fullscreen","expandable",2,"top","10px","height","500px",3,"loadingIndicator","columnMode","headerHeight","footerHeight","rowHeight","scrollbarV","scrollbarH","rows"],["expandableTable",""],[3,"rowHeight","toggle"],["myDetailRow",""],["ngx-datatable-row-detail-template",""],[3,"width","resizeable","sortable","draggable","canAutoResize"],["ngx-datatable-cell-template",""],["name","date"],["ngx-datatable-header-template",""],["name","subid"],["name","searches"],["name","cpc"],["name","ctr"],["name","revenue"],[3,"chartData"],[2,"padding-left","35px"],["href","javascript:void(0)","title","Expand/Collapse Row",3,"click"]],template:function(t,e){1&t&&(r.Wb(0,"app-reporting-filtering",0),r.hc("onDatesPicked",(function(t){return e.updateReportingFiltering(t)})),r.Vb(),r.Mc(1,x,1,1,"app-reporting-publisher-revenue-chart",1),r.Wb(2,"div",2),r.Wb(3,"button",3),r.hc("click",(function(){return e.exportToCsv()})),r.Oc(4," Export Stats "),r.Vb(),r.Vb(),r.Wb(5,"ngx-datatable",4,5),r.Wb(7,"ngx-datatable-row-detail",6,7),r.hc("toggle",(function(t){return e.onDetailToggle(t)})),r.Mc(9,P,6,0,"ng-template",8),r.Vb(),r.Wb(10,"ngx-datatable-column",9),r.Mc(11,A,1,4,"ng-template",10),r.Vb(),r.Wb(12,"ngx-datatable-column",11),r.Mc(13,T,1,0,"ng-template",12),r.Mc(14,W,3,3,"ng-template",10),r.Vb(),r.Wb(15,"ngx-datatable-column",13),r.Mc(16,R,1,0,"ng-template",12),r.Mc(17,V,2,1,"ng-template",10),r.Vb(),r.Wb(18,"ngx-datatable-column",14),r.Mc(19,w,1,0,"ng-template",12),r.Mc(20,z,2,1,"ng-template",10),r.Vb(),r.Wb(21,"ngx-datatable-column",15),r.Mc(22,M,1,0,"ng-template",12),r.Mc(23,I,4,7,"ng-template",10),r.Vb(),r.Wb(24,"ngx-datatable-column",16),r.Mc(25,O,1,0,"ng-template",12),r.Mc(26,E,4,7,"ng-template",10),r.Vb(),r.Wb(27,"ngx-datatable-column",17),r.Mc(28,B,1,0,"ng-template",12),r.Mc(29,Q,3,4,"ng-template",10),r.Vb(),r.Vb()),2&t&&(r.Db(1),r.rc("ngIf",e.chartData),r.Db(4),r.rc("loadingIndicator",e.loadingIndicator)("columnMode","force")("headerHeight",50)("footerHeight",0)("rowHeight",50)("scrollbarV",!0)("scrollbarH",!0)("rows",e.statData),r.Db(2),r.rc("rowHeight",100),r.Db(3),r.rc("width",50)("resizeable",!1)("sortable",!1)("draggable",!1)("canAutoResize",!1))},directives:[D.a,i.p,S.d,S.e,S.f,S.b,S.a,S.c,C.a],pipes:[i.f,i.d,i.w],styles:[""]}),t})(),pathMatch:"full"},{path:"",redirectTo:"",pathMatch:"full"},{path:"**",redirectTo:"",pathMatch:"full"}]}];let j=(()=>{class t{}return t.\u0275mod=r.Ob({type:t}),t.\u0275inj=r.Nb({factory:function(e){return new(e||t)},imports:[[s.k.forChild(L)],s.k]}),t})();var k=a("UKGz");let H=(()=>{class t{}return t.\u0275mod=r.Ob({type:t}),t.\u0275inj=r.Nb({factory:function(e){return new(e||t)},providers:[i.f,i.w,i.d],imports:[[s.k,i.c,j,k.a,S.g]]}),t})()}}]);