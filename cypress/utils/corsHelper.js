const cors = require("cors");

function getDefaultCorsOptions() {
  return {
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  };
}

function createCorsMiddleware(customOptions = {}) {
  return cors({
    ...getDefaultCorsOptions(),
    ...customOptions,
  });
}

module.exports = {
  getDefaultCorsOptions,
  createCorsMiddleware,
};