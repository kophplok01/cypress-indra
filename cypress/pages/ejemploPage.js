class ExamplePage {
  visit() {
    cy.visit("/");
  }

  validateKitchenSinkTitleIsVisible() {
    cy.contains("Kitchen Sink").should("be.visible");
  }
}

module.exports = new ExamplePage();