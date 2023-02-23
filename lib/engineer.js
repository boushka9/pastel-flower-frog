const Employee = require('./Employee')

// Makes engineer a child class of employee
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // Invoke superclass consturctor
        super(name, id, email)
        this.guthub = github;
    }

    getGithub() {
        return this.github;
    }

    // Overridden to return 'Engineer'
    getRole() {
        return 'Engineer'
    }
    
}

module.exports = Engineer;