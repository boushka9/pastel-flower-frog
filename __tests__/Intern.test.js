const Intern = require('../lib/intern');

test('Should create a new intern named Danny', () => {
    const internName = 'Danny';
    const internTest = new Intern('Danny');
    expect(internTest.name).toBe(internName)
});

test('Return intern school', () => {
    const testSchool = "UT Austin";
    const internTest = new Intern('Danny', 99, 'test@test.com', testSchool)
    expect(internTest.getSchool()).toBe(testSchool)
})

test("Return role as 'Intern'", () => {
    const testRole = 'Intern';
    const internTest = new Intern('Danny', 99, 'test@test.com');
    expect(internTest.getRole()).toBe(testRole);
})