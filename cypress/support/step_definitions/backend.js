const { Given, Then } = require("@badeball/cypress-cucumber-preprocessor");
const Ajv = require("ajv");
const postSchema = require("../../schemas/postSchema.json");

let apiResponse;

Given("I request a post by id", () => {
  cy.api("GET", "https://jsonplaceholder.typicode.com/posts/1").then((response) => {
    apiResponse = response;
  });
});

Then("the response status should be 200", () => {
  expect(apiResponse.status).to.eq(200);
});

Then("the response body should match the post schema", () => {
  const ajv = new Ajv();
  const validate = ajv.compile(postSchema);
  const isValid = validate(apiResponse.body);

  expect(validate.errors, JSON.stringify(validate.errors, null, 2)).to.be.null;
  expect(isValid).to.eq(true);
});