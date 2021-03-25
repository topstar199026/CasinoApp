(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{"1xAO":function(e,t,a){"use strict";t.a={props:["id","small"]}},"IeE+":function(e,t,a){"use strict";a.r(t);var i=a("o0o1"),n=a.n(i),r=a("vDqi"),s=a.n(r),l=a("H7iI"),o=a("ZXch");function c(e,t,a,i,n,r,s){try{var l=e[r](s),o=l.value}catch(e){return void a(e)}l.done?t(o):Promise.resolve(o).then(i,n)}var v={middleware:["auth","verified","2fa_passed"],components:{Preloader:a("Rc+0").a,GameMenu:l.a},props:["id"],metaInfo:function(){return{title:this.$t("Game {0}",[this.id])}},data:function(){return{game:null,serverHashModal:!1,clientHashModal:!1,shiftValueModal:!1}},computed:{serverHashCalculationCode:function(){return this.game?'print hash_hmac("sha256", "'.concat(this.game.provably_fair_game.secret,'", "').concat(this.game.provably_fair_game.server_seed,'")'):""},clientHashCalculationCode:function(){return this.game?'print hash_hmac("sha256", "'.concat(this.game.provably_fair_game.secret).concat(this.game.provably_fair_game.server_seed,'", "').concat(this.game.provably_fair_game.client_seed,'")'):""},shiftValueCalculationCode:function(){return this.game?'print hexdec(substr("'.concat(this.game.provably_fair_game.client_hash,'", -5))'):""}},created:function(){var e,t=this;return(e=n.a.mark((function e(){var a,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/api/history/games/".concat(t.id,"/verify"));case 2:a=e.sent,i=a.data.game,t.game=i;case 5:case"end":return e.stop()}}),e)})),function(){var t=this,a=arguments;return new Promise((function(i,n){var r=e.apply(t,a);function s(e){c(r,i,n,s,l,"next",e)}function l(e){c(r,i,n,s,l,"throw",e)}s(void 0)}))})()},methods:{copyToClipboard:function(e){return Object(o.b)(e.$el.querySelector("textarea"))}}},d=a("KHd+"),h=a("ZUTo"),m=a.n(h),u=a("gzZi"),_=a("sK+t"),f=a("mdmw"),p=a("Yq0q"),g=a("pSOK"),b=a("FpqX"),y=a("Ey0z"),C=a("D9m0"),$=a("L6Q5"),x=a("hlRy"),w=a("qEQh"),H=a("cdmR"),k=a("Kn9U"),V=Object(d.a)(v,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",lg:"8"}},[a("v-card",[a("v-toolbar",[a("v-btn",{attrs:{icon:""},on:{click:function(t){return e.$router.go(-1)}}},[a("v-icon",[e._v("mdi-arrow-left")])],1),e._v(" "),a("v-toolbar-title",[e._v("\n            "+e._s(e.$t("Game {0}",[e.id]))+"\n          ")]),e._v(" "),a("v-spacer"),e._v(" "),a("game-menu",{attrs:{id:e.id}}),e._v(" "),a("preloader",{attrs:{active:!e.game}})],1),e._v(" "),a("v-card-text",[a("v-text-field",{staticClass:"mb-5",attrs:{value:e.game?e.game.provably_fair_game.secret:"",label:e.$t("Server secret"),outlined:"",readonly:"",disabled:!e.game,hint:e.$t("Randomly generated by the server before each game."),"persistent-hint":""}}),e._v(" "),a("v-text-field",{staticClass:"mb-5",attrs:{value:e.game?e.game.provably_fair_game.server_seed:"",label:e.$t("Server seed"),outlined:"",readonly:"",disabled:!e.game,hint:e.$t("Randomly generated by the server before each game."),"persistent-hint":""}}),e._v(" "),a("v-text-field",{staticClass:"mb-5",attrs:{value:e.game?e.game.provably_fair_game.hash:"",label:e.$t("Server hash"),outlined:"",readonly:"",disabled:!e.game,hint:e.$t("HMAC SHA256 hash of the server secret with server seed as the key, revealed to player before each game."),"persistent-hint":"","append-icon":"mdi-code-tags"},on:{"click:append":function(t){e.serverHashModal=!0}}}),e._v(" "),a("v-text-field",{staticClass:"mb-5",attrs:{value:e.game?e.game.provably_fair_game.client_seed:"",label:e.$t("Client seed"),outlined:"",readonly:"",disabled:!e.game,hint:e.$t("A random string, which is provided before each game from the client side (by the player)."),"persistent-hint":""}}),e._v(" "),a("v-text-field",{staticClass:"mb-5",attrs:{value:e.game?e.game.provably_fair_game.client_hash:"",label:e.$t("Client hash"),outlined:"",readonly:"",disabled:!e.game,hint:e.$t("HMAC SHA256 hash of the server secret and server seed with client seed as the key."),"persistent-hint":"","append-icon":"mdi-code-tags"},on:{"click:append":function(t){e.clientHashModal=!0}}}),e._v(" "),a("v-text-field",{staticClass:"mb-5",attrs:{value:e.game?e.game.provably_fair_game.shift_value:"",label:e.$t("Shift value"),outlined:"",readonly:"",disabled:!e.game,hint:e.$t("Last 5 chars of the Client hash are converted to a decimal value."),"persistent-hint":"","append-icon":"mdi-code-tags"},on:{"click:append":function(t){e.shiftValueModal=!0}}}),e._v(" "),a("v-text-field",{attrs:{value:e.game?e.game.gameable[e.game.gameable.secret_attribute]:"",label:e.$t("Adjusted secret"),outlined:"",readonly:"",disabled:!e.game,hint:e.game?e.game.gameable.secret_attribute_hint:"","persistent-hint":""}}),e._v(" "),a("v-dialog",{attrs:{width:"600"},model:{value:e.serverHashModal,callback:function(t){e.serverHashModal=t},expression:"serverHashModal"}},[a("v-card",[a("v-toolbar",[a("v-toolbar-title",[e._v("\n                  "+e._s(e.$t("Server hash"))+"\n                ")]),e._v(" "),a("v-spacer"),e._v(" "),a("v-btn",{attrs:{icon:""},on:{click:function(t){e.serverHashModal=!1}}},[a("v-icon",[e._v("mdi-close")])],1)],1),e._v(" "),a("v-card-text",{staticClass:"pa-4"},[a("p",[e._v(e._s(e.$t("Server hash can be calculated using the following PHP code.")))]),e._v(" "),a("v-textarea",{ref:"server_hash",attrs:{outlined:"",readonly:"",label:e.$t("Code"),value:e.serverHashCalculationCode}}),e._v(" "),a("v-btn",{on:{click:function(t){return e.copyToClipboard(e.$refs.server_hash)}}},[e._v("\n                  "+e._s(e.$t("Copy"))+"\n                ")]),e._v(" "),a("v-btn",{attrs:{href:"http://phpfiddle.org",target:"_blank"}},[e._v("\n                  "+e._s(e.$t("Run on phpfiddle.org"))+"\n                ")])],1)],1)],1),e._v(" "),a("v-dialog",{attrs:{width:"600"},model:{value:e.clientHashModal,callback:function(t){e.clientHashModal=t},expression:"clientHashModal"}},[a("v-card",[a("v-toolbar",[a("v-toolbar-title",[e._v("\n                  "+e._s(e.$t("Client hash"))+"\n                ")]),e._v(" "),a("v-spacer"),e._v(" "),a("v-btn",{attrs:{icon:""},on:{click:function(t){e.clientHashModal=!1}}},[a("v-icon",[e._v("mdi-close")])],1)],1),e._v(" "),a("v-card-text",{staticClass:"pa-4"},[a("p",[e._v(e._s(e.$t("Client hash can be calculated using the following PHP code.")))]),e._v(" "),a("v-textarea",{ref:"client_hash",attrs:{outlined:"",readonly:"",label:e.$t("Code"),value:e.clientHashCalculationCode}}),e._v(" "),a("v-btn",{on:{click:function(t){return e.copyToClipboard(e.$refs.client_hash)}}},[e._v("\n                  "+e._s(e.$t("Copy"))+"\n                ")]),e._v(" "),a("v-btn",{attrs:{href:"http://phpfiddle.org",target:"_blank"}},[e._v("\n                  "+e._s(e.$t("Run on phpfiddle.org"))+"\n                ")])],1)],1)],1),e._v(" "),a("v-dialog",{attrs:{width:"600"},model:{value:e.shiftValueModal,callback:function(t){e.shiftValueModal=t},expression:"shiftValueModal"}},[a("v-card",[a("v-toolbar",[a("v-toolbar-title",[e._v("\n                  "+e._s(e.$t("Shift value"))+"\n                ")]),e._v(" "),a("v-spacer"),e._v(" "),a("v-btn",{attrs:{icon:""},on:{click:function(t){e.shiftValueModal=!1}}},[a("v-icon",[e._v("mdi-close")])],1)],1),e._v(" "),a("v-card-text",{staticClass:"pa-4"},[a("p",[e._v(e._s(e.$t("Server hash can be calculated using the following PHP code.")))]),e._v(" "),a("v-textarea",{ref:"shift_value",attrs:{outlined:"",readonly:"",label:e.$t("Code"),value:e.shiftValueCalculationCode}}),e._v(" "),a("v-btn",{on:{click:function(t){return e.copyToClipboard(e.$refs.shift_value)}}},[e._v("\n                  "+e._s(e.$t("Copy"))+"\n                ")]),e._v(" "),a("v-btn",{attrs:{href:"http://phpfiddle.org",target:"_blank"}},[e._v("\n                  "+e._s(e.$t("Run on phpfiddle.org"))+"\n                ")])],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=V.exports;m()(V,{VBtn:u.a,VCard:_.a,VCardText:f.c,VCol:p.a,VContainer:g.a,VDialog:b.a,VIcon:y.a,VRow:C.a,VSpacer:$.a,VTextField:x.a,VTextarea:w.a,VToolbar:H.a,VToolbarTitle:k.a})},LaPG:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return n}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-menu",{attrs:{"offset-y":!0,transition:"scroll-y-transition",bottom:"",left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on;return[a("v-btn",e._g({attrs:{icon:""}},i),[a("v-icon",{attrs:{small:e.small}},[e._v("mdi-dots-vertical")])],1)]}}])},[e._v(" "),a("v-list",[a("v-list-item",{attrs:{to:{name:"history.games.show",params:{id:e.id}},exact:""}},[a("v-list-item-icon",[a("v-icon",{attrs:{small:e.small}},[e._v("mdi-eye")])],1),e._v(" "),a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(e.$t("View")))])],1)],1),e._v(" "),a("v-list-item",{attrs:{to:{name:"history.games.details",params:{id:e.id}},exact:""}},[a("v-list-item-icon",[a("v-icon",{attrs:{small:e.small}},[e._v("mdi-table-eye")])],1),e._v(" "),a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(e.$t("Details")))])],1)],1),e._v(" "),a("v-list-item",{attrs:{to:{name:"history.games.verify",params:{id:e.id}},exact:""}},[a("v-list-item-icon",[a("v-icon",{attrs:{small:e.small}},[e._v("mdi-check-decagram")])],1),e._v(" "),a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(e.$t("Verify")))])],1)],1)],1)],1)},n=[]}}]);
//# sourceMappingURL=history-games-verify.js.map