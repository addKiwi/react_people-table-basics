(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var n=c(10),j=c.n(n),r=c(5),s=(c(15),c(0)),i=c.n(s),a=c(2),l=c(8),b=c.n(l),h=(c(16),c(1)),o=i.a.memo((function(){return Object(h.jsx)("header",{children:Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{className:"navLink",children:[Object(h.jsx)("li",{children:Object(h.jsx)(r.b,{to:"/",className:function(e){var t=e.isActive;return b()({link_isActive:t},"link")},children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)(r.b,{to:"people",className:function(e){var t=e.isActive;return b()({link_isActive:t},"link")},children:"People"})})]})})})})),d=i.a.memo((function(){return Object(h.jsx)("div",{className:"Page",children:Object(h.jsx)("h1",{children:"Home Page"})})})),O=c(9),m=c(4),x=(c(18),i.a.memo((function(e){var t=e.person;return Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:t.name}),Object(h.jsx)("td",{children:t.sex}),Object(h.jsx)("td",{children:t.born}),Object(h.jsx)("td",{children:t.died}),Object(h.jsx)("td",{children:t.motherName}),Object(h.jsx)("td",{children:t.fatherName})]},t.slug)}))),u=i.a.memo((function(e){var t=e.people;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("table",{className:"styled-table",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"name"}),Object(h.jsx)("th",{children:"sex"}),Object(h.jsx)("th",{children:"born"}),Object(h.jsx)("th",{children:"died"}),Object(h.jsx)("th",{children:"mother"}),Object(h.jsx)("th",{children:"father"})]})}),Object(h.jsx)("tbody",{children:t.map((function(e){return Object(h.jsx)(x,{person:e})}))})]})})})),p=i.a.memo((function(){var e=Object(s.useState)([]),t=Object(m.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()})).then((function(e){return n((t=e).map((function(e){return Object(O.a)(Object(O.a)({},e),{},{father:t.find((function(t){return t.name===e.fatherName})),mother:t.find((function(t){return t.name===e.motherName}))})})));var t}))}),[]),Object(h.jsxs)("div",{className:"Page",children:[Object(h.jsx)("h1",{children:"People Page"}),Object(h.jsx)(u,{people:c})]})})),f=i.a.memo((function(){return Object(h.jsx)("div",{className:"Page",children:Object(h.jsx)("h1",{children:"Page Not Found"})})})),v=i.a.memo((function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(o,{}),Object(h.jsxs)(a.d,{children:[Object(h.jsx)(a.b,{path:"/",element:Object(h.jsx)(d,{})}),Object(h.jsx)(a.b,{path:"people",element:Object(h.jsx)(p,{})}),Object(h.jsx)(a.b,{path:"/home",element:Object(h.jsx)(a.a,{replace:!0,to:"/"})}),Object(h.jsx)(a.b,{path:"*",element:Object(h.jsx)(f,{})})]})]})}));j.a.render(Object(h.jsx)(r.a,{children:Object(h.jsx)(v,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.8541c878.chunk.js.map