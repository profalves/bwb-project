(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d21f869"],{d9ca:function(e,r,t){"use strict";t.r(r);var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("q-page",{attrs:{padding:""}},[t("div",{staticClass:"text-center text-h5 q-mt-md"},[e._v("Cadastro")]),t("div",{staticClass:"text-center caption q-mb-xl"},[e._v("\n    Adicione seu Endereço\n  ")]),t("q-input",{attrs:{outlined:"",label:"CEP"},model:{value:e.endereco.cep,callback:function(r){e.$set(e.endereco,"cep",r)},expression:"endereco.cep"}}),t("br"),t("div",{directives:[{name:"show",rawName:"v-show",value:e.endereco.bairro||e.endereco.cidade,expression:"endereco.bairro || endereco.cidade"}],staticClass:"caption"},[e._v("\n    "+e._s(e.endereco.bairro?"Bairro: "+e.endereco.bairro+" - Cidade: "+e.endereco.cidade:"Cidade: "+e.endereco.cidade)+"\n  ")]),t("br"),t("q-input",{attrs:{outlined:"",label:"Endereço"},model:{value:e.endereco.logradouro,callback:function(r){e.$set(e.endereco,"logradouro",r)},expression:"endereco.logradouro"}}),t("br"),t("q-input",{attrs:{outlined:"",label:"Número"},model:{value:e.endereco.numero,callback:function(r){e.$set(e.endereco,"numero",r)},expression:"endereco.numero"}}),t("br"),t("q-footer",{staticClass:"bg-transparent text-grey text-center q-pa-md"},[t("q-btn",{staticClass:"full-width",attrs:{color:"positive",label:"Continuar",size:"lg"},on:{click:e.setEndereco}})],1)],1)},o=[],a=t("deb5"),c=t.n(a),d=(t("96cf"),t("f44b")),i=t.n(d),s={name:"Endereço",data:function(){return{endereco:JSON.parse(localStorage.getItem("endereco"))}},methods:{setEndereco:function(){var e=i()(c.a.mark(function e(){return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,localStorage.setItem("endereco",JSON.stringify(this.endereco));case 2:return e.next=4,this.$router.push("registerreview");case 4:case"end":return e.stop()}},e,this)}));function r(){return e.apply(this,arguments)}return r}()}},l=s,u=t("2877"),p=Object(u["a"])(l,n,o,!1,null,null,null);r["default"]=p.exports}}]);