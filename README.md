# React Template

This is folder contains the libraries necessary to begin a basic React application.

It supports both CSS and SASS modules.

### Scripts

| npm run       | Description                                                                                                                                                                                                                                         |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dev           | Starts a webpack-dev-server for development. Opens in default browser. Automatically updates on save.                                                                                                                                               |
| build         | Create a minified production build. Files are output to /public. The complete contents of /public are overwritten each time this script is executed. /public is ignored by git. To inspect the output of the build command open the /public folder. |  |
| build:dev     | Runs the production bundle on your local host.                                                                                                                                                                                                      |  |
| format        | Recursively format all .js and .jsx files in the /src directory.                                                                                                                                                                                    |
| lint          | Run Eslint and report errors found by recursively searching and analyzing all javascript files in the /src directory.                                                                                                                               |
| test          | Run the Jest test suite once.                                                                                                                                                                                                                       |
| test:watch    | Run the Jest test suite in `watch` mode. The test suite will run when a file used in tests is updated.                                                                                                                                              |
| test:coverage | Run the Jest test suite and collect coverage data.                                                                                                                                                                                                  |

### Testing

The Jest library is used for unit and integration tests.

Test files must end with either _.spec.js[x]_ or _.test.js[x]_.

Two setup files are executed when the test commands are ran: _src/setupTestEnv.js_ and _src/setupTestFramework.js_.

SetupTestEnv.js can be used to initialize or import functions, classes, components, variables and other things that can be used in every test file.

SetupTestFramework.js configures the Jest framework itself. This file can be used to extend the functionality of Jest with additional libraries such as @testing-library/jest-dom and make those additional features available globally.

`test:coverage` will analyze the current test coverage and print the results to the console. To save the report in a file edit the "coverageReporter" field in _jest.config.js_.

### Environment Variables

Create a file called '.env' in the root directory. Put your secret variables in this file. It will be ignored by git.
