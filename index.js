
const fs = require("fs");
// NPM Packages
const inquirer = require('inquirer');
// const jest = require('jest');

// Employee Class section
const Employee = require("./lib/Employee");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// renders
let team = [];
let teamArr = [];
let finalHtml = "";

let managerAnswers = {

}
let engineerAnswers = {

}
let internAnswers = {

}
let render = "";
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
const welcome = async () => {
    return await inquirer.prompt([
        {
            type: 'input',
            name: 'welcome',
            message: '\nYou will be asked to input information about your team. Team profiles will be Manager, Engineer, and Intern. Press ENTER to continue. \n',
        },
    ])
    // .then(addManager)
};

const managerCard = (MGR) => {
    return `<div class="m-2 card">
                <div class="card-header bg-success text-white">
                    <h2>${MGR.getName()}</h2>
                    <h2>${MGR.getRole()}</h2>
                </div>
                <ul class="listr-group list-group-flush">
                    <li class="list-group-item">ID: ${MGR.getId()}</li>
                    <li class="list-group-item">E-mail: <a href="mailto:${MGR.getEmail()}">${MGR.getEmail()}</a></li>
                    <li class="list-group-item">Office Number: ${MGR.getOfficeNumber()}</li>
                </ul>
            </div>`
}

const engineerCard = (ENG) => {
    return `<div class="m-2 card">
                <div class="card-header bg-primary text-white">
                    <h2>${ENG.getName()}</h2>
                    <h2>${ENG.getRole()}</h2>
                </div>
                <ul class="listr-group list-group-flush">
                    <li class="list-group-item">ID: ${ENG.getId()}</li>
                    <li class="list-group-item">E-mail: <a href="mailto:${ENG.getEmail()}">${ENG.getEmail()}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://www.github.com/${ENG.getGitHub()}" target="_blank">${ENG.getGitHub()}</a></li>
                </ul>
            </div>`
}

const internCard = (INTN) => {
    return `<div class="m-2 card">
                <div class="card-header bg-secondary text-white">
                    <h2>${INTN.getName()}</h2>
                    <h2>${INTN.getRole()}</h2>
                </div>
                <ul class="listr-group list-group-flush">
                    <li class="list-group-item">ID: 1</li>
                    <li class="list-group-item">E-mail: <a href="mailto:${INTN.getEmail()}">${INTN.getEmail()}</a></li>
                    <li class="list-group-item">School: ${INTN.getSchool()}</li>
                </ul>
            </div>
            </body>
            </html>`
}


const generateHTML = (teamJoin) => {
    return `<!doctype html>
    <html lang="en">
    
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
            
            <title>OOP Card Deck</title>
    </head>
    
    <body>
        <header class="bg-primary bg-gradient text-center">
            <h1>OOP Card Deck</h1>
        </header>
    
        
            <div class="d-flex">
             ${teamJoin}
            </div>
        
        
   `
}
// prompt for specific question group - start with Manager default  ------ init()

// //////////////////////////////////////////////////////////////////////////////////////
// MANAGER
const addManager = async () => {
    console.log('Enter your team. Lets start with the Manager.')
     await inquirer.prompt(managerQuestions) // initialize with manager questions 
        .then((answers) => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            team.push(managerCard(manager));
            console.log("inside manager");
            console.log(manager);
            console.log(team)
            // team = managerCard(manager)
        })
    // .then(addEngineer)
};


// ENGINEER 
const addEngineer = async () => {
    console.log("Now lets enter in the Engineer's data.")
    return await inquirer.prompt(engineerQuestions)
        .then((answers) => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            team.push(engineerCard(engineer));
            // console.log(employeesQA);
            console.log("inside engineer");
            console.log(engineer)

        })
    // .then(addIntern)

};

// INTERN
const addIntern = async () => {
    console.log("Now lets enter in the intern's data.")
    return await inquirer.prompt(internQuestions)
        .then((answers) => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            team.push(internCard(intern));
            // console.log(employeesQA); //employee array is working 
            console.log("inside intern");
            console.log(intern)
            teamArr = team.join("")
            console.log(teamArr);
            render = teamArr;
           finalHtml = generateHTML(render);
           console.log(typeof finalHtml)
        })
    // .then(render = generateHTML(teamArr));
};


// return generateHTML;
const createHtml = async () => {
    // await welcome();
    await addManager();
    console.log("this is inside manager")
    await addEngineer();
    await addIntern();
    await fs.writeFileSync('./dist/generateHTML.html', finalHtml)
}

// INITIALIZATION //////////////////////////////////////// with welcome message, then manager questions 
const init = async () => {
   await createHtml()
};
init();