const Manager = require('../lib/manager')

describe('getOfficeNumber', () => {
    it('should return the office number of the employee', () => {
        const employeeTest = new Manager('Darryl', 14, 'darryl@gmail.com', 6);
        expect(getOfficeNumber(employeeTest)).toBe(6);
    })
})

describe('getRole', () => {
    it('should return that the employee is a manager', () => {
        const employeeTest = new Manager('Darryl', 14, 'darryl@gmail.com', 6);
        expect(getRole(employeeTest)).toBe('Manager');
    })
})