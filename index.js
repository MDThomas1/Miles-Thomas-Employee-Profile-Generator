// Allows inquirer to be used on the page
const inquirer = require('inquirer')
const fs = require('fs')

// Allows utilisation of the pages within the lib folder
const Employee = require('./lib/employee.js')
const Manager = require('./lib/manager.js')
const Engineer = require('./lib/engineer.js')
const Intern = require('./lib/intern.js')

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

companyCreation()