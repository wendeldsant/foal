"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7598],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(f,l(l({ref:t},c),{},{components:n})):o.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42554:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={title:"Version 2.10 release notes",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-2.10-release-notes.png",tags:["release"]},l=void 0,i={permalink:"/fr/blog/2022/08/11/version-2.10-release-notes",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2022-08-11-version-2.10-release-notes.md",source:"@site/blog/2022-08-11-version-2.10-release-notes.md",title:"Version 2.10 release notes",description:"Banner",date:"2022-08-11T00:00:00.000Z",formattedDate:"11 ao\xfbt 2022",tags:[{label:"release",permalink:"/fr/blog/tags/release"}],readingTime:.695,hasTruncateMarker:!0,authors:[{name:"Lo\xefc Poullain",title:"Creator of FoalTS. Software engineer.",url:"https://loicpoullain.com",imageURL:"https://avatars1.githubusercontent.com/u/13604533?v=4"}],frontMatter:{title:"Version 2.10 release notes",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-2.10-release-notes.png",tags:["release"]},prevItem:{title:"Version 2.11 release notes",permalink:"/fr/blog/2022/10/09/version-2.11-release-notes"},nextItem:{title:"FoalTS 2022 survey is open!",permalink:"/fr/blog/2022/06/13/FoalTS-2022-survey-is-open"}},s={authorsImageUrls:[void 0]},p=[{value:"<code>@foal/cli</code> package included by default as dev dependency",id:"foalcli-package-included-by-default-as-dev-dependency",level:2},{value:"Preventing the <code>npm run develop</code> command to get stuck on some OS",id:"preventing-the-npm-run-develop-command-to-get-stuck-on-some-os",level:2},{value:"Smaller <code>main</code> function",id:"smaller-main-function",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Banner",src:n(25333).Z,width:"914",height:"315"})),(0,r.kt)("p",null,"Version 2.10 of ",(0,r.kt)("a",{parentName:"p",href:"https://foalts.org/"},"Foal")," is out! This small release brings some tiny improvements."),(0,r.kt)("h2",{id:"foalcli-package-included-by-default-as-dev-dependency"},(0,r.kt)("inlineCode",{parentName:"h2"},"@foal/cli")," package included by default as dev dependency"),(0,r.kt)("p",null,"Issue: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FoalTS/foal/issues/1097"},"#1097")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@foal/cli")," package is now installed by default as dev dependency. In this way, all commands of ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," still work when deploying the application to a Cloud provider that does not have the CLI installed globally."),(0,r.kt)("p",null,"Contributor: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/scho-to/"},"@scho-to")),(0,r.kt)("h2",{id:"preventing-the-npm-run-develop-command-to-get-stuck-on-some-os"},"Preventing the ",(0,r.kt)("inlineCode",{parentName:"h2"},"npm run develop")," command to get stuck on some OS"),(0,r.kt)("p",null,"Issues: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FoalTS/foal/issues/1022"},"#1022"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FoalTS/foal/issues/1115"},"#1115")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run develop")," was getting stuck on some OS based on the configuration of the app. This issue is now fixed in new projects. For current applications, you will need to add a ",(0,r.kt)("inlineCode",{parentName:"p"},"-r")," flag to the ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," commands using ",(0,r.kt)("inlineCode",{parentName:"p"},"concurrently"),"."),(0,r.kt)("h2",{id:"smaller-main-function"},"Smaller ",(0,r.kt)("inlineCode",{parentName:"h2"},"main")," function"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," function that bootstraps the application is now smaller in new projects."))}u.isMDXComponent=!0},25333:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/banner-4c20b5db4c52edad7d643bb82a652723.png"}}]);