"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8321],{3751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=n(74848),o=n(28453);const r={title:"Pruebas E2E"},i=void 0,a={id:"testing/e2e-testing",title:"Pruebas E2E",description:"End-to-end tests are located in the src/e2e directory.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-2.x/testing/e2e-testing.md",sourceDirName:"testing",slug:"/testing/e2e-testing",permalink:"/es/docs/2.x/testing/e2e-testing",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-2.x/testing/e2e-testing.md",tags:[],version:"2.x",frontMatter:{title:"Pruebas E2E"},sidebar:"someSidebar",previous:{title:"Pruebas unitarias",permalink:"/es/docs/2.x/testing/unit-testing"},next:{title:"Cabeceras HTTP de Protecci\xf3n",permalink:"/es/docs/2.x/security/http-headers-protection"}},d={},c=[{value:"Build and Run E2E Tests",id:"build-and-run-e2e-tests",level:2},{value:"Watch mode (for development)",id:"watch-mode-for-development",level:3},{value:"Simple mode (for CI and Git hooks)",id:"simple-mode-for-ci-and-git-hooks",level:3},{value:"The <code>SuperTest</code> library",id:"the-supertest-library",level:2}];function p(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["End-to-end tests are located in the ",(0,s.jsx)(t.code,{children:"src/e2e"})," directory."]}),"\n",(0,s.jsx)(t.h2,{id:"build-and-run-e2e-tests",children:"Build and Run E2E Tests"}),"\n",(0,s.jsx)(t.h3,{id:"watch-mode-for-development",children:"Watch mode (for development)"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"npm run e2e\n"})}),"\n",(0,s.jsx)(t.p,{children:"This command builds and executes the e2e tests. If you modify a file and save it, the code is rebuilt and the tests are run again. This is particularly useful in development: you do not need to re-run the command every time you make code changes."}),"\n",(0,s.jsx)(t.p,{children:"The process runs forever until you stop it."}),"\n",(0,s.jsx)(t.h3,{id:"simple-mode-for-ci-and-git-hooks",children:"Simple mode (for CI and Git hooks)"}),"\n",(0,s.jsx)(t.p,{children:"If you need to build and run the tests only once, you can use these two commands:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"npm run build:e2e # Build the e2e tests code (compile the typescript files and copy the templates)\nnpm run start:e2e # Execute the e2e tests from the built files\n"})}),"\n",(0,s.jsx)(t.p,{children:"These commands are particularly useful when you want to integrate your tests into a CI pipeline or a Git hook."}),"\n",(0,s.jsxs)(t.h2,{id:"the-supertest-library",children:["The ",(0,s.jsx)(t.code,{children:"SuperTest"})," library"]}),"\n",(0,s.jsxs)(t.p,{children:["You can use ",(0,s.jsx)(t.a,{href:"https://github.com/visionmedia/supertest",children:"the SuperTest library"})," to write your e2e tests. It is installed by default."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Simple example"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"// 3p\nimport { createApp } from '@foal/core';\nimport * as request from 'supertest';\nimport { getConnection } from 'typeorm';\n\n// App\nimport { AppController } from '../app/app.controller';\n\ndescribe('The server', () => {\n\n  let app;\n\n  before(async () => {\n    app = await createApp(AppController);\n  });\n\n  after(() => getConnection().close());\n\n  it('should return a 200 status on GET / requests.', () => {\n    return request(app)\n      .get('/')\n      .expect(200);\n  });\n\n});\n\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Advanced example"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"// std\n// The `assert` module provides a simple set of assertion tests.\nimport { ok } from 'assert';\n\n// 3p\nimport { createApp } from '@foal/core';\nimport * as request from 'supertest';\nimport { getConnection } from 'typeorm';\n\n// App\nimport { AppController } from '../app/app.controller';\nimport { User } from '../app/entities';\n\n// Define a group of tests.\ndescribe('The server', () => {\n\n  let app: any;\n\n  // Create the application and the connection to the database before running all the tests.\n  before(async () => {\n    app = await createApp(AppController);\n  });\n\n  // Close the database connection after running all the tests whether they succeed or failed.\n  after(() => getConnection().close());\n\n  // Define a nested group of tests.\n  describe('on GET /api/todos requests', () => {\n\n    it('should return a 401 status if the user did not signed in.', () => {\n      return request(app)\n        .get('/api/todos')\n        .expect(401);\n    });\n\n    it('should return a 200 status if the user did signed in.', async () => {\n      // Create a new user in the empty database.\n      const user = new User();\n      user.email = 'john@foalts.org';\n      await user.setPassword('john_password');\n      await getConnection().manager.save(user);\n\n      // Log the user in.\n      let cookie = '';\n      await request(app)\n        .post('/auth/login')\n        // Set the body of the request\n        .send({ email: 'john@foalts.org', password: 'john_password' })\n        // The response should have the status 302 (redirection)\n        .expect(302)\n        .then(data => {\n          // The response should set the authentication cookie for the next requests.\n          ok(Array.isArray(data.header['set-cookie']));\n          // Save the cookie to be able to use it in further requests.\n          cookie = data.header['set-cookie'][0];\n        });\n\n      // Test the /api/todos endpoint when the user has logged in.\n      return request(app)\n        .get('/api/todos')\n        // Send the authentication cookie.\n        .set('Cookie', cookie)\n        .expect(200);\n    });\n\n  });\n\n});\n"})})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var s=n(96540);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);