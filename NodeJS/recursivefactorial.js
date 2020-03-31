console.log("Recursive Factorial...")
var assert = require("assert");

var factorial = function(n) {
	// base case: 
	if(n===0) {
	    return 1;
	}
	// recursive case:
	else {
	    return n*factorial(n-1);
	}
}; 

console.log("The value of 0! is " + factorial(0) + ".");
console.log("The value of 5! is " + factorial(5) + ".");

assert.equal(factorial(0), 1);
assert.equal(factorial(5), 120);