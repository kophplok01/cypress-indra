const { Given, Then } = require("@badeball/cypress-cucumber-preprocessor");
const ejemploPage = require("../../pages/ejemploPage");

Given("I open the example page", () => {
  ejemploPage.visit();

  cy.addUiTestContext(
    "Example page opened",
    {
      page: "Cypress Kitchen Sink",
      url: Cypress.config("baseUrl"),
    },
    true
  );
});

Then("I should see the Kitchen Sink page", () => {
  ejemploPage.validateKitchenSinkTitleIsVisible();

  cy.addUiTestContext(
    "Kitchen Sink title validation",
    {
      expectedTitle: "Kitchen Sink",
      result: "Title is visible",
    },
    false
  );
});

Then('I should see the {string} section', (section) => {
  ejemploPage.validateSectionIsVisible(section);

  cy.addUiTestContext(
    "Section visibility validation",
    {
      section,
      result: "Section is visible",
    },
    true
  );
});

Then("the current URL should be valid", () => {
  ejemploPage.validateCurrentUrl();

  cy.url().then((currentUrl) => {
    cy.addUiTestContext(
      "Current URL validation",
      {
        currentUrl,
        expectedValue: "example.cypress.io",
      },
      false
    );
  });
});

Then("I should validate the page using testing library", () => {
  ejemploPage.validatePageUsingTestingLibrary();

  cy.addUiTestContext(
    "Testing Library validation",
    {
      expectedText: "Kitchen Sink",
      result: "Text found using Testing Library",
    },
    true
  );
});