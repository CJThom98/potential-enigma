// TODO: Include packages needed for this application
const { writeFile, copyFile } = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const generatePage = require('');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your program?',
            validate: nameInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'What are your installation instructions? (Required)',
            validate: installInput => {
                if (installInput) {
                    return true
                } else {
                    console.log('An installation guide is required!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Explain how your program is used. (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true
                } else {
                    console.log('Please explain how your program is used!');
                    return false;
                }
            }
        }
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
