"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[724],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>m});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?t.createElement(g,i(i({ref:r},p),{},{components:n})):t.createElement(g,i({ref:r},p))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},47375:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var t=n(87462),o=(n(67294),n(3905));const a={title:"Error Handling"},i=void 0,s={unversionedId:"cookbook/error-handling",id:"version-1.x/cookbook/error-handling",title:"Error Handling",description:"When creating a new project with Foal, error handling is already configured for you. When an error is thrown or rejected in a controller or a hook, the application returns an html page Internal Server Error with the status code 500. If the configuration key settings.debug is set to true (which is the case during development or testing), the page includes some details about the error (name, message, stack trace, etc).",source:"@site/versioned_docs/version-1.x/cookbook/error-handling.md",sourceDirName:"cookbook",slug:"/cookbook/error-handling",permalink:"/es/docs/1.x/cookbook/error-handling",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/cookbook/error-handling.md",tags:[],version:"1.x",frontMatter:{title:"Error Handling"},sidebar:"someSidebar",previous:{title:"Logging & Debugging",permalink:"/es/docs/1.x/utilities/logging-and-debugging"},next:{title:"Generate Tokens",permalink:"/es/docs/1.x/cookbook/generate-tokens"}},l={},c=[],p={toc:c};function d(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When creating a new project with Foal, error handling is already configured for you. When an error is thrown or rejected in a controller or a hook, the application returns an html page ",(0,o.kt)("inlineCode",{parentName:"p"},"Internal Server Error")," with the status code ",(0,o.kt)("inlineCode",{parentName:"p"},"500"),". If the configuration key ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.debug")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," (which is the case during development or testing), the page includes some details about the error (name, message, stack trace, etc)."),(0,o.kt)("p",null,"In some situations, we may want to override this behavior. This can be the case when we want, for example, to send the error to an external service, treat some errors in a particular way, customize the error page or return a JSON object to describe the error."),(0,o.kt)("p",null,"To do this, you can pass an additional option to the ",(0,o.kt)("inlineCode",{parentName:"p"},"createApp")," function and add an ",(0,o.kt)("inlineCode",{parentName:"p"},"handleError")," method to the ",(0,o.kt)("inlineCode",{parentName:"p"},"AppController")," class."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"src/index.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// ...\n\nexport async function main() {\n  // ...\n\n  const app = createApp(AppController, {\n    methods: {\n      handleError: true\n    }\n  });\n\n  // ...\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"src/app/app.controller.ts (example)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, HttpResponse, renderError } from '@foal/core';\n\nfunction sendErrorToAnExternalService(error: Error, user: User) {\n  // ...\n}\n\nexport class AppController {\n  subControllers = [\n    // ...\n  ];\n\n  handleError(error: Error, ctx: Context): HttpResponse|Promise<HttpResponse> {\n    sendErrorToAnExternalService(error, ctx.user);\n\n    if (error instanceof MyError) {\n      // Do something\n    }\n\n    return renderError(err, ctx);\n  }\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If necessary, error logging can be disabled by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.logErrors")," configuration key to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),".")))}d.isMDXComponent=!0}}]);