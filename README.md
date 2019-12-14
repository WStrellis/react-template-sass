## React Template

This is folder contains the libraries necessary to begin a basic React application.

It is configured for use with SASS modules.

### Scripts

dev - run the react application on your local device. Hot Reloading is enabled.
build - create a minified production build. Files are output to /dist. The comlete contents of /dist are overwritten each time this script is executed.
format - recursively format all .js and .jsx files in the /src directory.
lint - Run Eslint and report errors found by recursively searching analyzing all javascript files in the /src directory.

install the Prettier extension by Esben Peterson for VS Code. Add the following configuration parameters to VS Code settings.json:

```
{
"editor.defaultFormatter":"esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "prettier.requireConfig": true
```
