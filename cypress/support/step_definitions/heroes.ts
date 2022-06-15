import { Given, Then, When } from "cypress-cucumber-preprocessor/steps"
import heroesPage from "../page_objects/heroes.page"

Given(/^I am on the tour of heroes Heroes page$/, () => {
    heroesPage.open()
    heroesPage.navigateToHeroes()
})

Given(/^I enter a name for a new hero$/, () => {
    heroesPage.enterNewHeroName()
})

When(/^I click on Add hero button$/, () => {
    heroesPage.saveNewHero()
})

When(/^I click on the delete hero button$/, () => {
    heroesPage.deleteFirstHero()    
})
 
Then(/^I can see the new hero is added to the list$/, () => {
    heroesPage.heroIsVisible()
})

Then(/^I can see the hero is removed from the list$/, () => {
    heroesPage.heroIsNotVisible()
})
