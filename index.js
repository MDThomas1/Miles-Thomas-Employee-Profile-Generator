// Allows inquirer to be used on the page
const inquirer = require('inquirer')
const fs = require('fs')

// Allows utilisation of the pages within the lib folder
//const employee = require('./lib/employee')
const manager = require('./lib/manager')
const engineer = require('./lib/engineer')
const intern = require('./lib/intern')

function companyCreation() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'companyName',
            message: 'what is the name of your company?'
        }
    ])

    .then(createManager())

    .then(inquirer
        .prompt([
            {
                type: 'list',
                name: 'employeeGeneration',
                message: 'What would you like to do next?',
                choices: ['Create an engineer profile', new inquirer.Separator(), 'Create an intern profile', new inquirer.Separator(), 'Generate my HTML page', new inquirer.Separator()]
            }
        ]))
}

companyCreation()