"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4603],{64688:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=o(74848),a=o(28453);const s={title:"Autenticaci\xf3n Social con Google",id:"tuto-15-social-auth",slug:"15-social-auth"},t=void 0,i={id:"tutorials/real-world-example-with-react/tuto-15-social-auth",title:"Autenticaci\xf3n Social con Google",description:"En esta \xfaltima parte del tutorial, daremos a los usuarios la posibilidad de iniciar sesi\xf3n con Google. Actualmente, s\xf3lo pueden iniciar sesi\xf3n con un correo electr\xf3nico y una contrase\xf1a.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/15-social-auth.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/15-social-auth",permalink:"/es/docs/tutorials/real-world-example-with-react/15-social-auth",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/real-world-example-with-react/15-social-auth.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{title:"Autenticaci\xf3n Social con Google",id:"tuto-15-social-auth",slug:"15-social-auth"},sidebar:"someSidebar",previous:{title:"Construcci\xf3n de Producci\xf3n",permalink:"/es/docs/tutorials/real-world-example-with-react/14-production-build"},next:{title:"Arquitectura",permalink:"/es/docs/architecture/architecture-overview"}},l={},c=[{value:"Contrase\xf1as anulables",id:"contrase\xf1as-anulables",level:2},{value:"Configuraci\xf3n",id:"configuraci\xf3n",level:2},{value:"El controlador social",id:"el-controlador-social",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"En esta \xfaltima parte del tutorial, daremos a los usuarios la posibilidad de iniciar sesi\xf3n con Google. Actualmente, s\xf3lo pueden iniciar sesi\xf3n con un correo electr\xf3nico y una contrase\xf1a."}),"\n",(0,r.jsx)(n.p,{children:"Para ello, utilizar\xe1 el sistema de autenticaci\xf3n social de Foal."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:["Esta secci\xf3n supone que ya ha configurado una aplicaci\xf3n de Google y ha recuperado su ID de cliente y su secreto. Si no lo ha hecho, es posible que quiera consultar primero esta ",(0,r.jsx)(n.a,{href:"/es/docs/authentication/social-auth",children:"p\xe1gina"}),". Los URI de redirecci\xf3n permitidos en su aplicaci\xf3n de Google deben incluir ",(0,r.jsx)(n.code,{children:"http://localhost:3001/api/auth/google/callback"}),"."]})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"contrase\xf1as-anulables",children:"Contrase\xf1as anulables"}),"\n",(0,r.jsxs)(n.p,{children:["El primer paso es actualizar el modelo ",(0,r.jsx)(n.code,{children:"User"}),". Es posible que algunos usuarios s\xf3lo utilicen el inicio de sesi\xf3n social y, por lo tanto, no tengan una contrase\xf1a. Para tener esto en cuenta, haremos que la columna ",(0,r.jsx)(n.code,{children:"password"})," acepte valores nulos."]}),"\n",(0,r.jsxs)(n.p,{children:["Abra ",(0,r.jsx)(n.code,{children:"user.entity.ts"})," y actualice su contenido."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column({ unique: true })\n  email: string;\n\n  @Column({ nullable: true })\n  password: string;\n\n  @Column()\n  name: string;\n\n  @Column()\n  avatar: string;\n\n}\n\nexport { DatabaseSession } from '@foal/typeorm';\n"})}),"\n",(0,r.jsx)(n.p,{children:"Realice y ejecute las migraciones."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run makemigrations\nnpm run migrations\n"})}),"\n",(0,r.jsxs)(n.p,{children:["A continuaci\xf3n, abra ",(0,r.jsx)(n.code,{children:"auth.controller.ts"})," y a\xf1ada una condici\xf3n para comprobar si el valor de la contrase\xf1a es ",(0,r.jsx)(n.code,{children:"null"})," en la base de datos."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"if (!user.password) {\n  return new HttpResponseUnauthorized();\n}\n\nif (!(await verifyPassword(password, user.password))) {\n  return new HttpResponseUnauthorized();\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"configuraci\xf3n",children:"Configuraci\xf3n"}),"\n",(0,r.jsx)(n.p,{children:"Ahora que el problema de la contrase\xf1a est\xe1 resuelto, puede instalar los paquetes y proporcionar sus credenciales sociales en la configuraci\xf3n."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install @foal/social node-fetch@2\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"config/default.json"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "port": "env(PORT)",\n  "settings": {\n    ...\n    "social": {\n      "google": {\n        "clientId": "env(GOOGLE_CLIENT_ID)",\n        "clientSecret": "env(GOOGLE_CLIENT_SECRET)",\n        "redirectUri": "http://localhost:3001/api/auth/google/callback"\n      }\n    },\n  },\n  ...\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:".env"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# ...\n\nGOOGLE_CLIENT_ID="your Google client ID"\nGOOGLE_CLIENT_SECRET="your Google client secret"\n'})}),"\n",(0,r.jsx)(n.h2,{id:"el-controlador-social",children:"El controlador social"}),"\n",(0,r.jsx)(n.p,{children:"Cree el controlador."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"foal generate controller api/social-auth --register\n"})}),"\n",(0,r.jsx)(n.p,{children:"Abra el archivo y a\xf1ada dos nuevas rutas."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Punto final"}),(0,r.jsx)(n.th,{children:"M\xe9todo"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/api/auth/google"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"POST"})}),(0,r.jsx)(n.td,{children:"Redirige al usuario a la p\xe1gina de inicio de sesi\xf3n de Google."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/api/auth/google/callback"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"GET"})}),(0,r.jsx)(n.td,{children:"Gestiona la redirecci\xf3n de Google una vez que el usuario ha aprobado la conexi\xf3n."})]})]})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { Context, dependency, Get, HttpResponseRedirect } from '@foal/core';\nimport { GoogleProvider } from '@foal/social';\nimport { User } from '../../entities';\nimport * as fetch from 'node-fetch';\nimport { Disk } from '@foal/storage';\n\ninterface GoogleUserInfo {\n  email: string;\n  name?: string;\n  picture?: string;\n}\n\nexport class SocialAuthController {\n  @dependency\n  google: GoogleProvider;\n\n  @dependency\n  disk: Disk;\n\n  @Get('/google')\n  redirectToGoogle() {\n    return this.google.redirect();\n  }\n\n  @Get('/google/callback')\n  async handleGoogleRedirection(ctx: Context<User>) {\n    const { userInfo } = await this.google.getUserInfo<GoogleUserInfo>(ctx);\n\n    if (!userInfo.email) {\n      throw new Error('Google should have returned an email address.');\n    }\n\n    let user = await User.findOneBy({ email: userInfo.email });\n\n    if (!user) {\n      user = new User();\n      user.email = userInfo.email;\n      user.avatar = '';\n      user.name = userInfo.name ?? 'Unknown';\n\n      if (userInfo.picture) {\n        const response = await fetch(userInfo.picture);\n        const { path } = await this.disk.write('images/profiles/uploaded', response.body)\n        user.avatar = path;\n      }\n\n      await user.save();\n    }\n\n    ctx.session!.setUser(user);\n    ctx.user = user;\n\n    return new HttpResponseRedirect('/');\n  }\n\n}\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Abra ",(0,r.jsx)(n.code,{children:"api.controller.ts"})," y sustituya el prefijo de la ruta del ",(0,r.jsx)(n.code,{children:"SocialAuthController"})," por ",(0,r.jsx)(n.code,{children:"/auth"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"subControllers = [\n  controller('/stories', StoriesController),\n  controller('/auth', AuthController),\n  controller('/profile', ProfileController),\n  controller('/auth', SocialAuthController)\n];\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Vaya a ",(0,r.jsx)(n.a,{href:"http://localhost:3001/login",children:"http://localhost:3001/login"})," y haga clic en el bot\xf3n ",(0,r.jsx)(n.em,{children:"Connect with Google"}),". Ser\xe1 redirigido a la p\xe1gina de conexi\xf3n de Google. Una vez que haya validado la conexi\xf3n, ser\xe1 redirigido a la p\xe1gina de inicio. Si tiene una foto de perfil de Google, la ver\xe1 en su p\xe1gina de perfil."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Para que esto funcione, debe asegurarse de que est\xe1 utilizando el puerto ",(0,r.jsx)(n.code,{children:"3001"})," para probar el inicio de sesi\xf3n social. Esto asume que usted cre\xf3 la construcci\xf3n de producci\xf3n en el paso anterior de este tutorial. No puede utilizar el servidor de desarrollo de React aqu\xed porque las redirecciones no funcionar\xe1n con ambos puertos ",(0,r.jsx)(n.code,{children:"3000"})," y ",(0,r.jsx)(n.code,{children:"3001"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\xa1Enhorabuena! Ha llegado al final de este tutorial. Puede encontrar el c\xf3digo fuente completo ",(0,r.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:o(18811).A+"",children:"aqu\xed"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},18811:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/files/tutorial-foal-react-38621ac35b14eaf0d07f613929e7e98b.zip"},28453:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>i});var r=o(96540);const a={},s=r.createContext(a);function t(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);