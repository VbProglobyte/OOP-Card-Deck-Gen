
const fs = require("fs");
// NPM Packages
const inquirer = require('inquirer');
const jest = require('jest');

// Employee Class section
const Employee = require("./lib/Employee");
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// HTML 
const genHTML = require('./src/genHTML');
// inquirer questions for employees array 
const employeesList = [];

// Questions for each employee type (Engineer, Manager, Intern) //////////////////////////////////////////////////////////////
const managerQuestions = [
    {
        type: 'input',
        message: "Enter the Manager's Name",
        name: 'name'
    },
    {
        type: 'input',
        message: "Enter the Manager's Employee ID Number",
        name: 'id'
    },
    {
        type: 'input',
        message: "Enter the Manager's Email Address",
        name: 'email'
    },
    {
        type: 'input',
        message: "Enter the Manager's Office Number",
        name: 'officeNumber'
    },
]

const engineerQuestions = [
    {
        type: 'input',
        message: "Enter the Engineer's Name",
        name: 'name'
    },
    {
        type: 'input',
        message: "Enter the Engineer's Employee ID Number",
        name: 'id'
    },
    {
        type: 'input',
        message: "Enter the Engineer's Email Address",
        name: 'email'
    },
    {
        type: 'input',
        message: "Enter the Engineer's GitHub User Name",
        name: 'github'
    },
]

const internQuestions = [
    {
        type: 'input',
        message: "Enter the Intern's Name",
        name: 'name'
    },
    {
        type: 'input',
        message: "Enter the Intern's Employee ID Number",
        name: 'id'
    },
    {
        type: 'input',
        message: "Enter the Intern's Email Address",
        name: 'email'
    },
    {
        type: 'input',
        message: "Enter the Intern's School Name",
        name: 'school'
    },
]
// //////////////////////////////////////////////////////////////////////////////////////
function addEmployee() {
    inquirer
        .prompt([
            {
            type: 'list',
            message: "Which type of team member would you like to add?",
            name: 'teamMember',
            choices: ['Engineer', 'Intern', "I don't want to add any more team members."]
            }
        ])
        .then((answer) => {
            if (answer.teamMember == 'Engineer') {
                addEngineer();
            }
            else if (answer.teamMember === 'Intern') {
                addIntern();
            }
            else {
                console.log('Thanks for entering your team information. Your team roster page has been generated.')
                generateHTML('./dist/index.html', html(employeesList));
            }
        })
        .catch((error) => {
            if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            } else {
            // Something else went wrong
            }
  });
}


function genHTML(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Success!'))
  }

init();
