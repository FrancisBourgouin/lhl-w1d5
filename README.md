# W1D5 - Lecture

## Content

- Review
- Modules
- Testing with Mocha and Chai

## Modules

### npm

- npm is node package manager to install packages and run scripts
- packages are modules that can be added to your project to extend its functionalities
- packages need to be installed with `npm install`
- All the installed packages are listed in a package.json file

#### package.json

- Package.json contains meta data about your project in JSON format
  - Project info: name, description, version, author, licence, etc
  - List of dependencies (packages)
  - Scripts to run tasks

#### package.json example:

```
{
  "name": "tweeter",
  "version": "1.0.0",
  "description": "A twitter clone by Lighthouse Labs for web bootcamp students to learn front-end dev skillz",
  "main": "server/index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server/index.js",
    "local": "./node_modules/.bin/nodemon --watch server -e js server/index.js"
  },
  "author": "Lighthouse Labs",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.15.2",
    "chance": "^1.0.2",
    "cookie-session": "^2.0.0-beta.3",
    "express": "^4.13.4",
    "md5": "^2.1.0",
    "mongodb": "^2.2.34",
    "node-sass-middleware": "^0.11.0",
    "path": "^0.12.7"
  },
  "devDependencies": {
    "nodemon": "^1.9.2"
  }
}
```

##### Creating a package.json

Enter the following command in the root folder of the project

- `npm init`
- Answer the questions

##### Where to find packages

- a list of available packages can be found on the [npm website](https://www.npmjs.com/)

###### Adding the Chalk package

- `npm install chalk`

##### How to manage packages

###### Add packages

Packages can be installed _globally_ or _locally_

`npm install <package name>`
or
`npm install -g <package name>

to install a development dependency:

`npm install --save-dev <package name>`

###### Update Packages:

- `npm outdated`
- `npm update <package name>

###### Remove Packages:

- `npm uninstall <package name> --save`
- `npm uninstall <package name> --save-dev`
- `npm uninstall <package name> --g`

##### Semantic Versioning

example of a version number:

**3.5.1**

- 3 -> major releases
- 5 -> minor releases
- 1 -> patch releases

- caret -> ^3.x.x (install any minor and patch releases)
- tilda -> ~3.5.x (install only patch releases)

##### Package-lock.json

- ensures that exact versions of packages are installed
- without it, an updated package might brake our app

##### Installing all the Packages

- Running `npm install` where the package.json is located will go through the list of dependencies and install all of them.

##### Executing Scripts

- `npm start`
- `npm test`
- `npm run local`

**start and test are presets**

##### Alternative to NPM

- instead of npm it's possible to use **yarn**

-`yarn add <package name>`

**yarn must be installed with `npm install -g yarn`**

### Custom Modules

We can create modules to reuse functionalities accross node js files.

## Unit Testing

### What is Unit Testing

- Unit testing refers to the practice of testing the functions of our code.
- This process verifies that our functions work as expected.
- For any function and given a set of inputs, we can determine if the function is returning the proper values
- This helps us find problems in our code early on

### What is Test Driven Development (TDD)?

- write the test first
- write the code to make the test pass

### Installation

Mocha -> test framework for node
Chai -> assertion library that works with mocha. Provides natural language assertions to test values.

- `npm install --save-dev mocha chai`
- Just type mocha to exectue the tests
- Add a test scripts to execute the tests with `npm test`
- mocha will look for a test directory

#### Using eslint with Mocha

to prevent eslint to yell at us for mocha tests, add `.eslintrc.js` in the test directory with the following:

```
module.exports = {
  "env": {
    "mocha": true
  },
  "rules": {
    "no-unused-vars": [
      "error",
      {
        "varsIgnorePattern": "should|expect"
      }
    ]
  }
}
```

### Write Tests

```
var chai = require('chai');
var should = chai.should()

describe("", function(){
    context("", function(){
        it ('should return a valid input', function(){


        })
    })
});

```