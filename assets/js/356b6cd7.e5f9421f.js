"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7900],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>h});var s=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=s.createContext({}),p=function(e){var t=s.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=p(e.components);return s.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},c=s.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=p(a),h=n,w=c["".concat(d,".").concat(h)]||c[h]||u[h]||r;return a?s.createElement(w,o(o({ref:t},l),{},{components:a})):s.createElement(w,o({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<r;p++)o[p]=a[p];return s.createElement.apply(null,o)}return s.createElement.apply(null,a)}c.displayName="MDXCreateElement"},77930:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var s=a(87462),n=(a(67294),a(3905));const r={title:"Password Management",sidebar_label:"Passwords"},o=void 0,i={unversionedId:"authentication/password-management",id:"authentication/password-management",title:"Password Management",description:"Passwords must never be stored in the database in plain text. If they were and attackers were to gain access to the database, all passwords would be compromised. To prevent this, they must be hashed and salted and their hashes stored. Foal provides two functions for this purpose.",source:"@site/docs/authentication/password-management.md",sourceDirName:"authentication",slug:"/authentication/password-management",permalink:"/docs/authentication/password-management",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/authentication/password-management.md",tags:[],version:"current",frontMatter:{title:"Password Management",sidebar_label:"Passwords"},sidebar:"someSidebar",previous:{title:"Users",permalink:"/docs/authentication/user-class"},next:{title:"Session Tokens",permalink:"/docs/authentication/session-tokens"}},d={},p=[{value:"Hashing and Salting Passwords",id:"hashing-and-salting-passwords",level:2},{value:"Verifying Passwords",id:"verifying-passwords",level:2},{value:"Password Upgrading",id:"password-upgrading",level:2}],l={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,s.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Passwords must never be stored in the database in plain text. If they were and attackers were to gain access to the database, all passwords would be compromised. To prevent this, they must be hashed and salted and their hashes stored. Foal provides two functions for this purpose."),(0,n.kt)("h2",{id:"hashing-and-salting-passwords"},"Hashing and Salting Passwords"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"hashPassword")," function hashes and salts a plain text password and returns a password hash. The returned value is meant to be stored in the database and used by the ",(0,n.kt)("inlineCode",{parentName:"p"},"verifyPassword")," function."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"const passwordHash = await hashPassword(plainTextPassword);\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("em",{parentName:"p"},"Note: password hashes are generated using ",(0,n.kt)("a",{parentName:"em",href:"https://en.wikipedia.org/wiki/PBKDF2"},"PBKDF2")," and HMAC-SHA256.")," ")),(0,n.kt)("h2",{id:"verifying-passwords"},"Verifying Passwords"),(0,n.kt)("p",null,"In order to verify that a password is correct when logging in, the ",(0,n.kt)("inlineCode",{parentName:"p"},"verifyPassword")," function can be used. It takes as parameters the plaintext password that is being tested and the hash of the password stored in the database. It returns a promise whose value is a boolean."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"const isEqual = await verifyPassword(plainTextPassword, passwordHash);\n")),(0,n.kt)("h2",{id:"password-upgrading"},"Password Upgrading"),(0,n.kt)("p",null,"The PBKDF2 algorithm uses a number of iterations to hash passwords. This work factor is deliberate and slows down potential attackers, making attacks against hashed passwords more difficult."),(0,n.kt)("p",null,"As computing power increases, the number of iterations must also increase. This is why the latest versions of Foal use a higher number of iterations."),(0,n.kt)("p",null,"To check that a password hash is using the latest recommended number of iterations, you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"passwordHashNeedsToBeRefreshed")," function."),(0,n.kt)("p",null,"The example below shows how to perform this check during a login and how to upgrade the password hash if the number of iterations turns out to be too low."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"const { email, password } = ctx.request.body;\n\nconst user = await User.findOneBy({ email });\n\nif (!user) {\n  return new HttpResponseUnauthorized();\n}\n\nif (!await verifyPassword(password, user.password)) {\n  return new HttpResponseUnauthorized();\n}\n\n// highlight-start\n// This line must be after the password verification.\nif (passwordHashNeedsToBeRefreshed(user.password)) {\n  user.password = await hashPassword(password);\n  await user.save();\n}\n// highlight-end\n\n// Log the user in.\n")))}u.isMDXComponent=!0}}]);