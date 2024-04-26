"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9580],{55517:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(74848),t=r(28453);const o={title:"La Aplicaci\xf3n Frontend",id:"tuto-7-add-frontend",slug:"7-add-frontend"},i=void 0,s={id:"tutorials/real-world-example-with-react/tuto-7-add-frontend",title:"La Aplicaci\xf3n Frontend",description:"Muy bien, hasta ahora tiene una primera versi\xf3n de trabajo de su API. Es el momento de a\xf1adir el frontend.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/7-add-frontend.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/7-add-frontend",permalink:"/es/docs/tutorials/real-world-example-with-react/7-add-frontend",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/real-world-example-with-react/7-add-frontend.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"La Aplicaci\xf3n Frontend",id:"tuto-7-add-frontend",slug:"7-add-frontend"},sidebar:"someSidebar",previous:{title:"Prueba de la API con Swagger",permalink:"/es/docs/tutorials/real-world-example-with-react/6-swagger-interface"},next:{title:"Conexi\xf3n de los Usuarios",permalink:"/es/docs/tutorials/real-world-example-with-react/8-authentication"}},d={},l=[];function c(e){const a={a:"a",code:"code",em:"em",img:"img",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"Muy bien, hasta ahora tiene una primera versi\xf3n de trabajo de su API. Es el momento de a\xf1adir el frontend."}),"\n",(0,n.jsxs)(a.p,{children:["Descargue el archivo zip ",(0,n.jsx)(a.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:r(16617).A+"",children:"aqu\xed"}),". Contiene una base de c\xf3digo para el front-end que ir\xe1 completando a medida que avance. La mayor parte de la aplicaci\xf3n ya est\xe1 implementada para usted. S\xf3lo tendr\xe1 que ocuparse de la autenticaci\xf3n y de la carga de archivos durante este tutorial."]}),"\n",(0,n.jsxs)(a.p,{children:["Cree un nuevo directorio ",(0,n.jsx)(a.code,{children:"frontend-app"})," en la ra\xedz de su proyecto y traslade el contenido del zip a \xe9l."]}),"\n",(0,n.jsx)(a.p,{children:"Vaya al directorio reci\xe9n creado e inicie el servidor de desarrollo."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"cd frontend-app\nnpm install\nnpm run start\n"})}),"\n",(0,n.jsxs)(a.p,{children:["La aplicaci\xf3n frontal se carga en ",(0,n.jsx)(a.a,{href:"http://localhost:3000",children:"http://localhost:3000"}),"."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Feed page",src:r(72105).A+"",width:"2560",height:"1392"})}),"\n",(0,n.jsx)(a.p,{children:"La interfaz muestra un error y le pide que actualice la p\xe1gina. Este error se debe a que las aplicaciones del frontend y del backend se sirven en puertos diferentes. Por lo tanto, al enviar una solicitud, el frontend la env\xeda al puerto equivocado."}),"\n",(0,n.jsxs)(a.p,{children:["Una forma de resolver este problema es actualizar temporalmente el archivo ",(0,n.jsx)(a.code,{children:"requests/stories.ts"})," para utilizar el puerto ",(0,n.jsx)(a.code,{children:"3001"})," en desarrollo. Pero esto le obliga a a\xf1adir un c\xf3digo diferente al que realmente se utiliza en producci\xf3n, y tambi\xe9n genera errores de ",(0,n.jsx)(a.em,{children:"same-origin policy"})," con los que tendr\xe1 que seguir lidiando."]}),"\n",(0,n.jsxs)(a.p,{children:["Otra forma de resolver este problema es ",(0,n.jsx)(a.em,{children:"conectar"})," su servidor de desarrollo frontal al puerto 3001 en desarrollo. Esto puede hacerse con el siguiente comando."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"cd ../backend-app\nfoal connect react ../frontend-app\n"})}),"\n",(0,n.jsx)(a.p,{children:"Si reinicia el servidor del frontend, las publicaciones deber\xedan mostrarse correctamente en la p\xe1gina principal (excepto las im\xe1genes)."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Feed page",src:r(59619).A+"",width:"2556",height:"1394"})})]})}function p(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},16617:(e,a,r)=>{r.d(a,{A:()=>n});const n=r.p+"assets/files/frontend-app-e8a9536b1653a6e928a0048d0de7ec0d.zip"},72105:(e,a,r)=>{r.d(a,{A:()=>n});const n=r.p+"assets/images/feed-error-8554029aeece9fa1bcc5f6bb0aeba30d.png"},59619:(e,a,r)=>{r.d(a,{A:()=>n});const n=r.p+"assets/images/feed-no-images-8fea5ef99aff64389b1318caef2a3937.png"},28453:(e,a,r)=>{r.d(a,{R:()=>i,x:()=>s});var n=r(96540);const t={},o=n.createContext(t);function i(e){const a=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(o.Provider,{value:a},e.children)}}}]);