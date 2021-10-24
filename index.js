
const fs = require("fs");
// NPM Packages
const inquirer = require('inquirer');
// const jest = require('jest');

// Employee Class section
const Employee = require("./lib/Employee");
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// HTML 
const genHTML = require('./dist/generateHTML');
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
function init() {
    console.log('Enter your team')
    inquirer.prompt(managerQuestions) // initialize with manager questions 
    .then((answers) => {
        const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            employeesList.push(newManager);
            addEmployee();
    });
}
function addEmployee() {
    inquirer.prompt([
            {
            type: 'list',
            message: "What role of employee will you be adding?",
            name: 'employeeMember',
            choices: ['Engineer', 'Intern', 'That is everyone!']
            }
        ])
        .then((answer) => {
            if (answer.employeeMember == 'Engineer') {
                addEngineer();
            }
            else if (answer.employeeMember === 'Intern') {
                addIntern();
            }
            else {
                console.log('Thank you! Your team card deck has been generated.')
                generateHTML('./dist/index.html', html(employeesList)); // created empty array for employee list
            }
        });
}
// prompt for specific question group - start with Manager default 
// ENGINEER 
function addEngineer() {
    console.log('Please provide the following data:')
    inquirer.prompt(engineerQuestions)
        .then((answers) => {
            const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            employeesList.push(newEngineer);
            addEmployee();
        });
}

// INTERN
function addIntern() {
    console.log('Please provide the following data:')
    inquirer.prompt(internQuestions)
        .then((answers) => {
            const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
            employeesList.push(newIntern);
            addEmployee();
        });    
}
// generates HTML based on user questions 
function genHTML(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Success! Card deck is available.'))
  }
// INITIALIZATION ////////////////////////////////////////
init();
