import faker from "faker"
import context from "../context/context"

const SELECTORS = {
    HERO: {
        NAME: '#hero-name',
    }
}

class detailsPage {
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