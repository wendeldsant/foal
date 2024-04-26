"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5606],{11284:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(74848),l=t(28453),s=t(11470),a=t(19365);const i={title:"Rendu c\xf4t\xe9 serveur (SSR)"},o=void 0,c={id:"frontend/server-side-rendering",title:"Rendu c\xf4t\xe9 serveur (SSR)",description:"Regular Templates",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/frontend/server-side-rendering.md",sourceDirName:"frontend",slug:"/frontend/server-side-rendering",permalink:"/fr/docs/frontend/server-side-rendering",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/frontend/server-side-rendering.md",tags:[],version:"current",frontMatter:{title:"Rendu c\xf4t\xe9 serveur (SSR)"},sidebar:"someSidebar",previous:{title:"Angular, React & Vue",permalink:"/fr/docs/frontend/angular-react-vue"},next:{title:"Nuxt",permalink:"/fr/docs/frontend/nuxt.js"}},d={},u=[{value:"Regular Templates",id:"regular-templates",level:2},{value:"Rendering Templates",id:"rendering-templates",level:3},{value:"Using Another Template Engine",id:"using-another-template-engine",level:3},{value:"Path Resolution",id:"path-resolution",level:3},{value:"JSX Server-Side Rendering",id:"jsx-server-side-rendering",level:2},{value:"Example with React",id:"example-with-react",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"regular-templates",children:"Regular Templates"}),"\n",(0,r.jsxs)(n.p,{children:["Regular Web Applications rely on ",(0,r.jsx)(n.em,{children:"templates"})," to dynamically generate HTML pages on the server. These templates are text files that contain static content as well as a special syntax describing how the data should be inserted dynamically. During an HTTP request, the application loads and renders the template using the given contextual data and sends back the page to the client."]}),"\n",(0,r.jsxs)(n.p,{children:["This technique is known as ",(0,r.jsx)(n.em,{children:"Server-Side Rendering (or SSR)"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Here is an example of what a template might look like:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>{% title %}</title>\n</head>\n<body>\n  {% for user in users %}\n    * {{ user.name }}\n  {% else %}\n      No users have been found.\n  {% endfor %}\n</body>\n</html>\n'})}),"\n",(0,r.jsx)(n.h3,{id:"rendering-templates",children:"Rendering Templates"}),"\n",(0,r.jsxs)(n.p,{children:["FoalTS provides a minimalist template engine to render templates. This engine replaces all the occurrences of ",(0,r.jsx)(n.code,{children:"{{ myVariableName }}"})," with the given values."]}),"\n",(0,r.jsx)(n.p,{children:"Here is an example showing how to use it:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"templates/index.html"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>{{ title }}</title>\n</head>\n<body>\n  Hello {{ name }}!\n</body>\n</html>\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"src/app/app.controller.ts"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { Get, render } from '@foal/core';\n\nexport class AppController {\n  @Get('/')\n  index() {\n    return render('./templates/index.html', {\n      name: 'Alix',\n      title: 'Home'\n    });\n  }\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Output (GET /)"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Home</title>\n</head>\n<body>\n  Hello Alix!\n</body>\n</html>\n'})}),"\n",(0,r.jsx)(n.h3,{id:"using-another-template-engine",children:"Using Another Template Engine"}),"\n",(0,r.jsxs)(n.p,{children:["External template engines, such as ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/ejs",children:"EJS"})," or ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/pug",children:"pug"}),", are also supported and can be configured for the current project using the configuration key ",(0,r.jsx)(n.code,{children:"settings.templateEngine"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Here is an example showing how to configure ",(0,r.jsx)(n.code,{children:"config/default.json"})," (or ",(0,r.jsx)(n.code,{children:"config/default.yml"}),") with ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/twig",children:"twig"}),", a JS implementation of the Twig PHP templating language."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"npm install twig\n"})}),"\n",(0,r.jsxs)(s.A,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],children:[(0,r.jsx)(a.A,{value:"yaml",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"settings:\n  templateEngine: twig\n"})})}),(0,r.jsx)(a.A,{value:"json",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "settings": {\n    "templateEngine": "twig"\n  }\n}\n'})})}),(0,r.jsx)(a.A,{value:"js",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'module.exports = {\n  settings: {\n    templateEngine: "twig"\n  }\n}\n'})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Then the ",(0,r.jsx)(n.code,{children:"render"})," function uses this engine under the hood to render the templates."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Note: Only ",(0,r.jsx)(n.a,{href:"https://expressjs.com/en/resources/template-engines.html",children:"Express compatible"})," template engines are supported (which represents the large majority of those available on npm)."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"templates/index.html (Twig example)"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Users</title>\n</head>\n<body>\n  <ul>\n    {% for user in users %}\n      <li>{{ user.name }}</li>\n    {% endfor %}\n  </ul>\n</body>\n</html>\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"src/app/app.controller.ts (Twig example)"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { Get } from '@foal/core';\n\nexport class AppController {\n  @Get('/')\n  index() {\n    return render('./templates/index.html', {\n      users: [\n        { name: 'John' },\n        { name: 'Mary' }\n      ]\n    });\n  }\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Output (GET /) (Twig example)"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Users</title>\n</head>\n<body>\n  <ul>\n    <li>John</li>\n    <li>Mary</li>\n  </ul>\n</body>\n</html>\n'})}),"\n",(0,r.jsx)(n.h3,{id:"path-resolution",children:"Path Resolution"}),"\n",(0,r.jsxs)(n.p,{children:["By default, the ",(0,r.jsx)(n.code,{children:"render"})," function loads templates from the project root directory."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"// |- config\n// |- src\n// '- templates\n//   '- login.html\nrender('./templates/login.html', { /* ... */ })\n"})}),"\n",(0,r.jsxs)(n.p,{children:["But the path can also be relative to the controller file. The ",(0,r.jsx)(n.code,{children:"render"})," function accepts a third parameter ",(0,r.jsx)(n.code,{children:"dirname"})," for this purpose."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"/* login.controller.ts */\n\n// |- config\n// '- src\n//   '- app\n//     '- controllers\n//       |- templates\n//       | '- login.html\n//       '- login.controller.ts\nrender('./templates/login.html', { /* ... */ }, __dirname)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"jsx-server-side-rendering",children:"JSX Server-Side Rendering"}),"\n",(0,r.jsxs)(n.p,{children:["To compile JSX files, you need to update the ",(0,r.jsx)(n.code,{children:"tsconfig.json"})," as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    ...\n    "jsx": "react",\n  },\n  "include": [\n    "src/**/*.ts"\n    "src/**/*.tsx"\n  ]\n}\n\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Then, add the file extension ",(0,r.jsx)(n.code,{children:"tsx"})," in every ",(0,r.jsx)(n.code,{children:"tsconfig.*.json"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:["Example with ",(0,r.jsx)(n.code,{children:"tsconfig.app.json"})]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "extends": "./tsconfig.json",\n  "include": [\n    "src/**/*.ts",\n    "src/**/*.tsx"\n  ],\n  "exclude": [\n    "src/e2e/*.ts",\n    "src/**/*.spec.ts",\n    "src/e2e.ts",\n    "src/test.ts"\n  ]\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Every file using JSX must now have the extension ",(0,r.jsx)(n.code,{children:".tsx"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"example-with-react",children:"Example with React"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"npm install react react-dom\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This example shows how to use JSX SSR with React. It assumes that ",(0,r.jsx)(n.code,{children:"templates"})," directory is in the root, next to ",(0,r.jsx)(n.code,{children:"src"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"view.controller.tsx"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { Get, render } from '@foal/core';\nimport * as React from 'react';\nimport * as ReactDOMServer from 'react-dom/server';\n\nexport class ViewController {\n\n  @Get('/')\n  async index() {\n    const content = ReactDOMServer.renderToString(<div>Hello world!</div>);\n\n    return render('./templates/index.html', {\n      content,\n    });\n  }\n\n}\n\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"./templates/index.html"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Home</title>\n</head>\n<body>\n  {{ content }}\n</body>\n</html>\n'})})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var r=t(34164);const l={tabItem:"tabItem_Ymn6"};var s=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,a),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),l=t(34164),s=t(23104),a=t(56347),i=t(205),o=t(57485),c=t(31682),d=t(89466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:l}}=e;return{value:n,label:t,attributes:r,default:l}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const l=(0,a.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(l.location.search);n.set(s,e),l.replace({...l.location,search:n.toString()})}),[s,l])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:l}=e,s=h(e),[a,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,u]=m({queryString:t,groupId:l}),[x,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,s]=(0,d.Dv)(t);return[l,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:l}),j=(()=>{const e=c??x;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{j&&o(j)}),[j]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,s]),tabValues:s}}var g=t(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),l=i[t].value;l!==r&&(c(n),a(l))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...s,className:(0,l.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:l}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,l.A)("tabs-container",j.tabList),children:[(0,f.jsx)(v,{...e,...n}),(0,f.jsx)(b,{...e,...n})]})}function w(e){const n=(0,g.A)();return(0,f.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var r=t(96540);const l={},s=r.createContext(l);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);