Feature: CORS

  Scenario: Validate default CORS options
    Given I get the default CORS options
    Then the CORS options should allow common HTTP methods
