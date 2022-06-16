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
        NAME: 'a',//No ideal selection method here, currently using the number selector to find the parent
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

    get heroBadge() {
        return cy.get(SELECTORS.HERO_LIST.NUMBER)
    }

    get heroName() {
        return cy.get(SELECTORS.HERO_LIST.NAME)
    }

    get heroDelete() {
        return cy.get(SELECTORS.HERO_LIST.DELETE)
    }

    getHeroById(id: number) {
        return this.heroBadge.filter(':contains.(' + id + ')').parent()
    }

    getHeroByName(name: string) {
        return this.heroName.filter(':contains.(' + name + ')').parent()
    }

    enterNewHeroName(){
        let name = "Captain " + faker.name.lastName()
        context.setHero(name)
        this.newHeroNameField.type(name)
    }

    saveNewHero() {
        this.saveNewHeroButton.click()
    }

    deleteFirstHero() {
        this.heroDelete.should('be.visible')
        this.heroName.eq(2).parent().children().eq(0).invoke('text').then((name) => {context.setHero(name)}) //This could use a more direct selector!
        this.heroDelete.first().click()
    }

    heroIsVisible() {
        cy.wait(1000) //NOT IDEAL!
        this.heroName.filter(':contains(' + context.getHero() + ')').should('be.visible')
    }

    heroIsNotVisible() {
        cy.wait(1000) //NOT IDEAL!
        this.heroName.filter(':contains(' + context.getHero() + ')').should('not.exist')
    }
}

export default new heroPage()