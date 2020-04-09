const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");


const render = require("./lib/htmlRenderer");
const employees = [];

class Start {

    managerPrompt() {
        return inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is the manager's name?",
                    name: "managerName"
                },
                {
                    type: "input",
                    message: "What is your ID?",
                    name: "managerId"
                },
                {
                    type: "input",
                    message: "What is your email?",
                    name: "managerEmail"
                },
                {
                    type: "input",
                    message: "What is your Office Number?",
                    name: "officeNumber"
                },
                {
                    type: "list",
                    name: "otherRoles",
                    message: "What type of team member would you like to add?",
                    choices: [
                        "Intern",
                        "Engineer",
                        "I am done adding team members"
                    ]
                }
            ])
            .then(answer => {
                const manager = new Manager(answer.managerName, answer.managerId, answer.managerEmail, answer.officeNumber)
                employees.push(manager)
                console.log(employees);

                if (answer.otherRoles === "Intern") {
                    this.internPrompt();
                } else if (answer.otherRoles === "Engineer") {
                    this.engineerPrompt();
                }
            })
            .catch(err => {
                console.log("error")
            });

    }
    internPrompt() {
        return inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is the intern's name?",
                    name: "internName"
                },
                {
                    type: "input",
                    message: "What is your ID?",
                    name: "internId"
                },
                {
                    type: "input",
                    message: "What is your email?",
                    name: "internEmail"
                },
                {
                    type: "input",
                    message: "What is your School?",
                    name: "internSchool"
                },
                {
                    type: "list",
                    name: "otherRoles",
                    message: "What type of team member would you like to add?",
                    choices: [
                        "Intern",
                        "Engineer",
                        "I am done adding team members"
                    ]
                }
            ])
            .then(answer => {
                const intern = new Intern(answer.internName, answer.internId, answer.internEmail, answer.internSchool)
                employees.push(intern)
                console.log(employees);

                if (answer.otherRoles === "Intern") {
                    this.internPrompt();
                } else if (answer.otherRoles === "Engineer") {
                    this.engineerPrompt();
                }
            })
            .catch(err => {
                console.log("error")
            });
    }
    engineerPrompt() {
        return inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is the engineer's name?",
                    name: "engineerName"
                },
                {
                    type: "input",
                    message: "What is the engineer's ID?",
                    name: "engineerId"
                },
                {
                    type: "input",
                    message: "What is the engineer's email?",
                    name: "engineerEmail"
                },
                {
                    type: "input",
                    message: "What is the engineer's GitHub URL?",
                    name: "engineerGithub"
                },
                {
                    type: "list",
                    name: "otherRoles",
                    message: "What type of team member would you like to add?",
                    choices: [
                        "Intern",
                        "Engineer",
                        "I am done adding team members"
                    ]
                }
            ])
            .then(answer => {
                const engineer = new Engineer(answer.engineerName, answer.engineerId, answer.engineerEmail, answer.engineerGithub)
                employees.push(engineer)
                console.log(employees);

                if (answer.otherRoles === "Intern") {
                    this.internPrompt();
                } else if (answer.otherRoles === "Engineer") {
                    this.engineerPrompt();
                }
            })
            .catch(err => {
                console.log("error")
            });
    }


}

const generator = new Start
generator.managerPrompt()







// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!
