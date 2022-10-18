// Utilising inquirer and the employee page
const { default: inquirer } = require('inquirer')
const employee = require('./employee')

// The intern subclass 
class Intern extends Employee {
    constructor(school) {
        super(employeeName, id, email, "Intern")
        this.school = school
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
}