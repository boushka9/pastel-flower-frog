const Employee = require('./Employee')

// Makes engineer a child class of employee
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // Invoke superclass consturctor
        super(name, id, email)
        this.github = github;
        this.role = 'Engineer'
    }

    // Github returns with user response
    getGithub() {
        return this.github;
    }

    // Overridden to return 'Engineer'
    getRole() {
        return this.role;
    }
    
}

module.exports = Engineer;