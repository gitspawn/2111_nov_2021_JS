// Promises - они следят за состоянием асинхронной операции

// setInterval(() => {}, interval);
// setTimeout(()=>{}, time)

// Снтаксис промиса
// let promise = new Promise((resolve, reject)=>{})

//=================================================================
// let promise = new Promise((resolve, reject) => {
//     // resolve("Vova");
//     // resolve(100);
//     // resolve([10, 20, 30]);
//     // resolve([
//     //     { id: 1, name: "Vova" },
//     //     { id: 2, name: "Sara" },
//     // ]);
//     // resolve({ id: 1, name: "Vova" });

//     reject("Server error");
// });

// console.log(promise);

// =======================================
// let promise = new Promise((resolve, reject) => {
//     let req = Math.random() > 0.3;
//     if (req) {
//         resolve([10, 20, 30]);
//     }
//     reject("Server error...");
// });

// // then: ƒ then()
// // catch: ƒ catch()
// // finally: ƒ finally()

// promise
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

//========================================

// Промис асинхронный. Доступ к данным только внутри промиса.

// console.log("First");

// let user = "";

// let promise = new Promise((resolve, reject) => {
//     let req = Math.random() > 0.3;
//     if (req) {
//         resolve({ id: 1, name: "Vova" });
//     }
//     reject("Server error...");
// });

// promise
//     .then((data) => {
//         // console.log(data);
//         // user = data;
//         showUser(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// // console.log(user);
// console.log("Last");

// function showUser(user) {
//     console.log(user);
// }

// =====================================

// let users = fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// // console.log(users);

// === ========== ==== ===================

// Cheining

// promise
//     .then()
//     .then()
//     .then()
//     .then()
//     .then()
//     .then()
//     .then()
//     .then()
//     .catch()

// let promise = new Promise((resolve, reject) => {
//     resolve(10);
//     // reject("Error");
// });

// promise
//     .then((data) => {
//         console.log(data);
//         return data * 2;
//     })
//     .then((value) => {
//         console.log(value);
//         return value * 3;
//     })
//     .then((num) => {
//         console.log(num);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
