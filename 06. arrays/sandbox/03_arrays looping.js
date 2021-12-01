// Array looping

// let users = ["SvEtA", "OlGA", "jVan", "jOhN"];
// // users[0];
// // users[1];
// // users[2];
// // users[3];
// // let len = users.length;
// // console.log(len);

// for (let i = 0; i < users.length; i++) {
//     // console.log(i);
//     // console.log(users[i]);
//     // console.log(users[i].toUpperCase());
//     // console.log(users[i].toLowerCase());

// }

// let nums = [10, 20, 30, 40, 50];
// let len = nums.length;
// console.log(len);

// for (let i = 0; i < len; i += 1) {
//     // console.log(nums[i]);
//     console.log(nums[i] * 2 + 5);
// }

// =======================================
// let users = ["SvEtA", "OlGA", "iVan", "jOhN"];
// let goodUsers = [];

// for (let i = 0; i < users.length; i++) {
//     let elem = users[i].toLowerCase();
//     let kapital = elem[0].toUpperCase() + elem.slice(1);

//     goodUsers.push(kapital);
//     // console.log(kapital);
// }

// console.log(goodUsers);

// ================================

// for ... of
// let nums = [10, 20, 30, 40, 50];
// // for (let item of nums) {
// //     console.log(item);
// // }

// let users = ["SvEtA", "OlGA", "iVan", "jOhN"];
// let goodUsers = [];
// for (let user of users) {
//     let elem = user.toLowerCase();
//     // console.log(elem);
//     let kapital = elem[0].toUpperCase() + elem.slice(1);
//     goodUsers.push(kapital);
// }

// console.log(goodUsers);
// ========================================
// Find in arr

// let fruits = ["apples", "bananes", "melon", "pear"];
// let fruitToFind = "bananes";

// for (let fruit of fruits) {
//     if (fruit === fruitToFind) {
//         console.log("Нашли");
//     } else {
//         console.log("Не нашли");
//     }
// }

// for (let i = 0; i < fruits.length; i++) {
//     if (fruits[i] === fruitToFind) {
//         console.log("Нашли");
//         break;
//     }
// }

// ===============================
// Array copy
// let fruits = ["apples", "bananes", "melon", "pear"];
// let fruitsCopy = [];

// for (const fruit of fruits) {
//     fruitsCopy.push(fruit);
// }

// console.log(fruitsCopy);

// =====================================
// Remove from array

// let fruits = ["apples", "bananes", "melon", "pear"];
// let fruitToFind = "melon";

// for (let i = 0; i < fruits.length; i++) {
//     if (fruits[i] === fruitToFind) {
//         console.log("Нашли");
//         fruits.splice(i, 1);
//     }
// }

// for (let fruit of fruits) {
//     if (fruit === fruitToFind) {
//         let idx = fruits.indexOf(fruit);
//         fruits.splice(idx, 1);
//         // console.log(idx);
//         // console.log("Нашли");
//     }
// }
// // console.log(fruits);

// ======================================
// Update elemem
// let fruits = ["bananes", "apples", "melon", "pear"];
// let fruitToFind = "apples";
// let fruitNewName = "apples gold";
// for (let fruit of fruits) {
//     if (fruit === fruitToFind) {
//         console.log("Нашли");
//         let idx = fruits.indexOf(fruit);
//         console.log(idx);
//         fruits[idx] = fruitNewName;
//         // fruit = "apples gold";
//     }
// }
// console.log(fruits);

// CRUD
// C - create;
// R - read;
// U - update;
// D - delete;

// =========================================

// let nums = [10, 20, 30, 40, 50, 24, 10];
// let total = 0;

// for (const num of nums) {
//     total += num;
// }
// console.log(total);

// ========================================

// let nums = [10, 20, 30, 100, 40, 50, 24, 10];
// let max = nums[0];

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > max) {
//         max = nums[i];
//     }
// }

// console.log(max);

// let nums = [10, 20, 30, 100, 5, 40, 50, 24, 10];
// let min = nums[0];

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < min) {
//         min = nums[i];
//     }
// }

// console.log(min);

// ======================================

// *
// **
// ***
// ****
// *****

// *****
// ****
// ***
// **
// *

// *****
// *****
// *****
// *****
// *****
