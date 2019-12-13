/* 
Webpack settings for production env
 */
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Production",
      template: "../src/index.html"
    })
  ]
};
