(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1751],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},761:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(2122),a=n(9756),l=(n(7294),n(3905)),o=["components"],i={title:"Code Generation"},p=void 0,c={unversionedId:"development-environment/code-generation",id:"development-environment/code-generation",isDocsHomePage:!1,title:"Code Generation",description:"Create a project",source:"@site/docs/development-environment/code-generation.md",sourceDirName:"development-environment",slug:"/development-environment/code-generation",permalink:"/docs/development-environment/code-generation",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/development-environment/code-generation.md",version:"current",frontMatter:{title:"Code Generation"},sidebar:"someSidebar",previous:{title:"Create & Run Scripts",permalink:"/docs/development-environment/create-and-run-scripts"},next:{title:"Linting & Code Style",permalink:"/docs/development-environment/linting-and-code-style"}},s=[{value:"Create a project",id:"create-a-project",children:[]},{value:"Create a controller",id:"create-a-controller",children:[{value:"The <code>--register</code> flag",id:"the---register-flag",children:[]}]},{value:"Create an entity (simple model)",id:"create-an-entity-simple-model",children:[]},{value:"Create REST API",id:"create-rest-api",children:[{value:"The <code>--register</code> flag",id:"the---register-flag-1",children:[]}]},{value:"Create a hook",id:"create-a-hook",children:[]},{value:"Create a script",id:"create-a-script",children:[]},{value:"Create a service",id:"create-a-service",children:[]}],u={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"create-a-project"},"Create a project"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"foal createapp my-app\n")),(0,l.kt)("p",null,"Create a new directory with all the required files to get started."),(0,l.kt)("p",null,"If you specify the flag ",(0,l.kt)("inlineCode",{parentName:"p"},"--mongodb"),", the CLI will generate a new project using MongoDB instead of SQLite."),(0,l.kt)("p",null,"If you specify the flag ",(0,l.kt)("inlineCode",{parentName:"p"},"--yaml"),", the new project will use YAML format for its configuration files. You can find more information ",(0,l.kt)("a",{parentName:"p",href:"/docs/architecture/configuration"},"here"),"."),(0,l.kt)("h2",{id:"create-a-controller"},"Create a controller"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"foal g controller <name>\n")),(0,l.kt)("p",null,"Create a new controller in ",(0,l.kt)("inlineCode",{parentName:"p"},"./src/app/controllers"),", in ",(0,l.kt)("inlineCode",{parentName:"p"},"./controllers")," or in the current directory depending on which folders are found."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"foal g controller auth\nfoal g controller api/product\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Output")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"src/\n '- app/\n  '- controllers/\n   |- api/\n   | |- product.controller.ts\n   | '- index.ts\n   |- auth.controller.ts\n   '- index.ts\n")),(0,l.kt)("h3",{id:"the---register-flag"},"The ",(0,l.kt)("inlineCode",{parentName:"h3"},"--register")," flag"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"foal g controller <name> --register\n")),(0,l.kt)("p",null,"If you wish to automatically create a new route attached to this controller, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--register")," flag to do so."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"foal g controller api --register\nfoal g controller api/product --register\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Output")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"src/\n '- app/\n  |- controllers/\n  | |- api/\n  | | |- product.controller.ts\n  | | '- index.ts\n  | |- api.controller.ts\n  | '- index.ts\n  '- app.controller.ts\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"app.controller.ts")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export class AppController {\n  subControllers = [\n    controller('/api', ApiController)\n  ]\n}\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"api.controller.ts")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export class ApiController {\n  subControllers = [\n    controller('/product', ProductController)\n  ]\n}\n")),(0,l.kt)("h2",{id:"create-an-entity-simple-model"},"Create an entity (simple model)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"foal g entity <name>\n")),(0,l.kt)("p",null,"Create a new entity in ",(0,l.kt)("inlineCode",{parentName:"p"},"./src/app/entities"),", in ",(0,l.kt)("inlineCode",{parentName:"p"},"./entities")," or in the current directory depending on which folders are found."),(0,l.kt)("h2",{id:"create-rest-api"},"Create REST API"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"foal g rest-api <name>\n")),(0,l.kt)("p",null,"Create a new controller and a new entity to build a basic REST API. Depending on which directories are found, they will be generated in ",(0,l.kt)("inlineCode",{parentName:"p"},"src/app/{entities}|{controllers}/")," or in ",(0,l.kt)("inlineCode",{parentName:"p"},"{entities}|{controllers}/"),"."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"foal g rest-api order\nfoal g rest-api api/product\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Output")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"src/\n '- app/\n  |- controllers/\n  | |- api/\n  | | |- product.controller.ts\n  | | '- index.ts\n  | |- order.controller.ts\n  | '- index.ts\n  '- entities/\n    |- index.entity.ts\n    |- order.entity.ts\n    '- index.ts\n")),(0,l.kt)("h3",{id:"the---register-flag-1"},"The ",(0,l.kt)("inlineCode",{parentName:"h3"},"--register")," flag"),(0,l.kt)("p",null,"If you wish to automatically create a new route attached to this controller, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--register")," flag to do so (see ",(0,l.kt)("a",{parentName:"p",href:"#create-a-controller"},"create-a-controller"),")."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"foal g controller api --register\nfoal g controller api/product --register\n")),(0,l.kt)("p",null,"See the page ",(0,l.kt)("a",{parentName:"p",href:"/docs/api-section/rest-blueprints"},"REST Blueprints")," for more details."),(0,l.kt)("h2",{id:"create-a-hook"},"Create a hook"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"foal g hook <name>\n")),(0,l.kt)("p",null,"Create a new hook in ",(0,l.kt)("inlineCode",{parentName:"p"},"./src/app/hooks"),", in ",(0,l.kt)("inlineCode",{parentName:"p"},"./hooks")," or in the current directory depending on which folders are found."),(0,l.kt)("h2",{id:"create-a-script"},"Create a script"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"foal g script <name>\n")),(0,l.kt)("p",null,"Create a new shell script in ",(0,l.kt)("inlineCode",{parentName:"p"},"src/scripts")," regardless of where you run the command."),(0,l.kt)("h2",{id:"create-a-service"},"Create a service"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"foal g service <name>\n")),(0,l.kt)("p",null,"Create a new service in ",(0,l.kt)("inlineCode",{parentName:"p"},"./src/app/services"),", in ",(0,l.kt)("inlineCode",{parentName:"p"},"./services")," or in the current directory depending on which folders are found."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"foal g service auth\nfoal g service apis/github\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Output")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"src/\n '- app/\n  '- services/\n   |- apis/\n   | '- github.service.ts\n   | '- index.ts\n   |- auth.service.ts\n   '- index.ts\n")))}d.isMDXComponent=!0}}]);