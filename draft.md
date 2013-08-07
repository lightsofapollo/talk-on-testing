# Testing- Why you need it

## Unit testing

### The reasons you already know

- test your internal apis (not user facing)
- logic which cannot be exposed to users (parser tests)

### Reasons you need to know

- it actually makes development faster
- dramatically reduce debugging by testing _while_ developing.
- test complex internal logic without complex exposure to user
interface (database upgrades, etc...)

### What you should not be doing

- testing like a user
- relying on the result of one test for another
- testing every possible outcome within a single "test" segment
- attempting to interact with your entire app all at once
- testing everything after the fact ( you need to do this when you have
context into _why_ the implementation works in these ways )

## [integration/system/acceptance/ui] testing

### How are these different

- test like a user
- the entire system is available to test (all of gecko, other apps,
etc...)

### Why not only write integration tests?

- they run slower then unit tests
- you cannot develop them until you have something to expose to the
user.
- its difficult to test complex internal interactions (database
upgrades, all combinations of parsing logic, etc...)
- they don't actually help you write implementation code only
verify that your implementation code works at a high level.

### What you should not be doing

- relying on the result of one test for another.
- writing large single test files
- hard coding selectors
- exposing internal details of app (selectors, custom js you need to
run, etc...) in the test.
