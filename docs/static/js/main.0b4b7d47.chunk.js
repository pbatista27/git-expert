(this["webpackJsonpgit-expert"]=this["webpackJsonpgit-expert"]||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},15:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),i=n.n(c),u=(n(15),n(1)),l=n(9),o=n(4),s=n.n(o),m=function(e){var t=e.setcategoria,n=Object(a.useState)(""),c=Object(u.a)(n,2),i=c[0],o=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(l.a)(e))})),o(""))}},r.a.createElement("input",{type:"text",name:"categoria",onChange:function(e){o(e.target.value)},value:i}))};m.prototype={setcategoria:s.a.func.isRequired,inputvalue:s.a.string.isRequired};var p=m,f=function(e){var t=e.title,n=e.url;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:n,alt:t}),r.a.createElement("p",null,t))},d=n(5),g=n.n(d),v=n(8),E=function(){var e=Object(v.a)(g.a.mark((function e(t){var n,a,r,c,i;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=eAiOFL00Pvq6hNLFwmLVzczfhDbnrO4e&q=".concat(encodeURI(t),"&limit=2"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t=e.categoria,n=function(e){var t=Object(a.useState)({loanding:!0,data:[]}),n=Object(u.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){E(e).then((function(e){return c({loanding:!1,data:e})}))}),[e]),r}(t),c=n.loanding,i=n.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,t),c&&"cargando...",r.a.createElement("div",{className:"card-grid"},i.map((function(e){return r.a.createElement(f,Object.assign({key:e.id},e))}))))},b=function(){var e=Object(a.useState)(["dragon ball"]),t=Object(u.a)(e,2),n=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"GifExpertApp"),r.a.createElement(p,{setcategoria:c}),r.a.createElement("hr",null),n.map((function(e){return r.a.createElement(h,{key:e,categoria:e})})))};i.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.0b4b7d47.chunk.js.map