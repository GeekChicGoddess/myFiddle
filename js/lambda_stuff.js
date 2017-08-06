/**
 * Created by melodytempleton on 8/6/17.
 */

// var y = "y";

// console.log((x => x)(y))

// currying - chaining functions with an arity of 1
// λx.λy.t

var lambda = ( x => y => x + y)(2)(3);
console.log(lambda)


// λx.λy.y x lambda with many values
// λy.y[x:=x]
// λy.y
const first = (y=>y);
const second = (x=>first);
console.log(second(first))



// λx.λy.x true
// λx.λy.y false
// if true, return first value, if false return second value
const True = (x => y => x);
const False = (x => y => y);
console.log(True(true)(false))
console.log(False(true)(false))

const If = ( x => y => z => x(y)(z));

console.log(If(True)("TRUE")("FALSE"))
console.log(If(False)("TRUE")("FALSE"))


// λf.x.x   0, f is never called and has no value
// λf.x.f(x) 1, as f is called once


const calculate  = f => f(x => x+ 1)(0);

const zero =  f => x => x;
const one = f => x => f(x);
const two = f => x => f(f(x));
const three = f => x => f(f(f(x)));

let res = calculate(three);
console.log(res)

const add = f => x => y => z => x(y)(f(y)(z));
let result = add(one)(two);
console.log(calculate(result))