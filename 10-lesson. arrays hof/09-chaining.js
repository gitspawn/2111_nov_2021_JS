// let fruits = ["melon", "apples", "pears", "bananes"];

// let res = fruits.join(" ");

// console.log(res);
// console.log(typeof res);

// let str = "abcdefg";
// let res = str.split("").reverse().join("");
// console.log(res);
// console.log(typeof res);

// ============================
let friends = [
    { id: 1, name: "Vova", age: 20, budget: 2400, isComplete: true },
    { id: 2, name: "Sara", age: 25, budget: 3500, isComplete: false },
    { id: 3, name: "Mike", age: 30, budget: 300, isComplete: true },
    { id: 4, name: "Bob", age: 18, budget: 200, isComplete: false },
];

// let chaingArr = friends
//     .filter(({ budget }) => budget > 1000)
//     // .map(({ name, age, budget }) => {
//     //     return {
//     //         info: `Name: ${name}, age: ${age}`,
//     //         budget: budget,
//     //     };
//     // })
//     .map(({ name, budget }) => {
//         return {
//             name,
//             budget,
//         };
//     })
//     .reduce((total, { budget }) => {
//         return total + budget;
//     }, 0);

// let chaingArr = friends
//     .map((friend) => {
//         return friend.budget;
//     })
//     .sort((a, b) => {
//         return a - b;
//     });

// console.log(chaingArr);
