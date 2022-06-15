import { Given } from "cypress-cucumber-preprocessor/steps"
import dashboardPage from "../page_objects/dashboard.page"
import heroesPage from "../page_objects/heroes.page"

Given(/^I navigate to the Dashboard page$/, () => {
    dashboardPage.navigateToDashboard()
})

Given(/^I navigate to the Heroes page$/, () => {
    heroesPage.navigateToHeroes()
})
