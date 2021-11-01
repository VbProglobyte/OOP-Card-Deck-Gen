const fs = require('fs');
const index = require('C:\\OOP-Card-Deck-Gen\\index.js');

// Generate HTML for MyTeam
const generate = (employeesList) => {
    // Functions to Create New Arrays of Employee Card HTML, Grouping Employees by Role
    // function newManagers(employee) {
    //     for (i = 0; i < employee.length; i++) {
    //         if (employee[i].role === "Manager") {
    //             manager.push(employee[i].managerCard);
    //         }
    //     }
    // }
    // function newEngineers(employee) {
    //     for (i = 0; i < employee.length; i++) {
    //         if (employee[i].role === "Engineer") {
    //             engineer.push(employee[i].engineerCard);
    //         }
    //     }
    // }
    // function newInterns(employee) {
    //     for (i = 0; i < employee.length; i++) {
    //         if (employee[i].role === "Intern") {
    //             intern.push(employee[i].internCard);
    //         }
    //     }
    // }

    // Arrays to Hold HTML for Each Employee Card by Role
    let manager = [];
    let engineer = [];
    let intern = [];

    // Generate Arrays of Employee Cards
    newManagers(employeesList);
    newEngineers(employeesList);
    newInterns(employeesList);

    return `
    <!doctype html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <!--Stylesheets-->
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
            <link rel="preconnect" href="https://fonts.gstatic.com">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?&family=Poppins:wght@200;300;400;500&family=Roboto:wght@300;400;500;700&display=swap" >
            <link rel="stylesheet" href="style.css">
            <title>My Team</title>
        </head>
        <body>
            <header class="jumbotron">
                <div class="container">
                    <div class="row align-self-center">
                        <h1 class="text-center">My Team</h1>
                    </div>
                </div>
            </header>
            <main>
                <section class='container'>
                    <div class='row'>
                        ${manager.join(" ")}
                    </div>
                </section>
                <hr class='mt-1 mb-4'/>
                <section class='container'>
                    <div class='row'>
                        ${engineer.join(" ")}
                    </div>
                </section>
                <hr class='mt-1 mb-4'/>
                <section class='container'>
                    <div class='row'>
                        ${intern.join(" ")}
                    </div>
                </section>
            </main>
        </body>
    </html>`
}




module.exports = 'C:\OOP-Card-Deck-Gen\dist\generateHTML.js';