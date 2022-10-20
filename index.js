// Allows inquirer to be used on the page
const inquirer = require('inquirer')
const fs = require('fs')

// Allows utilisation of the pages within the lib folder
const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const HTMLFile = require('./dist/files')

function companyCreation() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'companyName',
            message: 'What is the name of your company?'
        }
    ])

    .then(Manager.createManager())

    .then(inquirer
        .prompt([
            {
                type: 'list',
                name: 'employeeGeneration',
                message: 'What would you like to do next?',
                choices: [
                    { name: 'Create an engineer profile', value: 0 }, new inquirer.Separator(), 
                    {name: 'Create an intern profile', value: 1}, new inquirer.Separator(), 
                    {name: 'Generate my HTML page', value: 2}, new inquirer.Separator()
                ]
            }
        ]))
        .then((responses) => {
            if (responses.employeeGeneration === 0) {
                Engineer.createEngineer()
            } else if (responses.employeeGeneration === 1) {
                Intern.createIntern()
            } else {
                producePage()
            }
        })
}

function producePage() {
    const fileTemplate = generateHTML()
    fs.writeFile('profile.html', fileTemplate, (err) => 
    err ? console.error('README file creation has been unsuccessful') : console.log('README file has successfully been created'))
}

companyCreation()