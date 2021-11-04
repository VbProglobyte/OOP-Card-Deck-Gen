// const internName = intern.getName();
// const internRole = intern.getRole();
// const internId = intern.getID();
// const internEmail = intern.getEmail();
// const internSchool = intern.getSchool();
// const managerName = manager.getName();
// const managerRole = manager.getRole();
// const managerId = manager.getID();
// const managerEmail = manager.getEmail();
// const managerOfficeNumber = manager.getOfficeNumber();
// const engineerName = engineer.getName();
// const engineerRole = engineer.getRole();
// const engineerId = engineer.getID();
// const engineerEmail = engineer.getEmail();
// const engineerGitHub = engineer.getGitHub();
const inquirer = require("inquirer");
const fs = require("fs");
const index = require('../index');
const employeesQA = [];
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");


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
                    <li class="list-group-item">GitHub: <a href="https://www.github.com/${engineer.getGit()}" target="_blank">${engineer.getGit()}</a></li>
                </ul>
            </div>`
}
const internCard = (intern) => {
    return `<div class="m-2 card">
                <div class="card-header bg-secondary text-white">
                    <h2>${intern.getName()}</h2>
                    <h2>${intern.getRole()}</h2>
                </div>
                <ul class="listr-group list-group-flush">
                    <li class="list-group-item">ID: 1</li>
                    <li class="list-group-item">E-mail: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>`
}
//loop through employee data
function generateHTML(data) {
    let { manager, engineer, intern } = data;
    let html = "";
    // if's so you can't enter in an empty string
    if (data.length > 0) {
        manager.forEach(data => {
            html += managerCard(data);
        })
    }
    if (data.length > 0) {
        engineer.forEach(data => {
            html += engineerCard(data);
        })
    }
    if (data.length > 0) {
        intern.forEach(data => {
            html += internCard(data);
        })
    }

    let generatedHtml = `<!doctype html>
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
    
        <body>
            <div class="d-flex">
                ${html}
            </div>
        </body>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj"
            crossorigin="anonymous"></script>
    </body>
    </html>`

    return generatedHtml;
}


module.exports = generateHTML;