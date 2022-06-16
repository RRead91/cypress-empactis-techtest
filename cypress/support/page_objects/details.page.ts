import faker from "faker"
import basePage from "./base.page"
import context from "../context/context"

const SELECTORS = {
    HERO: {
        NAME: 'app-hero-detail > :nth-child(1) > h2',
        CHANGE_NAME: '#hero-name',
        SAVE_CHANGES: 'app-hero-detail > :nth-child(1) > :nth-child(5)'
    }
}

class detailsPage extends basePage {

    get heroName() {
        return cy.get(SELECTORS.HERO.NAME)
    }

    get editName() {
        return cy.get(SELECTORS.HERO.CHANGE_NAME)
    }

    get saveChangesButton() {
        return cy.get(SELECTORS.HERO.SAVE_CHANGES)
    }

    assertPage() {
        this.editName.should('be.visible')
    }

    changeHeroName() {
        const name = faker.random.word()
        context.setHero(name)
        this.editName.clear()
        this.editName.type(name)
    }

    SaveChanges() {
        this.saveChangesButton.click()
    }

    assertName() {
        this.heroName.should('contain.text', context.getHero().toUpperCase())
    }
}

export default new detailsPage()