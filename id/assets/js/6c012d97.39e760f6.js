"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9865],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),h=o,g=m["".concat(s,".").concat(h)]||m[h]||c[h]||a;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},12043:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"Version 4.3 release notes",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-4.3-release-notes.png",tags:["release"]},l=void 0,i={permalink:"/id/blog/2024/04/16/version-4.3-release-notes",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2024-04-16-version-4.3-release-notes.md",source:"@site/blog/2024-04-16-version-4.3-release-notes.md",title:"Version 4.3 release notes",description:"Banner",date:"2024-04-16T00:00:00.000Z",formattedDate:"16 April 2024",tags:[{label:"release",permalink:"/id/blog/tags/release"}],readingTime:1.125,hasTruncateMarker:!0,authors:[{name:"Lo\xefc Poullain",title:"Creator of FoalTS. Software engineer.",url:"https://loicpoullain.com",imageURL:"https://avatars1.githubusercontent.com/u/13604533?v=4"}],frontMatter:{title:"Version 4.3 release notes",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-4.3-release-notes.png",tags:["release"]},nextItem:{title:"Version 4.2 release notes",permalink:"/id/blog/2023/10/29/version-4.2-release-notes"}},s={authorsImageUrls:[void 0]},p=[{value:"Better CLI ouput when script arguments are invalid",id:"better-cli-ouput-when-script-arguments-are-invalid",level:2},{value:"Fix the logger no longer throws an error in development when the client request is interrupted",id:"fix-the-logger-no-longer-throws-an-error-in-development-when-the-client-request-is-interrupted",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Banner",src:r(81565).Z,width:"914",height:"315"})),(0,o.kt)("p",null,"Version 4.3 of ",(0,o.kt)("a",{parentName:"p",href:"https://foalts.org/"},"Foal")," is out!"),(0,o.kt)("h2",{id:"better-cli-ouput-when-script-arguments-are-invalid"},"Better CLI ouput when script arguments are invalid"),(0,o.kt)("p",null,"Previously, when executing ",(0,o.kt)("inlineCode",{parentName:"p"},"foal run my-script")," with invalid arguments, the CLI would only display one error at a time."),(0,o.kt)("p",null,"For example, with the following schema and arguments, we would only get this error message:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export const schema = {\n  type: 'object', \n  properties: {\n    email: { type: 'string', format: 'email', maxLength: 2 },\n    password: { type: 'string' },\n    n: { type: 'number', maximum: 10 }\n  },\n  required: ['password']\n};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"foal run my-script email=bar n=11\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Error: The command line arguments must match format "email".\n')),(0,o.kt)("p",null,"From version 4.3 onwards, the CLI logs all validation errors and with a more meaningful description."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Script error: arguments must have required property \'password\'.\nScript error: the value of "email" must NOT have more than 2 characters.\nScript error: the value of "email" must match format "email".\nScript error: the value of "n" must be <= 10.\n')),(0,o.kt)("h2",{id:"fix-the-logger-no-longer-throws-an-error-in-development-when-the-client-request-is-interrupted"},"[Fix]"," the logger no longer throws an error in development when the client request is interrupted"),(0,o.kt)("p",null,"Using the logger's ",(0,o.kt)("inlineCode",{parentName:"p"},"dev")," format, Foal would occasionally throw the error ",(0,o.kt)("inlineCode",{parentName:"p"},"TypeError: Cannot read properties of null"),"."),(0,o.kt)("p",null,"This would occur when the connection with the client was lost, which happens, for example, when the React client server hotly reloads."),(0,o.kt)("p",null,"This version fixes this error."))}c.isMDXComponent=!0},81565:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/banner-c762193ef5065a7b3181f07f6d3bd9f2.png"}}]);