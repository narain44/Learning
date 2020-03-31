console.log("Iterative Factorial...")
var assert = require("assert");

var factorial = function(n) {
    var result = 1;
    for(var i=n;i>1;i--){
        result = result*i;
    }

    return result;
};

console.log("The value of 5! should be " + 5*4*3*2*1);
console.log("The value of 5! is " + factorial(5));
console.log("The value of 0! should be 1");
console.log("The value of 0! is " + factorial(0));

assert.equal(factorial(5), 120);
assert.equal(factorial(0), 1);
assert.equal(factorial(3), 6);
assert.equal(factorial(2), 2);