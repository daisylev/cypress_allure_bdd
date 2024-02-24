import { defineConfig } from 'cypress';
import PluginEvents = Cypress.PluginEvents;
import PluginConfigOptions = Cypress.PluginConfigOptions;
import { configureAllureAdapterPlugins } from '@mmisty/cypress-allure-adapter/plugins';

const cucumber = require('cypress-cucumber-preprocessor').default;
const browserify = require('@cypress/browserify-preprocessor');

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const options = {
        ...browserify.defaultOptions,
        typescript: require.resolve('typescript'),
      };
      // implement node event listeners here
      on('file:preprocessor', cucumber(options));
      configureAllureAdapterPlugins(on, config);
      return config;
    },
    baseUrl: 'https://www.amazon.com',
    viewportHeight: 1080,
    viewportWidth: 1920,
    video: false,
    defaultCommandTimeout: 30000,
    pageLoadTimeout: 120000,
    specPattern: 'cypress/e2e/**/*.feature',
  },
  env: {
    allure: true,
    allureResults: 'cypress/allure-result',
  },
});
