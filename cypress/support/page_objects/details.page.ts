import faker from "faker"
import basePage from "./base.page"

const SELECTORS = {
    HERO: {
        NAME: '#hero-name',
    }
}

class detailsPage extends basePage {
    get editName() {
        return cy.get(SELECTORS.HERO.NAME)
    }

    assertPage() {
        this.editName.should('be.visible')
    }

    changeHeroName() {
        this.editName.clear()
        this.editName.type(faker.random.word())
    }
}

export default new detailsPage()