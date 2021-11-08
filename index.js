
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
// let genHTML = require('C:\\OOP-Card-Deck-Gen\\dist\\index.html');
// const generateHTML = require('./dist/generateHTML.js');
// let employeesQA = '';
// inquirer questions for employees array 
const employeesQA = [];
let managerArr = [];
let engineerArr = [];
let internArr = [];

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
            managerArr.push(manager);
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
            engineerArr.push(engineer);
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
            internArr.push(intern);
            // console.log(employeesQA); //employee array is working 
           
        })
//   .then(generateHTML);     
};
// let { manager, engineer, intern } = data;
    let generateHTML = "";
// function generatedHtml(answers) {}
// Generates template literal = manager
const managerCard = (manager) => {
    return `<div class="m-2 card">
                <div class="card-header bg-success text-white">
                    <h2>${manager.getName()}</h2>
                    <h2>${manager.getRole()}</h2>
                </div>
                <ul class="listr-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">E-mail: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office Number: ${manager.getOfficeNum()}</li>
                </ul>
            </div>`
            generateHTML += managerCard;
            html += managerCard(data);
}

const engineerCard = (engineer) => {
    return `<div class="m-2 card">
                <div class="card-header bg-primary text-white">
                    <h2>${engineer.getName()}</h2>
                    <h2>${engineer.getRole()}</h2>
                </div>
                <ul class="listr-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">E-mail: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://www.github.com/${engineer.getGitHub()}" target="_blank">${engineer.getGitHub()}</a></li>
                </ul>
            </div>`
            generateHTML += engineerCard;
}
const internCard = 
     `<div class="m-2 card">
                <div class="card-header bg-secondary text-white">
                    <h2>${intern.getName()}</h2>
                    <h2>${intern.getRole()}</h2>
                </div>
                <ul class="listr-group list-group-flush">
                    <li class="list-group-item">ID: 1</li>
                    <li class="list-group-item">E-mail: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
            </body>
            </html>`
            generateHTML += internCard;


    let introHtml = `<!doctype html>
    <html lang="en">
    
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
            <link rel="stylesheet" href="style.css">
            <title>OOP Card Deck</title>
    </head>
    
    <body>
        <header class="bg-primary bg-gradient text-center">
            <h1>OOP Card Deck</h1>
        </header>
    
        
            <div class="d-flex">
               
            </div>
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj"
            crossorigin="anonymous"></script>
   `

 generateHTML += introHtml += managerCard += engineerCard += internCard;



// generates HTML based on user questions 

    //  welcome();
    // const joinedHTML = generateHTML.join('');
    // const HTML = generateHTML(joinedHTML);
    fs.writeFile('./dist/generateHTML.html', generateHTML, (err) => {
        err ? console.log(err) : console.log('Successfully created a Card Deck!')
    });
    // return generateHTML;


// INITIALIZATION //////////////////////////////////////// with welcome message, then manager questions 
const init = () => { welcome()
    .catch((err) => console.error(err));
};
init();