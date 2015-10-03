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
// creating object


console.info(Person.ageCalculator(new Date(1989, 7, 31)));



