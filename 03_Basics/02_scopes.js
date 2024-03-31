// var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20
    // var c = 30

    console.log("Inner: ", a);
}

console.log(a);
// console.log(b);
// console.log(c);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function one(){
    const username = "Ashish"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);  // error 

    two()
}

one()


if(true){
    const username = "Ashish"

    if(username === "Ashish"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


addone(5)

function addone(num){
    return num + 1
}


// addTwo(7) //error accessing before declaration 

const addTwo = function(num){
    return num + 2
}

// hoisting => accessing before declaration gives error if function is contained in a variable 

