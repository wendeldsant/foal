(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[930],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return c},kt:function(){return h}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),s=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=s(e.components);return t.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),h=o,f=u["".concat(l,".").concat(h)]||u[h]||d[h]||a;return n?t.createElement(f,i(i({ref:r},c),{},{components:n})):t.createElement(f,i({ref:r},c))}));function h(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7524:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var t=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],p={title:"Error-handling"},l=void 0,s={unversionedId:"upgrade-to-v2/error-handling",id:"upgrade-to-v2/error-handling",isDocsHomePage:!1,title:"Error-handling",description:"Customizing the Error Handler",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/upgrade-to-v2/error-handling.md",sourceDirName:"upgrade-to-v2",slug:"/upgrade-to-v2/error-handling",permalink:"/fr/docs/upgrade-to-v2/error-handling",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/upgrade-to-v2/error-handling.md",version:"current",frontMatter:{title:"Error-handling"}},c=[{value:"Customizing the Error Handler",id:"customizing-the-error-handler",children:[]},{value:"Errors in Hook Post Functions",id:"errors-in-hook-post-functions",children:[]},{value:"New features",id:"new-features",children:[{value:"The <code>IAppController</code> interface",id:"the-iappcontroller-interface",children:[]},{value:"Error details and <code>HttpResponseInternalServerError</code>",id:"error-details-and-httpresponseinternalservererror",children:[]}]}],d={toc:c};function u(e){var r=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"customizing-the-error-handler"},"Customizing the Error Handler"),(0,a.kt)("p",null,"In version 1, we had to provide an option to ",(0,a.kt)("inlineCode",{parentName:"p"},"createApp")," to use ",(0,a.kt)("inlineCode",{parentName:"p"},"AppController.handleError"),". This is no longer necessary."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// Before\nconst app = createApp(AppController, {\n  methods: {\n    handleError: true\n  }\n});\n\n// After\nconst app = await createApp(AppController);\n")),(0,a.kt)("h2",{id:"errors-in-hook-post-functions"},"Errors in Hook Post Functions"),(0,a.kt)("p",null,"In version 1, hook post functions were skipped when an error was thrown or rejected. In version 2, this is no longer the case and the response passed to the post functions is an ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpResponseInternalServerError")," instance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Controller {\n\n  @Get('/products')\n  @Hook(() => response => {\n    // Not executed in version 1.\n    // Executed in version 2 and the response is an `HttpResponseInternalServerError` instance.\n    console.log(response);\n  })\n  readProducts() {\n    throw new Error();\n  }\n\n}\n")),(0,a.kt)("h2",{id:"new-features"},"New features"),(0,a.kt)("h3",{id:"the-iappcontroller-interface"},"The ",(0,a.kt)("inlineCode",{parentName:"h3"},"IAppController")," interface"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"AppController")," can implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"IAppController")," interface. In this way, we make sure that the optional methods ",(0,a.kt)("inlineCode",{parentName:"p"},"init")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"handleError")," are correctly implemented as well as the ",(0,a.kt)("inlineCode",{parentName:"p"},"subControllers")," property."),(0,a.kt)("h3",{id:"error-details-and-httpresponseinternalservererror"},"Error details and ",(0,a.kt)("inlineCode",{parentName:"h3"},"HttpResponseInternalServerError")),(0,a.kt)("p",null,"The default ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpResponseInternalServerError")," instance returned by the error handler when an error is thrown or rejected has two new properties:\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx"),"."))}u.isMDXComponent=!0}}]);