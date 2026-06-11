Cypress.Commands.add("openHomePage", () => {
  cy.visit("/");
});

Cypress.Commands.add("validateTextIsVisible", (text) => {
  cy.contains(text).should("be.visible");
});