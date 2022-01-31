// let horses = [
//     "Mustang",
//     "White",
//     "Mango",
//     "Dark spawn",
//     "Eclipse",
//     "Lily",
//     "England",
// ];

// let randomTime = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// };

// // console.log(randomTime(1, 3));

// let run = (horse) => {
//     return new Promise((resolve, reject) => {
//         let time = randomTime(2000, 4000);
//         setTimeout(() => {
//             resolve({ horse, time });
//         }, time);
//     });
// };

// // run(horses[0]).then((horse) => console.log(horse));

// let promises = horses.map((horse) => run(horse));
// // console.log(promises);

// // ================================
// // Promise.race
// // Promise.all

// // Promise.race(promises).then((horse) => console.table(horse));
// Promise.all(promises).then((horse) => console.table(horse));

// ==================================================================
// Timer with promises

let timer = (delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(delay);
        }, delay);
    });
};

timer(1000).then((time) => {
    console.log(time);
});

timer(3000).then((time) => {
    console.log(time);
});

// async / await
