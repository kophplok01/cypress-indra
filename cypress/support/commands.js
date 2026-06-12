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

Cypress.Commands.add("addApiTestContext", (title, value = null, takeScreenshot = false) => {
  cy.addTestContext({
    title,
    value,
  });

  if (takeScreenshot) {
    const screenshotName = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    cy.screenshot(`api/${screenshotName}`, {
      capture: "runner",
    });
  }
});

Cypress.Commands.add("addUiTestContext", (title, value = null, takeScreenshot = false) => {
  cy.addTestContext({
    title,
    value,
  });

  if (takeScreenshot) {
    const screenshotName = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    cy.screenshot(`ui/${screenshotName}`, {
      capture: "viewport",
    });
  }
});