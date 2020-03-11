const webpackMerge = require("webpack-merge")
const commonConfig = require("./webpack.common.js")
const webpack = require("webpack")
const dotenv = require("dotenv")
const path = require("path")
const configEnvKeys = require("./env_variables.config.js")

module.exports = env => {
    const isDevelopment = env === "prod" ? false : true
    // environment specific settings
    const envConfig = require(`./webpack.${env.env}.js`)
    // prepare environment variables
    const envKeys = configEnvKeys(dotenv)
    console.log("Process.env keys available to client:", envKeys)
    // merge webpack configs based on current env
    const result = webpackMerge(
        commonConfig(isDevelopment, path, webpack, envKeys),
        envConfig(webpack),
    )
    return result
}
