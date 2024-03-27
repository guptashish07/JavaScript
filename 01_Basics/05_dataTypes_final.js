// Primitive dataTypes
// 7 types: String, Number, Boolean, null, undefined, Symbol, Bigint

const score = 100
const scoreValue = 10.35
const isLoggedIn = false
const outSideTemprature = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 324578641252428542n



// Reference (Non primitive)
// Array, Objects, Functions

const heros = ["shatiman", "naagraj", "doga"]

let myObj = {
    name: "Ashish",
    age: 26

}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof outSideTemprature);
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof id);


// ************************************************************************************

// Stack (Primitive), Heap(Non-Primitive)

let myYoutubeName = "ashishgupta"

let anotherName = myYoutubeName

anotherName = "ramram"

console.log(myYoutubeName);
console.log(anotherName);

let userOne ={
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "ashish@google.com"

console.log(userOne);
console.log(userTwo);