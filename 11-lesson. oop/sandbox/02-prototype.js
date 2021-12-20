// Прототипы
// Object.create
// Прототипы
// Object.create()

// let arr_1 = [10, 20, 330, 40, 50];
// let arr_2 = ["vova", "sara", "bob", "mike"];
// let arr_3 = [null, false, true, 10, 0, "hello"];

// arr_1.push(1000);
// arr_2.push("sveta");
// arr_3.push(undefined);

// console.log(arr_1);
// console.log(arr_1.pizza());
// console.log(arr_1.toString());
// console.log(arr_1.__proto__);
// console.log(arr_2);
// console.log(arr_3);

// let user = {
//     name: "Vova",
// };

// user.__proto__ = "qwe";
// console.log(user);
// console.log(user.toString());
// console.log(user.pizza());
// console.log(user.__proto__);

// ====================================
// let objA = {
//     a: 1,
//     b: 2,
// };

// console.log(objA);

let objB = {
    x: 10,
    y: 20,
};
// console.log(objB);

let objA = Object.create(objB);
objA.a = 1;
objA.b = 2;
objA.pizza = "Carbonara";

// console.log(objA);
// console.log(objA.a);
// console.log(objA.b);
// console.log(objA.x);
// console.log(objA.y);
// console.log(objA.pizza);

/*
object
__proto__
    __proto__
        __proto__
            __proto__

            ...

*/

// ===========================
// Own property
// let objAPizza = objA.hasOwnProperty("pizza");
// let objAX = objA.hasOwnProperty("x");
// console.log(objAPizza);
// console.log(objAX);

// let arr_1 = [10, 20, 330, 40, 50];
// console.log(arr_1);
