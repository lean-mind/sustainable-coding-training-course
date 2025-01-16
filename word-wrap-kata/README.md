## Word Wrap Kata

This Kata will be done from scratch. The main goal of this exercise is to understand the Transformation Priority
Premise (TPP). Combining the use of TDD and learnings from the previous exercises, the attendees will reach a clear and
simple solution.

- **Estimated time:** 2 hour
- **Format:** Pairs

### The Problem

You write a class called Wrapper, that has a single static function named wrap that takes two arguments, a string, and a
column number. The function returns the string, but with line breaks inserted at just the right places to make sure that
no line is longer than the column number. You try to break lines at word boundaries. Like a word processor, break the
line by replacing the last space in a line with a newline.

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

> ℹ️ If VSCode is your editor of choice, you can install the recommended extensions.

## Run tests

You can run the tests by running:

`npm run test`

If you want to run the tests in watch mode, you can run:

`npm run test:watch`

Also, you can run the tests with coverage by running:

`npm run test:coverage`

## Run in the browser

You can start server in development (with hot reload) by running:

`npm run dev`

Or in production mode by running:

`npm run serve`

> No matter which command you run, you can access the application by clicking the link provided in the terminal.