# Regex Challenges Lab
In this lab, you’ll explore and implement JavaScript functions to solve regex-based challenges. The goal is to gain hands-on experience with regex patterns, string methods, and error handling using toThrow in Jest. You’ll set up your project from scratch, create test cases using Jest, and write regex logic to pass the provided tests.

> You are `NOT` allowed to use ChatGPT to solve the challenges. I would prefer you use a tool such as [this online regex generator](https://regexr.com/). However, if you use ChatGPT, you may ONLY ask for the regex pattern and NOT the solution.

Note: For each challenge, you will create a branch following this pattern: `regex-<challenge number>`. Once you have a passing challenge, along with the updated `.toThrow()` test, push to GitHub and merge to main. Be sure to sync your remote repository down and branch again.

Getting Started Locally
1. Initialize a Node.js Project
While in `regex-challenges` in your terminal, run the following command to initialize a default package.json file:
``` bash
npm init -y // remember that the -y flag will answer all those pesky questions
```
A package.json file will be created with default settings.

2. Add your boilerplate .gitignore. Remember to init git in your directory.

3. Install Jest
Install Jest as a development dependency:
```bash
npm install jest --save-dev
```

4. Update the package.json file to configure the testing script:
```json
"scripts": {
  "test": "jest"
}
```

5. Set Up File Structure
Organize your project files as follows:

```go
regex-challenges/
├── __tests__/
│   └── regex.test.js
├── regex-challenges.js
├── package.json
├── package-lock.json
├── .gitignore
```

- `__tests__/regex.test.js`: This file will contain your provided test cases.
- `regex-challenges.js`: This file will contain the functions you will write to solve the challenges.
---
> 🛑 Stop here to create your matching repository in GitHub. Do NOT initialize it with a .gitignore or a README.md file since you will already have those at this point. Update your local git remote url to be that of your new GitHub repository. Add, commit, and push to your remote before creating your first branch. 
---
6. Write Tests Using Jest
In the `__tests__/regex.test.js file`, add a test case for your current challenge using `.toThrow()` if your function receives a data type other than a string.

Example:
```javascript
describe('matchInstructorName', () => {
  test('should match the word "Jess" in a string', () => {
    expect(matchInstructorName('Jess is evil.')).toBe(true);
  });

  test('should throw an error for invalid input types', () => {
    expect(() => matchInstructorName(123)).toThrow('Input must be a string');
  });
});
```

7. Write Function Logic
- Open `regex-challenges.js`.
- Implement the logic for the challenge based on the instructions and examples in the comments.
- Account for your `.toThrow()` test.

8. Run Tests
Check the output to see which tests pass and which fail. Implement and refine your logic until all tests pass for your current challenge. Remember: You can comment out the export and import statements for challenges you have not yet written.

9. Commit and Push Changes
Reference the branch pattern mentioned before. Push up your branch and merge to main before continuing on to the next challenge.

---

## STRETCH GOAL
> Research how to output a Jest coverage report to your files. Create a branch, set up your coverage output, push to GitHub, and merge to main.

---

### Understanding throw new Error and .toThrow() 
When you use `throw new Error` in JavaScript, you're intentionally creating and raising an `Error object` to indicate that something went wrong. This is a common practice in functions to handle invalid inputs or unexpected scenarios.

***The Error object contains information about the error, such as a message that describes the problem.***

### Key Components of an Error Object
- Message: A description of the error (e.g., "Input must be a string").
- Stack Trace: Information about where the error occurred, which is useful for debugging.

```javascript
throw new Error('Error message here');
```

Example
``` javascript
const exampleFunction = (input) => {
  if (typeof input !== 'string') {
    throw new Error('Input must be a string'); // Throws an Error if input is not a string
  }
  return true; // Returns true for valid inputs
};
```

- When exampleFunction is called with an invalid input, such as a number, it will stop execution and throw the error:

```javascript
exampleFunction(123); 
// Uncaught Error: Input must be a string
```

## What Is .toThrow in Jest?
Jest’s `.toThrow()` matcher is used to test if a function throws an error when it encounters invalid inputs or unexpected scenarios. It helps verify that your functions handle errors correctly.

## How `.toThrow` Works
- `.toThrow()` checks if the function throws any error.
- `.toThrow(expectedError)` checks if the error message matches the expectedError.

Pseudocode Example

```javascript
expect(() => functionName()).toThrow(expectedError);
functionName: The function being tested.
expectedError: (Optional) The expected error message to match.
```

# REMEMBER TO BOOKMARK YOUR REPO IN YOUR SLACK CHAT 