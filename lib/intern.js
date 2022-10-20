// Utilising the employee page
const Employee = require('./employee')

// The intern subclass 
class Intern extends Employee {
    constructor(employeeName, id, email, school) {
        super(employeeName, id, email, 'Intern')
        this.school = school
    }

    getSchool() {
        return `${this.school}`
    }

    getRole() {
        return `Intern`
    }
}

module.exports = Intern
