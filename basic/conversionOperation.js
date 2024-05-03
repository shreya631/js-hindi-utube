let score = 33;
let score2 = "33";
let score3 = "33abc";
let score4 = null;
let score5 = undefined;
let score6 = true;

// let valueInNumber = Number(score3);
let valueInNumber = Number(score6);

// console.log(typeof(score));
// console.log(typeof(score2));
// console.log(typeof (valueInNumber));
// console.log(valueInNumber);


// "33" => 33
//"33abs" => nan
// true => 1, false = 0


// Boolean conversion

// let isLoggedIn = 1
let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);

// 1= true, 0 = false

// "" => false

// "Ram ji" => True


/**************************  Memory  ************************* */

// Stack(Primitives) & Heap (Non primitive)

let myYouTubeName = "hiteshchoudharydotcom"

let anotherName = myYouTubeName;

anotherName = "shreya singh"

console.log(anotherName);  // o/p= shreya singh
console.log(myYouTubeName); //0/p = hiteshchoudharydotcom

let userOne = {
    email: "user@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne
userTwo.email = "shreya@yopmail.com"
console.log(userOne); // o/p = shreya@yopmail.com
console.log(userTwo); // o/p = shreya@yopmail.com