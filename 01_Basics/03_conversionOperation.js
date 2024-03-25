let score = "33"
console.log(typeof score);
console.log(typeof (score));//same as above
let valueInNumber = Number(score)

console.log(typeof valueInNumber);

let score2 = "33abc"
let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2);
console.log(valueInNumber2);


 let score3 = null
 console.log(score3);
 let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3);
console.log(valueInNumber3);

let score4 = undefined
 console.log(score4);
 let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4);
console.log(valueInNumber4);

let score5 = true //false
 console.log(score5);
 let valueInNumber5 = Number(score5)
console.log(typeof valueInNumber5);
console.log(valueInNumber5);

let score6 = null
 console.log(score6);
 let valueInNumber6 = Number(score6)
console.log(typeof valueInNumber6);
console.log(valueInNumber6);

let isLoggedIn = 1 // 0

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true;   0=> false
//"" => false
// "ashish" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);