"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7322],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65891:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const i={title:"Authenticating Users in React",id:"tuto-10-auth-with-react",slug:"10-auth-with-react"},a=void 0,l={unversionedId:"tutorials/real-world-example-with-react/tuto-10-auth-with-react",id:"version-2.x/tutorials/real-world-example-with-react/tuto-10-auth-with-react",title:"Authenticating Users in React",description:"The backend API is ready to be used. Now let's add authentication in the frontend side.",source:"@site/versioned_docs/version-2.x/tutorials/real-world-example-with-react/10-auth-with-react.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/10-auth-with-react",permalink:"/docs/2.x/tutorials/real-world-example-with-react/10-auth-with-react",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-2.x/tutorials/real-world-example-with-react/10-auth-with-react.md",tags:[],version:"2.x",sidebarPosition:10,frontMatter:{title:"Authenticating Users in React",id:"tuto-10-auth-with-react",slug:"10-auth-with-react"},sidebar:"someSidebar",previous:{title:"Authenticating Users in the API",permalink:"/docs/2.x/tutorials/real-world-example-with-react/9-authenticated-api"},next:{title:"Adding Sign Up",permalink:"/docs/2.x/tutorials/real-world-example-with-react/11-sign-up"}},s={},u=[],p={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The backend API is ready to be used. Now let's add authentication in the frontend side."),(0,o.kt)("p",null,"Here is how the React application is organized:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When clicking the ",(0,o.kt)("em",{parentName:"li"},"Log in")," or ",(0,o.kt)("em",{parentName:"li"},"Log out")," button, the application calls the functions defined in ",(0,o.kt)("inlineCode",{parentName:"li"},"requests/auth.ts")," to make requests to the server."),(0,o.kt)("li",{parentName:"ul"},"Information about the current user is stored in the root component ",(0,o.kt)("inlineCode",{parentName:"li"},"App.tsx")," under the name ",(0,o.kt)("inlineCode",{parentName:"li"},"currentUser"),". If the user has logged in, this state is of type ",(0,o.kt)("inlineCode",{parentName:"li"},"{ id: number, name: string }"),". Otherwise, its value is ",(0,o.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,o.kt)("li",{parentName:"ul"},"When logging in, the server returns information about the user which is used to set the ",(0,o.kt)("inlineCode",{parentName:"li"},"currentUser")," state. On logout, the application sets this state to ",(0,o.kt)("inlineCode",{parentName:"li"},"null"),".")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Knowing, on the client side, if a user is logged in and who they are is useful to manage the display of user interface elements. This allows us, for example, to know which navigation buttons should be visible.")),(0,o.kt)("p",null,"Open the file ",(0,o.kt)("inlineCode",{parentName:"p"},"requests/auth.ts")," and implement the empty functions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import axios from 'axios';\nimport { ICredentials, IUser } from '../interfaces';\n\nexport async function logIn(credentials: ICredentials): Promise<IUser> {\n  const response = await axios.post<IUser>('/api/auth/login', credentials);\n  return response.data;\n}\n\nexport async function logOut(): Promise<void> {\n  await axios.post('/api/auth/logout');\n}\n\nexport async function signUp(credentials: ICredentials): Promise<IUser> {\n  const response = await axios.post<IUser>('/api/auth/signup', credentials);\n  return response.data;\n}\n\n")),(0,o.kt)("p",null,"Go to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000/login"},"http://localhost:3000/login")," and log in. You should be redirected to the home page. If you click on the ",(0,o.kt)("em",{parentName:"p"},"Profile")," button in the navigation bar, you should be taken to your personal page. You can add or remove stories if you wish."),(0,o.kt)("p",null,"Now let's refresh the page. You are redirected to the login page as if you were logged out. Ouch!"),(0,o.kt)("p",null,"The reason behind this is that the front-end application no longer knows that you are logged in. If you look at the ",(0,o.kt)("inlineCode",{parentName:"p"},"App")," component, you will see that the ",(0,o.kt)("inlineCode",{parentName:"p"},"currentUser")," state is initialized to ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," when the application is loaded. So we need to find a way to keep track of the user's login state even if the page is refreshed."),(0,o.kt)("p",null,"To do this, you will use an additional cookie to store this information that will be readable by the front-end application."),(0,o.kt)("p",null,"Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"api.controller.ts")," file and add the ",(0,o.kt)("inlineCode",{parentName:"p"},"userCookie")," option."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context } from '@foal/core';\n\n// ...\n\n@UseSessions({\n  cookie: true,\n  user: fetchUser(User),\n  userCookie: (ctx: Context<User|undefined>) => ctx.user ? JSON.stringify({ id: ctx.user.id, name: ctx.user.name }) : '',\n})\n")),(0,o.kt)("p",null,"This option sets an additional ",(0,o.kt)("inlineCode",{parentName:"p"},"user")," cookie on the client host with information about the current user."),(0,o.kt)("p",null,"Now go back to the ",(0,o.kt)("inlineCode",{parentName:"p"},"App.tsx")," file and add the ",(0,o.kt)("inlineCode",{parentName:"p"},"getCurrentUserFromCookie")," function below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import * as cookie from 'cookie';\n\nfunction getCurrentUserFromCookie(): IUser | null {\n  const userCookie = cookie.parse(document.cookie).user as string|undefined;\n  if (!userCookie) {\n    return null;\n  }\n  try {\n    return JSON.parse(userCookie);\n  } catch (error: any) {\n    return null;\n  }\n}\n\nexport default function App() {\n  const [currentUser, setCurrentUser] = useState(getCurrentUserFromCookie());\n\n  // ...\n\n}\n")),(0,o.kt)("p",null,"When the application loads, this function will check if a ",(0,o.kt)("inlineCode",{parentName:"p"},"user")," cookie exists with information about the current user. If so, its contents will be used to set the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"currentUser"),"."),(0,o.kt)("p",null,"Refresh the page. The application now works as expected."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You could also have set a client-side cookie in the ",(0,o.kt)("inlineCode",{parentName:"p"},"logIn")," function and deleted it in the ",(0,o.kt)("inlineCode",{parentName:"p"},"logOut")," function. But this solution does not work well when the user is automatically logged out after a period of inactivity (session expiration).")))}c.isMDXComponent=!0}}]);