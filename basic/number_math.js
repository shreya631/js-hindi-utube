const score = 400
//console.log(score);  //op= 400

const balance = new Number(100);
//console.log(balance); //op = [Number: 100]

//console.log(balance.toString()) //op = 100

//console.log(typeof(balance.toString()));  //op = string

const fixedValue = balance.toFixed(2);
// console.log(fixedValue);  //op = 100.00

const otherNumber = 23.8966;

// console.log(otherNumber.toPrecision(3)); //op = 23.9

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));  //OP = 1,00,000

// +++++++++++++++++++++++++++++++   Maths   +++++++++++++++++++++++++=

//console.log(Math);
//console.log(Math.abs(-4)); //op = 4  (abs  means absolute ye return karta h nagative value ko possitive me aisa nhi h ki positive ko negative me karega. sirf nagative sign ko positive me convert karne ke liye abs function ko use karte h)
//console.log(Math.round(4.3)); //op = 4
//console.log(Math.round(4.5)); //op = 5
//console.log(Math.ceil(4.4));  //op = 5  (ceil means upper/ya bada to ye badi value return karega)
//console.log(Math.floor(4.9)); //op = 4  (floor means niche to ye kaam wali value ko return karega)

//console.log(Math.min(4,3,5,6,7))  //op = 3  
//console.log(Math.max(4,3,5,6,7))  //op = 7

console.log(Math.random());   // random value return between  0 and 1

console.log(Math.random() * 10)  
console.log((Math.random() * 10)  + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min + 1)) + min);

