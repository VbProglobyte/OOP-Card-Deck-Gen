
const fs = require("fs");
// NPM Packages
const inquirer = require('inquirer');
// const jest = require('jest');

// Employee Class section
// const Employee = require("./lib/Employee");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// HTML 
let genHTML = require('C:\\OOP-Card-Deck-Gen\\dist\\index.html');
// let genHTML = '';
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
            const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        })
        .then(addEngineer)
}


// ENGINEER 
const addEngineer = () => {
    console.log("Now lets enter in the Engineer's data.")
    inquirer.prompt(engineerQuestions)
        .then((answers) => {
            const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        })
        .then(addIntern)
}

// INTERN
const addIntern = () => {
    console.log("Now lets enter in the intern's data.")
    inquirer.prompt(internQuestions)
        .then((answers) => {
            const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
            
        })
    
};

// generates HTML based on user questions 
genHTML = () => {
    // inquirer.prompt(managerQuestions, engineerQuestions, internQuestions)
    // genHTML(employeesList)    
    // .then(newManager, newEngineer, newIntern) => {   
    fs.writeFile(genHTML(newManager, newEngineer, newIntern), (err) => {
        
        if (err) {
            return console.log(err);
        }
       
        console.log('Success! Card deck is available.')
    })
};

// fs.writeFile('./dist/generateHTML.html', genHTML(employeesList), function(err) {
//     (err) ? console.log('error', err): console.log(`\r\nSuccessfully wrote MyTeam.html to your dist folder.`.underline.green);
//     }
// );

// INITIALIZATION //////////////////////////////////////// with manager questions 
const init = () => welcome()
init();
