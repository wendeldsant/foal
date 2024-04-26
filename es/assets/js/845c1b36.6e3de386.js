"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4581],{30473:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=t(74848),r=t(28453);const a={title:"Angular, React & Vue"},d=void 0,c={id:"frontend/angular-react-vue",title:"Angular, React & Vue",description:"Angular, React and Vue all provide powerful CLIs for creating frontend applications. These tools are widely used, regularly improved and extensively documented. That's why Foal CLI do not provide ready-made features to build the frontend in their place.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/frontend/angular-react-vue.md",sourceDirName:"frontend",slug:"/frontend/angular-react-vue",permalink:"/es/docs/frontend/angular-react-vue",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/frontend/angular-react-vue.md",tags:[],version:"current",frontMatter:{title:"Angular, React & Vue"},sidebar:"someSidebar",previous:{title:"Single Page Applications",permalink:"/es/docs/frontend/single-page-applications"},next:{title:"Server-Side Rendering",permalink:"/es/docs/frontend/server-side-rendering"}},i={},l=[{value:"Creating a new Application",id:"creating-a-new-application",level:2},{value:"Angular",id:"angular",level:3},{value:"React",id:"react",level:3},{value:"Vue",id:"vue",level:3},{value:"Problems Solved by the <code>connect</code> Command",id:"problems-solved-by-the-connect-command",level:2},{value:"Origins that Do not Match",id:"origins-that-do-not-match",level:3},{value:"Build Outpath",id:"build-outpath",level:3}];function s(e){const n={blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"foal connect angular ../frontend\nfoal connect react ../frontend\nfoal connect vue ../frontend\n"})}),"\n",(0,o.jsx)(n.p,{children:"Angular, React and Vue all provide powerful CLIs for creating frontend applications. These tools are widely used, regularly improved and extensively documented. That's why Foal CLI do not provide ready-made features to build the frontend in their place."}),"\n",(0,o.jsxs)(n.p,{children:["Instead, FoalTS offers a convenient command, named ",(0,o.jsx)(n.code,{children:"connect"}),", to configure your frontend CLI so that it interacts smoothly with your Foal application. This way, you do not have to worry about the details of the configuration when starting a new project. You can leave this until later if you need it."]}),"\n",(0,o.jsx)(n.h2,{id:"creating-a-new-application",children:"Creating a new Application"}),"\n",(0,o.jsx)(n.h3,{id:"angular",children:"Angular"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"mkdir my-app\ncd my-app\n\nfoal createapp backend\nng new frontend\n\ncd backend\nfoal connect angular ../frontend\n"})}),"\n",(0,o.jsx)(n.h3,{id:"react",children:"React"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"mkdir my-app\ncd my-app\n\nfoal createapp backend\nnpx create-react-app frontend --template typescript\n\ncd backend\nfoal connect react ../frontend\n"})}),"\n",(0,o.jsx)(n.h3,{id:"vue",children:"Vue"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"mkdir my-app\ncd my-app\n\nfoal createapp backend\nvue create frontend\n\ncd backend\nfoal connect vue ../frontend\n"})}),"\n",(0,o.jsxs)(n.h2,{id:"problems-solved-by-the-connect-command",children:["Problems Solved by the ",(0,o.jsx)(n.code,{children:"connect"})," Command"]}),"\n",(0,o.jsx)(n.h3,{id:"origins-that-do-not-match",children:"Origins that Do not Match"}),"\n",(0,o.jsxs)(n.p,{children:["When building a web application with a Angular / React / Vue, it is very common in development to have two servers serving on different ports. For example, with an application written in Foal and Angular, the backend server serves the port ",(0,o.jsx)(n.code,{children:"3001"})," and the frontend one servers the ",(0,o.jsx)(n.code,{children:"4200"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Consequently requests made by the frontend do not reach the backend as they have a different origin. One hacky solution is to replace the URL path to ",(0,o.jsx)(n.code,{children:"http://localhost:3001"})," in development and to enable CORS requests."]}),"\n",(0,o.jsx)(n.p,{children:"This technique has some drawbacks however:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"It may introduce a different codebase between the environments (dev and prod)."}),"\n",(0,o.jsxs)(n.li,{children:["And it disables a browser protection (the ",(0,o.jsx)(n.code,{children:"Same-Origin policy"}),")."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["One way to get around this, keeping the policy and the same codebase, is to configure a proxy to redirect ",(0,o.jsx)(n.code,{children:"4200"})," requests to the port ",(0,o.jsx)(n.code,{children:"3001"}),". The ",(0,o.jsx)(n.code,{children:"connect"})," command does it for you."]}),"\n",(0,o.jsx)(n.h3,{id:"build-outpath",children:"Build Outpath"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"This feature only works with Angular and Vue."})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"connect"})," command also modifies the build output path of your front so that its bundles are saved in the ",(0,o.jsx)(n.code,{children:"public/"})," directory. This way, you can run the frontend and the backend build commands and directly ship the application to production."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>c});var o=t(96540);const r={},a=o.createContext(r);function d(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);