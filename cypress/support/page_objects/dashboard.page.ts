import faker from "faker"
import context from "../context/context"
import basePage from "./base.page"

const SELECTORS = {
    TOP_HEROES: ".heroes-menu",
    SEARCH_HEROES: "#search-box",
    SEARCH_RESULT: "li > a"
}

class homePage extends basePage {
    get topHeroes() {
        return cy.get(SELECTORS.TOP_HEROES)
    }

    get searchHeroes() {
        return cy.get(SELECTORS.SEARCH_HEROES)
    }

    get searchResult() {
        return cy.get(SELECTORS.SEARCH_RESULT)
    }

    selectRandomTopHero() {
        let rng = faker.datatype.number({'min':0, 'max': 3})
        this.topHeroes.should('be.visible')
        let randomHero = this.topHeroes.children().eq(rng)
        // let randomHero = this.topHeroes.eq()
        context.sethero(randomHero.invoke('text').toString())
        this.topHeroes.children().eq(rng).click()
    }

    searchHero(hero: string) {
        this.searchHeroes.type(hero)
        this.searchResult.click()
    }

    clearLogMessages() {
        this.topHeroes.should('be.visible')
        this.clearMessages.click()
    }

    assertLogMessages(state: boolean) {
        if(state === true) {
            //If true, messages are visible
            this.MessageList.children().should('have.length.above', 0)
        } else {
             //If false, no messages are visible
            this.MessageList.should('not.exist')
        }
    }
}

export default new homePage()