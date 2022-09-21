const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://next.privat24.ua',
    excludeSpecPattern: ['**/e2e/1-getting-started', '**/e2e/2-advanced-examples']
  },
});
