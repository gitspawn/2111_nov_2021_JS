// Java Script Event Loop - цикл событий

console.log("Start");
console.log("First");

setTimeout(() => {
    console.log("Timeout 0");
}, 0);

setTimeout(() => {
    console.log("Timeout 2000");
}, 2000);

setTimeout(() => {
    console.log("Timeout 5000");
}, 5000);

console.log("Second");
console.log("Last");

// setInterval
// setTimeout

// setInterval(() => {
//     // console.log("Hello");
//     console.log(new Date());
// }, 1000);

// setTimeout(() => {
//     console.log(new Date());
// }, 1000);

// function alertPopUp() {
//     alert("Hello User");
// }

// setTimeout(alertPopUp, 3000);
