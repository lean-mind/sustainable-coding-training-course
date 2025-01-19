# [Tictactoe Kata - Original repository](https://yelynn1.github.io/tictactoe/)

Tic Tac Toe game (web version) made using HTML, JS.

- **Estimated time:** 2 hours
- **Format:** Pairs

### Tasks:
* Take a look at the code and design an automatic testing strategy.
* Find maintenance problems in the code and prioritise how to fix them.
* Refactor the code from this repository following the given testing approach.

## Setup

Node v22 is required to run this project.

> 💡If you don't have it installed, we recommend the use of a version manager
> like [_nvm_](https://github.com/nvm-sh/nvm) or [_fnm_](https://github.com/Schniz/fnm) (a cross-platform alternative to
> _nvm_). After installing the manager, you can install the Node version by running: `nvm use` or `fnm use`.

Once you have Node installed, you can install the project dependencies by running:

`npm install`

### Plugins

This project uses the following plugins:

- [Vitest](https://vitest.dev/), a blazing fast test framework.
- [Biome](https://biomejs.dev/), a toolchain for linting and formatting.
- [Playwright](https://playwright.dev/), a tool for end-to-end framework.

> ℹ️ If VSCode is your editor of choice, you can install the recommended extensions.

## Run tests

You can run the tests by running:

`npm run test`

If you want to run the tests in watch mode, you can run:

`npm run test:watch`

Also, you can run the tests with coverage by running:

`npm run test:coverage`

## Run e2e tests

You can run the e2e tests by running:

`npm run e2e`

If you want to run the e2e tests displaying the browser, you can run:

`npm run e2e:ui`

## Run in the browser

You can start server in development (with hot reload) by running:

`npm run dev`

Or in production mode by running:

`npm run serve`

> No matter which command you run, you can access the application by clicking the link provided in the terminal.