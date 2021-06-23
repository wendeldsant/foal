(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4176],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return c},kt:function(){return h}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),p=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},c=function(e){var r=p(e.components);return t.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?t.createElement(m,a(a({ref:r},c),{},{components:n})):t.createElement(m,a({ref:r},c))}));function h(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8429:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var t=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],s={title:"Gesti\xf3n de Errores"},l=void 0,p={unversionedId:"architecture/error-handling",id:"architecture/error-handling",isDocsHomePage:!1,title:"Gesti\xf3n de Errores",description:"When creating a new project with Foal, error handling is already configured for you. When an error is thrown or rejected in a controller or a hook, the application returns an HTML page Internal Server Error with the status code 500. If the configuration parameter settings.debug is set to true (which is the case during development or testing), the page includes some details about the error (name, message, stack trace, etc).",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/architecture/error-handling.md",sourceDirName:"architecture",slug:"/architecture/error-handling",permalink:"/es/docs/architecture/error-handling",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/architecture/error-handling.md",version:"current",frontMatter:{title:"Gesti\xf3n de Errores"},sidebar:"someSidebar",previous:{title:"Inicializaci\xf3n",permalink:"/es/docs/architecture/initialization"},next:{title:"Configuraci\xf3n",permalink:"/es/docs/architecture/configuration"}},c=[{value:"Customizing the Error Handler",id:"customizing-the-error-handler",children:[{value:"Reporting Errors",id:"reporting-errors",children:[]},{value:"Returning JSON",id:"returning-json",children:[]},{value:"Converting Errors into 4xx Responses",id:"converting-errors-into-4xx-responses",children:[]}]},{value:"Errors in Hooks Post Functions",id:"errors-in-hooks-post-functions",children:[]}],u={toc:c};function d(e){var r=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When creating a new project with Foal, error handling is already configured for you. When an error is thrown or rejected in a controller or a hook, the application returns an HTML page ",(0,i.kt)("inlineCode",{parentName:"p"},"Internal Server Error")," with the status code ",(0,i.kt)("inlineCode",{parentName:"p"},"500"),". If the configuration parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"settings.debug")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," (which is the case during development or testing), the page includes some details about the error (name, message, stack trace, etc)."),(0,i.kt)("h2",{id:"customizing-the-error-handler"},"Customizing the Error Handler"),(0,i.kt)("p",null,"In some situations, we may want to override this behavior. This can be the case when we want, for example, to send the error to an external service, treat some errors in a particular way, customize the error page or return a JSON object to describe the error."),(0,i.kt)("p",null,"To do this, you can add an ",(0,i.kt)("inlineCode",{parentName:"p"},"handleError")," method to the ",(0,i.kt)("inlineCode",{parentName:"p"},"AppController")," class."),(0,i.kt)("h3",{id:"reporting-errors"},"Reporting Errors"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"app.controller.ts")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Get, HttpResponse, IAppController, renderError } from '@foal/core';\n\nexport class AppController implements IAppController {\n  @Get('/')\n  index() {\n    throw new Error('Hello world');\n  }\n\n  handleError(error: Error, ctx: Context): HttpResponse|Promise<HttpResponse> {\n    sendErrorToAnExternalService(error);\n\n    return renderError(error, ctx);\n  }\n}\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If necessary, error logging can also be disabled by setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"settings.logErrors")," configuration value to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,i.kt)("h3",{id:"returning-json"},"Returning JSON"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"app.controller.ts")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Get, HttpResponse, HttpResponseInternalServerError, IAppController } from '@foal/core';\n\nexport class AppController implements IAppController {\n  @Get('/')\n  index() {\n    throw new Error('Hello world');\n  }\n\n  handleError(error: Error, ctx: Context): HttpResponse|Promise<HttpResponse> {\n    return new HttpResponseInternalServerError({\n      err: error.message,\n      message: 'An error occured.',\n      path: ctx.request.path,\n    });\n  }\n}\n")),(0,i.kt)("h3",{id:"converting-errors-into-4xx-responses"},"Converting Errors into 4xx Responses"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"app.controller.ts")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Get, HttpResponse, HttpResponseForbidden, IAppController, renderError } from '@foal/core';\n\nclass PermissionDenied extends Error {}\n\nexport class AppController implements IAppController {\n  @Get('/')\n  index() {\n    throw new PermissionDenied();\n  }\n\n  handleError(error: Error, ctx: Context): HttpResponse|Promise<HttpResponse> {\n    if (error instanceof PermissionDenied) {\n      return new HttpResponseForbidden();\n    }\n\n    return renderError(error, ctx);\n  }\n}\n")),(0,i.kt)("h2",{id:"errors-in-hooks-post-functions"},"Errors in Hooks Post Functions"),(0,i.kt)("p",null,"When an error is thrown or rejected in a hook or in a controller method, it is converted directly into an ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpResponseInternalServerError")," (or another response if the ",(0,i.kt)("inlineCode",{parentName:"p"},"handleError")," above is defined). The method or hook behaves exactly the same as if it had returned this response."),(0,i.kt)("p",null,"Thus, when using ",(0,i.kt)("em",{parentName:"p"},"hook post functions"),", you might want to check whether or not an error has been thrown before executing logic."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@Hook(() => response => {\n  if (isHttpResponseInternalServerError(response)) {\n    return;\n  }\n\n  // Else execute some logic.\n})\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If you use the default error handler, then the generated ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpResponseInternalServerError")," has two additional properties: ",(0,i.kt)("inlineCode",{parentName:"p"},"error")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ctx"),".")))}d.isMDXComponent=!0}}]);