
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