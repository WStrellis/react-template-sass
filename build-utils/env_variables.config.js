module.exports = dotenv => {
    // get variables from .env if exists
    let fileEnv = dotenv.config().parsed || {}

    //get env variables injected from deployment platforms such as Zeit, Netlify, AWS
    let injectedVars = Object.keys(process.env)
        .filter(key => /^REACT_APP_/i.test(key))
        .reduce((env, key) => {
            env[key] = process.env[key]
            return env
        }, {})

    const combined = {...fileEnv, ...injectedVars}
    return Object.keys(combined).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(combined[next])
        return prev
    }, {})
}
