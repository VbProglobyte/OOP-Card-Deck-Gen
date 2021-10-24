const Employee = require('../lib/Employee');
//extention of Employee 
class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school;
    }
getSchool(){
    return this.school
}
getRole(){
    return "Intern"
}
}

// * `getSchool()`

// * `getRole()`to return `'Intern'`

module.exports = Intern;