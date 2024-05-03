const name = "hitesh"
const repoCount = 50

// console.log(name  +  repoCount  +  "value");  // o/p hitesh50value   not use this type of concatinate method

// console.log(`Hello my name is ${name}. and my repoCount is ${repoCount}.`) // op= good to useed for concatinate vale

// ++++++++  string define  ++++++++++

const gameName = new String('hitesh');
const gameName2 = new String('hitesh-hc-com')

// console.log(gameName[0]);   // op = h
// console.log(gameName.__proto__); //op = {}
// console.log(gameName.length); // op= 6
// console.log(gameName.toUpperCase()); // op = HITESH
// console.log(gameName.charAt(2)); //op = t
// console.log(gameName.indexOf('e')) // op = 3



const newString = gameName2.substring(0,4)
console.log(newString);  // op = hite

const anotherString = gameName2.slice(0,4)
// console.log(anotherString);  //op = hite

const newStringOne = "     hitesh    "
// console.log(newStringOne);  //op = "  hitsh   "
// console.log(newStringOne.trim()); //op = hitesh


const url = "https://hitesh.com/hitesh%20choudary"
// console.log(url.replace('%20','-'));  //op = https://hitesh.com/hitesh-choudary

// console.log(url.includes("hitesh"));   //op = true

// console.log(url.includes("shreya"));  //op = false

const splictValue = gameName2.split('-')
console.log(splictValue);