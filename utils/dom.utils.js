const jsdom = require('jsdom')
const { JSDOM } = jsdom


const getTextContent =(dom={}, selector='') => {
    if(dom.window == undefined)
        throw new Error('DOM must contains a window property')
    if(selector.length == 0)
        throw new Error('Selector is required')
    
    if ( dom.window.document.querySelector(selector) != null )
        return dom.window.document.querySelector(selector).textContent
    return false    

}

const getDomFromUrl = (url ='') =>{

    if(url.length == 0) throw new Error('URL is required')
    return JSDOM.fromURL(url)
    
}

module.exports ={
    getTextContent,
    getDomFromUrl
}

