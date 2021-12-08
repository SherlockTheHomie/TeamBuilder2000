const Engineer = require("../lib/Engineer");

describe('Engineer', () => {
    
    describe('Instantiation', () => {

        it('should contain all Engineer information', () => {

            let testEngineer = new Engineer("Sally", 5, "sally@gmail.com", "Engineer", "https://github.com/SallySuperCode")
    

            expect(testEngineer.name).toEqual("Sally")
            expect(testEngineer.id).toEqual(5)
            expect(testEngineer.email).toEqual("sally@gmail.com")
            expect(testEngineer.role).toEqual("Engineer")
            expect(testEngineer.github).toEqual("https://github.com/SallySuperCode")

        });
        
    });

    describe('get role', () => {


        it('should return the role Engineer', () => {

            let testEngineer = new Engineer("Sally", 5, "sally@gmail.com", "Engineer", "https://github.com/SallySuperCode");

            expect(testEngineer.role).toEqual("Engineer")
        });
    });


    describe('get github link', () => {

        it('should return a link to github', () => {

            let testEngineer = new Engineer("Sally", 5, "sally@gmail.com", "Engineer", "https://github.com/SallySuperCode");
    
            let github = testEngineer.getGithub();

            expect(github).toEqual("https://github.com/SallySuperCode")
         
        });
        
    });
});


