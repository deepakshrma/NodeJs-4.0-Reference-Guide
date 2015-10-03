(function () {
    var isDefined = false;
    if (isDefined) {
        function newFunctionHere(name) {
            console.log("Hello " + name);
        }
    }
    newFunctionHere();
})
();

(function () {
    "use strict";
    var isDefined = false;
    if (isDefined) {
        function newFunctionHere(name) {
            console.log("Hello " + name);
        }
    }
    newFunctionHere();
})
();




























//output:
//Hello undefined
//ReferenceError: newFunctionHere is not defined

//More info: https://jslinterrors.com/function-statements-should-not-be-placed-in-blocks
//http://people.mozilla.org/~jorendorff/es6-draft.html#sec-block-level-function-declarations-web-legacy-compatibility-semantics
