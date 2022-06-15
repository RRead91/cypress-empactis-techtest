import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import detailsPage from "../page_objects/details.page"
import dashboard from "../page_objects/dashboard.page"

Given(/^I am on the tour of heroes dashboard$/, () => {
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

When(/^I clear the log messages$/, () => {
    dashboard.clearLogMessages()
})

Then(/^I can see there are log messages recorded$/, () => {
    dashboard.assertLogMessages(true)
})

Then(/^I can see there are no log messages recorded$/, () => {
    dashboard.assertLogMessages(false)
})
