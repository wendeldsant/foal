(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6193],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},986:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),i=["components"],l={title:"Deployment Checklist",sidebar_label:"Checklist"},s=void 0,c={unversionedId:"deployment-and-environments/checklist",id:"deployment-and-environments/checklist",isDocsHomePage:!1,title:"Deployment Checklist",description:"Set the Node.JS environment to production",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/deployment-and-environments/checklist.md",sourceDirName:"deployment-and-environments",slug:"/deployment-and-environments/checklist",permalink:"/id/docs/deployment-and-environments/checklist",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/deployment-and-environments/checklist.md",version:"current",frontMatter:{title:"Deployment Checklist",sidebar_label:"Checklist"},sidebar:"someSidebar",previous:{title:"Limit Repeated Requests",permalink:"/id/docs/cookbook/limit-repeated-requests"},next:{title:"To v2",permalink:"/id/docs/upgrade-to-v2/README"}},p=[{value:"Set the Node.JS environment to <code>production</code>",id:"set-the-nodejs-environment-to-production",children:[]},{value:"Use HTTPS",id:"use-https",children:[]},{value:"Generate Different Secrets",id:"generate-different-secrets",children:[]},{value:"Database Credentials &amp; Migrations",id:"database-credentials--migrations",children:[]},{value:"Files to Upload",id:"files-to-upload",children:[]}],u={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"set-the-nodejs-environment-to-production"},"Set the Node.JS environment to ",(0,a.kt)("inlineCode",{parentName:"h2"},"production")),(0,a.kt)("p",null,"Set the ",(0,a.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," environment variable to ",(0,a.kt)("inlineCode",{parentName:"p"},"production"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"NODE_ENV=production npm run start\n")),(0,a.kt)("h2",{id:"use-https"},"Use HTTPS"),(0,a.kt)("p",null,"You must use HTTPS to prevent ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Man-in-the-middle_attack"},"man-in-the-middle attacks"),". Otherwise, your credentials and authentication tokens will appear in clear on the network."),(0,a.kt)("p",null,"If you use cookies, make sure to let them only be sent to the server when the request is made using SSL. You can do such thing with the cookie ",(0,a.kt)("inlineCode",{parentName:"p"},"secure")," directive."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"config/production.yml (example)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  // If you use sessions\n  session:\n    cookie:\n      secure: true\n  // If you use JWT\n  jwt:\n    cookie:\n      secure: true\n")),(0,a.kt)("h2",{id:"generate-different-secrets"},"Generate Different Secrets"),(0,a.kt)("p",null,"Use different secrets for your production environment (JWT, etc). Specify them using environment variables or a ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},".env (example)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SETTINGS_JWT_SECRET=YZP0iv6gM+VBTxk61l8nKUno2QxsQHO9hm8XfeedZUw\n")),(0,a.kt)("p",null,"You can generate 256-bit secrets encoded in base64 with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"foal createsecret\n")),(0,a.kt)("h2",{id:"database-credentials--migrations"},"Database Credentials & Migrations"),(0,a.kt)("p",null,"Use different credentials for your production database. Specify them using environment variables or a ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,a.kt)("p",null,"If you use database migrations, run them on your production server with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run migrations\n")),(0,a.kt)("h2",{id:"files-to-upload"},"Files to Upload"),(0,a.kt)("p",null,"If you install dependencies and build the app on the remote host, then you should upload these files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"config/\normconfig.js\npackage-lock.json\npackage.json\npublic/ # this may depend on how the platform manages static files\nsrc/\ntsconfig.app.json\n")),(0,a.kt)("p",null,"Then you will need to run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run build"),"."),(0,a.kt)("p",null,"If you install dependencies and build the app on your local host directly, then you should upload these files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"build/\nconfig/\nnode_modules/\normconfig.js\npackage-lock.json\npackage.json\npublic/ # this may depend on how the platform manages static files\n")))}d.isMDXComponent=!0}}]);