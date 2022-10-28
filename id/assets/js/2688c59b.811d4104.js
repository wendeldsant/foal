"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8257],{3905:(a,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>k});var n=t(67294);function i(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function l(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){i(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function o(a,e){if(null==a)return{};var t,n,i=function(a,e){if(null==a)return{};var t,n,i={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(i[t]=a[t]);return i}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(i[t]=a[t])}return i}var s=n.createContext({}),u=function(a){var e=n.useContext(s),t=e;return a&&(t="function"==typeof a?a(e):l(l({},e),a)),t},p=function(a){var e=u(a.components);return n.createElement(s.Provider,{value:e},a.children)},m={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(a,e){var t=a.components,i=a.mdxType,r=a.originalType,s=a.parentName,p=o(a,["components","mdxType","originalType","parentName"]),d=u(t),k=i,c=d["".concat(s,".").concat(k)]||d[k]||m[k]||r;return t?n.createElement(c,l(l({ref:e},p),{},{components:t})):n.createElement(c,l({ref:e},p))}));function k(a,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof a||i){var r=t.length,l=new Array(r);l[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=a,o.mdxType="string"==typeof a?a:i,l[1]=o;for(var u=2;u<r;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},73841:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=t(87462),i=(t(67294),t(3905));const r={title:"Introduksi",slug:"/"},l=void 0,o={unversionedId:"README",id:"README",title:"Introduksi",description:"License: MIT",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/README.md",sourceDirName:".",slug:"/",permalink:"/id/docs/",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/README.md",tags:[],version:"current",frontMatter:{title:"Introduksi",slug:"/"},sidebar:"someSidebar",next:{title:"Instalasi",permalink:"/id/docs/tutorials/simple-todo-list/1-installation"}},s={},u=[{value:"Apa itu Foal?",id:"apa-itu-foal",level:2},{value:"Kebijakan saat Develop",id:"kebijakan-saat-develop",level:2},{value:"Ribuan kali Tes",id:"ribuan-kali-tes",level:3},{value:"Dokumentasi",id:"dokumentasi",level:3},{value:"Stabilitas Produk",id:"stabilitas-produk",level:3},{value:"Mulai",id:"mulai",level:2}],p={toc:u};function m(a){let{components:e,...t}=a;return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/License-MIT-blue.svg",alt:"License: MIT"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/node-%3E%3D10-brightgreen.svg",alt:"node version"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://badge.fury.io/js/%40foal%2Fcore.svg",alt:"npm version"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FoalTS/foal/actions"},(0,i.kt)("img",{parentName:"a",src:"https://github.com/FoalTS/foal/workflows/Test/badge.svg",alt:"Actions Status"})),"\n",(0,i.kt)("img",{parentName:"p",src:"https://codecov.io/gh/FoalTS/foal/branch/master/graphs/badge.svg",alt:"Code coverage"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://snyk.io/test/github/foalts/foal/badge.svg",alt:"Known Vulnerabilities"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/github/commit-activity/y/FoalTS/foal.svg",alt:"Commit activity"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/github/last-commit/FoalTS/foal.svg",alt:"Last commit"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/2FA-npm,%20GitHub-green.svg",alt:"2FA"})),(0,i.kt)("h2",{id:"apa-itu-foal"},"Apa itu Foal?"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Foal")," (atau ",(0,i.kt)("em",{parentName:"p"},"FoalTS"),") merupakan sebuah framework Node.JS untuk membangun aplikasi web."),(0,i.kt)("p",null,"Foal menghadirkan berbagai komponen siap pakai agar kita tak perlu membuat ulang. Kita diberikan sebuah medium lengkap untuk memulai membangun aplikasi web. Antara lain CLI, tes, utilitas frontend, script, otentifikasi, ORM, deploy, GraphQL, Swagger API, AWS, dll. Tak perlu susah payah mencari dan meramu sendiri berbagai package dari npm, semua telah disiapkan."),(0,i.kt)("p",null,"Namun meskipun menawarkan banyak fitur, Foal sendiri tetaplah simpel. Kerumitan yang tidak perlu bagi pengguna sengaja dihindarkan. Kode yang ringkas dan jelas pada saat membangun akan memudahkan pemeliharaan aplikasi tersebut di masa mendatang. Foal mendorong kita untuk lebih fokus ke kode daripada sibuk menelisik bagaimana internal sebuah framework bekerja."),(0,i.kt)("p",null,"Terakhir, Foal dibuat menggunakan TypeScript. Typescript sangat membantu dalam urusan type-checking dan memberi kita fitur terbaru dari ECMAScript. Kesalahan dalam kode pun dapat terdeteksi lebih dini. Typescript juga memberikan kita fitur auto-komplit dan dokumen API saat bekerja dalam editor."),(0,i.kt)("h2",{id:"kebijakan-saat-develop"},"Kebijakan saat Develop"),(0,i.kt)("h3",{id:"ribuan-kali-tes"},"Ribuan kali Tes"),(0,i.kt)("p",null,"Pengetesan Foal senantiasa menjadi prioritas. Sangat penting bagi kami untuk menghadirkan sebuah produk handal yang benar-benar teruji. Per Desember 2020, Foal telah melalui lebih dari 2100 kali tes. "),(0,i.kt)("h3",{id:"dokumentasi"},"Dokumentasi"),(0,i.kt)("p",null,"Fitur baru, apapun itu, kurang bermanfaat bila tidak disertai dengan petunjuk yang baik. Dokumentasi yang lengkap dan berkualitas adalah kunci dari sebuah framework. Sekiranya ada bagian yang terlewat atau kurang jelas tentang Foal, mohon berkenan melaporkannya via Github, dengan senang hati kami terima! "),(0,i.kt)("h3",{id:"stabilitas-produk"},"Stabilitas Produk"),(0,i.kt)("p",null,"Kami mencurahkan segenap perhatian atas stabilitas produk. Untuk keterangan lebih lanjut, silakan rujuk ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FoalTS/foal/blob/master/.github/CONTRIBUTING.MD#dependency-policy"},"kebijakan dependensi"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FoalTS/foal/blob/master/.github/CONTRIBUTING.MD#semantic-versioning"},"aturan versi semantik")," dan ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FoalTS/foal/blob/master/.github/CONTRIBUTING.MD#long-term-support-policy-and-schedule"},"kebijakan dukungan jangka panjang"),"."),(0,i.kt)("h2",{id:"mulai"},"Mulai"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"> npm install -g @foal/cli\n> foal createapp my-app\n> cd my-app\n> npm run develop\n")),(0,i.kt)("p",null,"Server develop sudah jalan! Coba buka ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:3001")," dan lihat apa yang tampil!"),(0,i.kt)("p",null,"\ud83d\udc49 ",(0,i.kt)("a",{parentName:"p",href:"./tutorials/simple-todo-list/1-installation"},"Lanjutkan dengan tutorial")," \ud83c\udf31"))}m.isMDXComponent=!0}}]);