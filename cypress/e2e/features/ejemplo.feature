Feature: Example page E2E validations

  Scenario Outline: Validate Cypress Kitchen Sink page sections
    Given I open the example page
    Then I should see the Kitchen Sink page
    And I should see the "<section>" section
    And the current URL should be valid

    Examples:
      | section                |
      | Querying               |
      | Traversal              |
      | Actions                |
      | Window                 |
