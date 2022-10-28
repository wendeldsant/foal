"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2794],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),s=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,f=u["".concat(d,".").concat(m)]||u[m]||p[m]||o;return r?a.createElement(f,l(l({ref:t},c),{},{components:r})):a.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},26668:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={title:"La Aplicaci\xf3n Frontend",id:"tuto-7-add-frontend",slug:"7-add-frontend"},l=void 0,i={unversionedId:"tutorials/real-world-example-with-react/tuto-7-add-frontend",id:"version-2.x/tutorials/real-world-example-with-react/tuto-7-add-frontend",title:"La Aplicaci\xf3n Frontend",description:"Muy bien, hasta ahora tiene una primera versi\xf3n de trabajo de su API. Es el momento de a\xf1adir el frontend.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-2.x/tutorials/real-world-example-with-react/7-add-frontend.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/7-add-frontend",permalink:"/es/docs/2.x/tutorials/real-world-example-with-react/7-add-frontend",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-2.x/tutorials/real-world-example-with-react/7-add-frontend.md",tags:[],version:"2.x",sidebarPosition:7,frontMatter:{title:"La Aplicaci\xf3n Frontend",id:"tuto-7-add-frontend",slug:"7-add-frontend"},sidebar:"someSidebar",previous:{title:"Prueba de la API con Swagger",permalink:"/es/docs/2.x/tutorials/real-world-example-with-react/6-swagger-interface"},next:{title:"Conexi\xf3n de los Usuarios",permalink:"/es/docs/2.x/tutorials/real-world-example-with-react/8-authentication"}},d={},s=[],c={toc:s};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Muy bien, hasta ahora tiene una primera versi\xf3n de trabajo de su API. Es el momento de a\xf1adir el frontend."),(0,n.kt)("p",null,"Descargue el archivo zip ",(0,n.kt)("a",{target:"_blank",href:r(47090).Z},"aqu\xed"),". Contiene una base de c\xf3digo para el front-end que ir\xe1 completando a medida que avance. La mayor parte de la aplicaci\xf3n ya est\xe1 implementada para usted. S\xf3lo tendr\xe1 que ocuparse de la autenticaci\xf3n y de la carga de archivos durante este tutorial."),(0,n.kt)("p",null,"Cree un nuevo directorio ",(0,n.kt)("inlineCode",{parentName:"p"},"frontend-app")," en la ra\xedz de su proyecto y traslade el contenido del zip a \xe9l."),(0,n.kt)("p",null,"Vaya al directorio reci\xe9n creado e inicie el servidor de desarrollo."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd frontend-app\nnpm install\nnpm run start\n")),(0,n.kt)("p",null,"La aplicaci\xf3n frontal se carga en ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Feed page",src:r(82768).Z,width:"2560",height:"1392"})),(0,n.kt)("p",null,"La interfaz muestra un error y le pide que actualice la p\xe1gina. Este error se debe a que las aplicaciones del frontend y del backend se sirven en puertos diferentes. Por lo tanto, al enviar una solicitud, el frontend la env\xeda al puerto equivocado."),(0,n.kt)("p",null,"Una forma de resolver este problema es actualizar temporalmente el archivo ",(0,n.kt)("inlineCode",{parentName:"p"},"requests/stories.ts")," para utilizar el puerto ",(0,n.kt)("inlineCode",{parentName:"p"},"3001")," en desarrollo. Pero esto le obliga a a\xf1adir un c\xf3digo diferente al que realmente se utiliza en producci\xf3n, y tambi\xe9n genera errores de ",(0,n.kt)("em",{parentName:"p"},"same-origin policy")," con los que tendr\xe1 que seguir lidiando."),(0,n.kt)("p",null,"Otra forma de resolver este problema es ",(0,n.kt)("em",{parentName:"p"},"conectar")," su servidor de desarrollo frontal al puerto 3001 en desarrollo. Esto puede hacerse con el siguiente comando."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd ../backend-app\nfoal connect react ../frontend-app\n")),(0,n.kt)("p",null,"Si reinicia el servidor del frontend, las publicaciones deber\xedan mostrarse correctamente en la p\xe1gina principal (excepto las im\xe1genes)."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Feed page",src:r(46869).Z,width:"2556",height:"1394"})))}p.isMDXComponent=!0},47090:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/files/frontend-app-0e74b55d8f0360c4a779ce9fbba99114.zip"},82768:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/feed-error-8554029aeece9fa1bcc5f6bb0aeba30d.png"},46869:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/feed-no-images-8fea5ef99aff64389b1318caef2a3937.png"}}]);