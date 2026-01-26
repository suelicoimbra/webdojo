const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true,
    //defaultCommandTimeout: 10000,
    video: true,
    baseUrl: 'http://localhost:3000'
    // viewportWidth: 1400,  //coloquei a configuração no package.json 
    // viewportHeight: 900
  },
});
