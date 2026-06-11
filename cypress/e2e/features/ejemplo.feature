Feature: Example page
Feature: Example page E2E validations

  Scenario: Validate example page content using reusable framework structure
    Given I open the example page
    Then I should see the Kitchen Sink page
    And I should see the Commands section
    And the current URL should be valid
    And I should validate the page using testing library
