"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4996],{1558:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var c=s(74848),o=s(28453);const t={title:"Task Scheduling"},r=void 0,l={id:"common/task-scheduling",title:"Task Scheduling",description:"You can schedule jobs using shell scripts and the node-schedule library.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/common/task-scheduling.md",sourceDirName:"common",slug:"/common/task-scheduling",permalink:"/id/docs/common/task-scheduling",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/common/task-scheduling.md",tags:[],version:"current",frontMatter:{title:"Task Scheduling"},sidebar:"someSidebar",previous:{title:"Logging",permalink:"/id/docs/common/logging"},next:{title:"REST API",permalink:"/id/docs/common/rest-blueprints"}},i={},d=[{value:"Example",id:"example",level:2},{value:"Background Jobs with pm2",id:"background-jobs-with-pm2",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:["You can schedule jobs using ",(0,c.jsx)(n.a,{href:"/id/docs/cli/shell-scripts",children:"shell scripts"})," and the ",(0,c.jsx)(n.a,{href:"https://www.npmjs.com/package/node-schedule",children:"node-schedule"})," library."]}),"\n",(0,c.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.em,{children:"scripts/fetch-metrics.ts"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-typescript",children:"export function main(args: any) {\n  // Do some stuff\n}\n\n"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.em,{children:"scripts/schedule-jobs.ts"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-typescript",children:"// 3p\nimport { scheduleJob } from 'node-schedule';\nimport { main as fetchMetrics } from './fetch-metrics';\n\nexport async function main(args: any) {\n  console.log('Scheduling the job...');\n\n  // Run the fetch-metrics script every day at 10:00 AM.\n  scheduleJob(\n    { hour: 10, minute: 0 },\n    () => fetchMetrics(args)\n  );\n\n  console.log('Job scheduled!');\n}\n\n"})}),"\n",(0,c.jsx)(n.p,{children:"Schedule the job(s):"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sh",children:"npm run build\nfoal run schedule-jobs arg1=value1\n"})}),"\n",(0,c.jsx)(n.h2,{id:"background-jobs-with-pm2",children:"Background Jobs with pm2"}),"\n",(0,c.jsxs)(n.p,{children:["While the above command works, it does not run the scheduler and the jobs in the background. To do this, you can use ",(0,c.jsx)(n.a,{href:"http://pm2.keymetrics.io/",children:"pm2"}),", a popular process manager for Node.js."]}),"\n",(0,c.jsxs)(n.p,{children:["First you need to install ",(0,c.jsx)(n.em,{children:"locally"})," the Foal CLI:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"npm install @foal/cli\n"})}),"\n",(0,c.jsx)(n.p,{children:"Then you can run the scheduler like this:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sh",children:"pm2 start ./node_modules/.bin/foal --name scheduler -- run schedule-jobs arg1=value1\n"})}),"\n",(0,c.jsx)(n.p,{children:"If everything works fine, you should see your scheduler running with this command:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sh",children:"pm2 ls\n"})}),"\n",(0,c.jsx)(n.p,{children:"To display the logs of the scheduler and the jobs, use this one:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"pm2 logs scheduler\n"})}),"\n",(0,c.jsx)(n.p,{children:"Eventually, to stop the scheduler and the jobs, you can use this command:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"pm2 delete scheduler\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var c=s(96540);const o={},t=c.createContext(o);function r(e){const n=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),c.createElement(t.Provider,{value:n},e.children)}}}]);