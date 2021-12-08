// let userName = "Vova";

// let greetUser = (name = "Guest") => {
//     console.log(`Hello ${name}`);
// };

// greetUser("Sara");

let getData = function (name = "Guest", status = "Offline", age = 18) {
    console.log(`Hello ${name}, status: ${status}, you are ${age} years`);
};

getData("Admin", "Onn", 25);
