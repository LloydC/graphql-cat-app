require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const graphQlHTTP = require("express-graphql") // middleware to
const graphqlSchema = require("./graphql/schema/index")
const graphqlResolvers = require("./graphql/resolvers/index")

const app = express()

app.use(cors())

app.use('/graphql', graphQlHTTP({
  schema: graphqlSchema,
  rootValue: graphqlResolvers,
  graphiql: true
}))
  
mongoose.connect('mongodb://localhost:27017/catapp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    app.listen(8000, () =>
    console.log(`🚀 Server ready at http://localhost:8000`)
  );
})
    