let friends = [
    { id: 1, name: "Vova", age: 20, budget: 2400, isComplete: true },
    { id: 2, name: "Sara", age: 25, budget: 3500, isComplete: false },
    { id: 3, name: "Mike", age: 30, budget: 300, isComplete: true },
    { id: 4, name: "Bob", age: 18, budget: 200, isComplete: false },
    { id: 5, name: "Sara", age: 18, budget: 1750, isComplete: true },
];

// Every - должно выполняться для всех!

// let ages = friends.every((friend) => {
//     return friend.age >= 18;
// });

// console.log(ages);

// ==================================================
// Some - должно выполняться хотябы для одного!

// let done = friends.some((friend) => {
//     return friend.isComplete;
// });

// console.log(done);

// [].method((elem, idx, arr)=>{})
// friends.forEach((elem, idx, arr) => {
//     // console.log(elem);
//     // console.log(idx);
//     // console.table(arr);
// });

// friends.forEach((friend, idx, arr) => {
//     // console.log(friend);
//     console.log(friend.name);
//     // console.log(idx);
//     // console.table(arr);
// });
