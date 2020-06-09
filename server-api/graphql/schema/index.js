const { buildSchema } = require("graphql")

module.exports = buildSchema(`
    type Cat {
        _id: ID!
        name: String!
        createdAt: String!
        updatedAt: String!
    }

    type User {
        _id: ID!
        name: String!
        email: String!
        password: String!
        cat: String!
    }

    input CatInput {
        name: String!
    }

    input UserInput {
        name: String!
        email: String!
        password: String!
        cat: String!
    }

    type RootQuery {
        cats: [Cat!]!
        getUser(userId: String!): User!
    }

    type RootMutation {
        createCat(catInput: CatInput): Cat
        createUser(userInput: UserInput): User
}   
    schema {
        query: RootQuery,
        mutation: RootMutation
    }
`)