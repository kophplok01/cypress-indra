class ExamplePage {
  visit() {
    cy.openHomePage();
  }

  validateKitchenSinkTitleIsVisible() {
    cy.validateTextIsVisible("Kitchen Sink");
  }
}

module.exports = new ExamplePage();