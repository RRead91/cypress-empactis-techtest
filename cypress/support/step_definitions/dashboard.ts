import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import detailsPage from "../page_objects/details.page"
import dashboard from "../page_objects/dashboard.page"

Given(/^I am on the tour of heroes homepage$/, () => {
    dashboard.open()
})

When(/^I select a top hero$/, () => {
    dashboard.selectRandomTopHero()
})

Then(/^I am taken to the heroes page$/, () => {
    detailsPage.assertPage()
})

When(/^I search for (.*)$/, (hero) => {
    dashboard.searchHero(hero)
})