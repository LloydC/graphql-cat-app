const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    cats: [Cat!]!
  }
  type Cat {
    id: ID!
    name: String!
  }
  type Mutation {
    createCat(name: String!): Cat!
  }
`;

module.exports = {typeDefs}; 