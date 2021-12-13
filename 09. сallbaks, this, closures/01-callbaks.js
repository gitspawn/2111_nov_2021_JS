// HOF - Hight order function (функции высшего порядка)
// функция высшего порядка может принимать как параметр другую ф-цию и(или) возвращать другую функцию

// Функция обратного вызова - ее вызыват интерпетатор в нужный момент
// Callback function

// Функция обратного вызова - это функция, которая передается другой функции в качестве аргумента и та, в сыою очередь вызывает переденную функцию

// const myFunc = (a) => {
//     a();
// };

// // Callback

// const sayHello = () => {
//     console.log("Say hello callback function");
// };

// myFunc(sayHello);

// ===========================================
// Claculator;
// let sum = (a, b) => a + b;
// let sub = (a, b) => a - b;
// let mult = (a, b) => a * b;
// let div = (a, b) => a / b;

// console.log(sum(10, 5));

// function calculator(a, b, pizza) {
//     return pizza(a, b);
// }

// let result = calculator(10, 5, sum);
// // result = calculator(5, 5, sum);
// result = calculator(11, 5, sub);
// result = calculator(11, 5, mult);
// result = calculator(11, 5, div);

// console.log(result);

// =============================
// let btn = document.querySelector("button");
// console.log(btn);

// function pizza() {
//     console.log("Click the button!");
// }

// btn.addEventListener("click", pizza);

// btn.addEventListener("click", function () {
//     console.log("Click the button!");
// });

// btn.addEventListener("click", () => {
//     console.log("Click the button!");
// });
