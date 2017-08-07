/**
 * Created by melodytempleton on 8/6/17.
 */

function knapsack(weightLimit, items){

    var totalvalue =0;
    var totalweight=0;
    var numberOfItems=0;
    var arrayOfObjectValues = [];

    items.forEach(function (item){
    var tempvalue= 0;
    var tempTotalWeight=0;
    var tempNumberOfItems = 0
    while((tempTotalWeight + item.weight) < weightLimit){
        tempTotalWeight += item.weight;
        tempvalue += item.value;
        tempNumberOfItems ++;
    }
    arrayOfObjectValues.push({
        itemNum: item.itemNum,
        totalValue: tempvalue
    });
    });

    arrayOfObjectValues.sort(function(a, b){
        return b.totalValue - a.totalValue;
    });



        arrayOfObjectValues.forEach(function(item){
            var itemKeyNum = item.itemNum;
            var tempvalue= 0;
            var tempTotalWeight = 0;
            var tempNumberOfItems = 0;
            var parameterArrayObject = items.filter(function( obj ) {
                return obj.itemNum == itemKeyNum;
            });


            while(((totalweight + parameterArrayObject[0].weight) < weightLimit) && (tempNumberOfItems < parameterArrayObject[0].available)){
                tempTotalWeight += parameterArrayObject[0].weight;
                totalweight += parameterArrayObject[0].weight;
                totalvalue += parameterArrayObject[0].value;
                tempvalue += parameterArrayObject[0].value;
                tempNumberOfItems ++;
                numberOfItems++;

            }
        var tempObj = {
                itemNum: parameterArrayObject[0].itemNum,
                value: tempvalue,
                weight: tempTotalWeight,
                used: tempNumberOfItems
            };
            console.log(tempObj);

        });

console.log("value " + totalvalue);
console.log("weight " + totalweight);
console.log("item count " + numberOfItems);



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