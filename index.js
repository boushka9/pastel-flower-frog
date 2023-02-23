// Modules
const inquirer = require('inquirer');
const path = require('path');
const jest = require('jest');

// Constructors for employee, engineer, intern, and manager class'
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// Set absolute path btw current directory and 'dist' for generated HTML 
const DIST_DIR = path.resolve(__dirname, 'dist')
// Join path segments and normalize resulting path
const generatePath = path.join(DIST_DIR, 'index.html');


// Prompt arrays (TBA)
const managerPrompt = [];

const engineerPrompt = [];

const internPrompt = [];

// Prompt user to answer questions about their team 
function init() {

    //Prompt user to enter the team manager’s name, employee ID, email address, and office number
    addManager = () => {
        inquirer.prompt()
        .then()
    }

    // Prompt user with a menu with the option to add an engineer or an intern or to finish building my team
    teamMenu = () => {
        inquirer.prompt()
        .then()
    }

    // Engineer opt. = enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
    addEngineer = () => {
        inquirer.prompt()
        .then()
    }

    // Intern opt. = enter the intern’s name, ID, email, and school, and I am taken back to the menu
    addIntern = () => {
        inquirer.prompt()
        .then()
    }

    // Exit opt. = exit the application, and the HTML is generated
    generateHtml = () => {
        console.info("Your team profile has been generated!")
    }
}

// Call init on npm start
init();