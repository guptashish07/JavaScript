const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currcal: ${currval}`);
    return acc + currval
}, 0)

// console.log(myTotal);


const myTotal2 = myNums.reduce( (acc, curr) => acc + curr, 0)

// console.log(myTotal2);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 6999
    },
    {
        itemName: "mobile dev course",
        price: 9999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]


const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(totalPrice);