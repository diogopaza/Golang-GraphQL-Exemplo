const app = require('express')()
const jsdom = require('jsdom')
const {JSDOM} = jsdom
const   { getTextContent,getDomFromUrl }   = require('./utils/dom.utils')

app.set('view engine','pug')

app.get('/',(req,res) =>{
    res.render('index')

})

app.get('/scraping',(req,res) =>{
    
    const url = `http://localhost:8000/`
    const dom = getDomFromUrl(url)
    dom.then(dom => {        
            const playerNameSelector = 'body > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(2)'
            const player = getTextContent(dom, playerNameSelector)
            console.log('Dados: ', player)       
    })
    .then(() =>{
       res.write("<h1>Scraping</h1>")
    })
})


app.listen("8000", function(){
    console.log("rodando")

})


