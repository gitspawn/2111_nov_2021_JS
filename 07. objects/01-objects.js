// Objects {
// proerty: value
// key: value
// свайство
// проп
// пропсы
// ключ
// }

// let user = {
//     name: "Vova",
//     age: 20,
//     status: "Admin",
// };

// console.log(user.status);

// let car = {
//     title: "X5",
//     manufacturer: "BMW",
// };

// car.title;
// car.manufacturer;

// console.log(car.title);
// console.log(car.manufacturer);

// ========================
// add to object

// const carTitle = "X5",

const car = {
    title: "X5",
    manufacturer: "BMW",
    colors: ["black", "red", "white"],

    getSpecs() {
        console.log(`${this.title}, ${this.colors}`);
    },

    getColors() {
        this.getSpecs();
    },
};

// car.getSpecs();
// car.getColors();

// Delele object property
// delete car.manufacturer;
// car.manufacturer = null;

// console.log(car);

// car.year = 2020;
// car.tyres = {
//     radius: 18,
//     season: "winter",
// };

// console.log(car);
// car.title = "X6";

// console.log(car.tyres.season);
// console.log(car.title);

// car.colors[1] = "red+";

// console.log(car.colors[1]);
// console.log(car.colors[0]);

// console.log(car);
