# Word Wrap Kata

The main goal of this exercise is to understand the Transformation Priority Premise (TPP) and how to implement a 
solution using DDD (Domain Driven Design). Besides the developer will decide how to manage errors and exceptions.

This kata has its own boilerplate.

Its implementation will comprise the development from the user perspective (frontend) to the algorithm that will return the
expected output (backend).

- **Estimated time:** 2.5 hours
- **Format:** Pairs
- **Technologies:** Typescript and VanillaJS with HTML+CSS


## The Problem

You write a class called Wrapper, that has a single static function named wrap that takes two arguments, a string, 
and a column number. The function returns the string, but with line breaks inserted at just the right places to 
make sure that no line is longer than the column number. You try to break lines at word boundaries. 

Like a word processor, break the line by replacing the last space in a line with a newline.