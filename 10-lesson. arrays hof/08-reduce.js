// [].method((elem, idx,arr)=>{ return имененный массив})

/*
[].reduce((acc, elem, idx, arr)=>{
    return 'измененнный аккумулятор'
}, 'начальное значение вккумулятора')
*/

// ''
// ""
// []
// 0,
// 100,
// {},
// true,
// undefined

// let numbers = [10, 20, 30, 40, 50];
// let total = numbers.reduce((acc, elem, idx, arr) => {
//     // console.log(acc, idx);
//     // console.log(acc, elem);
//     // console.log(idx);
//     // console.log(arr);

//     console.log(`${idx}: ${acc}`);
//     return acc + elem;
// }, 0);

// console.log("total", total);

//=========================================

// let friends = [
//     { id: 1, name: "Vova", age: 20, budget: 2400, isComplete: true },
//     { id: 2, name: "Sara", age: 25, budget: 3500, isComplete: false },
//     { id: 3, name: "Mike", age: 30, budget: 300, isComplete: true },
//     { id: 4, name: "Bob", age: 18, budget: 200, isComplete: false },
// ];

// let totalBuget = friends.reduce((total, friend) => {
//     return total + friend.budget;
// }, 0);

// console.log(totalBuget);
// ==========================================

let cart = [
    { id: 1, product: "Apple", price: 1200, qty: 2 },
    { id: 2, product: "Samsung", price: 800, qty: 1 },
    { id: 3, product: "LG", price: 1000, qty: 3 },
    // { id: 4, product: "SONY", price: 450, qty: 4 },
];

// 1200 * 2 =2400
// 800 * 1 = 800
// 1000 * 3 = 3000

// 6200

// let totalSum = cart.reduce((total, item) => {
//     // console.table(item);
//     return total + item.price * item.qty;
// }, 0);

// let totalSum = cart.reduce((total, { price, qty }) => {
//     return total + price * qty;
// }, 0);

// let totalSum = cart.reduce((total, { price, qty }) => total + price * qty, 0);

// console.log(totalSum);

// ================================

// let titles = cart.map((cartItem) => {
//     return cartItem.product;
// });

// let titles = cart.reduce((title, cartItem) => {
//     // console.log(title);
//     title.push(cartItem.product);
//     return title;
// }, []);

// console.log(titles);
