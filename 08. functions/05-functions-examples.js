let fruits = ["apple", "banana", "pear", "melon"];
let users = ["vova", "sara", "bob", "mike"];
// let numbers = [10, 20, 30, 40];

// for (let i = 0; i < fruits.length; i++) {
//     // console.log(fruits[i].length);
//     console.log(fruits[i].length);
// }

// for (let i = 0; i < users.length; i++) {
//     // console.log(fruits[i].length);
//     console.log(users[i]);
// }

// function arrayIterate(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         // console.log(fruits[i].length);
//         console.log(arr[i]);
//     }
// }

// function arrayIterate(arr) {
//     for (let elem of arr) {
//         console.log(elem);
//     }
// }

// arrayIterate(fruits);
// arrayIterate(users);

// ==============================
// Find in arr

// let findItem = (arr, itemName) => {
//     let newArr = [];

//     for (let el of arr) {
//         newArr.push(el.toLowerCase());
//     }

//     // console.log(newArr);

//     for (let elem of newArr) {
//         if (itemName.toLowerCase() === elem) {
//             return "Нашли";
//         }
//     }

//     return "Не нашли";
// };

// let findItem = (arr, itemName) => {
//     let elem = arr.includes(itemName);
//     // console.log(elem);
//     // return elem;

//     return elem ? "Нашли" : "Не нашли";
// };

// let result = findItem(users, "pizza");
// console.log(result);

//============================================
let numbers = [10, 20, 5, 30, 40];

function findSmall(arrOfNumbers) {
    let min = arrOfNumbers[0];

    for (let i = 0; i < arrOfNumbers.length; i++) {
        if (arrOfNumbers[i] < min) {
            min = arrOfNumbers[i];
        }
    }

    return min;
}

let res = findSmall(numbers);

console.log(res);
