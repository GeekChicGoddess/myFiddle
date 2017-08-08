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
// bubbleSort(list);
// console.log(list);

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

// console.log(mergeSort(listToMergeSort));

// ================================QUICKSORT ===== uses pivot technique  worst case O(n^2) best case O(n log n)

var listToQuickSort = [23, 4, 42, 15,18, 9, 1];

function quicksort (list){
    console.log(list);
    if (list.length < 2) return list;

    var left = [], right = [];

    var pivot = list.length -1;

    var pivotValue = list[pivot];
    console.log("pivot "+ pivotValue);
    // remove pivot from list so we don't compare it
    list = list.slice(0, pivot).concat(list.slice(pivot+1));


    for (var i = 0; i < list.length; i++){
        if (list[i] < pivotValue){
            left.push(list[i])
        }else {
            right.push(list[i]);
        }
    }
    console.log("left "+ left + " right "+right);

    return quicksort(left).concat([pivotValue], quicksort(right));

}

// console.log(quicksort(listToQuickSort));

// ===================SELECTION SORT ============= O(1) - O(n^2) ===============

var listToSelectionSort = [23, 4, 42, 15,18, 9, 1];

function selectionSort(list) {

    for (var i = 0; i < list.length - 1; i++){
        currentMinIndex = i;

        for (var x = currentMinIndex + 1; x < list.length; x++){
            if (list[x] < list[currentMinIndex]){
                currentMinIndex = x;
            }
        }
        if (currentMinIndex != i){
            var oldMinValue = list[i];
            list[i] = list[currentMinIndex];
            list[currentMinIndex] = oldMinValue;
        }
    }
    return list;
}

console.log(selectionSort(listToSelectionSort));