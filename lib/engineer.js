// Utilising inquirer and the employee page
const { default: inquirer } = require('inquirer')
const Employee = require('./employee.js')

// The engineer subclass of employee
class Engineer extends Employee {
    constructor(employeeName, id, email, github) {
        super(employeeName, id, email, 'Engineer')
        this.github = github
    }

    getGitHub() {
        return `${this.github}`
    }

    getRole() {
        return `Engineer`
    }
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
        Employee.teamArray.push(newEngineer)
    })
}

module.exports = {Engineer, createEngineer}