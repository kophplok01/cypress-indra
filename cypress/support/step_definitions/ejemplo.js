const { Given, Then } = require("@badeball/cypress-cucumber-preprocessor");
const examplePage = require("../../pages/ejemploPage");

Given("I open the example page", () => {
  examplePage.visit();
});

Then("I should see the Kitchen Sink page", () => {
  examplePage.validateKitchenSinkTitleIsVisible();
});