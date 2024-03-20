const accountId = 12029
let accountEmail = "ashish@gmail.com"
var accountPassword = "12345" //Prefer not to use var because of issue in block scope and functional scope

accountCity = "Noida" // we can store a variable without this but it's not a good practice

// accountId = 21

accountEmail = "ashishgupta@gmail.com"

let accountState;
console.log(accountEmail);

accountPassword = "123123"
accountCity = "Delhi"


console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);