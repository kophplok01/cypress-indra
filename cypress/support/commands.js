Cypress.Commands.add("openHomePage", () => {
  cy.visit("/");
});

Cypress.Commands.add("validateTextIsVisible", (text) => {
  cy.contains(text).should("be.visible");
});

Cypress.Commands.add("validateUrlContains", (expectedText) => {
  cy.url().should("include", expectedText);
});

Cypress.Commands.add("waitUntilTextIsVisible", (text) => {
  cy.waitUntil(() =>
    cy.contains(text).then(($element) => $element.is(":visible"))
  );
});