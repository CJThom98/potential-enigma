const generatePage = (project, description, installation, usage, github) => { return`
# ${project}

## Description
    ${description}

## How to Install
    ${installation}

## How to Use
    ${usage}

## My GitHub Profile
    ${github}
    `;
};

module.exports = generatePage;