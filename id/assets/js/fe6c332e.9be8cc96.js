"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[912],{43565:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=n(74848),i=n(28453);const s={title:"Authenticating Users in React",id:"tuto-10-auth-with-react",slug:"10-auth-with-react"},r=void 0,a={id:"tutorials/real-world-example-with-react/tuto-10-auth-with-react",title:"Authenticating Users in React",description:"The backend API is ready to be used. Now let's add authentication in the frontend side.",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-2.x/tutorials/real-world-example-with-react/10-auth-with-react.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/10-auth-with-react",permalink:"/id/docs/2.x/tutorials/real-world-example-with-react/10-auth-with-react",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-2.x/tutorials/real-world-example-with-react/10-auth-with-react.md",tags:[],version:"2.x",sidebarPosition:10,frontMatter:{title:"Authenticating Users in React",id:"tuto-10-auth-with-react",slug:"10-auth-with-react"},sidebar:"someSidebar",previous:{title:"Authenticating Users in the API",permalink:"/id/docs/2.x/tutorials/real-world-example-with-react/9-authenticated-api"},next:{title:"Adding Sign Up",permalink:"/id/docs/2.x/tutorials/real-world-example-with-react/11-sign-up"}},c={},l=[];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"The backend API is ready to be used. Now let's add authentication in the frontend side."}),"\n",(0,o.jsx)(t.p,{children:"Here is how the React application is organized:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["When clicking the ",(0,o.jsx)(t.em,{children:"Log in"})," or ",(0,o.jsx)(t.em,{children:"Log out"})," button, the application calls the functions defined in ",(0,o.jsx)(t.code,{children:"requests/auth.ts"})," to make requests to the server."]}),"\n",(0,o.jsxs)(t.li,{children:["Information about the current user is stored in the root component ",(0,o.jsx)(t.code,{children:"App.tsx"})," under the name ",(0,o.jsx)(t.code,{children:"currentUser"}),". If the user has logged in, this state is of type ",(0,o.jsx)(t.code,{children:"{ id: number, name: string }"}),". Otherwise, its value is ",(0,o.jsx)(t.code,{children:"null"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["When logging in, the server returns information about the user which is used to set the ",(0,o.jsx)(t.code,{children:"currentUser"})," state. On logout, the application sets this state to ",(0,o.jsx)(t.code,{children:"null"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Knowing, on the client side, if a user is logged in and who they are is useful to manage the display of user interface elements. This allows us, for example, to know which navigation buttons should be visible."}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Open the file ",(0,o.jsx)(t.code,{children:"requests/auth.ts"})," and implement the empty functions."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:"import axios from 'axios';\nimport { ICredentials, IUser } from '../interfaces';\n\nexport async function logIn(credentials: ICredentials): Promise<IUser> {\n  const response = await axios.post<IUser>('/api/auth/login', credentials);\n  return response.data;\n}\n\nexport async function logOut(): Promise<void> {\n  await axios.post('/api/auth/logout');\n}\n\nexport async function signUp(credentials: ICredentials): Promise<IUser> {\n  const response = await axios.post<IUser>('/api/auth/signup', credentials);\n  return response.data;\n}\n\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Go to ",(0,o.jsx)(t.a,{href:"http://localhost:3000/login",children:"http://localhost:3000/login"})," and log in. You should be redirected to the home page. If you click on the ",(0,o.jsx)(t.em,{children:"Profile"})," button in the navigation bar, you should be taken to your personal page. You can add or remove stories if you wish."]}),"\n",(0,o.jsx)(t.p,{children:"Now let's refresh the page. You are redirected to the login page as if you were logged out. Ouch!"}),"\n",(0,o.jsxs)(t.p,{children:["The reason behind this is that the front-end application no longer knows that you are logged in. If you look at the ",(0,o.jsx)(t.code,{children:"App"})," component, you will see that the ",(0,o.jsx)(t.code,{children:"currentUser"})," state is initialized to ",(0,o.jsx)(t.code,{children:"null"})," when the application is loaded. So we need to find a way to keep track of the user's login state even if the page is refreshed."]}),"\n",(0,o.jsx)(t.p,{children:"To do this, you will use an additional cookie to store this information that will be readable by the front-end application."}),"\n",(0,o.jsxs)(t.p,{children:["Open the ",(0,o.jsx)(t.code,{children:"api.controller.ts"})," file and add the ",(0,o.jsx)(t.code,{children:"userCookie"})," option."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:"import { Context } from '@foal/core';\n\n// ...\n\n@UseSessions({\n  cookie: true,\n  user: fetchUser(User),\n  userCookie: (ctx: Context<User|undefined>) => ctx.user ? JSON.stringify({ id: ctx.user.id, name: ctx.user.name }) : '',\n})\n"})}),"\n",(0,o.jsxs)(t.p,{children:["This option sets an additional ",(0,o.jsx)(t.code,{children:"user"})," cookie on the client host with information about the current user."]}),"\n",(0,o.jsxs)(t.p,{children:["Now go back to the ",(0,o.jsx)(t.code,{children:"App.tsx"})," file and add the ",(0,o.jsx)(t.code,{children:"getCurrentUserFromCookie"})," function below."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:"import * as cookie from 'cookie';\n\nfunction getCurrentUserFromCookie(): IUser | null {\n  const userCookie = cookie.parse(document.cookie).user as string|undefined;\n  if (!userCookie) {\n    return null;\n  }\n  try {\n    return JSON.parse(userCookie);\n  } catch (error: any) {\n    return null;\n  }\n}\n\nexport default function App() {\n  const [currentUser, setCurrentUser] = useState(getCurrentUserFromCookie());\n\n  // ...\n\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["When the application loads, this function will check if a ",(0,o.jsx)(t.code,{children:"user"})," cookie exists with information about the current user. If so, its contents will be used to set the value of ",(0,o.jsx)(t.code,{children:"currentUser"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Refresh the page. The application now works as expected."}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["You could also have set a client-side cookie in the ",(0,o.jsx)(t.code,{children:"logIn"})," function and deleted it in the ",(0,o.jsx)(t.code,{children:"logOut"})," function. But this solution does not work well when the user is automatically logged out after a period of inactivity (session expiration)."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var o=n(96540);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);