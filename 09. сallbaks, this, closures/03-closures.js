// Замыкание - это механизм когда функции доступны внешние перменные

// Замыкание(англ.closure) в программировании — функция первого класса, в теле которой присутствуют ссылки на переменные, объявленные вне тела этой функции в окружающем коде и не являющиеся её параметрами.Говоря другим языком, замыкание — функция, которая ссылается на свободные переменные в своей области видимости.

// function calcFunction(n) {
//     return function () {
//         console.log(10 * n);
//     };
// }

// const calc = calcFunction(5);
// calc();
// console.log(calc);

// ==================================

// function increment(n) {
//     return function (i) {
//         return n + i;
//     };
// }

// let first = increment(10);
// // first(5);
// console.log(first(5));
// // console.log(first);

// ========================
// let a = 10;

// function fn(b) {
//     console.log(a);

//     function fnB() {
//         console.log(b);
//         console.log(a);
//     }

//     fnB();
// }

// // fn(200);

// fn(200);
// ============================

// https://www.facebook.com/
// https://www.yahoo.com/
// https://google.com/

// function generatorURI(domainName) {
//     return function (url) {
//         return `https://www.${url}.${domainName}/`;
//     };
// }

// let facebook = generatorURI("com");
// let yahoo = generatorURI("com");

// console.log(facebook("facebook"));
// console.log(yahoo("yahoo"));

// https://www.unian.ua/

// let unian = generatorURI("ua");
// console.log(unian("unian"));

// ================================

// function frameworkNamager() {
//     let frameworks = ["Angular", "Vue"];

//     return {
//         show() {
//             console.log(frameworks);
//         },

//         addFramefork(newFramework) {
//             frameworks.push(newFramework);
//         },
//     };
// }

// let manager = frameworkNamager();

// console.log(manager);
// manager.addFramefork("React");
// manager.show();

// =========================================
// let a = 10;

// if (2 + 2 == 4) {
//     let b = 20;
//     console.log(a);
// }

// console.log(b);
