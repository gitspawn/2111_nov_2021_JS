// for...in
// Object.keys
// Object.values
// Object.entries
// Array for...of

// Obj looping
// ==================================
// for...in - only for objects

// let likes = {
//     goot: 150,
//     neutral: 20,
//     bad: 75,
// };

// keys
// for (let like in likes) {
//     console.log(like);
// }

// values
// for (let key in likes) {
//     console.log(likes[key]);
// }

// ===========================
// let users = ["vova", "sara", "bob", "mike"];

// for (let key in users) {
//     console.log(key);
//     // console.log(users[key]);
// }
// ================================

// let users = ["vova", "sara", "bob", "mike"];

// for (let key of users) {
//     console.log(key);
//     // console.log(users[key]);
// }

// =================================

// let likes = {
//     goot: 150,
//     neutral: 20,
//     bad: 74,
// };

// let total = 0;
// for (let key in likes) {
//     total += likes[key];
// }

// console.log(total);

// =================================
// Object.keys, Object.values

// let likes = {
//     goot: 150,
//     neutral: 20,
//     bad: 74,
// };

// let keys = Object.keys(likes);
// let values = Object.values(likes);

// // console.log(keys);
// // console.log(values);

// let total = 0;
// for (let elem of values) {
//     total += elem;
// }

// console.log(total);

// ====================================
// Object.entries() - массив массивов

// let likes = {
//     goot: 150,
//     neutral: 20,
//     bad: 74,
// };

// let entries = Object.entries(likes);
// // console.log(entries);

// for (let elem of entries) {
//     // console.log(elem[1]);
//     console.log(elem[0]);
// }
