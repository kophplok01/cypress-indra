Feature: Backend API validations

  Scenario: Validate post response schema
    Given I request a post by id
    Then the response status should be 200
    And the response body should match the post schema

  Scenario: Create a post using faker data
    Given I create a post with faker data
    Then the response status should be 200
    And the created post response should contain the faker data