(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["67bf3734"],{"3eaf":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-list",[n("q-item-label",{staticClass:"text-white",attrs:{header:""}},[e._v("carrinho")])],1)},i=[],r={data:function(){return{}}},o=r,s=n("2877"),l=Object(s["a"])(o,a,i,!1,null,null,null);t["a"]=l.exports},9231:function(e,t,n){},b06b:function(e,t,n){"use strict";var a=n("0967"),i=n("2b0e");t["a"]=function(e,t){var n=window.open;if(!0===a["a"].is.cordova){if(void 0!==cordova&&void 0!==cordova.InAppBrowser&&void 0!==cordova.InAppBrowser.open)n=cordova.InAppBrowser.open;else if(void 0!==navigator&&void 0!==navigator.app)return navigator.app.loadUrl(e,{openExternal:!0})}else if(void 0!==i["a"].prototype.$q.electron)return i["a"].prototype.$q.electron.shell.openExternal(e);var r=n(e,"_blank");if(r)return r.focus(),r;t&&t()}},d2be:function(e,t,n){"use strict";var a=n("9231"),i=n.n(a);i.a},d888:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-layout",{attrs:{view:"lHh Lpr lFf"}},[n("q-header",{staticClass:"bg-white text-grey"},[n("q-toolbar",[n("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu",disable:""},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}},[n("q-icon",{attrs:{name:"menu"}})],1),n("q-toolbar-title",{staticClass:"text-weight-bolder text-center"},[e._v("\n        Logo\n      ")]),n("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"ion-cart",disable:""},on:{click:function(t){e.rightDrawerOpen=!e.rightDrawerOpen}}})],1)],1),n("q-page-container",[n("router-view")],1)],1)},i=[],r=n("b06b"),o=n("ff87"),s=n("3eaf"),l={name:"MyLayout",components:{mainMenu:o["a"],cCart:s["a"]},data:function(){return{leftDrawerOpen:this.$q.platform.is.desktop,rightDrawerOpen:this.$q.platform.is.desktop,disabled:!1}},methods:{openURL:r["a"]},beforeUpdate:function(){"/login"!==this.$route.path&&"/register"!==this.$route.path||(this.disabled=!0)}},c=l,p=(n("d2be"),n("2877")),d=Object(p["a"])(c,a,i,!1,null,null,null);t["default"]=d.exports},ff87:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-list",{staticClass:"text-white text-weight-bolder text-h5",attrs:{"no-border":""}},[n("q-expansion-item",{attrs:{"expand-separator":"",label:"Cães","expand-icon":"chevron_right","expand-icon-class":"text-white"}},[n("div",{staticStyle:{padding:"0 15px"}},e._l(e.lista,function(e,t){return n("q-list",{key:t},[n("q-expansion-item",{attrs:{"expand-separator":"",label:e,"expand-icon":"chevron_right","expand-icon-class":"text-white","switch-toggle-side":""}})],1)}),1)]),n("q-expansion-item",{attrs:{"expand-separator":"",label:"Gatos","expand-icon":"chevron_right","expand-icon-class":"text-white"}},[n("div",{staticStyle:{padding:"0 15px"}},e._l(e.lista,function(e,t){return n("q-list",{key:t},[n("q-expansion-item",{attrs:{"expand-separator":"",label:e,"expand-icon":"chevron_right","expand-icon-class":"text-white","switch-toggle-side":""}})],1)}),1)]),n("q-expansion-item",{attrs:{"expand-separator":"",label:"Aves","expand-icon":"chevron_right","expand-icon-class":"text-white"}},[n("div",{staticStyle:{padding:"0 15px"}},e._l(e.lista,function(e,t){return n("q-list",{key:t},[n("q-expansion-item",{attrs:{"expand-separator":"",label:e,"expand-icon":"chevron_right","expand-icon-class":"text-white","switch-toggle-side":""}})],1)}),1)]),n("q-expansion-item",{attrs:{"expand-separator":"",label:"Roedores","expand-icon":"chevron_right","expand-icon-class":"text-white"}},[n("div",{staticStyle:{padding:"0 15px"}},e._l(e.lista,function(e,t){return n("q-list",{key:t},[n("q-expansion-item",{attrs:{"expand-separator":"",label:e,"expand-icon":"chevron_right","expand-icon-class":"text-white","switch-toggle-side":""}})],1)}),1)]),n("q-expansion-item",{attrs:{"expand-separator":"",label:"Outros","expand-icon":"chevron_right","expand-icon-class":"text-white"}}),n("q-expansion-item",{attrs:{"expand-separator":"",label:"Intitucional","expand-icon":"chevron_right","expand-icon-class":"text-white"}})],1)},i=[],r={name:"ComponentMenu",data:function(){return{lista:["Acessórios","Bebedouros","Comedouros","Casinhas","Higiene"]}}},o=r,s=n("2877"),l=Object(s["a"])(o,a,i,!1,null,null,null);t["a"]=l.exports}}]);