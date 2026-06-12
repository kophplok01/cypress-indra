const { Given, Then } = require("@badeball/cypress-cucumber-preprocessor");
const ejemploPage = require("../../pages/ejemploPage");

Given("I open the example page", () => {
  ejemploPage.visit();
});

Then("I should see the Kitchen Sink page", () => {
  ejemploPage.validateKitchenSinkTitleIsVisible();
});

Then('I should see the {string} section', (section) => {
  ejemploPage.validateSectionIsVisible(section);
});

Then("the current URL should be valid", () => {
  ejemploPage.validateCurrentUrl();
});

Then("I should validate the page using testing library", () => {
  ejemploPage.validatePageUsingTestingLibrary();
});