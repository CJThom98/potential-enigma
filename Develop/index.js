const fs = require('fs');
const generatePage = require('./src/page-template.js');

const readmeDataArgs = process.argv.slice(2);

const [project, description, installation, usage, github] = readmeDataArgs;

fs.writeFile('./README.md', generatePage(project, description, installation, usage, github), err => {
    if (err) throw new Error(err);

    console.log('Your ReadMe is complete! Check out README.md to see the output!');
});