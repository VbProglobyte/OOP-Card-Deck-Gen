const Engineer = require('../lib/Engineer.js');

describe ("engineer test", () => {
    let engineer  
    //beforeEach to limit variable USAGE (dry)
    beforeEach(() => {
        engineer = new Engineer("Val", 1234, "val@email.com", "engineer@gitHub.com");
    });
    describe("Creation of engineer test", () => {
        it("Should create a new engineer object", () =>{
           
            expect(engineer.name).toEqual("Val");
            
            expect(engineer.id).toEqual(1234);
            expect(engineer.email).toEqual("val@email.com");
            expect(engineer.gitHub).toEqual("engineer@gitHub.com");
        })

    })
    
    it("Should return a gitHub for the engineer", () => {
        expect(engineer.getGitHub()).toBe("engineer@gitHub.com")
    })

    it("Should return engineer for the role", () => {
        expect(engineer.getRole()).toBe("Engineer")
    })
})


// * `github`&mdash;GitHub username

// * `getGithub()`

// * `getRole()`&mdash;overridden to return `'Engineer'`