const { Given, Then } = require("@badeball/cypress-cucumber-preprocessor");
const Ajv = require("ajv");
const postSchema = require("../../schemas/postSchema.json");

let apiResponse;

Given("I request a post by id", () => {
  cy.api("GET", `${Cypress.env("apiUrl")}/posts/1`).then((response) => {
    apiResponse = response;

    cy.addApiTestContext(
      "GET post response",
      {
        status: apiResponse.status,
        body: apiResponse.body,
      },
      true
    );
  });
});

Then("the response status should be {int}", (statusCode) => {
  expect(apiResponse.status).to.eq(statusCode);

  cy.addApiTestContext(
    "Response status validation",
    {
      expectedStatus: statusCode,
      actualStatus: apiResponse.status,
    }
  );
});

Then("the response body should match the post schema", () => {
  const ajv = new Ajv();
  const validate = ajv.compile(postSchema);
  const isValid = validate(apiResponse.body);

  cy.addApiTestContext(
    "Schema validation result",
    {
      isValid,
      errors: validate.errors,
    }
  );

  expect(validate.errors, JSON.stringify(validate.errors, null, 2)).to.be.null;
  expect(isValid).to.eq(true);
});