var assert = require("assert");
// Swaps two items in an array, changing the original array
var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var partition = function(array, p, r) {
    // Compare array[j] with array[r], for j = p, p+1,...r-1
    // maintaining that:
    //  array[p..q-1] are values known to be <= to array[r]
    //  array[q..j-1] are values known to be > array[r]
    //  array[j..r-1] haven't been compared with array[r]
    // If array[j] > array[r], just increment j.
    // If array[j] <= array[r], swap array[j] with array[q],
    //   increment q, and increment j. 
    // Once all elements in array[p..r-1]
    //  have been compared with array[r],
    //  swap array[r] with array[q], and return q.
    var q=p;
    for(var j=p;j<=r-1;j++){
        if(array[j]<=array[r]){
            swap(array,j,q);
            q++;
        }
     
    }
    swap(array,r,q);
    return q;
    
};

var quickSort = function(array, p, r) {
    if(p<r){
     var pivotIndex=partition(array,p,r);
     quickSort(array,p,pivotIndex-1);
     quickSort(array,pivotIndex+1,r);
 }
};

//Test partition logic
var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 4, 6];
var q = partition(array, 0, array.length-1);
console.log("Array after partitioning: " + array);
assert.equal(q, 4);
assert.deepEqual(array, [5, 2, 3, 4, 6, 7, 14, 9, 10, 11, 12]);

var array = [9, 24, 90, 2, 54];
var q = partition(array, 0, array.length-1);
console.log("Array after partitioning: " + array);
assert.equal(q, 3);
assert.deepEqual(array, [9,24,2,54,90]);

//Test the quick sort logic as whole
var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
quickSort(array, 0, array.length-1);
console.log("Array after sorting: " + array);
assert.deepEqual(array, [2,3,5,6,7,9,10,11,12,14]);

array = [9, -7, 5, 11, 12, 2, 14, 3, 10, 6];
quickSort(array, 0, array.length-1);
console.log("Array after sorting: " + array);
assert.deepEqual(array, [-7,2,3,5,6,9,10,11,12,14]);


