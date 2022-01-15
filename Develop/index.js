// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your program?',
            validate: titleInput => {
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
        },
        {
            type: 'confirm',
            name: 'confirmCredits',
            message: 'Would you like to provide credits?',
            default: true
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Please list the names of the people you would like to credit.',
            when: ({ confirmCredits }) => confirmCredits
        }
    ]);
};

// TODO: Create a function to write README file
fs.writeFile('readme.md', generatePage() err => {
    if (err) throw err;

    console.log('Your ReadMe is complete! Checkout readme.md to see output!');
});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
