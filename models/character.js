const {getTextContent} = require('../utils/dom.utils')

class Character{

    constructor(dom){
        this.dom = dom
        
    }

    get name(){
        
        const playerNameSelector = 'body > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(2)'
        const name = getTextContent(this.dom,playerNameSelector)
        return name
    }
    get sex() {
        const playerNameSelector = `body > table:nth-child(1) > tbody > tr:nth-child(4) > td:nth-child(2)`
        const sex = getTextContent(this.dom,playerNameSelector)
        return sex
      }
      get vocation() {
        const playerNameSelector = `body > table:nth-child(1) > tbody > tr:nth-child(5) > td:nth-child(2)`
        const vocation = getTextContent(this.dom,playerNameSelector)
        return vocation
      }
      get level() {
        const playerNameSelector = `body > table:nth-child(1) > tbody > tr:nth-child(6) > td:nth-child(2)`
        const level = getTextContent(this.dom,playerNameSelector)
        return level
      }
      get achievementPoints() {
        const playerNameSelector = `body > table:nth-child(1) > tbody > tr:nth-child(7) > td:nth-child(2)`
        const points = getTextContent(this.dom,playerNameSelector)
        return points
      }
      get world() {
        const playerNameSelector = `body > table:nth-child(1) > tbody > tr:nth-child(8) > td:nth-child(2)`
        const world = getTextContent(this.dom,playerNameSelector)
        return world
      }
      get residence() {
        const playerNameSelector = `body > table:nth-child(1) > tbody > tr:nth-child(9) > td:nth-child(2)`
        const residence = getTextContent(this.dom,playerNameSelector)
        return residence
      }
      get lastLogin() {
        const playerNameSelector = `body > table:nth-child(1) > tbody > tr:nth-child(10) > td:nth-child(2)`
        const lastlogin = getTextContent(this.dom,playerNameSelector)
        return lastlogin
      }
      get accountStatus() {
        const playerNameSelector = `body > table:nth-child(1) > tbody > tr:nth-child(11) > td:nth-child(2)`
        const status = getTextContent(this.dom,playerNameSelector)
        return status
      }

      get allCharacterInformation(){
        return {
          name: this.name,
          sex: this.sex,
          vocation: this.vocation,
          level: this.level,
          achievementPoints: this.achievementPoints,
          world: this.world,
          residence: this.residence,
          lastlogin: this.lastLogin,
          accountStatus: this.accountStatus,
        }
      }
    
    

}

module.exports = Character