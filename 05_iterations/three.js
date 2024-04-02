// for of

// ["", "", ""]
//[{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"
for(const greet of greetings){
    // console.log(`Each char is ${greet}`);
}


//Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('fr', "France")
map.set('IN', "India") // not included in map 

// console.log(map);

for (const key of map) {
    // console.log(key);
}
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':- ', value);
// }   //This method is not iterable for objects

// for (const key in map) {
//     console.log(key);
        
// } //this loop will not happen on map because maps are not iteratable 