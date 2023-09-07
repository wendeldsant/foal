"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2515],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38685:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Utilizar Otro ORM",sidebar_label:"Introducci\xf3n"},i=void 0,l={unversionedId:"databases/other-orm/introduction",id:"version-3.x/databases/other-orm/introduction",title:"Utilizar Otro ORM",description:"The core of the framework is independent of TypeORM. So, if you do not want to use an ORM at all or use another ORM or ODM than TypeORM, you absolutely can.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-3.x/databases/other-orm/introduction.md",sourceDirName:"databases/other-orm",slug:"/databases/other-orm/introduction",permalink:"/es/docs/3.x/databases/other-orm/introduction",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-3.x/databases/other-orm/introduction.md",tags:[],version:"3.x",frontMatter:{title:"Utilizar Otro ORM",sidebar_label:"Introducci\xf3n"},sidebar:"someSidebar",previous:{title:"NoSQL",permalink:"/es/docs/3.x/databases/typeorm/mongodb"},next:{title:"Prisma",permalink:"/es/docs/3.x/databases/other-orm/prisma"}},s={},p=[{value:"Uninstall TypeORM",id:"uninstall-typeorm",level:2},{value:"Examples",id:"examples",level:2},{value:"Limitations",id:"limitations",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The core of the framework is independent of TypeORM. So, if you do not want to use an ORM at all or use another ORM or ODM than TypeORM, you absolutely can."),(0,a.kt)("p",null,"To do so, you will have to remove TypeORM and all its utilities."),(0,a.kt)("h2",{id:"uninstall-typeorm"},"Uninstall TypeORM"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"First uninstall the dependencies."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm uninstall typeorm @foal/typeorm\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Then remove the directory ",(0,a.kt)("inlineCode",{parentName:"p"},"src/app/entities")," and the file ",(0,a.kt)("inlineCode",{parentName:"p"},"src/db.ts"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Remove or replace the script ",(0,a.kt)("inlineCode",{parentName:"p"},"create-user")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"src/app/scripts"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the file ",(0,a.kt)("inlineCode",{parentName:"p"},"src/index.ts"),", delete the connection creation called ",(0,a.kt)("inlineCode",{parentName:"p"},"dataSource.initialize()"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Finally, remove in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," the scripts to manage migrations."))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/es/docs/3.x/databases/other-orm/prisma"},"Prisma"))),(0,a.kt)("h2",{id:"limitations"},"Limitations"),(0,a.kt)("p",null,"When using another ORM than TypeORM some features are not available:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("em",{parentName:"li"},"Groups & Permissions")," system,"),(0,a.kt)("li",{parentName:"ul"},"and the ",(0,a.kt)("inlineCode",{parentName:"li"},"foal g rest-api")," command.")))}m.isMDXComponent=!0}}]);