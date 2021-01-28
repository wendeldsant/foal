(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{253:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(265),l=a(282),c=a(262);var o=function(e){var t=e.nextItem,a=e.prevItem;return i.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog post page navigation"},i.a.createElement("div",{className:"pagination-nav__item"},a&&i.a.createElement(c.a,{className:"pagination-nav__link",to:a.permalink},i.a.createElement("div",{className:"pagination-nav__sublabel"},"Newer Post"),i.a.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),i.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&i.a.createElement(c.a,{className:"pagination-nav__link",to:t.permalink},i.a.createElement("div",{className:"pagination-nav__sublabel"},"Older Post"),i.a.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},s=a(267),m=a(284),d=a(275);t.default=function(e){var t=e.content,a=e.sidebar,n=t.frontMatter,c=t.metadata,u=c.title,v=c.description,f=c.nextItem,p=c.prevItem,b=c.editUrl,E=n.hide_table_of_contents;return i.a.createElement(r.a,{title:u,description:v,wrapperClassName:"blog-wrapper"},t&&i.a.createElement("div",{className:"container margin-vert--lg"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col col--2"},i.a.createElement(s.a,{sidebar:a})),i.a.createElement("main",{className:"col col--8"},i.a.createElement(l.a,{frontMatter:n,metadata:c,isBlogPostPage:!0},i.a.createElement(t,null)),i.a.createElement("div",null,b&&i.a.createElement("a",{href:b,target:"_blank",rel:"noreferrer noopener"},i.a.createElement(d.a,null),"Edit this page")),(f||p)&&i.a.createElement("div",{className:"margin-vert--xl"},i.a.createElement(o,{nextItem:f,prevItem:p}))),!E&&t.toc&&i.a.createElement("div",{className:"col col--2"},i.a.createElement(m.a,{toc:t.toc})))))}},267:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),i=a.n(n),r=a(256),l=a(262),c=a(57),o=a.n(c),s=!1;function m(e){var t=e.sidebar;if(0===t.items.length)return null;var a=function(){return"undefined"!=typeof window&&window.document.body.clientWidth>996};return Object(n.useEffect)((function(){if(a()&&!s&&window.location.href.includes("blog")){console.log("Loading blog"),s=!0,setTimeout((function(){return s=!1}),1e3);var e=document.createElement("script");return e.src="https://media.ethicalads.io/media/client/ethicalads.min.js",e.async=!0,document.body.appendChild(e),function(){document.body.removeChild(e)}}}),["undefined"!=typeof window?window.location.href:""]),i.a.createElement("div",{className:Object(r.a)(o.a.sidebar,"thin-scrollbar")},i.a.createElement("h3",{className:o.a.sidebarItemTitle},t.title),i.a.createElement("ul",{className:o.a.sidebarItemList},t.items.map((function(e){return i.a.createElement("li",{key:e.permalink,className:o.a.sidebarItem},i.a.createElement(l.a,{isNavLink:!0,to:e.permalink,className:o.a.sidebarItemLink,activeClassName:o.a.sidebarItemLinkActive},e.title))}))),a()&&i.a.createElement("div",{className:"bordered","data-ea-publisher":"foalts-org","data-ea-type":"image",id:"blog-sidebar"}))}},275:function(e,t,a){"use strict";var n=a(3),i=a(7),r=a(0),l=a.n(r),c=a(256),o=a(59),s=a.n(o);t.a=function(e){var t=e.className,a=Object(i.a)(e,["className"]);return l.a.createElement("svg",Object(n.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(c.a)(s.a.iconEdit,t)},a),l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}},284:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(256);var l=function(e,t,a){var i=Object(n.useState)(void 0),r=i[0],l=i[1];Object(n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var i=0,c=!1,o=document.getElementsByClassName(e);i<o.length&&!c;){var s=o[i],m=s.href,d=decodeURIComponent(m.substring(m.indexOf("#")+1));n.id===d&&(r&&r.classList.remove(t),s.classList.add(t),l(s),c=!0),i+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},c=a(58),o=a.n(c),s="table-of-contents__link";function m(e){var t=e.toc,a=e.isChild;return t.length?i.a.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return i.a.createElement("li",{key:e.id},i.a.createElement("a",{href:"#"+e.id,className:s,dangerouslySetInnerHTML:{__html:e.value}}),i.a.createElement(m,{isChild:!0,toc:e.children}))}))):null}var d=!1;t.a=function(e){var t=e.toc,a=function(){return"undefined"!=typeof window&&window.document.body.clientWidth>996};return Object(n.useEffect)((function(){if(a()&&!d&&window.location.href.includes("docs")){console.log("Loading ad docs"),d=!0,setTimeout((function(){return d=!1}),1e3);var e=document.createElement("script");return e.src="https://media.ethicalads.io/media/client/ethicalads.min.js",e.async=!0,document.body.appendChild(e),function(){document.body.removeChild(e)}}}),["undefined"!=typeof window?window.location.href:""]),l(s,"table-of-contents__link--active",100),i.a.createElement("div",{className:Object(r.a)(o.a.tableOfContents,"thin-scrollbar")},i.a.createElement(m,{toc:t}),a()&&i.a.createElement("div",{className:"bordered","data-ea-publisher":"foalts-org","data-ea-type":"image",id:"docs-sidebar"}))}}}]);