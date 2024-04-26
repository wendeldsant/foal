"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7136],{80121:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=s(74848),r=s(28453);const a={title:"A\xf1adida de la p\xe1gina de inscripci\xf3n",id:"tuto-11-sign-up",slug:"11-sign-up"},o=void 0,i={id:"tutorials/real-world-example-with-react/tuto-11-sign-up",title:"A\xf1adida de la p\xe1gina de inscripci\xf3n",description:"Hasta ahora, s\xf3lo los usuarios creados con el script create-user pueden registrarse y publicar posts. En esta secci\xf3n a\xf1adir\xe1 un nuevo punto final de la API para que los usuarios se registren con la p\xe1gina de registro.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/11-sign-up.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/11-sign-up",permalink:"/es/docs/tutorials/real-world-example-with-react/11-sign-up",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/real-world-example-with-react/11-sign-up.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"A\xf1adida de la p\xe1gina de inscripci\xf3n",id:"tuto-11-sign-up",slug:"11-sign-up"},sidebar:"someSidebar",previous:{title:"Autenticaci\xf3n en React",permalink:"/es/docs/tutorials/real-world-example-with-react/10-auth-with-react"},next:{title:"Carga y Descarga de Im\xe1genes",permalink:"/es/docs/tutorials/real-world-example-with-react/12-file-upload"}},c={},l=[];function d(e){const t={a:"a",code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Hasta ahora, s\xf3lo los usuarios creados con el script ",(0,n.jsx)(t.code,{children:"create-user"})," pueden registrarse y publicar posts. En esta secci\xf3n a\xf1adir\xe1 un nuevo punto final de la API para que los usuarios se registren con la p\xe1gina de registro."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Punto final"}),(0,n.jsx)(t.th,{children:"M\xe9todo"}),(0,n.jsx)(t.th,{children:"Descripci\xf3n"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"/api/auth/signup"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"POST"})}),(0,n.jsx)(t.td,{children:"Registra un nuevo usuario. Se espera un correo electr\xf3nico y una contrase\xf1a en el cuerpo de la solicitud."})]})})]}),"\n",(0,n.jsxs)(t.p,{children:["Abra el archivo ",(0,n.jsx)(t.code,{children:"auth.controller.ts"})," y a\xf1ada una nueva ruta."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"import { Context, hashPassword, HttpResponseNoContent, HttpResponseOK, HttpResponseUnauthorized, Post, ValidateBody, verifyPassword } from '@foal/core';\nimport { User } from '../../entities';\n\nconst credentialsSchema = {\n  // ...\n};\n\nexport class AuthController {\n\n  // login...\n\n  // logout...\n\n  @Post('/signup')\n  @ValidateBody(credentialsSchema)\n  async signup(ctx: Context<User|null>) {\n    const email = ctx.request.body.email;\n    const password = ctx.request.body.password;\n\n    const user = new User();\n    user.email = email;\n    user.avatar = '';\n    user.name = 'Unknown';\n    user.password = await hashPassword(password);\n    await user.save();\n\n    ctx.session!.setUser(user);\n    ctx.user = user;\n\n    return new HttpResponseOK({\n      id: user.id,\n      name: user.name,\n    });\n  }\n\n\n}\n\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Si va a la ",(0,n.jsx)(t.a,{href:"http://localhost:3000/signup",children:"p\xe1gina de registro"}),", ahora deber\xeda poder registrarse como nuevo usuario."]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>i});var n=s(96540);const r={},a=n.createContext(r);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);