(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"1xAO":function(t,e,a){"use strict";e.a={props:["id","small"]}},"4Z32":function(t,e,a){"use strict";var n=a("o0o1"),i=a.n(n),r=a("vDqi"),o=a.n(r),s=a("/rcJ"),l=a("ZXch");function c(t,e,a,n,i,r,o){try{var s=t[r](o),l=s.value}catch(t){return void a(t)}s.done?e(l):Promise.resolve(l).then(n,i)}var u={name:"KeyValueTable",props:["name","api","headers"],data:function(){return{data:null}},watch:{api:function(){this.loadData()}},created:function(){this.loadData()},methods:{value:function(t){var e=t.lookup?this.data[t.lookup][this.data[this.name][t.value]]:Object(l.e)(this.data[this.name],t.value);return"boolean"==typeof e?e?this.$t("Yes"):this.$t("No"):t.format?this.format(t.format,e):e},format:function(t,e){return"function"==typeof s[t]?s[t](e):e},loadData:function(){var t,e=this;return(t=i.a.mark((function t(){var a,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.data=null,t.next=3,o.a.get(e.api);case 3:a=t.sent,n=a.data,e.data=n,n[e.name]&&e.$emit("load",{data:n[e.name]});case 7:case"end":return t.stop()}}),t)})),function(){var e=this,a=arguments;return new Promise((function(n,i){var r=t.apply(e,a);function o(t){c(r,n,i,o,s,"next",t)}function s(t){c(r,n,i,o,s,"throw",t)}o(void 0)}))})()}}};e.a=u},LaPG:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-menu",{attrs:{"offset-y":!0,transition:"scroll-y-transition",bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({attrs:{icon:""}},n),[a("v-icon",{attrs:{small:t.small}},[t._v("mdi-dots-vertical")])],1)]}}])},[t._v(" "),a("v-list",[a("v-list-item",{attrs:{to:{name:"history.games.show",params:{id:t.id}},exact:""}},[a("v-list-item-icon",[a("v-icon",{attrs:{small:t.small}},[t._v("mdi-eye")])],1),t._v(" "),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.$t("View")))])],1)],1),t._v(" "),a("v-list-item",{attrs:{to:{name:"history.games.details",params:{id:t.id}},exact:""}},[a("v-list-item-icon",[a("v-icon",{attrs:{small:t.small}},[t._v("mdi-table-eye")])],1),t._v(" "),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.$t("Details")))])],1)],1),t._v(" "),a("v-list-item",{attrs:{to:{name:"history.games.verify",params:{id:t.id}},exact:""}},[a("v-list-item-icon",[a("v-icon",{attrs:{small:t.small}},[t._v("mdi-check-decagram")])],1),t._v(" "),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.$t("Verify")))])],1)],1)],1)],1)},i=[]},hzom:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("tbody",[t._l(t.headers,(function(e){return a("tr",{key:e.value},[a("td",[t._v(t._s(e.text))]),t._v(" "),a("td",{staticClass:"text-right"},[t.data?t._t(e.value,[t._v("\n            "+t._s(t.value(e))+"\n          ")],{item:t.data[t.name]}):a("v-skeleton-loader",{attrs:{type:"text","min-width":"60"}})],2)])})),t._v(" "),t.data?t._t("after",null,{item:t.data}):t._e()],2)]},proxy:!0}],null,!0)})},i=[]},pzXP:function(t,e,a){"use strict";a.r(e);var n=a("TSrn"),i=a("H7iI"),r=a("4FDZ"),o={middleware:["auth","verified","2fa_passed"],components:{KeyValueTable:n.a,GameMenu:i.a,UserProfileModal:r.a},props:["id"],metaInfo:function(){return{title:this.$t("Game {0}",[this.id])}},computed:{headers:function(){return[{text:this.$t("Player"),value:"account.user.name"},{text:this.$t("Game"),value:"title"},{text:this.$t("Bet"),value:"bet",format:"decimal"},{text:this.$t("Win"),value:"win",format:"decimal"},{text:this.$t("Profit"),value:"profit",format:"decimal"},{text:this.$t("Created at"),value:"created_at"},{text:this.$t("Updated at"),value:"updated_at"}]}}},s=a("KHd+"),l=a("ZUTo"),c=a.n(l),u=a("gzZi"),v=a("sK+t"),m=a("mdmw"),d=a("Yq0q"),f=a("pSOK"),h=a("Ey0z"),p=a("D9m0"),_=a("L6Q5"),y=a("cdmR"),b=a("Kn9U"),x=Object(s.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",lg:"8"}},[a("v-card",[a("v-toolbar",[a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$router.go(-1)}}},[a("v-icon",[t._v("mdi-arrow-left")])],1),t._v(" "),a("v-toolbar-title",[t._v("\n            "+t._s(t.$t("Game {0}",[t.id]))+"\n          ")]),t._v(" "),a("v-spacer"),t._v(" "),a("game-menu",{attrs:{id:t.id}})],1),t._v(" "),a("v-card-text",[a("key-value-table",{attrs:{name:"game",api:"/api/history/games/"+t.id,headers:t.headers},scopedSlots:t._u([{key:"account.user.name",fn:function(t){var e=t.item.account.user;return[a("user-profile-modal",{attrs:{user:e}})]}}])})],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=x.exports;c()(x,{VBtn:u.a,VCard:v.a,VCardText:m.c,VCol:d.a,VContainer:f.a,VIcon:h.a,VRow:p.a,VSpacer:_.a,VToolbar:y.a,VToolbarTitle:b.a})}}]);
//# sourceMappingURL=history-games-show.js.map