/* Webpack settings for development */
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    port: 3000,
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "My Project",
      template: "./src/index.html"
    })
  ]
};
