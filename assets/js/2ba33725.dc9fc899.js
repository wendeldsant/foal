"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3177],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"Public API & CORS Requests"},s=void 0,i={unversionedId:"api-section/public-api-and-cors-requests",id:"version-2.x/api-section/public-api-and-cors-requests",title:"Public API & CORS Requests",description:"Building an Open API requires to allow Cross-Origin Request Sharing.",source:"@site/versioned_docs/version-2.x/api-section/public-api-and-cors-requests.md",sourceDirName:"api-section",slug:"/api-section/public-api-and-cors-requests",permalink:"/docs/2.x/api-section/public-api-and-cors-requests",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-2.x/api-section/public-api-and-cors-requests.md",tags:[],version:"2.x",frontMatter:{title:"Public API & CORS Requests"},sidebar:"someSidebar",previous:{title:"OpenAPI & Swagger UI",permalink:"/docs/2.x/api-section/openapi-and-swagger-ui"},next:{title:"GraphQL",permalink:"/docs/2.x/api-section/graphql"}},l={},p=[{value:"Enable Cross-Origin Resource Sharing (CORS)",id:"enable-cross-origin-resource-sharing-cors",level:2},{value:"CORS Requests and <code>Authorization</code> header",id:"cors-requests-and-authorization-header",level:2},{value:"CORS Requests and Cookies",id:"cors-requests-and-cookies",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Building an Open API requires to allow Cross-Origin Request Sharing."),(0,o.kt)("h2",{id:"enable-cross-origin-resource-sharing-cors"},"Enable Cross-Origin Resource Sharing (CORS)"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you are building a web application, ",(0,o.kt)("strong",{parentName:"p"},"you may not need to enable CORS for your API"),". See ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.x/frontend-integration/angular-react-vue"},"here")," the section ",(0,o.kt)("em",{parentName:"p"},"Origins that Do not Match"),".")),(0,o.kt)("p",null,"If you want different origins to make requests to your API from a browser, you need to enable ",(0,o.kt)("a",{parentName:"p",href:"https://www.html5rocks.com/en/tutorials/cors/"},"Cross-Origin Resource Sharing"),"."),(0,o.kt)("p",null,"You can do that by adding a route handler and a special hook to your API root controller (",(0,o.kt)("inlineCode",{parentName:"p"},"APIController")," in this example)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Hook, HttpResponseNoContent, Options } from '@foal/core';\n\n@Hook(() => response => {\n  // Every response of this controller and its sub-controllers will be added this header.\n  response.setHeader('Access-Control-Allow-Origin', '*');\n})\nexport class ApiController {\n\n  subControllers = [\n    // your sub-controllers\n  ];\n\n  @Options('*')\n  options(ctx: Context) {\n    const response = new HttpResponseNoContent();\n    response.setHeader('Access-Control-Allow-Methods', 'HEAD, GET, POST, PUT, PATCH, DELETE');\n    // You may need to allow other headers depending on what you need.\n    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');\n    return response;\n  }\n\n  // Some other routes (ex: @Get('/users'), etc)\n\n}\n")),(0,o.kt)("h2",{id:"cors-requests-and-authorization-header"},"CORS Requests and ",(0,o.kt)("inlineCode",{parentName:"h2"},"Authorization")," header"),(0,o.kt)("p",null,"If your API requires a token to be sent in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization")," header, then the name of this header should be specified in the ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," handler."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"  @Options('*')\n  options(ctx: Context) {\n    const response = new HttpResponseNoContent();\n    response.setHeader('Access-Control-Allow-Methods', 'HEAD, GET, POST, PUT, PATCH, DELETE');\n    response.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');\n    return response;\n  }\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The same goes with other headers: ",(0,o.kt)("inlineCode",{parentName:"p"},"X-Requested-With"),", etc.")),(0,o.kt)("h2",{id:"cors-requests-and-cookies"},"CORS Requests and Cookies"),(0,o.kt)("p",null,"If your API uses cookies (for authentication for example), then you should specify it in the hook with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Credentials")," header."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@Hook(ctx => response => {\n  response.setHeader('Access-Control-Allow-Origin', ctx.request.get('Origin') || '*');\n  response.setHeader('Access-Control-Allow-Credentials', 'true');\n})\n")),(0,o.kt)("p",null,"In the browser, your HTTP client must also have its ",(0,o.kt)("inlineCode",{parentName:"p"},"withCredentials")," option set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"},"XMLHttpRequest"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const xhr = new XMLHttpRequest();\nxhr.open('GET', 'http://example.com/', true); \nxhr.withCredentials = true; \nxhr.send(null);\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://github.com/axios/axios"},"Axios"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"axios.get('http://example.com/', { withCredentials: true });\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://angular.io/guide/http"},"Angular HttpClient"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"this.http.get('http://example.com/', { withCredentials: true });\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"fetch"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"fetch('http://example.com/', { credentials: 'include' });\n")))}u.isMDXComponent=!0}}]);