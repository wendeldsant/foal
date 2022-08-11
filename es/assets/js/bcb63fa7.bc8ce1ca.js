"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7598],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2554:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={title:"Version 2.10 release notes",author:"Lo\xefc Poullain",author_title:"Fullstack developer and creator of FoalTS",author_url:"https://github.com/LoicPoullain",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-2.10-release-notes.png",tags:["release"]},l=void 0,i={permalink:"/es/blog/2022/08/11/version-2.10-release-notes",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2022-08-11-version-2.10-release-notes.md",source:"@site/blog/2022-08-11-version-2.10-release-notes.md",title:"Version 2.10 release notes",description:"Banner",date:"2022-08-11T00:00:00.000Z",formattedDate:"11 de agosto de 2022",tags:[{label:"release",permalink:"/es/blog/tags/release"}],readingTime:.685,hasTruncateMarker:!0,authors:[{name:"Lo\xefc Poullain",title:"Fullstack developer and creator of FoalTS",url:"https://github.com/LoicPoullain",imageURL:"https://avatars1.githubusercontent.com/u/13604533?v=4"}],frontMatter:{title:"Version 2.10 release notes",author:"Lo\xefc Poullain",author_title:"Fullstack developer and creator of FoalTS",author_url:"https://github.com/LoicPoullain",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-2.10-release-notes.png",tags:["release"]},nextItem:{title:"FoalTS 2022 survey is open!",permalink:"/es/blog/2022/06/13/FoalTS-2022-survey-is-open"}},s={authorsImageUrls:[void 0]},c=[{value:"<code>@foal/cli</code> package included by default as dev dependency",id:"foalcli-package-included-by-default-as-dev-dependency",level:2},{value:"Preventing the <code>npm run develop</code> command to get stuck on some OS",id:"preventing-the-npm-run-develop-command-to-get-stuck-on-some-os",level:2},{value:"Smaller <code>main</code> function",id:"smaller-main-function",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Banner",src:n(5333).Z,width:"914",height:"315"})),(0,o.kt)("p",null,"Version 2.10 of ",(0,o.kt)("a",{parentName:"p",href:"https://foalts.org/"},"Foal")," is out! This small release brings some tiny improvements."),(0,o.kt)("h2",{id:"foalcli-package-included-by-default-as-dev-dependency"},(0,o.kt)("inlineCode",{parentName:"h2"},"@foal/cli")," package included by default as dev dependency"),(0,o.kt)("p",null,"Issue: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/FoalTS/foal/issues/1097"},"#1097")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@foal/cli")," package is now installed by default as dev dependency. In this way, all commands of ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," still work when deploying the application to a Cloud provider that does not have the CLI installed globally."),(0,o.kt)("h2",{id:"preventing-the-npm-run-develop-command-to-get-stuck-on-some-os"},"Preventing the ",(0,o.kt)("inlineCode",{parentName:"h2"},"npm run develop")," command to get stuck on some OS"),(0,o.kt)("p",null,"Issues: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/FoalTS/foal/issues/1022"},"#1022"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/FoalTS/foal/issues/1115"},"#1115")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run develop")," was getting stuck on some OS based on the configuration of the app. This issue is now fixed in new projects. For current applications, you will need to add a ",(0,o.kt)("inlineCode",{parentName:"p"},"-r")," flag to the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," commands using ",(0,o.kt)("inlineCode",{parentName:"p"},"concurrently"),"."),(0,o.kt)("h2",{id:"smaller-main-function"},"Smaller ",(0,o.kt)("inlineCode",{parentName:"h2"},"main")," function"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," function that bootstraps the application is now smaller in new projects."))}u.isMDXComponent=!0},5333:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/banner-4c20b5db4c52edad7d643bb82a652723.png"}}]);