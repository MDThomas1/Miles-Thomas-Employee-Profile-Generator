// Allows inquirer to be used on the page
const inquirer = require('inquirer')
const fs = require('fs')

// Allows utilisation of the pages within the lib folder
const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const generateHTML = require('./dist/files')

const teamArray = []

function companyCreation() {

    function createManager() {
        // The prompts used to create a manager
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "What is the manager's name?"
            },
    
            {
                type: 'input',
                name: 'id',
                message: "What is the manager's employee ID?"
            },
    
            {
                type: 'input',
                name: 'email',
                message: "What is the manager's email address?"
            },
    
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the manager's office number?"
            }
        ])
        .then((answers) => {
            const newManager = new Manager(`${answers.managerName}`, `${answers.id}`, `${answers.email}`, `${answers.officeNumber}`) 
            teamArray.push(newManager)
            createRoster()
        })
    } 

    function createRoster() {
        inquirer 
        .prompt([
            {
                type: 'list',
                name: 'ProfileCreation',
                message: 'What would you like to do next?',
                choices: ['Create an engineer', new inquirer.Separator(),
                 'Create an intern', new inquirer.Separator(), 
                 'Create my webpage', new inquirer.Separator()
                ]
            }
        ])
        .then((answers) => {
            switch (answers.ProfileCreation) {
                case 'Create an engineer':
                    createEngineer()
                    break;
                case 'Create an intern':
                    createIntern()
                    break;
                case 'Create my webpage':
                    producePage()
                default: ''
                    break;
            }
        })
    }

    function createEngineer() {
        // The prompt questions for creating a new engineer
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "What is the engineer's name?"
            },
    
            {
                type: 'input',
                name: 'id',
                message: "What is the engineer's employee ID?"
            },
    
            {
                type: 'input',
                name: 'email',
                message: "What is the engineer's email address?"
            },
    
            {
                type: 'input',
                name: 'github',
                message: "Whats is the engineer's github ID?"
            }
        ])
        .then((answers) => {
            const newEngineer = new Engineer(`${answers.engineerName}`, `${answers.id}`, `${answers.email}`, `${answers.github}`) 
            teamArray.push(newEngineer)
            createRoster()
        })
    }

    function createIntern() {
        // The prompts used to create a new intern
        inquirer 
        .prompt([
            {
                type: 'input',
                name: 'internName',
                message: "What is the intern's name?"
            },
    
            {
                type: 'input',
                name: 'id',
                message: "What is the intern's employee ID?"
            },
    
            {
                type: 'input',
                name: 'email',
                message: "What is the intern's email address?"
            },
            
            {
                type: 'input',
                name: 'school',
                message: "What school does the intern go to?"
            }
        ])
    
        .then((answers) => {
            const newIntern = new Intern(`${answers.internName}`, `${answers.id}`, `${answers.email}`, `${answers.school}`) 
            teamArray.push(newIntern)
            createRoster()
        })
    }

    createManager()
}
function producePage() {
    // The function creating the new HTML page
    fs.writeFileSync('profile.html', generateHTML(), (err) => 
    err ? console.error('HTML file creation has been unsuccessful') : console.log('Your HTML file has successfully been created'))
    
    // Writing cards in the HTML for employee profiles
}



companyCreation()