Feature: Backend API validations

  Scenario: Validate post response schema
    Given I request a post by id
    Then the response status should be 200
    And the response body should match the post schema
