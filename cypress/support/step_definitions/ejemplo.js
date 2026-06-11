const { Given, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("I open the example page", () => {
  cy.visit("/");
});

Then("I should see the Kitchen Sink page", () => {
  cy.contains("Kitchen Sink").should("be.visible");
});