const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const featuresRoot = path.join(process.cwd(), "cypress", "e2e");

function findFeatureFiles(directory) {
  const files = [];

  if (!fs.existsSync(directory)) {
    return files;
  }

  const items = fs.readdirSync(directory, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(directory, item.name);

    if (item.isDirectory()) {
      files.push(...findFeatureFiles(fullPath));
    }

    if (item.isFile() && item.name.endsWith(".feature")) {
      files.push(fullPath);
    }
  }

  return files;
}

const featureFiles = findFeatureFiles(featuresRoot);

if (featureFiles.length === 0) {
  console.error("No .feature files were found.");
  process.exit(1);
}

console.log(`Found ${featureFiles.length} .feature file(s).`);

for (const featureFile of featureFiles) {
  console.log(`Validating: ${featureFile}`);

  const result = spawnSync(
    "npx",
    ["@cucumber/gherkin-utils", "format", featureFile],
    {
      stdio: "inherit",
      shell: true,
    }
  );

  if (result.status !== 0) {
    console.error(`Gherkin validation failed for: ${featureFile}`);
    process.exit(result.status);
  }
}

console.log("Gherkin validation completed successfully.");