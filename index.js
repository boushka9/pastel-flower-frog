// Modules
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// Constructors for employee, engineer, intern, and manager class'
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const generateTeamString = require('./src/template')

// Set absolute path btw current directory and 'dist' for generated HTML 
const DIST_DIR = path.resolve(__dirname, 'dist')
// Join path segments and normalize resulting path
const generatePath = path.join(DIST_DIR, 'index.html');


// Empty array to push user responses into
const userTeam = [];

// Prompt arrays 
const managerPrompt = [
    {
        type: "input",
        name: "managerName",
        message: "What is the team manager's name?",
        validate: (answer) => {
            if (answer === "") {
                return "This question cannot go unanswered!";
            }
            return true;
        },
    },
    {
        type: "input",
        name: "managerId",
        message: "What is the team manager's employee ID?",
        validate: (answer) => {
            if (answer === "") {
                return "This question cannot go unanswered!";
            } else if (isNaN(answer)) {
                return "Employee ID must be entered in numbers"
            }
            return true;
        },
    },    
    {
     type: "input",
        name: "managerEmail",
        message: "What is the team manager's email?",
        validate: (answer) => {
            //user must enter a valid email format 
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(answer);
            if (valid) {
                return true;
            } else if (answer === "") {
                return "This question cannot go unanswered!";
            }
            return "Please enter a valid email address";
        },   
    },    
    {    
        type: "input",
        name: "managerOffice",
        message: "What is the team manager's office number?",
        validate: (answer) => {
            if (answer === "") {
                return "This question cannot go unanswered!";
            }
            return true;
        },
    }
];
const menuPrompt = [
    {
        type: "list",
        name: "menuOpt",
        message: "Would you like to add another employee to your team?",
        choices: [
            "Engineer",
            "Intern",
            "Exit & Generate Team"
        ]
    }
];

const engineerPrompt = [
    {
        type: "input",
        name: "engineerName",
        message: "What is the Engineer's name?",
        validate: (answer) => {
            if (answer === "") {
                return "This question cannot go unanswered!";
            }
            return true;
        },
    },
    {
        type: "input",
        name: "engineerId",
        message: "What is the Engineer's employee ID?",
        validate: (answer) => {
            if (answer === "") {
                return "This question cannot go unanswered!";
            } else if (isNaN(answer)) {
                return "Employee ID must be entered in numbers"
            }
            return true;
        },
    },    
    {
     type: "input",
        name: "engineerEmail",
        message: "What is the Engineer's email?",
        validate: (answer) => {
            //user must enter a valid email format 
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(answer);
            if (valid) {
                return true;
            } else if (answer === "") {
                return "This question cannot go unanswered!";
            }
            return "Please enter a valid email address";
        },   
    },    
    {    
        type: "input",
        name: "engineerGitHub",
        message: "What is the Engineer's GitHub?",
        validate: (answer) => {
            if (answer === "") {
                return "This question cannot go unanswered!";
            }
            return true;
        },
    }
];

const internPrompt = [
    {
        type: "input",
        name: "internName",
        message: "What is the Intern's name?",
        validate: (answer) => {
            if (answer === "") {
                return "This question cannot go unanswered!";
            }
            return true;
        },
    },
    {
        type: "input",
        name: "internId",
        message: "What is the Intern's employee ID?",
        validate: (answer) => {
            if (answer === "") {
                return "This question cannot go unanswered!";
            } else if (isNaN(answer)) {
                return "Employee ID must be entered in numbers"
            }
            return true;
        },
    },    
    {
     type: "input",
        name: "internEmail",
        message: "What is the Intern's email?",
        validate: (answer) => {
            //user must enter a valid email format 
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(answer);
            if (valid) {
                return true;
            } else if (answer === "") {
                return "This question cannot go unanswered!";
            }
            return "Please enter a valid email address";
        },   
    },    
    {    
        type: "input",
        name: "internSchool",
        message: "What is the Intern's School?",
        validate: (answer) => {
            if (answer === "") {
                return "This question cannot go unanswered!";
            }
            return true;
        },
    }
];

// Prompt user to answer questions about their team 
function initPrompt() {
    console.info("If you don't know the answer to one of the questions, enter 'TBA'")
    //Prompt user to enter the team manager’s name, employee ID, email address, and office number
    function addManager() {
        inquirer.prompt(managerPrompt)
        .then(answers => {
            // Store managerInfo w the classes imported w Manager
            const managerInfo = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice)
            // push managerInfo into empty array
            userTeam.push(managerInfo);
            // then show user the nav menu
            teamMenu()
        })
    }
    // Call addManager = first user prompt
    addManager();

    // Prompt user with a menu with the option to add an engineer or an intern or to finish building my team
    teamMenu = () => {
        inquirer.prompt(menuPrompt)
        .then(answer => {
            switch(answer.menuOpt) {
                // If user selects "Engineer", run func addEngineer
                case "Engineer":
                    addEngineer()
                    break;
                // If user selects "Intern", run func addIntern
                case "Intern":
                    addIntern();
                    break;
                // Else (user selects "Exit"), run func generateHTML    
                default:
                    generateHtml();
            }
        })
    }

    // Engineer opt. = enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
    function addEngineer() {
        inquirer.prompt(engineerPrompt)
        .then(answers => {
            // Store engineerInfo w the classes imported w Engineer
            const engineerInfo = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGitHub)
            // push engineerInfo into empty array
            userTeam.push(engineerInfo);
            // then run..
            teamMenu()
        })
    }

    // Intern opt. = enter the intern’s name, ID, email, and school, and I am taken back to the menu
    function addIntern() {
        inquirer.prompt(internPrompt)
        .then(answers => {
            // Store interInfo w the classes imported w Engineer
            const internInfo = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
            // push internInfo into empty array
            userTeam.push(internInfo);
            // then run..
            teamMenu()
        })
    }

    // Exit opt. = exit the application, and the HTML is generated
    generateHtml = () => {
        const finalString =  generateTeamString(userTeam);

        console.log(userTeam);
        //takes in filepath, generated information, and error for callback
        fs.writeFile(generatePath, finalString, err => {
            if (err) return err
            console.info("Your team profile has been generated!");
        });
    }
}

// Call init on npm start
initPrompt();