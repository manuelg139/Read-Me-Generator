// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');


// TODO: Create an array of questions for user input
const writeFileAsync = util.promisify(fs.writeFile);

    const promptUser = () => {
        return inquirer.prompt([ 
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },

      {
        type: 'input',
        name: 'username',
        message: 'What is yout Github username?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What commands did you need to install the dependencies?',
        default: "npm install"
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What commands are needed to run the program?',
      },
      {
        type: 'list',
        name: 'licenses',
        message: 'What Licenses are neeeded for this program?',
        choices: ["MIT License",
        "Code Project Open License (CPOL)",
        "Common Development and Distribution License (CDDL)",
        "Microsoft Public License (Ms-PL)",
        "Mozilla Public License 1.1 (MPL 1.1)",
        "Common Public License Version 1.0 (CPL)",
        "Eclipse Public License 1.0",
        "Apache License, Version 2.0"
    ],
        default: 'MIT'
      },
      {
        type: 'input',
        name: 'contributors',
        message: 'Did you have any contributors?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Are there any test instructions?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email for questions?',
      },
    ],
    
    )};




// TODO: Create a function to write README file
const generateREADME = (answers) =>
`
# ${answers.title}
### Created  by ${answers.username} Github user.


## Table of Content
- Description
- Installation
- Usage
- Contributions
- Tests
- License 
- Questions

### Description
${answers.description} 

### Installation
${answers.installation} 

### How to use.
${answers.usage} 

### Contributors
${answers.contributors} 

### Tests
${answers.tests} 

### Licenses
<img width="930" alt="Screen Shot 2021-01-11 at 10 59 23 PM" src="https://img.shields.io/badge/license-${answers.licenses.replace(/ /g, "%20")}-blue?style=flat-square">


### Reach out for any questions.
${answers.email} 

`;




// TODO: Create a function to initialize app
const init = () => {
    promptUser()
      .then((answers) => writeFileAsync('Readme.md', generateREADME(answers)))
      .then(() => console.log('Successfully wrote to ReadMe file!!!'))
      .catch((err) => console.error(err));
  };


// Function call to initialize app
init();


// This program allows you to create automatic Readme files for your projects by following a series of commands on node.js. 

//For this project we used the npm init -y and init install inquirer command.

// To run this program you will need to access the main folder where index.js exists and run node index.js and follow the commands for a successful Read Me File.