(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(26),a=(n(36),n(37),n(8)),r=n(3),s=n(1),l=function(){return Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("h1",{className:"title",children:"Home Page"})})},i=n(15),o=n(5),j=n(0),d=n(9),u=n(10),b=n.n(u),h=function(e){return e.Male="m",e.Female="f",e}({}),m=function(e){return e.Sort="sort",e.Order="order",e.Query="query",e.Centuries="centuries",e.Sex="sex",e.Descending="desc",e}({}),O=n(27);function x(e,t){var n=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(o.a)(e,2),c=t[0],a=t[1];null===a?n.delete(c):Array.isArray(a)?(n.delete(c),a.forEach((function(e){n.append(c,e)}))):n.set(c,a)})),n.toString()}var p=["children","params"],f=function(e){var t=e.children,n=e.params,c=Object(O.a)(e,p),r=Object(a.d)(),l=Object(o.a)(r,1)[0];return Object(s.jsx)(a.b,Object(i.a)(Object(i.a)({to:{search:x(l,n)}},c),{},{children:t}))},v=["Name","Sex","Born","Died"],N=["16","17","18","19","20"],g=function(){var e=Object(a.d)(),t=Object(o.a)(e,2),n=t[0],c=t[1],r=n.get(m.Query)||"",l=n.getAll(m.Centuries)||[],i=n.get(m.Sex)||null;var j=function(e){return l.includes(e)?l.filter((function(t){return t!==e})):[].concat(Object(d.a)(l),[e])};return Object(s.jsxs)("nav",{className:"panel",children:[Object(s.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(s.jsxs)("p",{className:"panel-tabs","data-cy":"SexFilter",children:[Object(s.jsx)(f,{className:b()({"is-active":null===i}),params:{sex:null},children:"All"}),Object(s.jsx)(f,{className:b()({"is-active":i===h.Male}),params:{sex:h.Male},children:"Male"}),Object(s.jsx)(f,{className:b()({"is-active":i===h.Female}),params:{sex:h.Female},children:"Female"})]}),Object(s.jsx)("div",{className:"panel-block",children:Object(s.jsxs)("p",{className:"control has-icons-left",children:[Object(s.jsx)("input",{"data-cy":"NameFilter",type:"search",className:"input",placeholder:"Search",value:r,onChange:function(e){var t=new URLSearchParams(n);t.set(m.Query,e.target.value),c(t)}}),Object(s.jsx)("span",{className:"icon is-left",children:Object(s.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(s.jsx)("div",{className:"panel-block",children:Object(s.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(s.jsx)("div",{className:"level-left",children:N.map((function(e){return Object(s.jsx)(f,{"data-cy":"century",className:b()("button mr-1",{"is-info":(t="".concat(e),l.includes(t))}),params:{centuries:j("".concat(e))},children:e});var t}))}),Object(s.jsx)("div",{className:"level-right ml-4",children:Object(s.jsx)(f,{"data-cy":"centuryALL",className:b()("button is-success",{"is-outlined":!!l.length}),params:{centuries:null},children:"All"})})]})}),Object(s.jsx)("div",{className:"panel-block",children:Object(s.jsx)(f,{className:"button is-link is-outlined is-fullwidth",params:{centuries:null,sex:null,query:null},children:"Reset all filters"})})]})},y=(n(39),function(){return Object(s.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(s.jsx)("div",{className:"Loader__content"})})}),w=function(e){var t=e.person,n=t.slug,c=t.sex,r=t.name;return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(a.b,{to:"../".concat(n),className:b()({"has-text-danger":c===h.Female}),children:r})})},S=function(e){var t=e.person,n=t.sex,c=t.born,a=t.died,l=t.motherName,i=t.fatherName,o=t.mother,j=t.father,d=Object(r.r)().slug,u=void 0===d?"":d;return Object(s.jsxs)("tr",{"data-cy":"person",className:b()({"has-background-warning":u===t.slug}),children:[Object(s.jsx)("td",{children:Object(s.jsx)(w,{person:t})}),Object(s.jsx)("td",{children:n}),Object(s.jsx)("td",{children:c}),Object(s.jsx)("td",{children:a}),Object(s.jsx)("td",{children:l&&o?Object(s.jsx)(w,{person:o}):l||"-"}),Object(s.jsx)("td",{children:i&&j?Object(s.jsx)(w,{person:j}):i||"-"})]})},k=function(e){var t=e.people;return Object(s.jsx)(s.Fragment,{children:t&&t.map((function(e){return Object(s.jsx)(S,{person:e},e.slug)}))})},F=function(e){var t=e.people,n=Object(a.d)(),c=Object(o.a)(n,1)[0],r=c.get(m.Sort)||null,l=c.get(m.Order)||null,i=function(e){return r===e?l?null:m.Descending:null},j=function(e){return r===e&&l===m.Descending?null:e};return Object(s.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[v.map((function(e){var t=e.toLowerCase();return Object(s.jsx)("th",{children:Object(s.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:[e,Object(s.jsx)(f,{params:{sort:i(t)||null,order:j(t)||null},children:Object(s.jsx)("span",{className:"icon",children:Object(s.jsx)("i",{className:b()("fas",{"fa-sort":r!==t,"fa-sort-up":r===t&&!l,"fa-sort-down":r===t&&l})})})})]})})})),Object(s.jsx)("th",{children:"Mother"}),Object(s.jsx)("th",{children:"Father"})]})}),Object(s.jsx)("tbody",{children:Object(s.jsx)(k,{people:t})})]})},C=n(4),L=n(7),M="https://mate-academy.github.io/react_people-table/api/people.json";function P(e){return new Promise((function(t){return setTimeout(t,e)}))}function A(){return(A=Object(L.a)(Object(C.a)().mark((function e(){return Object(C.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",P(500).then((function(){return fetch(M)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=function(e){return e.Name="name",e.Sex="sex",e.Born="born",e.Died="died",e}({});function E(e,t){var n=null===e||void 0===e?void 0:e.toLowerCase().trim(),c=t.toLowerCase().trim();return n.includes(c)}var _=function(){var e=Object(a.d)(),t=Object(o.a)(e,1)[0],n=t.get(m.Query)||"",c=t.getAll(m.Centuries)||[],r=t.get(m.Sex)||null,l=t.get(m.Sort)||null,u=t.get(m.Order)||null,b=Object(j.useState)([]),O=Object(o.a)(b,2),x=O[0],p=O[1],f=Object(j.useState)(),v=Object(o.a)(f,2),N=v[0],w=v[1],S=Object(j.useState)(!1),k=Object(o.a)(S,2),C=k[0],L=k[1];Object(j.useEffect)((function(){L(!0),function(){return A.apply(this,arguments)}().then(p).catch((function(){w("Something went wrong")})).finally((function(){L(!1)}))}),[]);var M=function(e,t,n,c,a,r){var s=Object(d.a)(e);if(t===h.Male&&(s=s.filter((function(e){return e.sex===h.Male}))),t===h.Female&&(s=s.filter((function(e){return e.sex===h.Female}))),a){switch(a){case D.Name:s=s.sort((function(e,t){return e.name.localeCompare(t.name)}));break;case D.Sex:s=s.sort((function(e,t){return e.sex.localeCompare(t.sex)}));break;case D.Born:s=s.sort((function(e,t){return e.born-t.born}));break;case D.Died:s=s.sort((function(e,t){return e.died-t.died}));break;default:return s}r&&(s=s.reverse())}return 0!==n.length&&(s=s.filter((function(e){var t=Math.ceil(e.born/100).toString();return n.includes(t)}))),c&&(s=s.filter((function(e){var t,n;return E(e.name,c)||E(null!==(t=e.motherName)&&void 0!==t?t:"",c)||E(null!==(n=e.fatherName)&&void 0!==n?n:"",c)}))),s}(x,r,c,n,l,u),P=M.map((function(e){var t=x.find((function(t){return t.name===e.motherName})),n=x.find((function(t){return t.name===e.fatherName}));return Object(i.a)(Object(i.a)({},e),{},{mother:t,father:n})})),_=!x.length&&!N&&!C,B=N&&!C,Q=!C&&!B&&!!M.length,R=!M.length&&n;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{className:"title",children:"People Page"}),Object(s.jsx)("div",{className:"block",children:Object(s.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[Object(s.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:Object(s.jsx)(g,{})}),Object(s.jsx)("div",{className:"column",children:Object(s.jsxs)("div",{className:"box table-container",children:[C&&Object(s.jsx)(y,{}),B&&Object(s.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:N}),_&&Object(s.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),R&&Object(s.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people matching the current search criteria"}),Q&&Object(s.jsx)(F,{people:P})]})})]})})]})},B=function(e){var t=e.isActive;return b()("navbar-item",{"has-background-grey-lighter":t})},Q=function(){return Object(s.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"navbar-brand",children:[Object(s.jsx)(a.c,{to:"/",className:B,children:"Home"}),Object(s.jsx)(a.c,{to:"/people",className:B,children:"People"})]})})})},R=(n(40),function(){return Object(s.jsxs)("div",{"data-cy":"app",children:[Object(s.jsx)(Q,{}),Object(s.jsx)("div",{className:"section",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsx)(r.b,{})})})]})}),T=function(){return Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("h1",{className:"title",children:"Page not found"})})},q=function(){return Object(s.jsx)(a.a,{children:Object(s.jsx)(r.e,{children:Object(s.jsxs)(r.c,{path:"/",element:Object(s.jsx)(R,{}),children:[Object(s.jsx)(r.c,{index:!0,element:Object(s.jsx)(l,{})}),Object(s.jsx)(r.c,{path:"people",children:Object(s.jsx)(r.c,{path:":slug?",element:Object(s.jsx)(_,{})})}),Object(s.jsx)(r.c,{path:"home",element:Object(s.jsx)(r.a,{to:"/",replace:!0})}),Object(s.jsx)(r.c,{path:"*",element:Object(s.jsx)(T,{})})]})})})};Object(c.createRoot)(document.getElementById("root")).render(Object(s.jsx)(q,{}))}},[[41,1,2]]]);
//# sourceMappingURL=main.2469d047.chunk.js.map