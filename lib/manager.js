// Utilises the employee page
const Employee = require('./employee.js')

// The manager subclass of employee 
class Manager extends Employee {
    constructor(employeeName, id, email, officeNumber) {
        super(employeeName, id, email, 'Manager')
        this.officeNumber = officeNumber
    }

    getOfficeNumber() {
        return `${this.officeNumber}`
    }

    getRole() {
        return `Manager`
    }
}


module.exports = Manager
