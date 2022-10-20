// Utilising inquirer and the employee page
const { default: inquirer } = require('inquirer')
const Employee = require('./employee.js')

// The intern subclass 
class Intern extends Employee {
    constructor(employeeName, id, email, school) {
        super(employeeName, id, email)
        this.school = school
    }

    getSchool() {
        return `${this.school}`
    }

    getRole() {
        return `Intern`
    }
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
        Employee.teamArray.push(newIntern)
    })
}

module.exports = Intern