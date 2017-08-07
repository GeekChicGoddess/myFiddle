/**
 * Created by melodytempleton on 8/7/17.
 */

var stackin = [3,2,1];
var stackout = [];

function enqueue (number){

     var numberOfPops= stackin.length;

     while (numberOfPops > 0){
            stackout.push((stackin.pop()));
            numberOfPops--;

     }



    stackin.push(number);

     var numberOfReversePops = stackout.length-1;

    while (numberOfReversePops > 0){
        stackin.push((stackout.pop()));
        numberOfReversePops--;

    }




    console.log("stackin " + stackin);
    console.log("stackout " + stackout);

}


function dequeue (){

    var popped=0;

    if(stackout.length > 0) {
        popped =  stackout.pop();
        if (stackin.length > 0){
            stackout.push(stackin.pop());
        }
    }
    console.log("p "+ popped);
    console.log("in "+stackin);
    console.log("out "+stackout);

}

enqueue(4);
enqueue(5);
enqueue(6);
dequeue();
dequeue();
dequeue();
dequeue();
dequeue();
dequeue();
dequeue();

