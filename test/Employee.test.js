const Employee = require('../lib/Employee.js');
//1) perams test /////////////////////////////////////////////////////////////
describe("Employee INFO (name, ID, email, role)", () => {
  describe("INFO", () => {
    it("Should return name inputed", () => {
        
        const employee = new Employee("Val", 1234, "Val@email.com");

        let nameInput = false;
                
                if (employee.name === "Val") {
                    nameInput = true;
                }
                expect(nameInput).toBe(false);
            });
     //--------------------------------------------------


        describe("functions", () => {
        // 1 * `name`-------------------------------------------
            it("should return employees name", () => {
                const employee = new Employee("Val", 1234, "Val@email.com");
                // * `getName()`
                expect(employee.getName()).toBe("Val");        
            });
        // 2 * `id`-------------------------------------------
            it("should return employee's ID", () => {
                const employee = new Employee("Val", 1234, "Val@email.com");
                // * `getId()`
                expect(employee.getID()).toBe(1234);
            });
        // 3 * `email`-------------------------------------------
            it("should return employee's email", () => {
                const employee = new Employee("Val", 1234, "Val@email.com");
                // * `getEmail()`
                expect(employee.getEmail()).toBe("Val@mail.com");
            });
        // 4 * `getRole()`&mdash;-------------------------------------------
            it("should return employee's role: employee", () => {
                const employee = new Employee("Val", 1234, "Val@email.com");
                //returns `'Employee'`
                expect(employee.getRole()).toBe("Employee");
            });

    });

});     