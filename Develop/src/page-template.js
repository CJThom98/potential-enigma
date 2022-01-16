function generateMarkdown(data) {
    return `
# ${data.project}

## Description
    ${data.description}
    
[Installation](#installation)
[Usage](#usage)
[Credits](#credits)
[GitHub](#github)

## Installation
    ${data.installation}

## Usage
    ${data.usage}

## Credits
    ${data.credits}

## GitHub
    ${data.github}
  `;
}
module.exports = generateMarkdown;