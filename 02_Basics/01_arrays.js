//array

const myArray = [1, 2, 3, 4, 5]
console.log(myArray[2]);

// const newArray = new Array(1,3,4,5,8)


const myHeros = ["shaktiman", "naagraj", "Hatim", "Aryamaan"]


//Array methods

myArray.push(6)
myArray.push(7)
console.log(myArray);

myArray.pop()
console.log(myArray);

myArray.unshift(0)
console.log(myArray);
myArray.unshift(9)
console.log(myArray);
myArray.shift()
console.log(myArray);


console.log(myArray.includes(9));  // boolean value

console.log(myArray.indexOf(5));

const newArray = myArray.join()
console.log(myArray);
console.log(newArray);
console.log(typeof newArray);

// slice, splice

console.log("A ", myArray);

const myn1 = myArray.slice(1,3)
console.log(myn1);
console.log("B ", myArray);

const myn2 = myArray.splice(1,3)
console.log(myn2);
console.log("C ", myArray);