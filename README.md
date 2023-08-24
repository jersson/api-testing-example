# api-testing-example

![Node.js CI](https://github.com/jersson/api-testing-example/workflows/Node.js%20CI/badge.svg)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=jersson_api-testing-example&metric=alert_status)](https://sonarcloud.io/dashboard?id=jersson_api-testing-example)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=jersson_api-testing-example&metric=coverage)](https://sonarcloud.io/dashboard?id=jersson_api-testing-example)

Cool and simple examples using [jest](https://jestjs.io/) to test a [node](https://nodejs.org/en/) API. The first version of this repo was based on [this post](https://medium.com/@leolewan/writing-a-nodejs-api-fully-tested-with-jest-5d449361c8a7). 

## Summary
  - [what's the project structure?](#whats-the-project-structure)
  - [how to run and test the endpoint](#how-to-run-and-test-the-endpoint)
  - [how to test the code](#how-to-test-the-code)
  - [how to generate the coverage report](#how-to-generate-the-coverage-report)
  - [about the sonarcloud integration](#about-the-sonarcloud-integration)
  - [licensing](#licensing)

## what's the project structure?
```
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
  v18.2.0
```
Run
```
  $ npm start
```

Test the endpoint
```
  $ curl localhost:3000/posts
```
## how to test the code
We're using [Jest](https://jestjs.io/), you can run this npm script:
```
  $ npm run test:summary
  PASS  test/index.test.js
  PASS  test/router.test.js
  PASS  test/controller.test.js
  PASS  test/service.test.js

  Test Suites: 4 passed, 4 total
  Tests:       7 passed, 7 total
  Snapshots:   0 total
  Time:        2.269 s
```
**Tip**: You can also try the `npm test` or `npm run test:verbose` scripts :smile:

## how to generate the coverage report
We're using [istanbul](https://istanbul.js.org/) and it's included with Jest, you can run this npm script:
```
  $ npm run coverage
  PASS  test/index.test.js
  PASS  test/router.test.js
  PASS  test/controller.test.js
  PASS  test/service.test.js

  ---------------|---------|----------|---------|---------|-------------------
  File           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
  ---------------|---------|----------|---------|---------|-------------------
  All files      |   95.83 |      100 |   85.71 |   95.83 |                   
   controller.js |     100 |      100 |     100 |     100 |                   
   index.js      |   83.33 |      100 |       0 |   83.33 | 9                 
   router.js     |     100 |      100 |     100 |     100 |                   
   service.js    |     100 |      100 |     100 |     100 |                   
  ---------------|---------|----------|---------|---------|-------------------

  Test Suites: 4 passed, 4 total
  Tests:       7 passed, 7 total
  Snapshots:   0 total
  Time:        1.459 s
```

Also you can check the results in the generated `coverage\lcov-report\index.html` file

## about the sonarcloud integration
This repo is linked to a [project in sonarcloud](https://sonarcloud.io/dashboard?id=jersson_api-testing-example) and that services it's free only if your source code is written with non commercial goals. You can check this [document](https://sonarcloud.io/documentation/integrations/github/) and this [GitHub Action](https://github.com/marketplace/actions/sonarcloud-scan) information if you want to know more about the integration.

## about the git hook scripts
We're using [Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) scripts using [husky](https://typicode.github.io/husky/#/), what a nice tool!

So, anytime you'll make a commit you'll see something like that
```
  $ git commit -am 'feat: add basic husky support'
  > jest test/**.test.js

  PASS  test/index.test.js
  PASS  test/service.test.js
  PASS  test/router.test.js
  PASS  test/controller.test.js

  Test Suites: 4 passed, 4 total
  Tests:       7 passed, 7 total
  Snapshots:   0 total
  Time:        1.812 s
  Ran all test suites matching /test\/controller.test.js|test\/index.test.js|test\/router.test.js|test\/service.test.js/i.
  [master 508a8eb] feat: add basic husky support
  4 files changed, 16 insertions(+), 3 deletions(-)
  create mode 100644 .husky/.gitignore
  create mode 100755 .husky/pre-commit
```

## licensing
[MIT](./LICENSE)