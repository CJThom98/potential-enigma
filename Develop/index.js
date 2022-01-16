const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageREADME = generatePage(project, description, installation, usage, github);

// fs.writeFile('./README.md', pageREADME, err => {
//     if (err) throw err;

//     console.log('Your ReadMe is complete! Check out README.md to see the output!');
// });

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a detailed description of your project.'
        },
        {
            type: 'input',
            name: 'installion', 
            message: 'Explain how to intall your program.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide an explanation to use your program. Use screenshots if necessary.'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please provide a link to your github profile.'
        },
    ]);
};

promptUser().then(answers => console.log(answers));