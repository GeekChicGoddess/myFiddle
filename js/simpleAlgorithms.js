/**
 * Created by melodytempleton on 8/7/17.
 */

// ========= Bubble sort    Uses O(n^2) time and possible O(n) space also ================

var list = [23, 4, 42, 15,18, 9];

function bubbleSort(list) {

    var doItAgain = false;

    var limit= list.length;

    var defaultNextValue = Number.POSITIVE_INFINITY;

    for( i=0; i<limit; i++){

        var thisValue= list[i];

        var nextValue = i+1 < limit ? list[i+1] : defaultNextValue;

        if (nextValue < thisValue) {

            list[i] = nextValue;
            list[i+1] = thisValue;
            doItAgain = true;
        }
    }
    if(doItAgain)bubbleSort(list);
}
bubbleSort(list);
console.log(list);

// ===================================================MERGE SORT    a Divide and Conquer approach, so at LEAST a O(log n) == this one is O(n log n)

var listToMergeSort = [23, 4, 42, 15,18, 9, 1];

function mergeSort(list) {

    var left = [], right = [];

    if (list.length <= 1) return list;

    var middle = list.length/2;

    var left = list.slice(0, middle);
    var right = list.slice(middle, list.length);

    console.log("mergesortleft "+left);
    console.log("mrgesortright "+right);

    return merge(mergeSort(left), mergeSort(right));

}

function merge(left, right) {

    var result = [];
    console.log("result  B " + result);
    while (left.length || right.length){
        console.log("left "+left);
        console.log("right "+right);
        if(left.length && right.length) {
            if (left[0] < right[0]) {
                result.push(left.shift());
                console.log("1 push left shift " + result);
            }
            else {
                result.push(right.shift());
                console.log("2 push right shift " + result);
            }
        }
        else if (left.length){
            result.push(left.shift());
            console.log("3 push left shift " + result);
        }
        else {
            result.push(right.shift());
            console.log("4 push right shift " + result);
        }
    }
    console.log("result E " + result);
    return result;
};

console.log(mergeSort(listToMergeSort));
