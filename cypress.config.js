const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    supportFile: false,
    pageLoadTimeout: 60000,
    modifyObstructiveCode: false,
    chromeWebSecurity: false, 
    blockHosts: ["*backtrace.io", "*events.backtrace.io"],
    
    async setupNodeEvents(on, config) {
      await preprocessor.addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        webpack({
          webpackOptions: {
            resolve: {
              extensions: [".js", ".ts"],
            },
            module: {
              rules: [
                {
                  test: /\.feature$/,
                  use: [
                    {
                      loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                      options: config,
                    },
                  ],
                },
              ],
            },
          },
        })
      );

      return config;
    },
  },
});