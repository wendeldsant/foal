"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4578],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(p,".").concat(h)]||d[h]||s[h]||l;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77675:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const l={title:"Production Build",id:"tuto-14-production-build",slug:"14-production-build"},a=void 0,i={unversionedId:"tutorials/real-world-example-with-react/tuto-14-production-build",id:"version-2.x/tutorials/real-world-example-with-react/tuto-14-production-build",title:"Production Build",description:"So far, the front-end and back-end applications are compiled and served by two different development servers. The next step is to build them into a single one ready for production.",source:"@site/versioned_docs/version-2.x/tutorials/real-world-example-with-react/14-production-build.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/14-production-build",permalink:"/docs/2.x/tutorials/real-world-example-with-react/14-production-build",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-2.x/tutorials/real-world-example-with-react/14-production-build.md",tags:[],version:"2.x",sidebarPosition:14,frontMatter:{title:"Production Build",id:"tuto-14-production-build",slug:"14-production-build"},sidebar:"someSidebar",previous:{title:"CSRF Protection",permalink:"/docs/2.x/tutorials/real-world-example-with-react/13-csrf"},next:{title:"Social Auth with Google",permalink:"/docs/2.x/tutorials/real-world-example-with-react/15-social-auth"}},p={},c=[{value:"Building the React app",id:"building-the-react-app",level:2},{value:"Preventing 404 errors",id:"preventing-404-errors",level:2},{value:"Building the Foal app",id:"building-the-foal-app",level:2}],u={toc:c};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"So far, the front-end and back-end applications are compiled and served by two different development servers. The next step is to build them into a single one ready for production."),(0,o.kt)("h2",{id:"building-the-react-app"},"Building the React app"),(0,o.kt)("p",null,"In your frontend directory, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,o.kt)("p",null,"This command builds the React application for production and saves the files in the ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," directory."),(0,o.kt)("p",null,"Open it and copy all its contents to the ",(0,o.kt)("inlineCode",{parentName:"p"},"public")," directory of your Foal application."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When you use ",(0,o.kt)("inlineCode",{parentName:"p"},"foal connect")," with Angular or Vue, the frontend build will automatically save the files in ",(0,o.kt)("inlineCode",{parentName:"p"},"public"),".")),(0,o.kt)("p",null,"Now, if you navigate to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3001"},"http://localhost:3001"),", you will see the frontend application served by the backend server."),(0,o.kt)("h2",{id:"preventing-404-errors"},"Preventing 404 errors"),(0,o.kt)("p",null,"Open the link ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3001/login"},"http://localhost:3001/login")," in a new tab. The server returns a 404 error."),(0,o.kt)("p",null,"This is perfectly normal. At the moment, the server does not have a handler for the ",(0,o.kt)("inlineCode",{parentName:"p"},"/login")," route and therefore returns this error. Previously, this problem was handled by the React development server, which is why there was no such error."),(0,o.kt)("p",null,"To solve this problem, you will add a controller method that will process unhandled requests."),(0,o.kt)("p",null,"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"app.controller.ts")," and update its contents."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, controller, Get, HttpResponseNotFound, IAppController, render } from '@foal/core';\nimport { createConnection } from 'typeorm';\n\nimport { ApiController, OpenapiController } from './controllers';\n\nexport class AppController implements IAppController {\n  subControllers = [\n    controller('/api', ApiController),\n    controller('/swagger', OpenapiController)\n  ];\n\n  async init() {\n    await createConnection();\n  }\n\n  @Get('*')\n  renderApp(ctx: Context) {\n    if (!ctx.request.accepts('html')) {\n      return new HttpResponseNotFound();\n    }\n\n    return render('./public/index.html');\n  }\n}\n\n")),(0,o.kt)("p",null,"This method returns the React application for any GET request that accepts HTML content and has not been handled by the other methods of the controller and its subcontrollers."),(0,o.kt)("p",null,"If you return to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3001/login"},"http://localhost:3001/login")," and refresh the page, the login page should display."),(0,o.kt)("h2",{id:"building-the-foal-app"},"Building the Foal app"),(0,o.kt)("p",null,"Now, if you want to build the backend application so that you don't use the ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run develop")," option, you can run this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,o.kt)("p",null,"Then, to launch the application, simply execute the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start\n")))}s.isMDXComponent=!0}}]);