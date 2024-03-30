// const tinderUser = new Object()  //singelton object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Rahul"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    userFullName: {
        firstName: "Ashish",
        lastNAme: "Gupta"
        }
}

console.log(regularUser);

console.log(regularUser.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj5 = {5: "e", 6: "f"}


const obj3 ={obj1, obj2}

console.log(obj3);

// const obj4 = Object.assign(obj1, obj2)
const obj4 = Object.assign({}, obj1, obj2, obj5)
console.log(obj4);
console.log(obj1);

// const obj6 = Object.assign(obj1, obj2, obj5)

// console.log(obj6);
// console.log(obj1);

const obj6 = {...obj1, ...obj2}
console.log(obj6);

console.log(obj1);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged')) //false


