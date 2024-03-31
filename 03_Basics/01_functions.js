
function sayMyName(){
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("S");
    console.log("H");

}

// sayMyName()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

addTwoNumbers(3, 4)
addTwoNumbers(3, "4")

addTwoNumbers(4, "a")
addTwoNumbers(3, null)

const result = addTwoNumbers(3, 4)
console.log("Result: ", result);



function addTwoNumbers2(number1, number2){
    // let result2 = number1 + number2
    // return result2
    return number1 + number2
}

const result2 = addTwoNumbers2(3, 4)
console.log("Result: ", result2);


// function loginUserMessage(userName){
function loginUserMessage(userName = "sam"){
    // if(userName === undefined){
    //     console.log("Please enter a user name");
    //     return
    // }
    if(!userName){
        console.log("Please enter a user name");
        return
    }
    return `${userName} just logged in`
}

console.log(loginUserMessage());
console.log(loginUserMessage("Ashish"));


function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 600));



function calculateCartPrice2(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice2(200, 400, 500, 600));

const user = {
    userName: "Ashish",
    age: 25
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.userName} and age is ${anyObject.age}.`);
}

handleObject(user)

handleObject({
    userName: "Sam",
    age:22
})


const myNewArray = [200, 100, 400, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([11, 50, 14, 125, 112, 12, 121, 251, 40]));