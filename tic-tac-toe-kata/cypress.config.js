import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        video: false,
        screenshotOnRunFailure: false,
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
