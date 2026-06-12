const {
  Before,
  AfterStep,
} = require("@badeball/cypress-cucumber-preprocessor");

Before(function ({ pickle }) {
  cy.addTestContext(`Scenario: ${pickle.name}`);
});

AfterStep(function ({ pickleStep }) {
  cy.addTestContext(`✔ ${pickleStep.text}`);
});