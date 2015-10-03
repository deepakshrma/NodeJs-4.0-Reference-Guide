"use strict";
class Person {

    //constructor
    constructor(first, last) { //real constructor
        this.first = first;
        this.last = last;
        this.age = 0;
    }

    //defining functions
    getFistName() {
        return this.first;
    }

    getLastName() {
        return this.last;
    }

    getFullName() {
        return this.getFistName() + ' ' + this.getLastName();
    }


    //static methods
    static ageCalculator(dob) {
        return (((Date.now() - dob.getTime()) / (1000 * 60 * 60 * 24 * 365.25)).toFixed(0));
    }

}
//Employee Extends Person class
class Employee extends Person {
    constructor(first, last) { //real constructor
        super(first, last)
        Employee.incrementEmpId();
        this.empId = "Temp" + Person.currentId;
    }

    static incrementEmpId() {
        Person.currentId = ++Person.currentId;
    }

    getEmployeeId() {
        return this.empId;
    }
}
Person.currentId = 100;
// creating object
var deepak = new Employee('Deepak', 'Sharma');

console.log(deepak);

