/* Shared config for all environments */
const path = require("path");

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../", "dist")
  }
};
