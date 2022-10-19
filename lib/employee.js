// The base employee class
class Employee {
    constructor(employeeName, id, email, role) {
        this.employeeName = employeeName
        this.id = id
        this.email = email
        this.role = role
    }
}

module.exports = Employee