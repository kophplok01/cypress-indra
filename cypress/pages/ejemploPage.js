class EjemploPage {
  visit() {
    cy.openHomePage();
  }

  validateKitchenSinkTitleIsVisible() {
    cy.validateTextIsVisible("Kitchen Sink");
  }

  validateCommandsSectionIsVisible() {
    cy.validateTextIsVisible("Commands");
  }

    validateSectionIsVisible(section) {
        cy.get("a:visible")
         .contains(section)
         .should("be.visible");
    }

  validateCurrentUrl() {
    cy.validateUrlContains("example.cypress.io");
  }

  validatePageUsingTestingLibrary() {
    cy.findByText("Kitchen Sink").should("be.visible");
  }
}

module.exports = new EjemploPage();