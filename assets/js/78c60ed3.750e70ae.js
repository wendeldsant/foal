"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8351],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>h});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return t?n.createElement(m,i(i({ref:r},c),{},{components:t})):n.createElement(m,i({ref:r},c))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},16143:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=t(87462),o=(t(67294),t(3905));const a={title:"Error Handling"},i=void 0,s={unversionedId:"architecture/error-handling",id:"architecture/error-handling",title:"Error Handling",description:"When creating a new project with Foal, error handling is already configured for you. When an error is thrown or rejected in a controller or a hook, the application returns an HTML page Internal Server Error with the status code 500. If the configuration parameter settings.debug is set to true (which is the case during development or testing), the page includes some details about the error (name, message, stack trace, etc).",source:"@site/docs/architecture/error-handling.md",sourceDirName:"architecture",slug:"/architecture/error-handling",permalink:"/docs/architecture/error-handling",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/architecture/error-handling.md",tags:[],version:"current",frontMatter:{title:"Error Handling"},sidebar:"someSidebar",previous:{title:"Initialization",permalink:"/docs/architecture/initialization"},next:{title:"Configuration",permalink:"/docs/architecture/configuration"}},l={},p=[{value:"Customizing the Error Handler",id:"customizing-the-error-handler",level:2},{value:"Reporting Errors",id:"reporting-errors",level:3},{value:"Returning JSON",id:"returning-json",level:3},{value:"Converting Errors into 4xx Responses",id:"converting-errors-into-4xx-responses",level:3},{value:"Errors in Hooks Post Functions",id:"errors-in-hooks-post-functions",level:2}],c={toc:p};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When creating a new project with Foal, error handling is already configured for you. When an error is thrown or rejected in a controller or a hook, the application returns an HTML page ",(0,o.kt)("inlineCode",{parentName:"p"},"Internal Server Error")," with the status code ",(0,o.kt)("inlineCode",{parentName:"p"},"500"),". If the configuration parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.debug")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," (which is the case during development or testing), the page includes some details about the error (name, message, stack trace, etc)."),(0,o.kt)("h2",{id:"customizing-the-error-handler"},"Customizing the Error Handler"),(0,o.kt)("p",null,"In some situations, we may want to override this behavior. This can be the case when we want, for example, to send the error to an external service, treat some errors in a particular way, customize the error page or return a JSON object to describe the error."),(0,o.kt)("p",null,"To do this, you can add an ",(0,o.kt)("inlineCode",{parentName:"p"},"handleError")," method to the ",(0,o.kt)("inlineCode",{parentName:"p"},"AppController")," class."),(0,o.kt)("h3",{id:"reporting-errors"},"Reporting Errors"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"app.controller.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Get, HttpResponse, IAppController, renderError } from '@foal/core';\n\nexport class AppController implements IAppController {\n  @Get('/')\n  index() {\n    throw new Error('Hello world');\n  }\n\n  handleError(error: Error, ctx: Context): HttpResponse|Promise<HttpResponse> {\n    sendErrorToAnExternalService(error);\n\n    return renderError(error, ctx);\n  }\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If necessary, error logging can also be disabled by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.logErrors")," configuration value to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,o.kt)("h3",{id:"returning-json"},"Returning JSON"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"app.controller.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Get, HttpResponse, HttpResponseInternalServerError, IAppController } from '@foal/core';\n\nexport class AppController implements IAppController {\n  @Get('/')\n  index() {\n    throw new Error('Hello world');\n  }\n\n  handleError(error: Error, ctx: Context): HttpResponse|Promise<HttpResponse> {\n    return new HttpResponseInternalServerError({\n      err: error.message,\n      message: 'An error occured.',\n      path: ctx.request.path,\n    });\n  }\n}\n")),(0,o.kt)("h3",{id:"converting-errors-into-4xx-responses"},"Converting Errors into 4xx Responses"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"app.controller.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Get, HttpResponse, HttpResponseForbidden, IAppController, renderError } from '@foal/core';\n\nclass PermissionDenied extends Error {}\n\nexport class AppController implements IAppController {\n  @Get('/')\n  index() {\n    throw new PermissionDenied();\n  }\n\n  handleError(error: Error, ctx: Context): HttpResponse|Promise<HttpResponse> {\n    if (error instanceof PermissionDenied) {\n      return new HttpResponseForbidden();\n    }\n\n    return renderError(error, ctx);\n  }\n}\n")),(0,o.kt)("h2",{id:"errors-in-hooks-post-functions"},"Errors in Hooks Post Functions"),(0,o.kt)("p",null,"When an error is thrown or rejected in a hook or in a controller method, it is converted directly into an ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpResponseInternalServerError")," (or another response if the ",(0,o.kt)("inlineCode",{parentName:"p"},"handleError")," above is defined). The method or hook behaves exactly the same as if it had returned this response."),(0,o.kt)("p",null,"Thus, when using ",(0,o.kt)("em",{parentName:"p"},"hook post functions"),", you might want to check whether or not an error has been thrown before executing logic."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@Hook(() => response => {\n  if (isHttpResponseInternalServerError(response)) {\n    return;\n  }\n\n  // Else execute some logic.\n})\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you use the default error handler, then the generated ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpResponseInternalServerError")," has two additional properties: ",(0,o.kt)("inlineCode",{parentName:"p"},"error")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx"),".")))}u.isMDXComponent=!0}}]);