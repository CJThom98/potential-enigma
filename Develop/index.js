const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageREADME = generatePage(project, description, installation, usage, github);

// fs.writeFile('./README.md', pageREADME, err => {
//     if (err) throw err;

//     console.log('Your ReadMe is complete! Check out README.md to see the output!');
// });

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        }
    ])
    .then(answers => console.log(answers));