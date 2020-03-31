console.log("Palindrome...")
var assert = require("assert");

// Returns the first character of the string str
var firstCharacter = function(str) {
    return str.slice(0, 1);
};

// Returns the last character of a string str
var lastCharacter = function(str) {
    return str.slice(-1);
};

// Returns the string that results from removing the first
//  and last characters from str
var middleCharacters = function(str) {
    return str.slice(1, -1);
};

var isPalindrome = function(str) {
    // base case #1
    if(str.length <= 1){
        return true;
    }else if (firstCharacter(str) !== lastCharacter(str)){
        return false;
    }
    // recursive case
    return isPalindrome(middleCharacters(str));
};

var checkPalindrome = function(str) {
    console.log("Is this word a palindrome? " + str);
    console.log(isPalindrome(str));
};

checkPalindrome("a");
assert.equal(isPalindrome("a"), true);
checkPalindrome("motor");
assert.equal(isPalindrome("motor"), false);
checkPalindrome("rotor");
assert.equal(isPalindrome("rotor"), true);
checkPalindrome("madam");
assert.equal(isPalindrome("madam"), true);
checkPalindrome("mallu");
assert.equal(isPalindrome("mallu"), false);