const express = require('express')
//Importa o GraphQL cria um servidor GRAPHQL + HTTP
const graphqlHTTP = require('express-graphql')
const schema = require('../schema')
const {getCharacterInfos} = require('../services/character.services')

const router = express()

  router.set('view engine','pug')

  router.get('/',(req,res) =>{
    res.render('index')

  })
  router.get('/teste',(req,res) =>{
     console.log(getCharacterInfos('hue'))
     res.send('ok')

  })

module.exports = () =>{  

  router.use(
    '/player',
     graphqlHTTP({
     formatError: error => ({message: error.message}),       
     schema,
     graphiql: true,
     }),
  )

  return router
}

  






