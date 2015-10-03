(function () {
    "use strict";

    //config read only
    //constant value like Math.PI so that it cant be override again


    // NOTE: Constants can be declared with uppercase or lowercase, but just by convention, we are using uppercase
// define my_fav as a constant and give it the value 7
    const MY_FAV = 7;

// this will fail silently in Firefox and Chrome (but does not fail in Safari)
//    MY_FAV = 20;

// will print 7
    console.log("my favorite number is: " + MY_FAV);

// trying to redeclare a constant throws an error
    const MY_FAV = 20;

// the name MY_FAV is reserved for constant above, so this will also fail
    var MY_FAV = 20;

// MY_FAV is still 7
    console.log("my favorite number is " + MY_FAV);

// Assigning to A const variable is a syntax error
    const A = 1;
    //A = 2;

// const requires an initializer
    const FOO; // SyntaxError: missing = in const declaration

// const also works on objects
    const MY_OBJECT = {"key": "value"};

// Overwriting the object fails as above (in Firefox and Chrome but not in Safari)
//    MY_OBJECT = {"OTHER_KEY": "value"};

// However, object attributes are not protected,
// so the following statement is executed without problems
    MY_OBJECT.key = "otherValue";
})();

//more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const