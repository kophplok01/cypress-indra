import Handlebars from "handlebars";

export function buildWelcomeMessage(userData) {
  const template = Handlebars.compile(
    "Welcome {{fullName}}. Your user id is {{id}}."
  );

  return template(userData);
}