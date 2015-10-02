//refer to : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function

// Example can be run directly in your JavaScript console

// Create a function that takes two arguments and returns the sum of those arguments
var adder = new Function('a', 'b', 'return a + b');

// Call the function
adder(2, 6);
// > 8
console.info(adder(2, 6));