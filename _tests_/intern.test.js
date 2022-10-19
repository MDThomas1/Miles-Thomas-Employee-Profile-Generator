const Intern = require('../lib/intern')

describe('getSchool', () => {
    it('should return the GitHub ID of the employee', () => {
        const employeeTest = new Intern('Darryl', 14, 'darryl@gmail.com', 'Monash');
        expect(getSchool(employeeTest)).toBe('Monash');
    })
})

describe('getRole', () => {
    it('should return that the employee is an intern', () => {
        const employeeTest = new Intern('Darryl', 14, 'darryl@gmail.com', 'Monash');
        expect(getRole(employeeTest)).toBe('Intern');
    })
})