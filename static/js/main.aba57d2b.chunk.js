(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{22:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(10),a=c(5),s=(c(20),c(21),c(22),c(2)),r=c(8),j=c(11),i=c(4),l=c(1),b=c(6),o=c.n(b),d=c(0),h=function(e){var t=e.person,c=Object(s.h)().slug;function n(e,t){var c=e.find((function(e){return e.name===t}));return c?Object(d.jsx)(a.b,{to:"../".concat(c.slug),className:o()({"has-text-danger":"f"===c.sex}),children:c.name}):t||"-"}return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Sex"}),Object(d.jsx)("th",{children:"Born"}),Object(d.jsx)("th",{children:"Died"}),Object(d.jsx)("th",{children:"Mother"}),Object(d.jsx)("th",{children:"Father"})]})}),Object(d.jsx)("tbody",{children:t.map((function(e){return Object(d.jsxs)("tr",{"data-cy":"person",className:o()({"has-background-warning":e.slug===c}),children:[Object(d.jsx)("td",{children:Object(d.jsx)(a.b,{to:"/people/".concat(e.slug),className:o()({"has-text-danger":"f"===e.sex}),children:e.name})},e.slug),Object(d.jsx)("td",{children:e.sex}),Object(d.jsx)("td",{children:e.born}),Object(d.jsx)("td",{children:e.died}),Object(d.jsx)("td",{children:n(t,e.motherName)}),Object(d.jsx)("td",{children:n(t,e.fatherName)})]})}))})]})})};function x(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}c(24);var O=function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})},u=function(){var e=Object(l.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(l.useState)(!1),s=Object(i.a)(a,2),b=s[0],o=s[1],u=Object(l.useState)(!1),p=Object(i.a)(u,2),m=p[0],f=p[1],v=!c.length&&!b&&!m,g=function(){var e=Object(j.a)(Object(r.a)().mark((function e(){var t;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.prev=1,e.next=4,x();case 4:t=e.sent,n(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),f(!0);case 11:return e.prev=11,o(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){g()}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"title",children:"People Page"}),Object(d.jsx)("div",{className:"block",children:Object(d.jsxs)("div",{className:"box table-container",children:[b&&Object(d.jsx)(O,{}),!b&&!v&&Object(d.jsx)(h,{person:c}),m&&Object(d.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),v&&Object(d.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})]})})]})},p=function(e){var t=e.to,c=e.text;return Object(d.jsx)(a.c,{to:t,className:function(e){var t=e.isActive;return o()("navbar-item",{"has-background-grey-lighter":t})},children:c})},m=function(){return Object(d.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"navbar-brand",children:[Object(d.jsx)(p,{to:"/",text:"Home"}),Object(d.jsx)(p,{to:"/people",text:"People"})]})})})},f=function(){return Object(d.jsxs)("div",{"data-cy":"app",children:[Object(d.jsx)(m,{}),Object(d.jsx)("main",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)(s.d,{children:[Object(d.jsxs)(s.b,{path:"people",children:[Object(d.jsx)(s.b,{index:!0,element:Object(d.jsx)(u,{})}),Object(d.jsx)(s.b,{path:":slug",element:Object(d.jsx)(u,{})})]}),Object(d.jsx)(s.b,{index:!0,element:Object(d.jsx)("h1",{className:"title",children:"Home Page"})}),Object(d.jsx)(s.b,{path:"home",element:Object(d.jsx)(s.a,{to:"/",replace:!0})}),Object(d.jsx)(s.b,{path:"*",element:Object(d.jsx)("p",{children:"Page not found"})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(d.jsx)(a.a,{children:Object(d.jsx)(f,{})}))}},[[25,1,2]]]);
//# sourceMappingURL=main.aba57d2b.chunk.js.map