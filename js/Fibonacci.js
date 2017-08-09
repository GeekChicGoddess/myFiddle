/**
 * Created by melodytempleton on 8/8/17.
 */

function basicFibonacci (numberOfFibNums){  // What I came up with

    counter = 0;

    fibonacciArray =[ 1];

    nextNum = 1;

    while (counter < numberOfFibNums-1){

        fibonacciArray.push(nextNum)
        nextNum += fibonacciArray[counter];
        counter++;

    }

    return fibonacciArray;

}

// console.log(basicFibonacci(10));

function recursiveFibonacci (numberOfFibNums){  /// why?   This is bad.

   if (numberOfFibNums < 2) { return numberOfFibNums;}
   else {
       return recursiveFibonacci(numberOfFibNums -2) + recursiveFibonacci(numberOfFibNums - 1)
   }

}

// for(var i = 1; i < 10; i++) {
//
//     console.log(recursiveFibonacci(i));
// }


function betterFibonacci (numberOfFibNums){

    fibonacciArray =[0,1];

    for (i=2; i <= numberOfFibNums; i++){

        fibonacciArray.push(fibonacciArray[i-1] + fibonacciArray[i-2]);
    }

    return fibonacciArray;
}

console.log(betterFibonacci(10));

// just want the nth fib number

function justThefibnthMan(nth){

    var current =0, oneBack=1, twoback=0;

    for (var i = 2; i <= nth; i++){

        current = oneBack + twoback;
        twoback = oneBack;
        oneBack = current;

    }
    return current;
}

console.log(justThefibnthMan(10));