const express = require('express')
//Importa o GraphQL cria um servidor GRAPHQL + HTTP
const graphqlHTTP = require('express-graphql')
const schema = require('../schema')

module.exports = () =>{
    const router = express()

    router.get('/', (req, res) => res.json({test: 'success'}))
    router.use(
        '/player',
        graphqlHTTP({
          schema,
          graphiql: true,
        }),
      )

    return router
}

  






