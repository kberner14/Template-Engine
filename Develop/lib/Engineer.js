// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        //Need to call super before this.github
        super(name, id, email);
        this.github = github;
    }
        
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.github;
    }
    
}

module.exports = Engineer;