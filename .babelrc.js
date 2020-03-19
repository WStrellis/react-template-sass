module.exports = api => {
    const env = api.cache(() => process.env.NODE_ENV)
    console.log(".babelrc.js env: ", env)

    return {
        presets: [
            ["@babel/preset-env", {modules: false, targets: {node: "current"}}],
            "@babel/preset-react",
        ],
        plugins: [
            "react-hot-loader/babel",
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-transform-runtime",
            "@babel/plugin-syntax-dynamic-import",
        ],
        env: {
            test: {
                plugins: ["@babel/plugin-transform-modules-commonjs"],
            },
        },
    }
}
