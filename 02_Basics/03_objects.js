// singleton
// object.create

// object literals

const mySym2 = Symbol("Key2")

const jsUser = {
    name: "Ashish",
    age: 25,
    mySym: "myKey1",
    [mySym2]: "myKey2",
    email: "ashish@google.com",
    location: "Noida",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser.mySym);
console.log(typeof jsUser.mySym);

console.log(jsUser[mySym2]);
console.log(typeof jsUser[mySym2]);
console.log(jsUser);


jsUser.email = "ashish@chatgpt.com"
console.log(jsUser);

// Object.freeze(jsUser)
// jsUser.email = "ashish@microsoft.com"
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello JS user");
}

console.log(jsUser.greeting());

console.log(jsUser);

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(jsUser.greetingTwo());

console.log(jsUser);


