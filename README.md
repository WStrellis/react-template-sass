# React Template

This is folder contains the libraries necessary to begin a basic React application.

It supports both CSS and SASS modules.

### Scripts

| npm run   | Description                                                                                                                                                                                                                                |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| dev       | Starts a webpack-dev-server for development. Opens in default browser. Automatically updates on save.                                                                                                                                      |
| build     | Create a minified production build. Files are output to /dist. The complete contents of /dist are overwritten each time this script is executed. /dist is ignored by git. To inspect the output of the build command open the /dist folder |  |
| build:dev | Runs the production bundle on your local host.                                                                                                                                                                                             |  |
| format    | Recursively format all .js and .jsx files in the /src directory.                                                                                                                                                                           |
| lint      | Run Eslint and report errors found by recursively searching and analyzing all javascript files in the /src directory.                                                                                                                      |

### Environment Variables

Create two files for environment variables: `.env` and `.env.development`.
Use the .env.development file to store secrets for local development.
Use '.env' to test the production build locally.

### For VS Code

Install the [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension. Add the following configuration parameters to VS Code settings.json:

```
{
  "prettier.requireConfig": true
}
```
