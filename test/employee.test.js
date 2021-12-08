const Employee = require("../lib/Employee");

describe('Employee', () => {
    
    describe('instantiation', () => {

        it('should ', () => {

            let testEmployee = new Employee("Jason", 3, "Jason@gmail.com", "Employee");

            expect(testEmployee.name).toEqual("Jason")
            expect(testEmployee.id).toEqual(3)
            expect(testEmployee.email).toEqual("Jason@gmail.com")
            expect(testEmployee.role).toEqual("Employee")

        });
        
    });

    describe('get name', () => {

        it('should return employee name correctly ', () => {

            let testEmployee = new Employee("Jason", 3, "Jason@gmail.com", "Employee")

            expect(testEmployee.name).toEqual("Jason")
        });
    });

    describe('get id', () => {

        it('should return employee id number correctly ', () => {

            let testEmployee = new Employee("Jason", 3, "Jason@gmail.com", "Employee")

            expect(testEmployee.id).toEqual(3)
        });
    });

    describe('get email', () => {

        it('should return employee email correctly', () => {

            let testEmployee = new Employee("Jason", 3, "Jason@gmail.com", "Employee")

            expect(testEmployee.email).toEqual("Jason@gmail.com")
        });
    });

    describe('get role', () => {

        it('should return employee role correctly ', () => {

            let testEmployee = new Employee("Jason", 3, "Jason@gmail.com", "Employee")

            expect(testEmployee.role).toEqual("Employee")
        });
    });

});