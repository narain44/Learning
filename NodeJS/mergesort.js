// Takes in an array that has two sorted subarrays,
//  from [p..q] and [q+1..r], and merges the array
var assert = require("assert");
var merge = function(array, p, q, r) {
    var lowHalf = [];
    var highHalf = [];

    var k = p;
    var i;
    var j;
    for (i = 0; k <= q; i++, k++) {
        lowHalf[i] = array[k];
    }
    for (j = 0; k <= r; j++, k++) {
        highHalf[j] = array[k];
    }

    k = p;
    i = 0;
    j = 0;
    
    // Repeatedly compare the lowest untaken element in
    //  lowHalf with the lowest untaken element in highHalf
    //  and copy the lower of the two back into array

    // Once one of lowHalf and highHalf has been fully copied
    //  back into array, copy the remaining elements from the
    //  other temporary array back into the array
    
    while(i<lowHalf.length && j<highHalf.length){
        if(lowHalf[i]<highHalf[j]){
            array[k]=lowHalf[i];
            i++;
        }else{
            array[k]=highHalf[j];
            j++;
        }
        k++;
    }
    while(i<lowHalf.length){
        array[k]=lowHalf[i];
        k++;
        i++;
    }
    while(j<highHalf.length){
        array[k]=highHalf[j];
        k++;
        j++;
    }

};

// Takes in an array and recursively merge sorts it
var mergeSort = function(array, p, r) {
    if(p<r){
        var q=Math.floor((p+r)/2);
        mergeSort(array,p,q);
        mergeSort(array,q+1,r);
        console.log("Merging ",p,r)
        merge(array,p,q,r);
    }
};

var array = [14, 7, 3, 12, 9, 11, 6, 2];
mergeSort(array, 0, array.length-1);
console.log("Array after sorting: " + array);
assert.deepEqual(array, [2, 3, 6, 7, 9, 11, 12, 14]);


var negativeArray = [14,-5,3,42,32];
mergeSort(negativeArray, 0, negativeArray.length-1);
console.log("Array after sorting: " + negativeArray);
assert.deepEqual(negativeArray, [-5,3,14,32,42]);