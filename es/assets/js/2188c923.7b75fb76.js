"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[81],{96386:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=n(74848),s=n(28453);const r={title:"Unit Testing"},i=void 0,a={id:"tutorials/mongodb-todo-list/tuto-7-unit-testing",title:"Unit Testing",description:"The last step of this tutorial is to add some unit tests to the ApiController.",source:"@site/versioned_docs/version-1.x/tutorials/mongodb-todo-list/tuto-7-unit-testing.md",sourceDirName:"tutorials/mongodb-todo-list",slug:"/tutorials/mongodb-todo-list/tuto-7-unit-testing",permalink:"/es/docs/1.x/tutorials/mongodb-todo-list/tuto-7-unit-testing",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/tutorials/mongodb-todo-list/tuto-7-unit-testing.md",tags:[],version:"1.x",frontMatter:{title:"Unit Testing"},sidebar:"someSidebar",previous:{title:"Validation and Sanitization",permalink:"/es/docs/1.x/tutorials/mongodb-todo-list/tuto-6-validation-and-sanitization"},next:{title:"Architecture Overview",permalink:"/es/docs/1.x/architecture/architecture-overview"}},d={},l=[];function c(t){const e={blockquote:"blockquote",code:"code",img:"img",p:"p",pre:"pre",...(0,s.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["The last step of this tutorial is to add some unit tests to the ",(0,o.jsx)(e.code,{children:"ApiController"}),"."]}),"\n",(0,o.jsxs)(e.p,{children:["A unit test file ends with the ",(0,o.jsx)(e.code,{children:"spec.ts"})," extension and is usually placed next to the file it is testing."]}),"\n",(0,o.jsxs)(e.p,{children:["Create a new file ",(0,o.jsx)(e.code,{children:"config/test.json"})," to set the database uri."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-json",children:'{\n  "mongodb": {\n    "uri": "mongodb://localhost:27017/test-my-app"\n  }\n}\n'})}),"\n",(0,o.jsxs)(e.p,{children:["Then open the file ",(0,o.jsx)(e.code,{children:"api.controller.spec.ts"})," and replace its content."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-typescript",children:"// std\n// The `assert` module provides a simple set of assertion tests.\nimport { ok, strictEqual } from 'assert';\n\n// 3p\nimport { Config, createController, getHttpMethod, getPath, isHttpResponseOK } from '@foal/core';\nimport { connect, disconnect } from 'mongoose';\n\n// App\nimport { Todo } from '../models';\nimport { ApiController } from './api.controller';\n\n// Define a group of tests.\ndescribe('ApiController', () => {\n\n  let controller: ApiController;\n\n  // Create a connection to the database before running all the tests.\n  before(async () => {\n    const uri = Config.getOrThrow('mongodb.uri', 'string');\n    connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });\n\n    await Todo.deleteMany({});\n  });\n\n  // Close the database connection after running all the tests whether they succeed or failed.\n  after(() => disconnect());\n\n  // Create or re-create the controller before each test.\n  beforeEach(() => controller = createController(ApiController));\n\n  // Define a nested group of tests.\n  describe('has a \"getTodos\" method that', () => {\n\n    // Define a unit test.\n    it('should handle requests at GET /.', () => {\n      // Throw an error and make the test fail if the http method of `getTodos` is not GET.\n      strictEqual(getHttpMethod(ApiController, 'getTodos'), 'GET');\n      // Throw an error and make the test fail if the path of `getTodos` is not /todos.\n      strictEqual(getPath(ApiController, 'getTodos'), '/todos');\n    });\n\n    // Define a unit test.\n    it('should return an HttpResponseOK.', async () => {\n      // Create fake todos.\n      const todo1 = new Todo();\n      todo1.text = 'Todo 1';\n\n      const todo2 = new Todo();\n      todo2.text = 'Todo 2';\n\n      // Save the todos.\n      await Promise.all([\n        todo1.save(),\n        todo2.save()\n      ]);\n\n      const response = await controller.getTodos();\n      ok(isHttpResponseOK(response), 'response should be an instance of HttpResponseOK.');\n\n      const body = response.body;\n\n      ok(Array.isArray(body), 'The body of the response should be an array.');\n      strictEqual(body[0].text, 'Todo 1');\n      strictEqual(body[1].text, 'Todo 2');\n    });\n\n  });\n\n});\n\n"})}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsxs)(e.p,{children:["As a controller method returns an ",(0,o.jsx)(e.code,{children:"HttpResponse"})," object, it is really easy to test the status and body of the response."]}),"\n"]}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsxs)(e.p,{children:["If the controller method takes a ",(0,o.jsx)(e.code,{children:"Context"})," object as argument, you can instantiate one like this: ",(0,o.jsx)(e.code,{children:"new Context({ /* content of the express request object */})"}),"."]}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"Run the tests."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"npm run test\n"})}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsxs)(e.p,{children:["This command watches at your tests and tested files in the ",(0,o.jsx)(e.code,{children:"app/"})," directory. When a file is modified, it automatically recompiles and re-runs your tests."]}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"You should now end up with this output:"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Unit tests output",src:n(71228).A+"",width:"1240",height:"444"})}),"\n",(0,o.jsx)(e.p,{children:"Congratulations! You have reached the end of this tutorial!"}),"\n",(0,o.jsx)(e.p,{children:"If you have any questions, feel free to open an issue on Github!"})]})}function u(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(c,{...t})}):c(t)}},71228:(t,e,n)=>{n.d(e,{A:()=>o});const o=n.p+"assets/images/unit-tests-output-92ff8a147084006f7e318c124a0f053e.png"},28453:(t,e,n)=>{n.d(e,{R:()=>i,x:()=>a});var o=n(96540);const s={},r=o.createContext(s);function i(t){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:i(t.components),o.createElement(r.Provider,{value:e},t.children)}}}]);