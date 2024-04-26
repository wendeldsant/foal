"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9914],{31635:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var s=i(74848),r=i(28453);const t={title:"Simplified CLI Commands"},o=void 0,c={id:"upgrade-to-v2/cli-commands",title:"Simplified CLI Commands",description:"Script and migration commands were tedious to use in version 1 of Foal. They were many different commands to use in a special order to make things work. In version 2, commands have been reduced, simplified and are now more intuitive.",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-2.x/upgrade-to-v2/cli-commands.md",sourceDirName:"upgrade-to-v2",slug:"/upgrade-to-v2/cli-commands",permalink:"/id/docs/2.x/upgrade-to-v2/cli-commands",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-2.x/upgrade-to-v2/cli-commands.md",tags:[],version:"2.x",frontMatter:{title:"Simplified CLI Commands"}},d={},a=[{value:"Steps to upgrade",id:"steps-to-upgrade",level:2},{value:"Examples",id:"examples",level:2}];function l(n){const e={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"Script and migration commands were tedious to use in version 1 of Foal. They were many different commands to use in a special order to make things work. In version 2, commands have been reduced, simplified and are now more intuitive."}),"\n",(0,s.jsxs)(e.p,{children:["In version 2, the application, scripts and migrations are built with one single command: ",(0,s.jsx)(e.code,{children:"npm run build"}),"."]}),"\n",(0,s.jsxs)(e.p,{children:["If you are in development and want to start the build in watch mode, you can use ",(0,s.jsx)(e.code,{children:"npm run develop"}),". This will also start the server."]}),"\n",(0,s.jsxs)(e.p,{children:["If you're coding shell scripts, you can execute ",(0,s.jsx)(e.code,{children:"npm run develop"})," in one terminal and ",(0,s.jsx)(e.code,{children:"foal run <my-script>"})," in another. This will re-compile your scripts when you save them without the need of calling ",(0,s.jsx)(e.code,{children:"npm run build"})," each time."]}),"\n",(0,s.jsx)(e.p,{children:"Regarding migrations, you now have only three commands to use and you don't have to take care anymore of the build part or the emptying of the target directory of the build."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"npm run makemigrations\nnpm run migrations\nnpm run revertmigration\n"})}),"\n",(0,s.jsx)(e.h2,{id:"steps-to-upgrade",children:"Steps to upgrade"}),"\n",(0,s.jsx)(e.p,{children:"Here are the steps to upgrade to version 2:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Remove the files ",(0,s.jsx)(e.code,{children:"tsconfig.migrations.json"})," and ",(0,s.jsx)(e.code,{children:"tsconfig.scripts.json"}),"."]}),"\n",(0,s.jsxs)(e.li,{children:["Replace the content of the file ",(0,s.jsx)(e.code,{children:"tsconfig.app.json"})," with this:","\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "extends": "./tsconfig.json",\n  "include": [\n    "src/**/*.ts"\n  ],\n  "exclude": [\n    "src/e2e/*.ts",\n    "src/**/*.spec.ts",\n    "src/e2e.ts",\n    "src/test.ts"\n  ]\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Replace the commands of your ",(0,s.jsx)(e.code,{children:"package.json"})," with the ones below. You can also uninstall the ",(0,s.jsx)(e.code,{children:"copy"})," package.","\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "scripts": {\n    "build": "foal rmdir build && tsc -p tsconfig.app.json",\n    "start": "node ./build/index.js",\n    "develop": "npm run build && concurrently \\"tsc -p tsconfig.app.json -w\\" \\"supervisor -w ./build --no-restart-on error ./build/index.js\\"",\n\n    "build:test": "foal rmdir build && tsc -p tsconfig.test.json",\n    "start:test": "mocha --file ./build/test.js \\"./build/**/*.spec.js\\"",\n    "test": "npm run build:test && concurrently \\"tsc -p tsconfig.test.json -w\\" \\"mocha --file ./build/test.js -w \\\\\\"./build/**/*.spec.js\\\\\\"\\"",\n\n    "build:e2e": "foal rmdir build && tsc -p tsconfig.e2e.json",\n    "start:e2e": "mocha --file ./build/e2e.js \\"./build/e2e/**/*.js\\"",\n    "e2e": "npm run build:e2e && concurrently \\"tsc -p tsconfig.e2e.json -w\\" \\"mocha --file ./build/e2e.js -w \\\\\\"./build/e2e/**/*.js\\\\\\"\\"",\n\n    "lint": "eslint --ext ts src",\n    "lint:fix": "eslint --ext ts --fix src",\n\n    "makemigrations": "foal rmdir build && tsc -p tsconfig.app.json && npx typeorm migration:generate --name migration && tsc -p tsconfig.app.json",\n    "migrations": "npx typeorm migration:run",\n    "revertmigration": "npx typeorm migration:revert"\n  }\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsxs)(e.em,{children:["Note: If your HTML templates are located in your ",(0,s.jsx)(e.code,{children:"src/"})," directory you still will need the ",(0,s.jsx)(e.code,{children:"copy"})," package and to keep the ",(0,s.jsx)(e.code,{children:'copy-cli \\"src/**/*.html\\" build'})," part in your ",(0,s.jsx)(e.code,{children:"package.json"}),"."]})}),"\n",(0,s.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.em,{children:"Build, make and run migrations"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# Version 1\nnpm run build:app\nnpm run migration:generate -- -n my_migration\nnpm run build:migrations\nnpm run migration:run\n\n# Version 2\nnpm run makemigrations\nnpm run migrations\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.em,{children:"Build and run scripts in watch mode (development)"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# Version 1\nnpm run build:scripts && foal run my-script\n\n# Version 2\n# In one terminal:\nnpm run develop\n\n# In another terminal:\nfoal run my-script\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.em,{children:"Revert one migration"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# Version 1\nnpm run migration:revert\n\n# Version 2\nnpm run revertmigration\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.em,{children:"Build migrations, scripts and the app"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# Version 1\nnpm run build:app\nnpm run build:scripts\nnpm run build:migrations\n\n# Version 2\nnpm run build\n"})})]})}function m(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>o,x:()=>c});var s=i(96540);const r={},t=s.createContext(r);function o(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);