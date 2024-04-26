"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1082],{72424:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=s(74848),o=s(28453);const r={title:"CSRF Protection"},i=void 0,c={id:"security/csrf-protection",title:"CSRF Protection",description:"Cross-Site Request Forgery (CSRF) is a type of attack that occurs when a malicious web site, email, blog, instant message, or program causes a user\u2019s web browser to perform an unwanted action on a trusted site when the user is authenticated.",source:"@site/versioned_docs/version-1.x/security/csrf-protection.md",sourceDirName:"security",slug:"/security/csrf-protection",permalink:"/id/docs/1.x/security/csrf-protection",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/security/csrf-protection.md",tags:[],version:"1.x",frontMatter:{title:"CSRF Protection"},sidebar:"someSidebar",previous:{title:"HTTP Headers Protection",permalink:"/id/docs/1.x/security/http-headers-protection"},next:{title:"XSS Protection",permalink:"/id/docs/1.x/security/xss-protection"}},a={},l=[{value:"SameSite Cookie Attribute",id:"samesite-cookie-attribute",level:2},{value:"Authentication with Session Tokens",id:"authentication-with-session-tokens",level:3},{value:"Authentication with JSON Web Tokens",id:"authentication-with-json-web-tokens",level:3},{value:"Using CSRF Tokens",id:"using-csrf-tokens",level:2},{value:"Regular Web Applications",id:"regular-web-applications",level:3},{value:"Stateful CSRF token (Session-based)",id:"stateful-csrf-token-session-based",level:4},{value:"Stateless CSRF token (Double Submit Cookie Technique)",id:"stateless-csrf-token-double-submit-cookie-technique",level:4},{value:"SPA + API",id:"spa--api",level:3},{value:"Stateful CSRF token (Session-based)",id:"stateful-csrf-token-session-based-1",level:4},{value:"Stateless CSRF token (Double Submit Cookie Technique)",id:"stateless-csrf-token-double-submit-cookie-technique-1",level:4},{value:"Disable the CSRF protection",id:"disable-the-csrf-protection",level:3},{value:"Advanced",id:"advanced",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Cross-Site Request Forgery (CSRF) is a type of attack that occurs when a malicious web site, email, blog, instant message, or program causes a user\u2019s web browser to perform an unwanted action on a trusted site when the user is authenticated."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["Source: ",(0,t.jsx)(n.a,{href:"https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.md",children:"OWASP"})]})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["There are several ways to defend yourself against a CSRF attack. The better approach is to use both the ",(0,t.jsx)(n.code,{children:"SameSite"})," cookie directive and a token-based technique to have an in-depth protection."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["Note: CSRF protection only makes sense if your authentication system is based on cookies. This is why there is no example for ",(0,t.jsx)(n.em,{children:"Mobile+API"})," applications."]})}),"\n",(0,t.jsx)(n.h2,{id:"samesite-cookie-attribute",children:"SameSite Cookie Attribute"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"SameSite"})," attribute is a new cookie directive to mitigate the risk of CSRF attacks. As of July 2019, SameSite attribute is on browsers used by 86,57% of Internet users."]}),"\n",(0,t.jsx)(n.h3,{id:"authentication-with-session-tokens",children:"Authentication with Session Tokens"}),"\n",(0,t.jsxs)(n.p,{children:["If you use session tokens with the ",(0,t.jsx)(n.code,{children:"setSessionCookie"}),", you can directly define the cookie directives in the configuration."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Example with config/default.json"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "settings": {\n    "session": {\n      "cookie": {\n        "sameSite": "lax"\n      }\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Example with config/default.yml"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"settings:\n  session:\n    cookie:\n      sameSite: lax\n"})}),"\n",(0,t.jsx)(n.h3,{id:"authentication-with-json-web-tokens",children:"Authentication with JSON Web Tokens"}),"\n",(0,t.jsx)(n.p,{children:"If you use JSON Web Tokens, then you have to specify the directive manually when sending the token to the browser."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Example"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"return new HttpResponseOK()\n  .setCookie('auth', token, {\n    // ...\n    sameSite: 'lax'\n  })\n"})}),"\n",(0,t.jsx)(n.h2,{id:"using-csrf-tokens",children:"Using CSRF Tokens"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"npm install @foal/csrf\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In addition to the ",(0,t.jsx)(n.code,{children:"SameSite"})," directive it is strongly recommended to use a token-based mitigation technique to provide a robust defense."]}),"\n",(0,t.jsx)(n.p,{children:"Here is the principle:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"The server generates a token (stateless or stateful) and sends it to the browser (in the HTML page or in a separate cookie). An attacker performing a CSRF attack is not able to guess or read this token."}),"\n",(0,t.jsx)(n.li,{children:'In each subsequent POST, PUT, PATH or DELETE request, the client must include this token in a specific header, in the body of the request or in the URL parameters to prove the "origin" of the request.'}),"\n",(0,t.jsxs)(n.li,{children:["If the CSRF token is not present or is incorrect, the server returns an error 403 - FORBIDDEN with the message ",(0,t.jsx)(n.code,{children:"Bad csrf token."}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"FoalTS token-based protection provides a hook and a function to set up the defense."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"getCsrfToken"})," generates or reads the CSRF token."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"@CsrfTokenRequired"})," verifies the CSRF token when receiving requests and returns a 403 error if it is missing or incorrect."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"@CsrfTokenRequired"})," expects the CSRF token to be include in the request in either:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["the request body with the name ",(0,t.jsx)(n.code,{children:"_csrf"}),","]}),"\n",(0,t.jsxs)(n.li,{children:["the request query with the name ",(0,t.jsx)(n.code,{children:"_csrf"}),","]}),"\n",(0,t.jsxs)(n.li,{children:["or in one of these headers: ",(0,t.jsx)(n.code,{children:"CSRF-Token"}),", ",(0,t.jsx)(n.code,{children:"XSRF-Token"}),", ",(0,t.jsx)(n.code,{children:"X-CSRF-Token"})," or ",(0,t.jsx)(n.code,{children:"X-XSRF-Token"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"regular-web-applications",children:"Regular Web Applications"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Regular Web Applications"})," use ",(0,t.jsx)(n.em,{children:"Server-Side Rendering"})," to generate their HTML pages."]}),"\n",(0,t.jsx)(n.h4,{id:"stateful-csrf-token-session-based",children:"Stateful CSRF token (Session-based)"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Generate the token on login"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { HttpResponseOK, Post, setSessionCookie } from '@foal/core';\n\nclass AuthController {\n  // ...\n\n  @Post('/login')\n  async login() {\n    // ...\n    const session = await this.store.createAndSaveSessionFromUser(\n      user,\n      // Generate the CSRF token and keep it in the session\n      { csrfToken: true }\n    );\n\n    const response = new HttpResponseOK();\n    setSessionCookie(response, session.getToken());\n    return response;\n  }\n}\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Include the token in each rendered page."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Context, Get, TokenRequired, render } from '@foal/core';\nimport { TypoORMStore } from '@foal/typeorm';\nimport { getCsrfToken } from '@foal/csrf';\n \n@TokenRequired({\n  cookie: true,\n  redirectTo: '/login',\n  store: TypeORMStore, // Or another store: RedisStore, MongoDBStore, etc.\n})\nclass PageController {\n  @Get('/home')\n  async home(ctx: Context) {\n    return render(\n      './templates/home.html',\n      // Retreive the token from the session\n      // and include it in the rendered page\n      { csrfToken: await getCsrfToken(ctx.session) }\n    );\n  }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Home.html (example with a form)"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<html>\n  <head></head>\n  <body>\n    <form action="POST">\n      <input style="display: none" name="_csrf" value="{{ csrfToken }}">\n      \x3c!--\n        OR if you use EJS:\n        <input style="display: none" name="_csrf" value="<%= csrfToken %>">\n      --\x3e\n      <input name="foobar">\n      <button type="submit">Submit</button>\n    </form>\n  </body>\n</html>\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"home.html (example with JavaScript)"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<html>\n  <head>\n    <meta name="csrf-token" content="{{ csrfToken }}">\n    \x3c!--\n      OR if you use EJS:\n      <meta name="csrf-token" content="<%= csrfToken %>">\n    --\x3e\n  </head>\n  <body>\n    ...\n    <script type="text/javascript">\n      var csrf_token = document\n        .querySelector("meta[name=\'csrf-token\']")\n        .getAttribute("content");\n      // Add the token in a header (ex: CSRF-TOKEN) when making request\n    <\/script>\n  </body>\n</html>\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Check the CSRF token on each subsequent POST, PUT, PATCH and DELETE request."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Post, TokenRequired } from '@foal/core';\nimport { TypeORMStore } from '@foal/typeorm';\nimport { CsrfTokenRequired } from '@foal/csrf';\n\n@TokenRequired({\n  cookie: true,\n  store: TypeORMStore, // Or another store: RedisStore, MongoDBStore, etc.\n})\n@CsrfTokenRequired()\nclass ApiController {\n  @Post('/products')\n  createProduct() {\n    return new HttpResponseCreated();\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h4,{id:"stateless-csrf-token-double-submit-cookie-technique",children:"Stateless CSRF token (Double Submit Cookie Technique)"}),"\n",(0,t.jsx)(n.p,{children:"If you want to use stateless CSRF tokens, you need to provide a base64-encoded secret in either:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"a configuration file"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Example with config/default.yml"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"settings:\n  csrf:\n    secret: xxx\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["or in a ",(0,t.jsx)(n.code,{children:".env"})," file or in an environment variable:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"SETTINGS_CSRF_SECRET=xxx\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You can generate such a secret with the CLI command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"foal createsecret\n"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Generate a token and send it in a cookie when rendering a page."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Context, Get, HttpResponseOK } from '@foal/core';\nimport { getCsrfToken, setCsrfCookie } from '@foal/csrf';\n\nclass PageController {\n  @Get('/home')\n  async home(ctx: Context) {\n    // Normally in an HTML template\n    const response = new HttpResponseOK();\n    // Include a random CSRF token in the cookie\n    setCsrfCookie(response, await getCsrfToken());\n    return response;\n  }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"home.html (example with JavaScript)"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<html>\n  <head>\n  </head>\n  <body>\n    ...\n    <script type="text/javascript">\n      var csrf_token = // use a library to get the cookie value from document.cookie\n      // Add the token in a header (ex: CSRF-TOKEN) when making request\n    <\/script>\n  </body>\n</html>\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Check the CSRF token on each subsequent POST, PUT, PATCH and DELETE request."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { HttpResponseCreated, Post } from '@foal/core';\nimport { CsrfTokenRequired } from '@foal/csrf';\n\n@CsrfTokenRequired({ doubleSubmitCookie: true })\nclass ApiController {\n  @Post('/products')\n  createProduct() {\n    return new HttpResponseCreated();\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"spa--api",children:"SPA + API"}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.em,{children:"Single-Page Application + API"})," architecture, the frontend application is static and the pages are rendered in the browser."]}),"\n",(0,t.jsxs)(n.p,{children:["First set the configuration key ",(0,t.jsx)(n.code,{children:"settings.csrf.cookie.maxAge"})," to a very large number (for example one year)."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Example with config/default.json"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "settings": {\n    "csrf": {\n      "cookie": {\n        "maxAge": 31536000\n      }\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Example with config/default.yml"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"settings:\n  csrf:\n    cookie:\n      maxAge: 31536000 # One year\n"})}),"\n",(0,t.jsx)(n.h4,{id:"stateful-csrf-token-session-based-1",children:"Stateful CSRF token (Session-based)"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Generate the token and send it in a cookie on login."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// ...\nimport { getCsrfToken, setCsrfCookie } from '@foal/csrf';\n// ...\nclass AuthController {\n    // ...\n\n    @Post('/login')\n    async login() {\n      // ...\n      const session = await this.store.createAndSaveSessionFromUser(\n        user,\n        // Generate the CSRF token and keep it in the session\n        { csrfToken: true }\n      );\n\n      const response = new HttpResponseOK();\n      setSessionCookie(response, session.getToken());\n      // Retreive the token from the session\n      // and send it in a cookie\n      setCsrfCookie(response, await getCsrfToken(session));\n      return response;\n    }\n  }\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Your frontend application then must retreive the token from the cookie named ",(0,t.jsx)(n.code,{children:"csrfToken"})," and send it on each subsequent POST, PUT, PATCH or DELETE request (for example using the header ",(0,t.jsx)(n.code,{children:"CSRF-Token"}),")."]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Check the CSRF token on each subsequent POST, PUT, PATCH and DELETE request."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { HttpResponseCreated, Post, TokenRequired } from '@foal/core';\nimport { TypeORMStore } from '@foal/typeorm';\nimport { CsrfTokenRequired } from '@foal/csrf';\n\n@TokenRequired({\n  cookie: true,\n  store: TypeORMStore, // Or another store: RedisStore, MongoDBStore, etc.\n})\n@CsrfTokenRequired()\nclass ApiController {\n  @Post('/products')\n  createProduct() {\n    return new HttpResponseCreated();\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h4,{id:"stateless-csrf-token-double-submit-cookie-technique-1",children:"Stateless CSRF token (Double Submit Cookie Technique)"}),"\n",(0,t.jsx)(n.p,{children:"If you want to use stateless CSRF tokens, you need to provide a base64-encoded secret in either:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"a configuration file"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Example with config/default.yml"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"settings:\n  csrf:\n    secret: xxx\n    cookie:\n      maxAge: 31536000 # One year\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["or in a ",(0,t.jsx)(n.code,{children:".env"})," file or in an environment variable:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"SETTINGS_CSRF_SECRET=xxx\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You can generate such a secret with the CLI command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"foal createsecret\n"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Generate a token and send it in a cookie on login."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { HttpResponseOK, Post } from '@foal/core';\nimport { getCsrfToken, setCsrfCookie } from '@foal/csrf';\n\nclass AuthController {\n  @Post('/login')\n  async login() {\n    const response = new HttpResponseOK();\n    setCsrfCookie(response, await getCsrfToken());\n    return response;\n  }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Your frontend application then must retreive the token from the cookie named ",(0,t.jsx)(n.code,{children:"csrfToken"})," and send it on each subsequent POST, PUT, PATCH or DELETE request (for example using the header ",(0,t.jsx)(n.code,{children:"CSRF-Token"}),")."]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Check the CSRF token on each subsequent POST, PUT, PATCH and DELETE request."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { HttpResponseCreated, Post } from '@foal/core';\nimport { CsrfTokenRequired } from '@foal/csrf';\n\n@CsrfTokenRequired({ doubleSubmitCookie: true })\nclass ApiController {\n  @Post('/products')\n  createProduct() {\n    return new HttpResponseCreated();\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"disable-the-csrf-protection",children:"Disable the CSRF protection"}),"\n",(0,t.jsxs)(n.p,{children:["The CSRF hook ",(0,t.jsx)(n.code,{children:"@CsrfTokenRequired"})," can be disabled on a specific environment using the configuration key ",(0,t.jsx)(n.code,{children:"settings.csrf.enabled"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["Example with ",(0,t.jsx)(n.code,{children:"config/test.json"})]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "settings": {\n    "csrf": {\n      "enabled": false\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["Example with ",(0,t.jsx)(n.code,{children:"config/test.yml"})]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"settings:\n  csrf:\n    enabled: false\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Example with environment variable"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"SETTINGS_CSRF_ENABLED=false\n"})}),"\n",(0,t.jsx)(n.h3,{id:"advanced",children:"Advanced"}),"\n",(0,t.jsxs)(n.p,{children:["The directives of the cookie written by ",(0,t.jsx)(n.code,{children:"setCsrfCookie"})," can be override in the configuration."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Example with config/default.yml"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"settings:\n  csrf:\n    cookie:\n      name: my-custom-name\n      domain: example.com\n      path: /foo # default: /\n      sameSite: lax\n      secure: true\n      maxAge: 10000\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var t=s(96540);const o={},r=t.createContext(o);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);