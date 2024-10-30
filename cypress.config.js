const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    module.exports = defineConfig({ e2e: { specPattern: 'cypress/e2e/*.cy.{js,jsx,ts,tsx}', // Point to the new folder }, })
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
