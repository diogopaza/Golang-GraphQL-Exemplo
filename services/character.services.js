const { getDomFromUrl} = require('../utils/dom.utils')
const Character = require('../models/character')

const getCharacterInfos = async(playerName ='') =>{
       
    try{
        if ( playerName.length == 0 )
        throw new Error('Player is required')

        const url = `http://localhost:8000/`
        if ( url.length == 0 )
         throw new Error('Url vazia')
        
        const dom = await getDomFromUrl(url)
    
        const character =new Character(dom)    
            return character.allCharacterInformation
    }catch{
        return new Error('Dados do player invalidos')
    }    
                
}

console.log(getCharacterInfos('hue'))

module.exports = {
    getCharacterInfos
}
