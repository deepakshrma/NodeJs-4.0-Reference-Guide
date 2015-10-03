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



}
// creating object
var deepak = new Person("Deepak", "Sharma");

console.info(deepak.getFistName());


console.info(deepak.getFullName());

