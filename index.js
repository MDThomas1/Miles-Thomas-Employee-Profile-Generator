// Allows inquirer to be used on the page
const { default: inquirer } = require('inquirer')
const fs = require('fs')

// Allows utilisation of the pages within the lib folder
const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const HTMLFile = require('./dist/files')
const { teamArray } = require('./lib/employee')

function companyCreation() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'companyName',
            message: 'What is the name of your company?'
        }
    ])

    .then(createManager())

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

    for(let i = 0; i < Employee.teamArray.length; i++) {
        let employeeCard = document.createElement('div')
        employeeCard.classList.add('card col-4 bg-primary text-white')
        let memberName = document.createElement('h4')
        memberName.textContent = teamArray[i].employeeName
        employeeCard.append(memberName)
        let memberRole = document.createElement('h4')
        memberRole.textContent = teamArray[i].role
        employeeCard.append(memberRole)
        let memberID = document.createElement('p')
        memberID.textContent = 'ID: ' + teamArray[i].id
        employeeCard.append(memberID)
        let memberEmail = document.createElement('p')
        memberEmail.textContent = 'Email: ' + teamArray[i].email
        employeeCard.append(memberID)
        let roleSpecific = document.createElement('p')
        if (teamArray[i].officeNumber) {
            roleSpecific.textContent = 'Office Number: ' + teamArray[i].officeNumber
        } else if (teamArray[i].github) {
            roleSpecific.textContent = 'Github: https://github.com/' + teamArray[i].github
        } else if (teamArray[i].school) {
            roleSpecific.textContent = 'School: ' + teamArray[i].school
        }
        employeeCard.append(roleSpecific)
        document.querySelector('#employeeCards').append(employeeCard)
        
    }
}

companyCreation()