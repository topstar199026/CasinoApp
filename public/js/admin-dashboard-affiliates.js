(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"AAC/":function(t,e,s){"use strict";var r=s("o0o1"),i=s.n(r),a=s("vDqi"),n=s.n(a);function o(t,e,s,r,i,a,n){try{var o=t[a](n),l=o.value}catch(t){return void s(t)}o.done?e(l):Promise.resolve(l).then(r,i)}function l(t){return function(){var e=this,s=arguments;return new Promise((function(r,i){var a=t.apply(e,s);function n(t){o(a,r,i,n,l,"next",t)}function l(t){o(a,r,i,n,l,"throw",t)}n(void 0)}))}}var c={data:function(){return{data:{},endpoint:"/api/admin/dashboard/data"}},computed:{theme:function(){var t=this.$vuetify.theme.isDark?"dark":"light";return this.$vuetify.theme.themes[t]},chartLineColor:function(){return this.theme.primary}},created:function(){var t=this;this.queries.forEach((function(e){return t.loadData(e)}))},methods:{loadData:function(t){var e=arguments,s=this;return l(i.a.mark((function r(){var a,o,l;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=e.length>1&&void 0!==e[1]?e[1]:null,s.data[t]&&s.$delete(s.data,t),r.next=4,n.a.get("".concat(s.endpoint,"/").concat(t),{params:a});case 4:o=r.sent,(l=o.data).success?s.$set(s.data,t,l.data):s.$store.dispatch("message/error",{text:l.message});case 7:case"end":return r.stop()}}),r)})))()}}};e.a=c},D4ml:function(t,e,s){"use strict";s.d(e,"a",(function(){return r})),s.d(e,"b",(function(){return i}));var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-select",{attrs:{items:t.options,label:t.$t("Period"),disabled:t.disabled,outlined:""},on:{change:t.change},model:{value:t.period,callback:function(e){t.period=e},expression:"period"}})},i=[]},Fu0c:function(t,e,s){"use strict";s.r(e);var r=s("/rcJ"),i=s("b205"),a=s("LbrK"),n={components:{FilterMenu:i.a},mixins:[a.a],middleware:["auth","verified","2fa_passed","admin"],metaInfo:function(){return{title:this.$t("Dashboard")+" "+this.$t("Affiliates")}},data:function(){return{queries:["affiliates-commissions-history","affiliates-referrals-comparison","affiliates-commissions-by-status","affiliates-commissions-by-type"]}},computed:{referrals:function(){return this.data["affiliates-referrals-comparison"]||null},previousReferrals:function(){return null!==this.referrals?this.referrals[0]:0},currentReferrals:function(){return null!==this.referrals?this.referrals[1]:0},commissionsByStatus:function(){return this.data["affiliates-commissions-by-status"]||null},pendingCommissionsTotal:function(){return null!==this.commissionsByStatus?this.commissionsByStatus[0]:0},approvedCommissionsTotal:function(){return null!==this.commissionsByStatus?this.commissionsByStatus[1]:0},rejectedCommissionsTotal:function(){return null!==this.commissionsByStatus?this.commissionsByStatus[2]:0},commissionsTotal:function(){return this.pendingCommissionsTotal+this.approvedCommissionsTotal+this.rejectedCommissionsTotal},commissionsByType:function(){return this.data["affiliates-commissions-by-type"]||null}},methods:{integer:r.integer,decimal:r.decimal,short:r.short}},o=s("KHd+"),l=s("ZUTo"),c=s.n(l),u=s("sK+t"),d=s("mdmw"),m=s("Yq0q"),v=s("pSOK"),f=s("SQoD"),p=s("D9m0"),h=s("jdmY"),_=s("H09D"),y=s("MSko"),b=s("L6Q5"),g=s("fy6r"),C=s("4Mey"),w=s("cdmR"),$=s("Kn9U"),x=Object(o.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-row",[s("v-col",{attrs:{cols:"12",lg:"6"}},[s("v-card",{staticClass:"text-center",attrs:{loading:!t.data["affiliates-commissions-history"]}},[s("v-toolbar",[s("v-toolbar-title",{staticClass:"headline font-weight-thin"},[t._v("\n            "+t._s(t.$t("Commissions last 8 weeks"))+"\n          ")])],1),t._v(" "),s("v-card-text",[s("v-sheet",[s("v-sparkline",{attrs:{value:t.data["affiliates-commissions-history"]||Array(8).fill(0),color:t.chartLineColor,height:"150",padding:"24","stroke-linecap":"round","line-width":"2",smooth:"5","auto-draw":"","auto-draw-duration":2e3},scopedSlots:t._u([{key:"label",fn:function(e){return[t._v("\n                "+t._s(t.short(e.value))+"\n              ")]}}])})],1)],1)],1)],1),t._v(" "),s("v-col",{staticClass:"text-center",attrs:{cols:"12",lg:"6"}},[s("v-card",{attrs:{loading:!t.referrals}},[s("v-toolbar",[s("v-toolbar-title",{staticClass:"headline font-weight-thin"},[t._v("\n            "+t._s(t.$t("Referrals"))+"\n          ")]),t._v(" "),s("v-spacer"),t._v(" "),s("filter-menu",{attrs:{components:["comparison-period"],disabled:!t.referrals},on:{apply:function(e){return t.loadData("affiliates-referrals-comparison",e)}}})],1),t._v(" "),s("v-card-text",[s("v-row",[s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-progress-circular",{attrs:{rotate:-90,size:200,width:30,value:t.previousReferrals>0||t.currentReferrals>0?100*t.previousReferrals/(t.previousReferrals+t.currentReferrals):0,color:"primary"}},[s("span",{staticClass:"headline"},[t._v(t._s(t.previousReferrals))])]),t._v(" "),s("v-subheader",{staticClass:"title font-weight-thin justify-center mt-3"},[t._v("\n                "+t._s(t.$t("previous"))+"\n              ")])],1),t._v(" "),s("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"6"}},[s("v-progress-circular",{attrs:{rotate:-90,size:200,width:30,value:t.previousReferrals>0||t.currentReferrals>0?100*t.currentReferrals/(t.previousReferrals+t.currentReferrals):0,color:"primary"}},[s("span",{staticClass:"headline"},[t._v(t._s(t.currentReferrals))])]),t._v(" "),s("v-subheader",{staticClass:"title font-weight-thin justify-center mt-3"},[t._v("\n                "+t._s(t.$t("current"))+"\n              ")])],1)],1)],1)],1)],1)],1),t._v(" "),s("v-row",[s("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[s("v-card",{attrs:{loading:!t.commissionsByStatus}},[s("v-toolbar",[s("v-toolbar-title",{staticClass:"headline font-weight-thin"},[t._v("\n            "+t._s(t.$t("Commissions amounts by status"))+"\n          ")]),t._v(" "),s("v-spacer"),t._v(" "),s("filter-menu",{attrs:{disabled:!t.commissionsByStatus},on:{apply:function(e){return t.loadData("affiliates-commissions-by-status",e)}}})],1),t._v(" "),s("v-card-text",[s("v-row",[s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-progress-circular",{attrs:{rotate:-90,size:200,width:30,value:t.commissionsTotal>0?100*t.pendingCommissionsTotal/t.commissionsTotal:0,color:"primary"}},[s("span",{staticClass:"headline"},[t._v(t._s(t.short(t.pendingCommissionsTotal)))])]),t._v(" "),s("v-subheader",{staticClass:"title font-weight-thin justify-center mt-3"},[t._v("\n                "+t._s(t.$t("Pending"))+"\n              ")])],1),t._v(" "),s("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"4"}},[s("v-progress-circular",{attrs:{rotate:-90,size:200,width:30,value:t.commissionsTotal>0?100*t.approvedCommissionsTotal/t.commissionsTotal:0,color:"primary"}},[s("span",{staticClass:"headline"},[t._v(t._s(t.short(t.approvedCommissionsTotal)))])]),t._v(" "),s("v-subheader",{staticClass:"title font-weight-thin justify-center mt-3"},[t._v("\n                "+t._s(t.$t("Approved"))+"\n              ")])],1),t._v(" "),s("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"4"}},[s("v-progress-circular",{attrs:{rotate:-90,size:200,width:30,value:t.commissionsTotal>0?100*t.rejectedCommissionsTotal/t.commissionsTotal:0,color:"primary"}},[s("span",{staticClass:"headline"},[t._v(t._s(t.short(t.rejectedCommissionsTotal)))])]),t._v(" "),s("v-subheader",{staticClass:"title font-weight-thin justify-center mt-3"},[t._v("\n                "+t._s(t.$t("Rejected"))+"\n              ")])],1)],1)],1)],1)],1)],1),t._v(" "),s("v-row",[s("v-col",{attrs:{cols:"12",lg:"12"}},[s("v-card",{staticClass:"text-center",attrs:{loading:!t.commissionsByType}},[s("v-toolbar",[s("v-toolbar-title",{staticClass:"headline font-weight-thin"},[t._v("\n            "+t._s(t.$t("Commissions by type"))+"\n          ")]),t._v(" "),s("v-spacer"),t._v(" "),s("filter-menu",{attrs:{disabled:!t.commissionsByType},on:{apply:function(e){return t.loadData("affiliates-commissions-by-type",e)}}})],1),t._v(" "),s("v-card-text",[s("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-left"},[t._v(t._s(t.$t("Type")))]),t._v(" "),s("th",{staticClass:"text-right"},[t._v(t._s(t.$t("Count")))]),t._v(" "),s("th",{staticClass:"text-right"},[t._v(t._s(t.$t("Total")))])])]),t._v(" "),s("tbody",[t.commissionsByType?[t.commissionsByType.length?t._l(t.commissionsByType,(function(e){return s("tr",{key:e.type},[s("td",{staticClass:"text-left"},[t._v(t._s(e.title))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.integer(e.commissions_count)))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.decimal(e.commissions_total)))])])})):s("tr",[s("td",{attrs:{colspan:"6"}},[t._v("\n                      "+t._s(t.$t("No data found"))+"\n                    ")])])]:t._l(Array(3).fill(0),(function(t,e){return s("tr",{key:e},[s("td",{attrs:{colspan:"3"}},[s("v-skeleton-loader",{attrs:{type:"text"}})],1)])}))],2)]},proxy:!0}])})],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=x.exports;c()(x,{VCard:u.a,VCardText:d.c,VCol:m.a,VContainer:v.a,VProgressCircular:f.a,VRow:p.a,VSheet:h.a,VSimpleTable:_.a,VSkeletonLoader:y.a,VSpacer:b.a,VSparkline:g.a,VSubheader:C.a,VToolbar:w.a,VToolbarTitle:$.a})},HyWL:function(t,e,s){"use strict";var r={props:{disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{roles:["user","bot","admin"],options:[{text:this.$t("User"),value:"user"},{text:this.$t("Bot"),value:"bot"},{text:this.$t("Admin"),value:"admin"}]}},methods:{change:function(){this.$emit("change",{roles:this.roles})}}};e.a=r},WFgj:function(t,e,s){"use strict";s.d(e,"a",(function(){return r})),s.d(e,"b",(function(){return i}));var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-menu",{attrs:{"close-on-content-click":!1,left:"","offset-x":"","nudge-width":200},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[s("v-btn",t._g({attrs:{icon:"",disabled:t.disabled}},r),[s("v-icon",[t._v("\n        mdi-filter-outline\n      ")])],1)]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),s("v-card",[s("v-card-title",[t._v("\n      "+t._s(t.$t("Filter"))+"\n    ")]),t._v(" "),s("v-divider"),t._v(" "),s("v-card-text",{staticClass:"pt-5"},t._l(t.components,(function(e){return s("filter-by-"+e,{key:e,tag:"component",on:{change:function(e){return t.change(e)}}})})),1),t._v(" "),s("v-card-actions",[s("v-spacer"),t._v(" "),s("v-btn",{attrs:{color:"primary",text:"",disabled:t.disabled},on:{click:t.apply}},[t._v("\n        "+t._s(t.$t("Apply"))+"\n      ")])],1)],1)],1)},i=[]},g1YQ:function(t,e,s){"use strict";s.d(e,"a",(function(){return r})),s.d(e,"b",(function(){return i}));var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-select",{attrs:{items:t.options,label:t.$t("Role"),disabled:t.disabled,outlined:"",multiple:""},on:{change:t.change},model:{value:t.roles,callback:function(e){t.roles=e},expression:"roles"}})},i=[]},kDHF:function(t,e,s){"use strict";var r={props:{disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{period:"month",options:[{text:this.$t("Week"),value:"week"},{text:this.$t("Month"),value:"month"},{text:this.$t("Year"),value:"year"}]}},methods:{change:function(){this.$emit("change",{period:this.period})}}};e.a=r},r6ul:function(t,e,s){"use strict";var r=s("YW/g"),i=s("HJ4Y"),a=s("SasW");function n(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function o(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?n(Object(s),!0).forEach((function(e){l(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function l(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var c={components:{FilterByPeriod:r.a,FilterByComparisonPeriod:i.a,FilterByRole:a.a},props:{components:{type:Array,required:!1,default:function(){return["period"]}},disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{menu:!1,filters:null}},methods:{change:function(t){this.filters=o(o({},this.filters),t)},apply:function(t){this.menu=!1,this.$emit("apply",this.filters)}}};e.a=c},slli:function(t,e,s){"use strict";s.d(e,"a",(function(){return r})),s.d(e,"b",(function(){return i}));var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-select",{attrs:{items:t.options,label:t.$t("Period"),disabled:t.disabled,outlined:""},on:{change:t.change},model:{value:t.period,callback:function(e){t.period=e},expression:"period"}})},i=[]},wcJE:function(t,e,s){"use strict";var r={props:{disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{period:null,options:[{text:this.$t("This week"),value:"week"},{text:this.$t("Previous week"),value:"prev_week"},{text:this.$t("This month"),value:"month"},{text:this.$t("Previous month"),value:"prev_month"},{text:this.$t("This year"),value:"year"},{text:this.$t("Previous year"),value:"prev_year"},{text:this.$t("All time"),value:null}]}},methods:{change:function(){this.$emit("change",{period:this.period})}}};e.a=r}}]);
//# sourceMappingURL=admin-dashboard-affiliates.js.map