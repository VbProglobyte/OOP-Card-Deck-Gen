
const fs = require("fs");
// NPM Packages
const inquirer = require('inquirer');
// const jest = require('jest');

// Employee Class section
const Employee = require("./lib/Employee");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// HTML 
// let genHTML = require('C:\\OOP-Card-Deck-Gen\\dist\\index.html');
const generateHTML = require('./dist/generateHTML.js');
// let employeesQA = '';
// inquirer questions for employees array 
const employeesQA = [];

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


// Welcome prompt +++++++++++++++++++++++
const welcome = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'welcome',
            message: '\nYou will be asked to input information about your team. Team profiles will be Manager, Engineer, and Intern. Press ENTER to continue. \n',
        },
    ])
        .then(addManager)
};

// prompt for specific question group - start with Manager default  ------ init()

// //////////////////////////////////////////////////////////////////////////////////////
// MANAGER
const addManager = () => {
    console.log('Enter your team. Lets start with the Manager.')
    inquirer.prompt(managerQuestions) // initialize with manager questions 
        .then((answers) => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            employeesQA.push(manager);
            // console.log(employeesQA);
           
        })
        .then(addEngineer)
};


// ENGINEER 
const addEngineer = () => {
    console.log("Now lets enter in the Engineer's data.")
    inquirer.prompt(engineerQuestions)
        .then((answers) => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            employeesQA.push(engineer);
            // console.log(employeesQA);
           
        })
        .then(addIntern)

};

// INTERN
const addIntern = () => {
    console.log("Now lets enter in the intern's data.")
    inquirer.prompt(internQuestions)
        .then((answers) => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            employeesQA.push(intern);
            // console.log(employeesQA); //employee array is working 
           
        })
       
};

// generates HTML based on user questions 
HTML = (answers, employeesQA) => {
    fs.writeFile(answers, './dist/generateHTML.html', generateHTML(employeesQA), (err) => {
        err ? console.log(err) : console.log('Successfully created a Card Deck!')
    });
};

// INITIALIZATION //////////////////////////////////////// with welcome message, then manager questions 
const init = () => welcome() 
// init();
init(HTML);