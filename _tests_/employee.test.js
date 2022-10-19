const Employee = require('../lib/employee')

describe('getName', () => {
    it('should return the name of the employee', () => {
        const employeeTest = new Employee('Darryl', 14, 'darryl@gmail.com');
        expect(getName(employeeTest)).toBe('Darryl');
    })
})

describe('getID', () => {
    it('should return the company ID of the employee', () => {
        const employeeTest = new Employee('Darryl', 14, 'darryl@gmail.com');
        expect(getID(employeeTest)).toBe(14);
    })
})

describe('getEmail', () => {
    it('should return the email of the employee', () => {
        const employeeTest = new Employee('Darryl', 14, 'darryl@gmail.com');
        expect(getID(employeeTest)).toBe('darryl@gamil.com');
    })
})

describe('getRole', () => {
    it('should return that the employee is an employee', () => {
        const employeeTest = new Employee('Darryl', 14, 'darryl@gmail.com');
        expect(getRole(employeeTest)).toBe('Employee');
    })
})