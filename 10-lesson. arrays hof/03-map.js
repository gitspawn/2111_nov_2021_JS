// let numbers = [10, 20, 30, 40, 50];
// console.log(numbers);

// [].map((elem, idx, arr)=>{})

// let res = numbers.map((num) => {
//     return num + 1;
// });

// let res = numbers.map((num) => {
//     return num;
// });

// [...numbers]

// console.log(res);
// console.log(res === numbers);

//==================================

let friends = [
    { id: 1, name: "Vova", age: 20, budget: 2400, isComplete: true },
    { id: 2, name: "Sara", age: 25, budget: 3500, isComplete: false },
    { id: 3, name: "Mike", age: 30, budget: 300, isComplete: true },
    { id: 4, name: "Bob", age: 18, budget: 200, isComplete: false },
];

// let budgetArr = friends.map((friend) => {
//     return friend.budget;
// });

// let budgetArr = friends.map((friend) => friend.budget);
// let budgetArr = friends.map(({ budget }) => budget);
// let budgetArr = friends.map(({ budget }) => budget);
// console.log(budgetArr);

// let names = friends.map(({ name }) => name);
// console.log(names);

// let bonus = friends.map((friend) => {
//     return friend.budget + friend.budget * 0.1;
// });

// console.log(bonus);

// ==============================
// let bonusForUser = "Sara";
// let friendsArr = friends.map((friend) => {
//     if (friend.name === bonusForUser) {
//         // return friend;
//         return {
//             ...friend,
//             budget: friend.budget + 250,
//             status: "Admin",
//         };
//     }

//     return friend;
// });

// console.table(friendsArr);

let vova = {
    name: "vova",
    age: 25,
};

let sara = {
    ...vova,
    name: "Sara",
};

console.log(sara);
