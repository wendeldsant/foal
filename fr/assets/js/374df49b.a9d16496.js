(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5406],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),i=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=i(e.components);return o.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=i(n),d=r,m=f["".concat(u,".").concat(d)]||f[d]||s[d]||a;return n?o.createElement(m,c(c({ref:t},p),{},{components:n})):o.createElement(m,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<a;i++)c[i]=n[i];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7759:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return i},toc:function(){return p},default:function(){return f}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),c=["components"],l={title:"404 Page"},u=void 0,i={unversionedId:"cookbook/not-found-page",id:"cookbook/not-found-page",isDocsHomePage:!1,title:"404 Page",description:"Here's a way to implement custom 404 pages.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/cookbook/not-found-page.md",sourceDirName:"cookbook",slug:"/cookbook/not-found-page",permalink:"/fr/docs/cookbook/not-found-page",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/cookbook/not-found-page.md",version:"current",frontMatter:{title:"404 Page"},sidebar:"someSidebar",previous:{title:"Planification de Travaux (en arri\xe8re-plan)",permalink:"/fr/docs/cookbook/scheduling-jobs"},next:{title:"Taille du Corps de Requ\xeate",permalink:"/fr/docs/cookbook/request-body-size"}},p=[],s={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Here's a way to implement custom 404 pages."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get, HttpResponseNotFound, HttpResponseOK } from '@foal/core';\n\nclass ViewController {\n  @Get('/home')\n  home() {\n    return new HttpResponseOK('You are on the home page!');\n  }\n}\n\nclass AppController {\n  subControllers = [ ViewController ];\n\n  @Get('*')\n  notFound() {\n    return new HttpResponseNotFound('The page you are looking for does not exist.');\n  }\n}\n")),(0,a.kt)("p",null,"In case you want to intercept all HTTP verbs (POST, PUT, etc), you can also use the ",(0,a.kt)("inlineCode",{parentName:"p"},"@All")," decorator for this."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"This feature is available from version 2.1 onwards."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { All, HttpResponseNotFound } from '@foal/core';\n\nclass AppController {\n  subControllers = [ ViewController ];\n\n  @All('*')\n  notFound() {\n    return new HttpResponseNotFound('The route you are looking for does not exist.');\n  }\n}\n")))}f.isMDXComponent=!0}}]);