
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

const index = require('../index');
const employeesQA = [];
// Generates template literal = manager
function generateHTML(employeesQA) {

    return `<!doctype html>
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
        <title>OOP Card Deck</title>
    </head>
    <body>
        <header class="jumbotron">
            <div class="container">
                <div class="row align-self-center">
                    <h1 class="text-center">OOP Card Deck</h1>
                </div>
            </div>
        </header>
        <main>
            <section class='container'>
            <h2 class="card-header">${answers.manager.name}</h2>
            <h3 class="card-header">${answers.manager.role}</h3>
        <div class="card-body">
        <h4 class="card-title">ID: ${answers.manager.id}</h4>
        <h4 class="card-title">Email: <a href="mailto:${answers.manager.email}"></a></h4>
        <h4 class="card-title">Office Number: ${answers.manager.officeNumber}</h4>
        </div>
            </section>
            
    
        <div class="card text-white bg-dark mb-3 engineer" style="max-width: 18rem;">
            <h2 class="card-header">${answers.engineer.name}</h2>
                <h3 class="card-header">${answers.engineer.role}</h3>
            <div class="card-body">
            <h4 class="card-title">ID: ${answers.engineer.id}</h4>      
            <h4 class="card-title">Email: <a href="mailto:${answers.engineer.email}">${answers.engineer.email}</a></h4>
            <h4 class="card-title">GitHub: <a href="http://github.com/${answers.engineer.gitHub}" target="_blank">${answers.engineer.gitHub}</a></h4>
            </div>
        </div>
          
   
        <div class="card text-white bg-dark mb-3 intern" style="max-width: 18rem;">
            <h2 class="card-header">${answers.intern.name}</h2>
                <h3 class="card-header">${answers.intern.role}</h3>
            <div class="card-body">
            <h4 class="card-title">ID: ${answers.intern.id}</h4>
            <h4 class="card-title">Email: <a href="mailto:${answers.intern.email}">${answers.intern.email}</a></h4>
            <h4 class="card-title">School: ${answers.intern.school}</h4>
            </div>
        </div>
       
    </main>
 
</body>
</html>    
    `;


};
HTML = (answers) => {
    fs.writeFile(answers, './dist/generateHTML.html', generateHTML(employeesQA), (err) => {
        err ? console.log(err) : console.log('Successfully created a Card Deck!')
    });
};
module.exports = generateHTML;