(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["30a3d60c"],{"26ee":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{attrs:{padding:"",id:"prereg"}},[n("div",{staticClass:"text-center text-h5 q-mt-md"},[e._v("Cadastro")]),n("div",{staticClass:"text-center caption q-mb-xl"},[e._v("\n    Adicione seu CEP\n  ")]),n("q-input",{staticClass:"full-width desktop-only",attrs:{outlined:"",mask:"########",label:"CEP"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.buscarCEP(t)}},model:{value:e.cep,callback:function(t){e.cep=t},expression:"cep"}}),n("q-input",{staticClass:"full-width desktop-hide",attrs:{outlined:"",mask:"########",label:"CEP"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.buscarCEP(t)},blur:e.buscarCEP},scopedSlots:e._u([{key:"append",fn:function(){return[e.confirm?n("q-icon",{staticClass:"cursor-pointer",attrs:{name:"check_circle",color:"positive"}}):e._e()]},proxy:!0}]),model:{value:e.cep,callback:function(t){e.cep=t},expression:"cep"}}),n("br"),e.confirm?e._e():n("q-btn",{staticClass:"full-width q-mb-xl",attrs:{color:"positive",icon:"place",label:"Minha localização",size:"lg"},on:{click:e.gps}}),n("div",{staticClass:"text-center text-weight-light"},[e._v("\n    "+e._s(e.endereco.logradouro)),n("br"),e._v("\n    "+e._s(e.endereco.bairro)+" - "+e._s(e.endereco.cidade)+"\n  ")]),n("q-btn",{staticClass:"full-width q-mt-xl",attrs:{color:"positive",label:"Continuar",size:"lg",disable:!e.confirm},on:{click:function(t){return e.$router.push("registrarendereco")}}})],1)},s=[],c={name:"BuscaCEP",data:function(){return{cep:"",confirm:!1,endereco:""}},methods:{buscarCEP:function(){var e=this;this.$axios.get("https://api.postmon.com.br/v1/cep/"+this.cep).then(function(t){e.confirm=!0,e.endereco=t.data,localStorage.setItem("endereco",JSON.stringify(t.data)),console.log(t)}).catch(function(t){console.log("ERRO: ",t.response),void 0!==t.response?e.$q.notify({message:t.response.statusText,color:"red"}):e.$q.notify({message:"CEP inválido",color:"red"})})},gps:function(){this.$q.notify("Captura o enderço via geolocalização")}}},i=c,r=(n("3709"),n("2877")),a=Object(r["a"])(i,o,s,!1,null,null,null);t["default"]=a.exports},3709:function(e,t,n){"use strict";var o=n("4d15"),s=n.n(o);s.a},"4d15":function(e,t,n){}}]);