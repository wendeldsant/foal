"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1115],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"Version 4.0 release notes",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-4.0-release-notes.png",tags:["release"]},i=void 0,l={permalink:"/blog/2023/09/11/version-4.0-release-notes",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2023-09-11-version-4.0-release-notes.md",source:"@site/blog/2023-09-11-version-4.0-release-notes.md",title:"Version 4.0 release notes",description:"Banner",date:"2023-09-11T00:00:00.000Z",formattedDate:"September 11, 2023",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:1.005,hasTruncateMarker:!0,authors:[{name:"Lo\xefc Poullain",title:"Creator of FoalTS. Software engineer.",url:"https://loicpoullain.com",imageURL:"https://avatars1.githubusercontent.com/u/13604533?v=4"}],frontMatter:{title:"Version 4.0 release notes",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-4.0-release-notes.png",tags:["release"]},prevItem:{title:"Version 4.1 release notes",permalink:"/blog/2023/10/24/version-4.1-release-notes"},nextItem:{title:"Version 3.3 release notes",permalink:"/blog/2023/08/13/version-3.3-release-notes"}},s={authorsImageUrls:[void 0]},p=[{value:"Description",id:"description",level:2},{value:"Migration guide",id:"migration-guide",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Banner",src:n(59431).Z,width:"914",height:"315"})),(0,o.kt)("p",null,"Version 4.0 of ",(0,o.kt)("a",{parentName:"p",href:"https://foalts.org/"},"Foal")," is out!"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"The goals of this major release are to"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"support the latest active versions of Node (18 and 20) and update all internal dependencies to their latest major versions"),(0,o.kt)("li",{parentName:"ul"},"facilitate framework maintenance.")),(0,o.kt)("p",null,"Full details can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/FoalTS/foal/issues/1223"},"here"),"."),(0,o.kt)("h2",{id:"migration-guide"},"Migration guide"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"npx foal upgrade"),"."),(0,o.kt)("li",{parentName:"ul"},"Version 16 of Node is not supported anymore. Upgrade to version 18 or version 20."),(0,o.kt)("li",{parentName:"ul"},"Support of MariaDB has been dropped."),(0,o.kt)("li",{parentName:"ul"},"If you use any of these dependencies, upgrade ",(0,o.kt)("inlineCode",{parentName:"li"},"typeorm")," to v0.3.17, ",(0,o.kt)("inlineCode",{parentName:"li"},"graphql")," to v16, ",(0,o.kt)("inlineCode",{parentName:"li"},"type-graphql")," to v2, ",(0,o.kt)("inlineCode",{parentName:"li"},"class-validator")," to v0.14, ",(0,o.kt)("inlineCode",{parentName:"li"},"mongodb")," to v5 and ",(0,o.kt)("inlineCode",{parentName:"li"},"@socket.io/redis-adapter")," to v8."),(0,o.kt)("li",{parentName:"ul"},"If you use both TypeORM and ",(0,o.kt)("inlineCode",{parentName:"li"},"MongoDBStore"),", there is no need anymore to maintain two versions of ",(0,o.kt)("inlineCode",{parentName:"li"},"mongodb"),". You can use version 5 of ",(0,o.kt)("inlineCode",{parentName:"li"},"mongodb")," dependency."),(0,o.kt)("li",{parentName:"ul"},"If you use ",(0,o.kt)("inlineCode",{parentName:"li"},"@foal/socket.io")," with redis, install ",(0,o.kt)("inlineCode",{parentName:"li"},"socket.io-adapter"),"."),(0,o.kt)("li",{parentName:"ul"},"Support for ",(0,o.kt)("inlineCode",{parentName:"li"},"better-sqlite")," driver has been dropped. Use the ",(0,o.kt)("inlineCode",{parentName:"li"},"sqlite3")," driver instead. In DB configuration, use ",(0,o.kt)("inlineCode",{parentName:"li"},"type: 'sqlite'")," instead of ",(0,o.kt)("inlineCode",{parentName:"li"},"type: 'better-sqlite3'"),"."),(0,o.kt)("li",{parentName:"ul"},"In your project dependencies, upgrade ",(0,o.kt)("inlineCode",{parentName:"li"},"@types/node")," to v18.11.9."),(0,o.kt)("li",{parentName:"ul"},"If you use TypeORM with MongoDB, for the entities definitions, rename ",(0,o.kt)("inlineCode",{parentName:"li"},"import { ObjectID } from 'typeorm';")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"import { ObjectId } from 'typeorm';"))))}c.isMDXComponent=!0},59431:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/banner-4c34e2e17b81c0ebcb02485f01153edd.png"}}]);