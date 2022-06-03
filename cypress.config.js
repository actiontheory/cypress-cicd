const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "16skgj",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
