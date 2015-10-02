"use strict";
function Person(name) {
    if (this) {
        this.name = name;
        this.that = this;
    }
}
var withNew = new Person("Deepak");
var withOutNew = Person("Hello");


console.log(typeof withNew);
console.log(withNew.that === withNew);
console.log(typeof withOutNew)
//Output:
//object
//true
//undefined
