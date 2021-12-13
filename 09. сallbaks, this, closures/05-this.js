// this - Контекст вызова
// this - это тот кто вызывает функцию
// Не важно где обьявлена ф-ция, важно кто ее вызывает

// const sayHello = () => {
//     console.log("Say hello");
//     console.log(this);
// };

// function sayHello() {
// console.log("From Sayhello");
// console.log(this);

// let hi = () => {
//     console.log("from Hi");
//     console.log(this);
// };

// hi();
// }

// this.sayHello();
// window.sayHello();
// sayHello();

// let user = {
//     name: "Vova",
//     showThis() {
//         console.log(this);
//         let hi = () => {
//             console.log("from Hi");
//             console.log(this);
//         };

//         hi();
//     },
// };

// user.showThis();

// let admin = {
//     name: "Sara",
//     showThis() {
//         console.log(this);
//     },
// };

// admin.showThis();

// let hi = () => {
//     console.log("from Hi");
//     console.log(this);
// };

// hi();

// =============================================
// let btn = document.querySelector("button");
// console.log(btn);

// btn.addEventListener("click", () => {
//     console.log("Click");
//     console.log(this);
// });

// btn.addEventListener("click", function () {
//     console.log("Click");
//     console.log(this);
// });

// ======================================
// ES5 Clases
// function User(name, age) {
//     this.name = name;
//     this.age = age;

//     this.getThis = function () {
//         console.log(this);
//     };
// }

// let vova = new User("Vova", 25);
// let sara = new User("Sara", 30);

// vova.getThis();
// sara.getThis();

// ==================================
// ES6 CLASES
// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     getThis() {
//         console.log(this);
//     }
// }

// let vova = new User("Vova", 25);
// let sara = new User("Sara", 30);

// vova.getThis();
// sara.getThis();

// ====================================
// CALL, APPLY, BIND - явное указание THIS

// call - рабоатет с примитивами, возвращает и вызывает функцию
// аpply - рабоатет с массивом, возвращает и вызывает функцию
// bind - рабоатет с примитивами, возвращает и НЕ вызывает функцию

// let vova = {
//     name: "Vova",
//     age: 25,
//     status: "Moderator",

//     showInfo() {
//         console.log(this.name, this.age, this.status);
//     },
// };

// let vova = {
//     name: "Vova",
//     age: 25,
//     status: "Moderator",
// };

// let sara = {
//     name: "Sara",
//     age: 30,
//     status: "User",
// };

// let bob = {
//     name: "Bob",
//     age: 35,
//     status: "Admin",
// };

// let info = {
//     showInfo() {
//         console.log(this.name, this.age, this.status);
//     },
// };

// Вызови мне метод showInfo объекта Vova на объекте Sara

// vova.showInfo();
// vova.showInfo.call(sara);
// vova.showInfo.call(bob);

// info.showInfo.call(vova);
// info.showInfo.call(bob);

// ====================================
// let arr = [10, 5, 25, 200, 30];

// let min = Math.min(10, 100, 5, 500);
// let max = Math.max(10, 100, 5, 500, 50);

// let min = Math.min.call(Math, arr);
// let min = Math.min.apply(Math, arr);

// кАРИРОВАНИЕ
// let min = Math.min.bind(Math, ...arr)();j,
// оБЫЧНЫЙЫ ВЫЗОВ
// let min = Math.min.bind(Math, ...arr);
// console.log(min());
// console.log(max);

// =============================

// let vova = {
//     name: "Vova",
//     age: 25,
//     status: "Moderator",
//     showInfo() {
//         console.log(this.name, this.age, this.status);
//     },
// };

// let vova = {
//     name: "Vova",
//     age: 25,
//     status: "Moderator",
// };

// let info = {
//     showInfo() {
//         console.log(this.name, this.age, this.status);
//     },
// };

// vova.showInfo();

// let btn = document.querySelector("button");

// btn.addEventListener("click", vova.showInfo.call(vova));
// btn.addEventListener("click", vova.showInfo.bind(vova));
// btn.addEventListener("mouseover", info.showInfo.bind(vova));

////////// let a = 10;
// function fnA(b) {
//     console.log(a);

//     function fnB() {
//         console.log(b);
//         console.log(a);
//     }
// }

// fnB();
