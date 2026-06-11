const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/e2e.js",
    baseUrl: "https://example.cypress.io",
    video: false,
    screenshotsFolder: "reports/screenshots",
    videosFolder: "reports/videos",
  },
});
