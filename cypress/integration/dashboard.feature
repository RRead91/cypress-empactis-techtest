Feature: Dashboard Page
    As a user
    I want to be able to create a new cohort
    So that I can view the data related to my cohort

    Background:
        Given I am on the tour of heroes dashboard

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
        When I navigate to the Dashboard page
        Then I can see there are log messages recorded
        When I clear the log messages
        Then I can see there are no log messages recorded