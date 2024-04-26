"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5587],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7698:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"Database Set Up",id:"tuto-2-database-set-up",slug:"2-database-set-up"},i=void 0,s={unversionedId:"tutorials/real-world-example-with-react/tuto-2-database-set-up",id:"version-3.x/tutorials/real-world-example-with-react/tuto-2-database-set-up",title:"Database Set Up",description:"The first step in this tutorial is to establish a database connection. If you haven't already done so, install MySQL or PostgreSQL.",source:"@site/versioned_docs/version-3.x/tutorials/real-world-example-with-react/2-database-set-up.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/2-database-set-up",permalink:"/docs/3.x/tutorials/real-world-example-with-react/2-database-set-up",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-3.x/tutorials/real-world-example-with-react/2-database-set-up.md",tags:[],version:"3.x",sidebarPosition:2,frontMatter:{title:"Database Set Up",id:"tuto-2-database-set-up",slug:"2-database-set-up"},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/docs/3.x/tutorials/real-world-example-with-react/1-introduction"},next:{title:"The User and Story Models",permalink:"/docs/3.x/tutorials/real-world-example-with-react/3-the-models"}},l={},p=[],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The first step in this tutorial is to establish a database connection. If you haven't already done so, install ",(0,r.kt)("a",{parentName:"p",href:"https://dev.mysql.com/downloads/"},"MySQL")," or ",(0,r.kt)("a",{parentName:"p",href:"https://www.postgresql.org/download/"},"PostgreSQL"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"By default, Foal uses SQLite in every new application, as it does not require any installation. If you want to continue using it in this tutorial, you can skip this section and go to the next page.")," ")),(0,r.kt)("p",null,"First, install MySQL (or Postgres) driver."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install mysql # or pg\n")),(0,r.kt)("p",null,"Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"config/default.json")," file and update the ",(0,r.kt)("inlineCode",{parentName:"p"},"database")," section as follows. If your database is PostgreSQL, change the ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," value to ",(0,r.kt)("inlineCode",{parentName:"p"},"postgres"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "port": "env(PORT)",\n  "settings": {\n    ...\n  },\n  "database": {\n    "type": "mysql",\n    "host": "env(DB_HOST)",\n    "port": "env(DB_PORT)",\n    "username": "env(DB_USERNAME)",\n    "password": "env(DB_PASSWORD)",\n    "database": "env(DB_NAME)"\n  }\n}\n\n')),(0,r.kt)("p",null,"This file is the main configuration file for the application and is used as the basis for whatever environment the application is running in."),(0,r.kt)("p",null,"The syntax ",(0,r.kt)("inlineCode",{parentName:"p"},"env(*)")," tells the configuration system to get the value from the given environment variable. If it does not exist, Foal will try to read it from a ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,r.kt)("p",null,"Create a new ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file in the root of ",(0,r.kt)("inlineCode",{parentName:"p"},"backend-app")," and provide the database credentials."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},".env")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Use the identification information of your database.\n# The values below are given as an example.\nDB_HOST="localhost"\n# Default port for PostgreSQL is 5432.\nDB_PORT="3306"\nDB_USERNAME="test"\nDB_PASSWORD="test"\nDB_NAME="test"\n')),(0,r.kt)("p",null,"Restart the development server. The application is now connected to your database."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You could have specified all the database connection options directly in the ",(0,r.kt)("inlineCode",{parentName:"p"},"default.json")," file but this is considered bad practice."),(0,r.kt)("p",{parentName:"blockquote"},"Configuration files are usually committed to version control and it is recommended not to commit files containing sensitive information.")))}u.isMDXComponent=!0}}]);