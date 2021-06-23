(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[621],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return t?a.createElement(g,l(l({ref:n},u),{},{components:t})):a.createElement(g,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7962:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=t(2122),r=t(9756),o=(t(7294),t(3905)),l=["components"],i={title:"Autenticaci\xf3n Social con Google",id:"tuto-15-social-auth",slug:"15-social-auth"},s=void 0,c={unversionedId:"tutorials/real-world-example-with-react/tuto-15-social-auth",id:"tutorials/real-world-example-with-react/tuto-15-social-auth",isDocsHomePage:!1,title:"Autenticaci\xf3n Social con Google",description:"En esta \xfaltima parte del tutorial, daremos a los usuarios la posibilidad de iniciar sesi\xf3n con Google. Actualmente, s\xf3lo pueden iniciar sesi\xf3n con un correo electr\xf3nico y una contrase\xf1a.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/15-social-auth.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/15-social-auth",permalink:"/es/docs/tutorials/real-world-example-with-react/15-social-auth",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/real-world-example-with-react/15-social-auth.md",version:"current",sidebarPosition:15,frontMatter:{title:"Autenticaci\xf3n Social con Google",id:"tuto-15-social-auth",slug:"15-social-auth"},sidebar:"someSidebar",previous:{title:"Construcci\xf3n de Producci\xf3n",permalink:"/es/docs/tutorials/real-world-example-with-react/14-production-build"},next:{title:"Arquitectura",permalink:"/es/docs/architecture/architecture-overview"}},u=[{value:"Contrase\xf1as anulables",id:"contrase\xf1as-anulables",children:[]},{value:"Configuraci\xf3n",id:"configuraci\xf3n",children:[]},{value:"El controlador social",id:"el-controlador-social",children:[]}],p={toc:u};function d(e){var n=e.components,i=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"En esta \xfaltima parte del tutorial, daremos a los usuarios la posibilidad de iniciar sesi\xf3n con Google. Actualmente, s\xf3lo pueden iniciar sesi\xf3n con un correo electr\xf3nico y una contrase\xf1a."),(0,o.kt)("p",null,"Para ello, utilizar\xe1 el sistema de autenticaci\xf3n social de Foal."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Esta secci\xf3n supone que ya ha configurado una aplicaci\xf3n de Google y ha recuperado su ID de cliente y su secreto. Si no lo ha hecho, es posible que quiera consultar primero esta ",(0,o.kt)("a",{parentName:"em",href:"/es/docs/authentication-and-access-control/social-auth"},"p\xe1gina"),". Los URI de redirecci\xf3n permitidos en su aplicaci\xf3n de Google deben incluir ",(0,o.kt)("inlineCode",{parentName:"em"},"http://localhost:3001/api/auth/google/callback"),"."))),(0,o.kt)("h2",{id:"contrase\xf1as-anulables"},"Contrase\xf1as anulables"),(0,o.kt)("p",null,"El primer paso es actualizar el modelo ",(0,o.kt)("inlineCode",{parentName:"p"},"User"),". Es posible que algunos usuarios s\xf3lo utilicen el inicio de sesi\xf3n social y, por lo tanto, no tengan una contrase\xf1a. Para tener esto en cuenta, haremos que la columna ",(0,o.kt)("inlineCode",{parentName:"p"},"password")," acepte valores nulos."),(0,o.kt)("p",null,"Abra ",(0,o.kt)("inlineCode",{parentName:"p"},"user.entity.ts")," y actualice su contenido."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column({ unique: true })\n  email: string;\n\n  @Column({ nullable: true })\n  password: string;\n\n  @Column()\n  name: string;\n\n  @Column()\n  avatar: string;\n\n}\n\nexport { DatabaseSession } from '@foal/typeorm';\n")),(0,o.kt)("p",null,"Realice y ejecute las migraciones."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run makemigrations\nnpm run migrations\n")),(0,o.kt)("p",null,"A continuaci\xf3n, abra ",(0,o.kt)("inlineCode",{parentName:"p"},"auth.controller.ts")," y a\xf1ada una condici\xf3n para comprobar si el valor de la contrase\xf1a es ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," en la base de datos."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"if (!user.password) {\n  return new HttpResponseUnauthorized();\n}\n\nif (!(await verifyPassword(password, user.password))) {\n  return new HttpResponseUnauthorized();\n}\n")),(0,o.kt)("h2",{id:"configuraci\xf3n"},"Configuraci\xf3n"),(0,o.kt)("p",null,"Ahora que el problema de la contrase\xf1a est\xe1 resuelto, puede instalar los paquetes y proporcionar sus credenciales sociales en la configuraci\xf3n."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @foal/social node-fetch\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"config/default.json")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "port": "env(PORT)",\n  "settings": {\n    ...\n    "social": {\n      "google": {\n        "clientId": "env(GOOGLE_CLIENT_ID)",\n        "clientSecret": "env(GOOGLE_CLIENT_SECRET)",\n        "redirectUri": "http://localhost:3001/api/auth/google/callback"\n      }\n    },\n  },\n  ...\n}\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},".env")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# ...\n\nGOOGLE_CLIENT_ID="your Google client ID"\nGOOGLE_CLIENT_SECRET="your Google client secret"\n')),(0,o.kt)("h2",{id:"el-controlador-social"},"El controlador social"),(0,o.kt)("p",null,"Cree el controlador."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"foal generate controller api/social-auth --register\n")),(0,o.kt)("p",null,"Abra el archivo y a\xf1ada dos nuevas rutas."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Punto final"),(0,o.kt)("th",{parentName:"tr",align:null},"M\xe9todo"),(0,o.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/api/auth/google")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"POST")),(0,o.kt)("td",{parentName:"tr",align:null},"Redirige al usuario a la p\xe1gina de inicio de sesi\xf3n de Google.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/api/auth/google/callback")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"GET")),(0,o.kt)("td",{parentName:"tr",align:null},"Gestiona la redirecci\xf3n de Google una vez que el usuario ha aprobado la conexi\xf3n.")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, dependency, Get, HttpResponseRedirect, Session } from '@foal/core';\nimport { GoogleProvider } from '@foal/social';\nimport { User } from '../../entities';\nimport * as fetch from 'node-fetch';\nimport { Disk } from '@foal/storage';\n\ninterface GoogleUserInfo {\n  email: string;\n  name?: string;\n  picture?: string;\n}\n\nexport class SocialAuthController {\n  @dependency\n  google: GoogleProvider;\n\n  @dependency\n  disk: Disk;\n\n  @Get('/google')\n  redirectToGoogle() {\n    return this.google.redirect();\n  }\n\n  @Get('/google/callback')\n  async handleGoogleRedirection(ctx: Context<User, Session>) {\n    const { userInfo } = await this.google.getUserInfo<GoogleUserInfo>(ctx);\n\n    if (!userInfo.email) {\n      throw new Error('Google should have returned an email address.');\n    }\n\n    let user = await User.findOne({ email: userInfo.email });\n\n    if (!user) {\n      user = new User();\n      user.email = userInfo.email;\n      user.avatar = '';\n      user.name = userInfo.name ?? 'Unknown';\n\n      if (userInfo.picture) {\n        const response = await fetch(userInfo.picture);\n        const { path } = await this.disk.write('images/profiles/uploaded', response.body)\n        user.avatar = path;\n      }\n\n      await user.save();\n    }\n\n    ctx.session.setUser(user);\n    ctx.user = user;\n\n    return new HttpResponseRedirect('/');\n  }\n\n}\n\n")),(0,o.kt)("p",null,"Abra ",(0,o.kt)("inlineCode",{parentName:"p"},"api.controller.ts")," y sustituya el prefijo de la ruta del ",(0,o.kt)("inlineCode",{parentName:"p"},"SocialAuthController")," por ",(0,o.kt)("inlineCode",{parentName:"p"},"/auth"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"subControllers = [\n  controller('/stories', StoriesController),\n  controller('/auth', AuthController),\n  controller('/profile', ProfileController),\n  controller('/auth', SocialAuthController)\n];\n")),(0,o.kt)("p",null,"Vaya a ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3001/login"},"http://localhost:3001/login")," y haga clic en el bot\xf3n ",(0,o.kt)("em",{parentName:"p"},"Connect with Google"),". Ser\xe1 redirigido a la p\xe1gina de conexi\xf3n de Google. Una vez que haya validado la conexi\xf3n, ser\xe1 redirigido a la p\xe1gina de inicio. Si tiene una foto de perfil de Google, la ver\xe1 en su p\xe1gina de perfil."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Para que esto funcione, debe asegurarse de que est\xe1 utilizando el puerto ",(0,o.kt)("inlineCode",{parentName:"p"},"3001")," para probar el inicio de sesi\xf3n social. Esto asume que usted cre\xf3 la construcci\xf3n de producci\xf3n en el paso anterior de este tutorial. No puede utilizar el servidor de desarrollo de React aqu\xed porque las redirecciones no funcionar\xe1n con ambos puertos ",(0,o.kt)("inlineCode",{parentName:"p"},"3000")," y ",(0,o.kt)("inlineCode",{parentName:"p"},"3001"),". ")),(0,o.kt)("p",null,"\xa1Enhorabuena! Ha llegado al final de este tutorial. Puede encontrar el c\xf3digo fuente completo ",(0,o.kt)("a",{target:"_blank",href:t(7274).Z},"aqu\xed"),"."))}d.isMDXComponent=!0},7274:function(e,n,t){"use strict";n.Z=t.p+"assets/files/tutorial-foal-react-eb9413cdda30e58d7bf2efefe643b589.zip"}}]);