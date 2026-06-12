import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import { createUserData, createPostData } from "../../utils/testDataFactory";
import { buildWelcomeMessage } from "../../utils/templateUtils";

let userData;
let welcomeMessage;
let postRequestBody;

Given("I generate synthetic user data", () => {
  userData = createUserData();
});

Then("the generated user data should be valid", () => {
  expect(userData.id).to.be.a("string").and.not.be.empty;
  expect(userData.firstName).to.be.a("string").and.not.be.empty;
  expect(userData.lastName).to.be.a("string").and.not.be.empty;
  expect(userData.fullName).to.include(userData.firstName);
  expect(userData.fullName).to.include(userData.lastName);
  expect(userData.email).to.include("@");
  expect(userData.createdAt).to.match(/^\d{4}-\d{2}-\d{2}$/);
});

Then("I should be able to build a welcome message", () => {
  welcomeMessage = buildWelcomeMessage(userData);

  expect(welcomeMessage).to.include(userData.fullName);
  expect(welcomeMessage).to.include(userData.id);
});

Given("I create a post with faker data", () => {
  postRequestBody = createPostData();

  cy.api({
    method: "POST",
    url: `${Cypress.env("apiUrl")}/posts`,
    body: postRequestBody,
  }).then((response) => {
    apiResponse = response;
  });
});

Then("the created post response should contain the faker data", () => {
  expect(apiResponse.body).to.have.property("id");
  expect(apiResponse.body.title).to.eq(postRequestBody.title);
  expect(apiResponse.body.body).to.eq(postRequestBody.body);
  expect(apiResponse.body.userId).to.eq(postRequestBody.userId);
});