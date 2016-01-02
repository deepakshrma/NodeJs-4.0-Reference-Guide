//Require events module
var events = require("events");
var EventEmitter = events.EventEmitter;
var helpers = require("./../helpers");
helpers.init();
var UserController = require("./../module/users/users-controller");
var tasks = [];

tasks.push(function () {
//1. Bind and fire event
    var ee = new EventEmitter();
//subscribe/bind an event
    ee.on("someEvent", function () {
        tense = 'after';
        console.log("event has occured");
    });
//publish an event
    ee.emit("someEvent");
});

tasks.push(function () {
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
});

tasks.push(function () {
//3. Multiple callback binding, By default it is 10
    var ee3 = new EventEmitter();
    ee3.setMaxListeners(20);
    ee3.on("ee3", function () {
        console.log("event 1");
    });
    ee3.on("ee3", function () {
        console.log("event 2");
    });
    ee3.on("ee3", function () {
        console.log("event 3");
    });
    ee3.on("ee3", function () {
        console.log("event 4");
    });
    ee3.on("ee3", function () {
        console.log("event 5");
    });
    ee3.on("ee3", function () {
        console.log("event 6");
    });
    ee3.on("ee3", function () {
        console.log("event 7");
    });
    ee3.on("ee3", function () {
        console.log("event 8");
    });
    ee3.on("ee3", function () {
        console.log("event 9");
    });
    ee3.on("ee3", function () {
        console.log("event 10");
    });
    ee3.on("ee3", function () {
        console.log("event 11");
    });
    ee3.emit("ee3");
});

tasks.push(function () {
//4. Bind once
    var ee4 = new EventEmitter();
    ee4.once("ee4", function () {
        console.log("You'll never see this again");
    });
    ee4.emit("ee4");
    ee4.emit("ee4");
});
tasks.push(function () {
//5. What if code burst and throw error?
    var ee5 = new EventEmitter();
    ee5.once("ee5", function () {
        console.log("Before error comes!");
        throw new Error('Some error here!');
        console.log("This will never execute! Ever!!");
        console.log("EventEmitter is a design pattern to avoid callback hell");
        console.log("It does not handles uncaught errors");
    });
    ee5.emit("ee5");
});

tasks.push(function () {
//6. remove single bind functions on an event.- removeListener('event name', func_to_remove)
    var ee6 = new EventEmitter();

    function onlyOnce() {
        console.log("You'll never see this again! onlyOnce!");
        ee6.removeListener('ee6', onlyOnce)
    }

    function run2() {
        console.log("You'll see this again! run2!");
    }

    ee6.on("ee6", onlyOnce);
    ee6.on("ee6", run2);
    ee6.emit("ee6");
    ee6.emit("ee6");
});


tasks.push(function () {
//7. remove all bind functions on an event.- removeAllListeners('event name')
    var ee7 = new EventEmitter();

    function onlyOnce() {
        console.log("You'll never see this again! onlyOnce!");
        ee7.removeAllListeners('ee7')
    }

    function run2() {
        console.log("You'll see this again! run2!");
    }

    ee7.on("ee7", onlyOnce);
    ee7.on("ee7", run2);
    ee7.emit("ee7");
    ee7.emit("ee7");
});
tasks.push(function () {
//8. get all bind functions on an event.- listeners('event name')
    var ee8 = new EventEmitter();

    function onlyOnce() {
        console.log(ee8.listeners("ee8"));
        ee8.removeListener('ee8', onlyOnce)
        console.log(ee8.listeners("ee8"));
    }

    function run2() {
        console.log("You'll see this again! run2!");
    }

    ee8.on("ee8", onlyOnce);
    ee8.on("ee8", run2);
    ee8.emit("ee8");
    ee8.emit("ee8");
});

tasks.push(function () {
    /**
     * 9. EventEmitter fires events newListener or removeListener
     *  whenever a function bind to an event or remove from event accordingly
     */
    var ee9 = new EventEmitter();

    function saveUser(user) {
        console.log('User details:', saveUser.toString());
    }

    ee9.on("newListener", function (eventName, fn) {
        console.info('newListener: ', eventName, fn);
    });
    ee9.on("removeListener", function (eventName, fn) {
        console.info('removeListener: ', eventName, fn);
    });
    ee9.on("saveUser", saveUser);
    ee9.removeListener("saveUser", saveUser);
});
tasks.push(function () {
    /**
     * 10. Internal module which extends EventEmitter
     * */
    var http = require("http");
    var server = http.createServer();
    function handleRequest(req, res) {
        res.end("this is the response");

        //server.removeListener('request',handleRequest)
    }
    server.on("request",handleRequest );
    server.on("removeListener", function (eventName) {
        console.info('removeListener: ', eventName);
    });

    server.listen(3000);
});
tasks.push(function () {
    /**
     * 11. Inherits or extend EventEmitter|| custom EventEmitters class
     * */
    UserController.save({name: "John Jacob", occupation: "developer"});
});
//tasks[0]();
//tasks[1]();
//tasks[2]();
//tasks[3]();
//tasks[4]();
//tasks[5]();
//tasks[6]();
//tasks[7]();
//tasks[8]();
//tasks[9]();
tasks[10]();
