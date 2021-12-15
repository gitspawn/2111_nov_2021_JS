// Если не находит, то возвращает undefined

let friends = [
    { id: 1, name: "Vova", age: 20, budget: 2400, isComplete: true },
    { id: 2, name: "Sara", age: 25, budget: 3500, isComplete: false },
    { id: 3, name: "Mike", age: 30, budget: 300, isComplete: true },
    { id: 4, name: "Bob", age: 18, budget: 200, isComplete: false },
    { id: 5, name: "Sara", age: 18, budget: 1750, isComplete: true },
];

let userToFind = "Sara";
let find = friends.find((pizza) => {
    return pizza.name === userToFind;
});

console.table(find);
