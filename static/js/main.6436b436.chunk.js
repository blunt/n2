(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(62)},35:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(26),c=a.n(l),o=a(5),i=a(9),s=(a(35),a(29)),m=a(4),u=a(8),d=a.n(u),f=a(11),p=a(12),b=a.n(p),g="https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi",h="3adfd0f105mshd37f672cb2a6ef6p1cc404jsn3c93ad7906e0",y="unogs-unogs-v1.p.rapidapi.com",E={headers:{"X-RapidAPI-Host":y,"X-RapidAPI-Key":h},params:{countryid:"CAD"}},w=function(){var e=Object(f.a)(d.a.mark(function e(){var t,a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=get:new7:CA&p=1&t=ns&st=adv",E);case 2:return t=e.sent,localStorage.setItem("newContent",JSON.stringify(t.data.ITEMS)),a=t.data.ITEMS,e.abrupt("return",a);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(f.a)(d.a.mark(function e(t,a){var n,r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(g,{headers:{"X-RapidAPI-Host":y,"X-RapidAPI-Key":h},params:{q:t+"-!1900,2018-!0,5-!0,10-!"+a+"-!Any-!Any-!Any-!gt100-!{downloadable}",t:"ns",cl:"all",st:"adv",ob:"Relevance",p:"1",sa:"and"}});case 2:return n=e.sent,r=n.data.ITEMS,e.abrupt("return",r);case 5:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),x=function(){var e=Object(f.a)(d.a.mark(function e(){var t,a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://unogs-unogs-v1.p.rapidapi.com/api.cgi?t=genres",E);case 2:return t=e.sent,localStorage.setItem("genres",JSON.stringify(t.data.ITEMS)),a=t.data.ITEMS,e.abrupt("return",a);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(f.a)(d.a.mark(function e(t){var a,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(g,{headers:{"X-RapidAPI-Host":y,"X-RapidAPI-Key":h},params:{t:"loadvideo",q:t}});case 2:return a=e.sent,n=a.data.RESULT,e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),k=function(){return r.a.createElement("div",{className:"border-b border-gray-800 py-4 text-sm loader"})},O=function(e){return"https://www.netflix.com/watch/"+e},j=function(e){var t=e.indexOf("<");return e=e.substring(0,-1!==t?t:e.length)},S=function(e){var t={transition:"all .1s ease-in"},a="mr-2 py-1 px-3 text-sm rounded inline-block text-center border ";return"secondary"===e.type?a+="border-gray-900 hover:border-gray-600":a+="bg-gray-900 border-gray-900 hover:bg-gray-700 hover:border-gray-700","link"===e.linkType?r.a.createElement(o.b,{to:e.link,className:a,style:t},e.label):r.a.createElement("a",{href:e.link,className:a,style:t,target:"_blank",rel:"norefferer"},e.label)},I=function(e){var t="/title/"+e.item.netflixid,a="flex pb-4 border-b";return e.index!==e.length?a+=" mb-4 border-gray-900":a+=" border-white",r.a.createElement("article",{key:e.item.netflixid,className:a,onClick:e.onTitlePage},r.a.createElement("figure",{className:"w-1/5"},r.a.createElement(o.b,{to:t},r.a.createElement("img",{className:"w-full h-auto rounded",src:e.item.image,alt:e.item.title}))),r.a.createElement("figcaption",{className:"w-4/5 ml-4 flex flex-col"},r.a.createElement(o.b,{to:t},r.a.createElement("h3",{className:"text-xl font-semibold mb-2 border-b border-transparent inline-block hover:border-white",dangerouslySetInnerHTML:{__html:e.item.title}})),r.a.createElement("div",{className:"flex flex-grow"},r.a.createElement("div",{className:"flex flex-col pr-8"},r.a.createElement("p",{className:"mb-4 text-gray-500 leading-tight text-sm",dangerouslySetInnerHTML:{__html:j(e.item.synopsis)}}),r.a.createElement("div",{className:"mt-auto"},r.a.createElement(S,{link:O(e.item.netflixid),label:"Watch "+e.item.type}),r.a.createElement(S,{type:"secondary",linkType:"link",link:t,label:"Learn more"}))),r.a.createElement("div",{className:"text-right text-gray-500 leading-tight text-sm"},e.item.rating>0&&r.a.createElement("p",null,e.item.rating),e.item.runtime&&r.a.createElement("p",null,e.item.runtime),e.item.released&&r.a.createElement("p",null,e.item.released)))))},T=function(e){return r.a.createElement("section",{className:"mb-12"},r.a.createElement("header",{className:"sticky top-0 mb-4 border-b border-gray-800 bg-black z-10 text-xs py-4 flex"},r.a.createElement("h2",null,e.title),e.page&&r.a.createElement(o.b,{className:"ml-auto border-b border-transparent hover:border-white",to:e.page},"View all")),r.a.createElement("section",null,e.content.map(function(t,a){return r.a.createElement(I,{length:e.content.length,index:a+1,key:t.netflixid,item:t,onTitlePage:e.onTitlePage})})))},C=function(e){return r.a.createElement("input",{className:"sticky top-0 w-full bg-black focus:outline-none text-sm py-4 border-b-2 border-white",type:"text",value:e.keyword,placeholder:"Search titles, genres, actors",onChange:function(t){return e.keywordChange(t.target.value)},onKeyDown:e.handleKeyDown})},A=function(e){return r.a.createElement(C,{keyword:e.keyword,keywordChange:e.setKeyword,handleKeyDown:e.handleKeyDown})},P=function(e){var t=Object(n.useState)([]),a=Object(m.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(""),s=Object(m.a)(i,2),u=s[0],d=s[1];return Object(n.useEffect)(function(){null===localStorage.getItem("genres")?x().then(function(e){try{c(e)}catch(t){}}):c(JSON.parse(localStorage.getItem("genres")||"[]"))},[]),Object(n.useEffect)(function(){if(""!==u){var e=l.filter(function(e){return JSON.stringify(Object.keys(e)).toLowerCase().includes(u)});c(e)}else c(JSON.parse(localStorage.getItem("genres")||"[]"))},[u,l]),r.a.createElement("header",{className:"flex flex-col p-6 md:sticky top-0 h-screen md:w-1/3 w-full"},r.a.createElement("div",null,r.a.createElement("h1",{className:"text-sm"},r.a.createElement(o.b,{to:"/",className:"border-b border-transparent hover:border-white"},"N\xb2")),r.a.createElement("h2",{className:"text-2xl leading-tight max-w-xs my-8"},"The fastest way to find something to watch on Netflix.")),r.a.createElement("input",{className:"w-full bg-black focus:outline-none text-sm py-4",type:"text",value:u,placeholder:"Search genres",onChange:function(e){return d(e.target.value)}}),r.a.createElement("nav",{id:"genres",className:"relative flex-grow overflow-hidden border-b border-t border-gray-800"},r.a.createElement("div",{className:"absolute py-4 top-0 bottom-0 overflow-y-scroll hide-scrollbar"},l.map(function(t){var a=Object.keys(t)[0],n=Object.values(t)[0].join();return r.a.createElement("label",{key:a,className:"block text-sm checkbox-container"},r.a.createElement("input",{name:a,type:"checkbox",className:"border-b border-transparent hover:border-white mr-2",checked:e.isActive,onChange:e.handleInputChange,value:n}),r.a.createElement("span",{className:"checkmark"}),r.a.createElement("span",{className:"label"},a))}))))},K=Object(i.e)(function(e){var t=Object(n.useState)([]),a=Object(m.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(!0),i=Object(m.a)(o,2),u=i[0],d=i[1],f=Object(n.useState)(!1),p=Object(m.a)(f,2),b=p[0],g=p[1],h=Object(n.useState)([]),y=Object(m.a)(h,2),E=y[0],x=y[1],N=Object(n.useState)(""),O=Object(m.a)(N,2),j=O[0],S=O[1],I=Object(n.useState)(!0),C=Object(m.a)(I,2),K=C[0],M=C[1],R=function(){null===localStorage.getItem("newContent")?w().then(function(e){try{c(e),d(!1)}catch(t){d(!1)}}):(c(JSON.parse(localStorage.getItem("newContent")||"[]")),d(!1))},_=function(e,t){v(e,t).then(function(e){try{c(e),d(!1)}catch(t){d(!1)}})};Object(n.useEffect)(function(){g(!1),R()},[]);var D=function(){M(!0)};return Object(n.useEffect)(function(){E.length>0&&_(j,E)},[j,E]),r.a.createElement("div",{className:"page-container"},r.a.createElement(P,{handleInputChange:function(e){M(!1);var t=document.querySelectorAll("#genres :checked").length,a=e.target,n=a.value;if(!0===a.checked)x([].concat(Object(s.a)(E),[n]));else{var r=E.filter(function(e){return e!==n});x(r)}t>0?(g(!0),d(!0)):0===t&&(g(!1),d(!1),R())}}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"pt-16"},r.a.createElement(A,{home:!0,keyword:j,handleKeyDown:function(e){"Enter"===e.key&&(M(!1),d(!0),""===j?(g(!1),R()):(g(!0),_(j,E)))},setKeyword:S}),e.location.pathname.includes("title")&&K?e.children:u?r.a.createElement("div",null,r.a.createElement(k,null)):b?r.a.createElement(T,{title:l.length+" results",content:l,onTitlePage:D}):r.a.createElement(T,{title:l.length+" new titles",content:l,onTitlePage:D}))))}),M=function(e){return r.a.createElement("div",{className:"w-1/3"},r.a.createElement("span",{className:"text-sm text-gray-500"},e.label),r.a.createElement("p",null,e.item))},R=function(e){return r.a.createElement("div",{className:"people-item flex text-sm border-b border-gray-900 py-4"},r.a.createElement("span",{className:"text-gray-500"},e.label),r.a.createElement("div",{className:"w-4/6 pl-6 ml-auto"},r.a.createElement("ul",{className:"flex flex-wrap"},e.children)))},_=function(e){var t,a=Object(n.useState)([]),l=Object(m.a)(a,2),c=l[0],o=l[1],i=Object(n.useState)(!0),s=Object(m.a)(i,2),u=s[0],d=s[1];return Object(n.useEffect)(function(){N(e.match.params.id).then(function(e){try{o(e),d(!1)}catch(t){}})},[e.match.params.id]),r.a.createElement(K,null,u?r.a.createElement(k,null):r.a.createElement("article",null,r.a.createElement("div",{className:"border-b border-gray-800 py-6 flex"},r.a.createElement("figure",{className:"w-2/6"},r.a.createElement("img",{className:"rounded w-full h-auto",src:c.nfinfo.image1,alt:c.nfinfo.title})),r.a.createElement("section",{className:"w-4/6 pl-6 flex flex-col"},r.a.createElement("div",null,r.a.createElement("h1",{className:"text-2xl mb-4"},c.nfinfo.title),r.a.createElement("section",{className:"flex border-t border-b border-gray-900 py-3 mb-4"},c.imdbinfo.rating&&c.imdbinfo.rating>0&&r.a.createElement(M,{label:"IMDb Rating",item:c.imdbinfo.rating}),c.imdbinfo.runtime&&r.a.createElement(M,{label:"Duration",item:c.imdbinfo.runtime}),c.nfinfo.released&&r.a.createElement(M,{label:"Year Released",item:c.nfinfo.released})),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:j(c.nfinfo.synopsis)}})),r.a.createElement("div",{className:"mt-auto"},r.a.createElement(S,{link:O(c.nfinfo.netflixid),label:"Watch "+c.nfinfo.type}),r.a.createElement(S,{type:"secondary",link:(t=c.nfinfo.title,"https://www.youtube.com/results?search_query="+t+" official trailer"),label:"Watch trailer"})))),r.a.createElement("section",{className:"border-b border-gray-800"},c.people.map(function(e){return void 0!==e.director&&e.director.length>0&&r.a.createElement(R,{key:e.director,label:"Director"},e.director.map(function(e){return r.a.createElement("li",{key:e,className:"w-1/2 pr-4"},e)}))}),c.people.map(function(e){return void 0!==e.creator&&e.creator.length>0&&r.a.createElement(R,{key:e.creator,label:"Creator(s)"},e.creator.map(function(e){return r.a.createElement("li",{key:e,className:"w-1/2 pr-4"},e)}))}),c.people.map(function(e){return void 0!==e.actor&&e.actor.length>0&&r.a.createElement(R,{key:e.actor,label:"Actor(s)"},e.actor.map(function(e){return r.a.createElement("li",{key:e,className:"w-1/2 pr-4"},e)}))})),r.a.createElement("section",{className:"pt-6 pb-12"},c.imdbinfo.plot&&r.a.createElement("p",{dangerouslySetInnerHTML:{__html:c.imdbinfo.plot.replace("amp;","")}}))))},D=function(){return r.a.createElement("div",null,r.a.createElement(o.a,{basename:"/"},r.a.createElement(i.a,{exact:!0,path:"/",component:K}),r.a.createElement(i.a,{path:"/title/:id",component:_})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.6436b436.chunk.js.map