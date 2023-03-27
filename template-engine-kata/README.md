# Template Engine Kata

## The Problem

We want to recreate a templating library which replaces certain marked text using a 
predefined dictionary. We will give two different inputs to this component: 
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
- This template with one foo
```

### Example 2:

Input:
```
- "This is a text with a ${variable} to be replaced. \n" +
"And this is another text with ${other-variable} to be replaced. \n" +
"And this is another text with ${another-variable} to be replaced."

- {variable: "value", other-variable: "other-value", another-variable: "another-value"}
```

Output:
```
- "This is a text with a variable to be replaced. " +
"And this is another text with other-value to be replaced. " +
"And this is another text with another-value to be replaced."
```

Note: Pay special attention to the edge cases like lack of variables or values and the use of complex data structures
instead of strings.