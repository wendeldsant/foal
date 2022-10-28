"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6456],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(c,".").concat(m)]||d[m]||i[m]||a;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55342:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>i,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"Scheduling Jobs"},s=void 0,l={unversionedId:"cookbook/scheduling-jobs",id:"version-1.x/cookbook/scheduling-jobs",title:"Scheduling Jobs",description:"You can schedule jobs using shell scripts and the node-schedule library.",source:"@site/versioned_docs/version-1.x/cookbook/scheduling-jobs.md",sourceDirName:"cookbook",slug:"/cookbook/scheduling-jobs",permalink:"/docs/1.x/cookbook/scheduling-jobs",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/cookbook/scheduling-jobs.md",tags:[],version:"1.x",frontMatter:{title:"Scheduling Jobs"},sidebar:"someSidebar",previous:{title:"Generate Tokens",permalink:"/docs/1.x/cookbook/generate-tokens"},next:{title:"404 Page",permalink:"/docs/1.x/cookbook/not-found-page"}},c={},p=[{value:"Example",id:"example",level:2},{value:"Background Jobs with pm2",id:"background-jobs-with-pm2",level:2}],u={toc:p};function i(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can schedule jobs using ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.x/development-environment/create-and-run-scripts"},"shell scripts")," and the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/node-schedule"},"node-schedule")," library."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"scripts/fetch-metrics.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export function main(args: any) {\n  // Do some stuff\n}\n\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"scripts/schedule-jobs.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// 3p\nimport { scheduleJob } from 'node-schedule';\nimport { main as fetchMetrics } from './fetch-metrics';\n\nexport async function main(args: any) {\n  console.log('Scheduling the job...');\n\n  // Run the fetch-metrics script every day at 10:00 AM.\n  scheduleJob(\n    { hour: 10, minute: 0 },\n    () => fetchMetrics(args)\n  );\n\n  console.log('Job scheduled!');\n}\n\n")),(0,o.kt)("p",null,"Schedule the job(s):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm run build:scripts\nfoal run schedule-jobs arg1=value1\n")),(0,o.kt)("h2",{id:"background-jobs-with-pm2"},"Background Jobs with pm2"),(0,o.kt)("p",null,"While the above command works, it does not run the scheduler and the jobs in the background. To do this, you can use ",(0,o.kt)("a",{parentName:"p",href:"http://pm2.keymetrics.io/"},"pm2"),", a popular process manager for Node.js."),(0,o.kt)("p",null,"First you need to install ",(0,o.kt)("em",{parentName:"p"},"locally")," the Foal CLI:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install @foal/cli\n")),(0,o.kt)("p",null,"Then you can run the scheduler like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pm2 start ./node_modules/.bin/foal --name scheduler -- run schedule-jobs arg1=value1\n")),(0,o.kt)("p",null,"If everything works fine, you should see your scheduler running with this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pm2 ls\n")),(0,o.kt)("p",null,"To display the logs of the scheduler and the jobs, use this one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pm2 logs scheduler\n")),(0,o.kt)("p",null,"Eventually, to stop the scheduler and the jobs, you can use this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pm2 delete scheduler\n")))}i.isMDXComponent=!0}}]);