"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2864],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return t?o.createElement(f,i(i({ref:n},c),{},{components:t})):o.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},38758:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=t(87462),r=(t(67294),t(3905));const a={title:"Lista de Comprobaci\xf3n de Despliegue",sidebar_label:"Lista de Comprobaci\xf3n"},i=void 0,l={unversionedId:"deployment-and-environments/checklist",id:"version-2.x/deployment-and-environments/checklist",title:"Lista de Comprobaci\xf3n de Despliegue",description:"Set the Node.JS environment to production",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-2.x/deployment-and-environments/checklist.md",sourceDirName:"deployment-and-environments",slug:"/deployment-and-environments/checklist",permalink:"/es/docs/2.x/deployment-and-environments/checklist",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-2.x/deployment-and-environments/checklist.md",tags:[],version:"2.x",frontMatter:{title:"Lista de Comprobaci\xf3n de Despliegue",sidebar_label:"Lista de Comprobaci\xf3n"},sidebar:"someSidebar",previous:{title:"WebSockets",permalink:"/es/docs/2.x/websockets"},next:{title:"Express / Fastify",permalink:"/es/docs/2.x/comparison-with-other-frameworks/express-fastify"}},s={},p=[{value:"Set the Node.JS environment to <code>production</code>",id:"set-the-nodejs-environment-to-production",level:2},{value:"Use HTTPS",id:"use-https",level:2},{value:"Generate Different Secrets",id:"generate-different-secrets",level:2},{value:"Database Credentials &amp; Migrations",id:"database-credentials--migrations",level:2},{value:"Files to Upload",id:"files-to-upload",level:2}],c={toc:p};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"set-the-nodejs-environment-to-production"},"Set the Node.JS environment to ",(0,r.kt)("inlineCode",{parentName:"h2"},"production")),(0,r.kt)("p",null,"Set the ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"FOAL_ENV"),") environment variable to ",(0,r.kt)("inlineCode",{parentName:"p"},"production"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NODE_ENV=production npm run start\n")),(0,r.kt)("h2",{id:"use-https"},"Use HTTPS"),(0,r.kt)("p",null,"You must use HTTPS to prevent ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Man-in-the-middle_attack"},"man-in-the-middle attacks"),". Otherwise, your credentials and authentication tokens will appear in clear on the network."),(0,r.kt)("p",null,"If you use cookies, make sure to let them only be sent to the server when the request is made using SSL. You can do such thing with the cookie ",(0,r.kt)("inlineCode",{parentName:"p"},"secure")," directive."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"config/production.yml (example)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  // If you use sessions\n  session:\n    cookie:\n      secure: true\n  // If you use JWT\n  jwt:\n    cookie:\n      secure: true\n")),(0,r.kt)("h2",{id:"generate-different-secrets"},"Generate Different Secrets"),(0,r.kt)("p",null,"Use different secrets for your production environment (JWT, etc). Specify them using environment variables or a ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},".env (example)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SETTINGS_JWT_SECRET=YZP0iv6gM+VBTxk61l8nKUno2QxsQHO9hm8XfeedZUw\n")),(0,r.kt)("p",null,"You can generate 256-bit secrets encoded in base64 with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"foal createsecret\n")),(0,r.kt)("h2",{id:"database-credentials--migrations"},"Database Credentials & Migrations"),(0,r.kt)("p",null,"Use different credentials for your production database. Specify them using environment variables or a ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,r.kt)("p",null,"If you use database migrations, run them on your production server with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run migrations\n")),(0,r.kt)("h2",{id:"files-to-upload"},"Files to Upload"),(0,r.kt)("p",null,"If you install dependencies and build the app on the remote host, then you should upload these files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"config/\normconfig.js\npackage-lock.json\npackage.json\npublic/ # this may depend on how the platform manages static files\nsrc/\ntsconfig.app.json\n")),(0,r.kt)("p",null,"Then you will need to run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run build"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you get an error such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Foal not found error"),", it is probably because the dev dependencies (which include the ",(0,r.kt)("inlineCode",{parentName:"p"},"@foal/cli")," package) have not been installed. To force the installation of these dependencies, you can use the following command: ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install --production=false"),".")),(0,r.kt)("p",null,"If you install dependencies and build the app on your local host directly, then you should upload these files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"build/\nconfig/\nnode_modules/\normconfig.js\npackage-lock.json\npackage.json\npublic/ # this may depend on how the platform manages static files\n")))}d.isMDXComponent=!0}}]);