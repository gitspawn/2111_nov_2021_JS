// Если не находить, то возвращает пустой массив []

let friends = [
    { id: 1, name: "Vova", age: 20, budget: 2400, isComplete: true },
    { id: 2, name: "Sara", age: 25, budget: 3500, isComplete: false },
    { id: 3, name: "Mike", age: 30, budget: 300, isComplete: true },
    { id: 4, name: "Bob", age: 18, budget: 200, isComplete: false },
    { id: 5, name: "Sara", age: 18, budget: 1750, isComplete: true },
];

// let users = friends.filter((friend) => {
//     return friend.budget < 1000;
// });

// let users = friends.filter(({ budget }) => budget < 1000);
// console.table(users);

// let users = friends.filter((friend) => {
//     return friend.isComplete === true;
// });

// let users = friends.filter((friend) => {
//     return friend.isComplete;
// });

// let users = friends.filter(({ isComplete }) => !isComplete);
// console.table(users);

// ========================
// Все кроме Sara
// let userToFind = "Sara";
// let filtered = friends.filter((elem) => {
//     return elem.name !== userToFind;
// });

// console.table(filtered);

// ========================
let userToFind = "Sara";
let filtered = friends.filter((elem) => {
    return elem.name === userToFind;
});

console.table(filtered);
