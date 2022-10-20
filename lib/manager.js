// Utilises inquirer and the employee page
const { default: inquirer } = require('inquirer')
const Employee = require('./employee.js')

// The manager subclass of employee 
class Manager extends Employee {
    constructor(employeeName, id, email, officeNumber) {
        super(employeeName, id, email)
        this.officeNumber = officeNumber
    }

    getOfficeNumber() {
        return `${this.officeNumber}`
    }

    getRole() {
        return `Manager`
    }
}

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
            message: "What is the employee's office number?"
        }
    ])
    .then((answers) => {
        const newManager = new Manager(`${answers.managerName}`, `${answers.id}`, `${answers.email}`, `${answers.officeNumber}`) 
        Employee.teamArray.push(newManager)
    })
}

module.exports = {Manager, createManager}