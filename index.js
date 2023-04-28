// TODO: Include packages needed for this application
const inquirer = require('inquirer');

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
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

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