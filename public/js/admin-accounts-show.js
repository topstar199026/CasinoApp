(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"4Z32":function(t,a,e){"use strict";var n=e("o0o1"),i=e.n(n),r=e("vDqi"),s=e.n(r),o=e("/rcJ"),c=e("ZXch");function l(t,a,e,n,i,r,s){try{var o=t[r](s),c=o.value}catch(t){return void e(t)}o.done?a(c):Promise.resolve(c).then(n,i)}var u={name:"KeyValueTable",props:["name","api","headers"],data:function(){return{data:null}},watch:{api:function(){this.loadData()}},created:function(){this.loadData()},methods:{value:function(t){var a=t.lookup?this.data[t.lookup][this.data[this.name][t.value]]:Object(c.e)(this.data[this.name],t.value);return"boolean"==typeof a?a?this.$t("Yes"):this.$t("No"):t.format?this.format(t.format,a):a},format:function(t,a){return"function"==typeof o[t]?o[t](a):a},loadData:function(){var t,a=this;return(t=i.a.mark((function t(){var e,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.data=null,t.next=3,s.a.get(a.api);case 3:e=t.sent,n=e.data,a.data=n,n[a.name]&&a.$emit("load",{data:n[a.name]});case 7:case"end":return t.stop()}}),t)})),function(){var a=this,e=arguments;return new Promise((function(n,i){var r=t.apply(a,e);function s(t){l(r,n,i,s,o,"next",t)}function o(t){l(r,n,i,s,o,"throw",t)}s(void 0)}))})()}}};a.a=u},Xwb5:function(t,a,e){"use strict";e.r(a);var n=e("TSrn"),i=e("XBgU"),r={middleware:["auth","verified","2fa_passed","admin"],components:{KeyValueTable:n.a,AccountMenu:i.a},props:["id"],metaInfo:function(){return{title:this.$t("Account {0}",[this.id])}},computed:{headers:function(){return[{text:this.$t("ID"),value:"id"},{text:this.$t("User"),value:"user.name"},{text:this.$t("Balance"),value:"balance",format:"decimal"},{text:this.$t("Created at"),value:"created_at"},{text:this.$t("Updated at"),value:"updated_at"}]}}},s=e("KHd+"),o=e("ZUTo"),c=e.n(o),l=e("gzZi"),u=e("sK+t"),v=e("mdmw"),d=e("Yq0q"),m=e("pSOK"),f=e("Ey0z"),_=e("D9m0"),p=e("L6Q5"),h=e("cdmR"),b=e("Kn9U"),w=Object(s.a)(r,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-row",{attrs:{align:"center",justify:"center"}},[e("v-col",{attrs:{cols:"12",md:"6"}},[e("v-card",[e("v-toolbar",[e("v-btn",{attrs:{icon:""},on:{click:function(a){return t.$router.go(-1)}}},[e("v-icon",[t._v("mdi-arrow-left")])],1),t._v(" "),e("v-toolbar-title",[t._v("\n            "+t._s(t.$t("Account {0}",[t.id]))+"\n          ")]),t._v(" "),e("v-spacer"),t._v(" "),e("account-menu",{attrs:{id:t.id}})],1),t._v(" "),e("v-card-text",[e("key-value-table",{attrs:{name:"account",api:"/api/admin/accounts/"+t.id,headers:t.headers},scopedSlots:t._u([{key:"user.name",fn:function(a){var n=a.item.user;return[e("router-link",{attrs:{to:{name:"admin.users.show",params:{id:n.id}}}},[t._v(t._s(n.name))])]}}])})],1)],1)],1)],1)],1)}),[],!1,null,null,null);a.default=w.exports;c()(w,{VBtn:l.a,VCard:u.a,VCardText:v.c,VCol:d.a,VContainer:m.a,VIcon:f.a,VRow:_.a,VSpacer:p.a,VToolbar:h.a,VToolbarTitle:b.a})},hzom:function(t,a,e){"use strict";e.d(a,"a",(function(){return n})),e.d(a,"b",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[e("tbody",[t._l(t.headers,(function(a){return e("tr",{key:a.value},[e("td",[t._v(t._s(a.text))]),t._v(" "),e("td",{staticClass:"text-right"},[t.data?t._t(a.value,[t._v("\n            "+t._s(t.value(a))+"\n          ")],{item:t.data[t.name]}):e("v-skeleton-loader",{attrs:{type:"text","min-width":"60"}})],2)])})),t._v(" "),t.data?t._t("after",null,{item:t.data}):t._e()],2)]},proxy:!0}],null,!0)})},i=[]},pDNZ:function(t,a,e){"use strict";e.d(a,"a",(function(){return n})),e.d(a,"b",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-menu",{attrs:{"offset-y":!0,transition:"scroll-y-transition",bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on;return[e("v-btn",t._g({attrs:{icon:""}},n),[e("v-icon",{attrs:{small:t.small}},[t._v("mdi-dots-vertical")])],1)]}}])},[t._v(" "),e("v-list",[e("v-list-item",{attrs:{to:{name:"admin.accounts.show",params:{id:t.id}},exact:""}},[e("v-list-item-icon",[e("v-icon",{attrs:{small:t.small}},[t._v("mdi-eye")])],1),t._v(" "),e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(t.$t("View")))])],1)],1),t._v(" "),e("v-list-item",{attrs:{to:{name:"admin.accounts.transactions",params:{id:t.id}},exact:""}},[e("v-list-item-icon",[e("v-icon",{attrs:{small:t.small}},[t._v("mdi-format-list-bulleted")])],1),t._v(" "),e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(t.$t("Transactions")))])],1)],1),t._v(" "),e("v-list-item",{attrs:{to:{name:"admin.accounts.debit",params:{id:t.id}},exact:""}},[e("v-list-item-icon",[e("v-icon",{attrs:{small:t.small}},[t._v("mdi-minus")])],1),t._v(" "),e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(t.$t("Debit")))])],1)],1),t._v(" "),e("v-list-item",{attrs:{to:{name:"admin.accounts.credit",params:{id:t.id}},exact:""}},[e("v-list-item-icon",[e("v-icon",{attrs:{small:t.small}},[t._v("mdi-plus")])],1),t._v(" "),e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(t.$t("Credit")))])],1)],1)],1)],1)},i=[]},u3Vc:function(t,a,e){"use strict";a.a={props:["id","small"]}}}]);
//# sourceMappingURL=admin-accounts-show.js.map