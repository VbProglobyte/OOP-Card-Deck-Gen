const Intern = require('../lib/Intern');

describe ("Intern test", () => {
    let intern  
    //beforeEach to limit variable USAGE (dry)
    beforeEach(() => {
        intern = new Intern("Val", 1234, "val@email.com", "SMU");
    });
    describe("Creation of intern test", () => {
        it("Should create a new intern object", () =>{
           
            expect(intern.name).toEqual("Val");
            expect(intern.id).toEqual(1234);
            expect(intern.email).toEqual("val@email.com");
            expect(intern.school).toEqual("SMU");
        })

    })
    it("Should return a school for the intern", () => {
        expect(intern.getSchool()).toBe("SMU")
    })
        
})


// * `school`

// * `getSchool()`

// * `getRole()`&mdash;overridden to return `'Intern'`