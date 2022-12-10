"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4414],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12544:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Version 3.1 release notes",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-3.1-release-notes.png",tags:["release"]},s=void 0,i={permalink:"/es/blog/2022/11/28/version-3.1-release-notes",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2022-11-28-version-3.1-release-notes.md",source:"@site/blog/2022-11-28-version-3.1-release-notes.md",title:"Version 3.1 release notes",description:"Banner",date:"2022-11-28T00:00:00.000Z",formattedDate:"28 de noviembre de 2022",tags:[{label:"release",permalink:"/es/blog/tags/release"}],readingTime:.765,hasTruncateMarker:!0,authors:[{name:"Lo\xefc Poullain",title:"Creator of FoalTS. Software engineer.",url:"https://loicpoullain.com",imageURL:"https://avatars1.githubusercontent.com/u/13604533?v=4"}],frontMatter:{title:"Version 3.1 release notes",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-3.1-release-notes.png",tags:["release"]},nextItem:{title:"Version 3.0 release notes",permalink:"/es/blog/2022/11/01/version-3.0-release-notes"}},l={authorsImageUrls:[void 0]},p=[{value:"New <code>foal upgrade</code> command",id:"new-foal-upgrade-command",level:2},{value:"Social authentication supports subdomains",id:"social-authentication-supports-subdomains",level:2},{value:"Regression on OpenAPI keyword &quot;example&quot; has been fixed",id:"regression-on-openapi-keyword-example-has-been-fixed",level:2},{value:"<code>.env</code> files support whitespaces",id:"env-files-support-whitespaces",level:2},{value:"Value of the <code>Strict-Transport-Security</code> header has been increased",id:"value-of-the-strict-transport-security-header-has-been-increased",level:2}],u={toc:p};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Banner",src:n(79408).Z,width:"914",height:"315"})),(0,r.kt)("p",null,"Version 3.1 of ",(0,r.kt)("a",{parentName:"p",href:"https://foalts.org/"},"Foal")," is out! Here are the improvements that it brings:"),(0,r.kt)("h2",{id:"new-foal-upgrade-command"},"New ",(0,r.kt)("inlineCode",{parentName:"h2"},"foal upgrade")," command"),(0,r.kt)("p",null,"This command allows you to upgrade all ",(0,r.kt)("inlineCode",{parentName:"p"},"@foal/*")," dependencies and dev dependencies to a given version."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'foal upgrade # upgrade to the latest version\nfoal upgrade 3.0.0\nfoal upgrade "~3.0.0"\n')),(0,r.kt)("h2",{id:"social-authentication-supports-subdomains"},"Social authentication supports subdomains"),(0,r.kt)("p",null,"If you're using multiple subdomains domains to handle social authentication, you can now do so by specifying a custom cookie domain in the configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  social:\n    cookie:\n      domain: foalts.org\n")),(0,r.kt)("h2",{id:"regression-on-openapi-keyword-example-has-been-fixed"},'Regression on OpenAPI keyword "example" has been fixed'),(0,r.kt)("p",null,"In version 3.0, using the keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"example")," in an validation object was raising an error. This has been fixed."),(0,r.kt)("h2",{id:"env-files-support-whitespaces"},(0,r.kt)("inlineCode",{parentName:"h2"},".env")," files support whitespaces"),(0,r.kt)("p",null,"Whitespaces around the equal symbol are now allowed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"FOO_BAR_WITH_WHITESPACES_AROUND_THE_NAME = hello you\n")),(0,r.kt)("h2",{id:"value-of-the-strict-transport-security-header-has-been-increased"},"Value of the ",(0,r.kt)("inlineCode",{parentName:"h2"},"Strict-Transport-Security")," header has been increased"),(0,r.kt)("p",null,"It has been increased from 15,552,000 to 31,536,000."))}c.isMDXComponent=!0},79408:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/banner-0305ae523c9048e2b6e9fac5d191b41e.png"}}]);