"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6103],{65203:(e,n,t)=>{t.r(n),t.d(n,{default:()=>b});var a=t(67294),l=t(86010),o=t(10833),r=t(35281),i=t(9460),s=t(39058),c=t(30390),m=t(87462),d=t(95999),u=t(32244);function g(e){const{nextItem:n,prevItem:t}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},t&&a.createElement(u.Z,(0,m.Z)({},t,{subLabel:a.createElement(d.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),n&&a.createElement(u.Z,(0,m.Z)({},n,{subLabel:a.createElement(d.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function f(){var e;const{assets:n,metadata:t}=(0,i.C)(),{title:l,description:r,date:s,tags:c,authors:m,frontMatter:d}=t,{keywords:u}=d,g=null!=(e=n.image)?e:d.image;return a.createElement(o.d,{title:l,description:r,keywords:u,image:g},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:s}),m.some((e=>e.url))&&a.createElement("meta",{property:"article:author",content:m.map((e=>e.url)).filter(Boolean).join(",")}),c.length>0&&a.createElement("meta",{property:"article:tag",content:c.map((e=>e.label)).join(",")}))}var p=t(92172);function v(e){let{sidebar:n,children:t}=e;const{metadata:l,toc:o}=(0,i.C)(),{nextItem:r,prevItem:m,frontMatter:d}=l,{hide_table_of_contents:u,toc_min_heading_level:f,toc_max_heading_level:v}=d;return a.createElement(s.Z,{sidebar:n,toc:!u&&o.length>0?a.createElement(p.Z,{toc:o,minHeadingLevel:f,maxHeadingLevel:v}):void 0},a.createElement(c.Z,null,t),(r||m)&&a.createElement(g,{nextItem:r,prevItem:m}))}function b(e){const n=e.content;return a.createElement(i.n,{content:e.content,isBlogPostPage:!0},a.createElement(o.FG,{className:(0,l.Z)(r.k.wrapper.blogPages,r.k.page.blogPostPage)},a.createElement(f,null),a.createElement(v,{sidebar:e.sidebar},a.createElement(n,null))))}},93743:(e,n,t)=>{t.d(n,{Z:()=>f});var a=t(87462),l=t(67294),o=t(86668);function r(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...l}=e;t>=0?n[t].children.push(l):a.push(l)})),a}function i(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=i({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function s(e){const n=e.getBoundingClientRect();return n.top===n.bottom?s(e.parentNode):n}function c(e,n){var t;let{anchorTopOffset:a}=n;const l=e.find((e=>s(e).top>=a));if(l){var o;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(l))?l:null!=(o=e[e.indexOf(l)-1])?o:null}return null!=(t=e[e.length-1])?t:null}function m(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:n}}=(0,o.L)();return(0,l.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,l.useRef)(void 0),t=m();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:o,maxHeadingLevel:r}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let l=n;l<=t;l+=1)a.push("h"+l+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:o,maxHeadingLevel:r}),s=c(i,{anchorTopOffset:t.current}),m=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(l),e.classList.add(l),n.current=e):e.classList.remove(l)}(e,e===m)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,t])}function u(e){let{toc:n,className:t,linkClassName:a,isChild:o}=e;return n.length?l.createElement("ul",{className:o?void 0:t},n.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:t,linkClassName:a}))))):null}const g=l.memo(u);function f(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:m,maxHeadingLevel:u,...f}=e;const p=(0,o.L)(),v=null!=m?m:p.tableOfContents.minHeadingLevel,b=null!=u?u:p.tableOfContents.maxHeadingLevel,h=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>i({toc:r(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:v,maxHeadingLevel:b});return d((0,l.useMemo)((()=>{if(s&&c)return{linkClassName:s,linkActiveClassName:c,minHeadingLevel:v,maxHeadingLevel:b}}),[s,c,v,b])),l.createElement(g,(0,a.Z)({toc:h,className:t,linkClassName:s},f))}},92172:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(87462),l=t(67294),o=t(86010),r=t(93743);const i="tableOfContents_jeP5";function s(){_bsa.init("custom","CEBI553Y","placement:foaltsorg",{target:"#carbon-js",template:'\n      <div id="carbonads">\n        <span\n          ><span class="carbon-wrap"\n            ><a\n              href="##statlink##"\n              class="carbon-img"\n              target="_blank"\n              rel="noopener sponsored"\n              ><img\n                src="##smallImage##"\n                alt="ads via Carbon"\n                border="0"\n                height="100"\n                width="130"\n                style="max-width: 130px" /></a\n            ><a\n              href="##statlink##"\n              class="carbon-text"\n              target="_blank"\n              rel="noopener sponsored"\n              >##description##</a\n            ></span\n          ><a\n            href="##ad_via_link##"\n            class="carbon-poweredby"\n            target="_blank"\n            rel="noopener sponsored"\n            >ads via Carbon</a\n          ></span\n        >\n      </div>\n      \n      '})}let c=!0;let m=!1;function d(e){let{className:n,...t}=e;const d=()=>"undefined"!=typeof window&&window.document.body.clientWidth>996;return(0,l.useEffect)((()=>{d()&&!m&&(m=!0,setTimeout((()=>m=!1),1e3),"undefined"!=typeof _bsa&&_bsa&&(console.log("Loading ad"),s(),c||s(),c=!1))}),["undefined"!=typeof window?window.location.href:""]),l.createElement("div",{className:(0,o.Z)(i,"thin-scrollbar",n)},l.createElement(r.Z,(0,a.Z)({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})),d()&&l.createElement("div",{id:"carbon-js"}))}}}]);