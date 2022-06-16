Feature: Heroes Page
    As a user
    I want to be able to create a new cohort
    So that I can view the data related to my cohort

    Background:
        Given I am on the tour of heroes dashboard
          And I select a top hero

    Scenario: Change hero name
        When I change the name
        Then I can see the hero's name has been changed
        When I click on Save
         And I navigate to the Heroes page
        Then I can see the new hero is added to the list
