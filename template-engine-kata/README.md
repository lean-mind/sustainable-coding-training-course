# Template Engine Kata

## The Problem

Develop a templating library which replaces certain marked text using a
dictionary of variables. The function takes two arguments,  
the template text and the dictionary. Expecting that the output will be the replaced
text.

### Example 1:

Input:

```
- This is a template with one ${variable}

- {variable: "foo"}
```

Output:

```
- This is a template with one foo
```

### Example 2:

Input:

```
- "This is a text with a ${variable} to be replaced. " +
"And this is another text with ${other-variable} to be replaced. " +
"And this is another text with ${another-variable} to be replaced."

- {variable: "value", other-variable: "other-value", another-variable: "another-value"}
```

Output:

```
- "This is a text with a value to be replaced. " +
"And this is another text with other-value to be replaced. " +
"And this is another text with another-value to be replaced."
```

### Edge cases

One of the more interesting aspects of this kata are the edge cases. This is going to be an open source
library, potentially used for a wide variety of problems. We can't anticipate all the possible scenarios,
so it's important to handle all cases.
Please consider cases of nulls, empties, variables not found in the dictionary, variables not used
in the dictionary...
Consider the case of empty string as a key in the dictionary, and the case of values that are not
convertible to string (not serializable)...
How would you design the library in a way that is resilient, intuitive, and comfortable to use?

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
