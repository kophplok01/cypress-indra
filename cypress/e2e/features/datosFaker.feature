Feature: Synthetic data utilities

  Scenario: Generate valid synthetic user data
    Given I generate synthetic user data
    Then the generated user data should be valid
    And I should be able to build a welcome message
