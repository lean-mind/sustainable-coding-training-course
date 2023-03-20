## Template Engine Kata

This Kata will be done from scratch.

At this point, we understand the meaning of TDD, principles and the TPP. However, we still need to 
put them together with Design Principles. We will see how to design artifacts and components based 
on outside-in TDD and inside-out TDD, the double loop and how to work with Integration tests.


- **Estimated time:** 1 hour
- **Format:** Pairs
- **Technologies:** Chosen by the attendees

### The Problem

We want to recreate a templating system which replaces a marked text using a 
predefined dictionary. We will give two different inputs to this component: 
the template text, and dictionary. Expecting that the output will be the replaced 
text.

Input:
```
- This is a template with one ${variable}
- {variable: "foo"}
```

Output:
```
- This template with one foo
```