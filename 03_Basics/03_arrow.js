const user = {
    username: "Ashish",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} welcome to website.`);
        console.log(this);
    }

}

user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()

console.log(this); // current context is empty in node enviroment

function chai(){
    let username = "Ashish"
    console.log(this);
    console.log(this.username); // undefined not work in functions only work in objects 
}

chai()


const chai2 = function(){
    let username = "Ashish"
    console.log(this.username);
}
chai2()


const chai3 = () => {
    let username = "Ashish"
    console.log(this);// empty 
}

chai3()




const addTwo = (num1, num2) => {
    return num1 + num2
} //curly braceses used means return will be used 

console.log(addTwo(3,4));


// const add_two = (num1, num2) => num1 + num2

const add_two = (num1, num2) => (num1 + num2)

// const add_two = (num1, num2) => {"Ashish"} //undefined we have to use parenthesis 
// const add_two = (num1, num2) => ({"Ashish"})
console.log(add_two(5,9));


const myArray = [2, 5, 7, 8, 6]
// myArray.forEach(function() => {})