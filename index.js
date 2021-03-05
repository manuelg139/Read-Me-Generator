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
        choices: ['IBM', 'MIT', 'ISC'],
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
-Description
- Installation
- Usage
-Contributions
-Tests
-License 
-Questions

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
${answers.licenses} 

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
