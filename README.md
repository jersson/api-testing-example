# api-testing-example

Cool examples using [jest](https://jestjs.io/) to test a [node](https://nodejs.org/en/) api

This repo is based on [this reference](https://medium.com/@leolewan/writing-a-nodejs-api-fully-tested-with-jest-5d449361c8a7). 

## Summary
  - [what's the project structure?](#whats-the-project-structure)
  - [how to run and test the endpoint](#how-to-run-and-test-the-endpoint)
  - [how to test the code](#how-to-test-the-code)
  - [licensing](#licensing)

## what's the project structure?
```bash
  .
  ├── LICENSE
  ├── README.md
  ├── package.json
  ├── package-lock.json
  ├── src
  │   ├── controller.js
  │   ├── index.js
  │   ├── router.js
  │   └── service.js
  └── test
      ├── controller.test.js
      ├── index.test.js
      ├── router.test.js
      └── service.test.js
```

## how to run and test the endpoint
Prerequisites
```
$ node --version
v12.18.2
```
Run
```bash
  $ npm start
```

Test
```
  $ curl localhost:3000/posts
```
## how to test the code
```
  $ npm test
  PASS  test/index.test.js
  PASS  test/router.test.js
  PASS  test/controller.test.js
  PASS  test/service.test.js

  Test Suites: 4 passed, 4 total
  Tests:       7 passed, 7 total
  Snapshots:   0 total
  Time:        2.269 s
```

## licensing
[MIT](./LICENSE)