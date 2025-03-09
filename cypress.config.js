const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "oojk1f",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
