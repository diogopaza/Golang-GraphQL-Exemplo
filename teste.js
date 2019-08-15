const app = require('express')()
const jsdom = require('jsdom')
const {JSDOM} = jsdom
const { getTextContent,getDomFromUrl }   = require('./utils/dom.utils')
const Character = require('./models/character')

    

    new Promise(async (resolve,reject) =>{

        try{
            const url = `http://localhost:8000/`
            const dom = await getDomFromUrl(url)
            character = new Character(dom)
           
            resolve( console.log(character))
        }catch{
            reject(new Error('Dados do player invalidos'))
        }
        
    })
    
    
                 
       

var verifyGetTextContent = (selector) => {



}


