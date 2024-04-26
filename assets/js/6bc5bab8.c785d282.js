"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5790],{236:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=n(74848),s=n(28453);const i={title:"Unit Testing",id:"tuto-7-unit-testing",slug:"7-unit-testing"},r=void 0,a={id:"tutorials/simple-todo-list/tuto-7-unit-testing",title:"Unit Testing",description:"The last step of this tutorial is to add some unit tests to the ApiController.",source:"@site/docs/tutorials/simple-todo-list/7-unit-testing.md",sourceDirName:"tutorials/simple-todo-list",slug:"/tutorials/simple-todo-list/7-unit-testing",permalink:"/docs/tutorials/simple-todo-list/7-unit-testing",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/simple-todo-list/7-unit-testing.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Unit Testing",id:"tuto-7-unit-testing",slug:"7-unit-testing"},sidebar:"someSidebar",previous:{title:"Validation & Sanitization",permalink:"/docs/tutorials/simple-todo-list/6-validation-and-sanitization"},next:{title:"Introduction",permalink:"/docs/tutorials/real-world-example-with-react/1-introduction"}},l={},d=[];function c(t){const e={a:"a",blockquote:"blockquote",code:"code",img:"img",p:"p",pre:"pre",...(0,s.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["The last step of this tutorial is to add some unit tests to the ",(0,o.jsx)(e.code,{children:"ApiController"}),"."]}),"\n",(0,o.jsxs)(e.p,{children:["A unit test file ends with the ",(0,o.jsx)(e.code,{children:"spec.ts"})," extension and is usually placed next to the file it is testing."]}),"\n",(0,o.jsxs)(e.p,{children:["Open the file ",(0,o.jsx)(e.code,{children:"api.controller.spec.ts"})," and replace its content."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-typescript",children:"// std\n// The `assert` module provides a simple set of assertion tests.\nimport { ok, strictEqual } from 'assert';\n\n// 3p\nimport { createController, getHttpMethod, getPath, isHttpResponseOK } from '@foal/core';\nimport { DataSource } from 'typeorm';\n\n// App\nimport { Todo } from '../entities';\nimport { ApiController } from './api.controller';\nimport { createDataSource } from '../../db';\n\n// Define a group of tests.\ndescribe('ApiController', () => {\n\n  let dataSource: DataSource;\n  let controller: ApiController;\n\n  // Create a connection to the database before running all the tests.\n  before(async () => {\n    // The connection uses the configuration defined in the file config/test.json.\n    // By default, the file has three connection options:\n    // - \"database\": \"./test_db.sqlite3\" -> Use a different database for running the tests.\n    // - \"synchronize\": true ->  Auto create the database schema when the connection is established.\n    // - \"dropSchema\": true -> Drop the schema when the connection is established (empty the database).\n    dataSource = createDataSource();\n    await dataSource.initialize();\n  });\n\n  // Close the database connection after running all the tests whether they succeed or failed.\n  after(async () => {\n    if (dataSource) {\n      await dataSource.close();\n    }\n  });\n\n  // Create or re-create the controller before each test.\n  beforeEach(() => controller = createController(ApiController));\n\n  // Define a nested group of tests.\n  describe('has a \"getTodos\" method that', () => {\n\n    // Define a unit test.\n    it('should handle requests at GET /todos.', () => {\n      // Throw an error and make the test fail if the HTTP method of `getTodos` is not GET.\n      strictEqual(getHttpMethod(ApiController, 'getTodos'), 'GET');\n      // Throw an error and make the test fail if the path of `getTodos` is not /todos.\n      strictEqual(getPath(ApiController, 'getTodos'), '/todos');\n    });\n\n    // Define a unit test.\n    it('should return an HttpResponseOK.', async () => {\n      // Create fake todos.\n      const todo1 = new Todo();\n      todo1.text = 'Todo 1';\n\n      const todo2 = new Todo();\n      todo2.text = 'Todo 2';\n\n      // Save the todos.\n      await Todo.save([ todo1, todo2 ]);\n\n      const response = await controller.getTodos();\n      ok(isHttpResponseOK(response), 'response should be an instance of HttpResponseOK.');\n\n      const body = response.body;\n\n      ok(Array.isArray(body), 'The body of the response should be an array.');\n      strictEqual(body[0].text, 'Todo 1');\n      strictEqual(body[1].text, 'Todo 2');\n    });\n\n  });\n\n});\n\n"})}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsxs)(e.p,{children:["As a controller method returns an ",(0,o.jsx)(e.code,{children:"HttpResponse"})," object, it is really easy to test the status and body of the response."]}),"\n"]}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsxs)(e.p,{children:["If the controller method takes a ",(0,o.jsx)(e.code,{children:"Context"})," object as argument, you can instantiate one like this: ",(0,o.jsx)(e.code,{children:"new Context({ /* content of the express request object */})"}),"."]}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"Run the tests."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"npm run test\n"})}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsxs)(e.p,{children:["This command watches at your tests and tested files in the ",(0,o.jsx)(e.code,{children:"app/"})," and ",(0,o.jsx)(e.code,{children:"scripts/"})," directories. When a file is modified, it automatically recompiles and re-runs your tests."]}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"You should now end up with this output:"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Unit tests output",src:n(35793).A+"",width:"1240",height:"444"})}),"\n",(0,o.jsx)(e.p,{children:"Congratulations! You have reached the end of this tutorial!"}),"\n",(0,o.jsx)(e.p,{children:"If you have any questions, feel free to open an issue on Github!"}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsxs)(e.p,{children:["The entire source code is available ",(0,o.jsx)(e.a,{href:"https://foalts.org/simple-todo-list-source-code-v3.zip",children:"here"}),"."]}),"\n"]})]})}function h(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(c,{...t})}):c(t)}},35793:(t,e,n)=>{n.d(e,{A:()=>o});const o=n.p+"assets/images/unit-tests-output-92ff8a147084006f7e318c124a0f053e.png"},28453:(t,e,n)=>{n.d(e,{R:()=>r,x:()=>a});var o=n(96540);const s={},i=o.createContext(s);function r(t){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),o.createElement(i.Provider,{value:e},t.children)}}}]);