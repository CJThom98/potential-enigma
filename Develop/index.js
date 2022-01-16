const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template.js');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'project',
            message: 'What is the name of your project? (Required)',
            validate: projectInput => {
                if (projectInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a detailed description of your project.',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Describe your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installion', 
            message: 'Explain how to intall your program.',
            validate: installtionInput => {
                if (installtionInput) {
                    return true;
                } else {
                    console.log('Describe the installtion process');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide an explanation to use your program. Use screenshots if necessary.',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Describe how the User is suppose to use your program!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please provide a link to your github profile.',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Add a link to your github profile!');
                    return false;
                }
            }
        },
    ]);
};

promptUser()
    .then(readmeData => {
        const pageREADME = generatePage(readmeData);

        fs.writeFile('./README.md', pageREADME, err => {
            if (err) throw new Error(err);

            console.log('Page created! Checkout README.md in this directory to see it!');
        });
    });