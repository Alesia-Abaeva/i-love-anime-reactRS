import { defineConfig } from 'cypress';
import coverage from '@cypress/code-coverage/task';
import 'whatwg-fetch';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      coverage(on, config);
      return config;
    },
    baseUrl: 'http://localhost:5173',
    video: false,
  },
});
