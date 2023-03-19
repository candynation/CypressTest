const { defineConfig } = require("cypress");

module.exports = defineConfig({
  baseURL: "http://localhost:19006",
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }  
});
