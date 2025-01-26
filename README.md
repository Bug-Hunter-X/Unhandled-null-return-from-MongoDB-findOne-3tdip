# Unhandled Null Return in MongoDB findOne

This example demonstrates a common error when using asynchronous MongoDB queries in JavaScript. The `findOne` method returns null if no document matches the query, but the code doesn't handle this case causing an error when trying to access the 'name' property of the null 'user' object. This issue is relevant for Node.js and other asynchronous environments.

## Bug
The `bug.js` file contains code that will throw an error if the user is not found in the MongoDB collection.

## Solution
The `bugSolution.js` provides a solution to this issue, demonstrating safe handling of a potential null value returned by `findOne`.  It uses optional chaining to prevent errors and explicitly checks for null.  This is best practice for all asynchronous operations with databases to avoid unexpected runtime crashes.