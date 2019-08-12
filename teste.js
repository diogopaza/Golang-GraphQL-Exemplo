const jsdom = require('jsdom')
const {JSDOM} = jsdom

const url = `https://secure.tibia.com/community/?subtopic=characters&name=hue+proliferator`

JSDOM.fromURL(url)
    .then(dom => console.log(dom))

