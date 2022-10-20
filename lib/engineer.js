// Utilising the employee page
const Employee = require('./employee')

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

module.exports = Engineer