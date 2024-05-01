// primitive  :- call back hota h, iska mtlab ye ki ye memory me space nhi banata ye copy karta h

// 7 types : String, number,bigInt,Boolean,undefined,null,Symbol  // kisi chiz ko unique karne ke liye use hota h

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id == anotherId);

// check primitive datatype ka typeOf value

// console.log(typeof(score));
// console.log(typeof(scoreValue));
// console.log(typeof(isLoggedIn));
// console.log(typeof(outsideTemp));
// console.log(typeof(userEmail));
// console.log(typeof(id));



// reference (Non primitive)

// array,object,function

const heros = ["shanktiman","naagraj","doga"];

let myObj = {
 name:"Ram ji",
 age:30
}

const myFun = function(){
console.log("Ram ji");
}

// NOTE:- non primitive datatype(reference) ka typeOf value object hi aata h, aur function ka function object. 

//check typrOf value of non primitive data type

console.log(typeof(heros));
console.log(typeof(myObj));
console.log(typeof(myFun));