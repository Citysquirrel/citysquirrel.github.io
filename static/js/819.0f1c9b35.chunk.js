(self.webpackChunkcitysquirrel=self.webpackChunkcitysquirrel||[]).push([[819],{1667:function(n,e,t){"use strict";t.d(e,{EG:function(){return c},Ki:function(){return l},PB:function(){return g},QM:function(){return a},V4:function(){return d},VS:function(){return f},m_:function(){return u}});var r=t(885),o=t(7313),i=t(9954);t(6417);function l(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#c4e0fa";(0,o.useEffect)((function(){var t=document.getElementById("top"),r=document.getElementById("right"),o=document.getElementById("bottom"),i=document.getElementById("left"),l=document.getElementById("container"),a=document.getElementById("footer");return null!==t&&(t.style.height=n.top,t.style.backgroundColor=e),null!==r&&(r.style.width=n.right,r.style.backgroundColor=e),null!==o&&(o.style.height=n.bottom,o.style.backgroundColor=e),null!==i&&(i.style.width=n.left,i.style.backgroundColor=e),null!==l&&(l.style.borderWidth=n.container),null!==a&&(a.style.backgroundColor=e),function(){null!==t&&(t.style.height="2px",t.style.backgroundColor="#c4e0fa"),null!==r&&(r.style.width="2px",r.style.backgroundColor="#c4e0fa"),null!==o&&(o.style.height="2px",o.style.backgroundColor="#c4e0fa"),null!==i&&(i.style.width="2px",i.style.backgroundColor="#c4e0fa"),null!==l&&(l.style.borderWidth="2px"),null!==a&&(a.style.backgroundColor="#c4e0fa")}}),[])}function a(n){(0,o.useEffect)((function(){return document.body.style.transition="background-color 0.5s",document.body.style.backgroundColor="".concat(n),function(){document.body.style.backgroundColor="#fff"}}),[])}var s=new i.vd({auth:""});function c(){return s.request("GET /repos/{owner}/{repo}/issues",{owner:"Citysquirrel",repo:"citysquirrel.github.io"})}var d=function(n){var e,t=new Date(n),r=new Date,o=r.getFullYear(),i=r.getMonth(),l=r.getDate(),a=r.getHours(),s=r.getMinutes(),c=new Date(o,i,l,a,s-1),d=new Date(o,i,l,a-1,s),u=new Date(o,i,l-1,a,s),g=new Date(o,i-1,l,a,s),f=new Date(o-1,i,l,a,s),p=r.getTime()-t.getTime();return e=c<=t?"\ubc29\uae08 \uc804":d<=t?"".concat(Math.ceil(p/1e3/60),"\ubd84 \uc804"):u<=t?"".concat(Math.ceil(p/1e3/60/60),"\uc2dc\uac04 \uc804"):g<=t?"".concat(Math.ceil(p/1e3/60/60/24),"\uc77c \uc804"):f<=t?"".concat(Math.ceil(p/1e3/60/60/24/30),"\uac1c\uc6d4 \uc804"):"".concat(Math.ceil(p/1e3/60/60/24/30/12),"\ub144 \uc804"),{kr:t.toLocaleString("KR"),alias:e}};function u(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"console";return(0,o.useEffect)((function(){console.log("".concat(e,": "),n)}),[n]),n}function g(n){return("string"===typeof n?decodeURI(n):"").slice(1).split("&").map((function(n){return n.split("=")})).reduce((function(n,e,t){var o=(0,r.Z)(e,2),i=o[0],l=o[1];return n[i]=l,n}),{})}var f=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;(0,o.useEffect)((function(){document.querySelectorAll("input").forEach((function(n,e){n.setAttribute("id","check".concat(e));var t=document.createElement("label");t.setAttribute("for","check".concat(e)),n.insertAdjacentElement("afterend",t)}))}),[n])}},6351:function(n,e,t){"use strict";e.Z='\n  text-align: justify;\n  \n  a {\n    color: var(--soft-blue-600);\n    :hover {\n      text-decoration: underline;\n    }\n  }\n\n  p {\n    > code {\n      background-color: var(--gray-300);\n      padding: 2px 6px;\n      border-radius: 4px;\n    }\n  }\n\n  pre {\n    display: flex;\n    width: 100%;\n    > code {\n      flex: auto;\n      overflow-x: auto;\n      padding: 4px;\n      ::-webkit-scrollbar {\n        display: block;\n        height: 8px;\n      }\n      ::-webkit-scrollbar-thumb {\n        \n        background-color: var(--soft-blue-400);\n        border-radius: 4px;\n      }\n    }\n  }\n\n  li::marker {\n    color: var(--soft-blue-800);\n  }\n\n  li > p {\n    margin: 0;\n  }\n\n  input[type="checkbox"] {\n    display: none;\n  }\n\n  input[type="checkbox"] + label {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: 1em;\n    height: 1em;\n    margin-right: 4px;\n    border: 1px solid var(--gray-800);\n    border-radius: 4px;\n    transform: translateY(2px);\n    cursor: pointer;\n    :hover {\n        box-shadow: 0 0 2px 1px var(--gray-500);\n    }\n  }\n\n  input[type="checkbox"]:checked + label::after {\n    position: absolute;\n    content: "";\n    background-color: var(--soft-blue-500);\n    width: 0.8em;\n    height: 0.8em;\n    border-radius: 3px;\n  }\n\n  h1,\n  h2 {\n    border-bottom: 1px solid var(--gray-400);\n  }\n  h1,\n  h2,\n  h3,\n  h4 {\n    margin: 24px 0 16px;\n  }\n  h1 {\n    font-size: 2em;\n  }\n  h2 {\n    font-size: 1.5em;\n  }\n  h3 {\n    font-size: 1.25em;\n  }\n  h4 {\n    font-size: 1em;\n  }\n\n  blockquote {\n    margin: 0;\n    padding: 2px;\n    border-left: 3px solid var(--soft-blue-400);\n    background-color: var(--soft-blue-50);\n    \n    > p {\n      margin-left: 16px;\n      white-space: pre-line;\n    }\n\n    * {\n      color: var(--gray-700);\n    }\n  }\n\n}'},2017:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return F}});var r,o,i,l,a,s,c,d,u,g,f=t(885),p=t(168),b=t(7313),x=t(1667),h=t(9184),m=t(7890),v=t(1984),y=t(6351),k=t(1413),w=t(4925),j=t(9362),Z=t(6634),C=t(6417),E=["children"],N=function(n){var e=n.children,t=(0,w.Z)(n,E);return"type"in e&&"code"===e.type?function(n){var e=n.className,t=n.children,r="text";return e&&e.startsWith("lang-")&&(r=e.replace("lang-","")),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("div",{}),(0,C.jsx)(j.Z,{language:r,style:Z.Z,customStyle:{borderRadius:"4px",padding:"16px",margin:"8px 0",backgroundColor:"var(--soft-blue-100)"},wrapLines:!0,children:t})]})}(e.props):(0,C.jsx)("pre",(0,k.Z)((0,k.Z)({style:{borderRadius:"4px"}},t),{},{children:e}))},B=h.ZP.section(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  float: right;\n  width: calc(100% - 200px);\n  margin-bottom: 60px;\n  animation: 1s fadeInDown ease-out;\n  animation-fill-mode: both;\n"]))),z=h.ZP.header(o||(o=(0,p.Z)(["\n  flex: auto;\n  border-bottom: 2px solid var(--gray-500);\n  > p {\n    font-size: 52px;\n    font-weight: 600;\n    margin: 0.75em 0 0.75em;\n  }\n"]))),P=h.ZP.article(i||(i=(0,p.Z)(["\n  display: block;\n  padding: 16px;\n  margin: 8px 0 8px;\n  font-size: 15px;\n  border: 1px solid var(--soft-blue-200);\n  border-radius: 4px;\n\n  ","\n"])),y.Z),L=function(n){var e=n.data,t=(n.isLoading,null===e||void 0===e?void 0:e[0]);return(0,x.VS)(e),(0,C.jsxs)(B,{children:[(0,C.jsx)(z,{children:(0,C.jsx)("p",{children:void 0!==t?t.title.split("[BLOG] ")[1]:""})}),(0,C.jsx)(P,{children:(0,C.jsx)(v.Z,{options:{overrides:{pre:N}},children:void 0!==t?t.body.split("---").slice(1).join("---"):""})})]})},I=t(9466),D=t(3122),M=function(){return(0,C.jsx)(C.Fragment,{children:"123"})},q=h.ZP.section(l||(l=(0,p.Z)(["\n  float: right;\n  width: calc(100% - 200px);\n  margin-bottom: 60px;\n"]))),S=h.ZP.article(a||(a=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin: 8px;\n  padding: 8px;\n  gap: 4px;\n  border-bottom: 2px solid var(--gray-300);\n  :hover {\n    background-color: var(--gray-200);\n    transition: all 0.3s;\n  }\n  .blog-info-wrapper {\n    display: flex;\n    vertical-align: middle;\n    align-items: center;\n    gap: 4px;\n  }\n  .blog-subject {\n    display: flex;\n    margin: 0;\n    > a {\n      flex: auto;\n      text-align: left;\n      color: var(--soft-blue-600);\n      :hover {\n        color: var(--soft-blue-700);\n        background-color: var(--soft-blue-50);\n        transition: all 0.3s;\n      }\n    }\n  }\n  .blog-alias {\n    display: inline-block;\n    font-size: 0.875rem;\n    margin: 0 4px;\n    color: var(--gray-500);\n  }\n  .blog-category {\n    font-size: 0.875rem;\n    margin: 0 4px;\n    color: var(--soft-orange-600);\n    font-weight: 500;\n    padding: 2px 8px;\n    border: 1px solid var(--soft-orange-200);\n    border-radius: 4px;\n    cursor: pointer;\n    user-select: none;\n    :hover {\n      color: white;\n      background-color: var(--soft-orange-600);\n      transition: all 0.3s;\n    }\n  }\n  .blog-issue-link {\n    display: flex;\n    vertical-align: middle;\n    align-items: center;\n    font-size: 0.75rem;\n    margin: 0 4px;\n    padding: 2px 4px;\n    border: 1px solid var(--gray-400);\n    border-radius: 4px;\n    .blog-issue-link-icon {\n      margin-right: 4px;\n    }\n    :hover {\n      background-color: var(--gray-300);\n      transition: all 0.3s;\n    }\n  }\n  .blog-description {\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    text-align: start;\n    font-size: 1rem;\n    line-height: 1.5rem;\n    margin-bottom: 8px;\n    height: 3rem;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n"]))),G=function(n){var e=n.data,t=n.isLoading,r=(0,m.TH)().search,o=(0,m.s0)();(0,x.m_)(r);var i=null===e||void 0===e?void 0:e.filter((function(n){var e=(0,x.PB)(r);return void 0===e.tags||n.labels.map((function(n){return"string"!==typeof n&&n.name})).includes(e.tags)}));return(0,C.jsx)(q,{children:t?(0,C.jsx)(C.Fragment,{children:"Loading................................."}):0===(null===i||void 0===i?void 0:i.length)?(0,C.jsx)(M,{}):null===e||void 0===e?void 0:e.filter((function(n){var e=(0,x.PB)(r);return void 0===e.tags||n.labels.map((function(n){return"string"!==typeof n&&n.name})).includes(e.tags)})).map((function(n){var e=n.title.split("[BLOG] ")[1],t=n.labels,r=n.body,i=t.map((function(n){return"string"===typeof n?n:n.name})),l=null===r||void 0===r?void 0:r.split("---")[0].trim(),a=(0,x.V4)(n.created_at).alias;return(0,C.jsxs)(S,{children:[(0,C.jsx)("h2",{className:"blog-subject",children:(0,C.jsx)(I.rU,{to:"/blog/".concat(n.number),children:e})}),(0,C.jsxs)("div",{className:"blog-info-wrapper",children:[(0,C.jsx)("span",{className:"blog-alias",children:a}),"\xb7",i.map((function(n,e){return void 0!==n&&"Blog"!==n&&n[0].toUpperCase()===n[0]?(0,C.jsx)("span",{className:"blog-category",onClick:(t=n,function(n){o("/blog?tags=".concat(t))}),children:n},e):null;var t})),"\xb7",(0,C.jsxs)("a",{className:"blog-issue-link",href:n.html_url,target:"_blank",rel:"noreferrer",children:[(0,C.jsx)(D.hJX,{className:"blog-issue-link-icon"}),"Github Issues"]})]}),(0,C.jsx)("div",{className:"blog-description",children:l})]},n.id)}))})},T=(h.ZP.article(s||(s=(0,p.Z)(["\n  display: inline-block;\n"]))),h.ZP.aside(c||(c=(0,p.Z)(["\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  float: left;\n  font-size: 16px;\n  align-items: center;\n  padding-top: 60px;\n  width: 200px;\n"])))),U=h.ZP.header(d||(d=(0,p.Z)(["\n  position: relative;\n  width: calc(100% - 64px);\n  /* text-align: center; */\n  font-size: 1.25em;\n  font-weight: 600;\n  text-align: left;\n  margin-bottom: 8px;\n\n  :before {\n    content: '';\n    z-index: -1;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: 216px;\n    height: 20px;\n    background: linear-gradient(\n      -105deg,\n      transparent 0%,\n      var(--soft-blue-50) 10%,\n      var(--soft-blue-500) 75%\n    );\n    transform: translate3d(-40px, 8px, 0) scale(0.6);\n    border-radius: 2px;\n  }\n"]))),O=h.ZP.section(u||(u=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  > a {\n    display: flex;\n    align-items: stretch;\n    width: 172px;\n    color: var(--gray-800);\n    font-size: 0.9375em;\n    &.total {\n      margin-bottom: 4px;\n      > .label-name {\n        color: var(--soft-blue-800);\n      }\n    }\n    > div {\n      flex: auto;\n      &.label-name {\n        text-align: left;\n      }\n\n      &.label-count {\n        text-align: right;\n        color: var(--gray-500);\n      }\n    }\n    :hover {\n      > div {\n        &.label-name {\n          color: var(--soft-orange-900);\n        }\n        &.label-count {\n          color: var(--gray-800);\n        }\n      }\n    }\n  }\n"]))),_=function(n){var e=n.data,t=(n.isLoading,(0,m.TH)().search),r={};(0,x.PB)(t);null===e||void 0===e||e.forEach((function(n){n.labels.map((function(n){return"string"===typeof n||n.name})).forEach((function(n){"string"===typeof n&&n[0].toUpperCase()===n[0]&&"Blog"!==n&&(void 0===r[n]?r[n]=1:"string"===typeof n&&r[n]++)}))}));var o=Object.entries(r);o.reduce((function(n,e){var t=(0,f.Z)(n,2),r=(t[0],t[1]),o=(0,f.Z)(e,2);o[0];return["",r+o[1]]}),["",0]);return(0,C.jsxs)(T,{children:[(0,C.jsx)(U,{children:"Tags"}),(0,C.jsxs)(O,{children:[(0,C.jsxs)("a",{className:"label-link total",href:"/blog",children:[(0,C.jsx)("div",{className:"label-name",children:"Total"}),(0,C.jsxs)("div",{className:"label-count",children:["(",null===e||void 0===e?void 0:e.length,")"]})]}),o.map((function(n,e){var t=(0,f.Z)(n,2),r=t[0],o=t[1];return(0,C.jsxs)(I.rU,{className:"label-link",to:"/blog?tags=".concat(r),children:[(0,C.jsx)("div",{className:"label-name",children:r}),(0,C.jsxs)("div",{className:"label-count",children:["(",o,")"]})]},e)}))]})]})};var A=h.ZP.main(g||(g=(0,p.Z)(["\n  clear: both;\n  margin-top: 60px;\n  animation: 1s 0.5s fadeIn;\n  animation-fill-mode: both;\n"]))),F=function(){var n=(0,b.useState)(!0),e=(0,f.Z)(n,2),t=e[0],r=e[1],o=(0,b.useState)(null),i=(0,f.Z)(o,2),l=i[0],a=i[1],s=(0,b.useState)([]),c=(0,f.Z)(s,2),d=(c[0],c[1]),u=(0,m.UO)().number,g=null===l||void 0===l?void 0:l.filter((function(n){return n.number===Number(u)})),p=["Citysquirrel"];return(0,x.QM)("#f5f5f5"),(0,b.useEffect)((function(){r(!0),(0,x.EG)().then((function(n){var e=n.data.filter((function(n){var e;return n.title.includes("[BLOG]")&&p.includes(null===(e=n.user)||void 0===e?void 0:e.login)}));a(e),d(e.map((function(n){return n.number}))),r(!1)})).catch((function(n){return console.log("Network Error: ",n)}))}),[]),(0,C.jsxs)(A,{children:[(0,C.jsx)(_,{data:l,isLoading:t}),u?(0,C.jsx)(L,{data:g,isLoading:t}):(0,C.jsx)(G,{data:l,isLoading:t})]})}},5696:function(){}}]);