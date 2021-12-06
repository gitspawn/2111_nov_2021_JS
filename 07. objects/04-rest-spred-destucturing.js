// Rest / Spresd
//  ...
//  Rest / Spred
//  ... Rest = ...Spred
// Destructuring

// ===========================
// Spred operator

// let citiesOfUkraine = ["Kyiv", "Odessa", "Lviv", "Donetsk"];
// let citiesOfEurope = ["London", "Paris", "Milan", "Berlin"];

// let cities = [...citiesOfEurope, "New York", ...citiesOfUkraine, "Minsk"];

// console.log(cities === citiesOfUkraine);
// console.log(cities);

// let nums = [10, 20, 5, 100, 40];
// let min = Math.min(...nums);

// console.log(min);

//===========================
// Rest
// let citiesOfUkraine = ["Kyiv", "Odessa", "Lviv", "Donetsk", "Dnipro"];

// // let [AA, BH, BT] = citiesOfUkraine;
// // let [, , BC, ...others] = citiesOfUkraine;
// let [, , BC, ...rest] = citiesOfUkraine;

// // console.log(AA);
// // console.log(BH);
// console.log(BC);
// console.log(rest);

// let a = 100;
// let b = 200;
// [a, b] = [200, 100];

// console.log(a);
// console.log(b);

// =====================================
// Spred for objects

// let dog = {
//     age: 4,
//     name: "Snooppy",
//     color: "black",
// };

// // let cat = {
// //     ...dog,
// // };

// let cat = {
//     ...dog,
//     name: "Tom",
//     age: 2,
//     isVakcinated: true,
// };

// console.log(cat);

// ===========================
// Object Destructuring
// let vova = {
//     name: "Vova",
//     age: 25,
//     adress: {
//         city: "Kyiv",
//         zip: 12345,
//         street: "Rose",
//     },
//     status: "Admin",
// };

// console.log(vova.age);
// console.log(vova.adress.city);

// let {
//     name: userName,
//     status,
//     age,
//     adress: { city },
// } = vova;

// console.log(name);
// console.log(userName);
// console.log(status);
// console.log(adress);
// console.log(city);
