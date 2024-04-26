"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[782],{98535:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var o=n(74848),t=n(28453);const s={title:"Error Handling"},i=void 0,c={id:"architecture/error-handling",title:"Error Handling",description:"When creating a new project with Foal, error handling is already configured for you. When an error is thrown or rejected in a controller or a hook, the application returns an HTML page Internal Server Error with the status code 500. If the configuration parameter settings.debug is set to true (which is the case during development or testing), the page includes some details about the error (name, message, stack trace, etc).",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-3.x/architecture/error-handling.md",sourceDirName:"architecture",slug:"/architecture/error-handling",permalink:"/id/docs/3.x/architecture/error-handling",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-3.x/architecture/error-handling.md",tags:[],version:"3.x",frontMatter:{title:"Error Handling"},sidebar:"someSidebar",previous:{title:"Initialization",permalink:"/id/docs/3.x/architecture/initialization"},next:{title:"Configuration",permalink:"/id/docs/3.x/architecture/configuration"}},a={},l=[{value:"Customizing the Error Handler",id:"customizing-the-error-handler",level:2},{value:"Reporting Errors",id:"reporting-errors",level:3},{value:"Returning JSON",id:"returning-json",level:3},{value:"Converting Errors into 4xx Responses",id:"converting-errors-into-4xx-responses",level:3},{value:"Errors in Hooks Post Functions",id:"errors-in-hooks-post-functions",level:2}];function d(e){const r={blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:["When creating a new project with Foal, error handling is already configured for you. When an error is thrown or rejected in a controller or a hook, the application returns an HTML page ",(0,o.jsx)(r.code,{children:"Internal Server Error"})," with the status code ",(0,o.jsx)(r.code,{children:"500"}),". If the configuration parameter ",(0,o.jsx)(r.code,{children:"settings.debug"})," is set to ",(0,o.jsx)(r.code,{children:"true"})," (which is the case during development or testing), the page includes some details about the error (name, message, stack trace, etc)."]}),"\n",(0,o.jsx)(r.h2,{id:"customizing-the-error-handler",children:"Customizing the Error Handler"}),"\n",(0,o.jsx)(r.p,{children:"In some situations, we may want to override this behavior. This can be the case when we want, for example, to send the error to an external service, treat some errors in a particular way, customize the error page or return a JSON object to describe the error."}),"\n",(0,o.jsxs)(r.p,{children:["To do this, you can add an ",(0,o.jsx)(r.code,{children:"handleError"})," method to the ",(0,o.jsx)(r.code,{children:"AppController"})," class."]}),"\n",(0,o.jsx)(r.h3,{id:"reporting-errors",children:"Reporting Errors"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.em,{children:"app.controller.ts"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-typescript",children:"import { Context, Get, HttpResponse, IAppController, renderError } from '@foal/core';\n\nexport class AppController implements IAppController {\n  @Get('/')\n  index() {\n    throw new Error('Hello world');\n  }\n\n  handleError(error: Error, ctx: Context): HttpResponse|Promise<HttpResponse> {\n    sendErrorToAnExternalService(error);\n\n    return renderError(error, ctx);\n  }\n}\n"})}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsxs)(r.p,{children:["If necessary, error logging can also be disabled by setting the ",(0,o.jsx)(r.code,{children:"settings.logErrors"})," configuration value to ",(0,o.jsx)(r.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"returning-json",children:"Returning JSON"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.em,{children:"app.controller.ts"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-typescript",children:"import { Context, Get, HttpResponse, HttpResponseInternalServerError, IAppController } from '@foal/core';\n\nexport class AppController implements IAppController {\n  @Get('/')\n  index() {\n    throw new Error('Hello world');\n  }\n\n  handleError(error: Error, ctx: Context): HttpResponse|Promise<HttpResponse> {\n    return new HttpResponseInternalServerError({\n      err: error.message,\n      message: 'An error occured.',\n      path: ctx.request.path,\n    });\n  }\n}\n"})}),"\n",(0,o.jsx)(r.h3,{id:"converting-errors-into-4xx-responses",children:"Converting Errors into 4xx Responses"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.em,{children:"app.controller.ts"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-typescript",children:"import { Context, Get, HttpResponse, HttpResponseForbidden, IAppController, renderError } from '@foal/core';\n\nclass PermissionDenied extends Error {}\n\nexport class AppController implements IAppController {\n  @Get('/')\n  index() {\n    throw new PermissionDenied();\n  }\n\n  handleError(error: Error, ctx: Context): HttpResponse|Promise<HttpResponse> {\n    if (error instanceof PermissionDenied) {\n      return new HttpResponseForbidden();\n    }\n\n    return renderError(error, ctx);\n  }\n}\n"})}),"\n",(0,o.jsx)(r.h2,{id:"errors-in-hooks-post-functions",children:"Errors in Hooks Post Functions"}),"\n",(0,o.jsxs)(r.p,{children:["When an error is thrown or rejected in a hook or in a controller method, it is converted directly into an ",(0,o.jsx)(r.code,{children:"HttpResponseInternalServerError"})," (or another response if the ",(0,o.jsx)(r.code,{children:"handleError"})," above is defined). The method or hook behaves exactly the same as if it had returned this response."]}),"\n",(0,o.jsxs)(r.p,{children:["Thus, when using ",(0,o.jsx)(r.em,{children:"hook post functions"}),", you might want to check whether or not an error has been thrown before executing logic."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-typescript",children:"@Hook(() => response => {\n  if (isHttpResponseInternalServerError(response)) {\n    return;\n  }\n\n  // Else execute some logic.\n})\n"})}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsxs)(r.p,{children:["If you use the default error handler, then the generated ",(0,o.jsx)(r.code,{children:"HttpResponseInternalServerError"})," has two additional properties: ",(0,o.jsx)(r.code,{children:"error"})," and ",(0,o.jsx)(r.code,{children:"ctx"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>c});var o=n(96540);const t={},s=o.createContext(t);function i(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);