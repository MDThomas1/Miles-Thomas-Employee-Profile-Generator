const { default: inquirer } = require('inquirer')
const employee = require('./employee')

class Manager extends Employee {
    constructor(officeNumber) {
        super(employeeName, id, email)
        this.officeNumber = officeNumber
    }
}

function createManager() {
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
}