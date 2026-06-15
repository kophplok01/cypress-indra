const fs = require("fs-extra");
const path = require("path");
const reporter = require("multiple-cucumber-html-reporter");

const jsonDir = path.resolve("reports/cucumber-json");
const reportPath = path.resolve("reports/cucumber-html");

if (!fs.existsSync(jsonDir)) {
  console.error(`Cucumber JSON folder was not found: ${jsonDir}`);
  process.exit(1);
}

const jsonFiles = fs
  .readdirSync(jsonDir)
  .filter((file) => file.endsWith(".json"));

if (jsonFiles.length === 0) {
  console.error(`No Cucumber JSON files were found in: ${jsonDir}`);
  process.exit(1);
}

fs.ensureDirSync(reportPath);

reporter.generate({
  jsonDir,
  reportPath,
  reportName: "Cypress Cucumber Visual Report",
  pageTitle: "Cypress Cucumber Report",
  displayDuration: true,
  displayReportTime: true,
  hideMetadata: false,
  metadata: {
    browser: {
      name: "chrome",
      version: "latest",
    },
    device: "Local machine",
    platform: {
      name: process.platform,
      version: process.version,
    },
  },
  customData: {
    title: "Execution Info",
    data: [
      {
        label: "Project",
        value: "Cypress Cucumber Framework",
      },
      {
        label: "Environment",
        value: process.env.ENVIRONMENT || "dev",
      },
      {
        label: "Execution Date",
        value: new Date().toLocaleString(),
      },
    ],
  },
});

console.log(`Cucumber HTML report generated successfully: ${reportPath}`);