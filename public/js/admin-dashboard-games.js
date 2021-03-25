(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"AAC/":function(t,e,r){"use strict";var s=r("o0o1"),a=r.n(s),n=r("vDqi"),o=r.n(n);function i(t,e,r,s,a,n,o){try{var i=t[n](o),l=i.value}catch(t){return void r(t)}i.done?e(l):Promise.resolve(l).then(s,a)}function l(t){return function(){var e=this,r=arguments;return new Promise((function(s,a){var n=t.apply(e,r);function o(t){i(n,s,a,o,l,"next",t)}function l(t){i(n,s,a,o,l,"throw",t)}o(void 0)}))}}var c={data:function(){return{data:{},endpoint:"/api/admin/dashboard/data"}},computed:{theme:function(){var t=this.$vuetify.theme.isDark?"dark":"light";return this.$vuetify.theme.themes[t]},chartLineColor:function(){return this.theme.primary}},created:function(){var t=this;this.queries.forEach((function(e){return t.loadData(e)}))},methods:{loadData:function(t){var e=arguments,r=this;return l(a.a.mark((function s(){var n,i,l;return a.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return n=e.length>1&&void 0!==e[1]?e[1]:null,r.data[t]&&r.$delete(r.data,t),s.next=4,o.a.get("".concat(r.endpoint,"/").concat(t),{params:n});case 4:i=s.sent,(l=i.data).success?r.$set(r.data,t,l.data):r.$store.dispatch("message/error",{text:l.message});case 7:case"end":return s.stop()}}),s)})))()}}};e.a=c},D4ml:function(t,e,r){"use strict";r.d(e,"a",(function(){return s})),r.d(e,"b",(function(){return a}));var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-select",{attrs:{items:t.options,label:t.$t("Period"),disabled:t.disabled,outlined:""},on:{change:t.change},model:{value:t.period,callback:function(e){t.period=e},expression:"period"}})},a=[]},HyWL:function(t,e,r){"use strict";var s={props:{disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{roles:["user","bot","admin"],options:[{text:this.$t("User"),value:"user"},{text:this.$t("Bot"),value:"bot"},{text:this.$t("Admin"),value:"admin"}]}},methods:{change:function(){this.$emit("change",{roles:this.roles})}}};e.a=s},WFgj:function(t,e,r){"use strict";r.d(e,"a",(function(){return s})),r.d(e,"b",(function(){return a}));var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-menu",{attrs:{"close-on-content-click":!1,left:"","offset-x":"","nudge-width":200},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[r("v-btn",t._g({attrs:{icon:"",disabled:t.disabled}},s),[r("v-icon",[t._v("\n        mdi-filter-outline\n      ")])],1)]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),r("v-card",[r("v-card-title",[t._v("\n      "+t._s(t.$t("Filter"))+"\n    ")]),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",{staticClass:"pt-5"},t._l(t.components,(function(e){return r("filter-by-"+e,{key:e,tag:"component",on:{change:function(e){return t.change(e)}}})})),1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary",text:"",disabled:t.disabled},on:{click:t.apply}},[t._v("\n        "+t._s(t.$t("Apply"))+"\n      ")])],1)],1)],1)},a=[]},fFsE:function(t,e,r){"use strict";r.r(e);var s=r("/rcJ"),a=r("b205"),n=r("LbrK"),o={components:{FilterMenu:a.a},mixins:[n.a],middleware:["auth","verified","2fa_passed","admin"],metaInfo:function(){return{title:this.$t("Dashboard")+" "+this.$t("Games")}},data:function(){return{queries:["games-bets-comparison","games-house-edge-comparison","games-wagered-by-week","games-stats"]}},computed:{bets:function(){return this.data["games-bets-comparison"]||null},previousBets:function(){return null!==this.bets?this.bets[0]:0},currentBets:function(){return null!==this.bets?this.bets[1]:0},houseEdge:function(){return this.data["games-house-edge-comparison"]||null},previousHouseEdge:function(){return null!==this.houseEdge?this.houseEdge[0]:0},currentHouseEdge:function(){return null!==this.houseEdge?this.houseEdge[1]:0},stats:function(){return this.data["games-stats"]||null}},methods:{integer:s.integer,percentage:s.percentage,short:s.short}},i=r("KHd+"),l=r("ZUTo"),c=r.n(l),u=r("sK+t"),d=r("mdmw"),v=r("Yq0q"),h=r("pSOK"),p=r("SQoD"),f=r("D9m0"),g=r("jdmY"),m=r("H09D"),_=r("MSko"),b=r("L6Q5"),y=r("fy6r"),w=r("4Mey"),x=r("cdmR"),$=r("Kn9U"),C=Object(i.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",[r("v-col",{staticClass:"text-center",attrs:{cols:"12",lg:"6"}},[r("v-card",{attrs:{loading:!t.bets}},[r("v-toolbar",[r("v-toolbar-title",{staticClass:"headline font-weight-thin"},[t._v("\n            "+t._s(t.$t("Bets"))+"\n          ")]),t._v(" "),r("v-spacer"),t._v(" "),r("filter-menu",{attrs:{components:["comparison-period"],disabled:!t.houseEdge},on:{apply:function(e){return t.loadData("games-bets-comparison",e)}}})],1),t._v(" "),r("v-card-text",[r("v-row",[r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-progress-circular",{attrs:{rotate:-90,size:200,width:30,value:t.previousBets>0||t.currentBets>0?100*t.previousBets/(t.previousBets+t.currentBets):0,color:"primary"}},[r("span",{staticClass:"headline"},[t._v(t._s(t.previousBets))])]),t._v(" "),r("v-subheader",{staticClass:"title font-weight-thin justify-center mt-3"},[t._v("\n                "+t._s(t.$t("previous"))+"\n              ")])],1),t._v(" "),r("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"6"}},[r("v-progress-circular",{attrs:{rotate:-90,size:200,width:30,value:t.previousBets>0||t.currentBets>0?100*t.currentBets/(t.previousBets+t.currentBets):0,color:"primary"}},[r("span",{staticClass:"headline"},[t._v(t._s(t.currentBets))])]),t._v(" "),r("v-subheader",{staticClass:"title font-weight-thin justify-center mt-3"},[t._v("\n                "+t._s(t.$t("current"))+"\n              ")])],1)],1)],1)],1)],1),t._v(" "),r("v-col",{staticClass:"text-center",attrs:{cols:"12",lg:"6"}},[r("v-card",{attrs:{loading:!t.houseEdge}},[r("v-toolbar",[r("v-toolbar-title",{staticClass:"headline font-weight-thin"},[t._v("\n            "+t._s(t.$t("House edge"))+"\n          ")]),t._v(" "),r("v-spacer"),t._v(" "),r("filter-menu",{attrs:{components:["comparison-period"],disabled:!t.houseEdge},on:{apply:function(e){return t.loadData("games-house-edge-comparison",e)}}})],1),t._v(" "),r("v-card-text",[r("v-row",[r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-progress-circular",{attrs:{rotate:t.previousHouseEdge>0?-90:-90-360*Math.abs(t.previousHouseEdge/100),size:200,width:30,value:Math.abs(t.previousHouseEdge),color:t.previousHouseEdge>0?"primary":"error"}},[r("span",{staticClass:"headline"},[t._v(t._s(t.percentage(t.previousHouseEdge)))])]),t._v(" "),r("v-subheader",{staticClass:"title font-weight-thin justify-center mt-3"},[t._v("\n                "+t._s(t.$t("previous"))+"\n              ")])],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-progress-circular",{attrs:{rotate:t.currentHouseEdge>0?-90:-90-360*Math.abs(t.currentHouseEdge/100),size:200,width:30,value:Math.abs(t.currentHouseEdge),color:t.currentHouseEdge>0?"primary":"error"}},[r("span",{staticClass:"headline"},[t._v(t._s(t.percentage(t.currentHouseEdge)))])]),t._v(" "),r("v-subheader",{staticClass:"title font-weight-thin justify-center mt-3"},[t._v("\n                "+t._s(t.$t("current"))+"\n              ")])],1)],1)],1)],1)],1)],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",lg:"12"}},[r("v-card",{staticClass:"text-center",attrs:{loading:!t.data["games-wagered-by-week"]}},[r("v-toolbar",[r("v-toolbar-title",{staticClass:"headline font-weight-thin"},[t._v("\n            "+t._s(t.$t("Wagered last 8 weeks"))+"\n          ")])],1),t._v(" "),r("v-card-text",[r("v-sheet",[r("v-sparkline",{attrs:{value:t.data["games-wagered-by-week"]||Array(8).fill(0),color:t.chartLineColor,height:"100",padding:"24","stroke-linecap":"round","line-width":"2",smooth:"5","auto-draw":"","auto-draw-duration":2e3},scopedSlots:t._u([{key:"label",fn:function(e){return[t._v("\n                "+t._s(t.short(e.value))+"\n              ")]}}])})],1)],1)],1)],1)],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",lg:"12"}},[r("v-card",{staticClass:"text-center",attrs:{loading:!t.stats}},[r("v-toolbar",[r("v-toolbar-title",{staticClass:"headline font-weight-thin"},[t._v("\n            "+t._s(t.$t("Totals by game"))+"\n          ")]),t._v(" "),r("v-spacer"),t._v(" "),r("filter-menu",{attrs:{components:["period","role"],disabled:!t.stats},on:{apply:function(e){return t.loadData("games-stats",e)}}})],1),t._v(" "),r("v-card-text",[r("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[r("thead",[r("tr",[r("th",{staticClass:"text-left"},[t._v(t._s(t.$t("Game")))]),t._v(" "),r("th",{staticClass:"text-right"},[t._v(t._s(t.$t("Wagered")))]),t._v(" "),r("th",{staticClass:"text-right"},[t._v(t._s(t.$t("Won")))]),t._v(" "),r("th",{staticClass:"text-right"},[t._v(t._s(t.$t("Return to player")))]),t._v(" "),r("th",{staticClass:"text-right"},[t._v(t._s(t.$t("House profit")))]),t._v(" "),r("th",{staticClass:"text-right"},[t._v(t._s(t.$t("House edge")))])])]),t._v(" "),r("tbody",[t.stats?[t.stats.length?t._l(t.stats,(function(e){return r("tr",{key:e.title},[r("td",{staticClass:"text-left"},[t._v(t._s(e.title))]),t._v(" "),r("td",{staticClass:"text-right"},[t._v(t._s(t.integer(e.bet_total)))]),t._v(" "),r("td",{staticClass:"text-right"},[t._v(t._s(t.integer(e.win_total)))]),t._v(" "),r("td",{staticClass:"text-right"},[t._v(t._s(t.percentage(100-e.house_edge)))]),t._v(" "),r("td",{staticClass:"text-right"},[t._v(t._s(t.integer(e.bet_total-e.win_total)))]),t._v(" "),r("td",{staticClass:"text-right"},[t._v(t._s(t.percentage(e.house_edge)))])])})):r("tr",[r("td",{attrs:{colspan:"6"}},[t._v("\n                      "+t._s(t.$t("No data found"))+"\n                    ")])])]:t._l(Array(10).fill(0),(function(t,e){return r("tr",{key:e},[r("td",{attrs:{colspan:"6"}},[r("v-skeleton-loader",{attrs:{type:"text"}})],1)])}))],2)]},proxy:!0}])})],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=C.exports;c()(C,{VCard:u.a,VCardText:d.c,VCol:v.a,VContainer:h.a,VProgressCircular:p.a,VRow:f.a,VSheet:g.a,VSimpleTable:m.a,VSkeletonLoader:_.a,VSpacer:b.a,VSparkline:y.a,VSubheader:w.a,VToolbar:x.a,VToolbarTitle:$.a})},g1YQ:function(t,e,r){"use strict";r.d(e,"a",(function(){return s})),r.d(e,"b",(function(){return a}));var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-select",{attrs:{items:t.options,label:t.$t("Role"),disabled:t.disabled,outlined:"",multiple:""},on:{change:t.change},model:{value:t.roles,callback:function(e){t.roles=e},expression:"roles"}})},a=[]},kDHF:function(t,e,r){"use strict";var s={props:{disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{period:"month",options:[{text:this.$t("Week"),value:"week"},{text:this.$t("Month"),value:"month"},{text:this.$t("Year"),value:"year"}]}},methods:{change:function(){this.$emit("change",{period:this.period})}}};e.a=s},r6ul:function(t,e,r){"use strict";var s=r("YW/g"),a=r("HJ4Y"),n=r("SasW");function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c={components:{FilterByPeriod:s.a,FilterByComparisonPeriod:a.a,FilterByRole:n.a},props:{components:{type:Array,required:!1,default:function(){return["period"]}},disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{menu:!1,filters:null}},methods:{change:function(t){this.filters=i(i({},this.filters),t)},apply:function(t){this.menu=!1,this.$emit("apply",this.filters)}}};e.a=c},slli:function(t,e,r){"use strict";r.d(e,"a",(function(){return s})),r.d(e,"b",(function(){return a}));var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-select",{attrs:{items:t.options,label:t.$t("Period"),disabled:t.disabled,outlined:""},on:{change:t.change},model:{value:t.period,callback:function(e){t.period=e},expression:"period"}})},a=[]},wcJE:function(t,e,r){"use strict";var s={props:{disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{period:null,options:[{text:this.$t("This week"),value:"week"},{text:this.$t("Previous week"),value:"prev_week"},{text:this.$t("This month"),value:"month"},{text:this.$t("Previous month"),value:"prev_month"},{text:this.$t("This year"),value:"year"},{text:this.$t("Previous year"),value:"prev_year"},{text:this.$t("All time"),value:null}]}},methods:{change:function(){this.$emit("change",{period:this.period})}}};e.a=s}}]);
//# sourceMappingURL=admin-dashboard-games.js.map