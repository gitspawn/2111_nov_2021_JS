// Promisify

// function fetchData(userName) {
//     let req = Math.random() > 0.3;
//     let user = { id: 1, name: userName };
//     let err = "Server error...";

//     return req ? user : err;
// }

// let res = fetchData("Vova");
// console.log(res);

// =================================

// Callback pattern
// function fetchData(userName, onSuccess, onError) {
//     let req = Math.random() > 0.3;

//     if (req) {
//         let user = { id: 1, name: userName };
//         onSuccess(user);
//     } else {
//         let err = "Server error...";
//         onError(err);
//     }
// }

// fetchData("Sara", onSuccess, onError);

// function onSuccess(data) {
//     console.log(data);
// }

// function onError(err) {
//     console.log(err);
// }

// ====================================
// Promisify;

// function fetchData(userName) {
//     return new Promise((resolve, reject) => {
//         let req = Math.random() > 0.3;
//         if (req) {
//             let user = { id: 1, name: userName };
//             resolve(user);
//         } else {
//             let err = "Server error...";
//             reject(err);
//         }
//     });
// }

// fetchData("Sveta")
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
