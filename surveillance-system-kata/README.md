# Surveillance System Kata

Manual Mocks are okay, but sometimes we need some extra help from third party libraries. It’s important to understand when it is okay, and when we are coupling our test definitions to the third party’s. The objective of kata is to strengthen what has been learned in the previous exercise in a more complex scenario. Attendees should be able to discern when they feel more comfortable with each option.

- **Estimated time:** 2 hours
- **Format:** Pairs
- **Technologies:** Chosen by the attendees

## The Problem

We want to create a Surveillance System that records video when something is moving. We have purchased two devices:

- A sensor that will be able to send a signal to our code when movement is detected, and another signal when movement stops.
- A video recorder that we can invoke via API to start and stop recording.

Test and implement the necessary code for making those components interact.