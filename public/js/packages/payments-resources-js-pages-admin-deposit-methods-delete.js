(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{"8t4Q":function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return o}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-menu",{attrs:{"offset-y":!0,transition:"scroll-y-transition",bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-btn",t._g({attrs:{icon:""}},n),[i("v-icon",{attrs:{small:t.small}},[t._v("mdi-dots-vertical")])],1)]}}])},[t._v(" "),i("v-list",["coinpayments"===t.get(t.item,"payment_method.gateway.code")?i("v-list-item",{attrs:{to:{name:"admin.deposit-methods.info",params:{id:t.id}},exact:""}},[i("v-list-item-icon",[i("v-icon",{attrs:{small:t.small}},[t._v("mdi-information-outline")])],1),t._v(" "),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(t.$t("Info")))])],1)],1):t._e(),t._v(" "),"coinpayments"===t.get(t.item,"payment_method.gateway.code")?i("v-list-item",{attrs:{to:{name:"admin.deposit-methods.balance",params:{id:t.id}},exact:""}},[i("v-list-item-icon",[i("v-icon",{attrs:{small:t.small}},[t._v("mdi-wallet-outline")])],1),t._v(" "),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(t.$t("Balance")))])],1)],1):t._e(),t._v(" "),i("v-list-item",{attrs:{to:{name:"admin.deposit-methods.edit",params:{id:t.id}},exact:""}},[i("v-list-item-icon",[i("v-icon",{attrs:{small:t.small}},[t._v("mdi-pencil")])],1),t._v(" "),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(t.$t("Edit")))])],1)],1),t._v(" "),i("v-list-item",{attrs:{to:{name:"admin.deposit-methods.delete",params:{id:t.id}},exact:""}},[i("v-list-item-icon",[i("v-icon",{attrs:{small:t.small}},[t._v("mdi-delete")])],1),t._v(" "),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(t.$t("Delete")))])],1)],1)],1)],1)},o=[]},TaH5:function(t,e,i){"use strict";i.r(e);var n=i("o0o1"),o=i.n(n),a=i("4HBT"),s=i.n(a);function r(t,e,i,n,o,a,s){try{var r=t[a](s),m=r.value}catch(t){return void i(t)}r.done?e(m):Promise.resolve(m).then(n,o)}var m={middleware:["auth","verified","2fa_passed","admin"],components:{DepositMethodMenu:i("fdo1").a},props:["id"],metaInfo:function(){return{title:this.$t("Deposit method {0}",[this.id])}},data:function(){return{form:new s.a}},methods:{destroy:function(){var t,e=this;return(t=o.a.mark((function t(){var i,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.form.delete("/api/admin/deposit-methods/".concat(e.id));case 2:i=t.sent,n=i.data,e.$store.dispatch("message/success",{text:n.message}),e.$router.push({name:"admin.deposit-methods.index"});case 6:case"end":return t.stop()}}),t)})),function(){var e=this,i=arguments;return new Promise((function(n,o){var a=t.apply(e,i);function s(t){r(a,n,o,s,m,"next",t)}function m(t){r(a,n,o,s,m,"throw",t)}s(void 0)}))})()}}},l=i("KHd+"),d=i("ZUTo"),c=i.n(d),v=i("gzZi"),u=i("sK+t"),p=i("mdmw"),_=i("Yq0q"),f=i("pSOK"),h=i("S9TP"),w=i("Ey0z"),y=i("D9m0"),b=i("L6Q5"),$=i("cdmR"),g=i("Kn9U"),x=Object(l.a)(m,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{attrs:{cols:"12",md:"6"}},[i("v-card",[i("v-toolbar",[i("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$router.go(-1)}}},[i("v-icon",[t._v("mdi-arrow-left")])],1),t._v(" "),i("v-toolbar-title",[t._v("\n            "+t._s(t.$t("Deposit method {0}",[t.id]))+"\n          ")]),t._v(" "),i("v-spacer"),t._v(" "),i("deposit-method-menu",{attrs:{id:t.id}})],1),t._v(" "),i("v-card-text",[i("p",[t._v("\n            "+t._s(t.$t("Are you sure you want to delete this deposit method and all related deposits?"))+"\n          ")]),t._v(" "),i("v-form",{on:{submit:function(e){return e.preventDefault(),t.destroy(e)}}},[i("v-btn",{attrs:{type:"submit",color:"error",disabled:t.form.busy,loading:t.form.busy}},[t._v(t._s(t.$t("Delete")))])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=x.exports;c()(x,{VBtn:v.a,VCard:u.a,VCardText:p.c,VCol:_.a,VContainer:f.a,VForm:h.a,VIcon:w.a,VRow:y.a,VSpacer:b.a,VToolbar:$.a,VToolbarTitle:g.a})},kKpL:function(t,e,i){"use strict";var n={props:["id","item","small"],methods:{get:i("ZXch").e}};e.a=n}}]);
//# sourceMappingURL=payments-resources-js-pages-admin-deposit-methods-delete.js.map