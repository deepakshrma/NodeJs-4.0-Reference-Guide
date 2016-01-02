//Require events module
var events = require("events");
var EventEmitter = require("events").EventEmitter;

//1. Bind and fire event
var ee = new EventEmitter();
//subscribe/bind an event
ee.on("someEvent", function () {
    tense = 'after';
    console.log("event has occured");
});
//publish an event
ee.emit("someEvent");
//EventEmitter vs nextTick vs console.log vs console.error
//2. What would be output of the below give code?
var ee2 = new EventEmitter();
var tense = 'before';
//subscribe/bind an event
ee2.on("e2", function () {
    console.log("event2 has occurred " + tense);
    tense = 'after';
});
//publish an event
ee2.emit("e2");
process.nextTick(function () {
    console.log('nextTick will ' + tense + ' event occurs');
})
console.log('console will ' + tense + ' event occurs');
console.error('console will ' + tense + ' event occurs');