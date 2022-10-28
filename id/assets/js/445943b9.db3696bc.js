"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4499],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(a),f=o,w=u["".concat(p,".").concat(f)]||u[f]||m[f]||l;return a?r.createElement(w,n(n({ref:t},c),{},{components:a})):r.createElement(w,n({ref:t},c))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,n=new Array(l);n[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,n[1]=i;for(var s=2;s<l;s++)n[s]=a[s];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},79259:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=a(87462),o=(a(67294),a(3905));const l={title:"Awesome Foal"},n=void 0,i={unversionedId:"community/awesome-foal",id:"community/awesome-foal",title:"Awesome Foal",description:"A collection of official and unofficial libraries and resources about Foal.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/community/awesome-foal.md",sourceDirName:"community",slug:"/community/awesome-foal",permalink:"/id/docs/community/awesome-foal",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/community/awesome-foal.md",tags:[],version:"current",frontMatter:{title:"Awesome Foal"},sidebar:"someSidebar",previous:{title:"To v3",permalink:"/id/docs/upgrade-to-v3/"}},p={},s=[{value:"Packages",id:"packages",level:2},{value:"Videos",id:"videos",level:2},{value:"Articles",id:"articles",level:2},{value:"Newsletter",id:"newsletter",level:2}],c={toc:s};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A collection of official and unofficial libraries and resources about Foal."),(0,o.kt)("h2",{id:"packages"},"Packages"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@foal/aws-s3"},"@foal/aws-s3"),": handle file upload to AWS S3."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@foal/cli"},"@foal/cli"),": commands to generate, build and run code."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@foal/graphql"},"@foal/graphql"),": build GraphQL API."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@foal/graphiql"},"@foal/graphiql"),": generate a GraphiQL interface."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@foal/jwks-rsa"},"@foal/jwks-rsa"),": retrieve RSA signing keys from a JWKS endpoint."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@foal/jwt"},"@foal/jwt"),": authenticate users with JWT."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@foal/mongodb"},"@foal/mongodb"),": session store for MongoDB."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@foal/password"},"@foal/password"),": hash, salt and check passwords."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@foal/redis"},"@foal/redis"),": session store for redis."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@foal/social"},"@foal/social"),": authenticate users with Facebook, Github, Google and LinkedIn."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@foal/storage"},"@foal/storage"),": manage file upload and storage in local and in the Cloud."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@foal/swagger"},"@foal/swagger"),": display a SwaggerUI page."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@foal/typeorm"},"@foal/typeorm"),": session store for TypeORM."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@foal/typestack"},"@foal/typestack"),": validate and unserialize requests with ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/class-transformer"},"class-transformer")," and ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/class-validator"},"class-validator"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@codeperate/foalts-apischema-builder"},"@codeperate/foalts-apischema-builder"),": build ApiSchema with builder pattern.")),(0,o.kt)("h2",{id:"videos"},"Videos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://youtu.be/c7vfkzVm4Y8"},"FoalTS Tutorial Video Series by Alex Merced of AlexMercedCoder.com")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://youtu.be/5S_XVaURK8k"},"Run unit tests with VSCode debugger")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=8wiyS5_Usoc"},"Read file metadata during upload")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=kPDlHtgKk68"},"Beginner tutorial - How to create a simple to-do list")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=e_W8QnImazo"},"How to manage configuration with FoalTS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/playlist?list=PLN55oDjIbZw_4oHbur71oorN_mJf5I2Of"},"How to create a Binance Smart Chain payments processor using Foal.TS (Spanish)"))),(0,o.kt)("h2",{id:"articles"},"Articles"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://foalts.org/blog"},"The official blog")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/@poullain.loic/foalts-framework-openapi-5ef3903d01af"},"FoalTS framework & OpenAPI = \u2764")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/@poullain.loic/how-to-build-a-rest-api-with-foalts-5fcd72d10a83"},"How to build a REST API with FoalTS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dev.to/loicpoullain/how-to-add-pagination-in-foalts-2cef"},"How to add pagination in FoalTS "))),(0,o.kt)("h2",{id:"newsletter"},"Newsletter"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://foalts.org/newsletter"},"The offical newsletter"))))}m.isMDXComponent=!0}}]);