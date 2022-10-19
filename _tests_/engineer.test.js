const Engineer = require('../lib/engineer')

describe('getGitHub', () => {
    it('should return the GitHub ID of the employee', () => {
        const employeeTest = new Engineer('Darryl', 14, 'darryl@gmail.com', 'github.com/darryl');
        expect(getGitHub(employeeTest)).toBe('github.com/darryl');
    })
})

describe('getRole', () => {
    it('should return that the employee is an engineer', () => {
        const employeeTest = new Engineer('Darryl', 14, 'darryl@gmail.com', 'github.com/darryl');
        expect(getRole(employeeTest)).toBe('Engineer');
    })
})