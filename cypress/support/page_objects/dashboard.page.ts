import faker from "faker"
import context from "../context/context"

const SELECTORS = {
    DASHBOARD: '[routerlink="/dashboard"]',
    HEROES: '[routerlink="/heroes"]',
    TOP_HEROES: ".heroes-menu",
    SEARCH_HEROES: "#search-box",
    SEARCH_RESULT: "li > a",
    MESSAGE_LOG: {
        CLEAR: ".clear",
        LIST: ".app-messages"
    }
}

class homePage {
    get dashboard() {
        return cy.get(SELECTORS.DASHBOARD)
    }

    get heroes() {
        return cy.get(SELECTORS.HEROES)
    }

    get topHeroes() {
        return cy.get(SELECTORS.TOP_HEROES)
    }

    get searchHeroes() {
        return cy.get(SELECTORS.SEARCH_HEROES)
    }

    get searchResult() {
        return cy.get(SELECTORS.SEARCH_RESULT)
    }

    get clearMessages() {
        return cy.get(SELECTORS.MESSAGE_LOG.CLEAR)
    }

    get MessageList() {
        return cy.get(SELECTORS.MESSAGE_LOG.LIST)
    }

    open() {
        cy.visit("")
    }

    navigateToDashboard() {
        this.dashboard.click()
    }

    navigateToHeroes() {
        this.heroes.click()
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
}

export default new homePage()