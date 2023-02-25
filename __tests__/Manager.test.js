const Manager = require('../lib/manager');

test('Return manager ID as 100', () => {
    const managerID = 100;
    const managerTest = new Manager('Sam', managerID);
    expect(managerTest.id).toBe(managerID);
});

test('Return manager test number', () => {
    const testNumber = 1234567890;
    const managerTest = new Manager('Sam', 100, 'test@test.com', testNumber)
    expect(managerTest.officeNumber).toBe(testNumber);
})

test("Return role as 'Manager'", () => {
    const testRole = 'Manager';
    const managerTest = new Manager('Sam', 99, 'test@test.com', 123, testRole);
    expect(managerTest.getRole()).toBe(testRole);
})