const Manager = require('../lib/Manager.js');

describe ("Manager test", () => {
    let manager  
    //beforeEach to limit variable USAGE (dry)
    beforeEach(() => {
        manager = new Manager("Val", 1234, "val@email.com", "0001");
    });
    describe("Creation of manager test", () => {
        it("Should create a new manager object", () =>{
           
            expect(manager.name).toEqual("Val");
            expect(manager.id).toEqual(1234);
            expect(manager.email).toEqual("val@email.com");
            expect(manager.officeNumber).toEqual("0001");
        })

    })
    
    it("Should return a office number for the manager", () => {
        expect(manager.getOfficeNumber()).toBe("0001")
    })

    it("Should return manager for the role", () => {
        expect(manager.getRole()).toBe("Manager")
    })
})



// * `officeNumber`

// * `getRole()`&mdash;overridden to return `'Manager'`
