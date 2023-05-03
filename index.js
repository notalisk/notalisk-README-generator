// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// List of licenses and badges, CREDIT github user lukas-h for badges
const licenses = ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal'];

const badges = [
    {license: 'Apache License 2.0', badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'},
    {license: 'GNU General Public License v3.0', badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'},
    {license: 'MIT License', badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'},
    {license: 'BSD 2-Clause "Simplified" License', badge: '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause'},
    {license: 'Boost Software License 1.0', badge: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'},
    {license: 'Creative Commons Zero v1.0 Universal', badge: '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)'},
];

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
    // Get the proper badge for the license
    var yourBadge = "";
    for (let i = 0; i < badges.length; i++) {
        if (badges[i].license == data.license) {
            yourBadge = badges[i].badge;
        }
    }
    console.log(yourBadge);

    // Write the README
    var content = 
`# ${data.title}

${yourBadge}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#testing)
- [License](#license)
- [Questions](#contact)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contribution}

## Tests

${data.test}

## License

This project is under the ${data.license} license.

## Questions

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