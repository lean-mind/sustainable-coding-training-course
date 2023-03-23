# [Tictactoe - Original repository](https://yelynn1.github.io/tictactoe/)

Tic Tac Toe game (web version) made using HTML, JS.

- **Estimated time:** 2 hours
- **Format:** Pairs
- **Technologies:** Javascript

- Tasks:
* Take a look at the code and design an automatic testing strategy.
* Find maintenance problems in the code and prioritise how to fix them.
* Refactor the code from this repository following the given testing approach. 


## Installation

If you want to install all dependencies in your machine you need to run in the terminal the command below:

```bash
npm install
```

## Running unit tests

First, if you have not done it yet, add the following code at the beginning of every test file:

```python
/**
 * @jest-environment jsdom
 */
```

Run in the terminal the command below:

```bash
npm run test
```

## Running end-to-end tests (e2e)

You will need to start an express server and run the test with cypress. 
You can follow the next steps:

1. **Start express server.** Open a new terminal and run the following command:

```bash
npm run server
```

Note: the server will start. Leave it listening.


2. **Run tests.** Open another terminal and run the following command:

```bash
npm run e2e
```

In case you want to show the browser during the execution, run this command instead:

```bash
npm run e2e-browser
```


## Uninstall local dependencies

Delete `node_modules` folder
