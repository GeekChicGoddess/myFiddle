/**
 * Created by melodytempleton on 8/7/17.
 */


const findDuplicate = function(ary){

    let actualSum = 0;


    ary.forEach( x => actualSum +=x );


    const lastItem = ary[ary.length -1];


    const shouldBe = lastItem * (lastItem+1) /2;

    return actualSum - shouldBe;

}

const arry = [1,2,3,4,5,6,6,7,8,9];
const duplicate = findDuplicate(arry);
console.log(duplicate);

