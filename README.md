# cs360-checkpoint-3-helpers

This repository contains the 3 helper function files for checkpoint 3 of CS360.

Also included is a template file for the first test suite. `sum.test.js`.


Below is the requirements for checkpoint 3:

---

---

# CHECKPOINT_03 - Testing


## Overview

Your team has taken over a new part of the project and is now responsible for writing the tests for a new feature that is in development. For this checkpoint your team will be responsible specifically for writing a suite of unit tests.


### Goal

The goal of this checkpoint is to simulate writing and running a test suite. To simulate this you will be running your tests against a set of helper functions which you can pull from the demo repository. See below for more information.

>_**NOTE 1**: Although it is highly recommended to write your unit tests for the provided functions in the demo repository, teams do have the option to use their own codebase they have been working on. If your team decided to go this route you **MUST** first get approval from your instructor. Please email __brett.karpinos@mec.science__ for approval._

___


## Assignment Details

For this assignment you will be writing tests for a suite of functions that are provided. This is to allow teams to focus on writing tests not writing features themselves. The assignment is split into three sections. Part one will involve setting up your new repository branch. Part two will require teams to write the test suite. Part three will conclude the checkpoint by setting up a custom script to run your tests.

>_**NOTE 2**: Although the code for this checkpoint will be written in javascript and will be utilizing the Jest testing library, most (if not all) of the patterns can be applied to any programing language and testing library pair._


### Part 0 - Install required dependencies
1. Check to see if you have npm installed on your laptop by running `npm --version` if you get a version number skip to __Part 1 - Setting Up Your Environment__
2. Install node - I recommend following the instruction in this [tutorial](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/) however you can install directly from the node [website](https://nodejs.org/en/).


### Part 1 - Setting Up Your Environment
1. Clone into the demo repository `bkarpinos/cs360-checkpoint-3-helpers` [link](https://github.com/bkarpinos/cs360-checkpoint-3-helpers). I recommend using the gh cli (1) however any of the following approaches should work:
   1. Run: `gh repo clone bkarpinos/cs360-checkpoint-3-helpers`
   2. Run: `git clone https://github.com/bkarpinos/cs360-checkpoint-3-helpers.git`
   3. Download directly from the website

2. CD into the project folder:
   ```
   $ cd cs360-checkpoint-3-helpers
   ```

3. Add your teams project repository as a remote repository. To do this run the following command and replace `USE/REPO` with the path for your repository:
   ```
   git remote add project https://github.com/USER/REPO.git
   ```
   >_**NOTE 3**: If I were to run the above command for my example repository (https://github.com/bkarpinos/cs360-example) I would replace `USER/REPO` with `bkarpinos/cs360-example`._

4. Push the changes up to your project repository in branch `checkpoint-3` by running the following command:
   ```
   git push -u project checkpoint-3
   ```
   >_**NOTE 4**: For more information on setting upstream repositories related to the previous two git commands you can see the documentation [here](https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories)_

5. Set up NPM project by running the following command. This will set up your package.json. You can find more information at this [link](https://docs.npmjs.com/cli/v8/commands/npm-init):
   ```
   npm init -y
   ```

6. Set up Jest Demo Test suite using the documentation found [here](https://jestjs.io/docs/getting-started). Once you complete this short introduction you should have a demo test suite up and running using the sample code that they provide.


### Part 2 - Writing the Tests
There are three functions in the helper file with some implementation requirements below:
1. `sum(a: number, b: number) => number`
   1. returns the sum of of two numbers
   2. if a or b is undefined they are treated as 0
   3. if a or b is not a number NaN is returned
2. `wordCount(str: string) => number`
   1. returns the number of words in the provided string words are separated by spaces.
   2. returns 0 if str is undefined
   3. returns 0 if str is an empty string
3. `charCountInString(char: str, str: string) => number`
   1. returns the number of times the character occurs in a string
   2. returns undefined if `char` is undefined
   3. returns 0 if `str` is undefined and char is defined
   4. returns undefined if `char` and `str` are undefined
   5. does not count character if it is a different case (a != A)

Your team should create a single test file for each of the functions:
1. `sum.test.js`
2. `wordCount.test.js`
3. `toLowerCase.test.js`

The test suite should include the following tests. The first test file in the list is organized into describe blocks. You can find more information on how to write describe blocks from the jest [documentation here](https://jestjs.io/docs/api#describename-fn).
1. `sum.test.js`
   1. `describe('correct output')`
      1. `test('when a & b are whole integers')`
      2. `test('when a or b is negative')`
      3. `test('when a & b are contain decimals')`
   2. `describe('handles improper inputs')`
      1. `test('when a or b are undefined they are treated as 0')`
      2. `test('when a or be is not a number "NaN" is returned')`
2. `wordCount.test.js`
   1. Organize the following test cases into logical `describe` blocks:
      1. `test('returns proper count for a simple sentence input string')`
      2. `test('returns proper count when a single word input string')`
      3. `test('returns proper count when double space is included)`
      4. `test('counts hyphenated words as a single word')`
      5. `test('returns 0 for undefined input string')`
      6. `test('returns 0 for empty input string')`
3. `charCountInString.test.js`
   1. Come up with a minimum of 5 tests for the `charCountInString` function and organize them into a minimum of 2 logical `describe` blocks


### Part 3 - Running the Tests
1. Add custom NPM script to run tests: `checkpoint3`.
   1. In the `"scripts"` section of the `package.json` add the following key/value pair: `"checkpoint3": "jest",`
   2. This means that running `npm run checkpoint3` should execute the tests.
2. Ensure that all tests are passing
3. Push all changes to branch `checkpoint-3`


---

## Grading

### Due Date
Thursday November 17, 2022 @ 11:59 PM
11/17/2022


### Late Policy
For each day late 2 point will be deducted from the total score! After two weeks late groups will receive a zero.


### Submission

Part 3, step three asks teams to upload their changes to a new branch in their project repositories. This is the main method of submitting this checkpoint.

Each team member should also submit a text file containing a link to the repository as well.


### Rubric
| Requirement | Description | Possible Points |
| --- | --- | --- |
| Part 0 + 1 | Setup is completed correctly and teams are able to complete the rest of the checkpoint | 25 |
| Part 2: sum.test.js | Provided test cases are written and organized into the provided describe blocks | 10 |
| Part 2: wordCount.test.js | Provided test cases are written and organized into logical describe blocks | 15 |
| Part 2: charCountInString.test.js | Teams come up with at least 5 test cases and write and organize into a minimum of two describe blocks | 20 |
| Part 3: Custom test script | Teams provide a custom npm script to run the jest tests | 5 |
| Part 3: Tests passed | all tests pass | 25 |
| Submission to Git | A new branch is added to the project teams repository  | 10 |
| Submission on BlackBoard | A text file was submitted by both members of the group containing a link to the repository | 5 |
| Total | --- | 115 |
