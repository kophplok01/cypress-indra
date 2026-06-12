const {
  Before,
  AfterStep,
} = require("@badeball/cypress-cucumber-preprocessor");

let stepKeywordById = {};

function collectStepsFromFeature(featureChildren) {
  const steps = [];

  featureChildren.forEach((child) => {
    if (child.scenario && child.scenario.steps) {
      steps.push(...child.scenario.steps);
    }

    if (child.rule && child.rule.children) {
      child.rule.children.forEach((ruleChild) => {
        if (ruleChild.scenario && ruleChild.scenario.steps) {
          steps.push(...ruleChild.scenario.steps);
        }
      });
    }
  });

  return steps;
}

Before(function ({ pickle, gherkinDocument }) {
  stepKeywordById = {};

  const gherkinSteps = collectStepsFromFeature(
    gherkinDocument.feature.children
  );

  gherkinSteps.forEach((step) => {
    stepKeywordById[step.id] = step.keyword.trim();
  });

  cy.addTestContext(`Scenario: ${pickle.name}`);
});

AfterStep(function ({ pickleStep }) {
  const stepId = pickleStep.astNodeIds.find((id) => stepKeywordById[id]);
  const keyword = stepKeywordById[stepId] || "Step";

  cy.addTestContext(`✔ ${keyword} ${pickleStep.text}`);
});