const { Given, Then } = require("@badeball/cypress-cucumber-preprocessor");
const { getDefaultCorsOptions } = require("../../utils/corsHelper");

let corsOptions;

Given("I get the default CORS options", () => {
  corsOptions = getDefaultCorsOptions();
});

Then("the CORS options should allow common HTTP methods", () => {
  expect(corsOptions.origin).to.eq("*");
  expect(corsOptions.methods).to.include("GET");
  expect(corsOptions.methods).to.include("POST");
  expect(corsOptions.methods).to.include("PUT");
  expect(corsOptions.methods).to.include("PATCH");
  expect(corsOptions.methods).to.include("DELETE");
  expect(corsOptions.methods).to.include("OPTIONS");
  expect(corsOptions.allowedHeaders).to.include("Content-Type");
  expect(corsOptions.allowedHeaders).to.include("Authorization");
});