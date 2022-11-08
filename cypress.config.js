const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    baseUrl: 'http://localhost',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    viewportHeight: 768,
    viewportWidth: 1366,
    screenshotsFolder: "cypress/screenshots",
    video: true,
    videosFolder: "cypress/videos"

  },
});
