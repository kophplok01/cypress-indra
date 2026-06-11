const { defineConfig } = require("cypress");
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
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});
