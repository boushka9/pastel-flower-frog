const Engineer = require('../lib/engineer');

test('Should create a new engineer object named Danny', () => {
    const engineerTest = new Engineer('Danny');
    expect(typeof(engineerTest)).toBe('object')
});

test('Return github account', () => {
    const gitAccount = "testAccount";
    const engineerTest = new Engineer('Danny', 99, 'test@test.com', gitAccount)
    expect(engineerTest.getGithub()).toBe(gitAccount)
})

test("Return role as 'Engineer'", () => {
    const testRole = 'Engineer';
    const engineerTest = new Engineer('Danny', 99, 'test@test.com');
    expect(engineerTest.getRole()).toBe(testRole);
})