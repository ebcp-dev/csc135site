webpackJsonp([0],{"7zck":function(t,e){},"F8+k":function(t,e,a){t.exports=a.p+"static/img/profile.ba8e219.jpg"},"J/92":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("/5sW"),r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"intro"},[n("v-jumbotron",{attrs:{color:"white"}},[n("v-container",{attrs:{"fill-height":""}},[n("v-layout",{attrs:{"align-center":""}},[n("v-flex",[n("v-avatar",{attrs:{size:"150"}},[n("img",{attrs:{src:a("F8+k"),alt:"avatar"}})]),t._v(" "),n("h3",{staticClass:"display-3"},[t._v(t._s(t.name))]),t._v(" "),n("h3",{staticClass:"subheading"},[t._v(t._s(t.email))]),t._v(" "),n("v-divider",{staticClass:"my-3"}),t._v(" "),n("h3",{staticClass:"subheading"},[t._v(t._s(t.intro))])],1)],1)],1)],1)],1)},staticRenderFns:[]};var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"knowledge"},[a("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",[a("v-card",{attrs:{color:"green darken-1"}},[a("v-card-text",{staticClass:"px-0"},[a("h3",{staticClass:"headline mb-0"},[t._v("Languages")])]),t._v(" "),t._l(t.languages,function(e){return a("v-list",{staticClass:"content-card"},[t._v("\n                      "+t._s(e.name)+"\n                  ")])})],2),t._v(" "),a("br"),t._v(" "),a("v-card",{attrs:{color:"green darken-1"}},[a("v-card-text",{staticClass:"px-0"},[a("h3",{staticClass:"headline mb-0"},[t._v("Interests")])]),t._v(" "),t._l(t.interests,function(e){return a("v-list",{staticClass:"content-card",attrs:{"two-line":""}},[a("v-container",[t._v("\n                          "+t._s(e.name)+":\n                          "+t._s(e.why)+"\n                      ")])],1)})],2)],1)],1)],1)],1)},staticRenderFns:[]};var i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pl1"},[a("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[a("v-card",{attrs:{color:"green darken-1"}},[a("v-card-text",{staticClass:"px-0"},[a("h3",{staticClass:"headline mb-0"},[t._v("Definitions")])]),t._v(" "),t._l(t.definitions,function(e){return a("v-list",{attrs:{"three-line":""}},[a("v-container",[a("p",{staticClass:"title"},[t._v(t._s(e.term))]),t._v(" "),a("p",{staticClass:"subheading"},[t._v(t._s(e.definition))]),t._v(" "),a("p",{staticClass:"body-2"},[t._v("Source: "+t._s(e.source))])])],1)})],2)],1)],1)},staticRenderFns:[]};var o={name:"App",components:{Intro:a("VU/8")({name:"Intro",data:function(){return{name:"Earl Perez",email:"ebcperezcsc@gmail.com",intro:"I am a Computer Science student at Sacramento State University. My hobbies include playing and watching basketball. My goal is to make enough money to buy a Lambo."}}},r,!1,function(t){a("yABX")},"data-v-4a17a102",null).exports,Knowledge:a("VU/8")({name:"Knowledge",data:function(){return{languages:[{name:"Java"},{name:"JavaScript"},{name:"Python"},{name:"HTML/CSS"},{name:"SQL"}],interests:[{name:"Elixir",why:"Elixir is a functional programming language that is very easy to follow. Learning functional programming helps you approach problems from a different perspectives."},{name:"Go",why:"Go is a language released by Google in 2009 and is growing in popularity due to its focuse on simplicity, conciseness, readability, concurrency and performance."},{name:"C#",why:"C# is a versatile object-oriented language that is used by many industries, from web development to graphics programming."}]}}},s,!1,function(t){a("J/92")},"data-v-6b5784b2",null).exports,PL1:a("VU/8")({name:"PL1",data:function(){return{definitions:[{term:"Syntax",definition:"Aspects of a programming language that can be modeled by a context-free grammar.",source:"An Introduction to Formal Languages and Automata 5E by Peter Linz, Ch 5.3"},{term:"Semantics",definition:"How we interpret the meaning of a particular construct.",source:"An Introduction to Formal Languages and Automata 5E by Peter Linz, Ch 5.3"},{term:"Lexical Scanning",definition:"Process of converting a sequence of characters into a sequence of tokens.",source:"https://en.wikipedia.org/wiki/Lexical_analysis"},{term:"Parsing",definition:"Explaining a sentence through its grammatical derivation from a study of natural languages.",source:"An Introduction to Formal Languages and Automata 5E by Peter Linz, Ch 5.1"},{term:"Parser",definition:"A parser takes an input of tokens to build a data structure.",source:"https://www.techopedia.com/definition/3854/parser"}]}}},i,!1,function(t){a("SWIc")},"data-v-3f0dd4ae",null).exports}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"app"}},[a("v-toolbar",{attrs:{color:"green darken-4",dark:"",app:""}},[a("v-toolbar-title",[t._v("Earl Perez")])],1),t._v(" "),a("v-content",[a("v-container",{attrs:{"fill-height":""}},[a("v-layout",{attrs:{wrap:"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",lg12:"",md12:""}},[a("Intro"),t._v(" "),a("Knowledge"),t._v(" "),a("br"),t._v(" "),a("v-card",{attrs:{color:"green darken-1"}},[a("v-card-text",{staticClass:"px-0"},[a("h3",{staticClass:"headline mb-0"},[t._v("Assignments")])]),t._v(" "),a("v-expansion-panel",{attrs:{expand:""}},[a("v-expansion-panel-content",[a("div",{attrs:{slot:"header"},slot:"header"},[t._v("PL Assignment 1")]),t._v(" "),a("PL1")],1)],1)],1)],1)],1)],1)],1),t._v(" "),a("v-footer",{attrs:{height:"50",color:"green darken-4",app:""}},[a("v-layout",{attrs:{"justify-center":""}},[a("span",{staticClass:"white--text"},[t._v("Computing Theory and Programming Languages")])])],1)],1)},staticRenderFns:[]};var l=a("VU/8")(o,c,!1,function(t){a("PlqC")},null,null).exports,u=a("3EgV"),d=a.n(u);a("7zck");n.a.config.productionTip=!1,n.a.use(d.a),new n.a({el:"#app",render:function(t){return t(l)}})},PlqC:function(t,e){},SWIc:function(t,e){},yABX:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2d33a03ab3ff70daf2a5.js.map