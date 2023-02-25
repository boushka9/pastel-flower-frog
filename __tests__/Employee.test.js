const Employee = require('../lib/employee');

test('Should create a new employee', () => {
    const employeeTest = new Employee('Danny');
    expect(typeof(employeeTest)).toBe('object')
});

test('Should set ID value to 99' , () => {
    const testId = 99;
    const employeeTest = new Employee('Danny', testId);
    expect(employeeTest.id).toBe(testId);
})

test('Should return email from getEmail()', () => {
    const testEmail = 'test@gmail.com';
    const employeeTest = new Employee('Danny', 99, testEmail);
    expect(employeeTest.email).toBe(testEmail);
})
