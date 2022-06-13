import faker from "faker"

const SELECTORS = {
    HERO: {
        NAME: '#hero-name',
    }
}

class heroPage {
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

export default new heroPage()