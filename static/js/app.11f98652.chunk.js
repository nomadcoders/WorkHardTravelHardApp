(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{83:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var r=n(18),o=n.n(r),a=n(41),c=n.n(a),i=n(1),l=n.n(i),s=n(81),u=n(0),f=n.n(u),p=n(2),d=n(27),y=n(5),b=n(42),m=n(72),g=n(54),w=n(82),h=n(15),O=n(119),j=n(47),v="black",D="#3A3D40",E="#1A1C20";function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(){var e=Object(u.useState)(!0),t=c()(e,2),n=t[0],r=t[1],a=Object(u.useState)(""),i=c()(a,2),p=i[0],v=i[1],E=Object(u.useState)({}),x=c()(E,2),S=x[0],z=x[1];Object(u.useEffect)((function(){T()}),[]);var C=function(e){return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.awrap(j.a.setItem("@toDos",JSON.stringify(e)));case 2:case"end":return t.stop()}}),null,null,null,Promise)},T=function(){var e;return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.awrap(j.a.getItem("@toDos"));case 2:(e=t.sent)&&z(JSON.parse(e));case 4:case"end":return t.stop()}}),null,null,null,Promise)};return f.a.createElement(y.a,{style:k.container},f.a.createElement(s.a,{style:"auto"}),f.a.createElement(y.a,{style:k.header},f.a.createElement(b.a,{onPress:function(){return r(!0)}},f.a.createElement(d.a,{style:{fontSize:38,fontWeight:"600",color:n?"white":D}},"Work")),f.a.createElement(b.a,{onPress:function(){return r(!1)}},f.a.createElement(d.a,{style:{fontSize:38,fontWeight:"600",color:n?D:"white"}},"Travel"))),f.a.createElement(m.a,{onSubmitEditing:function(){if(""!==p){var e=P(P({},S),{},o()({},Date.now(),{text:p,working:n}));z(e),C(e),v("")}},onChangeText:function(e){return v(e)},returnKeyType:"done",value:p,placeholder:n?"What do you have to do?":"Where do you want to go?",style:k.input}),f.a.createElement(w.a,null,Object.keys(S).map((function(e){return S[e].working===n?f.a.createElement(y.a,{style:k.toDo,key:e},f.a.createElement(d.a,{style:k.toDoText},S[e].text),f.a.createElement(b.a,{onPress:function(){return function(e){if("web"===h.a.OS){if(confirm("Do you want to delete this To Do?")){var t=P({},S);delete t[e],z(t),C(t)}}else g.a.alert("Delete To Do","Are you sure?",[{text:"Cancel",style:"cancel"},{text:"I'm Sure",style:"destructive",onPress:function(){var t=P({},S);delete t[e],z(t),C(t)}}])}(e)}},f.a.createElement(O.a,{name:"trash",size:18,color:D}))):null}))))}var k=p.a.create({container:{flex:1,backgroundColor:v,paddingHorizontal:20},header:{justifyContent:"space-between",flexDirection:"row",marginTop:100},input:{backgroundColor:"white",paddingVertical:15,paddingHorizontal:20,borderRadius:30,marginVertical:20,fontSize:18},toDo:{backgroundColor:E,marginBottom:10,paddingVertical:20,paddingHorizontal:20,borderRadius:15,flexDirection:"row",alignItems:"center",justifyContent:"space-between"},toDoText:{color:"white",fontSize:16,fontWeight:"600"}})},85:function(e,t,n){e.exports=n(114)}},[[85,1,2]]]);
//# sourceMappingURL=app.11f98652.chunk.js.map