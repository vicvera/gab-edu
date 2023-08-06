"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[5513],{7460:(S,_,c)=>{c.r(_),c.d(_,{default:()=>m});var e=c(2223),b=c(4755),f=c(1728),Z=c(3314),A=c(430),x=c(7406),y=c(3649),T=c(6205),U=c(7579),C=c(2722),V=c(1135),q=c(8505),h=c(3144);let s=(()=>{class a{constructor(i){this._httpClient=i,this._data=new V.X(null)}get data$(){return this._data.asObservable()}getData(){return this._httpClient.get("api/dashboards/analytics").pipe((0,q.b)(i=>{this._data.next(i)}))}}return a.\u0275fac=function(i){return new(i||a)(e.LFG(h.eN))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var o=c(1531);function n(a,r){if(1&a&&(e.ynx(0),e.TgZ(1,"div",69)(2,"div",48),e._UZ(3,"div",70),e.TgZ(4,"div",71),e._uU(5),e.qZA()(),e.TgZ(6,"div",72),e._uU(7),e.ALo(8,"number"),e.qZA(),e.TgZ(9,"div",73),e._uU(10),e.qZA()(),e.BQk()),2&a){const i=r.$implicit,t=r.index,d=e.oxw();e.xp6(3),e.Udp("background-color",d.chartNewVsReturning.colors[t]),e.xp6(2),e.Oqu(d.data.newVsReturning.labels[t]),e.xp6(2),e.Oqu(e.xi3(8,5,d.data.newVsReturning.uniqueVisitors*i/100,"1.0-0")),e.xp6(3),e.hij("",i,"%")}}function u(a,r){if(1&a&&(e.ynx(0),e.TgZ(1,"div",69)(2,"div",48),e._UZ(3,"div",70),e.TgZ(4,"div",71),e._uU(5),e.qZA()(),e.TgZ(6,"div",72),e._uU(7),e.ALo(8,"number"),e.qZA(),e.TgZ(9,"div",73),e._uU(10),e.qZA()(),e.BQk()),2&a){const i=r.$implicit,t=r.index,d=e.oxw();e.xp6(3),e.Udp("background-color",d.chartGender.colors[t]),e.xp6(2),e.Oqu(d.data.gender.labels[t]),e.xp6(2),e.Oqu(e.xi3(8,5,d.data.gender.uniqueVisitors*i/100,"1.0-0")),e.xp6(3),e.hij("",i,"%")}}function l(a,r){if(1&a&&(e.ynx(0),e.TgZ(1,"div",69)(2,"div",48),e._UZ(3,"div",70),e.TgZ(4,"div",71),e._uU(5),e.qZA()(),e.TgZ(6,"div",72),e._uU(7),e.ALo(8,"number"),e.qZA(),e.TgZ(9,"div",73),e._uU(10),e.qZA()(),e.BQk()),2&a){const i=r.$implicit,t=r.index,d=e.oxw();e.xp6(3),e.Udp("background-color",d.chartAge.colors[t]),e.xp6(2),e.Oqu(d.data.age.labels[t]),e.xp6(2),e.Oqu(e.xi3(8,5,d.data.age.uniqueVisitors*i/100,"1.0-0")),e.xp6(3),e.hij("",i,"%")}}function g(a,r){if(1&a&&(e.ynx(0),e.TgZ(1,"div",69)(2,"div",48),e._UZ(3,"div",70),e.TgZ(4,"div",71),e._uU(5),e.qZA()(),e.TgZ(6,"div",72),e._uU(7),e.ALo(8,"number"),e.qZA(),e.TgZ(9,"div",73),e._uU(10),e.qZA()(),e.BQk()),2&a){const i=r.$implicit,t=r.index,d=e.oxw();e.xp6(3),e.Udp("background-color",d.chartLanguage.colors[t]),e.xp6(2),e.Oqu(d.data.language.labels[t]),e.xp6(2),e.Oqu(e.xi3(8,5,d.data.language.uniqueVisitors*i/100,"1.0-0")),e.xp6(3),e.hij("",i,"%")}}const m=[{path:"",component:(()=>{class a{constructor(i,t){this._analyticsService=i,this._router=t,this._unsubscribeAll=new U.x}ngOnInit(){this._analyticsService.data$.pipe((0,C.R)(this._unsubscribeAll)).subscribe(i=>{this.data=i,this._prepareChartData()}),window.Apex={chart:{events:{mounted:(i,t)=>{this._fixSvgFill(i.el)},updated:(i,t)=>{this._fixSvgFill(i.el)}}}}}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}trackByFn(i,t){return t.id||i}_fixSvgFill(i){const t=this._router.url;Array.from(i.querySelectorAll("*[fill]")).filter(d=>-1!==d.getAttribute("fill").indexOf("url(")).forEach(d=>{const w=d.getAttribute("fill");d.setAttribute("fill",`url(${t}${w.slice(w.indexOf("#"))}`)})}_prepareChartData(){this.chartVisitors={chart:{animations:{speed:400,animateGradually:{enabled:!1}},fontFamily:"inherit",foreColor:"inherit",width:"100%",height:"100%",type:"area",toolbar:{show:!1},zoom:{enabled:!1}},colors:["#818CF8"],dataLabels:{enabled:!1},fill:{colors:["#312E81"]},grid:{show:!0,borderColor:"#334155",padding:{top:10,bottom:-40,left:0,right:0},position:"back",xaxis:{lines:{show:!0}}},series:this.data.visitors.series,stroke:{width:2},tooltip:{followCursor:!0,theme:"dark",x:{format:"MMM dd, yyyy"},y:{formatter:i=>`${i}`}},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},crosshairs:{stroke:{color:"#475569",dashArray:0,width:2}},labels:{offsetY:-20,style:{colors:"#CBD5E1"}},tickAmount:20,tooltip:{enabled:!1},type:"datetime"},yaxis:{axisTicks:{show:!1},axisBorder:{show:!1},min:i=>i-750,max:i=>i+250,tickAmount:5,show:!1}},this.chartConversions={chart:{animations:{enabled:!1},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"area",sparkline:{enabled:!0}},colors:["#38BDF8"],fill:{colors:["#38BDF8"],opacity:.5},series:this.data.conversions.series,stroke:{curve:"smooth"},tooltip:{followCursor:!0,theme:"dark"},xaxis:{type:"category",categories:this.data.conversions.labels},yaxis:{labels:{formatter:i=>i.toString()}}},this.chartImpressions={chart:{animations:{enabled:!1},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"area",sparkline:{enabled:!0}},colors:["#34D399"],fill:{colors:["#34D399"],opacity:.5},series:this.data.impressions.series,stroke:{curve:"smooth"},tooltip:{followCursor:!0,theme:"dark"},xaxis:{type:"category",categories:this.data.impressions.labels},yaxis:{labels:{formatter:i=>i.toString()}}},this.chartVisits={chart:{animations:{enabled:!1},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"area",sparkline:{enabled:!0}},colors:["#FB7185"],fill:{colors:["#FB7185"],opacity:.5},series:this.data.visits.series,stroke:{curve:"smooth"},tooltip:{followCursor:!0,theme:"dark"},xaxis:{type:"category",categories:this.data.visits.labels},yaxis:{labels:{formatter:i=>i.toString()}}},this.chartVisitorsVsPageViews={chart:{animations:{enabled:!1},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"area",toolbar:{show:!1},zoom:{enabled:!1}},colors:["#64748B","#94A3B8"],dataLabels:{enabled:!1},fill:{colors:["#64748B","#94A3B8"],opacity:.5},grid:{show:!1,padding:{bottom:-40,left:0,right:0}},legend:{show:!1},series:this.data.visitorsVsPageViews.series,stroke:{curve:"smooth",width:2},tooltip:{followCursor:!0,theme:"dark",x:{format:"MMM dd, yyyy"}},xaxis:{axisBorder:{show:!1},labels:{offsetY:-20,rotate:0,style:{colors:"var(--fuse-text-secondary)"}},tickAmount:3,tooltip:{enabled:!1},type:"datetime"},yaxis:{labels:{style:{colors:"var(--fuse-text-secondary)"}},max:i=>i+250,min:i=>i-250,show:!1,tickAmount:5}},this.chartNewVsReturning={chart:{animations:{speed:400,animateGradually:{enabled:!1}},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"donut",sparkline:{enabled:!0}},colors:["#3182CE","#63B3ED"],labels:this.data.newVsReturning.labels,plotOptions:{pie:{customScale:.9,expandOnClick:!1,donut:{size:"70%"}}},series:this.data.newVsReturning.series,states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},tooltip:{enabled:!0,fillSeriesColor:!1,theme:"dark",custom:({seriesIndex:i,w:t})=>`<div class="flex items-center h-8 min-h-8 max-h-8 px-3">\n                                                    <div class="w-3 h-3 rounded-full" style="background-color: ${t.config.colors[i]};"></div>\n                                                    <div class="ml-2 text-md leading-none">${t.config.labels[i]}:</div>\n                                                    <div class="ml-2 text-md font-bold leading-none">${t.config.series[i]}%</div>\n                                                </div>`}},this.chartGender={chart:{animations:{speed:400,animateGradually:{enabled:!1}},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"donut",sparkline:{enabled:!0}},colors:["#319795","#4FD1C5"],labels:this.data.gender.labels,plotOptions:{pie:{customScale:.9,expandOnClick:!1,donut:{size:"70%"}}},series:this.data.gender.series,states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},tooltip:{enabled:!0,fillSeriesColor:!1,theme:"dark",custom:({seriesIndex:i,w:t})=>`<div class="flex items-center h-8 min-h-8 max-h-8 px-3">\n                                                     <div class="w-3 h-3 rounded-full" style="background-color: ${t.config.colors[i]};"></div>\n                                                     <div class="ml-2 text-md leading-none">${t.config.labels[i]}:</div>\n                                                     <div class="ml-2 text-md font-bold leading-none">${t.config.series[i]}%</div>\n                                                 </div>`}},this.chartAge={chart:{animations:{speed:400,animateGradually:{enabled:!1}},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"donut",sparkline:{enabled:!0}},colors:["#DD6B20","#F6AD55"],labels:this.data.age.labels,plotOptions:{pie:{customScale:.9,expandOnClick:!1,donut:{size:"70%"}}},series:this.data.age.series,states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},tooltip:{enabled:!0,fillSeriesColor:!1,theme:"dark",custom:({seriesIndex:i,w:t})=>`<div class="flex items-center h-8 min-h-8 max-h-8 px-3">\n                                                    <div class="w-3 h-3 rounded-full" style="background-color: ${t.config.colors[i]};"></div>\n                                                    <div class="ml-2 text-md leading-none">${t.config.labels[i]}:</div>\n                                                    <div class="ml-2 text-md font-bold leading-none">${t.config.series[i]}%</div>\n                                                </div>`}},this.chartLanguage={chart:{animations:{speed:400,animateGradually:{enabled:!1}},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"donut",sparkline:{enabled:!0}},colors:["#805AD5","#B794F4"],labels:this.data.language.labels,plotOptions:{pie:{customScale:.9,expandOnClick:!1,donut:{size:"70%"}}},series:this.data.language.series,states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},tooltip:{enabled:!0,fillSeriesColor:!1,theme:"dark",custom:({seriesIndex:i,w:t})=>`<div class="flex items-center h-8 min-h-8 max-h-8 px-3">\n                                                    <div class="w-3 h-3 rounded-full" style="background-color: ${t.config.colors[i]};"></div>\n                                                    <div class="ml-2 text-md leading-none">${t.config.labels[i]}:</div>\n                                                    <div class="ml-2 text-md font-bold leading-none">${t.config.series[i]}%</div>\n                                                </div>`}}}}return a.\u0275fac=function(i){return new(i||a)(e.Y36(s),e.Y36(o.F0))},a.\u0275cmp=e.Xpm({type:a,selectors:[["analytics"]],standalone:!0,features:[e.jDz],decls:287,vars:121,consts:[[1,"flex","flex-col","flex-auto","w-full"],[1,"flex","flex-wrap","w-full","max-w-screen-xl","mx-auto","p-6","md:p-8"],[1,"flex","items-center","justify-between","w-full"],[1,"text-3xl","font-semibold","tracking-tight","leading-8"],[1,"font-medium","tracking-tight","text-secondary"],[1,"flex","items-center","ml-6"],["mat-stroked-button","",1,"hidden","sm:inline-flex"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],["mat-flat-button","",1,"hidden","sm:inline-flex","ml-3",3,"color"],[1,"sm:hidden"],["mat-icon-button","",3,"matMenuTriggerFor"],[3,"svgIcon"],["actionsMenu","matMenu"],["mat-menu-item",""],[1,"grid","grid-cols-1","sm:grid-cols-2","lg:grid-cols-3","gap-8","w-full","mt-8"],[1,"sm:col-span-2","lg:col-span-3","dark","flex","flex-col","flex-auto","bg-card","shadow","rounded-2xl","overflow-hidden"],[1,"flex","items-center","justify-between","mt-10","ml-10","mr-6","sm:mr-10"],[1,"flex","flex-col"],[1,"mr-4","text-2xl","md:text-3xl","font-semibold","tracking-tight","leading-7"],[1,"font-medium","text-secondary"],["value","this-year",1,"hidden","sm:inline-flex","border-none","space-x-1"],["visitorsYearSelector","matButtonToggleGroup"],["value","last-year",1,"px-1.5","rounded-full","overflow-hidden","border-none","font-medium"],["value","this-year",1,"px-1.5","rounded-full","overflow-hidden","border-none","font-medium"],["visitorsMenu","matMenu"],[1,"flex","flex-col","flex-auto","h-80"],[1,"flex-auto","w-full","h-full",3,"chart","colors","dataLabels","fill","grid","series","stroke","tooltip","xaxis","yaxis"],[1,"sm:col-span-2","lg:col-span-1","flex","flex-col","flex-auto","bg-card","shadow","rounded-2xl","overflow-hidden"],[1,"flex","items-start","justify-between","m-6","mb-0"],[1,"text-lg","font-medium","tracking-tight","leading-6","truncate"],["mat-button","",1,"h-6","min-h-6","px-2","rounded-full","bg-hover",3,"matMenuTriggerFor"],[1,"font-medium","text-sm","text-secondary"],["conversionMenu","matMenu"],[1,"flex","flex-col","lg:flex-row","lg:items-center","mx-6","mt-3"],[1,"text-7xl","font-bold","tracking-tighter","leading-tight"],[1,"flex","lg:flex-col","lg:ml-3"],[1,"icon-size-5","text-red-500",3,"svgIcon"],[1,"flex","items-center","ml-1","lg:ml-0","lg:mt-0.5","text-md","leading-none","whitespace-nowrap","text-secondary"],[1,"font-medium","text-red-500"],[1,"ml-1"],[1,"flex","flex-col","flex-auto","h-20"],[1,"flex-auto","w-full","h-full",3,"chart","colors","series","stroke","tooltip","xaxis","yaxis"],[1,"flex","flex-col","flex-auto","bg-card","shadow","rounded-2xl","overflow-hidden"],["impressionsMenu","matMenu"],[1,"flex","flex-col","flex-auto","mt-8","bg-card","shadow","rounded-2xl","overflow-hidden"],[1,"flex","items-start","mt-6","mx-6"],[1,"grid","grid-cols-1","sm:grid-cols-3","gap-8","sm:gap-12"],[1,"flex","items-center"],[1,"font-medium","text-secondary","leading-5"],[1,"ml-1.5","icon-size-4","text-hint",3,"svgIcon","matTooltip"],[1,"flex","items-start","mt-2"],[1,"text-4xl","font-bold","tracking-tight","leading-none"],[1,"flex","items-center","ml-2"],[1,"icon-size-5","text-green-500",3,"svgIcon"],[1,"ml-1","text-md","font-medium","text-green-500"],[1,"ml-1","text-md","font-medium","text-red-500"],[1,"flex","flex-col","flex-auto","h-80","mt-3"],[1,"flex-auto","w-full","h-full",3,"chart","colors","dataLabels","grid","legend","series","stroke","tooltip","xaxis","yaxis"],[1,"w-full","mt-12"],[1,"text-2xl","font-semibold","tracking-tight","leading-6"],[1,"grid","grid-cols-1","sm:grid-cols-2","lg:grid-cols-4","gap-8","w-full","mt-6","md:mt-8"],[1,"flex","flex-col","flex-auto","bg-card","shadow","rounded-2xl","overflow-hidden","p-6"],[1,"flex","items-start","justify-between"],[1,"flex","flex-col","flex-auto","mt-6","h-44"],[1,"flex","flex-auto","items-center","justify-center","w-full","h-full",3,"chart","colors","labels","plotOptions","series","states","tooltip"],[1,"mt-8"],[1,"-my-3","divide-y"],[4,"ngFor","ngForOf"],[1,"grid","grid-cols-3","py-3"],[1,"flex-0","w-2","h-2","rounded-full"],[1,"ml-3","truncate"],[1,"font-medium","text-right"],[1,"text-right","text-secondary"]],template:function(i,t){if(1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div",3),e._uU(5,"Analytics dashboard"),e.qZA(),e.TgZ(6,"div",4),e._uU(7,"Monitor metrics, check reports and review performance"),e.qZA()(),e.TgZ(8,"div",5)(9,"button",6),e._UZ(10,"mat-icon",7),e.TgZ(11,"span",8),e._uU(12,"Settings"),e.qZA()(),e.TgZ(13,"button",9),e._UZ(14,"mat-icon",7),e.TgZ(15,"span",8),e._uU(16,"Export"),e.qZA()(),e.TgZ(17,"div",10)(18,"button",11),e._UZ(19,"mat-icon",12),e.qZA(),e.TgZ(20,"mat-menu",null,13)(22,"button",14),e._uU(23,"Export"),e.qZA(),e.TgZ(24,"button",14),e._uU(25,"Settings"),e.qZA()()()()(),e.TgZ(26,"div",15)(27,"div",16)(28,"div",17)(29,"div",18)(30,"div",19),e._uU(31,"Visitors Overview"),e.qZA(),e.TgZ(32,"div",20),e._uU(33,"Number of unique visitors"),e.qZA()(),e.TgZ(34,"div",8)(35,"mat-button-toggle-group",21,22)(37,"mat-button-toggle",23),e._uU(38,"Last Year "),e.qZA(),e.TgZ(39,"mat-button-toggle",24),e._uU(40,"This Year "),e.qZA()(),e.TgZ(41,"div",10)(42,"button",11),e._UZ(43,"mat-icon",12),e.qZA(),e.TgZ(44,"mat-menu",null,25)(46,"button",14),e._uU(47,"This Year"),e.qZA(),e.TgZ(48,"button",14),e._uU(49,"Last Year"),e.qZA()()()()(),e.TgZ(50,"div",26),e._UZ(51,"apx-chart",27),e.qZA()(),e.TgZ(52,"div",28)(53,"div",29)(54,"div",30),e._uU(55,"Conversions"),e.qZA(),e.TgZ(56,"div",8)(57,"button",31)(58,"span",32),e._uU(59,"30 days"),e.qZA()(),e.TgZ(60,"mat-menu",null,33)(62,"button",14),e._uU(63,"30 days"),e.qZA(),e.TgZ(64,"button",14),e._uU(65,"3 months"),e.qZA(),e.TgZ(66,"button",14),e._uU(67,"9 months"),e.qZA()()()(),e.TgZ(68,"div",34)(69,"div",35),e._uU(70),e.ALo(71,"number"),e.qZA(),e.TgZ(72,"div",36),e._UZ(73,"mat-icon",37),e.TgZ(74,"div",38)(75,"span",39),e._uU(76,"2%"),e.qZA(),e.TgZ(77,"span",40),e._uU(78,"below target"),e.qZA()()()(),e.TgZ(79,"div",41),e._UZ(80,"apx-chart",42),e.qZA()(),e.TgZ(81,"div",43)(82,"div",29)(83,"div",30),e._uU(84,"Impressions"),e.qZA(),e.TgZ(85,"div",8)(86,"button",31)(87,"span",32),e._uU(88,"30 days"),e.qZA()(),e.TgZ(89,"mat-menu",null,44)(91,"button",14),e._uU(92,"30 days"),e.qZA(),e.TgZ(93,"button",14),e._uU(94,"3 months"),e.qZA(),e.TgZ(95,"button",14),e._uU(96,"9 months"),e.qZA()()()(),e.TgZ(97,"div",34)(98,"div",35),e._uU(99),e.ALo(100,"number"),e.qZA(),e.TgZ(101,"div",36),e._UZ(102,"mat-icon",37),e.TgZ(103,"div",38)(104,"span",39),e._uU(105,"4%"),e.qZA(),e.TgZ(106,"span",40),e._uU(107,"below target"),e.qZA()()()(),e.TgZ(108,"div",41),e._UZ(109,"apx-chart",42),e.qZA()(),e.TgZ(110,"div",43)(111,"div",29)(112,"div",30),e._uU(113,"Visits"),e.qZA(),e.TgZ(114,"div",8)(115,"button",31)(116,"span",32),e._uU(117,"30 days"),e.qZA()(),e.TgZ(118,"mat-menu",null,44)(120,"button",14),e._uU(121,"30 days"),e.qZA(),e.TgZ(122,"button",14),e._uU(123,"3 months"),e.qZA(),e.TgZ(124,"button",14),e._uU(125,"9 months"),e.qZA()()()(),e.TgZ(126,"div",34)(127,"div",35),e._uU(128),e.ALo(129,"number"),e.qZA(),e.TgZ(130,"div",36),e._UZ(131,"mat-icon",37),e.TgZ(132,"div",38)(133,"span",39),e._uU(134,"4%"),e.qZA(),e.TgZ(135,"span",40),e._uU(136,"below target"),e.qZA()()()(),e.TgZ(137,"div",41),e._UZ(138,"apx-chart",42),e.qZA()()(),e.TgZ(139,"div",45)(140,"div",29)(141,"div",30),e._uU(142,"Visitors vs. Page Views"),e.qZA(),e.TgZ(143,"div",8)(144,"button",31)(145,"span",32),e._uU(146,"30 days"),e.qZA()(),e.TgZ(147,"mat-menu",null,33)(149,"button",14),e._uU(150,"30 days"),e.qZA(),e.TgZ(151,"button",14),e._uU(152,"3 months"),e.qZA(),e.TgZ(153,"button",14),e._uU(154,"9 months"),e.qZA()()()(),e.TgZ(155,"div",46)(156,"div",47)(157,"div",18)(158,"div",48)(159,"div",49),e._uU(160,"Overall Score"),e.qZA(),e._UZ(161,"mat-icon",50),e.qZA(),e.TgZ(162,"div",51)(163,"div",52),e._uU(164),e.qZA(),e.TgZ(165,"div",53),e._UZ(166,"mat-icon",54),e.TgZ(167,"div",55),e._uU(168,"42.9%"),e.qZA()()()(),e.TgZ(169,"div",18)(170,"div",48)(171,"div",49),e._uU(172,"Average Ratio"),e.qZA(),e._UZ(173,"mat-icon",50),e.qZA(),e.TgZ(174,"div",51)(175,"div",52),e._uU(176),e.ALo(177,"number"),e.qZA(),e.TgZ(178,"div",53),e._UZ(179,"mat-icon",37),e.TgZ(180,"div",56),e._uU(181,"13.1%"),e.qZA()()()(),e.TgZ(182,"div",18)(183,"div",48)(184,"div",49),e._uU(185,"Predicted Ratio"),e.qZA(),e._UZ(186,"mat-icon",50),e.qZA(),e.TgZ(187,"div",51)(188,"div",52),e._uU(189),e.ALo(190,"number"),e.qZA(),e.TgZ(191,"div",53),e._UZ(192,"mat-icon",54),e.TgZ(193,"div",55),e._uU(194,"22.2%"),e.qZA()()()()()(),e.TgZ(195,"div",57),e._UZ(196,"apx-chart",58),e.qZA()(),e.TgZ(197,"div",59)(198,"div",60),e._uU(199,"Your Audience"),e.qZA(),e.TgZ(200,"div",4),e._uU(201,"Demographic properties of your users"),e.qZA()(),e.TgZ(202,"div",61)(203,"div",62)(204,"div",63)(205,"div",30),e._uU(206,"New vs. Returning"),e.qZA(),e.TgZ(207,"div",8)(208,"button",31)(209,"span",32),e._uU(210,"30 days"),e.qZA()(),e.TgZ(211,"mat-menu",null,33)(213,"button",14),e._uU(214,"30 days"),e.qZA(),e.TgZ(215,"button",14),e._uU(216,"3 months"),e.qZA(),e.TgZ(217,"button",14),e._uU(218,"9 months"),e.qZA()()()(),e.TgZ(219,"div",64),e._UZ(220,"apx-chart",65),e.qZA(),e.TgZ(221,"div",66)(222,"div",67),e.YNc(223,n,11,8,"ng-container",68),e.qZA()()(),e.TgZ(224,"div",62)(225,"div",63)(226,"div",30),e._uU(227,"Gender"),e.qZA(),e.TgZ(228,"div",8)(229,"button",31)(230,"span",32),e._uU(231,"30 days"),e.qZA()(),e.TgZ(232,"mat-menu",null,33)(234,"button",14),e._uU(235,"30 days"),e.qZA(),e.TgZ(236,"button",14),e._uU(237,"3 months"),e.qZA(),e.TgZ(238,"button",14),e._uU(239,"9 months"),e.qZA()()()(),e.TgZ(240,"div",64),e._UZ(241,"apx-chart",65),e.qZA(),e.TgZ(242,"div",66)(243,"div",67),e.YNc(244,u,11,8,"ng-container",68),e.qZA()()(),e.TgZ(245,"div",62)(246,"div",63)(247,"div",30),e._uU(248,"Age"),e.qZA(),e.TgZ(249,"div",8)(250,"button",31)(251,"span",32),e._uU(252,"30 days"),e.qZA()(),e.TgZ(253,"mat-menu",null,33)(255,"button",14),e._uU(256,"30 days"),e.qZA(),e.TgZ(257,"button",14),e._uU(258,"3 months"),e.qZA(),e.TgZ(259,"button",14),e._uU(260,"9 months"),e.qZA()()()(),e.TgZ(261,"div",64),e._UZ(262,"apx-chart",65),e.qZA(),e.TgZ(263,"div",66)(264,"div",67),e.YNc(265,l,11,8,"ng-container",68),e.qZA()()(),e.TgZ(266,"div",62)(267,"div",63)(268,"div",30),e._uU(269,"Language"),e.qZA(),e.TgZ(270,"div",8)(271,"button",31)(272,"span",32),e._uU(273,"30 days"),e.qZA()(),e.TgZ(274,"mat-menu",null,33)(276,"button",14),e._uU(277,"30 days"),e.qZA(),e.TgZ(278,"button",14),e._uU(279,"3 months"),e.qZA(),e.TgZ(280,"button",14),e._uU(281,"9 months"),e.qZA()()()(),e.TgZ(282,"div",64),e._UZ(283,"apx-chart",65),e.qZA(),e.TgZ(284,"div",66)(285,"div",67),e.YNc(286,g,11,8,"ng-container",68),e.qZA()()()()()()),2&i){const d=e.MAs(21),w=e.MAs(36),E=e.MAs(45),v=e.MAs(61),k=e.MAs(90);e.xp6(10),e.Q6J("svgIcon","heroicons_solid:cog-8-tooth"),e.xp6(3),e.Q6J("color","primary"),e.xp6(1),e.Q6J("svgIcon","heroicons_solid:arrow-up-tray"),e.xp6(4),e.Q6J("matMenuTriggerFor",d),e.xp6(1),e.Q6J("svgIcon","heroicons_outline:ellipsis-vertical"),e.xp6(23),e.Q6J("matMenuTriggerFor",E),e.xp6(1),e.Q6J("svgIcon","heroicons_outline:ellipsis-vertical"),e.xp6(8),e.Q6J("chart",t.chartVisitors.chart)("colors",t.chartVisitors.colors)("dataLabels",t.chartVisitors.dataLabels)("fill",t.chartVisitors.fill)("grid",t.chartVisitors.grid)("series",t.chartVisitors.series[w.value])("stroke",t.chartVisitors.stroke)("tooltip",t.chartVisitors.tooltip)("xaxis",t.chartVisitors.xaxis)("yaxis",t.chartVisitors.yaxis),e.xp6(6),e.Q6J("matMenuTriggerFor",v),e.xp6(13),e.Oqu(e.xi3(71,106,t.data.conversions.amount,"1.0-0")),e.xp6(3),e.Q6J("svgIcon","heroicons_mini:arrow-trending-down"),e.xp6(7),e.Q6J("chart",t.chartConversions.chart)("colors",t.chartConversions.colors)("series",t.chartConversions.series)("stroke",t.chartConversions.stroke)("tooltip",t.chartConversions.tooltip)("xaxis",t.chartConversions.xaxis)("yaxis",t.chartConversions.yaxis),e.xp6(6),e.Q6J("matMenuTriggerFor",k),e.xp6(13),e.Oqu(e.xi3(100,109,t.data.impressions.amount,"1.0-0")),e.xp6(3),e.Q6J("svgIcon","heroicons_mini:arrow-trending-down"),e.xp6(7),e.Q6J("chart",t.chartImpressions.chart)("colors",t.chartImpressions.colors)("series",t.chartImpressions.series)("stroke",t.chartImpressions.stroke)("tooltip",t.chartImpressions.tooltip)("xaxis",t.chartImpressions.xaxis)("yaxis",t.chartImpressions.yaxis),e.xp6(6),e.Q6J("matMenuTriggerFor",k),e.xp6(13),e.Oqu(e.xi3(129,112,t.data.visits.amount,"1.0-0")),e.xp6(3),e.Q6J("svgIcon","heroicons_mini:arrow-trending-down"),e.xp6(7),e.Q6J("chart",t.chartVisits.chart)("colors",t.chartVisits.colors)("series",t.chartVisits.series)("stroke",t.chartVisits.stroke)("tooltip",t.chartVisits.tooltip)("xaxis",t.chartVisits.xaxis)("yaxis",t.chartVisits.yaxis),e.xp6(6),e.Q6J("matMenuTriggerFor",v),e.xp6(17),e.Q6J("svgIcon","heroicons_mini:information-circle")("matTooltip","Score is calculated by using the historical ratio between Page Views and Visitors. Best score is 1000, worst score is 0."),e.xp6(3),e.Oqu(t.data.visitorsVsPageViews.overallScore),e.xp6(2),e.Q6J("svgIcon","heroicons_solid:arrow-up-circle"),e.xp6(7),e.Q6J("svgIcon","heroicons_mini:information-circle")("matTooltip","Average Ratio is the average ratio between Page Views and Visitors"),e.xp6(3),e.hij("",e.xi3(177,115,t.data.visitorsVsPageViews.averageRatio,"1.0-0"),"%"),e.xp6(3),e.Q6J("svgIcon","heroicons_solid:arrow-down-circle"),e.xp6(7),e.Q6J("svgIcon","heroicons_mini:information-circle")("matTooltip","Predicted Ratio is calculated by using historical ratio, current trends and your goal targets."),e.xp6(3),e.hij("",e.xi3(190,118,t.data.visitorsVsPageViews.predictedRatio,"1.0-0"),"%"),e.xp6(3),e.Q6J("svgIcon","heroicons_solid:arrow-up-circle"),e.xp6(4),e.Q6J("chart",t.chartVisitorsVsPageViews.chart)("colors",t.chartVisitorsVsPageViews.colors)("dataLabels",t.chartVisitorsVsPageViews.dataLabels)("grid",t.chartVisitorsVsPageViews.grid)("legend",t.chartVisitorsVsPageViews.legend)("series",t.chartVisitorsVsPageViews.series)("stroke",t.chartVisitorsVsPageViews.stroke)("tooltip",t.chartVisitorsVsPageViews.tooltip)("xaxis",t.chartVisitorsVsPageViews.xaxis)("yaxis",t.chartVisitorsVsPageViews.yaxis),e.xp6(12),e.Q6J("matMenuTriggerFor",v),e.xp6(12),e.Q6J("chart",t.chartNewVsReturning.chart)("colors",t.chartNewVsReturning.colors)("labels",t.chartNewVsReturning.labels)("plotOptions",t.chartNewVsReturning.plotOptions)("series",t.chartNewVsReturning.series)("states",t.chartNewVsReturning.states)("tooltip",t.chartNewVsReturning.tooltip),e.xp6(3),e.Q6J("ngForOf",t.data.newVsReturning.series),e.xp6(6),e.Q6J("matMenuTriggerFor",v),e.xp6(12),e.Q6J("chart",t.chartGender.chart)("colors",t.chartGender.colors)("labels",t.chartGender.labels)("plotOptions",t.chartGender.plotOptions)("series",t.chartGender.series)("states",t.chartGender.states)("tooltip",t.chartGender.tooltip),e.xp6(3),e.Q6J("ngForOf",t.data.gender.series),e.xp6(6),e.Q6J("matMenuTriggerFor",v),e.xp6(12),e.Q6J("chart",t.chartAge.chart)("colors",t.chartAge.colors)("labels",t.chartAge.labels)("plotOptions",t.chartAge.plotOptions)("series",t.chartAge.series)("states",t.chartAge.states)("tooltip",t.chartAge.tooltip),e.xp6(3),e.Q6J("ngForOf",t.data.age.series),e.xp6(6),e.Q6J("matMenuTriggerFor",v),e.xp6(12),e.Q6J("chart",t.chartLanguage.chart)("colors",t.chartLanguage.colors)("labels",t.chartLanguage.labels)("plotOptions",t.chartLanguage.plotOptions)("series",t.chartLanguage.series)("states",t.chartLanguage.states)("tooltip",t.chartLanguage.tooltip),e.xp6(3),e.Q6J("ngForOf",t.data.language.series)}},dependencies:[f.ot,f.lW,f.RK,A.Ps,A.Hw,x.Tx,x.VK,x.OP,x.p6,Z.vV,Z.A9,Z.Yi,T.X,T.x,y.AV,y.gM,b.ax,b.JJ],encapsulation:2,changeDetection:0}),a})(),resolve:{data:()=>(0,e.f3M)(s).getData()}}]},418:(S,_,c)=>{c.d(_,{A8:()=>V,Ov:()=>U,Z9:()=>A,eX:()=>T,k:()=>q,o2:()=>Z,yy:()=>y});var e=c(4033),b=c(7579),f=c(2223);class Z{}function A(h){return h&&"function"==typeof h.connect&&!(h instanceof e.c)}class y{applyChanges(s,o,n,u,l){s.forEachOperation((g,p,m)=>{let a,r;if(null==g.previousIndex){const i=n(g,p,m);a=o.createEmbeddedView(i.templateRef,i.context,i.index),r=1}else null==m?(o.remove(p),r=3):(a=o.get(p),o.move(a,m),r=2);l&&l({context:a?.context,operation:r,record:g})})}detach(){}}class T{constructor(){this.viewCacheSize=20,this._viewCache=[]}applyChanges(s,o,n,u,l){s.forEachOperation((g,p,m)=>{let a,r;null==g.previousIndex?(a=this._insertView(()=>n(g,p,m),m,o,u(g)),r=a?1:0):null==m?(this._detachAndCacheView(p,o),r=3):(a=this._moveView(p,m,o,u(g)),r=2),l&&l({context:a?.context,operation:r,record:g})})}detach(){for(const s of this._viewCache)s.destroy();this._viewCache=[]}_insertView(s,o,n,u){const l=this._insertViewFromCache(o,n);if(l)return void(l.context.$implicit=u);const g=s();return n.createEmbeddedView(g.templateRef,g.context,g.index)}_detachAndCacheView(s,o){const n=o.detach(s);this._maybeCacheView(n,o)}_moveView(s,o,n,u){const l=n.get(s);return n.move(l,o),l.context.$implicit=u,l}_maybeCacheView(s,o){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(s);else{const n=o.indexOf(s);-1===n?s.destroy():o.remove(n)}}_insertViewFromCache(s,o){const n=this._viewCache.pop();return n&&o.insert(n,s),n||null}}class U{get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}constructor(s=!1,o,n=!0,u){this._multiple=s,this._emitChanges=n,this.compareWith=u,this._selection=new Set,this._deselectedToEmit=[],this._selectedToEmit=[],this.changed=new b.x,o&&o.length&&(s?o.forEach(l=>this._markSelected(l)):this._markSelected(o[0]),this._selectedToEmit.length=0)}select(...s){this._verifyValueAssignment(s),s.forEach(n=>this._markSelected(n));const o=this._hasQueuedChanges();return this._emitChangeEvent(),o}deselect(...s){this._verifyValueAssignment(s),s.forEach(n=>this._unmarkSelected(n));const o=this._hasQueuedChanges();return this._emitChangeEvent(),o}setSelection(...s){this._verifyValueAssignment(s);const o=this.selected,n=new Set(s);s.forEach(l=>this._markSelected(l)),o.filter(l=>!n.has(l)).forEach(l=>this._unmarkSelected(l));const u=this._hasQueuedChanges();return this._emitChangeEvent(),u}toggle(s){return this.isSelected(s)?this.deselect(s):this.select(s)}clear(s=!0){this._unmarkAll();const o=this._hasQueuedChanges();return s&&this._emitChangeEvent(),o}isSelected(s){return this._selection.has(this._getConcreteValue(s))}isEmpty(){return 0===this._selection.size}hasValue(){return!this.isEmpty()}sort(s){this._multiple&&this.selected&&this._selected.sort(s)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(s){s=this._getConcreteValue(s),this.isSelected(s)||(this._multiple||this._unmarkAll(),this.isSelected(s)||this._selection.add(s),this._emitChanges&&this._selectedToEmit.push(s))}_unmarkSelected(s){s=this._getConcreteValue(s),this.isSelected(s)&&(this._selection.delete(s),this._emitChanges&&this._deselectedToEmit.push(s))}_unmarkAll(){this.isEmpty()||this._selection.forEach(s=>this._unmarkSelected(s))}_verifyValueAssignment(s){}_hasQueuedChanges(){return!(!this._deselectedToEmit.length&&!this._selectedToEmit.length)}_getConcreteValue(s){if(this.compareWith){for(let o of this._selection)if(this.compareWith(s,o))return o;return s}return s}}let V=(()=>{class h{constructor(){this._listeners=[]}notify(o,n){for(let u of this._listeners)u(o,n)}listen(o){return this._listeners.push(o),()=>{this._listeners=this._listeners.filter(n=>o!==n)}}ngOnDestroy(){this._listeners=[]}}return h.\u0275fac=function(o){return new(o||h)},h.\u0275prov=f.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})();const q=new f.OlP("_ViewRepeater")}}]);