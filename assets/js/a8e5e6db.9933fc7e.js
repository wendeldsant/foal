"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3093],{1555:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var l=t(74848),s=t(28453);const a={title:"Templates - Server-Side Rendering",sidebar_label:"Templates (SSR)"},i=void 0,r={id:"utilities/templating",title:"Templates - Server-Side Rendering",description:"Regular Web Applications rely on templates to dynamically generate HTML pages on the server. These templates are text files that contain static content as well as a special syntax describing how the data should be inserted dynamically. During an HTTP request, the application loads and renders the template using the given contextual data and sends back the page to the client.",source:"@site/versioned_docs/version-1.x/utilities/templating.md",sourceDirName:"utilities",slug:"/utilities/templating",permalink:"/docs/1.x/utilities/templating",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/utilities/templating.md",tags:[],version:"1.x",frontMatter:{title:"Templates - Server-Side Rendering",sidebar_label:"Templates (SSR)"},sidebar:"someSidebar",previous:{title:"XSS Protection",permalink:"/docs/1.x/security/xss-protection"},next:{title:"Logging & Debugging",permalink:"/docs/1.x/utilities/logging-and-debugging"}},o={},c=[{value:"Rendering Templates",id:"rendering-templates",level:2},{value:"Using Another Template Engine",id:"using-another-template-engine",level:2},{value:"Templates Location",id:"templates-location",level:2},{value:"The Legacy Package <code>@foal/ejs</code>",id:"the-legacy-package-foalejs",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["Regular Web Applications rely on ",(0,l.jsx)(n.em,{children:"templates"})," to dynamically generate HTML pages on the server. These templates are text files that contain static content as well as a special syntax describing how the data should be inserted dynamically. During an HTTP request, the application loads and renders the template using the given contextual data and sends back the page to the client."]}),"\n",(0,l.jsxs)(n.p,{children:["This technique is known as ",(0,l.jsx)(n.em,{children:"Server-Side Rendering (or SSR)"}),"."]}),"\n",(0,l.jsx)(n.p,{children:"Here is an example of what a template might look like:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>{% title %}</title>\n</head>\n<body>\n  {% for user in users %}\n    * {{ user.name }}\n  {% else %}\n      No users have been found.\n  {% endfor %}\n</body>\n</html>\n'})}),"\n",(0,l.jsx)(n.h2,{id:"rendering-templates",children:"Rendering Templates"}),"\n",(0,l.jsxs)(n.p,{children:["FoalTS provides a minimalist template engine to render templates. This engine replaces all the occurrences of ",(0,l.jsx)(n.code,{children:"{{ myVariableName }}"})," with the given values."]}),"\n",(0,l.jsx)(n.p,{children:"Here is an example showing how to use it:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.em,{children:"templates/index.html"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>{{ title }}</title>\n</head>\n<body>\n  Hello {{ name }}!\n</body>\n</html>\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.em,{children:"src/app/app.controller.ts"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"import { Get, render } from '@foal/core';\n\nexport class AppController {\n  @Get('/')\n  index() {\n    return render('./templates/index.html', {\n      name: 'Alix',\n      title: 'Home'\n    });\n  }\n}\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.em,{children:"Output (GET /)"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Home</title>\n</head>\n<body>\n  Hello Alix!\n</body>\n</html>\n'})}),"\n",(0,l.jsx)(n.h2,{id:"using-another-template-engine",children:"Using Another Template Engine"}),"\n",(0,l.jsxs)(n.p,{children:["External template engines, such as ",(0,l.jsx)(n.a,{href:"https://www.npmjs.com/package/ejs",children:"EJS"})," or ",(0,l.jsx)(n.a,{href:"https://www.npmjs.com/package/pug",children:"pug"}),", are also supported and can be configured for the current project using the configuration key ",(0,l.jsx)(n.code,{children:"settings.templateEngine"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Here is an example showing how to configure ",(0,l.jsx)(n.code,{children:"config/default.json"})," (or ",(0,l.jsx)(n.code,{children:"config/default.yml"}),") with ",(0,l.jsx)(n.a,{href:"https://www.npmjs.com/package/twig",children:"twig"}),", a JS implementation of the Twig PHP templating language."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"npm install twig\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "settings": {\n    "templateEngine": "twig"\n    ...\n  }\n  ...\n}\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"settings:\n  templateEngine: twig\n  ...\n...\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Then the ",(0,l.jsx)(n.code,{children:"render"})," function uses this engine under the hood to render the templates."]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["Note: Only ",(0,l.jsx)(n.a,{href:"https://expressjs.com/en/resources/template-engines.html",children:"Express compatible"})," template engines are supported (which represents the large majority of those available on npm)."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.em,{children:"templates/index.html (Twig example)"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Users</title>\n</head>\n<body>\n  <ul>\n    {% for user in users %}\n      <li>{{ user.name }}</li>\n    {% endfor %}\n  </ul>\n</body>\n</html>\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.em,{children:"src/app/app.controller.ts (Twig example)"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"import { Get } from '@foal/core';\n\nexport class AppController {\n  @Get('/')\n  index() {\n    return render('./templates/index.html', {\n      users: [\n        { name: 'John' },\n        { name: 'Mary' }\n      ]\n    });\n  }\n}\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.em,{children:"Output (GET /) (Twig example)"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Users</title>\n</head>\n<body>\n  <ul>\n    <li>John</li>\n    <li>Mary</li>\n  </ul>\n</body>\n</html>\n'})}),"\n",(0,l.jsx)(n.h2,{id:"templates-location",children:"Templates Location"}),"\n",(0,l.jsxs)(n.p,{children:["By default, the ",(0,l.jsx)(n.code,{children:"render"})," function loads templates from the project root directory."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"// |- config\n// |- src\n// '- templates\n//   '- login.html\nrender('./templates/login.html', { /* ... */ })\n"})}),"\n",(0,l.jsxs)(n.p,{children:["But the path can also be relative to the controller file. The ",(0,l.jsx)(n.code,{children:"render"})," function accepts a third parameter ",(0,l.jsx)(n.code,{children:"dirname"})," for this purpose."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"/* login.controller.ts */\n\n// |- config\n// '- src\n//   '- app\n//     '- controllers\n//       |- templates\n//       | '- login.html\n//       '- login.controller.ts\nrender('./templates/login.html', { /* ... */ }, __dirname)\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"the-legacy-package-foalejs",children:["The Legacy Package ",(0,l.jsx)(n.code,{children:"@foal/ejs"})]}),"\n",(0,l.jsxs)(n.p,{children:["Previous versions of FoalTS (< v1.0.0) only accepted a certain format for template engines. The package ",(0,l.jsx)(n.code,{children:"@foal/ejs"})," was an adapter of EJS for the framework. Since FoalTS now supports Express-compatible template engines, prefer using the ",(0,l.jsx)(n.code,{children:"ejs"})," library directly in the future."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var l=t(96540);const s={},a=l.createContext(s);function i(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);