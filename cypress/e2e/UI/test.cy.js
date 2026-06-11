describe("Base Cypress test", () => {
  it("should open the base page", () => {
    cy.visit("/");
    cy.contains("Kitchen Sink").should("be.visible");
  });
});