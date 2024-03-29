const marvel_heros = ["thor", "ironman", "spiderman","Caption America"]
const dc_heros = ["superman", "batman", "flash", "wonder women"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[4]);

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);


const another_aaray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_aaray.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Ashish"));
console.log(Array.from("Ashish"));
console.log(Array.from({name: "Ashish"}));  //intresting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))

// from of isaaray