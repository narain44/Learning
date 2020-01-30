console.log("Insertion Sort...")
var assert = require("assert");

var insert = function(array, rightIndex, value) {
    for(var j = rightIndex;
        j >= 0 && array[j] > value;j--) {
        array[j + 1] = array[j];
    }   
    array[j + 1] = value; 
};

var insertionSort = function(array) {
    for( var i=1;i<array.length;i++){ //Imp: Start at index 1
        insert(array,i-1,array[i]);
    }
};

var array = [22, 11, 99, 88, 9, 7, 42];
insertionSort(array);
console.log("Array after sorting:  " + array);
assert.deepEqual(array, [7, 9, 11, 22, 42, 88, 99]);

//Using Negative numbers and Zero in array
var array = [-22, 0, 99, 88, 9, 7, 42];
insertionSort(array);
console.log("Array after sorting:  " + array);
assert.deepEqual(array, [-22, 0,7, 9, 42, 88, 99]);