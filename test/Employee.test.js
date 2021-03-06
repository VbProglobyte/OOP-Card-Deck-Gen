const Employee = require('../lib/Employee.js');
//1) perams test /////////////////////////////////////////////////////////////
describe("Employee INFO  - name, ID, email, role", () => {
    let employee = 
    beforeEach(() => {
        employee = new Employee("Val", 1234, "val@email.com");
    });
  describe("INFO", () => {
    it("Should return a new employee object", () => {
    // const employee = new Employee("Val", 1234, "val@email.com");

        expect(employee.name).toEqual("Val");
        expect(employee.id).toEqual(1234);
        expect(employee.email).toEqual("val@email.com");
     //--------------------------------------------------
        });
    });

    describe("Name", () => {
    // 1 * `name`-------------------------------------------
        it("should return employees name", () => {
            // const employee = new Employee("Val", 1234, "val@email.com");
            // * `getName()`
            expect(employee.getName()).toBe("Val");        
        })
    });
    describe("ID", () => {
    // 2 * `id`-------------------------------------------
        it("should return employee's ID", () => {
            // const employee = new Employee("Val", 1234, "val@email.com");
            // * `getId()`
            expect(employee.getId()).toBe(1234);
        })
    });
    describe("Email", () => {
    // 3 * `email`-------------------------------------------
        it("should return employee's email", () => {
            // const employee = new Employee("Val", 1234, "val@email.com");
            // * `getEmail()`
            expect(employee.getEmail()).toBe("val@email.com");
        })
    });
    describe("Role", () => {
    // 4 * `getRole()`&mdash;-------------------------------------------
        it("should return employee's role: employee", () => {
            // const employee = new Employee("Val", 1234, "val@email.com");
            //returns `'Employee'`
            expect(employee.getRole()).toBe("Employee"); //this will be overidden for other classes 
        })

    });

 
});   