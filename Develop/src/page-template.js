const generateProject = projectText => {
    if (!projectText) {
        return "";
    }

    return `
        ${project}
    `;
};

const generateDescription = descriptionText => {
    if (!descriptionText) {
        return "";
    }

    return `
        ${description}
    `;
};

const generateInstall = installText => {
    if (!installText) {
        return "";
    }

    return `
        ${installation}
    `;
};

const generateUsage = usageText => {
    if (!usageText) {
        return "";
    }
    return `
        ${usage}
    `;
};

const generateGithub = githubText => {
    if (!githubText) {
        return "";
    }
    return `
        ${github}
    `;
};

module.exports = templateData => { 
    const { project, description, installation, usage, github } = templateData;
    
    return`
# ${generateProject(project)}

## Description
    ${generateDescription(description)}

## Installation
    ${generateInstall(installation)}

## Usage
    ${generateUsage(usage)}

## My GitHub Profile
    ${generateGithub(github)}
    `;
};