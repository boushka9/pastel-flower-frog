const Employee = require('./Employee');

// Makes manager a child class of employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // Invoke superclass consturctor
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    officeNumber() {
        return this.officeNumber;
    }

    // Overridden to return 'Manager'
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;