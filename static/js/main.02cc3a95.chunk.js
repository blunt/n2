(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/rotten.138f1d80.svg"},31:function(e,t,a){e.exports=a.p+"static/media/imdb.c91b2edf.svg"},32:function(e,t,a){e.exports=a(65)},37:function(e,t,a){},64:function(e,t,a){e.exports=a.p+"static/media/remove.21f997ec.svg"},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(27),c=a.n(l),o=a(9),i=a(8),s=(a(37),a(17)),m=a(1),u=a(7),d=a.n(u),f=a(11),b=a(12),p=a.n(b),h="https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi",g="3adfd0f105mshd37f672cb2a6ef6p1cc404jsn3c93ad7906e0",y="unogs-unogs-v1.p.rapidapi.com",v={headers:{"X-RapidAPI-Host":y,"X-RapidAPI-Key":g},params:{countryid:"CAD"}},E=function(){var e=Object(f.a)(d.a.mark(function e(t){var a,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get(h,{headers:{"X-RapidAPI-Host":y,"X-RapidAPI-Key":g},params:{q:"get:new7:"+t,p:"1",t:"ns",st:"adv"}});case 2:return a=e.sent,sessionStorage.setItem("newContent"+t,JSON.stringify(a.data.ITEMS)),n=a.data.ITEMS,e.abrupt("return",n);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(f.a)(d.a.mark(function e(){var t,a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get(h,{headers:{"X-RapidAPI-Host":y,"X-RapidAPI-Key":g},params:{t:"lc",q:"available"}});case 2:return t=e.sent,sessionStorage.setItem("countries",JSON.stringify(t.data.ITEMS)),a=t.data.ITEMS,e.abrupt("return",a);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(f.a)(d.a.mark(function e(t,a,n){var r,l;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get(h,{headers:{"X-RapidAPI-Host":y,"X-RapidAPI-Key":g},params:{q:t+"-!1900,2018-!0,5-!0,10-!"+a+"-!Any-!Any-!Any-!gt100-!{downloadable}",t:"ns",cl:n,st:"adv",ob:"Relevance",p:"1",sa:"and"}});case 2:return r=e.sent,l=r.data.ITEMS,e.abrupt("return",l);case 5:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}(),N=function(){var e=Object(f.a)(d.a.mark(function e(){var t,a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://unogs-unogs-v1.p.rapidapi.com/api.cgi?t=genres",v);case 2:return t=e.sent,localStorage.setItem("genres",JSON.stringify(t.data.ITEMS)),a=t.data.ITEMS,e.abrupt("return",a);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(f.a)(d.a.mark(function e(t){var a,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get(h,{headers:{"X-RapidAPI-Host":y,"X-RapidAPI-Key":g},params:{t:"loadvideo",q:t}});case 2:return a=e.sent,n=a.data.RESULT,e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),C=a(3),O=Object(C.a)(),j=function(){return r.a.createElement("div",{className:"border-b border-gray-800 py-4 text-sm loader"})},S=function(e){return"https://www.netflix.com/watch/"+e},I=function(e){return"https://www.youtube.com/results?search_query="+e+" official trailer"},T=function(e){var t=e.indexOf("<");return e=e.substring(0,-1!==t?t:e.length)},A=function(e){var t={transition:"all .1s ease-in"},a="mr-2 py-1 px-3 text-sm rounded inline-block text-center border cursor-pointer ";return"secondary"===e.type?a+="border-gray-900 hover:border-gray-600":a+="bg-gray-900 border-gray-900 hover:bg-gray-700 hover:border-gray-700","link"===e.linkType?r.a.createElement("div",{to:e.link,className:a,style:t,onClick:e.handleTitle,"data-id":e.dataId},e.label):r.a.createElement("a",{href:e.link,className:a,style:t,target:"_blank",rel:"noopener noreferrer"},e.label,e.children)},M=function(e){var t="/title/"+e.item.netflixid,a="flex pb-4 border-b";return e.index!==e.length?a+=" mb-4 border-gray-900":a+=" border-white",r.a.createElement("article",{key:e.item.netflixid,className:a},r.a.createElement("figure",{className:"w-1/5"},r.a.createElement("a",{className:"block img-wrapper rounded overflow-hidden",href:S(e.item.netflixid),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{"data-id":e.item.netflixid,className:"w-full h-auto cursor-pointer",src:e.item.image,alt:e.item.title}))),r.a.createElement("figcaption",{className:"w-4/5 ml-4 flex flex-col"},r.a.createElement("div",{onClick:e.handleTitle},r.a.createElement("h3",{"data-id":e.item.netflixid,className:"text-xl font-medium mb-2 border-b border-transparent hover:border-white inline-block cursor-pointer",dangerouslySetInnerHTML:{__html:e.item.title}})),r.a.createElement("div",{className:"flex flex-grow"},r.a.createElement("div",{className:"flex flex-col pr-8"},r.a.createElement("p",{className:"mb-4 text-gray-500",dangerouslySetInnerHTML:{__html:T(e.item.synopsis)}}),r.a.createElement("div",{className:"mt-auto"},r.a.createElement(A,{link:I(e.item.title),label:"Watch trailer"}),r.a.createElement(A,{type:"secondary",linkType:"link",link:t,label:"Learn more",handleTitle:e.handleTitle,dataId:e.item.netflixid}))),r.a.createElement("div",{className:"text-right text-gray-500 leading-tight text-sm"},e.item.rating>0&&r.a.createElement("p",null,e.item.rating),e.item.runtime&&r.a.createElement("p",null,e.item.runtime),e.item.released&&r.a.createElement("p",null,e.item.released)))))},R=function(e){return r.a.createElement("section",{className:"mb-6"},r.a.createElement("header",{className:"sticky top-0 mb-4 border-b border-gray-800 bg-black z-10 text-xs py-4 flex"},r.a.createElement("div",{className:"flex items-center"},r.a.createElement("h2",null,e.title),e.children,e.page&&r.a.createElement(o.b,{className:"ml-auto border-b border-transparent hover:border-white",to:e.page},"View all"))),r.a.createElement("section",null,e.content.map(function(t,a){return r.a.createElement(M,{length:e.content.length,index:a+1,key:t.netflixid,item:t,handleTitle:e.handleTitle})})))},L=function(e){return r.a.createElement("div",{className:"search-field relative sticky bg-black z-10 top-0 border-b-2 border-white flex items-center"},r.a.createElement("input",{className:"w-full bg-black focus:outline-none text-sm py-4",type:"text",value:e.keyword,placeholder:"Search titles & actors",onChange:function(t){return e.keywordChange(t.target.value)},onKeyDown:e.handleKeyDown}))},_=function(e){return r.a.createElement(L,{keyword:e.keyword,keywordChange:e.setKeyword,handleKeyDown:e.handleKeyDown})},H=function(e){var t=Object(n.useState)([]),a=Object(m.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)([]),i=Object(m.a)(o,2),s=i[0],u=i[1],d=Object(n.useState)(!0),f=Object(m.a)(d,2),b=f[0],p=f[1],h=Object(n.useState)([]),g=Object(m.a)(h,2),y=g[0],v=g[1],E=Object(n.useState)([]),x=Object(m.a)(E,2),k=x[0],C=x[1],O=Object(n.useState)(""),j=Object(m.a)(O,2),S=j[0],I=j[1];return Object(n.useEffect)(function(){null===localStorage.getItem("genres")?N().then(function(e){try{c(e),p(!1)}catch(t){}}):(c(JSON.parse(localStorage.getItem("genres")||"[]")),p(!1)),null===localStorage.getItem("countries")?w().then(function(e){try{u(e),document.querySelector('#select_id [value="ca"]').selected=!0,p(!1)}catch(t){}}):(u(JSON.parse(localStorage.getItem("countries")||"[]")),p(!1))},[]),Object(n.useEffect)(function(){if(""!==S){var e=l.filter(function(e){return JSON.stringify(Object.keys(e)).toLowerCase().includes(S)});v(e)}else v([])},[S,l]),Object(n.useEffect)(function(){y.length>0?C(y):C(l)},[y,l]),r.a.createElement("header",{className:"flex flex-col px-6 pb-6 pt-4 md:sticky top-0 h-screen md:w-1/4 w-full"},r.a.createElement("div",null,r.a.createElement("h1",{className:"text-sm"},r.a.createElement("div",{onClick:e.handleHome,className:"inline-block border-b border-transparent hover:border-white cursor-pointer"},"N\xb2")),r.a.createElement("h2",{className:"text-xl leading-tight max-w-xs my-6 py-1"},"The fastest way to find something to watch on Netflix.")),r.a.createElement("div",{className:"mb-4"},!b&&r.a.createElement("select",{className:"w-full cursor-pointer border border-gray-900 hover:border-gray-600 py-1 px-2 appearance-none focus:outline-none text-sm text-gray-500 hover:text-white",onChange:e.handleCountryChange,defaultValue:"ca",id:"select_id"},s.map(function(e){var t=Object.values(e)[0],a=Object.values(e)[1],n=Object.values(e)[2];return r.a.createElement("option",{value:a,key:t,"data-id":t},n)}))),r.a.createElement("div",{className:"relative search-field flex items-center"},r.a.createElement("input",{className:"w-full bg-black focus:outline-none text-sm py-3",type:"text",value:S,placeholder:"Search genres",onChange:function(e){return I(e.target.value)}})),r.a.createElement("nav",{id:"genres",className:"relative flex-grow overflow-hidden border-b border-t border-gray-800"},r.a.createElement("div",{className:"absolute py-3 top-0 bottom-0 overflow-y-scroll hide-scrollbar"},!b&&k.map(function(t){var a=Object.keys(t)[0],n=Object.values(t)[0].join();return r.a.createElement("div",null,r.a.createElement("label",{key:a,className:"inline-block text-sm transition text-gray-500 hover:text-white"},r.a.createElement("input",{className:"genre-checkbox",name:a,type:"checkbox",checked:e.isActive,onChange:e.handleInputChange,value:n}),r.a.createElement("span",{className:"label"},a)))}))))},K=function(e){return r.a.createElement("div",{className:"w-1/3"},r.a.createElement("span",{className:"text-sm text-gray-500"},e.label),r.a.createElement("p",null,e.item))},D=function(e){return r.a.createElement("div",{className:"people-item flex text-sm border-b border-gray-900 py-4"},r.a.createElement("span",{className:"text-gray-500"},e.label),r.a.createElement("div",{className:"w-4/6 pl-6 ml-auto"},r.a.createElement("ul",{className:"flex flex-wrap"},e.children)))},J=a(30),P=a.n(J),X=a(31),q=a.n(X),W=function(e){var t,a,l=Object(n.useState)([]),c=Object(m.a)(l,2),o=c[0],i=c[1],s=Object(n.useState)(!0),u=Object(m.a)(s,2),d=u[0],f=u[1];return Object(n.useEffect)(function(){k(e.id).then(function(e){try{i(e),f(!1)}catch(t){}})},[e.id]),d?r.a.createElement(j,null):r.a.createElement("article",null,r.a.createElement("header",{className:"sticky top-0 mb-4 border-b border-gray-800 bg-black z-10 text-xs py-4 flex"},r.a.createElement("div",{className:"w-full flex items-center"},r.a.createElement("p",null,o.nfinfo.title.replace(/&#39;/g,"'")," (",o.nfinfo.released,")"),r.a.createElement("button",{className:"ml-auto focus:outline-none text-gray-500 hover:text-white transition",onClick:e.handleCloseTitle},r.a.createElement("svg",{className:"w-4 h-auto",width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M47.4142 47.4354C47.2284 47.6213 47.0077 47.7688 46.7649 47.8694C46.522 47.9701 46.2617 48.0218 45.9989 48.0218C45.736 48.0218 45.4757 47.9701 45.2328 47.8694C44.99 47.7688 44.7693 47.6213 44.5835 47.4354L31.9835 34.8354L19.3951 47.4245C19.019 47.7966 18.511 48.0047 17.982 48.0032C17.453 48.0018 16.946 47.7911 16.5719 47.417C16.1979 47.0429 15.9871 46.5359 15.9857 46.0069C15.9843 45.4779 16.1924 44.9699 16.5645 44.5938L29.1533 32.0051L16.5668 19.4186C16.2004 19.0415 15.9971 18.5353 16.0009 18.0096C16.0047 17.4838 16.2152 16.9806 16.587 16.6088C16.9587 16.2369 17.4619 16.0263 17.9877 16.0225C18.5134 16.0186 19.0196 16.2218 19.3968 16.5881L31.9838 29.1745L44.5813 16.5771C44.7663 16.3872 44.9871 16.236 45.231 16.1321C45.4749 16.0283 45.7369 15.9739 46.002 15.9722C46.2671 15.9705 46.5298 16.0214 46.7751 16.1221C47.0203 16.2227 47.2431 16.3711 47.4305 16.5585C47.6179 16.746 47.7662 16.9688 47.8668 17.2141C47.9674 17.4593 48.0183 17.7221 48.0165 17.9871C48.0147 18.2522 47.9603 18.5143 47.8564 18.7581C47.7525 19.002 47.6012 19.2228 47.4113 19.4077L34.8145 32.0051L47.4145 44.6051C47.6004 44.791 47.7478 45.0116 47.8484 45.2544C47.9489 45.4972 48.0007 45.7575 48.0007 46.0203C48.0006 46.2832 47.9488 46.5434 47.8482 46.7862C47.7476 47.029 47.6001 47.2496 47.4142 47.4354Z",fill:"currentColor"}))))),r.a.createElement("div",{className:"border-b border-gray-800 pt-2 pb-6 flex"},r.a.createElement("figure",{className:"w-2/6"},r.a.createElement("a",{className:"block img-wrapper title-page rounded overflow-hidden",href:S(o.nfinfo.netflixid),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{loading:"lazy",className:"w-full h-auto",src:o.nfinfo.image1,alt:o.nfinfo.title}))),r.a.createElement("section",{className:"w-4/6 pl-6 flex flex-col"},r.a.createElement("div",null,r.a.createElement("h1",{className:"text-2xl font-medium mb-4"},r.a.createElement("a",{className:"inline-block border-b border-transparent hover:border-white",href:S(o.nfinfo.netflixid),target:"_blank",rel:"noopener noreferrer"},o.nfinfo.title.replace(/&#39;/g,"'"))),r.a.createElement("section",{className:"flex border-t border-b border-gray-900 py-3 mb-4"},o.imdbinfo.rating&&o.imdbinfo.rating>0&&r.a.createElement(K,{label:"IMDb Rating",item:o.imdbinfo.rating}),o.imdbinfo.runtime&&r.a.createElement(K,{label:"Duration",item:o.imdbinfo.runtime}),o.nfinfo.released&&r.a.createElement(K,{label:"Year Released",item:o.nfinfo.released})),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:T(o.nfinfo.synopsis)}})),r.a.createElement("div",{className:"mt-auto flex flex-wrap items-center"},r.a.createElement(A,{link:S(o.nfinfo.netflixid),label:"Watch "+o.nfinfo.type}),r.a.createElement(A,{type:"secondary",link:I(o.nfinfo.title),label:"Watch trailer"}),r.a.createElement("div",{className:"ml-auto"},r.a.createElement(A,{type:"secondary",link:(a=o.imdbinfo.imdbid,"https://imdb.com/title/"+a)},r.a.createElement("img",{src:q.a,className:"icon-button",alt:o.nfinfo.title+" on IMDb"})),r.a.createElement(A,{type:"secondary",link:(t=o.nfinfo.title,"https://www.rottentomatoes.com/search/?search="+t)},r.a.createElement("img",{src:P.a,className:"icon-button",alt:"Search for "+o.nfinfo.title+" on Rotten Tomatoes"})))))),r.a.createElement("section",{className:"border-b border-gray-800"},o.people.map(function(e){return void 0!==e.director&&e.director.length>0&&r.a.createElement(D,{key:e.director,label:"Director"},e.director.map(function(e){return r.a.createElement("li",{key:e,className:"w-1/2 pr-4"},e)}))}),o.people.map(function(e){return void 0!==e.creator&&e.creator.length>0&&r.a.createElement(D,{key:e.creator,label:"Creator(s)"},e.creator.map(function(e){return r.a.createElement("li",{key:e,className:"w-1/2 pr-4"},e)}))}),o.people.map(function(e){return void 0!==e.actor&&e.actor.length>0&&r.a.createElement(D,{key:e.actor,label:"Actor(s)"},e.actor.map(function(e){return r.a.createElement("li",{key:e,className:"w-1/2 pr-4"},e)}))})),r.a.createElement("section",{className:"py-6 border-b border-gray-800 mb-6"},o.imdbinfo.plot&&r.a.createElement("p",null,o.imdbinfo.plot.replace(/&amp;#39;/g,"'"))))},z=(a(64),Object(i.e)(function(e){var t=Object(n.useState)([]),a=Object(m.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)("ca"),i=Object(m.a)(o,2),u=i[0],d=i[1],f=Object(n.useState)("33"),b=Object(m.a)(f,2),p=b[0],h=b[1],g=Object(n.useState)(!0),y=Object(m.a)(g,2),v=y[0],w=y[1],N=Object(n.useState)(!1),k=Object(m.a)(N,2),C=k[0],S=k[1],I=Object(n.useState)([]),T=Object(m.a)(I,2),A=T[0],M=T[1],L=Object(n.useState)([]),K=Object(m.a)(L,2),D=K[0],J=K[1],P=Object(n.useState)(""),X=Object(m.a)(P,2),q=X[0],z=X[1],B=Object(n.useState)(!1),Z=Object(m.a)(B,2),V=Z[0],U=Z[1],Y=Object(n.useState)(0),$=Object(m.a)(Y,2),F=$[0],G=$[1],Q=function(e){w(!0),null===sessionStorage.getItem("newContent"+e)?E(e).then(function(e){try{c(e),w(!1)}catch(t){w(!1)}}):(c(JSON.parse(sessionStorage.getItem("newContent"+e)||"[]")),w(!1))},ee=function(e,t,a){w(!0),x(e,t,a).then(function(e){try{c(e),w(!1)}catch(t){w(!1)}})},te=function(e){var t=e.target.getAttribute("data-id");U(!0),G(t),O.push("/n2/#/titles/"+t,{id:t})};window.onpopstate=function(){var e=O.location.pathname;if(e.includes("titles")){var t=e.replace("/n2/titles/","");U(!0),G(Number(t))}else U(!1)};var ae=function(e){var t=e.target,a=t.getAttribute("data-id"),n=t.value,r=A.filter(function(e){return e!==a}),l=D.filter(function(e){return n?e[1]!==n:e[1]!==a}),c=document.querySelectorAll(".genre-checkbox[value="+JSON.stringify(a)+"]")[0];c&&(c.checked=!1),M(r),J(l)};return Object(n.useEffect)(function(){var e=window.location.hash;if(e.includes("titles")){var t=e.replace("#/titles/","");U(!0),G(Number(t))}},[]),Object(n.useEffect)(function(){A.length>0||""!==q?ee(q,A,p):Q(u)},[A,u,p]),r.a.createElement("div",{className:"page-container"},r.a.createElement(H,{handleInputChange:function(e){U(!1);var t=e.target,a=t.value;!0===t.checked?(M([].concat(Object(s.a)(A),[a])),J([].concat(Object(s.a)(D),[[t.name,t.value]]))):ae(e);var n=document.querySelectorAll("#genres :checked").length;n>0?(S(!0),w(!0)):0===n&&(S(!1),w(!1),Q(u))},handleCountryChange:function(e){U(!1);var t=e.target.value,a=e.target,n=a.options[a.selectedIndex].getAttribute("data-id");d(t),h(n)},handleHome:function(e){U(!1),O.push("/n2")},defaultCountry:"33"}),r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement(_,{home:!0,keyword:q,handleKeyDown:function(e){"Enter"===e.key&&(U(!1),w(!0),""===q?(S(!1),Q()):(S(!0),ee(q,A,p)))},setKeyword:z}),V?r.a.createElement(W,{id:F,handleCloseTitle:function(){O.go(-1)}}):v?r.a.createElement("div",null,r.a.createElement(j,null)):C?r.a.createElement(R,{title:l.length+" results",content:l,handleTitle:te},D.map(function(e,t){return r.a.createElement("button",{key:e[1],"data-id":e[1],className:"transition flex items-center ml-2 px-1 text-xs rounded inline-block text-center border cursor-pointer border-gray-900 hover:border-gray-600 focus:outline-none text-gray-500 hover:text-white",onClick:ae},r.a.createElement("span",null,e[0]),r.a.createElement("svg",{className:"w-3 h-auto ml-1",width:"64",height:"64",viewBox:"0 0 64 64",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M32 56C27.2533 56 22.6131 54.5924 18.6663 51.9553C14.7195 49.3181 11.6434 45.5698 9.8269 41.1844C8.0104 36.799 7.53512 31.9734 8.46116 27.3178C9.38721 22.6623 11.673 18.3859 15.0294 15.0294C18.3859 11.673 22.6623 9.38721 27.3178 8.46116C31.9734 7.53512 36.799 8.0104 41.1844 9.8269C45.5698 11.6434 49.3181 14.7195 51.9553 18.6663C54.5924 22.6131 56 27.2533 56 32C56 38.3652 53.4714 44.4697 48.9706 48.9706C44.4697 53.4714 38.3652 56 32 56ZM17 32C17 31.4696 17.2107 30.9609 17.5858 30.5858C17.9609 30.2107 18.4696 30 19 30H45C45.5304 30 46.0392 30.2107 46.4142 30.5858C46.7893 30.9609 47 31.4696 47 32C47 32.5304 46.7893 33.0392 46.4142 33.4142C46.0392 33.7893 45.5304 34 45 34H19C18.4696 34 17.9609 33.7893 17.5858 33.4142C17.2107 33.0392 17 32.5304 17 32Z",fill:"currentColor"})))})):r.a.createElement(R,{title:l.length+" new titles",content:l,handleTitle:te}))))})),B=function(){return r.a.createElement("div",null,r.a.createElement(o.a,{basename:"/"},r.a.createElement(i.a,{exact:!0,path:"/",component:z}),r.a.createElement(i.a,{exact:!0,path:"/titles/:id",component:z})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.02cc3a95.chunk.js.map