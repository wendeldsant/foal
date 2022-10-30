"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4868],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={title:"Tests de Bout en Bout"},s=void 0,i={unversionedId:"testing/e2e-testing",id:"testing/e2e-testing",title:"Tests de Bout en Bout",description:"End-to-end tests are located in the src/e2e directory.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/testing/e2e-testing.md",sourceDirName:"testing",slug:"/testing/e2e-testing",permalink:"/fr/docs/testing/e2e-testing",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/testing/e2e-testing.md",tags:[],version:"current",frontMatter:{title:"Tests de Bout en Bout"},sidebar:"someSidebar",previous:{title:"Tests Unitaires",permalink:"/fr/docs/testing/unit-testing"},next:{title:"En-t\xeates HTTP de Protection",permalink:"/fr/docs/security/http-headers-protection"}},p={},u=[{value:"Build and Run E2E Tests",id:"build-and-run-e2e-tests",level:2},{value:"Watch mode (for development)",id:"watch-mode-for-development",level:3},{value:"Simple mode (for CI and Git hooks)",id:"simple-mode-for-ci-and-git-hooks",level:3},{value:"The <code>SuperTest</code> library",id:"the-supertest-library",level:2}],l={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"End-to-end tests are located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/e2e")," directory."),(0,o.kt)("h2",{id:"build-and-run-e2e-tests"},"Build and Run E2E Tests"),(0,o.kt)("h3",{id:"watch-mode-for-development"},"Watch mode (for development)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm run e2e\n")),(0,o.kt)("p",null,"This command builds and executes the e2e tests. If you modify a file and save it, the code is rebuilt and the tests are run again. This is particularly useful in development: you do not need to re-run the command every time you make code changes."),(0,o.kt)("p",null,"The process runs forever until you stop it."),(0,o.kt)("h3",{id:"simple-mode-for-ci-and-git-hooks"},"Simple mode (for CI and Git hooks)"),(0,o.kt)("p",null,"If you need to build and run the tests only once, you can use these two commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm run build:e2e # Build the e2e tests code (compile the typescript files and copy the templates)\nnpm run start:e2e # Execute the e2e tests from the built files\n")),(0,o.kt)("p",null,"These commands are particularly useful when you want to integrate your tests into a CI pipeline or a Git hook."),(0,o.kt)("h2",{id:"the-supertest-library"},"The ",(0,o.kt)("inlineCode",{parentName:"h2"},"SuperTest")," library"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/visionmedia/supertest"},"the SuperTest library")," to write your e2e tests. It is installed by default."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Simple example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// 3p\nimport { createApp } from '@foal/core';\nimport * as request from 'supertest';\nimport { DataSource } from 'typeorm';\n\n// App\nimport { AppController } from '../app/app.controller';\nimport { createDataSource } from '../db';\n\ndescribe('The server', () => {\n\n  let app;\n  let dataSource: DataSource;\n\n  before(async () => {\n    app = await createApp(AppController);\n    dataSource = createDataSource();\n    await dataSource.initialize();\n  });\n\n  after(async () => {\n    if (dataSource) {\n      await dataSource.destroy();\n    }\n  });\n\n  it('should return a 200 status on GET / requests.', () => {\n    return request(app)\n      .get('/')\n      .expect(200);\n  });\n\n});\n\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Advanced example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// std\n// The `assert` module provides a simple set of assertion tests.\nimport { ok } from 'assert';\n\n// 3p\nimport { createApp } from '@foal/core';\nimport * as request from 'supertest';\nimport { DataSource } from 'typeorm';\n\n// App\nimport { AppController } from '../app/app.controller';\nimport { User } from '../app/entities';\nimport { createDataSource } from '../db';\n\n// Define a group of tests.\ndescribe('The server', () => {\n\n  let dataSource: DataSource;\n  let app: any;\n\n  // Create the application and the connection to the database before running all the tests.\n  before(async () => {\n    app = await createApp(AppController);\n    dataSource = createDataSource();\n    await dataSource.initialize();\n  });\n\n  // Close the database connection after running all the tests whether they succeed or failed.\n  after(async () => {\n    if (dataSource) {\n      await dataSource.destroy();\n    }\n  });\n\n  // Define a nested group of tests.\n  describe('on GET /api/todos requests', () => {\n\n    it('should return a 401 status if the user did not signed in.', () => {\n      return request(app)\n        .get('/api/todos')\n        .expect(401);\n    });\n\n    it('should return a 200 status if the user did signed in.', async () => {\n      // Create a new user in the empty database.\n      const user = new User();\n      user.email = 'john@foalts.org';\n      await user.setPassword('john_password');\n      await user.save();\n\n      // Log the user in.\n      let cookie = '';\n      await request(app)\n        .post('/auth/login')\n        // Set the body of the request\n        .send({ email: 'john@foalts.org', password: 'john_password' })\n        // The response should have the status 302 (redirection)\n        .expect(302)\n        .then(data => {\n          // The response should set the authentication cookie for the next requests.\n          ok(Array.isArray(data.header['set-cookie']));\n          // Save the cookie to be able to use it in further requests.\n          cookie = data.header['set-cookie'][0];\n        });\n\n      // Test the /api/todos endpoint when the user has logged in.\n      return request(app)\n        .get('/api/todos')\n        // Send the authentication cookie.\n        .set('Cookie', cookie)\n        .expect(200);\n    });\n\n  });\n\n});\n")))}c.isMDXComponent=!0}}]);