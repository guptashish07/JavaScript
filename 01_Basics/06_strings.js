const name = "Ashish"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('Ashish-gupta')
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));

console.log(gameName.indexOf('h'));


const newString = gameName.substring(0,4)
console.log(newString);


const anotherString = gameName.slice(-12,3)
console.log(anotherString);



const newStringOne = "     Ashish      "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ashish.com/ashish@07gupta"

console.log(url.replace('@20', '-')); // if match not found returns original 
console.log(url.replace('@07', '-'));

console.log(url.includes('ashish'));

console.log(gameName.split('-'));