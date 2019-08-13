const jsdom = require('jsdom')
const { JSDOM } = jsdom
const { getTextContent,getDomFromUrl} = require('../utils/dom.utils')

const getCharacterInfos = async (playerName ='') =>{
    if ( playerName.length == 0 )
        throw new Error('Player is required')

    const url = `http://localhost:8000/`
    if ( url.length == 0 )
         throw new Error('Url vazia')
        
    const dom = await getDomFromUrl(url)

    const playerNameSelector = 'body > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(2)'
    player = getTextContent(dom,playerNameSelector)
    console.log(player)
             
}

getCharacterInfos('hue proliferator')

module.exports = {
    getCharacterInfos
}