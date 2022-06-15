import faker from "faker"
import context from "../context/context"

const SELECTORS = {
    DASHBOARD: '[routerlink="/dashboard"]',
    HEROES: '[routerlink="/heroes"]',
    MESSAGE_LOG: {
        CLEAR: ".clear",
        ENTRIES: "app-messages > div" //This needs a better identifier
    }
}

export default class PageBase {
    get dashboard() {
        return cy.get(SELECTORS.DASHBOARD)
    }

    get heroes() {
        return cy.get(SELECTORS.HEROES)
    }

    get clearMessages() {
        return cy.get(SELECTORS.MESSAGE_LOG.CLEAR)
    }

    get MessageList() {
        return cy.get(SELECTORS.MESSAGE_LOG.ENTRIES)
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
}