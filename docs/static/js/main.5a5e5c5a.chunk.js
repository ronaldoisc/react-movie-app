(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{17:function(e,t,s){},22:function(e,t,s){"use strict";s.r(t);var n=s(0),c=s(4),r=s.n(c),i=(s(17),s(9)),a=s(5),j=s(7),l=s(1),d=function(e){var t=e.movie,s=e.show,n=e.handleClose;return Object(l.jsx)("div",{children:Object(l.jsxs)(j.a,{show:s,onHide:n,size:"lg",children:[Object(l.jsx)(j.a.Header,{closeButton:!0,children:Object(l.jsx)(j.a.Title,{className:"text-dark text-uppercase",children:Object(l.jsx)("h1",{children:t.title})})}),Object(l.jsxs)(j.a.Body,{className:"text-dark modal-body",children:[Object(l.jsx)("img",{id:"foto",src:t.img,alt:""}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"modal-descripcion",children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("h4",{children:[" Year:  ",t.year]}),Object(l.jsx)("p",{children:t.summary})]}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("p",{children:[" ",Object(l.jsx)("span",{children:"Genre:"}),"  ",Object(i.a)(t.genres)]}),Object(l.jsxs)("p",{children:[" ",Object(l.jsx)("span",{children:"Slug:"}),"  ",t.slug]})]})]})]})]})})},o=function(e){var t=e.movie,s=Object(n.useState)(!1),c=Object(a.a)(s,2),r=c[0],j=c[1];return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("img",{src:t.img,alt:t.title}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("h5",{children:[" ",t.title]}),Object(i.a)(t.genres)]}),Object(l.jsxs)("button",{onClick:function(){return j(!0)},className:"btn-details",children:[Object(l.jsx)("i",{className:"fas fa-angle-down"}),Object(l.jsx)("br",{})," More"]}),Object(l.jsx)(d,{movie:t,show:r,handleClose:function(){return j(!1)}})]},t.id)},u=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)("header",{children:[Object(l.jsx)("h1",{className:"main-title",children:"MovieApp"}),Object(l.jsx)("input",{type:"text",placeholder:"Search...."})]})})},b=s(11),h=s.n(b),x=s(12),O=function(){var e=Object(x.a)(h.a.mark((function e(){var t,s,n,c,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://yts.mx/api/v2/list_movies.json",e.next=3,fetch("https://yts.mx/api/v2/list_movies.json");case 3:return t=e.sent,e.next=6,t.json();case 6:return s=e.sent,n=s.data,c=n.movies,r=c.map((function(e){return{id:e.id,title:e.title,img:e.large_cover_image,summary:e.summary,year:e.year,slug:e.slug,genres:e.genres.map((function(e){return e+" "}))}})),e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=function(){var e=Object(n.useState)({data:[],loanding:!0}),t=Object(a.a)(e,2),s=t[0],c=t[1];return Object(n.useEffect)((function(){O().then((function(e){c({data:e,loanding:!1})}))}),[]),s}(),t=e.data,s=e.loanding;return Object(l.jsxs)("div",{children:[Object(l.jsx)(u,{}),Object(l.jsx)("h3",{children:"Pel\xedculas Recientes..."}),Object(l.jsxs)("div",{className:"cards",children:[s&&Object(l.jsx)("p",{children:"Cargando"}),t.map((function(e){return Object(l.jsx)(o,{movie:e},e.id)}))]})]})};r.a.render(Object(l.jsx)(m,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.5a5e5c5a.chunk.js.map