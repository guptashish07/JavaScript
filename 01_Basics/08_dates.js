// Dates

let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());

console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof(myDate));

let myCreatedDate = new Date(2023,0,23, 5, 3)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myCreatedDate2 = new Date("12-01-2022")
console.log(myCreatedDate2.toDateString());
console.log(myCreatedDate2.toLocaleString());


let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));



let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // counting from 0
console.log(newDate.getDay());
console.log(newDate.getDate());

// `${newDate.getDate()} and the time`

newDate.toLocaleString('default',{
    weekday: "long",
    // timeZone: ""
})