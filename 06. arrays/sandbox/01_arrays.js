// Arrays

let vova = "Vova";
// let sara = "Sara";
// let bob = "Bob";

// let users = ["Sveta", "Olga", "Ivan", vova, sara, bob, "John"];

// console.log(users);

// let nums = [1, 2, 3, 4, 5, 6];
// console.log(nums);

// let data = [
//     100,
//     false,
//     undefined,
//     vova,
//     ["kyiv", "lvivv", "minsk"],
//     null,
//     "hello",
// ];

// data[0];
// data[1];
// data[3];
// data[4][1];
// data[4][0];

// console.log(data[3]);
// console.log(data[0]);
// console.log(data[4][1]);
// console.log(data[4][0]);
// =================================
// Check is array
// Array.isArray();

// let users = ["Sveta", "Olga", "Ivan", "John"];
// let users = "Sveta";

// console.log(typeof users);
// console.log(Array.isArray(users));
// ==============================
// length
// let users = ["Sveta", "Olga", "Ivan", "John"];
// // console.log(users.length);

// if (users.length) {
//     console.log("Есть");
// }
// =============================
// last index
// let users = ["Sveta", "Olga", "Ivan"];
// let last = users[users.length - 1];

// console.log(last);
//=============================
// find in arr
// [].indexOf  -1 or idx
// [].includes; true /  false
// findIndex

// let users = ["Sveta", "Olga", "Ivan", "John"];

// let result = users.indexOf("Vova"); -1
// let result = users.indexOf("Ivan");
// -1;

// let result = users.includes("Pizza");
// console.log(result);

// if (result !== -1) {
//     console.log("Нашли");
// }

// users.findIndex("Olga"); // 1

// ==============================
// Изменить массив
// push - appent to the end
// pop
// shift
// unshift

// let users = ["Sveta", "Olga", "Ivan", "John"];
// users.push("Pizza", 100, "hello");
// users.pop(); удаляет последний елемент
// users.shift(); удаляет первый элемент елемент
// users.unshift("Melom"); //добавляет в начало

// console.log(users);
// ======================================
// Delete from array
// splice
// let users = ["Sveta", "Olga", "Ivan", "John"];

// delete users[1];
// delete users[2];

// console.log(users);

// let nums = [10, 20, 30, 40, 50];
// let res = nums.splice(); // []
// let res = nums.splice(1); // [ 20, 30, 40, 50]
// let res = nums.splice(2); // [ 30, 40, 50]
// let res = nums.splice(1, 1); // [ 20]
// nums.splice(3, 1);
// nums.splice(2, 2);
// nums.splice(0, 1, "Hello");
// console.log(nums);
// ==========================
// slice
// let nums = [10, 20, 30, 40, 50];
// let res = nums.slice();
// let res = nums.slice(2);
// let res = nums.slice(1);

// console.log(nums.slice(2, 5));
// ========================================
// concat
// let nums = [10, 20, 30, 40, 50];
// let users = ["Sveta", "Olga", "Ivan", "John"];

// let result = nums.concat();
// let result = users.concat();
// let result = users.concat(nums);
// let result = nums.concat(users);
// let result = nums + users;
// console.log(result);
//=======================================
// split.reverse.join

// let str = "abcdefg";
// let res = str.split("").reverse().join("");
// // str[1];

// console.log(res);
// console.log(Array.isArray(res));
// ====================================
// CONVERT TO ARR
// let arr = Array.from("100");
// console.log(arr);

// =====================================

// let uri =
//     "https://www.youtube.com/watch?v=AGBjI0x9VbM&author=vova&title=cartoone";
// let parse = uri.split("?")[1];
// let keys = parse.split("&")[1];
// // let author = keys.split("=")[1];
// console.log(parse);

let uri =
    "https://www.youtube.com/watch?v=AGBjI0x9VbM&author=vova&title=cartoone";
let parse = uri.split("?")[1];
let keys = parse.split("&");
// console.log(keys);

for (let key of keys) {
    let pair = key.split("=");
    // console.log(pair);
    console.log(pair[0]);
    // console.log(pair[1]);
}

// let nums = [10, 20, 30, 40];
// for (let n of nums) {
//     console.log(n);
// }
