"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4e3],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},104:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"Version 4.2 release notes",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-4.2-release-notes.png",tags:["release"]},l=void 0,s={permalink:"/blog/2023/10/29/version-4.2-release-notes",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2023-10-29-version-4.2-release-notes.md",source:"@site/blog/2023-10-29-version-4.2-release-notes.md",title:"Version 4.2 release notes",description:"Banner",date:"2023-10-29T00:00:00.000Z",formattedDate:"October 29, 2023",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:.61,hasTruncateMarker:!1,authors:[{name:"Lo\xefc Poullain",title:"Creator of FoalTS. Software engineer.",url:"https://loicpoullain.com",imageURL:"https://avatars1.githubusercontent.com/u/13604533?v=4"}],frontMatter:{title:"Version 4.2 release notes",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-4.2-release-notes.png",tags:["release"]},nextItem:{title:"Version 4.1 release notes",permalink:"/blog/2023/10/24/version-4.1-release-notes"}},i={authorsImageUrls:[void 0]},c=[{value:"Better logging for socket.io controllers",id:"better-logging-for-socketio-controllers",level:2},{value:"AJV strict mode can be disabled",id:"ajv-strict-mode-can-be-disabled",level:2},{value:"<code>foal connect angular</code> command fixed",id:"foal-connect-angular-command-fixed",level:2},{value:"Cache control can be disabled for static files",id:"cache-control-can-be-disabled-for-static-files",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Banner",src:n(14172).Z,width:"914",height:"315"})),(0,o.kt)("p",null,"Version 4.2 of ",(0,o.kt)("a",{parentName:"p",href:"https://foalts.org/"},"Foal")," is out!"),(0,o.kt)("h2",{id:"better-logging-for-socketio-controllers"},"Better logging for socket.io controllers"),(0,o.kt)("p",null,"Socket.io messages are now logged in the same way as HTTP requests."),(0,o.kt)("h2",{id:"ajv-strict-mode-can-be-disabled"},"AJV strict mode can be disabled"),(0,o.kt)("p",null,"AJV ",(0,o.kt)("a",{parentName:"p",href:"https://ajv.js.org/strict-mode.html"},"strict mode")," can be disabled thanks to the new config key ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.ajv.strict"),":"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"config/default.json")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "ajv": {\n      "strict": false\n    }\n  }\n}\n')),(0,o.kt)("h2",{id:"foal-connect-angular-command-fixed"},(0,o.kt)("inlineCode",{parentName:"h2"},"foal connect angular")," command fixed"),(0,o.kt)("p",null,"The command that allows to set up a project with Angular and Foal has been fixed to support the latest versions of Angular. "),(0,o.kt)("h2",{id:"cache-control-can-be-disabled-for-static-files"},"Cache control can be disabled for static files"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"cacheControl")," option of the ",(0,o.kt)("inlineCode",{parentName:"p"},"express.static")," middleware can be passed through the configuration."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"config/default.json")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "staticFiles": {\n      "cacheControl": false\n    }\n  }\n}\n')))}p.isMDXComponent=!0},14172:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/banner-a1e34081489d7320336b5788abc052be.png"}}]);