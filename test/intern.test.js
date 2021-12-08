const Intern = require("../lib/Intern");

describe('Intern', () => {

    describe('Instantiation', () => {

        it('should contain all intern information', () => {
            
            let testIntern = new Intern("Bailey", 8, "Bailey@internlife.com", "Intern", "SMU")
            
            expect(testIntern.name).toEqual("Bailey")
            expect(testIntern.id).toEqual(8)
            expect(testIntern.email).toEqual("Bailey@internlife.com")
            expect(testIntern.role).toEqual("Intern")
            expect(testIntern.school).toEqual("SMU")
            

        });
        
    });

    describe('get school name', () => {

        it('should return the name of interns school', () => {

            let testIntern = new Intern("Bailey", 8, "Bailey@internlife.com", "Intern", "SMU")
    
            let school = testIntern.getSchool();

            expect(school).toEqual("SMU")
         
        });
        
    });
    
});