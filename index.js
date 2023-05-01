// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// List of licenses
const licenses = ['Apache License 2.0',
'GNU General Public License v3.0',
'MIT License',
'BSD 2-Clause "Simplified" License',
'BSD 3-Clause "New" or "Revised" License',
'Boost Software License 1.0',
'Creative Commons Zero v1.0 Universal',
'Eclipse Public License 2.0',
'GNU Affero General Public License v3.0',
'GNU General Public License v2.0',
'GNU Lesser General Public License v2.1',
'Mozilla Public License 2.0',
'The Unlicense'];

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "text",
        message: "Enter your project title.",
        name: "title",
    },
    {
        type: "text",
        message: "Type a description for your project.",
        name: "description",
    },
    {
        type: "text",
        message: "Enter the installation instructions.",
        name: "installation",
    },
    {
        type: "text",
        message: "Enter the usage information.",
        name: "usage",
    },
    {
        type: "text",
        message: "What are the guidelines for contributing to your project?",
        name: "contribution",
    },
    {
        type: "text",
        message: "What are the testing instructions?",
        name: "test",
    },
    {
        type: "list",
        message: "Select the appropriate license.",
        name: "license",
        choices: licenses,
    },
    {
        type: "text",
        message: "What is your GitHub Username?",
        name: "username",
    },
    {
        type: "text",
        message: "What is your email address?",
        name: "email",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // Write the README
    var content = 
`# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Testing](#testing)
- [License](#license)
- [Contact](#contact)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contribution}

## Testing

${data.test}

## License

## Contact

[github.com/${data.username}](www.github.com/${data.username})

Reach me by email at ${data.email}`;

    fs.writeFile(fileName, content, function (err) {
        err ? console.log(err) : console.log("Success");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile("customREADME.md", data);
        })
}

// Function call to initialize app
init();