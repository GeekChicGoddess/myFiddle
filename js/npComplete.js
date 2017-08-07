/**
 * Created by melodytempleton on 8/6/17.
 */

function knapsack(weightLimit, items){

    var totalvalue =0;
    var totalweight=0;
    var numberOfItems=0;
    var itemNum=0;

    items.forEach(function (item){
    var tempvalue= 0;
    var tempTotalWeight=0;
    var tempNumberOfItems = 0
        console.log(item.weight);
    while((tempTotalWeight + item.weight) < weightLimit){
        tempTotalWeight += item.weight;
        tempvalue += item.value;
        tempNumberOfItems ++;
    }
    console.log(tempTotalWeight);
    if (tempvalue > totalvalue){
        totalvalue = tempvalue;
        totalweight = tempTotalWeight;
        numberOfItems = tempNumberOfItems;
        itemNum = item.itemNum
    }
    console.log(totalweight);
    console.log(totalvalue);
    console.log(numberOfItems);
    console.log(itemNum);
    });


}



var itemsArray = [

    {itemNum: 1,
     value: 20,
     weight: 10,
    available: 5},
    {itemNum: 2,
     value: 40,
     weight: 5,
    available: 4},
    {itemNum: 3,
     value: 5,
     weight: 20,
     available: 6},
    {itemNum: 4,
     value: 100,
     weight: 75,
     available: 7}


];

knapsack(200, itemsArray);