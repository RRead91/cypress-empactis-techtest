Feature: Create Cohort
    As a user
    I want to be able to create a new cohort
    So that I can view the data related to my cohort

    Background:
        Given I am on the tour of heroes homepage

    Scenario: Users can select a top hero
        When I select a top hero
        Then I am taken to the heroes page

    Scenario Outline: Users can search for a hero
        When I search for <hero>
        Then I am taken to the heroes page

        Examples:
            | hero     |
            | Dr. Nice |
            | Magneta  |
            | Magma    |

    Scenario: Users can clear messages
        Given I select a top hero
        And I navigate to the Dashboard page
        And 