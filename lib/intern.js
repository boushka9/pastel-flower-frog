const Employee = require('./Employee')

// Makes intern a child class of employee
class Intern extends Employee {
    constructor(name, id, email, school) {
        // Invoke superclass consturctor
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    // Overridden to return 'Intern'
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;