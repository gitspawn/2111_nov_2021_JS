// async / await

// async function getName (){
//     await code...
// }
// const getName = async function (){
//     await code...
// }
// const getName = async ()=>{
//     await code...
// }

// class User {
//     sayHello = async ()=>{
//         await code...
//     }

//     async sayHello (){
//         await code...
//     }
// }

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//         return response.json();
//     })
//     .then((json) => console.log(json))
//     .catch((err) => console.log(err));

//=================================================
// async function getUsers() {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");

//     const data = await response.json();
//     console.log("getUsers", data);

//     // await console.log()
// }

// let result = getUsers();

// console.log("result", result);

// ==================================================
// const delay = (time) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(time);
//         }, time);
//     });
// };

// delay(3000)
//     .then((deley) => {
//         console.log(deley);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

async function getUsers() {
    // await delay(2000);
    let res = await fetch("https://jsonplaceholder.typicode.com/users");

    let data = await res.json();
    console.log("data", data);
    // return data;
}

// 1.
// let result = getUsers();
// result
//     .then((data) => console.log(data))
//     .catch((err) => {
//         console.log(err);
//     });

// 2.
// (async () => {
//     await getUsers();
// })();

// ======================
// try/catch

// const user = "Sara";
// console.log(pizza);

// try {
//     const user = "Sara";
//     console.log(pizza);
// } catch (error) {
//     console.log(error);
// }

// const tool = "Axe";
// console.log(tool);

// ====================

// Async functions erros handling

async function getUsers() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");

        let data = await res.json();
        console.log("data", data);
    } catch (error) {
        console.log(error);
    }
}

getUsers();
