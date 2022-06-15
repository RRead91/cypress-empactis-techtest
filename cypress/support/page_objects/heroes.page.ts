import faker from "faker"
import basePage from "./base.page"
import context from "../context/context"

const SELECTORS = {
    NEW_HERO: {
        NAME: '#new-hero',
        SAVE: '.add-button'
    },
    HERO_LIST: {
        NUMBER: '.badge',
        NAME: '',//No ideal selection method here, currently using the number selector to find the parent
        DELETE: '.delete'
    }
}

class heroPage extends basePage {
    get newHeroNameField() {
        return cy.get(SELECTORS.NEW_HERO.NAME)
    }

    get saveNewHeroButton() {
        return cy.get(SELECTORS.NEW_HERO.SAVE)
    }

    enterNewHeroName(){
        let name = "Captain " + faker.name.lastName()
        context.sethero(name)
        this.newHeroNameField.type(name)
    }

    saveNewHero() {
        this.saveNewHeroButton.click()
    }

    heroIsVisible() {
        this
    }
}

export default new heroPage()