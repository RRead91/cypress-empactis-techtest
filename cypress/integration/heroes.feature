Feature: Heroes Page
    As a user
    I want to be able to create a new cohort
    So that I can view the data related to my cohort

    Background:
        Given I am on the tour of heroes Heroes page

    Scenario: Create a hero
        Given I enter a name for a new hero
        When I click on Add hero button
        Then I can see the new hero is added to the list

    Scenario: Delete a hero
        When I click on the delete hero button
        Then I can see the hero is removed from the list