# React Template

This is folder contains the libraries necessary to begin a basic React application.

It supports both CSS and SASS modules.

### Scripts

| npm run    | Description                                                                                                                                                                                                                                         |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dev        | Starts a webpack-dev-server for development. Opens in default browser. Automatically updates on save.                                                                                                                                               |
| build      | Create a minified production build. Files are output to /public. The complete contents of /public are overwritten each time this script is executed. /public is ignored by git. To inspect the output of the build command open the /public folder. |  |
| build:dev  | Runs the production bundle on your local host.                                                                                                                                                                                                      |  |
| format     | Recursively format all .js and .jsx files in the /src directory.                                                                                                                                                                                    |
| lint       | Run Eslint and report errors found by recursively searching and analyzing all javascript files in the /src directory.                                                                                                                               |
| test       | Run the Jest test suite once.                                                                                                                                                                                                                       |
| test:watch | Run the Jest test suite in `watch` mode. The test suite will run when a file used in tests is updated.                                                                                                                                              |

### Environment Variables

Store environment variables in '.env'

### For VS Code

Install the [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension. Add the following configuration parameters to VS Code settings.json:

```
{
  "prettier.requireConfig": true
}
```
