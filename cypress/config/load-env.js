const fs = require("fs-extra");
const path = require("path");

function loadEnvironmentConfig(environmentName) {
  const selectedEnvironment = environmentName || "dev";

  const environmentFilePath = path.resolve(
    __dirname,
    "..",
    "config",
    "environments",
    `${selectedEnvironment}.json`
  );

  if (!fs.existsSync(environmentFilePath)) {
    throw new Error(
      `Environment file not found for '${selectedEnvironment}': ${environmentFilePath}`
    );
  }

  return fs.readJsonSync(environmentFilePath);
}

module.exports = {
  loadEnvironmentConfig,
};