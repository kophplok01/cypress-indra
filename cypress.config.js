const { defineConfig } = require("cypress");
const cypressOnFix = require("cypress-on-fix");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const { loadEnvironmentConfig } = require("./cypress/config/load-env");

const environmentConfig = loadEnvironmentConfig(process.env.ENVIRONMENT);

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "reports/mochawesome",
    charts: true,
    reportPageTitle: "Cypress Technical Report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    overwrite: false,
    html: true,
    json: true,
  },

  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
    supportFile: "cypress/support/e2e.js",
    baseUrl: environmentConfig.baseUrl,
    video: false,
    screenshotsFolder: "reports/screenshots",
    videosFolder: "reports/videos",
    env: {
      envName: environmentConfig.envName,
      apiUrl: environmentConfig.apiUrl,
    },

    async setupNodeEvents(on, config) {
      const fixedOn = cypressOnFix(on);

      await addCucumberPreprocessorPlugin(fixedOn, config);

      require("cypress-mochawesome-reporter/plugin")(fixedOn);

      fixedOn(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});