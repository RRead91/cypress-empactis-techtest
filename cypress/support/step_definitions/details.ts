import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import dashboardPage from "../page_objects/dashboard.page"
import detailsPage from "../page_objects/details.page"

Given(/^I change the name$/, () => {
    detailsPage.changeHeroName()
})

When(/^I click on Save$/, () => {
    detailsPage.SaveChanges()
    dashboardPage.assertPage()
})

Then(/^I can see the hero's name has been changed$/, () => {
    detailsPage.assertName()
})
