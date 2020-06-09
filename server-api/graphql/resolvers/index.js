const userResolver = require("./user")
const catResolver = require("./cat")

const rootResolver = {
    ...userResolver,
    ...catResolver
}

module.exports = rootResolver;