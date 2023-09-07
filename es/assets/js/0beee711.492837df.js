"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[346],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>m});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),c=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},u=function(e){var a=c(e.components);return t.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?t.createElement(k,o(o({ref:a},u),{},{components:n})):t.createElement(k,o({ref:a},u))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50284:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=n(87462),r=(n(67294),n(3905));const i={title:"Autenticaci\xf3n en React",id:"tuto-10-auth-with-react",slug:"10-auth-with-react"},o=void 0,l={unversionedId:"tutorials/real-world-example-with-react/tuto-10-auth-with-react",id:"version-3.x/tutorials/real-world-example-with-react/tuto-10-auth-with-react",title:"Autenticaci\xf3n en React",description:"La API del backend est\xe1 lista para ser utilizada. Ahora vamos a a\xf1adir la autenticaci\xf3n en el lado del frontend.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-3.x/tutorials/real-world-example-with-react/10-auth-with-react.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/10-auth-with-react",permalink:"/es/docs/3.x/tutorials/real-world-example-with-react/10-auth-with-react",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-3.x/tutorials/real-world-example-with-react/10-auth-with-react.md",tags:[],version:"3.x",sidebarPosition:10,frontMatter:{title:"Autenticaci\xf3n en React",id:"tuto-10-auth-with-react",slug:"10-auth-with-react"},sidebar:"someSidebar",previous:{title:"Autenticaci\xf3n en la API",permalink:"/es/docs/3.x/tutorials/real-world-example-with-react/9-authenticated-api"},next:{title:"A\xf1adida de la p\xe1gina de inscripci\xf3n",permalink:"/es/docs/3.x/tutorials/real-world-example-with-react/11-sign-up"}},s={},c=[],u={toc:c};function p(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"La API del backend est\xe1 lista para ser utilizada. Ahora vamos a a\xf1adir la autenticaci\xf3n en el lado del frontend."),(0,r.kt)("p",null,"As\xed es como se organiza la aplicaci\xf3n React:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Al hacer clic en el bot\xf3n ",(0,r.kt)("em",{parentName:"li"},"Log in")," o ",(0,r.kt)("em",{parentName:"li"},"Log out"),", la aplicaci\xf3n llama a las funciones definidas en ",(0,r.kt)("inlineCode",{parentName:"li"},"requests/auth.ts")," para realizar consultas al servidor."),(0,r.kt)("li",{parentName:"ul"},"La informaci\xf3n sobre el usuario actual se almacena en el componente ra\xedz ",(0,r.kt)("inlineCode",{parentName:"li"},"App.tsx")," bajo el nombre ",(0,r.kt)("inlineCode",{parentName:"li"},"currentUser"),". Si el usuario se ha conectado, este estado es de tipo ",(0,r.kt)("inlineCode",{parentName:"li"},"{ id: number, name: string }"),". En caso contrario, su valor es ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,r.kt)("li",{parentName:"ul"},"Al iniciar la sesi\xf3n, el servidor devuelve informaci\xf3n sobre el usuario que se utiliza para establecer el estado ",(0,r.kt)("inlineCode",{parentName:"li"},"currentUser"),". Al cerrar la sesi\xf3n, la aplicaci\xf3n establece este estado como ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Saber, en el lado del cliente, si un usuario est\xe1 conectado y qui\xe9n es, es \xfatil para gestionar la visualizaci\xf3n de los elementos de la interfaz de usuario. Esto nos permite, por ejemplo, saber qu\xe9 botones de navegaci\xf3n deben ser visibles.")),(0,r.kt)("p",null,"Abra el archivo ",(0,r.kt)("inlineCode",{parentName:"p"},"requests/auth.ts")," e implemente las funciones vac\xedas."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import axios from 'axios';\nimport { ICredentials, IUser } from '../interfaces';\n\nexport async function logIn(credentials: ICredentials): Promise<IUser> {\n  const response = await axios.post<IUser>('/api/auth/login', credentials);\n  return response.data;\n}\n\nexport async function logOut(): Promise<void> {\n  await axios.post('/api/auth/logout');\n}\n\nexport async function signUp(credentials: ICredentials): Promise<IUser> {\n  const response = await axios.post<IUser>('/api/auth/signup', credentials);\n  return response.data;\n}\n\n")),(0,r.kt)("p",null,"Vaya a ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000/login"},"http://localhost:3000/login")," y con\xe9ctese. Deber\xeda ser redirigido a la p\xe1gina de inicio. Si hace clic en el bot\xf3n ",(0,r.kt)("em",{parentName:"p"},"Profile")," de la barra de navegaci\xf3n, deber\xeda ser llevado a su p\xe1gina personal. Puede a\xf1adir o eliminar publicaciones si lo desea."),(0,r.kt)("p",null,"Ahora vamos a actualizar la p\xe1gina. Se le redirige a la p\xe1gina de inicio de sesi\xf3n como si hubiera cerrado la sesi\xf3n. \xa1Ay!"),(0,r.kt)("p",null,"La raz\xf3n de esto es que la aplicaci\xf3n del front-end ya no sabe que usted est\xe1 conectado. Si mira el componente ",(0,r.kt)("inlineCode",{parentName:"p"},"App"),", ver\xe1 que el estado ",(0,r.kt)("inlineCode",{parentName:"p"},"currentUser")," se inicializa a ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," cuando se carga la aplicaci\xf3n. As\xed que tenemos que encontrar una manera de mantener el estado de inicio de sesi\xf3n del usuario incluso si la p\xe1gina se actualiza."),(0,r.kt)("p",null,"Para ello, utilizaremos una cookie adicional para almacenar esta informaci\xf3n que ser\xe1 legible por la aplicaci\xf3n front-end."),(0,r.kt)("p",null,"Abra el archivo ",(0,r.kt)("inlineCode",{parentName:"p"},"api.controller.ts")," y a\xf1ada la opci\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"userCookie"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@UseSessions({\n  cookie: true,\n  user: (id: number) => User.findOneBy({ id }),\n  userCookie: ctx => ctx.user ? JSON.stringify({ id: ctx.user.id, name: ctx.user.name }) : '',\n})\n")),(0,r.kt)("p",null,"Esta opci\xf3n establece una cookie adicional ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," en el host del cliente con informaci\xf3n sobre el usuario actual."),(0,r.kt)("p",null,"Ahora vuelva al archivo ",(0,r.kt)("inlineCode",{parentName:"p"},"App.tsx")," y a\xf1ada la funci\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"getCurrentUserFromCookie")," que aparece a continuaci\xf3n."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import * as cookie from 'cookie';\n\nfunction getCurrentUserFromCookie(): IUser | null {\n  const userCookie = cookie.parse(document.cookie).user as string|undefined;\n  if (!userCookie) {\n    return null;\n  }\n  try {\n    return JSON.parse(userCookie);\n  } catch (error: any) {\n    return null;\n  }\n}\n\nexport default function App() {\n  const [currentUser, setCurrentUser] = useState(getCurrentUserFromCookie());\n\n  // ...\n\n}\n")),(0,r.kt)("p",null,"Cuando la aplicaci\xf3n se carga, esta funci\xf3n comprobar\xe1 si existe una cookie ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," con informaci\xf3n sobre el usuario actual. Si es as\xed, su contenido se utilizar\xe1 para establecer el valor de ",(0,r.kt)("inlineCode",{parentName:"p"},"currentUser"),"."),(0,r.kt)("p",null,"Actualice la p\xe1gina. La aplicaci\xf3n ahora funciona como se esperaba."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tambi\xe9n podr\xeda haber establecido una cookie del lado del cliente en la funci\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"logIn")," y eliminarla en la funci\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"logOut"),". Pero esta soluci\xf3n no funciona bien cuando el usuario se desconecta autom\xe1ticamente despu\xe9s de un per\xedodo de inactividad (expiraci\xf3n de la sesi\xf3n).")))}p.isMDXComponent=!0}}]);