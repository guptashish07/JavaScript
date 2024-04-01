// Immediately Invoked Function Expression (IIFE)


function chai(){
    console.log(`DB CONNECTED`);
}

chai();


(function chai2(){
    console.log(`DB CONNECTED TWO`);
})();


((name) => {
    console.log(`DB CONNECTED THREE ${name}`);
})("Ashish");