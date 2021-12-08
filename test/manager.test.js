const Manager = require("../lib/Manager");

describe('Manager', () => {

    describe('instantiation', () => {

        it('should contain all manager atts ', () => {
            // Arrange
            let testManager = new Manager("Frank", 1, "frank@gmail.com", "Manager", "G22");
            // Act
            // Assert
            expect(testManager.name).toEqual("Frank")
            expect(testManager.id).toEqual(1)
            expect(testManager.email).toEqual("frank@gmail.com")
            expect(testManager.role).toEqual("Manager")
            expect(testManager.officeNumber).toEqual("G22")
        });

    });

    describe('get Employee role', () => {


        it('should return a letter followed by two numbers', () => {

            let testManager = new Manager("Frank", 1, "frank@gmail.com", "Manager", "G22");

            expect(testManager.role).toEqual("Manager")
        });
    });

    describe('get office number', () => {


        it('should return a letter followed by two numbers', () => {

            let testManager = new Manager("Frank", 1, "frank@gmail.com", "Manager", "G22");

            let officeNumber = testManager.getofficeNumber();

            expect(officeNumber).toEqual("G22")
        });
    });

});