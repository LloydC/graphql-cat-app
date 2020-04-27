import React, {useState} from 'react';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag'
import { ApolloProvider, ApolloConsumer} from 'react-apollo'

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
})

const catQuery = (client) => {
  client
  .query({
    query: gql `
    {
      cats {
        name
      }
    }
    `
  }).then(result => console.log(result.data))
  .catch(e => console.error(e))
}

//Need to fix this
// const createCat = (client, $name)=>{
//   client
//   .mutate({
//     mutation: gql `mutation createCat($name: String!) {
//       id
//       name
//     }`
//   })
//   .then(result => console.log(result))
//   .catch(e => console.error(e))
// }


function App() {
  const [catname, setCatname] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // createCat(client, catname)
  }

  return (
   <ApolloProvider client={client}>
     Cat App
     <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={catname} onChange={(e)=>{setCatname(e.target.value)}}/>
       <button type="submit">Add Cat</button>
     </form>
     <ApolloConsumer>
       {catQuery}
     </ApolloConsumer>
   </ApolloProvider>
  );
}

export default App;